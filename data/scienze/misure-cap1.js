// ============================================================
//  data/scienze/misure-cap1.js  (v1)
//  Unità A — Cap. 1 GRANDEZZE E MISURE (pagg. 2-33)
//
//  40 domande. Domande dal testo, dai box «Fai il punto» e dagli esercizi del libro.
//  Fonte: foto del libro di scienze, ottobre 2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["misure-cap1"] = {

  id:              "misure-cap1",
  subject:         "scienze",
  title:           "Cap. 1 — Grandezze e misure",
  description:     "SI, notazione scientifica, cifre significative, densità, energia, temperatura, calore",
  icon:            "📏",
  version:         3,
  timePerQuestion: 25,

  questions: [

    {
      "q": "Su quante grandezze fondamentali si basa il Sistema Internazionale (SI)?",
      "options": [
        "Cinque",
        "Sei",
        "Sette",
        "Dieci"
      ],
      "answer": 2,
      "explanation": "Il SI, introdotto nel 1960, si basa su sette grandezze fondamentali (tabella 1, p. 4)."
    },

    {
      "q": "Nel SI, qual è l'unità di misura della lunghezza?",
      "options": [
        "Il kilometro",
        "Il metro",
        "Il centimetro",
        "Il millimetro"
      ],
      "answer": 1,
      "explanation": "L'unità di base della lunghezza è il metro (m); kilometro e centimetro sono multipli e sottomultipli (p. 6)."
    },

    {
      "q": "Nel SI, qual è l'unità di misura della massa?",
      "options": [
        "Il grammo",
        "La mole",
        "Il milligrammo",
        "Il kilogrammo"
      ],
      "answer": 3,
      "explanation": "Nel SI l'unità di base della massa è il kilogrammo (kg) (p. 9); la mole è l'unità della quantità di sostanza (tabella 1, p. 4)."
    },

    {
      "q": "Quale di queste NON è una grandezza derivata del SI?",
      "options": [
        "L'energia",
        "La densità",
        "La massa",
        "La forza"
      ],
      "answer": 2,
      "explanation": "La massa è una delle sette grandezze fondamentali; energia (joule), densità (kg/m³) e forza (newton) sono derivate (p. 4)."
    },

    {
      "q": "Quale potenza di 10 indica il prefisso nano- (n)?",
      "options": [
        "10⁻⁹",
        "10⁻¹²",
        "10⁻⁶",
        "10⁻³"
      ],
      "answer": 0,
      "explanation": "Nano = 10⁻⁹. Pico = 10⁻¹², micro = 10⁻⁶, milli = 10⁻³ (tabella 3, p. 6)."
    },

    {
      "q": "Che cos'è la massa?",
      "options": [
        "La forza con cui un oggetto cade",
        "Una grandezza legata alla quantità di materia di un corpo",
        "La forza che attrae un oggetto verso il centro della Terra",
        "La misura dello spazio occupato da un corpo"
      ],
      "answer": 1,
      "explanation": "La massa è una proprietà dei corpi legata alla quantità di materia che li costituisce (p. 9)."
    },

    {
      "q": "Il peso di un corpo è:",
      "options": [
        "Una forza, che si misura in newton",
        "La sua quantità di materia",
        "Una grandezza che si misura in kilogrammi",
        "Uguale sulla Terra e sulla Luna"
      ],
      "answer": 0,
      "explanation": "Il peso è la misura della forza di attrazione gravitazionale: si esprime in newton (N); peso = m × g (p. 9)."
    },

    {
      "q": "Portato dalla Terra alla Luna, un oggetto mantiene lo stesso peso?",
      "options": [
        "Sì, perché la massa resta la stessa",
        "No, perché l'accelerazione di gravità cambia",
        "Sì, perché la quantità di materia non cambia",
        "No, perché cambia la sua massa"
      ],
      "answer": 1,
      "explanation": "Sulla Luna la gravità è circa 1/6 di quella terrestre: la massa resta uguale, il peso diventa circa sei volte minore (p. 9)."
    },

    {
      "q": "Che cos'è il volume di un corpo?",
      "options": [
        "La massa che possiede",
        "Lo spazio che esso occupa",
        "La sua quantità di materia",
        "Il prodotto di massa e densità"
      ],
      "answer": 1,
      "explanation": "Il volume di un corpo è la misura dello spazio che esso occupa (p. 10)."
    },

    {
      "q": "Quale equivalenza è corretta?",
      "options": [
        "2,5 L = 2,5 m³",
        "2,5 L = 2,5 cm³",
        "2,5 L = 2,5 dm³",
        "2,5 L = 250 cm³"
      ],
      "answer": 2,
      "explanation": "1 L = 1 dm³, quindi 2,5 L = 2,5 dm³. Inoltre 1 L = 1000 cm³ e 1 mL = 1 cm³ (p. 10)."
    },

    {
      "q": "Che cosa sono le cifre significative di una misura?",
      "options": [
        "Tutte le cifre note con certezza, senza quelle incerte",
        "Le sole cifre decimali, cioè quelle dopo la virgola",
        "Tutte le cifre note con certezza più la prima incerta",
        "Tutte le cifre scritte, compresi gli zeri iniziali"
      ],
      "answer": 2,
      "explanation": "Definizione del libro: le cifre significative sono tutte le cifre note con certezza più la prima cifra incerta (p. 14)."
    },

    {
      "q": "Che cos'è la densità di un corpo?",
      "options": [
        "Il prodotto di massa e volume",
        "Il rapporto tra peso e volume",
        "Il rapporto tra volume e massa",
        "Il rapporto tra massa e volume"
      ],
      "answer": 3,
      "explanation": "La densità è il rapporto tra la massa di un oggetto e il suo volume: d = m / V (p. 18)."
    },

    {
      "q": "In quale unità si misura il calore nel SI?",
      "options": [
        "In gradi Celsius",
        "In joule",
        "In calorie",
        "In J/(g × °C)"
      ],
      "answer": 1,
      "explanation": "Il calore è energia e nel SI si misura in joule (J), come l'energia (p. 25). J/(g × °C) è l'unità del calore specifico."
    },

    {
      "q": "Che cos'è il calore specifico?",
      "options": [
        "Il calore che alza di 1 °C la temperatura di 1 g di sostanza",
        "La temperatura raggiunta da 1 g di sostanza ricevendo 4,18 J",
        "Il calore necessario per portare all'ebollizione 1 g di sostanza",
        "Il calore totale posseduto da 1 g di sostanza a una data temperatura"
      ],
      "answer": 0,
      "explanation": "Il calore specifico è la quantità di energia termica necessaria per innalzare (o abbassare) di 1 °C (o 1 K) la temperatura di un grammo di sostanza (p. 25)."
    },

    {
      "q": "A quale livello di rappresentazione della materia appartiene la formula H₂O?",
      "options": [
        "Macroscopico",
        "Particellare",
        "Simbolico",
        "Submicroscopico"
      ],
      "answer": 2,
      "explanation": "Il livello simbolico usa i simboli e le formule: H₂O indica due atomi di idrogeno e uno di ossigeno (p. 2)."
    },

    {
      "q": "Quale di queste misure NON è scritta in notazione scientifica corretta?",
      "options": [
        "7,08 × 10³ m",
        "70,8 × 10² m",
        "7,08 × 10⁻³ m",
        "3,85 × 10⁸ m"
      ],
      "answer": 1,
      "explanation": "In notazione scientifica il coefficiente deve essere maggiore o uguale a 1 e minore di 10: 70,8 non lo è (p. 5)."
    },

    {
      "q": "Spostando la virgola verso destra per scrivere un numero in notazione scientifica, l'esponente n è:",
      "options": [
        "Positivo",
        "Negativo",
        "Uguale a zero",
        "Uguale al numero delle cifre decimali"
      ],
      "answer": 1,
      "explanation": "Se la virgola si sposta verso sinistra n è positivo; se si sposta verso destra n è negativo (es. 0,0036 = 3,6 × 10⁻³, p. 5)."
    },

    {
      "q": "Per convertire 2,5 cm in km quale fattore di conversione si usa?",
      "options": [
        "1 × 10⁵ cm / 1 km",
        "1 km / 1 × 10⁵ cm",
        "1 km / 1 × 10³ cm",
        "1 × 10³ cm / 1 km"
      ],
      "answer": 1,
      "explanation": "Il fattore deve avere al numeratore l'unità RICHIESTA (km) e al denominatore l'unità DATA (cm); 1 km = 1 × 10⁵ cm (p. 8)."
    },

    {
      "q": "Quante cifre significative ha la misura 3,078 g?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 3,
      "explanation": "Le cifre diverse da zero sono significative e lo zero compreso tra cifre diverse da zero è significativo: 4 cifre (regola c, p. 15)."
    },

    {
      "q": "In quale di queste misure gli zeri sono cifre significative?",
      "options": [
        "0,0038 m",
        "0,0052 kg",
        "0,07 L",
        "35,00 g"
      ],
      "answer": 3,
      "explanation": "Gli zeri alla fine di un numero e a destra della virgola sono significativi (35,00 g → 4 cifre); gli zeri a sinistra non lo sono (p. 15)."
    },

    {
      "q": "Il numero 5,37 arrotondato a due cifre significative diventa:",
      "options": [
        "5,3",
        "5,4",
        "5,37",
        "5"
      ],
      "answer": 1,
      "explanation": "La prima cifra da eliminare è 7, maggiore di 5: l'ultima cifra mantenuta aumenta di uno → 5,4 (p. 16)."
    },

    {
      "q": "Qual è il risultato corretto di 51,5 × 4,783?",
      "options": [
        "246",
        "24,63",
        "246,3245",
        "246,32"
      ],
      "answer": 0,
      "explanation": "Nella moltiplicazione il risultato ha le cifre significative del termine che ne ha meno: 51,5 ne ha 3 → 246,3245 diventa 246 (p. 16)."
    },

    {
      "q": "Qual è il risultato corretto di 7,5 : 4,24?",
      "options": [
        "1,76",
        "1,77",
        "1,8",
        "1,7"
      ],
      "answer": 2,
      "explanation": "7,5 ha due cifre significative: 1,7688… si arrotonda a 1,8 (p. 16)."
    },

    {
      "q": "Qual è il risultato corretto di 0,745 + 0,22 + 7,5?",
      "options": [
        "8,465",
        "8,46",
        "8,4",
        "8,5"
      ],
      "answer": 3,
      "explanation": "Nell'addizione il risultato ha le cifre decimali del termine che ne ha meno: 7,5 ne ha una → 8,465 diventa 8,5 (p. 17)."
    },

    {
      "q": "Una bilancia analitica misura fino al decimo di milligrammo (0,1 mg). Quale misura ne rispecchia la precisione?",
      "options": [
        "1,15 g",
        "1,150 g",
        "1,1500 g",
        "1,15000 g"
      ],
      "answer": 2,
      "explanation": "0,1 mg = 0,0001 g: la misura va riportata fino alla quarta cifra decimale del grammo → 1,1500 g (pp. 14–15)."
    },

    {
      "q": "Che cosa si intende per sensibilità di uno strumento di misura?",
      "options": [
        "Il valore più grande che è in grado di misurare",
        "Il valore più piccolo che è in grado di rilevare",
        "La sua capacità di dare misure vicine tra loro",
        "La sua capacità di dare misure vicine al valore vero"
      ],
      "answer": 1,
      "explanation": "La sensibilità è il valore più piccolo che lo strumento è in grado di rilevare: più è alta, più cifre significative ha la misura (pp. 14–15)."
    },

    {
      "q": "Quale affermazione sulla densità NON è corretta?",
      "options": [
        "Quella dei gas è molto grande",
        "È il rapporto massa/volume",
        "Si può misurare in g/mL",
        "In genere aumenta se la temperatura diminuisce"
      ],
      "answer": 0,
      "explanation": "I gas hanno densità molto minori di liquidi e solidi; la densità in genere diminuisce all'aumentare della temperatura (p. 19)."
    },

    {
      "q": "Quale valore potrebbe essere la densità di un gas?",
      "options": [
        "0,01 g/L",
        "1 g/L",
        "1 g/mL",
        "100 g/L"
      ],
      "answer": 1,
      "explanation": "Nella tabella 5 i gas hanno densità tra 0,084 g/L (idrogeno) e 2,95 g/L (cloro): l'aria è 1,20 g/L (p. 19)."
    },

    {
      "q": "Quale di queste è una proprietà intensiva della materia?",
      "options": [
        "La massa",
        "Il volume",
        "La temperatura",
        "L'energia"
      ],
      "answer": 2,
      "explanation": "Le proprietà intensive non dipendono dalle dimensioni del campione: densità e temperatura. Massa, volume, peso ed energia sono estensive (p. 19)."
    },

    {
      "q": "Un olio ha densità 0,930 g/cm³. A quanto corrisponde in kg/L?",
      "options": [
        "930 kg/L",
        "0,930 kg/L",
        "0,093 kg/L",
        "0,000930 kg/L"
      ],
      "answer": 1,
      "explanation": "1 L = 1000 cm³ e 1 kg = 1000 g: 0,930 g/cm³ = 930 g/L = 0,930 kg/L."
    },

    {
      "q": "Che cosa dice la legge di conservazione dell'energia?",
      "options": [
        "Si produce nelle centrali e si distrugge quando la usiamo",
        "Si conserva nei corpi fermi e si consuma in quelli in movimento",
        "Non si crea né si distrugge, ma si converte da una forma a un'altra",
        "Si conserva se resta nella stessa forma e si perde quando si converte"
      ],
      "answer": 2,
      "explanation": "Legge di conservazione dell'energia: l'energia non si crea né si distrugge, ma può essere convertita da una forma a un'altra (p. 21)."
    },

    {
      "q": "Da che cosa dipende l'energia cinetica di un corpo?",
      "options": [
        "Dalla sua posizione",
        "Dalla sua altezza da terra",
        "Dalla sua velocità",
        "Dalla sua temperatura"
      ],
      "answer": 2,
      "explanation": "L'energia cinetica è quella di un corpo in movimento: Ec = ½ m × v². Quella potenziale dipende dalla posizione: Ep = m × g × h (p. 21)."
    },

    {
      "q": "Quale relazione tra caloria e joule riporta il libro?",
      "options": [
        "1 cal = 4,18 J",
        "1 J = 4,18 cal",
        "1 cal = 1000 J",
        "1 kcal = 4,18 J"
      ],
      "answer": 0,
      "explanation": "1 cal = 4,18 J; quindi 100 cal = 418 J. La caloria non è ammessa nel SI (p. 22)."
    },

    {
      "q": "A quale temperatura sarebbe più piacevole fare un bagno?",
      "options": [
        "330 K",
        "310 K",
        "373 K",
        "243 K"
      ],
      "answer": 1,
      "explanation": "T(°C) = T(K) − 273: 310 K = 37 °C. 330 K = 57 °C, 373 K = 100 °C, 243 K = −30 °C (p. 24)."
    },

    {
      "q": "Quale affermazione sulla scala Kelvin è corretta?",
      "options": [
        "Ammette valori negativi, come la scala Celsius",
        "Parte da 0 °C, la temperatura di fusione del ghiaccio",
        "Parte dallo zero assoluto, pari a −273,15 °C",
        "Una variazione di 1 K equivale a una di 1,8 °C"
      ],
      "answer": 2,
      "explanation": "La scala Kelvin non ha valori negativi: parte dallo zero assoluto (0 K = −273,15 °C). Una variazione di 1 K equivale a 1 °C (pp. 23–24)."
    },

    {
      "q": "Indica l'affermazione ERRATA sulla densità del rame:",
      "options": [
        "È la stessa al livello del mare e in alta montagna",
        "Sulla Luna è minore, perché la gravità è minore",
        "Diminuisce se la temperatura del rame cresce",
        "1 cm³ e 1 m³ di rame hanno la stessa densità"
      ],
      "answer": 1,
      "explanation": "La densità è massa/volume e non dipende dalla gravità: sulla Luna cambia il peso, non la densità (pp. 18–19)."
    },

    {
      "q": "Due masse d'acqua a temperatura diversa vengono messe a contatto. Che cosa succede?",
      "options": [
        "L'acqua più calda acquista calore e si scalda",
        "L'acqua più calda cede calore e si raffredda",
        "La massa maggiore cede calore a quella minore",
        "Non si scambiano calore se le masse sono uguali"
      ],
      "answer": 1,
      "explanation": "Il trasferimento di calore avviene sempre dal corpo a temperatura maggiore a quello a temperatura minore (p. 25)."
    },

    {
      "q": "Per riscaldare 1 g di acqua occorre fornire:",
      "options": [
        "4,18 J, perché è il calore specifico dell'acqua",
        "1 J, perché la massa dell'acqua è 1 g",
        "4,18 kJ, perché 1 kcal corrisponde a 4,18 kJ",
        "Non si sa senza la variazione di temperatura"
      ],
      "answer": 3,
      "explanation": "q = C × m × ΔT: senza ΔT il calore non si può calcolare. 4,18 J servono per alzare di 1 °C la temperatura di 1 g di acqua (pp. 25–26)."
    },

    {
      "q": "Perché di notte l'acqua del mare non si raffredda molto?",
      "options": [
        "Perché ha un basso calore specifico",
        "Perché ha un elevato calore specifico",
        "Perché la sua densità aumenta",
        "Perché ha una temperatura di ebollizione alta"
      ],
      "answer": 1,
      "explanation": "L'acqua ha un calore specifico più alto delle sostanze comuni: si comporta come un «serbatoio di calore». La sabbia, con basso calore specifico, si raffredda in fretta (p. 26)."
    },

    {
      "q": "Le frecce sono vicine tra loro ma lontane dal centro del bersaglio. Le misure sono:",
      "options": [
        "Precise e accurate",
        "Precise ma poco accurate",
        "Accurate ma poco precise",
        "Né precise né accurate"
      ],
      "answer": 1,
      "explanation": "Precisione = misure vicine tra loro; accuratezza = vicinanza al valore vero (il centro). Qui c'è buona precisione e scarsa accuratezza (figura 33, p. 28)."
    }

  ]
};
