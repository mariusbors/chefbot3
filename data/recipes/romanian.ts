
import { Recipe } from '../../types';

export const ROMANIAN_RECIPES: Record<string, Recipe> = {
  "Sarmale cu mămăligă": {
    title: "Sarmale Tradiționale cu Mămăligă",
    servings: 8,
    prepTime: "1 oră",
    cookTime: "3 ore",
    pricePerServing: 18,
    servingSize: "4 sarmale (250g)",
    ingredients: [
      { name: "Carne tocată porc+vită", amount: "1 kg" },
      { name: "Varză murată", amount: "2 căpățâni" },
      { name: "Orez", amount: "150 g" },
      { name: "Ceapă", amount: "3 buc" },
      { name: "Pastă de tomate", amount: "3 linguri" },
      { name: "Cimbru, mărar, piper", amount: "după gust", partnerId: 'partner_fuchs', purchaseUrl: 'https://www.fuchs.ro/produse/' },
      { name: "Afumătură (costiță)", amount: "300 g" },
      { name: "Mălai (pentru mămăligă)", amount: "500 g", partnerId: 'partner_boromir', purchaseUrl: 'https://www.boromir.ro/malai-extra-1kg-84' }
    ],
    steps: [
      "Începem cu pregătirea verzei, un pas esențial pentru reușita sarmalelor. Desfaceți foile de varză cu grijă și spălați-le în apă rece dacă sunt prea sărate sau acre. Îndepărtați nervurile groase de pe fiecare foaie folosind un cuțit ascuțit, păstrând doar partea fină pentru împachetat.\n\nResturile de varză și nervurile nu se aruncă; ele se toacă fideluță (mărunt) și vor fi folosite pentru a tapeta fundul oalei și pentru a acoperi sarmalele, oferind un strat protector și aromă suplimentară.",
      
      "Pentru umplutură, curățați ceapa și tăiați-o mărunt. Căliți-o ușor în puțin ulei până devine sticloasă, apoi adăugați orezul spălat și pasta de tomate. Amestecați pe foc timp de 1-2 minute pentru a 'deschide' aromele orezului și a elimina aciditatea bulionului.\n\nLăsați amestecul de ceapă și orez să se răcească puțin, apoi adăugați-l peste carnea tocată într-un bol mare. Acum este momentul să condimentați generos cu piper proaspăt măcinat, cimbru uscat, mărar și, opțional, puțin boia dulce. Frământați bine compoziția, adăugând și o ceașcă mică de apă călduță; aceasta va face sarmalele pufoase și va ajuta orezul să fiarbă uniform.",
      
      "Împachetarea sarmalelor necesită răbdare și tehnică. Luați o foaie de varză în palmă, puneți o lingură de compoziție la un capăt și rulați strâns, având grijă să introduceți capetele verzei în interiorul ruloului la final pentru a sigila carnea.\n\nNu strângeți sarmalele excesiv de tare, deoarece orezul își va mări volumul la fiert și riscați ca foile să se rupă. Dimensiunea ideală este cea a unui deget mare sau puțin mai gros, în funcție de preferința regională.",
      
      "Montarea oalei este secretul gustului complex. Așezați pe fundul unei oale (ideal de lut sau fontă) un strat generos de varză tocată fideluță, amestecată cu cimbru și mărar uscat. Peste acest strat, aranjați sarmalele în cercuri concentrice, lăsând puțin spațiu între ele pentru a permite lichidului să circule.\n\nPrintre sarmale, inserați bucăți de afumătură (costiță, șuncă sau ciolan) și foi de dafin. Grăsimea și aroma de fum vor pătrunde în sarmale în timpul fierberii lente, dându-le acel gust inconfundabil.",
      
      "Deasupra ultimului strat de sarmale, puneți încă un strat de varză tocată pentru a le proteja de căldura directă. Preparați un amestec din apă fierbinte și bulion (sau suc de roșii) și turnați-l în oală până când nivelul lichidului acoperă sarmalele.\n\nAcoperiți oala cu un capac și puneți-o la fiert. Puteți alege să le fierbeți pe aragaz la foc mic timp de aproximativ 2-3 ore sau, pentru un rezultat superior, să le introduceți în cuptorul preîncălzit la 160 de grade Celsius pentru 3-4 ore.",
      
      "În timp ce sarmalele fierb, pregătiți mămăliga. Puneți apa la fiert cu sare, iar când clocotește, turnați mălaiul în ploaie, amestecând energic cu un tel pentru a evita cocoloașele. Fierbeți mămăliga la foc mic timp de minim 15-20 de minute, amestecând des.\n\nServiți sarmalele fierbinți, neapărat cu o porție generoasă de mămăligă aburindă, o lingură de smântână grasă deasupra și un ardei iute alături. Gustul este și mai bun a doua zi, după ce aromele s-au întrepătruns complet."
    ],
    nutrition: { calories: 650, protein: 35, carbs: 45, fat: 40, sodium: 900 }
  },

  "Ciorbă de burtă": {
    title: "Ciorbă de burtă (Tradițională)",
    servings: 8,
    prepTime: "30 min",
    cookTime: "3-4 ore",
    pricePerServing: 22,
    servingSize: "1 bol (350ml)",
    ingredients: [
      { name: "Burtă de vită (prefiartă)", amount: "2 kg" },
      { name: "Oase de vită cu măduvă", amount: "1 kg" },
      { name: "Morcovi", amount: "3 buc" },
      { name: "Ceapă", amount: "2 buc" },
      { name: "Țelină", amount: "1/2 rădăcină" },
      { name: "Gălbenușuri de ou", amount: "4 buc" },
      { name: "Smântână (20% grăsime)", amount: "500 ml", partnerId: 'partner_napolact', purchaseUrl: 'https://www.napolact.ro' },
      { name: "Usturoi", amount: "2 căpățâni" },
      { name: "Oțet", amount: "după gust" },
      { name: "Sare și piper", amount: "după gust" }
    ],
    steps: [
      "Procesul începe cu pregătirea bazei de supă, care este esențială pentru gustul final. Spălați foarte bine oasele de vită în mai multe ape reci, apoi puneți-le la fiert într-o oală încăpătoare cu apă rece și o lingură de sare. Este crucial să spumuiți constant supa în primele 30 de minute de fierbere pentru a obține un lichid clar.\n\nDupă ce spuma nu se mai formează, adăugați legumele întregi curățate (ceapa, morcovii și țelina). Acestea vor fierbe lent împreună cu oasele timp de aproximativ 3 ore la foc mic, până când carnea și măduva se desprind ușor de pe oase, iar supa devine concentrată și aromată.",
      
      "În timp ce supa fierbe, ne ocupăm de burtă. Chiar dacă este prefiartă, burta trebuie spălată foarte bine în apă cu puțin oțet pentru a neutraliza orice miros specific. Apoi, se taie în fâșii (tăiței) de aproximativ 5-6 cm lungime și 0.5 cm lățime.\n\nCând supa de oase este gata, se strecoară lichidul într-o oală curată, eliminând oasele și legumele fierte. Morcovii pot fi păstrați pentru decor sau rași și căliți puțin în ulei pentru a da o culoare aurie ciorbei ('fața' ciorbei), apoi se adaugă înapoi în lichidul strecurat.",
      
      "Adăugați fâșiile de burtă în supa strecurată care fierbe la foc mediu. Lăsați să fiarbă împreună timp de 30-45 de minute. Acesta este momentul în care burta absoarbe aromele supei de oase și devine fragedă.\n\nVerificați textura burții; ea trebuie să fie moale, dar să își păstreze forma (al dente). Dacă este nevoie, completați cu puțină apă fierbinte dacă lichidul a scăzut prea mult, menținând consistența dorită a ciorbei.",
      
      "Pregătirea liezonului (amestecul de dres): Într-un bol mare, separați gălbenușurile de albușuri și bateți-le bine cu un praf de sare. Adăugați smântâna treptat, amestecând continuu până obțineți o cremă omogenă și fină.\n\nPentru a evita tăierea (brânzirea) smântânii când o adăugați în ciorbă, trebuie să temperați amestecul. Luați un polonic de supă fierbinte din oală și turnați-l în fir subțire peste amestecul de ouă și smântână, amestecând energic. Repetați cu încă 2-3 polonice până când amestecul din bol ajunge la o temperatură apropiată de cea a ciorbei.",
      
      "Opriți focul sub oală. Acesta este un pas critic; ciorba nu trebuie să mai clocotească în momentul în care adăugați liezonul. Turnați încet amestecul temperat în oala mare, amestecând continuu pentru o distribuție uniformă.\n\nCuloarea ciorbei se va transforma instantaneu într-un alb-gălbui cremos, iar consistența va deveni catifelată. Gustați și potriviți de sare și piper în funcție de preferințe.",
      
      "Finalizarea aromelor se face cu mujdeiul de usturoi și oțetul. Curățați cele două căpățâni de usturoi și pisați-le până devin pastă. Amestecați pasta cu puțină apă rece și strecurați sucul rezultat direct în ciorbă (sau puneți pasta, după gust, dacă preferați o textură mai rustică).\n\nAdăugați oțetul treptat, gustând mereu, până obțineți echilibrul perfect între acru și cremos. Ciorba de burtă se servește fierbinte, neapărat cu ardei iute proaspăt sau murat și pâine de casă."
    ],
    nutrition: { calories: 350, protein: 25, carbs: 8, fat: 22, micronutrients: ["Colagen", "Calciu", "Zinc"] }
  },

  "Ardei Umpluți": {
    title: "Ardei Umpluți Muntenești cu Smântână",
    servings: 6,
    prepTime: "30 min",
    cookTime: "1.5 ore",
    pricePerServing: 16,
    servingSize: "2 ardei (350g)",
    ingredients: [
      { name: "Ardei grași (potriviți)", amount: "8-10 buc" },
      { name: "Carne tocată (amestec)", amount: "700 g" },
      { name: "Orez", amount: "100 g" },
      { name: "Ceapă", amount: "2 mari" },
      { name: "Suc de roșii", amount: "500 ml" },
      { name: "Ou", amount: "1 buc" },
      { name: "Mărar & Pătrunjel", amount: "1 legătură" },
      { name: "Smântână", amount: "pentru servire" },
      { name: "Făină", amount: "1 linguriță (opțional)" }
    ],
    steps: [
      "Pregătirea ardeilor. Alegeți ardei grași de dimensiuni egale, de preferat soiul românesc galben-verzui sau roșu (kapia). Spălați-i bine. Tăiați un capac în jurul codiței și scoateți cu grijă cotorul și semințele, păstrând ardeiul întreg.\n\nScuturați bine interiorul de semințe. Opțional, puteți opări ardeii 1 minut în apă clocotită pentru a-i face mai flexibili la umplere, dar nu este obligatoriu.",
      
      "Pregătirea compoziției (Umplutura). Tocați ceapa mărunt. Într-o tigaie cu puțin ulei, căliți ceapa până devine sticloasă. Adăugați orezul spălat și mai căliți 2 minute. Acest pas ('scliviseala') ajută orezul să se umfle frumos.\n\nLăsați să se răcească puțin, apoi amestecați cu carnea tocată, oul, verdeața tocată, sare, piper și 2-3 linguri de suc de roșii. Frământați bine.",
      
      "Umplerea. Umpleți fiecare ardei cu compoziția de carne, dar NU îi îndesați până la refuz. Orezul se va umfla la fiert și are nevoie de spațiu. Lăsați 1 cm liber la gura ardeiului.\n\nCapacirea. Puteți folosi capacele originale ale ardeilor, felii de roșii sau puțină făină presărată la gură pentru a sigila carnea.",
      
      "Așezarea în oală. Alegeți o oală adâncă și largă. Așezați ardeii în picioare, unul lângă altul, destul de strâns ca să nu se răstoarne.\n\nDacă vă rămâne compoziție, puteți face câteva perișoare și să le aruncați printre ardei.",
      
      "Fierberea. Turnați sucul de roșii peste ardei. Completați cu apă fierbinte (sau supă de oase) până când lichidul ajunge la trei sferturi din înălțimea ardeilor. Adăugați o crenguță de cimbru sau foi de dafin.\n\nPuneți un capac și fierbeți la foc mediu timp de aproximativ 50-60 de minute. Ardeii trebuie să fie moi, iar carnea gătită.",
      
      "Finisarea la cuptor (Opțional). Pentru un gust și mai bun, după ce au fiert pe aragaz, puteți introduce oala (dacă e rezistentă) în cuptorul încins la 180°C pentru încă 20 de minute, până când sosul scade și ardeii se rumenesc puțin deasupra.\n\nSe servesc fierbinți, cu o lingură generoasă de smântână rece deasupra și pâine proaspătă de casă."
    ],
    nutrition: { calories: 450, protein: 25, carbs: 35, fat: 20, fiber: 5 }
  },

  "Mămăligă cu brânză și smântână": {
    title: "Mămăligă cu Brânză și Smântână",
    servings: 4,
    prepTime: "5 min",
    cookTime: "20 min",
    pricePerServing: 8,
    servingSize: "1 porție (300g)",
    ingredients: [
      { name: "Mălai", amount: "300 g", partnerId: 'partner_boromir', purchaseUrl: 'https://www.boromir.ro/malai-extra-1kg-84' },
      { name: "Apă", amount: "1 L" },
      { name: "Brânză telemea/burduf", amount: "300 g", partnerId: 'partner_napolact', purchaseUrl: 'https://www.napolact.ro' },
      { name: "Smântână", amount: "200 g", partnerId: 'partner_napolact', purchaseUrl: 'https://www.napolact.ro' },
      { name: "Sare", amount: "1 linguriță" },
      { name: "Unt", amount: "50 g" }
    ],
    steps: [
      "Alegeți un ceaun de tuci sau o oală cu fund dublu pentru a fierbe mămăliga corect fără a se lipi. Puneți apa cu sarea la fiert. Când apa începe să clocotească, presărați o mână de mălai în ploaie; acest prim strat va ajuta la formarea 'chimiei' mămăligii.\n\nLăsați să fiarbă câteva minute până se formează o spumă la suprafață, apoi începeți să turnați restul de mălai în fir subțire, amestecând continuu cu un tel.",
      "După ce ați încorporat tot mălaiul, schimbați telul cu un făcăleț sau o lingură de lemn solidă. Reduceți focul la minim. Este esențial să amestecați frecvent pentru a sparge cocoloașele și pentru a găti amidonul uniform.\n\nMămăliga trebuie să fiarbă 'bolborosind' timp de cel puțin 15-20 de minute. Cu cât fierbe mai mult, cu atât va fi mai gustoasă și mai digerabilă.",
      "Verificați consistența. Mămăliga este gata când se desprinde ușor de pe pereții ceaunului și lingura stă dreaptă în mijlocul ei fără să cadă. Dacă doriți o mămăligă mai cremoasă, puteți adăuga un cub de unt la final și să amestecați viguros.\n\nStingeți focul și lăsați mămăliga să se odihnească în ceaun 2-3 minute înainte de a o răsturna.",
      "Pregătirea farfuriilor sau un platou mare de lemn. Răsturnați mămăliga dintr-o singură mișcare fermă. Folosind o ață curată sau un cuțit umezit pentru a o tăia în felii, dacă doriți o prezentare rustică.\n\nCât mămăliga este încă aburindă, sfărâmați brânza telemea sau de burduf deasupra.",
      "Stratificarea este o altă metodă delicioasă. Într-un bol, puneți un strat de mămăligă, apoi un strat generos de brânză și puțin unt, apoi încă un strat de mămăligă. Căldura mămăligii va topi brânza în interior, creând o textură filantă delicioasă.\n\nAcoperiți totul cu o lingură mare de smântână rece și grasă.",
      "Pentru un plus de savoare, puteți prăji câteva felii de slănină sau cârnăciori și să turnați grăsimea rezultată peste mămăligă ('julfă').\n\nServiți imediat. Contrastul dintre mămăliga fierbinte, brânza sărată și smântâna rece este definiția confortului culinar românesc."
    ],
    nutrition: { calories: 500, protein: 15, carbs: 55, fat: 25 }
  },

  "Ciorbă de fasole în pâine": {
    title: "Ciorbă de Fasole cu Afumătură în Pâine",
    servings: 6,
    prepTime: "30 min",
    cookTime: "2 ore",
    pricePerServing: 25,
    servingSize: "1 pâine umplută (400ml)",
    ingredients: [
      {name: "Fasole boabe uscată", amount: "500g"},
      {name: "Ciolan afumat", amount: "1kg"},
      {name: "Ceapă", amount: "2 mari"},
      {name: "Morcovi", amount: "2 buc"},
      {name: "Pâine rotundă țărănească", amount: "6 buc", partnerId: 'partner_boromir', purchaseUrl: 'https://www.boromir.ro' },
      {name: "Tarhon (în oțet)", amount: "1 lingură"},
      {name: "Pastă tomate", amount: "2 linguri"}
    ],
    steps: [
      "Fasolea necesită o pregătire atentă. Spălați fasolea și lăsați-o la înmuiat în apă rece peste noapte. A doua zi, puneți-o la fiert și, după ce dă în clocot, aruncați prima apă. Repetați operațiunea de 2 ori. Acest lucru ajută la digestie și elimină toxinele.\n\nÎn a treia apă (care trebuie să fie fierbinte când o adăugați), puneți fasolea la fiert definitiv împreună cu ciolanul afumat întreg. Lăsați să fiarbă la foc mediu.",
      "Pregătirea legumelor și a ciolanului. Când carnea de pe ciolan începe să se desprindă de pe os (după aproximativ 1-1.5 ore), scoateți ciolanul din oală și lăsați-l să se răcească puțin. Dezosați carnea și tăiați-o în bucăți potrivite, apoi puneți-o înapoi în oală.\n\nTocați ceapa, morcovul și ardeiul mărunt. Puteți să le puneți crude la fiert pentru o variantă mai ușoară, sau să le căliți puțin în ulei pentru un gust mai bogat.",
      "Adăugarea aromelor. Când fasolea este aproape fiartă (bobul este moale dar nu sfărâmat), adăugați legumele în oală. Lăsați să mai fiarbă împreună 20 de minute.\n\nAdăugați pasta de tomate dizolvată în puțină zeamă de supă. Sărați după gust, ținând cont că afumătura este deja sărată. Adăugați piper și cimbru uscat.",
      "Finalizarea ciorbei. Ingredientul secret pentru o ciorbă de fasole autentică este tarhonul. Dacă aveți tarhon conservat în oțet, adăugați o lingură de frunze tocate și puțin din oțetul respectiv.\n\nDacă nu vă place tarhonul, puteți folosi mărar sau pătrunjel, dar tarhonul oferă acea notă specifică ardelenească. Mai lăsați să dea un clocot și opriți focul.",
      "Pregătirea pâinii. Alegeți pâini rotunde, negre sau de casă, cu coajă groasă și crocantă. Tăiați un capac în partea superioară a fiecărei pâini. Scobiți cu grijă miezul din interior, lăsând o margine de aproximativ 1-2 cm grosime.\n\nPentru a preveni înmuierea rapidă a pâinii, puneți bolurile de pâine goale în cuptorul încins la 180°C timp de 5-10 minute, până când interiorul devine ușor crocant și sigilat.",
      "Servirea. Așezați bolurile de pâine pe farfurii întinse. Turnați ciorba fierbinte cu polonicul în pâine, având grijă să puneți și boabe și bucăți de carne în fiecare porție.\n\nServiți imediat, alături de ceapă roșie tăiată solzișori și frecată cu sare și oțet. Capacul de pâine poate fi pus alături sau deasupra."
    ],
    nutrition: { calories: 600, protein: 30, carbs: 70, fat: 20 }
  },

  "Tochitură moldovenească": {
    title: "Tochitură Moldovenească cu Mămăligă",
    servings: 4,
    prepTime: "20 min",
    cookTime: "1 oră",
    pricePerServing: 28,
    servingSize: "1 porție (350g)",
    ingredients: [
      { name: "Pulpă de porc", amount: "500g" },
      { name: "Cârnați afumați", amount: "300g" },
      { name: "Ficat de porc", amount: "300g" },
      { name: "Untură/Ulei", amount: "3 linguri" },
      { name: "Vin alb", amount: "100ml" },
      { name: "Usturoi", amount: "5 căței" },
      { name: "Ouă", amount: "4" },
      { name: "Brânză de burduf", amount: "200g", partnerId: 'partner_napolact', purchaseUrl: 'https://www.napolact.ro' }
    ],
    steps: [
      "Pregătirea cărnurilor este primul pas esențial. Tăiați pulpa de porc în cuburi potrivite (cca 3-4 cm), cârnații în rondele groase și ficatul în bucăți similare cu carnea. Este important să păstrați ficatul separat, deoarece timpul său de gătire este mult mai scurt și riscă să se întărească.\n\nÎntr-un ceaun de fontă sau o cratiță cu fund dublu, topiți untura (sau încingeți uleiul). Adăugați bucățile de carne de porc și prăjiți-le la foc mediu, întorcându-le pe toate părțile, până se rumenesc frumos și se sigilează sucurile în interior.",
      
      "Adăugați cârnații și continuați gătirea. Când carnea este aproape făcută (după cca 20-30 de minute), puneți rondele de cârnați în ceaun. Grăsimea și aroma de fum din cârnați se vor topi și vor îmbogăți sosul format.\n\nStingeți totul cu vinul alb și lăsați să fiarbă la foc mic până se evaporă alcoolul. Acoperiți cu un capac și lăsați să se înăbușe în propriul suc până când carnea este foarte fragedă.",
      
      "Gătirea ficatului și finalizarea tochituri. Adăugați ficatul de porc în ultimele 10 minute de gătire. Dacă îl puneți prea devreme, se va întări și va deveni amar. Amestecați ușor.\n\nCând totul este gătit, opriți focul și adăugați usturoiul pisat sau tăiat felii subțiri. Amestecați bine, puneți capacul și lăsați aromele să se infuzeze timp de 5-10 minute. Usturoiul nu trebuie prăjit, ci doar opărit de căldura reziduală.",
      
      "Pregătirea garniturilor obligatorii. În timp ce tochitura se odihnește, faceți o mămăligă moale dar consistentă (priponită). Prăjiți ouăle ochiuri în puțin ulei, având grijă ca gălbenușul să rămână moale pentru a curge peste carne.\n\nRadeți brânza de burduf sau telemeaua veche de oaie într-un bol separat.",
      
      "Montarea farfuriei este un ritual. Așezați o porție generoasă de mămăligă fierbinte în centrul farfuriei sau pe un platou de lemn. Faceți o adâncitură în mijlocul mămăligii sau așezați tochitura în jurul ei.\n\nPuneți oul ochi deasupra mămăligii și presărați din belșug brânză rasă peste tot preparatul. Brânza se va topi ușor de la căldura cărnii.",
      
      "Servirea. Tochitura moldovenească se mănâncă fierbinte, aburindă. Alături, este obligatoriu să aveți murături asortate (gogoșari, castraveți) și, opțional, un pahar de vin roșu sec sau o țuică fiartă înainte de masă."
    ],
    nutrition: { calories: 850, protein: 45, carbs: 30, fat: 55 }
  },

  "Papanși cu smântână și dulceață": {
    title: "Papanași Moldovenești Prăjiți",
    servings: 4,
    prepTime: "20 min",
    cookTime: "15 min",
    pricePerServing: 14,
    servingSize: "1 papanaș (200g)",
    ingredients: [
      { name: "Brânză vaci grasă", amount: "500g", partnerId: 'partner_napolact', purchaseUrl: 'https://www.napolact.ro' },
      { name: "Făină", amount: "300g", partnerId: 'partner_boromir', purchaseUrl: 'https://www.boromir.ro' },
      { name: "Ouă", amount: "2" },
      { name: "Zahăr", amount: "50g" },
      { name: "Bicarbonat", amount: "1 lingură" },
      { name: "Smântână", amount: "400g", partnerId: 'partner_napolact', purchaseUrl: 'https://www.napolact.ro' },
      { name: "Dulceață afine", amount: "200g" }
    ],
    steps: [
      "Pregătirea aluatului începe cu brânza. Folosiți o brânză de vaci grasă și bine scursă de zer. Într-un bol, amestecați brânza cu ouăle, zahărul, un praf de sare, coaja rasă de lămâie și esența de vanilie.\n\nAmestecați bine până la omogenizare, dar nu exagerați pentru a nu lichefia brânza. Adăugați bicarbonatul de sodiu stins cu puțină zeamă de lămâie; acesta va face papanașii pufoase la interior.",
      
      "Adăugați făina treptat. Cantitatea de făină poate varia în funcție de umiditatea brânzei. Încorporați făina până obțineți un aluat moale, ușor lipicios, dar care poate fi modelat.\n\nNu puneți prea multă făină, altfel papanașii vor ieși tari și gumoși ('ca piatra'). Aluatul trebuie să fie cât mai aerat posibil.",
      
      "Modelarea papanașilor. Presărați făină pe blatul de lucru. Împărțiți aluatul în bile egale. Din fiecare bilă mare, rupeți o bucățică mică pentru a forma 'bila' de deasupra (moțul).\n\nBila mare se aplatizează ușor și i se face o gaură în mijloc cu degetul, lărgind-o pentru a obține forma de inel (ca o gogoașă). Această formă ajută la prăjirea uniformă, inclusiv în centru.",
      
      "Prăjirea necesită o baie de ulei. Într-o cratiță adâncă, încălziți uleiul (destul de mult, papanașii trebuie să plutească). Temperatura este critică: focul trebuie să fie mediu spre mic.\n\nDacă uleiul e prea încins, se ard la exterior și rămân cruzi în mijloc. Dacă e prea rece, absorb ulei. Prăjiți inelele și bilele mici timp de 4-5 minute pe fiecare parte, până devin frumos aurii.",
      
      "Scoateți papanașii pe hârtie absorbantă pentru a elimina excesul de ulei. Lăsați-i să se odihnească 1-2 minute.\n\nAsamblarea se face pe farfurie: așezați inelul mare la bază.",
      
      "Servirea este spectaculoasă. Turnați o cantitate generoasă de smântână rece peste inelul fierbinte, umplând gaura din mijloc. Așezați bila mică deasupra.\n\nPeste tot ansamblul, lăsați să curgă dulceață de afine sau vișine (de preferat acrișoară, pentru a contrabalansa prăjeala). Se servesc imediat, calzi, fiind un contrast delicios de temperaturi și texturi."
    ],
    nutrition: { calories: 750, protein: 25, carbs: 80, fat: 35 }
  },

  "Salată de boeuf": {
    title: "Salată de Boeuf Tradițională",
    servings: 10,
    prepTime: "1 oră",
    cookTime: "1 oră",
    pricePerServing: 12,
    servingSize: "1 bol mic (200g)",
    ingredients: [
      { name: "Carne de vită (pulpă)", amount: "700 g" },
      { name: "Cartofi", amount: "1 kg" },
      { name: "Morcovi", amount: "500 g" },
      { name: "Castraveți murați", amount: "400 g" },
      { name: "Gogoșari murați", amount: "300 g" },
      { name: "Maioneză de casă", amount: "500 g" },
      { name: "Muștar", amount: "2 linguri" }
    ],
    steps: [
      "Fierberea corectă este baza. Puneți carnea de vită (întreagă sau bucăți mari) la fiert în apă rece cu sare. Lăsați să fiarbă la foc mic și spumuiți de câte ori este nevoie pentru a avea o supă clară (pe care o puteți folosi la altceva).\n\nCând carnea este pe jumătate fiartă, adăugați rădăcinoasele întregi (morcovii, pătrunjelul, țelina). Cartofii se fierb cel mai bine separat, în coajă, pentru a nu se sfărâma și a nu absorbi prea multă apă, ceea ce ar înmuia salata.",
      
      "Răcirea și tocarea necesită atenție. După ce toate ingredientele au fiert, scoateți-le și lăsați-le să se răcească complet la temperatura camerei. Nu tăiați legumele calde, deoarece se vor zdrobi și vor face pastă.\n\nTăiați carnea, cartofii (curățați de coajă), morcovii și rădăcinoasele în cubulețe mici, egale (aproximativ de dimensiunea unui bob de mazăre). Uniformitatea tăieturii este semnul unei salate de boeuf reușite.",
      
      "Pregătirea murăturilor este crucială pentru echilibrul gustului. Tăiați castraveții și gogoșarii murați în cubulețe la fel de mici ca legumele fierte. Puneți-le într-o sită sau stoarceți-le bine în pumn pentru a elimina excesul de zeamă.\n\nDacă nu stoarceți bine murăturile, zeama lor va subția maioneza și va face salata apoasă în timp. Gustați murăturile; dacă sunt prea acre sau sărate, le puteți clăti scurt sub jet de apă rece înainte de tocare.",
      
      "Amestecarea ingredientelor se face într-un bol mare. Combinați carnea, legumele fierte și murăturile scurse. Adăugați muștarul clasic și amestecați ușor cu mâna sau cu două linguri mari pentru a distribui totul uniform fără a zdrobi cartofii.\n\nMuștarul nu doar dă gust, dar ajută și la emulsionarea și legarea compoziției. Lăsați amestecul să stea 10 minute pentru ca aromele să înceapă să se combine înainte de a pune maioneza.",
      
      "Încorporarea maionezei se face treptat. Păstrați câteva linguri de maioneză pentru decorul final. Restul se adaugă peste amestecul de legume și carne. Amestecați ușor, de jos în sus, până când toate ingredientele sunt îmbrăcate într-un strat fin de sos.\n\nSalata trebuie să fie legată, compactă, dar nu înecată în maioneză. Gustați și potriviți de sare și piper; țineți cont că murăturile și maioneza sunt deja sărate.",
      
      "Montarea și decorul sunt partea artistică. Așezați salata pe un platou și nivelați-o frumos cu o spatulă sau cu lama unui cuțit lat. Îmbrăcați totul într-un strat subțire și uniform din maioneza păstrată.\n\nDecorați festiv folosind fâșii de gogoșar, felii de ou fiert, frunze de pătrunjel sau măsline. Lăsați salata la frigider pentru cel puțin 2-3 ore (sau peste noapte) înainte de servire, pentru ca gusturile să se armonizeze perfect."
    ],
    nutrition: { calories: 400, protein: 15, carbs: 25, fat: 30, sodium: 600 }
  },

  "Zacuscă": {
    title: "Zacuscă de Vinete Tradițională",
    servings: 12,
    prepTime: "2h",
    cookTime: "3h",
    pricePerServing: 8,
    servingSize: "1 borcan mic (200g)",
    ingredients: [
      {name: "Vinete", amount: "3kg"},
      {name: "Gogoșari/Ardei Kapia", amount: "2kg"},
      {name: "Ceapă", amount: "1kg"},
      {name: "Ulei", amount: "500ml"},
      {name: "Suc roșii/Bulion", amount: "700ml"},
      {name: "Foi dafin", amount: "3-4"}
    ],
    steps: [
      "Primul pas este coacerea legumelor, esențială pentru gustul de fum. Coaceți vinetele și ardeii/gogoșarii pe plită, grătar sau în cuptor până când coaja se înnegrește și pulpa este moale. Curățați-le de coajă cât sunt calde și lăsați-le la scurs în site separate pentru cel puțin 1-2 ore. Zeama de la vinete este amară și trebuie eliminată complet.\n\nDupă scurgere, tocați vinetele mărunt (cu un satâr de lemn pentru a nu oxida) sau dați-le prin mașina de tocat, în funcție de textura dorită. Ardeii copți se taie cubulețe mici sau se dau și ei prin mașină.",
      
      "Pregătirea cepei necesită răbdare. Curățați ceapa și tocați-o mărunt sau dați-o prin mașina de tocat. Într-un ceaun mare (tuci), puneți uleiul la încins și adăugați ceapa.\n\nCăliți ceapa la foc mic, amestecând des, până devine sticloasă și moale, fără a se arde. Acest proces poate dura 20-30 de minute. Ceapa bine gătită dă dulceața specifică zacuștei.",
      
      "Adăugați legumele în ordinea corectă. Peste ceapa călită, puneți mai întâi ardeii/gogoșarii copți și amestecați bine. Lăsați să fiarbă împreună 10-15 minute pentru ca aromele să se împrietenească.\n\nAdăugați apoi vinetele tocate. Amestecați energic pentru a omogeniza compoziția. Veți observa că amestecul începe să absoarbă uleiul.",
      
      "Turnați sucul de roșii sau bulionul de calitate. Adăugați sarea, piperul boabe și foile de dafin. Acum începe procesul lung de fierbere.\n\nZacusca trebuie să fiarbă la foc foarte mic, amestecând des (aproape continuu spre final) pentru a nu se prinde de fundul vasului, timp de 2-3 ore. Este gata când uleiul începe să se ridice la suprafață și compoziția scade și devine lucioasă.",
      
      "Sterilizarea borcanelor este obligatorie pentru conservare. Spălați borcanele și capacele foarte bine, apoi sterilizați-le în cuptor la 100°C timp de 15-20 de minute.\n\nTurnați zacusca fierbinte în borcanele calde, având grijă să nu lăsați goluri de aer. Puteți pune un vârf de cuțit sub borcan pentru a preveni șocul termic și spargerea sticlei.",
      
      "Sigilarea și răcirea lentă (dunst). Înfiletați capacele strâns. Așezați borcanele într-o pătură groasă ('paturi') și înveliți-le bine. Lăsați-le să se răcească lent timp de 24-48 de ore.\n\nAceastă răcire lentă continuă procesul de sterilizare și asigură vidarea capacelor. După răcire, depozitați-le în cămară, la loc răcoros și întunecat."
    ],
    nutrition: {calories: 200, protein: 3, carbs: 15, fat: 15}
  },

  "Piftie": {
    title: "Piftie de Porc (Răcituri)",
    servings: 8,
    prepTime: "30 min",
    cookTime: "5 ore",
    pricePerServing: 15,
    servingSize: "1 bol (250g)",
    ingredients: [
      {name: "Picioare porc (adidași)", amount: "4 buc"},
      {name: "Urechi/Cap de porc", amount: "1 kg"},
      {name: "Carne macră (pulpă)", amount: "500 g"},
      {name: "Usturoi", amount: "4 căpățâni"},
      {name: "Sare", amount: "după gust"},
      {name: "Piper boabe", amount: "1 lingură"}
    ],
    steps: [
      "Pregătirea ingredientelor este crucială pentru coagulare. Piftia se bazează pe colagenul natural din oase și piele, nu pe gelatină comercială. Spălați foarte bine picioarele de porc, urechile și capul. Radeți pielea cu un cuțit pentru a fi perfect curată. Dacă este nevoie, pârliți eventualii peri rămași.\n\nPuneți toată carnea într-o oală foarte mare și acoperiți cu apă rece (nivelul apei să fie cu 3-4 degete peste carne).",
      
      "Fierberea trebuie să fie lentă și clară. Puneți oala la foc și așteptați să dea în clocot. Spumuiți de câte ori este nevoie până când supa rămâne limpede. Adăugați sarea și piperul boabe.\n\nReduceți focul la minimum posibil. Supa nu trebuie să clocotească, ci doar să fremete ușor. Lăsați să fiarbă încet, semi-acoperit, timp de 4-5 ore, până când carnea se desprinde singură de pe oase.",
      
      "Verificarea închegării. După ce carnea a fiert, luați o lingură de zeamă și puneți-o pe o farfurioară rece. Introduceți farfurioara la frigider pentru 10 minute. Dacă zeama se transformă în gelatină fermă și lipicioasă, piftia este gata.\n\nDacă nu se încheagă bine, mai lăsați să fiarbă descoperit pentru a scădea lichidul și a concentra colagenul.",
      
      "Aromatizarea cu usturoi. Scoateți carnea, oasele și șoriciul din supă cu o spumieră. Dezosați carnea și tăiați-o în bucăți potrivite. Așezați carnea în boluri sau forme adânci, distribuind egal bucățile de carne macră, șorici și urechi (pentru textură).\n\nÎn zeama rămasă în oală (care trebuie să fie caldă, dar nu clocotită), adăugați usturoiul pisat mărunt. Lăsați să infuzeze timp de 10-15 minute, apoi gustați. Zeama trebuie să fie ușor mai sărată și mai usturoiată decât vă place, deoarece prin răcire gustul se atenuează.",
      
      "Strecurarea și turnarea. Strecurați zeama prin sită fină (sau chiar prin tifon) pentru a elimina usturoiul și impuritățile. Lichidul trebuie să fie limpede și curat.\n\nTurnați zeama strecurată peste carnea din boluri, având grijă să o acopere complet. Dacă vreți, puteți decora fundul bolurilor înainte de a pune carnea cu felii de morcov fiert sau frunze de pătrunjel.",
      
      "Răcirea. Lăsați bolurile să se răcească la temperatura camerei, apoi introduceți-le la frigider (sau într-o cameră foarte rece) pentru cel puțin 12 ore (peste noapte).\n\nPiftia se servește rece, direct din bol sau răsturnată pe platou, presărată cu boia dulce sau iute. Se mănâncă tradițional cu mămăligă caldă sau pâine de casă."
    ],
    nutrition: { calories: 300, protein: 35, carbs: 2, fat: 18, micronutrients: ["Colagen", "Calciu"] }
  },

  "Cozonac": {
    title: "Cozonac Moldovenesc Pufos",
    servings: 12,
    servingSize: "1 felie (100g)",
    prepTime: "1 oră",
    cookTime: "50 min",
    pricePerServing: 6,
    ingredients: [
      { name: "Făină albă superioară (000)", amount: "1 kg", partnerId: 'partner_boromir', purchaseUrl: 'https://www.boromir.ro/faina-superioara-boromir-1kg' },
      { name: "Lapte gras", amount: "500 ml" },
      { name: "Zahăr", amount: "300 g" },
      { name: "Ouă (gălbenușuri)", amount: "8 buc" },
      { name: "Unt gras (82%)", amount: "150 g", partnerId: 'partner_napolact', purchaseUrl: 'https://www.napolact.ro' },
      { name: "Ulei", amount: "50 ml" },
      { name: "Drojdie proaspătă", amount: "50 g" },
      { name: "Nucă", amount: "500 g" },
      { name: "Cacao", amount: "3 linguri" },
      { name: "Arome (rom, vanilie, lămâie)", amount: "după gust" }
    ],
    steps: [
      "Toate ingredientele trebuie să fie calde, la temperatura camerei. Începeți cu maiaua: amestecați drojdia cu o lingură de zahăr, puțin lapte cald și puțină făină până obțineți o pastă. Lăsați-o la loc cald timp de 15 minute până crește și face bule.\n\nÎntre timp, încălziți laptele și dizolvați în el restul de zahăr și aromele (vanilia, coaja de lămâie). Nu fierbeți laptele, doar încălziți-l.",
      
      "Pregătirea emulsiei de ouă. Frecați gălbenușurile cu un praf de sare până se închid la culoare (sarea intensifică galbenul). Sarea este vitală pentru gust.\n\nÎntr-un vas mare (covată), cerneți făina de două ori pentru a o aera. Faceți o gaură în mijloc și turnați maiaua crescută, apoi laptele cald îndulcit și gălbenușurile.",
      
      "Frământarea este secretul cozonacului. Începeți să încorporați făina în lichide. Când aluatul începe să se lege, începeți să adăugați grăsimea (amestecul de unt topit și ulei, călduț).\n\nTurnați grăsimea puțin câte puțin, împăturind aluatul și frământând energic. Frământarea trebuie să dureze cel puțin 30-40 de minute, până când aluatul se desprinde de pe mâini, este elastic și face bășici de aer. Este un efort fizic, dar merită.",
      
      "Dospirea. Acoperiți vasul cu un prosop curat și gros și lăsați-l la loc cald, ferit de curent, timp de aproximativ 60-90 de minute. Aluatul trebuie să își dubleze sau chiar tripleze volumul.\n\nÎntre timp, pregătiți umplutura: bateți albușurile spumă cu puțin zahăr, apoi amestecați-le cu nuca măcinată, cacao și esență de rom până obțineți o pastă tartinabilă.",
      
      "Modelarea. Împărțiți aluatul în două sau patru bucăți (în funcție de tăvi). Ungeți blatul cu ulei. Întindeți fiecare bucată cu mâna (nu cu sucitorul) într-o foaie groasă de 1-2 cm.\n\nÎntindeți umplutura de nucă uniform pe toată suprafața foii. Rulați foaia strâns. Pentru un cozonac împletit, răsuciți două rulouri între ele. Așezați cozonacii în tăvile tapetate cu hârtie de copt.",
      
      "A doua dospire și coacerea. Lăsați cozonacii în tăvi, la loc cald, încă 30-40 de minute să crească frumos. Ungeți-i delicat cu un ou bătut cu puțin lapte și presărați zahăr tos deasupra.\n\nIntroduceți tăvile în cuptorul preîncălzit la 180°C (căldură sus-jos). După 20 de minute, reduceți temperatura la 170°C și mai coaceți 30-35 de minute. Dacă se rumenesc prea tare deasupra, acoperiți-i cu hârtie de copt. Faceți testul cu scobitoarea. Scoateți-i din tăvi și lăsați-i să se răcească pe o parte, pe un grătar, pentru a nu se lăsa."
    ],
    nutrition: { calories: 450, protein: 8, carbs: 55, fat: 22, sugar: 25 }
  }
};
