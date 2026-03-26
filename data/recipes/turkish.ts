
import { Recipe } from '../../types';

export const TURKISH_RECIPES: Record<string, Recipe> = {
  // ... existing turkish recipes ...
  "Kebab": {
    title: "Adana Kebab (Picant)",
    servings: 4,
    servingSize: "2 frigărui + lipie",
    pricePerServing: 20,
    prepTime: "30 min (+1h rece)",
    cookTime: "15 min",
    ingredients: [
      {name: "Carne tocată oaie/vită", amount: "600 g"},
      {name: "Grăsime de coadă (opțional)", amount: "100 g"},
      {name: "Ardei capia roșu", amount: "2 buc"},
      {name: "Boia iute (Pul Biber)", amount: "1 lingură"},
      {name: "Usturoi", amount: "3 căței"},
      {name: "Sare", amount: "1 linguriță"},
      {name: "Lipii (Lavaș)", amount: "4 buc"}
    ],
    steps: [
      "Pregătirea ardeiului este secretul texturii. Spălați ardeii capia roșii, curățați-i de semințe și tocați-i extrem de mărunt cu cuțitul (nu la blender, pentru a nu face pastă apoasă). După tocare, puneți ardeiul într-o sită sau într-un tifon și stoarceți-l bine pentru a elimina excesul de zeamă.\n\nDacă lăsați zeama în ardei, carnea va fi prea umedă și va cădea de pe țepușă în timpul gătirii. Ardeiul trebuie să fie aproape uscat.",
      
      "Amestecul de carne. Într-un bol larg, combinați carnea tocată (care trebuie să aibă un conținut de grăsime de 20-30%) cu ardeiul stors, usturoiul pisat și condimentele. Adăugați sarea și fulgii de ardei iute (Pul Biber).\n\nFrământați amestecul cu mâna energic, timp de cel puțin 10-15 minute. Frământarea activează proteinele din carne și transformă amestecul dintr-o carne tocată sfărâmicioasă într-o pastă lipicioasă și omogenă.",
      
      "Răcirea și odihna. Acoperiți bolul cu folie alimentară și lăsați-l la frigider pentru cel puțin o oră. Grăsimea trebuie să se întărească din nou, ceea ce va ajuta enorm la modelarea pe țepușă.\n\nDacă încercați să modelați kebabul cu carnea la temperatura camerei, grăsimea se va topi în mâini și kebabul se va rupe.",
      
      "Modelarea pe țepușă. Folosiți țepușe metalice late și plate (specifice pentru Adana). Umeziți-vă mâna cu apă rece. Luați o bilă de carne (cca 150g) și înfigeți țepușa prin mijloc.\n\nPrin mișcări repetate de strângere cu degetul mare și arătătorul, întindeți carnea pe lungimea țepușei, formând acele 'valuri' sau 'creste' caracteristice. Carnea trebuie să fie plată, nu cilindrică, pentru a se găti uniform.",
      
      "Gătirea. Încingeți grătarul cu cărbuni (ideal) sau o tigaie grill. Așezați țepușele pe grătar. Întoarceți-le frecvent (la fiecare minut) la început, pentru a 'sigila' carnea pe țepușă.\n\nGrăsimea va începe să picure și să fumege, dând acea aromă inconfundabilă de grătar turcesc. Gătiți timp de 10-12 minute până când sunt bine rumenite.",
      
      "Servirea. Încălziți lipiile (lavaș) direct pe carnea care se frige pentru a absorbi puțină grăsime aromată. Scoateți kebabul de pe țepușă folosind lipia ca protecție termică.\n\nSe servește obligatoriu cu ceapă roșie frecată cu sumac, roșii coapte pe grătar și ardei iute copt."
    ],
    nutrition: {calories: 450, protein: 30, carbs: 5, fat: 30, sodium: 900}
  },

  "Lahmacun": {
    title: "Lahmacun (Pizza Turcească Subțire)",
    servings: 4,
    servingSize: "2 bucăți (200g)",
    pricePerServing: 15,
    prepTime: "45 min",
    cookTime: "10 min",
    ingredients: [
      {name: "Făină", amount: "300 g"},
      {name: "Apă", amount: "180 ml"},
      {name: "Carne tocată vită/miel", amount: "250 g"},
      {name: "Ardei roșu & verde", amount: "câte 1"},
      {name: "Roșie", amount: "1 mare"},
      {name: "Ceapă", amount: "1 medie"},
      {name: "Pastă de ardei (Biber Salçası)", amount: "1 lingură"},
      {name: "Pătrunjel", amount: "1 legătură"}
    ],
    steps: [
      "Aluatul simplu. Lahmacun are un blat foarte subțire, nedospit sau foarte puțin dospit. Amestecați făina cu apa, un praf de sare și foarte puțină drojdie (opțional). Frământați până obțineți un aluat elastic și neted.\n\nÎmpărțiți aluatul în 4-6 bile egale, acoperiți-le cu un prosop umed și lăsați-le să se odihnească 30 de minute pentru a relaxa glutenul.",
      
      "Pregătirea topping-ului (partea umedă). Puneți în robotul de bucătărie ceapa, ardeii, roșia curățată de coajă, usturoiul și pătrunjelul. Mixați până devin o pastă fină, aproape lichidă.\n\nNu scurgeți zeama! Spre deosebire de alte rețete, la Lahmacun avem nevoie de umiditate pentru a găti carnea rapid în strat subțire.",
      
      "Amestecarea cărnii. Într-un bol, combinați pasta de legume cu carnea tocată. Adăugați pasta de ardei (biber salçası), boia, sare, piper și puțin ulei de măsline.\n\nAmestecați bine cu mâna. Consistența trebuie să fie foarte moale, ca un sos gros de carne, ușor de întins cu lingura.",
      
      "Întinderea foilor. Luați o bilă de aluat și întindeți-o pe blatul înfăinat cu un sucitor. Foaia trebuie să fie extrem de subțire, aproape transparentă (1-2 mm grosime), de formă rotundă sau ovală.\n\nAșezați foaia pe o paletă de lemn sau direct pe hârtie de copt.",
      
      "Aplicarea topping-ului. Puneți 2-3 linguri de amestec de carne pe foaie. Folosind dosul lingurii sau degetele, întindeți carnea până la margini, presând-o în aluat.\n\nStratul de carne trebuie să fie foarte subțire, doar cât să 'murdărească' aluatul. Nu puneți strat gros ca la chiftele, pentru că nu se va găti în timpul scurt de coacere.",
      
      "Coacerea. Lahmacun se coace la temperatură foarte înaltă (250°C+). Dacă aveți piatră de pizza, e perfect. Coaceți timp de 5-7 minute până când marginile sunt crocante și carnea sfârâie.\n\nImediat ce le scoateți, stivuiți-le una peste alta (față în față) sub un prosop pentru a rămâne moi. Se servesc rulate, cu mult pătrunjel proaspăt în mijloc și zeamă de lămâie."
    ],
    nutrition: {calories: 350, protein: 15, carbs: 45, fat: 12, fiber: 4}
  },

  "Baklava turcească": {
    title: "Baklava cu Fistic (Gaziantep)",
    servings: 12,
    servingSize: "2 bucăți (50g)",
    pricePerServing: 12,
    prepTime: "40 min",
    cookTime: "40 min",
    ingredients: [
      {name: "Foi fine de plăcintă", amount: "1 pachet (500g)"},
      {name: "Fistic verde măcinat", amount: "300 g"},
      {name: "Unt clarifiat (Ghee)", amount: "250 g"},
      {name: "Zahăr", amount: "500 g"},
      {name: "Apă", amount: "300 ml"},
      {name: "Lămâie", amount: "1 felie"},
      {name: "Sare", amount: "un praf"}
    ],
    steps: [
      "Clarifierea untului. Topiți untul la foc mic. Înlăturați cu grijă spuma albă de deasupra și sedimentele de pe fundul (zerul). Păstrați doar grăsimea pură, aurie.\n\nAcest pas este obligatoriu pentru ca baklavaua să fie crocantă și să nu aibă puncte negre arse. Dacă folosiți unt normal, apa din el va înmuia foile.",
      
      "Pregătirea tăvii. Ungeți o tavă dreptunghiulară cu untul clarifiat. Începeți să așezați foile de plăcintă una câte una. Ungeți fiecare foaie (sau la fiecare 2 foi) cu puțin unt folosind o pensulă.\n\nAșezați jumătate din pachetul de foi la bază (cca 15-20 de foi). Aceasta va fi fundația solidă.",
      
      "Stratul de fistic. Presărați fisticul măcinat într-un strat uniform și generos peste foile unse. Fisticul de Antep este verde smarald și foarte aromat. Nu adăugați zahăr în fistic!\n\nAcoperiți fisticul cu restul foilor de plăcintă, continuând procesul de ungere între straturi. Ultima foaie de sus trebuie să fie perfectă și netedă.",
      
      "Tăierea crudă. Înainte de coacere, baklavaua trebuie tăiată. Folosiți un cuțit foarte ascuțit. Tăiați linii paralele pe lungime, apoi pe diagonală pentru a forma romburi clasice.\n\nAsigurați-vă că tăiați până la fundul tăvii. Turnați restul de unt clarifiat fierbinte peste toată tava, insistând pe tăieturi (veți auzi un sfârâit).",
      
      "Coacerea. Introduceți tava în cuptorul preîncălzit la 170°C. Coaceți timp de 40-50 de minute, sau până când baklavaua este bine rumenită, aurie, iar foile s-au despărțit și sunt crocante.\n\nÎntre timp, faceți siropul: fierbeți apa cu zahărul și felia de lămâie timp de 15-20 minute până se leagă ușor (testul firului).",
      
      "Șocul termic (Șerbetul). Regula turcească clasică: Siropul fierbinte se toarnă peste baklavaua scoasă direct din cuptor (sau sirop cald pe baklava răcită, depinde de stil, dar fierbinte pe fierbinte e stilul crocant).\n\nTurnați siropul treptat. Baklavaua va 'bea' siropul și va sfârâi puternic. Lăsați-o să se răcească și să absoarbă siropul minim 3-4 ore înainte de servire."
    ],
    nutrition: {calories: 400, protein: 6, carbs: 45, fat: 25, sugar: 30}
  },

  "Menemen": {
    title: "Menemen (Omletă Turcească cu Legume)",
    servings: 2,
    servingSize: "1 tigaie mică (300g)",
    pricePerServing: 12,
    prepTime: "10 min",
    cookTime: "15 min",
    ingredients: [
      {name: "Ouă", amount: "4 buc"},
      {name: "Roșii coapte", amount: "4 mari"},
      {name: "Ardei verzi turcești (Sivri)", amount: "3 buc"},
      {name: "Ceapă (opțional)", amount: "1 mică"},
      {name: "Ulei de măsline/Unt", amount: "3 linguri"},
      {name: "Oregano, Fulgi Chili", amount: "după gust"},
      {name: "Sare, Piper", amount: "după gust"}
    ],
    steps: [
      "Pregătirea legumelor. Curățați roșiile de coajă (esențial pentru o textură fină) și tăiați-le cubulețe. Tăiați ardeii verzi în inele subțiri. Dacă folosiți ceapă, tocați-o mărunt.\n\nMenemen-ul tradițional de mic dejun este adesea fără ceapă, dar cel de prânz poate avea.",
      
      "Călirea bazei. Încingeți uleiul de măsline (și puțin unt pentru aromă) într-o tigaie de cupru tradițională (sahan) sau o tigaie antiaderentă. Adăugați ceapa și ardeii.\n\nCăliți la foc mediu până când ardeii se înmoaie complet și ceapa devine dulce. Nu le ardeți, doar înmuiați-le bine.",
      
      "Sosul de roșii. Adăugați roșiile cuburi în tigaie. Asezonați cu sare și fulgi de ardei iute (Pul Biber). Lăsați să fiarbă la foc mic până când roșiile își lasă sucul și acesta scade, formând un sos gros, concentrat.\n\nLegumele trebuie să fie gătite, nu crude.",
      
      "Adăugarea ouălor. Bateți ouăle ușor într-un bol (nu spumă) sau spargeți-le direct în tigaie pentru un aspect rustic. Turnați ouăle peste sosul de roșii fierbinte.\n\nAcum vine partea importantă: amestecați delicat!",
      
      "Gătirea lentă. Nu faceți jumări uscate! Împingeți ouăle cu o lingură de lemn, amestecând sosul cu albușul și gălbenușul, dar lăsând și zone distincte. Gătiți la foc mic.\n\nOpriți focul când ouăle sunt încă moi, ușor lichide (baveuse). Căldura reziduală le va găti perfect până ajung la masă.",
      
      "Servirea. Presărați oregano uscat sau pătrunjel proaspăt deasupra. Menemen se servește direct din tigaia în care a fost gătit, așezată în mijlocul mesei.\n\nSe mănâncă obligatoriu cu pâine proaspătă (Ekmek), rupând bucăți și înmuiind direct în tigaie."
    ],
    nutrition: {calories: 300, protein: 15, carbs: 10, fat: 22, sodium: 500}
  },

  "Pide": {
    title: "Pide (Barcuțe cu Carne și Cașcaval)",
    servings: 4,
    servingSize: "1 pide întreagă (250g)",
    pricePerServing: 18,
    prepTime: "1 oră",
    cookTime: "20 min",
    ingredients: [
      {name: "Făină", amount: "500 g"},
      {name: "Drojdie uscată", amount: "7 g"},
      {name: "Apă călduță", amount: "300 ml"},
      {name: "Carne tocată vită", amount: "300 g"},
      {name: "Ardei, Ceapă, Roșii", amount: "tocat fin"},
      {name: "Cașcaval (Kașar)", amount: "200 g"},
      {name: "Unt", amount: "50 g"},
      {name: "Ou", amount: "1 (pentru uns)"}
    ],
    steps: [
      "Aluatul dospit. Într-un bol, amestecați făina, drojdia, sarea și apa călduță. Frământați timp de 10 minute până obțineți un aluat moale și neted.\n\nUngeți-l cu ulei, acoperiți-l și lăsați-l la dospit 45-60 de minute într-un loc cald, până își dublează volumul.",
      
      "Umplutura (Kiyma). Cât timp crește aluatul, pregătiți carnea. Căliți carnea tocată cu ceapa tocată mărunt, ardeiul și roșia. Asezonați cu sare, piper, chimen și pastă de ardei.\n\nLăsați amestecul să se răcească. Pentru varianta cu brânză, pur și simplu radeți cașcavalul (Kașar sau Mozzarella).",
      
      "Formarea. Împărțiți aluatul în 4 bile. Întindeți fiecare bilă într-o formă ovală lungă, subțire (cca 30-40 cm lungime). Așezați foile pe tava de copt tapetată cu hârtie.",
      
      "Umplerea și plierea. Întindeți umplutura de carne (sau brânză) pe lungimea aluatului, lăsând o margine liberă de 2 cm de jur împrejur.\n\nPliați marginile libere peste umplutură, apăsând ușor. La capete, uniți marginile și răsuciți-le pentru a forma vârful ascuțit al 'bărcii'.",
      
      "Coacerea. Ungeți marginile de aluat cu ou bătut pentru luciu. Dacă doriți, puteți sparge un ou întreg în mijlocul pidei cu câteva minute înainte de final.\n\nCoaceți la 220°C timp de 15-20 de minute, până când aluatul este auriu-brun.",
      
      "Finalizarea cu unt. Imediat ce scoateți Pide din cuptor, ungeți marginile crocante cu unt solid. Acesta se va topi și va înmuia coaja, dându-i un gust delicios.\n\nTăiați Pide în fâșii transversale de 3-4 cm lățime și serviți fierbinte."
    ],
    nutrition: {calories: 500, protein: 20, carbs: 60, fat: 20, sodium: 900}
  },

  "Dolma": {
    title: "Dolma (Ardei și Dovlecei Umpluți)",
    servings: 6,
    servingSize: "2 bucăți (200g)",
    pricePerServing: 14,
    prepTime: "40 min",
    cookTime: "50 min",
    ingredients: [
      {name: "Ardei grași (verzi/colorați)", amount: "6 buc"},
      {name: "Dovlecei", amount: "2 buc"},
      {name: "Carne tocată vită/miel", amount: "400 g"},
      {name: "Orez", amount: "150 g"},
      {name: "Ceapă", amount: "2 mari"},
      {name: "Pastă tomate & ardei", amount: "2 linguri"},
      {name: "Mentă uscată", amount: "1 lingură"},
      {name: "Sos (Apă, Ulei, Pastă tomate)", amount: "500 ml"}
    ],
    steps: [
      "Pregătirea legumelor. Spălați ardeii. Tăiați capacul (partea cu codița) și păstrați-l. Scoateți semințele și nervurile din interior.\n\nTăiați dovleceii în jumătate și scobiți miezul cu o linguriță, lăsând un perete de 0.5 cm. Puteți folosi miezul tocat în umplutură sau la altă mâncare.",
      
      "Umplutura aromată. Într-un bol, amestecați carnea tocată crudă cu orezul spălat, ceapa tocată fin (sau dată pe răzătoare), pasta de tomate și pasta de ardei.\n\nAdăugați condimentele esențiale: multă mentă uscată (nane), sare, piper și puțin ulei de măsline. Frământați bine.",
      
      "Umplerea. Umpleți legumele cu amestecul de carne, dar NU le îndesați până sus. Lăsați aproximativ 1 cm spațiu liber la vârf, deoarece orezul se va umfla la fiert și are nevoie de loc.\n\nPuneți capacele ardeilor la loc. Pentru dovlecei, puteți folosi o felie de roșie ca și capac.",
      
      "Aranjarea în oală. Așezați dolmalele în picioare într-o oală adâncă, una lângă alta, destul de strâns ca să nu se răstoarne.\n\nDacă rămâne spațiu, puteți pune cartofi tăiați printre ele.",
      
      "Sosul de fierbere. Dizolvați o lingură de pastă de tomate în apă caldă cu puțină sare și ulei. Turnați sosul în oală, printre legume, până ajunge la jumătatea înălțimii lor.\n\nNu le acoperiți complet cu lichid.",
      
      "Gătirea și servirea. Puneți un capac și fierbeți la foc mediu timp de 40-50 de minute, până când orezul este gătit și legumele sunt moi.\n\nDolma se servește caldă, cu o lingură generoasă de iaurt (simplu sau cu usturoi) deasupra. Este un preparat de bază în familia turcă."
    ],
    nutrition: {calories: 350, protein: 20, carbs: 35, fat: 15, fiber: 6}
  },

  "Iskender Kebab": {
    title: "Iskender Kebab (Regele Kebaburilor)",
    servings: 4,
    servingSize: "1 porție (400g)",
    pricePerServing: 35,
    prepTime: "20 min",
    cookTime: "20 min",
    ingredients: [
      {name: "Carne Döner/Vită feliată fin", amount: "600 g"},
      {name: "Pită turcească (Pide)", amount: "2 buc"},
      {name: "Sos de roșii", amount: "400 ml"},
      {name: "Unt", amount: "100 g"},
      {name: "Iaurt gras (Süzme)", amount: "300 g"},
      {name: "Ardei iuți copți", amount: "2 buc"},
      {name: "Roșii coapte", amount: "2 buc"}
    ],
    steps: [
      "Acest preparat este o construcție pe straturi. Începeți cu baza: tăiați pita turcească (pide) în cuburi de 2-3 cm.\n\nPrăjiți ușor cuburile de pâine în puțin unt sau încălziți-le în cuptor până devin crocante la exterior dar moi în interior. Așezați un strat generos de pâine pe un platou mare oval.",
      
      "Sosul de roșii. Faceți un sos simplu dar concentrat. Fierbeți pasta de tomate diluată cu puțină apă, ulei de măsline și sare, până scade. Trebuie să fie un sos roșu aprins și fluid.\n\nTurnați o parte din sosul fierbinte peste cuburile de pâine pentru a le înmuia ușor.",
      
      "Carnea. Tradițional se folosește Döner Kebab (carne rotisată tăiată foiță). Acasă, puteți folosi antricot de vită tăiat extrem de subțire (ca carpaccio) și tras rapid la tigaie în unt.\n\nAșezați fâșiile de carne fierbinte peste patul de pâine însiropată, acoperind-o complet.",
      
      "Al doilea strat de sos. Turnați restul de sos de roșii peste carne. Aromele se vor întrepătrunde.",
      
      "Untul ars (The sizzle). Într-un ibric, topiți untul de calitate și lăsați-l să sfârâie până devine auriu și miroase a nuci (beurre noisette). Atenție să nu-l ardeți de tot.\n\nAduceți platoul la masă și turnați untul clocotit deasupra cărnii chiar în fața mesenilor. Trebuie să sfârâie zgomotos.",
      
      "Garnitura. Puneți o grămăjoară generoasă de iaurt gros, rece, pe marginea platoului (nu peste carne, pentru a nu o răci imediat). Adăugați felii de roșii fripte și ardei iuți copți.\n\nContrastul dintre carnea fierbinte cu unt și iaurtul rece este esența Iskender-ului."
    ],
    nutrition: {calories: 800, protein: 45, carbs: 50, fat: 45, sodium: 1200}
  },

  "Simit": {
    title: "Simit (Covrig Turcesc cu Susan)",
    servings: 8,
    servingSize: "1 covrig (120g)",
    pricePerServing: 4,
    prepTime: "1.5 ore",
    cookTime: "20 min",
    ingredients: [
      {name: "Făină", amount: "500 g"},
      {name: "Apă călduță", amount: "300 ml"},
      {name: "Drojdie", amount: "7 g"},
      {name: "Melasă de struguri (Pekmez)", amount: "100 ml"},
      {name: "Semințe de susan", amount: "200 g (mult!)"},
      {name: "Sare & Zahăr", amount: "câte 1 linguriță"},
      {name: "Apă (pt sirop)", amount: "100 ml"}
    ],
    steps: [
      "Aluatul. Dizolvați drojdia și zahărul în apă. Adăugați făina și sarea. Frământați un aluat ferm, elastic, nelipicios (cca 10-12 minute).\n\nLăsați-l la dospit într-un loc cald timp de o oră, până își dublează volumul.",
      
      "Pregătirea băii de melasă. Într-un bol larg, amestecați melasa de struguri (Pekmez) cu apa. Aceasta este 'lipiciul' dulce care dă culoarea brună specifică.\n\nÎntr-un alt bol larg sau pe o tavă, puneți semințele de susan prăjite ușor.",
      
      "Modelarea inelelor. Împărțiți aluatul în bile egale. Rulați fiecare bilă într-un șnur lung și subțire. Îndoiți șnurul în două și răsuciți cele două capete unul în jurul celuilalt (ca o sfoară).\n\nUniți capetele pentru a forma un inel și sigilați bine prin rulare pe masă.",
      
      "Tăvălirea. Scufundați fiecare covrig mai întâi în amestecul de melasă, asigurându-vă că este acoperit pe toate părțile.\n\nImediat, scoateți-l și tăvăliți-l prin susan. Simitul trebuie să fie complet îmbrăcat în susan, nu doar presărat.",
      
      "Dospirea finală. Așezați covrigii pe tavă și lăsați-i să se odihnească încă 20 de minute. Întindeți-i puțin cu mâna să fie mai largi.",
      
      "Coacerea. Coaceți în cuptorul preîncălzit la 200°C timp de 15-20 de minute, până devin maro-închis și foarte crocanți.\n\nSimitul autentic este crocant la exterior și pufos la interior. Se mănâncă la micul dejun cu ceai negru, brânză, roșii și măsline."
    ],
    nutrition: {calories: 300, protein: 8, carbs: 55, fat: 10, fiber: 4}
  },

  "Köfte": {
    title: "Köfte (Chiftele Turcești la Grătar)",
    servings: 4,
    servingSize: "4 chiftele (200g)",
    pricePerServing: 16,
    prepTime: "30 min",
    cookTime: "15 min",
    ingredients: [
      {name: "Carne tocată vită/miel", amount: "500 g"},
      {name: "Ceapă", amount: "1 mare"},
      {name: "Pâine veche/Pesmet", amount: "2 felii"},
      {name: "Usturoi", amount: "2 căței"},
      {name: "Ou", amount: "1 buc"},
      {name: "Pătrunjel", amount: "1/2 legătură"},
      {name: "Chimen, Boia, Piper", amount: "mix"}
    ],
    steps: [
      "Pregătirea cepei. Radeți ceapa pe răzătoarea mică. Stoarceți foarte bine zeama din ceapă și aruncați-o (sau păstrați-o pentru marinadă, dar nu în chiftele).\n\nFolosiți doar pulpa de ceapă. Zeama de ceapă poate da un gust amar și face carnea apoasă.",
      
      "Amestecul. Într-un bol, puneți carnea tocată. Înmuiați miezul de pâine în apă, stoarceți-l și adăugați-l peste carne (sau folosiți pesmet).\n\nAdăugați oul, usturoiul pisat, pulpa de ceapă, pătrunjelul tocat și condimentele (chimenul măcinat este esențial pentru gustul de köfte).",
      
      "Frământarea. Frământați compoziția energic timp de 5-8 minute. Ca și la kebab, frământarea ajută carnea să se lege și să nu se sfărâme la gătit.\n\nLăsați amestecul la frigider 30 de minute să se odihnească.",
      
      "Modelarea. Cu mâinile umezite, luați bucăți de carne și modelați-le. Formele tradiționale sunt fie bile aplatizate (ca un burger mic), fie cilindri mici (izgara köfte).\n\nFaceți o mică adâncitură în mijlocul fiecărei chiftele plate pentru a preveni bombarea la gătit.",
      
      "Gătirea. Prăjiți chiftelele în puțin ulei într-o tigaie sau, mult mai bine, pe un grătar încins. Gătiți-le 3-4 minute pe fiecare parte până sunt bine rumenite și făcute în interior.\n\nNu le presați cu spatula, pentru a nu scoate sucurile.",
      
      "Servirea. Köfte se servesc fierbinți, cu orez pilaf (cu orzo), ardei copți și o salată de fasole boabe (piyaz) cu ceapă și sumac."
    ],
    nutrition: {calories: 400, protein: 25, carbs: 10, fat: 25, sodium: 700}
  },

  "Sarma": {
    title: "Yaprak Sarma (Sărmăluțe în Foi de Viță)",
    servings: 6,
    servingSize: "8 sărmăluțe (150g)",
    pricePerServing: 12,
    prepTime: "1 oră",
    cookTime: "45 min",
    ingredients: [
      {name: "Foi de viță", amount: "300 g"},
      {name: "Orez", amount: "200 g"},
      {name: "Ceapă", amount: "3 mari"},
      {name: "Ulei de măsline", amount: "150 ml (generos)"},
      {name: "Muguri de pin & Stafide", amount: "câte 2 linguri"},
      {name: "Ienibahar, Scorțișoară", amount: "mix"},
      {name: "Lămâie", amount: "2 buc"}
    ],
    steps: [
      "Umplutura 'Zeytinyağlı' (cu ulei de măsline). Aceasta este varianta rece, fără carne. Tocați ceapa mărunt și căliți-o în mult ulei de măsline până devine sticloasă.\n\nAdăugați mugurii de pin și prăjiți-i până se auresc. Adăugați orezul spălat și căliți totul împreună.",
      
      "Aromatizarea. Adăugați stafidele (coacăze negre uscate - kuş üzümü), sarea, piperul, ienibaharul (allspice), scorțișoara și puțin zahăr. Aromele dulci-condimentate sunt specifice stilului otoman.\n\nTurnați o cană de apă și lăsați orezul să fiarbă până absoarbe apa, dar e încă 'al dente'. Adăugați mărar și mentă, apoi lăsați să se răcească.",
      
      "Rularea fină. Pregătiți foile de viță (opărite sau desărate). Puneți o linguriță de umplutură pe fiecare foaie.\n\nSecretul turcesc: sarmalele (sarma) trebuie să fie rulate extrem de subțiri și lungi, cât degetul mic ('kalem' - ca un creion). Necesită răbdare și dexteritate.",
      
      "Aranjarea. Acoperiți fundul oalei cu foi rupte și felii de lămâie. Așezați sarmalele strâns, în cercuri concentrice.\n\nStraturile compacte previn desfacerea lor.",
      
      "Fierberea. Turnați deasupra încă puțin ulei de măsline și zeama de la o lămâie. Adăugați apă cât să le acopere pe jumătate.\n\nPuneți o farfurie întoarsă deasupra pentru greutate. Fierbeți la foc mic 40-50 minute.",
      
      "Răcirea. Sarma se lasă să se răcească complet în oală. Se servesc reci, ca aperitiv (meze), decorate cu felii de lămâie. Sunt un simbol al ospitalității."
    ],
    nutrition: {calories: 300, protein: 5, carbs: 35, fat: 15, fiber: 5}
  },

  "Supă de linte (Mercimek Çorbası)": {
    title: "Mercimek Çorbası (Supă Cremă de Linte Roșie)",
    servings: 4,
    servingSize: "1 bol (300ml)",
    pricePerServing: 8,
    prepTime: "10 min",
    cookTime: "30 min",
    ingredients: [
      {name: "Linte roșie", amount: "250 g"},
      {name: "Ceapă", amount: "1 mare"},
      {name: "Morcov", amount: "1 buc"},
      {name: "Cartof", amount: "1 buc"},
      {name: "Supă de pui/apă", amount: "1.5 L"},
      {name: "Unt", amount: "50 g"},
      {name: "Boia & Mentă uscată", amount: "topping"},
      {name: "Lămâie", amount: "pentru servire"}
    ],
    steps: [
      "Pregătirea legumelor. Tăiați ceapa, morcovul și cartofii în cuburi grosiere. Spălați lintea roșie în mai multe ape până când apa rămâne limpede (pentru a evita spuma).\n\nÎntr-un oală, topiți puțin unt sau ulei și căliți ceapa până se înmoaie. Adăugați morcovul și cartoful și mai căliți 2 minute.",
      
      "Fierberea. Adăugați lintea spălată în oală. Turnați apa sau supa de pui fierbinte. Asezonați cu sare și puțin chimen (opțional).\n\nLăsați să fiarbă la foc mediu timp de 20-30 de minute. Lintea roșie se dezintegrează rapid, iar legumele trebuie să fie complet moi.",
      
      "Blendarea. Când totul este fiert, folosiți un blender vertical (pasator) pentru a transforma supa într-o cremă fină și catifelată.\n\nDacă este prea groasă (lintea se îngroașă mult), mai adăugați puțină apă fierbinte până ajungeți la consistența dorită.",
      
      "Ajustarea gustului. Adăugați sare și piper. În Turcia se servește simplă, dar onctuoasă. Dacă doriți, puteți adăuga o lingură de smântână, deși nu e tradițional.",
      
      "Sosul de unt (Sosul Paprika). Într-un ibric mic, topiți untul. Când sfârâie, adăugați o linguriță de boia dulce (sau iute) și, foarte important, un praf de mentă uscată.\n\nAmestecați rapid și luați de pe foc înainte ca boiaua să se ardă. Acest sos roșu aromat se toarnă peste supă.",
      
      "Servirea. Turnați supa în boluri. Picurați sosul de unt roșu deasupra pentru un efect vizual și gustativ superb.\n\nServiți obligatoriu cu sferturi de lămâie. Zeama de lămâie stoarsă în supă schimbă culoarea ușor și îi dă gustul final perfect."
    ],
    nutrition: {calories: 250, protein: 15, carbs: 35, fat: 8, fiber: 10}
  },

  "Lokum": {
    title: "Lokum (Rahat Turcesc cu Trandafiri)",
    servings: 20,
    servingSize: "2 cuburi (30g)",
    pricePerServing: 3,
    prepTime: "30 min",
    cookTime: "1 oră (+12h răcire)",
    ingredients: [
      {name: "Zahăr", amount: "4 căni"},
      {name: "Amidon de porumb", amount: "1 cană"},
      {name: "Apă", amount: "4 căni"},
      {name: "Cream of Tartar", amount: "1 linguriță"},
      {name: "Apă de trandafiri", amount: "2 linguri"},
      {name: "Colorant roșu", amount: "1 picătură"},
      {name: "Zahăr pudră", amount: "pentru tăvălit"}
    ],
    steps: [
      "Siropul. Într-un cratiță, puneți zahărul, 1.5 căni de apă și zeama de lămâie (sau cream of tartar). Fierbeți la foc mediu până când siropul atinge temperatura de 'soft ball' (115°C). Dacă nu aveți termometru, siropul trebuie să fie gros și lipicios.\n\nLăsați siropul deoparte.",
      
      "Pasta de amidon. Într-o altă cratiță mare, amestecați amidonul de porumb cu restul de apă și cream of tartar. Gătiți la foc mic, amestecând continuu cu telul, până se transformă într-o pastă albă, groasă și lipicioasă (ca un lipici).\n\nAcesta este momentul critic: pasta trebuie să fie gătită bine, dar nu arsă.",
      
      "Combinarea și fierberea lungă. Turnați încet siropul de zahăr fierbinte peste pasta de amidon, amestecând energic. Aduceți amestecul la fierbere la foc foarte mic.\n\nAcum urmează partea grea: trebuie să fierbeți amestecul, amestecând des, timp de aproximativ 45-60 de minute. Pasta se va îngroșa, va deveni aurie și translucidă.",
      
      "Aromatizarea. Când compoziția este gata, opriți focul. Adăugați apa de trandafiri și o picătură de colorant alimentar roșu (pentru culoarea roz pal specifică).\n\nAmestecați bine. Dacă doriți, puteți adăuga acum fistic sau nuci.",
      
      "Turnarea. Ungeți o tavă pătrată cu puțin ulei și tapetați-o cu folie alimentară unsă (sau hârtie de copt). Turnați amestecul fierbinte și nivelați-l rapid cu o spatulă unsă.\n\nLăsați să se răcească la temperatura camerei, neacoperit, peste noapte (minim 12 ore) pentru a se întări.",
      
      "Tăierea. A doua zi, amestecați zahăr pudră cu amidon. Răsturnați blocul de rahat pe un blat pudrat cu acest mix. Tăiați cubulețe cu un cuțit uns sau pudrat.\n\nTăvăliți fiecare cubulețe prin zahăr pudră. Se păstrează la temperatura camerei."
    ],
    nutrition: {calories: 50, protein: 0, carbs: 12, fat: 0, sugar: 10}
  },

  // --- NEW MISSING RECIPES ADDED HERE ---

  "Imam Bayildi": {
    title: "Imam Bayildi (Vinete Umplute cu Legume)",
    servings: 4,
    servingSize: "1 vânătă",
    pricePerServing: 12,
    prepTime: "30 min",
    cookTime: "1 oră",
    ingredients: [
      {name: "Vinete medii", amount: "4 buc"},
      {name: "Ceapă", amount: "3 mari"},
      {name: "Roșii", amount: "4 buc"},
      {name: "Usturoi", amount: "1 căpățână"},
      {name: "Ardei verde", amount: "2 buc"},
      {name: "Ulei de măsline", amount: "150 ml"},
      {name: "Zahăr", amount: "1 linguriță"},
      {name: "Pătrunjel", amount: "1 legătură"}
    ],
    steps: [
      "Pregătirea vinetelor. Spălați vinetele și curățați-le coaja în fâșii alternante (stil zebră). Păstrați codița. Faceți o tăietură lungă pe mijloc, fără a tăia capetele sau fundul. Puneți-le în apă sărată 30 de minute pentru a elimina amărăciunea. Scurgeți și uscați bine.",
      "Prăjirea. Imam Bayildi necesită ulei de măsline generos. Prăjiți vinetele întregi în ulei până se înmoaie și se rumenesc pe toate părțile. Scoateți-le pe hârtie absorbantă. Alternativ, le puteți unge cu ulei și coace la cuptor, dar gustul tradițional vine din prăjire.",
      "Umplutura (Sosul). Tăiați ceapa solzișori (julienne) și ardeii fâșii. Căliți ceapa în ulei de măsline până devine transparentă. Adăugați usturoiul feliat și ardeii. Gătiți până se înmoaie bine.",
      "Adăugarea roșiilor. Adăugați roșiile decojite și tăiate cuburi. Asezonați cu sare, piper, zahăr (esențial pentru a echilibra aciditatea) și jumătate din pătrunjel. Lăsați să fiarbă până sosul se îngroașă.",
      "Umplerea. Așezați vinetele prăjite într-o tavă de cuptor sau o cratiță largă. Deschideți buzunarul format de tăietură și presați miezul pentru a face loc. Umpleți generos fiecare vânătă cu amestecul de ceapă și roșii.",
      "Gătirea finală. Turnați restul de sos sau puțină apă cu ulei pe fundul tăvii. Acoperiți și gătiți la cuptor (180°C) sau pe plită la foc mic timp de 30-40 de minute. Se lasă să se răcească în tavă. Se servesc la temperatura camerei, decorate cu pătrunjel proaspăt."
    ],
    nutrition: {calories: 350, protein: 5, carbs: 25, fat: 28, fiber: 10}
  },

  "Borek cu brânză": {
    title: "Su Böreği (Plăcintă Turcească cu Brânză)",
    servings: 6,
    servingSize: "1 pătrat",
    pricePerServing: 10,
    prepTime: "30 min",
    cookTime: "40 min",
    ingredients: [
      {name: "Foi Yufka (sau plăcintă)", amount: "5-6 foi mari"},
      {name: "Brânză Feta/Telemea", amount: "400 g"},
      {name: "Pătrunjel", amount: "1/2 legătură"},
      {name: "Ouă", amount: "3 buc"},
      {name: "Lapte", amount: "200 ml"},
      {name: "Iaurt", amount: "100 g"},
      {name: "Ulei/Unt topit", amount: "100 ml"},
      {name: "Susan/Chimen negru", amount: "decor"}
    ],
    steps: [
      "Sosul de legătură. Într-un bol, bateți ouăle cu laptele, iaurtul și uleiul (sau untul topit). Adăugați un praf de sare. Acest amestec lichid va face foile să fie moi în interior și crocante la exterior.",
      "Pregătirea umpluturii. Sfărâmați brânza Feta într-un bol. Tocați pătrunjelul mărunt și amestecați-l cu brânza. Dacă brânza e foarte sărată, o puteți combina cu puțină brânză proaspătă de vaci sau ricotta.",
      "Stratificarea (Baza). Ungeți o tavă dreptunghiulară cu ulei. Așezați prima foaie de Yufka, lăsând marginile să atârne în afara tăvii. Ungeți foaia cu sosul de ou și lapte folosind o pensulă.",
      "Miezul. Rupeți 2-3 foi în bucăți mari și așezați-le mototolite în tavă, stropind fiecare strat cu sos. Distribuiți amestecul de brânză uniform peste foile mototolite.",
      "Acoperirea. Acoperiți brânza cu restul de foi rupte și mototolite, stropind din nou. La final, aduceți marginile primei foi (cea de la bază) peste plăcintă, ca un plic, pentru a o închide.",
      "Coacerea. Turnați tot sosul rămas deasupra plăcintei. Tăiați plăcinta crudă în pătrate. Presărați semințe de susan sau chimen negru (Nigella). Coaceți la 190°C timp de 35-40 minute până se umflă și devine aurie."
    ],
    nutrition: {calories: 350, protein: 12, carbs: 30, fat: 18, micronutrients: ["Calcium 200mg"]}
  },

  "Kunefe": {
    title: "Künefe (Desert Cald cu Brânză)",
    servings: 4,
    servingSize: "1 bucată",
    pricePerServing: 15,
    prepTime: "20 min",
    cookTime: "15 min",
    ingredients: [
      {name: "Kataif (tăiței proaspeți)", amount: "250 g"},
      {name: "Brânză nesărată (Mozzarella)", amount: "200 g"},
      {name: "Unt", amount: "100 g"},
      {name: "Zahăr", amount: "1 cană"},
      {name: "Apă", amount: "1 cană"},
      {name: "Fistic măcinat", amount: "50 g"},
      {name: "Lămâie", amount: "1 felie"}
    ],
    steps: [
      "Siropul (Șerbet). Începeți cu siropul, deoarece trebuie să fie rece. Fierbeți apa cu zahărul și o felie de lămâie timp de 10-15 minute până se îngroașă ușor. Lăsați-l să se răcească complet.",
      "Pregătirea tăițeilor. Tăiați tăițeii de kataif (kadayıf) în bucăți mici (1-2 cm). Topiți untul și amestecați-l bine cu tăițeii, frecând cu mâinile astfel încât fiecare fir să fie uns.",
      "Montarea în tavă. Folosiți tăvițe mici rotunde de metal sau o tigaie. Ungeți tava cu unt solid. Presați jumătate din tăiței pe fundul tăvii într-un strat compact. Folosiți fundul unui pahar pentru a presa bine.",
      "Brânza. Folosiți o brânză specială pentru Kunefe (nesărată și elastică) sau Mozzarella proaspătă scursă bine și tăiată felii. Așezați brânza peste stratul de tăiței, lăsând 1 cm liber la margine.",
      "Stratul superior. Acoperiți brânza cu restul de tăiței. Presați din nou foarte ferm și uniform. Suprafața trebuie să fie plată.",
      "Gătirea și servirea. Gătiți Kunefe pe aragaz la foc mic, rotind tava constant pentru o rumenire uniformă (cca 5-7 min pe o parte). Când baza e aurie, întoarceți-l pe un platou și glisați-l înapoi pentru a găti cealaltă parte. Imediat ce e gata, turnați siropul rece peste desertul fierbinte. Presărați fistic și serviți fierbinte (brânza trebuie să se întindă)."
    ],
    nutrition: {calories: 500, protein: 15, carbs: 45, fat: 30, sugar: 35}
  },

  "Manti": {
    title: "Manti (Ravioli Turcești cu Iaurt)",
    servings: 4,
    servingSize: "1 bol",
    pricePerServing: 12,
    prepTime: "1 oră",
    cookTime: "15 min",
    ingredients: [
      {name: "Făină", amount: "300 g"},
      {name: "Ou", amount: "1 buc"},
      {name: "Carne tocată vită", amount: "250 g"},
      {name: "Ceapă", amount: "1 mare"},
      {name: "Iaurt", amount: "500 g"},
      {name: "Usturoi", amount: "3 căței"},
      {name: "Unt", amount: "50 g"},
      {name: "Boia & Mentă uscată", amount: "1 lingură"}
    ],
    steps: [
      "Aluatul. Într-un bol, amestecați făina, oul, un praf de sare și puțină apă călduță. Frământați un aluat tare și elastic (mai tare decât cel de pâine). Acoperiți-l și lăsați-l să se odihnească 30 de minute.",
      "Umplutura. Radeți ceapa și stoarceți zeama (foarte important). Amestecați pulpa de ceapă cu carnea tocată, sare și piper negru. Puteți adăuga și puțin pătrunjel tocat.",
      "Întinderea și tăierea. Împărțiți aluatul în 2-3 bile. Întindeți fiecare bilă într-o foaie foarte subțire (2 mm). Tăiați foaia în pătrate mici de 2x2 cm sau 3x3 cm. Manti tradiționali sunt foarte mici.",
      "Umplerea. Puneți o bobiță de carne (cât un bob de năut) în mijlocul fiecărui pătrat. Uniți cele 4 colțuri ale pătratului la mijloc și strângeți bine ('bocceluță'), asigurându-vă că nu se desfac.",
      "Fierberea. Fierbeți manti în apă clocotită cu sare timp de 10-12 minute, până când se ridică la suprafață și aluatul e fiert. Scurgeți-i.",
      "Sosurile și servirea. Amestecați iaurtul cu usturoiul pisat și puțină sare. Topiți untul într-o tigaie, adăugați boiaua și menta uscată (nane) până sfârâie. Puneți manti în farfurie, acoperiți cu sos de iaurt și picurați untul roșu picant deasupra."
    ],
    nutrition: {calories: 450, protein: 20, carbs: 50, fat: 18, sodium: 600}
  }
};
