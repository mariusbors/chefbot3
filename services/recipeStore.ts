
import { Recipe, CategoryData, Partner, User, CuisineData, ShoppingItem, MealPlanItem, AppSettings } from '../types';
import { CATEGORIES as STATIC_CATEGORIES, CUISINES as STATIC_CUISINES, PARTNERS as STATIC_PARTNERS } from '../constants';
import { PREDEFINED_RECIPE_DETAILS } from '../data/recipeDatabase';
import { db, storage } from './firebase'; // Import Storage
import { collection, getDocs, doc, setDoc, deleteDoc, updateDoc, increment, getDoc, query, orderBy, limit, where, Timestamp, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Storage functions

// --- VERSION CONTROL SYSTEM ---
// v27: PROACTIVE STORAGE PROTECTION. No Base64 images in localStorage ever.
const CURRENT_DB_VERSION = 27; 

// --- KEY STRATEGY ---
const getKey = (base: string) => `chefbot_${base}_v${CURRENT_DB_VERSION}`;

// 2. Stable Keys (Main Data - Never Change these names to preserve user preferences)
const STABLE_FAVORITES_KEY = 'chefbot_user_favorites_stable';
const STABLE_SHOPPING_KEY = 'chefbot_user_shopping_stable';
const STABLE_MEALPLAN_KEY = 'chefbot_user_mealplan_stable';
const STABLE_USERS_KEY = 'chefbot_user_accounts_stable'; 
const STABLE_SETTINGS_KEY = 'chefbot_app_settings_stable'; // New Key for Settings
const DEVICE_ID_KEY = 'chefbot_device_id_persistent';

// 3. MIRROR BACKUP KEYS (Redundant Safety Layer)
const MIRROR_FAVORITES_KEY = 'chefbot_user_favorites_MIRROR_BACKUP';
const MIRROR_SHOPPING_KEY = 'chefbot_user_shopping_MIRROR_BACKUP';
const MIRROR_MEALPLAN_KEY = 'chefbot_user_mealplan_MIRROR_BACKUP';

const LS_RECIPES_KEY = getKey('custom_recipes'); 
const LS_CATEGORIES_KEY = getKey('custom_categories');
const LS_CUISINES_KEY = getKey('custom_cuisines');
const LS_PARTNERS_KEY = getKey('partners'); 

export interface DailyAnalytics {
    date: string;
    visits: number;
    uniques: number;
}

// NEW: Interface for Search Tracking
export interface SearchLog {
    id?: string;
    term: string;
    type: 'ai' | 'direct' | 'ingredient';
    timestamp: number;
    userId?: string;
}

// Default Settings
const DEFAULT_SETTINGS: AppSettings = {
    imageStylePrompt: "professional gourmet food photography close up macro shot plated delicious 4k photorealistic highly detailed cinematic lighting",
    imageNegativePrompt: "-packaging -container -plastic -cup -box -can -bottle -jar -supermarket -shelf -raw -uncooked -ingredient -watermark -text -overlay -logo -stock -alamy -getty -shutterstock -depositphotos -sign -label -caption -heading -collage -chart -word -font -writing -graphic -vector -cartoon -anime -drawing -illustration -sketch -disney -character -face -person -human -rainbow -toy -clipart",
    recipeSuggestionPrompt: "Ești un Chef Expert culinar. Scopul tău este să sugerezi cele mai bune rețete pentru utilizator.\nREGULI STRICTE:\n1. Răspunde DOAR în limba ROMÂNĂ.\n2. Oferă titluri de rețete clare, atractive și corecte culinar.\n3. Evită rețetele banale dacă cererea nu e specifică. Fii creativ!\n4. Dacă cererea este pentru copii, evită picant, alcool sau prăjeli grele.\n5. Dacă cererea este de post/vegan, respectă cu strictețe excluderea produselor animale."
};

// --- HELPER: Safe JSON Stringify (Prevents Circular Structure Errors) ---
const safeStringify = (obj: any): string => {
    const seen = new WeakSet();
    return JSON.stringify(obj, (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return; // Duplicate reference found, discard key
            }
            seen.add(value);
        }
        return value;
    });
};

// --- HELPER: Image Compression ---
const compressImage = (base64Str: string): Promise<string> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = base64Str;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            // Aggressive compression: Max 600px width to save space
            const MAX_WIDTH = 600; 
            let width = img.width;
            let height = img.height;

            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(img, 0, 0, width, height);
                // Compress to JPEG at 60% quality (drastically reduces size compared to PNG)
                resolve(canvas.toDataURL('image/jpeg', 0.6)); 
            } else {
                resolve(base64Str); // Fallback
            }
        };
        img.onerror = () => {
            console.warn("Image compression failed, using original.");
            resolve(base64Str);
        };
    });
};

class RecipeStore {
  private recipes: Record<string, Recipe>;
  private lookupIndex: Map<string, string>; 
  private categoryIndex: Map<string, string>;
  private categories: CategoryData[];
  private cuisines: CuisineData[];
  private partners: Partner[];
  private users: User[];
  private favorites: Map<string, string>; 
  private shoppingList: ShoppingItem[];
  private mealPlan: MealPlanItem[];
  private settings: AppSettings;
  private customKeys: Set<string>;
  private listeners: Function[] = []; 

  constructor() {
    this.recipes = {};
    this.lookupIndex = new Map();
    this.categoryIndex = new Map();
    this.categories = [];
    this.cuisines = [];
    this.partners = [];
    this.users = [];
    this.favorites = new Map();
    this.shoppingList = [];
    this.mealPlan = [];
    this.settings = { ...DEFAULT_SETTINGS };
    this.customKeys = new Set();

    // Load static data first (Hardcoded base)
    try {
        if (PREDEFINED_RECIPE_DETAILS) {
            // Defensive copy of predefined recipes
            Object.entries(PREDEFINED_RECIPE_DETAILS).forEach(([key, recipe]) => {
                const r = recipe as Recipe;
                if (r && r.title) {
                    this.recipes[key] = r;
                }
            });
        }
        if (STATIC_CATEGORIES) this.categories = [...STATIC_CATEGORIES];
        if (STATIC_CUISINES) this.cuisines = [...STATIC_CUISINES];
        if (STATIC_PARTNERS) this.partners = [...STATIC_PARTNERS];
    } catch (e) {
        console.error("Critical: Failed to load static constants", e);
    }

    this.init();
  }

