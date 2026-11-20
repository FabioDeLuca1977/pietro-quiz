// ============================================================
//  data/scienze/chimica-esercizi.js  (v1)
//  Test di chimica per l'interrogazione del modulo (prof Flaccavento).
//  Contenuti dal libro (cap. 2 pp. 40-61, cap. 3 pp. 77-88). I problemi
//  numerici sono scritti da noi sullo stesso modello del libro.
//  Nelle crocette la risposta giusta è la prima (il motore mescola).
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

(function () {
  const HW = "Scrivi una parola. Maiuscole e accenti non contano.";
  const HN = "Scrivi solo il numero (la virgola o il punto vanno bene).";
  const T = (q, answers, explanation) => ({ type: "text", q, accept: [].concat(answers), answerText: [].concat(answers)[0], hint: HW, explanation });
  const N = (q, answers, explanation) => ({ type: "text", q, accept: [].concat(answers), answerText: [].concat(answers)[0], hint: HN, explanation });
  const bank = (id, title, description, icon, questions) => {
    window.QUIZ_BANK[id] = { id, subject: "scienze", title, description, icon, version: 1, timePerQuestion: 45, questions };
  };

  // ── 1. Passaggi di stato e separazione (cap. 2) ───────────────
  bank("chim-fisiche", "Chimica: stati, miscele, passaggi di stato", "Cap. 2: sostanze pure, miscele, passaggi di stato, metodi di separazione", "🌡️", [
    { q: "Che cos'è una sostanza pura?", options: ["Materia fatta da un solo componente, cioè una sola specie chimica", "Materia senza microrganismi", "Qualsiasi liquido trasparente", "Una miscela omogenea"], answer: 0, explanation: "p. 42." },
    { q: "Quale di queste NON è una proprietà intensiva?", options: ["Il volume", "La densità", "La temperatura di ebollizione", "La temperatura di fusione"], answer: 0, explanation: "p. 43: densità e temperature di fusione e di ebollizione permettono di identificare una sostanza pura." },
    { q: "Una miscela omogenea si chiama anche…", options: ["soluzione", "composto", "elemento", "sospensione"], answer: 0, explanation: "p. 44." },
    { type: "classify", q: "Miscela eterogenea o omogenea?", categories: ["Eterogenea", "Omogenea"],
      items: [{ t: "latte", c: 0 }, { t: "granito", c: 0 }, { t: "succo d'arancia", c: 0 }, { t: "acqua di mare", c: 1 }, { t: "aria", c: 1 }, { t: "bronzo", c: 1 }], explanation: "pp. 44-45." },
    { q: "In una soluzione, il solvente è…", options: ["la sostanza presente in maggiore quantità, che scioglie", "la sostanza disciolta", "il corpo di fondo", "sempre un solido"], answer: 0, explanation: "p. 45." },
    { q: "Rispetto all'acqua distillata, l'acqua salata…", options: ["bolle a temperatura più alta e congela a temperatura più bassa", "bolle e congela alle stesse temperature", "bolle a temperatura più bassa", "non congela mai"], answer: 0, explanation: "p. 46." },
    T("Nelle trasformazioni fisiche, che cosa non varia delle sostanze? (una parola)", ["identita", "l'identita"], "p. 55: nelle trasformazioni fisiche l'identità delle sostanze non varia."),
    { type: "classify", q: "Abbina ogni passaggio di stato.", categories: ["solido → liquido", "liquido → gas", "solido → gas", "gas → solido"],
      items: [{ t: "fusione", c: 0 }, { t: "evaporazione", c: 1 }, { t: "sublimazione", c: 2 }, { t: "brinamento", c: 3 }], explanation: "Schema di p. 55." },
    T("Come si chiama il passaggio da gas a liquido?", ["condensazione"], "p. 56."),
    { q: "Che differenza c'è tra evaporazione ed ebollizione?", options: ["L'evaporazione riguarda la superficie, l'ebollizione tutta la massa del liquido", "Sono la stessa cosa", "L'ebollizione avviene solo nei solidi", "L'evaporazione avviene solo a 100 °C"], answer: 0, explanation: "p. 56." },
    { q: "In una pentola a pressione l'acqua bolle…", options: ["sopra i 100 °C", "sotto i 100 °C", "esattamente a 100 °C", "a 0 °C"], answer: 0, explanation: "p. 56: più pressione, temperatura di ebollizione più alta (circa 120 °C a 2 atm)." },
    { q: "Durante la fusione di una sostanza pura la temperatura…", options: ["resta costante (sosta termica)", "sale sempre", "scende", "cambia a caso"], answer: 0, explanation: "p. 57: il calore serve a vincere le forze di attrazione (calore latente)." },
    T("Come si chiama il calore fornito durante la fusione, che non fa salire la temperatura? Calore …", ["latente"], "p. 57: calore latente di fusione, cioè «nascosto»."),
    { q: "La cera non fonde a una temperatura precisa perché…", options: ["è una miscela", "è un elemento", "è una sostanza pura", "è un gas"], answer: 0, explanation: "p. 57: la cera è una miscela solida; il naftalene (puro) fonde a 80 °C." },
    { q: "I metodi di separazione delle miscele sono processi…", options: ["fisici", "chimici", "nucleari", "biologici"], answer: 0, explanation: "p. 58." },
    { type: "classify", q: "Che cosa sfrutta ogni metodo di separazione?", categories: ["dimensioni delle particelle", "densità", "punto di ebollizione", "solubilità"],
      items: [{ t: "filtrazione", c: 0 }, { t: "centrifugazione", c: 1 }, { t: "distillazione", c: 2 }, { t: "cristallizzazione", c: 3 }], explanation: "pp. 59-61." },
    { q: "Per separare il sale dall'acqua di una soluzione si usa…", options: ["la distillazione", "la filtrazione", "la calamita", "la centrifugazione"], answer: 0, explanation: "p. 60: il sale rimane nel pallone." },
    { q: "Alcol (78 °C) e acqua (100 °C) si separano con…", options: ["la distillazione frazionata", "la filtrazione", "la centrifugazione", "l'estrazione con il tè"], answer: 0, explanation: "p. 60: punti di ebollizione vicini." },
    { q: "Preparare una tazza di tè è un esempio di…", options: ["estrazione con solvente", "distillazione", "centrifugazione", "sublimazione"], answer: 0, explanation: "p. 61." },
    { q: "Nella depurazione delle acque reflue, a che cosa serve la grigliatura?", options: ["A trattenere materiali grossi come foglie, stracci e pezzi di legno", "A eliminare oli e grassi", "A uccidere i batteri", "A far bollire l'acqua"], answer: 0, explanation: "p. 50: poi vengono dissabbiatura, deoleazione e decantazione." },
    { q: "Nella vasca di aerazione di un depuratore, le sostanze organiche…", options: ["vengono attaccate dai batteri e trasformate in diossido di carbonio e acqua", "vengono filtrate con la sabbia", "evaporano", "si sciolgono nel cloro"], answer: 0, explanation: "p. 51: restano i fanghi." },
    { q: "Lo zucchero greggio diventa zucchero bianco con la…", options: ["cristallizzazione", "filtrazione", "centrifugazione", "condensazione"], answer: 0, explanation: "p. 61." }
  ]);

  // ── 2. Elementi, composti e leggi (cap. 3) ────────────────────
  bank("chim-chimiche", "Chimica: elementi, composti e leggi", "Cap. 3: reazioni, elementi e composti, Dalton, atomi, ioni, Lavoisier, Proust", "⚛️", [
    { q: "Quale NON è un indizio di reazione chimica?", options: ["L'evaporazione", "Lo sviluppo di un gas", "La produzione di luce e calore", "Il cambiamento delle proprietà"], answer: 0, explanation: "p. 77: l'evaporazione è un passaggio di stato, cioè una trasformazione fisica." },
    { q: "La ruggine rispetto al ferro…", options: ["ha proprietà diverse: è friabile e non magnetica", "è uguale al ferro", "è più dura e magnetica", "è una miscela di ferro e acqua"], answer: 0, explanation: "p. 77." },
    T("Come si chiama il processo che scompone l'acqua con la corrente elettrica?", ["elettrolisi"], "p. 77: si ottengono idrogeno e ossigeno."),
    { q: "Nell'elettrolisi dell'acqua, il volume di idrogeno è…", options: ["il doppio di quello dell'ossigeno", "uguale a quello dell'ossigeno", "la metà di quello dell'ossigeno", "zero"], answer: 0, explanation: "p. 77." },
    { q: "Un elemento…", options: ["non può essere decomposto in sostanze più semplici", "si decompone con l'elettrolisi", "è sempre una miscela", "contiene sempre due atomi diversi"], answer: 0, explanation: "p. 78." },
    { type: "classify", q: "Elemento o composto?", categories: ["Elemento", "Composto"],
      items: [{ t: "ossigeno", c: 0 }, { t: "carbonio", c: 0 }, { t: "azoto (N)", c: 0 }, { t: "acqua", c: 1 }, { t: "saccarosio", c: 1 }, { t: "cloruro di sodio", c: 1 }], explanation: "pp. 78-79." },
    { type: "order", q: "Metti in ordine le domande della mappa per classificare la materia.", items: ["Le proprietà sono uniformi?", "Si separa con processi fisici?", "Si decompone con processi chimici?"], explanation: "Mappa di p. 78." },
    T("Qual è il simbolo del rame?", ["Cu"], "p. 79: dal latino Cuprum."),
    T("Qual è il simbolo del sodio?", ["Na"], "p. 79: dal latino Natrium."),
    { q: "Chi formulò la teoria atomica nel 1803?", options: ["Dalton", "Lavoisier", "Proust", "Gay-Lussac"], answer: 0, explanation: "p. 79." },
    { q: "Secondo Dalton, nelle reazioni chimiche gli atomi…", options: ["non si creano né si distruggono: cambia solo come si legano", "si trasformano in atomi di altri elementi", "si distruggono", "cambiano massa"], answer: 0, explanation: "p. 79." },
    { q: "La molecola è…", options: ["la più piccola particella con le proprietà chimiche e la composizione di un composto", "un atomo con carica", "una miscela di atomi", "la più piccola particella di un elemento"], answer: 0, explanation: "p. 80." },
    N("Quanti atomi di idrogeno ci sono in una molecola di NH₃?", ["3", "tre"], "p. 81: NH₃ = 1 atomo di azoto e 3 di idrogeno."),
    { q: "Gli ioni con carica positiva si chiamano…", options: ["cationi", "anioni", "molecole", "isotopi"], answer: 0, explanation: "p. 83: quelli negativi sono gli anioni." },
    { q: "Il cloruro di sodio (NaCl) è un composto…", options: ["ionico", "molecolare", "elemento", "miscela"], answer: 0, explanation: "p. 83." },
    { q: "Scaldando ferro e zolfo si ottiene…", options: ["un composto, il solfuro di ferro, da cui la calamita non separa il ferro", "una miscela separabile con la calamita", "due elementi nuovi", "solo vapore"], answer: 0, explanation: "p. 84." },
    { q: "La legge di Lavoisier dice che…", options: ["la massa dei reagenti è uguale alla massa dei prodotti", "un composto ha sempre lo stesso rapporto in massa", "i volumi dei gas stanno in rapporti semplici", "gli atomi sono indivisibili"], answer: 0, explanation: "p. 85: legge di conservazione della massa." },
    { q: "La legge di Proust dice che…", options: ["un composto è sempre fatto degli stessi elementi nello stesso rapporto in massa", "la massa si conserva", "gli atomi non si distruggono", "le soluzioni hanno un soluto"], answer: 0, explanation: "p. 86: legge della composizione costante." },
    { q: "Nel CO e nel CO₂ le masse di ossigeno legate a 1 g di carbonio stanno nel rapporto…", options: ["2 : 1", "1 : 1", "3 : 1", "8 : 1"], answer: 0, explanation: "p. 88: 2,66 g e 1,33 g; è la legge delle proporzioni multiple (Dalton)." },
    { type: "classify", q: "Di chi è ogni legge?", categories: ["Lavoisier", "Proust", "Dalton"],
      items: [{ t: "conservazione della massa", c: 0 }, { t: "composizione costante", c: 1 }, { t: "proporzioni multiple", c: 2 }], explanation: "pp. 85-88." }
  ]);

  // ── 3. Problemi (numeri scritti da noi sul modello del libro) ──
  bank("chim-problemi", "Chimica: problemi", "Lavoisier, Proust, percentuale in massa, concentrazioni · risposta da scrivere", "🧮", [
    N("Lavoisier. 12 g di carbonio reagiscono con 32 g di ossigeno. Quanti grammi di prodotto si ottengono?", ["44"], "Massa reagenti = massa prodotti: 12 + 32 = 44 g (p. 85)."),
    N("Lavoisier. Scaldando 50 g di una sostanza si ottengono 28 g di un solido e un gas. Quanti grammi di gas?", ["22"], "50 − 28 = 22 g (come l'esercizio 24 di p. 99)."),
    N("Lavoisier. Una sostanza si decompone in 10,0 g di un metallo e 2,5 g di ossigeno. Qual era la massa di partenza (g)?", ["12,5", "12.5"], "10,0 + 2,5 = 12,5 g (come l'esercizio 25 di p. 99)."),
    N("Esercizio 24 di p. 99: 100 kg di calcare danno 56 kg di calce viva e diossido di carbonio. Quanti kg di diossido di carbonio?", ["44"], "100 − 56 = 44 kg."),
    N("Esercizio 25 di p. 99: dall'ossido di mercurio si ottengono 21,8 g di mercurio e 3,50 g di ossigeno. Massa dell'ossido (g)?", ["25,3", "25.3", "25,30", "25.30"], "21,8 + 3,50 = 25,3 g."),
    N("Proust. Nell'acqua 1 g di idrogeno si combina con 8 g di ossigeno. Quanti grammi di ossigeno servono per 3 g di idrogeno?", ["24"], "Rapporto costante 1 : 8 → 3 × 8 = 24 g (p. 86)."),
    N("Proust. Nel solfuro di ferro 1 g di ferro si combina con 0,57 g di zolfo. Quanti grammi di zolfo servono per 2 g di ferro?", ["1,14", "1.14"], "2 × 0,57 = 1,14 g (p. 86)."),
    N("Percentuale in massa. 20 g di un composto contengono 5 g di un elemento. Qual è la percentuale in massa dell'elemento?", ["25", "25%"], "5 ÷ 20 × 100 = 25% (p. 87)."),
    N("% in massa. 10 g di sale sciolti in 40 g di acqua. Qual è la % m/m?", ["20", "20%"], "Massa soluzione = 10 + 40 = 50 g → 10 ÷ 50 × 100 = 20% (p. 48)."),
    N("% in volume. 30 mL di alcol in 200 mL di soluzione. Qual è la % V/V?", ["15", "15%"], "30 ÷ 200 × 100 = 15% (p. 48)."),
    N("Massa su volume. Quanti grammi di zucchero servono per 200 mL di soluzione al 5% m/V?", ["10"], "5 × 200 ÷ 100 = 10 g (p. 49)."),
    N("Diluizione. Da 100 mL di una soluzione al 20% aggiungo acqua fino a 400 mL. Qual è la nuova concentrazione (%)?", ["5", "5%"], "C₁V₁ = C₂V₂: 20 × 100 = C₂ × 400 → C₂ = 5% (p. 53).")
  ]);

  // ── 4. Prova mista ────────────────────────────────────────────
  window.CHIM_IDS = ["chim-fisiche", "chim-chimiche", "chim-problemi"];
  const mix = { id: "chim-verifica", subject: "scienze", title: "Interrogazione di chimica: prova mista", description: "Ogni volta domande nuove da tutti gli argomenti", icon: "🏁", version: 1, timePerQuestion: 45 };
  const pick = (arr, n) => arr.slice().sort(() => Math.random() - 0.5).slice(0, n);
  Object.defineProperty(mix, "questions", { enumerable: true, get() {
    return window.CHIM_IDS.flatMap(id => pick(window.QUIZ_BANK[id].questions, 5));   // 5 per argomento = 15
  } });
  window.QUIZ_BANK["chim-verifica"] = mix;
})();
