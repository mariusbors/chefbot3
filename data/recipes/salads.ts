
import { Recipe } from '../../types';

export const SALAD_RECIPES: Record<string, Recipe> = {
  "Salată Caesar": {
    title: "Salată Caesar (Rețeta Originală Cardini)",
    servings: 2,
    servingSize: "1 bol mediu (250g)",
    pricePerServing: 18,
    prepTime: "20 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Salată Romaine", amount: "2 căpățâni" },
      { name: "Parmigiano Reggiano", amount: "50 g (ras fin)" },
      { name: "Crutoane de casă", amount: "100 g" },
      { name: "Gălbenuș de ou", amount: "1 buc (crud sau poșat 1 min)" },
      { name: "Ulei de măsline extravirgin", amount: "100 ml" },
      { name: "Fileuri de anșoa", amount: "2-3 buc" },
      { name: "Usturoi", amount: "1 cățel" },
      { name: "Muștar Dijon", amount: "1 linguriță" },
      { name: "Zeamă de lămâie", amount: "1 lingură" },
      { name: "Sos Worcestershire", amount: "câțiva stropi" }
    ],
    steps: [
      "Pregătirea crutoanelor. Tăiați o baghetă sau pâine ciabatta veche de o zi în cuburi de 2 cm. Într-o tigaie, topiți puțin unt cu un cățel de usturoi zdrobit. Adăugați cuburile de pâine și prăjiți-le la foc mediu până devin aurii și crocante.\n\nScoateți usturoiul. Lăsați crutoanele să se răcească. Secretul unei salate Caesar bune este contrastul dintre salata crocantă rece și crutoanele crocante.",
      
      "Pasta de anșoa și usturoi. Într-un mojar (sau bol de lemn), zdrobiți cățelul de usturoi cu un praf de sare până devine pastă. Adăugați fileurile de anșoa și continuați să zdrobiți până obțineți o pastă omogenă.\n\nChiar dacă nu vă place peștele, anșoa este esențial pentru gustul 'umami' și sărat specific dressingului Caesar. Nu se va simți gust de pește, ci doar de savuros.",
      
      "Emulsionarea dressingului. Adăugați gălbenușul de ou, muștarul Dijon și zeama de lămâie peste pasta de usturoi. Amestecați bine cu un tel.\n\nÎncepeți să turnați ulei de măsline în fir subțire, amestecând continuu și energic, ca la maioneză. Sosul trebuie să se îngroașe și să devină cremoasă și galben pal.",
      
      "Finalizarea sosului. Adăugați sosul Worcestershire (ingredientul secret al lui Cesare Cardini) și jumătate din parmezanul ras fin. Amestecați. Gustați și ajustați aciditatea cu mai multă lămâie dacă este nevoie.\n\nDacă sosul este prea gros, îl puteți dilua cu o linguriță de apă caldă.",
      
      "Pregătirea salatei. Folosiți doar inima (frunzele interioare, crocante și deschise la culoare) salatei Romaine (Laptuca). Spălați-le și uscați-le perfect. Dacă frunzele sunt ude, sosul nu se va lipi de ele.\n\nRupeți frunzele cu mâna în bucăți mari (bite-size), nu le tăiați cu cuțitul pentru a nu oxida marginile.",
      
      "Tossing (Amestecarea). Puneți frunzele într-un bol larg. Turnați dressingul pe marginea bolului și amestecați cu mâinile, ridicând frunzele ('tossing') pentru a le acoperi uniform cu un strat fin de sos.\n\nAdăugați crutoanele și restul de parmezan (fâșii mari făcute cu peeler-ul). Serviți imediat. Salata Caesar nu așteaptă, se înmoaie repede!"
    ],
    nutrition: { calories: 500, protein: 15, carbs: 20, fat: 40, sodium: 800 }
  },

  "Salată Caprese": {
    title: "Salată Caprese (Insalata Caprese)",
    servings: 2,
    servingSize: "1 platou (200g)",
    pricePerServing: 16,
    prepTime: "10 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Roșii coapte de grădină", amount: "3 mari" },
      { name: "Mozzarella di Bufala", amount: "250 g (2 bile)" },
      { name: "Busuioc proaspăt", amount: "1 legătură" },
      { name: "Ulei de măsline extravirgin", amount: "50 ml" },
      { name: "Sare de mare (Fleur de sel)", amount: "un praf" },
      { name: "Piper negru", amount: "proaspăt măcinat" }
    ],
    steps: [
      "Selecția ingredientelor este totul. Această salată are doar 3 ingrediente principale, deci ele trebuie să fie de top. Folosiți roșii 'Inima de Bou' sau roșii de grădină foarte coapte, dulci și zemoase, la temperatura camerei (nu de la frigider, frigul le omoară aroma).\n\nMozzarella trebuie să fie 'di Bufala Campana' DOP, păstrată în zerul ei. Scoateți-o din lichid și lăsați-o să se scurgă puțin.",
      
      "Tăierea. Folosiți un cuțit zimțat foarte ascuțit. Tăiați roșiile în felii groase de aproximativ 0.5 - 1 cm. Tăiați mozzarella în felii de aceeași grosime.\n\nNu tăiați prea subțire, vrem să simțim textura cărnoasă a roșiei și elasticitatea brânzei.",
      
      "Aranjarea (Plating). Pe un platou întins, alternați feliile: o felie de roșie, una de mozzarella, suprapunându-le ușor ca un evantai sau într-un cerc concentric ('shingling').\n\nAcesta este tricolorul italian: roșu, alb și verdele care urmează.",
      
      "Busuiocul. Alegeți frunze mici și medii de busuioc. Nu le tocați cu cuțitul, deoarece se înnegresc și își schimbă gustul. Rupeți-le cu mâna sau lăsați-le întregi.\n\nIntroduceți frunzele de busuioc între fiecare felie de roșie și brânză, sau presărați-le deasupra.",
      
      "Condimentarea. Presărați sare de mare grunjoasă (care oferă o textură crocantă plăcută) și piper negru proaspăt măcinat doar peste roșii (brânza e deja sărată).\n\nUnii puristi nu pun piper, dar acesta accentuează dulceața roșiilor.",
      
      "Uleiul. Finalul grandios: turnați un fir generos de ulei de măsline extravirgin de cea mai bună calitate peste tot platoul. Lăsați să se adune în micile buzunare dintre felii.\n\nNotă: Caprese autentică NU conține oțet balsamic. Aciditatea trebuie să vină doar din roșii. Serviți cu pâine proaspătă (focaccia) pentru a șterge farfuria ('scarpetta')."
    ],
    nutrition: { calories: 350, protein: 18, carbs: 6, fat: 28, micronutrients: ["Calcium 30%"] }
  },

  "Salată grecească": {
    title: "Horiatiki (Salata Țărănească Grecească)",
    servings: 2,
    servingSize: "1 bol mare (350g)",
    pricePerServing: 14,
    prepTime: "15 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Roșii bine coapte", amount: "3 mari" },
      { name: "Castraveți", amount: "1 mare" },
      { name: "Ceapă roșie", amount: "1 mică" },
      { name: "Ardei gras verde", amount: "1 buc" },
      { name: "Măsline Kalamata (cu sâmburi)", amount: "100 g" },
      { name: "Brânză Feta (bloc)", amount: "200 g" },
      { name: "Oregano uscat", amount: "1 lingură" },
      { name: "Ulei de măsline extravirgin", amount: "generos" },
      { name: "Oțet de vin roșu", amount: "1 linguriță" }
    ],
    steps: [
      "Tăierea rustică. Horiatiki înseamnă 'de la țară', deci stilul este rustic. Spălați roșiile și tăiați-le în bucăți neregulate (wedges), direct deasupra bolului pentru a nu pierde nicio picătură de suc prețios.\n\nCurățați castravetele parțial (lăsând fâșii de coajă pentru crocant) și tăiați-l în rondele groase de 1 cm sau jumătăți de rondele.",
      
      "Legumele crocante. Tăiați ceapa roșie în inele subțiri sau solzișori. Dacă este prea iute, frecați-o cu puțină sare și clătiți-o, sau marinați-o 5 minute în oțet.\n\nTăiați ardeiul gras verde în inele. Adăugați totul în bol peste roșii și castraveți.",
      
      "Măslinele. Adăugați măslinele Kalamata (negre-violacee) întregi. În Grecia, măslinele se pun întotdeauna cu sâmburi în salată, deoarece sâmburele păstrează fermitatea și aroma măslinei.\n\nAmestecați ușor legumele.",
      
      "Feta. Aici greșesc mulți: Feta nu se taie cubulețe și nu se amestecă în salată. Se așează o felie mare, dreptunghiulară (un bloc întreg) deasupra legumelor, ca un capac.\n\nAceasta este prezentarea iconică.",
      
      "Asezonarea. Presărați oregano uscat din belșug peste tot, dar mai ales peste bucata de Feta. Oregano-ul grecesc de munte este foarte parfumat.\n\nTurnați ulei de măsline extravirgin peste brânză și legume. Adăugați puțin oțet de vin roșu (opțional, dar tradițional în multe case).",
      
      "Servirea. Se servește imediat, la temperatura camerei. Se mănâncă rupând bucăți din blocul de Feta cu furculița și combinându-le cu legume.\n\nZeama care rămâne pe fundul bolului (ulei + suc de roșii + oregano + zer de la feta) este considerată cea mai bună parte și se mănâncă cu pâine ('papara')."
    ],
    nutrition: { calories: 400, protein: 12, carbs: 15, fat: 35, sodium: 900 }
  },

  "Tabbouleh": {
    title: "Tabbouleh (Salată Libaneză de Pătrunjel)",
    servings: 4,
    servingSize: "1 bol mic (200g)",
    pricePerServing: 12,
    prepTime: "30 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Pătrunjel plat", amount: "4 legături mari" },
      { name: "Roșii tari", amount: "3 medii" },
      { name: "Ceapă verde", amount: "1 legătură" },
      { name: "Mentă proaspătă", amount: "1 legătură mică" },
      { name: "Bulgur fin (nr. 1)", amount: "50 g" },
      { name: "Zeamă de lămâie", amount: "3-4 lămâi" },
      { name: "Ulei de măsline extravirgin", amount: "100 ml" },
      { name: "Mix 7 Condimente (Baharat)", amount: "un praf" }
    ],
    steps: [
      "Pregătirea bulgurului. Spălați bulgurul fin și puneți-l într-un bol mic. Stoarceți zeama de la 2 lămâi peste el. Nu folosiți apă!\n\nLăsați bulgurul să se înmoaie și să se 'gătească' la rece direct în sucul de lămâie timp de 20 de minute. Astfel, va absorbi aciditatea plăcută și va rămâne ferm, nu apos.",
      
      "Pregătirea pătrunjelului (Arta răbdării). Tabbouleh este o salată de ierburi, nu de cereale. Pătrunjelul trebuie spălat și, foarte important, USCAT perfect înainte de tocare (folosiți o centrifugă de salată sau prosoape). Umezeala va face salata fleașcă.\n\nÎndepărtați cozile groase. Tocați frunzele extrem de fin ('haché') folosind un cuțit foarte ascuțit. Tăiați o singură dată, nu tocați mărunt repetat peste aceleași frunze, pentru a nu le zdrobi și înnegri.",
      
      "Legumele. Tăiați roșiile în cubulețe minuscule (brunoise), eliminând semințele și excesul de zeamă. Tocați ceapa verde (partea albă și puțin din cea verde) foarte fin. Tocați menta proaspătă.\n\nToate ingredientele trebuie să aibă aproximativ aceeași dimensiune mică și elegantă.",
      
      "Asamblarea. Într-un bol larg, puneți pătrunjelul și menta. Adăugați roșiile și ceapa deasupra. Presărați bulgurul înmuiat în lămâie peste legume.\n\nAdăugați sarea și '7 spices' libaneze (baharat) sau un praf de ienibahar/scorțișoară pentru acea notă specifică orientală.",
      
      "Dressing-ul final. Turnați ulei de măsline extravirgin chiar înainte de servire. Mai adăugați zeamă de lămâie după gust.\n\nTabbouleh nu trebuie să înoate în zeamă, dar trebuie să fie lucioasă și bine unsă. Amestecați delicat cu mâna sau două linguri.",
      
      "Servirea. Se servește imediat, proaspătă, pe un pat de frunze de salată Romană sau foi de varză albă crudă.\n\nTradițional, se mănâncă folosind frunzele de salată pe post de 'lingură' (scoops). Este un acompaniament perfect pentru grătar sau Kibbeh."
    ],
    nutrition: { calories: 200, protein: 5, carbs: 15, fat: 15, micronutrients: ["Vitamin C", "Vitamin K"] }
  },

  "Fattoush": {
    title: "Fattoush (Salată Libaneză cu Lipie Crocantă)",
    servings: 4,
    servingSize: "1 bol (250g)",
    pricePerServing: 14,
    prepTime: "20 min",
    cookTime: "5 min",
    ingredients: [
      { name: "Lipie libaneză", amount: "2 buc" },
      { name: "Salată Romană/Iceberg", amount: "1 căpățână" },
      { name: "Roșii", amount: "3 buc" },
      { name: "Castraveți", amount: "3 mici" },
      { name: "Ridichi", amount: "4-5 buc" },
      { name: "Ceapă verde & Mentă & Pătrunjel", amount: "mix" },
      { name: "Sumac", amount: "1 lingură plină" },
      { name: "Melasă de rodie", amount: "1 lingură" },
      { name: "Ulei de măsline & Lămâie", amount: "dressing" }
    ],
    steps: [
      "Pregătirea pâinii. Fattoush este o salată 'de recuperare' a pâinii vechi. Tăiați sau rupeți lipiile în bucăți pătrate mici.\n\nPrăjiți-le în baie de ulei până devin aurii și crocante (metoda tradițională) sau coaceți-le la cuptor stropite cu ulei de măsline pentru o variantă mai ușoară. Lăsați crutoanele să se răcească pe hârtie absorbantă.",
      
      "Tăierea legumelor. Spre deosebire de Tabbouleh, aici tăietura este rustică, mare. Tăiați salata verde grosier. Tăiați roșiile și castraveții în cuburi mărișoare.\n\nTăiați ridichile în felii subțiri. Tocați ceapa verde rondele. Rupeți frunzele de mentă și pătrunjel (nu le tocați mărunt). Puteți adăuga și iarbă grasă (purslane) dacă găsiți.",
      
      "Dressing-ul acrișor. Într-un borcan, amestecați uleiul de măsline, zeama de lămâie, un cățel de usturoi pisat, sarea și ingredientele cheie: Sumac (pudră roșie de fructe de pădure, acrișoară) și Melasă de rodie (sirop gros, dulce-acru).\n\nAcest dressing trebuie să fie vibrant, acidulat și de culoare închisă.",
      
      "Combinarea. Într-un bol mare, amestecați toate legumele cu ierburile proaspete. Presărați jumătate din sumac direct pe legume.",
      
      "Adăugarea pâinii. Chiar înainte de servire (nu mai devreme, pentru a nu se înmuia), adăugați pâinea prăjită în bol.",
      
      "Finisarea. Turnați dressing-ul peste salată și amestecați bine (cu mâna e cel mai bine) pentru a acoperi fiecare frunză și bucată de pâine. Presărați extra sumac deasupra.\n\nEste o explozie de texturi: crocant, zemos, proaspăt și o aromă intensă de lămâie și rodie."
    ],
    nutrition: { calories: 250, protein: 5, carbs: 30, fat: 12, fiber: 6 }
  },

  "Salată Nicoise": {
    title: "Salade Niçoise (Salata Clasică din Nisa)",
    servings: 2,
    servingSize: "1 farfurie mare (350g)",
    pricePerServing: 25,
    prepTime: "30 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Ton (conservă în ulei/proaspăt)", amount: "200 g" },
      { name: "Ouă fierte", amount: "2 buc" },
      { name: "Fasole verde", amount: "150 g" },
      { name: "Cartofi noi (opțional)", amount: "4 mici" },
      { name: "Măsline Nicoise (mici, negre)", amount: "50 g" },
      { name: "Roșii", amount: "2 buc" },
      { name: "Fileuri de anșoa", amount: "4 buc" },
      { name: "Salată verde", amount: "câteva frunze" },
      { name: "Dressing Vinaigrette", amount: "clasic" }
    ],
    steps: [
      "Gătirea elementelor. Fierbeți cartofii noi în coajă în apă sărată până sunt moi. Lăsați-i să se răcească și tăiați-i sferturi.\n\nBlanșați fasolea verde: fierbeți-o 3-4 minute în apă cu sare, apoi mutați-o imediat în apă cu gheață. Trebuie să rămână verde strălucitor și crocantă ('al dente').",
      
      "Ouăle. Fierbeți ouăle timp de 8 minute (tari, dar cu gălbenușul încă cremos, nu gri). Răciți-le, curățați-le și tăiați-le în sferturi pe lungime.",
      
      "Pregătirea bazei. Pe un platou mare, faceți un pat din frunze de salată rupte (opțional, rețeta puristă din Nisa nu are salată verde, doar legume, dar varianta internațională are).\n\nTăiați roșiile felii (wedges).",
      
      "Dressing-ul Vinaigrette. Într-un borcan, agitați ulei de măsline, oțet de vin roșu, un cățel de usturoi zdrobit, muștar Dijon, sare și piper. Emulsionați bine.",
      
      "Aranjarea compusă. Salata Nicoise este o salată compusă, nu amestecată. Aranjați grupurile de ingrediente pe platou: un morman de fasole verde, unul de cartofi, feliile de roșii, sferturile de ouă.\n\nPuneți tonul scurs de ulei în centru (bucăți mari).",
      
      "Finisarea. Așezați fileurile de anșoa în cruce peste ouă sau roșii (pentru extra sare). Presărați măslinele mici negre (Nicoise) peste tot.\n\nTurnați vinaigrette-ul generos peste toate ingredientele chiar înainte de a duce platoul la masă. Se servește cu baghetă crocantă."
    ],
    nutrition: { calories: 400, protein: 25, carbs: 20, fat: 22, micronutrients: ["Omega-3"] }
  },

  "Coleslaw": {
    title: "Coleslaw (Salată de Varză Americană)",
    servings: 6,
    servingSize: "1 bol mic (150g)",
    pricePerServing: 6,
    prepTime: "20 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Varză albă", amount: "1/2 căpățână" },
      { name: "Varză roșie", amount: "1/4 căpățână" },
      { name: "Morcovi", amount: "2 mari" },
      { name: "Maioneză", amount: "150 g" },
      { name: "Smântână/Iaurt", amount: "50 g" },
      { name: "Oțet de mere", amount: "2 linguri" },
      { name: "Zahăr/Miere", amount: "1 lingură" },
      { name: "Semințe de țelină (opțional)", amount: "1/2 linguriță" }
    ],
    steps: [
      "Tăierea legumelor. Tăiați varza albă și cea roșie foarte fin (shredded). Puteți folosi un cuțit ascuțit, o mandolină sau robotul de bucătărie. Morcovii se dau pe răzătoarea mare.\n\nAmestecați legumele într-un bol mare. Pentru un coleslaw mai crocant și mai puțin apos, presărați sare peste varză și lăsați-o 30 de minute într-o sită, apoi stoarceți-o. (Opțional, dar recomandat).",
      
      "Dressing-ul cremos. Într-un bol mediu, amestecați maioneza cu smântâna (sau iaurtul grecesc pentru o variantă mai ușoară). Smântâna taie din grăsimea maionezei și adaugă prospețime.",
      
      "Echilibrul dulce-acru. Adăugați oțetul de mere și zahărul (sau mierea). Coleslaw trebuie să aibă un gust distinct dulce-acrișor ('tangy').\n\nAdăugați sarea, piperul negru și, ingredientul secret american, semințele de țelină (celery seeds). Acestea dau aroma specifică de KFC/Diner.",
      
      "Combinarea. Turnați dressing-ul peste amestecul de varză și morcovi. Amestecați bine până când fiecare fir de varză este acoperit.",
      
      "Maturarea. Coleslaw nu se servește imediat. Acoperiți bolul și puneți-l la frigider pentru cel puțin 1-2 ore.\n\nÎn acest timp, acidul din oțet înmoaie ușor varza (fără a o face fleașcă) și aromele se combină.",
      
      "Servirea. Amestecați din nou înainte de servire (dressing-ul tinde să se lase la fund). Este garnitura perfectă pentru carne la grătar, burgeri, pui prăjit sau sandvișuri cu porc (Pulled Pork)."
    ],
    nutrition: { calories: 200, protein: 2, carbs: 12, fat: 15, fiber: 4 }
  },

  "Salată de cartofi germană": {
    title: "Kartoffelsalat (Salată de Cartofi Germană cu Bacon)",
    servings: 4,
    servingSize: "1 porție (200g)",
    pricePerServing: 8,
    prepTime: "15 min",
    cookTime: "20 min",
    ingredients: [
      { name: "Cartofi (soi ceros/tare)", amount: "1 kg" },
      { name: "Bacon/Slănină afumată", amount: "200 g" },
      { name: "Ceapă roșie", amount: "1 medie" },
      { name: "Oțet de mere/alb", amount: "80 ml" },
      { name: "Apă/Supă de vită", amount: "50 ml" },
      { name: "Zahăr", amount: "1 lingură" },
      { name: "Muștar (boabe/dijon)", amount: "1 lingură" },
      { name: "Pătrunjel/Ceapă verde", amount: "tocat" }
    ],
    steps: [
      "Fierberea cartofilor. Folosiți cartofi cu coajă roșie sau soiuri ceroase care își păstrează forma la fiert (nu făinoși). Spălați-i și fierbeți-i în coajă în apă cu sare până sunt moi (cca 20 min).\n\nCât sunt încă fierbinți, curățați-i de coajă (țineți-i cu un prosop) și tăiați-i în felii de 0.5 cm. Cartofii fierbinți absorb dressing-ul mult mai bine decât cei reci.",
      
      "Prăjirea baconului. Tăiați baconul cubulețe. Într-un tigaie mare, prăjiți baconul la foc mediu până devine crocant și își lasă toată grăsimea. Scoateți baconul pe o farfurie, dar LĂSAȚI grăsimea în tigaie.\n\nAceastă grăsime este baza dressing-ului cald.",
      
      "Gătirea cepei. În grăsimea de bacon rămasă, căliți ceapa tocată mărunt timp de 3-4 minute până se înmoaie și devine translucidă (nu trebuie să se ardă).",
      
      "Dressing-ul cald. Peste ceapă, adăugați oțetul, apa (sau supa), zahărul, muștarul, sarea și piper. Aduceți la fierbere și lăsați să clocotească 1-2 minute pentru a se emulsifia ușor.\n\nVa rezulta un sos vinaigrette cald și aromat.",
      
      "Combinarea. Turnați sosul fierbinte direct peste feliile de cartofi calzi într-un bol mare. Adăugați baconul crocant.\n\nAmestecați foarte delicat cu o spatulă pentru a nu sfărâma cartofii ('tossing', nu 'stirring'). Cartofii vor absorbi aproape tot lichidul.",
      
      "Servirea. Această salată se servește caldă sau la temperatura camerei, nu rece de la frigider. Presărați pătrunjel proaspăt sau ceapă verde tocată înainte de servire.\n\nEste acompaniamentul ideal pentru șnițele, cârnați (Wurst) sau friptură de porc."
    ],
    nutrition: { calories: 350, protein: 8, carbs: 40, fat: 15, sodium: 700 }
  },

  "Salată Waldorf": {
    title: "Salată Waldorf (Clasică de la Hotelul Waldorf)",
    servings: 4,
    servingSize: "1 bol mic (180g)",
    pricePerServing: 12,
    prepTime: "20 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Mere (roșii și verzi)", amount: "2 mari" },
      { name: "Țelină (tulpini/rădăcină)", amount: "2 tije / 100g" },
      { name: "Struguri roșii/albi", amount: "1 cană" },
      { name: "Nuci (Walnuts)", amount: "100 g" },
      { name: "Maioneză", amount: "100 g" },
      { name: "Iaurt/Smântână", amount: "50 g" },
      { name: "Zeamă de lămâie", amount: "1 lingură" },
      { name: "Salată verde (pat)", amount: "câteva frunze" }
    ],
    steps: [
      "Pregătirea nucilor. Pentru o aromă maximă, prăjiți ușor nucile într-o tigaie uscată timp de 2-3 minute, până miros frumos. Lăsați-le să se răcească și rupeți-le în bucăți grosiere.\n\nAcest pas face diferența între o salată bună și una excelentă.",
      
      "Tăierea fructelor. Spălați merele. Nu le curățați de coajă (culoarea este importantă). Tăiați-le în cuburi de 1.5 cm sau bețișoare (julienne groase).\n\nStropiți imediat merele cu zeama de lămâie pentru a preveni oxidarea (înegrirea) și pentru a adăuga aciditate.",
      
      "Pregătirea țelinei și strugurilor. Tăiați tijele de țelină (apio) în felii subțiri (lunișoare) pentru o textură crocantă. Dacă folosiți rădăcină de țelină (varianta europeană), tăiați-o julienne foarte fin și opăriți-o 1 minut.\n\nTăiați boabele de struguri în jumătate pe lungime.",
      
      "Dressing-ul. Într-un bol mic, amestecați maioneza cu iaurtul (sau smântâna). Iaurtul ușurează sosul. Asezonați cu puțină sare și, opțional, un praf de zahăr dacă merele sunt foarte acre.\n\nDressing-ul trebuie să fie cremos, dar nu excesiv de greu.",
      
      "Combinarea. Într-un bol mare, puneți merele, țelina, strugurii și nucile. Turnați dressing-ul peste ele și amestecați până când toate ingredientele sunt acoperite uniform ('coated').",
      
      "Servirea. Așezați câteva frunze de salată verde (de preferat salată creață sau Bibb lettuce) pe farfurii individuale sau pe un platou.\n\nPuneți salata Waldorf peste patul de frunze. Se servește rece, ca aperitiv rafinat sau garnitură ușoară lângă pui sau curcan."
    ],
    nutrition: { calories: 300, protein: 4, carbs: 25, fat: 22, fiber: 5 }
  },

  "Salată de quinoa": {
    title: "Salată de Quinoa cu Legume și Avocado",
    servings: 4,
    servingSize: "1 bol (250g)",
    pricePerServing: 15,
    prepTime: "20 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Quinoa (tricoloră/albă)", amount: "200 g" },
      { name: "Castravete", amount: "1 buc" },
      { name: "Roșii cherry", amount: "200 g" },
      { name: "Avocado", amount: "1 mare" },
      { name: "Ardei gras", amount: "1 buc" },
      { name: "Ceapă roșie", amount: "1 mică" },
      { name: "Pătrunjel", amount: "1 legătură" },
      { name: "Dressing (Lămâie, Ulei)", amount: "50 ml" }
    ],
    steps: [
      "Fierberea Quinoei. Spălați quinoa foarte bine într-o sită fină sub jet de apă rece timp de 1 minut. Quinoa are un strat natural amar (saponină) care trebuie îndepărtat.\n\nPuneți quinoa la fiert cu apă (proporție 1 parte quinoa la 2 părți apă) și puțină sare. Fierbeți 15 minute până când apa se absoarbe și apare o mică 'codiță' spiralată la fiecare bob. Lăsați să se răcească.",
      
      "Tăierea legumelor. Tăiați roșiile cherry în jumătăți. Tăiați castravetele (cu tot cu coajă) și ardeiul gras în cubulețe mici, uniforme (brunoise mare). Tocați ceapa roșie fin.\n\nUniformitatea tăieturii face salata plăcută la mâncat ('spoon salad' - se poate mânca cu lingura).",
      
      "Pregătirea avocado-ului. Tăiați avocado-ul cuburi chiar înainte de asamblare pentru a nu se înnegri. Stropiți-l cu puțină lămâie separat.",
      
      "Dressing-ul Citric. Într-un borcan, amestecați ulei de măsline extravirgin, multă zeamă de lămâie proaspătă, sare, piper și un cățel de usturoi zdrobit. Agitați bine până se emulsionează.",
      
      "Asamblarea. Într-un bol mare, puneți quinoa răcită și afânată cu furculița. Adăugați toate legumele tocate și o cantitate generoasă de pătrunjel tocat (sau mentă).\n\nTurnați dressing-ul și amestecați bine.",
      
      "Servirea. Adăugați cuburile de avocado la final și amestecați foarte ușor pentru a nu le zdrobi. Se poate adăuga și brânză Feta sfărâmată sau năut pentru extra proteine.\n\nEste o salată completă, sănătoasă și sățioasă, perfectă pentru prânz."
    ],
    nutrition: { calories: 350, protein: 10, carbs: 40, fat: 18, fiber: 8 }
  },

  "Salată Cobb": {
    title: "Salată Cobb (American Classic)",
    servings: 2,
    servingSize: "1 farfurie mare (400g)",
    pricePerServing: 35,
    prepTime: "25 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Piept de pui (grătar/fiert)", amount: "200 g" },
      { name: "Bacon", amount: "100 g" },
      { name: "Ouă fierte", amount: "2 buc" },
      { name: "Avocado", amount: "1 buc" },
      { name: "Roșii", amount: "2 buc" },
      { name: "Brânză cu mucegai (Roquefort)", amount: "50 g" },
      { name: "Salată verde (mix)", amount: "200 g" },
      { name: "Dressing Vinaigrette", amount: "clasic" }
    ],
    steps: [
      "Pregătirea proteinelor. Prăjiți baconul până devine foarte crocant, apoi scurgeți-l și rupeți-l bucăți. Tăiați pieptul de pui gătit în cuburi de 1-2 cm. Fierbeți ouăle tari (10 min), curățați-le și tăiați-le cuburi.\n\nSalată Cobb este cunoscută pentru ingredientele bogate și proteice.",
      
      "Baza de salată. Spălați și uscați bine frunzele de salată (Romaine, Iceberg, Watercress). Tocați-le în bucăți mici ('bite-size').\n\nÎntindeți salata verde pe un platou mare sau în boluri individuale largi, formând un pat.",
      
      "Aranjarea în dungi (EAT COBB). Tradițional, ingredientele nu se amestecă, ci se așază în rânduri (dungi) paralele, ordonate, peste patul de salată. Acesta este aspectul semnătură.\n\nMnemonica EAT COBB ajută: Egg, Avocado, Tomato, Chicken, Onion (ceapă verde), Bacon, Blue cheese.",
      
      "Aranjarea. Faceți un rând de ouă tocate, urmat de un rând de roșii cuburi, apoi puiul, apoi feliile de avocado, apoi baconul crocant și la final brânza cu mucegai sfărâmată.\n\nCulorile trebuie să contrasteze frumos.",
      
      "Dressing-ul. Preparați un vinaigrette simplu din oțet de vin roșu, ulei, muștar, sare și piper. Cobb-ul original folosește dressing franțuzesc, dar vinaigrette-ul taie mai bine bogăția ingredientelor.",
      
      "Servirea. Aduceți salata la masă așa, aranjată în dungi, pentru a impresiona vizual. Apoi, chiar înainte de a mânca, turnați dressing-ul și amestecați totul ('toss') în fața oaspeților.\n\nEste o masă completă într-o singură farfurie."
    ],
    nutrition: { calories: 600, protein: 40, carbs: 10, fat: 45, sodium: 1000 }
  },

  "Salată de ton": {
    title: "Salată de Ton cu Porumb și Maioneză",
    servings: 2,
    servingSize: "1 bol (200g)",
    pricePerServing: 10,
    prepTime: "10 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Ton în suc propriu/ulei", amount: "2 conserve" },
      { name: "Porumb dulce", amount: "150 g" },
      { name: "Ceapă roșie", amount: "1 mică" },
      { name: "Ardei gras roșu", amount: "1/2 buc" },
      { name: "Maioneză", amount: "2-3 linguri" },
      { name: "Zeamă de lămâie", amount: "1 lingură" },
      { name: "Pătrunjel/Mărar", amount: "tocat" },
      { name: "Sare, Piper", amount: "după gust" }
    ],
    steps: [
      "Scurgerea. Deschideți conservele de ton și scurgeți lichidul foarte bine. Dacă folosiți ton în ulei, puteți păstra puțin ulei pentru gust, dar în general vrem o salată legată, nu uleioasă.\n\nPuneți tonul într-un bol și desfaceți bucățile mari cu o furculiță ('flake the tuna').",
      
      "Tăierea crocantă (Crunch). Tocați ceapa roșie foarte mărunt. Tăiați ardeiul gras în cubulețe mici. Scurgeți porumbul dulce din conservă.\n\nElementele crocante sunt esențiale pentru a contrasta cu textura moale a tonului.",
      
      "Combinarea. Adăugați legumele peste ton. Adăugați maioneza, zeama de lămâie (care taie grăsimea și mirosul de pește), sarea și piperul.\n\nAmestecați bine până se omogenizează. Dacă doriți o variantă mai light, înlocuiți jumătate din maioneză cu iaurt grecesc.",
      
      "Aromele verzi. Adăugați pătrunjelul sau mărarul tocat. Puteți adăuga și castraveți murați tocați fin sau capere pentru un plus de aciditate.\n\nGustați și ajustați sarea.",
      
      "Servirea. Salata de ton este versatilă. Se poate servi ca atare într-un bol, pe un pat de frunze de salată, sau ca umplutură pentru sandvișuri, lipii (wraps) sau cartofi copți (Jacket Potato).\n\nEste o soluție rapidă, proteică și delicioasă pentru prânz."
    ],
    nutrition: { calories: 300, protein: 25, carbs: 15, fat: 15, micronutrients: ["Omega-3 High"] }
  }
};
