
import { Recipe } from '../../types';

export const APPETIZER_RECIPES: Record<string, Recipe> = {
  "Hummus": {
    title: "Hummus Libanez Cremor",
    servings: 4,
    servingSize: "1 bol (200g)",
    pricePerServing: 8,
    prepTime: "15 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Năut fiert (conservă)", amount: "400 g" },
      { name: "Tahini (pastă de susan)", amount: "150 g" },
      { name: "Zeamă de lămâie", amount: "50 ml" },
      { name: "Usturoi", amount: "2 căței" },
      { name: "Apă cu gheață", amount: "50-80 ml" },
      { name: "Ulei de măsline", amount: "3 linguri" },
      { name: "Chimion (Cumin)", amount: "1/2 linguriță" }
    ],
    steps: [
      "Pregătirea năutului este secretul fineții. Dacă folosiți năut din conservă, clătiți-l bine sub jet de apă rece. Pentru un rezultat ultra-fin, ca la restaurant, puteți fierbe năutul din conservă încă 10-15 minute cu puțin bicarbonat de sodiu. Bicarbonatul înmoaie coaja.\n\nApoi, puneți năutul într-un bol cu apă rece și frecați ușor boabele între palme; pielițele se vor desprinde și vor pluti. Îndepărtați-le. Deși laborios, acest pas garantează o textură ca de mătase.",
      
      "Procesarea tahini-ului. Înainte de a adăuga năutul în blender, mixați pasta tahini cu zeama de lămâie și usturoiul pisat separat. Mixați timp de 1 minut până când pasta se albește și devine cremoasă.\n\nAceastă tehnică 'sparge' grăsimea din susan și previne tăierea sosului, creând o emulsie stabilă de la început.",
      
      "Mixarea principală. Adăugați boabele de năut scurse peste baza de tahini, împreună cu sarea și chimionul măcinat. Porniți robotul de bucătărie și mixați timp de 1 minut. Veți obține o pastă groasă și grunjoasă.\n\nOpriți robotul și curățați pereții vasului cu o spatulă de silicon pentru a asigura o mixare uniformă.",
      
      "Adăugarea apei cu gheață (The Ice Trick). Acesta este secretul marilor chef-i libanezi. În timp ce robotul merge la viteză mare, începeți să turnați apa foarte rece (chiar cu fulgi de gheață) în fir subțire.\n\nApa rece șochează compoziția, o albește și o face incredibil de pufoasă și aerată, similar cu textura unui mousse. Continuați să mixați 3-4 minute până când hummus-ul este perfect neted.",
      
      "Ajustarea gustului și texturii. Gustați hummus-ul. Trebuie să fie un echilibru perfect între aroma de nucă a tahini-ului, aciditatea lămâii și usturoi. Dacă e nevoie, mai adăugați sare sau lămâie.\n\nConsistența trebuie să fie moale, curgătoare dar fermă. Rețineți că se va mai întări puțin la frigider.",
      
      "Servirea și plating-ul. Transferați hummus-ul într-un bol larg sau pe o farfurie întinsă. Folosind dosul unei linguri, creați un vârtej sau o adâncitură adâncă în mijlocul pastei.\n\nTurnați generos ulei de măsline extravirgin de calitate în adâncituri. Presărați boia dulce (paprika), sumac, puțin pătrunjel tocat și câteva boabe de năut întregi. Se servește cu lipie libaneză caldă."
    ],
    nutrition: { calories: 350, protein: 12, carbs: 25, fat: 25, fiber: 10 }
  },

  "Guacamole": {
    title: "Guacamole Autentic (La Mojar)",
    servings: 4,
    servingSize: "1 bol mic (150g)",
    pricePerServing: 15,
    prepTime: "15 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Avocado Hass (copt)", amount: "3 buc" },
      { name: "Ceapă albă/roșie", amount: "1 mică" },
      { name: "Ardei Jalapeño/Serrano", amount: "1-2 buc" },
      { name: "Coriandru proaspăt", amount: "1 legătură" },
      { name: "Lime", amount: "2 buc" },
      { name: "Sare de mare", amount: "generos" },
      { name: "Roșie (opțional)", amount: "1 mică" }
    ],
    steps: [
      "Pregătirea bazei aromatice (Pasta). Într-un mojar de piatră (molcajete), puneți ceapa tocată mărunt, ardeiul iute (fără semințe pentru mai puțină iuțeală), o parte din coriandru și sarea grunjoasă.\n\nZdrobiți aceste ingrediente cu pistilul până se transformă într-o pastă zemoasă. Aceasta eliberează uleiurile esențiale și creează o bază de gust mult mai intensă decât simpla tocare.",
      
      "Pregătirea avocado-ului. Tăiați avocado în jumătate, scoateți sâmburele și scobiți pulpa cu o lingură. Avocado trebuie să fie perfect copt (moale la atingere, ca untul la temperatura camerei).\n\nPuneți pulpa în mojar peste baza de ceapă. Dacă nu aveți mojar, faceți totul într-un bol, dar zdrobiți bine baza cu spatele unei linguri.",
      
      "Zdrobirea și textura. Zdrobiți avocado-ul cu furculița sau pistilul, dar NU îl transformați în pastă fină. Guacamole autentic trebuie să fie 'chunky', cu bucăți vizibile de avocado pentru textură.\n\nImediat după zdrobire, stoarceți zeama de la lime-uri. Acidul previne oxidarea (înnegrirea) și taie din grăsimea fructului.",
      
      "Încorporarea ingredientelor. Dacă folosiți roșie (stil Pico de Gallo), tăiați-o cubulețe mici, eliminând semințele și zeama în exces pentru a nu dilua guacamole-ul. Adăugați restul de coriandru tocat.\n\nAmestecați totul delicat prin mișcări de împăturire (folding), nu prin mixare agresivă.",
      
      "Asezonarea finală. Gustați. Acesta este pasul cel mai important. Guacamole are nevoie de multă sare și lime pentru a 'străluci'. Dacă e fad, mai adăugați sare.\n\nEchilibrul trebuie să fie perfect între cremos, sărat, iute și acru.",
      
      "Servirea și păstrarea. Serviți imediat cu totopos (nachos de porumb) calzi. Dacă trebuie să îl păstrați, presați o folie de plastic direct pe suprafața guacamole-ului pentru a elimina complet aerul.\n\nAerul este inamicul care oxidează avocado-ul maro. Odată sigilat, stă bine la frigider 24h."
    ],
    nutrition: { calories: 280, protein: 4, carbs: 15, fat: 25, fiber: 12 }
  },

  "Bruschette": {
    title: "Bruschette cu Roșii și Busuioc (Pomodoro)",
    servings: 6,
    servingSize: "2-3 bucăți",
    pricePerServing: 8,
    prepTime: "15 min",
    cookTime: "5 min",
    ingredients: [
      { name: "Pâine Ciabatta/Baghetă", amount: "1 pâine" },
      { name: "Roșii coapte tari", amount: "500 g" },
      { name: "Busuioc proaspăt", amount: "1 legătură" },
      { name: "Usturoi", amount: "2 căței" },
      { name: "Ulei de măsline extravirgin", amount: "100 ml" },
      { name: "Sare de mare", amount: "după gust" },
      { name: "Oțet balsamic (opțional)", amount: "1 linguriță" }
    ],
    steps: [
      "Pregătirea roșiilor. Spălați roșiile și tăiați-le în cubulețe mici (cuburi de 0.5 cm). Este esențial să scoateți semințele și excesul de zeamă înainte de a tăia pulpa, altfel bruschetele se vor înmuia rapid.\n\nPuneți cubulețele de roșii într-o sită deasupra unui bol și presărați puțină sare. Lăsați-le 10 minute să se scurgă de apa în exces.",
      
      "Marinarea (Secretul gustului). Mutați roșiile scurse într-un bol. Adăugați usturoiul tocat extrem de fin (sau ras), busuiocul rupt cu mâna (nu tocat, pentru a nu se oxida) și uleiul de măsline generos.\n\nAmestecați și lăsați să stea la temperatura camerei timp de 15-30 de minute. Aromele se vor întrepătrunde, iar uleiul va deveni roșiatic și aromat.",
      
      "Pregătirea pâinii. Tăiați pâinea (Ciabatta e ideală pentru alveolele care țin uleiul) în felii de 1.5-2 cm grosime, oblic. Nu tăiați prea subțire, trebuie să susțină greutatea roșiilor.\n\nUngeți feliile cu puțin ulei de măsline pe ambele părți folosind o pensulă.",
      
      "Prăjirea (Grill/Cuptor). Așezați feliile pe un grătar încins sau în cuptor la 200°C. Prăjiți-le până devin aurii și crocante la exterior, dar rămân ușor moi în mijloc.\n\nSemnele de grătar (grill marks) adaugă o aromă afumată delicioasă.",
      
      "Frecarea cu usturoi. Imediat ce scoateți pâinea fierbinte de pe grătar, luați un cățel de usturoi curățat și tăiat în jumătate. Frecați energic suprafața aspră a pâinii cu usturoiul.\n\nCăldura pâinii va topi usturoiul, impregnând o aromă intensă fără a avea bucăți de usturoi crud în gură.",
      
      "Asamblarea. Puneți o lingură generoasă de amestec de roșii pe fiecare felie de pâine. Asigurați-vă că luați și puțin din uleiul aromat de pe fundul bolului.\n\nServiți imediat, cât pâinea este încă crocantă și roșiile sunt reci/temperatura camerei. Contrastul de texturi este cheia."
    ],
    nutrition: { calories: 180, protein: 4, carbs: 25, fat: 8, fiber: 2 }
  },

  "Spring Rolls": {
    title: "Pachețele de Primăvară (Prăjite)",
    servings: 8,
    servingSize: "2 bucăți (100g)",
    pricePerServing: 10,
    prepTime: "40 min",
    cookTime: "15 min",
    ingredients: [
      {name: "Foi de pachețele (Spring Roll)", amount: "1 pachet"},
      {name: "Varză albă", amount: "300 g"},
      {name: "Morcov", amount: "1 buc"},
      {name: "Ciuperci Shiitake", amount: "3-4 buc"},
      {name: "Carne tocată (opțional)", amount: "150 g"},
      {name: "Tăiței de sticlă", amount: "50 g"},
      {name: "Sos de soia", amount: "2 linguri"},
      {name: "Albuș de ou", amount: "pentru lipit"}
    ],
    steps: [
      "Pregătirea umpluturii. Tăiați varza, morcovul și ciupercile în fâșii extrem de subțiri (julienne). Înmuiați tăițeii de sticlă și tăiați-i scurt.\n\nCăliți carnea și legumele în wok. Asezonați cu sos de soia, sare și piper alb. Gătiți până se evaporă tot lichidul. Lăsați să se răcească complet.",
      
      "Împachetarea. Așezați o foaie de aluat pe blat sub formă de romb. Puneți 2 linguri de umplutură în partea de jos.\n\nRidicați colțul de jos peste umplutură și rulați o dată, strângând bine.",
      
      "Plierea. Aduceți colțurile din stânga și din dreapta spre centru, formând un plic. Rulați în continuare în sus până aproape de capăt.\n\nUngeți colțul de sus cu albuș de ou și sigilați ruloul.",
      
      "Prăjirea. Încălziți o baie de ulei la 170°C. Prăjiți pachețelele timp de 3-5 minute până devin aurii și crocante.\n\nDacă uleiul e prea fierbinte, se ard la exterior și rămân moi în interior.",
      
      "Scurgerea. Scoateți-le pe un grătar de sârmă pentru a rămâne crocante.",
      
      "Servirea. Se servesc fierbinți cu sos dulce-acrișor sau sos Worcestershire."
    ],
    nutrition: {calories: 200, protein: 5, carbs: 25, fat: 10, sodium: 400}
  },

  "Tapas spaniole": {
    title: "Platou de Tapas (Mix Variat)",
    servings: 4,
    servingSize: "1 platou (250g)",
    pricePerServing: 35,
    prepTime: "30 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Măsline marinate", amount: "100 g" },
      { name: "Chorizo", amount: "100 g" },
      { name: "Brânză Manchego", amount: "150 g" },
      { name: "Pâine", amount: "1 baghetă" },
      { name: "Jamón Serrano", amount: "100 g" },
      { name: "Migdale prăjite", amount: "50 g" },
      { name: "Ardei copți", amount: "100 g" }
    ],
    steps: [
      "Chorizo la cidru. Tăiați cârnații Chorizo în rondele de 1 cm. Într-o tigaie mică, prăjiți-i în puțin ulei până devin crocanți.\n\nStingeți cu puțin cidru sau vin roșu și lăsați să scadă sosul. Serviți cald într-un bol mic de lut.",
      
      "Montaditos (Mini-sandvișuri). Tăiați bagheta felii. Puneți o felie de Jamón Serrano pe pâine. Adăugați o felie de brânză Manchego și o măslină.\n\nFixați totul cu o scobitoare. Puteți freca pâinea cu roșie și ulei înainte.",
      
      "Migdalele sărate. Prăjiți migdalele crude (fără coajă) în puțin ulei de măsline până sunt aurii. Scurgeți-le și presărați imediat sare de mare grunjoasă.\n\nSunt gustarea perfectă lângă un pahar de sherry.",
      
      "Ardeii copți cu ton. Tăiați ardei copți roșii în fâșii. Amestecați-i cu puțin usturoi și ulei. Așezați fâșiile pe pâine și puneți deasupra o bucată de ton din conservă de calitate.\n\nAceasta este o tapa clasică din nordul Spaniei.",
      
      "Gilda (Tapa clasică din Țara Bascilor). Pe o scobitoare, înfigeți: o măslină verde, un fileu de anșoa și un ardei iute murat (guindilla).\n\nEste o explozie de aciditate și sare.",
      
      "Prezentarea. Aranjați toate aceste mici gustări pe un fund mare de lemn. Tapas înseamnă varietate și socializare. Se mănâncă cu mâna, în picioare sau la bar."
    ],
    nutrition: { calories: 500, protein: 25, carbs: 20, fat: 35, sodium: 1100 }
  },

  "Nachos cu brânză": {
    title: "Nachos Supreme cu Brânză și Jalapeno",
    servings: 6,
    servingSize: "1 porție (300g)",
    pricePerServing: 20,
    prepTime: "15 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Chipsuri tortilla (porumb)", amount: "300 g" },
      { name: "Brânză Cheddar rasă", amount: "200 g" },
      { name: "Brânză Monterey Jack", amount: "100 g" },
      { name: "Fasole neagră", amount: "1 conservă" },
      { name: "Ardei Jalapeno murați", amount: "50 g" },
      { name: "Roșii cubulețe", amount: "2 buc" },
      { name: "Smântână și Guacamole", amount: "topping" }
    ],
    steps: [
      "Stratificarea inteligentă. Nu aruncați chipsurile într-o grămadă! Pe o tavă mare de copt, așezați un strat uniform de chipsuri, unul lângă altul.\n\nPresărați jumătate din brânza rasă și jumătate din fasolea neagră scursă. Acest strat de bază asigură că nu veți avea chipsuri goale la final.",
      
      "Al doilea nivel. Adăugați restul de chipsuri deasupra, formând un mic munte. Presărați restul de brânză, fasole și feliile de Jalapeno.\n\nBrânza trebuie să fie din abundență pentru a lega totul.",
      
      "Coacerea. Introduceți tava în cuptorul preîncălzit la 200°C. Coaceți timp de 10-12 minute, până când brânza este complet topită și bolborosește, iar marginile chipsurilor încep să se rumenească ușor.\n\nFiți cu ochii pe cuptor să nu se ardă.",
      
      "Ingredientele proaspete. Scoateți tava fierbinte. Imediat, presărați roșiile tăiate cubulețe (scurse de zeamă), ceapa verde tocată și coriandru proaspăt.\n\nContrastul dintre brânza fierbinte și legumele reci este esențial.",
      
      "Topping-urile cremoase. Nu puneți smântâna și guacamole-ul direct peste toți nachos, pentru că se vor înmuia.\n\nPuneți un bol cu smântână și unul cu guacamole în centrul tăvii sau serviți-le alături.",
      
      "Servirea. Nachos se servesc direct din tavă, imediat ce au ieșit din cuptor. Este un fel de mâncare de petrecere, de împărțit ('sharing platter')."
    ],
    nutrition: { calories: 600, protein: 20, carbs: 45, fat: 35, sodium: 900 }
  },

  "Edamame": {
    title: "Edamame cu Sare de Mare și Chili",
    servings: 2,
    servingSize: "1 bol (200g)",
    pricePerServing: 12,
    prepTime: "5 min",
    cookTime: "5 min",
    ingredients: [
      { name: "Edamame (păstăi congelate)", amount: "300 g" },
      { name: "Sare de mare (grunjoasă)", amount: "1 lingură" },
      { name: "Fulgi de chili", amount: "1/2 linguriță" },
      { name: "Usturoi (opțional)", amount: "1 cățel" },
      { name: "Ulei de susan", amount: "1 linguriță" },
      { name: "Apă", amount: "1 L" }
    ],
    steps: [
      "Fierberea. Puneți apa la fiert cu o linguriță de sare. Când clocotește, adăugați păstăile de edamame congelate.\n\nLăsați să fiarbă 3-5 minute. Testați o păstaie: boabele din interior trebuie să fie moi, dar încă ferme ('al dente'), nu făinoase. Păstaia trebuie să rămână verde strălucitor.",
      
      "Scurgerea și uscarea. Scurgeți edamamele într-o sită. Scuturați-le bine pentru a elimina excesul de apă.\n\nDacă doriți varianta simplă, doar presărați sare acum și serviți. Pentru varianta picantă, continuați.",
      
      "Sotarea (Spicy Edamame). Încingeți uleiul de susan într-o tigaie wok sau largă. Adăugați usturoiul zdrobit și fulgii de chili.\n\nCăliți 10 secunde până miroase a usturoi (nu-l ardeți!).",
      
      "Asezonarea finală. Aruncați edamamele scurse în tigaie încinsă. Amestecați rapid ('toss') timp de 1 minut, astfel încât uleiul picant să acopere toate păstăile și să se caramelizeze ușor ('charred edges').",
      
      "Sarea. Opriți focul. Presărați sarea de mare grunjoasă (Maldon sau similar) peste păstăi.\n\nCristalele mari de sare trebuie să se simtă pe limbă când mâncați boabele.",
      
      "Servirea. Puneți într-un bol. Se mănâncă cu mâna: țineți păstaia de un capăt, o băgați în gură și trageți boabele printre dinți, aruncând coaja.\n\nEste o gustare sănătoasă, bogată în proteine și fibre, perfectă lângă o bere rece."
    ],
    nutrition: { calories: 150, protein: 12, carbs: 10, fat: 6, fiber: 5 }
  },

  "Tzatziki": {
    title: "Sos Tzatziki Autentic",
    servings: 4,
    servingSize: "1 bol mic (150g)",
    pricePerServing: 8,
    prepTime: "15 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Iaurt Grecesc (10%)", amount: "400 g" },
      { name: "Castravete lung", amount: "1 buc" },
      { name: "Usturoi", amount: "3-4 căței" },
      { name: "Ulei de măsline", amount: "2 linguri" },
      { name: "Oțet alb/Lămâie", amount: "1 lingură" },
      { name: "Mărar proaspăt", amount: "1 legătură" },
      { name: "Sare", amount: "1 linguriță" }
    ],
    steps: [
      "Pregătirea castravetelui este secretul consistenței. Spălați castravetele (nu este nevoie să îl curățați de coajă dacă este bio) și dați-l pe răzătoarea mare. \n\nPresărați sarea peste castravetele ras și lăsați-l într-o sită timp de 10-15 minute. Sarea va extrage apa din castravete. Apoi, strângeți castravetele în pumn sau într-un tifon curat și stoarceți cât mai mult lichid posibil. Dacă săriți acest pas, tzatziki va ieși apos.",
      
      "Pregătirea bazei. Într-un bol mediu, puneți iaurtul grecesc strecurat. Este esențial să folosiți iaurt gras (10%) și dens.\n\nAdăugați usturoiul pisat foarte fin (pastă) sau ras. Cantitatea de usturoi depinde de gust, dar tzatziki autentic este destul de picant de la usturoi.",
      
      "Emulsionarea. Adăugați uleiul de măsline în fir subțire în timp ce amestecați în iaurt, ca la maioneză. Acest lucru îi dă o textură lucioasă și bogată.\n\nAdăugați oțetul (sau zeama de lămâie) pentru aciditate. Oțetul este mai tradițional în anumite regiuni și păstrează sosul alb.",
      
      "Combinarea. Adăugați castravetele stors extrem de bine peste amestecul de iaurt. Tocați mărarul proaspăt (fără codițe groase) și adăugați-l.\n\nAmestecați totul cu o lingură. Gustați și mai adăugați sare dacă este nevoie (atenție, castravetele a fost deja sărat) sau puțin piper alb.",
      
      "Maturarea aromelor. Acoperiți bolul și lăsați-l la frigider pentru cel puțin 1-2 ore înainte de servire.\n\nÎn acest timp, aroma de usturoi se va difuza în grăsimea iaurtului, iar mărarul își va elibera uleiurile volatile. Tzatziki este mult mai bun a doua zi.",
      
      "Servirea. Înainte de a-l pune pe masă, mai stropiți cu puțin ulei de măsline deasupra și decorați cu o măslină Kalamata în mijloc sau o crenguță de mărar.\n\nSe servește rece, ca dip pentru pite calde, legume crude sau ca sos răcoritor lângă fripturi de miel și pui."
    ],
    nutrition: { calories: 120, protein: 5, carbs: 6, fat: 9, sodium: 300 }
  },

  "Falafel": {
    title: "Falafel Crocant (Rețeta Originală)",
    servings: 4,
    servingSize: "4 bucăți (120g)",
    pricePerServing: 10,
    prepTime: "30 min (+12h înmuiere)",
    cookTime: "15 min",
    ingredients: [
      {name: "Năut uscat", amount: "250 g"},
      {name: "Ceapă", amount: "1 medie"},
      {name: "Usturoi", amount: "4 căței"},
      {name: "Pătrunjel & Coriandru", amount: "câte 1 legătură"},
      {name: "Făină/Năut măcinat", amount: "1 lingură"},
      {name: "Bicarbonat", amount: "1/2 linguriță"},
      {name: "Condimente", amount: "Chimion, Coriandru boabe"}
    ],
    steps: [
      "Înmuierea năutului este pasul critic. Folosiți DOAR năut uscat crud. Puneți-l într-un bol mare cu multă apă rece și lăsați-l la înmuiat minim 12-24 de ore. Năutul își va dubla volumul.\n\nNU folosiți niciodată năut din conservă (fiert) pentru falafel! Chiftelele vor fi moi și se vor dezintegra în uleiul încins.",
      
      "Măcinarea. Scurgeți bine năutul crud și uscați-l puțin. Puneți-l în robotul de bucătărie împreună cu ceapa tăiată grosier, usturoiul, pătrunjelul și coriandrul proaspăt.\n\nAdăugați condimentele: sare, piper, chimion măcinat, coriandru măcinat și puțin ardei iute. Procesați prin impulsuri scurte.",
      
      "Textura corectă. Nu transformați compoziția în pastă (ca la hummus). Textura trebuie să fie nisipoasă, grunjoasă, similară cu couscous-ul. Dacă o strângeți în mână, trebuie să își păstreze forma, dar să fie sfărâmicioasă la atingere.\n\nTransferați mixul într-un bol și adăugați o lingură de făină (sau făină de năut) pentru a absorbi umiditatea.",
      
      "Odihna și agentul de creștere. Lăsați compoziția la frigider timp de 30-60 de minute. Chiar înainte de prăjire, adăugați bicarbonatul de sodiu dizolvat într-o linguriță de apă.\n\nBicarbonatul va face falafelul pufos și aerat în interior în timpul prăjirii.",
      
      "Modelarea și prăjirea. Încălziți ulei într-o cratiță adâncă la 170-180°C. Formați bile (sau discuri mici) folosind mâinile umede sau o presă specială de falafel. Nu le presați prea tare, să rămână aerate.\n\nPuneți-le în uleiul încins cu grijă. Nu aglomerați tigaia.",
      
      "Gătirea finală. Prăjiți timp de 3-4 minute sau până când chiftelele sunt maro-închis la exterior (nu aurii, ci un maro profund) și crocante.\n\nScoateți-le pe hârtie absorbantă. Interiorul trebuie să fie verde strălucitor, aburind și moale. Serviți fierbinte în lipie cu sos Tahini, roșii și murături."
    ],
    nutrition: {calories: 350, protein: 15, carbs: 35, fat: 18, fiber: 12}
  },

  "Paté de foie gras": {
    title: "Terină de Ficat de Pui (Stil Foie Gras)",
    servings: 6,
    servingSize: "2 felii unse (100g)",
    pricePerServing: 15,
    prepTime: "30 min (+4h rece)",
    cookTime: "15 min",
    ingredients: [
      { name: "Ficat de pui", amount: "500 g" },
      { name: "Unt (gras 82%)", amount: "250 g" },
      { name: "Ceapă eșalotă", amount: "2 buc" },
      { name: "Usturoi", amount: "1 cățel" },
      { name: "Coniac/Brandy", amount: "50 ml" },
      { name: "Smântână lichidă", amount: "50 ml" },
      { name: "Cimbru proaspăt", amount: "1 linguriță" },
      { name: "Piper roz", amount: "decor" }
    ],
    steps: [
      "Curățarea ficatului. Spălați ficățeii de pui și curățați-i cu grijă de pielițe, vene și orice urmă de verde (fiere). Tăiați lobii în două.\n\nLăsați ficățeii înmuiați în lapte timp de 1 oră pentru a elimina gustul amar și sângele, apoi scurgeți-i și uscați-i bine cu șervete.",
      
      "Sotarea. Într-o tigaie largă, topiți 50g de unt. Adăugați ceapa eșalotă tocată fin și usturoiul. Căliți până se înmoaie. Adăugați ficățeii și cimbru.\n\nPrăjiți ficățeii la foc mediu timp de 3-4 minute pe fiecare parte. Ei trebuie să fie maronii la exterior, dar încă ușor roz în mijloc. Nu îi gătiți excesiv, altfel paté-ul va fi granulos.",
      
      "Flambarea. Turnați coniacul peste ficăței și lăsați alcoolul să se evapore (sau flambați cu grijă). Coniacul dă acea aromă nobilă specifică. Adăugați smântâna lichidă și mai lăsați 1 minut pe foc.",
      
      "Blendarea fină. Puneți tot conținutul tigăii (ficat, ceapă, sucuri) într-un blender. Adăugați restul de unt (200g) tăiat cubulețe, la temperatura camerei.\n\nMixați la viteză mare până obțineți o pastă extrem de fină, ca o spumă. Asezonați cu sare, piper negru și un praf de nucșoară.",
      
      "Strecurarea (Pentru catifea). Treceți pasta printr-o sită fină, apăsând cu o spatulă. Acest pas elimină orice fibră rămasă și face paté-ul mătăsos ('smooth').\n\nTurnați compoziția în forme mici de ceramică (ramekins) sau într-o formă de terină.",
      
      "Sigilarea și răcirea. Topiți puțin unt clarifiat și turnați un strat subțire deasupra fiecărei forme pentru a sigila paté-ul și a preveni oxidarea (înnegrirea). Presărați boabe de piper roz sau o frunză de dafin în untul lichid pentru decor.\n\nLăsați la frigider minim 4 ore sau peste noapte. Se servește pe pâine prăjită caldă (toast) cu dulceață de ceapă sau smochine."
    ],
    nutrition: { calories: 400, protein: 12, carbs: 4, fat: 35, micronutrients: ["Iron"] }
  },

  "Crochete de cartofi": {
    title: "Crochete de Cartofi cu Cașcaval",
    servings: 4,
    servingSize: "3 bucăți (150g)",
    pricePerServing: 10,
    prepTime: "30 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Cartofi făinoși", amount: "500 g" },
      { name: "Cașcaval ras/Mozzarella", amount: "100 g" },
      { name: "Ouă", amount: "2 buc" },
      { name: "Unt", amount: "30 g" },
      { name: "Făină", amount: "50 g" },
      { name: "Pesmet auriu", amount: "150 g" },
      { name: "Nucșoară", amount: "un praf" },
      { name: "Ulei", amount: "pt prăjit" }
    ],
    steps: [
      "Piureul de bază. Fierbeți cartofii în coajă în apă cu sare până sunt moi. Curățați-i cât sunt fierbinți și zdrobiți-i imediat cu presa de cartofi (ricer) pentru a obține un piure fin și pufos.\n\nNu folosiți blenderul, deoarece cartofii vor deveni cleioși. Lăsați piureul să se răcească puțin pentru a se evapora excesul de umiditate.",
      
      "Aromatizarea. Adăugați în piureul călduț untul, gălbenușurile de la ouă (păstrați albușurile pentru panadă), cașcavalul ras fin, sare, piper și nucșoară. Amestecați bine.\n\nDacă compoziția este prea moale, adăugați o lingură de făină. Compoziția trebuie să fie modelabilă, ca o plastilină.",
      
      "Modelarea. Luați cantități egale de piure și modelați-le sub formă de cilindri (bouchons), bile sau pere mici. Umeziți mâinile cu puțină apă dacă se lipește.\n\nAșezați crochetele formate pe o tavă și lăsați-le la frigider 20 de minute să se întărească. Acest pas le ajută să își păstreze forma la prăjit.",
      
      "Panada (Crusta). Pregătiți 3 farfurii: una cu făină, una cu albușurile bătute ușor cu puțină apă și una cu pesmet. Treceți fiecare crochetă prin făină (scuturați excesul), apoi prin albuș, apoi prin pesmet.\n\nAsigurați-vă că sunt acoperite uniform, fără găuri, altfel vor exploda în ulei.",
      
      "Prăjirea. Încălziți o baie de ulei la 180°C într-o cratiță adâncă. Prăjiți crochetele în tranșe mici (câte 4-5) timp de 3-4 minute, până devin aurii și crocante.\n\nNu le mișcați în primul minut pentru a lăsa crusta să se formeze.",
      
      "Servirea. Scoateți crochetele pe hârtie absorbantă. Se servesc fierbinți, ca garnitură sau aperitiv.\n\nInteriorul trebuie să fie cremos și fin, iar exteriorul foarte crocant. Merg perfect cu un sos de smântână cu usturoi."
    ],
    nutrition: { calories: 350, protein: 10, carbs: 40, fat: 18, sodium: 400 }
  },

  "Gyoza japoneze": {
    title: "Gyoza (Colțunași Japonezi Prăjiți)",
    servings: 4,
    servingSize: "6 bucăți (120g)",
    pricePerServing: 15,
    prepTime: "45 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Foi Gyoza (rotunde)", amount: "1 pachet" },
      { name: "Carne tocată porc", amount: "250 g" },
      { name: "Varză albă", amount: "150 g" },
      { name: "Ceapă verde/Chives", amount: "1 legătură" },
      { name: "Usturoi & Ghimbir", amount: "ras fin" },
      { name: "Sos de soia & Sake", amount: "câte 1 lingură" },
      { name: "Ulei de susan", amount: "1 linguriță" },
      { name: "Ulei", amount: "pt prăjit" }
    ],
    steps: [
      "Pregătirea verzei. Tocați varza extrem de mărunt. Presărați sare peste ea și lăsați-o 10 minute. Apoi, luați varza în mâini și stoarceți-o cu putere pentru a elimina toată apa.\n\nAcest pas este esențial pentru ca umplutura să nu fie apoasă și colțunașii să rămână crocanți.",
      
      "Umplutura. Într-un bol, amestecați carnea de porc (cu puțină grăsime) cu varza stoarsă, ceapa verde, usturoiul, ghimbirul și condimentele lichide (soia, sake, ulei susan).\n\nFrământați energic cu mâna până când amestecul devine lipicios și palid la culoare. Această textură leagă umplutura.",
      
      "Împachetarea (Pleating). Luați o foaie de gyoza în palmă. Umeziți marginea cu degetul ud. Puneți o linguriță de umplutură în centru.\n\nÎndoiți foaia în jumătate. Faceți pliuri (crețe) DOAR pe partea dinspre voi a aluatului, lipind fiecare pliu de partea din spate care rămâne dreaptă. Formați un arc de cerc (semilună).",
      
      "Prăjirea (Yaki). Încingeți puțin ulei într-o tigaie antiaderentă. Așezați gyoza în cercuri sau rânduri, cu baza plată în jos.\n\nPrăjiți la foc mediu timp de 2-3 minute până când fundul devine maro-auriu și crocant. Nu le întoarceți!",
      
      "Aburirea (Mushi). Turnați rapid 50-80ml apă în tigaie și puneți imediat un capac etanș. Atenție la abur! Lăsați să fiarbă în abur 3-4 minute până când apa se evaporă complet și carnea e gătită.\n\nScoateți capacul și mai lăsați 1 minut să se usuce din nou baza și să redevină crocantă (adăugați puțin ulei de susan acum pentru aromă).",
      
      "Servirea. Răsturnați gyoza pe un platou cu partea prăjită în sus. Se servesc fierbinți cu un sos dip din sos de soia, oțet de orez și ulei picant (Rayu).\n\nContrastul dintre baza crocantă și partea de sus moale, gătită la abur, este specific Gyoza."
    ],
    nutrition: { calories: 300, protein: 15, carbs: 30, fat: 12, sodium: 600 }
  }
};
