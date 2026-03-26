
import { Recipe } from '../../types';

export const SOUP_RECIPES: Record<string, Recipe> = {
  "Ramen": {
    title: "Ramen Japonez (Shoyu Ramen)",
    servings: 2,
    servingSize: "1 bol mare (450ml)",
    pricePerServing: 25,
    prepTime: "40 min",
    cookTime: "4 ore (supa)",
    ingredients: [
      { name: "Supă de pui/porc", amount: "1.5 L" },
      { name: "Tăiței Ramen (alcalini)", amount: "300 g" },
      { name: "Piept de porc (Chashu)", amount: "300 g" },
      { name: "Ouă (marinate)", amount: "2 buc" },
      { name: "Sos de soia", amount: "4 linguri" },
      { name: "Mirin & Sake", amount: "câte 2 linguri" },
      { name: "Ghimbir & Usturoi", amount: "zdrobit" },
      { name: "Alge Nori & Ceapă verde", amount: "decor" },
      { name: "Ulei de susan/chili", amount: "1 lingură" }
    ],
    steps: [
      "Pregătirea bazei de supă (Stock). Într-o oală mare, puneți carcase de pui sau oase de porc, ceapă verde, ghimbir și usturoi. Acoperiți cu apă și fierbeți la foc mic timp de cel puțin 3-4 ore, spumuind constant. Supa trebuie să fie clară, dar plină de colagen și aromă.\n\nPentru un gust autentic, puteți adăuga și puțină alga Kombu și fulgi de Bonito (pește uscat) în ultima jumătate de oră, creând o bază Dashi complexă care amplifică gustul umami.",
      
      "Prepararea sosului Tare (Asezonarea). Tare-ul este 'sufletul' sărat al ramenului. Într-o cratiță mică, amestecați sosul de soia, mirinul, sake-ul și puțin zahăr. Adăugați un cățel de usturoi zdrobit și o felie de ghimbir.\n\nFierbeți amestecul la foc mic până se reduce ușor și devine siropos. Acest concentrat va fi pus pe fundul bolului înainte de supă, dictând profilul de gust al preparatului (Shoyu în acest caz).",
      
      "Carnea Chashu (Porcul braisat). Rulați pieptul de porc și legați-l cu sfoară. Prăjiți-l pe toate părțile într-o tigaie, apoi fierbeți-l încet într-un amestec de apă, soia, zahăr și anason stelat timp de 2 ore până devine extrem de fraged.\n\nLăsați carnea să se răcească în lichidul propriu, apoi tăiați-o în felii subțiri, circulare. Înainte de servire, feliile se pot pârli ușor cu o torță de bucătărie pentru a carameliza grăsimea.",
      
      "Ouăle Ajitsuke Tamago. Fierbeți ouăle exact 6 minute și 30 de secunde, apoi mutați-le imediat în apă cu gheață. Gălbenușul trebuie să fie moale și curgător (jammy).\n\nCurățați ouăle și marinați-le peste noapte (sau măcar 2 ore) într-un amestec de sos de soia și mirin. Albușul se va colora maroniu și va absorbi aromele, iar gălbenușul se va întări ușor, devenind cremos.",
      
      "Fierberea tăițeilor. Folosiți tăiței Ramen proaspeți sau uscați de calitate. Fierbeți-i într-o oală mare cu apă clocotită (fără sare) conform timpului de pe pachet, de obicei foarte scurt (1-2 minute).\n\nTăițeii trebuie să fie fermi ('al dente'), deoarece se vor mai găti în supa fierbinte. Scurgeți-i foarte bine de apă, scuturând sita energic.",
      
      "Asamblarea bolului. Puneți 2 linguri de Tare și o linguriță de ulei aromat (de susan sau chili) pe fundul bolului. Turnați supa fierbinte deasupra și amestecați. Adăugați tăițeii, aranjându-i frumos cu bețișoarele ('folding').\n\nDeasupra așezați feliile de Chashu, oul tăiat în jumătate, o foaie de alga Nori pe margine, muguri de bambus (Menma) și multă ceapă verde tocată fin. Serviți imediat, sorbind zgomotos!"
    ],
    nutrition: { calories: 600, protein: 25, carbs: 65, fat: 20, sodium: 1200 }
  },

  "Tom Yum": {
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
      
      "Servirea. Turnați supa în boluri, asigurându-vă că fiecare primește creveți și ciuperci. Puteți lăsa bucățile de lemongrass și galangal în bol pentru aspect, dar avertizați oaspeții să nu le mănânce.\n\nPresărați coriandru proaspăt (cilantro) sau culantro (Sawtooth coriander) deasupra. Se servește fierbinte, de obicei acompaniată de un bol de orez iasomie pentru a calma focul de pe limbă."
    ],
    nutrition: {calories: 180, protein: 20, carbs: 8, fat: 8, sodium: 1200}
  },

  "Ciorbă de burtă": {
    title: "Ciorbă de burtă (Tradițională Românească)",
    servings: 8,
    servingSize: "1 bol (350ml)",
    pricePerServing: 22,
    prepTime: "30 min",
    cookTime: "3-4 ore",
    ingredients: [
      { name: "Burtă de vită (prefiartă)", amount: "2 kg" },
      { name: "Oase de vită cu măduvă", amount: "1 kg" },
      { name: "Morcovi", amount: "3 buc" },
      { name: "Ceapă", amount: "2 buc" },
      { name: "Țelină", amount: "1/2 rădăcină" },
      { name: "Gălbenușuri de ou", amount: "4 buc" },
      { name: "Smântână (20% grăsime)", amount: "500 ml" },
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
    nutrition: {
      calories: 350,
      protein: 25,
      carbs: 8,
      fat: 22,
      fiber: 2,
      sugar: 1,
      sodium: 120,
      micronutrients: ["Vitamina A", "Calciu", "Vitamina B12", "Zinc", "Colagen"]
    }
  },

  "Pho": {
    title: "Pho Bo (Supă Vietnameză de Vită)",
    servings: 4,
    servingSize: "1 bol mare (450ml)",
    pricePerServing: 26,
    prepTime: "30 min",
    cookTime: "3 ore",
    ingredients: [
      { name: "Oase de vită", amount: "1.5 kg" },
      { name: "Carne vită (feliată subțire)", amount: "400 g" },
      { name: "Tăiței de orez (Pho)", amount: "300 g" },
      { name: "Ceapă & Ghimbir", amount: "câte 1 buc (mari)" },
      { name: "Condimente Pho", amount: "Anason, Scorțișoară, Cuișoare" },
      { name: "Sos de pește", amount: "3 linguri" },
      { name: "Zahăr brun", amount: "1 lingură" },
      { name: "Garnituri", amount: "Busuioc thai, Lime, Chili, Fasole Mung" }
    ],
    steps: [
      "Blanșarea oaselor. Puneți oasele de vită într-o oală cu apă rece, aduceți la fierbere și fierbeți 5 minute. Aruncați apa tulbure și spălați oasele foarte bine sub jet de apă.\n\nAcest pas este obligatoriu pentru a obține acea supă clară, limpede, specifică Pho-ului. Puneți oasele curate înapoi în oală cu 3-4 litri de apă proaspătă.",
      
      "Carbonizarea aromelor. Tăiați ceapa și ghimbirul în jumătate. Puneți-le direct pe flacăra aragazului sau sub grill-ul cuptorului până când se carbonizează ușor (devin negre pe margini).\n\nAceastă tehnică dă supei o aromă afumată și o dulceață profundă. Curățați partea neagră excesivă și adăugați-le în oală.",
      
      "Infuzia condimentelor. Prăjiți uscat (fără ulei) anasonul stelat, batonul de scorțișoară, cuișoarele și semințele de coriandru într-o tigaie timp de 1-2 minute până miros intens. Puneți-le într-un săculeț de pânză (sau infuzor) și adăugați-le în supă.\n\nFierbeți supa la foc mic, fără capac, timp de 3 ore. Nu lăsați să clocotească puternic, doar să fremete.",
      
      "Asezonarea. După fierbere, scoateți oasele și aromele. Asezonați supa cu sos de pește (secretul umami), zahăr brun și sare. Supa trebuie să fie puțin mai sărată decât normal, deoarece tăițeii nesărați vor dilua gustul.\n\nȚineți supa la punctul de fierbere înainte de servire.",
      
      "Pregătirea tăițeilor. Înmuiați tăițeii de orez (lați) în apă caldă timp de 30 de minute. Apoi, opăriți-i în apă clocotită timp de 1 minut (sau conform pachetului) chiar înainte de servire.\n\nScurgeți-i bine și împărțiți-i în boluri mari.",
      
      "Asamblarea finală. Așezați feliile de carne de vită crudă (foarte subțiri) direct peste tăiței. Turnați supa clocotită direct peste carne. Căldura supei va găti carnea instantaneu, lăsând-o fragedă.\n\nServiți imediat cu un platou de ierburi proaspete (busuioc, coriandru), germeni de fasole, felii de lime și sos Sriracha/Hoisin alături."
    ],
    nutrition: { calories: 450, protein: 30, carbs: 50, fat: 15, sodium: 1500 }
  },

  "Minestrone": {
    title: "Minestrone (Supa Italiană de Legume)",
    servings: 6,
    servingSize: "1 bol (300ml)",
    pricePerServing: 8,
    prepTime: "20 min",
    cookTime: "40 min",
    ingredients: [
      { name: "Mix legume", amount: "500 g (dovlecel, morcov, cartof, fasole verde)" },
      { name: "Fasole boabe (Borlotti)", amount: "1 conservă" },
      { name: "Paste mici (Ditalini)", amount: "100 g" },
      { name: "Suc de roșii", amount: "200 ml" },
      { name: "Coajă de Parmigiano", amount: "1 bucată (secretul!)" },
      { name: "Supă de legume/apă", amount: "1.5 L" },
      { name: "Pesto (opțional)", amount: "1 lingură" }
    ],
    steps: [
      "Soffritto-ul este baza. Tocați mărunt o ceapă, un morcov și o tijă de țelină. Căliți-le în ulei de măsline într-o oală mare timp de 5-8 minute până se înmoaie. Acest amestec dă profunzime supei.\n\nTăiați restul legumelor (cartofi, dovlecei, fasole verde) în cubulețe egale pentru o gătire uniformă.",
      
      "Fierberea. Adăugați legumele tăiate peste soffritto și căliți-le 2 minute. Turnați sucul de roșii și supa fierbinte (sau apă).\n\nSecretul bucătarilor italieni: adăugați în oală o coajă veche, tare, de la o bucată de Parmezan (curățată bine la exterior). Aceasta va elibera o aromă umami incredibilă în timpul fierberii (o scoateți la final).",
      
      "Fierbeți supa la foc mediu timp de 20 de minute. Adăugați fasolea boabe scursă și clătită.\n\nCând legumele sunt aproape fierte, adăugați pastele mici (sau orez) și mai fierbeți conform timpului de pe pachet (cca 8-10 min). Supa trebuie să fie deasă, plină de legume, nu apoasă.",
      
      "Reglarea consistenței. Dacă supa scade prea mult de la paste, mai completați cu puțină apă fierbinte. Asezonați cu sare și piper.\n\nMinestrone este o supă 'de sezon', așa că legumele pot varia (mazăre primăvara, dovleac toamna).",
      
      "Finisarea Genoveză. La final, opriți focul. Pentru un gust autentic, amestecați în supă o lingură de sos Pesto chiar înainte de servire. Busuiocul proaspăt va da o notă vibrantă.\n\nLăsați supa să stea 10 minute înainte de a o pune în farfurii. Se servește caldă (nu clocotită) sau chiar la temperatura camerei vara.",
      
      "Servirea. Turnați în boluri adânci. Presărați extra parmezan ras și un fir de ulei de măsline crud în fiecare farfurie. Se servește cu pâine prăjită (ciabatta)."
    ],
    nutrition: { calories: 200, protein: 8, carbs: 35, fat: 5, fiber: 6 }
  },

  "Gazpacho": {
    title: "Gazpacho Andaluz (Supă Rece de Roșii)",
    servings: 4,
    servingSize: "1 pahar/bol (250ml)",
    pricePerServing: 12,
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
      
      "Blendarea. Puneți tot amestecul (inclusiv sucul lăsat) într-un blender de mare viteză. Mixați la putere maximă timp de 2-3 minute.\n\nTrebuie să obțineți o supă extrem de fină, omogenă, de o culoare portocaliu-roșcată vibrantă (datorită emulsiei cu aer).",
      
      "Emulsionarea cu ulei. În timp ce blenderul merge la viteză medie, începeți să turnați uleiul de măsline în fir subțire. Această tehnică creează o emulsie stabilă, similară cu maioneza.\n\nSupa va deveni mai deschisă la culoare, mai cremoasă și mai catifelată datorită uleiului. Gustați și ajustați sarea și oțetul. Trebuie să aibă un 'kick' acidulat.",
      
      "Strecurarea (Pentru finețe). Pentru un Gazpacho de restaurant, treceți supa printr-o sită fină (chinois), apăsând cu un polonic pentru a extrage tot lichidul și a lăsa în urmă cojile și semințele.\n\nDacă preferați un stil rustic (Salmorejo-style), puteți sări peste acest pas, dar textura va fi mai grunjoasă.",
      
      "Răcirea și servirea. Puneți supa la frigider până devine foarte rece. Gazpacho se servește aproape înghețat.\n\nSe servește în boluri sau pahare, decorat cu picături de ulei de măsline și mici cubulețe (brunoise) de castravete, ardei și crutoane de pâine pentru contrast de textură."
    ],
    nutrition: { calories: 250, protein: 4, carbs: 20, fat: 18, micronutrients: ["Vitamin C", "Lycopene"] }
  },

  "Supă de ceapă franțuzească": {
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

  "Ciorbă de perișoare": {
    title: "Ciorbă de perișoare (Ca la Mama)",
    servings: 6,
    servingSize: "1 bol (350ml)",
    pricePerServing: 14,
    prepTime: "30 min",
    cookTime: "1 oră",
    ingredients: [
      { name: "Carne tocată amestec", amount: "500 g" },
      { name: "Orez", amount: "50 g" },
      { name: "Ou", amount: "1 buc" },
      { name: "Ceapă", amount: "2 buc" },
      { name: "Morcov, Țelină, Ardei", amount: "câte 1" },
      { name: "Borș (sau lămâie)", amount: "500 ml" },
      { name: "Sos roșii", amount: "200 ml" },
      { name: "Leuștean", amount: "1 legătură" }
    ],
    steps: [
      "Începeți cu baza lichidă. Curățați și tocați mărunt legumele (ceapa, morcovul, țelina, ardeiul). Într-o oală mare, puneți legumele la fiert în aproximativ 3-4 litri de apă cu puțină sare. Puteți căli ușor morcovul înainte pentru o culoare mai frumoasă a ciorbei.\n\nLăsați legumele să fiarbă la foc mediu timp de 15-20 de minute, până încep să se înmoaie. Aceasta va crea o bază dulceagă și aromată pentru perișoare.",
      
      "Între timp, pregătiți compoziția pentru perișoare. Într-un bol, amestecați carnea tocată cu orezul spălat bine în prealabil, oul crud, sare, piper, puțină ceapă tocată foarte fin (sau dată pe răzătoare) și mărar tocat.\n\nFrământați bine compoziția timp de câteva minute. Orezul va fierbe în ciorbă, așa că nu trebuie pus prea mult, altfel perișoarele se vor 'arici' (vor ieși boabele în afară).",
      
      "Modelarea perișoarelor se face cu mâinile umede. Luați cantități mici de compoziție și formați biluțe rotunde, cam de mărimea unei nuci. Așezați-le pe un tocător umezit cu apă rece pentru a nu se lipi.\n\nEste important să le faceți egale pentru a se găti în același timp. Dacă compoziția vi se pare prea moale, mai puteți adăuga puțină făină sau pesmet, dar ideal este să rămână pufoase doar din carne și ou.",
      
      "Când legumele din oală sunt pe jumătate fierte, reduceți focul la minim (apa trebuie să fremete ușor, nu să clocotească violent). Adăugați perișoarele una câte una, cu grijă să nu le striviți.\n\nNu amestecați în oală imediat, lăsați-le să se coaguleze la suprafață. Perișoarele se vor ridica singure la suprafață pe măsură ce se gătesc. Lăsați să fiarbă liniștit timp de 20 de minute.",
      
      "Adăugați sosul de roșii sau bulionul în ciorbă pentru culoare și gust. Separat, fierbeți borșul într-un ibric (dați-l într-un clocot) pentru a nu opri procesul de gătire când îl turnați în oala mare.\n\nTurnați borșul fierbinte peste ciorbă. Gustați și potriviți de sare. Dacă nu aveți borș, puteți acri cu zeamă de lămâie sau sare de lămâie, însă gustul autentic românesc este dat de borș.",
      
      "Mai lăsați ciorba să dea 2-3 clocote împreună cu borșul pentru a se îmbina aromele. Opriți focul.\n\nImediat după ce ați stins focul, adăugați leușteanul tocat proaspăt. Acoperiți oala cu un capac și lăsați să se odihnească 10-15 minute înainte de servire ('infuzare'). Leușteanul este esențial pentru identitatea ciorbei de perișoare."
    ],
    nutrition: { calories: 300, protein: 20, carbs: 15, fat: 18 }
  },

  "Supă cremă de roșii": {
    title: "Supă Cremă de Roșii Coapte",
    servings: 4,
    servingSize: "1 bol (300ml)",
    pricePerServing: 10,
    prepTime: "15 min",
    cookTime: "45 min",
    ingredients: [
      { name: "Roșii coapte (Roma)", amount: "1.5 kg" },
      { name: "Usturoi", amount: "1 căpățână" },
      { name: "Ceapă", amount: "1 buc" },
      { name: "Supă de legume", amount: "500 ml" },
      { name: "Busuioc proaspăt", amount: "1 legătură" },
      { name: "Smântână lichidă", amount: "100 ml" },
      { name: "Ulei de măsline", amount: "3 linguri" },
      { name: "Cimbru, Sare, Piper", amount: "după gust" }
    ],
    steps: [
      "Coacerea legumelor (Roasting). Acesta este secretul gustului intens. Tăiați roșiile în jumătăți și puneți-le într-o tavă de cuptor. Tăiați ceapa în sferturi. Tăiați doar vârful căpățânii de usturoi, lăsând-o întreagă.\n\nStropiți totul generos cu ulei de măsline, sare, piper și cimbru. Coaceți la 200°C timp de 40-45 de minute, până când roșiile sunt moi și ușor carbonizate pe margini. Coacerea concentrează zaharurile naturale.",
      
      "Blendarea. Scoateți tava din cuptor. Stoarceți usturoiul copt din coajă (va ieși ca o pastă dulce). Puneți roșiile, ceapa, usturoiul și sucurile din tavă într-o oală mare.\n\nAdăugați supa de legume și frunzele de busuioc proaspăt. Folosiți un blender vertical (pasator) pentru a mixa totul până devine o pastă omogenă.",
      
      "Fierberea și consistența. Puneți oala pe foc mediu. Aduceți la fierbere. Dacă supa este prea groasă, mai adăugați puțină supă sau apă. Dacă e prea subțire, lăsați să mai scadă 5-10 minute.\n\nGustați. Dacă roșiile sunt prea acide, adăugați o linguriță de zahăr sau bicarbonat de sodiu pentru a echilibra pH-ul.",
      
      "Strecurarea (Opțional). Pentru o supă cremă de restaurant, treceți totul printr-o sită fină pentru a elimina semințele și cojile de roșii. Dacă preferați stilul rustic, săriți peste acest pas.",
      
      "Finisarea cu smântână. Opriți focul. Încorporați smântâna lichidă (sau lapte de cocos pentru varianta vegană). Smântâna va da supei o culoare portocalie superbă și o textură catifelată.\n\nNu fierbeți supa după ce ați pus smântâna.",
      
      "Servirea. Serviți supa fierbinte în boluri. Decorați cu o frunză de busuioc proaspăt, câteva picături de ulei de măsline și parmezan ras.\n\nAcompaniamentul clasic este 'Grilled Cheese Sandwich' (sandviș cu cașcaval la grill) pentru înmuiat."
    ],
    nutrition: { calories: 250, protein: 5, carbs: 20, fat: 15, sodium: 600 }
  },

  "Bouillabaisse": {
    title: "Bouillabaisse (Tocană de Pește Provensală)",
    servings: 6,
    servingSize: "1 porție generoasă (400g)",
    pricePerServing: 45,
    prepTime: "40 min",
    cookTime: "40 min",
    ingredients: [
      { name: "Pește variat (alb/ferm)", amount: "1.5 kg" },
      { name: "Fructe de mare (midii, creveți)", amount: "500 g" },
      { name: "Fenicul (bulbul)", amount: "1 buc" },
      { name: "Praz & Ceapă", amount: "tocat" },
      { name: "Roșii", amount: "3 buc" },
      { name: "Șofran", amount: "1 plic" },
      { name: "Coajă de portocală", amount: "1 fâșie" },
      { name: "Sos Rouille", amount: "pt servire" }
    ],
    steps: [
      "Baza aromatică. Într-un oală largă, căliți prazul, ceapa, usturoiul și feniculul tocat în ulei de măsline până se înmoaie. Adăugați roșiile tocate și gătiți până se formează un sos.\n\nAdăugați coaja de portocală uscată, foaia de dafin, cimbrul și, elementul cheie, șofranul. Șofranul dă culoarea aurie și aroma specifică Marsiliei.",
      
      "Supa de pește. Adăugați capetele și oasele de pește (dacă aveți) și acoperiți cu apă. Fierbeți 20 de minute, apoi strecurați supa presând bine solidele. Turnați supa clară înapoi în oală.\n\n(Sau folosiți supă de pește gata făcută). Aduceți lichidul la punctul de fierbere puternică ('boll'). Numele vine de la 'bouillir' (a fierbe) și 'baisser' (a reduce focul).",
      
      "Gătirea peștelui. Adăugați peștele în ordinea fermității. Începeți cu peștele cu carne tare (monkfish, conger) și fierbeți 5 minute la foc iute (fierberea rapidă emulsionează uleiul cu supa).\n\nReduceți focul și adăugați peștii mai delicați (doradă, cod) și fructele de mare (midii, creveți).",
      
      "Finalizarea. Gătiți încă 5-7 minute până când midiile s-au deschis și peștele este opac. Nu amestecați prea mult pentru a nu rupe peștele; doar scuturați oala.\n\nGustați supa; trebuie să fie sărată, aromată de mare și parfumată cu fenicul și șofran.",
      
      "Sosul Rouille. Pregătiți sosul Rouille: o maioneză de usturoi cu șofran, ardei iute și miez de pâine. Este 'rugina' care dă numele sosului.\n\nPrăjiți felii de baghetă și frecați-le cu usturoi.",
      
      "Servirea tradițională. Se servește în două etape sau simultan: supa se toarnă în farfurie peste feliile de pâine unse cu Rouille. Peștele se servește pe un platou separat, pentru ca fiecare să își pună în supă.\n\nEste o masă festivă, de împărțit."
    ],
    nutrition: { calories: 500, protein: 45, carbs: 15, fat: 20, sodium: 900 }
  },

  "Laksa": {
    title: "Laksa Curry (Supă de Cocos Picantă)",
    servings: 4,
    servingSize: "1 bol mare (450ml)",
    pricePerServing: 28,
    prepTime: "30 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Pastă Laksa", amount: "4 linguri" },
      { name: "Lapte de cocos", amount: "400 ml" },
      { name: "Supă de pui/creveți", amount: "500 ml" },
      { name: "Tăiței de orez (vermicelli)", amount: "300 g" },
      { name: "Creveți & Pui", amount: "400 g" },
      { name: "Tofu pufos (Puffs)", amount: "100 g" },
      { name: "Muguri de fasole", amount: "100 g" },
      { name: "Lime & Coriandru", amount: "decor" }
    ],
    steps: [
      "Prăjirea pastei (Rempah). Încălziți puțin ulei într-o oală mare. Adăugați pasta de Laksa (cumpărată sau făcută din chili, lemongrass, galangal, curcuma, creveți uscați). Prăjiți-o la foc mediu timp de 5 minute, amestecând continuu, până când uleiul se separă și miroase intens.\n\nAcest pas este critic pentru a 'trezi' condimentele.",
      
      "Baza lichidă. Adăugați supa de pui (sau de capete de creveți pentru un gust autentic) și laptele de cocos. Aduceți la fierbere.\n\nAdăugați puiul tăiat bucăți și tofu-ul pufos (tau pok) tăiat jumătăți. Tofu-ul va absorbi supa ca un burete. Lăsați să fiarbă 10-15 minute până puiul e gata.",
      
      "Creveții. Adăugați creveții curățați în ultimele 3 minute de fierbere. Nu îi lăsați mult, să rămână suculenți. Asezonați cu puțin zahăr și sos de pește dacă e nevoie.",
      
      "Pregătirea tăițeilor. Înmuiați tăițeii de orez (vermicelli subțiri sau tăiței hokkien galbeni) în apă caldă. Opăriți-i scurt (30 secunde) în apă clocotită chiar înainte de servire.\n\nOpăriți și mugurii de fasole 10 secunde.",
      
      "Asamblarea. Puneți tăițeii și mugurii de fasole pe fundul bolurilor adânci. Turnați supa fierbinte, puiul, creveții și tofu deasupra.\n\nSupa trebuie să fie bogată, cremoasă și roșiatică.",
      
      "Garnisirea. Decorați cu frunze de coriandru (sau mentă vietnameză - laksa leaf), felii de ardei iute și o jumătate de lime. Unii adaugă și un ou fiert tare.\n\nStoarceți lime-ul înainte de a mânca pentru a tăia din grăsimea cocosului."
    ],
    nutrition: { calories: 650, protein: 30, carbs: 50, fat: 35, sodium: 1100 }
  },

  "Supă miso": {
    title: "Supă Miso (Clasică Japoneză)",
    servings: 4,
    servingSize: "1 bol mic (200ml)",
    pricePerServing: 8,
    prepTime: "5 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Dashi (Supă bază)", amount: "1 L" },
      { name: "Pastă Miso (Albă/Roșie)", amount: "3-4 linguri" },
      { name: "Tofu (moale/silken)", amount: "200 g" },
      { name: "Alge Wakame (uscate)", amount: "1 lingură" },
      { name: "Ceapă verde", amount: "2 fire" }
    ],
    steps: [
      "Prepararea Dashi-ului. Dashi este fundamentul. Puteți folosi pudră de dashi instant dizolvată în apă caldă sau îl puteți face tradițional fierbând alga Kombu în apă, scoțând-o înainte de clocot, și adăugând fulgi de Bonito (pește uscat) pentru infuzie scurtă.\n\nStrecurați supa. Dashi-ul trebuie să fie auriu și limpede, cu gust umami.",
      
      "Pregătirea ingredientelor. Rehidratați algele Wakame în puțină apă rece timp de 5 minute, apoi scurgeți-le. Ele își vor mări volumul considerabil.\n\nTăiați tofu-ul (Silken sau Soft) în cubulețe foarte mici (1 cm). Tocați ceapa verde fin.",
      
      "Fierberea ingredientelor solide. Puneți Dashi-ul la fiert. Adăugați cuburile de tofu și algele Wakame. Lăsați să fiarbă doar 1 minut pentru a încălzi tofu-ul.\n\nNu fierbeți excesiv tofu-ul deoarece devine poros.",
      
      "Dizolvarea Miso-ului (Regula de Aur). Opriți focul! Pasta Miso nu trebuie fiartă niciodată, deoarece fierberea distruge probioticele și alterează aroma delicată.\n\nPuneți pasta miso într-o polonică (sau sită) și scufundați-o parțial în supa fierbinte. Folosiți bețișoare sau o lingură pentru a dizolva pasta în polonic până devine lichidă, apoi amestecați-o în restul supei.",
      
      "Norii de Miso. Supa va deveni tulbure ('cloudy'). Acesta este aspectul corect. Nu mai puneți pe foc.\n\nGustați. Miso variază în salinitate, așa că ajustați cantitatea. Nu adăugați sare suplimentară.",
      
      "Servirea. Turnați imediat în boluri mici. Presărați ceapă verde tocată. Miso se servește la începutul sau la sfârșitul unei mese japoneze, băută direct din bol (fără lingură pentru lichid, bețișoare pentru tofu)."
    ],
    nutrition: { calories: 80, protein: 6, carbs: 8, fat: 3, sodium: 700 }
  }
};
