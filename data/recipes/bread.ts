
import { Recipe } from '../../types';

export const BREAD_RECIPES: Record<string, Recipe> = {
  "Pâine integrală": {
    title: "Pâine Integrală cu Maia/Drojdie (Artizanală)",
    servings: 1, // 1 pâine
    servingSize: "1 felie (50g)",
    pricePerServing: 2,
    prepTime: "30 min (+dospire)",
    cookTime: "45 min",
    ingredients: [
      { name: "Făină integrală", amount: "400 g" },
      { name: "Făină albă de forță (650)", amount: "100 g" },
      { name: "Apă călduță", amount: "350-380 ml" },
      { name: "Sare", amount: "10 g" },
      { name: "Drojdie uscată (sau maia activă)", amount: "7 g (sau 150g maia)" },
      { name: "Semințe (in, floarea soarelui)", amount: "opțional" }
    ],
    steps: [
      "Autoliza (Hidratarea). Într-un bol mare, amestecați cele două tipuri de făină cu apa (păstrând 20ml deoparte). Amestecați doar până nu mai există făină uscată. Acoperiți și lăsați 30-60 de minute. Făina integrală are nevoie de timp pentru a absorbi apa și a înmuia tărâțele, ceea ce va ajuta la dezvoltarea glutenului.",
      "Frământarea. Adăugați drojdia (dizolvată în apa păstrată) sau maiaua activă și sarea. Frământați aluatul timp de 10-12 minute. Aluatul integral va fi mai lipicios și mai dens decât cel alb. Nu adăugați făină suplimentară excesiv; hidratarea e cheia pentru un miez moale.",
      "Dospirea în bloc. Ungeți un bol cu puțin ulei, puneți aluatul și acoperiți-l. Lăsați-l la dospit într-un loc cald timp de 2-3 ore. La fiecare 45 de minute, faceți o serie de 'împăturiri' (stretch and fold): trageți de o latură a aluatului și aduceți-o peste centru. Aceasta întărește structura.",
      "Formarea. Răsturnați aluatul pe blat. Modelați-l ușor într-o formă rotundă (boule) sau ovală (batard), creând tensiune la suprafață trăgând aluatul spre voi. Dacă doriți, tăvăliți suprafața prin semințe.",
      "Dospirea finală. Puneți pâinea într-un coș de dospire (banneton) pudrat cu făină sau într-un bol cu un prosop înfăinat. Lăsați să crească încă 1 oră la temperatura camerei (sau peste noapte la frigider pentru gust mai complex).",
      "Coacerea. Încălziți cuptorul la 240°C cu o oală de fontă (Dutch Oven) înăuntru. Răsturnați pâinea pe o hârtie de copt, crestați-o adânc cu o lamă. Puneți-o în oala fierbinte, puneți capacul și coaceți 20 de minute. Scoateți capacul, reduceți la 220°C și mai coaceți 20-25 de minute până e brun-închisă și sună a gol."
    ],
    nutrition: { calories: 250, protein: 10, carbs: 45, fat: 2, fiber: 6 }
  },

  "Ciabatta": {
    title: "Ciabatta (Pâinea Italiană 'Papuc')",
    servings: 4,
    servingSize: "1 bucată (100g)",
    pricePerServing: 3,
    prepTime: "20 min (+lungă dospire)",
    cookTime: "25 min",
    ingredients: [
      { name: "Făină cu gluten ridicat", amount: "500 g" },
      { name: "Apă (hidratare 80%)", amount: "400 ml" },
      { name: "Drojdie uscată", amount: "5 g" },
      { name: "Sare", amount: "10 g" },
      { name: "Ulei de măsline", amount: "2 linguri" }
    ],
    steps: [
      "Aluatul foarte hidratat. Ciabatta necesită un aluat aproape lichid. Într-un bol mare (sau mixer), amestecați făina, drojdia și 90% din apă. Când s-a omogenizat, adăugați sarea și restul de apă. Mixați la viteză mare timp de 10-15 minute. Aluatul se va desprinde de pereții vasului și va deveni extrem de elastic și lucios, deși foarte moale.",
      "Dospirea în vas. Ungeți generos un container dreptunghiular mare cu ulei de măsline. Turnați aluatul în el. Acoperiți. Lăsați la dospit 45 de minute.",
      "Împăturirea (Coil Folds). Cu mâinile ude, ridicați aluatul de la mijloc și lăsați capetele să se plieze dedesubt. Rotiți vasul și repetați. Aceasta captează aerul. Repetați acest pas de încă 2 ori la intervale de 30 de minute.",
      "Divizarea. Presărați FOARTE multă făină pe blatul de lucru. Răsturnați cu grijă aluatul dospit (care arată ca o pernă de aer). Nu îl presați! Pudrați și deasupra cu făină.",
      "Formarea. Tăiați aluatul în 3-4 fâșii dreptunghiulare (forma de papuc) folosind o racletă. Depărtați-le ușor una de alta. Transferați-le cu grijă pe o hârtie de copt (folosind racleta sau o placă), încercând să nu scoateți gazele.",
      "Coacerea. Cuptorul trebuie să fie maxim (250°C), ideal cu piatră de copt. Glisați hârtia cu ciabatta pe piatră. Coaceți cu abur (o tavă cu apă jos) timp de 10 minute, apoi fără abur încă 10-15 minute până devin aurii-închis. Miezul trebuie să aibă găuri mari neregulate."
    ],
    nutrition: { calories: 230, protein: 8, carbs: 48, fat: 1 }
  },

  "Pita": {
    title: "Pita Bread (Lipie cu Buzunar)",
    servings: 8,
    servingSize: "1 bucată (80g)",
    pricePerServing: 2,
    prepTime: "20 min (+1h dospire)",
    cookTime: "5 min",
    ingredients: [
      { name: "Făină", amount: "500 g" },
      { name: "Apă călduță", amount: "300 ml" },
      { name: "Drojdie uscată", amount: "7 g" },
      { name: "Ulei de măsline", amount: "2 linguri" },
      { name: "Sare & Zahăr", amount: "câte 1 linguriță" }
    ],
    steps: [
      "Aluatul simplu. Activați drojdia cu apă și zahăr. Amestecați cu făina, sarea și uleiul. Frământați un aluat neted și elastic (cca 8-10 minute). Lăsați la dospit 1 oră până își dublează volumul.",
      "Divizarea și bila. Împărțiți aluatul în 8 bile egale. Modelați-le perfect rotunde, cu suprafața tensionată. Acoperiți-le cu un prosop umed și lăsați-le să se odihnească 20 de minute. Această relaxare este critică pentru a se umfla.",
      "Întinderea. Preîncălziți cuptorul la maxim (250°C) cu tava înăuntru să se încingă bine. Luați o bilă și întindeți-o într-un disc de 15-18 cm diametru și 5mm grosime. Grosimea trebuie să fie uniformă.",
      "Coacerea șoc. Puneți 2-3 discuri direct pe tava încinsă (sau piatră) din cuptor. Închideți ușa repede.\n\nÎn aproximativ 2-3 minute, apa din aluat se va transforma în abur și, neavând unde să iasă, va umfla lipia ca pe un balon, creând buzunarul.",
      "Răcirea. Lăsați să se mai coacă 1-2 minute să prindă puțină culoare (nu prea mult, să nu se usuce). Scoateți-le imediat și stivuiți-le sub un prosop de pânză. Aburul le va menține moi."
    ],
    nutrition: { calories: 180, protein: 6, carbs: 35, fat: 2 }
  },

  "Covrigi bavarezi (pretzel)": {
    title: "Covrigi Bavarezi (Laugenbrezel)",
    servings: 8,
    servingSize: "1 covrig (100g)",
    pricePerServing: 3,
    prepTime: "45 min (+dospire)",
    cookTime: "15 min",
    ingredients: [
      { name: "Făină", amount: "500 g" },
      { name: "Apă", amount: "280 ml" },
      { name: "Unt moale", amount: "40 g" },
      { name: "Drojdie", amount: "7 g" },
      { name: "Sare fină", amount: "10 g" },
      { name: "Bicarbonat de sodiu", amount: "3 linguri (pt baie)" },
      { name: "Sare grunjoasă", amount: "topping" }
    ],
    steps: [
      "Aluatul ferm. Amestecați făina, apa, drojdia și untul. Frământați un aluat destul de tare și nelipicios. Adăugați sarea la final. Frământați 10 minute. Lăsați la dospit doar 30-45 minute (nu trebuie să fie prea aerat).",
      "Modelarea. Împărțiți în 8 bucăți. Rulați fiecare bucată într-un șnur lung de 50-60 cm, mai gros la mijloc (burtica) și foarte subțire la capete.\n\nFormați litera U, răsuciți capetele de două ori unul peste altul, apoi aduceți-le în jos și presați-le peste 'burtică' (ora 4 și ora 8).",
      "Refrigerarea (Pielea). Puneți covrigii formați pe o tavă, neacoperiți, și băgați-i la frigider 30-60 minute. Aceasta formează o 'piele' uscată care ajută la obținerea texturii și luciului.",
      "Baia alcalină. Puneți 2L de apă la fiert. Când clocotește, adăugați bicarbonatul de sodiu (cu grijă, spumează!). Reduceți focul.\n\nScufundați fiecare covrig rece în soluția fierbinte timp de 30 de secunde. Scoateți-i cu o spumieră pe tava de copt.",
      "Coacerea. Crestați partea groasă a covrigului orizontal cu o lamă. Presărați sare grunjoasă doar pe partea groasă.\n\nCoaceți la 220°C timp de 12-15 minute până au o culoare brun-mahonie intensă. Gustul specific vine din reacția Maillard accelerată de bicarbonat."
    ],
    nutrition: { calories: 250, protein: 7, carbs: 48, fat: 4, sodium: 1200 }
  },

  "Chifle brioche": {
    title: "Chifle Brioche pentru Burgeri",
    servings: 8,
    servingSize: "1 chiflă (80g)",
    pricePerServing: 4,
    prepTime: "40 min (+dospire lentă)",
    cookTime: "15 min",
    ingredients: [
      { name: "Făină superioară", amount: "500 g" },
      { name: "Lapte călduț", amount: "200 ml" },
      { name: "Ouă", amount: "2 + 1 (uns)" },
      { name: "Unt gras (82%)", amount: "100 g (temp camerei)" },
      { name: "Zahăr", amount: "40 g" },
      { name: "Drojdie", amount: "7 g" },
      { name: "Sare", amount: "10 g" }
    ],
    steps: [
      "Aluatul. Dizolvați drojdia și zahărul în lapte. Într-un bol, puneți făina, sarea, ouăle și laptele. Frământați până se formează un aluat omogen (cca 5-8 minute).",
      "Încorporarea untului. Începeți să adăugați untul moale, cubuleț cu cubuleț, frământând continuu. Nu adăugați următorul cub până cel anterior nu e absorbit.\n\nContinuați să frământați 10-15 minute după ce tot untul e pus, până aluatul trece 'testul ferestrei' (se întinde subțire fără să se rupă). Va fi moale și lucios.",
      "Dospirea. Lăsați 1 oră la temperatura camerei, apoi (recomandat) peste noapte la frigider. Aluatul rece se modelează mult mai ușor.",
      "Formarea bilelor. Împărțiți aluatul rece în 8 bucăți (cca 100g). Modelați bile perfecte rotind aluatul pe masă sub palmă. Aplatizați-le ușor pe tavă (ca să nu iasă sferice, ci plate pentru burger).",
      "Dospirea finală. Lăsați-le acoperite la loc cald 1-2 ore, până sunt foarte pufoase și tremură la atingere. Ungeți-le delicat cu ou bătut și presărați susan.",
      "Coacerea. Coaceți la 190°C timp de 15-18 minute până sunt aurii-închis. Lăsați să se răcească pe grătar."
    ],
    nutrition: { calories: 350, protein: 8, carbs: 45, fat: 15, sugar: 8 }
  },

  "Cornuri cu unt": {
    title: "Cornuri Pufoase de Casă (Stil Bunică)",
    servings: 12,
    servingSize: "1 corn (60g)",
    pricePerServing: 2,
    prepTime: "30 min (+dospire)",
    cookTime: "20 min",
    ingredients: [
      { name: "Făină", amount: "600 g" },
      { name: "Lapte", amount: "250 ml" },
      { name: "Iaurt", amount: "2 linguri" },
      { name: "Ulei", amount: "50 ml" },
      { name: "Ouă", amount: "2 (1 aluat, 1 uns)" },
      { name: "Drojdie", amount: "25g proaspătă" },
      { name: "Zahăr", amount: "4 linguri" },
      { name: "Unt topit", amount: "50 g (pt uns foile)" },
      { name: "Rahat/Nucă/Gem", amount: "umplutură" }
    ],
    steps: [
      "Maiaua: Amestecați drojdia cu puțin lapte cald, o lingură de zahăr și puțină făină. Lăsați 10 minute să se activeze.",
      "Aluatul: Într-un bol mare, amestecați restul ingredientelor cu maiaua activată. Frământați un aluat elastic și nelipicios. Lăsați la dospit 1 oră.",
      "Împărțirea: Împărțiți aluatul în 2 bile mari. Întindeți fiecare bilă într-un cerc subțire pe masa înfăinată. Ungeți suprafața cu unt topit.",
      "Formarea: Tăiați cercul în 8-12 triunghiuri (raze). Puneți umplutura (dacă folosiți) la baza fiecărui triunghi.",
      "Rularea: Rulați strâns de la bază spre vârf, trăgând puțin de vârf pentru a avea mai multe straturi. Îndoiți colțurile spre interior (formă de potcoavă).",
      "A doua dospire și coacerea: Așezați cornurile în tavă și mai lăsați 20 min la crescut. Ungeți cu ou bătut și coaceți la 180°C timp de 20-25 minute până sunt rumene."
    ],
    nutrition: { calories: 280, protein: 6, carbs: 40, fat: 10, sugar: 12 }
  },

  "Bagel": {
    title: "Bagels New York Style (Fierți și Copți)",
    servings: 6,
    servingSize: "1 bagel (100g)",
    pricePerServing: 3,
    prepTime: "30 min (+dospire)",
    cookTime: "20 min",
    ingredients: [
      { name: "Făină de forță", amount: "500 g" },
      { name: "Apă", amount: "280 ml" },
      { name: "Drojdie", amount: "7 g" },
      { name: "Zahăr/Miere", amount: "2 linguri" },
      { name: "Sare", amount: "10 g" },
      { name: "Melasă/Malț", amount: "1 lingură (pt fiert)" },
      { name: "Topping", amount: "Susan, Mac, Sare" }
    ],
    steps: [
      "Aluatul: Amestecați făina cu sarea, zahărul și drojdia activată în apă. Frământați un aluat foarte ferm timp de 10-15 minute. Aluatul de bagel trebuie să fie tare.",
      "Dospirea: Lăsați aluatul la crescut 1 oră. Apoi, împărțiți-l în 6-8 bile egale.",
      "Formarea: Faceți o gaură în mijlocul fiecărei bile cu degetul și rotiți aluatul pentru a lărgi inelul la 3-4 cm diametru.",
      "Odihna scurtă: Lăsați inelele formate să se odihnească 20 de minute pe tavă.",
      "Fierberea (Boiling): Puneți o oală mare cu apă și melasă/miere la fiert. Când clocotește, fierbeți covrigii câte 1 minut pe fiecare parte. Acest pas le dă coaja specifică.",
      "Topping-ul: Scoateți covrigii uzi pe tavă. Imediat presărați susan, mac sau sare (se vor lipi de aluatul umed).",
      "Coacerea: Coaceți la 220°C timp de 20 de minute până devin aurii-închis și lucioși."
    ],
    nutrition: { calories: 300, protein: 10, carbs: 60, fat: 1, sodium: 400 }
  },

  "Paratha indiană": {
    title: "Paratha (Lipie Stratificată)",
    servings: 6,
    servingSize: "1 lipie (80g)",
    pricePerServing: 2,
    prepTime: "30 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Făină integrală fină (Atta)", amount: "300 g" },
      { name: "Apă călduță", amount: "150-180 ml" },
      { name: "Ghee (Unt clarifiat)", amount: "50 g" },
      { name: "Sare", amount: "1 linguriță" }
    ],
    steps: [
      "Aluatul. Amestecați făina cu sarea și apa. Frământați un aluat moale și neted. Lăsați-l să se odihnească 20 de minute (esențial pentru întindere).",
      "Tehnica de stratificare. Împărțiți aluatul în 6 bile. Luați o bilă și întindeți-o într-un disc subțire. Ungeți toată suprafața cu Ghee și presărați puțină făină.\n\nÎncepeți să pliați discul ca pe un evantai (acordeon), făcând pliuri mici. Veți obține o bandă lungă și creață.",
      "Spirala. Rulați banda evantai în formă de spirală (ca un melc), ascunzând capătul dedesubt. Aplatizați melcul cu palma.",
      "Întinderea finală. Pudrați cu făină și întindeți spirala din nou într-un disc subțire. Straturile de unt și făină sunt acum prinse în interior.",
      "Coacerea. Încălziți o tigaie de fontă (Tawa). Puneți Paratha. Când apar bule, întoarceți-o. Ungeți partea coaptă cu puțin Ghee. Întoarceți din nou și ungeți și cealaltă parte.\n\nPrăjiți până e aurie cu pete maronii. Strângeți pâinea în pumn ('clap') când o scoateți pentru a separa straturile crocante."
    ],
    nutrition: { calories: 200, protein: 5, carbs: 35, fat: 8 }
  },

  "Tortilla": {
    title: "Tortilla de Făină (De Casă)",
    servings: 8,
    servingSize: "2 tortillas (60g)",
    pricePerServing: 1,
    prepTime: "20 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Făină albă", amount: "350 g" },
      { name: "Apă fierbinte", amount: "200 ml" },
      { name: "Untură sau Ulei", amount: "50 g" },
      { name: "Sare", amount: "1 linguriță" },
      { name: "Praf de copt", amount: "1/2 linguriță" }
    ],
    steps: [
      "Amestecarea. Amestecați făina, sarea și praful de copt. Adăugați grăsimea (untura solidă sau uleiul) și frecați cu degetele până devine nisipos.",
      "Apa fierbinte. Turnați apa fierbinte (nu clocotită, dar caldă bine). Amestecați cu o lingură, apoi frământați cu mâna când temperatura permite.\n\nApa fierbinte gelatinizează amidonul, făcând tortillas moi și flexibile.",
      "Odihna. Frământați 2-3 minute până e neted. Împărțiți în 8-10 bile. Acoperiți-le cu un prosop umed și lăsați 20-30 de minute. Fără odihnă, aluatul se va strânge când îl întindeți (elasticitate).",
      "Întinderea. Pe blatul ușor înfăinat, întindeți fiecare bilă într-un cerc foarte subțire, aproape transparent.",
      "Coacerea. Încingeți o tigaie uscată (fără ulei) la foc mediu-mare. Puneți tortilla. În 30-45 de secunde vor apărea bule mari. Întoarceți-o. Mai lăsați 30 secunde până are pete maronii.\n\nScoateți-o imediat și puneți-o într-un prosop gros pentru a se păstra moale prin aburire. Dacă o gătiți prea mult, devine chips."
    ],
    nutrition: { calories: 150, protein: 4, carbs: 25, fat: 5 }
  }
};
