
import { CuisineData, CategoryData, Recipe, Partner } from './types';
import { PREDEFINED_RECIPE_DETAILS } from './data/recipeDatabase';

export { PREDEFINED_RECIPE_DETAILS };

// --- PARTNERS DATABASE (PUBLIC) ---
export const PARTNERS: Partner[] = [
  {
    id: 'partner_napolact',
    name: 'Napolact',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Napolact_logo.png/640px-Napolact_logo.png',
    websiteUrl: 'https://www.napolact.ro'
  },
  {
    id: 'partner_emag',
    name: 'eMAG Supermarket',
    logoUrl: 'https://s13emagst.akamaized.net/layout/ro/images/logo//59/88362.svg',
    websiteUrl: 'https://www.emag.ro/supermarket'
  },
  {
    id: 'partner_fuchs',
    name: 'Fuchs Condimente',
    logoUrl: 'https://www.fuchs.ro/wp-content/uploads/2020/06/fuchs-logo.png',
    websiteUrl: 'https://www.fuchs.ro'
  },
  {
    id: 'partner_boromir',
    name: 'Boromir',
    logoUrl: 'https://www.boromir.ro/assets/images/logo.png',
    websiteUrl: 'https://www.boromir.ro'
  }
];

export const CATEGORIES: CategoryData[] = [
  {
    name: 'Mic Dejun',
    icon: '🍳',
    recipes: [
      'Eggs Benedict', 'Frittata cu legume', 'Clătite americane', 'Ovăz cu lapte și fructe', 
      'Menemen', 'Croque Madame', 'Croque Monsieur', 'Shakshuka',
      'Manakish', 'Bagel', 'Cornuri cu unt', 'Simit', 
      'Orez cu lapte', 'Chifle brioche', 'Huevos Rancheros', 'Tostadas',
      'Papanși cu smântână și dulceață'
    ]
  },
  {
    name: 'Supe & Ciorbe',
    icon: '🥣',
    recipes: [
      'Ciorbă de burtă', 'Ciorbă Rădăuțeană (Capodopera Originală din Bucovina)', 'Supă de găluște', 'Borș de sfeclă roșie', 
      'Supă cremă de ciuperci', 'Ramen', 'Tom Yum Soup', 'Gazpacho', 
      'Harira', 'Minestrone', 'Ciorbă de perișoare', 'Ciorbă de fasole în pâine',
      'Supă cremă de roșii', 'Bouillabaisse', 'Tom Kha Gai', 'Wonton Soup',
      'Supă Miso', 'Clam Chowder', 'Pozole', 'Fasolada', 'Supă de linte (Mercimek Çorbası)', 'Bissara'
    ]
  },
  {
    name: 'Felul Principal',
    icon: '🍖',
    recipes: [
      'Sarmale cu mămăligă', 'Tochitură moldovenească', 'Pui la ceaun', 'Moussaka', 
      'Chiftele marinate', 'Friptură de porc glazurată', 'Coq au Vin', 'Gulaș', 
      'Ardei Umpluți', 'Schnitzel vienez', 'Korma de pui', 'Butter Chicken', 
      'Chicken Tikka Masala', 'Boeuf Bourguignon', 'Chili con carne', 'Osso Buco', 
      'Kleftiko', 'Pui Harissa', 'Pui cu smântână', 'Ostropel de pui', 
      'Tocăniță de vițel', 'Carnitas', 'Fajitas', 'Pui Tikka Masala', 'Steak de vită', 'Mușchi de vită Wellington'
    ]
  },
  {
    name: 'Paste & Risotto',
    icon: '🍝',
    recipes: [
      'Spaghetti Carbonara', 'Lasagna Bolognese', 'Pasta Primavera', 'Risotto cu ciuperci', 
      'Macaroni and Cheese', 'Spaghetti Aglio e Olio', 'Ravioli', 'Gnocchi',
      'Risotto alla Milanese', 'Pad Thai', 'Chow Mein', 'Yakisoba', 
      'Pad See Ew', 'Udon cu legume', 'Paste cu fructe de mare', 'Pastitsio',
      'Lasagna cu spanac', 'Pesto alla Genovese', 'Fettuccine Alfredo', 'Penne Arrabbiata'
    ]
  },
  {
    name: 'Vegetarian',
    icon: '🥗',
    recipes: [
      'Ratatouille', 'Curry de linte', 'Lasagna vegetariană', 'Moussaka vegetariană', 
      'Falafel', 'Hummus', 'Salată de quinoa', 'Burger vegetal',
      'Palak Paneer', 'Malai Kofta', 'Chole', 'Daal', 
      'Tofu stir-fry', 'Buddha Bowl', 'Imam Bayildi', 'Fasole verde sote', 
      'Varză călită', 'Cartofi gratinați', 'Baba Ganoush', 'Zacuscă', 'Zaalouk'
    ]
  },
  {
    name: 'Fructe de Mare',
    icon: '🦐',
    recipes: [
      'Paella', 'Creveți Saganaki', 'Scoici în sos de vin', 'Paste cu fructe de mare', 
      'Fish Tacos', 'Calamari prăjiți', 'Somon la grătar', 'Fish & Chips',
      'Somon teriyaki', 'Ton tataki', 'Moules-frites', 'Doradă la cuptor', 
      'Crab cakes', 'Creveți tempura', 'Ceviche', 'Sushi', 
      'Paella de fructe de mare', 'Pulpo a la Gallega'
    ]
  },
  {
    name: 'Desert',
    icon: '🍰',
    recipes: [
      'Papanși cu smântână și dulceață', 'Lava Cake', 'Tiramisu', 'Cheesecake', 
      'Crêpes', 'Orez cu lapte', 'Amandine', 'Salam de biscuiți', 'Cozonac',
      'Baklava turcească', 'Cannoli Siciliani', 'Panna Cotta', 'Ecler cu ciocolată', 
      'Profiterol', 'Pavlova', 'Churros', 'Crème Brûlée', 
      'Galaktoboureko', 'Kunefe', 'Mooncake', 'Gulab Jamun', 'Macarons', 
      'Tarte Tatin', 'Gelato', 'Clătite americane', 'Negresă'
    ]
  },
  {
    name: 'Aperitive',
    icon: '🍢',
    recipes: [
      'Ouă umplute', 'Rulouri de șuncă', 'Tartine cu somon', 'Chec aperitiv', 
      'Salată de boeuf', 'Zacuscă', 'Bruschette', 'Nachos',
      'Tapas spaniole', 'Hummus', 'Tzatziki', 'Labneh', 
      'Edamame', 'Pimientos de Padrón', 'Spring Rolls', 'Samosa', 
      'Gyoza', 'Crochete de cartofi', 'Paté de foie gras', 'Focaccia'
    ]
  }
];

