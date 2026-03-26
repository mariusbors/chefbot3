
import { GoogleGenAI, Type } from "@google/genai";
import { Recipe } from "../types";
import { RECIPE_IMAGE_QUERIES, PREDEFINED_RECIPE_DETAILS } from "../constants";
import { recipeStore } from "./recipeStore";

// Lazy initialization holder
let aiInstance: GoogleGenAI | null = null;

const getAiClient = (): GoogleGenAI => {
    if (aiInstance) return aiInstance;
    
    // Strictly retrieve from process.env.API_KEY as injected by Vite
    const key = process.env.API_KEY;
    
    if (!key || key.length < 10) {
        console.warn("[ChefBot] API Key missing. Please check .env file or host configuration.");
        throw new Error("Cheia API Gemini lipsește sau este invalidă. Verifică .env și repornește serverul.");
    }
    
    try {
        aiInstance = new GoogleGenAI({ apiKey: key });
    } catch (e) {
        console.error("Failed to initialize GoogleGenAI:", e);
        throw new Error("Eroare la inițializarea AI. Verifică cheia API.");
    }
    return aiInstance;
};

// --- IN-MEMORY CACHE (Wipes on Refresh) ---
const recipeMemoryCache = new Map<string, Recipe>();

const SUGGESTION_CACHE_PREFIX = "suggestion_cache_v9_";

// Helper for delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- TEXT UTILS ---

const normalize = (str: string): string => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .trim();
};

const isSpecificQuery = (query: string): boolean => {
    return query.trim().split(/\s+/).length > 3;
};

// --- CACHING HELPERS ---
const getCachedSuggestion = (key: string): {title: string, imageUrl: string}[] | null => {
    return null;
};

const setCachedSuggestion = (key: string, data: {title: string, imageUrl: string}[]) => {
    try {
        sessionStorage.setItem(SUGGESTION_CACHE_PREFIX + key, JSON.stringify(data));
    } catch (e) {
        console.warn("Cache write error (quota exceeded?)", e);
    }
};

// --- FALLBACK MECHANISM ---
const getRandomLocalRecipes = (count: number, excludeNames: string[] = []): {title: string, imageUrl: string}[] => {
    const allKeys = Object.keys(PREDEFINED_RECIPE_DETAILS);
    const available = allKeys.filter(k => !excludeNames.some(ex => normalize(ex) === normalize(k)));
    const shuffled = available.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    return selected.map(title => {
        const r = PREDEFINED_RECIPE_DETAILS[title];
        return {
            title: r?.title || title,
            imageUrl: r?.imageUrl || generateRecipeImage(title, 'large')
        };
    });
};

const findLocalRecipesByIngredients = (searchIngredients: string[]): {title: string, imageUrl: string, score: number}[] => {
    const matches: {recipe: Recipe, score: number}[] = [];
    const normalizedInputs = searchIngredients.map(i => normalize(i));

    Object.values(PREDEFINED_RECIPE_DETAILS).forEach(recipe => {
        if (!recipe) return;
        let score = 0;
        if (recipe.ingredients) {
            recipe.ingredients.forEach(ing => {
                const ingName = normalize(ing.name);
                if (normalizedInputs.some(input => ingName.includes(input))) {
                    score += 1;
                }
            });
        }
        const titleNorm = normalize(recipe.title);
        if (normalizedInputs.some(input => titleNorm.includes(input))) {
            score += 0.5;
        }
        if (score > 0) {
            matches.push({ recipe, score });
        }
    });

    matches.sort((a, b) => b.score - a.score);

    return matches.map(m => ({
        title: m.recipe.title,
        imageUrl: m.recipe.imageUrl || generateRecipeImage(m.recipe.title, 'large'),
        score: m.score
    }));
};

async function generateWithRetry(model: string, contents: any, config: any, retries = 1, signal?: AbortSignal) {
  let ai: GoogleGenAI;
  try {
    ai = getAiClient();
  } catch (e: any) {
    console.warn("AI Client not available:", e.message);
    throw e;
  }

  for (let i = 0; i <= retries; i++) {
    if (signal?.aborted) {
        throw new DOMException("Aborted", "AbortError");
    }
    try {
      const response = await ai.models.generateContent({
        model,
        contents,
        config
      });
      if (signal?.aborted) {
          throw new DOMException("Aborted", "AbortError");
      }
      return response;
    } catch (error: any) {
      if (signal?.aborted || error.name === 'AbortError') {
          throw new DOMException("Aborted", "AbortError");
      }
      if (error.message?.includes('429') || error.status === 429 || error.code === 429) {
          console.warn("Quota exceeded (429). Switching to fallback immediately.");
          throw error;
      }
      console.warn(`Attempt ${i + 1} failed:`, error.message);
      if (i === retries) throw error;
      await delay(1500); 
    }
  }
  throw new Error("Max retries reached");
}

