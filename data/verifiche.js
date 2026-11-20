// ============================================================
//  data/verifiche.js
//  «Verifiche in arrivo»: in cima alla home, una scheda per ogni verifica
//  o interrogazione, con il ripasso e gli esercizi in ordine.
//  - date: il giorno della verifica (la scheda sparisce il giorno dopo);
//    senza date resta finché non si toglie da qui
//  - steps: passi in ordine; items = id di data/ripasso.js, tests = id dei quiz
// ============================================================

window.VERIFICHE = [
  {
    id:      "sci-chimica",
    subject: "scienze",
    title:   "Interrogazione di chimica",
    what:    "Separazione, trasformazioni fisiche e chimiche, teorie della materia (prof Flaccavento)",
    when:    "venerdì 20 novembre (se non ancora fatta, la prossima lezione)",
    steps: [
      { k: "1 · Leggi la sintesi", d: "Un blocco alla volta, con la domanda per verificarti; poi esercizi e soluzioni",
        items: ["chim-pdf-1", "chim-pdf-2"] },
      { k: "2 · Studia a slide", d: "Quattro lezioni, una per argomento",
        items: ["chim-l1", "chim-l2", "chim-l3", "chim-l4"] },
      { k: "3 · Verificati", d: "Un test per parte, i problemi, poi la prova mista con domande sempre nuove",
        tests: ["chim-fisiche", "chim-chimiche", "chim-problemi", "chim-verifica", "materia-cap2-problemi"] },
      { k: "Sul libro", d: "Ripassa p. 40-63 e studia p. 76-88; esercizi p. 99 n. 24 e 25, copiando i testi. Mancano ancora le foto di p. 62-63 e 76." }
    ]
  },
  {
    id:      "mat-criteri",
    subject: "matematica",
    title:   "Interrogazione di geometria",
    what:    "Assiomi e criteri di congruenza",
    when:    "venerdì 13 novembre, ore 10",
    date:    "2026-11-13",
    steps: [
      { k: "1 · Capisci",   d: "Le spiegazioni con i disegni e le animazioni",
        items: ["cri-1", "cri-4", "ass-1", "ass-4"] },
      { k: "2 · Studia",    d: "Un assioma per schermata, poi le carte da girare e ChatGPT che ti interroga",
        items: ["html-1", "pdf-2"] },
      { k: "3 · Verificati", d: "Fai gli esercizi finché arrivi sopra l'80%",
        tests: ["assiomi-g1-enunciati", "assiomi-g1", "criteri-1", "criteri-2", "criteri-3", "bma-1"] }
    ]
  },
  {
    id:      "en-verifica",
    subject: "inglese",
    title:   "Reading comprehension test",
    what:    "Test di comprensione del testo (prof Grossi)",
    when:    "venerdì 13 novembre, ore 11",
    date:    "2026-11-13",
    steps: [
      { k: "1 · Allenati a leggere", d: "Tre testi brevi: leggi, poi rispondi. Con il tasto 📄 riapri il testo",
        tests: ["en-read-1", "en-read-2", "en-read-3"] },
      { k: "2 · Ripassa la grammatica", d: "Le lezioni a slide: aiutano a capire i testi",
        items: ["en-l1", "en-l2", "en-l3", "en-l4"] },
      { k: "3 · Esercitati", d: "Un test per argomento, poi la verifica mista con domande sempre nuove",
        tests: ["en-be-have", "en-plurali", "en-possessivi", "en-present-simple", "en-avverbi", "en-continuous", "en-verifica"] },
      { k: "4 · Sul foglio", d: "Le schede da stampare e le soluzioni per correggerle",
        items: ["en-pdf-1", "en-pdf-2"] },
      { k: "Se servono: gli argomenti delle mappe", d: "Quantità, passato, futuro, comparativi, modali, present perfect, passivo",
        items: ["en-l5", "en-l6", "en-l7", "en-l8", "en-l9", "en-l10", "en-l11"] }
    ]
  },
  {
    id:      "ita-antologia",
    subject: "italiano",
    title:   "Interrogazione di antologia",
    what:    "Il testo narrativo (prof Remoli)",
    when:    "mercoledì 18 novembre",
    date:    "2026-11-18",
    steps: [
      { k: "1 · Leggi la sintesi", d: "La sintesi e il riassunto, anche nella versione spiegata semplice",
        items: ["ant-pdf-3", "ant-pdf-4", "ant-pdf-2", "ant-pdf-1"] },
      { k: "2 · Studia a slide", d: "Un argomento per lezione, con le definizioni del libro",
        items: ["ant-l0", "ant-l1", "ant-l2", "ant-l3", "ant-l4", "ant-l5", "ant-l6"] },
      { k: "3 · Verificati", d: "Un test per argomento, poi la prova mista con domande sempre nuove",
        tests: ["ant-modello", "ant-sequenze", "ant-spazio-personaggi", "ant-voce", "ant-parole", "ant-stili", "ant-verifica"] },
      { k: "Sul libro", d: "Ripassa i brani assegnati (p. 61, 69, 84, 96, 113) e gli esercizi di p. 12, 31, 72 e 118. In classe: «Una barca nel bosco» e «Il viaggiatore dalla voce profonda». Per lo stesso giorno, epica p. 95-96." }
    ]
  },
  {
    id:      "ita-verbi",
    subject: "italiano",
    title:   "Verifica di grammatica",
    what:    "I verbi (prof Remoli)",
    when:    "mercoledì 25 novembre, ore 8",
    date:    "2026-11-25",
    steps: [
      { k: "Da studiare (dal registro)", d: "Libro di grammatica: p. 141-143 (le forme del verbo) e p. 175-176. Nessun materiale della prof sul registro." },
      { k: "Lezioni sul verbo", d: "Modo e tempo; indicativo e congiuntivo; condizionale e imperativo; modi indefiniti e gerundio; transitivi e intransitivi; la forma del verbo; impersonali, copulativi e predicativi; ausiliari, servili, fraseologici, causativi; analisi dei verbi; riepilogo (12 novembre)." },
      { k: "Esercizi già assegnati", d: "p. 144, 146, 158, 162, 164, 174, 177, 180, 187, 189, 195, 203, 207 e 210 (questi per martedì 17)." }
    ]
  },
  {
    id:      "sto-geo",
    subject: "storia",
    title:   "Verifica di geostoria",
    what:    "Egizi, Ebrei, Fenici, demografia",
    when:    "da recuperare: data da fissare",
    steps: [
      { k: "1 · Fai la verifica", d: "Ogni volta domande nuove, con 4 domande aperte alla fine come nel compito",
        tests: ["geostoria-unico"] },
      { k: "2 · Se sbagli, ripassa", d: "Presentazione, mappe e domande aperte con la traccia",
        items: ["sto-pdf-1", "sto-pdf-2", "sto-pdf-4"] }
    ]
  }
];
