
import { Recipe } from '../../types';

export const STEW_RECIPES: Record<string, Recipe> = {
  "Tocăniță de cartofi": {
    title: "Tocăniță de Cartofi cu Afumătură",
    servings: 4,
    servingSize: "1 porție (350g)",
    pricePerServing: 8,
    prepTime: "20 min",
    cookTime: "45 min",
    ingredients: [
      { name: "Cartofi", amount: "1 kg" },
      { name: "Costiță afumată/Cârnați", amount: "300 g" },
      { name: "Ceapă", amount: "2 mari" },
      { name: "Ardei gras", amount: "1 buc" },
      { name: "Suc de roșii/Bulion", amount: "200 ml" },
      { name: "Boia dulce", amount: "1 lingură" },
      { name: "Dafin", amount: "2 foi" },
      { name: "Pătrunjel", amount: "1 legătură" }
    ],
    steps: [
      "Curățați cartofii și tăiați-i cuburi mari (aprox 3-4 cm). Tocați ceapa și ardeiul mărunt. Tăiați afumătura felii sau cubulețe.",
      "Încingeți ulei într-o cratiță încăpătoare. Căliți ceapa și ardeiul cu un praf de sare până se înmoaie. Adăugați afumătura și prăjiți-o puțin să lase gust.",
      "Luați cratița de pe foc, adăugați boiaua și amestecați rapid (să nu devină amară). Adăugați imediat cartofii și apă cât să-i acopere.",
      "Puneți înapoi pe foc. Adăugați foile de dafin. Lăsați să fiarbă la foc mediu cu capacul pus parțial, aproximativ 20-25 de minute.",
      "Când cartofii sunt aproape fierți (intră furculița ușor), adăugați sucul de roșii. Mai fierbeți 10-15 minute fără capac, ca să scadă sosul.",
      "Asezonați cu sare și piper după gust. Opriți focul și presărați pătrunjel verde tocat proaspăt. Se servește cu murături."
    ],
    nutrition: { calories: 450, protein: 15, carbs: 55, fat: 20 }
  },
  "Ostropel de pui": {
    title: "Ostropel de Pui cu Sos de Roșii și Usturoi",
    servings: 4,
    servingSize: "1 porție (300g)",
    pricePerServing: 15,
    prepTime: "15 min",
    cookTime: "40 min",
    ingredients: [
      { name: "Pulpe de pui", amount: "4-6 buc" },
      { name: "Usturoi", amount: "1 căpățână" },
      { name: "Suc de roșii (passata)", amount: "400 ml" },
      { name: "Vin alb (opțional)", amount: "50 ml" },
      { name: "Făină", amount: "1 lingură" },
      { name: "Pătrunjel", amount: "1 legătură" },
      { name: "Ulei", amount: "3 linguri" }
    ],
    steps: [
      "Pregătirea puiului. Spălați și ștergeți pulpele de pui. Asezonați-le cu sare și piper. Tăvăliți-le ușor prin puțină făină (opțional, pentru un sos mai legat).",
      "Prăjirea. Încingeți uleiul într-o cratiță. Prăjiți puiul pe ambele părți până se rumenește frumos. Scoateți-l pe o farfurie.",
      "Baza sosului. În uleiul rămas, căliți jumătate din cantitatea de usturoi tăiat felii subțiri (doar 30 de secunde, să nu se ardă). Adăugați o lingură de făină și amestecați rapid.",
      "Formarea sosului. Stingeți cu vinul alb (dacă folosiți) și lăsați să se evapore. Turnați sucul de roșii și o cană de apă caldă. Amestecați bine să nu fie cocoloașe.",
      "Fierberea. Puneți carnea înapoi în sos. Lichidul trebuie să acopere carnea. Fierbeți la foc mic, acoperit, timp de 30-40 de minute, până când carnea se desprinde de pe os.",
      "Finalizarea. Când ostropelul e gata și sosul a scăzut, adăugați restul de usturoi pisat (mujdei) pentru o aromă proaspătă și intensă. Presărați pătrunjel și serviți cu mămăligă."
    ],
    nutrition: { calories: 400, protein: 30, carbs: 12, fat: 22 }
  },
  "Ciulama de pui": {
    title: "Ciulama de Pui cu Ciuperci și Smântână",
    servings: 4,
    servingSize: "1 porție (300g)",
    pricePerServing: 18,
    prepTime: "20 min",
    cookTime: "35 min",
    ingredients: [
        { name: "Piept de pui/Pulpe", amount: "500 g" },
        { name: "Ciuperci Champignon", amount: "300 g" },
        { name: "Smântână lichidă", amount: "200 ml" },
        { name: "Făină", amount: "2 linguri" },
        { name: "Ceapă", amount: "1 buc" },
        { name: "Unt", amount: "50 g" },
        { name: "Mărar", amount: "1 legătură" }
    ],
    steps: [
        "Fierberea puiului. Tăiați puiul cubulețe. Puneți-l la fiert în apă cu sare. Spumați când e nevoie. Când e gata, scoateți carnea dar PĂSTRAȚI supa clară.",
        "Călirea ciupercilor. Într-o tigaie mare, topiți untul. Căliți ceapa tocată fin până devine sticloasă. Adăugați ciupercile tăiate felii și gătiți până scade toată apa lăsată de ele.",
        "Roux-ul (Baza albă). Presărați făina peste ciuperci și amestecați continuu timp de 1 minut, pentru a găti făina, dar fără a o rumeni.",
        "Formarea sosului. Turnați treptat, polonic cu polonic, supa de pui fierbinte peste amestecul de făină și ciuperci, amestecând energic cu telul pentru a evita cocoloașele. Continuați până obțineți un sos de consistența dorită.",
        "Fierberea finală. Adăugați carnea fiartă în sos. Lăsați să clocotească încet 5-10 minute pentru ca aromele să se combine.",
        "Smântâna și servirea. Turnați smântâna lichidă, amestecați și mai lăsați 2 minute pe foc (să nu fiarbă violent). Asezonați cu sare și piper. Opriți focul și presărați mărar proaspăt tocat din abundență."
    ],
    nutrition: { calories: 450, protein: 35, carbs: 15, fat: 28 }
  },
  "Gulaș": {
    title: "Gulaș de Vită (Gulyás Unguresc)",
    servings: 6,
    servingSize: "1 bol mare (450ml)",
    pricePerServing: 22,
    prepTime: "30 min",
    cookTime: "2.5 ore",
    ingredients: [
      { name: "Carne de vită (pulpă/gambă)", amount: "1 kg" },
      { name: "Ceapă", amount: "1 kg (cantitate egală cu carnea)" },
      { name: "Untură/Ulei", amount: "3 linguri" },
      { name: "Boia dulce (Paprika)", amount: "3 linguri pline" },
      { name: "Chimen semințe", amount: "1 linguriță" },
      { name: "Ardei gras", amount: "2 buc" },
      { name: "Cartofi", amount: "500 g" },
      { name: "Roșii/Pastă", amount: "2 buc / 1 lingură" }
    ],
    steps: [
      "Secretul cepei (Pörkölt). Tăiați carnea în cuburi de 3-4 cm. Tocați ceapa mărunt. Regula de aur: cantitatea de ceapă trebuie să fie mare, aproape egală cu carnea, deoarece ceapa va forma sosul gros natural.\n\nÎncingeți untura într-o oală grea (ceaun). Căliți ceapa la foc mic, foarte încet, timp de 15-20 de minute, până devine aurie și moale. Nu o ardeți!",
      "Paprika. Luați oala de pe foc (foarte important!). Adăugați boiaua de ardei (Paprika de calitate) și amestecați rapid cu ceapa. Dacă boiaua se arde, devine amară. Adăugați imediat carnea și puțină apă (50ml) și puneți înapoi pe foc.\n\nAdăugați chimenul, sarea, piperul și usturoiul pisat.",
      "Înăbușirea. Gătiți carnea în sucul propriu și al cepei, la foc mic, sub capac, timp de 60-90 de minute. Adăugați foarte puțină apă doar dacă este absolut necesar. Carnea trebuie să se înăbușe ('pörkölt'), nu să fiarbă în multă apă.\n\nCeapa se va dezintegra complet, formând un sos gros și roșu.",
      "Legumele. Când carnea este aproape moale, adăugați ardeii tăiați cuburi și roșiile. Turnați apă fierbinte cât să obțineți consistența unei supe groase (Gulyás este o supă consistentă, nu o tocană uscată).\n\nLăsați să fiarbă 15 minute.",
      "Cartofii și găluștele (Csipetke). Adăugați cartofii tăiați cuburi. Opțional, puteți face mici găluște din făină și ou (csipetke) și să le fierbeți direct în gulaș în ultimele 10 minute.\n\nFierbeți până când cartofii sunt moi.",
      "Servirea. Gulașul este gata când carnea se topește în gură și sosul este onctuos. Se servește fierbinte, cu pâine proaspătă de casă și murături (castraveți acri) alături. Unii adaugă o lingură de smântână și ardei iute."
    ],
    nutrition: { calories: 550, protein: 40, carbs: 30, fat: 25, sodium: 800 }
  },
  "Iahnie de fasole": {
      title: "Iahnie de Fasole (Mâncare de Post)",
      servings: 4,
      servingSize: "1 porție (300g)",
      pricePerServing: 10,
      prepTime: "20 min",
      cookTime: "1.5 ore",
      ingredients: [{name: "Fasole boabe", amount: "500g"}, {name: "Ceapă", amount: "3 mari"}, {name: "Morcov", amount: "1"}, {name: "Bulion", amount: "3 linguri"}, {name: "Foi dafin", amount: "2"}, {name: "Cimbru", amount: "1 linguriță"}],
      steps: [
          "Fierberea fasolei. Lăsați fasolea la înmuiat peste noapte. Fierbeți-o schimbând apa de 2-3 ori pentru a elimina toxinele. În ultima apă, fierbeți până bobul e moale.",
          "Călirea legumelor. Într-o cratiță, încingeți uleiul. Căliți ceapa tocată solzișori și morcovul ras sau rondele. Căliți până ceapa devine aurie.",
          "Adăugarea bulionului. Puneți pasta de tomate (bulionul) peste ceapă și amestecați. Adăugați puțină zeamă fierbinte de la fasole pentru a forma sosul.",
          "Formarea iahniei. Adăugați fasolea scursă peste sosul de ceapă. Completați cu zeamă de la fasole doar cât să o acopere puțin (iahnia scade la cuptor).",
          "Aromatizarea. Adăugați foile de dafin, cimbrul, sarea și piperul. Amestecați ușor.",
          "Gătirea finală. Puteți fierbe pe plită încă 20 de minute sau, ideal, dați cratița la cuptor pentru 30 de minute până scade sosul și se formează o crustă deasupra. Se servește cu murături."
      ],
      nutrition: {calories: 350, protein: 15, carbs: 60, fat: 5}
  },
  "Tocăniță de vițel": {
      title: "Tocăniță de Vițel cu Mazăre",
      servings: 4,
      servingSize: "1 porție (350g)",
      pricePerServing: 25,
      prepTime: "20 min",
      cookTime: "1.5 ore",
      ingredients: [{name: "Carne vițel", amount: "600g"}, {name: "Mazăre", amount: "400g"}, {name: "Ceapă", amount: "1"}, {name: "Morcovi", amount: "2"}, {name: "Mărar", amount: "1 legătură"}],
      steps: [
          "Pregătirea cărnii. Tăiați carnea de vițel în cuburi potrivite. Încingeți ulei într-o cratiță și prăjiți carnea până se rumenește pe toate părțile. Scoateți-o pe o farfurie.",
          "Călirea legumelor. În același ulei, căliți ceapa tocată și morcovii rondele timp de 5 minute.",
          "Fierberea. Puneți carnea înapoi. Acoperiți cu apă caldă. Puneți capacul și fierbeți la foc mic aproximativ 45-60 de minute, până când carnea este aproape moale.",
          "Adăugarea mazărei. Puneți mazărea (proaspătă sau congelată) și sucul de roșii. Asezonați cu sare și piper.",
          "Legarea sosului. Dacă sosul e prea lichid, puteți amesteca o linguriță de făină cu puțină apă și să o turnați în tocană. Fierbeți încă 15-20 de minute.",
          "Servirea. Opriți focul. Presărați mărar proaspăt tocat din abundență. Se servește caldă."
      ],
      nutrition: {calories: 400, protein: 35, carbs: 20, fat: 15}
  },
  "Ratatouille": {
      title: "Ratatouille (Tocană de Legume)",
      servings: 4,
      servingSize: "1 bol (250g)",
      pricePerServing: 12,
      prepTime: "20 min",
      cookTime: "40 min",
      ingredients: [{name: "Vinete", amount: "1"}, {name: "Dovlecei", amount: "2"}, {name: "Ardei", amount: "2"}, {name: "Roșii", amount: "4"}, {name: "Ceapă", amount: "1"}],
      steps: [
          "Pregătirea. Spălați și tăiați toate legumele (vinete, dovlecei, ardei, roșii) în cuburi de dimensiuni egale. Tocați ceapa și usturoiul.",
          "Sotarea vinetelor. Într-o tigaie mare cu ulei, prăjiți cuburile de vinete până se rumenesc. Scoateți-le separat. Vinetele absorb mult ulei, deci gătiți-le singure.",
          "Sotarea dovleceilor. Prăjiți dovleceii în aceeași tigaie până se înmoaie puțin. Scoateți-i.",
          "Baza de sos. Căliți ceapa și ardeii până se înmoaie. Adăugați roșiile, usturoiul și ierburi de Provence. Fierbeți până se formează un sos.",
          "Fierberea împreună. Puneți vinetele și dovleceii înapoi în sosul de roșii. Amestecați delicat.",
          "Finalizarea. Acoperiți și fierbeți la foc mic 10-15 minute pentru a îmbina aromele, dar fără a transforma legumele în terci. Serviți cald sau rece."
      ],
      nutrition: {calories: 200, protein: 4, carbs: 15, fat: 10}
  },
  "Tocăniță de porc": {
      title: "Tocăniță de Porc cu Ceapă",
      servings: 4,
      servingSize: "1 porție (350g)",
      pricePerServing: 18,
      prepTime: "15 min",
      cookTime: "1 oră",
      ingredients: [{name: "Pulpă porc", amount: "600g"}, {name: "Ceapă", amount: "4 mari"}, {name: "Vin roșu", amount: "100ml"}, {name: "Bulion", amount: "2 linguri"}],
      steps: [
          "Carnea. Tăiați carnea de porc în cuburi. Încingeți ulei sau untură într-un ceaun. Prăjiți carnea la foc iute până se rumenește bine. Scoateți carnea.",
          "Ceapa. Tăiați ceapa solzișori (cantitate mare). Căliți-o în grăsimea rămasă la foc mic, până devine aurie și moale.",
          "Deglasarea. Turnați vinul roșu peste ceapă și lăsați să fiarbă 2 minute pentru a se evapora alcoolul. Puneți carnea înapoi.",
          "Lichidul. Adăugați o cană de apă, bulionul, foaia de dafin, sare și piper. Lichidul trebuie să acopere carnea.",
          "Fierberea. Puneți capacul și fierbeți la foc mic timp de 45-60 de minute, până când carnea este fragedă.",
          "Servirea. Sosul trebuie să fie scăzut și format din ceapa topită. Se servește cu piure de cartofi sau mămăligă."
      ],
      nutrition: {calories: 500, protein: 30, carbs: 10, fat: 35}
  },
  "Pui cu smântână": {
      title: "Pui cu Smântână și Mămăligă",
      servings: 4,
      servingSize: "1 porție (350g)",
      pricePerServing: 20,
      prepTime: "10 min",
      cookTime: "30 min",
      ingredients: [{name: "Pui", amount: "600g"}, {name: "Smântână", amount: "300g"}, {name: "Făină", amount: "1 lingură"}, {name: "Usturoi", amount: "3 căței"}],
      steps: [
          "Gătirea puiului. Tăiați puiul bucăți. Puteți să-l fierbeți în apă cu sare (pentru o variantă dietetică) sau să-l prăjiți în ulei până se rumenește.",
          "Scoaterea cărnii. Dacă l-ați prăjit, scoateți carnea. Păstrați grăsimea din tigaie.",
          "Sosul alb. În grăsimea rămasă (sau puțin unt), adăugați o lingură de făină. Amestecați rapid. Stingeți cu o cană de supă de pui sau apă, amestecând continuu să nu facă cocoloașe.",
          "Combinarea. Puneți puiul în sosul format. Fierbeți 5 minute.",
          "Smântâna. Reduceți focul la minim. Adăugați smântâna fermentată (grasă) amestecată bine în prealabil. Nu lăsați să clocotească violent să nu se taie.",
          "Usturoiul. Opriți focul. Adăugați usturoiul pisat și amestecați. Se servește fierbinte cu mămăligă tare."
      ],
      nutrition: {calories: 600, protein: 35, carbs: 8, fat: 45}
  },
  "Ghiveci de legume": {
      title: "Ghiveci Călugăresc",
      servings: 4,
      servingSize: "1 bol (300g)",
      pricePerServing: 10,
      prepTime: "30 min",
      cookTime: "1 oră",
      ingredients: [{name: "Cartofi, Vinete, Dovlecei", amount: "mix 1kg"}, {name: "Ceapă", amount: "2"}, {name: "Suc roșii", amount: "300ml"}, {name: "Ulei", amount: "50ml"}],
      steps: [
          "Pregătirea. Curățați și spălați toate legumele. Tăiați cartofii, vinetele, dovleceii, ardeii și morcovii în cuburi mari.",
          "Tava. Alegeți o tavă mare și adâncă. Puneți toate legumele în tavă. Adăugați ceapa tocată mare.",
          "Sosul. Turnați sucul de roșii, uleiul și o cană de apă peste legume.",
          "Condimentarea. Adăugați sare, piper, cimbru și foi de dafin. Amestecați totul bine cu mâinile direct în tavă.",
          "Coacerea. Introduceți tava în cuptorul preîncălzit la 200°C. Coaceți aproximativ o oră.",
          "Rumenirea. Verificați din când în când și mai amestecați. Ghiveciul este gata când legumele sunt moi și zeama a scăzut, formând un sos delicios. Serviți cu pâine."
      ],
      nutrition: {calories: 250, protein: 5, carbs: 30, fat: 10}
  },
  "Tocăniță vânătorească": {
      title: "Tocăniță Vânătorească (Mistreț/Vită)",
      servings: 4,
      servingSize: "1 porție (350g)",
      pricePerServing: 30,
      prepTime: "30 min",
      cookTime: "2 ore",
      ingredients: [{name: "Carne", amount: "600g"}, {name: "Ciuperci", amount: "300g"}, {name: "Vin roșu", amount: "150ml"}, {name: "Bacon", amount: "100g"}],
      steps: [
          "Baconul. Tăiați baconul afumat și prăjiți-l într-o cratiță până devine crocant. Scoateți-l.",
          "Carnea. În grăsimea lăsată, prăjiți carnea de vită sau vânat tăiată cuburi până se sigilează bine.",
          "Legumele. Adăugați ceapa și morcovul. Căliți câteva minute. Adăugați ciupercile tăiate sferturi.",
          "Vinul. Stingeți totul cu vin roșu sec. Lăsați să fiarbă 5 minute.",
          "Aromele. Adăugați apă sau supă, foi de dafin, ienibahar și piper boabe. Puneți baconul înapoi.",
          "Fierberea. Fierbeți la foc mic, acoperit, timp de 2 ore sau până când carnea este foarte fragedă. Sosul trebuie să fie închis la culoare și aromat."
      ],
      nutrition: {calories: 550, protein: 40, carbs: 5, fat: 30}
  },
  "Tocăniță de ciuperci": {
      title: "Tocăniță de Ciuperci cu Mămăligă",
      servings: 4,
      servingSize: "1 porție (300g)",
      pricePerServing: 12,
      prepTime: "15 min",
      cookTime: "25 min",
      ingredients: [{name: "Ciuperci asortate", amount: "800g"}, {name: "Ceapă", amount: "2"}, {name: "Smântână/Sos roșii", amount: "200ml"}, {name: "Mărar", amount: "1 legătură"}],
      steps: [
          "Curățarea. Ștergeți ciupercile de pământ sau spălați-le rapid. Tăiați-le în felii sau bucăți mari (dacă sunt mici, lăsați-le întregi).",
          "Ceapa. Căliți ceapa tocată mărunt în ulei până devine aurie.",
          "Ciupercile. Adăugați ciupercile în tigaie. La început vor lăsa multă apă. Lăsați să fiarbă până scade apa lor.",
          "Prăjirea. După ce a scăzut apa, lăsați ciupercile să se călească puțin în ulei pentru gust.",
          "Sosul. Adăugați sosul ales: fie smântână pentru varianta albă, fie suc de roșii cu usturoi pentru cea roșie. Condimentați.",
          "Finalizarea. Mai fierbeți 5-10 minute. Opriți focul și adăugați mărar tocat. Se servește obligatoriu cu mămăligă fierbinte."
      ],
      nutrition: {calories: 300, protein: 10, carbs: 15, fat: 20}
  }
};