export const CUISINES: CuisineData[] = [
  {
    name: 'Românească',
    flag: '🇷🇴',
    recipes: ['Sarmale cu mămăligă', 'Ciorbă de burtă', 'Ardei Umpluți', 'Mămăligă cu brânză și smântână', 'Ciorbă de fasole în pâine', 'Tochitură moldovenească', 'Papanși cu smântână și dulceață', 'Salată de boeuf', 'Ciorbă de perișoare', 'Zacuscă', 'Piftie', 'Cozonac', 'Ciorbă Rădăuțeană (Capodopera Originală din Bucovina)', 'Drob de miel', 'Bulz ciobănesc', 'Mucenici moldovenești']
  },
  {
    name: 'Italiană',
    flag: '🇮🇹',
    recipes: ['Pizza Margherita', 'Spaghetti Carbonara', 'Lasagna Bolognese', 'Risotto alla Milanese', 'Tiramisu', 'Ravioli', 'Pesto alla Genovese', 'Focaccia', 'Gelato', 'Prosciutto e Melone', 'Minestrone', 'Gnocchi', 'Osso Buco', 'Cannoli Siciliani', 'Panna Cotta', 'Saltimbocca alla Romana']
  },
  {
    name: 'Grecească',
    flag: '🇬🇷',
    recipes: ['Moussaka', 'Souvlaki', 'Gyros', 'Tzatziki', 'Greek Salad', 'Spanakopita', 'Dolmades', 'Fasolada', 'Baklava grecească', 'Pastitsio', 'Kleftiko', 'Loukoumades', 'Spetsofai', 'Tyropita', 'Galaktoboureko', 'Saganaki']
  },
  {
    name: 'Libaneză',
    flag: '🇱🇧',
    recipes: ['Hummus', 'Tabbouleh', 'Falafel', 'Baba Ganoush', 'Shawarma', 'Fattoush', 'Kafta', 'Manakish', 'Kibbeh', 'Labneh', 'Moujadara', 'Baklava libaneză', 'Shish Tawook', 'Arayes', 'Knafeh', 'Fattah cu iaurt']
  },
  {
    name: 'Chinezească',
    flag: '🇨🇳',
    recipes: ['Kung Pao Chicken', 'Rață Peking', 'Dim Sum', 'Sweet and Sour Pork', 'Fried Rice', 'Mapo Tofu', 'Chow Mein', 'Wonton Soup', 'Spring Rolls', 'Hot Pot', 'Dumplings (Jiaozi)', 'Baozi', 'Char Siu', 'Egg Foo Young', 'Orange Chicken', 'Mooncake']
  },
  {
    name: 'Turcească',
    flag: '🇹🇷',
    recipes: ['Kebab', 'Lahmacun', 'Baklava turcească', 'Menemen', 'Pide', 'Dolma', 'Iskender Kebab', 'Simit', 'Köfte', 'Sarma', 'Supă de linte (Mercimek Çorbası)', 'Lokum', 'Imam Bayildi', 'Borek cu brânză', 'Manti', 'Kunefe']
  },
  {
    name: 'Franceză',
    flag: '🇫🇷',
    recipes: ['Coq au Vin', 'Ratatouille', 'Croissant', 'Quiche Lorraine', 'Supă de ceapă', 'Boeuf Bourguignon', 'Crème Brûlée', 'Baguette cu brânzeturi', 'Escargots', 'Crêpes', 'Tarte Tatin', 'Macarons', 'Cassoulet', 'Rață Confit', 'Soufflé au Chocolat', 'Ecler cu ciocolată']
  },
  {
    name: 'Indiană',
    flag: '🇮🇳',
    recipes: ['Butter Chicken', 'Chicken Tikka Masala', 'Biryani', 'Naan', 'Daal', 'Samosa', 'Paneer Tikka', 'Tandoori Chicken', 'Rogan Josh', 'Chole', 'Palak Paneer', 'Gulab Jamun', 'Vindaloo de miel', 'Malai Kofta', 'Korma de pui', 'Jalebi']
  },
  {
    name: 'Spaniolă',
    flag: '🇪🇸',
    recipes: ['Paella', 'Tortilla Española', 'Gazpacho', 'Jamón Ibérico', 'Croquetas', 'Patatas Bravas', 'Churros', 'Pimientos de Padrón', 'Pulpo a la Gallega', 'Fabada Asturiana', 'Calamares fritos', 'Crema Catalana', 'Albondigas', 'Escalivada', 'Flan Spaniol', 'Turron']
  },
  {
    name: 'Mexicană',
    flag: '🇲🇽',
    recipes: ['Tacos', 'Guacamole', 'Burrito', 'Quesadilla', 'Enchilada', 'Nachos', 'Chiles Rellenos', 'Tamales', 'Pozole', 'Fajitas', 'Mole Poblano', 'Churros mexicani', 'Tostadas', 'Huevos Rancheros', 'Carnitas', 'Tres Leches Cake']
  },
  {
    name: 'Thailandeză',
    flag: '🇹🇭',
    recipes: ['Pad Thai', 'Tom Yum Soup', 'Green Curry', 'Massaman Curry', 'Mango Sticky Rice', 'Som Tam', 'Pad See Ew', 'Tom Kha Gai', 'Spring Rolls thailandeze', 'Thai Fried Rice', 'Satay', 'Thai Red Curry', 'Larb Gai', 'Panang Curry', 'Khao Soi', 'Banane în lapte de cocos']
  },
  {
    name: 'Marocană',
    flag: '🇲🇦',
    recipes: ['Couscous Royal', 'Tajine cu lămâie și măsline', 'Harira', 'Pastilla', 'Kefta Mkaouara', 'Zaalouk', 'Mechoui', 'Msemen', 'Briouats', 'Chermoula Fish', 'Baghrir', 'Ceai cu mentă', 'Pui Harissa', 'Bissara', 'Batbout', 'Ghriba']
  }
];