const fileToGenerativePart = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const base64Data = base64String.split(',')[1];
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// Internal function to build image URL
const buildBingImageUrl = (query: string, size: 'thumbnail' | 'large' = 'large'): string => {
    const settings = recipeStore.getAppSettings();
    
    const baseUrl = "https://tse2.mm.bing.net/th";
    const negativeModifiers = settings.imageNegativePrompt || ""; 
    const styleModifiers = settings.imageStylePrompt || "";
    
    const fullQuery = `${query} ${styleModifiers} ${negativeModifiers}`.trim().replace(/\s+/g, " ");
    const dims = size === 'thumbnail' ? "&w=400&h=300" : "&w=800&h=600";
    const params = `${dims}&c=7&rs=1`;
    return `${baseUrl}?q=${encodeURIComponent(fullQuery)}${params}`;
};

const cleanJson = (text: string): string => {
  if (!text) return "{}";
  let cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
  const firstOpenBrace = cleaned.indexOf('{');
  const firstOpenBracket = cleaned.indexOf('[');
  const lastCloseBrace = cleaned.lastIndexOf('}');
  const lastCloseBracket = cleaned.lastIndexOf(']');

  let start = -1;
  let end = -1;

  if (firstOpenBrace !== -1 && (firstOpenBracket === -1 || firstOpenBrace < firstOpenBracket)) {
      start = firstOpenBrace;
      end = lastCloseBrace;
  } else if (firstOpenBracket !== -1) {
      start = firstOpenBracket;
      end = lastCloseBracket;
  }

  if (start !== -1 && end !== -1 && end >= start) {
      return cleaned.substring(start, end + 1);
  }

  return cleaned; 
}

