// ============================================================
//  data/matematica/gradi-esercizi.js  (v1)
//  Gradi, primi e secondi: esercizi in 3 livelli, dal più facile al più difficile.
//  ordered:true = le domande restano in quest'ordine.
//  Nei due versi: da gradi con la virgola a ° ′ ″ e da ° ′ ″ a gradi con la virgola.
//  Esempi inventati; ogni risultato è stato ricontrollato facendo il conto al contrario.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

const GPS_TOL = 0.00001;   // i risultati sono esatti: niente approssimazioni

// ── LIVELLO 1: le basi, conversioni senza secondi ──────────────
window.QUIZ_BANK["gradi-1"] = {
  id:"gradi-1", subject:"matematica", icon:"🟢", version:1, timePerQuestion:0, ordered:true,
  title:"Gradi, primi e secondi — Livello 1",
  description:"Le basi e le conversioni facili, nei due versi",
  questions: [

    { q:"Quanti primi ci sono in 1 grado?", options:["60′","100′","10′","3600′"], answer:0,
      explanation:"1° = 60′, come 1 ora = 60 minuti." },

    { q:"Quanti secondi ci sono in 1 grado?", options:["3600″","60″","100″","6000″"], answer:0,
      explanation:"1° = 60′ e 1′ = 60″, quindi 1° = 60 × 60 = 3600″." },

    { q:"Quanto fa mezzo grado (0,5°) in primi?", options:["30′","50′","5′","60′"], answer:0,
      explanation:"0,5 × 60 = 30′. Come mezz'ora = 30 minuti, non 50." },

    { q:"25,42° è uguale a 25° 42′?", options:["No: 0,42° = 0,42 × 60 = 25,2′","Sì, è la stessa cosa","Sì, ma solo per gli angoli acuti","No, perché 25,42° è più di 26°"], answer:0,
      explanation:"Dopo la virgola si conta a gruppi di 100, i primi vanno a gruppi di 60. 25,42° = 25° 25′ 12″." },

    { type:"steps", q:"Trasforma 3,5° in gradi e primi.",
      steps:[ {q:"Quanti gradi?", answer:3, unit:"°", answerText:"3°", tolerance:GPS_TOL, explanation:"La parte prima della virgola."},
              {q:"Quanti primi? (0,5 × 60)", answer:30, unit:"′", answerText:"30′", tolerance:GPS_TOL} ],
      explanation:"3,5° = 3° 30′." },

    { type:"steps", q:"Trasforma 10,25° in gradi e primi.",
      steps:[ {q:"Quanti gradi?", answer:10, unit:"°", answerText:"10°", tolerance:GPS_TOL},
              {q:"Quanti primi?", answer:15, unit:"′", answerText:"15′", tolerance:GPS_TOL} ],
      explanation:"0,25 × 60 = 15, quindi 10,25° = 10° 15′." },

    { type:"steps", q:"Trasforma 45,75° in gradi e primi.",
      steps:[ {q:"Quanti gradi?", answer:45, unit:"°", answerText:"45°", tolerance:GPS_TOL},
              {q:"Quanti primi?", answer:45, unit:"′", answerText:"45′", tolerance:GPS_TOL} ],
      explanation:"0,75 × 60 = 45, quindi 45,75° = 45° 45′." },

    { type:"steps", q:"Trasforma 12,2° in gradi e primi.",
      steps:[ {q:"Quanti gradi?", answer:12, unit:"°", answerText:"12°", tolerance:GPS_TOL},
              {q:"Quanti primi?", answer:12, unit:"′", answerText:"12′", tolerance:GPS_TOL} ],
      explanation:"0,2 × 60 = 12, quindi 12,2° = 12° 12′ (e non 12° 20′)." },

    { type:"numeric", q:"Al contrario: scrivi 4° 30′ in gradi con la virgola.", answer:4.5, unit:"°", answerText:"4,5°", tolerance:GPS_TOL,
      explanation:"30 : 60 = 0,5, quindi 4 + 0,5 = 4,5°." },

    { type:"numeric", q:"Scrivi 8° 15′ in gradi con la virgola.", answer:8.25, unit:"°", answerText:"8,25°", tolerance:GPS_TOL,
      explanation:"15 : 60 = 0,25, quindi 8 + 0,25 = 8,25°." },

    { type:"numeric", q:"Scrivi 20° 45′ in gradi con la virgola.", answer:20.75, unit:"°", answerText:"20,75°", tolerance:GPS_TOL,
      explanation:"45 : 60 = 0,75, quindi 20 + 0,75 = 20,75°." },

    { type:"numeric", q:"Scrivi 15° 12′ in gradi con la virgola.", answer:15.2, unit:"°", answerText:"15,2°", tolerance:GPS_TOL,
      explanation:"12 : 60 = 0,2, quindi 15 + 0,2 = 15,2° (e non 15,12°)." }
  ]
};

