// ============================================================
//  data/registry.js  —  SCHEMA DEFINITIVO
//  Versione: 1.2
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
      }
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
  // ── TECNOLOGIA ──────────────────────────────────────────
  {
    subject:     "tecnologia",
    subjectIcon: "⚙️",
    subjectColor:"#16a34a",
    tests: [
      {
        id:            "energia-cap1",
        title:         "Cap. 1 — Fonti di energia",
        description:   "Definizione, Sole, fonti, centrali, idrogeno, richiesta elettrica, EROEI",
        icon:          "⚡",
        questionCount: 33,   // FIX v1.2: il file v4 contiene 33 domande, non 40
        enabled:       true
      },
      {
        id:            "energia-cap2",
        title:         "Cap. 2 — Combustibili fossili",
        description:   "Combustione, carbone, petrolio, gas naturale, centrali, raffinazione",
        icon:          "🔥",
        questionCount: 75,
        enabled:       true
      },
      {
        id:            "energia-cap3",
        title:         "Cap. 3 — Fonti rinnovabili",
        description:   "Solare, idroelettrico, geotermico, eolico, biomasse",
        icon:          "🌱",
        questionCount: 58,
        enabled:       true
      }
    ]
  },
  // ── MUSICA ──────────────────────────────────────────────
  {
    subject:     "musica",
    subjectIcon: "🎼",
    subjectColor:"#3b82f6",
    tests: [
      {
        id:            "decadentismo-avanguardie",
        title:         "Cap. 9 — Tra Decadentismo e Avanguardie",
        description:   "Espressionismo, folklore, Neoclassicismo nel Novecento",
        icon:          "🎼",
        questionCount: 35,
        enabled:       true
      }
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
  },
  // ── INGLESE (reading esame) ─────────────────────────────
  {
    subject:     "inglese",
    subjectIcon: "🇬🇧",
    subjectColor:"#7c3aed",
    tests: [
      {
        id:            "reading-en-1-new-york",
        title:         "Reading 1 — A Visit to New York City",
        description:   "New York: luoghi, numeri e curiosità · A2",
        icon:          "🗽",
        questionCount: 10,
        enabled:       true
      },
      {
        id:            "reading-en-2-darwin",
        title:         "Reading 2 — Darwin and the Beagle",
        description:   "Darwin e il viaggio del Beagle · A2",
        icon:          "🧬",
        questionCount: 10,
        enabled:       true
      },
      {
        id:            "reading-en-3-electric-cars",
        title:         "Reading 3 — The Future of Electric Cars",
        description:   "Le auto elettriche · A2",
        icon:          "🔋",
        questionCount: 10,
        enabled:       true
      },
      {
        id:            "reading-en-4-automobile",
        title:         "Reading 4 — The History of the Automobile",
        description:   "Benz, Ford e la catena di montaggio · A2",
        icon:          "🚗",
        questionCount: 10,
        enabled:       true
      },
      {
        id:            "reading-en-5-ferrari",
        title:         "Reading 5 — Ferrari: An Italian Legend",
        description:   "Enzo Ferrari, Maranello e la F1 · A2",
        icon:          "🏎️",
        questionCount: 10,
        enabled:       true
      }
    ]
  },
  // ── SPAGNOLO (reading esame) ────────────────────────────
  {
    subject:     "spagnolo",
    subjectIcon: "🇪🇸",
    subjectColor:"#e11d48",
    tests: [
      {
        id:            "reading-es-1-barcelona",
        title:         "Reading 1 — Barcelona, una ciudad fascinante",
        description:   "Monumentos, Gaudí y cultura · A1",
        icon:          "⛪",
        questionCount: 10,
        enabled:       true
      },
      {
        id:            "reading-es-2-andalucia",
        title:         "Reading 2 — Un viaje a Andalucía",
        description:   "Sevilla, Córdoba, Granada · A1",
        icon:          "💃",
        questionCount: 10,
        enabled:       true
      },
      {
        id:            "reading-es-3-internet",
        title:         "Reading 3 — El uso de Internet entre los jóvenes",
        description:   "Redes sociales y educación digital · A1",
        icon:          "📱",
        questionCount: 10,
        enabled:       true
      },
      {
        id:            "reading-es-4-seat",
        title:         "Reading 4 — SEAT, los coches de España",
        description:   "1950, Martorell y los coches eléctricos · A1",
        icon:          "🚙",
        questionCount: 10,
        enabled:       true
      },
      {
        id:            "reading-es-5-seguridad",
        title:         "Reading 5 — La seguridad en la carretera",
        description:   "Cinturón, casco y paso de cebra · A1",
        icon:          "🚦",
        questionCount: 10,
        enabled:       true
      }
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