const repairJson = (jsonStr: string): string => {
    let repaired = jsonStr.trim();
    const quoteCount = (repaired.match(/"/g) || []).length;
    if (quoteCount % 2 !== 0) {
        repaired += '"'; 
    }
    const stack: string[] = [];
    for (const char of repaired) {
        if (char === '{') stack.push('}');
        else if (char === '[') stack.push(']');
        else if (char === '}' || char === ']') {
            if (stack.length > 0 && stack[stack.length - 1] === char) {
                stack.pop();
            }
        }
    }
    while (stack.length > 0) {
        repaired += stack.pop();
    }
    return repaired;
};

// --- NEW FUNCTION: GENAI IMAGE GENERATION (Nano Banana) ---
export const generateHighQualityAiImage = async (promptText: string): Promise<string | null> => {
    let ai: GoogleGenAI;
    try {
        ai = getAiClient();
    } catch (e) {
        console.error("API Key missing during image generation. Cannot generate AI image.");
        return null;
    }

    try {
        // "Nano banana" model alias
        const model = 'gemini-2.5-flash-image';
        const settings = recipeStore.getAppSettings();
        
        // Use custom style prompt for AI generation too
        const fullPrompt = `${promptText}, ${settings.imageStylePrompt || "professional food photography, 8k resolution, cinematic lighting, photorealistic, appetizing"}, no text, no watermark`;

        const response = await ai.models.generateContent({
            model,
            contents: {
                parts: [{ 
                    text: fullPrompt 
                }]
            }
        });

        if (response.candidates?.[0]?.content?.parts) {
             for (const part of response.candidates[0].content.parts) {
                 if (part.inlineData && part.inlineData.data) {
                     return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                 }
             }
        }
        return null;
    } catch (e) {
        console.error("GenAI Image Gen Error:", e);
        return null;
    }
};

export const generateImageFromPrompt = (prompt: string, size: 'thumbnail' | 'large' = 'large'): string => {
    const url = buildBingImageUrl(prompt, size);
    return `${url}&t=${Date.now()}`;
};

// --- SMART SEARCH QUERY BUILDER ---
// (Keeping existing ingredient map and logic)
const INGREDIENT_MAP: Record<string, string> = {
    // PROTEINS
    "pui": "roasted chicken", "gain": "chicken", "cocos": "rooster", "curcan": "roasted turkey", "rata": "roasted duck", "gasca": "roasted goose",
    "porc": "roast pork", "scaricica": "pork ribs", "costita": "pork ribs", "sunca": "ham", "bacon": "bacon", "carnati": "sausages", "mici": "grilled skinless sausages",
    "vita": "beef steak", "vitel": "veal", "miel": "lamb roast", "oaie": "mutton stew",
    "peste": "grilled fish", "somon": "salmon fillet", "pastrav": "trout fish", "dorada": "sea bream", "cod": "cod fillet", "ton": "tuna steak", "macrou": "mackerel", "crap": "carp fish",
    "creveti": "shrimp", "fructe de mare": "seafood mix", "calamar": "calamari", "midii": "mussels", "scoici": "clams",
    
    // VEGGIES
    "legume": "mixed vegetables", "cartofi": "potatoes", "piure": "mashed potatoes", "cartofi prajiti": "french fries",
    "conopida": "cauliflower", "broccoli": "broccoli", "dovlece": "zucchini", "vinete": "eggplant",
    "ardei": "bell peppers", "rosii": "tomatoes", "spanac": "spinach", "mazare": "green peas", "fasole": "beans",
    "linte": "lentils", "naut": "chickpeas", "ciuperci": "mushrooms", "hribi": "porcini mushrooms", "pleurotus": "oyster mushrooms",
    "varza": "cabbage", "sfecla": "beetroot", "morcov": "carrots", "telina": "celery root", "porumb": "corn", "ceapa": "onions", "usturoi": "garlic",
    
    // CARBS
    "paste": "pasta", "spaghete": "spaghetti", "penne": "penne", "fusilli": "fusilli", "tagliatelle": "tagliatelle",
    "orez": "rice", "risotto": "risotto", "quinoa": "quinoa", "mamaliga": "polenta", "malai": "cornmeal", "cuscus": "couscous", "bulgur": "bulgur",
    "paine": "bread", "lipie": "flatbread", "focaccia": "focaccia",
    
    // DISHES
    "ciorba": "sour soup", "supa": "soup", "bors": "sour soup", "crema": "cream soup",
    "tocanita": "stew", "tocana": "stew", "ghiveci": "vegetable stew", "ostropel": "tomato garlic stew",
    "pilaf": "rice pilaf", "sarmale": "stuffed cabbage rolls", "chiftele": "meatballs", "snitel": "schnitzel",
    "friptura": "roast", "plachie": "fish stew", "saramura": "fish brine", "zacusca": "vegetable spread", "salata": "salad",
    "musaca": "moussaka", "lasagna": "lasagna", "pizza": "pizza", "burger": "burger", "shaorma": "shawarma", "kebab": "kebab",
    
    // DAIRY/EGGS
    "oua": "eggs", "omleta": "omelet", "ochiuri": "fried eggs",
    "branza": "cheese", "cascaval": "yellow cheese", "telemea": "feta cheese", "mozarella": "mozzarella",
    "iaurt": "yogurt", "smantana": "sour cream", "unt": "butter",
    
    // SWEETS
    "prajitura": "cake", "tort": "layer cake", "placinta": "pie", "strudel": "strudel",
    "clatite": "crepes", "gogosi": "donuts", "briose": "muffins", "biscuiti": "cookies", "cornulete": "croissants",
    "chec": "pound cake", "cozonac": "sweet bread", "pasca": "cheesecake",
    "inghetata": "ice cream", "budinca": "pudding", "gris": "semolina pudding", "orez cu lapte": "rice pudding",
    "salata de fructe": "fruit salad", "fructe": "fruit", "ciocolata": "chocolate", "vanilie": "vanilla",
    "tarta": "tart", "ecler": "eclair", "savarina": "savarin cake", "amandina": "chocolate sponge cake",

    // DESCRIPTORS
    "curcubeu": "colorful", "vesel": "fun", "frigarui": "skewers", "pane": "breaded", 
    "gratar": "grilled", "cuptor": "baked", "umplut": "stuffed", "crocant": "crispy", 
    "fiert": "boiled", "prajit": "fried", "sos": "sauce", "picant": "spicy", "dulce": "sweet"
};

const IGNORED_WORDS = [
    "reteta", "de", "cu", "si", "la", "in", "pe", "pentru", "stil", "mod", "bunicii", "mama", "matusa", 
    "delicios", "gustos", "rapid", "simplu", "imposibil", "fantastic", "minune", "magic", "special",
    "taranesc", "taranesca", "traditional", "clasic", "autentic", "original", "proaspat", "verde", 
    "rosu", "alb", "negru", "dulce", "sarat", "acru", "iute", "picant", "aromata", "aromat",
    "floricele", "bucatele", "rondele", "cubulete", "fideluta", "suprema", "nemaipomenit", "nemaipomenita",
    "usoara", "usor", "masa", "pranz", "cina", "mic dejun", "idee", "idei", "nazdravani", "nazdravan"
];

const constructSmartQuery = (title: string, contextTerms: string[] = []): string => {
    const lowerTitle = normalize(title);
    const words = lowerTitle.split(/\s+/);
    const englishTerms: string[] = [];
    const romanianTerms: string[] = [];

    words.forEach(word => {
        if (IGNORED_WORDS.includes(word)) return;
        let found = false;
        for (const [key, val] of Object.entries(INGREDIENT_MAP)) {
             if (word.includes(key) || key.includes(word)) {
                 if (!englishTerms.includes(val)) englishTerms.push(val);
                 found = true;
                 break; 
             }
        }
        if (!found && word.length > 2) romanianTerms.push(word);
    });

    if (contextTerms && contextTerms.length > 0) {
        contextTerms.slice(0, 5).forEach(term => {
            const lowerTerm = normalize(term);
            for (const [key, val] of Object.entries(INGREDIENT_MAP)) {
                if (lowerTerm.includes(key)) {
                    if (!englishTerms.includes(val)) englishTerms.push(val);
                }
            }
        });
    }

    let query = "";
    if (englishTerms.length > 0) {
        query = englishTerms.join(" ");
    } else {
        query = romanianTerms.join(" ") || title;
    }

    return query.trim();
};

export const generateRecipeImage = (recipeName: string, size: 'thumbnail' | 'large' = 'large', contextIngredients: string[] = []): string => {
  const normKey = normalize(recipeName);
  
  // 1. CHECK STORE (Custom/Cloud/Local)
  // FIXED: If we have a stored recipe with ANY image, we use it.
  // We prioritize user-saved content over auto-generated logic.
  const storedRecipe = recipeStore.getRecipe(recipeName);
  if (storedRecipe && storedRecipe.imageUrl) {
      return storedRecipe.imageUrl;
  }

  // 2. CHECK PREDEFINED (Static DB)
  // Only if store didn't have it, or store had it but without image
  const existingRecipe = Object.values(PREDEFINED_RECIPE_DETAILS).find(r => r && r.title && normalize(r.title) === normKey);
  if (existingRecipe && existingRecipe.imageUrl && !existingRecipe.imageUrl.includes('bing.net')) {
      return existingRecipe.imageUrl;
  }

  const lowerName = recipeName.toLowerCase();
  if (lowerName.includes("alba ca zapada")) {
      return buildBingImageUrl("lemon coconut layered cake slice white cream dessert pastry", size);
  }
  if (lowerName.includes("pleurotus")) {
      return buildBingImageUrl("oyster mushroom soup ciorba pleurotus rustic bowl creamy vegetable soup", size);
  }
  if (lowerName.includes("salam de biscuiti")) {
      return buildBingImageUrl("chocolate biscuit roll dessert slice cake", size);
  }

  if (recipeName.split(' ').length < 3) {
      const dictKeys = Object.keys(RECIPE_IMAGE_QUERIES);
      const sortedKeys = dictKeys.sort((a, b) => b.length - a.length);
      let match = sortedKeys.find(k => {
          const kNorm = normalize(k);
          return normKey.includes(kNorm);
      });
      if (match) {
        const baseQuery = RECIPE_IMAGE_QUERIES[match];
        const smartQueryPart = constructSmartQuery(recipeName, contextIngredients); 
        return buildBingImageUrl(`${baseQuery} ${smartQueryPart}`, size);
      }
  }
  
  const smartKeywords = constructSmartQuery(recipeName, contextIngredients);
  return buildBingImageUrl(`${recipeName} ${smartKeywords}`, size);
};

export const expandRecipeWithAI = async (existingRecipe: Recipe, signal?: AbortSignal): Promise<Recipe> => {
  const model = "gemini-2.5-flash";
  const ingredientListString = existingRecipe.ingredients
    .map(i => `- ${i.name} (${i.amount})`)
    .join("\n");

  const prompt = `
    Ești un Chef Executiv expert.
    Rescrie DOAR secțiunea "Pași de preparare" (steps) pentru: "${existingRecipe.title}".
    Ingrediente:
    ${ingredientListString}
    
    Reguli:
    1. Minim 5-6 pași detaliați.
    2. Explică tehnica.
    3. NU adăuga ingrediente noi.
    4. Limba ROMÂNĂ.
  `;

  try {
    const response = await generateWithRetry(model, prompt, {
      responseMimeType: "application/json",
      responseSchema: {
          type: Type.OBJECT,
          properties: {
              steps: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
              }
          }
      },
      maxOutputTokens: 8192 
    }, 1, signal);

    const jsonText = cleanJson(response.text || "");
    let result = JSON.parse(jsonText);
    
    let finalSteps: string[] = [];
    if (Array.isArray(result)) finalSteps = result.map(s => String(s));
    else if (result.steps && Array.isArray(result.steps)) finalSteps = result.steps.map((s: any) => String(s));
    else if (result.pasi && Array.isArray(result.pasi)) finalSteps = result.pasi.map((s: any) => String(s));
    else throw new Error("JSON invalid.");

    return { ...existingRecipe, steps: finalSteps };
  } catch (error: any) {
    console.error("Expand Recipe AI Failed", error);
    throw error;
  }
};

export const fetchRecipeDetails = async (recipeName: string, signal?: AbortSignal, forceFresh: boolean = false): Promise<Recipe> => {
  const inputNorm = normalize(recipeName);
  
  // 1. CHECK CLOUD DB FOR UPDATES (PRIORITY 1)
  // We check Cloud first to ensure we get the latest edited version, even if it exists in predefined.
  if (!forceFresh) {
      try {
          const cloudRecipe = await recipeStore.findCloudRecipe(recipeName);
          if (cloudRecipe) {
              recipeMemoryCache.set(inputNorm, cloudRecipe);
              return cloudRecipe;
          }
      } catch(e) {
          console.warn("Cloud lookup skipped due to error", e);
      }
  }

  // 2. CHECK MEMORY CACHE
  const shouldBypassCache = forceFresh || isSpecificQuery(recipeName);
  if (!shouldBypassCache) {
      if (recipeMemoryCache.has(inputNorm)) {
          return recipeMemoryCache.get(inputNorm)!;
      }
  }
  
  // 3. CHECK LOCAL STORAGE & PREDEFINED (FALLBACK)
  if (!forceFresh) {
      const dbKeys = Object.keys(PREDEFINED_RECIPE_DETAILS);
      const sortedDbKeys = dbKeys.sort((a, b) => b.length - a.length);
      const exactMatchKey = sortedDbKeys.find(key => {
          const kNorm = normalize(key);
          if (kNorm === inputNorm) return true;
          if (!isSpecificQuery(recipeName)) {
             if (kNorm.includes(inputNorm) && inputNorm.length > 3) return true;
             if (inputNorm.includes(kNorm) && kNorm.length > 12) return true;
          }
          return false;
      });
      if (exactMatchKey) {
          const r = PREDEFINED_RECIPE_DETAILS[exactMatchKey];
          if (r) {
              return {
                  ...r,
                  imageUrl: r.imageUrl || generateRecipeImage(exactMatchKey, 'large')
              };
          }
      }
  }

  // 4. GENERATE WITH AI (If not found anywhere)
  const model = "gemini-3-flash-preview";
  const prompt = `
    Ești "ChefBot", un bucătar chef român expert.
    Utilizatorul a căutat: "${recipeName}".
    OBIECTIV: Generează "REȚETA PERFECTĂ DIN PRIMA".
    REGULI CRITICE DE INTERPRETARE:
    1. TREBUIE să returnezi O SINGURĂ rețetă completă.
    2. NU oferi liste de variante. NU pune întrebări.
    3. Dacă termenul este GENERIC sau VAG, interpretează-l în cel mai popular mod culinar.
    4. Toate textele TREBUIE să fie în limba ROMÂNĂ.
    5. Fii decisiv. Utilizatorul vrea să gătească acum.
  `;

  try {
    const response = await generateWithRetry(model, prompt, {
      responseMimeType: "application/json",
      responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            servings: { type: Type.NUMBER },
            prepTime: { type: Type.STRING },
            cookTime: { type: Type.STRING },
            pricePerServing: { type: Type.NUMBER },
            servingSize: { type: Type.STRING },
            ingredients: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        name: { type: Type.STRING },
                        amount: { type: Type.STRING }
                    },
                    required: ["name", "amount"]
                }
            },
            steps: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
            },
            nutrition: {
                type: Type.OBJECT,
                properties: {
                    calories: { type: Type.NUMBER },
                    protein: { type: Type.NUMBER },
                    carbs: { type: Type.NUMBER },
                    fat: { type: Type.NUMBER }
                }
            }
          },
          required: ["title", "ingredients", "steps", "nutrition"]
      },
      maxOutputTokens: 8192
    }, 1, signal);

    const jsonText = cleanJson(response.text || "");
    let recipe: Recipe;
    try {
        recipe = JSON.parse(jsonText);
    } catch (parseError) {
        try {
            const repairedText = repairJson(jsonText);
            recipe = JSON.parse(repairedText);
        } catch(repairError) {
             throw new Error("Invalid JSON received from AI");
        }
    }
    
    if (!recipe.title) recipe.title = recipeName;
    if (!recipe.ingredients) recipe.ingredients = [];
    if (!recipe.steps) recipe.steps = ["Instrucțiunile sunt generate..."];
    
    const ingredientNames = recipe.ingredients.map(i => i.name);
    // Use generated title for image to be specific
    recipe.imageUrl = generateRecipeImage(recipe.title, 'large', ingredientNames);

    // 5. SAVE TO CLOUD (Auto-Publish for Consistency)
    // We save it under the normalized search term OR normalized title to ensure next user finds it.
    // We use the search term as key to ensure a direct hit for "Kunefe" next time.
    if (!forceFresh) {
         // Fire and forget save to not block UI
         recipeStore.publishRecipeToCloud(recipeName, recipe).catch(err => console.warn("Auto-publish failed", err));
    }

    recipeMemoryCache.set(inputNorm, recipe);
    return recipe;

  } catch (error: any) {
    if (error.name === 'AbortError') throw error;
    console.error("AI Failed", error);
    return {
        title: recipeName,
        servings: 2,
        prepTime: "-",
        cookTime: "-",
        ingredients: [],
        steps: ["Ne pare rău, a apărut o eroare la generarea rețetei. Vă rugăm încercați din nou."],
        nutrition: { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0 },
        imageUrl: generateRecipeImage(recipeName, 'large')
    };
  }
};

