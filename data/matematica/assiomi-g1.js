// ============================================================
//  data/matematica/assiomi-g1.js  (v1)
//  Cap. G1 GEOMETRIA EUCLIDEA — I 10 assiomi dettati dal prof
//
//  type:"reading": prima la scheda di ripasso, poi 20 domande.
//  Ogni domanda ha ev = la frase della scheda da rileggere.
//  Fonte: quaderno di Pietro (foto, 2 novembre 2026). In corsivo le parti che il prof
//  ha detto ma che sul quaderno mancano, completate con le parole del libro (cap. G1).
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["assiomi-g1"] = {

  id:              "assiomi-g1",
  subject:         "matematica",
  type:            "reading",
  title:           "Cap. G1 — Gli assiomi: ripasso e domande",
  description:     "Prima leggi la scheda dei 10 assiomi, poi 20 domande · puoi tornare alla scheda",
  icon:            "📏",
  version:         1,
  timePerQuestion: 0,

  reading: {
    photo: "Gli assiomi dettati dal prof. In corsivo le parti che il prof ha detto in classe ma che sul quaderno mancano: le abbiamo completate con le parole del libro (cap. G1, dove gli assiomi si chiamano «postulati»).",
    paras: [
      "<b>Che cos'è un assioma?</b> È una proprietà che accettiamo come vera senza dimostrarla. Dagli assiomi si ricavano i teoremi.",
      "<b>Assioma 1.</b> Ogni piano è un insieme di punti; ogni retta è un sottoinsieme del piano.<br>👉 Il piano è fatto di punti, la retta è una parte del piano.",
      "<b>Assioma 2 (di appartenenza).</b><br><b>A.</b> A ogni retta appartengono almeno 2 punti distinti.<br><b>B.</b> Dati due punti distinti, esiste <i>una e una sola retta a cui appartengono entrambi</i>.<br><b>C.</b> Data una retta nel piano, esiste almeno 1 punto del piano che non appartiene a essa.",
      "<b>Assioma 3 (di ordine).</b><br><b>A.</b> Dati due punti distinti A e B tali che A precede B, ci sarà sempre un punto C tale che A precede C e C precede <i>B</i>. <i>(Sul quaderno c'è «C precede A»: è sbagliato, C sta tra A e B. Anche gli appunti di un compagno dicono «C precede B».)</i><br><b>B.</b> Data una retta e preso un punto P sulla retta, ci saranno sempre A e B tali che A precede P e P precede B.<br>👉 Tra due punti ce n'è sempre un altro, quindi ce ne sono infiniti; la retta non ha inizio né fine.",
      "<b>Assioma 4.</b> Consideriamo una retta r nel piano: l'insieme dei punti del piano che non appartengono a r resta diviso da r in due sottoinsiemi disgiunti e convessi α e β, <i>detti semipiani di origine r</i>. Se A appartiene ad α e B appartiene a β, allora il segmento <i>AB interseca la retta r</i>.",
      "<b>Assioma 5.</b><br><b>A.</b> Ogni figura è congruente a se stessa.<br><b>B.</b> Se la figura F₁ è congruente alla figura F₂, <i>allora</i> la figura F₂ è congruente alla figura F₁.<br><b>C.</b> Se F₁ è congruente a F₂ <i>e F₂ è congruente</i> a F₃, <i>allora</i> F₁ è congruente a F₃.<br>👉 Sono le proprietà riflessiva, simmetrica e transitiva della congruenza.",
      "<b>Assioma 6.</b> Tutti i punti sono congruenti tra loro, così come <i>i piani,</i> le rette, <i>i semipiani e le semirette</i>.<br>👉 Un punto vale l'altro, una retta vale l'altra: si possono sempre sovrapporre. <i>(Piani, semipiani e semirette sono negli appunti di un compagno.)</i>",
      "<b>Assioma 7.</b><br><b>A.</b> Dato un segmento AB e una semiretta di origine O, <i>sulla semiretta esiste, ed è unico, il punto P tale che OP ≅ AB</i>.<br><b>B.</b> Dato un angolo AÔB e una semiretta <i>di origine</i> O₁, <i>in un semipiano fissato esiste, ed è unica, la semiretta di origine O₁</i> tale che i due angoli siano congruenti.<br>👉 Un segmento o un angolo si copia su una semiretta, in un solo modo.",
      "<b>Assioma 8.</b> Somme, differenze, multipli e sottomultipli di segmenti congruenti saranno a loro volta congruenti.",
      "<b>Assioma 9.</b> Comunque fissati un segmento non nullo u come unità di misura e un numero reale positivo k, esiste un segmento la cui misura rispetto a u è il numero k.",
      "<b>Assioma 10.</b> Somme, differenze, multipli e sottomultipli di angoli congruenti saranno a loro volta congruenti.<br>👉 Come l'8, ma con gli angoli."
    ]
  },

  questions: [

    { q:"Che cos'è un assioma?",
      options:["Una proprietà che accettiamo come vera senza dimostrarla","Una proprietà che si dimostra con un teorema","La definizione di una figura","Un esercizio svolto"],
      answer:0, ev:"È una proprietà che accettiamo come vera senza dimostrarla",
      explanation:"Un assioma non si dimostra: si accetta come vero, e dagli assiomi si ricavano i teoremi." },

    { q:"Secondo l'assioma 1, che cos'è una retta?",
      options:["Un sottoinsieme del piano","Un insieme di piani","Un punto molto lungo","Un insieme che contiene il piano"],
      answer:0, ev:"ogni retta è un sottoinsieme del piano",
      explanation:"Assioma 1: ogni piano è un insieme di punti; ogni retta è un sottoinsieme del piano." },

    { q:"Quanti punti appartengono, come minimo, a ogni retta?",
      options:["Almeno 1","Almeno 2 punti distinti","Esattamente 2","Almeno 3"],
      answer:1, ev:"A ogni retta appartengono almeno 2 punti distinti",
      explanation:"Assioma 2A: a ogni retta appartengono almeno 2 punti distinti." },

    { q:"Quante rette passano per due punti distinti?",
      options:["Nessuna","Una e una sola","Almeno due","Infinite"],
      answer:1, ev:"una e una sola retta a cui appartengono entrambi",
      explanation:"Assioma 2B: dati due punti distinti, esiste una e una sola retta a cui appartengono entrambi. All'interrogazione di' proprio «una e una sola»." },

    { q:"Data una retta nel piano, che cosa garantisce l'assioma 2C?",
      options:["Che c'è almeno un punto del piano fuori dalla retta","Che la retta contiene tutti i punti del piano","Che la retta ha esattamente due punti","Che per ogni punto passa una sola retta"],
      answer:0, ev:"esiste almeno 1 punto del piano che non appartiene a essa",
      explanation:"Assioma 2C: data una retta nel piano, esiste almeno 1 punto del piano che non appartiene a essa." },

    { q:"A precede B. Che cosa dice l'assioma 3A?",
      options:["C'è sempre un punto C tale che A precede C e C precede B","C'è sempre un punto C che precede A","C coincide sempre con A oppure con B","Non c'è nessun punto tra A e B"],
      answer:0, ev:"ci sarà sempre un punto C tale che A precede C e C precede",
      explanation:"Assioma 3A: C sta tra A e B. Attenzione: sul quaderno c'è «C precede A», ma è «C precede B»." },

    { q:"Perché tra due punti di una retta ce ne sono infiniti?",
      options:["Perché l'assioma 3A si può ripetere: tra A e C, tra C e B, e così via","Perché lo dice l'assioma 6","Perché per due punti passa una sola retta","Perché ogni retta ha almeno 2 punti"],
      answer:0, ev:"Tra due punti ce n'è sempre un altro, quindi ce ne sono infiniti",
      explanation:"Applicando di nuovo l'assioma 3A ai nuovi punti si trova sempre un altro punto in mezzo: i punti sono infiniti." },

    { q:"Che cosa ci dice l'assioma 3B sulla retta?",
      options:["Che non ha inizio né fine","Che ha un inizio ma non una fine","Che è limitata da due punti","Che è formata da un numero finito di punti"],
      answer:0, ev:"la retta non ha inizio né fine",
      explanation:"Assioma 3B: preso un punto P, c'è sempre un punto che lo precede e uno che lo segue." },

    { type:"text", q:"Come si chiamano le due parti α e β in cui una retta r divide il piano? (una parola)",
      accept:["semipiani","semipiano","i semipiani","semipiani di origine r"], answerText:"semipiani",
      ev:"detti semipiani di origine r",
      explanation:"Assioma 4: α e β sono detti semipiani di origine r." },

    { q:"Come sono le due parti α e β dell'assioma 4?",
      options:["Disgiunte e convesse","Sovrapposte","Formate da un solo punto ciascuna","Uguali alla retta r"],
      answer:0, ev:"due sottoinsiemi disgiunti e convessi",
      explanation:"Assioma 4: la retta r divide i punti che non le appartengono in due sottoinsiemi disgiunti e convessi." },

    { q:"A appartiene ad α e B appartiene a β. Che cosa fa il segmento AB?",
      options:["Interseca la retta r","Sta tutto nel semipiano α","È parallelo alla retta r","Non si può tracciare"],
      answer:0, ev:"AB interseca la retta r",
      explanation:"Assioma 4: se A e B stanno in semipiani diversi, il segmento AB interseca la retta r." },

    { type:"classify", q:"Quale proprietà della congruenza è? (assioma 5)", categories:["Riflessiva","Simmetrica","Transitiva"],
      items:[ {t:"Ogni figura è congruente a se stessa", c:0},
              {t:"Se F₁ è congruente a F₂, allora F₂ è congruente a F₁", c:1},
              {t:"Se F₁ è congruente a F₂ e F₂ è congruente a F₃, allora F₁ è congruente a F₃", c:2} ],
      ev:"Sono le proprietà riflessiva, simmetrica e transitiva della congruenza",
      explanation:"Assioma 5: A riflessiva, B simmetrica, C transitiva." },

    { q:"F₁ è congruente a F₂ e F₂ è congruente a F₃. Che cosa si può dire?",
      options:["F₁ è congruente a F₃","F₁ non è congruente a F₃","Non si può dire niente","Solo F₂ è congruente a se stessa"],
      answer:0, ev:"F₁ è congruente a F₃",
      explanation:"Assioma 5C (proprietà transitiva)." },

    { q:"Che cosa dice l'assioma 6?",
      options:["Tutti i punti sono congruenti tra loro, così come i piani, le rette, i semipiani e le semirette","Tutti i segmenti sono congruenti tra loro","Due rette sono sempre congruenti solo se parallele","Ogni figura è congruente solo a se stessa"],
      answer:0, ev:"Tutti i punti sono congruenti tra loro, così come",
      explanation:"Assioma 6: un punto vale l'altro, una retta vale l'altra. Attenzione: i segmenti no, perché possono essere lunghi diversi." },

    { q:"Dato un segmento AB e una semiretta di origine O, quanti punti P ci sono sulla semiretta con OP congruente ad AB?",
      options:["Uno e un solo","Due","Infiniti","Nessuno, se la semiretta è più corta di AB"],
      answer:0, ev:"sulla semiretta esiste, ed è unico, il punto P tale che OP ≅ AB",
      explanation:"Assioma 7A. La semiretta non finisce mai, quindi il punto P c'è sempre, ed è uno solo." },

    { q:"Dato un angolo AÔB e una semiretta di origine O₁, quante semirette di origine O₁ formano un angolo congruente ad AÔB?",
      options:["Una e una sola","Infinite","Nessuna","Dipende da quanto è lunga la semiretta"],
      answer:0, ev:"in un semipiano fissato esiste, ed è unica, la semiretta di origine O₁",
      explanation:"Assioma 7B: l'angolo si copia sulla semiretta in un solo modo. (Il libro: in un semipiano fissato.)" },

    { q:"AB è congruente a CD. Il doppio di AB è congruente al doppio di CD?",
      options:["Sì, per l'assioma 8","No, mai","Solo se AB e CD stanno sulla stessa retta","Sì, ma per l'assioma 6"],
      answer:0, ev:"Somme, differenze, multipli e sottomultipli di segmenti congruenti saranno a loro volta congruenti",
      explanation:"Assioma 8: il doppio è un multiplo, e multipli di segmenti congruenti sono congruenti." },

    { q:"Che differenza c'è tra l'assioma 8 e l'assioma 10?",
      options:["L'8 parla di segmenti, il 10 di angoli","L'8 parla di rette, il 10 di punti","L'8 parla di somme, il 10 di differenze","Nessuna, dicono la stessa cosa"],
      answer:0, ev:"Come l'8, ma con gli angoli",
      explanation:"Somme, differenze, multipli e sottomultipli: nell'8 di segmenti congruenti, nel 10 di angoli congruenti." },

    { q:"Esiste un segmento che misura √2 rispetto all'unità u?",
      options:["Sì, perché √2 è un numero reale positivo","No, perché √2 è irrazionale","Solo se u è lungo √2","Solo se √2 è un numero intero"],
      answer:0, ev:"un numero reale positivo k",
      explanation:"Assioma 9: per ogni numero reale positivo k esiste un segmento che misura k rispetto a u. √2 è reale e positivo." },

    { type:"classify", q:"Di quale assioma si tratta?", categories:["Assioma 2","Assioma 3","Assioma 4"],
      items:[ {t:"Per due punti distinti passa una e una sola retta", c:0},
              {t:"Ogni retta ha almeno 2 punti distinti", c:0},
              {t:"Tra A e B c'è sempre un punto C", c:1},
              {t:"La retta non ha inizio né fine", c:1},
              {t:"Una retta divide il piano in due semipiani", c:2},
              {t:"Se A sta in α e B sta in β, il segmento AB interseca r", c:2} ],
      explanation:"2: appartenenza · 3: ordine · 4: divisione del piano." }

  ]
};
