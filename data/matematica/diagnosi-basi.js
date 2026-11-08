// ============================================================
//  data/matematica/diagnosi-basi.js  (v1)
//  Test diagnostico "Dove mi inceppo?": ripasso totale da inizio anno.
//  Ogni domanda ha un anello (campo «a»). Alla fine l'app mostra la mappa degli
//  anelli: quelli deboli con i video e i quiz da rifare (campo diag.anelli).
//  Anelli in ordine di prerequisito: le basi delle medie, poi il cap. 2 del libro
//  (numeri razionali), poi quello che il prof ha fatto fuori dal libro
//  (assiomi, gradi primi e secondi). Esempi inventati, risultati ricontrollati.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["diagnosi-basi"] = {
  id:"diagnosi-basi", subject:"matematica", icon:"🧭", version:2, timePerQuestion:0, ordered:true,
  title:"Ripasso totale — Dove mi inceppo?",
  description:"Test diagnostico da inizio anno: alla fine ti dice quali basi rifare",

  diag: { anelli: [
    { id:"segni",   nome:"Numeri interi e segni", da:"medie",
      ripassa:[ {rip:"bas-2"}, {rip:"bas-1"}, {quiz:"segni-1"} ] },
    { id:"potenze", nome:"Le potenze", da:"medie e cap. 2",
      ripassa:[ {rip:"mat-10"}, {quiz:"segni-2"}, {quiz:"razionali-cap2-calcoli"} ] },
    { id:"mcm",     nome:"MCD, mcm e fattori primi", da:"medie e cap. 2",
      ripassa:[ {rip:"bas-4"}, {rip:"bas-3"}, {quiz:"mcm-1"}, {rip:"mat-6"} ] },
    { id:"frazioni", nome:"Frazioni: significato, equivalenti, semplificare, confrontare", da:"cap. 2",
      ripassa:[ {rip:"mat-1"}, {rip:"mat-2"}, {rip:"mat-6"}, {rip:"mat-8"}, {quiz:"razionali-cap2"} ] },
    { id:"operazioni", nome:"Operazioni e potenze con le frazioni", da:"cap. 2",
      ripassa:[ {rip:"mat-9"}, {rip:"mat-10"}, {quiz:"razionali-cap2-calcoli"} ] },
    { id:"decimali", nome:"Decimali, proporzioni, percentuali", da:"cap. 2",
      ripassa:[ {rip:"mat-7"}, {quiz:"razionali-cap2-decimali"} ] },
    { id:"assiomi", nome:"Gli assiomi", da:"il prof (sul libro si chiamano postulati, cap. G1)",
      ripassa:[ {rip:"ass-2"}, {rip:"ass-4"}, {quiz:"assiomi-g1"} ] },
    { id:"bma",     nome:"Bisettrice, mediana, altezza", da:"il prof (quaderno di Pietro)",
      ripassa:[ {rip:"bma-1"}, {quiz:"bma-1"} ] },
    { id:"criteri", nome:"Primo e secondo criterio di congruenza", da:"il prof (fuori dal libro)",
      ripassa:[ {rip:"vid-p09"}, {rip:"cri-2"}, {rip:"cri-1"}, {quiz:"criteri-1"} ] },
    { id:"gradi",   nome:"Gradi, primi e secondi", da:"il prof (fuori dal libro)",
      ripassa:[ {rip:"mat-13"}, {rip:"mat-12"}, {quiz:"gradi-1"} ] }
  ]},

  questions: [

    // ── Numeri interi e segni ──
    { a:"segni", type:"numeric", q:"Calcola (−3) · (−4).", answer:12, answerText:"12",
      explanation:"Meno per meno fa più: (−3) · (−4) = +12." },
    { a:"segni", type:"numeric", q:"Calcola −5 + 8.", answer:3, answerText:"3",
      explanation:"Segni diversi: fai 8 − 5 = 3 e tieni il segno del numero più grande in valore assoluto (+8)." },
    { a:"segni", type:"numeric", q:"Calcola −2 − 7.", answer:-9, answerText:"−9",
      explanation:"Segni uguali: sommi 2 + 7 = 9 e tieni il segno meno." },
    { a:"segni", type:"numeric", q:"Calcola (−12) : (+3).", answer:-4, answerText:"−4",
      explanation:"Segni diversi: il risultato è negativo. 12 : 3 = 4, quindi −4." },

    // ── Potenze ──
    { a:"potenze", type:"numeric", q:"Calcola (−2)³.", answer:-8, answerText:"−8",
      explanation:"Base negativa ed esponente dispari: risultato negativo. (−2)·(−2)·(−2) = −8." },
    { a:"potenze", type:"numeric", q:"Calcola (−3)².", answer:9, answerText:"9",
      explanation:"Base negativa ed esponente pari: risultato positivo. (−3)·(−3) = 9." },
    { a:"potenze", q:"2³ · 2² = ?", options:["2⁵","2⁶","4⁵","4⁶"], answer:0,
      explanation:"Stessa base: si tiene la base e si sommano gli esponenti. 3 + 2 = 5." },
    { a:"potenze", type:"numeric", q:"Calcola 7⁰.", answer:1, answerText:"1",
      explanation:"Ogni numero diverso da 0 elevato a 0 fa 1." },

    // ── MCD, mcm, fattori primi ──
    { a:"mcm", type:"numeric", q:"Calcola MCD(12; 18).", answer:6, answerText:"6",
      explanation:"12 = 2² · 3 e 18 = 2 · 3². Il MCD prende i fattori comuni con l'esponente più piccolo: 2 · 3 = 6." },
    { a:"mcm", type:"numeric", q:"Calcola mcm(4; 6).", answer:12, answerText:"12",
      explanation:"4 = 2² e 6 = 2 · 3. Il mcm prende tutti i fattori con l'esponente più grande: 2² · 3 = 12." },
    { a:"mcm", q:"Qual è la scomposizione in fattori primi di 60?", options:["2² · 3 · 5","2 · 3 · 10","4 · 15","2³ · 5"], answer:0,
      explanation:"60 = 2 · 2 · 3 · 5 = 2² · 3 · 5. «4 · 15» fa 60 ma 4 e 15 non sono primi." },

    // ── Frazioni ──
    { a:"frazioni", type:"numeric", q:"Quanto sono i 3/4 di 20?", answer:15, answerText:"15",
      explanation:"20 : 4 = 5, poi 5 · 3 = 15." },
    { a:"frazioni", type:"fraction", q:"Riduci ai minimi termini 18/24.", answer:"3/4", answerText:"3/4",
      explanation:"MCD(18; 24) = 6: (18 : 6)/(24 : 6) = 3/4." },
    { a:"frazioni", type:"numeric", q:"2/3 = x/12. Quanto vale x?", answer:8, answerText:"8",
      explanation:"Da 3 a 12 si moltiplica per 4, quindi anche 2 · 4 = 8 (proprietà invariantiva)." },
    { a:"frazioni", q:"Quale frazione è maggiore?", options:["2/3","3/5","Sono uguali","Non si può dire"], answer:0,
      explanation:"Stesso denominatore 15: 3/5 = 9/15 e 2/3 = 10/15. Quindi 2/3 è maggiore." },

    // ── Operazioni con le frazioni ──
    { a:"operazioni", type:"fraction", q:"Calcola 1/2 + 1/3.", answer:"5/6", answerText:"5/6",
      explanation:"Denominatore comune 6: 3/6 + 2/6 = 5/6." },
    { a:"operazioni", type:"fraction", q:"Calcola 3/4 − 1/6.", answer:"7/12", answerText:"7/12",
      explanation:"mcm(4; 6) = 12: 9/12 − 2/12 = 7/12." },
    { a:"operazioni", type:"fraction", q:"Calcola 2/3 · 9/4.", answer:"3/2", answerText:"3/2",
      explanation:"Semplifica in croce: 9 e 3 per 3, 2 e 4 per 2. Restano 1/1 · 3/2 = 3/2." },
    { a:"operazioni", type:"fraction", q:"Calcola 3/5 : 9/10.", answer:"2/3", answerText:"2/3",
      explanation:"Dividere è moltiplicare per il reciproco: 3/5 · 10/9 = 30/45 = 2/3." },
    { a:"operazioni", type:"fraction", q:"Calcola (2/3)².", answer:"4/9", answerText:"4/9",
      explanation:"Si elevano numeratore e denominatore: 2² = 4 e 3² = 9." },
    { a:"operazioni", type:"numeric", q:"Calcola (1/2)⁻².", answer:4, answerText:"4",
      explanation:"Esponente negativo: capovolgi la base e cambi segno all'esponente. (2/1)² = 4." },

    // ── Decimali, proporzioni, percentuali ──
    { a:"decimali", type:"fraction", q:"Scrivi 0,75 come frazione ridotta ai minimi termini.", answer:"3/4", answerText:"3/4",
      explanation:"0,75 = 75/100 = 3/4 (si divide per 25)." },
    { a:"decimali", q:"Che numero decimale è 1/3?", options:["0,(3): periodico semplice","0,3: decimale finito","0,1(3): periodico misto","0,33: decimale finito"], answer:0,
      explanation:"1 : 3 = 0,333… = 0,(3). Il denominatore 3 non contiene 2 o 5, quindi periodico semplice." },
    { a:"decimali", type:"numeric", q:"Quanto è il 20% di 150?", answer:30, answerText:"30",
      explanation:"20% = 20/100: 150 · 20 : 100 = 30." },
    { a:"decimali", type:"numeric", q:"3 : 4 = x : 20. Quanto vale x?", answer:15, answerText:"15",
      explanation:"Prodotto dei medi = prodotto degli estremi: 4 · x = 3 · 20, quindi x = 60 : 4 = 15." },

    // ── Assiomi ──
    { a:"assiomi", q:"Quante rette passano per due punti distinti?", options:["Una e una sola","Almeno due","Nessuna","Infinite"], answer:0,
      explanation:"Assioma 2B: dati due punti distinti, esiste una e una sola retta a cui appartengono entrambi." },
    { a:"assiomi", q:"A sta nel semipiano α, B nel semipiano β. Che cosa fa il segmento AB?", options:["Interseca la retta r","Sta tutto in α","È parallelo a r","Non esiste"], answer:0,
      explanation:"Assioma 4: il segmento che unisce punti di semipiani diversi interseca la retta r." },
    { a:"assiomi", q:"F₁ è congruente a F₂ e F₂ è congruente a F₃. Allora…", options:["F₁ è congruente a F₃","F₁ non è congruente a F₃","Non si può dire","F₃ è congruente solo a se stessa"], answer:0,
      explanation:"Assioma 5C: è la proprietà transitiva della congruenza." },

    // ── Bisettrice, mediana, altezza ──
    { a:"bma", q:"Che cos'è la mediana di un triangolo?", options:["Il segmento che unisce un vertice con il punto medio del lato opposto","La semiretta che divide un angolo in due angoli congruenti","Il segmento perpendicolare al lato opposto","Il lato più lungo"], answer:0,
      explanation:"Divide in due il lato opposto. La semiretta che divide l'angolo è la bisettrice." },
    { a:"bma", q:"Che cos'è l'altezza di un triangolo?", options:["Il segmento da un vertice perpendicolare al lato opposto (o al suo prolungamento)","Il segmento da un vertice al punto medio del lato opposto","La semiretta che divide un angolo a metà","Il segmento più alto del disegno"], answer:0,
      explanation:"Perpendicolare = forma un angolo retto. Nel triangolo con un angolo ottuso alcune altezze cadono fuori." },
    { a:"bma", q:"Che cosa divide in due la bisettrice?", options:["Un angolo","Il lato opposto","Il triangolo in due triangoli rettangoli","Il perimetro"], answer:0,
      explanation:"Bisettrice: dal latino bis «due» e secare «tagliare»: divide l'angolo in due angoli congruenti." },

    // ── Criteri di congruenza ──
    { a:"criteri", q:"Che cosa dice il primo criterio di congruenza?", options:["Due triangoli sono congruenti se hanno ordinatamente congruenti due lati e l'angolo tra essi compreso","Due triangoli sono congruenti se hanno tre angoli congruenti","Due triangoli sono congruenti se hanno due lati congruenti","Due triangoli sono congruenti se hanno un lato in comune"], answer:0,
      explanation:"LAL: lato, angolo, lato. L'angolo sta in mezzo ai due lati." },
    { a:"criteri", q:"AB ≅ A′B′, Â ≅ Â′, B̂ ≅ B̂′. Quale criterio?", options:["2° criterio (ALA)","1° criterio (LAL)","Non basta: nessuno dei due","Non serve un criterio"], answer:0,
      explanation:"Un lato e i due angoli adiacenti a esso, ai suoi estremi A e B." },
    { a:"criteri", q:"AB ≅ A′B′, BC ≅ B′C′, Â ≅ Â′. Si può usare il 1° criterio?", options:["No: Â non è compreso tra AB e BC","Sì, sempre","Sì, perché ci sono due lati","No, serve il 2° criterio"], answer:0,
      explanation:"L'angolo compreso tra AB e BC è B̂. Con un angolo non compreso i triangoli possono essere diversi." },

    // ── Gradi, primi e secondi ──
    { a:"gradi", q:"Quanto fa 0,5° in primi?", options:["30′","50′","5′","60′"], answer:0,
      explanation:"0,5 × 60 = 30′. Come mezz'ora = 30 minuti." },
    { a:"gradi", q:"7,125° = ?", options:["7° 7′ 30″","7° 12′ 30″","7° 1′ 25″","7° 7′ 50″"], answer:0,
      explanation:"0,125 × 60 = 7,5 → 7′; avanza 0,5 × 60 = 30″." },
    { a:"gradi", q:"4° 30′ in gradi con la virgola fa…", options:["4,5°","4,3°","4,03°","4,05°"], answer:0,
      explanation:"30 : 60 = 0,5, quindi 4 + 0,5 = 4,5°." },
    { a:"gradi", q:"35° 48′ 50″ + 20° 25′ 30″ = ?", options:["56° 14′ 20″","55° 73′ 80″","56° 13′ 20″","55° 14′ 20″"], answer:0,
      explanation:"55° 73′ 80″ → 80″ = 1′ 20″ → 74′ = 1° 14′ → 56° 14′ 20″. 55° 73′ 80″ ha il valore giusto ma non è sistemato." }
  ]
};