export const RECIPE_IMAGE_QUERIES: Record<string, string> = {
  // --- FIXES FOR USER FEEDBACK ---
  "Carbonara": "authentic spaghetti carbonara white egg sauce guanciale black pepper no tomato",
  "Spaghetti Carbonara": "authentic spaghetti carbonara white egg sauce guanciale black pepper no tomato",
  "Paste Carbonara": "authentic spaghetti carbonara white egg sauce guanciale black pepper no tomato",
  "Bolognese": "tagliatelle bolognese meat red tomato sauce plated",
  "Lasagna": "lasagna bolognese layers meat sauce cheese plated",
  
  // --- ROMANIAN SPECIFICS (Disambiguation) ---
  "Chiftele": "round fried meatballs platter romanian food",
  "Chiftele cu piure": "meatballs with creamy mashed potatoes and tomato sauce plated rustic",
  "Chiftele simple": "fried meatballs on plate rustic",
  "Chiftele marinate": "meatballs in tomato sauce rustic romanian food mashed potatoes",
  
  "Sarmale": "sarmale stuffed cabbage rolls clay pot romanian food",
  "Sarmale cu mămăligă": "sarmale stuffed cabbage rolls polenta romanian food rustic",
  "Varză călită": "stewed cabbage with sausages rustic bowl romanian food",
  "Ardei Umpluți": "stuffed bell peppers with minced meat and rice tomato sauce rustic pot food photography",
  
  "Tochitură": "pork stew with polenta egg cheese rustic romanian food",
  "Tochitură moldovenească": "tochitura moldoveneasca pork stew sausages polenta egg cheese rustic plate",
  
  "Ciorbă de burtă": "ciorba de burta tripe soup creamy garlic sour cream romanian food rustic bowl",
  "Ciorbă Rădăuțeană": "ciorba radauteana creamy garlic soup chicken bowl rustic romanian food",
  "Ciorbă Rădăuțeană (Capodopera Originală din Bucovina)": "ciorba radauteana creamy garlic soup chicken bowl rustic romanian food",
  "Ciorbă de perișoare": "meatball soup sour cream herbs rustic bowl romanian food",
  
  "Fasole bătută": "mashed beans with caramelized onions rustic bowl romanian food",
  "Iahnie de fasole": "bean stew with smoked sausage rustic bowl romanian food",
  "Ciorbă de fasole": "bean soup with smoked meat bread bowl romanian food",
  
  "Mămăligă cu brânză": "mamaliga polenta cheese sour cream romanian food rustic",
  "Bulz": "bulz polenta ball cheese grilled rustic romanian food",
  
  "Papanși": "papanasi romanian fried donuts sour cream blueberry jam rustic plated",
  "Cozonac": "cozonac traditional sweet bread walnut cocoa filling slice rustic wood food photography",
  "Pasca": "pasca romanian easter cheesecake rustic",
  
  "Salată de boeuf": "salata de boeuf romanian potato salad decorated mayonnaise festive food",
  "Zacuscă": "zacusca vegetable spread eggplant pepper jar bread rustic",
  "Piftie": "piftie pork jelly aspic garlic meat rustic plate",
  "Drob": "drob de miel romanian lamb haggis slice easter tradition food",

  // --- GENERIC CATEGORIES (Better visual descriptors) ---
  "Tocăniță": "pork stew with potatoes and tomato sauce rustic bowl romanian food",
  "Tocăniță de cartofi": "potato stew with smoked meat rustic bowl romanian food",
  "Tocană de porc": "pork stew with tomato sauce and vegetables rustic plate romanian food",
  "Papricaș": "chicken paprikash with dumplings creamy red sauce rustic bowl",
  "Ostropel": "chicken garlic tomato stew rustic romanian food",
  "Escalop": "veal escalope with mushroom sauce plated",
  "Șnițel": "golden fried chicken schnitzel plated lemon slice",
  "Pilaf": "chicken pilaf rice with vegetables rustic bowl romanian food",
  "Piure de cartofi": "creamy mashed potatoes bowl garnish",
  "Cartofi prajiti": "golden french fries plate",
  "Friptura": "roasted meat steak plated garnish",

  // --- INTERNATIONAL CLASSICS ---
  "Tiramisu": "tiramisu cake slice layers mascarpone cocoa powder elegant plated",
  "Lasagna Bolognese": "lasagna bolognese layers meat sauce cheese basil slice rustic",
  "Pizza Margherita": "pizza margherita napoletana basil mozzarella tomato sauce wood oven",
  "Salată Caesar": "caesar salad romaine lettuce croutons parmesan shavings dressing plated",
  
  // HUMMUS & DIPS
  "Hummus": "classic creamy hummus beige chickpea dip olive oil pita bread middle eastern food photography",
  "Hummus Libanez": "classic creamy hummus beige chickpea dip olive oil pita bread middle eastern food photography",
  "Baba Ganoush": "baba ganoush eggplant dip pomegranate seeds rustic bowl",

  // ASIAN / JAPANESE
  "Sushi": "sushi platter variety nigiri maki elegant plated",
  "Ramen": "japanese ramen noodle soup pork egg scallions bowl",
  "Tempura": "shrimp and vegetable tempura crispy golden plated",
  "Udon": "udon noodle soup thick noodles bowl japanese food",
  "Yakitori": "yakitori grilled chicken skewers japanese street food",
  "Sashimi": "fresh sashimi platter raw fish elegant plated",
  "Miso": "miso soup tofu seaweed scallions japanese bowl",
  "Gyoza": "pan fried gyoza dumplings japanese food",
  "Teriyaki": "chicken teriyaki glazed bowl rice vegetables",

  // SPECIALTIES
  "Osso Buco": "osso buco milanese veal shank stew gremolata plated",
  "Cannoli Siciliani": "cannoli sicilian pastry ricotta filling pistachio plated",
  "Panna Cotta": "panna cotta vanilla berry coulis wobbling dessert plated",
  "Saltimbocca alla Romana": "saltimbocca alla romana veal prosciutto sage pan sauce plated",
  "Shish Tawook": "shish tawook chicken skewers grilled garlic sauce lebanese food",
  "Char Siu": "char siu chinese bbq pork sliced red glazed roasted",
  "Pad Thai": "pad thai noodles shrimp peanuts lime plated",
  "Tom Yum": "tom yum soup shrimp spicy red bowl",
  "Butter Chicken": "butter chicken curry creamy orange sauce coriander naan",
  "Biryani": "chicken biryani rice spiced pot",
  "Paella": "paella valenciana seafood rice pan saffron",
  "Tacos": "tacos al pastor pork pineapple cilantro lime",
  "Guacamole": "guacamole bowl avocado chips lime",
  "Ceviche": "ceviche raw fish lime onion cilantro bowl",
  
  // DESSERTS
  "Lava Cake": "chocolate lava cake molten center dessert plated",
  "Cheesecake": "new york cheesecake slice strawberry topping",
  "Macarons": "macarons colorful french cookies",
  "Clătite": "crepes pancakes jam chocolate rolled",
  "Negresă": "brownie chocolate cake square piece"
};
