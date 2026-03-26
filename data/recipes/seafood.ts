
import { Recipe } from '../../types';

export const SEAFOOD_RECIPES: Record<string, Recipe> = {
  "Somon la grătar": {
    title: "Somon la Grătar cu Sparanghel și Lămâie",
    servings: 2,
    servingSize: "1 file (200g)",
    pricePerServing: 35,
    prepTime: "10 min",
    cookTime: "15 min",
    ingredients: [
      { name: "File de somon", amount: "2 buc (200g fiecare)" },
      { name: "Sparanghel", amount: "1 legătură" },
      { name: "Lămâie", amount: "1 buc" },
      { name: "Unt", amount: "50 g" },
      { name: "Usturoi", amount: "3 căței" },
      { name: "Ulei de măsline", amount: "2 linguri" },
      { name: "Mărar proaspăt", amount: "1 legătură" },
      { name: "Sare de mare, Piper", amount: "după gust" }
    ],
    steps: [
      "Pregătirea peștelui. Scoateți somonul din frigider cu 15 minute înainte pentru a ajunge la temperatura camerei. Uscați-l foarte bine cu șervete de hârtie; umiditatea împiedică rumenirea. Asezonați generos cu sare și piper pe ambele părți.",
      "Pregătirea sparanghelului. Rupeți capetele lemnoase ale sparanghelului (unde se rupe natural). Spălați-l și uscați-l. Puteți să-l stropiți cu puțin ulei separat.",
      "Încingerea tigăii. Folosiți o tigaie antiaderentă sau de fontă. Puneți-o pe foc mediu-iute și adăugați uleiul de măsline. Așteptați să se încingă bine (uleiul trebuie să sclipească).",
      "Gătirea pe piele. Așezați somonul cu pielea în jos. Apăsați ușor fiecare file cu o spatulă timp de 10 secunde pentru a nu se curba. Lăsați-l nemișcat 4-5 minute, până când pielea este foarte crocantă și carnea s-a albit pe lateral până la jumătate.",
      "Întoarcerea. Întoarceți somonul cu grijă. Reduceți focul la mediu. Adăugați sparanghelul în tigaie în jurul peștelui.",
      "Aromarea (Basting). Adăugați untul și usturoiul zdrobit în tigaie. Când untul spumează, înclinați tigaia și, folosind o lingură, stropiți continuu somonul cu untul fierbinte aromat. Aceasta gătește peștele delicat.",
      "Finalizarea. Gătiți încă 2-3 minute până când somonul este făcut dar încă roz-pal în centru. Stropiți cu zeamă de lămâie proaspătă și presărați mărar tocat. Se servește imediat."
    ],
    nutrition: { calories: 450, protein: 35, carbs: 5, fat: 32, micronutrients: ["Omega-3", "Vitamin D"] }
  },

  "Sushi": {
    title: "Sushi Mix (Maki & Nigiri)",
    servings: 4,
    servingSize: "6-8 bucăți (200g)",
    pricePerServing: 30,
    prepTime: "1 oră",
    cookTime: "30 min",
    ingredients: [
      { name: "Orez de sushi (bob scurt)", amount: "300 g" },
      { name: "Oțet de orez", amount: "50 ml" },
      { name: "Zahăr", amount: "1 lingură" },
      { name: "Alge Nori", amount: "5 foi" },
      { name: "Somon crud (Sushi grade)", amount: "200 g" },
      { name: "Avocado", amount: "1 buc" },
      { name: "Castravete", amount: "1 buc" },
      { name: "Wasabi & Ghimbir murat", amount: "pentru servire" },
      { name: "Sos de soia", amount: "pentru servire" }
    ],
    steps: [
      "Orezul perfect (Shari). Spălați orezul în 5-6 ape până când apa rămâne limpede (eliminarea amidonului). Fierbeți orezul (proporție 1:1.1 orez:apă). După ce a fiert, lăsați-l 10 minute acoperit.",
      "Asezonarea orezului. Încălziți oțetul de orez cu zahărul și sarea până se dizolvă. Transferați orezul fiert într-un bol larg (de lemn, preferabil). Turnați amestecul de oțet peste orez și amestecați delicat cu o spatulă prin mișcări de tăiere (nu zdrobiți boabele), în timp ce îl vânturați pentru a-l răci și a-i da luciu.",
      "Pregătirea umpluturii. Tăiați somonul, avocado-ul și castravetele în fâșii lungi și subțiri. Păstrați câteva felii rectangulare de somon pentru Nigiri.",
      "Rularea Maki. Așezați o foaie de Nori pe covorașul de bambus (partea lucioasă în jos). Întindeți un strat subțire de orez pe 3/4 din foaie. Puneți fâșiile de pește și legume la bază. Rulați strâns folosind covorașul. Sigilați capătul cu puțină apă.",
      "Nigiri. Umeziți mâinile cu apă. Luați o mică cantitate de orez și modelați-o într-un oval alungit. Așezați o felie de somon deasupra și presați ușor.",
      "Tăierea. Folosiți un cuțit foarte ascuțit și umezit. Tăiați rulourile maki în 6-8 bucăți. Serviți cu sos de soia, wasabi și ghimbir."
    ],
    nutrition: { calories: 350, protein: 15, carbs: 60, fat: 5, micronutrients: ["Iodine", "B12"] }
  },

  "Ceviche": {
    title: "Ceviche de Pește Alb (Stil Peruvian)",
    servings: 2,
    servingSize: "1 bol (200g)",
    pricePerServing: 35,
    prepTime: "20 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Pește alb proaspăt (Lup de mare/Doradă)", amount: "400 g" },
      { name: "Lime", amount: "6-8 buc (mult suc)" },
      { name: "Ceapă roșie", amount: "1 mică" },
      { name: "Ardei iute (Chili/Aji)", amount: "1 buc" },
      { name: "Coriandru proaspăt", amount: "1 legătură" },
      { name: "Sare", amount: "1 linguriță" },
      { name: "Cartof dulce fiert", amount: "1 buc" },
      { name: "Porumb prăjit/fiert", amount: "50 g" }
    ],
    steps: [
      "Tăierea peștelui. Folosiți doar pește extrem de proaspăt. Tăiați fileul în cuburi uniforme de 1.5 - 2 cm. Înlăturați orice pieliță sau os. Păstrați peștele rece pe gheață în timp ce lucrați.",
      "Sărarea și ceapa. Puneți cuburile de pește într-un bol rece. Adăugați sarea și amestecați. Tăiați ceapa roșie solzișori foarte fini și țineți-o în apă cu gheață 5 minute (să fie crocantă și mai puțin iute), apoi scurgeți-o.",
      "Leche de Tigre. Stoarceți lămâile (nu stoarceți până la capăt pentru a evita amărăciunea cojii). Turnați sucul peste pește. Adăugați ardeiul iute tocat fin și câteva fire de coriandru.",
      "Marinare scurtă. Amestecați și lăsați să stea doar 2-3 minute (sau maxim 5-10 minute, în funcție de gust). Acidul va 'găti' exteriorul peștelui, făcându-l alb, dar interiorul trebuie să rămână crud și suculent. Dacă îl lăsați prea mult, devine tare.",
      "Asamblarea. Adăugați ceapa roșie scursă și restul de coriandru tocat. Amestecați.",
      "Servirea. Se servește imediat pe o farfurie rece, alături de felii de cartof dulce fiert (pentru a echilibra aciditatea) și boabe de porumb. Zeama rămasă (Leche de Tigre) este considerată un tonic delicios."
    ],
    nutrition: { calories: 250, protein: 35, carbs: 15, fat: 5, micronutrients: ["Vitamin C"] }
  },

  "Paella de fructe de mare": {
    title: "Paella de Fructe de Mare (Paella de Marisco)",
    servings: 4,
    servingSize: "1 porție (350g)",
    pricePerServing: 40,
    prepTime: "30 min",
    cookTime: "40 min",
    ingredients: [
      { name: "Orez Bomba/Arborio", amount: "400 g" },
      { name: "Supă de pește/creveți", amount: "1.2 L" },
      { name: "Creveți (întregi)", amount: "8 buc" },
      { name: "Midii", amount: "300 g" },
      { name: "Calamar (inele)", amount: "200 g" },
      { name: "Roșii", amount: "2 buc (rase)" },
      { name: "Ardei gras roșu", amount: "1 buc" },
      { name: "Șofran", amount: "un praf generos" },
      { name: "Usturoi", amount: "3 căței" },
      { name: "Ulei de măsline", amount: "80 ml" }
    ],
    steps: [
      "Infuzia. Încălziți supa de pește și adăugați șofranul în ea pentru a se infuza.",
      "Prăjirea fructelor de mare. În tigaia de paella, încingeți uleiul. Prăjiți creveții întregi (cu cap) 2 minute pentru a aromatiza uleiul. Scoateți-i. Prăjiți inelele de calamar 2 minute, apoi împingeți-le spre margini.",
      "Sofrito. În centrul tigăii, căliți ardeiul tocat și usturoiul. Adăugați roșiile rase și boiaua dulce. Gătiți până scade lichidul și se formează o pastă închisă la culoare.",
      "Orezul. Adăugați orezul și amestecați-l bine cu sosul din tigaie (perlați orezul). Turnați supa fierbinte. Din acest moment, NU mai amestecați!",
      "Fierberea. Fierbeți la foc iute 10 minute. Așezați midiile (curățate) și creveții prăjiți deasupra orezului, în mod decorativ. Reduceți focul și mai gătiți 10-15 minute până când orezul a absorbit lichidul și midiile s-au deschis.",
      "Socarrat și Odihnă. Măriți focul la maxim pentru 1 minut la final pentru a forma crusta caramelizată pe fund. Opriți focul, acoperiți cu un prosop și lăsați 5 minute să se odihnească. Serviți cu lămâie."
    ],
    nutrition: { calories: 550, protein: 30, carbs: 70, fat: 15, sodium: 900 }
  },

  "Creveți tempura": {
    title: "Creveți Tempura (Stil Japonez)",
    servings: 4,
    servingSize: "3-4 bucăți (150g)",
    pricePerServing: 25,
    prepTime: "20 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Creveți mari (Tiger)", amount: "12 buc" },
      { name: "Făină pentru Tempura", amount: "150 g" },
      { name: "Apă minerală (foarte rece)", amount: "200 ml" },
      { name: "Ou (gălbenuș)", amount: "1 buc" },
      { name: "Gheață", amount: "2-3 cuburi" },
      { name: "Ulei", amount: "pentru prăjit" },
      { name: "Sos de soia & Ghimbir", amount: "dip" }
    ],
    steps: [
      "Pregătirea creveților. Decorticați creveții, păstrând codița. Scoateți vena neagră de pe spate. Faceți 3-4 incizii mici pe 'burta' crevetelui (partea interioară curbată) și presați-l ușor pe blat pentru a-l îndrepta. Astfel, creveții vor rămâne drepți la prăjit, nu se vor strânge.",
      "Aluatul Tempura (Secretul). Aluatul trebuie făcut chiar înainte de prăjire. Într-un bol, bateți gălbenușul. Adăugați apa minerală gazoasă FOARTE RECE (din frigider). Adăugați făina de tempura (sau făină albă cu amidon).",
      "Amestecarea sumară. Amestecați cu bețișoarele foarte puțin, doar cât să se combine grosier. Este OK și chiar indicat să rămână cocoloașe de făină. Dacă amestecați prea mult, se dezvoltă glutenul și aluatul nu va fi crocant. Puteți pune 2 cuburi de gheață în aluat pentru a-l menține rece.",
      "Prăjirea. Încingeți uleiul la 170°C. Țineți crevetele de coadă, dați-l prin puțină făină uscată, apoi scufundați-l în aluatul rece. Puneți-l imediat în uleiul încins.",
      "Picurarea (Hana). Pentru aspectul 'înflorit', puteți picura puțin aluat suplimentar cu degetele peste crevetele care se prăjește. Prăjiți 2-3 minute până devine auriu foarte deschis și crocant.",
      "Servirea. Scoateți pe grătar sau hârtie. Serviți imediat cu sos Tentsuyu (dashi, soia, mirin) și ridiche rasă."
    ],
    nutrition: { calories: 300, protein: 15, carbs: 20, fat: 18 }
  },

  "Crab cakes": {
    title: "Crab Cakes (Chiftele de Crab Americane)",
    servings: 4,
    servingSize: "2 bucăți (150g)",
    pricePerServing: 35,
    prepTime: "20 min (+30 min rece)",
    cookTime: "10 min",
    ingredients: [
      { name: "Carne de crab (conservă/proaspăt)", amount: "400 g" },
      { name: "Maioneză", amount: "3 linguri" },
      { name: "Ou", amount: "1 mare" },
      { name: "Muștar Dijon", amount: "1 lingură" },
      { name: "Sos Worcestershire", amount: "1 linguriță" },
      { name: "Pesmet Panko", amount: "100 g" },
      { name: "Pătrunjel & Ceapă verde", amount: "tocat" },
      { name: "Unt & Ulei", amount: "pt prăjit" }
    ],
    steps: [
      "Scurgerea. Dacă folosiți crab la conservă, scurgeți-l extrem de bine și presați-l ușor pentru a elimina lichidul. Verificați de bucățele de carapace.",
      "Liantul. Într-un bol mare, bateți oul cu maioneza, muștarul, sosul Worcestershire, sarea, piperul și ierburile tocate. Acesta este sosul care va lega chiftelele.",
      "Combinarea. Adăugați carnea de crab și pesmetul Panko peste sos. Amestecați foarte delicat cu o spatulă pentru a păstra bucățile de crab cât mai întregi (lump meat). Nu transformați în pastă.",
      "Formarea. Modelați 4-6 chiftele groase. Dacă se desfac, mai adăugați puțin pesmet, dar ideal este să aibă cât mai puțin pesmet și cât mai mult crab. Așezați-le pe o tavă și dați-le la frigider 30 de minute. Acest pas este obligatoriu pentru ca chiftelele să nu se rupă la prăjit.",
      "Prăjirea. Încingeți o combinație de unt și ulei într-o tigaie. Prăjiți chiftelele la foc mediu timp de 4-5 minute pe fiecare parte, până devin brun-aurii și crocante.",
      "Servirea. Serviți fierbinte cu felii de lămâie și sos Remoulade sau Aioli."
    ],
    nutrition: { calories: 380, protein: 22, carbs: 12, fat: 25, sodium: 600 }
  },

  "Doradă la cuptor": {
    title: "Doradă Regală la Cuptor (Mediteraneeană)",
    servings: 2,
    servingSize: "1 pește (300g)",
    pricePerServing: 30,
    prepTime: "10 min",
    cookTime: "25 min",
    ingredients: [
      { name: "Doradă întreagă (eviscerată)", amount: "2 buc" },
      { name: "Lămâie", amount: "2 buc" },
      { name: "Rozmarin & Cimbru", amount: "crenguțe" },
      { name: "Usturoi", amount: "4 căței" },
      { name: "Ulei de măsline", amount: "50 ml" },
      { name: "Cartofi", amount: "4 medii" },
      { name: "Roșii cherry", amount: "10 buc" },
      { name: "Vin alb", amount: "50 ml" }
    ],
    steps: [
      "Pregătirea patului de cartofi. Preîncălziți cuptorul la 200°C. Tăiați cartofii în felii foarte subțiri (rondele). Așezați-i într-un strat uniform pe fundul tăvii de copt. Stropiți-i cu ulei de măsline, sare și puțină apă (50ml).",
      "Coacerea parțială. Introduceți tava cu cartofi în cuptor pentru 15 minute. Cartofii au nevoie de mai mult timp decât peștele, așa că trebuie să fie pe jumătate făcuți înainte de a adăuga dorada.",
      "Pregătirea peștelui. Între timp, spălați dorada și uscați-o bine cu șervete. Faceți 3 crestături oblice adânci pe fiecare parte a peștelui. Sărați bine peștele, masând sarea în crestături și în interiorul burții.",
      "Aromatizarea. Introduceți în burta peștelui felii de lămâie, căței de usturoi zdrobiți și crenguțe de rozmarin/cimbru. Ungeți peștele generos cu ulei de măsline pe exterior.",
      "Asamblarea. Scoateți tava cu cartofi din cuptor. Așezați peștii deasupra patului de cartofi. Împrăștiați roșiile cherry întregi și câțiva căței de usturoi printre pești.",
      "Deglasarea. Turnați vinul alb în tavă (peste cartofi, nu direct pe pește pentru a nu spăla uleiul).",
      "Coacerea finală. Coaceți încă 20-25 de minute la 200°C. Peștele este gata când carnea este albă opacă, se desprinde ușor de pe oase, iar ochii sunt albi. Serviți direct din tavă."
    ],
    nutrition: { calories: 400, protein: 35, carbs: 25, fat: 18, micronutrients: ["Vitamin B6", "Potassium"] }
  },

  "Calamari prăjiți": {
    title: "Calamari Pane Crocanți",
    servings: 4,
    servingSize: "1 porție (200g)",
    pricePerServing: 20,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Calamar (tuburi)", amount: "500 g" },
      { name: "Făină", amount: "150 g" },
      { name: "Amidon de porumb", amount: "50 g" },
      { name: "Sare, Piper", amount: "1 linguriță" },
      { name: "Boia dulce", amount: "1/2 linguriță" },
      { name: "Ulei", amount: "pentru prăjit" },
      { name: "Lămâie", amount: "pentru servire" }
    ],
    steps: [
      "Pregătirea. Spălați tuburile de calamar și uscați-le extrem de bine cu prosoape de hârtie. Tăiați-le în inele de 1 cm lățime. Dacă sunt umede, făina se va face pastă, nu crustă.",
      "Mixul uscat. Într-un bol, amestecați făina cu amidonul de porumb (amidonul asigură o textură extra-crocantă), sarea, piperul și boiaua.",
      "Împachetarea. Dați inelele de calamar prin mixul de făină, în tranșe mici. Scuturați-le bine de excesul de făină într-o sită. Trebuie să aibă doar un strat fin de praf.",
      "Prăjirea. Încingeți o baie de ulei la 180-190°C. Prăjiți calamarii timp de exact 2 minute, până devin aurii. Nu aglomerați tigaia. Dacă îi prăjiți prea mult, devin tari ca guma.",
      "Servirea. Scoateți-i pe hârtie absorbantă. Sărați imediat cât sunt fierbinți. Serviți-i instantaneu cu sferturi de lămâie și sos tartar sau marinara. Trebuie să fie crocanți, nu uleioși."
    ],
    nutrition: { calories: 350, protein: 25, carbs: 20, fat: 18, sodium: 400 }
  },

  "Moules-frites": {
    title: "Moules Marinières (Midii în Vin Alb)",
    servings: 2,
    servingSize: "1 kg midii",
    pricePerServing: 35,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Midii proaspete", amount: "1 kg" },
      { name: "Șalotă/Ceapă", amount: "2 buc" },
      { name: "Usturoi", amount: "2 căței" },
      { name: "Vin alb sec", amount: "150 ml" },
      { name: "Unt", amount: "30 g" },
      { name: "Pătrunjel", amount: "1 legătură" },
      { name: "Smântână lichidă (opțional)", amount: "50 ml" },
      { name: "Cartofi prăjiți", amount: "pentru servire" }
    ],
    steps: [
      "Curățarea. Spălați midiile sub jet de apă rece. Îndepărtați 'barba' (firele) trăgând de ele spre balama. Aruncați orice midie care este deschisă și nu se închide când o loviți ușor (e moartă).",
      "Baza aromatică. Într-un oală mare (cu capac), topiți untul. Căliți șalota tocată fin și usturoiul timp de 2 minute, fără să le rumeniți.",
      "Gătirea la abur. Turnați vinul alb în oală și măriți focul. Când vinul fierbe, adăugați toate midiile deodată. Puneți capacul imediat.",
      "Scuturarea. Lăsați să fiarbă la foc iute timp de 3-4 minute. Scuturați oala (cu capacul pus) de câteva ori pentru a amesteca midiile.",
      "Finalizarea. Ridicați capacul. Midiile ar trebui să fie toate deschise (aruncați-le pe cele care au rămas închise). Adăugați smântâna (pentru varianta 'a la crème') și pătrunjelul tocat. Amestecați 30 secunde.",
      "Servirea. Turnați midiile și sosul delicios în boluri adânci. Se servesc cu cartofi prăjiți crocanți, care se înmoaie tradițional în sosul de midii."
    ],
    nutrition: { calories: 400, protein: 25, carbs: 10, fat: 20, micronutrients: ["Zinc", "B12"] }
  },

  "Ton tataki": {
    title: "Ton Tataki cu Susan și Sos Ponzu",
    servings: 2,
    servingSize: "100g",
    pricePerServing: 40,
    prepTime: "10 min",
    cookTime: "2 min",
    ingredients: [
      { name: "File de ton roșu (bloc)", amount: "300 g" },
      { name: "Semințe de susan (alb & negru)", amount: "3 linguri" },
      { name: "Ulei de susan", amount: "1 lingură" },
      { name: "Sos de soia", amount: "2 linguri" },
      { name: "Zeamă de lime/Yuzu", amount: "2 linguri" },
      { name: "Ghimbir ras", amount: "1 linguriță" },
      { name: "Ceapă verde", amount: "decor" }
    ],
    steps: [
      "Pregătirea tonului. Folosiți o bucată de ton proaspăt (calitate sushi), formă dreptunghiulară (ca un lingou). Uscați tonul cu un șervet și ungeți-l ușor cu puțin sos de soia.",
      "Crusta de susan. Puneți semințele de susan (mix alb și negru) pe o farfurie întinsă. Tăvăliți blocul de ton prin susan, presând bine cu mâna, astfel încât să fie acoperit uniform pe toate părțile.",
      "Încingerea tigăii. Încingeți o tigaie antiaderentă la foc mare cu puțin ulei de susan și ulei vegetal. Tigaia trebuie să fumege ușor.",
      "Sigilarea (Searing). Puneți tonul în tigaie. Prăjiți fiecare latură timp de doar 10-15 secunde. Susanul trebuie să se prăjească și să devină auriu, iar marginea tonului să se albească doar 1-2 mm.",
      "Răcirea. Scoateți imediat tonul din tigaie. Mijlocul trebuie să rămână complet crud și rece. Lăsați-l să se odihnească 5 minute sau, ideal, puneți-l la frigider 10 minute pentru a fi mai ușor de tăiat.",
      "Tăierea. Folosind un cuțit foarte ascuțit, tăiați tonul în felii de 0.5 cm grosime. Tăiați dintr-o singură mișcare pentru a nu zdrobi carnea.",
      "Sosul și servirea. Amestecați sosul de soia, zeama de lime, uleiul de susan și ghimbirul (sos Ponzu). Aranjați feliile pe platou, turnați sosul deasupra și decorați cu ceapă verde."
    ],
    nutrition: { calories: 300, protein: 40, carbs: 5, fat: 12, micronutrients: ["Omega-3"] }
  },

  "Somon teriyaki": {
    title: "Somon Teriyaki cu Orez și Broccoli",
    servings: 2,
    servingSize: "1 file (150g)",
    pricePerServing: 28,
    prepTime: "10 min",
    cookTime: "15 min",
    ingredients: [
      { name: "File de somon", amount: "2 buc" },
      { name: "Sos de soia", amount: "3 linguri" },
      { name: "Mirin (sau vin alb dulce)", amount: "3 linguri" },
      { name: "Zahăr brun/Miere", amount: "1 lingură" },
      { name: "Ghimbir ras", amount: "1 linguriță" },
      { name: "Ulei", amount: "1 lingură" },
      { name: "Broccoli", amount: "1 buc" },
      { name: "Semințe de susan", amount: "decor" }
    ],
    steps: [
      "Sosul Teriyaki. Într-un bol mic, amestecați sosul de soia, mirinul, zahărul brun și ghimbirul ras. Amestecați până se dizolvă zahărul.",
      "Pregătirea garniturii. Desfaceți broccoli în buchețele mici. Fierbeți-le în apă cu sare sau la abur timp de 4-5 minute, apoi treceți-le prin apă rece pentru a rămâne verzi.",
      "Prăjirea somonului. Sărați ușor somonul. Încingeți uleiul într-o tigaie. Prăjiți somonul cu pielea în jos la foc mediu timp de 4 minute până pielea e crocantă. Întoarceți-l și mai gătiți 2-3 minute.",
      "Adăugarea sosului. Ștergeți excesul de ulei din tigaie cu un șervet (opțional). Turnați sosul Teriyaki pregătit peste somon în tigaie.",
      "Glazurarea. Lăsați sosul să fiarbă 1-2 minute. Se va îngroșa rapid și va deveni siropos. Înclinați tigaia și stropiți somonul cu sos (basting) sau întoarceți-l de câteva ori.",
      "Caramelizarea. Când sosul este gros și lucios ca o glazură, opriți focul. Somonul trebuie să fie perfect îmbrăcat în sos.",
      "Servirea. Așezați somonul peste orez alb fiert. Puneți broccoli alături. Turnați restul de sos gros din tigaie peste pește și legume. Presărați semințe de susan."
    ],
    nutrition: { calories: 500, protein: 35, carbs: 40, fat: 22, sodium: 900 }
  }
};
