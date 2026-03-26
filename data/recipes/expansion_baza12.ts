
import { Recipe } from '../../types';

export const EXPANSION_RECIPES: Record<string, Recipe> = {
  // --- EXISTING RECIPES ---
  "Ciorbă Rădăuțeană (Capodopera Originală din Bucovina)": {
    title: "Ciorbă Rădăuțeană (Capodopera Originală din Bucovina)",
    servings: 8, servingSize: "1 bol generos (400ml)", pricePerServing: 18, prepTime: "45 min", cookTime: "2 ore",
    ingredients: [
      {name: "Piept de pui (cu os și piele)", amount: "1kg"}, 
      {name: "Smântână grasă fermentată (30%)", amount: "500g"}, 
      {name: "Gălbenușuri de ou", amount: "5 buc"}, 
      {name: "Usturoi românesc", amount: "2 căpățâni"}, 
      {name: "Oțet de mere/Lămâie", amount: "după gust"}, 
      {name: "Rădăcinoase (țelină, păstârnac, morcov)", amount: "500g mix"},
      {name: "Ceapă", amount: "2 mari"},
      {name: "Ardei capia (pentru culoare)", amount: "1 buc"}
    ],
    steps: [
      "Fierberea supei de aur. Puneți pieptul de pui întreg (cu os și piele pentru colagen) la fiert în 4 litri de apă rece cu sare. Lăsați să dea în clocot și spumuiți constant până supa rămâne limpede.",
      "Adăugarea legumelor. Adăugați legumele întregi (ceapa, morcovul, țelina, păstârnacul) și fierbeți la foc mic 1.5 ore. Legumele vor da dulceață, iar osul va da consistență supei.",
      "Pregătirea cărnii și a bazei. Scoateți carnea și legumele. Strecurați supa prin sită fină pentru a fi clară. Carnea se dezosează, se îndepărtează pielea și se rupe în fâșii lungi (nu cuburi, tradiția cere fâșii). Morcovul fiert se poate pasa înapoi în supă pentru culoare (opțional).",
      "Liezoniul (Dresătura). Într-un bol mare, frecați gălbenușurile cu un praf de sare până se închid la culoare. Adăugați smântâna grasă și amestecați până la omogenizare perfectă, fără cocoloașe.",
      "Temperarea (Secretul anti-brânzire). Luați câte un polonic de supă fierbinte și turnați-l peste amestecul de smântână, amestecând continuu, până când bolul cu smântână este fierbinte. Acest pas previne tăierea compoziției.",
      "Finalizarea și Aromatizarea. Opriți focul sub oală. Turnați amestecul temperat în oală. Adăugați carnea fâșii și usturoiul pisat pastă (frecat cu puțină supă). Potriviți de sare și oțet. Se servește cu ardei iute."
    ],
    nutrition: {calories: 450, protein: 35, carbs: 8, fat: 32}
  },
  "Drob de miel": {
    title: "Drob de Miel Tradițional",
    servings: 10, servingSize: "1 felie (150g)", pricePerServing: 12, prepTime: "40 min", cookTime: "1 oră",
    ingredients: [
      {name: "Măruntaie de miel (ficat, plămâni, inimă, rinichi)", amount: "1kg"},
      {name: "Ceapă verde", amount: "3 legături"},
      {name: "Usturoi verde", amount: "3 legături"},
      {name: "Mărar & Pătrunjel", amount: "câte 2 legături"},
      {name: "Ouă (crude)", amount: "5 buc"},
      {name: "Ouă (fierte)", amount: "4 buc (pentru interior)"},
      {name: "Prapur de miel", amount: "1 buc"}
    ],
    steps: [
      "Fierberea organelor. Spălați bine organele în apă rece cu oțet. Fierbeți-le în apă cu sare și o foaie de dafin. Când sunt fierte, lăsați-le să se răcească.",
      "Tocarea. Tocați organele fierte la cuțit (cubulețe mici) pentru o textură rustică, sau dați-le prin mașina de tocat pentru un drob fin. Textura la cuțit este considerată mai tradițională.",
      "Pregătirea verdețurilor. Tocați mărunt ceapa verde, usturoiul verde, mărarul și pătrunjelul. Căliți ceapa și usturoiul verde în puțin ulei timp de 2-3 minute pentru a le înmuia și a intensifica aroma.",
      "Omogenizarea. Într-un bol mare, amestecați organele tocate cu verdețurile (crude și călite), ouăle crude bătute, sare și mult piper negru. Compoziția trebuie să fie legată.",
      "Montarea în prapur. Spălați prapurul și întindeți-l în tava de chec (sau terină), lăsând marginile să atârne. Puneți jumătate din compoziție. Așezați ouăle fierte întregi pe lungime, în centru. Acoperiți cu restul de compoziție.",
      "Coacerea. Înveliți drobul cu marginile prapurului. Ungeți deasupra cu puțin ulei sau ou bătut. Coaceți la 180°C timp de 50-60 minute până se rumenește bine. Se lasă să se răcească complet în tavă înainte de tăiere."
    ],
    nutrition: {calories: 350, protein: 25, carbs: 5, fat: 25}
  },
  "Bulz ciobănesc": {
    title: "Bulz Ciobănesc pe Grătar",
    servings: 4, servingSize: "1 bulz (300g)", pricePerServing: 10, prepTime: "20 min", cookTime: "15 min",
    ingredients: [{name: "Mămăligă (tare)", amount: "800g"}, {name: "Brânză de burduf", amount: "300g"}, {name: "Unt", amount: "50g"}, {name: "Kaiser/Slănină", amount: "100g"}],
    steps: [
      "Pregătirea mămăligii. Faceți o mămăligă bine fiartă și destul de vârtoasă (tare). Lăsați-o să se răcorească puțin, atât cât să o puteți manevra cu mâna fără să vă ardeți, dar să fie încă modelabilă.",
      "Pregătirea umpluturii. Tăiați kaiserul sau slănina în cubulețe mici și prăjiți-le până devin crocante. Amestecați-le cu brânza de burduf fărâmițată.",
      "Modelarea. Luați o bucată de mămăligă în mână și aplatizați-o. Puneți în mijloc o lingură sănătoasă de brânză de burduf amestecată cu jumări și un cubuleț de unt.",
      "Închiderea. Adunați marginile mămăligii peste umplutură și modelați o bilă rotundă perfect închisă (ca un măr mare). Asigurați-vă că nu există crăpături pe unde să curgă brânza.",
      "Coacerea pe jar. Dacă sunteți la grătar, puneți bilele direct pe grătarul încins. Dacă sunteți acasă, puneți-le într-o tavă la cuptor la 200°C.",
      "Servirea. Coaceți până când mămăliga face o crustă crocantă maronie la exterior și brânza s-a topit complet în interior. Când tăiați bulzul, brânza trebuie să curgă ca o lavă."
    ],
    nutrition: {calories: 600, protein: 20, carbs: 45, fat: 35}
  },
  "Mucenici moldovenești": {
    title: "Mucenici Moldovenești (Sfințișori)",
    servings: 12, servingSize: "1 buc", pricePerServing: 5, prepTime: "1 oră", cookTime: "30 min",
    ingredients: [{name: "Făină", amount: "500g"}, {name: "Drojdie", amount: "25g"}, {name: "Lapte", amount: "250ml"}, {name: "Miere", amount: "200g"}, {name: "Nucă măcinată", amount: "200g"}],
    steps: [
      "Aluatul de cozonac. Activați drojdia cu puțin lapte cald și zahăr. Cerneți făina și frământați un aluat elastic cu laptele, ouăle, untul și aromele. Lăsați la dospit până își dublează volumul.",
      "Modelarea cifrei 8. Împărțiți aluatul în bile egale. Rulați fiecare bilă într-un șnur lung și subțire. Împletiți șnurul în forma cifrei 8.",
      "A doua dospire. Așezați mucenicii în tava tapetată cu hârtie de copt, lăsând spațiu între ei. Mai lăsați-i la crescut 20-30 de minute la loc cald.",
      "Coacerea. Ungeți mucenicii cu ou bătut cu lapte pentru luciu. Coaceți la 180°C timp de 25-30 de minute până devin aurii-bruni.",
      "Siropul și Mierea. Cât sunt încă fierbinți (sau chiar în tavă), ungeți-i din abundență cu miere de albine. Mierea va intra în porii aluatului cald.",
      "Decorul. Imediat după ce i-ați uns cu miere, presărați nucă măcinată din belșug. Nuca se va lipi de miere. Se servesc calzi sau reci, fiind un simbol al belșugului."
    ],
    nutrition: {calories: 400, protein: 8, carbs: 60, fat: 15}
  },
  
  // --- ITALIAN EXPANSION ---
  "Osso Buco": { 
    title: "Osso Buco alla Milanese", 
    servings: 4, 
    prepTime: "20min", 
    cookTime: "2h", 
    ingredients: [
      {name: "Rasol de vită (cu os)", amount: "4 buc"}, 
      {name: "Făină", amount: "50g"}, 
      {name: "Vin alb sec", amount: "150ml"}, 
      {name: "Supă de vită", amount: "500ml"},
      {name: "Legume (ceapă, morcov, țelină)", amount: "mix"},
      {name: "Gremolata (lămâie, pătrunjel, usturoi)", amount: "topping"}
    ], 
    steps: [
      "Pregătirea cărnii. Crestați pielița exterioară a rasolului pentru a nu se strânge la copt. Asezonați carnea cu sare și piper, apoi treceți-o prin făină, scuturând excesul.",
      "Sigilarea. Într-o cratiță grea, încingeți ulei și unt. Prăjiți bucățile de carne pe ambele părți până devin maronii. Scoateți-le pe o farfurie.",
      "Sofrito-ul. În aceeași grăsime, căliți ceapa, morcovul și țelina tocate mărunt până se înmoaie. Adăugați puțină pastă de tomate.",
      "Deglasarea. Turnați vinul alb și lăsați să fiarbă 2 minute, răzuind fundul cratiței. Puneți carnea înapoi peste legume.",
      "Gătirea lentă. Turnați supa de vită fierbinte până acoperă carnea pe trei sferturi. Acoperiți și fierbeți la foc mic (sau la cuptor) timp de 1.5 - 2 ore, până când carnea cade de pe os.",
      "Gremolata. Amestecați coaja rasă de lămâie, pătrunjelul tocat și usturoiul pisat. Presărați peste Osso Buco la servire. Se servește tradițional cu Risotto alla Milanese."
    ], 
    nutrition: {calories: 500, protein:40, carbs:10, fat:25} 
  },
  
  "Cannoli Siciliani": { 
    title: "Cannoli Siciliani", 
    servings: 6, 
    prepTime: "1h", 
    cookTime: "20min", 
    ingredients: [
      {name: "Tuburi Cannoli (coji)", amount: "12 buc"}, 
      {name: "Ricotta scursă bine", amount: "500g"}, 
      {name: "Zahăr pudră", amount: "150g"},
      {name: "Fistic/Ciocolată", amount: "decor"},
      {name: "Coajă de portocală confiată", amount: "opțional"}
    ], 
    steps: [
      "Scurgerea Ricottei. Acesta este cel mai important pas. Puneți ricotta într-o sită fină peste un bol și lăsați-o la frigider peste noapte (sau măcar 4 ore). Dacă ricotta este apoasă, va înmuia cojile crocante.",
      "Crema. Treceți ricotta scursă printr-o sită pentru a o face fină. Amestecați-o cu zahărul pudră și puțină vanilie sau scorțișoară. Încorporați fulgi de ciocolată sau fructe confiate.",
      "Cojile (Dacă le faceți). Frământați un aluat cu vin Marsala, întindeți-l subțire, tăiați cercuri și rulați pe forme metalice. Prăjiți în ulei încins până sunt crocante și cu bule.",
      "Umplerea. Nu umpleți cannoli decât chiar înainte de servire! Folosiți un poș (punga de patiserie) pentru a umple tuburile cu crema de ricotta din ambele capete.",
      "Decorul. Treceți capetele cu cremă prin fistic măcinat sau fulgi de ciocolată. Puteți pune o bucățică de coajă de portocală confiată la capete.",
      "Servirea. Pudrați generos cu zahăr pudră. Cannoli trebuie să fie crocante ('scrockiare') când le mușcați, contrastând cu crema moale."
    ], 
    nutrition: {calories: 350, protein:10, carbs:40, fat:18} 
  },
  
  "Saltimbocca alla Romana": { 
    title: "Saltimbocca alla Romana", 
    servings: 4, 
    prepTime: "10min", 
    cookTime: "10min", 
    ingredients: [
      {name: "Escalop de vițel", amount: "4 felii subțiri"}, 
      {name: "Prosciutto Crudo", amount: "4 felii"}, 
      {name: "Salvie proaspătă", amount: "4 frunze"},
      {name: "Vin alb sec", amount: "100ml"},
      {name: "Unt", amount: "50g"},
      {name: "Făină", amount: "pentru tăvălit"}
    ], 
    steps: [
      "Pregătirea cărnii. Bateți feliile de vițel să fie foarte subțiri. Așezați o felie de Prosciutto Crudo deasupra fiecărei bucăți de carne.",
      "Fixarea. Puneți o frunză de salvie peste prosciutto și fixați totul (carne-prosciutto-salvie) cu o scobitoare, ca și cum ați coase.",
      "Înfăinarea. Treceți feliile prin făină doar pe partea cu carnea (partea de jos), nu și pe partea cu prosciutto. Scuturați excesul.",
      "Prăjirea. Topiți untul într-o tigaie largă. Puneți carnea cu partea cu prosciutto în jos pentru 1 minut să devină crocant, apoi întoarceți. Gătiți rapid (2-3 minute total).",
      "Sosul. Scoateți carnea. Turnați vinul alb în tigaie fierbinte pentru a deglaza sucurile. Lăsați să scadă la jumătate și adăugați un cubuleț de unt rece pentru a lega sosul.",
      "Servirea. Turnați sosul peste carne. Saltimbocca înseamnă 'sare în gură' - se servește imediat, fierbinte."
    ], 
    nutrition: {calories: 300, protein:35, carbs:5, fat:15} 
  },

  "Panna Cotta": {
    title: "Panna Cotta (Budincă de Smântână)",
    servings: 4,
    servingSize: "1 formă (150g)",
    pricePerServing: 8,
    prepTime: "20 min (+4h rece)",
    cookTime: "5 min",
    ingredients: [
      {name: "Smântână lichidă (32%)", amount: "500 ml"},
      {name: "Lapte", amount: "100 ml"},
      {name: "Zahăr", amount: "60 g"},
      {name: "Gelatină foi/pudră", amount: "8 g"},
      {name: "Păstaie de vanilie", amount: "1 buc"},
      {name: "Fructe de pădure/Coulis", amount: "pentru servire"}
    ],
    steps: [
      "Hidratarea gelatinei. Dacă folosiți foi, puneți-le într-un bol cu apă foarte rece timp de 5-10 minute să se înmoaie. Dacă folosiți pudră, amestecați-o cu 30ml apă rece și lăsați-o să se umfle.",
      "Încălzirea bazei. Într-un cratiță, puneți smântâna lichidă, laptele și zahărul. Despicați păstaia de vanilie, răzuiți semințele și adăugați-le în lichid împreună cu păstaia goală.",
      "Infuzarea. Încălziți amestecul la foc mediu până aproape de punctul de fierbere (când apar mici bule pe margine), dar NU lăsați să clocotească. Opriți focul, puneți un capac și lăsați să se infuzeze aromele timp de 10-15 minute.",
      "Dizolvarea gelatinei. Scoateți păstaia de vanilie. Dacă amestecul s-a răcit prea mult, reîncălziți-l ușor (să fie cald, nu fierbinte). Stoarceți foile de gelatină de apă și adăugați-le în crema caldă. Amestecați până se dizolvă complet.",
      "Răcirea și turnarea. Lăsați compoziția să se răcească la temperatura camerei, amestecând ocazional (acest lucru previne separarea grăsimii sau sedimentarea vaniliei la fund). Turnați în forme (ramekins) sau pahare.",
      "Setarea. Puneți formele la frigider pentru cel puțin 4 ore (sau peste noapte) până când panna cotta este fermă și tremură ușor ('wobbly'). Se servește răsturnată sau din pahar, cu sos de fructe."
    ],
    nutrition: {calories: 350, protein: 4, carbs: 20, fat: 30}
  },

  // --- NEW MISSING RECIPES ADDED HERE ---
  "Ovăz cu lapte și fructe": {
    title: "Porridge (Terci de Ovăz cu Fructe)",
    servings: 2, servingSize: "1 bol", pricePerServing: 5, prepTime: "5 min", cookTime: "10 min",
    ingredients: [{name: "Fulgi ovăz", amount: "100g"}, {name: "Lapte", amount: "300ml"}, {name: "Fructe pădure", amount: "100g"}, {name: "Miere", amount: "1 lingură"}, {name: "Scorțișoară", amount: "un praf"}],
    steps: [
      "Pregătirea lichidului: Puneți laptele (sau o combinație de lapte și apă) într-o cratiță pe foc mediu. Adăugați un praf de sare și scorțișoară pentru aromă.",
      "Adăugarea ovăzului: Când lichidul începe să fiarbă ușor, adăugați fulgii de ovăz în ploaie, amestecând continuu.",
      "Fierberea: Reduceți focul la minim. Lăsați să fiarbă încet (simmer) timp de 5-10 minute, amestecând ocazional, până când ovăzul absoarbe lichidul și devine cremos.",
      "Îndulcirea: Când terciul are consistența dorită, opriți focul. Încorporați mierea sau zahărul brun după gust.",
      "Servirea: Turnați ovăzul fierbinte în boluri.",
      "Topping-ul: Adăugați deasupra fructele de pădure proaspete, felii de banană, nuci sau semințe pentru textură. Serviți imediat."
    ],
    nutrition: {calories: 300, protein: 10, carbs: 50, fat: 6}
  },
  "Shakshuka": {
    title: "Shakshuka (Ouă în Sos de Roșii)",
    servings: 2, servingSize: "1 tigaie", pricePerServing: 12, prepTime: "10 min", cookTime: "20 min",
    ingredients: [{name: "Ouă", amount: "4 buc"}, {name: "Roșii cuburi", amount: "1 conservă"}, {name: "Ardei gras", amount: "1 buc"}, {name: "Ceapă", amount: "1 buc"}, {name: "Chimion, Boia", amount: "1 linguriță"}],
    steps: [
      "Pregătirea bazei: Tăiați ceapa solzișori și ardeiul gras cubulețe sau fâșii. Zdrobiți usturoiul și măcinați condimentele (chimionul).",
      "Sotarea: Încingeți uleiul într-o tigaie largă (ideal de fontă). Căliți ceapa și ardeiul la foc mediu până se înmoaie bine (5-7 minute).",
      "Sosul: Adăugați roșiile cuburi (cu tot cu suc) și condimentele (boia, chimion, sare, piper). Lăsați sosul să fiarbă la foc mic 10-15 minute până se îngroașă și aromele se întrepătrund.",
      "Cuiburile: Folosind o lingură, faceți mici adâncituri (cuiburi) în sosul de roșii îngroșat.",
      "Ouăle: Spargeți cu grijă câte un ou în fiecare cuib format. Sărați ușor fiecare ou.",
      "Gătirea finală: Acoperiți tigaia cu un capac și lăsați să fiarbă la foc mic 5-8 minute, până când albușurile sunt coagulate complet, dar gălbenușurile sunt încă moi. Presărați pătrunjel proaspăt și serviți cu pâine prăjită."
    ],
    nutrition: {calories: 350, protein: 18, carbs: 15, fat: 20}
  },
  "Supă de găluște": {
    title: "Supă de Pui cu Găluște Pufoase",
    servings: 6, servingSize: "1 bol", pricePerServing: 8, prepTime: "20 min", cookTime: "1h",
    ingredients: [{name: "Supă pui", amount: "2L"}, {name: "Griș", amount: "100g"}, {name: "Ouă", amount: "2 buc"}, {name: "Morcov", amount: "2 buc"}, {name: "Pătrunjel", amount: "1 legătură"}],
    steps: [
        "Pregătirea bazei de supă. Puneți supa de pui la fiert împreună cu morcovii tăiați rondele sau cubulețe. Lăsați să fiarbă până când legumele sunt aproape moi. Condimentați cu sare și piper după gust.",
        "Separarea ouălor. Spargeți ouăle. Un secret pentru găluște pufoase este să bateți spumă albușurile separat de gălbenușuri cu un praf de sare, apoi să le încorporați ușor. Alternativ, bateți ouăle întregi foarte bine cu furculița.",
        "Formarea compoziției de griș. Adăugați grișul treptat, 'în ploaie', peste ouăle bătute, amestecând continuu. Consistența este cheia: pasta trebuie să curgă greu de pe furculiță, ca o smântână foarte groasă. Nu o faceți beton!",
        "Odihna (Secretul). Lăsați compoziția de griș să stea în bol timp de 10-15 minute. Grișul se va umfla și va absorbi lichidul din ou. Dacă o puneți imediat, găluștele se vor împrăștia.",
        "Fierberea găluștelor. Reduceți focul la minim; supa trebuie să nu clocotească, ci doar să tremure ușor. Înmuiați o linguriță în supă fierbinte, luați din compoziție și dați drumul găluștei în supă. Repetați până terminați pasta.",
        "Sperierea găluștelor. Fierbeți cu capacul pus, la foc mic, timp de 10-15 minute. Când se umflă și se ridică la suprafață, adăugați o cană de apă rece în oală ('sperierea'). Acest șoc termic le face pufoase și le gătește în interior. Opriți focul și presărați pătrunjel."
    ],
    nutrition: {calories: 200, protein: 8, carbs: 20, fat: 8}
  },
  "Borș de sfeclă roșie": {
    title: "Borș de Sfeclă Roșie (Ca la Bunica)",
    servings: 6, servingSize: "1 bol", pricePerServing: 6, prepTime: "20 min", cookTime: "45 min",
    ingredients: [{name: "Sfeclă roșie", amount: "2 buc"}, {name: "Cartofi", amount: "2 buc"}, {name: "Ceapă, Morcov", amount: "câte 1"}, {name: "Borș/Lămâie", amount: "500ml"}, {name: "Leuștean", amount: "1 legătură"}],
    steps: [
        "Pregătirea legumelor. Curățați sfecla roșie și dați-o pe răzătoarea mare sau tăiați-o fâșii subțiri (julienne). Tăiați cartofii cuburi, iar ceapa și morcovul mărunt.",
        "Călirea pentru culoare. Într-o oală, încingeți puțin ulei și căliți ceapa și morcovul 2-3 minute. Adăugați sfecla roșie și mai căliți 2 minute. Acest pas intensifică culoarea rubinie a borșului.",
        "Fierberea. Turnați aproximativ 2 litri de apă fierbinte peste legumele călite. Lăsați să fiarbă la foc mediu timp de 15 minute.",
        "Adăugarea cartofilor. Puneți cartofii în oală. Continuați fierberea încă 15-20 de minute până când toate legumele sunt moi.",
        "Acrirea cu borș. Fierbeți borșul proaspăt separat într-un ibric (să dea un clocot). Turnați-l peste supă. Dacă nu aveți borș, puteți folosi zeamă de lămâie, dar gustul autentic este dat de tărâțe.",
        "Aromatizarea finală. După ce a dat din nou în clocot, opriți focul. Adăugați leușteanul tocat mărunt (esențial pentru borș). Se servește fierbinte, dreasă cu smântână grasă direct în farfurie."
    ],
    nutrition: {calories: 150, protein: 4, carbs: 25, fat: 5}
  },
  "Pui la ceaun": {
    title: "Pui la Ceaun cu Mujdei și Mămăligă",
    servings: 4, servingSize: "1 sfert pui", pricePerServing: 15, prepTime: "10 min", cookTime: "45 min",
    ingredients: [{name: "Pui întreg", amount: "1.5 kg"}, {name: "Ulei/Untură", amount: "mult"}, {name: "Usturoi", amount: "2 căpățâni"}, {name: "Mălai", amount: "pt mămăligă"}],
    steps: ["Tăiați puiul bucăți, sărați-l bine. Încingeți mult ulei într-un ceaun.", "Prăjiți puiul sub capac la foc mediu până e pătruns, apoi fără capac să fie crocant.", "Faceți mujdei și mămăligă."],
    nutrition: {calories: 600, protein: 45, carbs: 50, fat: 35}
  },
  "Chiftele marinate": {
    title: "Chiftele Marinate în Sos de Roșii",
    servings: 4, servingSize: "4 chiftele", pricePerServing: 14, prepTime: "30 min", cookTime: "30 min",
    ingredients: [{name: "Carne tocată", amount: "500g"}, {name: "Sos roșii", amount: "500ml"}, {name: "Foi dafin", amount: "2"}, {name: "Usturoi", amount: "3 căței"}, {name: "Făină", amount: "1 lingură"}],
    steps: ["Faceți chiftelele (carne, ou, pâine, condimente) și prăjiți-le.", "Faceți un sos din suc de roșii, dafin, usturoi, puțin zahăr și făină (pentru consistență).", "Fierbeți chiftelele în sos 15 minute. Serviți cu piure."],
    nutrition: {calories: 500, protein: 25, carbs: 30, fat: 25}
  },
  "Macaroni and Cheese": {
    title: "Mac & Cheese (Macaroane cu Brânză la Cuptor)",
    servings: 6, servingSize: "1 porție (300g)", pricePerServing: 18, prepTime: "20 min", cookTime: "35 min",
    ingredients: [
      {name: "Macaroane scurte", amount: "500g"},
      {name: "Brânză Cheddar maturată", amount: "300g"},
      {name: "Brânză Mozzarella/Gruyere", amount: "150g"},
      {name: "Lapte integral", amount: "1L"},
      {name: "Unt", amount: "80g (50g sos, 30g topping)"},
      {name: "Făină", amount: "50g"},
      {name: "Muștar Dijon/Pudră", amount: "1 linguriță"},
      {name: "Pesmet Panko", amount: "50g"},
      {name: "Paprika afumată", amount: "un praf"}
    ],
    steps: [
      "Pastele: Fierbeți macaroanele în apă cu sare cu 2 minute mai puțin decât scrie pe pachet ('al dente' ferm). Ele se vor găti final în sos la cuptor. Scurgeți-le și amestecați-le cu puțin unt să nu se lipească.",
      "Roux (Baza): Într-un cratiță, topiți 50g unt. Adăugați făina și gătiți-o la foc mediu 2-3 minute, amestecând continuu, până miroase a biscuiți copți (pentru a elimina gustul de făină crudă).",
      "Sosul Alb: Turnați laptele cald treptat, polonic cu polonic, amestecând energic cu telul pentru a evita cocoloașele. Fierbeți sosul 5-8 minute până se îngroașă și acoperă spatele lingurii.",
      "Aromatizarea: Opriți focul (Critic! Dacă fierbeți brânza, se taie). Adăugați muștarul (intensifică gustul de brânză), sarea, piperul și un praf de nucșoară sau paprika.",
      "Mornay: Adăugați brânzeturile rase treptat în sosul fierbinte, amestecând până se topesc complet și obțineți o cremă fină și elastică.",
      "Asamblarea: Turnați sosul peste paste și amestecați. Transferați totul într-o tavă unsă cu unt.",
      "Crusta: Amestecați pesmetul Panko cu 30g unt topit și presărați-l deasupra. Coaceți la 200°C timp de 20-25 minute până când sosul bolborosește pe margini și crusta este aurie."
    ],
    nutrition: {calories: 700, protein: 28, carbs: 65, fat: 40}
  },
  "Spaghetti Aglio e Olio": {
    title: "Spaghetti Aglio e Olio e Peperoncino",
    servings: 2, servingSize: "1 farfurie", pricePerServing: 5, prepTime: "5 min", cookTime: "10 min",
    ingredients: [{name: "Spaghetti", amount: "250g"}, {name: "Usturoi", amount: "4 căței"}, {name: "Ulei măsline", amount: "100ml"}, {name: "Ardei iute uscat", amount: "1 buc"}, {name: "Pătrunjel", amount: "1 legătură"}],
    steps: [
      "Fierberea pastelor: Puneți o oală mare cu apă la fiert. Când clocotește, adăugați sare generoasă și pastele. Fierbeți-le 'al dente', cu 1-2 minute mai puțin decât scrie pe pachet. Păstrați o cană de apă de la fiert.",
      "Pregătirea ingredientelor: În timp ce apa fierbe, curățați usturoiul și tăiați-l în felii subțiri (lamele). Tocați mărunt ardeiul iute (fără semințe dacă nu doriți foarte iute) și pătrunjelul proaspăt.",
      "Infuzarea uleiului: Într-o tigaie largă și rece, puneți uleiul de măsline, feliile de usturoi și ardeiul iute. Porniți focul la intensitate mică spre medie.",
      "Gătirea usturoiului: Lăsați usturoiul să se prăjească încet. Supravegheați-l atent! Când devine auriu deschis și marginile încep să sfârâie, opriți imediat focul sau luați tigaia de pe flacără pentru a nu-l arde (devine amar).",
      "Emulsionarea: Adăugați un polonic din apa de amidon a pastelor peste uleiul fierbinte (atenție la stropi!). Mișcați tigaia energic pentru a crea o emulsie (un sos legat).",
      "Finalizarea: Adăugați pastele scurse direct în tigaie. Porniți focul mic și amestecați continuu 1-2 minute, adăugând pătrunjelul tocat, până când sosul îmbracă pastele. Serviți imediat."
    ],
    nutrition: {calories: 500, protein: 10, carbs: 70, fat: 20}
  },
  "Fish Tacos": {
    title: "Fish Tacos (Tacos cu Pește Crocant)",
    servings: 4, servingSize: "3 tacos", pricePerServing: 18, prepTime: "20 min", cookTime: "15 min",
    ingredients: [{name: "File pește alb", amount: "500g"}, {name: "Tortilla", amount: "12 buc"}, {name: "Varză", amount: "tocată"}, {name: "Sos alb (maioneză, iaurt, lime)", amount: "100ml"}, {name: "Făină/Pesmet", amount: "pt pane"}],
    steps: ["Tăiați peștele fâșii. Dați prin făină condimentată și prăjiți.", "Încălziți tortillas. Puneți pește, varză tocată și sos alb.", "Stoarceți lime deasupra."],
    nutrition: {calories: 450, protein: 25, carbs: 45, fat: 18}
  },
  "Korma de pui": {
    title: "Chicken Korma (Curry Alb Cremos)",
    servings: 4, servingSize: "1 bol", pricePerServing: 25, prepTime: "20 min", cookTime: "40 min",
    ingredients: [{name: "Pui", amount: "600g"}, {name: "Iaurt/Smântână cocos", amount: "200g"}, {name: "Caju/Migdale", amount: "100g (măcinate)"}, {name: "Ceapă", amount: "2"}, {name: "Cardamom", amount: "4 păstăi"}],
    steps: ["Căliți ceapa și mixați-o pastă. Prăjiți puiul cu cardamom.", "Adăugați pasta de ceapă, pasta de nuci și iaurtul.", "Fierbeți la foc mic până sosul e gros și carnea fragedă. E un curry dulceag, nu iute."],
    nutrition: {calories: 600, protein: 35, carbs: 15, fat: 40}
  },
  "Supă cremă de ciuperci": {
    title: "Supă Cremă de Ciuperci cu Crutoane",
    servings: 4, servingSize: "1 bol", pricePerServing: 10, prepTime: "15 min", cookTime: "30 min",
    ingredients: [{name: "Ciuperci", amount: "1kg"}, {name: "Ceapă", amount: "2"}, {name: "Cartof", amount: "1"}, {name: "Smântână lichidă", amount: "200ml"}, {name: "Unt", amount: "50g"}],
    steps: [
        "Pregătirea bazei. Curățați ciupercile și tăiați-le felii (nu le spălați în multă apă). Tocați ceapa și usturoiul mărunt. Tăiați cartoful cuburi (acesta va îngroșa supa natural).",
        "Sotarea (Dezvoltarea aromei). Topiți untul într-o oală. Căliți ceapa până devine sticloasă. Adăugați ciupercile și gătiți-le la foc mediu-mare până când apa lăsată de ele se evaporă complet și încep să se rumenească. Rumenirea ciupercilor este esențială pentru un gust profund ('umami').",
        "Fierberea. Păstrați câteva felii de ciuperci sotate pentru decor. Peste restul, adăugați cartoful și turnați supă de legume sau apă fierbinte cât să acopere totul bine.",
        "Gătirea lentă. Fierbeți cu capac timp de 15-20 de minute, până când cartofii sunt foarte moi.",
        "Blendarea. Folosiți un blender vertical pentru a pasa supa până devine fină și cremoasă. Dacă este prea groasă, mai adăugați puțin lichid fierbinte.",
        "Finisarea. Adăugați smântâna lichidă, sare, piper și un praf de nucșoară. Mai dați un clocot scurt. Serviți supa fierbinte, decorată cu ciupercile păstrate, crutoane crocante și, opțional, câțiva stropi de ulei de trufe."
    ],
    nutrition: {calories: 300, protein: 8, carbs: 20, fat: 22}
  },
  "Clam Chowder": {
    title: "New England Clam Chowder (Supă de Scoici)",
    servings: 4, servingSize: "1 bol", pricePerServing: 25, prepTime: "20 min", cookTime: "30 min",
    ingredients: [{name: "Scoici (conserve/proaspete)", amount: "400g"}, {name: "Cartofi", amount: "3"}, {name: "Bacon", amount: "100g"}, {name: "Smântână lichidă", amount: "300ml"}, {name: "Ceapă", amount: "1"}],
    steps: [
        "Baza crocantă (Rendering). Tăiați baconul în cubulețe mici. Puneți-l într-o oală rece și porniți focul mediu. Lăsați grăsimea să se topească încet și baconul să devină crocant. Scoateți baconul pe o farfurie, lăsând grăsimea în oală.",
        "Sotarea legumelor. În grăsimea de bacon rămasă, adăugați ceapa tocată și țelina (opțional). Căliți-le până se înmoaie, fără să se rumenească prea tare.",
        "Formarea consistenței (Roux). Presărați o lingură de făină peste ceapă și amestecați timp de 1 minut pentru a găti făina. Aceasta va îngroșa supa. Turnați zeama de la scoici (sau supă de pește/apă) treptat, amestecând continuu.",
        "Fierberea cartofilor. Adăugați cartofii tăiați cuburi mici și o foaie de dafin. Fierbeți la foc mediu timp de 12-15 minute, până când cartofii sunt fragezi (se sfărâmă ușor).",
        "Adăugarea scoicilor. Când cartofii sunt gata, adăugați carnea de scoici și smântâna lichidă (sau un amestec de lapte și smântână).",
        "Finalizarea. Lăsați supa să se încălzească bine, dar NU o lăsați să clocotească violent după ce ați pus smântâna (pentru a nu se tăia). Asezonați cu piper negru și cimbru. Serviți cu baconul crocant presărat deasupra și biscuiți sărați (crackers)."
    ],
    nutrition: {calories: 450, protein: 20, carbs: 25, fat: 30}
  },
  "Galaktoboureko": {
    title: "Galaktoboureko (Plăcintă Grecească cu Griș)",
    servings: 8, servingSize: "1 bucată", pricePerServing: 12, prepTime: "40 min", cookTime: "45 min",
    ingredients: [{name: "Foi plăcintă", amount: "1 pachet"}, {name: "Griș", amount: "150g"}, {name: "Lapte", amount: "1L"}, {name: "Zahăr", amount: "200g"}, {name: "Ouă", amount: "4"}, {name: "Unt", amount: "200g"}],
    steps: [
      "Pregătirea siropului. Puneți zahărul, apa și coaja de lămâie la fiert. Lăsați să fiarbă 5 minute până se leagă puțin. Lăsați-l să se răcească COMPLET. Acest pas este crucial: sirop rece peste plăcintă fierbinte.",
      "Baza de cremă. Încălziți laptele cu jumătate din zahăr și vanilie. Când e fierbinte, turnați grișul în ploaie, amestecând continuu cu telul să nu facă cocoloașe. Fierbeți până se îngroașă ca o budincă.",
      "Finalizarea cremei. Luați crema de pe foc și încorporați untul. Într-un bol separat, bateți ouăle cu restul de zahăr până se albesc. Turnați ouăle peste crema de griș călduță (nu fierbinte!), amestecând energic.",
      "Pregătirea tăvii. Ungeți tava cu unt topit. Așezați jumătate din foile de plăcintă, ungând fiecare foaie individual cu unt. Lăsați marginile să atârne în afară.",
      "Umplerea. Turnați crema de griș peste foi. Aduceți marginile foilor peste cremă. Așezați restul de foi deasupra, ungându-le. Crestați doar foile de sus cu un cuțit ascuțit în pătrate.",
      "Coacerea și însiroparea. Coaceți la 160-170°C timp de 45-50 de minute până devine aurie-arămie. Imediat ce o scoateți din cuptor, turnați siropul rece peste plăcinta fierbinte. Lăsați să absoarbă minim 2 ore."
    ],
    nutrition: {calories: 400, protein: 10, carbs: 50, fat: 18}
  },
  "Paste cu fructe de mare": {
    title: "Spaghetti ai Frutti di Mare",
    servings: 4, servingSize: "1 farfurie", pricePerServing: 30, prepTime: "15 min", cookTime: "15 min",
    ingredients: [{name: "Spaghetti", amount: "400g"}, {name: "Mix fructe de mare", amount: "500g"}, {name: "Roșii cherry", amount: "200g"}, {name: "Vin alb", amount: "100ml"}, {name: "Usturoi", amount: "3 căței"}],
    steps: [
      "Pregătirea: Spălați fructele de mare. Dacă folosiți congelate, decongelați-le și scurgeți-le bine. Tocați usturoiul mărunt și roșiile cherry în jumătăți. Puneți pastele la fiert în apă cu sare.",
      "Aromatizarea uleiului: Într-o tigaie largă, încingeți uleiul de măsline și căliți usturoiul (și opțional ardei iute) timp de 30-60 de secunde, până devine parfumat, fără a se arde.",
      "Gătirea fructelor de mare: Adăugați mixul de fructe de mare în tigaie. Gătiți la foc iute timp de 2-3 minute. Nu le gătiți excesiv pentru a nu deveni gumoase.",
      "Sosul: Turnați vinul alb și lăsați-l să se evapore alcoolul (cca 1-2 minute). Adăugați roșiile cherry (sau sos de roșii) și lăsați să fiarbă la foc mediu 4-5 minute, până se formează un sos ușor.",
      "Combinarea: Când pastele sunt 'al dente', scurgeți-le (păstrând puțină apă) și puneți-le în tigaie peste sos. Adăugați puțină apă de la paste dacă sosul e prea scăzut.",
      "Servirea: Amestecați totul pe foc timp de 1 minut pentru ca aromele să se pătrundă. Opriți focul, adăugați pătrunjel proaspăt tocat și serviți imediat, opțional cu puțină zeamă de lămâie."
    ],
    nutrition: {calories: 450, protein: 30, carbs: 60, fat: 10}
  },
  "Creveți Saganaki": {
    title: "Creveți Saganaki (Creveți cu Feta și Roșii)",
    servings: 2, servingSize: "1 tigaie", pricePerServing: 35, prepTime: "10 min", cookTime: "15 min",
    ingredients: [{name: "Creveți", amount: "400g"}, {name: "Sos roșii", amount: "300ml"}, {name: "Brânză Feta", amount: "150g"}, {name: "Ouzo/Vin", amount: "50ml"}, {name: "Oregano", amount: "1 linguriță"}],
    steps: ["Căliți creveții rapid. Scoateți-i. Faceți sosul de roșii cu ceapă și usturoi.", "Puneți creveții înapoi. Sfărâmați feta deasupra.", "Mai lăsați 2-3 min până se topește brânza. Serviți cu pâine."],
    nutrition: {calories: 400, protein: 35, carbs: 10, fat: 20}
  },
  "Scoici în sos de vin": {
    title: "Scoici Saint Jacques / Vongole în Vin Alb",
    servings: 2, servingSize: "1 bol", pricePerServing: 40, prepTime: "20 min", cookTime: "10 min",
    ingredients: [{name: "Scoici", amount: "1kg"}, {name: "Vin alb sec", amount: "200ml"}, {name: "Usturoi", amount: "4 căței"}, {name: "Unt", amount: "50g"}, {name: "Pătrunjel", amount: "1 legătură"}],
    steps: ["Căliți usturoiul în unt. Adăugați scoicile și vinul.", "Acoperiți cu capac și fierbeți la foc iute 5-7 min până se deschid.", "Aruncați-le pe cele închise. Presărați pătrunjel."],
    nutrition: {calories: 300, protein: 25, carbs: 5, fat: 15}
  },
  "Burger vegetal": {
    title: "Burger Vegetal (Din Fasole și Ciuperci)",
    servings: 4, servingSize: "1 burger", pricePerServing: 15, prepTime: "30 min", cookTime: "15 min",
    ingredients: [{name: "Fasole neagră (conservă)", amount: "400g"}, {name: "Ciuperci", amount: "200g"}, {name: "Ovăz/Pesmet", amount: "100g"}, {name: "Chifle", amount: "4 buc"}, {name: "Ceapă", amount: "1"}],
    steps: [
      "Pregătirea bazei. Scurgeți și clătiți fasolea neagră. Într-un bol mare, zdrobiți-o cu furculița sau presa de cartofi, lăsând și bucăți întregi pentru textură.",
      "Sotarea legumelor. Tocați ceapa și ciupercile foarte mărunt. Căliți-le într-o tigaie cu puțin ulei până când lichidul lăsat de ciuperci se evaporă complet. Acest pas este crucial pentru ca burgerii să nu fie apoși.",
      "Legarea compoziției. Adăugați legumele călite peste fasolea zdrobită. Încorporați ovăzul (sau pesmetul), usturoiul pisat, boiaua afumată, sarea și piperul. Dacă compoziția e prea umedă, mai adăugați ovăz.",
      "Formarea. Lăsați compoziția să se odihnească 10 minute. Cu mâinile ușor umezite, modelați 4 chiftele mari și ferme.",
      "Gătirea. Încingeți puțin ulei într-o tigaie antiaderentă. Prăjiți chiftelele la foc mediu timp de 4-5 minute pe fiecare parte, până devin crocante și maronii. Se pot coace și la cuptor la 200°C timp de 20 minute.",
      "Asamblarea. Tăiați chiflele și prăjiți-le ușor. Ungeți cu sos (ketchup/maioneză vegană), puneți o foaie de salată, chifteaua fierbinte, felii de roșie și ceapă roșie. Serviți imediat."
    ],
    nutrition: {calories: 400, protein: 15, carbs: 60, fat: 10}
  },
  "Ouă umplute": {
    title: "Ouă Umplute Clasice (Cu Pate sau Maioneză)",
    servings: 6, servingSize: "2 jumătăți", pricePerServing: 5, prepTime: "20 min", cookTime: "10 min",
    ingredients: [{name: "Ouă", amount: "6 buc"}, {name: "Pate ficat/Maioneză", amount: "100g"}, {name: "Muștar", amount: "1 linguriță"}, {name: "Mărar/Pătrunjel", amount: "decor"}],
    steps: ["Fierbeți ouăle tari. Tăiați-le în jumătate.", "Mixați gălbenușurile cu pate, maioneză, muștar, sare, piper.", "Umpleți albușurile (cu poșul sau lingurița). Decorați."],
    nutrition: {calories: 150, protein: 8, carbs: 1, fat: 12}
  },
  "Rulouri de șuncă": {
    title: "Rulouri de Șuncă cu Salată de Boeuf/Hrean",
    servings: 6, servingSize: "2 rulouri", pricePerServing: 8, prepTime: "15 min", cookTime: "0 min",
    ingredients: [{name: "Șuncă Praga (felii mari)", amount: "12 felii"}, {name: "Salată Boeuf sau Cremă brânză", amount: "300g"}, {name: "Hrean (opțional)", amount: "1 lingură"}, {name: "Aspic", amount: "decor"}],
    steps: ["Întindeți felia de șuncă. Puneți o lingură de umplutură la un capăt.", "Rulați strâns. Așezați pe platou cu îmbinarea în jos.", "Puteți glazura cu aspic pentru luciu."],
    nutrition: {calories: 200, protein: 12, carbs: 5, fat: 15}
  },
  "Tartine cu somon": {
    title: "Tartine cu Somon Fumé și Cremă de Brânză",
    servings: 6, servingSize: "2 tartine", pricePerServing: 15, prepTime: "10 min", cookTime: "0 min",
    ingredients: [{name: "Pâine toast/Baghetă", amount: "12 felii"}, {name: "Cremă de brânză", amount: "200g"}, {name: "Somon afumat", amount: "200g"}, {name: "Mărar", amount: "decor"}, {name: "Lămâie", amount: "felii"}],
    steps: ["Prăjiți pâinea (opțional). Ungeți cu cremă de brânză.", "Puneți o felie de somon deasupra. Decorați cu mărar și o feliuță mică de lămâie."],
    nutrition: {calories: 180, protein: 10, carbs: 15, fat: 8}
  },
  "Chec aperitiv": {
    title: "Chec Aperitiv cu Șuncă și Cașcaval",
    servings: 8, servingSize: "2 felii", pricePerServing: 10, prepTime: "20 min", cookTime: "45 min",
    ingredients: [{name: "Ouă", amount: "5 buc"}, {name: "Făină", amount: "200g"}, {name: "Șuncă/Kaiser", amount: "200g"}, {name: "Cașcaval", amount: "200g"}, {name: "Măsline/Ardei", amount: "100g"}, {name: "Praf copt", amount: "1 plic"}],
    steps: ["Bateți ouăle. Adăugați făina și praful de copt.", "Încorporați șunca, cașcavalul și legumele tăiate cubulețe.", "Turnați în tavă de chec. Coaceți la 180°C timp de 40-45 min."],
    nutrition: {calories: 300, protein: 15, carbs: 20, fat: 18}
  }
};
