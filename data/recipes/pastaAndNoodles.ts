
import { Recipe } from '../../types';

export const PASTA_AND_NOODLES_RECIPES: Record<string, Recipe> = {
  "Fettuccine Alfredo": {
    title: "Fettuccine Alfredo (Rețeta Originală Romană)",
    servings: 4,
    servingSize: "1 porție (300g)",
    pricePerServing: 18,
    prepTime: "10 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Fettuccine (paste cu ou)", amount: "500 g" },
      { name: "Unt nesărat (gras)", amount: "100 g" },
      { name: "Parmigiano Reggiano (ras fin)", amount: "150 g" },
      { name: "Apă de la paste", amount: "100 ml" },
      { name: "Sare", amount: "pentru apă" },
      { name: "Piper alb (opțional)", amount: "un praf" }
    ],
    steps: [
      "Fierberea pastelor: Puneți o oală mare cu apă la fiert. Când clocotește, sărați apa, dar nu excesiv (parmezanul e sărat). Adăugați pastele (Fettuccine) și fierbeți-le 'al dente'.",
      "Reținerea apei: Foarte important: înainte de a scurge pastele, păstrați o cană mare (250ml) din apa în care au fiert. Această apă plină de amidon este ingredientul magic care leagă sosul.",
      "Pregătirea ingredientelor: În timp ce pastele fierb, tăiați untul în cubulețe mici pentru a se topi rapid. Radeți parmezanul extrem de fin (ca o pudră) pentru a evita cocoloașele.",
      "Baza în tigaie: Puneți untul și o jumătate de polonic de apă fierbinte de la paste într-o tigaie largă sau bol încălzit. Lăsați untul să se topească ușor.",
      "Mantecare (Emulsionarea): Transferați pastele fierbinți direct peste unt. Începeți să amestecați energic cu un clește, presărând parmezanul ras treptat, în ploaie, peste paste.",
      "Obținerea cremei: Continuați mișcarea rapidă și continuă. Căldura pastelor topește untul și brânza, iar apa cu amidon le transformă într-o cremă albă, densă și lucioasă. Dacă e prea uscat, mai adăugați puțină apă. Serviți imediat cu piper alb."
    ],
    nutrition: { calories: 600, protein: 20, carbs: 65, fat: 30, sodium: 800 }
  },

  "Penne Arrabbiata": {
    title: "Penne all'Arrabbiata (Paste Picante)",
    servings: 4,
    servingSize: "1 porție (300g)",
    pricePerServing: 15,
    prepTime: "10 min",
    cookTime: "20 min",
    ingredients: [
      { name: "Penne Rigate", amount: "400 g" },
      { name: "Roșii decojite (San Marzano)", amount: "800 g (2 conserve)" },
      { name: "Usturoi", amount: "3 căței" },
      { name: "Ardei iute roșu (Peperoncino)", amount: "2 buc (sau fulgi)" },
      { name: "Ulei de măsline", amount: "4 linguri" },
      { name: "Pătrunjel proaspăt", amount: "1 legătură" },
      { name: "Pecorino Romano (opțional)", amount: "50 g" }
    ],
    steps: [
      "Pregătirea aromelor: Tăiați usturoiul în felii subțiri și ardeiul iute (peperoncino) în rondele. Dacă folosiți fulgi, pregătiți-i. Tocați pătrunjelul proaspăt.",
      "Infuzarea uleiului: Într-o tigaie largă, puneți uleiul de măsline, usturoiul și ardeiul iute. Porniți focul la mic. Lăsați să se încingă treptat pentru a infuza uleiul fără a arde usturoiul.",
      "Sosul de roșii: Când usturoiul este ușor auriu, adăugați roșiile din conservă (zdrobite). Măriți focul la mediu. Asezonați cu sare.",
      "Reducerea sosului: Lăsați sosul să fiarbă la foc mediu timp de 15-20 de minute, amestecând ocazional, până când scade și uleiul începe să se separe de roșii la suprafață. Sosul trebuie să fie concentrat.",
      "Fierberea pastelor: Între timp, fierbeți pastele Penne în apă sărată. Scurgeți-le când sunt foarte 'al dente' (cu 2-3 minute înainte de timpul de pe pachet), păstrând o cană de apă.",
      "Saltare (Gătirea în sos): Transferați pastele scurse direct în tigaia cu sos. Adăugați un polonic mic de apă de la paste. Gătiți pastele în sos la foc iute timp de 2 minute, amestecând continuu, până când pastele sunt gata și sosul le îmbracă perfect. Adăugați pătrunjelul la final."
    ],
    nutrition: { calories: 400, protein: 12, carbs: 70, fat: 10, sodium: 600 }
  },

  "Udon cu legume": {
    title: "Yaki Udon (Tăiței Groși Stir-Fry)",
    servings: 2,
    servingSize: "1 bol (350g)",
    pricePerServing: 22,
    prepTime: "20 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Tăiței Udon (proaspeți/congelați)", amount: "400 g" },
      { name: "Varză albă", amount: "150 g" },
      { name: "Morcov", amount: "1 buc" },
      { name: "Ceapă", amount: "1 mică" },
      { name: "Ciuperci Shiitake", amount: "3-4 buc" },
      { name: "Ceapă verde", amount: "2 fire" },
      { name: "Sos de soia", amount: "2 linguri" },
      { name: "Mirin (vin de orez)", amount: "2 linguri" },
      { name: "Ulei de susan", amount: "1 linguriță" },
      { name: "Fulgi Bonito (opțional)", amount: "decor" }
    ],
    steps: [
      "Pregătirea tăițeilor: Dacă folosiți Udon congelat, fierbeți-l 1 minut în apă clocotită doar cât să se desfacă, apoi clătiți cu apă rece și scurgeți. Dacă folosiți uscat, fierbeți conform pachetului. Tăițeii trebuie să fie gata de pus în wok.",
      "Pregătirea sosului: Într-un bol mic, amestecați sosul de soia, mirinul (sau vin alb dulce), zahărul și puțin dashi pudră (opțional). Asigurați-vă că zahărul este dizolvat.",
      "Pregătirea legumelor: Tăiați varza în pătrate de 3cm, morcovul în bastonașe subțiri, ceapa felii și ciupercile felii. Ceapa verde se taie bucăți de 3 cm.",
      "Călirea aromelor: Încingeți ulei într-un wok sau tigaie largă. Adăugați ceapa și ciupercile, căliți 2 minute până se rumenesc ușor.",
      "Gătirea legumelor: Adăugați morcovul și varza. Gătiți la foc iute timp de 2-3 minute, amestecând continuu. Legumele trebuie să se înmoaie puțin dar să rămână crocante ('crisp-tender').",
      "Combinarea finală: Puneți tăițeii Udon peste legume. Turnați sosul preparat deasupra. Amestecați cu cleștele sau bețișoarele, separând tăițeii, până când sosul este absorbit și tăițeii sunt lucioși. Opriți focul, adăugați ceapa verde și uleiul de susan."
    ],
    nutrition: { calories: 450, protein: 12, carbs: 80, fat: 10, sodium: 1100 }
  },

  "Yakisoba": {
    title: "Yakisoba (Tăiței Japonezi Prăjiți)",
    servings: 2,
    servingSize: "1 porție (300g)",
    pricePerServing: 20,
    prepTime: "20 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Tăiței Yakisoba (cu ou)", amount: "300 g" },
      { name: "Pulpă de porc (feliată subțire)", amount: "150 g" },
      { name: "Varză", amount: "200 g" },
      { name: "Ceapă", amount: "1/2 buc" },
      { name: "Morcov", amount: "1/2 buc" },
      { name: "Sos Yakisoba", amount: "4 linguri" },
      { name: "Ghimbir murat (Beni Shoga)", amount: "decor" },
      { name: "Aonori (alge pudră)", amount: "un praf" }
    ],
    steps: [
      "Sosul Yakisoba. Puteți cumpăra sosul gata făcut sau îl puteți face acasă amestecând: 2 linguri sos Worcestershire, 1 lingură sos de stridii, 1 lingură ketchup, 1 lingură sos de soia și 1 linguriță zahăr. Gustul trebuie să fie dulce-sărat-acrișor și fructat.",
      
      "Pregătirea ingredientelor. Tăiați carnea de porc în fâșii mici. Tăiați varza în pătrate, ceapa felii și morcovul julienne. Dacă tăițeii sunt lipiți (din pachet vidat), clătiți-i scurt sub apă caldă să se desfacă.",
      
      "Prăjirea cărnii. Încingeți o plită (Teppan) sau o tigaie mare. Prăjiți carnea de porc până este rumenită și crocantă. Adăugați ceapa și morcovul, gătiți 2 minute.\n\nAdăugați varza în cantitate mare (ea va scădea mult). Gătiți până varza e moale.",
      
      "Aburirea tăițeilor. Adăugați tăițeii peste legume. Turnați puțină apă (50ml) și acoperiți rapid cu un capac pentru 1 minut. Aburul va găti și afâna tăițeii.",
      
      "Caramelizarea. Scoateți capacul. Când apa s-a evaporat, adăugați sosul Yakisoba. Amestecați viguros folosind două spatule.\n\nÎntindeți tăițeii pe toată suprafața tigăii și lăsați-i nemișcați 30 de secunde să se prăjească și să devină ușor crocanți la bază.",
      
      "Servirea. Puneți pe farfurie. Yakisoba clasică se servește cu pudră de alge verzi (Aonori) presărată deasupra și o grămăjoară de ghimbir murat roșu (Beni Shoga) pentru a tăia din grăsime."
    ],
    nutrition: { calories: 500, protein: 20, carbs: 65, fat: 22, sodium: 1300 }
  }
};
