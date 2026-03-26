
export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

export interface Ingredient {
  name: string;
  amount: string;
  partnerId?: string; // Link to a Partner ID
  purchaseUrl?: string; // Link to buy the specific ingredient
}

export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  sugar?: number;
  sodium?: number;
  micronutrients?: string[];
}

export interface Recipe {
  title: string;
  ingredients: Ingredient[];
  steps: string[];
  nutrition: Nutrition;
  servings: number;
  servingSize?: string; // Added: e.g., "1 felie (100g)" or "1 bol (350g)"
  prepTime?: string; // Added: e.g., "20 min"
  cookTime?: string; // Added: e.g., "45 min"
  imageUrl?: string; // Base64 or URL
  isLoadingImage?: boolean;
  pricePerServing?: number; // Estimated cost in RON
}

export interface CuisineData {
  name: string;
  flag: string; // Emoji or code
  recipes: string[];
}

export interface CategoryData {
  name: string;
  icon: string; // Emoji or Lucide component name
  recipes: string[];
}

export interface User {
  id: string;
  username: string;
  email: string;
  password?: string; // In a real app, this would be hashed
  isVerified: boolean;
  role: 'admin' | 'editor';
}

export interface AppSettings {
  imageStylePrompt: string;
  imageNegativePrompt: string;
  recipeSuggestionPrompt: string;
}

export enum ViewState {
  HOME = 'HOME',
  RECIPE_DETAILS = 'RECIPE_DETAILS',
  RECIPE_LIST = 'RECIPE_LIST', // For the "10 popular recipes" list
  ADMIN = 'ADMIN',
}

export interface ShoppingItem {
  id: string;
  text: string;
  isChecked: boolean;
  sourceRecipe?: string;
  ingredientName?: string; // NEW: Helps to identify and merge duplicates
}

export interface MealPlanItem {
  id: string;
  day: string; // "Luni", "Marți", etc.
  mealType: 'Mic Dejun' | 'Prânz' | 'Cină';
  recipeTitle: string;
  recipeImage?: string;
}
