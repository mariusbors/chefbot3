
import { Recipe } from '../../types';

export const MOROCCAN_RECIPES: Record<string, Recipe> = {
  "Couscous Royal": {
    title: "Couscous Royal (Cu 7 Legume și Carne)",
    servings: 6,
    prepTime: "1 oră",
    cookTime: "2 ore",
    ingredients: [
      { name: "Couscous fin", amount: "500 g" },
      { name: "Carne de miel", amount: "500 g" },
      { name: "Carne de pui", amount: "4 buc" },
      { name: "Merguez (cârnați picani)", amount: "6 buc" },
      { name: "Năut (înmuiat)", amount: "200 g" },
      { name: "Legume (dovlecei, morcovi, napi)", amount: "1 kg mix" },
      { name: "Ceapă", amount: "2 mari" },
      { name: "Unt (Smen)", amount: "50 g" },
      { name: "Condimente Couscous", amount: "Ras el Hanout" },
      { name: "Stafide & Ceapă caramelizată (Tfaya)", amount: "topping" }
    ],
    steps: [
      "Pregătirea bazei (Bouillon). Într-un oală mare (baza couscoussier-ului), căliți ceapa tocată, carnea de miel și puiul în ulei până se rumenesc. Adăugați condimentele: ghimbir, curcuma, șofran, piper negru și sare.\n\nAcoperiți cu multă apă (aprox 2-3 litri), adăugați năutul înmuiat și aduceți la fierbere. Lăsați să fiarbă la foc mediu. Aburul aromat care se va ridica din această supă va găti couscous-ul, transferându-i gustul complex.",
      
      "Prima hidratare a couscous-ului. Puneți grișul de couscous într-un vas larg (gsaa). Stropiți-l cu ulei de măsline și frecați-l între palme pentru a acoperi fiecare bob. Apoi, stropiți cu puțină apă rece și lucrați-l cu degetele ('aerare') pentru a preveni cocoloașele.\n\nPuneți couscous-ul în sita superioară a oalei (keskas) și așezați-o deasupra oalei cu carne care fierbe. Sigilați îmbinarea cu o cârpă umedă sau folie ca să nu scape abur. Lăsați la abur 20 de minute (până iese aburul prin couscous).",
      
      "Adăugarea legumelor. Când carnea este pe jumătate gătită, adăugați legumele tari în supă: morcovii, napii și bucăți mari de varză. Legumele moi (dovlecei, dovleac) se pun mai târziu.\n\nCouscous-ul Royal tradițional folosește '7 legume' pentru noroc, dar puteți adapta. Asigurați-vă că supa este condimentată corect, deoarece ea va fi sosul final.",
      
      "A doua hidratare. Răsturnați couscous-ul aburit înapoi în vasul larg. Stropiți-l cu apă sărată (aprox 1 cană) și amestecați cu o lingură de lemn, apoi cu mâinile când se răcește puțin, desfăcând orice cocoloașe.\n\nLăsați-l să absoarbă apa și să se odihnească 10 minute. Bobul se va umfla. Puneți-l înapoi la abur pentru a doua tură de 20 de minute. Acest proces dublu sau triplu de gătire la abur face couscous-ul extrem de pufos și ușor.",
      
      "Finalizarea cărnii și Tfaya. Într-o tigaie separată, prăjiți cârnații Merguez până sunt crocanți. Dacă doriți Tfaya (garnitura dulce), caramelizați ceapă tăiată solzișori cu stafide, scorțișoară și miere până devine un gem auriu.\n\nVerificați dacă carnea din oală și legumele sunt fierte. Adăugați dovleceii în ultimele 15 minute.",

      "Încorporarea untului (Smen). Scoateți couscous-ul final în vasul larg. Adăugați 'Smen' (unt fermentat marocan) sau unt normal de calitate și amestecați-l în couscous-ul fierbinte până se topește complet și fiecare bob este separat și lucios.",
      
      "Servirea. Așezați couscous-ul pe un platou imens, formând o movilă cu un crater în mijloc. Puneți carnea în centru. Aranjați legumele și Merguez-ul decorativ pe margini. Serviți supa (margă) separat într-un bol pentru ca fiecare să își înmoaie porția după gust."
    ],
    nutrition: { calories: 800, protein: 45, carbs: 90, fat: 30, fiber: 12 }
  },

  "Tajine cu lămâie și măsline": {
    title: "Tajine de Pui cu Lămâie Murată",
    servings: 4,
    prepTime: "20 min (+marinare)",
    cookTime: "1.5 ore",
    ingredients: [
      { name: "Pui întreg (tranșat)", amount: "1.5 kg" },
      { name: "Lămâie murată (Preserved Lemon)", amount: "1 buc" },
      { name: "Măsline verzi (fără sâmburi)", amount: "150 g" },
      { name: "Ceapă", amount: "2 mari" },
      { name: "Usturoi", amount: "4 căței" },
      { name: "Ghimbir, Curcuma", amount: "câte 1 linguriță" },
      { name: "Șofran", amount: "un praf" },
      { name: "Coriandru/Pătrunjel", amount: "1 legătură" }
    ],
    steps: [
      "Pasta Chermoula. Într-un bol sau mojar, amestecați pulpa de la jumătate de lămâie murată (tocată fin), usturoiul pisat, ghimbirul, curcuma, piperul negru și puțină apă. Nu adăugați sare încă, lămâia murată este foarte sărată.",
      
      "Marinarea. Masați bucățile de pui cu amestecul Chermoula pregătit anterior, introducând marinada și sub piele. Lăsați la marinat la rece cel puțin o oră, sau peste noapte pentru un gust profund și o carne fragedă.",

      "Pregătirea Tajine-ului. Așezați vasul Tajine (sau o cratiță grea cu capac) pe un difuzor de căldură la foc mic. Puneți ceapa tocată fin și puțin ulei de măsline pe fundul vasului, creând un pat pentru carne.\n\nAșezați bucățile de pui peste ceapă, aranjându-le concentric, cu osul în jos. Turnați restul de marinadă peste pui. Adăugați firele de șofran dizolvate în puțină apă caldă.",
      
      "Gătirea lentă. Puneți capacul conic al Tajine-ului. Lăsați să se gătească la foc foarte mic. Nu este nevoie să adăugați multă apă, deoarece puiul și ceapa vor lăsa lichid, iar forma conică a capacului face ca aburul să condenseze și să cadă înapoi peste mâncare, basting-o continuu.\n\nGătiți timp de 45-60 de minute. Întoarceți puiul o dată la jumătatea timpului.",
      
      "Măslinele și Lămâia. Tăiați coaja de la lămâia murată în fâșii subțiri (julienne). Dacă măslinele sunt foarte sărate, opăriți-le 2 minute în apă separată.\n\nAdăugați măslinele și coaja de lămâie în tajine, presărându-le peste pui. Mai lăsați să fiarbă descoperit (fără capac) 15 minute dacă sosul este prea lichid.",
      
      "Reducerea sosului (Daghmira). Sosul final trebuie să fie gros, uleios și concentrat ('daghmira'). Dacă e apos, scoateți puiul și fierbeți sosul la foc iute până se separă uleiul de ceapa topită.\n\nPuneți puiul înapoi doar pentru a se reîncălzi. Gustați acum de sare și ajustați.",
      
      "Servirea. Presărați coriandru proaspăt tocat. Tajine-ul se servește fierbinte, direct în vasul de lut, așezat în mijlocul mesei.\n\nSe mănâncă tradițional cu mâna, folosind bucăți de pâine marocană (Khobz) pentru a apuca carnea și a șterge sosul delicios."
    ],
    nutrition: { calories: 500, protein: 40, carbs: 8, fat: 35, sodium: 900 }
  },

  "Harira": {
    title: "Harira (Supa Marocană de Ramazan)",
    servings: 6,
    prepTime: "30 min",
    cookTime: "1 oră",
    ingredients: [
      { name: "Carne de vită/miel (cubulețe)", amount: "300 g" },
      { name: "Năut (înmuiat peste noapte)", amount: "150 g" },
      { name: "Linte verde/maro", amount: "100 g" },
      { name: "Roșii coapte (pasate)", amount: "500 g" },
      { name: "Țelină (Apio)", amount: "2 tije" },
      { name: "Coriandru & Pătrunjel", amount: "1 legătură mare" },
      { name: "Ghimbir, Curcuma, Scorțișoară", amount: "mix" },
      { name: "Făină & Apă (Tadouira)", amount: "agent îngroșare" },
      { name: "Fidea fină", amount: "50 g" }
    ],
    steps: [
      "Baza de legume și carne. Într-un oală sub presiune sau oală mare, puneți carnea tăiată cubulețe mici, năutul scurs (înmuiat de cu seară), ceapa tocată fin, și amestecul de ierburi (țelina, pătrunjelul și coriandrul tocate, păstrând puțin pentru final).\n\nAdăugați condimentele: sare, piper, ghimbir pudră, curcuma și un praf de scorțișoară. Turnați ulei și căliți totul 5 minute la foc mediu.",
      
      "Fierberea leguminoaselor. Adăugați roșiile pasate (sau conservă) și 2 litri de apă. Dacă folosiți oală sub presiune, fierbeți 30-40 de minute. Dacă folosiți oală normală, fierbeți 1 oră sau până când năutul este moale.\n\nAdăugați lintea spălată. Lintea fierbe mai repede decât năutul, de aceea se pune mai târziu (sau se fierbe de la început dacă folosiți oală sub presiune care le înmoaie pe toate).",
      
      "Pregătirea Tadouira (Îngroșarea). Harira are o textură catifelată specifică dată de un amestec fermentat sau simplu de făină și apă. Într-un borcan, amestecați făina cu apă până obțineți un lichid alb, fin, fără cocoloașe (ca un aluat de clătite foarte lichid).\n\nLăsați-l să stea puțin. Unii adaugă și puțină drojdie sau suc de lămâie pentru aciditate.",
      
      "Legarea supei. Când carnea și boabele sunt fierte, adăugați o lingură de pastă de tomate pentru culoare intensă. Turnați amestecul de făină (Tadouira) în supă în fir subțire, amestecând continuu pentru a nu face cocoloașe.\n\nContinuați să amestecați până când supa începe să se îngroașă ușor. Trebuie să aibă consistența unei smântâni lichide.",
      
      "Fideaua și ierburile. Adăugați fideaua fină (sau orez) și lăsați să fiarbă încă 5-10 minute, amestecând des ca să nu se lipească de fund (făina tinde să se depună).\n\nSupa trebuie să fie roșie, densă și aromată. Spuma care se formează la suprafață trebuie îndepărtată.",
      
      "Servirea. Opriți focul. Adăugați restul de coriandru și pătrunjel proaspăt tocat și puțin suc de lămâie. Harira se servește fierbinte, tradițional alături de curmale dulci, smochine uscate și 'Chebakia' (prăjiturele cu miere și susan) pentru a rupe postul de Ramazan.\n\nContrastul dintre supa sărată-acrișoară și curmalele dulci este specific marocan."
    ],
    nutrition: { calories: 350, protein: 20, carbs: 45, fat: 10, fiber: 8 }
  },

  "Pastilla": {
    title: "Pastilla de Pui (Plăcintă Dulce-Sărată)",
    servings: 6,
    prepTime: "1 oră",
    cookTime: "45 min",
    ingredients: [
      { name: "Foi de plăcintă (Warka/Phyllo)", amount: "1 pachet" },
      { name: "Pui întreg (sau pulpe)", amount: "1 kg" },
      { name: "Migdale prăjite și măcinate", amount: "250 g" },
      { name: "Ceapă", amount: "4 mari" },
      { name: "Ouă", amount: "5 buc" },
      { name: "Zahăr pudră & Scorțișoară", amount: "generos" },
      { name: "Unt topit", amount: "150 g" },
      { name: "Pătrunjel & Coriandru", amount: "tocat" }
    ],
    steps: [
      "Gătirea puiului. Într-un oală, puneți puiul bucăți, ceapa tocată, unt, ulei, ghimbir, curcuma, sare, piper și un băț de scorțișoară. Adăugați foarte puțină apă (ceapa lasă apă). Fierbeți la foc mic până puiul este foarte fraged.\n\nScoateți puiul, dezosați-l și rupeți carnea în fâșii mici. Aruncați oasele și pielea.",
      
      "Sosul de ouă (Crema). Lăsați sosul de ceapă rămas în oală să fiarbă până scade lichidul și devine gros și caramelizat. Reduceți focul.\n\nBateți ouăle și turnați-le peste sosul de ceapă, amestecând încet până se gătesc și formează o compoziție cremoasă, ca o omletă moale și spartă. Lăsați acest amestec să se răcească complet (foarte important, altfel înmoaie foile).",
      
      "Stratul crocant (Migdalele). Prăjiți migdalele decojite în ulei până sunt aurii. Lăsați-le să se răcească și măcinați-le grosier. Amestecați migdalele măcinate cu zahăr pudră și scorțișoară măcinată.\n\nAcesta este elementul dulce care contrastează cu puiul sărat.",
      
      "Asamblarea (Montajul). Ungeți o tavă rotundă (de plăcintă) cu unt. Așezați 3-4 foi de plăcintă (warka) pe fund, lăsând marginile să atârne mult în afara tăvii. Ungeți fiecare foaie cu unt topit.\n\nAdăugați stratul de pui condimentat. Deasupra puneți stratul de ouă cu ceapă. Ultimul este stratul de migdale cu zahăr.",
      
      "Închiderea. Aduceți marginile foilor care atârnă spre centru, acoperind umplutura. Ungeți cu unt. Așezați alte 2-3 foi deasupra pentru a 'sigila' plăcinta, împingând marginile acestor foi sub plăcintă (ca și cum ați băga cearșaful sub saltea).\n\nTrebuie să obțineți un disc perfect rotund și neted.",
      
      "Coacerea. Ungeți suprafața cu gălbenuș de ou sau unt. Coaceți la 180°C timp de 30-40 de minute până devine aurie și foarte crocantă. Lăsați-o să se răcească 5 minute.",

      "Decorul Iconic. Pudrați toată suprafața plăcintei cu un strat generos de zahăr pudră alb. Apoi, folosind scorțișoară măcinată, creați un model geometric de grilaj (romburi) deasupra zahărului. Serviți caldă, tăiată felii."
    ],
    nutrition: { calories: 600, protein: 30, carbs: 50, fat: 35, sugar: 25 }
  },

  "Kefta Mkaouara": {
    title: "Kefta Mkaouara (Chiftele în Sos cu Ouă)",
    servings: 4,
    prepTime: "20 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Carne tocată (vită/miel)", amount: "500 g" },
      { name: "Roșii coapte (pasate)", amount: "600 g" },
      { name: "Ouă", amount: "4 buc" },
      { name: "Ceapă", amount: "1 mică" },
      { name: "Usturoi", amount: "3 căței" },
      { name: "Chimen & Boia", amount: "câte 2 lingurițe" },
      { name: "Pătrunjel & Coriandru", amount: "tocat" },
      { name: "Ulei de măsline", amount: "3 linguri" }
    ],
    steps: [
      "Pregătirea chiftelelor (Kefta). Într-un bol, amestecați carnea tocată cu ceapa rasă fin, jumătate din usturoi, chimen, boia dulce, sare, piper și ierburi tocate. Frământați bine până amestecul este omogen.\n\nFormați biluțe mici, de mărimea unei nuci (aprox 2-3 cm diametru). Cu cât sunt mai mici, cu atât sunt mai elegante și se gătesc mai repede.",
      
      "Sosul de roșii. Folosiți un tajine sau o tigaie largă cu capac. Încingeți uleiul de măsline. Adăugați restul de usturoi zdrobit și roșiile pasate (sau roșii proaspete decojite și tocate). Asezonați cu sare, piper, mult chimen și boia.\n\nLăsați sosul să fiarbă la foc mediu timp de 10-15 minute până se reduce și devine aromat.",
      
      "Gătirea chiftelelor. Adăugați biluțele de carne în sosul de roșii care clocotește ușor. Acoperiți vasul și lăsați să fiarbă 10-15 minute.\n\nNu amestecați violent ca să nu rupeți chiftelele; doar scuturați tigaia ușor. Carnea va lăsa propria grăsime în sos, îmbogățindu-l.",
      
      "Adăugarea ouălor. Acesta este pasul final spectaculos. Când chiftelele sunt gătite și sosul e scăzut, spargeți ouăle direct în tigaie, printre chiftele, ca niște ochiuri.\n\nÎncercați să nu spargeți gălbenușurile. Sărați puțin ouăle.",
      
      "Coagularea. Puneți capacul înapoi și lăsați să se gătească încă 3-5 minute. Albușul trebuie să fie complet alb și coagulat, dar gălbenușul trebuie să rămână moale și curgător (poșat în sos).\n\nDacă gălbenușul se întărește, preparatul își pierde din farmec.",
      
      "Servirea. Presărați coriandru proaspăt și chimen măcinat deasupra. Serviți imediat, direct din vasul fierbinte.\n\nSe mănâncă tradițional cu pâine proaspătă marocană, înmuind în gălbenușul moale și luând câte o chifteluță cu sos."
    ],
    nutrition: { calories: 450, protein: 30, carbs: 10, fat: 30, sodium: 700 }
  },

  "Zaalouk": {
    title: "Zaalouk (Salată de Vinete Gătită)",
    servings: 4,
    prepTime: "15 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Vinete mari", amount: "2 buc" },
      { name: "Roșii coapte", amount: "4 buc" },
      { name: "Usturoi", amount: "4 căței" },
      { name: "Coriandru & Pătrunjel", amount: "1 legătură" },
      { name: "Chimen", amount: "1 lingură" },
      { name: "Boia dulce (Paprika)", amount: "1 lingură" },
      { name: "Ulei de măsline", amount: "50 ml" },
      { name: "Oțet/Lămâie", amount: "1 lingură" }
    ],
    steps: [
      "Pregătirea vinetelor. Există două metode: coacerea (pentru gust afumat) sau fierberea (mai rapid). Pentru Zaalouk autentic, curățați vinetele parțial (lăsând fâșii de coajă pentru textură, stil 'zebră') și tăiați-le cuburi.\n\nFierbeți-le în apă cu sare până sunt moi, apoi scurgeți-le foarte bine, presându-le în sită să iasă apa.",
      
      "Sosul de roșii aromat. Într-un tigaie mare, puneți roșiile decojite și tăiate cuburi, usturoiul zdrobit, uleiul de măsline, chimenul, boiaua și sarea. Nu se pune ceapă în Zaalouk!\n\nGătiți sosul la foc mediu timp de 10-15 minute până când roșiile se descompun și formează o pastă groasă.",
      
      "Combinarea și zdrobirea. Adăugați cuburile de vinete fierte (sau coapte) în sosul de roșii. Adăugați jumătate din ierburile tocate.\n\nFolosind o furculiță sau un zdrobitor de cartofi, striviți vinetele grosier în tigaie, amestecându-le cu roșiile. Nu trebuie să fie piure fin, ci să aibă bucăți ('chunky').",
      
      "Prăjirea amestecului (Teqlia). Continuați să gătiți amestecul, amestecând des, până când tot lichidul se evaporă. Aceasta este cheia: salata trebuie să se prăjească în propriul ulei, nu să fiarbă în apă.\n\nCuloarea se va închide și aroma de chimen se va intensifica.",
      
      "Aciditatea. La final, adăugați o lingură de oțet sau zeamă de lămâie pentru a 'trezi' aromele și a tăia din dulceața roșiilor. Gustați și potriviți de sare și ardei iute (dacă doriți picant).",
      
      "Servirea. Zaalouk se poate servi cald sau rece, dar este cel mai bun la temperatura camerei, după ce aromele s-au odihnit.\n\nPresărați restul de coriandru proaspăt și un fir de ulei de măsline crud. Se servește ca antreu (dip) cu pâine crocantă."
    ],
    nutrition: { calories: 150, protein: 3, carbs: 15, fat: 10, fiber: 8 }
  },

  "Mechoui": {
    title: "Mechoui (Miel Copt Lent cu Chimen)",
    servings: 6,
    prepTime: "20 min",
    cookTime: "4 ore",
    ingredients: [
      { name: "Pulpă/Spată de miel", amount: "2 kg (cu os)" },
      { name: "Unt moale (Smen)", amount: "100 g" },
      { name: "Usturoi", amount: "6 căței" },
      { name: "Chimen măcinat", amount: "2 linguri" },
      { name: "Sare de mare", amount: "1 lingură" },
      { name: "Coriandru boabe", amount: "1 lingură" },
      { name: "Șofran", amount: "un praf" },
      { name: "Apă", amount: "2 căni" }
    ],
    steps: [
      "Pregătirea cărnii. Mechoui înseamnă carne friptă lent. Cresteți pulpa de miel din loc în loc cu vârful cuțitului. Introduceți felii de usturoi în aceste incizii pentru a aroma carnea din interior.\n\nAmestecați untul moale (sau Smen - unt fermentat) cu sarea, chimenul, coriandrul măcinat și șofranul. Ungeți carnea generos cu această pastă aromată pe toate părțile.",
      
      "Sigilarea umidității. Pentru a replica cuptorul de pământ tradițional, puneți carnea într-o tavă adâncă. Turnați apa pe fundul tăvii (pentru a crea abur și a nu se arde grăsimea).\n\nAcoperiți tava mai întâi cu hârtie de copt, apoi sigilați ermetic cu 2-3 straturi de folie de aluminiu. Nu trebuie să iasă niciun fir de abur.",
      
      "Coacerea lentă. Introduceți tava în cuptorul preîncălzit la 160°C (chiar 150°C dacă aveți timp). Lăsați să se coacă timp de 3.5 - 4 ore.\n\nVerificați după 3 ore: carnea ar trebui să se retragă de pe os și să fie extrem de moale. Dacă mai e nevoie, mai lăsați 30-60 min.",
      
      "Rumenirea (Crusta). Scoateți folia și hârtia. Măriți temperatura cuptorului la 220°C sau porniți funcția grill. Ungeți carnea cu sucurile din tavă.\n\nLăsați 15-20 de minute până când pielea devine maro-închisă, crocantă și delicioasă. Carnea din interior trebuie să fie atât de fragedă încât să se poată mânca cu mâna.",
      
      "Sarea și Chimenul (Dips). Tradiția marocană cere ca Mechoui să fie servit simplu, fără sosuri grele. Pe masă se pun boluri mici cu sare amestecată cu chimen măcinat (Kemoun).\n\nFiecare invitat rupe o bucată de carne și o înmoaie direct în sarea cu chimen înainte de a o mânca.",
      
      "Servirea. Aduceți platoul cu carnea întreagă la masă pentru un efect spectaculos. Alături se servesc legume coapte sau salate proaspete pentru a echilibra bogăția cărnii de miel."
    ],
    nutrition: { calories: 600, protein: 50, carbs: 0, fat: 40, sodium: 800 }
  },

  "Msemen": {
    title: "Msemen (Clătite Marocane în Straturi)",
    servings: 8,
    prepTime: "45 min (+odihnă)",
    cookTime: "20 min",
    ingredients: [
      { name: "Făină albă", amount: "350 g" },
      { name: "Griș fin (Semolina)", amount: "150 g" },
      { name: "Apă călduță", amount: "300 ml" },
      { name: "Drojdie", amount: "un vârf de cuțit" },
      { name: "Sare", amount: "1 linguriță" },
      { name: "Unt moale", amount: "100 g (pt uns)" },
      { name: "Ulei", amount: "100 ml (pt uns)" }
    ],
    steps: [
      "Aluatul elastic. Într-un bol, amestecați făina, grișul fin, sarea și foarte puțină drojdie (doar cât să facă aluatul manevrabil, nu să crească ca pâinea). Adăugați apa treptat și frământați.\n\nFrământarea este cheia: trebuie să lucrați aluatul energic timp de 15-20 de minute până devine foarte elastic și nu se rupe când este întins. Lăsați-l să se odihnească 10 minute uns cu ulei.",
      
      "Formarea bilelor. Ungeți mâinile și blatul cu ulei. Împărțiți aluatul în bile de mărimea unei mandarine. Așezați-le pe o tavă unsă, acoperiți-le cu folie și lăsați-le 15 minute la odihnă.\n\nOdihna relaxează glutenul și permite întinderea fină.",
      
      "Întinderea (Feuille de brick). Pe blatul bine uns cu ulei (nu făină!), luați o bilă și întindeți-o cu palmele până devine o foaie extrem de subțire, aproape transparentă. Nu contează dacă se fac mici găuri.\n\nTrebuie să obțineți un cerc sau dreptunghi mare și fin.",
      
      "Laminarea și plierea. Ungeți foaia întinsă cu unt moale și presărați puțin griș fin uscat deasupra. Grișul va separa straturile la copt.\n\nÎndoiți partea de sus spre mijloc, apoi partea de jos peste ea, obținând o bandă lungă. Îndoiți stânga și dreapta spre centru pentru a forma un pătrat perfect. Lăsați pătratul deoparte.",
      
      "Aplatizarea finală. După ce ați format toate pătratele, luați primul pătrat făcut și apăsați-l cu degetele pentru a-l întinde într-un pătrat mai mare și mai subțire (cca 3-4 mm grosime).",
      
      "Gătirea. Încălziți o tigaie de fontă sau o plită. Puneți Msemen-ul în tigaie (fără ulei suplimentar, are deja). Gătiți la foc mediu 2-3 minute pe fiecare parte.\n\nÎntoarceți-l de mai multe ori. Veți vedea cum se umflă și straturile se separă. Trebuie să fie auriu cu pete maronii. Se servește cald cu miere și unt topit."
    ],
    nutrition: { calories: 300, protein: 6, carbs: 45, fat: 12, fiber: 2 }
  },

  "Briouats": {
    title: "Briouats cu Migdale și Miere",
    servings: 12,
    prepTime: "45 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Foi de plăcintă (Warka/Phyllo)", amount: "1 pachet" },
      { name: "Migdale măcinate", amount: "250 g" },
      { name: "Zahăr pudră", amount: "100 g" },
      { name: "Apă de flori de portocal", amount: "2 linguri" },
      { name: "Unt topit", amount: "50 g + pt uns" },
      { name: "Scorțișoară", amount: "1 linguriță" },
      { name: "Miere", amount: "500 g (pt sirop)" },
      { name: "Ulei", amount: "pt prăjit" }
    ],
    steps: [
      "Pasta de migdale. Dacă folosiți migdale întregi, fierbeți-le, curățați-le de coajă și măcinați-le fin. Amestecați migdalele măcinate cu zahărul pudră, scorțișoara, untul topit și apa de flori de portocal.\n\nFrământați cu mâna până obțineți o pastă compactă care poate fi modelată (ca un marțipan). Formați bile mici de mărimea unei cireșe.",
      
      "Pregătirea foilor. Tăiați foile de plăcintă (Phyllo) în fâșii lungi de aproximativ 5-6 cm lățime. Păstrați-le acoperite cu un prosop umed ca să nu se usuce.\n\nUngeți o fâșie cu puțin unt topit.",
      
      "Plierea triunghiulară. Puneți o bilă de pastă de migdale la un capăt al fâșiei. Îndoiți colțul de jos peste umplutură pentru a forma un triunghi.\n\nContinuați să pliați triunghiul stânga-dreapta pe toată lungimea fâșiei, menținând forma și sigilând colțurile. La final, introduceți capătul rămas de aluat în 'buzunarul' format sau lipiți-l cu un amestec de apă și făină.",
      
      "Prăjirea. Încălziți uleiul într-o cratiță adâncă. Prăjiți briouats-urile la foc mediu până devin aurii-deschis. Atenție, se ard foarte repede!\n\nTrebuie să fie crocante și aurii, nu maro închis.",
      
      "Baia de miere. Încălziți mierea într-o oală (fără să fiarbă). Imediat ce scoateți briouats-urile din uleiul fierbinte, aruncați-le direct în mierea caldă.\n\nLăsați-le să stea în miere cel puțin 5-10 minute pentru a absorbi siropul până la miez.",
      
      "Scurgerea și decorul. Scoateți-le într-o sită să se scurgă excesul de miere. Presărați semințe de susan prăjit sau migdale feliate deasupra.\n\nSe servesc reci, ca desert lângă ceaiul de mentă. Sunt crocante la exterior și moi la interior."
    ],
    nutrition: { calories: 200, protein: 4, carbs: 25, fat: 10, sugar: 15 }
  },

  "Chermoula Fish": {
    title: "Pește cu Chermoula la Cuptor",
    servings: 4,
    prepTime: "20 min (+1h marinare)",
    cookTime: "30 min",
    ingredients: [
      { name: "Pește întreg (Doradă/Lup de mare)", amount: "1 kg" },
      { name: "Coriandru & Pătrunjel", amount: "1 legătură mare" },
      { name: "Usturoi", amount: "4 căței" },
      { name: "Chimen & Boia", amount: "câte 1 lingură" },
      { name: "Lămâie", amount: "zeamă și felii" },
      { name: "Ulei de măsline", amount: "100 ml" },
      { name: "Cartofi & Morcovi", amount: "feliate subțire" },
      { name: "Roșii", amount: "2 buc" }
    ],
    steps: [
      "Chermoula (Marinada Supremă). Chermoula este sosul marinăresc marocan. Într-un blender sau mojar, combinați: coriandru, pătrunjel, usturoi, sare, chimen, boia dulce, puțin ardei iute, zeama de lămâie și uleiul de măsline.\n\nMixați până obțineți o pastă verde aromată. Gustați: trebuie să fie sărată, acrișoară și usturoiată.",
      
      "Pregătirea peștelui. Curățați peștele de solzi și intestine. Faceți 3 crestături adânci pe fiecare parte a peștelui.\n\nFrecați peștele cu jumătate din sosul Chermoula, insistând în crestături și în interiorul burții. Lăsați la marinat la rece timp de o oră.",
      
      "Patul de legume. Într-o tavă de cuptor, așezați un strat de felii subțiri de morcovi și cartofi (tăiați rondele). Amestecați restul de Chermoula cu puțină apă și turnați peste legume, amestecând bine ca să fie acoperite.",
      
      "Asamblarea. Așezați peștele marinat deasupra patului de legume. Decorați peștele cu felii de roșii și felii de lămâie (sau lămâie murată).\n\nAdăugați câteva măsline verzi în tavă și frunze de dafin.",
      
      "Coacerea. Acoperiți tava cu folie de aluminiu și coaceți la 200°C timp de 20 de minute. Apoi, îndepărtați folia și mai lăsați 10-15 minute pentru a se rumeni peștele și a scădea sosul.\n\nLegumele trebuie să fie moi, iar peștele să se desfacă ușor.",
      
      "Servirea. Se servește direct din tavă, cu pâine pentru a înmuia în sosul delicios format din ulei, lămâie și sucurile peștelui."
    ],
    nutrition: { calories: 400, protein: 35, carbs: 20, fat: 20, sodium: 600 }
  },

  "Baghrir": {
    title: "Baghrir (Clătite cu O Mie de Găuri)",
    servings: 6,
    prepTime: "10 min (+30 min dospire)",
    cookTime: "20 min",
    ingredients: [
      { name: "Griș fin (Semolina)", amount: "250 g" },
      { name: "Făină albă", amount: "1 lingură" },
      { name: "Drojdie uscată", amount: "1 linguriță" },
      { name: "Praf de copt", amount: "2 lingurițe (10g)" },
      { name: "Apă călduță", amount: "500-550 ml" },
      { name: "Sare, Zahăr", amount: "un praf" },
      { name: "Miere & Unt", amount: "pt servire" }
    ],
    steps: [
      "Aluatul la blender. Spre deosebire de alte aluaturi dospite, Baghrir se face în blender pentru a activa glutenul și a crea bule. Puneți grișul, făina, drojdia, zahărul, sarea și apa călduță în blender.\n\nMixați la viteză mare timp de 3-4 minute. Consistența trebuie să fie lichidă dar cremoasă, ca o smântână subțire.",
      
      "Adăugarea prafului de copt. Acesta este secretul găurilor. Adăugați praful de copt în blender și mai mixați doar 10 secunde (pulse). Nu mixați mult după ce ați pus praful de copt.\n\nTurnați aluatul într-un bol, acoperiți și lăsați la dospit 20-30 de minute până face spumă la suprafață.",
      
      "Tehnica de coacere. Folosiți o tigaie antiaderentă bună. NU UNGEȚI tigaia cu ulei! Baghrir se coace în tigaie uscată și rece/călduță.\n\nTurnați un polonic de aluat în mijlocul tigăii (rece) și puneți pe foc mediu. Nu întindeți aluatul, lăsați-l să se așeze singur.",
      
      "Formarea găurilor. Pe măsură ce clătita se încălzește, veți vedea cum apar sute de mici bule la suprafață care se sparg, formând găuri ('ochii').\n\nNu întoarceți clătita! Baghrir se gătește doar pe o singură parte. Este gata când suprafața nu mai este lucioasă/umedă, ci uscată și mată (cca 2-3 minute).",
      
      "Răcirea. Scoateți clătita pe un prosop curat, nu una peste alta (se lipesc cât sunt calde). Răciți fundul tigăii sub jet de apă rece înainte de a turna următoarea clătită (șocul termic ajută la formarea găurilor).",
      
      "Siropul. Într-un ibric, topiți unt și miere în cantități egale. Turnați acest sirop fierbinte generos peste clătite înainte de servire. Găurile vor absorbi siropul ca un burete. Se servesc calde."
    ],
    nutrition: { calories: 250, protein: 5, carbs: 45, fat: 8, sugar: 15 }
  },

  "Ceai cu mentă": {
    title: "Ceai Marocan cu Mentă (Atay)",
    servings: 4,
    prepTime: "10 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Ceai verde (Gunpowder)", amount: "1 lingură mare" },
      { name: "Mentă proaspătă (Sheba)", amount: "1 legătură mare" },
      { name: "Zahăr cubic/bloc", amount: "5-6 buc (mult)" },
      { name: "Apă clocotită", amount: "1 L" }
    ],
    steps: [
      "Spălarea ceaiului. Puneți frunzele de ceai verde (Gunpowder - frunze rulate) în ceainicul de metal. Turnați o ceașcă de apă clocotită peste ele. Lăsați 1 minut, apoi turnați apa într-un pahar și PĂSTRAȚI-O (aceasta conține 'sufletul' ceaiului).\n\nTurnați o a doua ceașcă de apă peste frunze, clătiți prin rotire și ARUNCAȚI această apă (este amară și tulbure).",
      
      "Infuzia. Turnați apa 'suflet' înapoi în ceainic peste frunzele spălate. Umpleți ceainicul cu apă clocotită proaspătă.\n\nPuneți ceainicul direct pe foc mediu. Lăsați să fiarbă 2-3 minute. Ceaiul verde chinezesc folosit în Maroc se fierbe, spre deosebire de alte metode.",
      
      "Adăugarea mentei și zahărului. Luați ceainicul de pe foc. Împingeți legătura mare de mentă proaspătă (spălată bine) în ceainic, asigurându-vă că e scufundată. Adăugați bucățile mari de zahăr.\n\nCeaiul marocan trebuie să fie foarte dulce.",
      
      "Amestecarea ceremonială. Nu amestecați cu lingura. Turnați un pahar de ceai din ceainic, apoi turnați-l înapoi în ceainic. Repetați acest proces de 2-3 ori.\n\nAcest lucru dizolvă zahărul și amestecă aromele fără a zdrobi menta (care ar deveni amară).",
      
      "Turnarea de la înălțime. Acesta este spectacolul. Ridicați ceainicul cât mai sus posibil (30-50 cm) și turnați ceaiul în pahare mici de sticlă, într-un fir lung și precis.\n\nScopul este să creați un strat gros de spumă ('coroana' sau 'turbanul') la suprafața fiecărui pahar. Această aerare îmbunătățește gustul.",
      
      "Servirea. Ceaiul se servește fierbinte, în orice moment al zilei, ca simbol al ospitalității. Se bea cu înghițituri mici, savurând aroma intensă de mentă și dulceața reconfortantă."
    ],
    nutrition: { calories: 80, protein: 0, carbs: 20, fat: 0, sugar: 20 }
  },

  "Batbout": {
    title: "Batbout (Pâine Marocană la Tigaie)",
    servings: 8,
    servingSize: "1 bucată (80g)",
    pricePerServing: 2,
    prepTime: "20 min (+1h dospire)",
    cookTime: "15 min",
    ingredients: [
      { name: "Făină albă", amount: "250 g" },
      { name: "Griș fin (Semolina)", amount: "250 g" },
      { name: "Apă călduță", amount: "300 ml" },
      { name: "Drojdie uscată", amount: "7 g" },
      { name: "Sare", amount: "1 linguriță" },
      { name: "Zahăr", amount: "1 linguriță" },
      { name: "Ulei", amount: "1 lingură" }
    ],
    steps: [
      "Activarea drojdiei. Amestecați drojdia și zahărul cu puțină apă călduță. Lăsați 5 minute să se activeze.",
      "Frământarea. Într-un bol mare, amestecați făina cu grișul fin și sarea. Adăugați apa cu drojdie și uleiul. Frământați energic timp de 10-15 minute până obțineți un aluat neted și elastic.",
      "Prima dospire. Acoperiți aluatul și lăsați-l la loc cald timp de 1 oră, sau până își dublează volumul.",
      "Modelarea. Împărțiți aluatul în 8 bile egale. Pe o suprafață presărată cu puțin griș, întindeți fiecare bilă într-un disc de cca 0.5 cm grosime. Așezați discurile pe un prosop curat și acoperiți-le.",
      "A doua dospire. Lăsați discurile să se odihnească încă 20-30 de minute.",
      "Gătirea. Încălziți o tigaie de fontă sau antiaderentă la foc mediu. Nu folosiți ulei. Așezați un batbout în tigaie.",
      "Secretul umflării. Întoarceți pâinea des (la fiecare 20-30 secunde). Această tehnică face ca batbout-ul să se umfle ca un balon (buzunar). Gătiți până e auriu pe ambele părți.",
      "Servirea. Se servesc calde, unse cu unt și miere, sau umplute cu diverse compoziții sărate."
    ],
    nutrition: { calories: 200, protein: 6, carbs: 40, fat: 2, fiber: 2 }
  },

  "Ghriba": {
    title: "Ghriba Bahla (Fursecuri Marocane Crăpate)",
    servings: 20,
    servingSize: "1 fursec (30g)",
    pricePerServing: 3,
    prepTime: "30 min (+odihnă)",
    cookTime: "15 min",
    ingredients: [
      { name: "Făină", amount: "500 g" },
      { name: "Zahăr pudră", amount: "150 g" },
      { name: "Unt moale", amount: "125 g" },
      { name: "Ulei vegetal", amount: "125 ml" },
      { name: "Susan prăjit", amount: "100 g" },
      { name: "Migdale măcinate/tocate", amount: "50 g (opțional)" },
      { name: "Praf de copt", amount: "2 plicuri (20g)" },
      { name: "Scorțișoară", amount: "1 linguriță" },
      { name: "Sare", amount: "un praf" }
    ],
    steps: [
      "Pregătirea elementelor crocante. Începeți prin a prăji ușor semințele de susan într-o tigaie uscată până devin aurii și eliberează un miros de nucă. Dacă folosiți migdale, coaceți-le și măcinați-le grosier (să rămână bucățele). Lăsați totul să se răcească complet înainte de a le adăuga în aluat.",
      "Emulsionarea grăsimilor. Într-un bol larg (gsaa), frecați untul moale cu zahărul pudră până obțineți o cremă fină. Adăugați uleiul vegetal treptat, amestecând continuu cu mâna sau mixerul, până când amestecul devine omogen, lucios și aerat.",
      "Formarea aluatului nisipos. Adăugați sarea, scorțișoara, susanul prăjit și migdalele. Cerneți făina împreună cu praful de copt și adăugați-o treptat peste cremă. Începeți să amestecați cu vârfurile degetelor până obțineți o textură sfărâmicioasă, ca nisipul umed.",
      "Frământarea esențială (Dlak). Acesta este secretul: frământați energic aluatul cu podul palmei timp de 10-15 minute. Frecarea încălzește untul și leagă ingredientele. Aluatul este gata când, deși pare sfărâmicios, se leagă într-o bilă compactă dacă îl strângeți puternic în pumn.",
      "Odihna și modelarea. Lăsați aluatul să se odihnească 30 de minute (sau peste noapte pentru rezultate perfecte). Încălziți cuptorul. Luați bucăți de aluat și formați bile perfect rotunde, netede, de mărimea unei nuci. Așezați-le pe tavă la distanță și aplatizați-le foarte puțin cu degetul mare.",
      "Coacerea în două etape. Pentru a obține crăpăturile specifice ('bahla'), puneți tava pe raftul de sus al cuptorului (cu căldura venind de sus) timp de 5-7 minute până crapă suprafața. Apoi, mutați tava la mijloc (căldură normală) și coaceți încă 10-15 minute la 170°C până devin aurii. Lăsați să se răcească complet în tavă (sunt fragile calde)."
    ],
    nutrition: { calories: 180, protein: 2, carbs: 20, fat: 10, sugar: 8 }
  },

  "Bissara": {
    title: "Bissara (Supă Cremă de Fasole Fava)",
    servings: 4,
    servingSize: "1 bol",
    pricePerServing: 5,
    prepTime: "12 ore (înmuiere)",
    cookTime: "1 oră",
    ingredients: [
      {name: "Fasole Fava uscată (decorticată)", amount: "300 g"},
      {name: "Usturoi", amount: "4-5 căței"},
      {name: "Ulei de măsline", amount: "generos"},
      {name: "Chimen", amount: "1 lingură"},
      {name: "Paprika", amount: "1 lingură"},
      {name: "Ardei iute", amount: "după gust"},
      {name: "Apă", amount: "1.5 L"}
    ],
    steps: [
      "Hidratarea boabelor. Spălați fasolea fava decorticată (bob mic) în mai multe ape reci. Lăsați-o la înmuiat într-un bol cu apă din abundență timp de cel puțin 6-8 ore sau peste noapte. Acest pas este crucial pentru o fierbere uniformă și o digestie ușoară.",
      "Fierberea și curățarea apei. Scurgeți fasolea și puneți-o într-o oală adâncă. Acoperiți cu 1.5 - 2 litri de apă proaspătă și aduceți la punctul de fierbere. Când apare spuma albă densă la suprafață, îndepărtați-o cu grijă folosind o spumieră până apa rămâne limpede.",
      "Gătirea aromatică. După ce ați spumuit, adăugați cățeii de usturoi întregi (curățați), o lingură de ulei de măsline și puțină sare. Acoperiți parțial și lăsați să fiarbă la foc mic timp de 45-60 de minute. Verificați des și completați cu apă fierbinte dacă scade prea mult.",
      "Transformarea în cremă. Când fasolea se sfărâmă la atingere, supa este gata. Folosiți un blender vertical sau un tel pentru a mixa totul (inclusiv usturoiul fiert) într-un piure fin și catifelat. Consistența trebuie să fie ca a unei supe creme dense.",
      "Condimentarea finală. Readuceți crema pe foc mic. Acum adăugați condimentele specifice: chimen măcinat din belșug (pentru aromă și digestie) și boia dulce (paprika) pentru culoare. Amestecați bine și mai lăsați să dea un clocot scurt.",
      "Servirea tradițională. Turnați Bissara fierbinte în boluri de lut sau farfurii adânci. Faceți un șanț în mijloc și umpleți-l generos cu ulei de măsline extravirgin. Presărați extra chimen și fulgi de ardei iute (dacă doriți picant). Se servește cu pâine caldă de casă și ceai de mentă."
    ],
    nutrition: {calories: 300, protein: 20, carbs: 35, fat: 12, fiber: 15}
  },

  "Pui Harissa": {
    title: "Pui Harissa la Cuptor (Stil Marocan)",
    servings: 4,
    servingSize: "1 pulpă",
    pricePerServing: 15,
    prepTime: "10 min (+marinare)",
    cookTime: "45 min",
    ingredients: [
      {name: "Pulpe de pui întregi", amount: "4 buc"},
      {name: "Pastă Harissa", amount: "3 linguri"},
      {name: "Ulei de măsline", amount: "2 linguri"},
      {name: "Lămâie", amount: "1/2 (zeamă)"},
      {name: "Usturoi", amount: "3 căței"},
      {name: "Chimen & Coriandru boabe", amount: "1 linguriță"},
      {name: "Miere", amount: "1 linguriță"},
      {name: "Iaurt", amount: "pentru servire"}
    ],
    steps: [
      "Prepararea marinadei picante. Într-un bol, amestecați pasta de Harissa (un amestec tunisian/marocan de ardei iute, usturoi și condimente) cu uleiul de măsline, zeama de lămâie proaspăt stoarsă, usturoiul pisat, mierea (pentru a echilibra iuțeala și a ajuta la caramelizare) și condimentele uscate (chimen, coriandru, sare).",
      
      "Pregătirea puiului. Spălați și uscați pulpele de pui cu prosoape de hârtie. Cu un cuțit ascuțit, faceți 2-3 crestături adânci în partea cea mai groasă a pulpelor, până la os. Acest lucru permite marinadei să pătrundă în carne și ajută la gătirea uniformă.",
      
      "Marinarea. Puneți puiul în bolul cu marinadă. Folosind mâinile (purtați mănuși dacă Harissa e foarte iute), masați bine carnea cu pasta roșie, insistând să intre în crestături și pe sub piele, dacă este posibil. Lăsați la marinat la frigider cel puțin 30 de minute, sau ideal peste noapte pentru o aromă intensă.",
      
      "Pregătirea patului de legume (Opțional). Pentru o masă completă, puteți așeza puiul peste un strat de ceapă tăiată rondele, felii de cartofi și felii de lămâie într-o tavă de copt. Legumele se vor găti în sucurile picante scurse din pui.",
      
      "Coacerea. Preîncălziți cuptorul la 200°C. Așezați puiul (și legumele) în tavă. Coaceți timp de 40-45 de minute. La jumătatea timpului, scoateți tava și ungeți carnea cu sosul format pe fundul tăvii (basting) pentru a o menține suculentă.",
      
      "Rumenirea și servirea. În ultimele 5 minute, puteți porni funcția grill a cuptorului pentru a obține o piele carbonizată ușor și crocantă. Lăsați puiul să se odihnească 5 minute înainte de servire. Se servește cu un sos răcoritor de iaurt cu mentă (pentru a calma iuțeala) și couscous sau lipie."
    ],
    nutrition: {calories: 450, protein: 35, carbs: 5, fat: 25, sodium: 800}
  }
};