  private init() {
      try {
          this.migrateCustomRecipes();
          this.performDataRescue(); 
          this.loadFromStorage();
          this.loadFromCloud();
          this.ensureDefaultUser();
          this.deduplicateRecipes();
          this.rebuildIndex(); 
      } catch (e) {
          console.error("CRITICAL: Error initializing RecipeStore.", e);
      }
  }

  // --- NEW: UPLOAD IMAGE TO FIREBASE STORAGE ---
  public async uploadImage(file: File): Promise<string> {
      if (!storage) throw new Error("Firebase Storage nu este conectat/configurat.");
      
      try {
          // Create a unique filename
          const filename = `recipes/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
          const storageRef = ref(storage, filename);
          
          // Upload
          const snapshot = await uploadBytes(storageRef, file);
          
          // Get URL
          const downloadURL = await getDownloadURL(snapshot.ref);
          return downloadURL;
      } catch (e: any) {
          console.error("Upload failed", e);
          throw new Error("Eroare la încărcarea imaginii: " + e.message);
      }
  }

  // --- NEW: UPLOAD BASE64 TO FIREBASE STORAGE ---
  public async uploadBase64Image(base64Data: string): Promise<string> {
      if (!storage) throw new Error("Firebase Storage nu este conectat. Nu pot salva imaginea mare.");
      
      try {
          // 1. Extract content type and base64 payload
          const arr = base64Data.split(',');
          const mimeMatch = arr[0].match(/:(.*?);/);
          const mime = mimeMatch ? mimeMatch[1] : 'image/jpeg';
          const bstr = atob(arr[1]);
          let n = bstr.length;
          const u8arr = new Uint8Array(n);
          
          while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
          }
          
          // 2. Create Blob
          const blob = new Blob([u8arr], { type: mime });
          
          // 3. Upload to Storage
          const filename = `ai_generated/${Date.now()}_gen.jpg`;
          const storageRef = ref(storage, filename);
          
          const snapshot = await uploadBytes(storageRef, blob);
          const downloadUrl = await getDownloadURL(snapshot.ref);
          
          return downloadUrl; // Return the short URL, not the huge base64 string
      } catch (e: any) {
          console.error("Base64 upload failed", e);
          throw new Error("Eroare la salvarea imaginii AI în Cloud: " + e.message);
      }
  }

  // --- MISSING METHODS IMPLEMENTATION ---

  public normalize(str: string): string {
      if (!str || typeof str !== 'string') return "";
      return str.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // Remove accents
          .trim();
  }

  public getAllRecipes(): Record<string, Recipe> {
      return this.recipes;
  }

  public getRecipe(keyOrTitle: string): Recipe | undefined {
      if (!keyOrTitle) return undefined;
      // 1. Check direct key match
      if (this.recipes[keyOrTitle]) return this.recipes[keyOrTitle];
      
      // 2. Check via lookup index (normalized title)
      const normKey = this.normalize(keyOrTitle);
      const exactTitle = this.lookupIndex.get(normKey);
      if (exactTitle && this.recipes[exactTitle]) return this.recipes[exactTitle];

      // 3. Fallback scan
      const foundKey = Object.keys(this.recipes).find(k => this.normalize(k) === normKey);
      if (foundKey) return this.recipes[foundKey];

      return undefined;
  }

  public searchRecipes(queryStr: string): Recipe[] {
      const normQuery = this.normalize(queryStr);
      if (!normQuery) return [];

      const results: { recipe: Recipe, score: number }[] = [];

      Object.values(this.recipes).forEach(recipe => {
          if (!recipe || !recipe.title) return; // Add safety check
          const normTitle = this.normalize(recipe.title);
          let score = 0;

          if (normTitle === normQuery) score += 100;
          else if (normTitle.startsWith(normQuery)) score += 50;
          else if (normTitle.includes(normQuery)) score += 20;

          if (recipe.ingredients) {
             const hasIngredient = recipe.ingredients.some(ing => ing.name && this.normalize(ing.name).includes(normQuery));
             if (hasIngredient) score += 10;
          }

          if (score > 0) {
              results.push({ recipe, score });
          }
      });

      return results.sort((a, b) => b.score - a.score).map(r => r.recipe);
  }

  public getRecipeCategory(title: string): string {
      const normTitle = this.normalize(title);
      return this.categoryIndex.get(normTitle) || 'Altele';
  }
  
  // --- AGGRESSIVE DEDUPLICATION LOGIC ---
  public deduplicateRecipes(forceCleanStorage: boolean = false) {
      const titleMap = new Map<string, string>(); // NormTitle -> BestRecipeKey
      const keysToDelete: string[] = [];

      Object.keys(this.recipes).forEach(key => {
          const recipe = this.recipes[key];
          if (!recipe || !recipe.title) return;
          
          const normTitle = this.normalize(recipe.title);

          if (!titleMap.has(normTitle)) {
              // First time seeing this title
              titleMap.set(normTitle, key);
          } else {
              // Duplicate found! Compare with existing "best"
              const existingKey = titleMap.get(normTitle)!;
              const existingRecipe = this.recipes[existingKey];
              
              if (!existingRecipe) { // Safety catch for corrupted state
                  titleMap.set(normTitle, key);
                  return;
              }

              // --- LOGIC UPDATE: Prioritize Custom/Cloud entries & Trust Bing Images ---
              
              // Check if recipes are marked as 'custom' (user edited/cloud)
              const currentIsCustom = this.customKeys.has(key);
              const existingIsCustom = this.customKeys.has(existingKey);
              
              // CHANGED: Removed the 'bing.net' penalty. Any image URL > 5 chars is considered "Good".
              const hasGoodImage = (url?: string) => url && url.length > 5;
              
              const currentHasImage = hasGoodImage(recipe.imageUrl);
              const existingHasImage = hasGoodImage(existingRecipe.imageUrl);

              let currentIsBetter = false;

              if (currentIsCustom && !existingIsCustom) {
                  // Custom ALWAYS beats static
                  currentIsBetter = true;
              } else if (!currentIsCustom && existingIsCustom) {
                  // Static loses to existing custom
                  currentIsBetter = false;
              } else {
                  // Both are custom OR Both are static. Tie-break with Image Quality.
                  if (currentHasImage && !existingHasImage) {
                      currentIsBetter = true;
                  } else if (currentHasImage === existingHasImage) {
                      // Tie-break with Key Quality (Readable Title vs ID)
                      const isSanitizedKey = (k: string) => k === k.toLowerCase() && !k.includes(' ');
                      const currentKeyScore = key === recipe.title ? 2 : (isSanitizedKey(key) ? 0 : 1);
                      const existingKeyScore = existingKey === existingRecipe.title ? 2 : (isSanitizedKey(existingKey) ? 0 : 1);
                      
                      if (currentKeyScore > existingKeyScore) {
                          currentIsBetter = true;
                      }
                  }
              }

              if (currentIsBetter) {
                  // Current wins.
                  keysToDelete.push(existingKey);
                  titleMap.set(normTitle, key);
              } else {
                  // Existing wins.
                  keysToDelete.push(key);
              }
          }
      });

      if (keysToDelete.length > 0) {
          // console.log(`[Deduplication] Removing ${keysToDelete.length} duplicate recipes...`);
          keysToDelete.forEach(k => {
              delete this.recipes[k];
              if (this.customKeys.has(k)) {
                  this.customKeys.delete(k);
              }
          });
          
          if (forceCleanStorage) {
             // Force save cleaned local storage (only custom ones need saving)
             const customRecipes: Record<string, Recipe> = {};
             this.customKeys.forEach(k => { if(this.recipes[k]) customRecipes[k] = this.recipes[k]; });
             this.saveToStorage(LS_RECIPES_KEY, customRecipes);
          }
      }
  }

  // --- ANALYTICS (Live, Visits, Uniques) ---
  
  private getDeviceId(): string {
      if (typeof window === 'undefined') return 'unknown';
      let id = localStorage.getItem(DEVICE_ID_KEY);
      if (!id) {
          id = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
          localStorage.setItem(DEVICE_ID_KEY, id);
      }
      return id;
  }

  public async trackVisit() {
      if (!db) return;

      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const today = `${year}-${month}-${day}`;

      const deviceId = this.getDeviceId();
      const sessionKey = `chefbot_session_${today}`;
      const uniqueDayKey = `chefbot_unique_tracked_${today}`;

      try {
          // 1. LIVE HEARTBEAT (Active Users)
          const userRef = doc(db, "active_users", deviceId);
          await setDoc(userRef, { 
              last_active: Date.now(),
              platform: navigator.platform || 'unknown',
              userAgent: navigator.userAgent || 'unknown'
          }, { merge: true });

          // 2. DAILY STATS
          const analyticsRef = doc(db, "analytics", `daily_${today}`);
          const updates: any = { date: today };
          let shouldUpdate = false;

          // Check if New Session (Visit)
          if (!sessionStorage.getItem(sessionKey)) {
              updates.visits = increment(1);
              shouldUpdate = true;
              sessionStorage.setItem(sessionKey, 'true');
          }

          // Check if Unique Visitor for Today
          if (!localStorage.getItem(uniqueDayKey)) {
              updates.uniques = increment(1);
              shouldUpdate = true;
              localStorage.setItem(uniqueDayKey, 'true');
          }

          if (shouldUpdate) {
               await setDoc(analyticsRef, updates, { merge: true });
          }

      } catch (e) {
          console.error("[Analytics] Failed to track visit", e);
      }
  }

  // NEW: Search Tracking Method
  public async trackSearch(term: string, type: 'ai' | 'direct' | 'ingredient') {
      if (!db || !term || term.trim().length < 2) return;
      
      try {
          // Fire and forget - don't await to not block UI
          await addDoc(collection(db, "search_logs"), {
              term: term.trim(),
              type: type,
              timestamp: Date.now(),
              userId: this.getDeviceId() 
          });
      } catch (e) {
          console.error("[Analytics] Failed to track search", e);
      }
  }

  // NEW: Retrieve Search Logs (Read-only for admin)
  public async getRecentSearches(limitCount: number = 50): Promise<SearchLog[]> {
      if (!db) return [];
      try {
          const q = query(
              collection(db, "search_logs"),
              orderBy("timestamp", "desc"),
              limit(limitCount)
          );
          const snapshot = await getDocs(q);
          const logs: SearchLog[] = [];
          snapshot.forEach(doc => {
              const data = doc.data();
              logs.push({
                  id: doc.id,
                  term: data.term || "",
                  type: data.type || "direct",
                  timestamp: data.timestamp || 0
              });
          });
          return logs;
      } catch (e) {
          console.error("[Analytics] Failed to get search logs", e);
          return [];
      }
  }

  public async getLiveUsersCount(): Promise<number> {
      if (!db) return 0;
      try {
          const fiveMinutesAgo = Date.now() - (5 * 60 * 1000);
          const q = query(
              collection(db, "active_users"), 
              where("last_active", ">", fiveMinutesAgo)
          );
          const snapshot = await getDocs(q);
          return snapshot.size;
      } catch (e) {
          return 0;
      }
  }

  public async getAnalyticsData(days = 14): Promise<DailyAnalytics[]> {
      if (!db) return [];
      try {
          const analyticsRef = collection(db, "analytics");
          const q = query(analyticsRef, orderBy("date", "desc"), limit(days));
          const querySnapshot = await getDocs(q);
          const results: DailyAnalytics[] = [];
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              results.push({ 
                  date: data.date, 
                  visits: data.visits || 0,
                  uniques: data.uniques || 0 
              });
          });
          return results.reverse();
      } catch (e) {
          console.error("[Analytics] Failed to fetch data", e);
          return [];
      }
  }

  // --- COLLECTIVE MEMORY (GLOBAL CACHE) ---
  public async saveGlobalSearch(queryTerm: string, recipes: {title: string, imageUrl: string}[]) {
      if (!db || !queryTerm || recipes.length === 0) return;
      try {
          const normalizedKey = this.normalize(queryTerm).replace(/\s+/g, '_').substring(0, 50); 
          if (normalizedKey.length < 3) return;
          const docRef = doc(db, "search_cache", normalizedKey);
          await setDoc(docRef, {
              query: queryTerm,
              recipes: recipes,
              timestamp: Date.now(),
              hits: increment(1)
          }, { merge: true });
      } catch (e) {}
  }

  public async getGlobalSearch(queryTerm: string): Promise<{title: string, imageUrl: string}[] | null> {
      if (!db || !queryTerm) return null;
      try {
          const normalizedKey = this.normalize(queryTerm).replace(/\s+/g, '_').substring(0, 50);
          const docRef = doc(db, "search_cache", normalizedKey);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
              const data = docSnap.data();
              if (Array.isArray(data.recipes) && data.recipes.length > 0) return data.recipes;
          }
      } catch (e) {}
      return null;
  }

  // --- FIND RECIPE DIRECTLY IN CLOUD (For consistency) ---
  public async findCloudRecipe(queryTerm: string): Promise<Recipe | null> {
      if (!db || !queryTerm) return null;
      try {
          const normKey = this.sanitizeKey(queryTerm);
          // Try exact ID match first (fastest)
          const docRef = doc(db, "recipes", normKey);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
              return docSnap.data() as Recipe;
          }

          // Optional: Could add a fuzzy query here if exact ID fails, but exact is safer for now
          return null;
      } catch (e) {
          console.error("Cloud lookup failed", e);
          return null;
      }
  }

  // --- SETTINGS MANAGEMENT ---
  public getAppSettings(): AppSettings {
      return this.settings;
  }

  public saveAppSettings(settings: AppSettings) {
      this.settings = settings;
      this.saveToStorage(STABLE_SETTINGS_KEY, this.settings);
      this.notifyListeners();
  }

  public async publishAppSettingsToCloud(settings: AppSettings): Promise<{ success: boolean; message?: string }> {
      if (!db) return { success: false, message: "Firebase nu este conectat." };
      try {
          await setDoc(doc(db, "settings", "global_config"), settings);
          this.saveAppSettings(settings); // Sync local state
          return { success: true };
      } catch (e: any) {
          return { success: false, message: e.message };
      }
  }

  // --- INDEXING ---
  private rebuildIndex() {
      this.lookupIndex.clear();
      this.categoryIndex.clear();
      try {
          const recipes = this.recipes || {};
          Object.values(recipes).forEach(recipe => {
              if (recipe && typeof recipe === 'object' && recipe.title) {
                  const normKey = this.normalize(recipe.title);
                  this.lookupIndex.set(normKey, recipe.title);
              }
          });
          this.categories.forEach(cat => {
              cat.recipes.forEach(rTitle => {
                  const norm = this.normalize(rTitle);
                  this.categoryIndex.set(norm, cat.name);
              });
          });
          this.cuisines.forEach(cui => {
              cui.recipes.forEach(rTitle => {
                  const norm = this.normalize(rTitle);
                  const existingCat = this.categoryIndex.get(norm);
                  if (!existingCat || (existingCat !== 'Mic Dejun' && existingCat !== 'Desert' && existingCat !== 'Aperitive')) {
                      this.categoryIndex.set(norm, cui.name);
                  }
              });
          });
      } catch (e) {
          console.error("Error rebuilding index:", e);
      }
  }

  // --- CRITICAL: DATA MIGRATION STRATEGY (PRESERVE IMAGES) ---
  private migrateCustomRecipes() {
      if (typeof window === 'undefined') return;

      const currentKey = LS_RECIPES_KEY; // e.g., v27
      
      // Only migrate if current version is empty
      if (!localStorage.getItem(currentKey)) {
           console.log(`[Migration] Current DB (${currentKey}) is empty. Searching for previous versions...`);
           
           // Look back up to 5 versions
           for (let i = 1; i <= 5; i++) {
               const prevVersion = CURRENT_DB_VERSION - i;
               if (prevVersion < 1) break;
               
               const prevKey = `chefbot_custom_recipes_v${prevVersion}`;
               const prevData = localStorage.getItem(prevKey);

               if (prevData && prevData !== '{}') {
                   console.log(`[Migration] FOUND legacy data in ${prevKey}. Migrating to ${currentKey}...`);
                   try {
                       // We found data. Copy it to the new key.
                       // IMPORTANT: We do NOT filter here, we let deduplication handle it later
                       localStorage.setItem(currentKey, prevData);
                       // REMOVE OLD KEY TO FREE SPACE
                       localStorage.removeItem(prevKey);
                       console.log(`[Migration] SUCCESS. ${prevKey.length} chars migrated and cleaned up.`);
                       return; // Stop looking once found
                   } catch(e) {
                       console.error("[Migration] Failed to copy data", e);
                   }
               }
           }
      }
  }

  private performDataRescue() {
      if (typeof window === 'undefined') return;
      const strategies = [
          { main: STABLE_SHOPPING_KEY, mirror: MIRROR_SHOPPING_KEY },
          { main: STABLE_FAVORITES_KEY, mirror: MIRROR_FAVORITES_KEY },
          { main: STABLE_MEALPLAN_KEY, mirror: MIRROR_MEALPLAN_KEY }
      ];

      strategies.forEach(({ main, mirror }) => {
          const currentData = localStorage.getItem(main);
          if (!currentData || currentData === '[]' || currentData === 'null') {
              const mirrorData = localStorage.getItem(mirror);
              if (mirrorData && mirrorData !== '[]' && mirrorData !== 'null') {
                  localStorage.setItem(main, mirrorData);
              }
          } else {
              const mirrorData = localStorage.getItem(mirror);
              if (!mirrorData || mirrorData === '[]') {
                  localStorage.setItem(mirror, currentData);
              }
          }
      });
  }

  public subscribe(listener: Function) {
      this.listeners.push(listener);
      return () => { this.listeners = this.listeners.filter(l => l !== listener); };
  }

  private notifyListeners() {
      this.listeners.forEach(l => { try { l(); } catch(e) {} });
  }

  private safeLoad<T>(key: string, fallback: T): T {
      if (typeof window === 'undefined') return fallback;
      const item = localStorage.getItem(key);
      if (!item) return fallback;
      try { 
          const result = JSON.parse(item);
          if (result === null) return fallback;
          return result;
      } 
      catch (e) { localStorage.removeItem(key); return fallback; }
  }

  private loadFromStorage() {
    if (typeof window !== 'undefined') {
        try {
            // LOAD CUSTOM RECIPES (This contains user edited images/texts)
            const storedRecipes = this.safeLoad<Record<string, Recipe>>(LS_RECIPES_KEY, {});
            
            if (storedRecipes && typeof storedRecipes === 'object') {
                const validStoredRecipes: Record<string, Recipe> = {};
                let overrideCount = 0;

                Object.entries(storedRecipes).forEach(([k, v]) => {
                    if (v && typeof v === 'object' && v.title) {
                        validStoredRecipes[k] = v;
                        this.customKeys.add(k);
                        // If this key exists in predefined, we are overriding it
                        if (this.recipes[k]) overrideCount++;
                    }
                });

                // CRITICAL MERGE: Custom recipes MUST overwrite predefined ones
                // This ensures that if you changed an image for "Sarmale", the stored "Sarmale" wins
                this.recipes = { ...this.recipes, ...validStoredRecipes };
                
                if (overrideCount > 0) {
                    console.log(`[RecipeStore] Loaded ${Object.keys(validStoredRecipes).length} custom recipes. Overwrote ${overrideCount} predefined ones.`);
                }
            }

            const storedCats = this.safeLoad<CategoryData[] | null>(LS_CATEGORIES_KEY, null);
            if (Array.isArray(storedCats)) this.categories = storedCats;

            const storedCuisines = this.safeLoad<CuisineData[] | null>(LS_CUISINES_KEY, null);
            if (Array.isArray(storedCuisines)) this.cuisines = storedCuisines;

            const storedPartners = this.safeLoad<Partner[] | null>(LS_PARTNERS_KEY, null);
            if (Array.isArray(storedPartners)) {
                storedPartners.forEach(p => {
                    if (p && p.id && !this.partners.find(sp => sp.id === p.id)) this.partners.push(p);
                });
            }

            const storedUsers = this.safeLoad<User[]>(STABLE_USERS_KEY, []);
            if (Array.isArray(storedUsers)) this.users = storedUsers;

            const storedFavs = this.safeLoad<any[]>(STABLE_FAVORITES_KEY, []);
            if (Array.isArray(storedFavs)) {
                this.favorites.clear();
                storedFavs.forEach(item => {
                    if (typeof item === 'string') this.favorites.set(item, '');
                    else if (item && typeof item === 'object' && item.title) {
                         this.favorites.set(item.title, item.imageUrl || '');
                    }
                });
            }

            const storedShop = this.safeLoad<ShoppingItem[]>(STABLE_SHOPPING_KEY, []);
            if (Array.isArray(storedShop)) this.shoppingList = storedShop;

            const storedMeal = this.safeLoad<MealPlanItem[]>(STABLE_MEALPLAN_KEY, []);
            if (Array.isArray(storedMeal)) this.mealPlan = storedMeal;
            
            // Load Settings
            const storedSettings = this.safeLoad<AppSettings | null>(STABLE_SETTINGS_KEY, null);
            if (storedSettings && storedSettings.imageStylePrompt) {
                this.settings = storedSettings;
                // Merge default suggestion logic if missing from storage (migration)
                if (!this.settings.recipeSuggestionPrompt) {
                    this.settings.recipeSuggestionPrompt = DEFAULT_SETTINGS.recipeSuggestionPrompt;
                }
            }

            this.rebuildIndex();
        } catch (e) {
            console.error("Error in loadFromStorage", e);
        }
    }
  }

  private async loadFromCloud() {
      if (!db) return;
      try {
          const recipeSnapshot = await getDocs(collection(db, "recipes"));
          
          // Pre-fetch entries to check matching titles
          const predefinedEntries = Object.entries(PREDEFINED_RECIPE_DETAILS);

          recipeSnapshot.forEach((doc) => {
              const recipeData = doc.data() as Recipe;
              
              // CRITICAL FIX: Ensure data is valid before accessing properties to prevent crash
              if (recipeData && recipeData.title) {
                  // 1. Direct ID match (The standard way)
                  const existingLocal = this.recipes[doc.id];
                  if (existingLocal && !existingLocal.imageUrl && recipeData.imageUrl) {
                      this.recipes[doc.id] = { ...existingLocal, imageUrl: recipeData.imageUrl };
                  } else {
                      this.recipes[doc.id] = recipeData;
                  }
                  
                  // 2. INTELLIGENT MATCHING (The Fix for List Views)
                  const normTitle = this.normalize(recipeData.title);
                  
                  // Find predefined key that shares this title (SAFELY)
                  const matchedPredefined = predefinedEntries.find(([key, val]) => 
                      val && val.title && this.normalize(val.title) === normTitle
                  );

                  if (matchedPredefined) {
                      // FORCE OVERWRITE the static key with fresh Cloud Data
                      this.recipes[matchedPredefined[0]] = recipeData;
                      // CRITICAL: Mark this static key as CUSTOM so it survives deduplication!
                      this.customKeys.add(matchedPredefined[0]);
                  }
                  
                  this.customKeys.add(doc.id);
              }
          });
          const partnerSnapshot = await getDocs(collection(db, "partners"));
          partnerSnapshot.forEach((doc) => {
              const partnerData = doc.data() as Partner;
              if (partnerData && partnerData.id) {
                  const idx = this.partners.findIndex(p => p.id === partnerData.id);
                  if (idx >= 0) this.partners[idx] = partnerData;
                  else this.partners.push(partnerData);
              }
          });
          
          // Load Settings from Cloud
          const settingsSnap = await getDoc(doc(db, "settings", "global_config"));
          if (settingsSnap.exists()) {
             const cloudSettings = settingsSnap.data() as AppSettings;
             if (cloudSettings.imageStylePrompt) {
                 this.saveAppSettings(cloudSettings); // Update local cache
             }
          }
          
          // Run deduplication again after cloud load to merge/clean
          // Force save to clean local storage of duplicates
          this.deduplicateRecipes(true);

          this.rebuildIndex();
          this.notifyListeners(); 
      } catch (e) { console.warn("Cloud load warn:", e); }
  }

  // --- CLEANING & SANITIZATION (Fixes undefined error) ---
  private cleanRecipe(recipe: Recipe | null | undefined): Recipe {
    if (!recipe || typeof recipe !== 'object') {
        return {
            title: "Untitled Recipe",
            ingredients: [],
            steps: [],
            nutrition: { calories: 0, protein: 0, carbs: 0, fat: 0 },
            servings: 2,
            prepTime: "15 min",
            cookTime: "15 min"
        };
    }
    
    // Explicitly construct new object to break references and allow safe stripping
    const raw: Recipe = {
        title: recipe.title || "Untitled",
        ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients.map(i => ({
            name: i.name || "",
            amount: i.amount || "",
            partnerId: i.partnerId || undefined,
            purchaseUrl: i.purchaseUrl || undefined
        })) : [],
        steps: Array.isArray(recipe.steps) ? recipe.steps.map(s => String(s)) : [],
        nutrition: recipe.nutrition ? {
            calories: Number(recipe.nutrition.calories) || 0,
            protein: Number(recipe.nutrition.protein) || 0,
            carbs: Number(recipe.nutrition.carbs) || 0,
            fat: Number(recipe.nutrition.fat) || 0,
            fiber: recipe.nutrition.fiber ? Number(recipe.nutrition.fiber) : undefined,
            sugar: recipe.nutrition.sugar ? Number(recipe.nutrition.sugar) : undefined,
            sodium: recipe.nutrition.sodium ? Number(recipe.nutrition.sodium) : undefined,
            micronutrients: Array.isArray(recipe.nutrition.micronutrients) ? [...recipe.nutrition.micronutrients] : undefined
        } : { calories: 0, protein: 0, carbs: 0, fat: 0 },
        servings: Number(recipe.servings) || 2,
        prepTime: recipe.prepTime || "",
        cookTime: recipe.cookTime || "",
        imageUrl: recipe.imageUrl || "",
        pricePerServing: recipe.pricePerServing ? Number(recipe.pricePerServing) : undefined,
        servingSize: recipe.servingSize || undefined
    };
    
    // JSON.stringify removes keys with 'undefined' values.
    // JSON.parse brings it back as a clean object ready for Firestore.
    return JSON.parse(JSON.stringify(raw));
  }

  private cleanPartner(partner: Partner): Partner {
      const raw = { id: partner.id, name: partner.name, logoUrl: partner.logoUrl, websiteUrl: partner.websiteUrl || undefined };
      return JSON.parse(safeStringify(raw));
  }

  public sanitizeKey(key: string): string {
      if (!key) return "untitled_recipe";
      return key.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, ""); 
  }

  // --- PUBLISHING METHODS ---
  public async publishRecipeToCloud(key: string, data: Recipe): Promise<{ success: boolean; message?: string }> {
      if (!db) return { success: false, message: "Firebase nu este conectat." }; 
      try {
          const safeKey = this.sanitizeKey(key || data.title);
          let cleanData = this.cleanRecipe(data);
          
          // Direct overwrite. We trust the Admin's current state.
          const docRef = doc(db, "recipes", safeKey);
          await setDoc(docRef, cleanData);

          // 2. ATTEMPT LOCAL SAVE (But tolerate failure)
          // Even if local fails due to quota, we consider publish a success because Cloud worked.
          try {
             await this.saveRecipe(safeKey, cleanData); 
          } catch(localErr) {
             console.warn("Local cache update failed during publish, but cloud upload succeeded.", localErr);
          }

          return { success: true };
      } catch (e: any) { return { success: false, message: e.message || "Eroare." }; }
  }

  public async verifyRecipeInCloud(key: string): Promise<boolean> {
      if (!db) return false;
      try {
          const safeKey = this.sanitizeKey(key);
          const docSnap = await getDoc(doc(db, "recipes", safeKey));
          return docSnap.exists();
      } catch (e) { return false; }
  }

  public async publishPartnerToCloud(partner: Partner): Promise<{ success: boolean; message?: string }> {
      if (!db) return { success: false, message: "Firebase nu este conectat." };
      try {
          const cleanData = this.cleanPartner(partner);
          await setDoc(doc(db, "partners", partner.id), cleanData);
          this.savePartner(cleanData);
          return { success: true };
      } catch (e: any) { return { success: false, message: e.message }; }
  }

  private saveToStorage(key: string, data: any) {
    if (typeof window !== 'undefined') {
        try { 
            let dataToSave = data;

            // --- PROACTIVE STRATEGY: NEVER SAVE BASE64 IMAGES LOCALLY ---
            if (key === LS_RECIPES_KEY && typeof data === 'object') {
                try {
                    // Create a safe deep copy to modify for storage
                    const cleanData = JSON.parse(safeStringify(data));
                    
                    // Iterate and remove ANY heavy image
                    Object.keys(cleanData).forEach(k => {
                        const r = cleanData[k];
                        if (r.imageUrl && r.imageUrl.startsWith('data:image')) {
                            // Removing image from LOCAL cache. It stays in memory and Cloud.
                            r.imageUrl = ''; 
                        }
                    });
                    dataToSave = cleanData;
                } catch (err) {
                    console.warn("Failed to optimize storage data", err);
                }
            }

            const json = safeStringify(dataToSave);
            localStorage.setItem(key, json); 
            
            // --- MIRROR BACKUP LOGIC ---
            if (key === STABLE_FAVORITES_KEY) localStorage.setItem(MIRROR_FAVORITES_KEY, json);
            if (key === STABLE_SHOPPING_KEY) localStorage.setItem(MIRROR_SHOPPING_KEY, json);
            if (key === STABLE_MEALPLAN_KEY) localStorage.setItem(MIRROR_MEALPLAN_KEY, json);

        } catch (e: any) { 
            console.error(`Storage error (${key}):`, e);
            
            // If it's a critical user key (shopping/favorites), alert them.
            // If it's just the recipe cache, fail silently to keep the app running.
            if (key === STABLE_FAVORITES_KEY || key === STABLE_SHOPPING_KEY) {
                 if (e.name === 'QuotaExceededError' || e.code === 22) {
                    alert(`⚠️ Memoria browserului este plină! Nu s-au putut salva favoritele.`);
                 }
            }
        }
    }
  }

  private ensureDefaultUser() {
      if (this.users.length === 0) {
            this.users.push({ id: 'admin_01', username: 'marius', password: 'S@ra2010', email: 'admin@chefbot.com', isVerified: true, role: 'admin' });
            this.saveUsersToStorage();
      }
  }

  public async saveRecipe(key: string, recipe: Recipe) {
    const cleanData = this.cleanRecipe(recipe);
    const currentRecipe = this.recipes[key];
    const imageChanged = !currentRecipe || currentRecipe.imageUrl !== cleanData.imageUrl;
    
    if (cleanData.imageUrl && cleanData.imageUrl.startsWith('data:image') && imageChanged) {
         try {
             cleanData.imageUrl = await compressImage(cleanData.imageUrl);
         } catch (e) {
             console.warn("Failed to compress image in saveRecipe", e);
         }
    }

    this.recipes[key] = cleanData;
    this.customKeys.add(key);
    this.lookupIndex.set(this.normalize(cleanData.title), cleanData.title);
    
    const cat = this.getRecipeCategory(cleanData.title);
    if(cat !== 'Altele') {
        this.categoryIndex.set(this.normalize(cleanData.title), cat);
    }

    const customRecipes: Record<string, Recipe> = {};
    this.customKeys.forEach(k => { if(this.recipes[k]) customRecipes[k] = this.recipes[k]; });
    this.saveToStorage(LS_RECIPES_KEY, customRecipes);
    this.deduplicateRecipes();
    this.notifyListeners();
  }

  public getCategories(): CategoryData[] { return this.categories; }
  public saveCategories(categories: CategoryData[]) { this.categories = categories; this.saveToStorage(LS_CATEGORIES_KEY, this.categories); this.notifyListeners(); }
  public getCuisines(): CuisineData[] { return this.cuisines; }
  public saveCuisines(cuisines: CuisineData[]) { this.cuisines = cuisines; this.saveToStorage(LS_CUISINES_KEY, this.cuisines); this.notifyListeners(); }
  public getPartners(): Partner[] { return this.partners; }
  public getPartner(id: string): Partner | undefined { return this.partners.find(p => p.id === id); }
  public savePartner(partner: Partner) {
      const cleanData = this.cleanPartner(partner);
      const idx = this.partners.findIndex(p => p.id === partner.id);
      if (idx >= 0) this.partners[idx] = cleanData; else this.partners.push(cleanData);
      this.saveToStorage(LS_PARTNERS_KEY, this.partners); this.notifyListeners();
  }
  public deletePartner(id: string) {
      this.partners = this.partners.filter(p => p.id !== id);
      this.saveToStorage(LS_PARTNERS_KEY, this.partners);
      if (db) { try { deleteDoc(doc(db, "partners", id)); } catch(e) {} }
      this.notifyListeners();
  }
  public authenticate(u: string, p: string): boolean { return !!this.users.find(usr => usr.username === u && usr.password === p); }
  public getUsers(): User[] { return this.users; }
  public saveUser(user: User) {
      const idx = this.users.findIndex(u => u.id === user.id);
      if (idx >= 0) this.users[idx] = user; else this.users.push(user);
      this.saveUsersToStorage(); this.notifyListeners();
  }
  public deleteUser(id: string) { this.users = this.users.filter(u => u.id !== id); this.saveUsersToStorage(); this.notifyListeners(); }
  private saveUsersToStorage() { this.saveToStorage(STABLE_USERS_KEY, this.users); }

  public getFavorites(): {title: string, imageUrl: string}[] {
      const result: {title: string, imageUrl: string}[] = [];
      this.favorites.forEach((url, title) => {
          let finalUrl = url;
          if (!finalUrl) { const r = this.getRecipe(title); finalUrl = r?.imageUrl || ''; }
          result.push({ title, imageUrl: finalUrl });
      });
      return result;
  }
  public isFavorite(title: string): boolean { return this.favorites.has(title); }
  public async toggleFavorite(title: string, imageUrl?: string, recipeData?: Recipe) {
      if (this.favorites.has(title)) { this.favorites.delete(title); } 
      else { 
          this.favorites.set(title, imageUrl || '');
          if (recipeData) {
              const cleanData = this.cleanRecipe(recipeData);
              const existing = this.getRecipe(title);
              if (!existing) await this.saveRecipe(title, cleanData);
          }
      }
      const saveArr = Array.from(this.favorites.entries()).map(([t, url]) => ({ title: t, imageUrl: url }));
      this.saveToStorage(STABLE_FAVORITES_KEY, saveArr);
      this.notifyListeners();
  }

  public getShoppingList(): ShoppingItem[] { return this.shoppingList; }
  public addToShoppingList(item: ShoppingItem) { this.shoppingList = [...this.shoppingList, item]; this.saveToStorage(STABLE_SHOPPING_KEY, this.shoppingList); this.notifyListeners(); }
  public addIngredientsFromRecipe(ingredients: {name: string, amount: string}[], sourceRecipe: string) {
    const currentList = [...this.shoppingList];
    ingredients.forEach(newIng => {
        const normName = newIng.name.trim().toLowerCase();
        const existingIndex = currentList.findIndex(item => item.ingredientName && item.ingredientName.toLowerCase() === normName && !item.isChecked);
        const isVague = newIng.amount.toLowerCase().includes('gust') || !newIng.amount.trim();
        let itemText = isVague ? newIng.name : `${newIng.amount} ${newIng.name}`;
        if (existingIndex > -1) {
            const existing = currentList[existingIndex];
            let newText = existing.text;
            if (!isVague) {
                let existingAmountOnly = "";
                if (existing.ingredientName) {
                    const regex = new RegExp(existing.ingredientName, 'i');
                    existingAmountOnly = existing.text.replace(regex, '').trim();
                    if (existingAmountOnly.endsWith('+')) existingAmountOnly = existingAmountOnly.slice(0, -1).trim();
                }
                if (!existingAmountOnly) { newText = `${newIng.amount} ${newIng.name}`; } 
                else { newText = `${existingAmountOnly} + ${newIng.amount} ${existing.ingredientName}`; }
            }
            let newSource = existing.sourceRecipe || '';
            if (!newSource.includes(sourceRecipe)) { newSource = newSource ? `${newSource}, ${sourceRecipe}` : sourceRecipe; }
            currentList[existingIndex] = { ...existing, text: newText, sourceRecipe: newSource };
        } else {
            currentList.push({ id: `ing_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, text: itemText, isChecked: false, sourceRecipe: sourceRecipe, ingredientName: newIng.name });
        }
    });
    this.shoppingList = currentList; this.saveToStorage(STABLE_SHOPPING_KEY, this.shoppingList); this.notifyListeners();
  }
  public toggleShoppingItem(id: string) { this.shoppingList = this.shoppingList.map(item => item.id === id ? { ...item, isChecked: !item.isChecked } : item); this.saveToStorage(STABLE_SHOPPING_KEY, this.shoppingList); this.notifyListeners(); }
  public removeShoppingItem(id: string) { this.shoppingList = this.shoppingList.filter(i => i.id !== id); this.saveToStorage(STABLE_SHOPPING_KEY, this.shoppingList); this.notifyListeners(); }
  public clearCheckedItems() { this.shoppingList = this.shoppingList.filter(i => !i.isChecked); this.saveToStorage(STABLE_SHOPPING_KEY, this.shoppingList); this.notifyListeners(); }
  public clearShoppingList() { this.shoppingList = []; this.saveToStorage(STABLE_SHOPPING_KEY, this.shoppingList); this.notifyListeners(); }
  public getMealPlan(): MealPlanItem[] { return this.mealPlan; }
  public addToMealPlan(item: MealPlanItem) { this.mealPlan.push(item); this.saveToStorage(STABLE_MEALPLAN_KEY, this.mealPlan); this.notifyListeners(); }
  public removeFromMealPlan(id: string) { this.mealPlan = this.mealPlan.filter(i => i.id !== id); this.saveToStorage(STABLE_MEALPLAN_KEY, this.mealPlan); this.notifyListeners(); }

  public getUserDataJSON(): string {
      const data = {
          favorites: Array.from(this.favorites.entries()).map(([t, url]) => ({ title: t, imageUrl: url })),
          shoppingList: this.shoppingList,
          mealPlan: this.mealPlan,
          timestamp: Date.now(),
          version: 1
      };
      return safeStringify(data);
  }

  public restoreUserData(jsonString: string): boolean {
      try {
          const data = JSON.parse(jsonString);
          let restored = false;
          if(Array.isArray(data.favorites)) {
               this.saveToStorage(STABLE_FAVORITES_KEY, data.favorites);
               restored = true;
          }
          if(Array.isArray(data.shoppingList)) {
               this.saveToStorage(STABLE_SHOPPING_KEY, data.shoppingList);
               restored = true;
          }
          if(Array.isArray(data.mealPlan)) {
               this.saveToStorage(STABLE_MEALPLAN_KEY, data.mealPlan);
               restored = true;
          }
          if (restored) {
              this.loadFromStorage(); // Reload to memory
              this.notifyListeners();
          }
          return restored;
      } catch(e) {
          console.error("Restore failed", e);
          return false;
      }
  }

  public exportData(): string {
      return safeStringify({
          recipes: this.recipes, partners: this.partners, categories: this.categories, cuisines: this.cuisines,
          favorites: Array.from(this.favorites.entries()).map(([t, url]) => ({ title: t, imageUrl: url })),
          shoppingList: this.shoppingList, mealPlan: this.mealPlan, users: this.users
      });
  }
}

export const recipeStore = new RecipeStore();