export const identifyIngredientsFromImage = async (imageFile: File, signal?: AbortSignal): Promise<string[]> => {
  const model = "gemini-2.5-flash-image";
  const base64Data = await fileToGenerativePart(imageFile);
  const prompt = "Identifică 5 ingrediente principale din imagine. Răspunde în limba ROMÂNĂ.";

  try {
    const response = await generateWithRetry(model, {
      parts: [{ inlineData: { mimeType: imageFile.type, data: base64Data } }, { text: prompt }]
    }, {
      responseMimeType: "application/json",
      responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
      },
      maxOutputTokens: 500
    }, 1, signal);
    
    const text = cleanJson(response.text || "[]");
    return JSON.parse(text);
  } catch (error: any) {
    if (error.name === 'AbortError') throw error;
    console.error("Image ID Failed", error);
    return ["Ingrediente neidentificate"]; 
  }
};

const parseListResponse = (text: string): string[] => {
    try {
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) return parsed;
        if (parsed.recipes && Array.isArray(parsed.recipes)) return parsed.recipes;
        if (parsed.suggestions && Array.isArray(parsed.suggestions)) return parsed.suggestions;
        return [];
    } catch (e) {
        console.error("Failed to parse list response", e);
        return [];
    }
};

export const suggestRecipesByIngredients = async (
    ingredients: string[], 
    count: number = 8, 
    signal?: AbortSignal, 
    excludeNames: string[] = [], 
    forceFresh: boolean = false
): Promise<{title: string, imageUrl: string}[]> => {
    const validIngredients = ingredients.map(i => i.trim()).filter(i => i.length >= 2);
    
    if (validIngredients.length === 0) {
        return getRandomLocalRecipes(count, excludeNames);
    }

    const localMatches = findLocalRecipesByIngredients(validIngredients);
    const highlyRelevantLocalMatches = localMatches
        .filter(m => {
            if (excludeNames.some(ex => normalize(ex) === normalize(m.title))) return false;
            return m.score >= validIngredients.length * 0.7; 
        })
        .map(m => ({ title: m.title, imageUrl: m.imageUrl }));
    
    let finalResults = [...highlyRelevantLocalMatches];

    if (!forceFresh && finalResults.length >= count) {
        return finalResults.slice(0, count);
    }
    
    const remainingCount = count - finalResults.length;
    const queryKey = validIngredients.join(' ');
    
    if (!forceFresh && excludeNames.length === 0) {
        const cachedResults = await recipeStore.getGlobalSearch(queryKey);
        if (cachedResults) {
            const combined = [...finalResults];
            cachedResults.forEach(cr => {
                if (!combined.some(r => normalize(r.title) === normalize(cr.title))) {
                    combined.push(cr);
                }
            });
            return combined;
        }
    }
    
    const model = "gemini-2.5-flash";
    const existingTitlesSet = new Set<string>();
    excludeNames.forEach(n => existingTitlesSet.add(normalize(n)));
    finalResults.forEach(r => existingTitlesSet.add(normalize(r.title)));

    let prompt = `Ești un chef expert. Utilizatorul are aceste ingrediente: ${validIngredients.join(", ")}.
    Sarcina: Generează o listă de ${remainingCount} nume de rețete culinare care CONȚIN OBLIGATORIU ingredientele specificate.
    REGULI CRITICE:
    1. Răspunde DOAR în limba ROMÂNĂ.
    2. Rețetele TREBUIE să combine ingredientele listate.
    Random Seed: ${Date.now()}`;
    
    if (existingTitlesSet.size > 0) {
        prompt += `\n\nEXCLUDE OBLIGATORIU aceste rețete: ${Array.from(existingTitlesSet).join(', ')}. Găsește ceva DIFERIT!`;
    }
  
    try {
      const response = await generateWithRetry(model, prompt, { 
          responseMimeType: "application/json",
          responseSchema: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
          },
          maxOutputTokens: 2000
      }, 1, signal);
      
      const text = cleanJson(response.text || "[]");
      const titles = parseListResponse(text);
      
      const aiResults: {title: string, imageUrl: string}[] = [];
      
      titles.forEach(title => {
          const normTitle = normalize(title);
          const predefined = Object.values(PREDEFINED_RECIPE_DETAILS).find(r => r && r.title && (normalize(r.title) === normTitle || normalize(r.title).includes(normTitle)));
          
          const finalTitle = predefined ? predefined.title : title;
          const finalNorm = normalize(finalTitle);

          if (existingTitlesSet.has(finalNorm)) return; 
          existingTitlesSet.add(finalNorm);

          aiResults.push({
              title: finalTitle,
              imageUrl: (predefined && predefined.imageUrl && !predefined.imageUrl.includes('bing.net')) 
                        ? predefined.imageUrl 
                        : generateRecipeImage(title, 'large', validIngredients)
          });
      });
      
      finalResults = [...finalResults, ...aiResults];
      if (finalResults.length > 0 && excludeNames.length === 0) {
          recipeStore.saveGlobalSearch(queryKey, finalResults);
      }
      return finalResults;

    } catch (error: any) {
      if (error.name === 'AbortError') throw error;
      if (excludeNames.length === 0) {
          const cachedResults = await recipeStore.getGlobalSearch(queryKey);
          if (cachedResults) return cachedResults;
      }
      return highlyRelevantLocalMatches;
    }
};

