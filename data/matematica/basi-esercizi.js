// ============================================================
//  data/matematica/basi-esercizi.js  (v1)
//  Basi delle medie che servono nel cap. 2: regole dei segni e MCD/mcm.
//  3 livelli per argomento, dal più facile al più difficile (ordered:true).
//  Esempi inventati; ogni risultato è stato ricontrollato con un calcolo separato.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

// ── SEGNI · LIVELLO 1: addizione e parentesi ─────────────────────
window.QUIZ_BANK["segni-1"] = {
  id:"segni-1", subject:"matematica", icon:"🟢", version:1, timePerQuestion:0, ordered:true,
  title:"Regole dei segni — Livello 1",
  description:"Valore assoluto, addizione, togliere le parentesi",
  questions: [
    { type:"numeric", q:"Quanto vale |−7|?", answer:7, answerText:"7", explanation:"Il valore assoluto è il numero senza segno." },
    { type:"numeric", q:"Calcola −2 − 7.", answer:-9, answerText:"−9", explanation:"Segni uguali: 2 + 7 = 9, tieni il meno." },
    { type:"numeric", q:"Calcola +3 + 6.", answer:9, answerText:"9", explanation:"Segni uguali: 3 + 6 = 9, tieni il più." },
    { type:"numeric", q:"Calcola −5 + 8.", answer:3, answerText:"3", explanation:"Segni diversi: 8 − 5 = 3; vince 8, che è positivo." },
    { type:"numeric", q:"Calcola +4 − 10.", answer:-6, answerText:"−6", explanation:"Segni diversi: 10 − 4 = 6; vince 10, che è negativo." },
    { type:"numeric", q:"Calcola −8 + 8.", answer:0, answerText:"0", explanation:"Due numeri opposti: la somma è 0." },
    { q:"−(−5) = ?", options:["+5","−5","0","−10"], answer:0, explanation:"Il meno davanti alla parentesi cambia il segno: −(−5) = +5." },
    { type:"numeric", q:"Calcola 7 − (−3).", answer:10, answerText:"10", explanation:"7 − (−3) = 7 + 3 = 10." },
    { type:"numeric", q:"Calcola −4 + (−6).", answer:-10, answerText:"−10", explanation:"Il più lascia il segno: −4 − 6 = −10." },
    { type:"numeric", q:"Calcola 5 − (+8).", answer:-3, answerText:"−3", explanation:"Il meno cambia il segno: 5 − 8 = −3." },
    { type:"numeric", q:"Calcola −(2 − 9).", answer:7, answerText:"7", explanation:"Il meno cambia tutti i segni: −2 + 9 = 7. Oppure: 2 − 9 = −7, e −(−7) = 7." }
  ]
};

// ── SEGNI · LIVELLO 2: per, diviso, potenze ──────────────────────
window.QUIZ_BANK["segni-2"] = {
  id:"segni-2", subject:"matematica", icon:"🟡", version:1, timePerQuestion:0, ordered:true,
  title:"Regole dei segni — Livello 2",
  description:"Moltiplicazione, divisione e potenze con i segni",
  questions: [
    { type:"numeric", q:"Calcola (−3) · (−4).", answer:12, answerText:"12", explanation:"Segni uguali: positivo. 3 · 4 = 12." },
    { type:"numeric", q:"Calcola (+5) · (−2).", answer:-10, answerText:"−10", explanation:"Segni diversi: negativo. 5 · 2 = 10." },
    { type:"numeric", q:"Calcola (−12) : (+3).", answer:-4, answerText:"−4", explanation:"Segni diversi: negativo. 12 : 3 = 4." },
    { type:"numeric", q:"Calcola (−20) : (−5).", answer:4, answerText:"4", explanation:"Segni uguali: positivo. 20 : 5 = 4." },
    { type:"numeric", q:"Calcola (−1) · (−2) · (−3).", answer:-6, answerText:"−6", explanation:"Tre meno, dispari: negativo. 1 · 2 · 3 = 6." },
    { type:"numeric", q:"Calcola (−2) · (+3) · (−5).", answer:30, answerText:"30", explanation:"Due meno, pari: positivo. 2 · 3 · 5 = 30." },
    { type:"numeric", q:"Calcola (−3)².", answer:9, answerText:"9", explanation:"Esponente pari: positivo. (−3) · (−3) = 9." },
    { type:"numeric", q:"Calcola (−2)³.", answer:-8, answerText:"−8", explanation:"Esponente dispari: negativo. (−2) · (−2) · (−2) = −8." },
    { type:"numeric", q:"Calcola −3² (senza parentesi).", answer:-9, answerText:"−9", explanation:"Senza parentesi la potenza riguarda solo il 3: −(3 · 3) = −9." },
    { type:"numeric", q:"Calcola (−1)¹⁰¹.", answer:-1, answerText:"−1", explanation:"Esponente dispari: negativo. Ogni potenza di 1 fa 1, quindi −1." },
    { q:"Che segno ha (−2)⁷?", options:["Negativo, perché 7 è dispari","Positivo, perché 7 è dispari","Positivo, come tutte le potenze","Dipende dal valore di 2"], answer:0,
      explanation:"Esponente dispari: il risultato è negativo. (−2)⁷ = −128." }
  ]
};

