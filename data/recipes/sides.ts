
import { Recipe } from '../../types';

export const SIDE_RECIPES: Record<string, Recipe> = {
  "Cartofi prăjiți": {
    title: "Cartofi Prăjiți (French Fries Perfecți)",
    servings: 4,
    servingSize: "1 porție (150g)",
    pricePerServing: 6,
    prepTime: "30 min",
    cookTime: "20 min",
    ingredients: [
      { name: "Cartofi (soi făinos)", amount: "1 kg" },
      { name: "Ulei (floarea soarelui/arahide)", amount: "1 L" },
      { name: "Sare de mare", amount: "după gust" }
    ],
    steps: [
      "Alegerea și tăierea. Folosiți cartofi cu conținut ridicat de amidon (făinoși), nu cei ceroși de salată. Curățați-i și tăiați-i bastonașe uniforme de 1 cm grosime. Uniformitatea asigură gătirea egală.",
      "Eliminarea amidonului. Puneți cartofii tăiați într-un bol mare cu apă rece. Lăsați-i la înmuiat cel puțin 30 de minute (sau peste noapte la frigider). Acest pas elimină excesul de amidon de la suprafață, prevenind lipirea lor și asigurând crocănțimea.",
      "Uscarea. Scurgeți cartofii și uscați-i EXTREM de bine pe prosoape de hârtie sau de bucătărie. Orice urmă de apă va scădea temperatura uleiului și va face cartofii moi.",
      "Prima prăjire (Blanșarea în ulei). Încălziți uleiul la 150°C (foc mediu). Prăjiți cartofii în tranșe timp de 5-6 minute. Nu trebuie să se rumenească, ci doar să fie moi în interior și palizi la exterior. Scoateți-i pe un grătar și lăsați-i să se răcească complet (minim 20 minute).",
      "A doua prăjire (Crocănțimea). Încălziți uleiul la 190°C (foc mare). Prăjiți cartofii răciți din nou, timp de 2-3 minute, până devin aurii și foarte crocanți. Această dublă gătire este secretul restaurantelor.",
      "Servirea. Scoateți-i pe hârtie absorbantă și sărați-i imediat, cât sunt fierbinți și uleioși, pentru ca sarea să adere. Serviți instantaneu."
    ],
    nutrition: { calories: 350, protein: 4, carbs: 45, fat: 15 }
  },

  "Cartofi gratinați": {
    title: "Cartofi Gratinalți (Gratin Dauphinois)",
    servings: 6,
    servingSize: "1 porție (200g)",
    pricePerServing: 10,
    prepTime: "20 min",
    cookTime: "1 oră",
    ingredients: [
      { name: "Cartofi", amount: "1 kg" },
      { name: "Smântână lichidă (35%)", amount: "400 ml" },
      { name: "Lapte", amount: "200 ml" },
      { name: "Usturoi", amount: "2 căței" },
      { name: "Unt", amount: "30 g" },
      { name: "Nucșoară", amount: "un praf" },
      { name: "Gruyère/Cașcaval (opțional)", amount: "100 g" }
    ],
    steps: [
      "Pregătirea cartofilor. Curățați cartofii și tăiați-i în felii foarte subțiri (2-3 mm), folosind o mandolină dacă aveți. NU spălați feliile de cartofi! Amidonul natural este necesar pentru a lega sosul de smântână.",
      "Infuzarea lichidului. Într-un cratiță, amestecați laptele, smântâna, usturoiul zdrobit, nucșoara, sarea și piperul. Încălziți până aproape de punctul de fierbere.",
      "Asamblarea. Ungeți un vas de ceramică cu unt și frecați-l cu un cățel de usturoi tăiat. Așezați feliile de cartofi în straturi suprapuse (ca țiglele de pe casă).",
      "Turnarea sosului. Turnați amestecul de smântână fierbinte peste cartofi. Lichidul trebuie să ajungă aproape la nivelul cartofilor de sus. Scuturați vasul să se așeze.",
      "Coacerea. Puneți bucățele mici de unt deasupra. Dacă doriți, presărați brânză rasă (deși rețeta clasică Dauphinois nu are brânză, varianta Savoyarde are). Coaceți la 160°C timp de 50-60 minute, până când cartofii sunt foarte moi și crusta este brun-aurie.",
      "Odihna. Lăsați gratinul să se odihnească 15 minute înainte de servire. Sosul se va îngroșa și va fi mai ușor de tăiat."
    ],
    nutrition: { calories: 400, protein: 6, carbs: 35, fat: 25 }
  },

  "Orez basmati": {
    title: "Orez Basmati Pufos (Simplu)",
    servings: 4,
    servingSize: "1 bol (150g)",
    pricePerServing: 4,
    prepTime: "30 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Orez Basmati", amount: "300 g" },
      { name: "Apă", amount: "450 ml" },
      { name: "Unt/Ghee", amount: "1 lingură" },
      { name: "Sare", amount: "1 linguriță" },
      { name: "Cardamom/Anason (opțional)", amount: "1-2 buc" }
    ],
    steps: [
      "Spălarea (Esențială). Puneți orezul într-un bol și spălați-l cu apă rece, schimbând apa de 3-4 ori până când rămâne limpede. Acest pas elimină amidonul de la suprafață și previne lipirea boabelor.",
      "Înmuierea. Lăsați orezul la înmuiat în apă rece timp de 20-30 de minute. Boabele se vor lungi și se vor găti mai repede și uniform.",
      "Fierberea (Metoda absorbției). Scurgeți orezul. Puneți-l într-o oală cu fund dublu. Adăugați apa (proporție 1:1.5 orez la apă), untul, sarea și condimentele întregi dacă folosiți. Aduceți la fierbere la foc mediu.",
      "Gătirea lentă. Când apa clocotește și face 'cratere' la suprafața orezului, puneți un capac etanș și reduceți focul la MINIM absolut. Lăsați să fiarbă fix 12 minute. Nu ridicați capacul!",
      "Aburirea. Opriți focul. Lăsați oala acoperită încă 10 minute. Aburul rezidual va finaliza gătirea și va face orezul pufos.",
      "Fluffing. Deschideți capacul și afânați orezul ușor cu o furculiță, separând boabele. Serviți imediat."
    ],
    nutrition: { calories: 250, protein: 5, carbs: 55, fat: 3 }
  },

  "Orez prăjit asiatic": {
    title: "Orez Prăjit Simplu cu Ou (Garnitură)",
    servings: 4,
    servingSize: "1 bol (200g)",
    pricePerServing: 8,
    prepTime: "5 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Orez fiert (rece, de o zi)", amount: "400 g" },
      { name: "Ouă", amount: "2 buc" },
      { name: "Ceapă verde", amount: "3 fire" },
      { name: "Sos de soia", amount: "2 linguri" },
      { name: "Ulei", amount: "2 linguri" },
      { name: "Mazăre (congelată)", amount: "50 g" }
    ],
    steps: [
      "Pregătirea. Folosiți obligatoriu orez fiert răcit (ținut la frigider). Dacă e cald, se va terciui. Desfaceți cocoloașele cu mâna.",
      "Oul. Încingeți o lingură de ulei într-un wok sau tigaie largă. Bateți ouăle și turnați-le în tigaie. Amestecați rapid pentru a face jumări (scrambled eggs). Scoateți oul pe o farfurie.",
      "Prăjirea orezului. Adăugați restul de ulei în wok-ul încins. Puneți orezul rece. Prăjiți-l la foc mare, amestecând continuu, timp de 2-3 minute, până se înfierbântă și boabele se separă.",
      "Asezonarea. Adăugați mazărea (se gătește rapid) și sosul de soia. Puneți oul înapoi. Amestecați viguros ('toss') încă 1 minut. Sosul de soia trebuie să sfârâie.",
      "Finalizarea. Opriți focul. Adăugați ceapa verde tocată și puțin piper alb. Este garnitura perfectă pentru orice mâncare cu sos asiatică."
    ],
    nutrition: { calories: 300, protein: 8, carbs: 50, fat: 8 }
  },

  "Legume la grătar": {
    title: "Legume la Grătar cu Ulei de Ierburi",
    servings: 4,
    servingSize: "1 porție (200g)",
    pricePerServing: 12,
    prepTime: "15 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Dovlecel", amount: "2 buc" },
      { name: "Vinete", amount: "1 buc" },
      { name: "Ardei gras", amount: "2 buc" },
      { name: "Ciuperci", amount: "200 g" },
      { name: "Ceapă roșie", amount: "2 buc" },
      { name: "Ulei de măsline", amount: "50 ml" },
      { name: "Oțet balsamic", amount: "1 lingură" },
      { name: "Usturoi & Oregano", amount: "după gust" }
    ],
    steps: [
      "Tăierea. Tăiați dovleceii și vinetele în felii longitudinale de 1 cm sau rondele. Tăiați ardeii în sferturi mari. Tăiați ceapa în rondele groase (ținute împreună de scobitori dacă e nevoie).",
      "Marinarea rapidă. Într-un bol, amestecați uleiul, oțetul balsamic, usturoiul pisat, sarea și ierburile. Ungeți legumele cu acest amestec chiar înainte de gătire (nu cu mult înainte, ca să nu lase apă).",
      "Gătirea. Încingeți grătarul sau tigaia grill foarte bine. Așezați legumele într-un singur strat. Nu le înghesuiți.",
      "Liniile de grătar. Lăsați legumele nemișcate 3-4 minute pe fiecare parte pentru a obține acele dungi carbonizate frumoase ('grill marks') și aroma de fum. Dovleceii se fac repede, ardeii și ceapa au nevoie de mai mult timp.",
      "Servirea. Scoateți legumele pe un platou. Stropiți-le cu restul de ulei aromat sau puțină zeamă de lămâie. Sunt delicioase calde sau la temperatura camerei."
    ],
    nutrition: { calories: 150, protein: 3, carbs: 15, fat: 10 }
  },

  "Piure de cartofi": {
    title: "Piure de Cartofi Fin și Cremos",
    servings: 4,
    servingSize: "1 porție (200g)",
    pricePerServing: 6,
    prepTime: "15 min",
    cookTime: "25 min",
    ingredients: [
      { name: "Cartofi făinoși", amount: "1 kg" },
      { name: "Unt (gras 82%)", amount: "150 g (mult!)" },
      { name: "Lapte integral", amount: "200 ml" },
      { name: "Sare", amount: "după gust" },
      { name: "Nucșoară (opțional)", amount: "un praf" }
    ],
    steps: [
      "Fierberea. Curățați cartofii și tăiați-i în cuburi egale. Fierbeți-i în apă rece cu sare. Începerea cu apă rece asigură gătirea uniformă. Fierbeți 20-25 minute până sunt foarte moi.",
      "Uscarea. Scurgeți apa. Puneți cartofii înapoi în oala goală pe foc mic pentru 1 minut, scuturând oala, pentru a evapora umiditatea reziduală. Cartofii uscați absorb mai bine untul.",
      "Zdrobirea. Treceți cartofii fierbinți printr-o presă de cartofi (ricer) sau o sită fină. Nu folosiți mixerul sau blenderul, deoarece piureul va deveni elastic și lipicios ca un lipici!",
      "Încorporarea untului. Adăugați untul tăiat cubulețe, rece, în cartofii fierbinți. Amestecați energic cu o lingură de lemn. Emulsia dintre untul rece și amidonul fierbinte creează cremozitatea.",
      "Adăugarea laptelui. Încălziți laptele separat (să fie fierbinte). Turnați-l treptat în piure, amestecând cu telul până ajungeți la consistența dorită. Asezonați cu sare și nucșoară. Serviți imediat."
    ],
    nutrition: { calories: 450, protein: 5, carbs: 40, fat: 30 }
  },

  "Couscous": {
    title: "Couscous Simplu cu Unt și Pătrunjel",
    servings: 4,
    servingSize: "1 bol (150g)",
    pricePerServing: 5,
    prepTime: "5 min",
    cookTime: "5 min",
    ingredients: [
      { name: "Couscous", amount: "250 g" },
      { name: "Apă/Supă fierbinte", amount: "300 ml" },
      { name: "Unt", amount: "30 g" },
      { name: "Ulei de măsline", amount: "1 lingură" },
      { name: "Sare", amount: "1 linguriță" },
      { name: "Pătrunjel/Mentă", amount: "tocat" }
    ],
    steps: [
      "Pregătirea uscată. Puneți couscous-ul într-un bol termorezistent. Adăugați uleiul de măsline și frecați boabele cu furculița sau mâna, astfel încât fiecare bob să fie peliculizat cu ulei. Acest pas previne cocoloașele.",
      "Hidratarea. Aduceți apa sau supa la fierbere cu sarea. Turnați lichidul clocotit peste couscous. Nivelul lichidului ar trebui să fie cu 1 cm peste couscous.",
      "Aburirea. Acoperiți imediat bolul ermetic cu folie de plastic sau un capac/farfurie. Lăsați să stea nemișcat 5-10 minute. Couscous-ul se va găti în aburul propriu.",
      "Afânarea (Fluffing). Îndepărtați folia. Adăugați untul cubulețe. Folosind o furculiță, 'greblați' couscous-ul pentru a separa boabele și a incorpora untul topit. Nu amestecați circular, ci zgâriați suprafața.",
      "Servirea. Adăugați pătrunjelul tocat și serviți. Este garnitura ideală pentru tocanite cu sos."
    ],
    nutrition: { calories: 300, protein: 10, carbs: 60, fat: 8 }
  },

  "Cartofi wedges": {
    title: "Cartofi Wedges la Cuptor (Condimentați)",
    servings: 4,
    servingSize: "1 porție (150g)",
    pricePerServing: 6,
    prepTime: "10 min",
    cookTime: "35 min",
    ingredients: [
      { name: "Cartofi roșii/albi", amount: "1 kg" },
      { name: "Ulei", amount: "3 linguri" },
      { name: "Boia dulce/afumată", amount: "1 lingură" },
      { name: "Usturoi granulat", amount: "1 linguriță" },
      { name: "Oregano/Cimbru", amount: "1 linguriță" },
      { name: "Sare & Piper", amount: "după gust" },
      { name: "Parmezan (opțional)", amount: "2 linguri" }
    ],
    steps: [
      "Tăierea. Spălați cartofii foarte bine (nu îi curățați de coajă, e partea cea mai bună). Tăiați fiecare cartof în jumătate pe lungime, apoi fiecare jumătate în 3-4 felii (wedges/semiluni).",
      "Condimentarea. Puneți cartofii într-un bol mare. Turnați uleiul și toate condimentele. Amestecați bine cu mâinile până când fiecare felie este acoperită de un strat roșiatic de ulei condimentat.",
      "Aranjarea. Așezați cartofii pe o tavă tapetată cu hârtie de copt. Important: așezați-i într-un singur strat, cu spațiu între ei și, ideal, cu o latură tăiată în jos (nu pe coajă). Acest contact cu tava asigură rumenirea.",
      "Coacerea. Coaceți la 200°C (cu ventilator dacă aveți) timp de 20 de minute. Scoateți tava, întoarceți cartofii pe cealaltă latură tăiată și mai coaceți 15-20 de minute.",
      "Servirea. Cartofii trebuie să fie crocanți și maronii la exterior și moi în interior. Presărați parmezan sau pătrunjel la ieșirea din cuptor."
    ],
    nutrition: { calories: 300, protein: 5, carbs: 45, fat: 10 }
  },

  "Varză călită": {
    title: "Varză Călită (Garnitură)",
    servings: 4,
    servingSize: "1 porție (200g)",
    pricePerServing: 5,
    prepTime: "15 min",
    cookTime: "40 min",
    ingredients: [
      { name: "Varză albă/roșie", amount: "1 căpățână mică" },
      { name: "Ceapă", amount: "1 mare" },
      { name: "Ulei", amount: "3 linguri" },
      { name: "Oțet/Lămâie", amount: "1 lingură" },
      { name: "Chimen semințe", amount: "1 linguriță" },
      { name: "Sare & Piper", amount: "generos" },
      { name: "Mărar", amount: "1 legătură" }
    ],
    steps: [
      "Tăierea și sărarea. Tocați varza fideluță (fâșii subțiri), eliminând cotorul dur. Puneți varza într-un bol mare, presărați o linguriță de sare peste ea și frământați-o puțin cu mâna. Lăsați-o 10 minute să se înmoaie.",
      "Călirea cepei. Încingeți uleiul într-o cratiță largă și adâncă. Adăugați ceapa tocată mărunt și căliți-o la foc mediu până devine aurie și sticloasă.",
      "Condimentele de bază. Adăugați semințele de chimen (esențiale pentru digestie și aromă) și piperul proaspăt măcinat peste ceapă. Căliți 30 de secunde pentru a elibera uleiurile volatile.",
      "Gătirea verzei. Adăugați varza stoarsă ușor de apa lăsată. Amestecați bine. Căliți la foc mediu, amestecând des, fără capac la început, pentru a prăji varza, nu a o fierbe.",
      "Caramelizarea. Continuați gătirea timp de 20-30 de minute. Varza va scădea mult în volum și va începe să se rumenească pe alocuri. Dacă se prinde de fund, adăugați doar o lingură de apă.",
      "Finalizarea acidă. Când varza este gătită după gustul vostru (mai crocantă sau mai moale), adăugați oțetul sau zeama de lămâie și mărarul tocat proaspăt. Aciditatea echilibrează dulceața verzei. Gustați de sare și serviți."
    ],
    nutrition: { calories: 150, protein: 3, carbs: 15, fat: 8, fiber: 6 }
  },

  "Fasole verde sote": {
    title: "Fasole Verde Sote cu Usturoi",
    servings: 4,
    servingSize: "1 porție (150g)",
    pricePerServing: 8,
    prepTime: "10 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Fasole verde păstăi", amount: "500 g" },
      { name: "Unt", amount: "30 g" },
      { name: "Usturoi", amount: "3 căței" },
      { name: "Sare de mare", amount: "după gust" },
      { name: "Migdale/Nuci (opțional)", amount: "o mână" }
    ],
    steps: [
      "Pregătirea fasolei. Alegeți fasole verde proaspătă, fără ațe. Spălați-o și tăiați capetele. Dacă păstăile sunt foarte lungi, le puteți tăia în jumătate.",
      "Blanșarea (Opărirea). Puneți o oală cu apă și sare la fiert. Când clocotește, aruncați fasolea în apă. Fierbeți 4-5 minute până e 'al dente' (încă crocantă, nu moale).",
      "Șocul termic. Scoateți fasolea imediat într-un bol cu apă și gheață. Acest pas oprește gătirea instantaneu și păstrează culoarea verde vibrantă și textura crocantă. Scurgeți bine.",
      "Sotarea. Încingeți untul (și puțin ulei de măsline să nu se ardă untul) într-o tigaie mare. Când face spumă, adăugați fasolea scursă bine. Amestecați la foc iute 2-3 minute să se încălzească.",
      "Aromatizarea. Adăugați usturoiul tăiat felii subțiri sau zdrobit. Mai gătiți 1 minut, amestecând continuu, având grijă să nu ardeți usturoiul (devine amar). Asezonați cu sare de mare și piper proaspăt.",
      "Finisarea. Opriți focul. Stropiți cu puțină zeamă de lămâie pentru prospețime. Opțional, adăugați fulgi de migdale prăjiți sau parmezan ras. Serviți imediat ca garnitură."
    ],
    nutrition: { calories: 120, protein: 4, carbs: 10, fat: 7, fiber: 4 }
  }
};
