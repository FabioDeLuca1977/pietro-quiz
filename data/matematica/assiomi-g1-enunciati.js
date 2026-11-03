// ============================================================
//  data/matematica/assiomi-g1-enunciati.js  (v1)
//  Cap. G1 GEOMETRIA EUCLIDEA — Gli assiomi da enunciare a memoria
//
//  type:"define": Pietro scrive l'enunciato; il motore controlla le parole chiave.
//  answerText = enunciato del prof; le parti che sul quaderno mancano sono
//  completate con l'enunciato usuale (stesse parole della scheda assiomi-g1).
//  Fonte: quaderno di Pietro (foto, 2 novembre 2026).
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["assiomi-g1-enunciati"] = {

  id:              "assiomi-g1-enunciati",
  subject:         "matematica",
  title:           "Cap. G1 — Gli assiomi: enunciali a memoria",
  description:     "Scrivi gli enunciati: se manca un concetto, lo leggi e lo riscrivi a memoria",
  icon:            "🧠",
  version:         1,
  timePerQuestion: 0,

  questions: [

    { type:"define", q:"Enuncia l'assioma 1.", keys:[["piano"],["insieme"],["punti"],["retta"],["sottoinsieme"]],
      answerText:"Ogni piano è un insieme di punti; ogni retta è un sottoinsieme del piano.", explanation:"Assioma 1." },

    { type:"define", q:"Enuncia l'assioma 2A (quanti punti ha una retta?).", keys:[["retta"],["almeno"],["2","due"],["distint"]],
      answerText:"A ogni retta appartengono almeno 2 punti distinti.", explanation:"Assioma 2A, di appartenenza." },

    { type:"define", q:"Enuncia l'assioma 2B (rette per due punti).", keys:[["due punti","2 punti"],["distint"],["una e una sola"],["retta"]],
      answerText:"Dati due punti distinti, esiste una e una sola retta che li contiene.", explanation:"Assioma 2B: le parole «una e una sola» sono obbligatorie." },

    { type:"define", q:"Enuncia l'assioma 2C (punti fuori dalla retta).", keys:[["retta"],["almeno"],["punto"],["non appart"]],
      answerText:"Data una retta nel piano, esiste almeno 1 punto del piano che non appartiene a essa.", explanation:"Assioma 2C." },

    { type:"define", q:"Enuncia l'assioma 3A (punto tra A e B).", keys:[["a precede b"],["sempre"],["a precede c"],["c precede b"]],
      answerText:"Dati due punti distinti A e B tali che A precede B, ci sarà sempre un punto C tale che A precede C e C precede B.", explanation:"Assioma 3A, di ordine. C sta tra A e B." },

    { type:"define", q:"Enuncia l'assioma 3B (punto P su una retta).", keys:[["retta"],["punto p"],["a precede p"],["p precede b"]],
      answerText:"Data una retta e preso un punto P sulla retta, ci saranno sempre A e B tali che A precede P e P precede B.", explanation:"Assioma 3B: la retta non ha inizio né fine." },

    { type:"define", q:"Enuncia l'assioma 4 (la retta che divide il piano).", keys:[["retta"],["due"],["disgiunt"],["convess"],["semipian"],["intersec"]],
      answerText:"Una retta r divide l'insieme dei punti del piano che non le appartengono in due sottoinsiemi disgiunti e convessi α e β, detti semipiani di origine r. Se A appartiene ad α e B appartiene a β, allora il segmento AB interseca la retta r.",
      explanation:"Assioma 4." },

    { type:"define", q:"Enuncia le tre parti dell'assioma 5 (congruenza).", keys:[["se stessa","se stesso"],["allora"],["f2 e congruente a f1","f2 congruente a f1","f2 e congruente alla figura f1"],["f1 e congruente a f3","f1 congruente a f3"]],
      answerText:"A. Ogni figura è congruente a se stessa. B. Se F₁ è congruente a F₂, allora F₂ è congruente a F₁. C. Se F₁ è congruente a F₂ e F₂ è congruente a F₃, allora F₁ è congruente a F₃.",
      explanation:"Assioma 5: proprietà riflessiva, simmetrica e transitiva. Scrivi F1, F2, F3 con i numeri." },

    { type:"define", q:"Enuncia l'assioma 6.", keys:[["tutti"],["punti"],["congruent"],["rette"]],
      answerText:"Tutti i punti sono congruenti tra loro, così come le rette.", explanation:"Assioma 6." },

    { type:"define", q:"Enuncia l'assioma 7A (trasporto del segmento).", keys:[["segmento"],["semirett"],["origine"],["uno e un solo","un solo"],["congruent"]],
      answerText:"Dato un segmento AB e una semiretta di origine O, esiste uno e un solo punto P sulla semiretta tale che OP sia congruente ad AB.", explanation:"Assioma 7A." },

    { type:"define", q:"Enuncia l'assioma 7B (trasporto dell'angolo).", keys:[["angolo"],["semirett"],["ciascuno","ognuno"],["semipian"],["una e una sola","una sola"],["congruent"]],
      answerText:"Dato un angolo AÔB e una semiretta di origine O₁, in ciascuno dei due semipiani individuati dalla retta che contiene la semiretta esiste una e una sola semiretta di origine O₁ tale che i due angoli siano congruenti.",
      explanation:"Assioma 7B." },

    { type:"define", q:"Enuncia l'assioma 8.", keys:[["somma"],["differenza"],["multipl"],["sottomultipl"],["segment"],["congruent"]],
      answerText:"Somma, differenza, multiplo e sottomultiplo di segmenti congruenti sono a loro volta congruenti.", explanation:"Assioma 8." },

    { type:"define", q:"Enuncia l'assioma 9 (la misura).", keys:[["segmento"],["non nullo"],["unita di misura"],["reale"],["positivo"],["misura"]],
      answerText:"Comunque fissati un segmento non nullo u come unità di misura e un numero reale positivo k, esiste un segmento la cui misura rispetto a u è il numero k.", explanation:"Assioma 9." },

    { type:"define", q:"Enuncia l'assioma 10.", keys:[["somma"],["differenza"],["multipl"],["sottomultipl"],["angol"],["congruent"]],
      answerText:"Somma, differenza, multipli e sottomultipli di angoli congruenti sono congruenti.", explanation:"Assioma 10: come l'8, ma con gli angoli." }

  ]
};
