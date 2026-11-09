// ============================================================
//  data/storia/geostoria-giochi.js  (v1)
//  Egizi, Ebrei, Fenici, demografia — Gioca: ordina e classifica
//
//  Esercizi «order» e «classify», solo dal libro (pagina nella spiegazione).
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["geostoria-giochi"] = {

  id:              "geostoria-giochi",
  subject:         "storia",
  title:           "Gioca — ordina e classifica (Egizi, Ebrei, Fenici, demografia)",
  description:     "Linee del tempo da ordinare e caratteristiche da assegnare",
  icon:            "🧩",
  version:         1,
  timePerQuestion: 60,

  questions: [

    {
      "type": "order",
      "q": "Metti in ordine le fasi della storia egizia, dalla più antica alla più recente.",
      "items": ["Età protodinastica", "Antico regno", "Medio regno", "Nuovo regno", "Periodo saitico"],
      "explanation": "Età protodinastica 3100–2700, Antico regno 2700–2200, Medio regno 2050–1750, Nuovo regno 1550–1070 a.C. (p. 70); periodo saitico 665–525 a.C. circa (p. 77)."
    },
    {
      "type": "order",
      "q": "Egizi: metti in ordine cronologico questi eventi.",
      "items": ["Narmer unifica Basso e Alto Egitto", "Zoser fa costruire la prima piramide", "Gli Hyksos invadono il delta", "Amenofi IV impone il culto di Aton", "Battaglia di Qadesh", "Battaglia di Pelusio"],
      "explanation": "3100 circa (p. 70); 2650 circa (p. 71); 1750 circa (p. 72); 1350 circa (p. 74); 1275 (p. 75); 525 a.C. (p. 77)."
    },
    {
      "type": "order",
      "q": "Ebrei: metti in ordine cronologico, secondo il libro e la tradizione biblica.",
      "items": ["Abramo guida gli Ebrei verso Canaan", "Per una carestia gli Ebrei vanno in Egitto", "Mosè e l'Esodo", "L'età dei Giudici", "Il regno di David", "L'esilio babilonese", "Ciro permette il ritorno"],
      "explanation": "Circa 1900 (p. 87); circa 1700 (p. 88); intorno al 1200 per il prof, XIII secolo per il libro (p. 88); XI secolo (p. 89); 1000–960 circa (p. 90); 586 (p. 92); 539 a.C. (p. 92)."
    },
    {
      "type": "order",
      "q": "Metti in ordine i re degli Ebrei.",
      "items": ["Saul", "David", "Salomone"],
      "explanation": "Saul 1050–1000, David 1000–960, Salomone 960–920 a.C. circa (p. 90)."
    },
    {
      "type": "order",
      "q": "Fenici: metti in ordine cronologico.",
      "items": ["Le città si liberano dal controllo egizio", "I Filistei distruggono Sidone", "Tiro diventa la vera capitale", "Tiro fonda Cartagine", "Alessandro Magno prende Tiro"],
      "explanation": "Circa 1200 (p. 94); circa 1100 (p. 94); circa 1000 (p. 94); 814, secondo la tradizione (p. 97); 332 a.C. (p. 97)."
    },
    {
      "type": "classify",
      "q": "Egizi, Ebrei o Fenici? Assegna ogni elemento al popolo giusto.",
      "categories": ["Egizi", "Ebrei", "Fenici"],
      "items": [
        { "t": "Il faraone, considerato un dio", "c": 0 },
        { "t": "La mummificazione", "c": 0 },
        { "t": "I geroglifici", "c": 0 },
        { "t": "La Valle dei re", "c": 0 },
        { "t": "La Toràh", "c": 1 },
        { "t": "L'Arca dell'Alleanza", "c": 1 },
        { "t": "Le dodici tribù", "c": 1 },
        { "t": "Il tetragramma YHWH", "c": 1 },
        { "t": "La porpora", "c": 2 },
        { "t": "I sufeti", "c": 2 },
        { "t": "L'alfabeto di 22 consonanti", "c": 2 },
        { "t": "La colonia di Cartagine", "c": 2 }
      ],
      "explanation": "Egizi: pp. 66–75. Ebrei: pp. 87–92. Fenici: pp. 94–97."
    },
    {
      "type": "classify",
      "q": "Chi era? Assegna ogni personaggio al suo popolo.",
      "categories": ["Egizi", "Ebrei", "Persiani"],
      "items": [
        { "t": "Narmer", "c": 0 },
        { "t": "Ramses II", "c": 0 },
        { "t": "Nefertiti", "c": 0 },
        { "t": "Psammetico", "c": 0 },
        { "t": "Mosè", "c": 1 },
        { "t": "Giosuè", "c": 1 },
        { "t": "Salomone", "c": 1 },
        { "t": "Cambise", "c": 2 },
        { "t": "Ciro", "c": 2 }
      ],
      "explanation": "Narmer, Ramses II, Nefertiti, Psammetico: pp. 70–77. Mosè, Giosuè, Salomone: pp. 88–90. Cambise vince a Pelusio (p. 77), Ciro libera gli Ebrei (p. 92)."
    },
    {
      "type": "classify",
      "q": "Saldo naturale o saldo migratorio? Dove entra ciascun dato?",
      "categories": ["Saldo naturale", "Saldo migratorio"],
      "items": [
        { "t": "I nati vivi", "c": 0 },
        { "t": "I morti", "c": 0 },
        { "t": "Gli immigrati", "c": 1 },
        { "t": "Gli emigrati", "c": 1 }
      ],
      "explanation": "Saldo naturale = nati vivi − morti; saldo migratorio = immigrati − emigrati; la somma dà il saldo demografico (p. 111)."
    },
    {
      "type": "classify",
      "q": "Distribuzione della popolazione: a quale tipo di fattore appartiene ciascun esempio?",
      "categories": ["Fisici", "Economici", "Politici", "Socioculturali"],
      "items": [
        { "t": "Il clima", "c": 0 },
        { "t": "La presenza di acqua", "c": 0 },
        { "t": "I rilievi montuosi", "c": 0 },
        { "t": "La Rivoluzione industriale", "c": 1 },
        { "t": "La Rivoluzione neolitica", "c": 1 },
        { "t": "Le politiche popolazioniste", "c": 2 },
        { "t": "Lo spostamento di russi in Siberia", "c": 2 },
        { "t": "Il matrimonio", "c": 3 },
        { "t": "Le religioni", "c": 3 }
      ],
      "explanation": "Fisici ed economici: p. 115; politici: p. 116; socioculturali: p. 117."
    },
    {
      "type": "classify",
      "q": "Rete monocentrica o policentrica?",
      "categories": ["Monocentrica", "Policentrica"],
      "items": [
        { "t": "Una grande metropoli accentra le funzioni più importanti", "c": 0 },
        { "t": "Attorno alla metropoli c'è l'area metropolitana", "c": 0 },
        { "t": "Molte città di media grandezza, nessuna prevale", "c": 1 },
        { "t": "Ogni città svolge un ruolo utile all'intera rete", "c": 1 }
      ],
      "explanation": "Pp. 118–119. Quando le città di una rete policentrica si allargano fino a saldarsi si forma una conurbazione."
    }

  ]
};
