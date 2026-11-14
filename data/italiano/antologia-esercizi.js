// ============================================================
//  data/italiano/antologia-esercizi.js  (v1)
//  Test di antologia (testo narrativo) per l'interrogazione del 18/11.
//  Le definizioni vengono dal libro; le frasi da riconoscere sono scritte
//  da noi. Nelle crocette la risposta giusta è la prima (il motore mescola).
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

(function () {
  const H = "Scrivi una parola. Maiuscole e accenti non contano.";
  const T = (q, answers, explanation) => ({ type: "text", q, accept: [].concat(answers), answerText: [].concat(answers)[0], hint: H, explanation });
  const bank = (id, title, description, icon, questions) => {
    window.QUIZ_BANK[id] = { id, subject: "italiano", title, description, icon, version: 1, timePerQuestion: 45, questions };
  };

  // ── 1. Modello narrativo, fabula e intreccio (pp. 4-9) ─────────
  bank("ant-modello", "Il modello narrativo", "I 5 momenti, Propp, fabula e intreccio", "📖", [
    { q: "Che cos'è il modello narrativo?", options: ["Una struttura comune a tutte le narrazioni, che si ripete sempre uguale", "Il riassunto di una storia", "Lo stile di un autore", "Il primo capitolo di un romanzo"], answer: 0,
      explanation: "p. 4: il ripetersi costante di alcuni elementi della narrazione." },
    { type: "order", q: "Metti in ordine i momenti del modello narrativo.", items: ["Situazione iniziale", "Esordio", "Peripezie", "Spannung", "Scioglimento"],
      explanation: "Mappa riassuntiva di p. 8." },
    { q: "Che cosa descrive la situazione iniziale?", options: ["Il contesto e l'equilibrio statico prima della storia", "Il momento di massima tensione", "La rottura dell'equilibrio", "Il nuovo equilibrio finale"], answer: 0,
      explanation: "p. 5: serve a orientare chi legge nel tempo e nello spazio." },
    { q: "L'esordio è…", options: ["la rottura dell'equilibrio", "la descrizione dei luoghi", "il finale a sorpresa", "l'antefatto"], answer: 0,
      explanation: "p. 6: qui comincia davvero la storia." },
    { q: "Quale frase sulle peripezie è giusta?", options: ["Possono migliorare o peggiorare la situazione, ma nessuna è un punto di non ritorno", "Sono sempre tre", "Chiudono la storia", "Sono il momento di massima tensione"], answer: 0,
      explanation: "p. 6: il loro numero è variabile." },
    T("Come si chiama il momento di massima tensione? (parola tedesca)", ["Spannung"], "p. 7: Spannung = «tensione»; il protagonista affronta l'ostacolo definitivo."),
    { q: "Dopo lo scioglimento il nuovo equilibrio è…", options: ["diverso, ma non per forza migliore", "sempre migliore", "uguale a quello iniziale", "sempre tragico"], answer: 0,
      explanation: "p. 8." },
    { q: "Un finale in cui non tutto è risolto e si suggerisce l'inizio di un'altra storia è…", options: ["aperto", "chiuso", "lieto", "descrittivo"], answer: 0,
      explanation: "p. 8: nel finale chiuso, invece, tutte le questioni sono risolte." },
    { q: "Chi ha individuato 31 funzioni nella fiaba popolare?", options: ["Vladimir Propp", "Aristotele", "Stefano Benni", "Carlo Collodi"], answer: 0,
      explanation: "p. 5: Propp, «Morfologia della fiaba» (1928)." },
    { q: "Aristotele studiò i passaggi narrativi costanti di quale genere?", options: ["La tragedia", "La fiaba", "Il romanzo giallo", "La favola"], answer: 0,
      explanation: "p. 4: i passaggi riguardano l'organizzazione, non i contenuti." },
    T("Come si chiama la disciplina che analizza le forme e le strutture della narrazione?", ["narratologia"], "p. 5."),
    { q: "In «La chitarra magica» il mago Lucifumandro è…", options: ["l'aiutante del protagonista", "l'antagonista", "il protagonista", "la voce narrante"], answer: 0,
      explanation: "p. 6: regala a Peter un oggetto magico, la chitarra fatata. L'antagonista è Black Martin." },
    T("Come si chiama l'insieme degli eventi nel loro ordine naturale (cronologico)?", ["fabula"], "p. 9."),
    T("Come si chiama l'insieme dei fatti nell'ordine in cui chi narra decide di raccontarli?", ["intreccio"], "p. 9."),
    { q: "In quale tipo di racconto fabula e intreccio quasi sempre NON coincidono?", options: ["Nel giallo", "Nella fiaba", "In tutti i racconti brevi", "In nessuno"], answer: 0,
      explanation: "p. 9: il giallo mostra prima il delitto e poi ricostruisce i fatti precedenti." },
    { q: "Frase nostra: «Il commissario trova il corpo nella biblioteca. Tre giorni prima…». Fabula e intreccio…", options: ["non coincidono", "coincidono"], answer: 0,
      explanation: "Si torna indietro nel tempo: l'ordine del racconto non è quello cronologico." }
  ]);

  // ── 2. Sequenze e durata (pp. 22-27, 37) ───────────────────────
  bank("ant-sequenze", "Le sequenze e la durata", "Tipi di sequenza, marcatori, ritmo, scena, sommario, pausa, ellissi", "🧱", [
    { q: "Che cos'è una sequenza?", options: ["Un segmento di testo compiuto, con un contenuto coerente e distinguibile", "Una frase lunga", "Un capitolo di un romanzo", "Un dialogo tra due personaggi"], answer: 0,
      explanation: "p. 22." },
    { q: "Le macrosequenze sono dette anche…", options: ["blocchi narrativi", "microsequenze", "marcatori", "incipit"], answer: 0,
      explanation: "p. 22: sono i nuclei fondamentali, formati da più sequenze." },
    { q: "Quale di questi NON è un marcatore di sequenza?", options: ["Il numero di righe", "Il cambio di luogo", "Il cambio di tempo verbale", "L'introduzione di nuovi personaggi"], answer: 0,
      explanation: "p. 23: tempo, luogo, personaggi, argomento, tipologia, tempo verbale." },
    { q: "Il passaggio dall'imperfetto al passato remoto segnala di solito…", options: ["il passaggio da una descrizione a un'azione", "l'inizio di un dialogo", "un flashback", "la fine del racconto"], answer: 0,
      explanation: "p. 23: l'imperfetto ha valore descrittivo, il passato remoto narrativo." },
    { type: "classify", q: "Che tipo di sequenza è? (frasi nostre)", categories: ["narrativa", "descrittiva", "riflessiva / espressiva"],
      items: [{ t: "Marco aprì la porta e corse giù per le scale.", c: 0 }, { t: "Prese la bici e partì verso il paese.", c: 0 },
              { t: "La stanza era piccola, con una finestra sul cortile.", c: 1 }, { t: "Aveva i capelli grigi e le mani grandi.", c: 1 },
              { t: "Si chiedeva se avesse fatto la scelta giusta.", c: 2 }, { t: "Provava una gioia che non sapeva spiegare.", c: 2 }],
      explanation: "Narrativa: azioni. Descrittiva: luoghi e aspetto. Riflessiva ed espressiva: pensieri e sentimenti." },
    { q: "Quali sequenze rallentano il ritmo del racconto?", options: ["Descrittive, riflessive ed espressive", "Narrative e dialogiche", "Solo le dialogiche", "Nessuna"], answer: 0,
      explanation: "p. 27: le narrative e le dialogiche invece tengono alto il ritmo." },
    { q: "Se in una sequenza i tipi convivono in modo equilibrato si parla di sequenza…", options: ["mista", "pura", "macro", "ellittica"], answer: 0,
      explanation: "p. 25: altrimenti si indica la tipologia prevalente." },
    { q: "Nella sequenza descrittiva la storia…", options: ["è «in pausa»", "accelera", "salta in avanti", "torna indietro"], answer: 0,
      explanation: "p. 24." },
    { q: "Che cos'è il tempo della storia?", options: ["Il tempo effettivo della durata dei fatti", "Il tempo che serve a leggere il libro", "L'epoca in cui è ambientato il racconto", "Il tempo verbale usato"], answer: 0,
      explanation: "p. 37: il tempo del racconto è il tempo in cui i fatti vengono narrati." },
    { type: "classify", q: "Abbina ogni rapporto alla tecnica.", categories: ["scena", "sommario", "ellissi"],
      items: [{ t: "TS = TR", c: 0 }, { t: "un dialogo riportato battuta per battuta", c: 0 },
              { t: "TS > TR", c: 1 }, { t: "«Passarono tre anni di lavoro durissimo.»", c: 1 },
              { t: "TR = 0", c: 2 }, { t: "un «buco» nella storia", c: 2 }],
      explanation: "p. 37. Le frasi tra virgolette sono nostre." },
    T("Come si chiama la tecnica in cui il tempo della storia è zero (TS = 0) e la vicenda «si ferma»?", ["pausa"], "p. 37: è tipica delle sequenze riflessive ed espressive."),
    T("Come si chiama la tecnica in cui il tempo della storia è più breve di quello del racconto (TS < TR)?", ["analisi"], "p. 37: chi narra si sofferma su particolari, stati d'animo, emozioni."),
    { q: "Il sommario serve a…", options: ["accelerare il ritmo del racconto", "rallentare il ritmo", "fermare la vicenda", "riportare un dialogo"], answer: 0,
      explanation: "p. 37: i fatti sono narrati in forma riassunta." },
    { q: "Di solito l'ellissi si riconosce perché…", options: ["c'è un punto e a capo", "c'è un dialogo", "c'è una lunga descrizione", "il verbo è all'imperfetto"], answer: 0,
      explanation: "p. 37: l'ellissi non corrisponde ad alcuna sequenza." }
  ]);

  // ── 3. Spazio e personaggi (pp. 50-51, 58-60) ──────────────────
  bank("ant-spazio-personaggi", "Lo spazio e i personaggi", "Funzioni dello spazio, coppie oppositive, tipi di ritratto", "🏠", [
    { q: "Quando lo spazio fa solo da sfondo, la funzione della descrizione si chiama…", options: ["mimetica", "di atmosfera", "simbolica", "connotativa"], answer: 0,
      explanation: "p. 50." },
    { q: "Quando la descrizione dello spazio trasmette le emozioni dei personaggi si parla di funzione…", options: ["di atmosfera", "mimetica", "di sfondo", "denotativa"], answer: 0,
      explanation: "p. 50." },
    { q: "In quali romanzi l'ambiente può diventare esso stesso protagonista?", options: ["Nei romanzi realistici moderni", "Nelle fiabe", "Nei gialli", "Nelle favole"], answer: 0,
      explanation: "p. 50: per esempio Dickens, «Tempi difficili»." },
    { q: "Che cosa vuol dire «spazio come specchio del personaggio»?", options: ["Lo spazio completa la descrizione del personaggio", "Il personaggio si guarda allo specchio", "Lo spazio è descritto due volte", "Il personaggio descrive lo spazio"], answer: 0,
      explanation: "p. 50: lo spazio mette in rilievo caratteristiche sociali, psicologiche o caratteriali." },
    { type: "classify", q: "Che cosa indica di solito lo spazio?", categories: ["aperto", "chiuso", "alto", "basso"],
      items: [{ t: "libertà", c: 0 }, { t: "paura dell'ignoto", c: 0 }, { t: "famiglia e protezione", c: 1 }, { t: "prigionia", c: 1 },
              { t: "spiritualità", c: 2 }, { t: "luce", c: 2 }, { t: "malvagità", c: 3 }, { t: "buio", c: 3 }],
      explanation: "p. 51: le coppie oppositive." },
    { q: "Il valore simbolico dello spazio aggiunge al significato di base (denotativo) altri livelli di senso, detti…", options: ["connotativi", "mimetici", "narrativi", "cronologici"], answer: 0,
      explanation: "p. 50." },
    { q: "Il ritratto diretto è…", options: ["una sequenza descrittiva con i tratti fondamentali del personaggio", "un insieme di indizi sparsi nella storia", "un dialogo tra due personaggi", "un riassunto della storia"], answer: 0,
      explanation: "p. 58: rallenta il ritmo con una pausa." },
    { q: "Il ritratto diretto fatto dalla voce narrante esterna ha una visione…", options: ["oggettiva, «dall'alto»", "soggettiva e coinvolta", "dal basso", "confusa"], answer: 0,
      explanation: "p. 58: quello fatto da un personaggio è invece soggettivo e coinvolto." },
    { q: "Nel ritratto indiretto il personaggio…", options: ["si conosce a poco a poco dai suoi comportamenti", "è descritto tutto all'inizio", "non parla mai", "è sempre il narratore"], answer: 0,
      explanation: "p. 58: chi legge deve ricomporre gli indizi." },
    { q: "Qual è un rischio del ritratto indiretto?", options: ["Che qualche aspetto non venga colto", "Che rallenti troppo il ritmo", "Che annoi chi legge", "Che riveli il finale"], answer: 0,
      explanation: "p. 58: in compenso non rallenta il ritmo e stimola la fantasia." },
    T("Ritratto indiretto per tratti… (completa: mette a confronto due personaggi)", ["distintivi"], "p. 59: compare spesso nelle sequenze dialogiche."),
    { q: "Nel ritratto indiretto attraverso lo spazio, dagli ambienti di un personaggio si capiscono…", options: ["personalità, ideologia ed estrazione sociale", "solo l'età", "solo il nome", "il finale della storia"], answer: 0,
      explanation: "p. 60: è il caso della casa di Cartonzi." },
    { q: "Frase nostra: «Luca entrò, spinse via la sedia senza salutare e si mise a ridere da solo.» Che ritratto è?", options: ["indiretto", "diretto"], answer: 0,
      explanation: "Non c'è una descrizione: il carattere si capisce dai comportamenti." },
    { q: "Frase nostra: «Era alta e magra, con gli occhi neri e un sorriso timido.» Che ritratto è?", options: ["diretto", "indiretto"], answer: 0,
      explanation: "È una descrizione: la storia si ferma per presentare il personaggio." }
  ]);

  // ── 4. Patto narrativo, voce narrante, focalizzazione (pp. 74-82) ─
  bank("ant-voce", "Voce narrante e focalizzazione", "Patto narrativo, voce esterna e interna, gradi, focalizzazione", "🎙️", [
    { q: "Che cos'è il patto narrativo?", options: ["Un accordo tacito tra chi scrive e chi legge", "Un contratto con l'editore", "La prima frase del libro", "Il riassunto del romanzo"], answer: 0,
      explanation: "p. 74: chi legge si abbandona alla storia e accetta che sia vera." },
    T("Sospensione dell'… (completa: è il meccanismo del patto narrativo)", ["incredulità", "incredulita"], "p. 74."),
    { q: "Se chi scrive disattende le aspettative di chi legge, ottiene…", options: ["straniamento e sorpresa", "noia", "un finale chiuso", "una pausa"], answer: 0,
      explanation: "p. 75: succede spesso nel genere fantastico." },
    { q: "La voce narrante è…", options: ["un mediatore tra la storia e chi legge", "sempre l'autore in persona", "sempre il protagonista", "il titolo del racconto"], answer: 0,
      explanation: "p. 75." },
    { q: "Una voce narrante esterna che commenta e giudica è…", options: ["palese", "nascosta", "interna", "testimone"], answer: 0,
      explanation: "p. 75: quella nascosta registra i fatti senza commentarli." },
    { q: "La voce narrante esterna narra in…", options: ["terza persona", "prima persona", "seconda persona", "nessuna persona"], answer: 0,
      explanation: "p. 75: non fa parte della storia." },
    { q: "Se chi racconta è un personaggio che assiste ai fatti si parla di io narrante…", options: ["testimone", "protagonista", "onnisciente", "palese"], answer: 0,
      explanation: "p. 76." },
    { q: "Frase nostra: «Quel giorno io ero il più piccolo della squadra, e nessuno mi passava la palla.» La voce narrante è…", options: ["interna, io narrante protagonista", "esterna nascosta", "esterna palese", "interna, io narrante testimone"], answer: 0,
      explanation: "Racconta in prima persona la propria storia." },
    { q: "Geppetto che, dentro il pescecane, racconta le sue avventure a Pinocchio è un narratore di…", options: ["secondo grado", "primo grado", "terzo grado", "grado zero"], answer: 0,
      explanation: "p. 77: è un personaggio della storia che diventa voce narrante." },
    T("Come si chiama una narrazione che non c'entra nulla con le vicende presentate fino a quel momento?", ["digressione"], "p. 77."),
    { q: "Nella focalizzazione zero la voce narrante…", options: ["sa tutto di tutti i personaggi", "sa quanto un personaggio", "sa meno dei personaggi", "non sa niente"], answer: 0,
      explanation: "p. 80: è onnisciente, tipica del romanzo dell'Ottocento." },
    { q: "Nella focalizzazione interna chi narra…", options: ["sa quanto il personaggio di cui adotta il punto di vista", "sa tutto di tutti", "registra solo ciò che si vede e si sente", "conosce il futuro"], answer: 0,
      explanation: "p. 81: non conosce il futuro né i pensieri degli altri." },
    { q: "Nella focalizzazione esterna chi narra…", options: ["sa meno dei personaggi e registra solo ciò che si percepisce con i sensi", "sa tutto di tutti", "conosce i pensieri del protagonista", "commenta sempre"], answer: 0,
      explanation: "p. 82." },
    { type: "classify", q: "Che focalizzazione è? (frasi nostre)", categories: ["zero", "interna", "esterna"],
      items: [{ t: "Anna non lo sapeva, ma quel treno le avrebbe cambiato la vita.", c: 0 }, { t: "Nessuno in paese poteva immaginarlo, ma quella sera sarebbe tornato.", c: 0 },
              { t: "Pietro sentiva il cuore battere: e se lo avessero scoperto?", c: 1 }, { t: "Anna guardava la stazione e si sentiva sola.", c: 1 },
              { t: "L'uomo entrò, posò il cappello e rimase in silenzio.", c: 2 }, { t: "Si sentì un colpo alla porta. Poi più niente.", c: 2 }],
      explanation: "Zero: conosce il futuro o i pensieri di più personaggi. Interna: i pensieri di uno solo. Esterna: solo ciò che si vede e si sente." },
    { q: "Una focalizzazione interna con più punti di vista contemporaneamente è…", options: ["multipla", "fissa", "variabile", "zero"], answer: 0,
      explanation: "p. 82: variabile = il punto di vista cambia nel tempo; fissa = resta lo stesso." }
  ]);

  // ── 5. Pensieri e parole (pp. 90-93) ───────────────────────────
  bank("ant-parole", "Pensieri e parole dei personaggi", "Discorso diretto, indiretto, raccontato, monologo, flusso di coscienza", "💬", [
    { q: "Nel discorso diretto chi narra…", options: ["riporta letteralmente le parole, tra virgolette o trattini", "riassume le parole", "usa una proposizione subordinata", "non riporta le parole"], answer: 0,
      explanation: "p. 90." },
    { q: "Il discorso diretto legato è introdotto da…", options: ["verbi dichiarativi (dire, pensare, chiedere…)", "la congiunzione «perché»", "un punto e a capo", "un aggettivo"], answer: 0,
      explanation: "p. 90: quello libero non ha verbi dichiarativi." },
    T("Come si chiama il discorso tra virgolette che il personaggio rivolge a sé stesso o a una persona non presente?", ["soliloquio"], "p. 90."),
    { q: "Il discorso indiretto riporta le parole…", options: ["con una proposizione subordinata, senza virgolette", "tra virgolette", "senza verbi", "in forma di elenco"], answer: 0,
      explanation: "p. 91." },
    { q: "Quale congiunzione è tipica del discorso indiretto?", options: ["che", "ma", "e", "o"], answer: 0,
      explanation: "p. 91: introduce una subordinata oggettiva." },
    { q: "Nel discorso indiretto libero…", options: ["non ci sono verbi dichiarativi né virgolette e si usa di solito la terza persona", "ci sono sempre le virgolette", "c'è sempre il verbo «dire»", "parla solo la voce narrante"], answer: 0,
      explanation: "p. 91: le parole del personaggio si confondono con la voce narrante (Verga, «Rosso Malpelo»)." },
    { type: "classify", q: "Che tipo di discorso è? (frasi nostre)", categories: ["diretto", "indiretto", "raccontato"],
      items: [{ t: "Disse: «Domani parto».", c: 0 }, { t: "«Hai fame?» chiese la mamma.", c: 0 },
              { t: "Disse che il giorno dopo sarebbe partito.", c: 1 }, { t: "La mamma gli chiese se avesse fame.", c: 1 },
              { t: "Gli raccontò tutto il suo viaggio.", c: 2 }, { t: "Parlarono a lungo della scuola.", c: 2 }],
      explanation: "Diretto: le parole esatte. Indiretto: una subordinata («che», «se»). Raccontato: chi narra riassume." },
    { q: "Nel discorso raccontato chi narra…", options: ["riassume parole e pensieri e ne dà il concetto di base", "riporta le parole esatte", "entra nella testa del personaggio", "toglie la punteggiatura"], answer: 0,
      explanation: "p. 92: il verbo tipico è «raccontare»." },
    { q: "Il monologo interiore e il flusso di coscienza sono tecniche tipiche…", options: ["della letteratura del Novecento", "delle fiabe popolari", "della tragedia greca", "dei poemi epici"], answer: 0,
      explanation: "p. 92." },
    { q: "Nel monologo interiore i pensieri…", options: ["sono senza verbi dichiarativi né virgolette, ma rispettano logica e punteggiatura", "non hanno punteggiatura", "sono tra virgolette", "sono riassunti da chi narra"], answer: 0,
      explanation: "p. 92: maestro di questa tecnica è Italo Svevo («Vino generoso»)." },
    { q: "Nel flusso di coscienza i pensieri…", options: ["sono senza punteggiatura, maiuscole e nessi causali", "rispettano tutte le regole della comunicazione", "sono riportati tra trattini", "sono riassunti"], answer: 0,
      explanation: "p. 93: si va per libera associazione di idee." },
    T("Chi è il maestro del flusso di coscienza? (cognome)", ["Joyce"], "p. 93: James Joyce, «Ulisse»."),
    T("E il maestro del monologo interiore? (cognome)", ["Svevo"], "p. 92: Italo Svevo, «Vino generoso».")
  ]);

  // ── 6. Gli stili narrativi (pp. 100-104) ───────────────────────
  bank("ant-stili", "Gli stili narrativi", "Registro, lessico, paratassi e ipotassi, figure retoriche", "✒️", [
    { q: "Le scelte stilistiche riguardano…", options: ["lessico, sintassi e artifici retorici", "solo la trama", "solo i personaggi", "il numero di pagine"], answer: 0,
      explanation: "p. 100." },
    { q: "Il registro è…", options: ["il tono generale del testo", "l'elenco dei personaggi", "il riassunto", "la durata della storia"], answer: 0,
      explanation: "p. 100: basso, medio o elevato." },
    { q: "Il registro basso è…", options: ["quotidiano, colloquiale", "lontano dall'uso quotidiano", "tecnico", "poetico"], answer: 0,
      explanation: "p. 100." },
    { q: "Oggi come si sceglie il registro?", options: ["In base al messaggio e alle sensazioni che si vogliono suscitare", "Solo in base all'argomento", "A caso", "Lo decide l'editore"], answer: 0,
      explanation: "p. 101: in passato era legato al contenuto." },
    { type: "classify", q: "Che lessico è? (frasi nostre)", categories: ["colloquiale", "tecnico", "colto"],
      items: [{ t: "«Dai, che ci stai a fare lì impalato?»", c: 0 }, { t: "«Boh, non mi va.»", c: 0 },
              { t: "«La pressione arteriosa è nella norma.»", c: 1 }, { t: "«Il motore ha bisogno di un nuovo carburatore.»", c: 1 },
              { t: "«Un'ineffabile malinconia lo pervase.»", c: 2 }, { t: "«Rimirava l'orizzonte con animo mesto.»", c: 2 }],
      explanation: "p. 101: colloquiale = uso quotidiano; tecnico = delle professioni; colto = parole poco comuni." },
    { q: "Il lessico dialettale, colloquiale e gergale in una narrazione è di solito indice di…", options: ["realismo", "fantasia", "poesia", "registro elevato"], answer: 0,
      explanation: "p. 101." },
    { q: "La paratassi è fatta di…", options: ["frasi indipendenti e coordinate, periodi brevi", "frasi subordinate, periodi lunghi", "solo dialoghi", "figure retoriche"], answer: 0,
      explanation: "p. 103: dà rapidità, immediatezza e spontaneità." },
    T("Come si chiama la costruzione con frasi subordinate e periodi lunghi?", ["ipotassi"], "p. 104: dà riflessività e rallenta il ritmo."),
    { q: "Frase nostra: «Entrò. Si sedette. Guardò fuori. Pioveva.» È…", options: ["paratassi", "ipotassi"], answer: 0,
      explanation: "Frasi brevi e indipendenti." },
    { q: "«Ho dormito come un bambino» è…", options: ["una similitudine", "una metafora", "un'antitesi", "un chiasmo"], answer: 0,
      explanation: "p. 104: c'è «come»." },
    { q: "«Il collo della bottiglia» è…", options: ["una metafora", "una similitudine", "un'antitesi", "un parallelismo"], answer: 0,
      explanation: "p. 104: è una similitudine abbreviata, senza «come»." },
    { q: "«Buoni si nasce, cattivi si diventa» contiene…", options: ["antitesi", "similitudini", "un chiasmo", "una metafora"], answer: 0,
      explanation: "p. 104: buoni/cattivi e nascere/diventare sono concetti opposti." },
    { q: "«Chi vive sperando, ridendo muore» è…", options: ["un chiasmo", "un parallelismo", "una similitudine", "un'antitesi"], answer: 0,
      explanation: "p. 104: disposizione a incrocio. «Chi vive sperando muore ridendo» è invece un parallelismo." },
    { q: "Il linguaggio connotativo è…", options: ["un linguaggio «poetico», con significati ulteriori", "un linguaggio che descrive la realtà per quella che è", "il dialetto", "il linguaggio tecnico"], answer: 0,
      explanation: "p. 100: quello denotativo descrive la realtà per quella che è." }
  ]);

  // ── Verifica mista: ogni volta domande nuove da tutti gli argomenti ─
  window.ANT_IDS = ["ant-modello", "ant-sequenze", "ant-spazio-personaggi", "ant-voce", "ant-parole", "ant-stili"];
  const pick = (arr, n) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, n); };
  const mix = { id: "ant-verifica", subject: "italiano", title: "Interrogazione di antologia: prova mista", description: "Ogni volta domande nuove da tutti gli argomenti", icon: "🏁", version: 1, timePerQuestion: 45 };
  Object.defineProperty(mix, "questions", { enumerable: true, get() {
    return window.ANT_IDS.flatMap(id => pick(window.QUIZ_BANK[id].questions, 3));   // 3 domande per argomento = 18
  } });
  window.QUIZ_BANK["ant-verifica"] = mix;
})();
