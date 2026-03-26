
import { Recipe } from '../../types';

export const ITALIAN_RECIPES: Record<string, Recipe> = {
  "Pizza Margherita": {
    title: "Pizza Margherita Autentică (Napoletana)",
    servings: 2,
    servingSize: "1 pizza (30cm)",
    pricePerServing: 15,
    prepTime: "20 min (+24h dospire)",
    cookTime: "10 min",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ingredients: [
      { name: "Făină tip 00 (W260-300)", amount: "500 g" },
      { name: "Apă rece", amount: "325 ml" },
      { name: "Drojdie proaspătă", amount: "3 g" },
      { name: "Sare de mare", amount: "15 g" },
      { name: "Mozzarella di Bufala / Fior di Latte", amount: "250 g" },
      { name: "Roșii San Marzano (conservă)", amount: "400 g" },
      { name: "Busuioc proaspăt", amount: "1 legătură" },
      { name: "Ulei de măsline extravirgin", amount: "2 linguri" }
    ],
    steps: [
      "Secretul unei pizza napoletane veritabile stă în hidratare și dospire lentă. Într-un bol mare, dizolvați sarea în apă rece (nu călduță!), apoi adăugați 10% din făină și amestecați pentru a crea o bază lichidă. Abia acum adăugați drojdia sfărâmată; sarea inhibă drojdia dacă sunt puse în contact direct, dar în acest mediu diluat este sigur.\n\nÎncepeți să adăugați restul de făină treptat, amestecând continuu. Când aluatul începe să se lege, scoateți-l pe blatul de lucru. Frământați energic timp de 15-20 de minute prin mișcări de împăturire și apăsare, până când aluatul devine neted, mătăsos și nu se mai lipește de mâini. Temperatura finală a aluatului nu trebuie să depășească 24°C.",
      
      "Prima dospire (în masă) este scurtă. Acoperiți aluatul cu un bol sau o folie umedă și lăsați-l să se odihnească pe blat timp de 2 ore. Apoi, împărțiți aluatul în bile egale de 250-280g (panetti). Tehnica de formare a bilelor (staglio) trebuie să fie delicată, sigilând partea de jos pentru a crea o suprafață tensionată și netedă.\n\nAșezați bilele într-o tavă de dospire, lăsând spațiu între ele. Acum urmează maturarea: puneți tava la frigider pentru 24 de ore. Acest proces lent dezvoltă arome complexe și face aluatul extrem de digerabil.",
      
      "În ziua coacerii, scoateți aluatul din frigider cu 4 ore înainte de a-l folosi, pentru a ajunge la temperatura camerei. Între timp, pregătiți sosul: zdrobiți roșiile San Marzano cu mâna (nu la blender, pentru a nu sparge semințele care sunt amare). Adăugați doar un praf de sare; roșiile de calitate nu au nevoie de oregano sau zahăr în sos.\n\nTăiați mozzarella în bastonașe (nu cuburi, nu rasă) și lăsați-o la scurs într-o sită timp de cel puțin o oră. Excesul de zer va face pizza apoasă, un defect major.",
      
      "Întinderea aluatului se face exclusiv manual. Presărați făina pe blat. Luați o bilă de aluat și apăsați cu buricele degetelor din centru spre exterior, împingând aerul spre margini pentru a forma acea bordură specifică (cornicione). Nu atingeți niciodată marginile; aerul trebuie să rămână captiv acolo.\n\nRotiți și extindeți aluatul prin tehnica 'slap' (pălmuire ușoară) sau pur și simplu trăgând delicat, până obțineți un disc subțire de aproximativ 30 cm, cu marginile ușor înălțate.",
      
      "Asamblarea trebuie să fie rapidă pentru ca aluatul să nu se lipească de paletă. Întindeți o lingură de sos de roșii în spirală, din centru spre margini, lăsând 2 cm de bordură curată. Presărați mozzarella scursă uniform. Adăugați câteva frunze de busuioc (unii le pun înainte de coacere pentru a infuza uleiul, alții după pentru prospețime - metoda napoletană clasică le pune înainte).\n\nStropiți cu un fir de ulei de măsline extravirgin în formă de cifră 6 sau spirală. Trageți pizza pe paleta pudrată cu puțină făină.",
      
      "Coacerea necesită șoc termic. Într-un cuptor de casă, preîncălziți la temperatura maximă (250-300°C) cu o piatră de pizza sau o tavă întoarsă înăuntru timp de o oră. Coaceți pizza timp de 7-10 minute (față de 90 de secunde într-un cuptor de lemne la 450°C).\n\nPizza este gata când bordura este umflată, aerată și prezintă puncte negre de carbonizare (leopard spots), iar brânza este topită și ușor rumenită. Serviți imediat, fierbinte; o Margherita rece își pierde magia."
    ],
    nutrition: { calories: 800, protein: 30, carbs: 90, fat: 30, sodium: 1200 }
  },

  "Spaghetti Carbonara": {
    title: "Spaghetti Carbonara (Rețeta Originală Romană)",
    servings: 4,
    servingSize: "1 farfurie (350g)",
    pricePerServing: 18,
    prepTime: "10 min",
    cookTime: "15 min",
    ingredients: [
      { name: "Spaghetti (nr. 5 sau 7)", amount: "400 g" },
      { name: "Guanciale (gușă de porc)", amount: "200 g" },
      { name: "Gălbenușuri de ou", amount: "5 buc" },
      { name: "Pecorino Romano D.O.P.", amount: "120 g" },
      { name: "Piper negru proaspăt măcinat", amount: "generos" },
      { name: "Sare grunjoasă", amount: "pentru apă" }
    ],
    steps: [
      "Pregătirea guanciale este primul pas crucial. Tăiați gușa de porc (curățată de șorici și piperul exterior excesiv) în fâșii dreptunghiulare (lardons) de aproximativ 1cm x 0.5cm. Nu folosiți cubulețe mici deoarece se vor usca prea tare.\n\nPuneți carnea într-o tigaie rece de fier sau inox (fără ulei, unt sau ceapă!) și porniți focul la intensitate medie-mică. Lăsați grăsimea să se topească încet (să se randeze) timp de 10-15 minute. Guanciale trebuie să devină auriu și crocant la exterior, dar să rămână moale în centru. Când este gata, opriți focul, scoateți carnea pe o farfurie, dar păstrați prețioasa grăsime lichidă în tigaie.",
      
      "Fierberea pastelor. Puneți o oală mare cu apă la fiert. Când clocotește, adăugați sare (mai puțină decât de obicei, deoarece Pecorino și guanciale sunt foarte sărate). Adăugați spaghetele și apăsați-le ușor să intre în apă.\n\nFierbeți pastele cu 2 minute mai puțin decât timpul indicat pe pachet pentru 'al dente'. Ele vor continua să se gătească în sosul fierbinte, absorbind aromele. Păstrați o cană mare din apa bogată în amidon înainte de a scurge pastele.",
      
      "Crema de ouă (Carbo-crema). În timp ce pastele fierb, separați ouăle. Folosiți doar gălbenușurile (sau 4 gălbenușuri și 1 ou întreg pentru un sos mai fluid). Puneți-le într-un bol metalic sau de sticlă.\n\nRadeți Pecorino Romano foarte fin (ca o pudră) și adăugați-l peste ouă. Măcinați piper negru din abundență; numele 'Carbonara' evocă praful de cărbune, deci piperul trebuie să fie vizibil. Amestecați energic cu un tel până obțineți o pastă densă, galben-intensă. Adăugați o lingură din grăsimea de guanciale răcită puțin în această pastă pentru a o tempera și aromatiza.",
      
      "Emulsionarea (Pasul critic). Când pastele sunt aproape gata, reaprindeți focul sub tigaia cu grăsime pentru 30 de secunde, apoi stingeți-l definitiv. Transferați pastele scurse direct în tigaie (să nu fie foc aprins!).\n\nAmestecați pastele rapid în grăsimea de porc pentru a le îmbrăca și a le răci ușor. Adăugați un polonic mic de apă de fiert (nepoșită) pentru a opri sfârâitul. Temperatura din tigaie nu trebuie să depășească 65-70°C, altfel oul se coagulează (omletă).",
      
      "Unirea elementelor. Turnați amestecul de ouă și brânză peste pastele din tigaie. Începeți să amestecați viguros și continuu cu un clește, adăugând treptat câte puțină apă de fiert fierbinte.\n\nCăldura reziduală a pastelor și a grăsimii va găti ouăle delicat (pasteurizare) și va topi brânza, creând o emulsie cremoasă, lucioasă, care îmbracă fiecare fir de spaghetă. Dacă sosul e prea gros, mai puneți apă; dacă e prea lichid, mai amestecați câteva secunde.",
      
      "Servirea. Adăugați bucățile crocante de guanciale peste paste și mai amestecați o dată. Împărțiți imediat în farfurii calde.\n\nFinalizați cu încă puțin Pecorino ras și un ultim tur de râșniță de piper negru. Carbonara nu așteaptă pe nimeni; se mănâncă fierbinte, când crema este la textura maximă de catifea."
    ],
    nutrition: { calories: 650, protein: 25, carbs: 70, fat: 28, sodium: 1500 }
  },

  "Lasagna Bolognese": {
    title: "Lasagna alla Bolognese (Clasică)",
    servings: 6,
    servingSize: "1 pătrat mare (350g)",
    pricePerServing: 22,
    prepTime: "1 oră",
    cookTime: "45 min",
    ingredients: [
      { name: "Foi de Lasagna (cu ou)", amount: "1 pachet (500g)" },
      { name: "Carne tocată (vită+porc)", amount: "600 g" },
      { name: "Sos de roșii (Passata)", amount: "700 ml" },
      { name: "Vin roșu sec", amount: "150 ml" },
      { name: "Legume (sofrito)", amount: "ceapă, morcov, țelină" },
      { name: "Lapte", amount: "1 litru" },
      { name: "Unt", amount: "100 g" },
      { name: "Făină", amount: "100 g" },
      { name: "Parmigiano Reggiano", amount: "150 g" },
      { name: "Nucșoară", amount: "un praf" }
    ],
    steps: [
      "Ragù alla Bolognese necesită timp. Începeți prin a toca foarte mărunt ceapa, morcovul și tija de țelină (apio). Căliți-le în puțin ulei de măsline și unt până se înmoaie bine (sofrito). Adăugați carnea tocată (amestec vită grasă și porc) și prăjiți-o la foc iute, zdrobind cocoloașele, până se rumenește și sfârâie.\n\nStingeți cu vinul roșu și lăsați-l să se evapore complet. Adăugați sosul de roșii, puțină apă (sau supă), sare și piper. Acoperiți și lăsați să fiarbă la foc foarte mic (bolborosind) timp de cel puțin 2-3 ore. Ragù-ul trebuie să fie dens, uleios și închis la culoare.",
      
      "Sosul Bechamel (Besciamella) este liantul cremos. Topiți untul într-o cratiță. Adăugați făina toată odată și amestecați energic timp de 1-2 minute pentru a găti făina (roux alb), fără a o rumeni.\n\nTurnați laptele rece treptat, amestecând continuu cu un tel pentru a evita cocoloașele. Fierbeți la foc mic, amestecând, până se îngroașă ca o smântână lichidă. Opriți focul și asezonați cu sare și nucșoară proaspăt rasă. Bechamel-ul pentru lasagna trebuie să fie puțin mai fluid decât de obicei, deoarece foile vor absorbi lichid.",
      
      "Pregătirea foilor. Dacă folosiți foi de lasagna uscate care necesită pre-fierbere, opăriți-le 1-2 minute în apă cu sare și puțin ulei, apoi scoateți-le într-un bol cu apă rece și întindeți-le pe prosoape curate. Dacă folosiți foi proaspete sau 'no-boil', le puteți folosi direct, dar asigurați-vă că sosurile sunt mai lichide.\n\nUngeți fundul unei tăvi dreptunghiulare adânci cu puțin sos Bechamel și puțin Ragù.",
      
      "Montarea straturilor (L'assemblaggio). Așezați primul strat de foi de lasagna, suprapunându-le ușor la margini. Întindeți un strat uniform de Ragù Bolognese. Peste carne, turnați un strat de Bechamel și întindeți-l ușor să se amestece puțin.\n\nPresărați generos Parmigiano Reggiano ras. Repetați operațiunea pentru 4-5 straturi. Este important să acoperiți bine colțurile cu sos pentru a nu se usca la copt.",
      
      "Stratul final este cel mai important pentru aspect. Ultimul strat de foi trebuie acoperit doar cu Bechamel din abundență și foarte mult parmezan ras (și eventual câteva cubulețe de unt). Nu puneți carne pe ultimul strat, deoarece se va arde și va deveni amară.\n\nParmezanul și bechamelul vor forma o crustă aurie, gratinată, delicioasă.",
      
      "Coacerea și odihna. Introduceți tava în cuptorul preîncălzit la 180°C (static) sau 160°C (ventilație). Coaceți timp de 30-40 de minute, până când lasagna clocotește pe margini și crusta este rumenită frumos.\n\nScoateți tava din cuptor și, foarte important, lăsați lasagna să se odihnească 15-20 de minute înainte de a o tăia. Dacă o tăiați imediat, straturile vor aluneca și va fi o ciorbă în farfurie. Odihna permite sosurilor să se seteze și straturilor să se definească. Serviți caldă."
    ],
    nutrition: { calories: 600, protein: 30, carbs: 50, fat: 35, sodium: 900 }
  },

  "Risotto alla Milanese": {
    title: "Risotto alla Milanese (cu Șofran)",
    servings: 4,
    servingSize: "1 farfurie (300g)",
    pricePerServing: 20,
    prepTime: "10 min",
    cookTime: "25 min",
    ingredients: [
      { name: "Orez Carnaroli sau Arborio", amount: "320 g" },
      { name: "Supă de vită/pui fierbinte", amount: "1.5 litri" },
      { name: "Șofran (pistil sau pudră)", amount: "0.5 g" },
      { name: "Unt rece (de la frigider)", amount: "80 g" },
      { name: "Parmigiano Reggiano ras", amount: "80 g" },
      { name: "Ceapă albă", amount: "1 mică" },
      { name: "Vin alb sec", amount: "100 ml" },
      { name: "Măduvă de vită (opțional)", amount: "30 g" }
    ],
    steps: [
      "Baza (Soffritto). Tocați ceapa extrem de fin, aproape pastă, pentru a se topi complet în risotto. Într-un cratiță largă (casseruola), topiți jumătate din unt (și măduva, dacă folosiți, pentru rețeta tradițională de lux). Căliți ceapa la foc foarte mic până devine transparentă, fără a se rumeni deloc. Dacă se arde, va schimba culoarea și gustul delicat al risotto-ului.",
      
      "Prăjirea orezului (Tostatura). Măriți flacăra și adăugați orezul nespălat (trebuie să păstrăm amidonul). Prăjiți orezul timp de 2-3 minute, amestecând continuu, până când boabele devin translucide la margini și fierbinți la atingere (sfârâie).\n\nAcest pas sigilează porii bobului, permițându-i să rămână 'al dente' chiar și după fierberea îndelungată. Turnați vinul alb și lăsați-l să se evapore complet, deglasând fundul cratiței.",
      
      "Fierberea treptată. Începeți să adăugați supa fierbinte, polonic cu polonic. Regula este: adăugați lichid doar după ce cel anterior a fost absorbit. Amestecați frecvent, dar nu continuu, pentru a elibera amidonul care va crea cremozitatea naturală ('all'onda' - ca un val).\n\nMențineți focul mediu-iute; risotto trebuie să fiarbă constant, nu să stea în lichid stătut.",
      
      "Infuzia de șofran. La jumătatea timpului de gătire (după cca 10 minute), dizolvați șofranul într-un polonic mic de supă fierbinte și turnați-l în orez. Risotto-ul va căpăta instantaneu o culoare galben-aurie vibrantă și o aromă inconfundabilă, pământie și florală.\n\nContinuați să gătiți până când orezul este făcut, dar încă ferm în mijloc la mușcătură. Timpul total este de obicei 16-18 minute.",
      
      "Mantecare (Legarea finală). Acesta este secretul suprem. Când orezul este gata și consistența este ușor fluidă (nu uscată!), STINGEȚI focul complet.\n\nAdăugați restul de unt foarte rece tăiat cubulețe și parmezanul ras. Amestecați energic și rapid cu o lingură de lemn, scuturând cratița înainte și înapoi. Șocul termic dintre untul rece și orezul fierbinte creează o emulsie cremoasă, lucioasă.",
      
      "Odihna și servirea. Acoperiți cratița cu un capac și lăsați risotto-ul să se odihnească 2 minute. Acest lucru permite aromelor să se așeze și amidonului să lege sosul final.\n\nServiți risotto-ul pe farfurii întinse, bătând ușor fundul farfuriei cu palma pentru ca orezul să se întindă uniform ('a piatto'). Trebuie să fie onctuos, nu o grămăjoară compactă. Se mănâncă cu lingura, dinspre exterior spre interior."
    ],
    nutrition: { calories: 450, protein: 10, carbs: 60, fat: 18, micronutrients: ["Mangan", "Vitamina A"] }
  },

  "Ravioli": {
    title: "Ravioli de Casă cu Ricotta și Spanac",
    servings: 4,
    servingSize: "10-12 bucăți (250g)",
    pricePerServing: 16,
    prepTime: "45 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Făină tip 00", amount: "300 g" },
      { name: "Ouă", amount: "3 mari" },
      { name: "Ricotta proaspătă", amount: "250 g" },
      { name: "Spanac proaspăt", amount: "300 g" },
      { name: "Parmigiano Reggiano", amount: "50 g" },
      { name: "Nucșoară", amount: "un praf" },
      { name: "Unt", amount: "100 g" },
      { name: "Salvie proaspătă", amount: "8 frunze" }
    ],
    steps: [
      "Aluatul de paste (Sfoglia). Puneți făina pe blat sub formă de vulcan. Spargeți ouăle în mijloc. Bateți ouăle cu o furculiță, încorporând treptat făina de pe margini. Când aluatul devine prea tare pentru furculiță, începeți să frământați cu mâna.\n\nFrământați energic timp de 10 minute până când aluatul este neted și elastic. Înveliți-l în folie și lăsați-l la odihnit 30 de minute la temperatura camerei; acest pas relaxează glutenul și face întinderea ușoară.",
      
      "Pregătirea umpluturii. Opăriți spanacul în puțină apă sau sotați-l în tigaie până se înmoaie. Cel mai important: stoarceți spanacul extrem de bine în pumn sau într-un prosop. Orice urmă de apă va face ravioli să se deschidă la fiert.\n\nTocați spanacul mărunt și amestecați-l cu ricotta (de asemenea bine scursă), parmezanul ras, nucșoară, sare și piper. Puneți compoziția într-un poș pentru ușurință.",
      
      "Întinderea și umplerea. Tăiați aluatul în bucăți și treceți-l prin mașina de paste sau întindeți-l cu sucitorul până obțineți foi foarte subțiri (1mm), aproape transparente.\n\nPe o foaie de aluat, puneți grămăjoare de umplutură (cât o nucă) la distanță regulată. Ungeți ușor aluatul din jurul umpluturii cu puțină apă folosind o pensulă sau degetul.",
      
      "Formarea raviolilor. Așezați o a doua foaie de aluat deasupra. Cu degetele, presați aluatul în jurul fiecărei grămăjoare de umplutură pentru a scoate tot aerul (foarte important, altfel se sparg la fiert).\n\nSigilați bine marginile și tăiați raviolii cu o rotiță dințată sau un cuțit, în formă de pătrate. Așezați-i pe un prosop pudrat cu făină să se usuce puțin.",
      
      "Sosul de unt și salvie (Burro e Salvia). Acesta este sosul clasic care nu acoperă gustul delicat al umpluturii. Topiți untul într-o tigaie largă până începe să facă spumă.\n\nAdăugați frunzele de salvie întregi și lăsați-le să devină ușor crocante, iar untul să capete o culoare aurie (noisette), cu aromă de nuci.",
      
      "Fierberea și servirea. Fierbeți raviolii în multă apă sărată. Sunt gata foarte repede, în 3-4 minute, când se ridică la suprafață.\n\nScoateți-i cu o spumieră direct în tigaie cu unt și salvie. Adăugați o lingură de apă de fiert și amestecați delicat la foc mic pentru a emulsiona sosul. Serviți imediat cu mult parmezan proaspăt ras."
    ],
    nutrition: { calories: 500, protein: 18, carbs: 45, fat: 28, sodium: 600 }
  },

  "Tiramisu": {
    title: "Tiramisu Clasic (Fără Frișcă)",
    servings: 8,
    servingSize: "1 pătrat (150g)",
    pricePerServing: 12,
    prepTime: "30 min",
    cookTime: "0 min (+4h rece)",
    ingredients: [
      { name: "Mascarpone", amount: "500 g" },
      { name: "Pișcoturi (Savoiardi)", amount: "400 g" },
      { name: "Ouă proaspete", amount: "4 mari" },
      { name: "Zahăr", amount: "100 g" },
      { name: "Cafea Espresso tare", amount: "300 ml" },
      { name: "Cacao amară", amount: "pentru pudrat" },
      { name: "Marsala/Amaretto (opțional)", amount: "2 linguri" }
    ],
    steps: [
      "Pregătirea cafelei. Faceți un espresso tare și de calitate. Adăugați alcoolul (Marsala sau Amaretto) în cafea dacă doriți, și opțional o linguriță de zahăr. Lăsați cafeaua să se răcească complet într-o farfurie adâncă. Dacă cafeaua e caldă, pișcoturile se vor înmuia prea tare și prăjitura se va lăsa.",
      
      "Crema Zabaglione (baza). Separați ouăle cu mare grijă. Într-un bol mare, bateți gălbenușurile cu jumătate din zahăr folosind un mixer, până devin o cremă deschisă la culoare, spumoasă și zahărul s-a topit complet (aprox. 5 minute).\n\nAdăugați brânza Mascarpone rece (scursă de zerul de pe fundul cutiei) peste gălbenușuri. Mixați la viteză mică doar până se omogenizează. Nu mixați excesiv mascarponele, deoarece se poate tăia și deveni untos.",
      
      "Albușurile spumă. Spălați paletele mixerului foarte bine (orice urmă de grăsime strică spuma). Bateți albușurile cu un praf de sare până fac vârfuri moi. Adăugați restul de zahăr și bateți până obțineți o bezea fermă și lucioasă.\n\nAcesta este secretul texturii aerate a unui Tiramisu autentic, care nu folosește frișcă lichidă.",
      
      "Încorporarea (Mousse-ul). Adăugați o treime din albușuri în crema de mascarpone și amestecați ușor cu o spatulă pentru a mai înmuia compoziția. Apoi, adăugați restul de albușuri și încorporați-le cu mișcări lente, circulare, de jos în sus (folding), pentru a nu scoate aerul din bezea.\n\nCrema finală trebuie să fie fină, catifelată și să stea pe lingură.",
      
      "Montarea. Înmuiați fiecare pișcot în cafeaua rece timp de 1-2 secunde pe fiecare parte. Nu le lăsați să se îmbibe total; ele trebuie să rămână ușor ferme în mijloc pentru a absorbi umiditatea din cremă ulterior.\n\nAșezați un strat de pișcoturi pe fundul unei tăvi. Acoperiți cu jumătate din cremă și nivelați. Repetați cu al doilea strat de pișcoturi (așezate perpendicular pe primele) și restul de cremă.",
      
      "Odihna și servirea. Acoperiți tava și puneți-o la frigider pentru minim 4-6 ore, ideal peste noapte. Tiramisu are nevoie de timp pentru ca pișcoturile să se înmoaie de la cremă și aromele să se combine.\n\nChiar înainte de servire (nu înainte, pentru că se umezește), cerneți un strat generos de cacao amară deasupra. Tăiați pătrate și serviți. Trebuie să fie stabil, dar cremos, nu lichid."
    ],
    nutrition: { calories: 450, protein: 8, carbs: 40, fat: 28, sugar: 25 }
  },

  "Pesto alla Genovese": {
    title: "Paste cu Pesto alla Genovese",
    servings: 4,
    servingSize: "1 farfurie (350g)",
    pricePerServing: 18,
    prepTime: "15 min",
    cookTime: "10 min",
    ingredients: [
      { name: "Busuioc proaspăt (frunze mici)", amount: "50 g" },
      { name: "Ulei de măsline extravirgin", amount: "100 ml" },
      { name: "Semințe de pin (muguri)", amount: "15 g" },
      { name: "Parmigiano Reggiano ras", amount: "70 g" },
      { name: "Pecorino Sardo ras", amount: "30 g" },
      { name: "Usturoi", amount: "2 căței mici" },
      { name: "Sare de mare grunjoasă", amount: "un praf" },
      { name: "Paste (Trofie sau Linguine)", amount: "400 g" }
    ],
    steps: [
      "Pregătirea ingredientelor. Asigurați-vă că frunzele de busuioc sunt spălate și perfect uscate. Apa va oxida sosul. Dacă aveți posibilitatea, folosiți un mojar de marmură cu pistil de lemn; căldura blenderului electric oxidează busuiocul și îl face amărui.\n\nDacă totuși folosiți blenderul, puneți bolul și lamele la congelator înainte și lucrați prin pulsații scurte.",
      
      "Zdrobirea usturoiului. Începeți prin a zdrobi usturoiul curățat în mojar împreună cu câteva cristale de sare grunjoasă. Frecați până obțineți o pastă fină.\n\nAdăugați semințele de pin (crude, nu prăjite tradițional) și continuați să zdrobiți până se formează o cremă grosieră.",
      
      "Adăugarea busuiocului. Adăugați frunzele de busuioc treptat, împreună cu încă puțină sare grunjoasă (care acționează ca un abraziv și păstrează culoarea verde viu). Zdrobiți frunzele prin mișcări circulare ale pistilului pe pereții mojarului, nu prin lovire.\n\nScopul este să extrageți uleiurile esențiale din frunze fără a le rupe fibrele violent, ceea ce le-ar înnegri.",
      
      "Finalizarea sosului. Când aveți o pastă verde strălucitor, adăugați brânzeturile rase (mixul de Parmigiano și Pecorino). Amestecați ușor.\n\nLa final, începeți să turnați uleiul de măsline extravirgin (unul cu gust delicat, nu iute) în fir subțire, amestecând continuu până când sosul se emulsionează și devine cremos.",
      
      "Fierberea pastelor. Fierbeți pastele (Trofie este forma tradițională liguriană, dar Linguine sau Fusilli merg bine) în apă sărată.\n\nUneori, genovezii fierb și câțiva cartofi tăiați cuburi și fasole verde împreună cu pastele pentru consistență.",
      
      "Amestecarea (Focul oprit!). Păstrați o cană mică de apă de fiert. Scurgeți pastele și puneți-le într-un bol larg (nu înapoi în oala fierbinte pe foc, căci pesto-ul nu se gătește niciodată!).\n\nTurnați sosul pesto peste paste și adăugați 1-2 linguri din apa de fiert amidonoasă. Amestecați energic; apa caldă va topi brânza din pesto și va crea o cremă care îmbracă pastele. Serviți imediat."
    ],
    nutrition: { calories: 600, protein: 12, carbs: 60, fat: 35, sodium: 400 }
  },

  "Focaccia": {
    title: "Focaccia Genovese cu Rozmarin",
    servings: 6,
    servingSize: "1 felie mare (100g)",
    pricePerServing: 5,
    prepTime: "20 min (+2h dospire)",
    cookTime: "25 min",
    ingredients: [
      { name: "Făină de forță (pâine)", amount: "500 g" },
      { name: "Apă călduță", amount: "350 ml" },
      { name: "Ulei de măsline extravirgin", amount: "80 ml" },
      { name: "Drojdie uscată", amount: "7 g" },
      { name: "Sare fină", amount: "10 g" },
      { name: "Sare mare/Maldon", amount: "pentru crustă" },
      { name: "Rozmarin proaspăt", amount: "2 crenguțe" }
    ],
    steps: [
      "Aluatul umed. Într-un bol mare, amestecați făina cu sarea. Faceți o groapă în mijloc și adăugați drojdia activată în apa călduță și jumătate din uleiul de măsline.\n\nAmestecați cu o lingură până se formează un aluat foarte moale și lipicios. Nu adăugați făină suplimentară; hidratarea mare este secretul alveolelor mari.",
      
      "Frământarea și prima dospire. Ungeți blatul cu puțin ulei și răsturnați aluatul. Frământați prin metoda 'slap and fold' (ridicați, loviți de masă, împăturiți) timp de 5-10 minute până devine elastic și neted.\n\nPuneți aluatul într-un bol uns generos cu ulei, acoperiți și lăsați la dospit 1 oră, până își dublează volumul.",
      
      "Întinderea în tavă. Ungeți o tavă dreptunghiulară cu mult ulei de măsline. Răsturnați aluatul în tavă. Întindeți-l ușor cu palmele spre colțuri, fără a-l forța. Dacă se retrage, lăsați-l să se odihnească 10 minute și încercați din nou.\n\nAcoperiți tava și mai lăsați la dospit încă 30-45 de minute. Aluatul va deveni pufos și plin de bule de aer.",
      
      "Crearea gropițelor (Dimpling). Acesta este momentul semnătură. Turnați restul de ulei de măsline peste aluat și puțină apă (saramură).\n\nUngeți-vă degetele cu ulei și înfigeți-le adânc în aluat, până atingeți fundul tăvii, pe toată suprafața. Această acțiune creează acele gropițe caracteristice unde se va aduna uleiul delicios.",
      
      "Aromatizarea. Presărați acele de rozmarin proaspăt și sarea mare (fulgi) pe deasupra. Saramura formată din ulei și apă în gropițe va menține aluatul umed în acele puncte în timp ce restul se va rumeni, creând un contrast de texturi.",
      
      "Coacerea. Coaceți în cuptorul preîncălzit la 220°C timp de 20-25 de minute, până când focaccia este bine rumenită și aurie deasupra și dedesubt.\n\nScoateți-o imediat pe un grătar ca să nu se înmoaie fundul de la aburi. Tăiați-o când s-a răcorit puțin. Este crocantă la exterior și moale ca un burete în interior."
    ],
    nutrition: { calories: 350, protein: 8, carbs: 50, fat: 15, sodium: 800 }
  },

  "Gelato": {
    title: "Gelato Artigianale de Vanilie",
    servings: 6,
    servingSize: "2 cupe (150g)",
    pricePerServing: 8,
    prepTime: "20 min",
    cookTime: "20 min (+răcire)",
    ingredients: [
      { name: "Lapte integral (3.5%)", amount: "500 ml" },
      { name: "Smântână lichidă (35%)", amount: "250 ml" },
      { name: "Zahăr", amount: "150 g" },
      { name: "Gălbenușuri", amount: "4 mari" },
      { name: "Păstaie de vanilie", amount: "1 buc" },
      { name: "Lapte praf (opțional)", amount: "20 g" }
    ],
    steps: [
      "Gelato vs Înghețată. Gelato are mai puțină grăsime (mai mult lapte, mai puțină smântână) și este bătut la o viteză mai mică pentru a avea mai puțin aer, rezultând o textură mai densă și mai cremoasă.\n\nÎncepeți prin a pune laptele și smântâna într-o cratiță. Tăiați păstaia de vanilie pe lung, răzuiți semințele și puneți totul (semințe + păstaie) în lichid. Încălziți până la punctul de fierbere, apoi opriți focul și lăsați la infuzat 30 de minute.",
      
      "Baza de ouă. Într-un bol, bateți gălbenușurile cu zahărul (și laptele praf, care ajută la stabilizare) până se albesc. Scoateți păstaia de vanilie din lapte.\n\nTurnați laptele cald în fir subțire peste ouă, amestecând continuu pentru a tempera ouăle și a nu le găti instantaneu.",
      
      "Gătirea cremei (Anglaise). Turnați tot amestecul înapoi în cratiță. Gătiți la foc mic, amestecând constant cu o spatulă sau lingură de lemn. Crema este gata când ajunge la 82-84°C sau când acoperă spatele lingurii și dacă trageți o linie cu degetul, aceasta rămâne curată (nappe).\n\nNu fierbeți! Dacă fierbe, ouăle se vor coagula și veți avea omletă dulce.",
      
      "Răcirea rapidă. Treceți crema printr-o sită fină într-un bol curat așezat pe o baie de gheață. Răcirea rapidă este esențială pentru igienă și textură. Lăsați compoziția la frigider cel puțin 4 ore sau peste noapte pentru maturare (aromele se dezvoltă).",
      
      "Churning (Înghețarea). Turnați baza rece în mașina de înghețată. Procesați conform instrucțiunilor (de obicei 20-30 min) până când gelato are consistența unei creme soft serve.\n\nDacă nu aveți mașină: puneți crema în congelator într-un vas plat. La fiecare 30-45 de minute, scoateți-o și mixați-o energic cu un tel sau blender vertical pentru a sparge cristalele de gheață. Repetați de 4-5 ori.",
      
      "Servirea. Gelato se servește la o temperatură puțin mai ridicată decât înghețata (-12°C față de -18°C), pentru a fi moale și aromat. Scoateți-l din congelator cu 10-15 minute înainte de servire.\n\nServiți în cupe răcite sau cornete artizanale."
    ],
    nutrition: { calories: 250, protein: 5, carbs: 30, fat: 12, sugar: 28 }
  },

  "Prosciutto e Melone": {
    title: "Prosciutto e Melone (Antipasto)",
    servings: 4,
    servingSize: "1 platou mic (200g)",
    pricePerServing: 20,
    prepTime: "10 min",
    cookTime: "0 min",
    ingredients: [
      { name: "Pepene galben (Cantaloupe)", amount: "1 mediu" },
      { name: "Prosciutto Crudo di Parma", amount: "200 g (felii subțiri)" },
      { name: "Mozzarella biluțe (opțional)", amount: "100 g" },
      { name: "Mentă proaspătă", amount: "câteva frunze" },
      { name: "Piper negru", amount: "proaspăt măcinat" }
    ],
    steps: [
      "Alegerea pepenelui. Pepenele trebuie să fie foarte copt, parfumat și dulce, pentru a contrasta cu sărătura șuncii. Tăiați pepenele în jumătate, scoateți semințele cu o lingură.\n\nTăiați-l în felii (lunule) și îndepărtați coaja. Alternativ, puteți folosi o ustensilă specială (parisienne scoop) pentru a face biluțe de pepene pentru o prezentare mai elegantă.",
      
      "Pregătirea Prosciutto-ului. Folosiți Prosciutto di Parma sau San Daniele de calitate, tăiat extrem de subțire, aproape transparent. Scoateți-l din frigider cu 10 minute înainte pentru a-și elibera grăsimea aromată.",
      
      "Asamblarea clasică. Înfășurați fiecare felie de pepene cu o felie sau două de prosciutto. Aranjați-le pe un platou sub formă de evantai sau cerc.\n\nNu strângeți șunca prea tare; lăsați-o să cadă natural, în valuri ('a la chiffonnade'), pentru a arăta apetisant și a fi ușor de luat cu furculița.",
      
      "Variațiuni. Puteți alterna feliile de pepene cu biluțe de mozzarella de bivoliță (bocconcini) pentru o textură cremoasă suplimentară.\n\nUnii italieni adaugă câteva picături de oțet balsamic vechi (glazură) peste pepene, dar puristii preferă gustul natural.",
      
      "Finisarea. Presărați puțin piper negru proaspăt măcinat peste pepene (nu sare, șunca e deja sărată). Decorați cu frunze mici de mentă proaspătă pentru culoare și o notă răcoritoare.",
      
      "Servirea. Acest preparat se servește rece, ca aperitiv (antipasto), în zilele toride de vară. Combinația dulce-sărat și rece-gras este un exemplu perfect de echilibru culinar italian simplu."
    ],
    nutrition: { calories: 150, protein: 10, carbs: 15, fat: 8, sodium: 600 }
  },

  "Minestrone": {
    title: "Minestrone (Supa Italiană de Legume)",
    servings: 6,
    servingSize: "1 bol (350ml)",
    pricePerServing: 8,
    prepTime: "20 min",
    cookTime: "40 min",
    ingredients: [
      { name: "Mix legume", amount: "500 g (dovlecel, morcov, cartof, fasole verde)" },
      { name: "Fasole boabe (Borlotti)", amount: "1 conservă" },
      { name: "Paste mici (Ditalini)", amount: "100 g" },
      { name: "Suc de roșii", amount: "200 ml" },
      { name: "Coajă de Parmigiano", amount: "1 buc (secretul!)" },
      { name: "Supă de legume/apă", amount: "1.5 L" },
      { name: "Pesto (opțional)", amount: "1 lingură" }
    ],
    steps: [
      "Soffritto-ul este baza. Tocați mărunt o ceapă, un morcov și o tijă de țelină. Căliți-le în ulei de măsline într-o oală mare timp de 5-8 minute până se înmoaie. Acest amestec dă profunzime supei.\n\nTăiați restul legumelor (cartofi, dovlecei, fasole verde) în cubulețe egale.",
      
      "Baza Lichidă și Secretul. Adăugați legumele tăiate peste soffritto și căliți-le 2 minute. Turnați sucul de roșii și supa fierbinte (sau apa).\n\nSecretul bucătarilor italieni: adăugați în oală o coajă veche, tare, de la o bucată de Parmezan (curățată bine la exterior). Aceasta va elibera o aromă umami incredibilă în timpul fierberii (o scoateți la final).",
      
      "Fierberea legumelor. Fierbeți supa la foc mediu timp de 20 de minute. Legumele trebuie să se înmoaie, dar să nu se sfărâme.",
      
      "Pastele și Fasolea. Când legumele sunt aproape fierte, adăugați fasolea boabe scursă și clătită. Adăugați pastele mici (sau orez) și mai fierbeți conform timpului de pe pachet (cca 8-10 min).\n\nSupa trebuie să fie deasă, plină de legume, nu apoasă. Dacă scade prea mult de la paste, completați cu puțină apă fierbinte.",
      
      "Finisarea Genoveză. La final, opriți focul. Scoateți coaja de parmezan. Pentru un gust autentic, amestecați în supă o lingură de sos Pesto chiar înainte de servire. Busuiocul proaspăt va da o notă vibrantă.",
      
      "Odihna și Servirea. Minestrone este mai bun 'odihnit'. Lăsați supa să stea 10 minute înainte de a o pune în farfurii. Se servește caldă (nu clocotită) sau chiar la temperatura camerei vara.\n\nPresărați extra parmezan ras și un fir de ulei de măsline crud în fiecare farfurie."
    ],
    nutrition: { calories: 200, protein: 8, carbs: 35, fat: 5, fiber: 6 }
  },

  "Gnocchi": {
    title: "Gnocchi alla Sorrentina",
    servings: 4,
    servingSize: "1 porție (300g)",
    pricePerServing: 14,
    prepTime: "30 min",
    cookTime: "20 min",
    ingredients: [
      { name: "Gnocchi de cartofi", amount: "500 g" },
      { name: "Sos de roșii (Passata)", amount: "400 ml" },
      { name: "Mozzarella", amount: "200 g" },
      { name: "Parmigiano Reggiano", amount: "50 g" },
      { name: "Busuioc proaspăt", amount: "6 frunze" },
      { name: "Usturoi", amount: "1 cățel" },
      { name: "Ulei de măsline", amount: "2 linguri" }
    ],
    steps: [
      "Pregătirea sosului simplu. Într-o tigaie largă, căliți cățelul de usturoi (întreg, zdrobit ușor) în ulei de măsline pentru a aromatiza uleiul, apoi scoateți-l. Turnați passata de roșii, adăugați sare și câteva frunze de busuioc. Fierbeți sosul la foc mediu timp de 10-15 minute până se îngroașă puțin.",
      
      "Fierberea gnocchi-lor. Puneți o oală cu apă sărată la fiert. Când clocotește, adăugați gnocchi. Sunt gata extrem de repede: imediat ce se ridică la suprafața apei (cca 2 minute), scoateți-i cu o spumieră.\n\nPuneți gnocchi direct în tigaie cu sosul de roșii și amestecați delicat să se îmbrace bine.",
      
      "Asamblarea pentru cuptor. Tăiați mozzarella în cubulețe mici. Într-un vas de ceramică sau vase individuale (cocotte), puneți un strat de gnocchi cu sos.\n\nPresărați jumătate din mozzarella și parmezan. Adăugați restul de gnocchi și acoperiți cu restul de brânzeturi.",
      
      "Gratinarea. Introduceți vasul în cuptorul preîncălzit la 220°C (sau pe funcția grill) timp de 5-10 minute.\n\nScopul este doar să topiți brânza și să obțineți o crustă aurie, bolborosindă, deasupra. Gnocchi sunt deja gătiți.",
      
      "Odihna. Scoateți din cuptor și lăsați să se odihnească 2-3 minute (sunt foarte fierbinți!).",
      
      "Servirea. Decorați cu frunze proaspete de busuioc.\n\nCând serviți, mozzarella trebuie să fie filantă (să se întindă fire). Este un fel de mâncare reconfortant, tipic pentru duminicile în familie în sudul Italiei."
    ],
    nutrition: { calories: 400, protein: 15, carbs: 60, fat: 15, micronutrients: ["Calcium 20%"] }
  }
};
