
import { Recipe } from '../../types';

export const THAI_RECIPES: Record<string, Recipe> = {
  "Pad Thai": {
    title: "Pad Thai (Tăiței Thailandezi Prăjiți)",
    servings: 2,
    servingSize: "1 farfurie (350g)",
    pricePerServing: 25,
    prepTime: "30 min",
    cookTime: "10 min",
    ingredients: [
      {name: "Tăiței de orez (lați, 3-5mm)", amount: "200 g"},
      {name: "Creveți proaspeți", amount: "150 g"},
      {name: "Tofu ferm", amount: "100 g"},
      {name: "Ouă", amount: "2 buc"},
      {name: "Muguri de fasole", amount: "100 g"},
      {name: "Arahide prăjite zdrobite", amount: "3 linguri"},
      {name: "Ceapă verde/Chives", amount: "3 fire"},
      {name: "Ridiche murată dulce", amount: "1 lingură"},
      {name: "Creveți uscați (opțional)", amount: "1 lingură"},
      {name: "Sos: Tamarind, Zahăr palmier, Sos pește", amount: "mix"}
    ],
    steps: [
      "Pregătirea tăițeilor este cel mai important pas tehnic. Nu fierbeți niciodată tăițeii pentru Pad Thai! Puneți tăițeii uscați de orez într-un bol mare cu apă la temperatura camerei și lăsați-i la înmuiat timp de 30-45 de minute. Trebuie să devină flexibili și albi, dar să rămână tari la pipăit (al dente).\n\nDacă îi fierbeți în apă clocotită, se vor înmuia prea tare și se vor rupe sau se vor transforma în pastă când ajung în wok-ul fierbinte. Scurgeți-i bine înainte de gătire.",
      
      "Sosul Pad Thai (Sufletul preparatului). Într-un cratiță mică, combinați pasta de tamarind (pentru aciditate), zahărul de palmier (pentru dulceață caramelizată) și sosul de pește (pentru umami și sare). Încălziți ușor până se dizolvă zahărul.\n\nGustați sosul: trebuie să fie un echilibru intens și vibrant între acru, dulce și sărat. Uneori se adaugă puțin chili pudră pentru iuțeală. Acest sos va îmbrăca tăițeii și le va da culoarea specifică.",
      
      "Prăjirea proteinelor. Tăiați tofu-ul ferm în cubulețe mici. Încingeți wok-ul la foc mediu și prăjiți tofu-ul în ulei până devine auriu și crocant pe toate părțile. Adăugați creveții proaspeți și gătiți-i rapid (1-2 minute) până devin roz.\n\nScoateți creveții din wok pentru a nu se întări. Lăsați tofu-ul înăuntru și adăugați șalota tocată, ridichea murată și creveții uscați mici, călindu-le pentru a elibera aromele.",
      
      "Gătirea tăițeilor. Măriți focul la maxim. Adăugați tăițeii scurși în wok. Imediat, adăugați un polonic mic de apă. Tăițeii se vor găti în aburul creat, devenind moi și elastici (chewy).\n\nCând apa s-a evaporat și tăițeii sunt gătiți, turnați sosul preparat peste ei. Amestecați viguros; tăițeii vor absorbi sosul avid și vor căpăta o culoare maronie lucioasă și o textură lipicioasă.",
      
      "Oul și legumele. Împingeți tăițeii într-o parte a wok-ului. În spațiul liber, adăugați puțin ulei și spargeți ouăle. Spargeți gălbenușurile și lăsați-le să se coaguleze pe jumătate, apoi amestecați-le cu tăițeii.\n\nOpriți focul sau reduceți-l la minim. Adăugați mugurii de fasole (păstrați câțiva pentru decor) și ceapa verde tăiată bucăți de 3 cm. Căldura reziduală este suficientă pentru a le găti parțial, păstrându-le crocante ('crisp-tender').",
      
      "Servirea și condimentarea. Transferați Pad Thai-ul pe farfurie. Puneți creveții gătiți deasupra. Garnisiți cu o grămăjoară de arahide prăjite zdrobite, muguri de fasole proaspeți și obligatoriu o felie de lime.\n\nÎn Thailanda, se servește alături de un condimentar cu zahăr, fulgi de chili și oțet, pentru ca fiecare să își ajusteze gustul final (mai dulce, mai iute sau mai acru)."
    ],
    nutrition: {calories: 550, protein: 25, carbs: 65, fat: 18, sodium: 900}
  },

  "Tom Yum Soup": {
    title: "Supă Tom Yum Goong (Picantă cu Creveți)",
    servings: 4,
    servingSize: "1 bol (300ml)",
    pricePerServing: 28,
    prepTime: "15 min",
    cookTime: "15 min",
    ingredients: [
      {name: "Supă clară (pui sau creveți)", amount: "1 L"},
      {name: "Creveți mari (cu cap/coadă)", amount: "300 g"},
      {name: "Lemongrass", amount: "3 tije"},
      {name: "Galangal", amount: "1 bucată (5cm)"},
      {name: "Frunze Kaffir Lime", amount: "5 buc"},
      {name: "Ardei iute (Bird's eye)", amount: "5-10 buc"},
      {name: "Ciuperci paie sau Champignon", amount: "200 g"},
      {name: "Pastă Nam Prik Pao (Chili Jam)", amount: "2 linguri"},
      {name: "Zeamă de lime", amount: "3-4 linguri"},
      {name: "Sos de pește", amount: "3 linguri"},
      {name: "Lapte evaporat (pt varianta cremoasă)", amount: "50 ml"}
    ],
    steps: [
      "Pregătirea bazei aromatice (Infuzia). Tom Yum este definit de trei ierburi esențiale: Lemongrass, Galangal și Frunze de Kaffir Lime. Zdrobiți tijele de lemongrass cu latul cuțitului pentru a elibera uleiurile, apoi tăiați-le în bucăți de 3-4 cm. Tăiați galangalul (care e diferit de ghimbir, mai lemnos și citric) în felii rotunde. Rupeți frunzele de lime în mână.\n\nAduceți supa la fierbere și adăugați aceste trei ingrediente. Fierbeți 5 minute pentru a crea un bouillon extrem de parfumat. Nu le veți mânca, rolul lor este doar de aromatizare.",
      
      "Adăugarea corpului și culorii. Adăugați pasta de chili thailandeză (Nam Prik Pao). Aceasta este ingredientul secret care transformă supa din una clară într-una roșie-portocalie, cu o peliculă uleioasă apetisantă și un gust ușor dulceag.\n\nAdăugați ciupercile tăiate jumătăți sau sferturi. Dacă doriți varianta 'Tom Yum Nam Khon' (cremoasă), acum este momentul să adăugați puțin lapte evaporat (fără zahăr), care leagă aromele și taie din iuțeală.",
      
      "Gătirea creveților și iuțeala. Zdrobiți ardeii iuți proaspeți cu latul cuțitului (pentru a elibera capsaicina) și aruncați-i în supă. Cantitatea depinde de toleranță, dar Tom Yum trebuie să fie iute ('Phed').\n\nAdăugați creveții curățați (dar cu coada păstrată pentru aromă). Lăsați să fiarbă doar 2-3 minute până devin roz. Dacă îi fierbeți mai mult, devin cauciucați.",
      
      "Asezonarea finală (Echilibrul). Opriți focul. Acesta este cel mai important pas tehnic: NU fierbeți zeama de lime, deoarece devine amară. Adăugați sosul de pește (pentru sărat) și zahărul în supa fierbinte, dar oprită.\n\nTurnați zeama de lime chiar înainte de servire. Gustați: supa trebuie să lovească toate simțurile simultan - aroma citrică de lemongrass, iuțeala chili-ului și aciditatea lime-ului.",
      
      "Adăugarea aromelor proaspete. Presărați coriandru proaspăt (cilantro) sau culantro (Sawtooth coriander) deasupra.",
      
      "Servirea. Turnați supa în boluri, asigurându-vă că fiecare primește creveți și ciuperci. Puteți lăsa bucățile de lemongrass și galangal în bol pentru aspect, dar avertizați oaspeții să nu le mănânce. Se servește fierbinte, de obicei acompaniată de un bol de orez iasomie."
    ],
    nutrition: {calories: 180, protein: 20, carbs: 8, fat: 8, sodium: 1200}
  },

  "Green Curry": {
    title: "Thai Green Curry (Gaeng Keow Wan)",
    servings: 4,
    servingSize: "1 bol (350g)",
    pricePerServing: 28,
    prepTime: "20 min",
    cookTime: "25 min",
    ingredients: [
      {name: "Pastă de curry verde", amount: "3-4 linguri"},
      {name: "Lapte de cocos (gras)", amount: "400 ml"},
      {name: "Piept/Pulpă de pui", amount: "400 g"},
      {name: "Vinete thailandeze (rotunde)", amount: "200 g"},
      {name: "Mazăre vinete (Pea Eggplant)", amount: "50 g"},
      {name: "Busuioc thailandez (Sweet Basil)", amount: "1 mână mare"},
      {name: "Frunze Kaffir Lime", amount: "4 buc"},
      {name: "Ardei iute roșu (decor)", amount: "2 buc"},
      {name: "Zahăr de palmier", amount: "1.5 linguri"},
      {name: "Sos de pește", amount: "2 linguri"}
    ],
    steps: [
      "Spargerea laptelui de cocos (Cracking the coconut). Într-un cratiță sau wok, puneți jumătate din laptele de cocos (partea cea mai groasă, crema de deasupra). Fierbeți la foc mediu, amestecând, până când apa se evaporă și uleiul de cocos începe să se separe vizibil de solidele albe.\n\nAceasta este metoda tradițională thailandeză de a obține grăsimea pentru prăjit, care intensifică aroma curry-ului mult mai bine decât uleiul vegetal.",
      
      "Prăjirea pastei. Adăugați pasta de curry verde în uleiul de cocos separat. Prăjiți pasta timp de 2-3 minute, amestecând constant, până când devine extrem de aromată și uleiul capătă o culoare verde intensă.\n\nAcest pas ('blooming') este crucial pentru a găti ierburile crude din pastă (chili verde, lemongrass, galangal, usturoi) și a le elibera potențialul maxim.",
      
      "Gătirea cărnii. Adăugați puiul tăiat în bucăți mici și amestecați-l bine cu pasta prăjită, lăsând-ul să se gătească parțial și să se sigileze. Adăugați frunzele de Kaffir Lime rupte pentru a infuza aroma citrică specifică.\n\nTurnați restul de lapte de cocos (partea mai lichidă) și aduceți la fierbere ușoară.",
      
      "Legumele. Adăugați vinetele thailandeze (tăiate sferturi) și mazărea-vânătă (pea eggplant) care dă o ușoară amărăciune plăcută. Dacă nu găsiți vinete thailandeze, folosiți dovlecei sau vinete obișnuite tăiate cuburi, și mazăre verde.\n\nLăsați să fiarbă la foc mic timp de 5-8 minute, până când legumele sunt moi, dar nu terciuite, iar puiul este gătit complet.",
      
      "Echilibrarea gustului. Curry-ul verde este cunoscut pentru faptul că este cel mai dulce dintre curry-urile thailandeze, dar și foarte iute. Adăugați zahărul de palmier (ras) și sosul de pește.\n\nGustați: trebuie să fie un echilibru între sărat, dulce și cremos, cu o iuțeală care vine la final.",
      
      "Finalizarea aromatică. Opriți focul. Imediat, adăugați o mână generoasă de busuioc thailandez (Horapa) și felii subțiri de ardei iute roșu pentru contrast de culoare.\n\nAmestecați ca busuiocul să se ofilească în sosul fierbinte, eliberând aroma sa de anason. Se servește imediat peste orez iasomie fiert la abur."
    ],
    nutrition: {calories: 450, protein: 25, carbs: 12, fat: 35, sodium: 950}
  },

  "Massaman Curry": {
    title: "Massaman Curry cu Vită (Kaeng Matsaman)",
    servings: 4,
    servingSize: "1 bol (350g)",
    pricePerServing: 35,
    prepTime: "30 min",
    cookTime: "2 ore",
    ingredients: [
      {name: "Carne de vită (gulaș/spată)", amount: "600 g"},
      {name: "Pastă Massaman Curry", amount: "4 linguri"},
      {name: "Lapte de cocos", amount: "500 ml"},
      {name: "Cartofi", amount: "3 medii"},
      {name: "Ceapă", amount: "2 mari"},
      {name: "Arahide prăjite nesărate", amount: "50 g"},
      {name: "Scorțișoară", amount: "1 baton"},
      {name: "Anason stelat", amount: "2 buc"},
      {name: "Cardamom", amount: "3-4 păstăi"},
      {name: "Tamarind (pastă/concentrat)", amount: "2-3 linguri"},
      {name: "Zahăr de palmier", amount: "2 linguri"},
      {name: "Sos de pește", amount: "2 linguri"}
    ],
    steps: [
      "Origini și gătirea cărnii. Massaman este un curry unic, cu influențe persane și indiene, adus de comercianții musulmani. Folosește condimente uscate (nu doar proaspete) și carne roșie.\n\nTăiați carnea de vită în cuburi mari (3-4 cm). Puneți carnea într-o oală cu lapte de cocos diluat cu apă (sau 'lapte de cocos subțire') și fierbeți la foc mic timp de 60-90 de minute, până când carnea este aproape fragedă. Această fierbere în lapte de cocos face carnea incredibil de moale.",
      
      "Prăjirea pastei. Într-o tigaie separată sau un wok, puneți partea groasă a laptelui de cocos (crema) și lăsați-o să fiarbă până se separă uleiul. Adăugați pasta Massaman și prăjiți-o în acest ulei până miroase intens.\n\nAdăugați condimentele întregi: scorțișoara, anasonul stelat și cardamomul. Prăjirea condimentelor le activează uleiurile volatile.",
      
      "Combinarea. Turnați amestecul de pastă prăjită în oala cu carne și lichid. Amestecați bine. Curry-ul ar trebui să aibă acum o culoare roșie-maronie bogată și un strat de ulei roșu la suprafață (ceea ce este de dorit în bucătăria thailandeză, indicând că pasta e bine gătită).",
      
      "Adăugarea legumelor. Adăugați cartofii curățați și tăiați în bucăți mari și ceapa tăiată sferturi sau jumătăți (dacă e mică). Adăugați arahidele prăjite întregi.\n\nFierbeți totul la foc mic timp de 20-30 de minute, până când cartofii sunt fierți, dar nu se sfărâmă.",
      
      "Asezonarea specifică. Massaman are un profil de gust distinct: predomină dulceața și acreala, echilibrate de sare. Adăugați pasta de tamarind (pentru un acru fructat), zahărul de palmier (pentru o dulceață complexă) și sosul de pește.\n\nGustați. Trebuie să fie bogat, cremos, ușor dulceag și acrișor, cu note profunde de condimente.",
      
      "Servirea. Acest curry este mai puțin iute decât cel verde sau roșu. Se servește cu orez iasomie. De multe ori, se servește alături de 'Ajad' - o salată mică de castraveți, șalotă și ardei iute în oțet îndulcit, care taie din bogăția și grăsimea curry-ului."
    ],
    nutrition: {calories: 700, protein: 35, carbs: 30, fat: 45, sodium: 850}
  },

  "Mango Sticky Rice": {
    title: "Mango Sticky Rice (Khao Niao Mamuang)",
    servings: 4,
    servingSize: "1 porție (200g)",
    pricePerServing: 15,
    prepTime: "1h (+4h înmuiere)",
    cookTime: "30 min",
    ingredients: [
      {name: "Orez glutinos (Sticky Rice)", amount: "300 g"},
      {name: "Lapte de cocos (gras)", amount: "400 ml"},
      {name: "Zahăr", amount: "150 g"},
      {name: "Sare", amount: "1/2 linguriță + un vârf"},
      {name: "Mango copt (Nam Dok Mai)", amount: "3 buc"},
      {name: "Fasole Mung prăjită", amount: "topping"},
      {name: "Frunze Pandan (opțional)", amount: "2 buc"},
      {name: "Amidon de porumb", amount: "1 linguriță"}
    ],
    steps: [
      "Pregătirea orezului. Folosiți obligatoriu orez glutinos thailandez (Sweet Rice/Sticky Rice). Orezul obișnuit sau cel de risotto nu funcționează. Spălați orezul de mai multe ori până apa rămâne clară (pentru a elimina excesul de amidon liber).\n\nLăsați-l la înmuiat în apă rece timp de minim 4 ore, sau ideal peste noapte. Boabele se vor hidrata și vor deveni opace.",
      
      "Gătirea la abur. Scurgeți orezul bine. Așezați-l într-un coș de bambus tradițional (huat) sau într-o sită tapetată cu tifon, deasupra unei oale cu apă clocotită. Acoperiți și gătiți la abur timp de 20-25 de minute.\n\nLa jumătatea timpului, 'răsturnați' orezul (ca pe o clătită) în coș pentru a se găti uniform. Orezul este gata când este translucid și moale, dar boabele sunt distincte și lipicioase.",
      
      "Sosul de infuzare. În timp ce orezul se gătește, pregătiți sosul de cocos. Într-o cratiță, puneți 250ml lapte de cocos, zahărul (100-120g) și 1/2 linguriță de sare. Adăugați frunzele de pandan înnodate pentru aromă.\n\nÎncălziți la foc mic, amestecând până se dizolvă zahărul. Nu lăsați să fiarbă în clocot. Sarea este esențială pentru a scoate în evidență dulceața cremei de cocos.",
      
      "Mestecarea (Munging). Imediat ce orezul este gata, transferați-l fierbinte într-un bol cu capac. Turnați sosul de cocos fierbinte peste el.\n\nAmestecați ușor cu o spatulă pentru a distribui lichidul. Acoperiți bolul și lăsați-l să stea (să se odihnească) timp de 20-30 de minute. Orezul va absorbi tot lichidul și va deveni lucios, gras și incredibil de aromat.",
      
      "Sosul sărat de topping. Într-o cratiță mică, amestecați restul de lapte de cocos (150ml) cu un praf generos de sare și puțin zahăr. Dizolvați amidonul în puțină apă și adăugați-l.\n\nFierbeți la foc mic până se îngroașă ușor, ca o smântână lichidă. Acest sos trebuie să fie distinct sărat pentru a contrasta cu mango-ul dulce.",
      
      "Servirea. Curățați mango-ul și tăiați-l felii ('obraji') sau cuburi. Mango-ul trebuie să fie galben, moale și parfumat.\n\nPuneți o porție de orez lipicios pe farfurie. Așezați mango alături. Turnați sosul sărat de cocos peste orez (nu peste mango). Presărați boabe de fasole mung prăjită crocantă (sau susan prăjit) pentru textură."
    ],
    nutrition: {calories: 450, protein: 5, carbs: 80, fat: 12, sugar: 40}
  },

  "Som Tam": {
    title: "Som Tam (Salată de Papaya Verde)",
    servings: 2,
    servingSize: "1 bol (250g)",
    pricePerServing: 15,
    prepTime: "20 min",
    cookTime: "0 min",
    ingredients: [
      {name: "Papaya verde (necoaptă)", amount: "1 buc"},
      {name: "Roșii cherry", amount: "6-8 buc"},
      {name: "Fasole verde lungă (Yardlong)", amount: "2 fire"},
      {name: "Arahide prăjite", amount: "2 linguri"},
      {name: "Creveți uscați", amount: "1 lingură"},
      {name: "Ardei iute (Bird's eye)", amount: "2-3 buc"},
      {name: "Usturoi", amount: "3 căței"},
      {name: "Zahăr de palmier", amount: "1 lingură"},
      {name: "Sos de pește", amount: "2 linguri"},
      {name: "Lime", amount: "2 buc"}
    ],
    steps: [
      "Pregătirea papaya. Folosiți o papaya verde, tare, necoaptă. Curățați coaja. Folosind un cuțit mare, loviți pulpa fructului pe lungime pentru a face crestături dese, apoi tăiați un strat subțire de la suprafață (shredding).\n\nRepetați până ajungeți la semințe (pe care le aruncați). Veți obține fâșii crocante, inegale, care absorb sosul mai bine decât cele rase pe răzătoare. Țineți fâșiile în apă cu gheață 10 minute pentru extra-crocanță.",
      
      "Baza picantă (Pok Pok). Aveți nevoie de un mojar mare de lut (specific pentru Som Tam) și un pistil de lemn. Puneți usturoiul curățat și ardeii iuți în mojar. Zdrobiți-le grosier ('pok pok' este sunetul făcut).\n\nNu le faceți pastă; bucățile trebuie să fie vizibile.",
      
      "Texturile secundare. Adăugați fasolea verde lungă tăiată în bucăți de 3-4 cm. Zdrobiți-o ușor cu pistilul doar cât să se crape (bruising), nu să se facă piure. Adăugați creveții uscați și zdrobiți-i și pe ei ușor.",
      
      "Dressing-ul în mojar. Adăugați zahărul de palmier (pastă sau ras). Zdrobiți-l cu pistilul până se dizolvă și se amestecă cu iuțeala. Adăugați sosul de pește și zeama de lime (puneți și cojile de lime stoarse în mojar pentru a elibera uleiurile esențiale prin presare). Amestecați bine cu o lingură și pistilul.",
      
      "Mixarea finală. Adăugați fâșiile de papaya scursă în mojar. Adăugați roșiile cherry tăiate jumătăți.\n\nAcum urmează tehnica specifică: cu o lingură mare în mâna stângă și pistilul în dreapta, amestecați salata ridicând-o cu lingura și presând-o ușor cu pistilul. Roșiile trebuie doar presate puțin să lase suc, papaya trebuie să se înmoaie ușor și să absoarbă dressing-ul.",
      
      "Servirea. Adăugați arahidele prăjite la final și amestecați o dată. Gustați: Som Tam trebuie să fie o explozie de 5 gusturi: iute, acru (dominant), sărat, dulce și umami.\n\nSe servește imediat, cu orez lipicios (Sticky Rice) care se înmoaie în sosul delicios rămas pe fundul farfuriei, și pui la grătar (Gai Yang)."
    ],
    nutrition: {calories: 150, protein: 8, carbs: 20, fat: 6, fiber: 6}
  },

  "Pad See Ew": {
    title: "Pad See Ew (Tăiței Lați în Sos de Soia)",
    servings: 2,
    servingSize: "1 farfurie (350g)",
    pricePerServing: 20,
    prepTime: "15 min",
    cookTime: "10 min",
    ingredients: [
      {name: "Tăiței de orez lați (Sen Yai)", amount: "400 g"},
      {name: "Carne (Pui/Porc/Vită)", amount: "200 g"},
      {name: "Broccoli Chinezesc (Gai Lan)", amount: "200 g"},
      {name: "Ouă", amount: "2 buc"},
      {name: "Usturoi", amount: "3 căței"},
      {name: "Sos de soia Dark (închis)", amount: "1 lingură"},
      {name: "Sos de soia Light (deschis)", amount: "1 lingură"},
      {name: "Sos de stridii", amount: "1 lingură"},
      {name: "Zahăr", amount: "1 linguriță"},
      {name: "Oțet", amount: "1 linguriță"},
      {name: "Piper alb", amount: "un praf"}
    ],
    steps: [
      "Pregătirea tăițeilor. Pad See Ew necesită tăiței de orez foarte lați și proaspeți (Sen Yai). Dacă folosiți uscați (XL rice flakes), înmuiați-i în apă caldă până se înmoaie, apoi scurgeți bine. Dacă sunt proaspeți și lipiți, desfaceți-i cu grijă.\n\nAmestecați sosurile (soia închisă, soia deschisă, stridii, zahăr, oțet) într-un bol mic.",
      
      "Gătirea cărnii. Tăiați carnea în felii subțiri (bite-size). Tăiați Gai Lan-ul (broccoli chinezesc) în bucăți, separând tulpinile groase de frunze.\n\nÎncingeți wok-ul la foc mare. Adăugați ulei și usturoiul zdrobit. Imediat adăugați carnea și prăjiți-o până e gata 80%.",
      
      "Oul și legumele. Împingeți carnea într-o parte. Spargeți ouăle în uleiul încins. Lăsați-le să se prăjească câteva secunde, apoi spargeți gălbenușurile și amestecați grosier (scramble).\n\nAdăugați tulpinile de Gai Lan și căliți 1 minut.",
      
      "Adăugarea tăițeilor și caramelizarea (Char). Adăugați tăițeii și frunzele de Gai Lan. Turnați sosul amestecat peste tăiței.\n\nAcum, cel mai important pas: întindeți tăițeii pe suprafața wok-ului și LĂSAȚI-I SĂ STEA nemișcați timp de 15-30 de secunde. Căldura mare va carameliza sosul de soia închis și va arde ușor tăițeii, creând acea aromă de fum ('Wok Hei') esențială.",
      
      "Amestecarea finală. După ce s-au prăjit pe o parte, întoarceți tăițeii cu o mișcare rapidă de spatulă (flip). Mai lăsați câteva secunde.\n\nAmestecați totul viguros pentru a combina carnea, oul și tăițeii uniform. Tăițeii trebuie să fie maro-închis, lucioși și ușor lipiciosi, dar nu terciuiți.",
      
      "Servirea. Presărați mult piper alb măcinat deasupra (specific acestui fel). Pad See Ew se servește imediat.\n\nThailandezii adaugă adesea oțet cu ardei iute (Prik Nam Som) și fulgi de chili uscați la masă pentru a tăia din dulceața și grăsimea sosului de soia."
    ],
    nutrition: {calories: 600, protein: 25, carbs: 75, fat: 20, sodium: 1100}
  },

  "Tom Kha Gai": {
    title: "Tom Kha Gai (Supă de Pui cu Cocos și Galangal)",
    servings: 4,
    servingSize: "1 bol (300ml)",
    pricePerServing: 25,
    prepTime: "10 min",
    cookTime: "20 min",
    ingredients: [
      {name: "Lapte de cocos", amount: "500 ml"},
      {name: "Supă clară de pui", amount: "250 ml"},
      {name: "Piept de pui", amount: "300 g"},
      {name: "Galangal", amount: "10-12 felii"},
      {name: "Lemongrass", amount: "2 tije"},
      {name: "Frunze Kaffir Lime", amount: "5 buc"},
      {name: "Ciuperci", amount: "200 g"},
      {name: "Sos de pește", amount: "3 linguri"},
      {name: "Zahăr de palmier", amount: "1 linguriță"},
      {name: "Lime", amount: "2-3 buc"},
      {name: "Ardei iute roșu (decor)", amount: "2 buc"}
    ],
    steps: [
      "Diferența față de Tom Yum. Tom Kha înseamnă 'supă de galangal fiartă'. Spre deosebire de Tom Yum care e acidă și picantă, Tom Kha este dulceagă, cremoasă și aromată, dominată de cocos și galangal.\n\nPregătiți aromaticele: Galangalul (tăiat felii rotunde), lemongrass-ul (zdrobit și tăiat bucăți) și frunzele de lime (rupte).",
      
      "Baza de cocos. Într-un oală, combinați laptele de cocos și supa de pui (proporție 2:1 pentru cremozitate). Aduceți la fierbere la foc mediu, amestecând des pentru a nu se separa laptele de cocos.\n\nAdăugați galangalul, lemongrass-ul și frunzele de lime. Reduceți focul și lăsați să infuzeze 5 minute. Aroma de galangal trebuie să fie proeminentă.",
      
      "Gătirea cărnii. Tăiați puiul în bucăți mici. Adăugați-l în supa care fierbe încet (simmer). Nu fierbeți violent, puiul trebuie să se poșeze ca să rămână fraged.\n\nCând puiul este aproape gata, adăugați ciupercile tăiate și ardeii iuți (întregi sau zdrobiți ușor, doar pentru o aromă subtilă de iute, nu intensă).",
      
      "Asezonarea. Adăugați zahărul de palmier și sosul de pește. Amestecați și gustați. Supa trebuie să fie sărată și ușor dulceagă.\n\nDacă doriți, puteți adăuga puțină pastă de chili prăjit (Nam Prik Pao) pentru culoare, deși Tom Kha tradițională este albă.",
      
      "Acrirea. Opriți focul. Adăugați zeama de lime. Cantitatea de lime este mai mică decât la Tom Yum; aciditatea trebuie să fie prezentă dar să nu domine dulceața cocosului.\n\nAmestecați bine.",
      
      "Servirea. Scoateți supa în boluri. Aromaticele (galangal, lemongrass) se lasă în bol pentru a continua să elibereze aromă, dar nu se mănâncă.\n\nDecorați cu frunze de coriandru și, opțional, ulei de chili picurat deasupra. Este o supă reconfortantă și catifelată."
    ],
    nutrition: {calories: 350, protein: 25, carbs: 10, fat: 25, sodium: 850}
  },

  "Spring Rolls thailandeze": {
    title: "Por Pia Tod (Pachețele de Primăvară Thailandeze)",
    servings: 8,
    servingSize: "2 bucăți (100g)",
    pricePerServing: 12,
    prepTime: "40 min",
    cookTime: "20 min",
    ingredients: [
      {name: "Foi de pachețele (Spring Roll pastry)", amount: "1 pachet"},
      {name: "Tăiței de sticlă (Glass noodles)", amount: "50 g"},
      {name: "Carne tocată pui/porc", amount: "150 g"},
      {name: "Varză albă", amount: "200 g"},
      {name: "Morcov", amount: "1 buc"},
      {name: "Ciuperci urechi-de-lemn", amount: "50 g"},
      {name: "Pastă (Usturoi, Piper, Coriandru)", amount: "1 lingură"},
      {name: "Sos de soia & sos stridii", amount: "mix"}
    ],
    steps: [
      "Pasta aromatică (Sam Gler). Specificul thailandez constă în pasta 'Cei Trei Prieteni': rădăcină de coriandru, usturoi și piper (alb sau negru), pisate împreună în mojar până devin o pastă fină. Aceasta dă gustul de bază umpluturii.\n\nÎnmuiați tăițeii de sticlă (mung bean) în apă caldă 10 minute, apoi tăiați-i în bucăți scurte cu foarfeca.",
      
      "Gătirea umpluturii. Încingeți puțin ulei în wok și prăjiți pasta aromatică până miroase frumos. Adăugați carnea tocată și gătiți-o până se desface.\n\nAdăugați legumele tăiate julienne foarte fin (varza, morcovul) și ciupercile rehidratate tocate. Gătiți până legumele se înmoaie.",
      
      "Asezonarea și uscarea. Adăugați tăițeii scurși, sosul de soia, sosul de stridii și puțin zahăr. Amestecați bine.\n\nContinuați să gătiți până când tot lichidul s-a evaporat. Umplutura trebuie să fie complet uscată ('dry fry'), altfel pachețelele vor exploda sau se vor înmuia la prăjit. Lăsați să se răcească complet pe o tavă întinsă.",
      
      "Rularea. Luați o foaie de aluat (decongelați-le sub un prosop umed să nu se usuce). Așezați-o ca un romb. Puneți o lingură de umplutură în partea de jos.\n\nRulați strâns colțul de jos peste umplutură, eliminând aerul. Aduceți colțurile laterale spre centru (plic). Rulați în continuare până sus.",
      
      "Sigilarea. Preparați un 'lipici' dintr-o lingură de făină și puțină apă. Ungeți colțul de sus al foii cu acest amestec și terminați rularea.\n\nAsigurați-vă că pachețelul este etanș.",
      
      "Prăjirea. Încălziți ulei într-o tigaie adâncă la 170°C. Prăjiți pachețelele în tranșe timp de 3-5 minute, până devin aurii și crocante. Scurgeți-le vertical pe un grătar.\n\nSe servesc cu sos dulce de prune (Nam Jim Buoy) sau Sweet Chili Sauce. Sunt mult mai aromate (piper/coriandru) decât varianta chinezească simplă."
    ],
    nutrition: {calories: 180, protein: 6, carbs: 22, fat: 8, sodium: 350}
  },

  "Thai Fried Rice": {
    title: "Khao Pad (Orez Prăjit Thailandez)",
    servings: 4,
    servingSize: "1 bol mare (350g)",
    pricePerServing: 14,
    prepTime: "10 min",
    cookTime: "10 min",
    ingredients: [
      {name: "Orez Iasomie (rece, de o zi)", amount: "400 g"},
      {name: "Creveți sau Pui", amount: "200 g"},
      {name: "Ouă", amount: "2 buc"},
      {name: "Ceapă", amount: "1 mică"},
      {name: "Roșie", amount: "1 tare"},
      {name: "Usturoi", amount: "2 căței"},
      {name: "Sos de pește", amount: "1 lingură"},
      {name: "Sos de soia", amount: "1 lingură"},
      {name: "Zahăr", amount: "1/2 linguriță"},
      {name: "Piper alb", amount: "un praf"},
      {name: "Prik Nam Pla", amount: "sos servire"}
    ],
    steps: [
      "Orezul potrivit. Folosiți orez Jasmine thailandez. Aroma sa florală este distinctă. Trebuie să fie fiert, răcit și stat la frigider peste noapte. Boabele trebuie să fie separate și puțin uscate.\n\nPregătirea sosului Prik Nam Pla (esențial pentru servire): tăiați ardei iuți mici (Bird's eye) în rondele și puneți-i într-un bol mic cu sos de pește, puțină zeamă de lime și usturoi feliat.",
      
      "Wok-ul. Încingeți uleiul în wok. Adăugați usturoiul tocat și carnea (sau creveții). Prăjiți până carnea este gata. Împingeți carnea în lateral.",
      
      "Oul. Spargeți ouăle în spațiul liber. Spargeți gălbenușurile și lăsați să se facă o omletă moale. Amestecați oul cu carnea.",
      
      "Orezul și legumele. Adăugați ceapa tăiată solzișori mari (specific thailandez) și orezul rece. Spargeți cocoloașele de orez cu spatula.\n\nSpre deosebire de orezul chinezesc, Khao Pad include adesea felii de roșie (fără partea gelatinoasă cu semințe) și tulpini de kale chinezesc (Kai-lan). Adăugați-le acum.",
      
      "Asezonarea. Asezonați cu sos de pește (sare/umami), sos de soia (culoare) și zahăr. Amestecați la foc maxim (toss) timp de 1-2 minute până când orezul este bine încălzit și fiecare bob este acoperit.\n\nRoșiile trebuie să se gătească puțin dar să nu se terciuiască.",
      
      "Servirea. Orezul se servește cu garnituri specifice pe aceeași farfurie: felii de castravete proaspăt (pentru răcorire), o felie de lime (se stoarce înainte de a mânca) și ceapă verde întreagă.\n\nFiecare îmbucătură se stropește cu puțin sos Prik Nam Pla din bolul mic de pe masă."
    ],
    nutrition: {calories: 400, protein: 20, carbs: 60, fat: 10, sodium: 850}
  },

  "Satay": {
    title: "Satay de Pui cu Sos de Arahide",
    servings: 4,
    servingSize: "3 frigărui + sos",
    pricePerServing: 18,
    prepTime: "20 min (+2h marinare)",
    cookTime: "15 min",
    ingredients: [
      {name: "Piept/Pulpe de pui", amount: "500 g"},
      {name: "Lapte de cocos", amount: "100 ml"},
      {name: "Turmeric (Curcuma)", amount: "1 lingură"},
      {name: "Coriandru & Chimen", amount: "măcinat"},
      {name: "Zahăr palmier", amount: "1 lingură"},
      {name: "Arahide prăjite nesărate", amount: "150 g"},
      {name: "Pastă Curry Roșu", amount: "1 lingură"},
      {name: "Pastă Tamarind", amount: "1 lingură"}
    ],
    steps: [
      "Tăierea și marinarea. Tăiați puiul în fâșii lungi, subțiri și plate (de lățimea a două degete). Într-un blender, faceți o marinadă din: rădăcină de coriandru, usturoi, turmeric (pentru culoarea galbenă intensă), chimen, coriandru pudră, zahăr și lapte de cocos.\n\nTurnați peste pui, masați bine și lăsați la frigider minim 2 ore. Laptele de cocos va frăgezi carnea.",
      
      "Înfigerea pe bețe. Înmuiați bețele de bambus în apă 30 de minute. Înfigeți fâșiile de carne pe bețe printr-o mișcare de 'cusut' (înainte-înapoi), astfel încât carnea să stea plată și întinsă, nu boțită.\n\nAcest lucru asigură o gătire rapidă și uniformă pe grătar.",
      
      "Sosul de arahide (Nam Jim Satay). Măcinați arahidele mediu-fin (să aibă textură). Încălziți puțin lapte de cocos și prăjiți pasta de curry roșu în el până iese uleiul.\n\nAdăugați arahidele, tamarindul (acru), zahărul de palmier (dulce) și restul de lapte de cocos. Fierbeți la foc mic, amestecând des, până se îngroașă și uleiul roșu se separă la suprafață. Ajustați sarea.",
      
      "Salata de acompaniament (Ajad). Satay este greu și dulce, așa că necesită aciditate. Faceți un sirop din oțet, zahăr și puțină sare. Lăsați să se răcească.\n\nTurnați-l peste cubulețe de castravete, șalotă și felii de ardei iute chiar înainte de servire.",
      
      "Gătirea. Frigeți frigăruile pe un grătar cu cărbuni (pentru aroma de fum) la foc mediu. Ungeți-le ('basting') în timpul gătirii cu puțin lapte de cocos folosind o pensulă din lemongrass zdrobit.\n\nSe gătesc repede, 3-4 minute pe fiecare parte, până se rumenesc ușor.",
      
      "Servirea. Așezați frigăruile pe platou. Serviți sosul de arahide cald într-un bol și salata Ajad în alt bol mic. Satay se mănâncă înmuind carnea direct în sosul bogat."
    ],
    nutrition: {calories: 450, protein: 35, carbs: 15, fat: 25, sodium: 600}
  },

  "Thai Red Curry": {
    title: "Red Curry cu Rață (Kaeng Phed Ped Yang)",
    servings: 4,
    servingSize: "1 bol (350g)",
    pricePerServing: 35,
    prepTime: "20 min",
    cookTime: "30 min",
    ingredients: [
      {name: "Piept de rață fript (sau rotisat)", amount: "300 g"},
      {name: "Pastă Curry Roșu", amount: "3 linguri"},
      {name: "Lapte de cocos", amount: "500 ml"},
      {name: "Ananas (cuburi)", amount: "100 g"},
      {name: "Roșii cherry", amount: "8 buc"},
      {name: "Struguri (opțional)", amount: "câteva boabe"},
      {name: "Busuioc thailandez", amount: "1 mână"},
      {name: "Frunze Kaffir Lime", amount: "4 buc"},
      {name: "Sos de pește & Zahăr palmier", amount: "gust"}
    ],
    steps: [
      "Conceptul regal. Acest curry (Kaeng Phed Ped Yang) este considerat un fel de mâncare sofisticat, servit inițial la curtea regală. Combinația de carne grasă de rață cu fructe acide (ananas, roșii, struguri) într-un sos picant de cocos este unică.\n\nFolosiți rață deja gătită (rotisată sau resturi de friptură), tăiată felii cu tot cu piele.",
      
      "Prăjirea pastei. Într-o oală, 'spargeți' crema de cocos (fierbeți până se separă uleiul). Adăugați pasta de curry roșu și prăjiți-o în uleiul de cocos până devine închisă la culoare și foarte aromată.\n\nAcesta este fundamentul gustului.",
      
      "Lichidul. Adăugați restul de lapte de cocos și puțină apă (sau supă) pentru a obține consistența dorită (nu foarte groasă, dar nici apoasă). Aduceți la fierbere.",
      
      "Fructele și carnea. Adăugați feliile de rață. Imediat, adăugați ananasul, roșiile cherry întregi și boabele de struguri (dacă folosiți).\n\nFierbeți la foc mic timp de 5-7 minute. Fructele își vor elibera sucurile dulci-acrișoare în sos, temperând iuțeala pastei roșii.",
      
      "Asezonarea. Rupeți frunzele de Kaffir Lime și puneți-le în curry. Adăugați sos de pește și zahăr de palmier. Gustul trebuie să fie complex: grăsimea raței, iuțeala chili-ului, dulceața fructelor și aroma de cocos se îmbină.",
      
      "Finalizarea. Opriți focul. Scufundați o mână mare de busuioc thailandez în sos. Serviți imediat cu orez iasomie.\n\nUleiul roșu care plutește la suprafață este semnul unui curry gătit corect, nu încercați să îl îndepărtați."
    ],
    nutrition: {calories: 600, protein: 25, carbs: 20, fat: 45, sodium: 900}
  },

  // --- NEW ADDITIONS ---

  "Larb Gai": {
    title: "Larb Gai (Salată de Pui Tocat Picantă)",
    servings: 2,
    servingSize: "1 porție",
    pricePerServing: 15,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      {name: "Carne tocată de pui", amount: "300 g"},
      {name: "Orez lipicios (crud)", amount: "2 linguri"},
      {name: "Ceapă roșie/Șalotă", amount: "2 buc"},
      {name: "Mentă & Coriandru", amount: "câte 1 legătură"},
      {name: "Fulgi de chili uscați", amount: "1 lingură"},
      {name: "Zeamă de lime", amount: "3 linguri"},
      {name: "Sos de pește", amount: "2 linguri"},
      {name: "Apă", amount: "50 ml"}
    ],
    steps: [
      "Pudra de orez (Khao Kua). Acesta este ingredientul esențial pentru textură și aromă. Puneți orezul lipicios crud într-o tigaie uscată la foc mic. Prăjiți-l amestecând continuu timp de 10-15 minute până devine auriu-închis și miroase a popcorn. Lăsați-l să se răcească, apoi măcinați-l într-un mojar (sau râșniță) până devine o pudră grunjoasă.",
      "Gătirea cărnii. Larb Gai nu se gătește în ulei! Puneți 50ml de apă într-o oală mică sau wok. Când fierbe, adăugați carnea tocată de pui. Amestecați energic pentru a desface carnea în firimituri mici.",
      "Fierberea. Gătiți carnea până când este complet albă și apa s-a evaporat aproape total (carnea trebuie să fie umedă, dar nu în supă). Luați de pe foc.",
      "Asezonarea fierbinte. Cât carnea e încă fierbinte, adăugați sosul de pește, zeama de lime și fulgi de chili (după gust). Amestecați bine. Căldura cărnii va ajuta la absorbția aromelor.",
      "Verdețurile. Lăsați carnea să se răcorească puțin (să fie călduță, nu fierbinte). Adăugați ceapa roșie tăiată solzișori fini, frunzele de mentă, coriandrul tocat și ceapa verde.",
      "Finalizarea. Chiar înainte de servire, adăugați pudra de orez prăjit (Khao Kua). Aceasta va absorbi excesul de lichid și va da o textură crocantă. Dacă o puneți prea devreme, se înmoaie. Se servește cu orez lipicios și legume crude (varză, fasole verde)."
    ],
    nutrition: {calories: 200, protein: 25, carbs: 10, fat: 5}
  },

  "Panang Curry": {
    title: "Panang Curry cu Vită (Gaeng Panang)",
    servings: 4,
    servingSize: "1 bol",
    pricePerServing: 30,
    prepTime: "20 min",
    cookTime: "30 min",
    ingredients: [
      {name: "Carne de vită (felii subțiri)", amount: "400 g"},
      {name: "Pastă Panang Curry", amount: "3 linguri"},
      {name: "Lapte de cocos gros", amount: "400 ml"},
      {name: "Frunze Kaffir Lime", amount: "5 buc"},
      {name: "Ardei iute roșu", amount: "1 buc (fâșii)"},
      {name: "Zahăr de palmier", amount: "1 lingură"},
      {name: "Sos de pește", amount: "1 lingură"},
      {name: "Arahide măcinate", amount: "1 lingură (opțional)"}
    ],
    steps: [
      "Caracteristici. Panang este un curry mai uscat, mai bogat și mai dulce decât curry-ul roșu sau verde, cu o aromă dominantă de alune și lime. Sosul trebuie să fie gros și să îmbrace carnea.",
      "Prăjirea pastei. Încălziți jumătate din laptele de cocos într-un wok până când uleiul se separă. Adăugați pasta de curry Panang și prăjiți-o în uleiul de cocos până miroase intens. Dacă pasta e uscată, mai adăugați puțin lapte.",
      "Gătirea cărnii. Adăugați carnea de vită tăiată în fâșii subțiri. Prăjiți-o în pastă până își schimbă culoarea. Panang se face de obicei doar cu carne, fără multe legume.",
      "Sosul. Adăugați restul de lapte de cocos. Asezonați cu zahăr de palmier (trebuie să fie ușor dulce) și sos de pește. Unii bucătari adaugă o lingură de arahide măcinate fin pentru consistență.",
      "Reducerea. Lăsați să fiarbă la foc mic până când sosul scade și devine foarte cremos și uleios, acoperind carnea. Nu trebuie să fie o supă.",
      "Decorul. Tăiați frunzele de Kaffir Lime în fâșii extrem de subțiri (ca firele de păr). Presărați-le deasupra curry-ului împreună cu fâșii de ardei roșu. Aroma frunzelor proaspete este semnătura acestui fel."
    ],
    nutrition: {calories: 450, protein: 25, carbs: 10, fat: 35}
  },

  "Khao Soi": {
    title: "Khao Soi (Curry de Pui cu Tăiței din Nord)",
    servings: 4,
    servingSize: "1 bol mare",
    pricePerServing: 25,
    prepTime: "30 min",
    cookTime: "45 min",
    ingredients: [
      {name: "Pulpă de pui (ciocănele)", amount: "4 buc"},
      {name: "Tăiței de ou (proaspeți)", amount: "400 g"},
      {name: "Pastă Khao Soi/Red Curry", amount: "3 linguri"},
      {name: "Pudră de curry galben", amount: "1 linguriță"},
      {name: "Lapte de cocos", amount: "500 ml"},
      {name: "Supă de pui", amount: "300 ml"},
      {name: "Mustar murat, Ceapă roșie", amount: "garnitură"},
      {name: "Ulei", amount: "pt prăjit"}
    ],
    steps: [
      "Pasta. Dacă nu aveți pastă specială de Khao Soi, amestecați pastă de curry roșu cu puțină pudră de curry galben și ghimbir proaspăt ras. Prăjiți pasta în puțin ulei sau cremă de cocos până se eliberează aromele.",
      "Baza de supă. Adăugați laptele de cocos și supa de pui. Aduceți la fierbere. Puneți ciocănelele de pui în supă. Fierbeți la foc mic 30-40 de minute până când carnea este fragedă și se desprinde de os.",
      "Asezonarea. Adăugați sos de pește și zahăr (de palmier). Supa trebuie să fie bogată, cremoasă și aromată, similară cu Massaman dar mai lichidă.",
      "Tăițeii crocanți. Luați o mână de tăiței de ou proaspeți. Prăjiți-i în baie de ulei încins până devin aurii și crocanți. Scoateți-i pe șervete. Aceștia vor fi topping-ul ('cuibul').",
      "Tăițeii moi. Fierbeți restul de tăiței în apă clocotită conform instrucțiunilor. Scurgeți-i și împărțiți-i în boluri.",
      "Asamblarea. Turnați supa fierbinte și câte un ciocănel de pui peste tăițeii moi. Așezați 'cuibul' de tăiței crocanți în vârf. Se servește obligatoriu cu farfurioare mici conținând: varză murată tocată, ceapă roșie tocată, felii de lime și ulei de chili prăjit."
    ],
    nutrition: {calories: 600, protein: 30, carbs: 45, fat: 30}
  },

  "Banane în lapte de cocos": {
    title: "Kluay Buat Chi (Banane în Lapte de Cocos)",
    servings: 4,
    servingSize: "1 bol",
    pricePerServing: 5,
    prepTime: "10 min",
    cookTime: "15 min",
    ingredients: [
      {name: "Banane (ușor verzi/ferme)", amount: "4 buc"},
      {name: "Lapte de cocos", amount: "400 ml"},
      {name: "Zahăr", amount: "50 g"},
      {name: "Sare", amount: "1/2 linguriță"},
      {name: "Frunze Pandan (opțional)", amount: "1 buc"}
    ],
    steps: [
      "Alegerea bananelor. Nu folosiți banane foarte coapte (moi)! În Thailanda se folosesc banane Nam Wa, care sunt mai scurte și amidonoase. Dacă folosiți banane Cavendish, alegeți unele care mai au puțin verde la coajă.",
      "Fierberea preliminară. Tăiați bananele (cu tot cu coajă) în jumătate sau bucăți mari. Fierbeți-le în apă clocotită timp de 5-10 minute. Acest pas elimină taninurile și ajută bananele să nu devină negre sau terciuite în desert.",
      "Curățarea. Scurgeți bananele și clătiți-le cu apă rece. Curățați-le de coajă și tăiați-le în bucăți de mărimea unei înghițituri (sau jumătăți pe lungime).",
      "Baza de cocos. Într-o cratiță, puneți laptele de cocos, zahărul, sarea și frunza de pandan înnodată. Sarea este esențială în deserturile thailandeze cu cocos pentru a balansa dulceața.",
      "Gătirea finală. Încălziți laptele de cocos până se dizolvă zahărul (nu îl fierbeți violent să nu se taie). Adăugați bucățile de banane.",
      "Servirea. Lăsați să fiarbă foarte încet (simmer) timp de 5-8 minute, până când bananele sunt moi dar își păstrează forma și au absorbit aroma de cocos. Se servește cald într-un bol mic."
    ],
    nutrition: {calories: 250, protein: 2, carbs: 40, fat: 12}
  }
};
