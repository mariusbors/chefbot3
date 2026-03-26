
import { Recipe } from '../../types';

export const DESSERT_RECIPES: Record<string, Recipe> = {
  "Pavlova": {
    title: "Pavlova cu Fructe și Frișcă",
    servings: 8,
    servingSize: "1 felie (150g)",
    pricePerServing: 8,
    prepTime: "30 min",
    cookTime: "1.5 ore (+răcire)",
    ingredients: [
      { name: "Albușuri (temp. camerei)", amount: "4 buc" },
      { name: "Zahăr tos fin", amount: "220 g" },
      { name: "Amidon de porumb", amount: "2 lingurițe" },
      { name: "Oțet alb/Zeamă lămâie", amount: "1 linguriță" },
      { name: "Esență de vanilie", amount: "1 linguriță" },
      { name: "Smântână pentru frișcă", amount: "300 ml" },
      { name: "Fructe (căpșuni, kiwi, maracuja)", amount: "300 g" }
    ],
    steps: [
      "Baza de bezea. Încălziți cuptorul la 120°C (fără ventilator). Desenați un cerc de 20cm pe o hârtie de copt și întoarceți-o. Bateți albușurile spumă cu un praf de sare până fac vârfuri moi.",
      "Structura (Adăugarea zahărului). Începeți să adăugați zahărul treptat, lingură cu lingură, mixând continuu la viteză mare. Continuați să mixați până când bezeaua este tare, lucioasă și zahărul s-a dizolvat complet (nu se simte între degete).",
      "Stabilizarea. Adăugați oțetul, amidonul de porumb și vanilia. Amestecați scurt și delicat cu o spatulă. Amidonul și oțetul sunt secretul Pavlovei: ele creează interiorul moale și pufos (marshmallow), în timp ce exteriorul rămâne crocant.",
      "Formarea cuibului. Turnați bezeaua în interiorul cercului desenat pe tavă. Folosind spatula, ridicați marginile în sus, formând un 'crater' în mijloc. Marginile trebuie să fie mai înalte pentru a susține frișca ulterior.",
      "Coacerea lentă. Introduceți tava în cuptor și reduceți imediat temperatura la 100°C. Coaceți timp de 90 de minute. Bezeaua nu trebuie să se rumenească, ci să rămână albă și uscată la exterior.",
      "Răcirea controlată și Servirea. Opriți cuptorul și lăsați ușa întredeschisă. Lăsați Pavlova să se răcească complet în cuptor (minim 2 ore) pentru a preveni crăparea. Chiar înainte de servire, umpleți craterul cu frișcă bătută și fructe proaspete acrișoare."
    ],
    nutrition: { calories: 350, protein: 4, carbs: 55, fat: 12, sugar: 45 }
  },

  "Profiterol": {
    title: "Profiterol cu Ciocolată Caldă",
    servings: 6,
    servingSize: "3 bucăți (150g)",
    pricePerServing: 12,
    prepTime: "40 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Apă", amount: "125 ml" },
      { name: "Lapte", amount: "125 ml" },
      { name: "Unt", amount: "100 g" },
      { name: "Făină", amount: "150 g" },
      { name: "Ouă", amount: "4 buc" },
      { name: "Înghețată vanilie/Frișcă", amount: "umplutură" },
      { name: "Ciocolată neagră", amount: "200 g" },
      { name: "Smântână lichidă (pt sos)", amount: "200 ml" }
    ],
    steps: [
      "Aluatul opărit (Pâte à Choux). Într-un cratiță, puneți apa, laptele, untul, sarea și puțin zahăr. Aduceți la fierbere. Când clocotește și untul s-a topit, trageți de pe foc și adăugați toată făina odată.\n\nAmestecați energic cu o lingură de lemn până se formează o bilă. Puneți înapoi pe foc mic 1-2 minute, amestecând, pentru a usca aluatul (până lasă o peliculă pe fundul oalei).",
      
      "Încorporarea ouălor. Mutați aluatul într-un bol și lăsați-l să se răcească 5 minute. Adăugați ouăle pe rând, amestecând energic după fiecare până se încorporează complet. Aluatul final trebuie să fie lucios și să curgă greu de pe lingură (forma de V).",
      
      "Formarea. Puneți aluatul într-un poș cu dui rotund. Spritați bile (choux) de mărimea unei nuci pe tava tapetată cu hârtie, lăsând spațiu între ele. Aplatizați vârful cu degetul umezit.",
      
      "Coacerea. Coaceți la 200°C timp de 15 minute, apoi reduceți la 170°C pentru încă 10-15 minute. Nu deschideți ușa cuptorului! Choux-urile trebuie să fie aurii, umflate și ușoare (goale în interior).\n\nÎnțepați-le baza cu o scobitoare și lăsați-le să se răcească.",
      
      "Sosul de ciocolată (Ganache). Încălziți smântâna lichidă până la punctul de fierbere. Turnați-o peste ciocolata ruptă bucăți. Așteptați 1 minut, apoi amestecați până obțineți un sos lucios.",
      
      "Asamblarea. Tăiați choux-urile în jumătate. Umpleți-le cu o cupă de înghețată de vanilie (clasic) sau frișcă bătută cu vanilie (Chantilly).\n\nPuneți 3 profiteroluri pe o farfurie și turnați sosul de ciocolată cald deasupra. Presărați fulgi de migdale."
    ],
    nutrition: { calories: 450, protein: 8, carbs: 35, fat: 30, sugar: 20 }
  },

  "Cheesecake": {
    title: "New York Cheesecake (Cremă de Brânză)",
    servings: 12,
    servingSize: "1 felie (150g)",
    pricePerServing: 10,
    prepTime: "30 min",
    cookTime: "1 oră (+6h rece)",
    ingredients: [
      { name: "Biscuiți digestivi", amount: "300 g" },
      { name: "Unt topit", amount: "150 g" },
      { name: "Cremă de brânză (Philadelphia)", amount: "900 g" },
      { name: "Zahăr", amount: "200 g" },
      { name: "Smântână fermentată", amount: "200 g" },
      { name: "Ouă", amount: "4 mari" },
      { name: "Vanilie", amount: "1 lingură" },
      { name: "Făină/Amidon", amount: "3 linguri" }
    ],
    steps: [
      "Crusta. Mărunțiți biscuiții fin. Amestecați-i cu untul topit și un praf de sare. Presați amestecul pe fundul unei forme de tort cu inel detașabil (24cm), tapetată cu hârtie de copt. Coaceți blatul 10 minute la 180°C, apoi lăsați să se răcească.",
      
      "Crema. Asigurați-vă că toate ingredientele sunt la temperatura camerei (esențial pentru a evita cocoloașele). Mixați crema de brânză cu zahărul și făina la viteză mică, doar cât să se omogenizeze. Nu mixați excesiv pentru a nu introduce aer (care cauzează crăpături).",
      
      "Adăugarea lichidelor. Adăugați smântâna și vanilia. Adăugați ouăle unul câte unul, amestecând scurt după fiecare. Opriți mixerul imediat ce oul este încorporat.",
      
      "Pregătirea pentru baie de apă. Înveliți exteriorul formei de tort în 2-3 straturi de folie de aluminiu (pentru a nu intra apa). Așezați forma într-o tavă mare adâncă. Turnați compoziția peste blatul răcit.",
      
      "Coacerea (Bain-Marie). Turnați apă fierbinte în tava mare, până la jumătatea înălțimii formei de tort. Coaceți la 160°C timp de 60-70 de minute. Centrul prăjiturii trebuie să tremure ușor ca un jeleu (jiggle) când mișcați forma; nu trebuie să fie tare.",
      
      "Răcirea lentă. Opriți cuptorul și lăsați ușa întredeschisă. Lăsați cheesecake-ul să se răcească lent în cuptor timp de o oră. Apoi scoateți-l, treceți un cuțit pe margine și puneți-l la frigider peste noapte (minim 6 ore).\n\nServiți simplu sau cu sos de fructe de pădure."
    ],
    nutrition: { calories: 550, protein: 10, carbs: 40, fat: 40, sugar: 30 }
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
      "Aluatul (Choux). Puneți apa, laptele, untul, sarea și zahărul într-o oală pe foc. Când clocotește, adăugați toată făina odată. Amestecați energic cu o lingură de lemn până se desprinde de pe pereți. Lăsați să se răcească puțin, apoi încorporați ouăle unul câte unul.",
      "Formarea. Puneți aluatul într-un poș cu dui stelat. Spritați bastoane de 10-12 cm în tava tapetată cu hârtie de copt, lăsând spațiu între ele.",
      "Coacerea. Coaceți la 200°C timp de 15 minute, apoi reduceți la 170°C pentru încă 15-20 minute. Nu deschideți ușa cuptorului! Lăsați-le să se răcească.",
      "Crema de patiserie (Vanilie). Frecați gălbenușurile cu zahărul și amidonul. Turnați laptele fierbinte peste ele, amestecând. Puneți din nou pe foc și fierbeți până se îngroașă ca o budincă. Adăugați vanilia și untul (opțional) la final. Acoperiți cu folie la contact și răciți.",
      "Glazura. Topiți ciocolata cu smântâna lichidă până obțineți un ganache lucios.",
      "Asamblarea. Tăiați eclelele pe lungime (sau faceți găuri la bază). Umpleți-le generos cu crema de vanilie. Înmuiați capacul în glazura de ciocolată sau turnați-o deasupra."
    ],
    nutrition: { calories: 350, protein: 6, carbs: 40, fat: 20, sugar: 25 }
  },

  "Lava Cake": {
    title: "Lava Cake (Moelleux au Chocolat)",
    servings: 4,
    servingSize: "1 prăjitură",
    pricePerServing: 8,
    prepTime: "15 min",
    cookTime: "12 min",
    ingredients: [
      { name: "Ciocolată neagră (min 50%)", amount: "200 g" },
      { name: "Unt", amount: "150 g" },
      { name: "Ouă", amount: "4 buc" },
      { name: "Zahăr", amount: "100 g" },
      { name: "Făină", amount: "70 g" },
      { name: "Cacao", amount: "pentru tapetat formele" }
    ],
    steps: [
      "Topirea. Topiți ciocolata ruptă bucăți împreună cu untul la bain-marie sau microunde. Amestecați până la omogenizare și lăsați să se răcească ușor.",
      "Spuma de ouă. Bateți ouăle întregi cu zahărul până se albesc și își dublează volumul.",
      "Combinarea. Turnați ciocolata topită peste spuma de ouă și amestecați delicat. Cerneți făina deasupra și încorporați-o ușor cu spatula.",
      "Pregătirea formelor. Ungeți 4 forme de sufleu (ramekins) cu unt și tapetați-le cu cacao (nu făină, pentru a nu lăsa urme albe). Turnați compoziția în forme.",
      "Coacerea. Acesta este pasul critic. Coaceți în cuptorul preîncălzit la 200°C timp de exact 10-12 minute. Marginile trebuie să fie coapte, dar centrul să fie moale la atingere.",
      "Servirea. Răsturnați imediat pe farfurie. Serviți fierbinte cu înghețată de vanilie sau fructe de pădure. Când tăiați, mijlocul lichid va curge ca lava."
    ],
    nutrition: { calories: 500, protein: 8, carbs: 45, fat: 35, sugar: 30 }
  },

  "Amandine": {
    title: "Amandine (Prăjitura Copilăriei)",
    servings: 8,
    servingSize: "1 bucată (150g)",
    pricePerServing: 10,
    prepTime: "1 oră",
    cookTime: "40 min",
    ingredients: [
      { name: "Ouă", amount: "6 buc" },
      { name: "Zahăr", amount: "200 g" },
      { name: "Făină", amount: "4 linguri" },
      { name: "Cacao", amount: "3 linguri" },
      { name: "Unt (82%)", amount: "300 g" },
      { name: "Esență Rom", amount: "2 fiole" },
      { name: "Ciocolată/Fondant", amount: "glazură" },
      { name: "Apă & Zahăr", amount: "sirop" }
    ],
    steps: [
      "Prepararea blatului. Separați ouăle. Bateți albușurile spumă tare cu zahărul până se formează o bezea lucioasă. Adăugați gălbenușurile unul câte unul, amestecând ușor.",
      "Coacerea blatului. Cerneți făina și cacaoa peste spuma de ouă și încorporați-le cu o spatulă, prin mișcări de jos în sus, pentru a nu scoate aerul. Turnați într-o tavă tapetată cu hârtie de copt și coaceți la 180°C timp de 30-35 minute. Lăsați să se răcească complet.",
      "Siropul de rom. Fierbeți apa cu zahărul câteva minute. Când siropul s-a răcit puțin, adăugați esența de rom și, opțional, o lingură de cappuccino pentru aromă intensă de cafea. Siropul trebuie să fie rece când însiropați.",
      "Crema de unt cu cacao. Mixați untul moale (la temperatura camerei) cu zahărul pudră și cacaoa cernută până devine o cremă fină și spumoasă. Adăugați rom. Pentru o cremă mai fină, puteți folosi o bază de gălbenușuri gătite pe abur (aparat à bombe) mixată cu unt.",
      "Asamblarea. Tăiați blatul răcit în două foi orizontale. Așezați prima foaie, însiropați-o bine. Întindeți 3/4 din cremă uniform. Puneți a doua foaie, însiropați-o și pe aceasta și acoperiți-o cu un strat foarte subțire de cremă (pentru a adera glazura).",
      "Glazurarea și Decorul. Tăiați prăjitura în pătrate înainte de a turna glazura. Topiți ciocolata cu puțin ulei (sau folosiți fondant de cacao lichid) și turnați peste fiecare amandină individual sau peste toată prăjitura. Decorați cu un moț de cremă păstrat."
    ],
    nutrition: { calories: 600, protein: 8, carbs: 60, fat: 35, sugar: 40 }
  },

  "Salam de biscuiți": {
    title: "Salam de Biscuiți (Rețeta Clasică)",
    servings: 10,
    servingSize: "2 felii",
    pricePerServing: 3,
    prepTime: "20 min (+rece)",
    cookTime: "5 min",
    ingredients: [
      { name: "Biscuiți populari", amount: "500 g" },
      { name: "Lapte", amount: "200 ml" },
      { name: "Zahăr", amount: "150 g" },
      { name: "Unt", amount: "100 g" },
      { name: "Cacao", amount: "3 linguri" },
      { name: "Esență de Rom", amount: "2 fiole" },
      { name: "Rahat", amount: "100 g (opțional)" },
      { name: "Nucă de cocos", amount: "decor" }
    ],
    steps: [
      "Pregătirea biscuiților. Rupeți biscuiții în bucăți mici și neregulate, nu praf. Este important să rămână bucăți mai mari pentru a imita 'grăsimea' din salamul real.",
      "Pregătirea ingredientelor extra. Tăiați rahatul în cubulețe mici (pudrați cuțitul cu zahăr să nu se lipească). Mărunțiți nuca sau stafidele dacă folosiți. Amestecați-le cu biscuiții într-un bol mare.",
      "Siropul de cacao. Puneți laptele, zahărul, untul și cacaoa într-o cratiță pe foc. Fierbeți 2-3 minute amestecând continuu până se omogenizează și zahărul se topește complet.",
      "Aromatizarea și amestecarea. Luați siropul de pe foc și adăugați esența de rom. Turnați siropul fierbinte peste amestecul de biscuiți. Amestecați bine până când toți biscuiții sunt acoperiți și lichidul începe să fie absorbit.",
      "Modelarea salamului. Întindeți o folie alimentară pe masă și presărați-o cu nucă de cocos sau biscuiți măcinați. Turnați jumătate din compoziție. Rulați strâns folia, formând un cilindru, și strângeți capetele ca la o bomboană.",
      "Răcirea și Servirea. Lăsați salamul la frigider pentru minim 3-4 ore, sau ideal peste noapte, pentru a se întări untul și a se înmuia biscuiții. Tăiați felii de 1 cm grosime."
    ],
    nutrition: { calories: 250, protein: 4, carbs: 45, fat: 10, sugar: 25 }
  },

  "Orez cu lapte": {
    title: "Orez cu Lapte și Scorțișoară",
    servings: 4,
    servingSize: "1 bol",
    pricePerServing: 3,
    prepTime: "5 min",
    cookTime: "30 min",
    ingredients: [
      { name: "Orez cu bob rotund", amount: "200 g" },
      { name: "Lapte", amount: "1 L" },
      { name: "Zahăr", amount: "100 g" },
      { name: "Vanilie", amount: "1 linguriță" },
      { name: "Coajă de lămâie", amount: "1 bucată" },
      { name: "Scorțișoară", amount: "decor" }
    ],
    steps: [
      "Spălarea orezului: Spălați orezul în apă rece pentru a elimina o parte din amidon, apoi scurgeți-l bine. Acest pas ajută la obținerea unei texturi mai curate.",
      "Fierberea inițială: Puneți orezul la fiert cu laptele, un praf de sare și coaja de lămâie (întreagă, pentru a o putea scoate) într-o oală cu fund dublu. Folosiți foc mediu până începe să clocotească.",
      "Gătirea lentă: Reduceți focul la minim. Lăsați să fiarbă încet, amestecând des pentru a nu se prinde de fund, timp de 20-25 de minute. Bobul trebuie să se umfle și să absoarbă lichidul.",
      "Îndulcirea: Când orezul este aproape gata și compoziția s-a legat, adăugați zahărul. Dacă îl puneți la început, orezul fierbe mai greu.",
      "Aromatizarea: După ce zahărul s-a topit, opriți focul. Adăugați extractul de vanilie și, opțional, un cubuleț de unt pentru cremozitate. Scoateți coaja de lămâie.",
      "Servirea: Turnați orezul în boluri. Se poate servi cald sau rece. Presărați scorțișoară din abundență sau adăugați dulceață de vișine deasupra."
    ],
    nutrition: { calories: 350, protein: 8, carbs: 65, fat: 5, sugar: 25 }
  },

  "Clătite americane": {
    title: "Pancakes (Clătite Americane Pufoase)",
    servings: 4,
    servingSize: "3 clătite",
    pricePerServing: 5,
    prepTime: "10 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Făină", amount: "250 g" },
      { name: "Lapte", amount: "300 ml" },
      { name: "Ouă", amount: "2 buc" },
      { name: "Unt topit", amount: "50 g" },
      { name: "Praf de copt", amount: "1 plic (10g)" },
      { name: "Zahăr", amount: "3 linguri" },
      { name: "Sirop de arțar", amount: "servire" }
    ],
    steps: [
      "Ingredientele uscate: Într-un bol mare, cerneți făina și amestecați-o cu zahărul, praful de copt și sarea. Această aerare ajută la pufosenie.",
      "Ingredientele umede: În alt bol, bateți ouăle, apoi adăugați laptele și untul topit (răcit puțin).",
      "Combinarea: Turnați ingredientele umede peste cele uscate. Amestecați scurt cu un tel sau o spatulă, doar cât să se umezească făina. NU mixați excesiv! Dacă rămân mici cocoloașe, este perfect.",
      "Pregătirea tigăii: Încingeți o tigaie antiaderentă la foc mediu. Ungeți-o cu puțin unt sau ulei.",
      "Coacerea primei părți: Turnați un polonic mic de aluat pentru fiecare clătită. Gătiți până când apar bule pe toată suprafața clătitei și marginile par uscate (cca 2-3 minute).",
      "Întoarcerea și finalizarea: Întoarceți clătita și mai gătiți 1-2 minute pe cealaltă parte până devine aurie. Serviți teancul cald cu unt și sirop de arțar."
    ],
    nutrition: { calories: 450, protein: 10, carbs: 60, fat: 15, sugar: 20 }
  }
};