// ── SEGNI · LIVELLO 3: espressioni ───────────────────────────────
window.QUIZ_BANK["segni-3"] = {
  id:"segni-3", subject:"matematica", icon:"🔴", version:1, timePerQuestion:0, ordered:true,
  title:"Regole dei segni — Livello 3",
  description:"Espressioni: parentesi, potenze, per e diviso, più e meno",
  questions: [
    { type:"numeric", q:"Calcola −2 + 3 · (−4).", answer:-14, answerText:"−14", explanation:"Prima il per: 3 · (−4) = −12. Poi −2 − 12 = −14." },
    { type:"numeric", q:"Calcola (−6) : (−2) + 5.", answer:8, answerText:"8", explanation:"Prima il diviso: (−6) : (−2) = 3. Poi 3 + 5 = 8." },
    { type:"numeric", q:"Calcola 10 − 2 · (−3).", answer:16, answerText:"16", explanation:"Prima il per: 2 · (−3) = −6. Poi 10 − (−6) = 10 + 6 = 16." },
    { type:"numeric", q:"Calcola −5² + (−5)².", answer:0, answerText:"0", explanation:"−5² = −25 e (−5)² = 25: la somma è 0." },
    { type:"numeric", q:"Calcola (−2)³ − 3 · (5 − 7).", answer:-2, answerText:"−2", explanation:"5 − 7 = −2; (−2)³ = −8; 3 · (−2) = −6; −8 − (−6) = −8 + 6 = −2." },
    { type:"numeric", q:"Calcola (−3)² − 2 · (−1)³.", answer:11, answerText:"11", explanation:"(−3)² = 9; (−1)³ = −1; 2 · (−1) = −2; 9 − (−2) = 11." },
    { type:"numeric", q:"Calcola [−4 + (−2) · 3] : (−5).", answer:2, answerText:"2", explanation:"Dentro la quadra: (−2) · 3 = −6, poi −4 − 6 = −10. Infine (−10) : (−5) = 2." },
    { type:"steps", q:"Calcola 2 − 3 · [1 − (−2)]², un passo alla volta.",
      steps:[ {q:"Quanto fa 1 − (−2)?", answer:3, answerText:"3", explanation:"1 + 2 = 3."},
              {q:"Quanto fa [3]²?", answer:9, answerText:"9"},
              {q:"Quanto fa 3 · 9?", answer:27, answerText:"27"},
              {q:"Risultato: 2 − 27 = ?", answer:-25, answerText:"−25"} ],
      explanation:"Ordine: parentesi, potenza, per, meno. 2 − 3 · [1 − (−2)]² = −25." }
  ]
};

