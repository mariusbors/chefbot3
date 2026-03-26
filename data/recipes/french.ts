
import { Recipe } from '../../types';

export const FRENCH_RECIPES: Record<string, Recipe> = {
  "Coq au Vin": {
    title: "Coq au Vin (Pui în Vin Roșu)",
    servings: 4,
    servingSize: "1 porție (400g)",
    pricePerServing: 28,
    prepTime: "30 min (+marinare)",
    cookTime: "2 ore",
    ingredients: [
      { name: "Pui întreg (sau pulpe/piept)", amount: "1.5 kg" },
      { name: "Vin roșu sec (Burgundy)", amount: "750 ml" },
      { name: "Bacon (Lardon)", amount: "200 g" },
      { name: "Ciuperci Champignon", amount: "400 g" },
      { name: "Ceapă perlată (sau mică)", amount: "200 g" },
      { name: "Morcovi", amount: "2 buc" },
      { name: "Unt", amount: "50 g" },
      { name: "Făină", amount: "2 linguri" },
      { name: "Supă de pui/vită", amount: "250 ml" },
      { name: "Cimbru, Dafin", amount: "1 legătură" }
    ],
    steps: [
      "Marinarea (Opțional, dar recomandat). Pentru un gust profund, tăiați puiul în bucăți și puneți-l într-un bol mare cu morcovii felii, ceapa tăiată grosier, cimbrul, dafinul și piperul boabe. Turnați vinul roșu peste pui până îl acoperă.\n\nLăsați la marinat în frigider peste noapte (sau măcar 4 ore). Dacă vă grăbiți, puteți sări peste acest pas, dar carnea nu va avea acea culoare violet-închisă specifică.",
      
      "Pregătirea bazei (Lardons). Scoateți puiul din marinadă și uscați-l bine cu șervete de hârtie (carnea udă nu se rumenește). Tăiați baconul în bastonașe (lardons). Într-o cratiță grea de fontă (Dutch Oven), prăjiți baconul la foc mediu până devine crocant și își lasă grăsimea.\n\nScoateți baconul cu o spumieră, lăsând grăsimea în oală. Această grăsime afumată va fi baza de gătire pentru pui.",
      
      "Rumenirea puiului. În grăsimea încinsă rămasă, adăugați bucățile de pui (în tranșe, nu le înghesuiți). Prăjiți-le pe toate părțile până capătă o crustă brun-aurie închisă. Această reacție Maillard dă gustul final al sosului.\n\nScoateți puiul pe o farfurie. În aceeași oală, adăugați legumele din marinadă (ceapa, morcovul) și căliți-le 5 minute până se înmoaie.",
      
      "Fierberea în vin. Puneți puiul și baconul înapoi în oală. Flambați cu puțin coniac (opțional) pentru aromă. Turnați vinul roșu (din marinadă, fiert separat pentru a elimina spuma, sau proaspăt) și supa de pui.\n\nLichidul trebuie să acopere carnea pe trei sferturi. Adăugați buchetul garni (ierburile). Aduceți la fierbere, apoi reduceți focul la minim, puneți capacul și lăsați să fiarbă încet (simmer) timp de 45-60 de minute.",
      
      "Garnitura (Garniture). În timp ce puiul fierbe, pregătiți ciupercile și ceapa perlată. Într-o tigaie separată, topiți unt și sotați ciupercile întregi sau sferturi până se rumenesc. Adăugați ceapa perlată (curățată) și gătiți până se caramelizează ușor.\n\nAdăugați aceste legume în oala cu pui în ultimele 15 minute de gătire. Gătirea lor separată le păstrează textura și gustul distinct.",
      
      "Îngroșarea sosului (Beurre Manié). Scoateți puiul și legumele pe un platou cald. Lăsați sosul din oală să fiarbă la foc iute ca să scadă și să se concentreze. Amestecați 2 linguri de unt moale cu 2 linguri de făină (beurre manié).\n\nÎncorporați această pastă în sosul clocotind, amestecând cu telul, până când sosul devine lucios și nappant (acoperă lingura). Turnați sosul peste pui. Se servește cu cartofi natur sau piure."
    ],
    nutrition: { calories: 600, protein: 45, carbs: 15, fat: 35, micronutrients: ["Iron 20%"] }
  },

  "Rață Confit": {
    title: "Confit de Canard (Pulpe de Rață Confiate)",
    servings: 2,
    servingSize: "1 pulpă",
    pricePerServing: 45,
    prepTime: "24 ore (sărare)",
    cookTime: "3 ore",
    ingredients: [
      { name: "Pulpe de rață", amount: "2 buc" },
      { name: "Untură de rață (sau porc)", amount: "500 g" },
      { name: "Sare grunjoasă de mare", amount: "2 linguri" },
      { name: "Usturoi", amount: "4 căței" },
      { name: "Cimbru proaspăt", amount: "4 crenguțe" },
      { name: "Foi de dafin", amount: "2 buc" },
      { name: "Piper negru boabe", amount: "1 linguriță" }
    ],
    steps: [
      "Sărarea (Curing). Acesta este pasul secret pentru textura perfectă. Frecați pulpele de rață cu sarea grunjoasă, cimbrul rupt și usturoiul zdrobit. Puneți-le într-un vas, acoperiți-le și lăsați-le la frigider timp de 24 de ore.\n\nSarea va extrage apa din carne, ceea ce va concentra aroma și va permite păstrarea îndelungată.",
      
      "Pregătirea pentru gătire. A doua zi, spălați pulpele sub jet de apă rece pentru a elimina toată sarea, apoi uscați-le extrem de bine cu prosoape de hârtie. Umiditatea este inamicul confit-ului.",
      
      "Gătirea lentă (Confit). Topiți untura de rață (sau de porc) într-o oală care merge la cuptor. Scufundați pulpele în grăsimea topită; ele trebuie să fie complet acoperite.\n\nIntroduceți oala în cuptorul preîncălzit la 120°C (foc foarte mic). Lăsați să se gătească lent timp de 3 - 3.5 ore. Carnea trebuie să fie atât de fragedă încât să se desprindă de os la cea mai mică atingere, dar să nu se dezintegreze.",
      
      "Păstrarea (Opțional). Tradițional, pulpele se lasă să se răcească în grăsime și se pot păstra așa luni de zile la rece (conserve).",
      
      "Rumenirea finală. Scoateți pulpele din grăsime. Încingeți o tigaie (fără ulei, pulpele au destulă grăsime) la foc mediu-iute. Așezați pulpele cu pielea în jos.\n\nPrăjiți timp de 3-5 minute până când pielea devine subțire, aurie și extrem de crocantă ('crispy skin').",
      
      "Servirea. Se servesc fierbinți, alături de cartofi prăjiți în aceeași untură de rață (Pommes de terre sarladaises) cu usturoi și pătrunjel."
    ],
    nutrition: { calories: 700, protein: 30, carbs: 0, fat: 60, sodium: 800 }
  },

  "Ratatouille": {
    title: "Ratatouille Provençal (Confit Byaldi)",
    servings: 4,
    servingSize: "1 porție (250g)",
    pricePerServing: 15,
    prepTime: "40 min",
    cookTime: "1 oră",
    ingredients: [
      { name: "Vinete", amount: "2 medii" },
      { name: "Dovlecei (Zucchini)", amount: "2 medii" },
      { name: "Dovlecei galbeni", amount: "2 medii" },
      { name: "Roșii Roma (alungite)", amount: "6 buc" },
      { name: "Ardei gras roșu", amount: "2 buc" },
      { name: "Ceapă", amount: "2 mari" },
      { name: "Usturoi", amount: "4 căței" },
      { name: "Ierburi de Provence", amount: "2 linguri" },
      { name: "Ulei de măsline", amount: "100 ml" }
    ],
    steps: [
      "Pregătirea sosului de bază (Piperade). Coaceți ardeii grași, curățați-i de coajă și tocați-i mărunt. Într-un tigaie, căliți ceapa tocată fin și usturoiul în ulei de măsline până se înmoaie, fără să se ardă.\n\nAdăugați ardeii copți și pulpa de la 2-3 roșii decojite. Lăsați să fiarbă la foc mic timp de 15-20 de minute, asezonând cu cimbru, dafin, sare și piper, până obțineți un sos gros și aromat. Întindeți acest sos într-un strat uniform pe fundul unei tăvi ovale sau rotunde.",
      
      "Felierea legumelor (Mandolina). Secretul aspectului vizual este uniformitatea. Spălați vinetele, dovleceii verzi, dovleceii galbeni și roșiile rămase (alegeți legume cu diametru similar).\n\nTăiați-le în felii (rondele) extrem de subțiri, de aproximativ 2-3 mm grosime. Folosirea unei mandoline este recomandată pentru precizie, dar un cuțit foarte ascuțit funcționează dacă aveți răbdare.",
      
      "Aranjarea în tavă. Începeți să așezați feliile de legume peste patul de sos piperade. Alternați culorile într-o secvență repetitivă: o felie de vânătă, una de dovlecel, una de roșie, una de dovlecel galben.\n\nAșezați-le în spirală concentrică (începând din exterior) sau în șiruri paralele, suprapunându-le ușor (stil acordeon), astfel încât să stea aproape vertical, dar sprijinite unele de altele.",
      
      "Dressing-ul aromatic. Într-un bol mic, amestecați 4-5 linguri de ulei de măsline extravirgin cu usturoi pisat, sare, piper proaspăt măcinat și ierburi de Provence (cimbru, rozmarin, oregano, maghiran).\n\nUngeți generos legumele aranjate în tavă cu acest ulei aromat folosind o pensulă de bucătărie. Asigurați-vă că uleiul pătrunde și între felii.",
      
      "Coacerea (Confit). Acoperiți tava cu o bucată de hârtie de copt tăiată exact pe dimensiunea tăvii, așezată direct peste legume. Acest capac ('cartouche') permite legumelor să se gătească în aburul propriu fără să se usuce sau să se ardă.\n\nIntroduceți tava în cuptorul preîncălzit la 180°C și coaceți timp de 45-60 de minute, până când legumele sunt foarte moi și sosul bolborosește pe margini.",
      
      "Servirea. Îndepărtați hârtia de copt. Pentru un aspect caramelizat, mai puteți lăsa tava 5-10 minute la cuptor fără hârtie. Ratatouille este mai bun a doua zi, reîncălzit, sau servit la temperatura camerei.\n\nPentru o prezentare elegantă (stil 'Ratatouille' film), stivuiți o porție de felii în mijlocul farfuriei folosind un inel metalic și turnați puțin sos de ardei și oțet balsamic în jur."
    ],
    nutrition: { calories: 250, protein: 5, carbs: 20, fat: 15, fiber: 8 }
  },

  "Croissant": {
    title: "Croissant cu Unt (Pâte Levée Feuilletée)",
    servings: 8,
    servingSize: "1 croissant (80g)",
    pricePerServing: 4,
    prepTime: "4 ore (+dospire)",
    cookTime: "20 min",
    ingredients: [
      { name: "Făină de forță (T55)", amount: "500 g" },
      { name: "Unt (min 82% grăsime)", amount: "250 g (bloc rece)" },
      { name: "Lapte rece", amount: "150 ml" },
      { name: "Apă rece", amount: "150 ml" },
      { name: "Zahăr", amount: "55 g" },
      { name: "Sare", amount: "10 g" },
      { name: "Drojdie proaspătă", amount: "20 g" },
      { name: "Ou", amount: "1 (pt uns)" }
    ],
    steps: [
      "Detrempe (Aluatul de bază). Dizolvați drojdia în laptele și apa rece. Într-un bol, amestecați făina, zahărul și sarea. Adăugați lichidul și frământați un aluat ferm, dar nu elastic (nu dezvoltați glutenul prea mult acum, pentru a nu fi cauciucat).\n\nFormați un disc plat, înveliți-l în folie și lăsați-l la frigider minim 4 ore sau peste noapte. Aluatul trebuie să fie rece pentru a nu topi untul.",
      
      "Beurrage (Blocul de unt). Luați untul rece (dar maleabil) și puneți-l între două foi de hârtie de copt. Bateți-l cu sucitorul până se aplatizează, apoi întindeți-l într-un pătrat perfect de 20x20 cm.\n\nPuneți placa de unt înapoi la frigider timp de 10-15 minute. Consistența untului trebuie să fie identică cu cea a aluatului: flexibilă, dar rece.",
      
      "Încorporarea (Lock-in). Întindeți aluatul într-un pătrat mai mare (30x30 cm). Așezați pătratul de unt în centru, rotit la 45 de grade (ca un romb).\n\nPliați colțurile aluatului peste unt, ca un plic, și sigilați bine marginile. Untul este acum complet închis în aluat.",
      
      "Laminarea (Turarea). Întindeți pachetul într-un dreptunghi lung (60x20 cm). Faceți prima împăturire simplă (Letter Fold): aduceți treimea de sus peste mijloc și treimea de jos peste ea. Rotiți aluatul la 90 de grade.\n\nÎntindeți din nou și faceți a doua împăturire. În total aveți nevoie de 3 împăturiri simple (sau una dublă și una simplă). Între fiecare tură, lăsați aluatul la frigider 30-45 de minute.",
      
      "Formarea. După ultima odihnă, întindeți aluatul final într-o foaie de 4mm grosime. Tăiați triunghiuri isoscele lungi (baza 10cm, înălțime 25cm). Faceți o mică crestătură în centrul bazei fiecărui triunghi.\n\nTrageți ușor de vârf și rulați strâns de la bază spre vârf. Asigurați-vă că vârful rămâne dedesubtul croissantului pentru a nu se desface la copt.",
      
      "Dospirea și coacerea. Așezați cornurile pe tava, la distanță mare. Ungeți-le cu ou bătut. Lăsați la dospit într-un loc cald (max 27°C - altfel se topește untul!) timp de 2-3 ore. Trebuie să tremure ca un jeleu când mișcați tava și să se vadă straturile.\n\nCoaceți la 200°C timp de 18-22 de minute până devin brun-aurii intens. Lăsați să se răcească pe grătar. Secțiunea trebuie să aibă aspect de fagure (honeycomb)."
    ],
    nutrition: { calories: 400, protein: 6, carbs: 40, fat: 22, sodium: 400 }
  },

  "Quiche Lorraine": {
    title: "Quiche Lorraine (Tarta Sărată cu Bacon)",
    servings: 6,
    servingSize: "1 felie (150g)",
    pricePerServing: 12,
    prepTime: "30 min",
    cookTime: "40 min",
    ingredients: [
      { name: "Aluat fraged (brisée)", amount: "1 foaie (250g)" },
      { name: "Bacon afumat (cuburi)", amount: "200 g" },
      { name: "Ouă mari", amount: "4 buc" },
      { name: "Smântână lichidă (32%)", amount: "300 ml" },
      { name: "Lapte integral", amount: "100 ml" },
      { name: "Nucșoară", amount: "un vârf" },
      { name: "Unt", amount: "pentru uns" },
      { name: "Sare, Piper alb", amount: "după gust" }
    ],
    steps: [
      "Coacerea în orb (Blind Baking). Întindeți aluatul fraged într-o formă de tartă cu fund detașabil. Înțepați fundul cu o furculiță. Acoperiți aluatul cu hârtie de copt și umpleți forma cu greutăți ceramice sau boabe de fasole uscată.\n\nCoaceți la 190°C timp de 15 minute. Îndepărtați greutățile și hârtia și mai coaceți 5 minute până când baza este uscată și ușor aurie. Acest pas previne un fund umed (soggy bottom).",
      
      "Pregătirea baconului (Lardons). Tăiați baconul în bastonașe (lardons). Puneți-le într-o tigaie rece și încălziți treptat. Prăjiți până devin crocante și își lasă grăsimea.\n\nScoateți baconul pe hârtie absorbantă. Nu folosiți grăsimea în quiche. În rețeta tradițională Lorraine NU se pune brânză (Emmental/Gruyere), dar o puteți adăuga dacă doriți un Quiche 'vosgienne'.",
      
      "Custard-ul (Migaine). Într-un bol, spargeți ouăle. Bateți-le ușor cu un tel (nu faceți spumă, nu vrem aer). Adăugați smântâna lichidă și laptele.\n\nAsezonați cu sare (puțină, baconul e sărat), piper alb și, esențial, nucșoară proaspăt rasă. Nucșoara este condimentul semnătură pentru sosurile albe franțuzești.",
      
      "Asamblarea. Presărați baconul prăjit uniform pe baza tartei coapte. Dacă folosiți brânză, puneți-o acum peste bacon.\n\nTurnați amestecul de ouă și smântână (custard) încet peste bacon, având grijă să nu depășească marginea aluatului.",
      
      "Coacerea. Reduceți temperatura cuptorului la 170°C. Coaceți quiche-ul timp de 30-40 de minute. Marginile custard-ului trebuie să fie setate și ușor umflate, dar centrul trebuie să tremure ușor (jiggle) când mișcați tava.\n\nNu o coaceți excesiv, altfel ouăle se vor coagula prea tare și textura va deveni cauciucată și va elimina apă.",
      
      "Odihna. Aceasta este cea mai grea parte. Lăsați tarta să se răcească în formă cel puțin 20-30 de minute înainte de a o tăia.\n\nQuiche Lorraine se servește caldă sau la temperatura camerei, alături de o salată verde simplă cu vinaigrette."
    ],
    nutrition: { calories: 450, protein: 15, carbs: 25, fat: 35, sodium: 800 }
  },

  "Supă de ceapă": {
    title: "Soupe à l'Oignon Gratinée (Supă de Ceapă)",
    servings: 4,
    servingSize: "1 bol (300ml)",
    pricePerServing: 15,
    prepTime: "15 min",
    cookTime: "1 oră",
    ingredients: [
      { name: "Ceapă galbenă", amount: "1 kg (5-6 mari)" },
      { name: "Unt", amount: "50 g" },
      { name: "Supă de vită (concentrată)", amount: "1.5 L" },
      { name: "Vin alb sec / Sherry", amount: "150 ml" },
      { name: "Făină", amount: "1 lingură" },
      { name: "Baghetă", amount: "8 felii" },
      { name: "Brânză Gruyère/Comté", amount: "200 g" },
      { name: "Cimbru, Dafin", amount: "2 fire" }
    ],
    steps: [
      "Caramelizarea cepei (Răbdarea). Curățați ceapa și tăiați-o solzișori (julienne), nici prea subțire, nici prea groasă. Într-o oală grea, topiți untul (și o lingură de ulei să nu se ardă).\n\nAdăugați toată ceapa. Gătiți la foc mediu, amestecând ocazional, timp de 30-45 de minute. Ceapa trebuie să scadă dramatic în volum și să devină maro închis, dulce și lipicioasă (gem de ceapă). Dacă se prinde, adăugați o lingură de apă.",
      
      "Deglasarea. Când ceapa este perfect caramelizată, presărați făina peste ea și gătiți 1 minut (pentru a îngroșa puțin supa).\n\nTurnați vinul alb sau Sherry-ul uscat. Răzuiți fundul oalei cu lingura de lemn pentru a dizolva toate bucățelele maro caramelizate (sucurile). Aceasta dă culoarea și gustul profund al supei.",
      
      "Fierberea. Adăugați supa de vită fierbinte, cimbrul proaspăt și foaia de dafin. Aduceți la fierbere, apoi reduceți focul și lăsați să fiarbă descoperit timp de 20-30 de minute.\n\nGustați și potriviți de sare și piper. Înlăturați ierburile.",
      
      "Pregătirea crutoanelor. Tăiați bagheta în felii de 1.5 cm grosime. Prăjiți-le ușor în cuptor sau în prăjitor până devin crocante și tari. Puteți freca fiecare felie cu un cățel de usturoi crud pentru aromă.",
      
      "Gratinarea. Turnați supa fierbinte în boluri rezistente la cuptor (ramekins). Puneți 1-2 felii de pâine prăjită deasupra supei în fiecare bol (trebuie să plutească).\n\nAcoperiți pâinea și marginile bolului cu un munte de brânză Gruyère rasă. Brânza trebuie să 'sigileze' bolul.",
      
      "Servirea. Puneți bolurile pe o tavă și introduceți-le sub grill-ul cuptorului (la maxim) timp de 3-5 minute. Brânza trebuie să se topească, să facă bule și să se rumenească pe alocuri.\n\nServiți imediat, cu mare grijă (bolurile sunt extrem de fierbinți). Spargeți crusta de brânză și înmuiați pâinea în supa bogată."
    ],
    nutrition: { calories: 400, protein: 18, carbs: 35, fat: 22, sodium: 1100 }
  },

  "Boeuf Bourguignon": {
    title: "Boeuf Bourguignon (Vită în Vin de Burgundia)",
    servings: 6,
    servingSize: "1 porție generoasă (400g)",
    pricePerServing: 35,
    prepTime: "40 min",
    cookTime: "3 ore",
    ingredients: [
      { name: "Carne de vită (pulpă/spată)", amount: "1.5 kg" },
      { name: "Vin roșu (Pinot Noir/Burgundy)", amount: "750 ml" },
      { name: "Bacon (Lardon)", amount: "200 g" },
      { name: "Supă de vită", amount: "500 ml" },
      { name: "Morcovi", amount: "2 buc" },
      { name: "Ceapă", amount: "1 mare" },
      { name: "Ciuperci Champignon", amount: "400 g" },
      { name: "Ceapă perlată", amount: "200 g" },
      { name: "Făină", amount: "2 linguri" },
      { name: "Usturoi", amount: "4 căței" }
    ],
    steps: [
      "Pregătirea cărnii. Tăiați carnea de vită în cuburi mari de 4-5 cm. Uscați-le perfect cu șervete de hârtie (carnea umedă fierbe, nu se prăjește).\n\nPrăjiți baconul tăiat bastonașe într-o oală de fontă până e crocant. Scoateți-l. În grăsimea rămasă, prăjiți cuburile de vită în tranșe mici, la foc foarte iute, până se brunifică bine pe toate părțile. Scoateți carnea.",
      
      "Legumele de bază. În aceeași grăsime, căliți ceapa tocată și morcovii rondele timp de 5 minute. Adăugați usturoiul zdrobit.\n\nPuneți carnea și baconul înapoi în oală. Presărați făina peste ele și amestecați pe foc 1-2 minute pentru a găti făina (aceasta va lega sosul).",
      
      "Fierberea. Turnați vinul roșu și supa de vită. Lichidul trebuie să acopere carnea. Adăugați pasta de tomate și un buchet garni (cimbru, dafin, pătrunjel).\n\nAduceți la fierbere, puneți capacul și introduceți oala în cuptorul preîncălzit la 160°C. Lăsați să se gătească lent timp de 2.5 - 3 ore, până când carnea se rupe cu furculița.",
      
      "Garnitura (Garniture). În timp ce carnea este la cuptor, pregătiți ciupercile și ceapa perlată. Julia Child recomandă gătirea lor separată.\n\nSotați ciupercile în unt până sunt aurii. Într-o altă tigaie, caramelizați ceapa perlată întreagă în unt și puțină apă cu zahăr până devine maronie și moale.",
      
      "Finalizarea. Scoateți oala din cuptor. Dacă sosul este prea lichid, scoateți carnea și fierbeți sosul pe aragaz până se îngroașă.\n\nAdăugați ciupercile și ceapa perlată pregătite anterior în tocană. Amestecați ușor și mai lăsați 5 minute să se încălzească împreună.",
      
      "Servirea. Presărați pătrunjel proaspăt. Boeuf Bourguignon este întotdeauna mai bun a doua zi. Se servește tradițional cu cartofi natur, piure sau paste late cu unt."
    ],
    nutrition: { calories: 650, protein: 50, carbs: 15, fat: 35, micronutrients: ["Iron 30%"] }
  },

  "Crème Brûlée": {
    title: "Crème Brûlée (Cremă de Zahăr Ars)",
    servings: 4,
    servingSize: "1 ramekin (150g)",
    pricePerServing: 12,
    prepTime: "20 min",
    cookTime: "40 min (+4h rece)",
    ingredients: [
      { name: "Smântână lichidă grasă (35%)", amount: "500 ml" },
      { name: "Gălbenușuri", amount: "5 buc" },
      { name: "Zahăr tos", amount: "70 g" },
      { name: "Păstaie de vanilie", amount: "1 buc" },
      { name: "Zahăr (pt crustă)", amount: "4 linguri" },
      { name: "Sare", amount: "un praf" }
    ],
    steps: [
      "Infuzarea smântânii. Tăiați păstaia de vanilie pe lungime și răzuiți semințele. Puneți smântâna lichidă, semințele și păstaia goală într-o cratiță.\n\nÎncălziți la foc mediu până aproape de punctul de fierbere (când apar bule mici pe margine). Opriți focul, acoperiți și lăsați la infuzat 15-30 de minute. Aceasta extrage toată aroma vaniliei.",
      
      "Pregătirea bazei. Într-un bol, bateți gălbenușurile cu zahărul și sarea doar până se omogenizează. Nu bateți spumă! Aerul încorporat va crea bule inestetice în crema coaptă.\n\nReîncălziți ușor smântâna dacă s-a răcit prea tare. Scoateți păstaia. Turnați smântâna caldă în fir subțire peste gălbenușuri, amestecând continuu și încet cu un tel (temperare).",
      
      "Strecurarea. Treceți compoziția printr-o sită fină într-o carafă. Acest pas elimină eventualele coagulări de ou (chalaza) și bulele de aer, asigurând o textură perfect fină.\n\nDacă aveți spumă la suprafață, îndepărtați-o cu o lingură.",
      
      "Coacerea (Bain-Marie). Așezați 4 forme ceramice (ramekins) într-o tavă adâncă. Turnați crema în forme. Umpleți tava cu apă fierbinte (de la robinet sau fiartă) până la jumătatea înălțimii formelor.\n\nCoaceți la 150°C timp de 30-40 de minute. Crema este gata când marginile sunt ferme, dar centrul încă tremură ușor ca un jeleu când mișcați forma.",
      
      "Răcirea. Scoateți formele din apă și lăsați-le să se răcească pe un grătar. Apoi, acoperiți-le și puneți-le la frigider pentru cel puțin 4 ore (sau până la 3 zile).\n\nCrema trebuie să fie complet rece și setată înainte de caramelizare.",
      
      "Caramelizarea (Brûlée). Chiar înainte de servire, ștergeți eventualul condens de pe suprafața cremei cu un șervețel. Presărați un strat subțire și uniform de zahăr tos peste toată suprafața.\n\nFolosind o torță de bucătărie, topiți zahărul mișcând flacăra constant, până devine auriu-închis și face o crustă tare. Lăsați 1 minut să se întărească, apoi spargeți crusta cu lingurița (sunetul 'crac' este esențial)."
    ],
    nutrition: { calories: 450, protein: 5, carbs: 25, fat: 40, sugar: 20 }
  },

  "Baguette cu brânzeturi": {
    title: "Baguette Tradițională & Platou de Brânzeturi",
    servings: 4,
    servingSize: "1/2 baghetă + brânză",
    pricePerServing: 15,
    prepTime: "20 min (+dospire)",
    cookTime: "25 min",
    ingredients: [
      { name: "Făină T65 (panificație)", amount: "500 g" },
      { name: "Apă rece", amount: "350 ml" },
      { name: "Drojdie proaspătă", amount: "10 g" },
      { name: "Sare", amount: "10 g" },
      { name: "Brânză Brie/Camembert", amount: "200 g" },
      { name: "Brânză Comté/Gruyère", amount: "200 g" },
      { name: "Brânză de capră", amount: "150 g" },
      { name: "Struguri & Nuci", amount: "decor" }
    ],
    steps: [
      "Autoliza. Amestecați făina cu apa într-un bol până nu mai e făină uscată. Acoperiți și lăsați să stea 30-60 de minute. Acest pas simplu hidratează glutenul și face aluatul mai ușor de lucrat și pâinea mai gustoasă.\n\nDupă autoliză, adăugați drojdia și sarea. Frământați prin tehnica 'stretch and fold' (întinde și împăturește) timp de 10 minute.",
      
      "Dospirea la rece. Lăsați aluatul la dospit la temperatura camerei 1 oră, făcând o împăturire la jumătatea timpului. Apoi, puneți aluatul la frigider peste noapte (12-16 ore).\n\nDospirea lentă la rece dezvoltă acea aromă complexă de fermentație și alveolele mari din miez.",
      
      "Divizarea și Pre-forma. A doua zi, scoateți aluatul pe blatul înfăinat. Împărțiți-l în 3-4 bucăți egale. Formați dreptunghiuri ușoare, fără a scoate gazul din ele.\n\nAcoperiți cu un prosop și lăsați să se relaxeze 20 de minute (bench rest).",
      
      "Formarea baghetei. Luați o bucată, aplatizați-o ușor. Îndoiți treimea de sus spre mijloc și sigilați cu degetul mare. Îndoiți din nou de sus până jos și sigilați marginea cu podul palmei.\n\nRulați aluatul cu palmele, aplicând presiune din centru spre exterior, pentru a-l alungi la 30-40 cm și a subția capetele.",
      
      "Dospirea finală (Couche). Așezați baghetele într-o pânză de in înfăinată (couche), făcând pliuri între ele ca să nu se lipească și să-și păstreze forma. Lăsați la dospit 45-60 de minute.\n\nÎntre timp, preîncălziți cuptorul la 250°C cu o tavă cu apă jos (pentru abur).",
      
      "Coacerea și Servirea. Transferați baghetele pe tavă. Crestați-le (score) cu o lamă, rapid și oblic. Coaceți cu abur timp de 20-25 de minute până sunt brun-aurii și sună a gol.\n\nLăsați să se răcească. Rupeți bagheta cu mâna și serviți-o cu unt sărat și selecția de brânzeturi (Brie moale, Comté maturat, brânză de capră acidă), nuci și struguri."
    ],
    nutrition: { calories: 500, protein: 20, carbs: 60, fat: 20, fiber: 3 }
  },

  "Escargots": {
    title: "Escargots à la Bourguignonne (Melci cu Unt)",
    servings: 4,
    servingSize: "6 melci (100g)",
    pricePerServing: 25,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Melci (conservă, calitate)", amount: "24 buc" },
      { name: "Cochilii de melci (goale)", amount: "24 buc" },
      { name: "Unt nesărat (temp camerei)", amount: "200 g" },
      { name: "Usturoi", amount: "4-5 căței" },
      { name: "Șalotă", amount: "1 buc" },
      { name: "Pătrunjel proaspăt", amount: "1 legătură mare" },
      { name: "Vin alb / Coniac", amount: "1 lingură" },
      { name: "Nucșoară, Piper", amount: "un praf" }
    ],
    steps: [
      "Untul aromat (Beurre d'Escargot). Acesta este secretul. Lăsați untul să ajungă la temperatura camerei până este foarte moale.\n\nTocați pătrunjelul foarte fin (doar frunzele). Tocați șalota și usturoiul extrem de mărunt (sau zdrobiți usturoiul). Nu folosiți robotul pentru unt, mixați cu furculița pentru textură.",
      
      "Mixarea. Într-un bol, amestecați untul moale cu pătrunjelul, usturoiul și șalota. Adăugați sarea, piperul, un praf de nucșoară și o lingură de vin alb sec sau puțin pastis/coniac.\n\nAmestecați bine până când untul devine complet verde și omogen. Gustați: trebuie să fie puternic aromat cu usturoi.",
      
      "Pregătirea melcilor. Scurgeți melci din conservă și clătiți-i bine cu apă caldă. Uscați-i cu șervete de hârtie.\n\nVerificați cochiliile să fie curate și uscate. Dacă nu aveți cochilii, puteți folosi o tăviță specială cu adâncituri ceramice (escargotière) sau pălării de ciuperci champignon.",
      
      "Umplerea. Puneți puțin unt aromat în fundul fiecărei cochilii. Împingeți un melc înăuntru. Sigilați deschiderea cochiliei cu o cantitate generoasă de unt aromat, nivelând cu degetul sau un cuțit.\n\nUntul trebuie să acopere complet melcul.",
      
      "Coacerea. Așezați melcii în tăvițe speciale sau pe un pat de sare grunjoasă într-o tavă normală (ca să stea cu deschiderea în sus și să nu curgă untul).\n\nIntroduceți în cuptorul preîncălzit la 220°C. Coaceți timp de 8-10 minute.",
      
      "Servirea. Sunt gata când untul clocotește viguros și face spumă verde.\n\nSe servesc fierbinți, imediat, cu clește special și furculiță mică. Esențial este să aveți multă baghetă proaspătă pentru a înmuia în untul de usturoi topit rămas în farfurie."
    ],
    nutrition: { calories: 350, protein: 10, carbs: 2, fat: 35, micronutrients: ["Iron 15%", "Vitamin A"] }
  },

  "Crêpes": {
    title: "Crêpes Suzette (Clătite Fine cu Portocale)",
    servings: 4,
    servingSize: "2 clătite (150g)",
    pricePerServing: 10,
    prepTime: "15 min (+30 min odihnă)",
    cookTime: "20 min",
    ingredients: [
      { name: "Făină", amount: "250 g" },
      { name: "Lapte", amount: "500 ml" },
      { name: "Ouă", amount: "3 buc" },
      { name: "Unt topit (pt aluat)", amount: "50 g" },
      { name: "Unt (pt sos)", amount: "100 g" },
      { name: "Zahăr", amount: "100 g" },
      { name: "Portocale (suc și coajă)", amount: "3 buc" },
      { name: "Grand Marnier/Coniac", amount: "50 ml" }
    ],
    steps: [
      "Aluatul de clătite. Într-un bol, bateți ouăle cu un praf de sare. Adăugați făina și puțin lapte, amestecând energic pentru a forma o pastă fără cocoloașe. Adăugați restul de lapte treptat.\n\nLa final, încorporați untul topit (răcit) și o lingură de Grand Marnier. Lăsați aluatul să se odihnească la temperatura camerei minim 30 de minute. Acest lucru relaxează glutenul și face clătitele mai fragede.",
      
      "Prăjirea clătitelor. Încingeți o tigaie antiaderentă și ungeți-o cu puțin unt. Turnați un polonic mic de aluat și rotiți tigaia pentru a acoperi fundul cu un strat foarte subțire.\n\nGătiți 1 minut pe o parte până se auresc marginile, întoarceți și gătiți 30 secunde. Faceți toate clătitele și puneți-le deoparte (pliate în sferturi).",
      
      "Sosul de unt și portocale. Într-o tigaie largă, topiți zahărul până începe să se caramelizeze ușor (blond). Adăugați untul tăiat cubulețe și amestecați până face spumă.\n\nTurnați sucul de portocale și adăugați coaja rasă fin. Lăsați să fiarbă 2-3 minute până se formează un sirop lucios.",
      
      "Îmbibarea. Puneți clătitele pliate (triunghiuri) în sosul din tigaie, una câte una. Întoarceți-le să se îmbibe bine cu siropul fierbinte de portocale.\n\nLăsați-le să se încălzească în sos.",
      
      "Flambarea (Spectacolul). Acesta este pasul clasic Suzette. Turnați lichiorul Grand Marnier (sau coniac) peste clătitele din tigaie.\n\nÎnclinați tigaia spre flacără (dacă aveți gaz) sau aprindeți vaporii cu o brichetă lungă. Lăsați flacăra să se stingă natural, scuturând tigaia. Alcoolul se evaporă, rămânând doar aroma.",
      
      "Servirea. Serviți imediat clătitele pe farfurii calde, turnând restul de sos de caramel și portocale deasupra. Puteți adăuga o cupă de înghețată de vanilie pentru contrast termic, deși puristii le mănâncă simple."
    ],
    nutrition: { calories: 400, protein: 6, carbs: 50, fat: 20, sugar: 35 }
  },

  "Tarte Tatin": {
    title: "Tarte Tatin (Tarta cu Mere Răsturnată)",
    servings: 8,
    servingSize: "1 felie (150g)",
    pricePerServing: 8,
    prepTime: "30 min",
    cookTime: "45 min",
    ingredients: [
      { name: "Mere tari (Golden/Granny Smith)", amount: "6-8 buc" },
      { name: "Zahăr", amount: "150 g" },
      { name: "Unt nesărat", amount: "100 g" },
      { name: "Aluat foietaj (sau brizé)", amount: "1 foaie rotundă" },
      { name: "Vanilie/Scorțișoară", amount: "opțional" }
    ],
    steps: [
      "Pregătirea merelor. Curățați merele de coajă, tăiați-le în jumătate și scoateți cotorul. Unele rețete recomandă sferturile, dar jumătățile își păstrează mai bine forma la gătirea lungă.\n\nLăsați merele descoperite la frigider câteva ore înainte, dacă puteți, pentru a se usca puțin; merele prea zemoase pot dilua caramelul.",
      
      "Caramelul direct în tigaie. Aveți nevoie de o tigaie de fontă sau o cratiță care poate merge și pe foc și la cuptor. Întindeți untul moale pe fundul tigăii într-un strat gros. Presărați zahărul uniform peste unt.\n\nPuneți tigaia pe foc mediu și lăsați untul și zahărul să fiarbă împreună până se transformă într-un caramel auriu-închis (amber). Nu amestecați, doar rotiți tigaia.",
      
      "Aranjarea merelor. Luați tigaia de pe foc. Așezați merele în caramel, în picioare (pe muchie), foarte strâns unele lângă altele, în cercuri concentrice. Merele se vor micșora la copt, așa că trebuie înghesuite bine.\n\nUmpleți golurile cu bucăți mai mici de măr. Puneți tigaia înapoi pe foc mic 10-15 minute pentru a poșa merele în caramel.",
      
      "Aluatul. Tăiați foaia de aluat foietaj într-un cerc puțin mai mare decât tigaia. Găuriți aluatul cu furculița.\n\nAșezați aluatul peste merele fierbinți. Împingeți marginile aluatului în jos, între mere și peretele tigăii, ca și cum ați 'înveli' merele ('tucking in').",
      
      "Coacerea. Introduceți tigaia în cuptorul preîncălzit la 200°C. Coaceți timp de 30-40 de minute, până când aluatul este umflat și brun-auriu, iar caramelul bolborosește gros pe margini (atenție să nu dea pe afară).\n\nMerele trebuie să fie complet moi și caramelizate.",
      
      "Răsturnarea. Scoateți tigaia și lăsați-o să se răcorească 10-15 minute (esențial pentru ca pectina să lege merele). Puneți un platou mare peste tigaie și, cu o mișcare rapidă și fermă, răsturnați tarta.\n\nRidicati tigaia. Dacă vreun măr a rămas lipit, puneți-l la loc. Serviți Tarte Tatin caldă cu smântână fermentată (crème fraîche) sau înghețată de vanilie."
    ],
    nutrition: { calories: 350, protein: 3, carbs: 50, fat: 18, sugar: 35 }
  },

  "Macarons": {
    title: "Macarons (Metoda Bezelei Italiene)",
    servings: 12,
    servingSize: "2 macarons (40g)",
    pricePerServing: 10,
    prepTime: "1 oră (+uscare)",
    cookTime: "15 min",
    ingredients: [
      { name: "Făină de migdale fină", amount: "150 g" },
      { name: "Zahăr pudră", amount: "150 g" },
      { name: "Zahăr tos", amount: "150 g" },
      { name: "Apă", amount: "35 ml" },
      { name: "Albușuri (împărțite în 2)", amount: "55g + 55g" },
      { name: "Colorant gel", amount: "opțional" },
      { name: "Ganache ciocolată", amount: "pentru umplut" }
    ],
    steps: [
      "Tant pour Tant (Mixul uscat). Cerneți făina de migdale și zahărul pudră împreună printr-o sită fină într-un bol mare. Dacă rămân bucăți mari de migdale, nu le folosiți (vor strica suprafața fină).\n\nAdăugați prima parte de albușuri (55g) peste mixul uscat, dar NU amestecați încă. Veți obține o pastă marțipan.",
      
      "Siropul de zahăr. Într-un ibric, puneți zahărul tos și apa. Fierbeți până ajunge la 118°C (soft ball stage). Aveți nevoie de un termometru.\n\nÎntre timp, bateți a doua parte de albușuri (55g) spumă moale într-un bol curat.",
      
      "Bezeaua Italiană. Când siropul atinge temperatura, turnați-l în fir subțire peste albușurile bătute, mixând continuu la viteză mare. Continuați să bateți până când bezeaua se răcește la temperatura corpului (cca 40°C) și este foarte lucioasă și fermă (bird's beak).\n\nAdăugați colorantul acum.",
      
      "Macaronage (Amestecarea). Încorporați o treime din bezea în pasta de migdale pentru a o deschide. Apoi adăugați restul de bezea.\n\nAmestecați prin mișcări de pliere (j-fold) și presare de pereții bolului pentru a scoate o parte din aer. Opriți-vă când aluatul curge de pe spatulă ca o panglică continuă (ribbon stage). Dacă amestecați prea mult, macarons vor fi plați; prea puțin, vor avea vârfuri.",
      
      "Pochare și Uscare. Puneți compoziția într-un poș cu dui rotund. Spritați cercuri de 3 cm pe tava cu covoraș de silicon sau hârtie. Loviți tava de masă de câteva ori pentru a scoate bulele de aer.\n\nLăsați tava la temperatura camerei 30-60 de minute până când macarons fac o pojghiță mată și nu se mai lipesc la atingere. Acest pas este critic pentru formarea 'piciorușului' (pied).",
      
      "Coacerea și umplerea. Coaceți la 150°C timp de 13-15 minute. Lăsați să se răcească complet înainte de a-i dezlipi.\n\nLipiți cojile două câte două cu ganache de ciocolată, cremă de unt sau dulceață. Macarons sunt cei mai buni după ce stau 24h la frigider (maturare)."
    ],
    nutrition: { calories: 100, protein: 2, carbs: 15, fat: 5, sugar: 12 }
  },

  // --- NEW MISSING RECIPES ADDED HERE ---
  "Cassoulet": {
    title: "Cassoulet de Castelnaudary (Fasole cu Rață și Cârnați)",
    servings: 6,
    servingSize: "1 porție (400g)",
    pricePerServing: 30,
    prepTime: "24h (înmuiere)",
    cookTime: "3 ore",
    ingredients: [
      { name: "Fasole albă (Lingot)", amount: "500 g" },
      { name: "Pulpe de rață confiate", amount: "4 buc" },
      { name: "Cârnați de Toulouse", amount: "400 g" },
      { name: "Piept de porc/Șorici", amount: "300 g" },
      { name: "Ceapă", amount: "2 mari" },
      { name: "Usturoi", amount: "5 căței" },
      { name: "Pastă de tomate", amount: "2 linguri" },
      { name: "Pesmet", amount: "pentru crustă" }
    ],
    steps: [
      "Înmuierea. Spălați fasolea albă (soi cu bob mare) și lăsați-o la înmuiat în apă rece peste noapte (minim 12 ore). A doua zi, scurgeți apa, puneți fasolea în oală cu apă proaspătă și fierbeți-o 5 minute. Aruncați această primă apă. Acest pas face fasolea digerabilă.",
      "Baza de arome. Tăiați pieptul de porc și șoriciul în bucăți mari. Încingeți puțină untură de rață într-o oală mare. Prăjiți cârnații și carnea de porc până se rumenesc bine. Scoateți-le. În grăsimea rămasă, căliți ceapa tocată și usturoiul până se înmoaie.",
      "Fierberea tocanitei. Puneți fasolea în oală peste ceapă. Adăugați pasta de tomate, un buchet garni (cimbru, dafin), sare, piper și șoriciul. Acoperiți cu apă (sau supă) și fierbeți la foc mic timp de 1.5 ore, până când fasolea este moale dar nu sfărâmată.",
      "Asamblarea (Cassole). Folosiți un vas de lut tradițional (Cassole) sau o cratiță adâncă de ceramică. Frecați interiorul cu usturoi. Puneți un strat de fasole și șorici pe fund. Așezați bucățile de carne de porc și pulpele de rață confiate (fără os dacă preferați). Acoperiți cu restul de fasole și cârnații tăiați bucăți. Lichidul trebuie să ajungă la nivelul fasolei.",
      "Coacerea și crusta. Presărați pesmet deasupra (opțional, stil Toulouse). Introduceți vasul în cuptorul încins la 150°C. Coaceți timp de 2-3 ore. În timpul coacerii, se va forma o crustă maronie la suprafață.",
      "Spargerea crustei. Tradiția spune că trebuie să spargeți crusta cu lingura și să o scufundați în lichid de 7 ori în timpul coacerii. Aceasta îngroașă sosul. La final, lăsați crusta să rămână crocantă. Cassoulet-ul trebuie să fie cremos, nu zemos, cu fasolea fondantă."
    ],
    nutrition: { calories: 850, protein: 45, carbs: 40, fat: 50, sodium: 1200 }
  },

  "Soufflé au Chocolat": {
    title: "Soufflé au Chocolat (Sufleu de Ciocolată)",
    servings: 4,
    servingSize: "1 formă (150g)",
    pricePerServing: 10,
    prepTime: "20 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Ciocolată neagră (70%)", amount: "150 g" },
      { name: "Unt", amount: "50 g + pt forme" },
      { name: "Ouă", amount: "4 (separate)" },
      { name: "Zahăr", amount: "60 g" },
      { name: "Lapte", amount: "1 lingură" },
      { name: "Zahăr pudră", amount: "decor" }
    ],
    steps: [
      "Pregătirea formelor. Acesta este pasul critic pentru creștere. Ungeți interiorul formelor de sufleu (ramekins) cu unt moale, folosind mișcări verticale de jos în sus (acest lucru ghidează aluatul să urce). Presărați zahăr tos în interior și rotiți forma ca să acopere tot untul. Scuturați excesul.",
      "Baza de ciocolată. Topiți ciocolata ruptă bucăți împreună cu untul și lingura de lapte la bain-marie (deasupra apei care fierbe). Amestecați până la omogenizare. Lăsați să se răcească puțin. Adăugați gălbenușurile unul câte unul în ciocolata călduță (nu fierbinte!), amestecând energic.",
      "Spuma de albușuri. Într-un bol perfect curat și degresat, bateți albușurile spumă cu un praf de sare. Când încep să facă vârfuri moi, adăugați zahărul treptat și continuați să bateți până obțineți o bezea fermă și lucioasă (stiff peaks).",
      "Încorporarea (Folding). Luați o lingură mare de bezea și amestecați-o viguros în baza de ciocolată pentru a o deschide (a o face mai fluidă). Apoi, turnați ciocolata peste restul de bezea. Încorporați cu mișcări lente, circulare, de jos în sus, folosind o spatulă, pentru a nu sparge bulele de aer. Opriți-vă când culoarea e uniformă.",
      "Umplerea. Turnați compoziția în formele pregătite până sus. Loviti ușor formele de masă o dată. Nivelați vârful cu un cuțit. Cu degetul mare, ștergeți marginea interioară a formei (faceți un șanț de 1-2 mm de jur împrejur) - acest truc ajută sufleul să crească drept, ca o pălărie.",
      "Coacerea și servirea. Coaceți în cuptorul preîncălzit la 190°C timp de 12-15 minute. NU deschideți ușa cuptorului! Sufleurile trebuie să crească mult peste margine și să fie stabile. Se servesc instantaneu, pudrate cu zahăr, deoarece se lasă în 2-3 minute de la ieșirea din cuptor."
    ],
    nutrition: { calories: 350, protein: 8, carbs: 25, fat: 22, sugar: 20 }
  },

  "Ecler cu ciocolată": {
    title: "Ecler cu Ciocolată și Cremă de Vanilie",
    servings: 10,
    servingSize: "1 ecler (100g)",
    pricePerServing: 5,
    prepTime: "1 oră",
    cookTime: "30 min",
    ingredients: [
      { name: "Apă", amount: "125 ml" },
      { name: "Lapte", amount: "125 ml" },
      { name: "Unt", amount: "100 g" },
      { name: "Făină", amount: "150 g" },
      { name: "Ouă", amount: "4 buc" },
      { name: "Lapte (pt cremă)", amount: "500 ml" },
      { name: "Gălbenușuri", amount: "4 buc" },
      { name: "Zahăr", amount: "150 g" },
      { name: "Amidon", amount: "40 g" },
      { name: "Ciocolată neagră", amount: "200 g (glazură)" },
      { name: "Smântână lichidă", amount: "100 ml (glazură)" }
    ],
    steps: [
      "Aluatul (Choux). Puneți apa, laptele, untul, sarea și zahărul într-o oală pe foc. Când clocotește, adăugați toată făina odată. Amestecați energic cu o lingură de lemn până se desprinde de pe pereți. Lăsați să se răcească puțin, apoi încorporați ouăle unul câte unul, amestecând după fiecare.",
      "Formarea. Puneți aluatul într-un poș cu dui stelat. Spritați bastoane de 10-12 cm în tava tapetată cu hârtie de copt, lăsând spațiu între ele, deoarece se umflă mult.",
      "Coacerea. Coaceți la 200°C timp de 15 minute, apoi reduceți la 170°C pentru încă 15-20 minute. Nu deschideți ușa cuptorului în primele 20 de minute! Lăsați-le să se răcească și să se usuce.",
      "Crema de patiserie (Vanilie). Frecați gălbenușurile cu zahărul și amidonul. Turnați laptele fierbinte peste ele, amestecând. Puneți din nou pe foc și fierbeți până se îngroașă ca o budincă. Adăugați vanilia și untul (opțional) la final. Acoperiți cu folie la contact și răciți.",
      "Glazura. Topiți ciocolata cu smântâna lichidă până obțineți un ganache lucios și fin. Lăsați să se răcească puțin până devine tartinabil.",
      "Asamblarea. Tăiați eclelele pe lungime (sau faceți 3 găuri la bază). Umpleți-le generos cu crema de vanilie folosind un poș. Înmuiați capacul eclerului în glazura de ciocolată sau întindeți-o cu o spatulă. Lăsați la rece."
    ],
    nutrition: { calories: 350, protein: 6, carbs: 40, fat: 20, sugar: 25 }
  }
};
