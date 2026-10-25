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
        questionCount: 58,
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
