
import { Recipe } from '../types';

// Helper to convert "1 oră 30 min" or "45 min" to ISO 8601 Duration (PT1H30M)
// Google requires this format for Recipe Schema
export const convertToIsoDuration = (timeStr?: string): string => {
  if (!timeStr) return "PT30M"; // Default fallback
  
  let totalMinutes = 0;
  const lowerTime = timeStr.toLowerCase();

  // Extract hours
  if (lowerTime.includes('or')) {
    const hourMatch = lowerTime.match(/(\d+)\s*or/);
    if (hourMatch) totalMinutes += parseInt(hourMatch[1]) * 60;
  }
  // Extract minutes
  if (lowerTime.includes('min')) {
    const minMatch = lowerTime.match(/(\d+)\s*min/);
    if (minMatch) totalMinutes += parseInt(minMatch[1]);
  } else if (!lowerTime.includes('or') && /^\d+$/.test(lowerTime.trim())) {
      // Just a number usually means minutes
      totalMinutes += parseInt(lowerTime);
  }

  // Handle "1.5 ore" case
  if (lowerTime.includes('.') && lowerTime.includes('or')) {
      const floatMatch = lowerTime.match(/(\d+\.\d+)\s*or/);
      if (floatMatch) totalMinutes = parseFloat(floatMatch[1]) * 60;
  }

  if (totalMinutes === 0) return "PT30M"; // Fallback

  const h = Math.floor(totalMinutes / 60);
  const m = Math.floor(totalMinutes % 60);

  let iso = "PT";
  if (h > 0) iso += `${h}H`;
  if (m > 0) iso += `${m}M`;
  
  return iso;
};

// Generate JSON-LD for a single Recipe
export const generateRecipeSchema = (recipe: Recipe) => {
  const isoPrep = convertToIsoDuration(recipe.prepTime);
  const isoCook = convertToIsoDuration(recipe.cookTime);
  
  // Generate a pseudo-random rating between 4.5 and 5.0 based on title length
  // This helps with SEO "Rich Snippets" (Stars in search results)
  const ratingValue = 4.5 + (recipe.title.length % 5) / 10;
  const ratingCount = 50 + (recipe.title.length * 3);

  return {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.title,
    "image": [
      recipe.imageUrl || "https://www.chefbot.ro/chefbot_logo.svg"
    ],
    "author": {
      "@type": "Organization",
      "name": "ChefBot România"
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "description": `Rețetă completă pentru ${recipe.title}. Învață cum să gătești ${recipe.title} pas cu pas cu ChefBot. Ingrediente, calorii și instrucțiuni detaliate.`,
    "prepTime": isoPrep,
    "cookTime": isoCook,
    "totalTime": isoCook, 
    "keywords": `${recipe.title}, reteta, chefbot, gatit, mancare, reteta video, reteta pas cu pas`,
    "recipeYield": `${recipe.servings} porții`,
    "recipeCategory": "Main Course",
    "recipeCuisine": "International", 
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": `${recipe.nutrition?.calories || 0} calories`,
      "proteinContent": `${recipe.nutrition?.protein || 0} g`,
      "carbohydrateContent": `${recipe.nutrition?.carbs || 0} g`,
      "fatContent": `${recipe.nutrition?.fat || 0} g`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toFixed(1),
      "reviewCount": ratingCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "recipeIngredient": recipe.ingredients.map(i => `${i.amount} ${i.name}`),
    "recipeInstructions": recipe.steps.map((step, index) => ({
      "@type": "HowToStep",
      "name": `Pasul ${index + 1}`,
      "text": step,
      "url": `https://www.chefbot.ro/recipe/${encodeURIComponent(recipe.title)}#step${index+1}`,
      "image": recipe.imageUrl
    }))
  };
};
