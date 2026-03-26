
import { Recipe } from '../../types';

export const GREEK_RECIPES: Record<string, Recipe> = {
  "Moussaka": {
    title: "Moussaka Grecească Tradițională",
    servings: 8,
    servingSize: "1 porție (350g)",
    pricePerServing: 20,
    prepTime: "1 oră",
    cookTime: "1 oră",
    ingredients: [
      { name: "Vinete mari", amount: "3 buc" },
      { name: "Cartofi", amount: "4 buc" },
      { name: "Carne tocată (vită/miel)", amount: "600 g" },
      { name: "Ceapă", amount: "2 buc" },
      { name: "Usturoi", amount: "3 căței" },
      { name: "Roșii pasate", amount: "400 g" },
      { name: "Vin roșu", amount: "100 ml" },
      { name: "Lapte (pt Bechamel)", amount: "700 ml" },
      { name: "Făină & Unt", amount: "câte 80 g" },
      { name: "Brânză Kefalotyri/Parmesan", amount: "100 g" },
      { name: "Scorțișoară", amount: "1 băț" }
    ],
    steps: [
      "Pregătirea legumelor este baza structurii. Tăiați vinetele în felii longitudinale de 1 cm grosime. Presărați-le cu sare și lăsați-le într-o sită 30 de minute să elimine amărăciunea și apa. Tăiați cartofii în felii similare.\n\nPrăjiți feliile de cartofi și vinete în ulei de măsline (sau coaceți-le la cuptor unse cu ulei pentru o variantă mai ușoară) până devine aurii. Scoateți-le pe hârtie absorbantă. Cartofii vor forma baza solidă, iar vinetele stratul moale.",
      
      "Sosul de carne (Kima). Căliți ceapa tocată fin până devine sticloasă, apoi adăugați carnea tocată. Prăjiți carnea la foc iute, zdrobind cocoloașele, până se rumenește bine (reacția Maillard).\n\nStingeți cu vinul roșu și lăsați să se evapore. Adăugați usturoiul, roșiile, sarea, piperul și, esențial pentru gustul grecesc, un băț de scorțișoară și puțină nucșoară. Lăsați să fiarbă la foc mic până scade lichidul și sosul devine gros.",
      
      "Sosul Bechamel catifelat. Topiți untul într-o cratiță, adăugați făina și gătiți 2 minute (roux). Turnați laptele cald treptat, amestecând energic cu telul pentru a evita cocoloașele.\n\nFierbeți până se îngroașă. Luați de pe foc și încorporați o parte din brânza rasă și, opțional, 1-2 gălbenușuri de ou pentru o culoare aurie și o textură mai bogată. Asezonați cu nucșoară.",
      
      "Montarea straturilor. Într-o tavă adâncă unsă cu unt, așezați un strat compact de felii de cartofi prăjiți. Presărați puțină brânză. Urmează un strat de felii de vinete (puteți să le suprapuneți ușor).\n\nTurnați tot sosul de carne deasupra vinetelor și nivelați bine. Dacă mai aveți vinete, puteți pune încă un strat peste carne.",
      
      "Stratul final și coacerea. Turnați sosul Bechamel peste ultimul strat, având grijă să acoperiți colțurile. Presărați restul de brânză rasă deasupra pentru gratinare.\n\nCoaceți în cuptorul preîncălzit la 180°C timp de 45-60 de minute, până când crusta devine brun-aurie și moussaka clocotește pe margini.",
      
      "Odihna obligatorie. Scoateți tava din cuptor și lăsați-o să se răcească cel puțin 30-45 de minute înainte de a tăia. Acesta este cel mai greu pas, dar necesar.\n\nDacă tăiați moussaka fierbinte, straturile se vor prăbuși. Trebuie să se 'așeze' pentru a obține acele pătrate perfecte, cu straturi distincte, pe care le vedeți în tavernele grecești."
    ],
    nutrition: { calories: 600, protein: 25, carbs: 35, fat: 40, sodium: 800 }
  },

  "Souvlaki": {
    title: "Souvlaki de Pui Marinat",
    servings: 4,
    servingSize: "2 frigărui + pită",
    pricePerServing: 16,
    prepTime: "20 min (+2h marinare)",
    cookTime: "15 min",
    ingredients: [
      { name: "Piept/Pulpă de pui", amount: "600 g" },
      { name: "Lămâie", amount: "1 buc" },
      { name: "Oregano uscat", amount: "1 lingură" },
      { name: "Ulei de măsline", amount: "4 linguri" },
      { name: "Usturoi", amount: "3 căței" },
      { name: "Sare, Piper", amount: "după gust" },
      { name: "Pită grecească", amount: "4 buc" }
    ],
    steps: [
      "Tăierea și pregătirea cărnii. Dacă folosiți piept de pui, tăiați-l în cuburi de 3-4 cm. Dacă preferați carnea mai suculentă, folosiți pulpe dezosate.\n\nBucățile trebuie să fie egale pentru a se găti uniform. Puneți carnea într-un bol încăpător sau într-o pungă ziploc.",
      
      "Marinada grecească clasică. Într-un bol mic, amestecați uleiul de măsline, zeama de la o lămâie întreagă, usturoiul pisat și oregano uscat (frecați oregano între palme pentru a elibera aroma).\n\nTurnați marinada peste carne și masați bine. Acoperiți și lăsați la frigider minim 2 ore, ideal 4-6 ore. Acidul din lămâie va frăgezi fibrele cărnii.",
      
      "Pregătirea țepușelor. Dacă folosiți țepușe de lemn, înmuiați-le în apă timp de 30 de minute înainte de folosire. Acest lucru previne arderea lor pe grătar.\n\nÎnfigeți bucățile de carne pe țepușe, lăsând puțin spațiu între ele (nu le înghesuiți excesiv) pentru ca căldura să circule și să rumenească carnea pe toate părțile.",
      
      "Gătirea. Încingeți bine grătarul (cărbuni sau gaz) sau o tigaie grill de fontă. Ungeți grătarul cu puțin ulei.\n\nAșezați frigăruile și gătiți-le la foc mediu-iute, întorcându-le la fiecare 2-3 minute. Timpul total este de aproximativ 10-12 minute. Carnea trebuie să aibă urme de arsură (char marks) dar să fie suculentă în interior.",
      
      "Odihna și pitele. Scoateți souvlaki pe un platou și acoperiți lejer cu folie pentru 5 minute. Între timp, ungeți pitele grecești cu puțin ulei de măsline și presărați oregano.\n\nÎncălziți pitele pe grătarul încins câte 1 minut pe fiecare parte până devin moi și calde.",
      
      "Servirea. Souvlaki se servește tradițional direct pe țepușă, așezat peste pită, cu o felie de lămâie alături.\n\nPentru o masă completă, adăugați pe platou o porție generoasă de Tzatziki, câțiva cartofi prăjiți cu oregano și felii de roșii proaspete."
    ],
    nutrition: { calories: 350, protein: 30, carbs: 25, fat: 15, sodium: 600 }
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

  "Gyros": {
    title: "Gyros de Casă (Porc sau Pui)",
    servings: 4,
    servingSize: "1 gyros (350g)",
    pricePerServing: 22,
    prepTime: "30 min",
    cookTime: "20 min",
    ingredients: [
      { name: "Ceafă de porc / Pulpă pui", amount: "600 g" },
      { name: "Lipii grecești", amount: "4 buc" },
      { name: "Cartofi prăjiți", amount: "200 g" },
      { name: "Ceapă roșie", amount: "1 buc" },
      { name: "Roșii", amount: "2 buc" },
      { name: "Tzatziki", amount: "200 g" },
      { name: "Condimente Gyros", amount: "mix" }
    ],
    steps: [
      "Tăierea și marinarea. Tăiați carnea în fâșii foarte subțiri și scurte, imitând tăietura de pe rotisorul vertical. Într-un bol, amestecați carnea cu un mix de condimente: sare, piper, oregano, cimbru, usturoi granulat, boia dulce și puțin chimen.\n\nAdăugați o lingură de oțet și două de ulei de măsline. Masați carnea și lăsați-o la marinat 30 de minute.",
      
      "Gătirea cărnii. Încingeți o tigaie largă (sau wok) la foc mare. Adăugați carnea într-un singur strat (în tranșe dacă e nevoie) pentru a se prăji și rumeni, nu a se înăbuși.\n\nLăsați carnea să se caramelizeze bine pe margini pentru a obține gustul specific de rotisor. Când e gata, scoateți-o într-un bol și acoperiți-o.",
      
      "Pregătirea garniturilor. Prăjiți cartofii tăiați pai până devin aurii și crocanți; gyros-ul autentic conține cartofi prăjiți în interior!\n\nTăiați ceapa roșie solzișori subțiri și roșiile felii. Pregătiți sosul Tzatziki rece.",
      
      "Încălzirea lipiei. Ungeți o tigaie curată cu foarte puțin ulei. Încălziți fiecare pită grecească timp de 30-60 secunde pe fiecare parte, până devine flexibilă și caldă.\n\nNu o lăsați prea mult, altfel se va întări și se va rupe la rulare.",
      
      "Asamblarea. Luați o pită caldă în mână (pe o bucată de hârtie de copt). Întindeți o lingură generoasă de Tzatziki pe toată suprafața.\n\nAdăugați un strat de carne în mijloc, apoi câțiva cartofi prăjiți, felii de roșii și ceapă. Presărați puțină boia dulce sau pătrunjel.",
      
      "Rularea. Strângeți pita în formă de cornet (con), suprapunând marginile de jos. Răsuciți hârtia strâns în jurul bazei pentru a ține totul la un loc.\n\nGyros se mănâncă din mână, mușcând din toate straturile deodată. Este combinația supremă de carne caldă, sos rece, legume proaspete și cartofi crocanți."
    ],
    nutrition: { calories: 700, protein: 35, carbs: 65, fat: 30, sodium: 1100 }
  },

  "Spanakopita": {
    title: "Spanakopita (Plăcintă cu Spanac și Feta)",
    servings: 6,
    servingSize: "1 pătrat (200g)",
    pricePerServing: 12,
    prepTime: "30 min",
    cookTime: "45 min",
    ingredients: [
      { name: "Spanac proaspăt", amount: "500 g" },
      { name: "Brânză Feta", amount: "300 g" },
      { name: "Foi de plăcintă (Phyllo)", amount: "1 pachet" },
      { name: "Ceapă verde", amount: "1 legătură" },
      { name: "Mărar & Pătrunjel", amount: "câte 1/2 legătură" },
      { name: "Ouă", amount: "3 buc" },
      { name: "Ulei de măsline/Unt", amount: "150 ml" }
    ],
    steps: [
      "Pregătirea spanacului. Spălați spanacul și tocați-l grosier. Puneți-l într-un tigaie mare cu puțină apă și gătiți-l 2-3 minute până se înmoaie (se ofilește).\n\nScoateți spanacul într-o sită și lăsați-l să se răcească. Pasul critic: stoarceți spanacul în pumni cu toată forța pentru a elimina aproape tot lichidul. Dacă spanacul e apos, foile de plăcintă se vor înmuia.",
      
      "Umplutura. Într-un bol mare, amestecați spanacul stors cu ceapa verde tocată mărunt, mărarul și pătrunjelul. Sfărâmați brânza Feta deasupra.\n\nBateți ouăle separat și adăugați-le în compoziție. Asezonați cu piper negru și puțină nucșoară. De obicei nu e nevoie de sare, deoarece Feta este foarte sărată.",
      
      "Pregătirea foilor. Dezghețați foile de plăcintă. Topiți untul și amestecați-l cu uleiul de măsline. Ungeți o tavă dreptunghiulară cu grăsime.\n\nAșezați pe fundul tăvii jumătate din pachetul de foi, ungând fiecare foaie individual cu pensula cu amestecul de ulei și unt. Această stratificare creează textura crocantă.",
      
      "Adăugarea umpluturii. Întindeți compoziția de spanac și brânză într-un strat uniform peste foile de la bază. Nivelați cu o spatulă.",
      
      "Acoperirea. Așezați restul foilor deasupra umpluturii, ungând din nou fiecare foaie cu grăsime. Ultima foaie trebuie unsă generos pentru a se rumeni frumos.\n\nFolosind un cuțit foarte ascuțit, crestați plăcinta crudă în pătrate sau triunghiuri, tăind doar straturile de sus (nu până la fund). Acest lucru previne sfărâmarea foilor coapte la tăiere.",
      
      "Coacerea. Stropiți plăcinta cu puțină apă rece înainte de a o băga în cuptor (truc pentru extra crocanță). Coaceți la 180°C timp de 45-50 de minute, până când este aurie-arămie și se desprinde de pe margini.\n\nLăsați să se răcească 15 minute înainte de servire. Se poate mânca caldă sau la temperatura camerei."
    ],
    nutrition: { calories: 350, protein: 12, carbs: 30, fat: 20, micronutrients: ["Calcium 15%"] }
  },

  "Kleftiko": {
    title: "Kleftiko (Miel Haiducesc la Cuptor)",
    servings: 4,
    servingSize: "1 pachet (400g)",
    pricePerServing: 45,
    prepTime: "20 min",
    cookTime: "3 ore",
    ingredients: [
      { name: "Pulpă de miel (bucăți)", amount: "1 kg" },
      { name: "Cartofi", amount: "1 kg" },
      { name: "Ardei gras", amount: "2 buc" },
      { name: "Brânză tare (Kefalotyri)", amount: "100 g" },
      { name: "Usturoi", amount: "1 căpățână" },
      { name: "Lămâie", amount: "2 buc" },
      { name: "Oregano, Rozmarin", amount: "generos" },
      { name: "Hârtie de copt", amount: "4 coli mari" }
    ],
    steps: [
      "Istoria și marinarea. Kleftiko înseamnă 'furat' și se referă la haiducii care găteau carnea furată în gropi astupate ca să nu iasă fum. Astăzi, folosim hârtia de copt pentru a sigila aromele.\n\nTăiați carnea în 4 bucăți mari. Tăiați cartofii în sferturi mari și ardeii în fâșii. Într-un bol uriaș, amestecați carnea și legumele cu ulei de măsline, zeamă de lămâie, sare, piper, mult oregano uscat și căței de usturoi întregi.",
      
      "Pregătirea pachetelor. Luați 4 foi mari de hârtie de copt (dublate cu folie de aluminiu dedesubt pentru siguranță, dacă doriți). Împărțiți amestecul de carne și legume în centrul fiecărei foi.\n\nAdăugați în fiecare pachet o bucată de brânză tare (care își va păstra forma dar se va înmuia) și o felie de roșie.",
      
      "Sigilarea. Ridicați colțurile hârtiei și strângeți-le deasupra cărnii, legând pachetul cu sfoară de bucătărie. Pachetul trebuie să fie ermetic pentru ca totul să se gătească în aburul propriu și în sucurile lăsate de carne.\n\nAșezați pachetele într-o tavă de cuptor.",
      
      "Coacerea lentă. Introduceți tava în cuptorul preîncălzit la 160°C - 170°C. Uitați de ea timp de cel puțin 2.5 până la 3 ore.\n\nAceastă gătire lentă la temperatură joasă va topi colagenul din carnea de miel, făcând-o să cadă singură de pe os (fall-off-the-bone).",
      
      "Rumeneala finală (opțional). Cu 15 minute înainte de final, puteți deschide pachetele la vârf și mări temperatura la 200°C pentru a rumeni puțin carnea și cartofii deasupra, dar metoda tradițională păstrează totul înăbușit și moale.",
      
      "Servirea. Kleftiko se servește spectaculos: fiecare invitat primește propriul pachet nedesfăcut pe farfurie. Când desfac sfoara, aburul aromat care iese este o experiență în sine.\n\nCarnea va fi incredibil de fragedă, iar cartofii vor fi absorbit tot gustul de miel și lămâie."
    ],
    nutrition: { calories: 650, protein: 45, carbs: 35, fat: 35, micronutrients: ["Iron 20%"] }
  },

  "Dolmades": {
    title: "Dolmades (Sărmăluțe în Foi de Viță)",
    servings: 6,
    servingSize: "6 dolmades (200g)",
    pricePerServing: 14,
    prepTime: "40 min",
    cookTime: "45 min",
    ingredients: [
      { name: "Foi de viță (conservă/proaspete)", amount: "40-50 buc" },
      { name: "Orez cu bob rotund", amount: "250 g" },
      { name: "Ceapă verde", amount: "2 legături" },
      { name: "Mărar & Mentă proaspătă", amount: "câte 1 legătură" },
      { name: "Ulei de măsline", amount: "150 ml" },
      { name: "Lămâie", amount: "3 buc" },
      { name: "Apă", amount: "500 ml" }
    ],
    steps: [
      "Pregătirea foilor. Dacă folosiți foi proaspete, opăriți-le 2-3 minute în apă clocotită până își schimbă culoarea, apoi răciți-le. Dacă sunt din saramură, spălați-le foarte bine cu apă rece pentru a elimina excesul de sare și separați-le cu grijă.\n\nTăiați codițele foilor.",
      
      "Umplutura (vegetariană). Dolmades servite reci ca aperitiv sunt de obicei fără carne (yalanci). Căliți ceapa verde tocată fin în jumătate din ulei de măsline până se înmoaie. Adăugați orezul spălat și căliți-l 2 minute până devine translucid.\n\nAdăugați o cană de apă și lăsați să fiarbă până orezul absoarbe lichidul, dar este încă pe jumătate crud (al dente). Luați de pe foc și adăugați tone de verdeață tocată (mărar, mentă, pătrunjel), sare și piper.",
      
      "Rularea. Așezați o foaie de viță pe o farfurie cu nervurile în sus și partea lucioasă în jos. Puneți o linguriță de umplutură la baza foii (lângă codiță).\n\nÎmpăturiți părțile laterale peste umplutură, apoi rulați strâns de jos în sus, formând un cilindru subțire și ferm (ca un trabuc).",
      
      "Aranjarea în oală. Acoperiți fundul unei oale cu foi de viță rupte sau codițe (pentru a preveni lipirea). Așezați dolmades în cercuri concentrice, foarte strâns una lângă alta, pe mai multe straturi dacă e nevoie.\n\nStructura compactă le împiedică să se desfacă la fiert.",
      
      "Fierberea. Turnați restul de ulei de măsline și zeama de la 2 lămâi peste sarmale. Adăugați apă caldă cât să le acopere.\n\nPuneți o farfurie întoarsă deasupra sarmalelor (în interiorul oalei) pentru a le ține presate sub lichid. Puneți capacul oalei și fierbeți la foc mic timp de 40-50 de minute, până când orezul este complet gătit și lichidul absorbit.",
      
      "Servirea. Dolmades sunt mult mai bune după ce s-au răcit în oală. Se servesc la temperatura camerei sau reci de la frigider, stropite cu și mai multă zeamă de lămâie și ulei de măsline, alături de iaurt grecesc."
    ],
    nutrition: { calories: 250, protein: 4, carbs: 30, fat: 12, fiber: 4 }
  },

  "Greek Salad": {
    title: "Horiatiki (Salata Țărănească Grecească)",
    servings: 2,
    servingSize: "1 bol mare (400g)",
    pricePerServing: 15,
    prepTime: "10 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Roșii de grădină", amount: "3 mari" },
      { name: "Castraveți", amount: "1 mare" },
      { name: "Ceapă roșie", amount: "1 mică" },
      { name: "Măsline Kalamata", amount: "mână generoasă" },
      { name: "Brânză Feta (bloc)", amount: "200 g" },
      { name: "Oregano uscat", amount: "1 lingură" },
      { name: "Ulei de măsline extravirgin", amount: "generos" }
    ],
    steps: [
      "Tăierea rustică. Horiatiki este o salată rustică, deci tăieturile nu trebuie să fie fine. Spălați roșiile (nu le țineți la frigider!) și tăiați-le în felii (wedges) neregulate, direct în bol, pentru a păstra tot sucul.\n\nCurățați castravetele parțial (lăsând fâșii de coajă pentru culoare și textură) și tăiați-l în rondele groase sau jumătăți de rondele.",
      
      "Ceapa și ardeiul. Tăiați ceapa roșie în inele subțiri sau solzișori. Dacă ceapa e prea iute, o puteți înmuia în apă rece cu oțet 5 minute. Tăiați ardeiul gras verde (specific rețetei originale) în inele.\n\nAdăugați totul în bol peste roșii și castraveți.",
      
      "Măslinele. Adăugați măslinele Kalamata întregi, cu sâmburi. Măslinele negre fără sâmburi sau cele verzi nu sunt tradiționale în Horiatiki.\n\nNu amestecați încă salata.",
      
      "Feta. Aici este diferența majoră față de alte salate. În Grecia, brânza Feta nu se taie cubulețe, ci se așază ca o felie mare, întreagă (bloc), deasupra legumelor.\n\nAceasta este piesa de rezistență a farfuriei.",
      
      "Asezonarea. Presărați oregano uscat din belșug peste tot, dar mai ales peste bucata de Feta. Adăugați sare doar pe roșii (brânza și măslinele sunt sărate).\n\nTurnați ulei de măsline extravirgin de cea mai bună calitate peste tot, lăsându-l să curgă peste brânză și să se amestece cu sucul roșiilor la baza bolului.",
      
      "Servirea. Se servește imediat, cu pâine proaspătă de țară. Cea mai bună parte este 'papara' - înmuierea pâinii în zeama formată din ulei, suc de roșii și oregano de pe fundul bolului."
    ],
    nutrition: { calories: 450, protein: 15, carbs: 12, fat: 35, sodium: 900 }
  },

  "Fasolada": {
    title: "Fasolada (Supa Națională Grecească)",
    servings: 6,
    servingSize: "1 bol (350ml)",
    pricePerServing: 10,
    prepTime: "20 min",
    cookTime: "1.5 ore",
    ingredients: [
      { name: "Fasole albă uscată", amount: "500 g" },
      { name: "Morcovi", amount: "3 buc" },
      { name: "Țelină (Apio)", amount: "3-4 tije" },
      { name: "Ceapă", amount: "1 mare" },
      { name: "Ulei de măsline", amount: "150 ml" },
      { name: "Pastă de tomate", amount: "2 linguri" },
      { name: "Foi de dafin", amount: "2 buc" }
    ],
    steps: [
      "Înmuierea și prima fierbere. Lăsați fasolea la înmuiat peste noapte. A doua zi, scurgeți-o, puneți-o într-o oală cu apă rece și fierbeți-o 5-10 minute. Aruncați această primă apă neagră și clătiți boabele. Acest pas face fasolea mai ușoară pentru stomac.",
      
      "Pregătirea bazei. Tăiați morcovii în rondele, tijele de țelină în felii și tocați ceapa mărunt. Fasolada este despre legume simple, dar gustoase.\n\nPuneți fasolea scursă înapoi în oală cu apă proaspătă fierbinte (cât să o acopere cu 3-4 degete). Adăugați morcovii, țelina și ceapa.",
      
      "Fierberea principală. Adăugați foile de dafin și jumătate din ulei de măsline. Acoperiți și lăsați să fiarbă la foc mediu timp de 45-60 de minute, sau până când fasolea este moale și untoasă, dar nu sfărâmată.",
      
      "Îngroșarea (Hilopites). Când fasolea este fiartă, dizolvați pasta de tomate în puțină zeamă și adăugați-o în oală. Acum vine secretul: Fasolada nu trebuie să fie o supă clară, ci una cremoasă și emulsionată ('hilomeni').\n\nFierbeți descoperit încă 15-20 de minute pentru a scădea lichidul.",
      
      "Finisarea cu ulei. Opriți focul. Adăugați restul de ulei de măsline crud în supă. Amestecați energic. Acest ulei crud va da gustul și textura finală catifelată.\n\nAsezonați cu sare și piper proaspăt măcinat.",
      
      "Servirea. Fasolada se servește caldă, acompaniată obligatoriu de brânză Feta (pusă pe masă separat sau sfărâmată în farfurie), măsline Kalamata și pâine crocantă. Unii adaugă și pește afumat (hering) alături."
    ],
    nutrition: { calories: 350, protein: 15, carbs: 45, fat: 15, fiber: 12 }
  },

  "Baklava grecească": {
    title: "Baklava cu Nucă și Miere",
    servings: 12,
    servingSize: "1 romb (100g)",
    pricePerServing: 10,
    prepTime: "40 min",
    cookTime: "50 min",
    ingredients: [
      { name: "Foi de plăcintă subțiri", amount: "1 pachet (500g)" },
      { name: "Nucă măcinată grosier", amount: "400 g" },
      { name: "Unt topit (clarifiat)", amount: "250 g" },
      { name: "Scorțișoară", amount: "1 lingură" },
      { name: "Cuișoare măcinate", amount: "un praf" },
      { name: "Zahăr (pt sirop)", amount: "300 g" },
      { name: "Miere (pt sirop)", amount: "150 g" },
      { name: "Lămâie (pt sirop)", amount: "coajă și zeamă" }
    ],
    steps: [
      "Siropul se face primul. Regula de aur la baklava: sirop rece peste prăjitură fierbinte (sau invers), dar niciodată ambele calde. Puneți apa, zahărul, mierea, coaja de lămâie și un băț de scorțișoară la fiert. Lăsați să fiarbă 10 minute până se leagă ușor. Lăsați-l să se răcească complet.",
      
      "Pregătirea umpluturii. Amestecați nuca măcinată (nu pudră, să aibă bucățele crocante) cu scorțișoara, cuișoarele și pesmetul (opțional, absoarbe untul). Topiți untul și înlăturați spuma albă de deasupra (clarifiere) pentru a nu arde foile.",
      
      "Montarea bazei. Ungeți o tavă dreptunghiulară cu unt. Așezați jumătate din foile de plăcintă pe fundul tăvii, ungând absolut fiecare foaie cu unt topit folosind o pensulă. Această bază solidă va susține greutatea nucii.",
      
      "Stratul de nucă. Presărați amestecul de nucă uniform peste foile unse. Acoperiți cu restul foilor de plăcintă, ungându-le din nou pe fiecare în parte. Presați ușor cu palmele pentru a elimina aerul.",
      
      "Tăierea crudă. Înainte de a o băga la cuptor, tăiați baklavaua în romburi, pătrate sau triunghiuri cu un cuțit foarte ascuțit. Tăiați până la fund. Dacă o coaceți netăiată, foile se vor sparge când încercați să o porționați ulterior.\n\nStropiți suprafața cu puțină apă rece pentru a preveni ondularea foilor de sus.",
      
      "Coacerea și însiroparea. Coaceți la 160°C timp de aproximativ 50-60 de minute, sau până când baklavaua este aurie-arămie și foile s-au desprins.\n\nScoateți tava din cuptor și imediat turnați siropul rece uniform peste toată suprafața. Veți auzi un sfârâit puternic – acesta este sunetul succesului. Lăsați să absoarbă siropul minim 4-6 ore înainte de servire."
    ],
    nutrition: { calories: 450, protein: 6, carbs: 50, fat: 25, sugar: 30 }
  },

  "Pastitsio": {
    title: "Pastitsio (Lasagna Grecească)",
    servings: 8,
    servingSize: "1 pătrat mare (400g)",
    pricePerServing: 22,
    prepTime: "40 min",
    cookTime: "50 min",
    ingredients: [
      { name: "Paste tubulare groase (nr 2)", amount: "500 g" },
      { name: "Carne tocată vită", amount: "600 g" },
      { name: "Sos de roșii", amount: "400 g" },
      { name: "Lapte", amount: "1 L" },
      { name: "Făină & Unt", amount: "câte 100 g" },
      { name: "Ouă", amount: "2 buc" },
      { name: "Brânză (Kefalotyri/Parmesan)", amount: "150 g" },
      { name: "Scorțișoară", amount: "1 băț" }
    ],
    steps: [
      "Sosul de carne aromat. Căliți ceapa și carnea tocată. Adăugați vinul roșu, roșiile, sarea, piperul și, foarte important, scorțișoara și cuișoarele. Fierbeți până scade tot lichidul și sosul este dens. Spre deosebire de Bolognese, sosul de Pastitsio este mai dulceag și mai aromat.",
      
      "Pastele. Fierbeți pastele tubulare lungi (speciale pentru Pastitsio sau Bucatini/Penne) în apă sărată, dar doar pe jumătate (al dente). Scurgeți-le și amestecați-le cu puțin unt topit, albușurile de ou bătute ușor și o mână de brânză rasă.\n\nAlbușul va acționa ca un liant, făcând pastele să stea compacte când tăiați felia.",
      
      "Bechamel-ul gros (Mornay). Faceți un bechamel clasic din unt, făină și lapte. Acesta trebuie să fie mai gros decât la lasagna. Când s-a răcorit puțin, încorporați gălbenușurile de ou și restul de brânză rasă. Oul îi dă culoare și structură pufoasă.",
      
      "Asamblarea. Într-un tavă unsă, așezați un strat gros de paste, aliniindu-le pe cât posibil în aceeași direcție. Presați ușor.\n\nTurnați tot sosul de carne deasupra și nivelați-l ca să pătrundă printre paste.",
      
      "Toping-ul. Turnați stratul generos de bechamel deasupra cărnii. Trebuie să fie un strat gros, de cel puțin 2 cm. Presărați încă puțină brânză rasă sau pesmet pentru crustă.",
      
      "Coacerea. Coaceți la 180°C timp de 45-50 de minute până când bechamel-ul se umflă și devine maro-auriu pătat.\n\nLăsați Pastitsio să se răcească cel puțin 30 de minute înainte de a tăia pătrate. Este un fel de mâncare consistent, servit de obicei cu o salată verde simplă."
    ],
    nutrition: { calories: 650, protein: 30, carbs: 55, fat: 30, micronutrients: ["Calcium 25%"] }
  },

  "Loukoumades": {
    title: "Loukoumades (Gogoși Grecești cu Miere)",
    servings: 6,
    servingSize: "6 gogoși (150g)",
    pricePerServing: 8,
    prepTime: "1 oră",
    cookTime: "15 min",
    ingredients: [
      { name: "Făină", amount: "250 g" },
      { name: "Apă călduță", amount: "200 ml" },
      { name: "Drojdie uscată", amount: "7 g" },
      { name: "Miere", amount: "150 g" },
      { name: "Scorțișoară", amount: "1 lingură" },
      { name: "Nuci măcinate", amount: "50 g" },
      { name: "Ulei", amount: "pentru prăjit" }
    ],
    steps: [
      "Pregătirea aluatului. Într-un bol, dizolvați drojdia în apa călduță cu puțin zahăr. Adăugați făina și un praf de sare. Amestecați cu o lingură sau cu mixerul timp de câteva minute până obțineți un aluat moale, curgător și lipicios (ca o smântână foarte groasă, nu ca un aluat de pâine).\n\nAcoperiți și lăsați la dospit la loc cald timp de 1 oră, până își triplează volumul și este plin de bule.",
      
      "Tehnica de prăjire. Încingeți o baie de ulei într-o cratiță adâncă. Pregătiți un pahar cu apă rece și o linguriță.\n\nUmeziți-vă mâna stângă. Luați un pumn de aluat și strângeți pumnul, forțând o bilă de aluat să iasă printre degetul mare și arătător. Cu mâna dreaptă (umezind lingurița), 'tăiați' bila și dați-i drumul în uleiul încins.\n\nAceastă tehnică tradițională asigură forme perfect rotunde.",
      
      "Gătirea. Prăjiți bilele de aluat în tranșe, întorcându-le mereu cu o spumieră, până devin aurii-închis și crocante pe toate părțile. Ele se vor umfla considerabil.\n\nScoateți-le pe hârtie absorbantă pentru scurt timp.",
      
      "Siropul sau Mierea. Tradițional, puteți face un sirop de zahăr și miere în care să scufundați gogoșile fierbinți, dar varianta rapidă și delicioasă este să le așezați pe platou și să turnați miere naturală (încălzită puțin să fie fluidă) direct peste ele.",
      
      "Garnisirea. Presărați imediat scorțișoară măcinată din belșug și nuci măcinate sau susan prăjit. Căldura gogoșilor va elibera aroma scorțișoarei.",
      
      "Servirea. Loukoumades se mănâncă obligatoriu fierbinți, în ziua în care au fost făcute. Sunt crocante la exterior, aerate și pline de sirop la interior. Un desert divin al zeilor."
    ],
    nutrition: { calories: 350, protein: 5, carbs: 60, fat: 10, sugar: 30 }
  },

  // --- NEW ADDITIONS TO MATCH CONSTANTS ---
  "Spetsofai": {
    title: "Spetsofai (Cârnați cu Ardei și Vin)",
    servings: 4,
    servingSize: "1 porție (300g)",
    pricePerServing: 18,
    prepTime: "15 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Cârnați țărănești (picant)", amount: "500 g" },
      { name: "Ardei grași (mix culori)", amount: "3 buc" },
      { name: "Ceapă roșie", amount: "1 buc" },
      { name: "Usturoi", amount: "2 căței" },
      { name: "Vin roșu sec", amount: "100 ml" },
      { name: "Roșii pasate/cuburi", amount: "400 g" },
      { name: "Ardei iute (opțional)", amount: "1 buc" },
      { name: "Ulei de măsline", amount: "3 linguri" }
    ],
    steps: [
      "Pregătirea cârnaților. Alegeți cârnați de porc, de preferat ușor picanți și cu textură fermă. Tăiați-i în rondele groase de 1-2 cm. Într-o tigaie adâncă, prăjiți cârnații în puțin ulei până se rumenesc bine pe ambele părți. Scoateți-i pe o farfurie, lăsând grăsimea aromată în tigaie.",
      "Călirea legumelor. Tăiați ardeii grași în bucăți mari (pătrate sau fâșii late) și ceapa solzișori. Adăugați-le în tigaia cu grăsimea de la cârnați. Căliți la foc mediu timp de 5-8 minute, până când ardeii se înmoaie ușor și încep să se rumenească pe margini. Adăugați usturoiul feliat și ardeiul iute tocat.",
      "Deglasarea. Turnați vinul roșu peste legumele sfârâinde. Lăsați-l să fiarbă 2 minute pentru a se evapora alcoolul și a dezlipi aromele de pe fundul tigăii. Vinul va da o profunzime de gust și o culoare închisă sosului.",
      "Formarea sosului. Adăugați roșiile pasate (sau roșii proaspete foarte coapte, tocate). Puneți cârnații înapoi în tigaie. Asezonați cu sare, piper, puțin zahăr (pentru aciditatea roșiilor) și oregano uscat. Dacă sosul e prea gros, adăugați puțină apă.",
      "Fierberea scăzută (Simmer). Reduceți focul la minim, puneți capacul și lăsați să fiarbă încet timp de 15-20 de minute. Ardeii trebuie să devină moi și dulci, iar sosul să se îngroașe și să îmbrace cârnații ('glaze').",
      "Servirea. Spetsofai este un fel de mâncare rustic, robust. Se servește fierbinte, presărat cu puțin pătrunjel, neapărat cu multă pâine proaspătă de casă pentru a înmuia în sosul picant și aromat. Merge perfect cu brânză Feta alături."
    ],
    nutrition: { calories: 550, protein: 25, carbs: 15, fat: 40, sodium: 1100 }
  },

  "Tyropita": {
    title: "Tyropita (Plăcintă Grecească cu Brânză)",
    servings: 6,
    servingSize: "1 bucată (150g)",
    pricePerServing: 10,
    prepTime: "20 min",
    cookTime: "40 min",
    ingredients: [
      { name: "Brânză Feta", amount: "400 g" },
      { name: "Iaurt grecesc/Smântână", amount: "150 g" },
      { name: "Ouă", amount: "3 buc" },
      { name: "Foi de plăcintă (Phyllo)", amount: "1 pachet" },
      { name: "Unt topit", amount: "100 g" },
      { name: "Ulei de măsline", amount: "50 ml" },
      { name: "Piper negru", amount: "1/2 linguriță" },
      { name: "Susan", amount: "pentru decor" }
    ],
    steps: [
      "Pregătirea umpluturii. Într-un bol mare, sfărâmați brânza Feta cu o furculiță. Nu o faceți pastă, lăsați și bucățele mai mari pentru textură. Adăugați iaurtul grecesc (sau o smântână groasă) pentru cremozitate.",
      "Legarea compoziției. Bateți ouăle separat cu mult piper negru proaspăt măcinat. Tyropita nu are nevoie de sare suplimentară, Feta fiind suficientă. Turnați ouăle peste brânză și amestecați. Dacă doriți, puteți adăuga puțină mentă uscată sau mărar.",
      "Pregătirea ungerii. Topiți untul și amestecați-l cu uleiul de măsline. Acest amestec va face foile de plăcintă crocante și aurii. Preîncălziți cuptorul la 180°C.",
      "Asamblarea (Stil evantai sau dreptunghi). Ungeți o tavă. Așezați jumătate din foile de plăcintă la bază, ungând fiecare foaie individual cu amestecul de grăsime. Lăsați marginile să atârne în afară. Turnați umplutura de brânză și nivelați.",
      "Închiderea. Aduceți marginile foilor de jos peste umplutură. Așezați restul foilor deasupra, ungând din nou între ele. Împingeți marginile foilor de sus sub plăcintă ('tucking in') pentru un aspect curat.",
      "Coacerea. Crestați suprafața plăcintei în pătrate cu un cuțit ascuțit (doar foile de sus). Ungeți cu restul de unt și presărați susan. Coaceți 40-50 de minute până devine aurie și crocantă. Lăsați să se răcească puțin înainte de servire."
    ],
    nutrition: { calories: 380, protein: 12, carbs: 25, fat: 28, micronutrients: ["Calcium 25%"] }
  },

  "Saganaki": {
      title: "Saganaki (Brânză Prăjită)",
      servings: 4,
      servingSize: "1 felie (100g)",
      pricePerServing: 12,
      prepTime: "5 min",
      cookTime: "5 min",
      ingredients: [
        { name: "Brânză tare (Kefalotyri/Graviera)", amount: "2 felii groase (200g)" },
        { name: "Făină", amount: "50 g" },
        { name: "Ulei pentru prăjit", amount: "100 ml" },
        { name: "Lămâie", amount: "1 buc" },
        { name: "Apă rece", amount: "un bol" },
        { name: "Piper/Oregano", amount: "opțional" }
      ],
      steps: [
        "Alegerea brânzei. Secretul unui Saganaki reușit este tipul de brânză. Trebuie să fie o brânză de oaie tare și sărată, cum ar fi Kefalotyri, Graviera sau Kefalograviera. Tăiați brânza în felii groase de aproximativ 1.5 - 2 cm.",
        "Pregătirea crustei. Puneți apa rece într-un bol și făina pe o farfurie întinsă. Această tehnică dublă (apă-făină) ajută la formarea unei cruste crocante care nu se desprinde.",
        "Împachetarea. Scufundați felia de brânză în apa rece, apoi treceți-o imediat prin făină. Presați bine făina pe toate părțile brânzei, inclusiv pe margini. Scuturați excesul.",
        "Prăjirea (Foc mediu-iute). Încălziți uleiul într-o tigaie mică și grea (saganaki înseamnă tigaie mică). Uleiul trebuie să fie fierbinte, dar nu să fumege. Puneți brânza în ulei. Ar trebui să sfârâie imediat.",
        "Întoarcerea. Prăjiți timp de 2-3 minute pe prima parte până devine aurie-brună. Întoarceți cu grijă folosind o spatulă. Prăjiți încă 2 minute pe cealaltă parte. Brânza trebuie să se înmoaie în interior fără să se topească complet și să curgă.",
        "Servirea (Opa!). Scoateți brânza pe o farfurie caldă. Stoarceți imediat zeamă de lămâie proaspătă peste brânza fierbinte. Aceasta va sfârâi. Serviți imediat cu pâine proaspătă, cât timp brânza este încă moale și elastică."
      ],
      nutrition: { calories: 300, protein: 18, carbs: 10, fat: 22, micronutrients: ["Calcium 40%"] }
  }
};
