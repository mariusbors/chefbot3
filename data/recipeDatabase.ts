
import { Recipe } from '../types';
import { ROMANIAN_RECIPES } from './recipes/romanian';
import { ITALIAN_RECIPES } from './recipes/italian';
import { GREEK_RECIPES } from './recipes/greek';
import { LEBANESE_RECIPES } from './recipes/lebanese';
import { ASIAN_RECIPES } from './recipes/asian';
import { TURKISH_RECIPES } from './recipes/turkish';
import { FRENCH_RECIPES } from './recipes/french';
import { INDIAN_RECIPES } from './recipes/indian';
import { SPANISH_RECIPES } from './recipes/spanish';
import { MEXICAN_RECIPES } from './recipes/mexican';
import { MOROCCAN_RECIPES } from './recipes/moroccan';
import { SOUP_RECIPES } from './recipes/soups';
import { SALAD_RECIPES } from './recipes/salads';
import { APPETIZER_RECIPES } from './recipes/appetizers';
import { MAIN_RECIPES } from './recipes/mains';
import { VEGETARIAN_RECIPES } from './recipes/vegetarian';
import { STEW_RECIPES } from './recipes/stews';
import { GENERIC_RECIPES } from './recipes/generic';
import { SEAFOOD_RECIPES } from './recipes/seafood';
import { PASTA_AND_NOODLES_RECIPES } from './recipes/pastaAndNoodles';
import { SANDWICH_RECIPES } from './recipes/sandwiches';
import { SIDE_RECIPES } from './recipes/sides';
import { DESSERT_RECIPES } from './recipes/desserts';
import { BREAD_RECIPES } from './recipes/bread';
import { EXPANSION_RECIPES } from './recipes/expansion_baza12';

// Combine all modules into one massive database
const BASE_DB: Record<string, Recipe> = {
  ...ROMANIAN_RECIPES,
  ...ITALIAN_RECIPES,
  ...GREEK_RECIPES,
  ...LEBANESE_RECIPES,
  ...ASIAN_RECIPES,
  ...TURKISH_RECIPES,
  ...FRENCH_RECIPES,
  ...INDIAN_RECIPES,
  ...SPANISH_RECIPES,
  ...MEXICAN_RECIPES,
  ...MOROCCAN_RECIPES,
  ...SOUP_RECIPES,
  ...SALAD_RECIPES,
  ...APPETIZER_RECIPES,
  ...MAIN_RECIPES,
  ...VEGETARIAN_RECIPES,
  ...STEW_RECIPES,
  ...GENERIC_RECIPES,
  ...SEAFOOD_RECIPES,
  ...PASTA_AND_NOODLES_RECIPES,
  ...SANDWICH_RECIPES,
  ...SIDE_RECIPES,
  ...DESSERT_RECIPES,
  ...BREAD_RECIPES,
  ...EXPANSION_RECIPES
};

