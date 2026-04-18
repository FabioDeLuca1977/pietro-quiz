// ============================================================
//  data/scienze/energia-cap1.js  (v4 — copertura elenchi completa)
//  Unità F — Cap. 1 FONTI DI ENERGIA (pagg. 242-251)
//
//  33 domande che coprono i concetti chiave + didascalie
//  evidenziate nelle foto del libro.
//  Verificato sulle foto il 18/04/2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["energia-cap1"] = {

  id:              "energia-cap1",
  subject:         "scienze",
  title:           "Cap. 1 — Fonti di energia",
  description:     "Definizione, Sole, fonti, centrali, idrogeno, richiesta elettrica, EROEI",
  icon:            "⚡",
  version:         4,
  timePerQuestion: 20,

  questions: [

    // ── BASE (12 domande) ────────────────────────────

    {
      q: "Come viene definita l'energia?",
      options: [
        "La quantità di calore prodotta da un combustibile",
        "La forza con cui un corpo spinge un altro corpo",
        "La capacità di un corpo o di un sistema di compiere un lavoro",
        "La velocità con cui un corpo si muove"
      ],
      answer: 2,
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
      explanation: "Le forme di energia citate sono: meccanica (movimento), termica (calore), luminosa (luce), chimica (legami), elettrica (cariche), atomica (nuclei). L'energia magnetica non è elencata."
    },

    {
      q: "Dove si trova l'energia chimica?",
      options: [
        "Immagazzinata nei legami chimici, si libera con una reazione chimica",
        "Nel movimento dei corpi",
        "Nelle onde luminose",
        "Nei nuclei degli atomi"
      ],
      answer: 0,
      explanation: "L'energia chimica è immagazzinata nei legami chimici, che può liberarsi a seguito di una reazione chimica. Gli alimenti e i combustibili contengono energia chimica."
    },

    {
      q: "A cosa è dovuta l'energia elettrica?",
      options: [
        "Allo spostamento di cariche elettriche",
        "Al movimento meccanico dei corpi",
        "Al calore dei materiali",
        "Ai legami chimici"
      ],
      answer: 0,
      explanation: "L'energia elettrica è dovuta allo spostamento di cariche elettriche. L'energia atomica invece è quella presente nei nuclei degli atomi."
    },

    {
      q: "Quale percentuale dell'energia della Terra proviene dal Sole?",
      options: [
        "50%",
        "75%",
        "circa il 95%",
        "100%"],
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
        "Un vettore energetico, non una fonte",
        "Una fonte di energia rinnovabile",
        "Un combustibile fossile",
        "Un gas serra"
      ],
      answer: 0,
      explanation: "L'idrogeno non è una fonte di energia ma un vettore energetico, cioè una sostanza capace di far convertire una forma di energia in un'altra. Sulla Terra va ricavato dall'acqua o dal metano usando energia."
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
      options: [
        "30%",
        "50%",
        "95%",
        "80%"],
      answer: 3,
      explanation: "Il sistema energetico mondiale si basa per l'80% sui combustibili fossili. Pongono un doppio problema: sono inquinanti e vanno incontro a esaurimento."
    },

    {
      q: "Che differenza c'è tra centrale idroelettrica e centrale termoelettrica?",
      options: [
        "Nessuna, sono la stessa cosa",
        "L'idroelettrica usa il vento; la termoelettrica usa il sole",
        "L'idroelettrica trasforma energia meccanica dell'acqua; la termoelettrica brucia combustibili fossili per produrre calore e poi elettricità",
        "L'idroelettrica è più nuova, la termoelettrica è obsoleta"
      ],
      answer: 2,
      explanation: "La centrale idroelettrica trasforma l'energia meccanica dell'acqua in elettrica. La centrale termoelettrica trasforma prima in meccanica e poi in elettrica il calore prodotto bruciando carburanti fossili (carbone, gas)."
    },

    // ── MEDIO (14 domande) ───────────────────────────

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
        "Perché l'acqua evapora dai mari",
        "Perché il Sole riscalda in modo diverso le varie zone del pianeta",
        "Perché la Terra ruota su se stessa"
      ],
      answer: 2,
      explanation: "Il Sole riscalda in modo diverso le varie zone: dalle zone di terra calda salgono masse d'aria calda, mentre aria più fredda arriva dal basso creando il vento."
    },

    {
      q: "Come si forma l'aria calda secondo il libro?",
      options: [
        "Per effetto dei raggi solari",
        "Per l'evaporazione dei fiumi",
        "Per la combustione dei combustibili fossili",
        "Per il movimento delle nuvole"
      ],
      answer: 0,
      explanation: "L'aria calda si forma per effetto dei raggi solari. Gli effetti del calore del Sole sono tre: l'aria calda (raggi solari), i venti (riscaldamento diseguale delle zone) e i fiumi (piogge da evaporazione)."
    },

    {
      q: "Quali sono i tre effetti del CALORE del Sole citati dal libro?",
      options: [
        "Aria calda, venti, fiumi",
        "Fotosintesi, alimentazione, fossili",
        "Maree, correnti, geotermia",
        "Luce, suono, movimento"
      ],
      answer: 0,
      explanation: "Gli effetti del CALORE del Sole sono: aria calda (per raggi solari), venti (per riscaldamento diseguale), fiumi (alimentati da piogge di evaporazione). Gli effetti della LUCE invece sono: fotosintesi, catena alimentare, combustibili fossili."
    },

    {
      q: "Come crescono le piante secondo il libro?",
      options: [
        "Grazie alla luce, attraverso la fotosintesi",
        "Solo grazie al calore del terreno",
        "Utilizzando il vento come fonte di energia",
        "Direttamente dai combustibili fossili"
      ],
      answer: 0,
      explanation: "Le piante crescono grazie alla luce necessaria per la fotosintesi. Uomini e animali, a loro volta, trasformano l'energia chimica delle piante assunta con l'alimentazione per vivere e muoversi."
    },

    {
      q: "Come si formano i combustibili fossili secondo il libro?",
      options: [
        "In pochi decenni per compressione della sabbia",
        "Direttamente dal calore della Terra profonda",
        "In laboratorio dall'uomo",
        "In milioni di anni da enormi depositi di legname e resti di organismi animali e vegetali"
      ],
      answer: 3,
      explanation: "I combustibili fossili si formano in milioni di anni: il carbone da enormi depositi di legname, petrolio e gas naturale da resti di organismi animali e vegetali."
    },

    {
      q: "Come si alimentano i fiumi secondo il libro?",
      options: [
        "Con acqua proveniente dalle falde sotterranee",
        "Con acqua riciclata dalle centrali",
        "Solo con lo scioglimento dei ghiacciai",
        "Con piogge che si formano dalle nuvole create per l'evaporazione dell'acqua di mari, laghi e fiumi"
      ],
      answer: 3,
      explanation: "I fiumi sono alimentati dalle piogge che si formano dalle nuvole, a loro volta create per l'evaporazione dell'acqua di mari, laghi, fiumi ecc. Questo è uno degli effetti del calore del Sole, insieme alla formazione dei venti e all'aria calda."
    },

    {
      q: "Quali sono le fonti non rinnovabili citate dal libro?",
      options: [
        "Sole, vento, maree",
        "Biomasse e geotermia",
        "Solo il petrolio",
        "Combustibili fossili e uranio"
      ],
      answer: 3,
      explanation: "Le fonti non rinnovabili hanno bisogno di tempi lunghissimi (milioni di anni) per formarsi. Sono di questo tipo i combustibili fossili (carbone, petrolio, gas naturale) e l'uranio (usato nelle centrali nucleari)."
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
      q: "Quali sono TUTTE le fonti rinnovabili elencate dal libro?",
      options: [
        "Solo Sole e vento",
        "Petrolio, carbone e gas naturale",
        "Solo Sole, vento e biomasse",
        "Sole, vento, salti d'acqua, maree, correnti, geotermia, biomasse"
      ],
      answer: 3,
      explanation: "Le fonti rinnovabili citate dal libro sono: il Sole, il vento, i salti d'acqua, le maree, le correnti, la geotermia e le biomasse (legna, scarti dell'agricoltura ecc.). Sono quasi tutte pulite, tranne le biomasse che emettono particolato."
    },

    {
      q: "Quali sono i TRE vantaggi dell'energia elettrica citati dal libro?",
      options: [
        "Si autoproduce, è gratuita, è infinita",
        "Si può trasportare lontano, si può trasformare in altre forme, non produce emissioni inquinanti (se non da fonti fossili)",
        "Non si spegne mai, non si consuma, non richiede infrastrutture",
        "Produce lavoro, produce calore, produce suono"
      ],
      answer: 1,
      explanation: "L'energia elettrica presenta tre vantaggi principali: può essere trasportata molto lontano dal luogo di produzione, può essere trasformata in altre forme di energia (luminosa, meccanica ecc.), non produce emissioni inquinanti (se non è prodotta da fonti fossili)."
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
        "A bruciare il combustibile",
        "A raffreddare il vapore",
        "A innalzare la tensione per ridurre le perdite nel trasporto"
      ],
      answer: 3,
      explanation: "Il trasformatore innalza la tensione dell'elettricità prodotta dall'alternatore (es. da 20.000 V a 380.000 V) per ridurre le perdite durante il trasporto nelle linee ad alta tensione."
    },

    {
      q: "Nella sala macchine, come sono collegati turbina e alternatore?",
      options: [
        "Con cavi elettrici",
        "Con flange imbullonate che uniscono i due alberi",
        "Con tubi del vapore",
        "Con nastri trasportatori"
      ],
      answer: 1,
      explanation: "Turbina e alternatore formano un gruppo unico perché i loro alberi terminano con flange, cioè piastre imbullonate tra loro. L'organo rotante di ciascuna macchina è detto rotore."
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
      explanation: "Nella cella a combustibile: H₂ + ½ O₂ → H₂O + elettricità + calore. La cella è simile a una batteria ma con l'idrogeno immagazzinato in una bombola e l'ossigeno preso dall'aria. Va raffreddata perché la temperatura deve restare costante."
    },

    {
      q: "In natura dove si trova l'energia elettrica secondo il libro?",
      options: [
        "Solo nelle centrali create dall'uomo",
        "Nei fulmini e in alcuni animali come l'elettroforo (pesce elettrico del Rio delle Amazzoni)",
        "Nelle piante durante la fotosintesi",
        "Nel magma terrestre"
      ],
      answer: 1,
      explanation: "L'energia elettrica esiste in natura nei fulmini e in alcuni animali come i pesci elettrici. L'elettroforo, un'anguilla elettrica del Rio delle Amazzoni lunga oltre 2 m, emette scariche di 500 V (l'impianto di casa è 220 V)."
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
      explanation: "L'energia elettrica è difficile e costosa da immagazzinare, quindi è preferibile produrla e distribuirla istante per istante. Le centrali soddisfano la domanda in base a un costo variabile fissato dalla Borsa elettrica."
    },

    {
      q: "Perché di notte la richiesta di elettricità è più bassa?",
      options: [
        "Perché le centrali elettriche funzionano meno",
        "Perché le aziende sono chiuse e i consumi delle abitazioni sono drasticamente ridotti",
        "Perché fa freddo",
        "Perché c'è meno fotovoltaico disponibile"
      ],
      answer: 1,
      explanation: "Di notte c'è poca richiesta perché le aziende sono chiuse e i consumi delle abitazioni sono drasticamente ridotti. Di giorno la richiesta aumenta notevolmente. Il prezzo dell'elettricità varia di conseguenza: basso quando c'è poca richiesta, alto quando ce n'è molta."
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
      explanation: "Il fotovoltaico ha aumentato la disponibilità di energia durante le ore soleggiate, contribuendo ad abbassare il costo dell'elettricità nel picco della mattina. Nei weekend estivi soleggiati la domanda italiana è spesso coperta interamente dalle fonti rinnovabili."
    },

    {
      q: "Chi fissa il prezzo variabile dell'elettricità in Italia?",
      options: [
        "Il Ministero dell'Economia",
        "La Borsa elettrica",
        "Le singole centrali",
        "L'Unione Europea"
      ],
      answer: 1,
      explanation: "Le centrali elettriche soddisfano la domanda in base a un costo variabile fissato dalla Borsa elettrica. Quando c'è poca richiesta l'energia costa poco, quando ce n'è molta il prezzo aumenta."
    },

    // ── AVANZATO (7 domande) ─────────────────────────

    {
      q: "Quale di queste affermazioni sull'idrogeno come carburante per auto è CORRETTA?",
      options: [
        "È una fonte rinnovabile molto diffusa in natura",
        "La cella a combustibile funziona anche a temperature molto alte",
        "Le auto a idrogeno non si sono diffuse per costi, infiammabilità e mancanza di distribuzione",
        "L'idrogeno è meno infiammabile del metano"
      ],
      answer: 2,
      explanation: "Le auto a idrogeno non si sono diffuse perché: le celle usano costose leghe di platino, l'idrogeno è più infiammabile del metano e richiede alta sicurezza, serve una costosa rete di distribuzione su tutto il territorio."
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
      explanation: "Il calcolo dell'EROEI va integrato considerando tutta la filiera: approvvigionamento della materia prima, LCA (life cycle assessment) dell'impianto, smaltimento dei rifiuti (es. scorie nucleari, ceneri del carbone) e costi ambientali e sanitari (es. malattie respiratorie vicino alle centrali a carbone)."
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
    },

    {
      q: "Quale dei seguenti scarti va considerato nello smaltimento dei rifiuti energetici?",
      options: [
        "Solo il CO₂ delle centrali",
        "Scorie nucleari e ceneri delle centrali a carbone",
        "Solo l'acqua di raffreddamento",
        "Solo i fumi delle centrali"
      ],
      answer: 1,
      explanation: "Lo smaltimento dei rifiuti di produzione è un costo della filiera: le scorie nucleari richiedono depositi speciali, le ceneri delle centrali a carbone vengono stoccate in discariche o riutilizzate nei cementifici."
    },

    {
      q: "Perché il fotovoltaico ha contribuito a cambiare il mercato elettrico italiano?",
      options: [
        "Perché ha reso inutili le centrali tradizionali",
        "Perché aumenta la disponibilità di energia nelle ore soleggiate, abbassando il prezzo e arrivando a coprire anche il 100% del fabbisogno nei weekend estivi",
        "Perché ha fatto aumentare i consumi di gas",
        "Perché è stato vietato dalla Borsa elettrica"
      ],
      answer: 1,
      explanation: "Il fotovoltaico ha aumentato la disponibilità nelle ore soleggiate, abbassando il costo mattutino. Nei fine settimana estivi, con tempo soleggiato, la domanda italiana nelle ore di maggior sole è spesso coperta interamente dalle rinnovabili."
    },

    {
      q: "Cosa ha in comune una torcia elettrica e una diga idroelettrica?",
      options: [
        "Producono entrambe combustibili fossili",
        "Sono esempi di trasformazione di energia: meccanica → elettrica → (luminosa/termica), con dispersione di calore",
        "Funzionano solo di notte",
        "Non producono energia"
      ],
      answer: 1,
      explanation: "Entrambe trasformano energia meccanica in elettrica. Nella torcia manuale: movimento della mano → corrente elettrica → luce dei LED. In centrale idroelettrica: moto dell'acqua → turbina → alternatore → rete. In entrambi i casi parte dell'energia si disperde come calore."
    }

  ]
};