// ── LIVELLO 2: con i secondi, nei due versi ──────────────────────
window.QUIZ_BANK["gradi-2"] = {
  id:"gradi-2", subject:"matematica", icon:"🟡", version:1, timePerQuestion:0, ordered:true,
  title:"Gradi, primi e secondi — Livello 2",
  description:"Con i secondi: da gradi con la virgola a ° ′ ″ e ritorno",
  questions: [

    { type:"steps", q:"Trasforma 5,125° in gradi, primi e secondi.",
      steps:[ {q:"Quanti gradi?", answer:5, unit:"°", answerText:"5°", tolerance:GPS_TOL},
              {q:"0,125 × 60 = 7,5. Quanti primi?", answer:7, unit:"′", answerText:"7′", tolerance:GPS_TOL, explanation:"La parte intera di 7,5."},
              {q:"Avanza 0,5. Quanti secondi?", answer:30, unit:"″", answerText:"30″", tolerance:GPS_TOL} ],
      explanation:"5,125° = 5° 7′ 30″." },

    { type:"steps", q:"Trasforma 60,36° in gradi, primi e secondi.",
      steps:[ {q:"Quanti gradi?", answer:60, unit:"°", answerText:"60°", tolerance:GPS_TOL},
              {q:"Quanti primi? (0,36 × 60)", answer:21, unit:"′", answerText:"21′", tolerance:GPS_TOL},
              {q:"Quanti secondi?", answer:36, unit:"″", answerText:"36″", tolerance:GPS_TOL} ],
      explanation:"0,36 × 60 = 21,6 → 21′; 0,6 × 60 = 36″. Quindi 60,36° = 60° 21′ 36″." },

    { type:"steps", q:"Trasforma 47,8125° in gradi, primi e secondi.",
      steps:[ {q:"Quanti gradi?", answer:47, unit:"°", answerText:"47°", tolerance:GPS_TOL},
              {q:"Quanti primi?", answer:48, unit:"′", answerText:"48′", tolerance:GPS_TOL},
              {q:"Quanti secondi?", answer:45, unit:"″", answerText:"45″", tolerance:GPS_TOL} ],
      explanation:"0,8125 × 60 = 48,75 → 48′; 0,75 × 60 = 45″. Quindi 47,8125° = 47° 48′ 45″." },

    { type:"steps", q:"Trasforma 359,9875° in gradi, primi e secondi.",
      steps:[ {q:"Quanti gradi?", answer:359, unit:"°", answerText:"359°", tolerance:GPS_TOL},
              {q:"Quanti primi?", answer:59, unit:"′", answerText:"59′", tolerance:GPS_TOL},
              {q:"Quanti secondi?", answer:15, unit:"″", answerText:"15″", tolerance:GPS_TOL} ],
      explanation:"0,9875 × 60 = 59,25 → 59′; 0,25 × 60 = 15″. Quindi 359,9875° = 359° 59′ 15″." },

    { type:"steps", q:"Al contrario: scrivi 5° 7′ 30″ in gradi con la virgola.",
      steps:[ {q:"30″ : 60 = ? primi", answer:0.5, unit:"′", answerText:"0,5′", tolerance:GPS_TOL},
              {q:"Quanti primi in tutto? (7 + 0,5)", answer:7.5, unit:"′", answerText:"7,5′", tolerance:GPS_TOL},
              {q:"Quanti gradi in tutto? (7,5 : 60, poi + 5)", answer:5.125, unit:"°", answerText:"5,125°", tolerance:GPS_TOL} ],
      explanation:"Si sale dal basso: secondi : 60, poi primi : 60. È l'esercizio di prima al contrario." },

    { type:"steps", q:"Scrivi 60° 21′ 36″ in gradi con la virgola.",
      steps:[ {q:"36″ : 60 = ? primi", answer:0.6, unit:"′", answerText:"0,6′", tolerance:GPS_TOL},
              {q:"Quanti primi in tutto?", answer:21.6, unit:"′", answerText:"21,6′", tolerance:GPS_TOL},
              {q:"Quanti gradi in tutto?", answer:60.36, unit:"°", answerText:"60,36°", tolerance:GPS_TOL} ],
      explanation:"36 : 60 = 0,6 → 21,6′; 21,6 : 60 = 0,36 → 60,36°." },

    { type:"steps", q:"Scrivi 47° 48′ 45″ in gradi con la virgola.",
      steps:[ {q:"45″ : 60 = ? primi", answer:0.75, unit:"′", answerText:"0,75′", tolerance:GPS_TOL},
              {q:"Quanti primi in tutto?", answer:48.75, unit:"′", answerText:"48,75′", tolerance:GPS_TOL},
              {q:"Quanti gradi in tutto?", answer:47.8125, unit:"°", answerText:"47,8125°", tolerance:GPS_TOL} ],
      explanation:"45 : 60 = 0,75 → 48,75′; 48,75 : 60 = 0,8125 → 47,8125°." },

    { type:"steps", q:"Scrivi 359° 59′ 15″ in gradi con la virgola.",
      steps:[ {q:"15″ : 60 = ? primi", answer:0.25, unit:"′", answerText:"0,25′", tolerance:GPS_TOL},
              {q:"Quanti primi in tutto?", answer:59.25, unit:"′", answerText:"59,25′", tolerance:GPS_TOL},
              {q:"Quanti gradi in tutto?", answer:359.9875, unit:"°", answerText:"359,9875°", tolerance:GPS_TOL} ],
      explanation:"15 : 60 = 0,25 → 59,25′; 59,25 : 60 = 0,9875 → 359,9875°." },

    { type:"numeric", q:"Quanti secondi sono 1° 1′ 1″?", answer:3661, unit:"″", answerText:"3661″", tolerance:GPS_TOL,
      explanation:"1 × 3600 + 1 × 60 + 1 = 3661″." },

    { type:"numeric", q:"Quanti secondi sono 2° 30′?", answer:9000, unit:"″", answerText:"9000″", tolerance:GPS_TOL,
      explanation:"2 × 3600 + 30 × 60 = 7200 + 1800 = 9000″." },

    { type:"steps", q:"Trasforma 5000″ in gradi, primi e secondi.",
      steps:[ {q:"5000 : 3600 = ? (solo il quoziente intero)", answer:1, unit:"°", answerText:"1°", tolerance:GPS_TOL, explanation:"Resto 5000 − 3600 = 1400″."},
              {q:"Resto 1400″. 1400 : 60 = ? primi (quoziente intero)", answer:23, unit:"′", answerText:"23′", tolerance:GPS_TOL, explanation:"23 × 60 = 1380."},
              {q:"Quanti secondi restano?", answer:20, unit:"″", answerText:"20″", tolerance:GPS_TOL} ],
      explanation:"5000″ = 1° 23′ 20″. Controllo: 3600 + 1380 + 20 = 5000 ✅" }
  ]
};

