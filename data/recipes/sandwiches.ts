
import { Recipe } from '../../types';

export const SANDWICH_RECIPES: Record<string, Recipe> = {
  "Hot Dog": {
    title: "Hot Dog New York Style",
    servings: 4,
    servingSize: "1 bucată (150g)",
    pricePerServing: 10,
    prepTime: "10 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Crenvurști de vită (calitate)", amount: "4 buc" },
      { name: "Chifle alungite", amount: "4 buc" },
      { name: "Varză murată (Sauerkraut)", amount: "150 g" },
      { name: "Ceapă", amount: "2 buc" },
      { name: "Muștar galben", amount: "generos" },
      { name: "Ketchup", amount: "opțional" },
      { name: "Pastă de tomate & scorțișoară", amount: "pt sos ceapă" }
    ],
    steps: [
      "Sosul de ceapă (Onion Sauce). Acesta este secretul hot-dog-ului de New York. Tocați ceapa mărunt și căliți-o în puțin ulei până devine moale. Adăugați o lingură de pastă de tomate, puțină apă, un praf de scorțișoară, un praf de chili și sare. Lăsați să fiarbă până se îngroașă și devine un sos roșcat dulceag.",
      "Pregătirea crenvurștilor. Folosiți crenvurști de vită de calitate superioară, cu membrană naturală care 'pocnește' când muști (snap). Fierbeți-i în apă (nu clocotită violent, ci simmering) timp de 5-7 minute sau puneți-i pe grătar pentru un gust afumat.",
      "Aburirea chiflelor. Chifla nu trebuie să fie prăjită sau rece, ci caldă și foarte moale. Puneți chiflele într-o sită deasupra apei care fierbe (steamer) timp de 1-2 minute. Aceasta le face pufoase și elastice.",
      "Asamblarea. Puneți crenvurștiul fierbinte în chiflă. Adăugați un strat generos de varză murată caldă (sauerkraut).",
      "Topping-ul. Puneți sosul de ceapă deasupra verzei. Trasați o linie ondulată de muștar galben peste tot. Ketchup-ul este controversat în NY, dar îl puteți adăuga dacă doriți. Se servește imediat, învelit în șervețel."
    ],
    nutrition: { calories: 450, protein: 15, carbs: 40, fat: 25, sodium: 1100 }
  },

  "Doner Kebap": {
    title: "Doner Kebab (Stil Berlin)",
    servings: 4,
    servingSize: "1 kebab (400g)",
    pricePerServing: 25,
    prepTime: "30 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Lipie groasă (Pită turcească)", amount: "1 buc mare" },
      { name: "Carne vițel/pui rotisată", amount: "500 g" },
      { name: "Varză roșie", amount: "200 g" },
      { name: "Varză albă", amount: "200 g" },
      { name: "Ceapă roșie", amount: "1 buc" },
      { name: "Roșii & Castraveți", amount: "felii" },
      { name: "Iaurt gras", amount: "200 g" },
      { name: "Usturoi", amount: "4 căței" },
      { name: "Mărar & Pătrunjel", amount: "1 legătură" },
      { name: "Fulgi Chili (Pul Biber)", amount: "1 linguriță" }
    ],
    steps: [
      "Sosurile (Kräuter & Knoblauch). Mixați iaurtul cu usturoiul pisat, sare, piper și puțină zeamă de lămâie pentru sosul de usturoi. Pentru sosul de ierburi, amestecați iaurt (sau maioneză light) cu mult mărar și pătrunjel tocat fin. Lăsați-le la rece să se combine aromele.",
      "Pregătirea verzei. Tăiați varza roșie și albă extrem de fin (fideluță). Frecați varza cu puțină sare și oțet și lăsați-o 10 minute să se înmoaie puțin (să nu fie tare ca lemnul). Tăiați ceapa solzișori, roșiile și castraveții felii.",
      "Carnea. Dacă nu aveți rotisor vertical, tăiați carnea în felii foarte subțiri și prăjiți-o în tigaie cu condimente de kebab (chimen, coriandru, boia, oregano) până se rumenește bine și devine crocantă pe margini.",
      "Pâinea. Folosiți o pită turcească rotundă și groasă (Pide), tăiată în sferturi (triunghiuri). Tăiați triunghiul pe latura lungă pentru a crea buzunarul. Prăjiți pâinea scurt într-o presă (panini maker) sau cuptor pentru a fi crocantă la exterior și pufoasă la interior.",
      "Montajul (Schichten). Ungeți interiorul pâinii cu ambele sosuri. Puneți un strat de carne la bază. Adăugați salata (varză, ceapă, roșii, castraveți).",
      "Finalizarea. Adăugați încă un strat de carne deasupra și încă o lingură de sos. Presărați fulgi de chili (Pul Biber) și puțină brânză Feta sfărâmată (opțional). Se presează ușor și se mănâncă cu furculița la început."
    ],
    nutrition: { calories: 750, protein: 40, carbs: 60, fat: 35, sodium: 1200 }
  },

  "Panini": {
    title: "Panini cu Mozzarella, Pesto și Roșii",
    servings: 2,
    servingSize: "1 sandviș (200g)",
    pricePerServing: 15,
    prepTime: "10 min",
    cookTime: "5 min",
    ingredients: [
      { name: "Ciabatta", amount: "2 chifle" },
      { name: "Mozzarella proaspătă", amount: "1 bilă (125g)" },
      { name: "Roșii", amount: "1 mare" },
      { name: "Sos Pesto Genovese", amount: "2 linguri" },
      { name: "Prosciutto Crudo (opțional)", amount: "4 felii" },
      { name: "Rucola", amount: "o mână" },
      { name: "Ulei de măsline", amount: "pt uns" }
    ],
    steps: [
      "Pregătirea pâinii. Tăiați chiflele Ciabatta pe orizontală. Ciabatta este ideală pentru panini deoarece are coaja crocantă care rezistă la presare și miezul aerat care absoarbe aromele.",
      "Asamblarea. Ungeți baza chiflei cu un strat generos de Pesto. Așezați feliile de mozzarella (scurse bine de zer). Adăugați feliile de roșii peste brânză. Sărați roșiile ușor.",
      "Carnea și verdeața. Așezați feliile de Prosciutto Crudo (dacă folosiți) în valuri, nu plate, pentru volum. Adăugați o mână de rucola proaspătă. Puneți capacul chiflei.",
      "Ungerea. Ungeți exteriorul sandvișului (atât capacul cât și baza) cu puțin ulei de măsline folosind o pensulă. Acest lucru asigură acele dungi crocante și aurii.",
      "Presarea. Puneți sandvișul în presa de panini preîncălzită (sau într-o tigaie grill, apăsând deasupra cu o altă cratiță grea).",
      "Gătirea. Gătiți 3-5 minute până când pâinea este foarte crocantă și plată, iar mozzarella s-a topit și începe să curgă pe margini. Tăiați pe diagonală și serviți fierbinte."
    ],
    nutrition: { calories: 550, protein: 20, carbs: 45, fat: 30, micronutrients: ["Calcium"] }
  },

  "Croque Monsieur": {
    title: "Croque Monsieur (Bistro Clasic Francez)",
    servings: 2,
    servingSize: "1 sandviș (200g)",
    pricePerServing: 18,
    prepTime: "15 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Pâine toast (calitate)", amount: "4 felii" },
      { name: "Șuncă fiartă (Jambon)", amount: "4 felii" },
      { name: "Brânză Gruyère/Emmental", amount: "150 g" },
      { name: "Unt", amount: "30 g" },
      { name: "Făină", amount: "1 lingură" },
      { name: "Lapte", amount: "150 ml" },
      { name: "Nucșoară", amount: "un vârf" },
      { name: "Muștar Dijon", amount: "1 linguriță" }
    ],
    steps: [
      "Sosul Bechamel (Mornay). Topiți untul într-o cratiță mică. Adăugați făina și gătiți 1 minut. Turnați laptele treptat, amestecând cu telul până se îngroașă sosul. Luați de pe foc, adăugați nucșoară, sare, piper și o mână de brânză rasă. Amestecați până se topește.",
      "Pregătirea feliilor. Ungeți feliile de pâine cu puțin unt topit și puneți-le 2 minute la cuptor să se usuce puțin (pentru a nu se înmuia de la sos).",
      "Asamblarea. Ungeți o felie de pâine cu puțin muștar Dijon, apoi cu un strat de sos Bechamel. Puneți 2 felii de șuncă (pliate să nu iasă în afară) și un strat de brânză rasă. Puneți a doua felie de pâine deasupra.",
      "Topping-ul (Gratin). Acesta este elementul definitoriu. Turnați restul de sos Bechamel peste sandviș, acoperind complet felia de sus (inclusiv colțurile). Presărați abundent cu brânza Gruyère rămasă.",
      "Coacerea. Puneți sandvișurile pe o tavă în cuptorul încins la 200°C. Coaceți 10-12 minute până când interiorul e fierbinte, apoi porniți funcția Grill pentru 2-3 minute până când brânza de deasupra face bule și pete maronii.",
      "Servirea. Se servește fierbinte, de obicei cu o salată verde simplă cu vinaigrette pentru a tăia din grăsime. (Dacă puneți un ou ochi deasupra, devine Croque Madame)."
    ],
    nutrition: { calories: 600, protein: 30, carbs: 35, fat: 38, sodium: 900 }
  },

  "Banh Mi": {
    title: "Banh Mi (Sandwich Vietnamez)",
    servings: 2,
    servingSize: "1 sandviș (250g)",
    pricePerServing: 20,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Baghetă franțuzească", amount: "2 buc (scurte)" },
      { name: "Pate de ficat", amount: "2 linguri" },
      { name: "Piept de porc/Carne rece", amount: "200 g" },
      { name: "Morcov & Ridiche Daikon", amount: "murate rapid" },
      { name: "Castravete", amount: "fâșii lungi" },
      { name: "Coriandru proaspăt", amount: "1 legătură" },
      { name: "Ardei Jalapeño/Chili", amount: "felii" },
      { name: "Maioneză", amount: "2 linguri" },
      { name: "Sos Maggi/Soia", amount: "câțiva stropi" }
    ],
    steps: [
      "Murăturile rapide (Do Chua). Tăiați morcovul și ridichea daikon în bastonașe subțiri (julienne). Amestecați-le cu oțet de orez, zahăr și puțină sare. Lăsați-le să stea cel puțin 20 de minute. Această aciditate crocantă este esențială.",
      "Pâinea. Folosiți o baghetă cu coajă subțire și crocantă și miez pufos și aerat (stil vietnamez). Încălziți bagheta în cuptor 2-3 minute pentru a fi crocantă. Tăiați-o pe lung, lăsând o margine unită ('hinge').",
      "Baza grasă. Ungeți o parte a baghetei cu maioneză și cealaltă parte cu pate de ficat (porc sau pui). Această combinație bogată este baza clasică.",
      "Straturile de carne. Așezați feliile de carne. Tradițional se folosesc mai multe tipuri: Cha Lua (salam vietnamez), piept de porc fript (Char Siu) sau pur și simplu carne de porc la grătar.",
      "Legumele. Scurgeți bine murăturile de morcov și ridiche. Așezați un strat generos peste carne. Adăugați fâșiile lungi de castravete proaspăt.",
      "Aromatizarea. Adăugați feliile de ardei iute (după gust) și o cantitate mare de coriandru proaspăt (cu tot cu tulpini). Stropiți cu câțiva picuri de sos Maggi sau sos de soia.",
      "Servirea. Presați sandvișul să se închidă și tăiați-l în jumătate. Este o explozie de gusturi: crocant, picant, sărat, dulce, acru și gras."
    ],
    nutrition: { calories: 500, protein: 20, carbs: 55, fat: 22, sodium: 800 }
  },

  "Sandwich cu pastramă": {
    title: "New York Pastrami Sandwich",
    servings: 2,
    servingSize: "1 sandviș (300g)",
    pricePerServing: 35,
    prepTime: "10 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Pâine de secară (Rye Bread)", amount: "4 felii" },
      { name: "Pastramă de vită (feliată)", amount: "300 g (multă!)" },
      { name: "Muștar brun picant", amount: "generos" },
      { name: "Castraveți murați (Dill)", amount: "2 buc" },
      { name: "Brânză Swiss (pt Reuben)", amount: "opțional" },
      { name: "Varză murată (pt Reuben)", amount: "opțional" }
    ],
    steps: [
      "Încălzirea cărnii. Secretul unui sandviș Deli este carnea fierbinte. Nu puneți pastrama rece! Puneți feliile de pastramă într-o sită deasupra unei oale cu apă clocotită (steamer) pentru 2-3 minute. Grăsimea se va topi și carnea va deveni suculentă.",
      "Pâinea. Folosiți pâine de secară cu chimen (Rye). O puteți lăsa proaspătă sau o puteți prăji ușor, în funcție de preferință.",
      "Asamblarea simplă (Katz's Style). Ungeți ambele felii de pâine cu un strat gros de muștar brun picant (deli mustard).",
      "Muntele de carne. Scoateți carnea fierbinte și stivuiți-o pe o felie de pâine. Nu o așezați plat; lăsați feliile să cadă în valuri pentru a crea volum și aerare. Sandvișul trebuie să fie supradimensionat.",
      "Varianta Reuben. Dacă doriți Reuben: puneți carnea pe pâine, adăugați varză murată (scursă bine) și o felie de brânză Swiss. Puneți sub grill până se topește brânza, apoi adăugați sos Russian în loc de muștar.",
      "Servirea. Puneți capacul, presați ușor și tăiați în jumătate. Se servește obligatoriu cu un castravete murat întreg sau tăiat pe lung alături (half-sour pickle)."
    ],
    nutrition: { calories: 600, protein: 40, carbs: 45, fat: 25, sodium: 1500 }
  },

  "Croque Madame": {
    title: "Croque Madame (Sandwich Cald cu Ou)",
    servings: 1,
    servingSize: "1 sandviș (220g)",
    pricePerServing: 20,
    prepTime: "15 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Pâine toast", amount: "2 felii" },
      { name: "Jambon", amount: "2 felii" },
      { name: "Cașcaval/Gruyere", amount: "50 g" },
      { name: "Sos Bechamel", amount: "2 linguri" },
      { name: "Ou", amount: "1 buc" },
      { name: "Unt", amount: "20 g" }
    ],
    steps: [
      "Sosul Bechamel: Topiți untul într-o cratiță, adăugați făina și gătiți 1 minut. Turnați laptele treptat, amestecând până se îngroașă. Asezonați cu nucșoară, sare și piper.",
      "Pregătirea pâinii: Ungeți feliile de pâine cu puțin unt și rumeniți-le ușor în cuptor sau toaster pentru a nu se înmuia prea tare de la sos.",
      "Asamblarea interiorului: Ungeți o felie cu sos Bechamel, adăugați șunca și un strat de brânză rasă. Puneți a doua felie de pâine deasupra.",
      "Gratinarea: Turnați restul de sos Bechamel peste sandviș, acoperind bine marginile. Presărați brânză din abundență deasupra. Coaceți la 200°C până se gratinează (aprox 10 min).",
      "Oul: În timp ce sandvișul este la cuptor, prăjiți un ou ochi în puțin unt. Albușul trebuie să fie gătit, iar gălbenușul moale.",
      "Finalizarea: Scoateți sandvișul gratinat din cuptor. Așezați oul ochi cu grijă deasupra. Gălbenușul care curge peste brânza topită este semnătura acestui preparat."
    ],
    nutrition: { calories: 650, protein: 28, carbs: 30, fat: 40 }
  }
};
