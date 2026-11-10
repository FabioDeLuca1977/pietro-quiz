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
    id:      "mat-criteri",
    subject: "matematica",
    title:   "Interrogazione di geometria",
    what:    "Assiomi e criteri di congruenza",
    when:    "giovedì 12 novembre",
    date:    "2026-11-12",
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
