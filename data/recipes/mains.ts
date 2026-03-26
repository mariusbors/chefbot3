
import { Recipe } from '../../types';

export const MAIN_RECIPES: Record<string, Recipe> = {
  "Steak de vită": {
    title: "Steak de Vită Perfect (Ribeye/Antricot)",
    servings: 2,
    servingSize: "1 steak (300g)",
    pricePerServing: 50,
    prepTime: "10 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Antricot de vită (Ribeye)", amount: "2 buc (grosime 3-4cm)" },
      { name: "Unt nesărat", amount: "50 g" },
      { name: "Usturoi", amount: "3 căței" },
      { name: "Rozmarin & Cimbru", amount: "crenguțe proaspete" },
      { name: "Ulei de măsline/avocado", amount: "2 linguri" },
      { name: "Sare de mare (Maldon)", amount: "generos" },
      { name: "Piper negru", amount: "proaspăt măcinat" }
    ],
    steps: [
      "Temperarea și uscarea. Scoateți carnea din frigider cu cel puțin 30-45 de minute înainte de gătire. Carnea rece se va găti neuniform (gri pe margini, rece în mijloc). Ștergeți carnea foarte bine cu prosoape de hârtie pe toate părțile.\n\nSuprafața trebuie să fie complet uscată pentru a obține reacția Maillard (crusta maronie delicioasă). Dacă este umedă, carnea va fierbe în loc să se prăjească.",
      
      "Asezonarea. Chiar înainte de a pune carnea în tigaie (nu cu mult timp înainte, pentru a nu scoate apa), asezonați generos cu sare de mare pe toate părțile, inclusiv pe marginile groase. Piperul se pune de obicei la final pentru a nu se arde și a deveni amar, dar dacă vă place crusta de piper, folosiți piper zdrobit grosier.",
      
      "Încingerea tigăii. Folosiți o tigaie de fontă (cast iron) sau inox cu fund gros. Puneți tigaia pe foc mare și lăsați-o să se încingă până începe să fumege ușor. Adăugați uleiul cu punct de fum ridicat (avocado sau rapiță).\n\nAșezați fripturile în tigaie cu o mișcare opusă vouă, pentru a nu vă stropi cu ulei. Trebuie să auziți un sfârâit puternic și agresiv.",
      
      "Sigilarea (Searing). Lăsați carnea nemișcată timp de 2-3 minute pentru a forma crusta. Întoarceți-o și gătiți încă 2-3 minute pe cealaltă parte. Nu uitați să sigilați și marginile de grăsime, ținând friptura vertical cu un clește.\n\nÎntoarceți friptura la fiecare minut pentru o gătire uniformă, până când temperatura internă ajunge la 50°C (pentru Medium-Rare).",
      
      "Basting-ul (Aromarea cu unt). Reduceți focul la mediu. Adăugați untul, căățeii de usturoi zdrobiți ușor (cu coajă) și ierburile proaspete. Când untul face spumă (nutty butter), înclinați tigaia.\n\nCu o lingură mare, luați untul fierbinte și aromat și turnați-l continuu peste carne ('basting'). Acest proces gătește carnea delicat și îi dă o aromă incredibilă de nucă și ierburi.",
      
      "Odihna (Resting). Scoateți carnea pe un fund de lemn sau grătar. Turnați untul rămas din tigaie peste ea. Lăsați-o să se odihnească obligatoriu 5-10 minute înainte de a o tăia.\n\nÎn acest timp, fibrele musculare se relaxează și sucurile se redistribuie în toată bucata. Dacă o tăiați imediat, toate sucurile vor curge pe tocător și carnea va fi uscată."
    ],
    nutrition: { calories: 650, protein: 45, carbs: 0, fat: 50, micronutrients: ["Iron", "B12", "Zinc"] }
  },

  "Pui Tikka Masala": {
    title: "Pui Tikka Masala (Clasic Indian)",
    servings: 4,
    servingSize: "1 bol (350g)",
    pricePerServing: 25,
    prepTime: "30 min (+marinare)",
    cookTime: "40 min",
    ingredients: [
      { name: "Piept de pui", amount: "800 g" },
      { name: "Iaurt", amount: "200 g" },
      { name: "Pastă Tikka Masala", amount: "3 linguri" },
      { name: "Roșii pasate", amount: "400 g" },
      { name: "Smântână lichidă", amount: "100 ml" },
      { name: "Ceapă", amount: "2 buc" },
      { name: "Usturoi & Ghimbir", amount: "pastă" },
      { name: "Coriandru proaspăt", amount: "1 legătură" }
    ],
    steps: [
      "Marinarea cărnii. Tăiați puiul în cuburi. Într-un bol, amestecați iaurtul, pasta de usturoi și ghimbir, puțină zeamă de lămâie și jumătate din condimentele Tikka (sau Garam Masala, chimen, coriandru, boia).\n\nLăsați puiul la marinat cel puțin o oră. Iaurtul frăgezește carnea, iar condimentele îi dau gustul specific.",
      
      "Gătirea puiului (Tikka). Scoateți puiul din marinadă (scuturați excesul). Frigeți bucățile de pui la foc iute pe grătar, în tigaie grill sau la cuptor (la funcția grill) până prind urme de arsură neagră ('char').\n\nPuiul nu trebuie să fie gătit complet în interior, doar rumenit bine la exterior pentru aroma de fum.",
      
      "Baza sosului. Într-un cratiță mare, căliți ceapa tocată mărunt în unt sau ghee până devine aurie. Adăugați restul de pastă de ghimbir și usturoi și mai gătiți 1 minut.\n\nAdăugați restul de condimente uscate (chimen, coriandru, curcuma, boia) și prăjiți-le 30 de secunde ('blooming') pentru a le activa uleiurile volatile.",
      
      "Fierberea sosului. Adăugați roșiile pasate și puțină apă. Răzuiți fundul oalei pentru a dezlipi aromele caramelizate. Lăsați sosul să fiarbă la foc mic 15-20 de minute până se îngroașă și uleiul se ridică la suprafață.\n\nPentru un sos fin, îl puteți blenda, dar varianta rustică cu bucățele de ceapă este la fel de delicioasă.",
      
      "Combinarea. Puneți bucățile de pui fript în sosul de roșii. Lăsați să fiarbă împreună încă 10 minute, până când puiul este gătit complet și moale.\n\nAdăugați smântâna lichidă și amestecați. Sosul va deveni portocaliu cremos.",
      
      "Servirea. Opriți focul. Presărați frunze de coriandru proaspăt tocat. Se servește cu orez Basmati fiert cu cardamom sau cu pâine Naan caldă, unsă cu unt și usturoi."
    ],
    nutrition: { calories: 550, protein: 35, carbs: 15, fat: 30, sodium: 850 }
  },

  "Coq au Vin": {
    title: "Coq au Vin (Pui în Vin Roșu - Rețetă Franceză)",
    servings: 4,
    servingSize: "1 porție (400g)",
    pricePerServing: 28,
    prepTime: "30 min",
    cookTime: "1.5 ore",
    ingredients: [
      { name: "Pui (bucăți cu os)", amount: "1.5 kg" },
      { name: "Vin roșu sec (Pinot Noir)", amount: "500 ml" },
      { name: "Bacon (Lardon)", amount: "150 g" },
      { name: "Ciuperci Champignon", amount: "300 g" },
      { name: "Ceapă perlată", amount: "200 g" },
      { name: "Morcovi", amount: "2 buc" },
      { name: "Supă de pui/vită", amount: "250 ml" },
      { name: "Făină", amount: "2 linguri" }
    ],
    steps: [
      "Pregătirea bazei (Lardons). Tăiați baconul în bastonașe. Într-un cratiță grea de fontă (Dutch Oven), prăjiți baconul până devine crocant și își lasă grăsimea. Scoateți baconul cu o spumieră.\n\nÎn grăsimea rămasă, prăjiți bucățile de pui (uscate bine în prealabil) până se rumenesc puternic pe toate părțile. Scoateți puiul.",
      
      "Legumele. În aceeași grăsime, căliți morcovii rondele și ceapa tocată (sau ceapa perlată întreagă). Gătiți 5 minute până se înmoaie ușor. Adăugați usturoiul zdrobit.\n\nPresărați făina peste legume și amestecați 2 minute pentru a o găti. Aceasta va lega sosul mai târziu.",
      
      "Deglasarea și fierberea. Turnați vinul roșu în oală, răzuind fundul vasului. Adăugați supa de pui, o lingură de pastă de tomate și un buchet garni (cimbru, dafin, pătrunjel).\n\nPuneți puiul și baconul înapoi în oală. Lichidul ar trebui să acopere carnea pe trei sferturi.",
      
      "Gătirea lentă. Aduceți la fierbere, apoi reduceți focul la minim, puneți capacul și lăsați să fiarbă încet (simmer) timp de 45-60 de minute, sau până când puiul este foarte fraged.\n\nAlternativ, puteți pune oala în cuptorul preîncălzit la 160°C.",
      
      "Garnitura de ciuperci. Într-o tigaie separată, sotați ciupercile tăiate sferturi în puțin unt până se rumenesc. Adăugați-le în tocăniță în ultimele 15 minute de gătire.\n\nDacă sosul este prea lichid la final, puteți scoate carnea și fierbe sosul la foc iute să scadă.",
      
      "Servirea. Coq au Vin are un gust bogat, de pământ și vin. Se servește presărat cu pătrunjel proaspăt, alături de cartofi natur, piure cremos sau tăiței lați cu unt."
    ],
    nutrition: { calories: 600, protein: 45, carbs: 15, fat: 30, micronutrients: ["Iron"] }
  },

  "Peking Duck": {
    title: "Rață Peking (Piele Crocantă)",
    servings: 4,
    servingSize: "2 clătite rulate",
    pricePerServing: 40,
    prepTime: "24 ore (uscare)",
    cookTime: "1.5 ore",
    ingredients: [
      { name: "Rață întreagă", amount: "2 kg" },
      { name: "Miere/Sirop malț", amount: "4 linguri" },
      { name: "Sos soia", amount: "2 linguri" },
      { name: "Oțet orez", amount: "1 lingură" },
      { name: "Praf 5 arome", amount: "1 linguriță" },
      { name: "Clătite chinezești", amount: "1 pachet" },
      { name: "Castravete, Ceapă verde", amount: "fâșii" },
      { name: "Sos Hoisin", amount: "pt servire" }
    ],
    steps: [
      "Opărirea pielii. Curățați rața. Desprindeți pielea de carne introducând degetele pe sub piele la gât și piept (fără a o rupe). Așezați rața pe un grătar.\n\nTurnați apă clocotită peste toată rața. Pielea se va strânge instantaneu și porii se vor închide. Acest pas este esențial pentru textura crocantă.",
      
      "Glazurarea. Amestecați mierea, sosul de soia, oțetul, praful de 5 arome și puțină apă caldă. Ungeți rața cu acest amestec pe toate părțile, în mai multe straturi.\n\nZahărul din glazură va carameliza pielea, dându-i acea culoare roșiatică-arămie de mahon.",
      
      "Uscarea (Pasul critic). Lăsați rața descoperită în frigider, așezată vertical sau pe grătar, timp de 24-48 de ore. Pielea trebuie să se usuce complet și să devină ca un pergament.\n\nDacă pielea are umiditate, ea se va fierbe la cuptor în loc să devină crocantă.",
      
      "Coacerea. Scoateți rața cu o oră înainte. Coaceți-o pe grătarul cuptorului (cu o tavă cu apă dedesubt pentru grăsime) la 180°C timp de 1 oră și 15 minute.\n\nPielea trebuie să devină sticloasă, întinsă și extrem de crocantă ('glass skin').",
      
      "Tranșarea. Lăsați rața să se odihnească 15 minute. Folosind un cuțit ascuțit, tăiați mai întâi pielea crocantă în pătrățele, apoi carnea în felii subțiri. Tradițional se servește mai multă piele.",
      
      "Servirea. Întindeți sos Hoisin pe o clătită chinezească subțire (gătită la abur). Puneți o felie de carne, o bucată de piele crocantă, fâșii de castravete și ceapă verde.\n\nRulați clătita și savurați contrastul de texturi."
    ],
    nutrition: { calories: 600, protein: 30, carbs: 35, fat: 40, sodium: 1100 }
  },

  "Schnitzel vienez": {
    title: "Schnitzel Vienez (Wiener Schnitzel Original)",
    servings: 4,
    servingSize: "1 bucată mare (200g)",
    pricePerServing: 28,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Carne de vițel (pulpă)", amount: "4 felii (150g)" },
      { name: "Făină albă", amount: "100 g" },
      { name: "Ouă", amount: "2 mari" },
      { name: "Pesmet fin (Kaiser)", amount: "200 g" },
      { name: "Unt clarifiat (Ghee)", amount: "300 g" },
      { name: "Lămâie", amount: "1 buc" },
      { name: "Sare", amount: "după gust" }
    ],
    steps: [
      "Baterea cărnii. Așezați feliile de vițel între două folii de plastic. Bateți carnea cu ciocanul (partea plată) cu mișcări dinspre centru spre exterior.\n\nCarnea trebuie să fie foarte subțire, de aproximativ 3-4 mm grosime, uniformă. Aveți grijă să nu rupeți fibrele. Sărați carnea pe ambele părți.",
      
      "Panada (Stada de pane). Pregătiți 3 farfurii largi. 1: Făina. 2: Ouăle bătute ușor cu o furculiță (nu spumă) și puțină sare. 3: Pesmetul fin (de chifle, nu panko).\n\nOrdinea este sfântă: Făină -> Ou -> Pesmet.",
      
      "Împachetarea. Treceți carnea prin făină și scuturați excesul (trebuie doar un strat fin de praf). Treceți prin ou, asigurându-vă că e acoperită peste tot. Treceți prin pesmet.\n\nFOARTE IMPORTANT: Nu apăsați pesmetul pe carne! Doar tăvăliți carnea ușor. Panada trebuie să fie lejeră ('loose') pentru a se umfla (soufflé) la prăjit.",
      
      "Prăjirea (Soufflé Schnitzel). Schnitzelul trebuie să înoate în grăsime. Folosiți o tigaie largă cu mult unt clarifiat (sau ulei vegetal cu puțin unt) încins la 170-180°C.\n\nPuneți carnea în tigaie. Mișcați tigaia continuu înainte și înapoi ('shaking'). Valurile de ulei fierbinte trebuie să treacă peste schnitzel. Această tehnică face ca panada să se desprindă de carne și să formeze bule de aer, devenind ondulată și crocantă.",
      
      "Întoarcerea. Când este auriu pe o parte (cca 2 minute), întoarceți-l și mai prăjiți 1-2 minute pe cealaltă parte, continuând să mișcați tigaia. Culoarea trebuie să fie un auriu uniform.",
      
      "Servirea. Scoateți pe hârtie absorbantă. Se servește imediat cu o felie de lămâie (pe care o stoarceți deasupra) și salată de cartofi austriacă (cu oțet și ceapă) sau dulceață de merișoare. Panada trebuie să fie uscată și crocantă, nu uleioasă."
    ],
    nutrition: { calories: 500, protein: 30, carbs: 35, fat: 25, sodium: 600 }
  },

  "Shawarma": {
    title: "Shawarma de Pui (Marinată în Iaurt)",
    servings: 4,
    servingSize: "1 lipie (350g)",
    pricePerServing: 20,
    prepTime: "20 min (+4h marinare)",
    cookTime: "20 min",
    ingredients: [
      {name: "Pulpe pui dezosate", amount: "800 g"},
      {name: "Lipii libaneze", amount: "4 buc"},
      {name: "Iaurt", amount: "200 g"},
      {name: "Usturoi", amount: "6 căței"},
      {name: "Mix Shawarma", amount: "1 plic/lingură"},
      {name: "Cartofi prăjiți", amount: "200 g"},
      {name: "Castraveți murați", amount: "4 buc"}
    ],
    steps: [
      "Marinada. Amestecați iaurtul, usturoiul pisat, lămâia, uleiul și condimentele (chimen, coriandru, boia, scorțișoară, cardamon). Iaurtul frăgezește carnea și îi dă o textură moale.",
      "Tăierea și odihna. Tăiați puiul fâșii sau lăsați-l bucăți mari dacă îl gătiți întreg. Masați cu marinada și lăsați la frigider minim 4 ore pentru ca aromele să pătrundă.",
      "Gătirea. Încingeți o tigaie grill sau cuptorul la maxim. Gătiți carnea până se rumenește bine și are margini arse (ca la rotisor). Nu o aglomerați în tigaie, trebuie să se frigă, nu să fiarbă.",
      "Tăierea fină. După ce carnea e gata, lăsați-o să se odihnească 5 minute, apoi tăiați-o în fâșii subțiri. Pregătiți sosul de usturoi (Toum) mixând usturoi, ulei și lămâie.",
      "Asamblarea. Ungeți lipia cu sos. Puneți un strat generos de carne. Adăugați cartofii prăjiți (în interior!), castraveții murați fâșii și eventual puțină varză sau roșii.",
      "Rularea și sigilarea. Rulați strâns lipia. Puneți shawarma rulată înapoi în tigaia fierbinte 1 minut pe fiecare parte pentru a o sigila și a face lipia crocantă. Se servește caldă."
    ],
    nutrition: { calories: 750, protein: 40, carbs: 60, fat: 35, sodium: 1200 }
  },

  "Chili con carne": {
    title: "Chili con Carne (Tocană Picantă cu Fasole)",
    servings: 6,
    servingSize: "1 bol mare (400g)",
    pricePerServing: 20,
    prepTime: "20 min",
    cookTime: "1.5 ore",
    ingredients: [
      { name: "Carne tocată de vită", amount: "800 g" },
      { name: "Fasole roșie (Kidney beans)", amount: "2 conserve" },
      { name: "Ceapă", amount: "2 mari" },
      { name: "Ardei gras", amount: "2 buc" },
      { name: "Roșii cuburi", amount: "800 g" },
      { name: "Chili pudră/Cayenne", amount: "1-2 linguri" },
      { name: "Chimen măcinat", amount: "1 lingură" },
      { name: "Ciocolată neagră", amount: "2 pătrățele" },
      { name: "Cafea", amount: "50 ml (opțional)" }
    ],
    steps: [
      "Baza de aromă. Căliți ceapa și ardeiul gras tocate mărunt în ulei până se înmoaie. Adăugați usturoiul zdrobit.\n\nAdăugați carnea tocată. Măriți focul și prăjiți carnea, zdrobind-o cu lingura, până devine maronie și nu mai este roz. Scurgeți excesul de grăsime dacă este prea mult.",
      
      "Condimentarea. Adăugați condimentele: pudra de chili (atenție la iuțeală), chimenul (esențial pentru gustul Tex-Mex), oregano, sare și piper. Căliți condimentele 1 minut cu carnea pentru a le activa.",
      
      "Lichidul. Turnați roșiile cuburi (cu tot cu suc) și puțină supă de vită (sau apă). Puteți adăuga și o ceașcă de cafea tare - aceasta intensifică gustul de vită.\n\nLăsați să fiarbă, apoi reduceți focul, puneți capacul și fierbeți încet (simmer) timp de 45-60 de minute. Sosul trebuie să se îngroașe și aromele să se combine.",
      
      "Fasolea. Adăugați fasolea roșie scursă și clătită în ultimele 15 minute de fierbere. Fasolea este deja fiartă (la conservă) și nu trebuie să se terciuiască, doar să se încălzească.",
      
      "Ingredientul secret. Opriți focul. Adăugați 2 pătrățele de ciocolată neagră (minim 70% cacao) în chili-ul fierbinte. Amestecați până se topește. Ciocolata nu face mâncarea dulce, ci îi dă o culoare bogată, lucioasă și o profunzime de gust incredibilă.",
      
      "Servirea. Chili con carne se servește fierbinte, cu orez fiert, nachos sau cartofi copți. Deasupra se pune o lingură de smântână fermentată, brânză Cheddar rasă și coriandru proaspăt."
    ],
    nutrition: { calories: 500, protein: 35, carbs: 30, fat: 20, fiber: 12 }
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

  "Paella cu fructe de mare și pui": {
    title: "Paella Mixta (Pui și Fructe de Mare)",
    servings: 6,
    servingSize: "1 farfurie (350g)",
    pricePerServing: 35,
    prepTime: "30 min",
    cookTime: "45 min",
    ingredients: [
      { name: "Orez (Bomba)", amount: "500 g" },
      { name: "Pui (bucăți cu os)", amount: "500 g" },
      { name: "Creveți & Midii", amount: "500 g" },
      { name: "Calamar (inele)", amount: "200 g" },
      { name: "Fasole verde & Mazăre", amount: "200 g" },
      { name: "Ardei roșu", amount: "1 buc" },
      { name: "Șofran", amount: "1 g" },
      { name: "Supă pui/pește", amount: "1.5 L" }
    ],
    steps: [
      "Călirea cărnii. În tigaia de paella, încingeți uleiul. Sărați puiul și prăjiți-l bine până se rumenește pe toate părțile. Împingeți-l spre marginile tigăii pentru a face loc în centru.",
      "Fructele de mare. Căliți inelele de calamar și ardeiul roșu tăiat fâșii în centrul tigăii timp de 2-3 minute, apoi împingeți-le și pe ele spre margine.",
      "Sofrito. În centrul tigăii, căliți roșiile rase cu usturoi și boia dulce. Amestecați totul în tigaie (carnea, calamarul, legumele) pentru a combina aromele. Turnați supa fierbinte infuzată cu șofran. Lăsați să fiarbă 10 minute.",
      "Orezul. Adăugați orezul în ploaie, distribuindu-l uniform pe toată suprafața. Nu mai amestecați din acest moment! Fierbeți la foc iute 10 minute. Adăugați fasolea verde și mazărea.",
      "Aranjarea finală. Când orezul începe să apară la suprafața lichidului, aranjați frumos creveții și midiile (curățate) deasupra. Reduceți focul și mai gătiți 10-15 minute până când orezul a absorbit lichidul și midiile s-au deschis.",
      "Socarrat și Odihnă. Măriți focul la maxim pentru 1 minut la final pentru a forma crusta caramelizată pe fund (socarrat). Opriți focul, acoperiți cu un prosop și lăsați 5 minute să se odihnească. Serviți cu felii de lămâie."
    ],
    nutrition: { calories: 600, protein: 35, carbs: 65, fat: 20 }
  },

  "Friptură de porc glazurată": {
    title: "Friptură de Porc Glazurată cu Miere și Muștar",
    servings: 6,
    servingSize: "2 felii (200g)",
    pricePerServing: 20,
    prepTime: "20 min",
    cookTime: "1.5 ore",
    ingredients: [
      { name: "Cotlet de porc (bucată întreagă)", amount: "1.5 kg" },
      { name: "Miere", amount: "3 linguri" },
      { name: "Muștar Dijon", amount: "3 linguri" },
      { name: "Usturoi", amount: "4 căței" },
      { name: "Cimbru/Rozmarin", amount: "proaspăt" },
      { name: "Vin alb", amount: "100 ml" },
      { name: "Ulei", amount: "2 linguri" }
    ],
    steps: [
      "Pregătirea cărnii. Scoateți carnea din frigider cu o oră înainte. Legați bucata de cotlet cu sfoară de bucătărie pentru a-și menține forma rotundă la copt. Cresteți grăsimea de deasupra (dacă are) în romburi. Asezonați bine cu sare și piper.",
      "Sigilarea. Într-o tigaie sau cratiță care merge la cuptor, încingeți uleiul. Prăjiți bucata de carne pe toate părțile până devine aurie. Acest pas este vital pentru a păstra sucurile în interior.",
      "Glazura. Într-un bol, amestecați mierea, muștarul, usturoiul pisat, ierburile tocate și puțin ulei. Ungeți carnea generos cu această pastă pe toate părțile.",
      "Pregătirea tăvii. Așezați carnea în tavă. Turnați vinul alb și puțină apă pe fundul tăvii (nu pe carne, ca să nu spălați glazura). Adăugați căței de usturoi și crenguțe de cimbru în lichid.",
      "Coacerea și Basting. Coaceți la 180°C timp de aproximativ 60-80 de minute. Din 20 în 20 de minute, scoateți tava și ungeți carnea cu sosul format pe fundul tăvii. Dacă se arde glazura, acoperiți cu folie.",
      "Odihna. Scoateți friptura când temperatura internă este 65-70°C. Acoperiți lejer cu folie și lăsați-o să se odihnească 15 minute. Glazura va fi lipicioasă și lucioasă. Serviți feliată."
    ],
    nutrition: { calories: 500, protein: 40, carbs: 10, fat: 30 }
  },

  "Burger clasic": {
    title: "Burger Clasic de Vită (Stil Gourmet)",
    servings: 4,
    servingSize: "1 burger (350g)",
    pricePerServing: 25,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Carne tocată vită (20% grăsime)", amount: "600 g" },
      { name: "Chifle brioche", amount: "4 buc" },
      { name: "Brânză Cheddar", amount: "4 felii" },
      { name: "Roșie, Ceapă roșie, Salată", amount: "felii" },
      { name: "Castraveți murați", amount: "felii" },
      { name: "Sos (Maioneză, Ketchup, Muștar)", amount: "mix" },
      { name: "Unt", amount: "pt chifle" }
    ],
    steps: [
      "Formarea chiftelelor. Folosiți carne de vită proaspăt tocată, cu 20% grăsime. Împărțiți carnea în 4 bile egale, fără a o frământa prea mult. Formați chiftelele (patties) puțin mai largi decât chiflele, deoarece se vor strânge la gătit. Apăsați mijlocul cu degetul mare pentru a nu se bomba.",
      "Gătirea primei părți. Sărați carnea generos DOAR înainte de a o pune pe grătar/tigaie. Încingeți o tigaie de fontă. Prăjiți chiftelele la foc mare, 3-4 minute pe o parte, până fac o crustă maronie crocantă.",
      "Întoarcerea și brânza. Întoarceți chiftelele și mai gătiți 3 minute (pentru mediu). În ultimul minut, puneți felia de Cheddar pe carne. Puneți un capac peste tigaie sau stropiți cu puțină apă și acoperiți, pentru ca aburul să topească brânza rapid.",
      "Pregătirea chiflelor. Tăiați chiflele și ungeți-le cu unt. Prăjiți-le pe plită până devin aurii și crocante. Acest strat crocant este esențial pentru a preveni înmuierea de la sos și sucurile cărnii.",
      "Sosul și legumele. Amestecați maioneza, ketchup-ul, muștarul și puțină zeamă de castraveți. Ungeți ambele jumătăți ale chiflei cu sos. Spălați și uscați frunzele de salată.",
      "Asamblarea. Ordinea contează: Bază, salată (protejează chifla), chifteaua cu brânză, roșie, ceapă, castraveți, capac. Serviți imediat cu cartofi prăjiți."
    ],
    nutrition: { calories: 700, protein: 35, carbs: 45, fat: 40, sodium: 1000 }
  },

  "Mușchi de vită Wellington": {
    title: "Beef Wellington (Mușchi de Vită în Foietaj)",
    servings: 6,
    servingSize: "1 felie groasă (250g)",
    pricePerServing: 65,
    prepTime: "1 oră (+rece)",
    cookTime: "40 min",
    ingredients: [
      { name: "Mușchi de vită (central)", amount: "1 kg" },
      { name: "Ciuperci (Duxelles)", amount: "500 g" },
      { name: "Prosciutto di Parma", amount: "8-10 felii" },
      { name: "Aluat foietaj", amount: "500 g" },
      { name: "Muștar Dijon", amount: "2 linguri" },
      { name: "Ou", amount: "1 (pt uns)" },
      { name: "Ulei de trufe (opțional)", amount: "1 linguriță" }
    ],
    steps: [
      "Sigilarea cărnii. Asezonați mușchiul de vită cu sare și piper. Prăjiți-l într-o tigaie foarte încinsă cu puțin ulei, rapid, pe toate părțile (doar 1 minut în total) pentru a-l sigila. Scoateți-l și ungeți-l imediat cu muștar Dijon cât e fierbinte. Lăsați la răcit.",
      
      "Duxelles (Pasta de ciuperci). Tocați ciupercile extrem de mărunt (la robot). Căliți-le în tigaie uscată cu sare, piper și cimbru până când TOATĂ apa s-a evaporat. Trebuie să devină o pastă uscată. Dacă rămâne apă, va înmuia aluatul. Lăsați la răcit.",
      
      "Rularea în Prosciutto. Întindeți folie alimentară pe masă. Așezați feliile de prosciutto ușor suprapuse, formând un dreptunghi. Întindeți pasta de ciuperci peste șuncă.\n\nPuneți carnea în mijloc. Rulați strâns cu ajutorul foliei, formând un cilindru compact. Strângeți capetele ca la o bomboană. Lăsați la frigider 30 min să se întărească forma.",
      
      "Îvelirea în aluat. Întindeți aluatul foietaj. Scoateți carnea din folie și puneți-o pe aluat. Ungeți marginile aluatului cu ou. Rulați carnea în aluat, tăind excesul. Sigilați bine îmbinările.\n\nLăsați din nou la rece 15 minute.",
      
      "Coacerea. Ungeți exteriorul cu ou bătut. Crestați ușor aluatul cu un cuțit pentru decor. Presărați sare mare.\n\nCoaceți la 200°C timp de 35-40 de minute, până când aluatul e auriu. Temperatura internă a cărnii trebuie să fie 52-54°C pentru Medium-Rare.",
      
      "Odihna. Lăsați Wellington-ul să se odihnească 15 minute înainte de tăiere. Tăiați felii groase. Este piesa centrală perfectă pentru ocazii speciale."
    ],
    nutrition: { calories: 800, protein: 45, carbs: 35, fat: 50, sodium: 800 }
  }
};