export const suggestRecipesByPrompt = async (
    promptText: string, 
    count: number = 8, 
    signal?: AbortSignal, 
    excludeNames: string[] = [],
    strictMode: boolean = false,
    forceFresh: boolean = false
): Promise<{title: string, imageUrl: string}[]> => {
  const cleanPrompt = promptText ? promptText.trim() : "";
  if (cleanPrompt.length < 3) return getRandomLocalRecipes(count, excludeNames);

  const isLoadMore = excludeNames.length > 0;
  let finalResults: {title: string, imageUrl: string}[] = [];
  const foundTitlesSet = new Set<string>();
  excludeNames.forEach(n => foundTitlesSet.add(normalize(n)));

  // IMPORTANT: In strict mode (categories/AI requests), we SKIP the initial local fuzzy search to avoid bad matches
  if (!isLoadMore && !strictMode && !isSpecificQuery(cleanPrompt) && !forceFresh) {
      const localMatches = recipeStore.searchRecipes(cleanPrompt);
      localMatches.forEach(r => {
          const norm = normalize(r.title);
          if (!foundTitlesSet.has(norm) && finalResults.length < count) {
              finalResults.push({
                  title: r.title,
                  imageUrl: r.imageUrl || generateRecipeImage(r.title, 'large')
              });
              foundTitlesSet.add(norm);
          }
      });
  }

  const remainingCount = count - finalResults.length;
  if (remainingCount <= 0) return finalResults;

  // --- HARD CONSTRAINTS INJECTION ---
  let contextInstructions = "";
  const lowerPrompt = cleanPrompt.toLowerCase();

  // Fix for "Post" returning meat
  if (lowerPrompt.includes("post") || lowerPrompt.includes("vegan")) {
      contextInstructions += " EXCLUSIV VEGAN/DE POST. INTERZIS: CARNE, OUA, LACTATE, BRANZA, PESTE, UNT. ";
  }
  // Fix for "Copii" returning heavy food
  if (lowerPrompt.includes("copii") || lowerPrompt.includes("bebe") || lowerPrompt.includes("micuti")) {
       contextInstructions += " REȚETE PENTRU COPII: FARA PIMENT, FARA ALCOOL, FARA PRAJELI GRELE, USOR DE DIGERAT, ATRACTIVE VIZUAL. ";
  }

  const model = "gemini-2.5-flash";
  const settings = recipeStore.getAppSettings();
  
  // Use user-defined prompt logic from CMS
  const baseInstruction = settings.recipeSuggestionPrompt || "Ești un chef expert și creativ.";
  
  let prompt = `${baseInstruction}

  SARCINĂ: Sugerează ${remainingCount} nume de rețete culinare DISTINCTE și VARIATE pentru: "${cleanPrompt}".
  
  CONTEXT SUPLIMENTAR (dacă există): ${contextInstructions}
  
  Random Seed: ${Date.now()}`;

  if (foundTitlesSet.size > 0) {
      prompt += `\n\nCRITIC: EXCLUDE COMPLET și OBLIGATORIU aceste rețete: ${Array.from(foundTitlesSet).join(', ')}.`;
  }

  try {
    // Only check global cache if we are NOT forcing fresh results
    if (!isLoadMore && !forceFresh) {
        const cachedResults = await recipeStore.getGlobalSearch(cleanPrompt);
        if (cachedResults) return cachedResults;
    }

    const response = await generateWithRetry(model, prompt, { 
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
        },
        maxOutputTokens: 2000
    }, 1, signal);
    
    const text = cleanJson(response.text || "[]");
    const titles = parseListResponse(text);

    if (titles.length === 0 && finalResults.length === 0) throw new Error("Empty AI response");

    const aiResults: {title: string, imageUrl: string}[] = [];
    titles.forEach(title => {
          const normTitle = normalize(title);
          const predefined = Object.values(PREDEFINED_RECIPE_DETAILS).find(r => r && r.title && (normalize(r.title) === normTitle || normalize(r.title).includes(normTitle)));
          
          const finalTitle = predefined ? predefined.title : title;
          const finalNorm = normalize(finalTitle);

          if (foundTitlesSet.has(finalNorm)) return; 
          foundTitlesSet.add(finalNorm);

          aiResults.push({
              title: finalTitle,
              imageUrl: (predefined && predefined.imageUrl && !predefined.imageUrl.includes('bing.net')) 
                        ? predefined.imageUrl 
                        : generateRecipeImage(title, 'large', [cleanPrompt])
          });
    });
    
    const combinedResults = [...finalResults, ...aiResults];
    // Don't save to cache if we forced a fresh result, as it might be specific to this user's current moment
    if (!isSpecificQuery(cleanPrompt) && !isLoadMore && !forceFresh) {
        recipeStore.saveGlobalSearch(cleanPrompt, combinedResults);
    }
    return combinedResults;
    
  } catch (error: any) {
    if (error.name === 'AbortError') throw error;
    
    // FALLBACK LOGIC FIX:
    // If strictMode is ON, we absolutely DO NOT want random recipes.
    // We try a fallback search, and if that fails, we return empty list (better than wrong list).
    if (strictMode) {
        console.warn("AI failed in strict mode. Attempting fallback precise search.");
        const fallbackSearch = recipeStore.searchRecipes(cleanPrompt);
        const strictFallback = fallbackSearch
            .filter(r => {
                 // Double check fallback matches constraints broadly
                 if (contextInstructions.includes("VEGAN") && (r.ingredients.some(i => i.name.includes('carne') || i.name.includes('ou')))) return false;
                 return true;
            })
            .slice(0, count)
            .map(r => ({
                title: r.title,
                imageUrl: r.imageUrl || generateRecipeImage(r.title, 'large')
            }));
         
         if (strictFallback.length > 0) return strictFallback;
         // Return current valid results if any, else empty. Do NOT return Random.
         return finalResults; 
    }

    if (!isLoadMore && !forceFresh) {
        const cachedResults = await recipeStore.getGlobalSearch(cleanPrompt);
        if (cachedResults) return cachedResults;
    }
    if (finalResults.length > 0) return finalResults;
    return getRandomLocalRecipes(count, excludeNames);
  }
};