// Create aliases mapping
export const PREDEFINED_RECIPE_DETAILS: Record<string, Recipe> = {
  ...BASE_DB,
  // --- ROMANIAN ALIASES ---
  "Sarmale": BASE_DB["Sarmale cu mămăligă"],
  "sarmale": BASE_DB["Sarmale cu mămăligă"],
  "samrale": BASE_DB["Sarmale cu mămăligă"],
  "Sarmale cu mamaliga": BASE_DB["Sarmale cu mămăligă"],
  "Sarmale Tradiționale": BASE_DB["Sarmale cu mămăligă"],
  "Sarmalute": BASE_DB["Sarmale cu mămăligă"],
  
  "Ardei Umpluți": BASE_DB["Ardei Umpluți"],
  "Ardei umpluti": BASE_DB["Ardei Umpluți"],
  "Ardei umpluți": BASE_DB["Ardei Umpluți"],
  
  "Mamaliga": BASE_DB["Mămăligă cu brânză și smântână"],
  "Mămăligă": BASE_DB["Mămăligă cu brânză și smântână"],
  "Mamaliga cu branza": BASE_DB["Mămăligă cu brânză și smântână"],
  "Mămăligă cu brânză": BASE_DB["Mămăligă cu brânză și smântână"],
  
  "Tochitura": BASE_DB["Tochitură moldovenească"],
  "Tochitura moldoveneasca": BASE_DB["Tochitură moldovenească"],
  
  "Fasole": BASE_DB["Ciorbă de fasole în pâine"],
  "Iahnie": BASE_DB["Iahnie de fasole"],
  "Fasole cu ciolan": BASE_DB["Ciorbă de fasole în pâine"],
  
  "Ciorba de burta": BASE_DB["Ciorbă de burtă"],
  "Ciorbă de burtă tradițională": BASE_DB["Ciorbă de burtă"],
  
  // REDIRECTED TO PREMIUM VERSION
  "Ciorbă Rădăuțeană": BASE_DB["Ciorbă Rădăuțeană (Capodopera Originală din Bucovina)"],
  "Ciorba radauteana": BASE_DB["Ciorbă Rădăuțeană (Capodopera Originală din Bucovina)"],
  "Radauteana": BASE_DB["Ciorbă Rădăuțeană (Capodopera Originală din Bucovina)"],
  
  "Ciorba de perisoare": BASE_DB["Ciorbă de perișoare"],
  
  "Tocanita": BASE_DB["Tocăniță de cartofi"],
  "Tocanita de cartofi": BASE_DB["Tocăniță de cartofi"],
  "Tocanita de porc": BASE_DB["Tocăniță de porc"],
  
  "Salat boef": BASE_DB["Salată de boeuf"],
  "Salata boef": BASE_DB["Salată de boeuf"],
  "Salata beuf": BASE_DB["Salată de boeuf"],
  "Boeuf": BASE_DB["Salată de boeuf"],
  
  "Papanasi": BASE_DB["Papanși cu smântână și dulceață"],
  "Papanși": BASE_DB["Papanși cu smântână și dulceață"],
  "Cozonac": BASE_DB["Cozonac"],

  // --- INTERNATIONAL SHORTCUTS ---
  "Paste": BASE_DB["Spaghetti Carbonara"],
  "Spaghetti": BASE_DB["Spaghetti Carbonara"],
  "Carbonara": BASE_DB["Spaghetti Carbonara"],
  
  "Pizza": BASE_DB["Pizza Margherita"],
  "Margherita": BASE_DB["Pizza Margherita"],
  
  "Supă": BASE_DB["Ramen"],
  "Ciorbă": BASE_DB["Ciorbă de burtă"],
  "Salată": BASE_DB["Salată Caesar"],
  "Salata": BASE_DB["Salată Caesar"],
  
  "Friptură": BASE_DB["Steak de vită"],
  "Friptura": BASE_DB["Steak de vită"],
  "Steak": BASE_DB["Steak de vită"],
  
  "Clătite": BASE_DB["Crêpes"],
  "Clatite": BASE_DB["Crêpes"],
  "Crepes": BASE_DB["Crêpes"],
  
  "Negresă": BASE_DB["Brownie"],
  "Negresa": BASE_DB["Brownie"],
  
  "Baklava": BASE_DB["Baklava turcească"],
  
  "Snitel": BASE_DB["Schnitzel vienez"],
  "Șnițel": BASE_DB["Schnitzel vienez"],
  "Schnitzel": BASE_DB["Schnitzel vienez"],
  
  "Pilaf": BASE_DB["Orez basmati"], // Sau o reteta de pilaf specifica daca exista
  "Orez": BASE_DB["Orez basmati"],
  
  "Calamari": BASE_DB["Calamari prăjiți"],
  "Calamari prăjiți": BASE_DB["Calamari prăjiți"],
  "Fish & Chips": BASE_DB["Fish & Chips"],
  
  "Lasagna": BASE_DB["Lasagna Bolognese"],
  "Pho": BASE_DB["Pho"], 
  "Gnocchi": BASE_DB["Gnocchi"],
  "Ravioli": BASE_DB["Ravioli"],
  "Risotto": BASE_DB["Risotto alla Milanese"],

  "Burger": BASE_DB["Burger clasic"], 
  "Gyros": BASE_DB["Gyros"],
  "Tacos": BASE_DB["Tacos"],
  "Burrito": BASE_DB["Burrito"],
  "Shawarma": BASE_DB["Shawarma"],
  "Quesadilla": BASE_DB["Quesadilla"],
  "Hot Dog": BASE_DB["Hot Dog"],
  "Doner": BASE_DB["Doner Kebap"],
  "Panini": BASE_DB["Panini"],
  "Croque": BASE_DB["Croque Monsieur"],
  "Banh Mi": BASE_DB["Banh Mi"],
  "Bahn Mi": BASE_DB["Banh Mi"],
  "Sandwich": BASE_DB["Sandwich cu pastramă"],

  "Cartofi prajiti": BASE_DB["Cartofi prăjiți"],
  "Cartofi": BASE_DB["Cartofi prăjiți"],
  "Piure": BASE_DB["Piure de cartofi"],
  "Legume": BASE_DB["Legume la grătar"],
  "Varza calita": BASE_DB["Varză călită"],

  "Churros": BASE_DB["Churros"],
  "Gelato": BASE_DB["Gelato"],
  "Inghetata": BASE_DB["Gelato"],
  "Profiterol": BASE_DB["Profiterol"],
  "Cheesecake": BASE_DB["Cheesecake"],

  "Baguette": BASE_DB["Baguette cu brânzeturi"],
  "Naan": BASE_DB["Naan"],
  "Pita": BASE_DB["Pita"],
  "Covrigi": BASE_DB["Covrigi bavarezi (pretzel)"],
  "Chifle": BASE_DB["Chifle brioche"],
  "Cornuri": BASE_DB["Cornuri cu unt"],
  "Tortilla": BASE_DB["Tortilla"],

  // Expansion
  "Osso Buco": BASE_DB["Osso Buco"],
  "Cannoli": BASE_DB["Cannoli Siciliani"],
  "Saltimbocca": BASE_DB["Saltimbocca alla Romana"],
  "Panna Cotta": BASE_DB["Panna Cotta"],
  "Drob": BASE_DB["Drob de miel"],
  "Bulz": BASE_DB["Bulz ciobănesc"],
  "Mucenici": BASE_DB["Mucenici moldovenești"],
  "Borek": BASE_DB["Borek cu brânză"],
  "Cassoulet": BASE_DB["Cassoulet"],
  "Souffle": BASE_DB["Soufflé au Chocolat"],
  "Jalebi": BASE_DB["Jalebi"],
  "Albondigas": BASE_DB["Albondigas"],
  "Flan": BASE_DB["Flan Spaniol"],
  "Tostada": BASE_DB["Tostadas"],
  "Huevos": BASE_DB["Huevos Rancheros"],
  "Tres Leches": BASE_DB["Tres Leches Cake"],
  "Larb": BASE_DB["Larb Gai"],
  "Bissara": BASE_DB["Bissara"],
  "Harissa Chicken": BASE_DB["Pui Harissa"],
  "Ghriba": BASE_DB["Ghriba"]
};
