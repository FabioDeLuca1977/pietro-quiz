// ============================================================
//  data/registry.js  —  SCHEMA DEFINITIVO
//  Versione: 1.4
//
//  AGGIUNGERE UN TEST:
//    1. Crea data/<materia>/<id>.js
//    2. Aggiungi l'oggetto in tests[] della materia
//    3. Aggiungi <script src="..."> in index.html
//    Nient'altro.
//
//  NASCONDERE UN TEST (senza cancellarlo):
//    enabled: false   →  appare come "Prossimamente"
//
//  NAMING  →  sempre kebab-case: "prima-guerra", "analisi-logica"
//
//  NOVITÀ v1.2 — test di tipo "reading":
//    nel file dati: type:"reading", reading:{photo,paras},
//    timePerQuestion:0 (niente timer), campo ev per domanda.
//    Il motore mostra il testo prima delle domande e il pulsante
//    "📄 Torna al testo" con la frase evidenziata.
// ============================================================
//
//  NOVITÀ v1.4 — matematica e tipo di domanda type:"fraction"
//    (risposta a frazione, es. "-5/12"), vedi README.
// ============================================================
//
//  NOVITÀ v1.3 — liceo: rimossi i test delle medie (restano nella
//    cronologia git). Nuovo tipo di domanda type:"numeric"
//    (risposta da scrivere), vedi README.
// ============================================================
window.QUIZ_REGISTRY = [
  // ── STORIA ─────────────────────────────
  {
    subject:     "storia",
    subjectIcon: "🏛️",
    subjectColor:"#dc2626",
    tests: [
      {
        id:            "civilta-mesopotamiche",
        title:         "Cap. 2 — Le civiltà mesopotamiche",
        description:   "Sumeri, Accadi, Babilonesi, Hittiti, Assiri, Persiani · con date da scrivere",
        icon:          "🏺",
        questionCount: 59,
        enabled:       true
      },
      {
        id:            "civilta-mesopotamiche-giochi",
        title:         "Cap. 2 — Gioca: ordina e classifica",
        description:   "Sequenze di popoli e re, Assiri o Persiani, cronologia persiana",
        icon:          "🧩",
        questionCount: 10,
        enabled:       true
      }
    ]
  },
  // ── SCIENZE ─────────────────────────────
  {
    subject:     "scienze",
    subjectIcon: "🧪",
    subjectColor:"#0891b2",
    tests: [
      {
        id:            "misure-cap1",
        title:         "Cap. 1 — Grandezze e misure",
        description:   "SI, notazione scientifica, cifre significative, densità, energia, temperatura, calore",
        icon:          "📏",
        questionCount: 40,
        enabled:       true
      },
      {
        id:            "misure-cap1-problemi",
        title:         "Cap. 1 — Problemi",
        description:   "Conversioni, densità, temperature, calore, errore % · risposta da scrivere",
        icon:          "🧮",
        questionCount: 39,
        enabled:       true
      },
      {
        id:            "materia-cap2",
        title:         "Cap. 2 — Le trasformazioni fisiche della materia",
        description:   "Stati fisici, teoria particellare, sostanze pure, miscele, soluzioni, solubilità",
        icon:          "🧪",
        questionCount: 24,
        enabled:       true
      },
      {
        id:            "materia-cap2-problemi",
        title:         "Cap. 2 — Problemi sulle concentrazioni",
        description:   "Percentuale in massa, in volume, massa su volume, diluizione · risposta da scrivere",
        icon:          "⚗️",
        questionCount: 24,
        enabled:       true
      },
      {
        id:            "scienze-giochi",
        title:         "Cap. 1-2 — Gioca: ordina e classifica",
        description:   "Prefissi, unità, densità, miscele, grandezze, energia",
        icon:          "🧩",
        questionCount: 12,
        enabled:       true
      }
    ]
  },
  // ── MATEMATICA ─────────────────────────────
  {
    subject:     "matematica",
    subjectIcon: "📐",
    subjectColor:"#7c3aed",
    tests: [
      {
        id:            "diagnosi-basi",
        title:         "Ripasso totale — Dove mi inceppo?",
        description:   "32 domande da inizio anno: alla fine la mappa delle basi da rifare",
        icon:          "🧭",
        questionCount: 32,
        enabled:       true
      },
      { id:"criteri-1", title:"Criteri di congruenza — Livello 1", description:"Le parole della geometria · 11 esercizi", icon:"🟢", questionCount:11, enabled:true },
      { id:"criteri-2", title:"Criteri di congruenza — Livello 2", description:"Quale criterio? Che cosa manca? · 11 esercizi", icon:"🟡", questionCount:11, enabled:true },
      { id:"criteri-3", title:"Criteri di congruenza — Livello 3", description:"Le dimostrazioni passo per passo · 9 esercizi", icon:"🔴", questionCount:9, enabled:true },
      { id:"segni-1", title:"Regole dei segni — Livello 1", description:"Valore assoluto, addizione, parentesi · 11 esercizi", icon:"🟢", questionCount:11, enabled:true },
      { id:"segni-2", title:"Regole dei segni — Livello 2", description:"Per, diviso e potenze con i segni · 11 esercizi", icon:"🟡", questionCount:11, enabled:true },
      { id:"segni-3", title:"Regole dei segni — Livello 3", description:"Espressioni con i segni · 8 esercizi", icon:"🔴", questionCount:8, enabled:true },
      { id:"mcm-1", title:"MCD e mcm — Livello 1", description:"Divisori, primi, criteri, scomposizione · 9 esercizi", icon:"🟢", questionCount:9, enabled:true },
      { id:"mcm-2", title:"MCD e mcm — Livello 2", description:"Calcolare MCD e mcm · 11 esercizi", icon:"🟡", questionCount:11, enabled:true },
      { id:"mcm-3", title:"MCD e mcm — Livello 3", description:"Semplificare, denominatore comune, problemi · 9 esercizi", icon:"🔴", questionCount:9, enabled:true },
      {
        id:            "razionali-cap2",
        title:         "Cap. 2 — Numeri razionali e reali: teoria",
        description:   "Frazioni, Q, operazioni, potenze, decimali, proporzioni, reali, approssimazioni",
        icon:          "➗",
        questionCount: 60,
        enabled:       true
      },
      {
        id:            "razionali-cap2-calcoli",
        title:         "Cap. 2 — Esercizi: frazioni e operazioni",
        description:   "Semplificare, confrontare, + − × :, potenze · risposta da scrivere",
        icon:          "🧮",
        questionCount: 54,
        enabled:       true
      },
      {
        id:            "razionali-cap2-decimali",
        title:         "Cap. 2 — Esercizi: decimali, proporzioni, percentuali",
        description:   "Periodici, frazione generatrice, proporzioni, %, IVA, errori, notazione scientifica",
        icon:          "📐",
        questionCount: 47,
        enabled:       true
      },
      {
        id:            "razionali-cap2-giochi",
        title:         "Cap. 2 — Gioca: ordina e classifica",
        description:   "Ordine dei razionali, tipi di frazioni e di decimali, insiemi",
        icon:          "🧩",
        questionCount: 12,
        enabled:       true
      },
      {
        id:            "assiomi-g1",
        title:         "Cap. G1 — Gli assiomi: ripasso e domande",
        description:   "Prima leggi la scheda dei 10 assiomi, poi 20 domande · puoi tornare alla scheda",
        icon:          "📏",
        questionCount: 20,
        enabled:       true
      },
      {
        id:            "assiomi-g1-enunciati",
        title:         "Cap. G1 — Gli assiomi: enunciali a memoria",
        description:   "14 enunciati da scrivere: se manca un concetto, lo leggi e lo riscrivi a memoria",
        icon:          "🧠",
        questionCount: 14,
        enabled:       true
      },
      {
        id:            "gradi-1",
        title:         "Gradi, primi e secondi — Livello 1",
        description:   "Le basi e le conversioni facili, nei due versi · 12 esercizi",
        icon:          "🟢",
        questionCount: 12,
        enabled:       true
      },
      {
        id:            "gradi-2",
        title:         "Gradi, primi e secondi — Livello 2",
        description:   "Con i secondi: da gradi con la virgola a ° ′ ″ e ritorno · 11 esercizi",
        icon:          "🟡",
        questionCount: 11,
        enabled:       true
      },
      {
        id:            "gradi-3",
        title:         "Gradi, primi e secondi — Livello 3",
        description:   "Le operazioni con riporti e prestiti · 7 esercizi",
        icon:          "🔴",
        questionCount: 7,
        enabled:       true
      }
    ]
  },
  // ── FISICA ─────────────────────────────
  {
    subject:     "fisica",
    subjectIcon: "🧲",
    subjectColor:"#ea580c",
    tests: [
      {
        id:            "matematica-per-cominciare",
        title:         "Unità 0 — La matematica per cominciare: scrivi i risultati",
        description:   "Proporzioni, percentuali, potenze di 10, formule, proporzionalità · risposta da scrivere",
        icon:          "🧮",
        questionCount: 48,
        enabled:       true
      },
      {
        id:            "grandezze-cap1-problemi",
        title:         "Cap. 1 — Le grandezze fisiche: scrivi i risultati",
        description:   "Conversioni, notazione scientifica, ordini di grandezza, area, volume, densità · risposta da scrivere",
        icon:          "📏",
        questionCount: 82,
        enabled:       true
      },
      {
        id:            "grandezze-teoria",
        title:         "Unità 0 e Cap. 1 — Regole: scrivi la parola giusta",
        description:   "Definizioni, unità del SI, prefissi, proporzionalità · risposta a parole",
        icon:          "✏️",
        questionCount: 47,
        enabled:       true
      },
      {
        id:            "fisica-definizioni",
        title:         "Unità 0 e Cap. 1 — Definizioni: ripetile a memoria",
        description:   "40 definizioni da scrivere: se manca un concetto, la leggi e la riscrivi a memoria",
        icon:          "🧠",
        questionCount: 40,
        enabled:       true
      },
      {
        id:            "fisica-giochi",
        title:         "Unità 0 e Cap. 1 — Gioca: ordina e classifica",
        description:   "Prefissi, grandezze fondamentali e derivate, unità del SI, proporzionalità",
        icon:          "🧩",
        questionCount: 10,
        enabled:       true
      }
    ]
  },
  // ── TECNOLOGIA ─────────────────────────────
  {
    subject:     "tecnologia",
    subjectIcon: "⚙️",
    subjectColor:"#16a34a",
    tests: []
  },
  // ── MUSICA ─────────────────────────────
  {
    subject:     "musica",
    subjectIcon: "🎼",
    subjectColor:"#3b82f6",
    tests: []
  },
  // ── ITALIANO ─────────────────────────────
  {
    subject:     "italiano",
    subjectIcon: "✍️",
    subjectColor:"#d97706",
    tests: []
  },
  // ── INGLESE ─────────────────────────────
  {
    subject:     "inglese",
    subjectIcon: "🇬🇧",
    subjectColor:"#7c3aed",
    tests: []
  },
  // ── SPAGNOLO ─────────────────────────────
  {
    subject:     "spagnolo",
    subjectIcon: "🇪🇸",
    subjectColor:"#e11d48",
    tests: []
  }
];
