
import { Recipe } from '../../types';

export const GENERIC_RECIPES: Record<string, Recipe> = {
  "Eggs Benedict": {
    title: "Ouă Benedict cu Sos Olandez",
    servings: 2,
    servingSize: "2 ouă",
    pricePerServing: 20,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Ouă proaspete", amount: "4 buc" },
      { name: "Chifle englezești (sau pâine toast)", amount: "2 buc" },
      { name: "Bacon/Șuncă de Praga", amount: "4 felii" },
      { name: "Unt (pt sos)", amount: "100 g" },
      { name: "Gălbenușuri (pt sos)", amount: "2 buc" },
      { name: "Zeamă de lămâie", amount: "1 lingură" },
      { name: "Oțet", amount: "1 lingură (pt poșat)" },
      { name: "Pătrunjel/Ceapă verde", amount: "decor" }
    ],
    steps: [
      "Sosul Olandez (Baza): Topiți untul și lăsați-l să se răcească ușor (să fie cald, nu fierbinte). Într-un bol metalic, bateți gălbenușurile cu zeama de lămâie și un praf de sare.",
      "Emulsionarea sosului: Puneți bolul pe baie de abur (bain-marie) la foc mic. Bateți continuu cu telul până se îngroașă puțin. Începeți să turnați untul topit în fir foarte subțire, amestecând energic, până se formează o emulsie fină și groasă ca maioneza. Păstrați la cald.",
      "Pregătirea bazei: Tăiați chiflele în jumătate și prăjiți-le (toast) până devin aurii și crocante. În aceeași tigaie, prăjiți feliile de bacon sau șuncă până se rumenesc ușor pe margini.",
      "Pregătirea apei: Puneți o oală cu apă la fiert. Când clocotește, adăugați oțetul și reduceți focul la minim (apa trebuie doar să fremete ușor, să nu clocotească violent).",
      "Poșarea ouălor: Spargeți un ou într-o ceașcă. Faceți un vârtej în apă cu lingura și dați drumul oului în mijlocul vârtejului. Lăsați să fiarbă 3-4 minute. Albușul trebuie să fie coagulat, iar gălbenușul moale.",
      "Asamblarea finală: Scoateți ouăle cu o spumieră. Așezați o felie de șuncă pe fiecare jumătate de chiflă, apoi oul poșat. Turnați sosul olandez cald generos deasupra și presărați pătrunjel sau ceapă verde."
    ],
    nutrition: { calories: 450, protein: 20, carbs: 25, fat: 35 }
  },

  "Frittata cu legume": {
    title: "Frittata cu Legume (Omletă Italiană)",
    servings: 4,
    servingSize: "1 felie",
    pricePerServing: 8,
    prepTime: "10 min",
    cookTime: "20 min",
    ingredients: [
      { name: "Ouă", amount: "6 buc" },
      { name: "Ardei gras", amount: "1 buc" },
      { name: "Ceapă", amount: "1 buc" },
      { name: "Spanac proaspăt", amount: "100 g" },
      { name: "Brânză rasă (Cheddar/Telemea)", amount: "100 g" },
      { name: "Lapte/Smântână", amount: "50 ml" },
      { name: "Ulei/Unt", amount: "1 lingură" },
      { name: "Roșii cherry", amount: "6-8 buc" }
    ],
    steps: [
      "Pregătirea legumelor: Tăiați ceapa și ardeiul gras în cubulețe mici. Dacă folosiți spanac proaspăt, spălați-l și uscați-l. Tăiați roșiile cherry în jumătăți.",
      "Sotarea: Folosiți o tigaie care poate merge și la cuptor (mâner metalic). Căliți ceapa și ardeiul în ulei până se înmoaie. Adăugați spanacul și gătiți 1 minut până se ofilește.",
      "Baza de ouă: Într-un bol mare, bateți ouăle cu laptele/smântâna, sarea și piperul. Adăugați jumătate din brânza rasă în compoziția de ouă și amestecați.",
      "Gătirea pe plită: Turnați ouăle în tigaie peste legume. Amestecați ușor o singură dată pentru a distribui ingredientele. Lăsați să se gătească la foc mediu timp de 3-4 minute, fără să amestecați, până când marginile încep să se desprindă.",
      "Adăugarea topping-ului: Când baza este fermă dar suprafața încă lichidă, presărați restul de brânză rasă și așezați jumătățile de roșii cherry deasupra.",
      "Gratinarea: Introduceți tigaia în cuptorul preîncălzit la 180°C (sau sub grill). Coaceți timp de 10-15 minute până când frittata este umflată, aurie și centrul este ferm. Lăsați 5 minute la răcit înainte de a tăia."
    ],
    nutrition: { calories: 250, protein: 15, carbs: 6, fat: 18 }
  },

  "Burger": {
    title: "Burger Clasic de Vită",
    servings: 4,
    servingSize: "1 burger (350g)",
    pricePerServing: 25,
    prepTime: "20 min", 
    cookTime: "10 min",
    ingredients: [{ name: "Carne vită (20% grăsime)", amount: "600 g" }, { name: "Chifle brioche", amount: "4" }, { name: "Cheddar", amount: "4 felii" }, { name: "Roșie, Salată, Ceapă", amount: "garnitură" }],
    steps: [
      "Formați chiftelele mai largi decât chifla (se strâng la gătit). Apăsați mijlocul cu degetul. Sărați doar înainte de a pune pe plită.\n\nFrigeți 3-4 minute pe parte. Puneți brânza în ultimul minut și acoperiți. Asamblați burgerul cu sos și legume."
    ],
    nutrition: { calories: 700, protein: 40, carbs: 50, fat: 35 }
  },
  "Fish & Chips": {
    title: "Fish & Chips",
    servings: 4,
    servingSize: "1 porție (400g)",
    pricePerServing: 20,
    prepTime: "20 min", 
    cookTime: "15 min",
    ingredients: [{ name: "File cod", amount: "600 g" }, { name: "Cartofi", amount: "1 kg" }, { name: "Făină, Bere, Praf copt", amount: "aluat" }],
    steps: [
      "Tăiați cartofii și prăjiți-i prima dată la temp mică. Răciți.\n\nFaceți aluatul cu bere rece. Dați peștele prin făină, apoi prin aluat. Prăjiți. Prăjiți cartofii a doua oară la foc iute."
    ],
    nutrition: { calories: 700, protein: 25, carbs: 60, fat: 35 }
  },
  "Cheesecake": {
    title: "New York Cheesecake",
    servings: 12,
    servingSize: "1 felie (150g)",
    pricePerServing: 10,
    prepTime: "30 min", 
    cookTime: "1h",
    ingredients: [{ name: "Biscuiți", amount: "200g" }, { name: "Unt", amount: "100g" }, { name: "Cremă brânză", amount: "600g" }, { name: "Zahăr", amount: "150g" }, { name: "Ouă", amount: "3" }],
    steps: [
      "Coaceți blatul de biscuiți 10 min. Mixați brânza cu zahărul și ouăle (nu prea mult aer!).\n\nCoaceți la foc mic sau bain-marie. Răciți lent în cuptor."
    ],
    nutrition: { calories: 400, protein: 8, carbs: 30, fat: 28 }
  },
  "Brownie": {
    title: "Negresă (Fudgy Brownie)",
    servings: 9,
    servingSize: "1 pătrat (100g)",
    pricePerServing: 5,
    prepTime: "15 min", 
    cookTime: "25 min",
    ingredients: [{name: "Ciocolată", amount: "200g"}, {name: "Unt", amount: "150g"}, {name: "Zahăr", amount: "200g"}, {name: "Ouă", amount: "3"}, {name: "Făină", amount: "100g"}, {name: "Cacao", amount: "30g"}],
    steps: [
      "Topiți untul cu ciocolata. Bateți ouăle cu zahărul până se albesc.\n\nÎncorporați ciocolata, apoi făina și cacaoa. Coaceți 20-25 min. Mijlocul trebuie să fie umed."
    ],
    nutrition: {calories: 350, protein: 5, carbs: 40, fat: 20}
  },
  "Schnitzel vienez": {
    title: "Schnitzel Vienez Original",
    servings: 4,
    servingSize: "1 bucată mare (250g)",
    pricePerServing: 30,
    prepTime: "20 min", 
    cookTime: "10 min",
    ingredients: [{name: "Vițel", amount: "4 felii"}, {name: "Făină", amount: "100g"}, {name: "Ou", amount: "2"}, {name: "Pesmet fin", amount: "200g"}, {name: "Unt clarifiat/Ulei", amount: "prăjit"}],
    steps: [
      "Bateți carnea subțire (3mm). Dați prin făină, ou bătut, pesmet (fără să presați).\n\nPrăjiți în multă grăsime, mișcând tigaia ('soufflé') ca panada să se umfle."
    ],
    nutrition: {calories: 500, protein: 30, carbs: 35, fat: 25}
  },
  "Ramen": {
    title: "Ramen Rapid",
    servings: 2,
    servingSize: "1 bol mare (450ml)",
    pricePerServing: 18,
    prepTime: "20 min", 
    cookTime: "20 min",
    ingredients: [{name: "Supă pui/porc", amount: "1L"}, {name: "Paste Ramen", amount: "200g"}, {name: "Ou fiert moale", amount: "2"}, {name: "Carne (Chashu/Pui)", amount: "100g"}, {name: "Ceapă verde", amount: "2 fire"}],
    steps: [
      "Încălziți supa și asezonați cu sos de soia/miso. Fierbeți ouăle 6 minute.\n\nFierbeți pastele. Puneți pastele în bol, turnați supa, adăugați topping-urile."
    ],
    nutrition: {calories: 450, protein: 20, carbs: 50, fat: 15}
  },
  "Smoothie cu fructe": {
    title: "Smoothie de Fructe de Pădure",
    servings: 1,
    servingSize: "1 pahar (300ml)",
    pricePerServing: 8,
    prepTime: "5 min", 
    cookTime: "0 min",
    ingredients: [{name: "Banane", amount: "1"}, {name: "Fructe pădure", amount: "1 cană"}, {name: "Iaurt/Lapte", amount: "150ml"}, {name: "Miere", amount: "1 linguriță"}],
    steps: [
      "Puneți totul în blender. Mixați până e fin. Adăugați gheață dacă fructele sunt proaspete."
    ],
    nutrition: {calories: 200, protein: 5, carbs: 40, fat: 2}
  },
  "Mojito": {
    title: "Mojito (Cocktail)",
    servings: 1,
    servingSize: "1 pahar (250ml)",
    pricePerServing: 15,
    prepTime: "5 min", 
    cookTime: "0 min",
    ingredients: [{name: "Rom alb", amount: "50ml"}, {name: "Mentă", amount: "10 frunze"}, {name: "Lime", amount: "1/2"}, {name: "Zahăr brun", amount: "2 lingurițe"}, {name: "Apă minerală", amount: "top up"}],
    steps: [
      "Puneți zahărul, menta și lime-ul tăiat în pahar. Zdrobiți ușor.\n\nUmpleți paharul cu gheață pisată. Turnați romul. Completați cu apă minerală și amestecați."
    ],
    nutrition: {calories: 150, protein: 0, carbs: 15, fat: 0}
  }
};