// ── MCD/mcm · LIVELLO 1: primi, criteri, scomposizione ──────────
window.QUIZ_BANK["mcm-1"] = {
  id:"mcm-1", subject:"matematica", icon:"🟢", version:1, timePerQuestion:0, ordered:true,
  title:"MCD e mcm — Livello 1",
  description:"Divisori, numeri primi, criteri, scomposizione in fattori primi",
  questions: [
    { q:"Quali sono tutti i divisori di 12?", options:["1, 2, 3, 4, 6, 12","2, 3, 4, 6","12, 24, 36, 48","1, 2, 3, 4, 5, 6, 12"], answer:0,
      explanation:"Dividono 12 senza resto: 1, 2, 3, 4, 6, 12. 12, 24, 36… sono i multipli." },
    { q:"Quale di questi numeri è primo?", options:["17","15","21","27"], answer:0,
      explanation:"17 si divide solo per 1 e per 17. 15 = 3 · 5, 21 = 3 · 7, 27 = 3³." },
    { q:"Il numero 1 è primo?", options:["No","Sì","Solo nelle frazioni","Sì, è il più piccolo"], answer:0,
      explanation:"Per definizione 1 non è primo. Il primo più piccolo è 2." },
    { q:"51 si divide per 3?", options:["Sì: 5 + 1 = 6, che si divide per 3","No: finisce con 1","No: 51 è primo","Sì: finisce con 1"], answer:0,
      explanation:"Criterio del 3: la somma delle cifre è 6, quindi sì. 51 = 3 · 17." },
    { q:"Quale numero si divide per 5?", options:["135","152","251","523"], answer:0,
      explanation:"Si divide per 5 se finisce con 0 o con 5." },
    { type:"numeric", q:"Quanto fa 2³ · 3 · 5?", answer:120, answerText:"120", explanation:"8 · 3 · 5 = 120." },
    { q:"Scomponi 60 in fattori primi.", options:["2² · 3 · 5","2 · 3 · 10","4 · 15","2³ · 5"], answer:0,
      explanation:"60 : 2 = 30, : 2 = 15, : 3 = 5, : 5 = 1. Quindi 2² · 3 · 5." },
    { q:"Scomponi 84 in fattori primi.", options:["2² · 3 · 7","2 · 42","2³ · 7","4 · 21"], answer:0,
      explanation:"84 : 2 = 42, : 2 = 21, : 3 = 7, : 7 = 1. Quindi 2² · 3 · 7." },
    { q:"Scomponi 360 in fattori primi.", options:["2³ · 3² · 5","2² · 3² · 10","2³ · 3 · 15","6² · 10"], answer:0,
      explanation:"360 : 2 = 180, : 2 = 90, : 2 = 45, : 3 = 15, : 3 = 5, : 5 = 1. Controllo: 8 · 9 · 5 = 360." }
  ]
};

