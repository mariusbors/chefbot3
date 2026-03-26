
import { Recipe } from '../../types';

export const SPANISH_RECIPES: Record<string, Recipe> = {
  "Calamares fritos": {
    title: "Calamari Pane Crocanți (A la Romana)",
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
      "Curățarea și Uscarea (Pas critic). Spălați tuburile de calamar și curățați pielița fină dacă există. Tăiați-le în inele de 1 cm. Uscați-le extrem de bine cu prosoape de hârtie. Umiditatea este inamicul crustei crocante.",
      
      "Frăgezirea (Opțional). Dacă aveți timp, marinați inelele în lapte sau apă minerală timp de 30 de minute, apoi uscați-le din nou. Aceasta ajută calamarul să fie mai fraged.",

      "Mixul uscat. Într-un bol larg, amestecați făina cu amidonul de porumb (secretul pentru extra crocanță), sarea, piperul și un praf de boia. Nu puneți ou, stilul Andaluz este doar cu făină.",
      
      "Împachetarea. Dați inelele de calamar prin mixul de făină, în tranșe mici. Scuturați-le bine de excesul de făină într-o sită. Trebuie să aibă doar un strat fin și uniform de praf alb.",
      
      "Prăjirea. Încingeți o baie de ulei la 180-190°C. Prăjiți calamarii timp de exact 2 minute, până devin aurii. Nu aglomerați tigaia. Dacă îi prăjiți prea mult, devin tari ca guma.",
      
      "Servirea. Scoateți-i pe hârtie absorbantă. Sărați imediat cât sunt fierbinți. Serviți-i instantaneu cu sferturi de lămâie și sos tartar sau alioli."
    ],
    nutrition: { calories: 350, protein: 25, carbs: 20, fat: 18, sodium: 400 }
  },
  
  "Paella": {
    title: "Paella Valenciana (Originală)",
    servings: 6,
    prepTime: "30 min",
    cookTime: "45 min",
    ingredients: [
      { name: "Orez cu bob rotund (Bomba)", amount: "500 g" },
      { name: "Carne de pui", amount: "500 g" },
      { name: "Carne de iepure (opțional)", amount: "300 g" },
      { name: "Fasole verde lată (Bachoquetes)", amount: "250 g" },
      { name: "Fasole albă mare (Garrofó)", amount: "150 g" },
      { name: "Roșii coapte", amount: "2 buc" },
      { name: "Șofran", amount: "1 g (generos)" },
      { name: "Supă de pui/apă", amount: "1.5 L" },
      { name: "Ulei de măsline", amount: "100 ml" },
      { name: "Ramură de rozmarin", amount: "1 buc" }
    ],
    steps: [
      "Pregătirea cărnii și a tigăii. Folosiți o tigaie specifică largă și plată (paellera). Încălziți uleiul de măsline la foc mediu-iute. Sărați carnea de pui și iepure tăiată în bucăți potrivite (cu os).\n\nPrăjiți carnea foarte bine pe toate părțile până devine brun-aurie. Nu o grăbiți; această caramelizare a cărnii va da gustul de bază al întregii paella. Împingeți carnea spre marginile tigăii când este gata.",
      
      "Legumele și Sofrito-ul. Adăugați fasolea verde lată și fasolea albă (garrofó) în centrul tigăii. Căliți-le câteva minute până se înmoaie ușor. Faceți loc în mijloc și adăugați roșiile date pe răzătoare (fără coajă).\n\nPrăjiți roșiile până se evaporă apa și pasta începe să sfârâie și să se închidă la culoare. Amestecați totul împreună (carne și legume) și adăugați boia dulce, având grijă să nu o ardeți (amestecați rapid).",
      
      "Infuzia de arome. Turnați apa sau supa fierbinte peste ingrediente până aproape de buza tigăii. Adăugați firele de șofran (eventual zdrobite și dizolvate în puțină apă caldă) și ramura de rozmarin.\n\nLăsați să fiarbă la foc iute timp de 15-20 de minute pentru a crea o supă concentrată și aromată. Scoateți ramura de rozmarin după 5 minute pentru a nu domina gustul. Nivelul lichidului trebuie să scadă până la niturile mânerelor tigăii.",
      
      "Adăugarea orezului. Când supa a scăzut și gustul este intens, distribuiți orezul în ploaie, în formă de cruce, peste tigaie. Folosiți orez Bomba sau un orez cu bob rotund care absoarbe mult lichid fără a se sfărâma.\n\nCu o lingură de lemn, distribuiți orezul uniform pe toată suprafața tigăii, asigurându-vă că toate boabele sunt acoperite de lichid. Din acest moment, regula de aur este: NU MAI AMESTECAȚI NICIODATĂ!",
      
      "Fierberea orezului. Fierbeți la foc iute primele 8-10 minute, până când orezul începe să apară la suprafață. Apoi, reduceți focul la mediu-mic. Dacă lichidul scade prea repede, acoperiți parțial cu folie de aluminiu, dar nu adăugați apă rece.\n\nOrezul trebuie să absoarbă tot lichidul și să rămână întreg, uscat și separat, nu cremos ca la risotto.",
      
      "Socarrat-ul (Crusta). În ultimele 1-2 minute de gătire, când auziți un sfârâit specific (ca de prăjeală, nu de fierbere), măriți focul la maxim pentru scurt timp. Aceasta va carameliza orezul de pe fundul tigăii, formând crusta delicioasă și crocantă numită 'socarrat'.\n\nOpriți focul, acoperiți tigaia cu un prosop curat și lăsați să se odihnească 5 minute. Se servește cu felii de lămâie, direct din tigaie."
    ],
    nutrition: { calories: 650, protein: 40, carbs: 70, fat: 25, micronutrients: ["Iron", "Vitamin C"] }
  },

  "Tortilla Española": {
    title: "Tortilla de Patatas (Omletă cu Cartofi)",
    servings: 4,
    prepTime: "15 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Cartofi (soi făinos)", amount: "1 kg" },
      { name: "Ouă mari", amount: "6-8 buc" },
      { name: "Ceapă galbenă", amount: "1 mare" },
      { name: "Ulei de măsline", amount: "500 ml (pt prăjit)" },
      { name: "Sare", amount: "după gust" }
    ],
    steps: [
      "Tăierea ingredientelor. Curățați cartofii și tăiați-i în felii subțiri și neregulate sau cubulețe mici. Nu îi spălați după tăiere pentru a păstra amidonul care ajută la legare. Tăiați ceapa solzișori sau cubulețe.\n\nDeși există o dezbatere eternă în Spania (cu sau fără ceapă - 'concebollistas' vs 'sincebollistas'), varianta cu ceapă este mai dulce și mai suculentă.",
      
      "Confitarea cartofilor (Poșarea). Într-un tigaie largă, încălziți o cantitate generoasă de ulei de măsline (cartofii trebuie aproape să plutească). Adăugați cartofii și ceapa. Focul trebuie să fie mediu.\n\nScopul nu este să prăjiți cartofii ca pe 'french fries' crocanți, ci să îi gătiți în ulei ('confit') până devin moi și se topesc în gură. Acest proces durează aproximativ 15-20 de minute. Amestecați ocazional cu grijă.",
      
      "Scurgerea și amestecarea. Când cartofii sunt moi și încep să se rupă, scoateți-i cu o spumieră într-o sită și lăsați uleiul să se scurgă (păstrați uleiul pentru alte mâncăruri, este foarte aromat).\n\nÎntr-un bol mare, bateți ouăle cu sare. Adăugați cartofii și ceapa fierbinte direct în ouăle bătute. Acesta este un secret crucial: căldura cartofilor va găti ușor ouăle.",
      
      "Odihna compoziției. Lăsați amestecul de cartofi și ouă să stea în bol timp de 10-15 minute. Cartofii vor absorbi o parte din ou, iar compoziția se va îngroșa.\n\nAceastă etapă asigură o tortilla compactă și cremoasă, nu una uscată cu cartofi separați de ou.",
      
      "Gătirea primei fețe. Într-un tigaie antiaderentă de 24-26 cm, încingeți 2 linguri din uleiul păstrat. Când fumegă ușor, turnați toată compoziția. Mișcați tigaia rapid pentru ca oul să nu se lipească.\n\nReduceți focul la mediu. Folosind o spatulă, rotunjiți marginile tortillei, împingându-le spre interior pentru a crea o formă de disc perfectă. Gătiți 3-4 minute până când baza este aurie și stabilă.",
      
      "Întoarcerea (La Vuelta). Acesta este momentul adevărului. Așezați o farfurie plată mare peste tigaie. Cu o mișcare fermă și rapidă, răsturnați tigaia astfel încât tortilla să cadă pe farfurie (cu partea coaptă în sus).\n\nGlisați tortilla înapoi în tigaie pentru a găti și cealaltă parte. Mai lăsați 2-3 minute. Mijlocul trebuie să rămână ușor moale ('baveuse') pentru o experiență autentică. Se servește caldă sau la temperatura camerei, tăiată triunghiuri sau cubulețe."
    ],
    nutrition: { calories: 400, protein: 15, carbs: 35, fat: 25, sodium: 600 }
  },

  "Gazpacho": {
    title: "Gazpacho Andaluz (Supă Rece)",
    servings: 4,
    prepTime: "20 min (+2h rece)",
    cookTime: "0 min",
    ingredients: [
      { name: "Roșii foarte coapte (Roma)", amount: "1 kg" },
      { name: "Ardei gras verde (Italian)", amount: "1 buc" },
      { name: "Castravete", amount: "1 buc" },
      { name: "Ceapă", amount: "1 mică" },
      { name: "Usturoi", amount: "1 cățel" },
      { name: "Ulei de măsline extravirgin", amount: "100 ml" },
      { name: "Oțet de Sherry (Jerez)", amount: "30 ml" },
      { name: "Pâine veche (miez)", amount: "50 g" }
    ],
    steps: [
      "Pregătirea ingredientelor. Spălați bine toate legumele. Gazpacho este o supă crudă, deci calitatea legumelor dictează gustul. Tăiați roșiile în sferturi (nu e nevoie să le decojiți dacă aveți un blender puternic).\n\nCurățați castravetele parțial (lăsând puțină coajă pentru culoare și textură) și tăiați-l bucăți. Curățați ardeiul de semințe. Înmuiați miezul de pâine în puțină apă dacă este foarte tare.",
      
      "Macerarea (Opțional, dar recomandat). Puneți toate legumele tăiate, pâinea, usturoiul, oțetul și sarea într-un bol mare. Amestecați bine, acoperiți și lăsați la frigider peste noapte (sau măcar 2 ore).\n\nAcest pas permite aromelor să se întrepătrundă și sucurile să iasă din legume, facilitând blendarea și intensificând gustul.",
      
      "Blendarea. Puneți tot amestecul (inclusiv sucul lăsat) într-un blender de mare viteză. Mixați la putere maximă timp de 2-3 minute.\n\nTrebuie să obțineți o supă extrem de fină, omogenă, de o culoare portocaliu-roșcată vibrantă.",
      
      "Emulsionarea cu ulei. În timp ce blenderul merge la viteză medie, începeți să turnați uleiul de măsline în fir subțire. Această tehnică creează o emulsie stabilă, similară cu maioneza.\n\nSupa va deveni mai deschisă la culoare, mai cremoasă și mai catifelată datorită uleiului. Gustați și ajustați sarea și oțetul. Trebuie să aibă un 'kick' acidulat.",
      
      "Strecurarea (Pentru finețe). Pentru un Gazpacho de restaurant, treceți supa printr-o sită fină (chinois), apăsând cu un polonic pentru a extrage tot lichidul și a lăsa în urmă cojile și semințele.\n\nDacă preferați un stil rustic (Salmorejo-style), puteți sări peste acest pas, dar textura va fi mai grunjoasă.",
      
      "Răcirea și servirea. Puneți supa la frigider până devine foarte rece. Gazpacho se servește aproape înghețat.\n\nSe servește în boluri sau pahare, decorat cu picături de ulei de măsline și mici cubulețe (brunoise) de castravete, ardei și crutoane de pâine pentru contrast de textură."
    ],
    nutrition: { calories: 250, protein: 4, carbs: 20, fat: 18, micronutrients: ["Vitamin C", "Lycopene"] }
  },

  "Jamón Ibérico": {
    title: "Jamón Ibérico cu Pan con Tomate",
    servings: 4,
    prepTime: "15 min",
    cookTime: "5 min",
    ingredients: [
      { name: "Jamón Ibérico (felii)", amount: "200 g" },
      { name: "Pâine rustică (ciabatta/baghetă)", amount: "1 pâine" },
      { name: "Roșii foarte coapte", amount: "3 buc" },
      { name: "Usturoi", amount: "2 căței" },
      { name: "Ulei de măsline extravirgin", amount: "generos" },
      { name: "Sare de mare (fulgi)", amount: "un praf" }
    ],
    steps: [
      "Temperarea șuncii. Scoateți feliile de Jamón Ibérico din frigider cu cel puțin 30 de minute înainte de servire. Dacă sunt ambalate în vid, deschideți pachetul.\n\nGrăsimea din șuncă trebuie să ajungă la temperatura camerei și să devină translucidă și lucioasă ('să transpire'). Dacă o serviți rece, pierdeți 80% din aromă și textura onctuoasă.",
      
      "Pregătirea roșiilor. Pentru 'Pan con Tomate' (Pâine cu roșii - stil catalan), aveți nevoie de roșii foarte coapte și zemoase. Tăiați roșiile pe jumătate, orizontal.\n\nDați roșiile pe o răzătoare mare, păstrând doar pulpa și sucul, și aruncând coaja care rămâne în mână. Puneți pulpa într-un bol și amestecați-o cu un praf de sare și o lingură de ulei de măsline.",
      
      "Prăjirea pâinii. Tăiați pâinea în felii oblice, groase de 1.5 cm. Prăjiți feliile pe grătar, în cuptor sau într-o tigaie grill până devin crocante și aurii, dar cu mijlocul încă puțin moale.\n\nPâinea trebuie să fie suficient de robustă pentru a susține topping-ul umed fără să se dezintegreze.",
      
      "Aromatizarea cu usturoi. Imediat ce pâinea este prăjită și fierbinte, luați un cățel de usturoi curățat și tăiat în jumătate. Frecați energic suprafața aspră a pâinii cu usturoiul.\n\nCăldura pâinii va topi usturoiul și va impregna coaja cu o aromă subtilă, dar esențială.",
      
      "Asamblarea 'Pan con Tomate'. Puneți o lingură generoasă de pulpă de roșii pe fiecare felie de pâine și întindeți-o uniform. Pâinea trebuie să fie bine îmbibată, dar nu fleașcă.\n\nStropiți cu încă un fir de ulei de măsline extravirgin de calitate superioară.",
      
      "Servirea. Aranjați feliile de Jamón Ibérico deasupra pâinii cu roșii, lăsându-le să cadă în valuri (chiffonnade), nu plate. Grăsimea șuncii se va topi ușor de la căldura pâinii.\n\nServiți imediat. Este cea mai pură și delicioasă expresie a tapas-urilor spaniole."
    ],
    nutrition: { calories: 350, protein: 25, carbs: 30, fat: 15, sodium: 900 }
  },

  "Croquetas": {
    title: "Croquetas de Jamón (Crochete cu Șuncă)",
    servings: 6,
    prepTime: "45 min (+4h rece)",
    cookTime: "20 min",
    ingredients: [
      { name: "Jamón Serrano/Ibérico", amount: "200 g" },
      { name: "Lapte integral", amount: "1 L" },
      { name: "Unt", amount: "100 g" },
      { name: "Făină", amount: "100 g" },
      { name: "Ceapă", amount: "1 mică" },
      { name: "Nucșoară", amount: "un praf" },
      { name: "Ouă & Pesmet", amount: "pt panadă" },
      { name: "Ulei", amount: "pt prăjit" }
    ],
    steps: [
      "Infuzarea laptelui (Opțional). Tăiați șunca (Jamón) în cubulețe extrem de mici. Dacă aveți un os de șuncă, fierbeți-l în lapte 20 de minute pentru o aromă intensă, apoi strecurați laptele. Dacă nu, folosiți laptele simplu, cald.\n\nTocați ceapa atât de fin încât să devină pastă (sau dați-o pe răzătoare).",
      
      "Baza Roux. Topiți untul într-o cratiță largă. Adăugați ceapa și căliți-o la foc mic până devine transparentă (5-6 min), fără să se ardă. Adăugați cubulețele de șuncă și căliți-le 1 minut pentru a le activa grăsimea.\n\nAdăugați făina toată odată și amestecați energic timp de 2-3 minute. Făina trebuie să se gătească pentru a pierde gustul crud.",
      
      "Bechamel-ul gros. Începeți să turnați laptele cald, puțin câte puțin, amestecând continuu și energic cu un tel sau o lingură de lemn. Nu vă grăbiți. Amestecul se va îngroșa treptat.",
      
      "Gătirea finală a aluatului. Continuați să gătiți sosul, amestecând constant, timp de cel puțin 10-15 minute la foc mic. Bechamel-ul pentru crochete trebuie să fie mult mai gros decât cel pentru lasagna; trebuie să se desprindă de pe pereții vasului ca un aluat moale. Asezonați cu nucșoară și sare.",

      "Răcirea și formarea. Întindeți compoziția într-o tavă, acoperiți cu folie de plastic direct pe suprafață (contact) și lăsați la frigider minim 4 ore (sau peste noapte) până se întărește complet. Apoi, cu mâinile unse sau cu două linguri, formați cilindri sau bile din aluatul rece.",

      "Panada și prăjirea. Treceți crochetele prin făină, ou bătut și pesmet fin (sau Panko). Prăjiți-le în baie de ulei încins (180°C) până devin aurii. Serviți-le calde, când interiorul este cremos și exteriorul crocant."
    ],
    nutrition: { calories: 300, protein: 12, carbs: 25, fat: 18, sodium: 600 }
  },

  // --- NEW ADDITIONS ---

  "Patatas Bravas": {
    title: "Patatas Bravas (Cartofi cu Sos Picant)",
    servings: 4,
    servingSize: "1 porție (200g)",
    pricePerServing: 10,
    prepTime: "20 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Cartofi", amount: "1 kg" },
      { name: "Ulei de măsline", amount: "pentru prăjit" },
      { name: "Făină", amount: "1 lingură" },
      { name: "Boia dulce", amount: "1 lingură" },
      { name: "Boia iute (Picante)", amount: "1 lingură" },
      { name: "Supă de pui/apă", amount: "250 ml" },
      { name: "Oțet", amount: "1 linguriță" },
      { name: "Alioli (opțional)", amount: "pentru servire" }
    ],
    steps: [
      "Pregătirea cartofilor. Curățați cartofii și tăiați-i în bucăți neregulate de aproximativ 2-3 cm ('bravas' - tăietură rustică). Nu îi tăiați cuburi perfecte. Spălați-i și uscați-i bine.",
      "Confitarea (Prima gătire). Încălziți ulei din abundență într-o tigaie adâncă la temperatură medie-joasă (120-130°C). Puneți cartofii și gătiți-i încet (poșare în ulei) timp de 10-15 minute până când sunt moi în interior, dar nu rumeniți. Scoateți-i și lăsați-i să se răcească.",
      "Salsa Brava. Într-o cratiță, încălziți 3 linguri de ulei. Adăugați făina și prăjiți-o un minut. Luați de pe foc și adăugați ambele tipuri de boia (dulce și iute). Amestecați rapid să nu se ardă.",
      "Finalizarea sosului. Adăugați supa de pui treptat, amestecând cu telul ca la bechamel. Puneți din nou pe foc și fierbeți câteva minute până se îngroașă. Adăugați oțetul și sarea. Sosul trebuie să fie roșu-portocaliu și picant.",
      "A doua prăjire (Crocănțimea). Încălziți uleiul la temperatura maximă (190°C). Prăjiți cartofii răciți timp de 2-3 minute până devin foarte crocanți și aurii. Scoateți-i pe șervete.",
      "Servirea. Puneți cartofii într-un bol. Turnați Salsa Brava fierbinte deasupra. Opțional, adăugați și un moț de sos Alioli (maioneză cu usturoi) pentru contrast."
    ],
    nutrition: { calories: 450, protein: 5, carbs: 50, fat: 25, sodium: 500 }
  },

  "Churros": {
    title: "Churros cu Ciocolată Caldă (Stil Spaniol)",
    servings: 4,
    servingSize: "4-5 bucăți",
    pricePerServing: 8,
    prepTime: "20 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Făină albă", amount: "250 g" },
      { name: "Apă", amount: "250 ml" },
      { name: "Sare", amount: "1/2 linguriță" },
      { name: "Ulei", amount: "pentru prăjit" },
      { name: "Zahăr tos", amount: "pentru tăvălit" },
      { name: "Ciocolată neagră (70%)", amount: "200 g" },
      { name: "Lapte", amount: "100 ml" },
      { name: "Amidon", amount: "1 linguriță (pt ciocolată)" }
    ],
    steps: [
      "Aluatul simplu. Rețeta spaniolă clasică nu conține ouă sau unt, doar făină, apă și sare. Puneți apa cu sarea la fiert. Când clocotește, luați de pe foc și turnați toată făina odată.",
      "Frământarea. Amestecați energic cu o lingură de lemn până când aluatul se leagă și se desprinde de pe pereți. Va fi un aluat foarte dens și greu. Lăsați-l să se răcească puțin până îl puteți atinge.",
      "Modelarea. Puneți aluatul într-un aparat de churros sau un poș foarte rezistent cu dui stelat. Forma de stea este critică - crestele măresc suprafața crocantă și previn explozia aluatului în ulei (permite aburului să iasă uniform).",
      "Prăjirea. Încălziți uleiul la 190°C. Spritați bucăți de aluat de 10-15 cm direct în ulei, tăindu-le cu o foarfecă. Prăjiți 3-4 minute până sunt aurii și crocante.",
      "Ciocolata (Chocolate a la Taza). Într-un ibric, topiți ciocolata în lapte. Dizolvați amidonul în puțin lapte rece și adăugați-l. Fierbeți până când ciocolata este foarte groasă, aproape ca o budincă.",
      "Servirea. Scoateți churros pe hârtie absorbantă. Tăvăliți-i prin zahăr tos (fără scorțișoară în Spania, de obicei). Se servesc fierbinți, înmuiați în ciocolata densă."
    ],
    nutrition: { calories: 500, protein: 6, carbs: 60, fat: 25, sugar: 30 }
  },

  "Pimientos de Padrón": {
    title: "Pimientos de Padrón (Ardei Verzi Fripți)",
    servings: 4,
    servingSize: "1 porție (100g)",
    pricePerServing: 15,
    prepTime: "5 min",
    cookTime: "5 min",
    ingredients: [
      { name: "Ardei Padrón", amount: "400 g" },
      { name: "Ulei de măsline", amount: "3 linguri" },
      { name: "Sare de mare (Fleur de sel/Maldon)", amount: "generos" }
    ],
    steps: [
      "Pregătirea ardeilor. Spălați ardeii Padrón (mici, verzi) și uscați-i foarte bine. Dacă sunt umezi, uleiul va stropi violent. Lăsați codițele intacte - servesc drept mâner pentru a-i mânca.",
      "Încingerea uleiului. Într-o tigaie largă, încălziți uleiul de măsline la foc mediu-iute până aproape de punctul de fum. Ardeii trebuie să se prăjească rapid ('blistering').",
      "Prăjirea. Aruncați ardeii în tigaie într-un singur strat. Nu îi înghesuiți. Lăsați-i să sfârâie.",
      "Bășicarea. Gătiți-i 3-5 minute, întorcându-i și scuturând tigaia des. Pielea lor trebuie să se umfle, să facă bășici albe și să se carbonizeze ușor pe alocuri. Pulpa trebuie să se înmoaie.",
      "Scurgerea. Scoateți ardeii din tigaie cu o spumieră și puneți-i pe o farfurie.",
      "Sărarea și servirea. Imediat, cât sunt fierbinți și uleioși, presărați sare de mare grunjoasă (fulgi) din abundență. Se servesc ca atare. Legenda spune că 'unos pican e otros no' (unii pișcă, alții nu).",
    ],
    nutrition: { calories: 80, protein: 1, carbs: 5, fat: 6, sodium: 400 }
  },

  "Pulpo a la Gallega": {
    title: "Pulpo a la Gallega (Caracatiță în Stil Galician)",
    servings: 4,
    servingSize: "1 platou (200g)",
    pricePerServing: 45,
    prepTime: "20 min",
    cookTime: "45 min",
    ingredients: [
      { name: "Caracatiță întreagă (congelată)", amount: "1.5 kg" },
      { name: "Cartofi", amount: "4 medii" },
      { name: "Boia dulce (Pimentón de la Vera)", amount: "1 lingură" },
      { name: "Boia iute", amount: "un praf" },
      { name: "Ulei de măsline extravirgin", amount: "generos" },
      { name: "Sare mare", amount: "1 lingură" }
    ],
    steps: [
      "Pregătirea caracatiței. Este esențial să folosiți caracatiță care a fost congelată în prealabil (congelarea rupe fibrele tari) sau să o bateți bine. Curățați-o și spălați-o.",
      "Sperierea (Asustar). Puneți o oală mare cu apă la fiert (fără sare). Când clocotește, țineți caracatița de cap și scufundați tentaculele în apă de 3 ori consecutiv, timp de 2 secunde. Asta face ca tentaculele să se onduleze frumos și pielea să nu se rupă.",
      "Fierberea. Lăsați caracatița în apă și fierbeți-o la foc mediu timp de 35-45 de minute (depinde de mărime). Testați cu o scobitoare în partea cea mai groasă a tentaculului; trebuie să intre ușor, ca în unt. Lăsați-o să se odihnească în apa fierbinte 15 minute după oprirea focului.",
      "Cartofii (Cachelos). Scoateți caracatița. În aceeași apă roșiatică, fierbeți cartofii curățați și tăiați felii groase până sunt moi. Vor absorbi aroma de mare.",
      "Tăierea. Folosind o foarfecă de bucătărie (tradițional), tăiați tentaculele în rondele de 1-2 cm grosime.",
      "Montarea. Pe un platou de lemn (specific), așezați un strat de cartofi fierbinți. Deasupra puneți bucățile de caracatiță. Stropiți abundent cu ulei de măsline, presărați sare mare și ambele tipuri de boia (Pimentón). Serviți cald cu scobitori."
    ],
    nutrition: { calories: 350, protein: 30, carbs: 15, fat: 18, sodium: 800 }
  },

  "Fabada Asturiana": {
    title: "Fabada Asturiana (Fasole cu Cârnați și Șuncă)",
    servings: 6,
    servingSize: "1 bol (400g)",
    pricePerServing: 25,
    prepTime: "20 min (+12h înmuiere)",
    cookTime: "3 ore",
    ingredients: [
      { name: "Fasole albă mare (Fabes)", amount: "500 g" },
      { name: "Chorizo asturian (afumat)", amount: "2 buc" },
      { name: "Morcilla (sângerete afumat)", amount: "2 buc" },
      { name: "Lacón (spată afumată) sau slănină", amount: "200 g" },
      { name: "Ceapă", amount: "1 buc" },
      { name: "Usturoi", amount: "2 căței" },
      { name: "Șofran", amount: "un praf" }
    ],
    steps: [
      "Înmuierea. Puneți fasolea (soiul 'de la Granja' e ideal, boabe mari și untoase) la înmuiat în apă rece peste noapte. Puneți și carnea afumată (lacón) la desărat în alt bol dacă e foarte sărată.",
      "Fierberea (Compango). Puneți fasolea scursă într-o oală largă. Adăugați cărnurile întregi (chorizo, morcilla, slănina/lacón) deasupra - acest ansamblu de cărnuri se numește 'Compango'. Acoperiți cu apă rece (2 degete peste).",
      "Gătirea lentă. Aduceți la fierbere și spumuiți bine. Reduceți focul la minim. Adăugați ceapa și usturoiul întregi. Fierbeți foarte lent timp de 2.5 - 3 ore. Nu amestecați cu lingura pentru a nu sparge boabele; doar scuturați oala din toarte.",
      "Sperierea fasolei. De 2-3 ori în timpul fierberii, adăugați puțină apă rece ('asustar les fabes') pentru a opri fierberea scurt. Se spune că asta ajută la textura untoasă a fasolei.",
      "Șofranul. Dizolvați șofranul în puțină zeamă caldă și adăugați-l în oală. Acesta dă culoarea portocalie specifică sosului.",
      "Finalizarea. Când fasolea e moale, scoateți cărnurile și tăiați-le felii. Scoateți ceapa și usturoiul (le puteți pasa în sos pentru îngroșare). Serviți fasolea cu bucăți de carne deasupra. Sosul trebuie să fie gros și legat."
    ],
    nutrition: { calories: 700, protein: 35, carbs: 40, fat: 45, sodium: 1200 }
  },

  "Crema Catalana": {
    title: "Crema Catalana (Cremă de Zahăr Ars cu Lămâie)",
    servings: 4,
    servingSize: "1 formă (150g)",
    pricePerServing: 10,
    prepTime: "20 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Lapte integral", amount: "500 ml" },
      { name: "Gălbenușuri", amount: "4 buc" },
      { name: "Zahăr", amount: "100 g" },
      { name: "Amidon de porumb", amount: "20 g" },
      { name: "Coajă de lămâie", amount: "1 fâșie mare" },
      { name: "Scorțișoară", amount: "1 baton" },
      { name: "Zahăr (pt caramel)", amount: "4 linguri" }
    ],
    steps: [
      "Infuzarea laptelui. Puneți laptele într-o cratiță (păstrați o ceșcuță rece). Adăugați coaja de lămâie (doar partea galbenă) și batonul de scorțișoară. Încălziți până la fierbere, opriți focul și lăsați 10 minute să se infuzeze aromele.",
      "Pregătirea bazei. Într-un bol, bateți gălbenușurile cu zahărul până se albesc. Dizolvați amidonul în laptele rece păstrat și adăugați-l peste ouă.",
      "Temperarea. Scoateți coaja de lămâie și scorțișoara din laptele cald. Turnați laptele cald peste amestecul de ouă, amestecând continuu.",
      "Îngroșarea. Turnați totul înapoi în cratiță. Gătiți la foc mic, amestecând constant cu telul, până când crema se îngroașă și începe să fiarbă (primele bule). Spre deosebire de creme brulee care se coace, aceasta se fierbe pe plită.",
      "Răcirea. Turnați crema fierbinte în forme ceramice joase de lut (cazuelas). Lăsați să se răcească la temperatura camerei, apoi la frigider cel puțin 2-3 ore.",
      "Caramelizarea. Înainte de servire, presărați un strat uniform de zahăr deasupra. Ardeți zahărul cu un fier înroșit special (pala) sau cu o torță de bucătărie până devine o crustă de sticlă maronie. Serviți imediat."
    ],
    nutrition: { calories: 300, protein: 6, carbs: 35, fat: 12, sugar: 30 }
  },

  "Albondigas": {
    title: "Albondigas (Chiftele Spaniole în Sos)",
    servings: 4,
    servingSize: "5 chiftele",
    pricePerServing: 18,
    prepTime: "30 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Carne tocată (vită+porc)", amount: "500 g" },
      { name: "Miez de pâine & Lapte", amount: "pt înmuiat" },
      { name: "Ou", amount: "1 buc" },
      { name: "Usturoi & Pătrunjel", amount: "tocat" },
      { name: "Făină", amount: "pentru tăvălit" },
      { name: "Ceapă", amount: "1 mare" },
      { name: "Vin alb", amount: "100 ml" },
      { name: "Supă de vită/pui", amount: "300 ml" },
      { name: "Morcov", amount: "1 buc" }
    ],
    steps: [
      "Compoziția de chiftele. Înmuiați miezul de pâine în lapte. Într-un bol, amestecați carnea cu pâinea stoarsă, oul, usturoiul pisat, pătrunjelul tocat, sare și piper. Frământați bine.",
      "Formarea și prăjirea. Formați bile mici (cât o nucă). Tăvăliți-le prin făină și scuturați excesul. Prăjiți-le în ulei încins până se rumenesc pe toate părțile (nu trebuie să fie gătite complet în interior). Scoateți-le.",
      "Sosul (Salsa). În uleiul rămas, căliți ceapa tocată și morcovul tăiat cubulețe mici până se înmoaie. Adăugați o lingură de făină și gătiți 1 minut.",
      "Lichidul. Stingeți cu vinul alb și lăsați să se evapore alcoolul. Adăugați supa. Lăsați să fiarbă 10 minute. Pentru un sos fin, puteți blenda legumele acum (opțional).",
      "Fierberea împreună. Puneți chiftelele în sos. Sosul trebuie să le acopere pe jumătate. Lăsați să fiarbă încet (simmer) 15-20 de minute până când chiftelele sunt fragede și sosul s-a îngroșat.",
      "Servirea. Se servesc fierbinți, cu cartofi prăjiți cuburi (patatas dado) amestecați în sos sau cu multă pâine."
    ],
    nutrition: { calories: 500, protein: 25, carbs: 20, fat: 30, sodium: 800 }
  },

  "Escalivada": {
    title: "Escalivada (Legume Coapte Catalane)",
    servings: 4,
    servingSize: "1 platou (200g)",
    pricePerServing: 12,
    prepTime: "10 min",
    cookTime: "1 oră",
    ingredients: [
      { name: "Vinete", amount: "2 mari" },
      { name: "Ardei grași roșii", amount: "3 buc" },
      { name: "Ceapă", amount: "2 mari" },
      { name: "Ulei de măsline", amount: "generos" },
      { name: "Usturoi", amount: "2 căței" },
      { name: "Fileuri de anșoa (opțional)", amount: "4 buc" },
      { name: "Pâine țărănească", amount: "pt servire" }
    ],
    steps: [
      "Pregătirea pentru copt. Spălați legumele. Nu le curățați. Ungeți vinetele, ardeii și cepele întregi (necurățate) cu puțin ulei de măsline.",
      "Coacerea (Escalivar). Așezați legumele într-o tavă. Coaceți-le în cuptorul încins la 200°C timp de 45-60 de minute. Întoarceți-le ocazional. Coaja trebuie să fie arsă/neagră, iar interiorul moale.",
      "Aburirea. Scoateți legumele și acoperiți-le cu folie sau puneți-le într-o pungă de hârtie pentru 15 minute. Aburul va ajuta la curățare.",
      "Curățarea. Îndepărtați coaja arsă, semințele ardeilor și straturile exterioare ale cepei. Rupeți pulpa legumelor în fâșii lungi cu mâna (nu cu cuțitul, pentru textură rustică).",
      "Asezonarea. Așezați fâșiile de legume pe un platou, alternând culorile. Tocați usturoiul mărunt și presărați-l deasupra. Sărați generos.",
      "Marinarea. Turnați mult ulei de măsline extravirgin peste legume. Lăsați să stea la temperatura camerei cel puțin o oră. Serviți pe pâine prăjită, decorat cu fileuri de anșoa."
    ],
    nutrition: { calories: 200, protein: 4, carbs: 15, fat: 12, fiber: 8 }
  },

  "Flan Spaniol": {
    title: "Flan de Huevo (Cremă de Zahăr Ars)",
    servings: 6,
    servingSize: "1 formă (150g)",
    pricePerServing: 8,
    prepTime: "20 min",
    cookTime: "50 min",
    ingredients: [
      { name: "Ouă", amount: "4 buc" },
      { name: "Lapte", amount: "500 ml" },
      { name: "Zahăr (pt cremă)", amount: "100 g" },
      { name: "Zahăr (pt caramel)", amount: "150 g" },
      { name: "Vanilie/Coajă lămâie", amount: "aromă" }
    ],
    steps: [
      "Caramelul. Puneți 150g zahăr într-o cratiță cu o lingură de apă. Încălziți la foc mediu, fără a amesteca (doar rotiți cratița), până când zahărul devine lichid și capătă o culoare chihlimbarie închisă. Aveți grijă să nu-l ardeți!",
      "Tapetarea formelor. Turnați imediat caramelul fierbinte în formele de flan (ramekins sau o formă mare), rotind formele pentru a acoperi fundul și puțin din pereți. Lăsați să se întărească.",
      "Infuzarea. Încălziți laptele cu vanilia sau coaja de lămâie până aproape de fierbere. Lăsați să se răcească puțin.",
      "Baza de flan. Bateți ouăle cu restul de zahăr (nu spumă, doar cât să se omogenizeze, pentru a evita bulele de aer în flan). Turnați laptele cald peste ouă, amestecând încet.",
      "Strecurarea și coacerea. Treceți compoziția printr-o sită fină pentru a fi perfect netedă. Turnați în formele cu caramel. Așezați formele într-o tavă mare cu apă fierbinte (bain-marie) care să ajungă la jumătatea lor. Coaceți la 160°C timp de 45-50 minute până se încheagă.",
      "Răcirea și servirea. Lăsați să se răcească, apoi puneți la frigider peste noapte. Pentru a servi, treceți un cuțit pe margine și răsturnați pe o farfurie. Caramelul lichid va curge peste flan."
    ],
    nutrition: { calories: 300, protein: 8, carbs: 45, fat: 10, sugar: 40 }
  },

  "Turron": {
    title: "Turrón de Jijona (Nuga Moale de Migdale)",
    servings: 12,
    servingSize: "1 bucată (30g)",
    pricePerServing: 15,
    prepTime: "40 min (+24h presare)",
    cookTime: "15 min",
    ingredients: [
      { name: "Migdale măcinate (făină)", amount: "300 g" },
      { name: "Miere", amount: "200 g" },
      { name: "Zahăr", amount: "100 g" },
      { name: "Albuș de ou", amount: "1 buc" },
      { name: "Scorțișoară", amount: "1 linguriță" },
      { name: "Coajă de lămâie", amount: "rasă" }
    ],
    steps: [
      "Prăjirea migdalelor. Întindeți făina de migdale într-o tavă și coaceți-o ușor în cuptor la 150°C, amestecând des, până devine aurie. Lăsați să se răcească. Acest pas dezvoltă aroma.",
      "Siropul de miere. Într-o cratiță, încălziți mierea și zahărul la foc mic. Amestecați până se topește zahărul și obțineți un sirop gros. Luați de pe foc.",
      "Bezeaua. Bateți albușul spumă tare. Adăugați siropul de miere fierbinte în fir subțire peste albuș, mixând continuu (ca la nuga italiană), până obțineți o compoziție albă și lucioasă.",
      "Pasta de migdale. Încorporați migdalele prăjite, scorțișoara și coaja de lămâie în bezea. Amestecați cu o lingură de lemn sau frământați cu mâna unsă cu ulei, până obțineți o pastă densă și uleioasă.",
      "Presarea. Puneți pasta într-o formă dreptunghiulară tapetată cu hârtie de copt (sau hârtie de orez comestibilă). Nivelați bine. Puneți o greutate deasupra (o altă tavă cu conserve) pentru a compacta turrón-ul și a scoate excesul de ulei.",
      "Maturarea. Lăsați la presat într-un loc răcoros timp de cel puțin 24-48 de ore. Uleiul de migdale va lega totul. Tăiați în batoane și serviți de Sărbători."
    ],
    nutrition: { calories: 250, protein: 6, carbs: 25, fat: 15, sugar: 20 }
  }
};
