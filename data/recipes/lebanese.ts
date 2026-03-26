
import { Recipe } from '../../types';

export const LEBANESE_RECIPES: Record<string, Recipe> = {
  "Hummus": {
    title: "Hummus Libanez Cremor (Rețeta Autentică)",
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

  "Tabbouleh": {
    title: "Tabbouleh (Salată de Pătrunjel)",
    servings: 4,
    servingSize: "1 bol mic (200g)",
    pricePerServing: 12,
    prepTime: "30 min",
    cookTime: "0 min",
    ingredients: [
      {name: "Pătrunjel plat", amount: "4 legături mari"},
      {name: "Roșii tari", amount: "3 buc"},
      {name: "Ceapă verde", amount: "1 legătură"},
      {name: "Bulgur fin (nr 1)", amount: "50 g"},
      {name: "Mentă proaspătă", amount: "1 legătură mică"},
      {name: "Lămâie", amount: "3 buc (sucul)"},
      {name: "Ulei măsline extravirgin", amount: "100 ml" },
      {name: "Condimente (Bahar)", amount: "un praf"}
    ],
    steps: [
      "Pregătirea bulgurului. Spălați bulgurul fin și puneți-l într-un bol mic. Stoarceți zeama de la 2 lămâi peste el. Nu folosiți apă!\n\nLăsați bulgurul să se înmoaie și să se gătească la rece direct în sucul de lămâie timp de 20 de minute. Astfel, va absorbi aciditatea plăcută și va rămâne ferm, nu apos.",
      
      "Pregătirea pătrunjelului (Arta răbdării). Tabbouleh este o salată de ierburi, nu una de cereale. Pătrunjelul trebuie spălat și, foarte important, USCAT perfect înainte de tocare (folosiți o centrifugă de salată). Umezeala va face salata fleașcă.\n\nÎndepărtați cozile groase. Tocați frunzele extrem de fin folosind un cuțit foarte ascuțit. Tăiați o singură dată (nu tocați mărunt repetat ca la tocana de legume) pentru a nu zdrobi frunzele și a le înnegri.",
      
      "Pregătirea legumelor. Tăiați roșiile în cubulețe minuscule (brunoise), eliminând semințele și excesul de zeamă. Tocați ceapa verde (partea albă și puțin din cea verde) foarte fin. Tocați menta proaspătă.\n\nToate ingredientele trebuie să aibă aproximativ aceeași dimensiune mică și elegantă.",
      
      "Asamblarea. Într-un bol larg, puneți pătrunjelul și menta. Adăugați roșiile și ceapa deasupra. Presărați bulgurul înmuiat în lămâie peste legume.\n\nAdăugați sarea și '7 spices' libaneze (baharat) sau ienibahar măcinat pentru acea notă specifică orientală.",
      
      "Dressing-ul final. Turnați ulei de măsline extravirgin chiar înainte de servire. Tabbouleh nu trebuie să înoate în zeamă, dar trebuie să fie lucioasă și bine unsă.\n\nAmestecați delicat cu mâna sau două linguri.",
      
      "Servirea. Se servește imediat, proaspătă. Tradițional, în Liban, Tabbouleh se mănâncă folosind frunze de salată Romană sau foi de varză albă pe post de 'lingură' (scoops). Este un acompaniament perfect pentru grătar sau Kibbeh."
    ],
    nutrition: {calories: 200, protein: 5, carbs: 15, fat: 15, micronutrients: ["Vitamin C", "Vitamin K"] }
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

  "Shawarma": {
    title: "Shawarma de Pui (Marinată în Iaurt)",
    servings: 4,
    servingSize: "1 lipie (350g)",
    pricePerServing: 20,
    prepTime: "30 min (+4h marinare)",
    cookTime: "20 min",
    ingredients: [
      {name: "Pulpe pui dezosate", amount: "800 g"},
      {name: "Lipii libaneze", amount: "4 buc"},
      {name: "Iaurt gras", amount: "200 g"},
      {name: "Usturoi", amount: "6 căței"},
      {name: "Mix Shawarma", amount: "Cardamom, Scortișoară, Chimen"},
      {name: "Zeamă lămâie", amount: "1 buc"},
      {name: "Cartofi, Varză, Castraveți murați", amount: "garnitură"}
    ],
    steps: [
      "Marinada este esența gustului. Într-un bol, amestecați iaurtul, zeama de lămâie, mult usturoi pisat, ulei de măsline și oțet.\n\nAdăugați condimentele specifice: chimen, coriandru, boia, curcuma, un praf de scorțișoară, cardamon și cuișoare. Acest mix complex ('7 spices') dă aroma autentică de Orient Mijlociu.",
      
      "Pregătirea cărnii. Folosiți pulpe de pui dezosate (fără piele), deoarece sunt mai suculente decât pieptul. Tăiați-le în fâșii lungi sau lăsați-le întregi dacă le gătiți la cuptor.\n\nAmestecați carnea cu marinada, acoperiți și lăsați la frigider minim 4 ore, sau ideal peste noapte. Iaurtul va frăgezi carnea incredibil.",
      
      "Gătirea (Metoda Tigaie/Cuptor). Pentru a imita rotisorul, aveți două opțiuni. Varianta 1: Încingeți o tigaie grill și prăjiți carnea marinată la foc iute până se carbonizează ușor pe margini.\n\nVarianta 2 (Cuptor): Așezați carnea pe un grătar în cuptor la temperatură maximă, sub grill, până se rumenește bine. După gătire, lăsați carnea să se odihnească 5 minute, apoi tăiați-o în fâșii subțiri.",
      
      "Sosul de usturoi (Toum). În timp ce carnea se odihnește, faceți un sos rapid amestecând usturoi pisat cu maioneză, iaurt și lămâie (sau faceți Toum autentic doar din usturoi și ulei, dacă aveți răbdare).",
      
      "Asamblarea. Luați o lipie libaneză și desfaceți-o (dacă e groasă) sau lăsați-o așa. Ungeți generos cu sosul de usturoi pe mijloc.\n\nAșezați un strat de carne fierbinte. Adăugați cartofi prăjiți (da, în interior!), felii subțiri de roșii, castraveți murați tăiați bastonașe și, opțional, puțină varză tocată frecată cu sumac.",
      
      "Rularea și servirea. Rulați lipia strâns, îndoind capătul de jos pentru a nu curge sosul. Pentru un plus de textură, puneți shawarma rulată înapoi în tigaia fierbinte (sau presă de panini) pentru 1 minut, pentru a face lipia crocantă.\n\nTăiați-o în două pe diagonală și serviți cu extra sos de usturoi."
    ],
    nutrition: {calories: 750, protein: 40, carbs: 60, fat: 35, sodium: 1200}
  },

  "Baba Ganoush": {
    title: "Baba Ganoush (Salată de Vinete cu Rodie)",
    servings: 4,
    servingSize: "1 bol (200g)",
    pricePerServing: 10,
    prepTime: "15 min",
    cookTime: "30 min",
    ingredients: [
      {name: "Vinete mari", amount: "2 buc"},
      {name: "Tahini", amount: "3 linguri"},
      {name: "Usturoi", amount: "2 căței"},
      {name: "Lămâie", amount: "1 buc"},
      {name: "Rodie", amount: "boabe pt decor"},
      {name: "Ulei de măsline", amount: "generos"},
      {name: "Pătrunjel/Mentă", amount: "tocat"}
    ],
    steps: [
      "Coacerea vinetelor (Aroma de fum). Cheia unui Baba Ganoush reușit este aroma de fum (smokiness). Coaceți vinetele întregi direct pe flacăra aragazului sau pe un grătar cu cărbuni, întorcându-le des, până când coaja este carbonizată complet și pulpa este moale și se prăbușește.\n\nDacă folosiți cuptorul, nu veți obține același gust de fum, dar puteți adăuga puțină boia afumată.",
      
      "Scurgerea. Puneți vinetele coapte într-o sită și lăsați-le să se răcească și să se scurgă de lichidul amar timp de 15-20 minute. Curățați coaja arsă cu grijă, încercând să păstrați vinata întreagă. Nu o spălați sub apă, veți pierde aroma!",
      
      "Mărunțirea. Puneți pulpa de vinete pe un tocător. Tocați-o grosier cu un cuțit sau zdrobiți-o cu o furculiță. Spre deosebire de salata de vinete românească, Baba Ganoush poate avea textură, nu trebuie să fie pastă fină (deși se poate blenda dacă preferați).",
      
      "Asezonarea. Într-un bol, amestecați pulpa de vinete cu usturoiul pisat, pasta tahini și zeama de lămâie. Tahini-ul va albi compoziția și îi va da cremozitate.\n\nAdăugați sare după gust. Unii adaugă și puțin iaurt grecesc pentru o culoare mai deschisă, dar rețeta tradițională este vegană.",
      
      "Montarea. Întindeți salata pe o farfurie plată. Faceți șanțuri cu furculița. Turnați ulei de măsline extravirgin din abundență.",
      
      "Decorul specific. Presărați boabe proaspete de rodie (pentru o explozie dulce-acrișoară) și pătrunjel sau mentă tocată. Rodia oferă un contrast vizual și gustativ superb cu vinetele afumate. Se servește cu lipie crocantă."
    ],
    nutrition: { calories: 180, protein: 4, carbs: 15, fat: 12, fiber: 6 }
  },

  "Fattoush": {
    title: "Fattoush (Salată cu Lipie Crocantă)",
    servings: 4,
    servingSize: "1 bol (250g)",
    pricePerServing: 14,
    prepTime: "20 min",
    cookTime: "5 min",
    ingredients: [
      {name: "Lipie libaneză", amount: "2 buc"},
      {name: "Salată verde/Romană", amount: "1 căpățână"},
      {name: "Roșii", amount: "3 buc"},
      {name: "Castraveți", amount: "3 mici"},
      {name: "Ridichi", amount: "4 buc"},
      {name: "Ceapă verde", amount: "3 fire"},
      {name: "Sumac", amount: "1 lingură (esențial)"},
      {name: "Melasă de rodie", amount: "1 lingură"}
    ],
    steps: [
      "Pregătirea pâinii. Fattoush este o salată 'de recuperare' a pâinii vechi. Tăiați sau rupeți lipiile în bucăți mici. Prăjiți-le în baie de ulei până devin aurii și crocante, sau coaceți-le la cuptor stropite cu ulei de măsline.\n\nLăsați crutoanele să se răcească pe hârtie absorbantă.",
      
      "Tăierea legumelor. Tăiați salata verde grosier. Tăiați roșiile și castraveții în cuburi mărișoare (rustic). Tăiați ridichile în felii subțiri și ceapa verde rondele.\n\nPuteți adăuga și ardei gras sau iarbă grasă (purslane) dacă găsiți, pentru autenticitate.",
      
      "Dressing-ul acrișor. Într-un borcan, amestecați uleiul de măsline, zeama de lămâie, usturoiul pisat, sarea și, ingredientele cheie: Sumac (pudră roșie acrișoară) și Melasă de rodie.\n\nAcest dressing trebuie să fie vibrant, acidulat și de culoare închisă.",
      
      "Combinarea. Într-un bol mare, amestecați toate legumele cu ierburile proaspete (mentă și pătrunjel tocate mare).",
      
      "Adăugarea pâinii. Chiar înainte de servire (nu mai devreme, pentru a nu se înmuia), adăugați pâinea prăjită în bol.",
      
      "Finisarea. Turnați dressing-ul peste salată și amestecați bine (cu mâna e cel mai bine) pentru a acoperi fiecare frunză și bucată de pâine. Presărați extra sumac deasupra. Este o explozie de texturi și gusturi proaspete."
    ],
    nutrition: { calories: 250, protein: 5, carbs: 30, fat: 12 }
  },

  "Kafta": {
    title: "Kafta (Frigărui de Carne Tocată)",
    servings: 4,
    servingSize: "2 frigărui + lipie",
    pricePerServing: 18,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      {name: "Carne tocată (vită+miel)", amount: "500 g"},
      {name: "Ceapă", amount: "1 mare"},
      {name: "Pătrunjel", amount: "1 legătură mare"},
      {name: "Condimente (Baharat)", amount: "1 linguriță"},
      {name: "Scorțișoară", amount: "un vârf"},
      {name: "Muguri de pin (opțional)", amount: "2 linguri"}
    ],
    steps: [
      "Pregătirea pastei de legume. Puneți ceapa și pătrunjelul (doar frunzele) într-un robot de bucătărie. Procesați până sunt tocate foarte, foarte mărunt, aproape ca o pastă.\n\nScurgeți excesul de apă din ceapă dacă este nevoie, folosind o sită.",
      
      "Amestecarea cărnii. Într-un bol, combinați carnea tocată (ideal un mix de vită și miel pentru grăsime și aromă) cu pasta de ceapă și pătrunjel. Adăugați sarea, piperul, mixul de 7 condimente (baharat) și scorțișoara.\n\nDacă doriți, adăugați muguri de pin prăjiți ușor pentru textură crocantă în interior.",
      
      "Frământarea. Frământați carnea energic cu mâna timp de 5 minute. Acest pas este crucial pentru a elibera proteinele și a face compoziția lipicioasă, astfel încât să stea pe țepușă și să nu cadă pe grătar.",
      
      "Modelarea. Umeziți-vă mâinile. Luați o bilă de carne și modelați-o în jurul unei țepușe de metal (sau lemn înmuiat), formând un cilindru lung de aproximativ 10-12 cm (ca un mic mai lung).\n\nPresați capetele pentru a sigila carnea pe băț.",
      
      "Gătirea. Frigeți kafta pe grătarul încins (cărbuni e ideal) timp de 4-5 minute pe fiecare parte. Întoarceți-le cu grijă.\n\nCarnea trebuie să fie bine rumenită la exterior, dar suculentă în interior. Nu o gătiți excesiv (well done), altfel devine uscată.",
      
      "Servirea. Kafta se servește fierbinte, scoasă de pe băț sau pe el, așezată pe o lipie unsă cu sos de ardei sau hummus. Se mănâncă cu salată de ceapă cu sumac și roșii coapte pe grătar."
    ],
    nutrition: { calories: 350, protein: 25, carbs: 5, fat: 25, micronutrients: ["Iron 15%"] }
  },

  "Manakish": {
    title: "Manakish cu Za'atar (Mic dejun Libanez)",
    servings: 4,
    servingSize: "1 manakish (200g)",
    pricePerServing: 6,
    prepTime: "1h",
    cookTime: "10 min",
    ingredients: [
      {name: "Făină", amount: "500 g"},
      {name: "Apă călduță", amount: "300 ml"},
      {name: "Drojdie", amount: "7 g"},
      {name: "Za'atar (mix condimente)", amount: "5 linguri"},
      {name: "Ulei de măsline", amount: "100 ml"},
      {name: "Sare, Zahăr", amount: "un praf"}
    ],
    steps: [
      "Aluatul. Faceți un aluat simplu de pâine: activați drojdia cu zahăr și apă, apoi amestecați cu făina, sarea și puțin ulei. Frământați 10 minute până e elastic.\n\nLăsați la dospit într-un loc cald timp de 1 oră, până își dublează volumul.",
      
      "Topping-ul. Într-un bol mic, amestecați mixul de Za'atar (cimbru sălbatic, sumac, susan, sare) cu uleiul de măsline. Trebuie să obțineți o pastă destul de lichidă, dar care nu curge singură (consistență de sos pesto).",
      
      "Modelarea. Împărțiți aluatul în 4-6 bile. Pe blatul înfăinat, întindeți fiecare bilă într-un disc subțire (ca de pizza).",
      
      "Crearea gropițelor. Așezați discurile pe tava de copt. Folosind vârfurile degetelor, apăsați aluatul din loc în loc pentru a crea mici adâncituri (dimples). Acest lucru previne umflarea excesivă a aluatului ca un balon și ajută topping-ul să stea pe loc.",
      
      "Ungerea. Întindeți pasta de Za'atar generos pe toată suprafața aluatului, lăsând o mică margine liberă. Mirosul de cimbru și ulei va fi intens.",
      
      "Coacerea. Coaceți în cuptorul preîncălzit la maxim (220-250°C) timp de 5-8 minute. Marginile trebuie să fie ușor aurii, iar fundul copt, dar aluatul trebuie să rămână moale și flexibil, nu tare ca un biscuit.\n\nSe servesc calde, alături de roșii proaspete, castraveți, mentă și ceai negru."
    ],
    nutrition: { calories: 400, protein: 8, carbs: 50, fat: 20 }
  },

  "Kibbeh": {
    title: "Kibbeh (Crochete umplute cu carne)",
    servings: 6,
    servingSize: "3 bucăți (150g)",
    pricePerServing: 15,
    prepTime: "1 oră",
    cookTime: "30 min",
    ingredients: [
      {name: "Bulgur fin (nr 1)", amount: "500 g"},
      {name: "Carne tocată (vită macră)", amount: "500 g (pt aluat)"},
      {name: "Carne tocată (miel/vită)", amount: "300 g (pt umplutură)"},
      {name: "Ceapă", amount: "3 buc"},
      {name: "Muguri de pin", amount: "50 g"},
      {name: "Condimente", amount: "Ienibahar, Scorțișoară"},
      {name: "Ulei", amount: "pt prăjit" }
    ],
    steps: [
      "Învelișul (Aluatul). Spălați bulgurul fin și lăsați-l la înmuiat în apă rece 10 minute, apoi stoarceți-l extrem de bine (în prosop). Puneți bulgurul stors în robotul de bucătărie împreună cu carnea macră, o ceapă rasă, sare și piper.\n\nMixați până obțineți o pastă roz, fină și lipicioasă (ca un aluat). Dacă e prea uscată, udați-vă mâinile; dacă e prea moale, lăsați-o la rece.",
      
      "Umplutura (Heshweh). Căliți două cepe tocate mărunt în ulei până se caramelizează. Adăugați carnea pentru umplutură și prăjiți-o bine.\n\nAdăugați condimentele (ienibahar, scorțișoară, sare, piper) și mugurii de pin prăjiți. Lăsați umplutura să se răcească complet (esențial pentru modelare).",
      
      "Tehnica de modelare. Luați o bilă de mărimea unui ou din pasta de bulgur. Țineți-o în palma stângă. Cu arătătorul drept umezit, faceți o gaură în mijloc și începeți să lărgiți pereții bilei, rotind-o în palmă.\n\nScopul este să obțineți o 'ceașcă' cu pereți cât mai subțiri, fără a o rupe.",
      
      "Umplerea. Puneți o lingură de umplutură rece în gaură. Adunați marginile de sus și sigilați bine, dând formă de fus (torpilă), cu capetele ascuțite.\n\nNeteziți suprafața cu degetul ud pentru a nu avea crăpături.",
      
      "Prăjirea. Încălziți o baie de ulei la 170°C. Prăjiți kibbeh-urile în tranșe mici, fără a aglomera tigaia, timp de 5-6 minute, până devin maro-închis și crocante la exterior.\n\nNu le mișcați în primele 2 minute ca să nu se spargă.",
      
      "Servirea. Scoateți pe șervețele. Se servesc calde sau la temperatura camerei, cu iaurt sau sos de rodie. Este testul suprem de îndemânare în bucătăria libaneză."
    ],
    nutrition: { calories: 450, protein: 25, carbs: 40, fat: 20 }
  },

  "Labneh": {
    title: "Labneh (Cremă de Iaurt)",
    servings: 4,
    servingSize: "1 bol mic (150g)",
    pricePerServing: 8,
    prepTime: "5 min (+24h scurgere)",
    cookTime: "0 min",
    ingredients: [
      {name: "Iaurt gras (tip grecesc sau capră)", amount: "1 kg"},
      {name: "Sare", amount: "1 linguriță"},
      {name: "Ulei de măsline", amount: "generos"},
      {name: "Za'atar", amount: "1 lingură"},
      {name: "Măsline/Mentă", amount: "decor"}
    ],
    steps: [
      "Pregătirea. Amestecați iaurtul cu sarea. Sarea ajută la eliminarea zerului. Luați un tifon curat (sau o pânză de bumbac) și așezați-l într-o sită pusă deasupra unui bol.\n\nTurnați iaurtul în tifon.",
      
      "Scurgerea (Straining). Adunați colțurile tifonului și legați-le strâns, formând un bocceluță. Puteți agăța bocceluța de robinetul chiuvetei sau de o lingură de lemn suspendată peste un bol adânc.\n\nLăsați la scurs la frigider timp de 12-24 de ore. Cu cât stă mai mult, cu atât devine mai ferm.",
      
      "Textura. După 12 ore, veți avea o consistență de cremă de brânză moale (bună de întins). După 24-48 de ore, devine fermă și poate fi modelată în bile (Labneh Korat) care se conservă în ulei.",
      
      "Așezarea în farfurie. Scoateți labneh-ul din tifon. Întindeți-l pe o farfurie întinsă, făcând valuri cu lingura.",
      
      "Condimentarea. Presărați Za'atar din belșug. Puteți adăuga și fulgi de ardei iute sau mentă uscată.",
      
      "Uleiul. Turnați ulei de măsline extravirgin de calitate peste labneh până se formează mici băltoace în adâncituri. Se mănâncă rupând bucăți de lipie și ștergând farfuria."
    ],
    nutrition: { calories: 200, protein: 10, carbs: 5, fat: 15, micronutrients: ["Calcium 30%"] }
  },

  "Moujadara": {
    title: "Moujadara (Linte cu Orez și Ceapă Caramelizată)",
    servings: 4,
    servingSize: "1 bol mare (350g)",
    pricePerServing: 8,
    prepTime: "15 min",
    cookTime: "45 min",
    ingredients: [
      {name: "Linte verde/maro", amount: "200 g"},
      {name: "Orez basmati", amount: "200 g"},
      {name: "Ceapă", amount: "4 mari"},
      {name: "Ulei de măsline", amount: "100 ml"},
      {name: "Chimion", amount: "1 linguriță"},
      {name: "Iaurt", amount: "pentru servire"}
    ],
    steps: [
      "Fierberea lintei. Spălați lintea și puneți-o la fiert în apă rece. Lăsați să fiarbă aproximativ 15-20 de minute până este pe jumătate gătită (încă fermă), nu terciuită.\n\nPăstrați apa în care a fiert lintea, este plină de aromă și culoare.",
      
      "Caramelizarea cepei (Secretul). Tăiați ceapa solzișori. Într-o tigaie mare, încingeți uleiul și prăjiți ceapa la foc mediu, amestecând des.\n\nAcest proces durează 15-20 de minute. Ceapa trebuie să devină maro-închis, crocantă și dulce. Aveți grijă să nu o ardeți (să nu fie neagră). Scoateți jumătate din ceapă pe șervete de hârtie pentru decor.",
      
      "Combinarea. Adăugați orezul spălat peste ceapa și uleiul rămase în tigaie. Căliți orezul 2 minute să se îmbibe de aroma cepei.\n\nAdăugați lintea semifiertă și chimionul.",
      
      "Fierberea finală. Turnați apa în care a fiert lintea (completați cu apă proaspătă dacă e nevoie, proporție 1:2 orez:apă). Asezonați cu sare și piper.\n\nAcoperiți și fierbeți la foc mic timp de 15-20 de minute până când orezul este gata și apa absorbită.",
      
      "Odihna. Opriți focul, puneți un prosop de bucătărie sub capac și lăsați să stea 10 minute. Prosopul absoarbe aburul și face orezul pufos.",
      
      "Servirea. Răsturnați pe un platou și presărați deasupra ceapa caramelizată crocantă păstrată. Se servește cald sau la temperatura camerei, cu iaurt simplu sau salată de varză alături."
    ],
    nutrition: { calories: 450, protein: 15, carbs: 70, fat: 12, fiber: 10 }
  },

  "Baklava libaneză": {
    title: "Baklava Libaneză (Asortiment Fin)",
    servings: 12,
    servingSize: "2 bucăți (50g)",
    pricePerServing: 10,
    prepTime: "45 min",
    cookTime: "45 min",
    ingredients: [
      {name: "Foi de plăcintă (subțiri)", amount: "1 pachet"},
      {name: "Unt clarifiat (Ghee)", amount: "300 g"},
      {name: "Fistic/Caju/Nucă", amount: "400 g"},
      {name: "Zahăr", amount: "2 căni"},
      {name: "Apă", amount: "1 cană"},
      {name: "Apă de flori de portocal/trandafir", amount: "1 lingură"},
      {name: "Lămâie", amount: "zeamă"}
    ],
    steps: [
      "Siropul aromat (Ater). Fierbeți apa cu zahărul până se îngroașă ușor (cca 10 min). La final adăugați zeama de lămâie și apa de flori de portocal. Lăsați să se răcească complet. Siropul libanez este foarte parfumat.",
      
      "Pregătirea untului. Folosiți ghee sau unt clarifiat (topit și separat de lapte). Acest lucru face baklavaua crocantă și strălucitoare, nu arsă.\n\nMăcinați nucile sau fisticul, dar nu pudră fină, ci bucățele mici.",
      
      "Stratificarea. Spre deosebire de cea grecească, baklavaua libaneză are adesea mai multe straturi subțiri sau forme diverse (rulouri, cuiburi).\n\nPentru varianta clasică: ungeți tava, puneți jumătate din foi ungând între ele. Puneți stratul de nuci (fără zahăr și scorțișoară de obicei, aroma vine din sirop). Acoperiți cu restul foilor, ungând din nou.",
      
      "Tăierea de precizie. Tăiați baklavaua în romburi mici sau pătrate mici ('bite-size'). Baklavaua libaneză este mai fină și mai mică decât cea turcească sau grecească.\n\nTurnați restul de unt topit peste toată tava, asigurându-vă că intră prin tăieturi.",
      
      "Coacerea. Coaceți la 160°C timp de 45-60 minute. Trebuie să se usuce și să devină aurie pal, nu maro închis.\n\nTrebuie să fie crocantă până în mijloc.",
      
      "Însiroparea. Turnați siropul rece peste baklavaua fierbinte. Lăsați să se răcească complet înainte de servire. Este un desert rafinat, nu excesiv de dulce, unde se simte gustul untului și al apei de trandafiri."
    ],
    nutrition: { calories: 400, protein: 5, carbs: 45, fat: 25, sugar: 25 }
  },

  // --- NEW MISSING LEBANESE RECIPES ---
  "Shish Tawook": {
    title: "Shish Tawook (Pui Libanez pe Frigăruie)",
    servings: 4,
    servingSize: "2 frigărui",
    pricePerServing: 18,
    prepTime: "20 min (+4h marinare)",
    cookTime: "15 min",
    ingredients: [
      { name: "Piept de pui", amount: "800 g" },
      { name: "Iaurt", amount: "150 g" },
      { name: "Zeamă de lămâie", amount: "50 ml" },
      { name: "Usturoi", amount: "6 căței" },
      { name: "Pastă de tomate", amount: "1 lingură" },
      { name: "Paprika dulce", amount: "1 lingură" },
      { name: "Ulei de măsline", amount: "50 ml" },
      { name: "Oregano uscat", amount: "1 linguriță" }
    ],
    steps: [
      "Pregătirea puiului. Tăiați pieptul de pui în cuburi mari de 3-4 cm. Este important să fie egale pentru o gătire uniformă. Puteți folosi și pulpe dezosate pentru un rezultat mai suculent, deși pieptul este tradițional pentru Tawook.",
      "Marinada magică. Într-un bol mare, amestecați iaurtul (care frăgezește carnea), mult usturoi pisat, zeama de lămâie, uleiul de măsline și pasta de tomate (pentru culoare roșiatică).",
      "Condimentarea. Adăugați paprika dulce, oregano, sare și piper alb în marinadă. Amestecați bine. Pasta trebuie să fie groasă și aromată, de culoare portocalie-roșiatică.",
      "Marinarea. Puneți cuburile de pui în marinadă și asigurați-vă că fiecare bucată este bine acoperită. Acoperiți bolul și lăsați la frigider pentru cel puțin 4 ore, ideal peste noapte. Cu cât stă mai mult, cu atât puiul va fi mai moale.",
      "Asamblarea pe țepușe. Dacă folosiți bețe de bambus, înmuiați-le în apă 30 de minute. Înfigeți bucățile de pui pe țepușe, nu foarte strâns. Nu puneți legume între bucăți (ca la frigăruile românești), deoarece legumele se ard înainte ca puiul să fie gata.",
      "Gătirea și servirea. Frigeți frigăruile pe grătarul încins sau în tigaie grill timp de 12-15 minute, întorcându-le des. Trebuie să aibă urme de arsură, dar să fie suculente. Se servesc cu cremă de usturoi (Toum), cartofi prăjiți și lipie."
    ],
    nutrition: { calories: 350, protein: 35, carbs: 5, fat: 15, micronutrients: ["Vitamin B6"] }
  },

  "Arayes": {
    title: "Arayes (Pită Umplută cu Carne la Grătar)",
    servings: 4,
    servingSize: "2 sferturi",
    pricePerServing: 15,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Lipii libaneze", amount: "4 buc" },
      { name: "Carne tocată (vită/miel)", amount: "500 g" },
      { name: "Ceapă", amount: "1 mare" },
      { name: "Pătrunjel", amount: "1 legătură" },
      { name: "Roșie", amount: "1 buc" },
      { name: "Condimente (7 spices)", amount: "1 linguriță" },
      { name: "Ulei de măsline", amount: "pentru uns" }
    ],
    steps: [
      "Pregătirea umpluturii (Kafta). Tocați ceapa și pătrunjelul extrem de mărunt (sau la robot). Tăiați roșia cubulețe foarte mici (scursă de zeamă). Într-un bol, amestecați carnea tocată cu legumele, sarea, piperul și mixul de 7 condimente libaneze (baharat).",
      "Frământarea. Frământați amestecul cu mâna timp de câteva minute până devine omogen și lipicios. Grăsimea din carne este esențială aici, va impregna pâinea la coacere.",
      "Pregătirea pâinii. Tăiați lipiile libaneze în jumătăți sau sferturi (triunghiuri). Deschideți buzunarul fiecărei bucăți de pâine cu grijă.",
      "Umplerea. Luați o mână de carne și întindeți-o într-un strat subțire și uniform în interiorul buzunarului de pâine. Stratul trebuie să fie subțire pentru a se găti rapid, înainte ca pâinea să se ardă. Presați pâinea peste carne.",
      "Ungerea. Ungeți exteriorul lipiilor umplute cu ulei de măsline pe ambele părți. Acest lucru le va face extrem de crocante.",
      "Gătirea. Puneți Arayes pe grătarul încins (sau în tigaie/cuptor). Gătiți 3-4 minute pe fiecare parte, până când pâinea este aurie și crocantă, iar carnea din interior este gătită. Se servesc fierbinți, tăiate triunghiuri, cu iaurt rece."
    ],
    nutrition: { calories: 450, protein: 20, carbs: 35, fat: 25 }
  },

  "Knafeh": {
    title: "Knafeh (Desert cu Brânză și Griș)",
    servings: 8,
    servingSize: "1 felie",
    pricePerServing: 12,
    prepTime: "30 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Aluat Kataif (sau griș fin)", amount: "500 g" },
      { name: "Brânză Akkawi (sau Mozzarella)", amount: "500 g" },
      { name: "Unt/Ghee", amount: "150 g" },
      { name: "Sirop de zahăr (Ater)", amount: "300 ml" },
      { name: "Fistic măcinat", amount: "decor" },
      { name: "Colorant portocaliu (opțional)", amount: "un praf" }
    ],
    steps: [
      "Pregătirea brânzei. Brânza tradițională Akkawi este foarte sărată. Tăiați-o felii și țineți-o în apă rece, schimbând apa des, până se desărează complet. Dacă folosiți Mozzarella, alegeți una proaspătă și scurgeți-o bine. Mărunțiți brânza.",
      "Pregătirea crustei. Dacă folosiți tăiței Kataif, mărunțiți-i la robot. Dacă folosiți griș, amestecați-l cu untul topit și colorantul portocaliu specific (kunafa dye). Frământați bine amestecul de aluat cu untul topit (ghee) până se impregnează.",
      "Montarea în tavă. Ungeți o tavă rotundă cu mult unt (amestecat cu colorant pentru culoarea vibrantă). Presați 3/4 din aluatul de griș/kataif pe fundul tăvii într-un strat compact și uniform. Acesta va fi fața desertului.",
      "Stratul de brânză. Întindeți brânza desărată și scursă peste stratul de aluat, lăsând 1 cm liber la margini (ca să nu se ardă brânza pe pereții tăvii).",
      "Coacerea. Coaceți la 200°C timp de 30-40 de minute, până când marginile devin maronii și brânza s-a topit complet. Alternativ, se poate găti pe aragaz la foc mic, rotind tava constant.",
      "Răsturnarea și însiroparea. Imediat ce o scoateți din cuptor, răsturnați Knafeh-ul pe un platou mare (partea crocantă de jos devine sus). Turnați siropul rece (Ater) peste desertul fierbinte. Presărați fistic măcinat. Se servește caldă, cât brânza se întinde."
    ],
    nutrition: { calories: 500, protein: 15, carbs: 45, fat: 28, sugar: 30 }
  },

  "Fattah cu iaurt": {
    title: "Fattah (Năut cu Iaurt și Pâine Crocantă)",
    servings: 4,
    servingSize: "1 bol",
    pricePerServing: 10,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Năut fiert", amount: "400 g" },
      { name: "Iaurt gras", amount: "500 g" },
      { name: "Lipie libaneză", amount: "3 buc" },
      { name: "Usturoi", amount: "3 căței" },
      { name: "Muguri de pin", amount: "50 g" },
      { name: "Unt/Ghee", amount: "2 linguri" },
      { name: "Tahini", amount: "2 linguri" },
      { name: "Chimen & Sumac", amount: "un praf" }
    ],
    steps: [
      "Pregătirea pâinii. Tăiați sau rupeți lipiile în bucăți mici. Prăjiți-le în ulei sau coaceți-le la cuptor până devin aurii și foarte crocante. Acesta este stratul de bază.",
      "Încălzirea năutului. Puneți năutul fiert într-o oală cu puțină apă din conservă, un praf de chimen și sare. Încălziți-l bine. Năutul trebuie să fie fierbinte la asamblare.",
      "Sosul de iaurt (Laban). Într-un bol, amestecați iaurtul cu tahini, usturoiul pisat, puțină zeamă de lămâie și sare. Dacă sosul e prea gros, subțiați-l cu puțină apă. Încălziți-l foarte ușor la bain-marie (doar să nu fie rece de la frigider, nu fierbinte să se taie).",
      "Asamblarea. Într-un vas adânc de servire, puneți pâinea crocantă la bază. Peste pâine, turnați năutul fierbinte cu puțină zeamă (zeama va înmuia ușor pâinea, dar nu de tot).",
      "Stratul alb. Acoperiți totul cu sosul de iaurt și tahini. Nivelați suprafața.",
      "Tasha (Garnitura finală). Într-o tigaie mică, topiți untul sau ghee-ul. Prăjiți mugurii de pin până devin aurii. Imediat, turnați untul fierbinte și mugurii de pin direct peste stratul de iaurt (va sfârâi). Presărați sumac, chimen și pătrunjel. Serviți imediat."
    ],
    nutrition: { calories: 400, protein: 12, carbs: 40, fat: 20 }
  }
};
