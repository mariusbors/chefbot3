
import { Recipe } from '../../types';

export const MEXICAN_RECIPES: Record<string, Recipe> = {
  "Tacos": {
    title: "Tacos al Pastor (Stil Autentic)",
    servings: 4,
    prepTime: "30 min (+4h marinare)",
    cookTime: "15 min",
    ingredients: [
      { name: "Pulpă de porc (feliată subțire)", amount: "600 g" },
      { name: "Pastă Achiote", amount: "2 linguri" },
      { name: "Suc de ananas & portocale", amount: "100 ml" },
      { name: "Tortillas de porumb (mici)", amount: "12 buc" },
      { name: "Ananas proaspăt", amount: "100 g" },
      { name: "Ceapă albă & Coriandru", amount: "tocat" },
      { name: "Lime", amount: "3 buc" },
      { name: "Ardei iute (Guajillo)", amount: "2 buc" }
    ],
    steps: [
      "Pregătirea marinadei (Adobo). Tacos al Pastor își iau culoarea roșie și gustul specific din Achiote. Într-un blender, combinați pasta de achiote, sucul de ananas, sucul de portocale, oțetul, ardeii guajillo (hidratați în prealabil), usturoiul, oregano mexican și chimenul. Mixați până obțineți o pastă fină și omogenă.\n\nAceastă marinadă acidă și condimentată nu doar dă gust, ci și frăgezește fibrele cărnii de porc, făcând-o suculentă după gătire.",
      
      "Marinarea cărnii. Tăiați carnea de porc în felii foarte subțiri, ca niște șnițele mici. Puneți carnea într-un bol și turnați marinada peste ea, asigurându-vă că fiecare felie este bine acoperită. Masati carnea pentru a impregna aromele.\n\nAcoperiți și lăsați la frigider pentru cel puțin 4 ore, ideal peste noapte. Cu cât stă mai mult, cu atât culoarea va fi mai intensă și gustul mai profund.",
      
      "Gătirea (Imitarea rotisorului). În lipsa unui 'trompo' (rotisor vertical), vom folosi o tigaie de fontă foarte încinsă sau grătarul. Tăiați carnea marinată în fâșii mai mici. Prăjiți carnea la foc iute, în tranșe mici, pentru a se carameliza și a prinde crustă neagră pe alocuri (char).\n\nAdăugați și bucăți mici de ananas în tigaie în ultimele minute pentru a se rumeni. Dulceața ananasului caramelizat este contrastul perfect pentru carnea condimentată.",
      
      "Încălzirea tortillas. Acest pas este nenegociabil. Tortilla de porumb rece este sfărâmicioasă și fadă. Încălziți fiecare tortilla într-o tigaie uscată sau direct pe flacără timp de 30 de secunde pe fiecare parte, până devine flexibilă și apar mici pete maronii.\n\nPăstrați-le calde într-un prosop de bucătărie curat ('tortillero') pentru a se menține moi prin propriul abur.",
      
      "Asamblarea. Puneți două tortillas suprapuse (pentru a susține greutatea și sucurile) pe o farfurie. Puneți o cantitate generoasă de carne fierbinte în centru.\n\nAdăugați câteva bucăți de ananas fript. Nu supraîncărcați taco-ul; trebuie să poată fi pliat și mâncat cu o singură mână.",
      
      "Garnisirea (La final). Presărați ceapă albă tocată mărunt și coriandru proaspăt tocat. Stoarceți o felie de lime deasupra chiar înainte de a mânca.\n\nServiți cu o salsa verde (tomatillo) sau roșie (chili de arbol) alături. Combinația de carne fierbinte, ananas dulce, ceapă crocantă și lime acid este esența Mexicului."
    ],
    nutrition: { calories: 450, protein: 25, carbs: 40, fat: 20, sodium: 800 }
  },

  "Guacamole": {
    title: "Guacamole Autentic (La Mojar)",
    servings: 4,
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

  "Burrito": {
    title: "Burrito Clasic cu Carne și Fasole",
    servings: 2,
    prepTime: "20 min",
    cookTime: "20 min",
    ingredients: [
      { name: "Tortillas de făină (mari)", amount: "2 buc" },
      { name: "Orez mexican (fiert)", amount: "150 g" },
      { name: "Fasole neagră/Pinto", amount: "150 g" },
      { name: "Carne tocată/Pui", amount: "250 g" },
      { name: "Brânză Cheddar/Monterey", amount: "100 g" },
      { name: "Smântână", amount: "2 linguri" },
      { name: "Salsa/Pico de Gallo", amount: "3 linguri" },
      { name: "Condimente Taco", amount: "1 plic" }
    ],
    steps: [
      "Gătirea cărnii. Într-un tigaie, căliți carnea tocată (sau puiul tăiat cubulețe) cu ceapă și usturoi. Când este gătită, adăugați mixul de condimente (chili, chimen, boia, oregano) și puțină apă.\n\nLăsați să fiarbă până când sosul se îngroașă și acoperă carnea. Nu trebuie să fie prea lichid, altfel va curge din burrito.",
      
      "Pregătirea orezului și a fasolei. Folosiți orez fiert condimentat cu coriandru și lime sau orez roșu mexican (gătit cu sos de roșii). Încălziți fasolea (fie boabe întregi, fie 'refried beans' - pastă de fasole prăjită).\n\nEste important ca toate elementele calde să fie gata simultan.",
      
      "Încălzirea tortillei. Folosiți cele mai mari tortillas de făină disponibile (stil XL). Încălziți tortilla în tigaie sau la microunde câteva secunde pentru a o face elastică. Dacă e rece, se va rupe la rulare.\n\nAșezați tortilla pe o suprafață plană.",
      
      "Stratificarea (Layering). Imaginați-vă o linie centrală pe tortilla. Așezați ingredientele în straturi pe această linie, lăsând margini generoase. Începeți cu orezul, apoi fasolea, carnea, brânza rasă, salsa și smântâna.\n\nNu umpleți excesiv! Un burrito prea plin nu se va închide și va exploda.",
      
      "Tehnica de rulare. Îndoiți marginile laterale (stânga și dreapta) peste umplutură. Ținând marginile pliate, aduceți partea de jos a tortillei peste umplutură și trageți ușor înapoi pentru a strânge conținutul (tucking).\n\nRulați strâns până la capăt, ținând marginile laterale închise. Trebuie să obțineți un cilindru compact, închis la ambele capete.",
      
      "Sigilarea (Toasting). Puneți burrito-ul rulat într-o tigaie încinsă (fără ulei sau cu puțin unt), cu partea de îmbinare (cusătura) în jos. Aceasta 'lipește' burrito-ul.\n\nPrăjiți 1-2 minute pe fiecare parte până devine auriu și crocant. Tăiați-l în jumătate pe diagonală și serviți."
    ],
    nutrition: { calories: 800, protein: 35, carbs: 85, fat: 30, sodium: 1200 }
  },

  "Quesadilla": {
    title: "Quesadilla cu Pui și Brânză",
    servings: 2,
    prepTime: "10 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Tortillas de făină", amount: "2 mari" },
      { name: "Cașcaval/Monterey Jack", amount: "200 g" },
      { name: "Piept de pui gătit", amount: "150 g" },
      { name: "Ardei gras/Ceapă", amount: "călite" },
      { name: "Unt", amount: "20 g" },
      { name: "Smântână & Salsa", amount: "pentru servire" }
    ],
    steps: [
      "Pregătirea umpluturii. Quesadilla este o metodă excelentă de a folosi resturi. Tăiați puiul gătit în fâșii sau cubulețe. Radeți brânza (nu folosiți brânză gata feliată, nu se topește la fel de bine). Folosiți o brânză care se topește frumos (Cheddar, Gouda, Monterey Jack).\n\nDacă folosiți legume (ceapă, ardei), căliți-le în prealabil. Dacă le puneți crude, vor rămâne crude, deoarece quesadilla se gătește repede.",
      
      "Metoda Half-Moon (Semilună). Încălziți o tigaie largă la foc mediu. Ungeți-o cu puțin unt. Puneți o tortilla în tigaie. Presărați brânză rasă pe jumătate din suprafața tortillei.\n\nAdăugați puiul și legumele peste brânză, apoi încă un strat subțire de brânză (pentru a lipi și partea de sus).",
      
      "Plierea. Îndoiți jumătatea goală a tortillei peste umplutură, formând o semilună. Presați ușor cu o spatulă pentru a o aplatiza și a ajuta brânza să adere la foaie.\n\nAceastă metodă este mai ușor de întors decât metoda 'două tortillas una peste alta'.",
      
      "Gătirea. Gătiți timp de 2-3 minute pe prima parte, până când tortilla devine aurie-brună și crocantă. Verificați sarea; focul nu trebuie să fie prea iute.\n\nÎntoarceți quesadilla cu grijă pe partea cealaltă și mai gătiți 2-3 minute până când brânza este complet topită și curge.",
      
      "Odihna și tăierea. Scoateți quesadilla pe un tocător. Așteptați 1-2 minute. Dacă o tăiați imediat, brânza fierbinte va curge peste tot.\n\nTăiați-o în 3 sau 4 triunghiuri (wedges) folosind un cuțit de pizza sau un cuțit mare.",
      
      "Servirea. Se servește fierbinte, crocantă la exterior și moale la interior. Acompaniați cu boluri de smântână fermentată, salsa picantă și guacamole pentru înmuiat (dipping)."
    ],
    nutrition: { calories: 550, protein: 30, carbs: 40, fat: 30, micronutrients: ["Calcium 40%"] }
  },

  "Enchilada": {
    title: "Enchiladas Rojas (Pui în Sos Roșu)",
    servings: 4,
    prepTime: "40 min",
    cookTime: "20 min",
    ingredients: [
      { name: "Tortillas de porumb", amount: "12 buc" },
      { name: "Pui fiert și mărunțit", amount: "500 g" },
      { name: "Sos Enchilada (Chili)", amount: "500 ml" },
      { name: "Brânză (Queso Fresco/Cheddar)", amount: "200 g" },
      { name: "Ceapă", amount: "1 buc" },
      { name: "Smântână", amount: "100 g" },
      { name: "Coriandru", amount: "decor" }
    ],
    steps: [
      "Sosul este cheia. Puteți folosi sos din comerț, dar cel de casă e superior. Hidratați ardei uscați (Guajillo/Ancho), blendați-i cu ceapă, usturoi, chimen și roșii, apoi fierbeți sosul până se îngroașă.\n\nSosul trebuie să fie fin, aromat și ușor picant. Încălziți sosul într-o tigaie largă înainte de asamblare.",
      
      "Pregătirea tortillei (Pasul critic). Tortillas de porumb se rup dacă sunt rulate reci. Mai mult, în Mexic, ele se prăjesc ușor ('pasada por aceite') înainte de a fi înmuiate în sos.\n\nTreceți fiecare tortilla prin ulei încins timp de 5-10 secunde (doar cât să se înmoaie, nu să devină chips), apoi scurgeți-o. Acest pas previne dezintegrarea lor în sos.",
      
      "Înmuierea și umplerea. Scufundați fiecare tortilla prăjită în sosul roșu cald, acoperind-o complet. Așezați-o pe o farfurie.\n\nPuneți o cantitate mică de pui mărunțit și puțină ceapă tocată în centru. Rulați strâns ca pe o țigară.",
      
      "Aranjarea. Așezați rulourile (enchiladas) într-o tavă de copt, unul lângă altul, cu marginea (cusătura) în jos. Continuați până umpleți tava.\n\nTurnați restul de sos roșu deasupra, asigurându-vă că toate marginile sunt acoperite pentru a nu se usca la cuptor.",
      
      "Gratinarea. Presărați generos brânză rasă (Cheddar, Monterey Jack sau Queso Chihuahua) deasupra. Introduceți tava în cuptorul preîncălzit la 190°C timp de 15-20 de minute.\n\nNu trebuie gătit mult, doar cât să se topească brânza și să bolborosească sosul.",
      
      "Garnisirea. Enchiladas se servesc fierbinți. Decorați cu inele de ceapă crudă, frunze de coriandru, felii de ridiche și, opțional, un fir de smântână (crema mexicana). În Mexic, se servesc adesea și cu orez și fasole prăjită."
    ],
    nutrition: { calories: 600, protein: 30, carbs: 45, fat: 30, sodium: 950 }
  },

  "Nachos": {
    title: "Nachos Supreme (La Cuptor)",
    servings: 6,
    prepTime: "20 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Chipsuri de porumb (Tortilla)", amount: "300 g" },
      { name: "Brânză Cheddar/Monterey", amount: "300 g (rasă)" },
      { name: "Fasole neagră", amount: "1 conservă" },
      { name: "Ardei Jalapeno murați", amount: "50 g" },
      { name: "Roșii/Pico de Gallo", amount: "200 g" },
      { name: "Smântână & Guacamole", amount: "topping" },
      { name: "Carne tocată/Pui", amount: "200 g (opțional)" }
    ],
    steps: [
      "Alegeți chipsurile. Folosiți chipsuri de porumb (totopos) groase, de calitate, care pot susține greutatea topping-urilor fără să se înmoaie imediat. Cele de restaurant sunt cele mai bune.\n\nPreîncălziți cuptorul la 200°C.",
      
      "Stratificarea (Nu faceți o grămadă!). Greșeala comună este să puneți chipsuri și apoi brânză doar sus. Pe o tavă largă de copt (tapetată cu hârtie), întindeți un singur strat de chipsuri, fără a le suprapune excesiv.\n\nPresărați un strat de brânză rasă și fasole peste primul strat de chipsuri.",
      
      "Construirea pe verticală. Adăugați al doilea strat de chipsuri peste primul și repetați operațiunea cu brânză și fasole. Dacă folosiți carne, distribuiți-o și pe ea acum.\n\nScopul este ca fiecare chips să aibă puțină brânză și topping, nu să aveți chipsuri goale la fund.",
      
      "Coacerea. Introduceți tava în cuptor timp de 10-15 minute. Brânza trebuie să fie complet topită și să înceapă să se rumenească ușor pe margini, iar chipsurile să miroasă a porumb prăjit.",
      
      "Topping-urile reci. Scoateți tava din cuptor. Acum adăugați ingredientele proaspete: roșii cubulețe (sau Pico de Gallo scurs de zeamă), felii de ardei Jalapeno murați, ceapă verde și coriandru.\n\nIngredientele reci și proaspete peste brânza fierbinte creează contrastul perfect.",
      
      "Servirea. Nu puneți smântâna și guacamole-ul direct peste toți nachosii, deoarece îi vor înmuia rapid. Puneți-le în boluri mici pe tavă sau în centru, ca dip-uri.\n\nServiți imediat, direct din tavă. Nachos sunt un preparat de petrecere care trebuie mâncat în primele 10 minute."
    ],
    nutrition: { calories: 500, protein: 15, carbs: 40, fat: 30, sodium: 800 }
  },

  "Chiles Rellenos": {
    title: "Chiles Rellenos (Ardei Poblanos Umpluți)",
    servings: 4,
    prepTime: "45 min",
    cookTime: "20 min",
    ingredients: [
      { name: "Ardei Poblano mari", amount: "4 buc" },
      { name: "Brânză Oaxaca/Monterey", amount: "300 g" },
      { name: "Ouă", amount: "3 buc" },
      { name: "Făină", amount: "100 g" },
      { name: "Sos de roșii (cald)", amount: "300 ml" },
      { name: "Ulei", amount: "pentru prăjit" }
    ],
    steps: [
      "Arderea ardeilor (Roasting). Spălați și uscați ardeii Poblano. Puneți-i direct pe flacăra aragazului sau sub grill-ul cuptorului. Întoarceți-i până când coaja este complet carbonizată și neagră pe toate părțile.\n\nAcest pas este esențial pentru a găti parțial ardeiul și pentru a-i da aroma de fum, dar și pentru a putea îndepărta coaja tare.",
      
      "Aburirea și curățarea. Puneți ardeii arși imediat într-o pungă de plastic sau într-un bol acoperit cu folie. Lăsați-i să 'transpire' 15 minute. Aburul va desprinde coaja.\n\nCurățați coaja arsă cu mâna sau cu un cuțit (nu sub jet de apă, pentru a păstra aroma). Faceți o incizie verticală mică și scoateți cu grijă semințele și cotorul, păstrând ardeiul întreg.",
      
      "Umplerea. Tăiați brânza (Oaxaca sau un cașcaval care se topește) în bastoane groase. Introduceți brânza în interiorul ardeilor prin incizie.\n\nNu îi umpleți excesiv, trebuie să se poată închide. Puteți folosi o scobitoare pentru a sigila tăietura, ca să nu curgă brânza la prăjit.",
      
      "Aluatul de ou (Capeado). Separați ouăle. Bateți albușurile spumă tare (ca la bezea). Adăugați gălbenușurile unul câte unul și puțină sare, amestecând ușor pentru a nu scoate aerul.\n\nRezultatul trebuie să fie un aluat extrem de pufos și aerat.",
      
      "Prăjirea. Încălziți 2-3 cm de ulei într-o tigaie. Treceți fiecare ardei umplut prin făină (scuturați excesul), apoi scufundați-l în spuma de ou.\n\nPuneți-l imediat în uleiul încins. Prăjiți pe ambele părți până când învelișul de ou este auriu și pufos. Făina ajută oul să adere la ardei.",
      
      "Servirea. Scoateți ardeii pe hârtie absorbantă. Se servesc calzi, înecați într-un sos simplu de roșii cu ceapă și usturoi (caldilo de jitomate), alături de orez mexican și tortillas. Este un preparat complex, de sărbătoare."
    ],
    nutrition: { calories: 450, protein: 20, carbs: 15, fat: 35, micronutrients: ["Calcium 30%"] }
  },

  "Tamales": {
    title: "Tamales de Pui cu Salsa Verde",
    servings: 12,
    prepTime: "2 ore",
    cookTime: "1.5 ore",
    ingredients: [
      { name: "Făină de porumb (Masa Harina)", amount: "500 g" },
      { name: "Untură/Ulei", amount: "200 g" },
      { name: "Supă de pui", amount: "300-400 ml" },
      { name: "Praf de copt", amount: "1 linguriță" },
      { name: "Pănuși de porumb (uscate)", amount: "1 pachet" },
      { name: "Pui gătit mărunțit", amount: "400 g" },
      { name: "Salsa Verde", amount: "300 ml" }
    ],
    steps: [
      "Pregătirea pănușilor. Alegeți pănuși de porumb uscate curate. Puneți-le într-un bol mare și turnați apă fierbinte peste ele. Lăsați-le la înmuiat cel puțin 1-2 ore până devin moi și flexibile.\n\nScurgeți-le și uscați-le ușor cu un prosop înainte de folosire.",
      
      "Pregătirea aluatului (Masa). Bateți untura (sau uleiul vegetal pentru varianta vegană) cu mixerul până devine albă și pufoasă (cca 5 minute). Acesta este secretul tamales-urilor aerate.\n\nÎntr-un alt bol, amestecați Masa Harina (făină de porumb nixtamalizat, nu mălai!) cu sarea și praful de copt.",
      
      "Hidratarea aluatului. Adăugați făina peste untură alternativ cu supa de pui călduță. Frământați sau mixați până obțineți un aluat moale și lipicios, de consistența untului de arahide.\n\nTestul plutirii: luați o bucată mică de aluat și puneți-o într-un pahar cu apă. Dacă plutește, aluatul este gata și tamales vor fi pufoase. Dacă se scufundă, mai adăugați puțină grăsime și bateți mai mult.",
      
      "Umplutura. Amestecați puiul fiert și mărunțit cu salsa verde (tomatillos). Sosul nu trebuie să fie prea lichid. Asezonați bine.",
      
      "Asamblarea. Luați o foaie de porumb (pănușă). Întindeți 2-3 linguri de aluat în centrul părții late, lăsând marginile libere. Puneți o lingură de carne pe mijlocul aluatului.\n\nÎndoiți marginile laterale ale pănușei una peste alta, astfel încât aluatul să învelească complet carnea. Apoi, îndoiți partea de jos (codița ascuțită) în sus. Lăsați partea de sus deschisă.",
      
      "Gătirea la abur. Așezați tamales în picioare (cu deschiderea în sus) într-un coș de gătit la abur (tamalera), nu prea strâns. Acoperiți cu restul de pănuși și un prosop umed.\n\nFierbeți la abur timp de 60-90 de minute. Sunt gata când aluatul se desprinde ușor și curat de pe foaie. Lăsați-le să se odihnească 10-15 minute înainte de a le mânca pentru a se întări puțin."
    ],
    nutrition: { calories: 280, protein: 10, carbs: 30, fat: 15, fiber: 4 }
  },

  "Pozole": {
    title: "Pozole Rojo (Supă de Porc cu Porumb)",
    servings: 8,
    prepTime: "30 min",
    cookTime: "2.5 ore",
    ingredients: [
      { name: "Porumb Hominy (conservă)", amount: "800 g" },
      { name: "Pulpă de porc (cu os)", amount: "1 kg" },
      { name: "Ardei uscați (Guajillo/Ancho)", amount: "4-5 buc" },
      { name: "Ceapă & Usturoi", amount: "pt fiert" },
      { name: "Oregano mexican", amount: "1 lingură" },
      { name: "Garnituri:", amount: "Ridichi, Salată, Lime" },
      { name: "Tostadas", amount: "pentru servire" }
    ],
    steps: [
      "Baza de carne. Puneți carnea de porc tăiată cuburi mari, oasele (pentru gust), o jumătate de ceapă și o căpățână de usturoi (tăiată la vârf) într-o oală mare cu apă. Adăugați sare.\n\nFierbeți la foc mediu, spumuind constant, timp de aproximativ 1.5 - 2 ore, până când carnea este foarte fragedă și se desprinde de pe oase.",
      
      "Sosul roșu (Adobo). Curățați ardeii uscați de semințe și cozi. Fierbeți-i în apă 10 minute până se înmoaie. Puneți-i în blender cu puțină apă de la fiert, usturoi, sare și oregano.\n\nMixați până obțineți o pastă fină. Strecurați sosul pentru a elimina cojile tari. Acesta va da culoarea roșie și gustul de bază.",
      
      "Porumbul Hominy. Hominy este porumb nixtamalizat (tratat cu var), cu boabe mari și albe. Dacă folosiți conservă, clătiți-l bine. Dacă folosiți uscat, trebuie fiert separat ore întregi până 'înflorește'.\n\nCând carnea este aproape gata, scoateți ceapa și usturoiul fiert. Adăugați boabele de porumb în oală.",
      
      "Fierberea finală. Turnați sosul roșu strecurat în supa cu carne și porumb. Adăugați oregano uscat.\n\nLăsați să mai fiarbă totul împreună 30-40 de minute. Porumbul va absorbi aroma cărnii și a ardeilor. Supa trebuie să fie destul de lichidă, nu groasă ca o tocană.",
      
      "Personalizarea la masă. Pozole se servește simplu în bol, dar farmecul constă în garnituri. Puneți pe masă boluri cu: salată verde tocată fin (sau varză), ridichi felii, ceapă tocată, avocado și multe felii de lime.\n\nFiecare comesean își pune garniturile dorite în supă fierbinte.",
      
      "Servirea. Se mănâncă cu Tostadas (tortillas de porumb prăjite crocant), uneori unse cu smântână. Este un preparat de sărbătoare și de duminică, considerat un remediu pentru mahmureală."
    ],
    nutrition: { calories: 450, protein: 35, carbs: 40, fat: 15, fiber: 8 }
  },

  "Fajitas": {
    title: "Fajitas de Pui/Vită (La Tigaie Încinsă)",
    servings: 4,
    prepTime: "20 min (+1h marinare)",
    cookTime: "15 min",
    ingredients: [
      { name: "Piept pui / Fleică vită", amount: "600 g" },
      { name: "Ardei gras (tricolor)", amount: "3 buc" },
      { name: "Ceapă albă/roșie", amount: "2 buc" },
      { name: "Lime", amount: "2 buc" },
      { name: "Condimente (Chimen, Chili)", amount: "1 lingură" },
      { name: "Tortillas făină", amount: "8 buc" },
      { name: "Ulei", amount: "2 linguri" }
    ],
    steps: [
      "Tăierea și marinarea. Tăiați carnea în fâșii lungi de 1 cm grosime. Tăiați ardeii și ceapa julienne (fâșii), de aceeași grosime cu carnea.\n\nÎntr-un bol, amestecați carnea cu ulei, zeamă de lime, chimen, pudră de chili, usturoi pisat, sare și piper. Lăsați la marinat 30-60 de minute. Acidul frăgezește carnea, dar nu o lăsați prea mult (mai ales puiul) ca să nu devină făinoasă.",
      
      "Încingerea tigăii. Secretul Fajitas este căldura intensă. Folosiți o tigaie de fontă (skillet) și puneți-o pe foc mare până fumegă ușor. Dacă aveți plită de fontă pentru servire, încălziți-o și pe aceea în cuptor.\n\nNu aglomerați tigaia; dacă puneți totul deodată, se va fierbe în suc propriu.",
      
      "Gătirea cărnii. Puneți carnea în tigaie (scursă de excesul de marinadă). Lăsați-o nemișcată 1-2 minute să prindă crustă (sear), apoi întoarceți-o.\n\nGătiți rapid, 4-5 minute, până e făcută dar suculentă. Scoateți carnea pe o farfurie.",
      
      "Gătirea legumelor. În aceeași tigaie, cu sucurile rămase, adăugați ardeii și ceapa. Prăjiți-le la foc iute timp de 3-4 minute.\n\nTrebuie să fie 'al dente', crocante și cu urme de arsură neagră pe alocuri, nu moi și fierte.",
      
      "Combinarea. Puneți carnea înapoi peste legume pentru a se reîncălzi 30 de secunde. Stoarceți încă puțin lime deasupra pentru a deglaza tigaia și a ridica aromele de pe fund.\n\nAcesta este momentul când sfârâie zgomotos.",
      
      "Servirea. Aduceți tigaia sfârâind la masă (sau transferați pe platoul de fontă încins). Serviți imediat cu tortillas de făină calde, smântână, guacamole, salsa și brânză rasă. Fiecare își construiește propriul taco."
    ],
    nutrition: { calories: 500, protein: 35, carbs: 40, fat: 20, micronutrients: ["Vitamin C 80%"] }
  },

  "Mole Poblano": {
    title: "Mole Poblano (Pui cu Sos de Ciocolată și Ardei)",
    servings: 6,
    prepTime: "1 oră",
    cookTime: "1.5 ore",
    ingredients: [
      { name: "Pui (întreg, tranșat)", amount: "1.5 kg" },
      { name: "Ardei uscați (Ancho, Mulato)", amount: "6 buc" },
      { name: "Migdale, Arahide, Susan", amount: "100 g mix" },
      { name: "Ciocolată mexicană/neagră", amount: "50 g" },
      { name: "Stafide", amount: "2 linguri" },
      { name: "Condimente (Scorțișoară, Cuișoare)", amount: "un praf" },
      { name: "Tortilla veche", amount: "1 buc" },
      { name: "Supă de pui", amount: "1 L" }
    ],
    steps: [
      "Acesta este sosul național al Mexicului, complex și rafinat. Începeți prin a fierbe puiul în apă cu sare, ceapă și usturoi până este gătit. Păstrați supa și puiul.\n\nCurățați ardeii uscați de semințe și prăjiți-i ușor în ulei (câteva secunde) fără a-i arde (devin amari). Apoi hidratați-i în supă de pui fierbinte 20 de minute.",
      
      "Prăjirea ingredientelor uscate. În aceeași tigaie, prăjiți pe rând: migdalele, arahidele, susanul, stafidele, tortilla ruptă bucăți (pentru îngroșare), batonul de scorțișoară, cuișoarele și piperul boabe.\n\nScopul este să dezvoltați aromele fiecărui ingredient.",
      
      "Blendarea. Puneți ardeii hidratați și toate ingredientele prăjite în blender. Adăugați puțină supă de pui și o roșie coaptă. Mixați până obțineți o pastă foarte fină și groasă.\n\nPentru o textură de catifea, strecurați sosul prin sită, deși varianta rustică este și ea acceptată.",
      
      "Gătirea sosului (Mole). Încingeți puțin ulei într-o oală mare. Turnați pasta de Mole. Atenție, va stropi! Prăjiți pasta 5 minute, amestecând continuu, pentru a 'găti' aromele.\n\nÎncepeți să adăugați supă de pui treptat, până ajunge la consistența unei smântâni lichide.",
      
      "Ciocolata. Adăugați ciocolata neagră (sau tableta specială de ciocolată mexicană cu zahăr și scorțișoară). Amestecați până se topește. Ciocolata nu face sosul dulce, ci îi dă profunzime, culoare închisă și echilibrează iuțeala ardeilor.\n\nFierbeți la foc mic 20-30 de minute. Sosul se va închide la culoare și uleiul se va ridica la suprafață.",
      
      "Servirea. Puneți bucățile de pui fiert în sos și încălziți-le bine. Se servește puiul acoperit abundent cu sos Mole, presărat cu semințe de susan prăjite, alături de orez mexican și tortillas calde."
    ],
    nutrition: { calories: 650, protein: 40, carbs: 25, fat: 40, sodium: 800 }
  },

  "Churros mexicani": {
    title: "Churros Mexicani cu Zahăr și Scorțișoară",
    servings: 4,
    servingSize: "4-5 bucăți",
    pricePerServing: 8,
    prepTime: "15 min",
    cookTime: "20 min",
    ingredients: [
      { name: "Făină", amount: "250 g" },
      { name: "Apă", amount: "250 ml" },
      { name: "Unt", amount: "50 g" },
      { name: "Zahăr & Scorțișoară", amount: "pentru tăvălit" },
      { name: "Ou", amount: "1 buc (pt stilul mexican)" },
      { name: "Vanilie", amount: "1 linguriță" },
      { name: "Ulei", amount: "pt prăjit" },
      { name: "Sos de ciocolată/Caramel", amount: "dip" }
    ],
    steps: [
      "Diferența față de cei spanioli. Churros mexicani conțin adesea ou și vanilie, fiind mai pufoși în interior, și sunt tăvăliți obligatoriu prin zahăr cu scorțișoară (cei spanioli doar zahăr).\n\nPuneți apa, untul, sarea și o lingură de zahăr la fiert. Când clocotește, adăugați făina toată odată.",
      
      "Formarea aluatului. Amestecați energic cu o lingură de lemn pe foc mic timp de 1-2 minute, până când aluatul se adună într-o bilă și lasă o peliculă pe fundul oalei. Luați de pe foc.\n\nLăsați să se răcorească 5 minute. Adăugați oul și vanilia și mixați (cu mixerul sau lingura) până se încorporează complet și aluatul este lucios și neted.",
      
      "Pregătirea poșului. Puneți aluatul într-un poș rezistent cu dui stelat (stea deschisă). Forma de stea este crucială pentru a se găti uniform în interior; un cilindru simplu ar exploda sau ar rămâne crud.\n\nPregătiți o farfurie cu amestec de zahăr tos și multă scorțișoară măcinată.",
      
      "Prăjirea. Încălziți uleiul la 190°C. Spritați churros de 10-15 cm direct în ulei, tăind aluatul cu o foarfecă. Nu aglomerați tigaia.\n\nPrăjiți 2-3 minute pe fiecare parte până devin maro-aurii. Dacă uleiul e rece, vor fi uleioși.",
      
      "Tăvălirea. Scoateți churros pe hârtie absorbantă pentru doar câteva secunde, apoi, cât sunt încă fierbinți și uleioși, tăvăliți-i prin zahărul cu scorțișoară. Zahărul se va lipi de exterior.",
      
      "Servirea. Se servesc imediat, calzi. În Mexic, se mănâncă adesea cu sos de caramel (Cajeta - caramel din lapte de capră) sau sos de ciocolată picantă. Sunt crocanti, parfumați și irezistibili."
    ],
    nutrition: { calories: 400, protein: 5, carbs: 50, fat: 20, sugar: 25 }
  },

  // --- NEW ADDITIONS ---

  "Carnitas": {
    title: "Carnitas (Porc Confitat Mexican)",
    servings: 6,
    servingSize: "1 taco",
    pricePerServing: 15,
    prepTime: "20 min",
    cookTime: "3 ore",
    ingredients: [
      {name: "Spată de porc (cu grăsime)", amount: "1.5 kg"},
      {name: "Untură (sau ulei)", amount: "500 g"},
      {name: "Portocală (suc și coajă)", amount: "1 buc"},
      {name: "Coca-Cola sau Lapte", amount: "100 ml"},
      {name: "Ceapă", amount: "1 buc"},
      {name: "Usturoi", amount: "5 căței"},
      {name: "Oregano, Cimbru, Dafin", amount: "mix"}
    ],
    steps: [
      "Pregătirea cărnii. Tăiați carnea de porc în cuburi mari de 5-6 cm. Carnitas tradiționale necesită o carne cu grăsime (spată, ceafă) pentru a rămâne suculentă. Asezonați carnea cu sare.",
      
      "Lichidul de braisare. Într-o oală mare și grea (ceaun), puneți carnea și acoperiți-o cu untură topită sau ulei. Turnați sucul de la o portocală și adăugați cojile stoarse în oală. Adăugați 100ml de Coca-Cola (secretul pentru culoare caramel) sau lapte (pentru frăgezime).",
      
      "Aromatizarea. Adăugați ceapa tăiată în sferturi, căățeii de usturoi zdrobiți, foile de dafin, oregano și cimbru. Aduceți la fierbere, apoi reduceți focul la minim.",
      
      "Gătirea lentă (Confit). Lăsați să fiarbă încet (simmer) timp de 2.5 - 3 ore, fără capac. Lichidul (sucul de portocală și apa din carne) se va evapora treptat, lăsând la final doar grăsimea. Carnea se va confia în această grăsime.",
      
      "Rumenirea (Crisping). Când carnea este foarte fragedă, măriți puțin focul. Prăjiți bucățile de carne în propria grăsime din oală timp de 10-15 minute, amestecând cu grijă, până când exteriorul devine maro-închis și crocant.",
      
      "Servirea. Scoateți carnea și tocați-o grosier. Se servește în tortillas de porumb calde, cu ceapă tocată, coriandru, salsa verde și mult lime. Contrastul dintre exteriorul crocant și interiorul moale este esențial."
    ],
    nutrition: {calories: 450, protein: 30, carbs: 5, fat: 35}
  },

  "Tostadas": {
    title: "Tostadas de Pui (Tortillas Crocante cu Topping)",
    servings: 4,
    servingSize: "2 tostadas",
    pricePerServing: 15,
    prepTime: "20 min",
    cookTime: "15 min",
    ingredients: [
      {name: "Tortillas de porumb (uscate)", amount: "8 buc"},
      {name: "Fasole prăjită (Frijoles Refritos)", amount: "1 conservă"},
      {name: "Piept de pui fiert (Tinga)", amount: "400 g"},
      {name: "Salată Iceberg", amount: "tocată fin"},
      {name: "Smântână (Crema Mexicana)", amount: "100 g"},
      {name: "Brânză Queso Fresco/Feta", amount: "100 g"},
      {name: "Salsa", amount: "după gust"},
      {name: "Ulei", amount: "pt prăjit"}
    ],
    steps: [
      "Pregătirea bazei (Tostada). Dacă aveți tortillas de porumb proaspete, lăsați-le la uscat câteva ore. Apoi, prăjiți-le în baie de ulei încins până devin rigide, aurii și crocante (ca un chips uriaș plat). Scoateți-le pe hârtie absorbantă. Aceasta este baza farfuriei.",
      
      "Încălzirea fasolei. Puneți pasta de fasole (refried beans) într-o tigaie și încălziți-o. Dacă este prea groasă, adăugați puțină apă sau supă. Fasolea acționează ca un 'adeziv' pentru restul ingredientelor.",
      
      "Pregătirea puiului (Tinga). Desfaceți puiul fiert în fâșii. Puteți să-l amestecați cu un sos de roșii și ceapă (Tinga de Pollo) sau să-l folosiți simplu, asezonat cu sare și piper.",
      
      "Stratul de bază. Luați o tostada crocantă. Ungeți-o cu un strat generos de fasole prăjită pe toată suprafața. Acest strat previne alunecarea celorlalte ingrediente.",
      
      "Construirea turnului. Peste fasole, așezați un strat de pui. Apoi, puneți o mână mare de salată Iceberg tocată fin (ca un munte).",
      
      "Topping-urile finale. Peste salată, puneți o lingură de smântână, presărați brânza sfărâmată (Queso Fresco sau Feta) și adăugați salsa preferată. Se mănâncă cu mâna, cu mare grijă să nu se rupă baza crocantă (sau se acceptă dezordinea!)."
    ],
    nutrition: {calories: 350, protein: 20, carbs: 30, fat: 15}
  },

  "Huevos Rancheros": {
    title: "Huevos Rancheros (Ouă în Stil Fermier)",
    servings: 2,
    servingSize: "2 ouă",
    pricePerServing: 12,
    prepTime: "10 min",
    cookTime: "15 min",
    ingredients: [
      {name: "Ouă", amount: "4 buc"},
      {name: "Tortillas de porumb", amount: "4 buc"},
      {name: "Salsa Roja (Sos de roșii picant)", amount: "300 ml"},
      {name: "Fasole neagră (prăjită/boabe)", amount: "200 g"},
      {name: "Ulei", amount: "pt prăjit"},
      {name: "Coriandru & Avocado", amount: "decor"},
      {name: "Brânză", amount: "opțional"}
    ],
    steps: [
      "Sosul Ranchero. Dacă nu aveți salsa gata făcută: căliți ceapa și usturoiul, adăugați roșii cuburi și ardei iute (jalapeno/serrano). Fierbeți 10 minute până se îngroașă, apoi blendați grosier. Sosul trebuie să fie cald.",
      
      "Pregătirea fasolei. Încălziți fasolea neagră (fie pastă, fie boabe întregi condimentate). Fasolea este acompaniamentul clasic.",
      
      "Prăjirea tortillas. Treceți tortillas de porumb prin ulei încins rapid (10-15 secunde). Nu le faceți crocante ca la tostada, ci doar moi și pliabile, dar sigilate de ulei pentru a nu absorbi sosul imediat. Scurgeți-le.",
      
      "Ochiurile. În aceeași tigaie, prăjiți ouăle ochiuri (sunny side up). Albușul trebuie să fie gătit, gălbenușul moale și curgător.",
      
      "Asamblarea. Așezați două tortillas pe farfurie (ușor suprapuse sau separate). Întindeți puțină fasole pe tortilla (opțional). Așezați câte un ou ochi pe fiecare tortilla.",
      
      "Înecare în sos. Turnați sosul Salsa Roja fierbinte peste albușul ouălor și peste marginile tortillei, lăsând gălbenușul vizibil. Presărați coriandru, brânză și serviți cu felii de avocado. Se mănâncă cu furculița și cuțitul."
    ],
    nutrition: {calories: 400, protein: 18, carbs: 25, fat: 22}
  },

  "Tres Leches Cake": {
    title: "Tres Leches (Prăjitura cu 3 Tipuri de Lapte)",
    servings: 12,
    servingSize: "1 pătrat",
    pricePerServing: 8,
    prepTime: "30 min (+4h rece)",
    cookTime: "30 min",
    ingredients: [
      {name: "Făină", amount: "200 g"},
      {name: "Ouă", amount: "5 buc"},
      {name: "Zahăr", amount: "150 g"},
      {name: "Lapte condensat îndulcit", amount: "1 conservă (400g)"},
      {name: "Lapte evaporat (neîndulcit)", amount: "1 conservă (350ml)"},
      {name: "Smântână lichidă (Frișcă)", amount: "200 ml + 300 ml (top)"},
      {name: "Vanilie & Scorțișoară", amount: "aromă"},
      {name: "Cireșe confiate/Fructe", amount: "decor"}
    ],
    steps: [
      "Blatul de pandișpan (Sponge). Separați ouăle. Bateți albușurile spumă tare cu jumătate din zahăr. Bateți gălbenușurile cu restul de zahăr și vanilia până se deschid la culoare. Încorporați gălbenușurile în albușuri, apoi cerneți făina și amestecați ușor (folding). Nu folosiți unt sau ulei - blatul trebuie să fie sec pentru a absorbi lichidul.",
      
      "Coacerea. Turnați într-o tavă dreptunghiulară unsă. Coaceți la 180°C timp de 25-30 de minute, până trece testul scobitorii. Lăsați să se răcească complet în tavă.",
      
      "Sosul Tres Leches. Într-un bol, amestecați cele trei tipuri de lapte: laptele condensat (dulce), laptele evaporat (bogat) și smântâna lichidă (grasă). Adăugați puțină vanilie sau rom.",
      
      "Perforarea. Când blatul e rece, înțepați-l pe toată suprafața cu o furculiță sau un băț de frigăruie. Faceți multe găuri, până la fund.",
      
      "Însiroparea. Turnați încet amestecul de lapte peste blat, lingură cu lingură, insistând pe margini. La început va părea prea mult lichid, dar blatul îl va absorbi ca un burete. Acoperiți și lăsați la frigider minim 4 ore sau peste noapte (esențial!).",
      
      "Topping-ul. Înainte de servire, bateți restul de frișcă cu puțin zahăr și vanilie până se întărește. Întindeți frișca peste prăjitura însiropată. Presărați scorțișoară măcinată sau puneți câte o cireașă/căpșună pe fiecare porție. Se servește foarte rece și zemoasă."
    ],
    nutrition: {calories: 450, protein: 8, carbs: 55, fat: 18, sugar: 40}
  }
};
