// ============================================================
//  data/scienze/energia-cap3.js
//  Unità F — Cap. 3 FONTI RINNOVABILI (pagg. 272-279)
//
//  75 domande che coprono TUTTO il capitolo (pp. 272-279):
//  - §1 Fonti rinnovabili: sfida per il futuro
//  - §2 Energia solare (caratteristiche e svantaggi)
//  - §3 Solare termodinamico CSP (parabolici, torre solare)
//  - §4 Centrale fotovoltaica + Solar Impulse
//  - §5 Idroelettrica (standard, pompaggio, fluviale, impatti)
//  - §6 Energia geotermica
//  + 19 domande di ripasso che testano tutti i dati e dettagli del libro
//
//  Verificato sulle foto del libro il 23/05/2026.
//  Allineato a cap1.js v4 e cap2.js.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["energia-cap3"] = {

  // ── METADATI ─────────────────────────────────────────────
  id:              "energia-cap3",
  subject:         "tecnologia",
  title:           "Cap. 3 — Fonti rinnovabili",
  description:     "Solare, idroelettrico, geotermico, biomasse, fotovoltaico",
  icon:            "🌱",
  version:         1,
  timePerQuestion: 20,

  // ── DOMANDE (57) ─────────────────────────────────────────
  questions: [

    // ════════════════════════════════════════════════════════
    //  §1 — DEFINIZIONI E SFIDA PER IL FUTURO  (5)
    // ════════════════════════════════════════════════════════

    {
      q: "Cosa significa che una fonte di energia è rinnovabile?",
      options: [
        "Che si esaurisce in 30-50 anni",
        "Che non si esaurisce",
        "Che si trova solo in Europa",
        "Che si produce in laboratorio"
      ],
      answer: 1,
      explanation: "Le fonti rinnovabili sono fonti che non si esauriscono. Derivano dal Sole e dalla Terra ed esisteranno finché esisteranno il Sole e la Terra."
    },

    {
      q: "Da cosa derivano le fonti rinnovabili?",
      options: [
        "Dal carbone e dal petrolio",
        "Dal Sole e dalla Terra",
        "Solo dal Sole",
        "Dall'uranio"
      ],
      answer: 1,
      explanation: "Derivano dal Sole e dalla Terra: per questo esisteranno finché esisteranno il Sole e la Terra."
    },

    {
      q: "Le fonti rinnovabili sono usate soprattutto per produrre:",
      options: [
        "Calore per le case",
        "Energia elettrica",
        "Carburanti per auto",
        "Acqua potabile"
      ],
      answer: 1,
      explanation: "Sono usate soprattutto per produrre energia elettrica tramite centrali solari, idroelettriche, eoliche, geotermiche e a biomasse."
    },

    {
      q: "Quale di questi NON è un altro utilizzo delle rinnovabili citato dal libro?",
      options: [
        "Il Sole scalda l'acqua sanitaria delle case",
        "Il vento aiuta la navigazione delle grandi navi",
        "Le biomasse producono biocombustibili",
        "Il vento riscalda l'aria delle abitazioni"
      ],
      answer: 3,
      explanation: "Gli altri utilizzi citati sono 3: Sole per acqua sanitaria, vento per navigazione delle grandi navi, biomasse per biocombustibili. Non si parla di riscaldare l'aria con il vento."
    },

    {
      q: "Entro quanti anni l'Europa vuole abbandonare totalmente le fonti non rinnovabili?",
      options: [
        "10-20 anni",
        "30-50 anni",
        "100 anni",
        "Entro il 2030"
      ],
      answer: 1,
      explanation: "L'obiettivo europeo è arrivare al totale abbandono delle fonti non rinnovabili entro 30-50 anni."
    },

    // ════════════════════════════════════════════════════════
    //  §2 — ENERGIA SOLARE  (5)
    // ════════════════════════════════════════════════════════

    {
      q: "L'energia che arriva dal Sole sulla Terra in un'ora equivale a quella consumata:",
      options: [
        "In un giorno da tutte le attività umane",
        "In un mese da tutte le attività umane",
        "In un anno da tutte le attività umane",
        "In 10 anni da tutte le attività umane"
      ],
      answer: 2,
      explanation: "In un'ora arriva sulla Terra un'energia pari a quella che tutte le attività umane consumano in un anno intero."
    },

    {
      q: "Quali sono i due svantaggi dell'energia solare?",
      options: [
        "È costosa e pericolosa",
        "È diluita e discontinua",
        "È inquinante e rara",
        "È pesante e instabile"
      ],
      answer: 1,
      explanation: "Il Sole è una fonte molto diluita (servono grandi territori per raccoglierla) e discontinua (presente solo nelle ore diurne)."
    },

    {
      q: "Cosa significa che il Sole è una fonte diluita?",
      options: [
        "Che si mescola con l'acqua",
        "Che serve molto territorio per raccoglierla in quantità significative",
        "Che è poco intensa di notte",
        "Che si trasporta liquefatta"
      ],
      answer: 1,
      explanation: "Diluita = poco concentrata. Servono vasti territori per raccoglierla in quantità significative."
    },

    {
      q: "Come è stato risolto il problema della discontinuità dell'energia solare?",
      options: [
        "Con grandi batterie elettriche",
        "Con un fluido a sali fusi",
        "Con specchi più grandi",
        "Con il vento di notte"
      ],
      answer: 1,
      explanation: "Si usa un fluido a sali fusi che raggiunge temperature altissime. Stoccato in serbatoi isolati termicamente, può essere usato di notte per produrre elettricità in modo continuativo."
    },

    {
      q: "Quali sono i due tipi di centrali solari?",
      options: [
        "A concentrazione e fotovoltaiche",
        "A torre e a parabola",
        "Termiche e meccaniche",
        "Diurne e notturne"
      ],
      answer: 0,
      explanation: "Le centrali a concentrazione sfruttano il calore del Sole; le centrali fotovoltaiche sfruttano la luce."
    },

    // ════════════════════════════════════════════════════════
    //  §3 — SOLARE TERMODINAMICO CSP  (8)
    // ════════════════════════════════════════════════════════

    {
      q: "Cosa significa la sigla CSP?",
      options: [
        "Centrale Solare Potenziata",
        "Concentrated Solar Power",
        "Continuous Solar Production",
        "Centrale Solare Parabolica"
      ],
      answer: 1,
      explanation: "CSP = Concentrated Solar Power, cioè solare termodinamico a concentrazione."
    },

    {
      q: "Quali sono i due tipi principali di impianti CSP?",
      options: [
        "A specchi parabolici e a torre solare",
        "A pannelli e a celle",
        "A sali fusi e a vapore",
        "A eliostati e a inverter"
      ],
      answer: 0,
      explanation: "I due tipi principali sono: centrali a specchi parabolici e centrali a torre solare."
    },

    {
      q: "Gli specchi parabolici sono montati su una struttura:",
      options: [
        "Mobile che segue il Sole",
        "Fissa orientata verso sud",
        "Mobile che segue le nuvole",
        "Fissa orientata verso nord"
      ],
      answer: 1,
      explanation: "ATTENZIONE: gli specchi parabolici sono montati su struttura metallica fissa orientata verso sud. Sono gli eliostati della torre solare che si muovono per seguire il Sole, non i parabolici."
    },

    {
      q: "Dove si concentrano i raggi del Sole nella centrale a specchi parabolici?",
      options: [
        "Sulla caldaia in cima alla torre",
        "Sul tubo ricevitore posto nel fuoco della parabola",
        "Sui pannelli al centro",
        "Sul serbatoio di sali fusi"
      ],
      answer: 1,
      explanation: "I raggi si concentrano sul tubo ricevitore distanziato dalle parabole e posto sul loro fuoco."
    },

    {
      q: "Cosa scorre nel tubo ricevitore degli specchi parabolici?",
      options: [
        "Direttamente acqua bollente",
        "Un fluido che assorbe il calore",
        "Vapore già pronto",
        "Aria calda"
      ],
      answer: 1,
      explanation: "Nel tubo circola un fluido che assorbe il calore e lo porta alla centrale, dove riscalda l'acqua che diventa vapore in pressione e aziona il gruppo turbina-alternatore."
    },

    {
      q: "Da cosa è formato un eliostato?",
      options: [
        "Uno specchio parabolico fisso",
        "Uno specchio piano montato su un gambo cilindrico",
        "Una torre con pannelli",
        "Un tubo con fluido"
      ],
      answer: 1,
      explanation: "Ogni eliostato è formato da uno specchio piano montato su un grosso gambo cilindrico che contiene il meccanismo per inseguire il Sole."
    },

    {
      q: "Come sono disposti gli eliostati e perché?",
      options: [
        "A file parallele, per risparmiare spazio",
        "A file concentriche con distanza crescente, per evitare ombre",
        "A cerchio chiuso, per concentrare i raggi",
        "In linea retta, per seguire il Sole"
      ],
      answer: 1,
      explanation: "Sono disposti per file concentriche; la distanza tra le file aumenta allontanandosi dalla torre per evitare che gli specchi si facciano ombra tra loro."
    },

    {
      q: "L'impianto di Ivanpah (deserto del Mojave, USA) ha:",
      options: [
        "1 torre da 392 MW",
        "3 torri per un totale di 392 MW",
        "10 torri da 97 MW",
        "2 torri da 850 MW"
      ],
      answer: 1,
      explanation: "Ivanpah ha 3 torri che alimentano altrettanti gruppi turbina-alternatore, per una potenza totale di 392 MW."
    },

    // ════════════════════════════════════════════════════════
    //  §4 — CENTRALE FOTOVOLTAICA + SOLAR IMPULSE  (11)
    // ════════════════════════════════════════════════════════

    {
      q: "Carrera Pinto (deserto di Atacama, Cile) è un impianto di che tipo?",
      options: [
        "Solare a torre",
        "Solare a specchi parabolici",
        "Parco fotovoltaico",
        "Centrale idroelettrica"
      ],
      answer: 2,
      explanation: "ATTENZIONE: Carrera Pinto è un parco fotovoltaico da 97 MW, non una centrale CSP."
    },

    {
      q: "Quante tonnellate di CO₂ all'anno verrebbero immesse in atmosfera se la stessa energia di Carrera Pinto fosse prodotta con combustibili fossili?",
      options: [
        "1.270 tonnellate",
        "12.700 tonnellate",
        "127.000 tonnellate",
        "1.270.000 tonnellate"
      ],
      answer: 2,
      explanation: "Sarebbero 127 mila tonnellate di anidride carbonica ogni anno."
    },

    {
      q: "Quali sono le dimensioni di una cella fotovoltaica?",
      options: [
        "Circa 4 × 4 cm",
        "Circa 16 × 16 cm",
        "Circa 50 × 50 cm",
        "Circa 1 × 1 metro"
      ],
      answer: 1,
      explanation: "La cella fotovoltaica ha dimensioni di circa 16 × 16 cm."
    },

    {
      q: "Che tipo di corrente produce una cella fotovoltaica quando la luce la colpisce?",
      options: [
        "Corrente alternata",
        "Corrente continua",
        "Corrente magnetica",
        "Corrente solare"
      ],
      answer: 1,
      explanation: "La cella produce corrente continua. Per immetterla nella rete servirà poi l'inverter che la trasforma in alternata."
    },

    {
      q: "Da quante celle è formato un modulo base e quanti watt produce?",
      options: [
        "30 celle, 150 watt",
        "60 celle, 300 watt",
        "100 celle, 500 watt",
        "60 celle, 600 watt"
      ],
      answer: 1,
      explanation: "Un modulo base è costituito da 60 celle con una potenza in uscita di circa 300 watt."
    },

    {
      q: "Metti in ordine corretto dal più piccolo al più grande:",
      options: [
        "Cella → Pannello → Modulo → Centrale",
        "Cella → Modulo → Pannello → Centrale",
        "Modulo → Cella → Pannello → Centrale",
        "Pannello → Modulo → Cella → Centrale"
      ],
      answer: 1,
      explanation: "Ordine corretto: Cella → Modulo (60 celle) → Pannello (più moduli) → Centrale (centinaia di pannelli)."
    },

    {
      q: "Quante ore al giorno funziona in media una centrale fotovoltaica?",
      options: [
        "6 ore",
        "8 ore",
        "12 ore",
        "24 ore"
      ],
      answer: 1,
      explanation: "La centrale fotovoltaica funziona in media otto ore al giorno."
    },

    {
      q: "A cosa servono gli inverter?",
      options: [
        "A girare i pannelli verso il Sole",
        "A trasformare corrente continua in corrente alternata",
        "A immagazzinare energia di notte",
        "A pulire i pannelli"
      ],
      answer: 1,
      explanation: "Gli inverter trasformano la corrente continua in uscita dai pannelli in corrente alternata, per immetterla nella rete nazionale."
    },

    {
      q: "Il Lon-gyangxia Dam Solar Park (Cina) ha quale superficie e potenza?",
      options: [
        "27 km² e 850 MW",
        "46 km² e 2 GW",
        "100 km² e 1 GW",
        "27 km² e 392 MW"
      ],
      answer: 0,
      explanation: "Il Lon-gyangxia Dam Solar Park ha una superficie di 27 km² e produce 850 MW. La centrale in costruzione (sempre in Cina) avrà invece 46 km² e 2 GW."
    },

    {
      q: "Nel 2012 l'aereo Solar Impulse ha stabilito il Guinness volando:",
      options: [
        "10 ore con sola energia solare",
        "26 ore con sola energia solare",
        "100 ore con sola energia solare",
        "Un giorno intero"
      ],
      answer: 1,
      explanation: "Nel 2012 ha volato per 26 ore usando solo energia solare, entrando nel Guinness dei primati."
    },

    {
      q: "In che anno Solar Impulse ha completato il giro del mondo?",
      options: [
        "2012",
        "2013",
        "2016",
        "2020"
      ],
      answer: 2,
      explanation: "Nel luglio 2016 Solar Impulse è atterrato nello stesso aeroporto degli Emirati Arabi da cui era partito un anno e 4 mesi prima."
    },

    // ════════════════════════════════════════════════════════
    //  §5 — IDROELETTRICA STANDARD  (10)
    // ════════════════════════════════════════════════════════

    {
      q: "L'energia idroelettrica si ottiene da:",
      options: [
        "Un salto d'acqua",
        "La bollitura dell'acqua",
        "La pressione del mare",
        "Le onde del fiume"
      ],
      answer: 0,
      explanation: "Si ottiene da un salto d'acqua; si sfruttano dislivelli che vanno da pochi metri (mini idroelettrico) fino a centinaia di metri."
    },

    {
      q: "L'energia idroelettrica ha origine dal ciclo dell'acqua alimentato da:",
      options: [
        "La pioggia",
        "Il Sole",
        "Il vento",
        "La gravità"
      ],
      answer: 1,
      explanation: "Il ciclo dell'acqua è alimentato dal Sole, che fa evaporare l'acqua dai mari. Il vapore va sulle montagne, condensa, piove, e l'acqua torna al mare per gravità."
    },

    {
      q: "Il componente n. 1 della centrale idroelettrica standard è:",
      options: [
        "L'invaso",
        "La diga",
        "Il canale di derivazione",
        "L'ugello"
      ],
      answer: 1,
      explanation: "1. Diga: sbarramento artificiale in cemento armato che chiude la valle creando l'invaso."
    },

    {
      q: "Cos'è l'invaso?",
      options: [
        "Un tubo che porta l'acqua",
        "Un lago artificiale ad alta quota creato dalla diga",
        "La centrale a fondovalle",
        "La turbina che gira"
      ],
      answer: 1,
      explanation: "L'invaso è la conca ad alta quota sbarrata dalla diga: forma un lago artificiale. L'acqua è reintegrata dai torrenti che vi sfociano."
    },

    {
      q: "Il canale di derivazione è un tubo:",
      options: [
        "Di piccolo diametro, lungo pochi metri",
        "Di grosso diametro (3-6 m), lungo anche 20-30 km",
        "Verticale, lungo 1000 metri",
        "Di metallo, lungo 100 km"
      ],
      answer: 1,
      explanation: "Il canale di derivazione è un tubo di grosso diametro (da 3 a 6 m), lungo anche 20 o 30 km, collocato in lieve pendenza dentro la montagna."
    },

    {
      q: "La condotta forzata può coprire un dislivello di:",
      options: [
        "100 o 200 metri",
        "500 metri massimo",
        "1000 o 2000 metri",
        "10.000 metri"
      ],
      answer: 2,
      explanation: "La condotta forzata scende sul fianco della montagna e può coprire un dislivello anche di 1000 o 2000 metri."
    },

    {
      q: "Cos'è l'ugello nella centrale idroelettrica?",
      options: [
        "Un tubo che porta acqua all'invaso",
        "Una strozzatura alla fine della condotta da cui l'acqua esce ad alta velocità",
        "Una pompa elettrica",
        "Una valvola di sicurezza"
      ],
      answer: 1,
      explanation: "L'ugello è una strozzatura alla fine della condotta da cui l'acqua esce ad alta velocità, per colpire le pale della turbina Pelton."
    },

    {
      q: "Quale tipo di turbina si usa nella centrale idroelettrica standard?",
      options: [
        "Turbina Kaplan",
        "Turbina Pelton",
        "Turbina Francis",
        "Turbina eolica"
      ],
      answer: 1,
      explanation: "Nella centrale standard si usa la turbina Pelton: il getto d'acqua colpisce le pale facendola ruotare con forza."
    },

    {
      q: "L'alternatore della centrale idroelettrica standard è situato:",
      options: [
        "Al livello inferiore della centrale",
        "Al livello superiore della centrale, collegato alla turbina",
        "Dentro la condotta forzata",
        "Sopra la diga"
      ],
      answer: 1,
      explanation: "L'alternatore è al livello superiore della centrale, messo in rotazione dalla turbina a cui è collegato, e genera corrente elettrica."
    },

    {
      q: "A cosa serve il trasformatore?",
      options: [
        "A trasformare l'acqua in vapore",
        "A innalzare la tensione per ridurre le perdite nel trasporto",
        "A girare la turbina",
        "A pulire l'acqua"
      ],
      answer: 1,
      explanation: "Il trasformatore innalza la tensione della corrente elettrica per ridurre le perdite durante il trasporto di elettricità."
    },

    {
      q: "Quanti gruppi turbina-alternatore ha la centrale di Presenzano (Volturno, Campania) e qual è la potenza totale?",
      options: [
        "2 gruppi da 500 MW, totale 1000 MW",
        "4 gruppi da 250 MW, totale 1000 MW",
        "10 gruppi da 100 MW, totale 1000 MW",
        "4 gruppi da 1000 MW, totale 4000 MW"
      ],
      answer: 1,
      explanation: "Presenzano ha 4 gruppi da 250 MW ciascuno, per una potenza complessiva di 1000 MW."
    },

    // ════════════════════════════════════════════════════════
    //  §5 — POMPAGGIO  (3)
    // ════════════════════════════════════════════════════════

    {
      q: "A cosa serve la centrale di generazione e pompaggio?",
      options: [
        "A produrre più energia di giorno",
        "A non sprecare l'eccedenza di elettricità delle centrali termoelettriche",
        "A pompare acqua nelle città",
        "A raffreddare le turbine"
      ],
      answer: 1,
      explanation: "Serve a non sprecare l'eccedenza di elettricità prodotta dalle centrali termoelettriche di notte, quando la richiesta è minima ma spegnerle e riattivarle sarebbe lungo e costoso."
    },

    {
      q: "Cosa succede nella centrale di pompaggio di notte?",
      options: [
        "L'acqua scende e produce corrente",
        "La corrente in eccesso pompa l'acqua dal bacino di accumulo fino all'invaso a monte",
        "La turbina si ferma completamente",
        "Si accende solo l'illuminazione"
      ],
      answer: 1,
      explanation: "Di notte la corrente in eccesso aziona l'alternatore che gira come motore, mettendo in moto la turbina-pompa: l'acqua viene risollevata dal bacino di accumulo fino all'invaso a monte."
    },

    {
      q: "Qual è il rendimento circa di una centrale di pompaggio?",
      options: [
        "Circa il 50%",
        "Circa l'80%",
        "Circa il 100%",
        "Circa il 120%"
      ],
      answer: 1,
      explanation: "Il rendimento è circa l'80%: si spende più energia per sollevare l'acqua di quanta se ne ricavi, ma così si conserva energia che altrimenti andrebbe perduta."
    },

    // ════════════════════════════════════════════════════════
    //  §5 — CENTRALE FLUVIALE  (4)
    // ════════════════════════════════════════════════════════

    {
      q: "La centrale fluviale funziona con:",
      options: [
        "L'acqua fluente di un fiume",
        "L'acqua di un invaso ad alta quota",
        "L'acqua del mare",
        "L'acqua piovana"
      ],
      answer: 0,
      explanation: "La centrale fluviale funziona con l'acqua fluente (che scorre) di un fiume. Una diga crea un piccolo dislivello e l'acqua passa nella centrale costruita dentro la diga."
    },

    {
      q: "Quale turbina si usa nella centrale fluviale?",
      options: [
        "Turbina Pelton",
        "Turbina Kaplan",
        "Turbina Francis",
        "Turbina eolica"
      ],
      answer: 1,
      explanation: "Nella centrale fluviale si usa la turbina Kaplan, mossa dall'acqua in uscita dal distributore."
    },

    {
      q: "Quanti elementi compongono lo schema della centrale fluviale?",
      options: [
        "3 elementi",
        "5 elementi",
        "8 elementi",
        "10 elementi"
      ],
      answer: 1,
      explanation: "I 5 elementi sono: 1. Griglia, 2. Distributore, 3. Turbina Kaplan, 4. Alternatore, 5. Collettore di scarico."
    },

    {
      q: "L'impianto di Itaparica (Brasile, fiume São Francisco) ha:",
      options: [
        "4 gruppi da 250 MW = 1000 MW",
        "10 gruppi da 250 MW = 2500 MW",
        "3 torri da 392 MW",
        "5 gruppi da 100 MW"
      ],
      answer: 1,
      explanation: "Itaparica ha 10 gruppi da 250 MW ognuno, per una potenza complessiva di 2500 MW."
    },

    // ════════════════════════════════════════════════════════
    //  §5 — LAGHI ARTIFICIALI E TERRITORIO  (2)
    // ════════════════════════════════════════════════════════

    {
      q: "Quale di questi NON è un impatto negativo dei laghi artificiali?",
      options: [
        "Modificano fauna e flora",
        "Sottraggono terreno ad agricoltura",
        "Producono elettricità con bassi costi",
        "Riducono l'acqua a valle dei fiumi"
      ],
      answer: 2,
      explanation: "Produrre elettricità a bassi costi è un VANTAGGIO, non un impatto negativo. Gli impatti negativi sono: modifiche all'ambiente naturale, sottrazione di terreno, riduzione dell'acqua a valle (e trasferimenti di popolazioni nei casi estremi)."
    },

    {
      q: "Quale grande diga in Cina ha costretto intere popolazioni a trasferirsi?",
      options: [
        "Diga del Kurobe",
        "Diga delle Tre Gole",
        "Diga di Itaparica",
        "Diga di San Fiorano"
      ],
      answer: 1,
      explanation: "La Diga delle Tre Gole in Cina, costruita sul Fiume Azzurro, è citata come caso estremo in cui intere popolazioni sono state costrette a trasferirsi."
    },

    // ════════════════════════════════════════════════════════
    //  §6 — ENERGIA GEOTERMICA  (7)
    // ════════════════════════════════════════════════════════

    {
      q: "L'energia geotermica si origina nel:",
      options: [
        "Mare profondo",
        "Magma (rocce fuse) sotto la crosta terrestre",
        "Vento delle alte quote",
        "Sole al centro della Terra"
      ],
      answer: 1,
      explanation: "Si origina nel magma (rocce fuse) che si trova sotto la crosta terrestre e risale verso la superficie."
    },

    {
      q: "In un'area geotermica, l'acqua piovana che filtra nel terreno esce come:",
      options: [
        "Ghiaccio",
        "Geyser o soffioni",
        "Pioggia salata",
        "Lava"
      ],
      answer: 1,
      explanation: "L'acqua piovana si scalda, diventa vapore in pressione ed esce dalle crepe del terreno sotto forma di soffioni o geyser."
    },

    {
      q: "Perché i vapordotti hanno andamento a zig-zag?",
      options: [
        "Per riscaldare meglio il vapore",
        "Per resistere alla dilatazione termica",
        "Per filtrare l'acqua",
        "Per girare le turbine"
      ],
      answer: 1,
      explanation: "I vapordotti hanno andamento a zig-zag per resistere alla dilatazione termica: il vapore al loro interno ha una temperatura di 150-260 °C."
    },

    {
      q: "Qual è la temperatura del vapore nei vapordotti?",
      options: [
        "50-100 °C",
        "150-260 °C",
        "500-1000 °C",
        "2000 °C"
      ],
      answer: 1,
      explanation: "Il vapore nei vapordotti ha temperatura di 150-260 °C."
    },

    {
      q: "Quale componente della centrale geotermica trasforma il vapore in acqua?",
      options: [
        "Trasformatore",
        "Condensatore",
        "Rubinetto di presa",
        "Tubo di reiniezione"
      ],
      answer: 1,
      explanation: "Il condensatore è una serpentina in cui il vapore in uscita dalla turbina ritorna acqua."
    },

    {
      q: "Come funziona la torre di raffreddamento?",
      options: [
        "L'acqua sale, il vapore scende, si crea vento",
        "L'acqua calda cade a pioggia, il vapore sale, l'aria fredda entra dal basso e raffredda",
        "Si accende un fuoco al centro",
        "Si pompa acqua del mare"
      ],
      answer: 1,
      explanation: "L'acqua calda del condensatore cade a pioggia dentro la torre. Il vapore sale; l'aria esterna risucchiata dalle aperture alla base raffredda il vapore facendolo diventare acqua che alimenta il serbatoio di raccolta."
    },

    {
      q: "Dove si trova la principale zona geotermica italiana?",
      options: [
        "Etna (Sicilia)",
        "Larderello (Toscana)",
        "Vesuvio (Campania)",
        "Stromboli (Sicilia)"
      ],
      answer: 1,
      explanation: "In Italia la geotermia è sfruttata nella zona di Larderello (Toscana), dove l'impianto più grande produce 250 MW di potenza."
    },

    // ════════════════════════════════════════════════════════
    //  RIPASSO COMPLETO — DATI E DETTAGLI MANCANTI  (19)
    // ════════════════════════════════════════════════════════

    {
      q: "Quali tipi di centrali producono energia elettrica da fonti rinnovabili?",
      options: [
        "Solo solari ed eoliche",
        "Solari, idroelettriche, eoliche, geotermiche, a biomasse",
        "Solo idroelettriche e geotermiche",
        "Solo a carbone e nucleari"
      ],
      answer: 1,
      explanation: "Le centrali da fonti rinnovabili citate sono 5 tipi: solari, idroelettriche, eoliche, geotermiche e a biomasse."
    },

    {
      q: "Quale componente è comune a quasi tutte le centrali da fonti rinnovabili?",
      options: [
        "Il pannello fotovoltaico",
        "Il gruppo turbina-alternatore",
        "L'eliostato",
        "La condotta forzata"
      ],
      answer: 1,
      explanation: "Il gruppo turbina-alternatore è presente nella centrale a torre solare, a specchi parabolici, idroelettrica standard, di pompaggio, fluviale e geotermica. Solo il fotovoltaico produce direttamente corrente elettrica dalla luce senza turbina."
    },

    {
      q: "Quale Paese europeo è in testa nei consumi da fonti rinnovabili nel 2016 secondo il grafico Eurostat?",
      options: [
        "Italia",
        "Germania",
        "Svezia",
        "Spagna"
      ],
      answer: 2,
      explanation: "Secondo il grafico Eurostat di pagina 273, la classifica dei Paesi europei con maggior consumo da rinnovabili nel 2016 vede in testa: Svezia, Finlandia, Lettonia, Austria, Danimarca."
    },

    {
      q: "Nella centrale a torre solare, nella caldaia in cima alla torre si raggiungono temperature di:",
      options: [
        "Decine di gradi",
        "Centinaia di gradi",
        "Migliaia di gradi",
        "Milioni di gradi"
      ],
      answer: 1,
      explanation: "Nella caldaia in cima alla torre solare si raggiungono temperature di centinaia di gradi che producono vapore surriscaldato. Il vapore aziona il gruppo turbina-alternatore generando elettricità."
    },

    {
      q: "Quanto è grande un singolo pannello fotovoltaico di una centrale?",
      options: [
        "Tra 1 e 5 m²",
        "Tra 10 e 30 m²",
        "Tra 50 e 150 m² (come un appartamento)",
        "Oltre 500 m²"
      ],
      answer: 2,
      explanation: "Ogni pannello fotovoltaico di una centrale è grande come un appartamento, tra i 50 e i 150 m². La centrale è formata da centinaia di questi pannelli."
    },

    {
      q: "Come è mantenuto orientato un pannello fotovoltaico nella centrale?",
      options: [
        "È fisso, orientato a sud",
        "Ha un sostegno con meccanismo che lo mantiene perpendicolare ai raggi del Sole",
        "È mobile ma seguito a mano",
        "Ruota a 360° ogni ora"
      ],
      answer: 1,
      explanation: "Ogni pannello ha un sostegno e un meccanismo che lo mantiene perpendicolare ai raggi del Sole, per massimizzare l'energia raccolta."
    },

    {
      q: "La centrale fotovoltaica in costruzione in Cina (oltre 46 km² di pannelli) avrà una capacità di:",
      options: [
        "850 MW (come il Lon-gyangxia)",
        "2 GW, il doppio di una centrale nucleare",
        "500 MW, la metà di una termoelettrica",
        "10 GW, dieci volte una nucleare"
      ],
      answer: 1,
      explanation: "La centrale in costruzione in Cina avrà oltre 46 km² di pannelli e una capacità di 2 GW, il doppio di una centrale nucleare."
    },

    {
      q: "Quando viene messa in funzione la centrale idroelettrica standard?",
      options: [
        "Sempre, 24 ore al giorno",
        "Solo di notte",
        "Quando la richiesta di elettricità è maggiore",
        "Solo in inverno"
      ],
      answer: 2,
      explanation: "La centrale idroelettrica standard viene messa in funzione, se necessario, quando la richiesta di elettricità è maggiore."
    },

    {
      q: "Da cosa dipende la potenza di una centrale idroelettrica?",
      options: [
        "Solo dalla quantità d'acqua disponibile",
        "Solo dal dislivello",
        "Dalla quantità d'acqua disponibile E dal dislivello tra invaso e centrale",
        "Dal tipo di turbina usata"
      ],
      answer: 2,
      explanation: "La potenza dipende da due fattori combinati: la quantità d'acqua disponibile e la differenza di quota tra l'invaso e la centrale."
    },

    {
      q: "Cosa significa 'mini idroelettrico'?",
      options: [
        "Una centrale piccola in una caverna",
        "Si sfruttano dislivelli di pochi metri (non centinaia)",
        "Una centrale solo per una casa",
        "Una centrale senza diga"
      ],
      answer: 1,
      explanation: "Il mini idroelettrico sfrutta dislivelli da pochi metri. L'idroelettrico tradizionale sfrutta dislivelli che vanno fino a centinaia di metri."
    },

    {
      q: "Quali sono i 3 componenti speciali della centrale di pompaggio rispetto a quella standard?",
      options: [
        "Diga ad arco, vapordotti, eliostati",
        "Bacino di accumulo a valle, alternatori reversibili, turbine reversibili",
        "Caldaia, condensatore, torre di raffreddamento",
        "Inverter, pannelli, moduli"
      ],
      answer: 1,
      explanation: "La centrale di pompaggio è identica a quella standard ma ha 3 elementi in più: un bacino di accumulo a valle, alternatori reversibili (che diventano motori), turbine reversibili (che diventano pompe)."
    },

    {
      q: "Dove può essere costruita una centrale di pompaggio?",
      options: [
        "Solo all'aperto a fondovalle",
        "Anche in caverna, scavata nella montagna",
        "Solo sotto una diga",
        "Solo sopra l'invaso"
      ],
      answer: 1,
      explanation: "La centrale di pompaggio può essere in caverna, cioè scavata nella montagna. Un esempio è la centrale di San Fiorano in Valcamonica."
    },

    {
      q: "La diga ad arco sul fiume Kurobe (Giappone) ha un salto d'acqua di:",
      options: [
        "86 metri",
        "186 metri",
        "286 metri",
        "1000 metri"
      ],
      answer: 1,
      explanation: "La diga ad arco sul fiume Kurobe (Giappone) ha un salto d'acqua di 186 metri."
    },

    {
      q: "Dove si trova la centrale di pompaggio di San Fiorano e qual è la sua produzione annua?",
      options: [
        "In Veneto, 100 GWh",
        "In Valcamonica (Lombardia), 342 GWh",
        "In Toscana, 250 MW",
        "In Campania, 1000 MW"
      ],
      answer: 1,
      explanation: "San Fiorano è una centrale idroelettrica di generazione e pompaggio situata in Valcamonica (Lombardia), con una produzione media annua di 342 GWh."
    },

    {
      q: "Dove è costruita la centrale di una centrale fluviale?",
      options: [
        "A 30 km dalla diga",
        "Dentro la diga stessa",
        "Sul fondo del fiume",
        "Sulla riva opposta"
      ],
      answer: 1,
      explanation: "Nella centrale fluviale, la massa d'acqua è costretta a passare per la centrale, costruita dentro la diga, e fa girare le turbine Kaplan."
    },

    {
      q: "Di cosa è dotata la diga di una centrale fluviale per gestire le piene del fiume?",
      options: [
        "Di sirene di allarme",
        "Di paratoie (grossi portelloni) che vengono aperte",
        "Di valvole di sicurezza",
        "Di canali di scarico laterali"
      ],
      answer: 1,
      explanation: "La diga della centrale fluviale è dotata di paratoie (grossi portelloni) che vengono aperte quando il fiume è in piena."
    },

    {
      q: "A quale altra centrale è 'simile' la centrale geotermica?",
      options: [
        "Alla centrale fotovoltaica",
        "Alla centrale termoelettrica a carbone",
        "Alla centrale idroelettrica",
        "Alla centrale a torre solare"
      ],
      answer: 1,
      explanation: "La centrale geotermica è simile alla centrale termoelettrica a carbone, con la differenza che il vapore in pressione è un prodotto naturale prelevato dal sottosuolo."
    },

    {
      q: "L'energia geotermica è:",
      options: [
        "Solo calore",
        "Solo forza meccanica",
        "Al tempo stesso calore e forza meccanica",
        "Solo elettricità"
      ],
      answer: 2,
      explanation: "L'energia geotermica è al tempo stesso calore e forza meccanica, e per questo può azionare le turbine di una centrale termoelettrica."
    },

    {
      q: "Da dove preleva il vapore il rubinetto di presa della centrale geotermica?",
      options: [
        "Dalla caldaia",
        "Dal pozzo di estrazione nel sottosuolo",
        "Dai vapordotti",
        "Dalla torre di raffreddamento"
      ],
      answer: 1,
      explanation: "Il rubinetto di presa preleva il vapore dal pozzo di estrazione nel sottosuolo e lo immette nei vapordotti."
    }

  ]
};