// ── MCD/mcm · LIVELLO 2: calcolare MCD e mcm ─────────────────────
window.QUIZ_BANK["mcm-2"] = {
  id:"mcm-2", subject:"matematica", icon:"🟡", version:1, timePerQuestion:0, ordered:true,
  title:"MCD e mcm — Livello 2",
  description:"Calcolare MCD e mcm, anche di tre numeri",
  questions: [
    { type:"numeric", q:"Calcola MCD(12; 18).", answer:6, answerText:"6", explanation:"12 = 2² · 3, 18 = 2 · 3². Comuni, esponente piccolo: 2 · 3 = 6." },
    { type:"numeric", q:"Calcola mcm(4; 6).", answer:12, answerText:"12", explanation:"4 = 2², 6 = 2 · 3. Tutti, esponente grande: 2² · 3 = 12." },
    { type:"numeric", q:"Calcola mcm(12; 18).", answer:36, answerText:"36", explanation:"2² · 3² = 36." },
    { type:"numeric", q:"Calcola MCD(24; 36).", answer:12, answerText:"12", explanation:"24 = 2³ · 3, 36 = 2² · 3². Comuni, esponente piccolo: 2² · 3 = 12." },
    { type:"numeric", q:"Calcola MCD(8; 15).", answer:1, answerText:"1", explanation:"8 = 2³, 15 = 3 · 5: nessun fattore comune, MCD = 1. Sono primi tra loro." },
    { type:"numeric", q:"Calcola mcm(8; 15).", answer:120, answerText:"120", explanation:"Nessun fattore comune: mcm = 8 · 15 = 120." },
    { type:"numeric", q:"Calcola MCD(45; 60).", answer:15, answerText:"15", explanation:"45 = 3² · 5, 60 = 2² · 3 · 5. Comuni: 3 · 5 = 15." },
    { type:"numeric", q:"Calcola mcm(45; 60).", answer:180, answerText:"180", explanation:"Tutti, esponente grande: 2² · 3² · 5 = 180." },
    { type:"numeric", q:"Calcola MCD(8; 12; 30).", answer:2, answerText:"2", explanation:"8 = 2³, 12 = 2² · 3, 30 = 2 · 3 · 5. Comune a tutti è solo il 2, con esponente 1." },
    { type:"numeric", q:"Calcola mcm(8; 12; 30).", answer:120, answerText:"120", explanation:"2³ · 3 · 5 = 120. Controllo: 120 : 8 = 15, 120 : 12 = 10, 120 : 30 = 4." },
    { q:"Quale frase è sempre vera?", options:["MCD ≤ i numeri ≤ mcm","mcm ≤ i numeri ≤ MCD","MCD e mcm sono sempre diversi","Il mcm è sempre il prodotto dei numeri"], answer:0,
      explanation:"Il MCD divide i numeri (quindi non li supera), il mcm è un loro multiplo (quindi non è più piccolo). Il prodotto vale solo se MCD = 1." }
  ]
};

// ── MCD/mcm · LIVELLO 3: a che cosa servono ──────────────────────
window.QUIZ_BANK["mcm-3"] = {
  id:"mcm-3", subject:"matematica", icon:"🔴", version:1, timePerQuestion:0, ordered:true,
  title:"MCD e mcm — Livello 3",
  description:"Semplificare con il MCD, denominatore comune con il mcm, problemi",
  questions: [
    { type:"fraction", q:"Riduci ai minimi termini 18/24.", answer:"3/4", answerText:"3/4", explanation:"MCD(18; 24) = 6: 18 : 6 = 3, 24 : 6 = 4." },
    { type:"fraction", q:"Riduci ai minimi termini 90/12.", answer:"15/2", answerText:"15/2", explanation:"MCD(90; 12) = 6: 90 : 6 = 15, 12 : 6 = 2." },
    { type:"fraction", q:"Riduci ai minimi termini 45/60.", answer:"3/4", answerText:"3/4", explanation:"MCD(45; 60) = 15: 45 : 15 = 3, 60 : 15 = 4." },
    { type:"numeric", q:"Per calcolare 1/4 + 1/6, qual è il denominatore comune più piccolo?", answer:12, answerText:"12", explanation:"È il mcm dei denominatori: mcm(4; 6) = 12." },
    { type:"fraction", q:"Calcola 1/4 + 1/6.", answer:"5/12", answerText:"5/12", explanation:"3/12 + 2/12 = 5/12." },
    { type:"fraction", q:"Calcola 3/4 − 1/6.", answer:"7/12", answerText:"7/12", explanation:"9/12 − 2/12 = 7/12." },
    { type:"fraction", q:"Calcola 5/12 + 7/18.", answer:"29/36", answerText:"29/36", explanation:"mcm(12; 18) = 36: 15/36 + 14/36 = 29/36." },
    { type:"fraction", q:"Calcola 3/8 + 5/12 − 1/6.", answer:"5/8", answerText:"5/8", explanation:"mcm(8; 12; 6) = 24: 9/24 + 10/24 − 4/24 = 15/24 = 5/8." },
    { q:"Un autobus passa ogni 12 minuti, un altro ogni 18. Alle 8:00 partono insieme. Quando ripartono insieme la prima volta?", options:["Alle 8:36","Alle 8:30","Alle 8:06","Alle 9:00"], answer:0,
      explanation:"Serve il primo multiplo comune: mcm(12; 18) = 36 minuti, quindi alle 8:36." }
  ]
};
