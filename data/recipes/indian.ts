
import { Recipe } from '../../types';

export const INDIAN_RECIPES: Record<string, Recipe> = {
  // ... existing recipes
  "Samosa": {
    title: "Samosa (Pateuri Crocante cu Cartofi)",
    servings: 12,
    servingSize: "2 bucăți (120g)",
    pricePerServing: 5,
    prepTime: "45 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Făină (Maida)", amount: "300 g" },
      { name: "Ghee/Ulei (pt aluat)", amount: "4 linguri" },
      { name: "Semințe Ajwain (Carom)", amount: "1/2 linguriță" },
      { name: "Cartofi", amount: "4 mari" },
      { name: "Mazăre", amount: "100 g" },
      { name: "Ghimbir, Ardei iute", amount: "tocat" },
      { name: "Semințe coriandru", amount: "zdrobite" },
      { name: "Amchoor (Pudră Mango)", amount: "1 linguriță" }
    ],
    steps: [
      "Aluatul crocant. Într-un bol, amestecați făina cu sarea și semințele de ajwain (care ajută digestia). Adăugați ghee-ul (sau uleiul) și frecați cu degetele până obțineți o textură nisipoasă (ca la aluatul de tartă).\n\nAcest proces ('rubbing') asigură textura foietată la prăjire.",
      
      "Frământarea. Adăugați apă rece treptat și frământați un aluat tare și ferm. Nu faceți aluatul moale! Un aluat tare asigură bulele crocante la prăjire și nu absoarbe mult ulei. Acoperiți cu o cârpă umedă și lăsați 30 min la odihnă.",
      
      "Umplutura. Fierbeți cartofii în coajă, curățați-i și zdrobiți-i în bucăți mari (nu piure). Într-o tigaie, încingeți ulei și adăugați semințele de coriandru zdrobite, ghimbirul și ardeiul iute.\n\nCăliți condimentele pentru a le elibera aroma.",

      "Gătirea umpluturii. Adăugați mazărea și cartofii peste condimente. Asezonați cu sare, garam masala, amchoor (pudră de mango pentru aciditate) și coriandru pudră. Gătiți 3-4 minute la foc mic amestecând bine. Lăsați să se răcească complet înainte de umplere.",
      
      "Modelarea (Plierea conică). Împărțiți aluatul în bile. Întindeți fiecare bilă într-un cerc subțire și tăiați-l în două semicercuri. Luați un semicerc, umeziți marginea dreaptă cu apă și formați un con, suprapunând marginile.\n\nUmpleți conul cu compoziția de cartofi. Sigilați baza ciupind aluatul ('pleating') pentru a închide samosa perfect. Trebuie să stea în picioare.",
      
      "Prăjirea lentă. Încălziți ulei într-un wok la foc mic-mediu (nu mare!). Dacă uleiul e prea fierbinte, aluatul face bule mici și inestetice. Prăjiți samosele în tranșe timp de 10-12 minute, întorcându-le des, până devin aurii și foarte crocante.\n\nServiți cu Chutney de mentă."
    ],
    nutrition: { calories: 250, protein: 4, carbs: 30, fat: 12, fiber: 3 }
  },
  // ... other recipes
  "Butter Chicken": {
    title: "Butter Chicken (Murgh Makhani Autentic)",
    servings: 4,
    servingSize: "1 bol (350g)",
    pricePerServing: 28,
    prepTime: "30 min (+4h marinare)",
    cookTime: "40 min",
    ingredients: [
      { name: "Piept/Pulpe de pui", amount: "800 g" },
      { name: "Iaurt grecesc", amount: "200 g" },
      { name: "Unt", amount: "100 g" },
      { name: "Smântână lichidă (30%)", amount: "150 ml" },
      { name: "Roșii pasate (Passata)", amount: "500 ml" },
      { name: "Caju", amount: "50 g" },
      { name: "Usturoi & Ghimbir", amount: "pastă (2 linguri)" },
      { name: "Garam Masala", amount: "1 lingură" },
      { name: "Schinduf (Kasuri Methi)", amount: "1 lingură" },
      { name: "Boia de ardei (Kashmiri)", amount: "1 lingură" }
    ],
    steps: [
      "Prima marinadă. Tăiați puiul în cuburi de 3 cm. Într-un bol, amestecați puiul cu pasta de ghimbir și usturoi, sarea și boiaua roșie (Kashmiri Chili pentru culoare intensă, fără a fi extrem de iute). Adăugați zeama de la o jumătate de lămâie.\n\nLăsați puiul să stea așa 20 de minute. Această primă etapă ajută la frăgezirea cărnii și la pătrunderea aromelor de bază în profunzime.",
      
      "A doua marinadă. Adăugați iaurtul scurs (gros), Garam Masala, uleiul de muștar (sau vegetal) și chimenul peste puiul deja condimentat. Amestecați bine cu mâna pentru a acoperi fiecare bucată.\n\nAcoperiți și lăsați la frigider minim 3-4 ore, ideal peste noapte. Iaurtul conține enzime și acid lactic care vor descompune fibrele cărnii, făcând-o incredibil de moale.",
      
      "Gătirea puiului (Tandoor effect). Încălziți cuptorul la temperatura maximă (240°C) sau folosiți o tigaie grill foarte încinsă. Așezați puiul pe grătar și coaceți-l timp de 15 minute, până prinde puncte negre de arsură (char marks).\n\nNu trebuie să fie gătit complet în interior, ci doar să aibă acea aromă de fum specifică. Păstrați sucurile care se scurg din carne, sunt pline de aromă.",
      
      "Sosul Makhani (Baza). Într-un cratiță, fierbeți roșiile pasate cu ghimbir, usturoi, cardamon și un baton de scorțișoară. Adăugați nucile caju (înmuiate și blendate pastă) sau fierte direct în sos pentru a-l îngroșa natural.\n\nLăsați să fiarbă la foc mic timp de 20-30 de minute până când sosul se reduce și uleiul începe să se separe pe margini. Blendați totul până devine o pastă fină și treceți-o prin sită pentru o textură de catifea.",
      
      "Finalizarea sosului. Puneți sosul fin înapoi pe foc. Adăugați o cantitate generoasă de unt rece (de aici numele 'Butter Chicken'). Untul va emulsifia sosul și îi va da un luciu superb.\n\nAdăugați bucățile de pui gătite și sucurile lor. Lăsați să fiarbă împreună (simmer) încă 10-15 minute. Asezonați cu sare și puțin zahăr sau miere pentru a echilibra aciditatea roșiilor.",
      
      "Aroma finală. Opriți focul. Turnați smântâna lichidă în fir subțire, amestecând ușor pentru a crea acel aspect marmorat portocaliu. Presărați frunze uscate de schinduf (Kasuri Methi) zdrobite între palme – acesta este ingredientul secret care dă gustul de restaurant.\n\nServiți imediat cu Naan cald uns cu unt și usturoi."
    ],
    nutrition: { calories: 600, protein: 35, carbs: 12, fat: 40, sodium: 900 }
  },

  "Chicken Tikka Masala": {
    title: "Chicken Tikka Masala",
    servings: 4,
    servingSize: "1 bol (350g)",
    pricePerServing: 25,
    prepTime: "30 min (+marinare)",
    cookTime: "45 min",
    ingredients: [
      { name: "Pui (piept/pulpă)", amount: "800 g" },
      { name: "Iaurt", amount: "200 g" },
      { name: "Ceapă", amount: "2 mari" },
      { name: "Roșii", amount: "400 g (conservă)" },
      { name: "Smântână", amount: "100 ml" },
      { name: "Garam Masala", amount: "2 linguri" },
      { name: "Curcuma (Turmeric)", amount: "1 linguriță" },
      { name: "Coriandru proaspăt", amount: "1 legătură" }
    ],
    steps: [
      "Pregătirea 'Tikka' (Bucăți fripte). Tăiați puiul cuburi. Marinați-l cu iaurt, jumătate din condimente (garam masala, turmeric, chimen), usturoi și ghimbir. Lăsați la rece.\n\nFrigeți puiul pe țepușe la grătar sau la cuptor la temperatură înaltă până se rumenește bine. Spre deosebire de Butter Chicken, Tikka Masala are o aromă mai puternică de fum și condimente prăjite.",
      
      "Baza de sos (Masala). Diferența majoră față de Butter Chicken este ceapa. Tocați ceapa mărunt și căliți-o în ulei/ghee până devine maro-aurie și se caramelizează bine. Acest pas durează 15 minute și dă profunzime sosului.\n\nAdăugați pasta de ghimbir și usturoi și mai căliți 1 minut până dispare mirosul crud.",
      
      "Condimentele uscate (Blooming). Adăugați condimentele măcinate (coriandru, turmeric, boia, garam masala) direct în uleiul încins. Prăjiți-le 30 de secunde, amestecând continuu.\n\nAceastă tehnică ('blooming') activează uleiurile esențiale din condimente și intensifică aroma finală. Aveți grijă să nu le ardeți.",
      
      "Fierberea. Turnați roșiile tocate (sau pasate). Răzuiți fundul oalei pentru a dezlipi toate aromele caramelizate (deglazare). Lăsați sosul să fiarbă la foc mic 15-20 de minute până se îngroașă și grăsimea se ridică la suprafață ('bhunao').\n\nDacă sosul e prea gros, adăugați puțină apă fierbinte.",
      
      "Combinarea. Adăugați bucățile de pui fript (Chicken Tikka) în sos. Amestecați bine și mai fierbeți 5-10 minute ca puiul să absoarbă aromele.\n\nLa final, încorporați smântâna lichidă, dar nu o fierbeți excesiv. Sosul trebuie să fie portocaliu-închis, gros și texturat (datorită cepei), nu fin ca la Butter Chicken.",
      
      "Servirea. Opriți focul și adăugați o mână generoasă de coriandru proaspăt tocat. Verificați sarea.\n\nSe servește cu orez Basmati fiert simplu (cu chimen) sau cu lipie Naan, perfect pentru a curăța tot sosul delicios din farfurie."
    ],
    nutrition: { calories: 550, protein: 35, carbs: 15, fat: 30, sodium: 850 }
  },

  "Biryani": {
    title: "Chicken Biryani (Stil Hyderabadi Dum)",
    servings: 6,
    servingSize: "1 bol mare (400g)",
    pricePerServing: 20,
    prepTime: "1 oră",
    cookTime: "45 min",
    ingredients: [
      { name: "Pui (cu os)", amount: "1 kg" },
      { name: "Orez Basmati (vechi)", amount: "700 g" },
      { name: "Ceapă prăjită (Barista)", amount: "200 g" },
      { name: "Iaurt", amount: "250 g" },
      { name: "Șofran", amount: "un praf" },
      { name: "Lapte", amount: "100 ml" },
      { name: "Ghee (unt clarifiat)", amount: "100 g" },
      { name: "Condimente întregi", amount: "cardamon, cuișoare, dafin" },
      { name: "Mentă & Coriandru", amount: "câte 1 legătură" }
    ],
    steps: [
      "Marinarea puiului este baza. Biryani Hyderabadi se face cu carne crudă (Kacchi). Puneți bucățile de pui într-o oală cu fund gros. Adăugați iaurtul, pasta de ghimbir-usturoi, ardeii iuți verzi, jumătate din ceapa prăjită (crocantă), menta și coriandrul tocate.\n\nAdăugați condimentele (garam masala, boia), sarea și puțin ulei. Masați bine carnea și lăsați-o la temperatura camerei 1-2 ore. Carnea va sta la baza oalei și se va găti în sucurile proprii.",
      
      "Pregătirea orezului. Folosiți orez Basmati de calitate (bob lung, învechit). Spălați-l delicat de 3-4 ori până apa e limpede, apoi lăsați-l la înmuiat în apă rece 30 de minute.\n\nPuneți o oală mare cu apă la fiert (ca pentru paste). Adăugați sare din belșug (apa trebuie să fie sărată ca marea), foile de dafin, cardamonul, cuișoarele și anasonul stelat. Fierbeți orezul doar 50-60% (bobul trebuie să fie încă tare la mijloc).",
      
      "Stratificarea (Layering). Scurgeți orezul fierbinte și puneți-l direct peste carnea crudă marinată din oală. Nu amestecați! Trebuie să formați un strat uniform de orez care acoperă complet carnea.\n\nStratul de orez acționează ca un capac izolator, permițând cărnii să se gătească la abur (Dum) dedesubt.",
      
      "Aromatizarea finală. Dizolvați șofranul în laptele călduț și turnați-l în dâre peste orez (pentru a avea boabe galbene și albe). Presărați restul de ceapă prăjită (Barista), frunze de mentă și turnați Ghee topit pe margini și în centru.\n\nGhee-ul va coborî printre boabe și va prăji ușor baza, prevenind arderea.",
      
      "Sigilarea (Dum Pukht). Acoperiți oala cu folie de aluminiu, sigilând marginile perfect, apoi puneți capacul greu (sau sigilați cu aluat de făină și apă). Scopul este ca niciun fir de abur să nu iasă.\n\nPuneți oala pe foc mare timp de 5 minute (pentru a porni gătirea cărnii), apoi mutați-o pe un foc foarte mic (eventual pe o tablă/tavă încinsă - tawa) și lăsați să se gătească lent timp de 35-40 de minute.",
      
      "Servirea. Opriți focul și lăsați oala să se odihnească 10 minute. Deschideți capacul: aroma trebuie să inunde camera.\n\nFolosiți o spatulă plată pentru a servi, tăind vertical prin straturi, astfel încât fiecare porție să aibă carne suculentă de la bază, orez aromat de la mijloc și orez alb pufos de sus. Serviți cu Raita (iaurt cu castravete)."
    ],
    nutrition: { calories: 750, protein: 40, carbs: 85, fat: 25, sodium: 1100 }
  },

  "Naan": {
    title: "Naan cu Usturoi și Unt (La Tigaie)",
    servings: 6,
    servingSize: "1 pâine naan (100g)",
    pricePerServing: 4,
    prepTime: "1 oră (+dospire)",
    cookTime: "15 min",
    ingredients: [
      { name: "Făină albă", amount: "500 g" },
      { name: "Iaurt", amount: "150 g" },
      { name: "Drojdie uscată", amount: "7 g" },
      { name: "Apă călduță", amount: "150 ml" },
      { name: "Zahăr", amount: "1 linguriță" },
      { name: "Praf de copt", amount: "1/2 linguriță" },
      { name: "Unt", amount: "50 g" },
      { name: "Usturoi", amount: "3 căței" },
      { name: "Coriandru/Nigella", amount: "presărat" }
    ],
    steps: [
      "Activarea drojdiei. Într-un bol mic, amestecați apa călduță, zahărul și drojdia. Lăsați 5-10 minute până face spumă.\n\nÎntr-un bol mare, amestecați făina cu sarea și praful de copt. Praful de copt este secretul restaurantelor: ajută Naan-ul să rămână moale chiar și după ce se răcește, lucrând împreună cu drojdia.",
      
      "Frământarea. Faceți o gaură în făină și adăugați iaurtul și amestecul de drojdie. Frământați până obțineți un aluat moale și ușor lipicios. Ungeți mâinile cu puțin ulei dacă se lipește prea tare.\n\nFrământați energic 5-8 minute până devine elastic. Iaurtul este esențial pentru textura moale și gustul ușor acrișor specific.",
      
      "Dospirea. Ungeți aluatul cu ulei, acoperiți bolul cu un prosop umed și lăsați la loc cald timp de 1-2 ore, sau până își dublează volumul.\n\nAluatul trebuie să fie foarte pufos și aerat după dospire. Împărțiți-l în 6-8 bile egale.",
      
      "Întinderea. Încălziți o tigaie de fontă (skillet) la foc mediu-mare până începe să fumege ușor. Naan-ul are nevoie de șoc termic.\n\nLuați o bilă de aluat și întindeți-o cu sucitorul sau cu mâna într-o formă ovală (lacrimă), nu foarte subțire (cca 0.5 cm grosime). Presărați usturoi tocat fin și semințe de negrilică (nigella) pe o parte și presați-le cu sucitorul să intre în aluat.",
      
      "Coacerea. Umeziți partea inferioară a naan-ului cu puțină apă și puneți-l în tigaia încinsă (partea udă jos). Apa va crea abur și va lipi pâinea de tigaie.\n\nÎn 30-60 de secunde, vor începe să apară bule mari la suprafață. Când baza e rumenită, dacă aveți plită pe gaz, întoarceți tigaia cu gura în jos direct deasupra flăcării pentru a rumeni fața (ca în tandoor). Dacă nu, întoarceți naan-ul cu spatula și mai gătiți 1 minut.",
      
      "Finalizarea. Scoateți naan-ul pe o farfurie și ungeți-l imediat, cât e fierbinte, cu unt topit amestecat cu coriandru proaspăt tocat.\n\nAcoperiți cu un prosop pentru a le menține calde și moi până le terminați pe toate. Se servesc lângă orice curry."
    ],
    nutrition: { calories: 280, protein: 7, carbs: 45, fat: 8, sodium: 400 }
  },

  "Daal": {
    title: "Daal Tadka (Linte Galbenă Temperată)",
    servings: 4,
    servingSize: "1 bol (300g)",
    pricePerServing: 8,
    prepTime: "10 min (+30 min înmuiere)",
    cookTime: "30 min",
    ingredients: [
      { name: "Linte (Toor Dal/Masoor)", amount: "250 g" },
      { name: "Ceapă", amount: "1 medie" },
      { name: "Roșii", amount: "2 medii" },
      { name: "Ghee (Unt clarifiat)", amount: "3 linguri" },
      { name: "Semințe chimen (Jeera)", amount: "1 linguriță" },
      { name: "Usturoi", amount: "4 căței" },
      { name: "Ardei iute uscat", amount: "2 buc" },
      { name: "Turmeric", amount: "1/2 linguriță" },
      { name: "Hing (Asafoetida)", amount: "un praf (opțional)" }
    ],
    steps: [
      "Fierberea lintei. Spălați lintea în mai multe ape. Puneți-o la fiert într-o oală cu 750ml apă, turmericul și puțină sare. Dacă aveți oală sub presiune, fierbeți 3-4 fluiere; dacă nu, fierbeți în oală normală 20-30 de minute până când lintea se dezintegrează complet și devine cremoasă.\n\nFolosiți un tel pentru a zdrobi boabele rămase întregi. Consistența trebuie să fie ca o supă cremă.",
      
      "Pregătirea bazei (Masala). Într-un tigaie mică (sau karahi), încălziți o lingură de ghee. Căliți ceapa tocată fin până devine translucidă.\n\nAdăugați ghimbirul ras, ardeiul iute verde tocat și roșiile tăiate cuburi. Gătiți până când roșiile se înmoaie complet și se transformă în pastă. Turnați acest amestec peste lintea fiartă și amestecați. Lăsați să dea un clocot împreună.",
      
      "Tadka (Tempering) - Sufletul Daal-ului. Aceasta este tehnica de infuzare a condimentelor în grăsime fierbinte. Într-un ibric mic (tadka pan), încingeți restul de ghee până aproape fumegă.\n\nAdăugați semințele de chimen. Când încep să sfârâie și să pocnească, adăugați usturoiul tăiat felii subțiri și ardeii iuți roșii uscați.",
      
      "Prăjirea condimentelor. Lăsați usturoiul să devină auriu (atenție să nu se ardă!). Adăugați praful de Hing (ajută la digestie) și, opțional, puțină boia roșie pentru culoare.\n\nTotul se întâmplă în câteva secunde. Grăsimea trebuie să fie foarte aromată.",
      
      "Finalizarea spectaculoasă. Turnați conținutul ibricului (ghee-ul clocotit și condimentele) direct peste oala cu linte. Va sfârâi puternic și va elibera o aromă incredibilă.\n\nAcoperiți imediat oala cu un capac pentru 2-3 minute pentru a 'prinde' fumul și aroma în interior.",
      
      "Servirea. Daal Tadka este mâncarea de confort supremă (comfort food). Se servește fierbinte, cu orez basmati fiert (Jeera Rice) sau Jeera Rice, presărat cu coriandru proaspăt tocat. Este simplu, proteic și plin de gust."
    ],
    nutrition: { calories: 300, protein: 18, carbs: 40, fat: 10, fiber: 15 }
  },
  "Palak Paneer": {
    title: "Palak Paneer (Spanac cu Brânză)",
    servings: 4,
    servingSize: "1 bol (300g)",
    pricePerServing: 18,
    prepTime: "20 min",
    cookTime: "20 min",
    ingredients: [
      { name: "Spanac proaspăt", amount: "500 g" },
      { name: "Brânză Paneer (sau Halloumi/Caș)", amount: "250 g" },
      { name: "Ceapă", amount: "1 mare" },
      { name: "Roșii", amount: "2 medii" },
      { name: "Usturoi & Ghimbir", amount: "pastă (1 lingură)" },
      { name: "Smântână lichidă", amount: "50 ml" },
      { name: "Garam Masala", amount: "1 linguriță" },
      { name: "Turmeric & Chimion", amount: "câte 1/2 linguriță" },
      { name: "Unt/Ghee", amount: "2 linguri" }
    ],
    steps: [
      "Pregătirea spanacului. Spălați spanacul bine. Opăriți-l în apă clocotită timp de 2 minute (blanșare), apoi mutați-l imediat într-un bol cu apă și gheață. Acest șoc termic păstrează culoarea verde vibrantă.",
      "Blendarea. Scurgeți spanacul (dar nu complet) și puneți-l în blender. Adăugați un ardei iute verde (opțional) și mixați până obțineți o pastă fină de un verde intens.",
      "Pregătirea brânzei. Tăiați brânza Paneer în cuburi. Dacă nu găsiți Paneer, puteți folosi Halloumi (care nu se topește) sau un caș proaspăt ferm. Prăjiți cuburile ușor în puțin ulei până devin aurii (opțional, se pot pune și crude).",
      "Baza aromată (Masala). Într-un tigaie, încălziți untul sau ghee-ul. Căliți semințele de chimion. Adăugați ceapa tocată fin și gătiți până devine aurie. Adăugați pasta de ghimbir și usturoi.",
      "Sosul. Adăugați roșiile tăiate mărunt, turmericul, sarea și pudra de chili. Gătiți până când roșiile se înmoaie complet și uleiul se separă.",
      "Finalizarea. Turnați piureul de spanac în tigaie. Amestecați și lăsați să fiarbă 2-3 minute. Adăugați cuburile de brânză și Garam Masala.",
      "Servirea. Opriți focul. Incorporați smântâna lichidă pentru cremozitate. Se servește fierbinte cu Naan sau orez Jeera."
    ],
    nutrition: { calories: 350, protein: 18, carbs: 12, fat: 25, micronutrients: ["Iron", "Calcium"] }
  },

  "Malai Kofta": {
    title: "Malai Kofta (Chiftele de Brânză în Sos Cremos)",
    servings: 4,
    servingSize: "1 porție (350g)",
    pricePerServing: 20,
    prepTime: "30 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Brânză Paneer (sau Ricotta scursă/Caș)", amount: "250 g" },
      { name: "Cartofi fierți", amount: "2 mari" },
      { name: "Amidon de porumb", amount: "2 linguri" },
      { name: "Caju", amount: "50 g" },
      { name: "Smântână lichidă", amount: "100 ml" },
      { name: "Ceapă", amount: "2 buc" },
      { name: "Roșii", amount: "3 buc" },
      { name: "Garam Masala", amount: "1 linguriță" },
      { name: "Cardamom", amount: "3-4 păstăi" },
      { name: "Ulei", amount: "pentru prăjit" }
    ],
    steps: [
      "Pregătirea chiftelelor (Kofta). Radeți cartofii fierți și brânza Paneer. Amestecați-le cu amidonul de porumb, sare, puțin piper și, opțional, stafide și nuci caju mărunțite pentru interior. Frământați până obțineți un aluat neted.\n\nFormați bile sau cilindri. Dacă aluatul e lipicios, mai puneți puțin amidon.",
      "Prăjirea. Încălziți ulei într-o tigaie adâncă. Prăjiți chiftelele la foc mediu până devin aurii-maronii. Scoateți-le pe hârtie absorbantă. Koftalele sunt delicate, așa că nu le mișcați prea mult în ulei la început.",
      "Baza sosului (Gravy). Fierbeți ceapa tăiată grosier, roșiile și nucile caju în puțină apă timp de 10-15 minute până se înmoaie. Lăsați să se răcească, apoi blendați totul într-un piure foarte fin.",
      "Gătirea sosului. Încingeți puțin unt sau ghee într-o tigaie. Adăugați cardamomul zdrobit. Turnați piureul de legume și gătiți la foc mediu timp de 5-8 minute, până începe să se desprindă de pe margini.\n\nAdăugați Garam Masala, pudră de chili și sare.",
      "Adăugarea smântânii. Reduceți focul la minim. Turnați smântâna lichidă și amestecați. Sosul trebuie să fie alb-portocaliu, bogat și catifelat. Mai lăsați 2 minute pe foc. Dacă e prea gros, adăugați puțină apă caldă.",
      "Servirea. NU fierbeți chiftelele în sos deoarece se vor dezintegra. Așezați koftalele în farfurie și turnați sosul fierbinte deasupra chiar înainte de a mânca. Serviți cu Naan sau orez Jeera."
    ],
    nutrition: { calories: 500, protein: 12, carbs: 40, fat: 35, sodium: 600 }
  },

  "Chole": {
    title: "Chole (Curry de Năut Punjabi)",
    servings: 4,
    servingSize: "1 bol (300g)",
    pricePerServing: 12,
    prepTime: "15 min",
    cookTime: "40 min",
    ingredients: [
      { name: "Năut fiert (conservă sau uscat)", amount: "500 g" },
      { name: "Ceapă", amount: "2 mari" },
      { name: "Roșii", amount: "3 medii" },
      { name: "Ghimbir & Usturoi", amount: "pastă (1 lingură)" },
      { name: "Chole Masala (sau Garam Masala)", amount: "2 linguri" },
      { name: "Ceai negru (opțional)", amount: "1 pliculeț" },
      { name: "Chimen (Jeera)", amount: "1 linguriță" },
      { name: "Coriandru proaspăt", amount: "1 legătură" },
      { name: "Ulei/Ghee", amount: "3 linguri" }
    ],
    steps: [
      "Secretul culorii. Dacă folosiți năut uscat, fierbeți-l cu un pliculeț de ceai negru. Taninurile din ceai îi dau o culoare închisă, specifică stilului Punjabi, și o aromă subtilă de pământ. Dacă folosiți conservă, puteți fierbe năutul 5 minute cu ceaiul separat.",
      "Baza aromatică. Încingeți uleiul într-o oală. Adăugați semințele de chimen și lăsați-le să sfârâie. Adăugați ceapa tocată foarte mărunt și căliți-o la foc mediu-mic, cu răbdare, până devine maro-aurie (caramelizată). Acesta este pasul cel mai important pentru gust.",
      "Condimentele. Adăugați pasta de ghimbir și usturoi și mai căliți 1 minut. Adăugați roșiile date pe răzătoare (piure) și sarea. Gătiți până când uleiul începe să se separe de amestecul de roșii.\n\nAdăugați Chole Masala (un mix de condimente cu rodie uscată - anardana, care dă aciditate) și pudră de chili.",
      "Fierberea. Adăugați năutul scurs. Turnați o cană de apă. Folosiți o lingură de lemn pentru a zdrobi o parte din boabele de năut de peretele oalei. Acest lucru va îngroșa sosul natural.",
      "Simmering. Acoperiți și lăsați să fiarbă la foc mic 15-20 de minute. Aromele trebuie să pătrundă în boabe. Sosul trebuie să fie gros, închis la culoare și aromat.",
      "Servirea. Se servește fierbinte, presărat cu mult coriandru proaspăt și fâșii subțiri de ghimbir crud (julienne). În mod tradițional se mănâncă cu Bhatura (pâine prăjită umflată) sau orez."
    ],
    nutrition: { calories: 350, protein: 15, carbs: 50, fat: 12, fiber: 14 }
  }
};
