// ============================================================
//  data/_registry.js  —  SCHEMA DEFINITIVO
//  Versione: 1.0
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
// ============================================================

window.QUIZ_REGISTRY = [

  // ── STORIA ──────────────────────────────────────────────
  {
    subject:     "storia",
    subjectIcon: "🏛️",
    subjectColor:"#dc2626",
    tests: [
      {
        id:            "fascismo",
        title:         "Il Fascismo in Italia",
        description:   "Origini, ascesa, regime e leggi razziali",
        icon:          "🏛️",
        questionCount: 47,
        enabled:       true
      },
      // {
      //   id:            "prima-guerra",
      //   title:         "La Prima Guerra Mondiale",
      //   description:   "Cause, fasi e conseguenze della Grande Guerra",
      //   icon:          "⚔️",
      //   questionCount: 0,
      //   enabled:       false
      // }
    ]
  },

  // ── SCIENZE ─────────────────────────────────────────────
  {
    subject:     "scienze",
    subjectIcon: "🔬",
    subjectColor:"#16a34a",
    tests: [
      // {
      //   id:            "cellula",
      //   title:         "La Cellula",
      //   description:   "Struttura, organelli e funzioni",
      //   icon:          "🧫",
      //   questionCount: 0,
      //   enabled:       false
      // }
    ]
  },

  // ── ITALIANO ────────────────────────────────────────────
  {
    subject:     "italiano",
    subjectIcon: "✍️",
    subjectColor:"#d97706",
    tests: [
      // {
      //   id:            "promessi-sposi",
      //   title:         "I Promessi Sposi",
      //   description:   "Trama, personaggi e temi principali",
      //   icon:          "📖",
      //   questionCount: 0,
      //   enabled:       false
      // }
    ]
  }

  // ── NUOVA MATERIA (decommenta e adatta) ─────────────────
  // ,{
  //   subject:     "geografia",
  //   subjectIcon: "🌍",
  //   subjectColor:"#0891b2",
  //   tests: []
  // }

];