// ── LIVELLO 3: le operazioni ─────────────────────────────────────
window.QUIZ_BANK["gradi-3"] = {
  id:"gradi-3", subject:"matematica", icon:"🔴", version:1, timePerQuestion:0, ordered:true,
  title:"Gradi, primi e secondi — Livello 3",
  description:"Le operazioni: + − × : con i riporti e i prestiti",
  questions: [

    { type:"steps", q:"20° 15′ + 30° 20′",
      steps:[ {q:"Gradi del risultato", answer:50, unit:"°", answerText:"50°", tolerance:GPS_TOL},
              {q:"Primi del risultato", answer:35, unit:"′", answerText:"35′", tolerance:GPS_TOL} ],
      explanation:"Colonna per colonna: 50° 35′. Nessun riporto." },

    { type:"steps", q:"12° 40′ 50″ + 7° 30′ 20″",
      steps:[ {q:"Gradi del risultato", answer:20, unit:"°", answerText:"20°", tolerance:GPS_TOL},
              {q:"Primi del risultato", answer:11, unit:"′", answerText:"11′", tolerance:GPS_TOL},
              {q:"Secondi del risultato", answer:10, unit:"″", answerText:"10″", tolerance:GPS_TOL} ],
      explanation:"19° 70′ 70″ → 70″ = 1′ 10″ → 19° 71′ 10″ → 71′ = 1° 11′ → 20° 11′ 10″." },

    { type:"steps", q:"50° 20′ − 20° 45′",
      steps:[ {q:"Gradi del risultato", answer:29, unit:"°", answerText:"29°", tolerance:GPS_TOL},
              {q:"Primi del risultato", answer:35, unit:"′", answerText:"35′", tolerance:GPS_TOL} ],
      explanation:"20′ è meno di 45′: prestito. 50° 20′ = 49° 80′; 49° 80′ − 20° 45′ = 29° 35′. Controllo: 29° 35′ + 20° 45′ = 50° 20′ ✅" },

    { type:"steps", q:"180° − 65° 32′ 18″",
      steps:[ {q:"Gradi del risultato", answer:114, unit:"°", answerText:"114°", tolerance:GPS_TOL},
              {q:"Primi del risultato", answer:27, unit:"′", answerText:"27′", tolerance:GPS_TOL},
              {q:"Secondi del risultato", answer:42, unit:"″", answerText:"42″", tolerance:GPS_TOL} ],
      explanation:"180° = 179° 59′ 60″; 179° 59′ 60″ − 65° 32′ 18″ = 114° 27′ 42″." },

    { type:"steps", q:"15° 20′ 25″ × 4",
      steps:[ {q:"Gradi del risultato", answer:61, unit:"°", answerText:"61°", tolerance:GPS_TOL},
              {q:"Primi del risultato", answer:21, unit:"′", answerText:"21′", tolerance:GPS_TOL},
              {q:"Secondi del risultato", answer:40, unit:"″", answerText:"40″", tolerance:GPS_TOL} ],
      explanation:"60° 80′ 100″ → 100″ = 1′ 40″ → 60° 81′ 40″ → 81′ = 1° 21′ → 61° 21′ 40″." },

    { type:"steps", q:"50° : 3",
      steps:[ {q:"Gradi del risultato (50 : 3, quoziente intero)", answer:16, unit:"°", answerText:"16°", tolerance:GPS_TOL, explanation:"Resto 2° = 120′."},
              {q:"Primi del risultato (120′ : 3)", answer:40, unit:"′", answerText:"40′", tolerance:GPS_TOL} ],
      explanation:"50° : 3 = 16° 40′. Controllo: 16° 40′ × 3 = 48° 120′ = 50° ✅" },

    { type:"steps", q:"100° 10′ 20″ : 4",
      steps:[ {q:"Gradi del risultato", answer:25, unit:"°", answerText:"25°", tolerance:GPS_TOL, explanation:"100 : 4 = 25, resto 0."},
              {q:"Primi del risultato (10 : 4, quoziente intero)", answer:2, unit:"′", answerText:"2′", tolerance:GPS_TOL, explanation:"Resto 2′ = 120″."},
              {q:"Secondi del risultato ((120 + 20) : 4)", answer:35, unit:"″", answerText:"35″", tolerance:GPS_TOL} ],
      explanation:"100° 10′ 20″ : 4 = 25° 2′ 35″. Controllo: × 4 = 100° 8′ 140″ = 100° 10′ 20″ ✅" }
  ]
};
