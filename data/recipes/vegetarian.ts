
import { Recipe } from '../../types';

export const VEGETARIAN_RECIPES: Record<string, Recipe> = {
  "Lasagna vegetariană": {
    title: "Lasagna Vegetariană cu Legume Coapte",
    servings: 6,
    prepTime: "40 min",
    cookTime: "45 min",
    ingredients: [
      { name: "Foi de Lasagna", amount: "1 pachet" },
      { name: "Vinete & Dovlecei", amount: "câte 2 buc" },
      { name: "Ardei grași colorați", amount: "3 buc" },
      { name: "Sos de roșii (Marinara)", amount: "800 ml" },
      { name: "Ricotta/Brânză de vaci", amount: "400 g" },
      { name: "Spanac proaspăt", amount: "200 g" },
      { name: "Mozzarella", amount: "300 g" },
      { name: "Parmesan", amount: "100 g" },
      { name: "Ou", amount: "1 buc" }
    ],
    steps: [
      "Pregătirea legumelor (Roasting). Tăiați vinetele, dovleceii și ardeii în cubulețe mici sau felii subțiri. Puneți-le într-o tavă mare de cuptor, stropiți-le cu ulei de măsline, sare, piper și oregano.\n\nCoaceți legumele la 200°C timp de 20-25 de minute, până se înmoaie și se rumenesc ușor. Coacerea legumelor în prealabil elimină excesul de apă (evitând o lasagna apoasă) și le intensifică aroma prin caramelizare.",
      
      "Amestecul de brânză. Într-un bol, amestecați ricotta (sau brânza de vaci scursă) cu oul bătut, jumătate din parmezanul ras și puțină nucșoară. Tocați spanacul proaspăt și încorporați-l în amestecul de brânză.\n\nAceastă compoziție va acționa ca un liant între straturile de legume și paste, oferind cremozitate și proteine.",
      
      "Asamblarea bazei. Ungeți fundul unei tăvi adânci cu un strat subțire de sos de roșii. Așezați primul strat de foi de lasagna (dacă sunt uscate, asigurați-vă că sosul este suficient de lichid sau opăriți-le înainte).\n\nPeste foi, întindeți o treime din amestecul de ricotta și spanac.",
      
      "Stratificarea legumelor. Peste brânză, distribuiți jumătate din legumele coapte. Acoperiți cu un strat generos de sos de roșii și presărați o treime din mozzarella rasă.\n\nRepetați straturile: foi, ricotta, legume, sos, mozzarella. Ultimul strat trebuie să fie foi de lasagna.",
      
      "Topping-ul. Acoperiți ultimul strat de foi cu restul de sos de roșii (asigurați-vă că marginile sunt bine acoperite să nu se usuce). Presărați restul de mozzarella și parmezan.\n\nAcoperiți tava cu folie de aluminiu (fără să atingă brânza) pentru a crea abur și a găti pastele.",
      
      "Coacerea. Coaceți acoperit la 180°C timp de 30 de minute. Îndepărtați folia și mai coaceți 15 minute până când brânza este topită, aurie și bolborosește.\n\nLăsați lasagna să se odihnească 15-20 de minute înainte de tăiere. Acest timp de repaus este critic pentru ca straturile să se stabilizeze."
    ],
    nutrition: { calories: 450, protein: 20, carbs: 45, fat: 22, micronutrients: ["Vitamin A", "Calcium"] }
  },

  "Curry de linte": {
    title: "Curry de Linte Vegetarian (Dhal)",
    servings: 4,
    prepTime: "10 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Linte roșie/galbenă", amount: "250 g" },
      { name: "Lapte de cocos", amount: "400 ml" },
      { name: "Roșii cuburi", amount: "1 conservă" },
      { name: "Ceapă", amount: "1 mare" },
      { name: "Usturoi & Ghimbir", amount: "pastă (2 linguri)" },
      { name: "Curry pudră", amount: "1 lingură" },
      { name: "Turmeric & Chimen", amount: "1 linguriță" },
      { name: "Spanac (opțional)", amount: "100 g" }
    ],
    steps: [
      "Spălarea lintei. Clătiți lintea roșie în mai multe ape până când apa rămâne limpede. Acest lucru elimină amidonul în exces și impuritățile.\n\nLintea roșie nu necesită înmuiere prealabilă și fierbe foarte repede, fiind ideală pentru un curry cremos.",
      
      "Baza aromatică. Într-un oală, încălziți puțin ulei de cocos sau vegetal. Căliți ceapa tocată mărunt până devine translucidă. Adăugați pasta de ghimbir și usturoi și gătiți 1 minut până miroase aromat.\n\nAdăugați condimentele: pudra de curry, turmericul, chimenul și, dacă doriți picant, fulgi de chili. Prăjiți condimentele ('blooming') timp de 30 de secunde.",
      
      "Fierberea. Adăugați roșiile cuburi și gătiți 2-3 minute. Adăugați lintea spălată și laptele de cocos. Completați cu o cană de apă sau supă de legume.\n\nAduceți la fierbere, apoi reduceți focul și lăsați să fiarbă încet (simmer) timp de 20 de minute.",
      
      "Consistența. Lintea se va dezintegra și va îngroșa sosul natural. Dacă curry-ul devine prea gros, mai adăugați puțină apă. Trebuie să aibă consistența unei tocanite bogate, nu uscată.\n\nAsezonați cu sare și piper abia acum.",
      
      "Verdețurile. În ultimele 2 minute, adăugați spanacul proaspăt (baby spinach) și amestecați până se ofilește. Acest pas adaugă culoare și nutrienți.\n\nStropiți cu zeamă de lămâie proaspătă pentru a echilibra dulceața cocosului.",
      
      "Servirea. Se servește fierbinte, presărat cu coriandru proaspăt, alături de orez Basmati fiert simplu sau pâine Naan/lipie pentru a șterge tot sosul delicios."
    ],
    nutrition: { calories: 350, protein: 15, carbs: 40, fat: 15, fiber: 12 }
  },

  "Moussaka vegetariană": {
    title: "Moussaka Vegetariană cu Linte și Ciuperci",
    servings: 6,
    prepTime: "40 min",
    cookTime: "50 min",
    ingredients: [
      { name: "Vinete", amount: "3 mari" },
      { name: "Cartofi", amount: "3 mari" },
      { name: "Linte verde (fiartă)", amount: "300 g" },
      { name: "Ciuperci", amount: "300 g" },
      { name: "Sos de roșii", amount: "500 ml" },
      { name: "Ceapă & Usturoi", amount: "tocat" },
      { name: "Lapte, Unt, Făină", amount: "pt Bechamel" },
      { name: "Scorțișoară", amount: "1 linguriță" },
      { name: "Oregano", amount: "1 lingură" }
    ],
    steps: [
      "Pregătirea straturilor de bază. Tăiați vinetele și cartofii în felii de 1 cm grosime. Ungeți-le cu ulei, sărați-le și coaceți-le în tavă la cuptor la 200°C timp de 20-25 de minute, întorcându-le o dată.\n\nTrebuie să fie aurii și gătite. Această metodă este mai ușoară și mai puțin uleioasă decât prăjirea tradițională.",
      
      "Ragù-ul vegetarian. Tocați ciupercile mărunt (pentru a imita textura cărnii). Căliți ceapa și usturoiul, apoi adăugați ciupercile și gătiți până scade apa lor.\n\nAdăugați lintea fiartă și scursă. Turnați sosul de roșii și vinul roșu (opțional).",
      
      "Aromatizarea. Condimentați sosul cu sare, piper, oregano și, esențial, scorțișoară și nucșoară. Aceste condimente dau gustul specific grecesc.\n\nLăsați să fiarbă la foc mic până sosul este foarte gros și scăzut.",
      
      "Bechamel-ul. Topiți untul, adăugați făina și gătiți 1 minut. Turnați laptele treptat, amestecând cu telul până se îngroașă. Luați de pe foc și adăugați un ou bătut (temperat) și parmezan ras.\n\nSosul alb trebuie să fie fin și bogat.",
      
      "Asamblarea. Într-un vas termorezistent, așezați un strat de cartofi, apoi un strat de vinete. Turnați tot sosul de linte și ciuperci și nivelați.\n\nMai puneți un strat de vinete dacă au rămas.",
      
      "Coacerea. Turnați Bechamel-ul deasupra și presărați cașcaval ras. Coaceți la 180°C timp de 40-50 de minute până se rumenește frumos.\n\nLăsați să se răcească 30 de minute înainte de a tăia, pentru ca straturile să se fixeze."
    ],
    nutrition: { calories: 400, protein: 18, carbs: 45, fat: 18, fiber: 10 }
  },

  "Risotto cu ciuperci": {
    title: "Risotto Cremor cu Ciuperci de Pădure",
    servings: 4,
    prepTime: "15 min",
    cookTime: "25 min",
    ingredients: [
      { name: "Orez Arborio/Carnaroli", amount: "320 g" },
      { name: "Ciuperci (mix/hribi)", amount: "400 g" },
      { name: "Supă de legume", amount: "1.5 L" },
      { name: "Ceapă șalotă", amount: "2 buc" },
      { name: "Vin alb sec", amount: "100 ml" },
      { name: "Unt", amount: "80 g" },
      { name: "Parmesan ras", amount: "80 g" },
      { name: "Pătrunjel/Cimbru", amount: "proaspăt" }
    ],
    steps: [
      "Pregătirea ciupercilor. Dacă folosiți ciuperci uscate (hribi), hidratați-le în apă caldă, apoi strecurați apa și folosiți-o la supă. Tăiați ciupercile proaspete felii.\n\nÎntr-o tigaie separată, sotați ciupercile în puțin unt la foc iute până se rumenesc bine. Scoateți-le și păstrați-le deoparte (pentru a nu le fierbe în orez de la început).",
      
      "Soffritto. În cratița de risotto, căliți șalota tocată fin în puțin unt până devine translucidă. Adăugați orezul nespălat și prăjiți-l (tostatura) 2 minute până devine sticlos pe margini.\n\nStingeți cu vinul alb și lăsați să se evapore complet.",
      
      "Gătirea lentă. Începeți să adăugați supa fierbinte, polonic cu polonic, amestecând frecvent. Așteptați ca lichidul să fie absorbit înainte de a adăuga următorul polonic.\n\nAmestecarea eliberează amidonul și creează textura cremoasă.",
      
      "Reintroducerea ciupercilor. La jumătatea timpului (după cca 10 minute), adăugați ciupercile sotate în orez (păstrați câteva pentru decor). Continuați să gătiți până orezul e 'al dente'.",
      
      "Mantecare (Legarea). Opriți focul. Risotto trebuie să fie fluid ('all'onda'). Adăugați restul de unt rece tăiat cubulețe și parmezanul ras.\n\nAmestecați energic pentru a emulsiona grăsimile cu amidonul. Acoperiți și lăsați 2 minute de odihnă.",
      
      "Servirea. Serviți în farfurii întinse. Presărați ciupercile păstrate, cimbru proaspăt și piper negru. Textura trebuie să fie cremoasă, nu uscată ca un pilaf."
    ],
    nutrition: { calories: 450, protein: 12, carbs: 60, fat: 20, micronutrients: ["Vitamin D"] }
  },

  "Pad Thai vegetarian": {
    title: "Pad Thai Vegetarian (Cu Tofu și Legume)",
    servings: 2,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Tăiței de orez (lați)", amount: "200 g" },
      { name: "Tofu ferm", amount: "200 g" },
      { name: "Muguri de fasole", amount: "100 g" },
      { name: "Ouă (opțional)", amount: "2 buc" },
      { name: "Arahide zdrobite", amount: "3 linguri" },
      { name: "Ceapă verde", amount: "3 fire" },
      { name: "Sos soia/Tamarind", amount: "mix" },
      { name: "Lime", amount: "1 buc" }
    ],
    steps: [
      "Pregătirea tăițeilor. Înmuiați tăițeii în apă rece timp de 40 de minute până sunt flexibili. Nu îi fierbeți! Scurgeți-i bine.\n\nPregătiți sosul vegetarian: amestecați pasta de tamarind, zahăr de palmier (sau brun), sos de soia (în loc de sos de pește) și puțină sare. Gustul trebuie să fie acru-dulce-sărat.",
      
      "Prăjirea Tofu-ului. Tăiați tofu în cuburi sau bastonașe. Încingeți ulei în wok și prăjiți tofu-ul până devine auriu și crocant pe toate părțile.\n\nÎmpingeți tofu-ul într-o parte a wok-ului.",
      
      "Gătirea tăițeilor. Adăugați tăițeii scurși în centrul wok-ului și puțină apă. Gătiți până se înmoaie. Turnați sosul peste tăiței și amestecați; ei vor absorbi sosul și se vor colora.\n\n",
      
      "Oul (Opțional). Faceți loc în wok și spargeți ouăle. Lăsați să se coaguleze puțin, apoi amestecați-le (scramble) și incorporați-le în tăiței. Pentru varianta vegană, săriți acest pas.",
      
      "Legumele crocante. Opriți focul. Adăugați mugurii de fasole și ceapa verde tăiată bucăți. Amestecați rapid; căldura reziduală le va găti suficient, păstrându-le crocante.",
      
      "Servirea. Puneți în farfurii. Presărați arahide zdrobite și fulgi de chili. Stoarceți multă zeamă de lime înainte de a mânca pentru a 'trezi' aromele."
    ],
    nutrition: { calories: 450, protein: 15, carbs: 65, fat: 15, sodium: 800 }
  },

  "Chili sin carne": {
    title: "Chili sin Carne (Tocană Vegană Picantă)",
    servings: 4,
    prepTime: "15 min",
    cookTime: "45 min",
    ingredients: [
      { name: "Fasole roșie (Kidney)", amount: "2 conserve" },
      { name: "Porumb dulce", amount: "1 conservă" },
      { name: "Ardei gras", amount: "2 buc" },
      { name: "Ceapă", amount: "2 buc" },
      { name: "Roșii cuburi", amount: "800 g" },
      { name: "Granule soia/Linte", amount: "100 g" },
      { name: "Chili, Chimen, Boia", amount: "mix" },
      { name: "Ciocolată neagră", amount: "2 pătrățele" }
    ],
    steps: [
      "Pregătirea bazei proteice. Dacă folosiți granule de soia, hidratați-le în apă fierbinte cu condimente 10 minute, apoi scurgeți-le. Dacă folosiți linte, o puteți pune direct la fiert în sos.\n\nCăliți ceapa și ardeiul gras tocate cubulețe în ulei până se înmoaie.",
      
      "Condimentarea intensă. Adăugați usturoiul pisat, pudra de chili, chimenul măcinat (esențial!), boiaua afumată și oregano. Prăjiți condimentele 1 minut pentru a le activa aromele.",
      
      "Fierberea. Adăugați granulele de soia (sau lintea) și roșiile cuburi. Dacă e nevoie, adăugați puțină supă de legume. Lăsați să fiarbă la foc mic 30 de minute până se îngroașă sosul.",
      
      "Leguminoasele. Adăugați fasolea roșie și porumbul (scurse și clătite). Mai fierbeți 10-15 minute pentru ca boabele să se încălzească și să absoarbă aromele.",
      
      "Secretul gustului. Opriți focul și adăugați ciocolata neagră. Amestecați până se topește. Ciocolata dă o culoare intensă și o notă de pământ care imită bogăția cărnii.",
      
      "Servirea. Se servește fierbinte cu orez fiert, nachos sau în lipie. Garnisiți cu coriandru proaspăt, avocado cuburi și, dacă nu sunteți vegani, o lingură de smântână."
    ],
    nutrition: { calories: 350, protein: 18, carbs: 50, fat: 8, fiber: 15 }
  },

  "Tofu stir-fry": {
    title: "Tofu Stir-Fry cu Legume Crocante",
    servings: 2,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Tofu ferm", amount: "300 g" },
      { name: "Broccoli", amount: "1 buc" },
      { name: "Ardei gras", amount: "1 buc" },
      { name: "Morcov", amount: "1 buc" },
      { name: "Sos de soia", amount: "3 linguri" },
      { name: "Amidon de porumb", amount: "2 linguri" },
      { name: "Ghimbir & Usturoi", amount: "tocat" },
      { name: "Ulei de susan", amount: "1 linguriță" }
    ],
    steps: [
      "Presarea Tofu-ului. Scoateți tofu-ul din pachet și înveliți-l în prosoape de hârtie. Puneți o greutate (o farfurie) deasupra pentru 15 minute să iasă apa. Acest pas este esențial pentru ca tofu să devină crocant și să absoarbă sosul.\n\nTăiați tofu-ul în cuburi de 2 cm.",
      
      "Crusta crocantă. Tăvăliți cuburile de tofu prin amidon de porumb amestecat cu puțină sare și piper. Scuturați excesul.\n\nÎncingeți ulei într-o tigaie și prăjiți tofu-ul pe toate părțile până devine auriu și crocant. Scoateți-l pe hârtie absorbantă.",
      
      "Legumele. În aceeași tigaie, mai adăugați puțin ulei. Căliți ghimbirul și usturoiul 30 de secunde. Adăugați broccoli (buchețele mici), morcovul felii și ardeiul.\n\nPrăjiți la foc iute (stir-fry) 3-4 minute. Legumele trebuie să rămână crocante și viu colorate.",
      
      "Sosul. Într-un bol mic, amestecați sosul de soia, puțină apă, zahăr brun, ulei de susan și o linguriță de amidon.\n\nTurnați sosul peste legume în tigaie. Se va îngroșa rapid.",
      
      "Combinarea. Adăugați tofu-ul crocant înapoi în tigaie. Amestecați rapid ('toss') pentru a acoperi totul cu sosul lucios.\n\nNu gătiți prea mult acum, ca tofu să nu se înmoaie.",
      
      "Servirea. Presărați semințe de susan și ceapă verde. Serviți imediat peste orez fiert sau tăiței."
    ],
    nutrition: { calories: 300, protein: 18, carbs: 20, fat: 15, sodium: 800 }
  },

  "Buddha Bowl": {
    title: "Buddha Bowl cu Quinoa și Cartof Dulce",
    servings: 2,
    prepTime: "15 min",
    cookTime: "25 min",
    ingredients: [
      { name: "Quinoa fiartă", amount: "1 cană" },
      { name: "Cartof dulce", amount: "1 mare" },
      { name: "Năut (conservă)", amount: "200 g" },
      { name: "Avocado", amount: "1 buc" },
      { name: "Spanac/Kale", amount: "2 mâini" },
      { name: "Varză roșie", amount: "100 g" },
      { name: "Tahini", amount: "2 linguri" },
      { name: "Lămâie", amount: "zeamă" }
    ],
    steps: [
      "Coacerea legumelor. Tăiați cartoful dulce cuburi. Scurgeți năutul și uscați-l bine cu un șervet (ca să fie crocant). Puneți-le pe o tavă de copt, stropiți cu ulei, boia, chimion și sare. Coaceți la 200°C timp de 25 de minute.",
      "Pregătirea Quinoei. Clătiți quinoa foarte bine. Fierbeți-o în apă cu sare (proporție 1:2) timp de 15 minute până absoarbe apa și devine pufoasă. Lăsați-o să se răcească ușor.",
      "Pregătirea verdețurilor. Spălați spanacul sau kale-ul. Dacă folosiți kale, masați frunzele cu puțin ulei de măsline și sare timp de 1 minut pentru a le înmuia textura dură. Tăiați varza roșie fideluță fină.",
      "Sosul de Tahini. Într-un borcan, amestecați pasta de tahini cu zeamă de lămâie, puțin usturoi pisat, sirop de arțar și apă călduță. Agitați energic până devine un dressing cremos și curgător.",
      "Asamblarea artistică. Într-un bol larg, aranjați ingredientele în grupuri separate (nu amestecate), ca pe un ceas: quinoa, cartoful dulce, năutul crocant, spanacul și varza roșie.",
      "Finisarea și servirea. În centru puneți jumătate de avocado feliat evantai. Presărați semințe (cânepă, susan, floarea soarelui) pentru textură. Turnați dressing-ul generos înainte de a mânca."
    ],
    nutrition: { calories: 450, protein: 15, carbs: 60, fat: 18, fiber: 15 }
  },

  "Spanakopita": {
    title: "Spanakopita (Plăcintă Grecească cu Spanac)",
    servings: 6,
    prepTime: "30 min",
    cookTime: "45 min",
    ingredients: [
      { name: "Spanac proaspăt", amount: "500 g" },
      { name: "Brânză Feta", amount: "300 g" },
      { name: "Foi de plăcintă (Phyllo)", amount: "1 pachet" },
      { name: "Ceapă verde", amount: "1 legătură" },
      { name: "Mărar & Pătrunjel", amount: "câte 1/2 legătură" },
      { name: "Ouă", amount: "3 buc" },
      { name: "Ulei de măsline/Unt", amount: "150 ml" }
    ],
    steps: [
      "Pregătirea spanacului. Spălați spanacul și tocați-l grosier. Puneți-l într-un tigaie mare cu puțină apă și gătiți-l 2-3 minute până se înmoaie (se ofilește).\n\nScoateți spanacul într-o sită și lăsați-l să se răcească. Pasul critic: stoarceți spanacul în pumni cu toată forța pentru a elimina aproape tot lichidul. Dacă spanacul e apos, foile de plăcintă se vor înmuia.",
      
      "Umplutura. Într-un bol mare, amestecați spanacul stors cu ceapa verde tocată mărunt, mărarul și pătrunjelul. Sfărâmați brânza Feta deasupra.\n\nBateți ouăle separat și adăugați-le în compoziție. Asezonați cu piper negru și puțină nucșoară. De obicei nu e nevoie de sare, deoarece Feta este foarte sărată.",
      
      "Pregătirea foilor. Dezghețați foile de plăcintă. Topiți untul și amestecați-l cu uleiul de măsline. Ungeți o tavă dreptunghiulară cu grăsime.\n\nAșezați pe fundul tăvii jumătate din pachetul de foi, ungând fiecare foaie individual cu pensula cu amestecul de ulei și unt. Această stratificare creează textura crocantă.",
      
      "Adăugarea umpluturii. Întindeți compoziția de spanac și brânză într-un strat uniform peste foile de la bază. Nivelați cu o spatulă.",
      
      "Acoperirea. Așezați restul foilor deasupra umpluturii, ungând din nou fiecare foaie cu grăsime. Ultima foaie trebuie unsă generos pentru a se rumeni frumos.\n\nFolosind un cuțit foarte ascuțit, crestați plăcinta crudă în pătrate sau triunghiuri, tăind doar straturile de sus (nu până la fund). Acest lucru previne sfărâmarea foilor coapte la tăiere.",
      
      "Coacerea. Stropiți plăcinta cu puțină apă rece înainte de a o băga în cuptor (truc pentru extra crocanță). Coaceți la 180°C timp de 45-50 de minute, până când este aurie-arămie și se desprinde de pe margini.\n\nLăsați să se răcească 15 minute înainte de servire. Se poate mânca caldă sau la temperatura camerei."
    ],
    nutrition: { calories: 350, protein: 12, carbs: 30, fat: 20, micronutrients: ["Calcium 15%"] }
  },

  "Pasta Primavera": {
    title: "Pasta Primavera (Cu Legume de Primăvară)",
    servings: 4,
    prepTime: "15 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Paste (Penne/Fusilli)", amount: "400 g" },
      { name: "Sparanghel", amount: "1 legătură" },
      { name: "Mazăre", amount: "100 g" },
      { name: "Dovlecel", amount: "1 mic" },
      { name: "Roșii cherry", amount: "150 g" },
      { name: "Smântână lichidă (opțional)", amount: "100 ml" },
      { name: "Parmesan", amount: "50 g" },
      { name: "Lămâie & Busuioc", amount: "aromă" }
    ],
    steps: [
      "Pregătirea legumelor: Tăiați sparanghelul în bucăți de 3 cm (fără partea lemnoasă). Tăiați dovlecelul în jumătăți de rondele. Tăiați roșiile cherry în jumătate.",
      "Blanșarea: Blanșați mazărea și sparanghelul în apă clocotită 2 minute, apoi puneți-le în apă cu gheață pentru a rămâne verzi și crocante.",
      "Fierberea pastelor: Fierbeți pastele în apă sărată 'al dente'. Păstrați o cană de apă de la fiert înainte de a scurge.",
      "Baza sosului: Într-o tigaie mare, căliți dovlecelul și ceapa (sau usturoiul) în ulei de măsline. Adăugați roșiile cherry și lăsați-le să se înmoaie puțin.",
      "Formarea sosului cremos: Turnați smântâna lichidă (sau doar apă de la paste și unt pentru o variantă mai ușoară). Lăsați să fiarbă un minut până se leagă ușor.",
      "Combinarea finală: Adăugați pastele scurse și legumele blanșate (mazăre, sparanghel) în tigaie. Amestecați bine. Adăugați parmezanul ras și puțină apă de la paste dacă sosul e prea gros.",
      "Aromatizarea: Opriți focul. Adăugați zeama de la o jumătate de lămâie și coajă rasă pentru prospețime. Amestecați frunze de busuioc proaspăt sau pătrunjel. Serviți imediat."
    ],
    nutrition: { calories: 450, protein: 15, carbs: 65, fat: 12, fiber: 8 }
  },

  "Ratatouille": {
    title: "Ratatouille (Tocană de Legume Provensală)",
    servings: 4,
    prepTime: "20 min",
    cookTime: "40 min",
    ingredients: [
      { name: "Vinete", amount: "1 mare" },
      { name: "Dovlecei", amount: "2 buc" },
      { name: "Ardei gras roșu/galben", amount: "2 buc" },
      { name: "Roșii", amount: "4 buc" },
      { name: "Ceapă", amount: "1 mare" },
      { name: "Usturoi", amount: "3 căței" },
      { name: "Ierburi de Provence", amount: "1 lingură" },
      { name: "Ulei de măsline", amount: "50 ml" }
    ],
    steps: [
      "Tăierea (Mise en place). Pentru un Ratatouille rustic, tăiați toate legumele (vinete, dovlecei, ardei, roșii, ceapă) în cuburi medii, egale.\n\nSărați vinetele și lăsați-le 10 minute să lase apa amară, apoi ștergeți-le.",
      
      "Gătirea separată (Secretul gustului). Pentru ca fiecare legumă să își păstreze gustul și textura, sotați-le pe rând. Prăjiți vinetele în ulei până se rumenesc, scoateți-le. Prăjiți dovleceii, scoateți-i.\n\nDacă le puneți pe toate odată, se vor fierbe în loc să se prăjească.",
      
      "Baza de sos. În aceeași cratiță, căliți ceapa și ardeii până se înmoaie. Adăugați usturoiul și ierburile de Provence (cimbru, rozmarin).\n\nAdăugați roșiile tocate și lăsați să fiarbă până se formează un sos.",
      
      "Fierberea împreună. Puneți vinetele și dovleceii înapoi în oală peste sosul de roșii și ardei. Amestecați delicat.\n\nAcoperiți și lăsați să fiarbă la foc mic (mijoté) timp de 10-15 minute, doar cât să se întrepătrundă aromele, fără ca legumele să devină terci.",
      
      "Odihna. Ratatouille este mai bun a doua zi. Lăsați-l să se răcească puțin înainte de servire. Aromele se dezvoltă în timp.",
      
      "Servirea. Se poate servi cald ca garnitură sau fel principal cu orez/pâine, sau rece pe bruschete. Este esența verii într-o farfurie."
    ],
    nutrition: { calories: 200, protein: 4, carbs: 15, fat: 14, fiber: 8 }
  },

  "Noodles cu legume": {
    title: "Veggie Stir-Fry Noodles (Tăiței Prăjiți)",
    servings: 2,
    prepTime: "15 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Tăiței (ou/orez)", amount: "200 g" },
      { name: "Varză", amount: "100 g" },
      { name: "Morcov", amount: "1 buc" },
      { name: "Ardei gras", amount: "1 buc" },
      { name: "Ciuperci", amount: "100 g" },
      { name: "Ceapă verde", amount: "2 fire" },
      { name: "Sos de soia", amount: "3 linguri" },
      { name: "Ulei de susan", amount: "1 linguriță" }
    ],
    steps: [
      "Pregătirea tăițeilor. Fierbeți tăițeii conform instrucțiunilor de pe pachet, dar scurgeți-i cu un minut mai devreme (al dente). Clătiți-i imediat cu apă rece pentru a opri gătirea și a nu se lipi. Stropiți cu puțin ulei.",
      "Mise en place (Tăierea). Tăiați toate legumele (varza, morcovul, ardeiul) în fâșii subțiri (julienne) și egale. Tăiați ciupercile felii. Tocați ceapa verde și usturoiul.",
      "Sosul Stir-fry. Într-un bol mic, amestecați sosul de soia, puțin zahăr (sau miere), oțet de orez, ulei de susan și, opțional, sos sriracha/chili. Adăugați puțin ghimbir ras.",
      "Sotarea legumelor. Încălziți ulei într-un wok sau tigaie mare la foc maxim. Adăugați ciupercile și prăjiți-le până se rumenesc. Adăugați morcovul și ardeiul și gătiți rapid, amestecând continuu (1-2 minute). Legumele trebuie să rămână crocante.",
      "Adăugarea tăițeilor. Adăugați varza (se gătește repede) și tăițeii scurși în wok. Turnați sosul pe marginile wok-ului (pentru a se carameliza ușor înainte de a atinge ingredientele).",
      "Finalizarea. Amestecați totul viguros ('toss') timp de 2 minute până când tăițeii sunt fierbinți și uniform colorați. Opriți focul. Adăugați ceapa verde și semințe de susan. Serviți imediat cu bețișoare."
    ],
    nutrition: { calories: 400, protein: 10, carbs: 65, fat: 10, sodium: 900 }
  }
};
