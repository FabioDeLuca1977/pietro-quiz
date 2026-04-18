// ============================================================
//  data/scienze/energia-cap1.js  (v2 — copertura completa)
//  Unità F — Cap. 1 FONTI DI ENERGIA (pagg. 242-251)
//
//  23 domande che coprono TUTTI i concetti del capitolo.
//  Verificato sulle foto del libro il 18/04/2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["energia-cap1"] = {

  id:              "energia-cap1",
  subject:         "scienze",
  title:           "Cap. 1 — Fonti di energia",
  description:     "Definizione, Sole, fonti, centrali, idrogeno, richiesta elettrica, EROEI",
  icon:            "⚡",
  version:         2,
  timePerQuestion: 20,

  questions: [

    // ── BASE (9 domande) ─────────────────────────────

    {
      q: "Come viene definita l'energia?",
      options: [
        "La capacità di un corpo o di un sistema di compiere un lavoro",
        "La forza con cui un corpo spinge un altro corpo",
        "La quantità di calore prodotta da un combustibile",
        "La velocità con cui un corpo si muove"
      ],
      answer: 0,
      explanation: "Il libro definisce l'energia come «la capacità di un corpo o di un sistema di corpi di compiere un lavoro»."
    },

    {
      q: "Secondo il principio di conservazione, l'energia...",
      options: [
        "si crea nelle centrali e si consuma nelle case",
        "si crea dal Sole e si distrugge sulla Terra",
        "non si crea né si distrugge, ma passa da una forma all'altra",
        "si conserva solo se non cambia forma"
      ],
      answer: 2,
      explanation: "Il principio di conservazione dice che l'energia «non si crea né si distrugge, ma passa da una forma all'altra»."
    },

    {
      q: "Quale di queste NON è una forma di energia citata dal libro?",
      options: [
        "Energia meccanica",
        "Energia termica",
        "Energia magnetica",
        "Energia atomica"
      ],
      answer: 2,
      explanation: "Le forme di energia citate sono: meccanica (movimento), termica (calore), luminosa (luce), chimica (legami), elettrica (cariche), atomica (nuclei)."
    },

    {
      q: "Quale percentuale dell'energia della Terra proviene dal Sole?",
      options: ["50%", "75%", "circa il 95%", "100%"],
      answer: 2,
      explanation: "Il Sole fornisce circa il 95% dell'energia; il restante 5% proviene dalla Terra (geotermica, maree, nucleare)."
    },

    {
      q: "Cosa sono le fonti primarie di energia?",
      options: [
        "Le fonti utilizzabili così come si trovano in natura",
        "Solo i combustibili fossili",
        "Le fonti che derivano da trasformazione di altre fonti",
        "Solo le fonti rinnovabili"
      ],
      answer: 0,
      explanation: "Le fonti primarie sono utilizzabili così come si trovano in natura (es. carbone, petrolio, gas naturale). Le fonti secondarie derivano dalla trasformazione delle primarie (es. energia elettrica)."
    },

    {
      q: "Cos'è l'EROEI?",
      options: [
        "Un tipo di centrale elettrica",
        "Un gas serra",
        "Il rapporto tra energia ricavata ed energia utilizzata per ricavarla",
        "Un tipo di combustibile"
      ],
      answer: 2,
      explanation: "EROEI = Energia Ricavata / Energia Utilizzata. Per essere conveniente, una tecnologia deve avere EROEI maggiore di 1."
    },

    {
      q: "Cos'è l'idrogeno dal punto di vista energetico?",
      options: [
        "Una fonte di energia rinnovabile",
        "Un vettore energetico, non una fonte",
        "Un combustibile fossile",
        "Un gas serra"
      ],
      answer: 1,
      explanation: "L'idrogeno non è una fonte di energia ma un vettore energetico, cioè una sostanza capace di far convertire una forma di energia in un'altra."
    },

    {
      q: "Quali sono i due elementi principali di una centrale elettrica?",
      options: [
        "Caldaia e trasformatore",
        "Camino e condensatore",
        "Pompa e serbatoio",
        "Turbina e alternatore"
      ],
      answer: 3,
      explanation: "Gli elementi principali della centrale elettrica sono la turbina (converte l'energia in moto rotatorio) e l'alternatore (converte il moto in elettricità)."
    },

    {
      q: "Su quale percentuale di combustibili fossili si basa oggi il sistema energetico mondiale?",
      options: ["30%", "50%", "95%", "80%"],
      answer: 3,
      explanation: "Il sistema energetico mondiale si basa per l'80% sui combustibili fossili. Pongono un doppio problema: sono inquinanti e vanno incontro a esaurimento."
    },

    // ── MEDIO (9 domande) ────────────────────────────

    {
      q: "Quando l'energia passa da un corpo all'altro o cambia forma, cosa succede a una parte di essa?",
      options: [
        "Viene distrutta per sempre",
        "Si trasforma totalmente in movimento",
        "Resta immagazzinata nei legami chimici",
        "Si disperde spesso sotto forma di calore"
      ],
      answer: 3,
      explanation: "Il libro dice che «nei vari passaggi, parte dell'energia si disperde sotto forma di energia termica (calore)». È il motivo per cui le trasformazioni energetiche non sono mai efficienti al 100%."
    },

    {
      q: "Perché si formano i venti secondo il libro?",
      options: [
        "Perché la Luna attira l'atmosfera",
        "Perché il Sole riscalda in modo diverso le varie zone del pianeta",
        "Perché l'acqua evapora dai mari",
        "Perché la Terra ruota su se stessa"
      ],
      answer: 1,
      explanation: "Il Sole riscalda in modo diverso le varie zone: dalle zone di terra calda salgono masse d'aria calda, mentre aria più fredda arriva dal basso creando il vento."
    },

    {
      q: "Come si formano i combustibili fossili secondo il libro?",
      options: [
        "In pochi decenni per compressione della sabbia",
        "In milioni di anni da enormi depositi di legname e resti di organismi animali e vegetali",
        "In laboratorio dall'uomo",
        "Direttamente dal calore della Terra profonda"
      ],
      answer: 1,
      explanation: "I combustibili fossili si formano in milioni di anni: il carbone da depositi di legname, petrolio e gas naturale da resti di organismi animali e vegetali."
    },

    {
      q: "Quando una risorsa rinnovabile è anche sostenibile?",
      options: [
        "Quando si riproduce almeno alla stessa velocità con cui viene utilizzata",
        "Quando non produce CO₂",
        "Quando è disponibile solo in Europa",
        "Quando è pulita al 100%"
      ],
      answer: 0,
      explanation: "Una risorsa rinnovabile è sostenibile se si riproduce almeno alla stessa velocità con cui viene utilizzata. Sole e vento sono sostenibili; le foreste vanno sfruttate razionalmente."
    },

    {
      q: "Quale fonte rinnovabile fa eccezione alla regola di «essere pulita» secondo il libro?",
      options: [
        "Il vento (eolico)",
        "Il sole (fotovoltaico)",
        "Le biomasse, che emettono particolato atmosferico",
        "Le maree"
      ],
      answer: 2,
      explanation: "Quasi tutte le rinnovabili sono pulite, perché non generano inquinanti né CO₂, tranne le biomasse che emettono quantità rilevanti di particolato atmosferico di varie dimensioni."
    },

    {
      q: "Cos'è il sistema energetico di un Paese?",
      options: [
        "Solo l'insieme delle centrali elettriche",
        "Solo i cavi ad alta tensione",
        "L'insieme delle abitazioni private",
        "L'insieme di tutte le fonti di energia e delle infrastrutture (raffinerie, rete elettrica, oleodotti, gasdotti)"
      ],
      answer: 3,
      explanation: "Il sistema energetico è l'insieme di tutte le fonti di energia e delle infrastrutture (raffinerie, rete elettrica, oleodotti, gasdotti ecc.) che servono per far funzionare un Paese."
    },

    {
      q: "A cosa serve il trasformatore nella centrale elettrica?",
      options: [
        "A produrre energia meccanica",
        "A innalzare la tensione per ridurre le perdite nel trasporto",
        "A raffreddare il vapore",
        "A bruciare il combustibile"
      ],
      answer: 1,
      explanation: "Il trasformatore innalza la tensione dell'elettricità prodotta dall'alternatore (es. da 20.000 V a 380.000 V) per ridurre le perdite durante il trasporto nelle linee ad alta tensione."
    },

    {
      q: "Cosa produce una cella a combustibile facendo reagire idrogeno e ossigeno?",
      options: [
        "Elettricità, acqua e calore",
        "Solo elettricità",
        "Petrolio e gas",
        "Benzina e CO₂"
      ],
      answer: 0,
      explanation: "Nella cella a combustibile: H₂ + ½ O₂ → H₂O + elettricità + calore. La cella va raffreddata perché funziona solo se la temperatura resta costante."
    },

    {
      q: "Perché l'energia elettrica deve essere prodotta e distribuita istante per istante?",
      options: [
        "Perché si deteriora nei cavi",
        "Perché i trasformatori si surriscaldano",
        "Perché le centrali lavorano solo di giorno",
        "Perché è difficile e costosa da immagazzinare"
      ],
      answer: 3,
      explanation: "L'energia elettrica è difficile e costosa da immagazzinare, quindi è preferibile produrla e distribuirla istante per istante. La richiesta varia: bassa di notte, alta di giorno."
    },

    {
      q: "Perché in Italia durante le ore soleggiate l'elettricità costa meno?",
      options: [
        "Perché di giorno la richiesta è bassa",
        "Perché il fotovoltaico aumenta la disponibilità di energia",
        "Perché le centrali a carbone si spengono",
        "Perché i trasformatori lavorano meglio al sole"
      ],
      answer: 1,
      explanation: "Il fotovoltaico ha aumentato la disponibilità di energia durante le ore soleggiate, contribuendo ad abbassare il costo dell'elettricità nel picco della mattina. Nei weekend estivi la domanda è spesso coperta interamente da rinnovabili."
    },

    // ── AVANZATO (4 domande) ─────────────────────────

    {
      q: "Quale di queste affermazioni sull'idrogeno come carburante per auto è CORRETTA?",
      options: [
        "È una fonte rinnovabile molto diffusa in natura",
        "La cella a combustibile funziona anche a temperature molto alte",
        "Le auto a idrogeno non si sono diffuse per costi, infiammabilità e mancanza di distribuzione",
        "L'idrogeno è meno infiammabile del metano"
      ],
      answer: 2,
      explanation: "Le auto a idrogeno non si sono diffuse perché: le celle usano costoso platino, l'idrogeno è più infiammabile del metano, serve una costosa rete di distribuzione su tutto il territorio."
    },

    {
      q: "Perché l'EROEI del petrolio è diminuito nel tempo?",
      options: [
        "Perché le risorse facili da estrarre si sono ridotte e serve più energia per estrarlo",
        "Perché il petrolio è diventato meno efficiente",
        "Perché le raffinerie sono più vecchie",
        "Perché cambiano i modelli delle auto"
      ],
      answer: 0,
      explanation: "Fino a qualche anno fa il petrolio aveva EROEI di circa 100; oggi è sceso intorno a 10. Le risorse più facili sono in esaurimento, quindi serve più energia per estrarre il petrolio rimasto."
    },

    {
      q: "Nel valutare la convenienza di una tecnologia energetica, cosa bisogna considerare oltre all'EROEI?",
      options: [
        "Solo il prezzo di mercato",
        "Approvvigionamento materie prime, ciclo di vita impianto (LCA), smaltimento rifiuti, costi ambientali e sanitari",
        "Solo il rendimento elettrico",
        "Solo la quantità di CO₂ prodotta"
      ],
      answer: 1,
      explanation: "Il calcolo dell'EROEI va integrato considerando tutta la filiera: approvvigionamento della materia prima, LCA (life cycle assessment) dell'impianto, smaltimento dei rifiuti e costi ambientali e sanitari (es. malattie respiratorie vicino alle centrali a carbone)."
    },

    {
      q: "Secondo le tabelle EROEI del libro, le fonti oggi più redditizie in termini di ritorno energetico sono:",
      options: [
        "I combustibili fossili tradizionali",
        "Il nucleare e le sabbie bituminose",
        "Le fonti di energia rinnovabile",
        "Solo il petrolio"
      ],
      answer: 2,
      explanation: "Come si vede dalle tabelle, oggi le fonti di energia rinnovabili (idroelettrico 30-100, eolico 10-80, fotovoltaico 3-60) sono spesso più redditizie dei fossili (petrolio 5-15, carbone 2-17) in termini di ritorno energetico."
    }

  ]
};
