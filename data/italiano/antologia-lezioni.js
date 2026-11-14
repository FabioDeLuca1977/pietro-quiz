// ============================================================
//  data/italiano/antologia-lezioni.js  (v1)
//  Antologia, Parte 1 «Strumenti di analisi del testo narrativo»:
//  ripasso a slide per l'interrogazione del 18 novembre (prof Remoli).
//  Definizioni dal libro (pp. 4-9, 22-27, 37, 50-51, 58-60, 74-77,
//  80-82, 90-93, 100-104); gli esempi citati sono quelli del libro.
// ============================================================

window.LESSONS = window.LESSONS || {};

(function () {
  // righe a due colonne: a sinistra il termine, a destra la spiegazione
  const R = rows => `<div class="ls-calc">${rows.map(([a, b]) =>
    `<div><span style="color:#fff;font-size:.95rem;font-weight:700">${a}</span><b style="white-space:normal;text-align:right;font-size:.9rem;color:#ffd23f">${b}</b></div>`).join('')}</div>`;
  const BOX = items => `<div class="ls-rule ls-rule-col">${items.map(i => `<div>${i}</div>`).join('')}</div>`;
  const END = (test, pag) => ({ k: "Fine", t: "Ora prova tu",
    h: `<p class="ls-big">Fai il test «${test}».</p><p class="ls-note">Libro di antologia, ${pag}.</p>` });

  // ── 1. Modello narrativo, fabula e intreccio ───────────────────
  window.LESSONS["ant-modello"] = {
    title: "Il modello narrativo",
    slides: [
      { k: "Antologia", t: "Il modello narrativo",
        h: `<p class="ls-big">Ogni storia è diversa, ma ha una <b>struttura comune</b> a tutte le narrazioni, <b>che si ripete sempre uguale</b>.</p>
            <p>Questo ripetersi si chiama <b>modello narrativo</b>.</p>
            <p class="ls-hint">Scorri verso l'alto ↑</p>` },
      { k: "Modello", t: "Che cosa bisogna guardare",
        h: `<ol class="ls-steps"><li>come si succedono gli <b>eventi</b> e l'<b>ordine</b> in cui sono raccontati</li><li>il <b>ruolo dei personaggi</b></li><li>come sono descritti <b>tempo e spazio</b></li><li>il <b>punto di vista</b> di chi racconta</li><li>lo <b>stile</b></li></ol>` },
      { k: "Chi l'ha studiato", t: "Aristotele e Propp",
        h: `${R([["Aristotele", "studiò la tragedia: passaggi narrativi costanti"], ["Vladimir Propp", "studiò la fiaba popolare: 31 funzioni"], ["Morfologia della fiaba", "saggio di Propp (1928)"]])}
            <div class="ls-why">I passaggi di Aristotele non riguardano i contenuti ma l'<b>organizzazione</b>: il modo in cui i contenuti vengono narrati.</div>
            <p class="ls-note">Funzioni di Propp: per esempio allontanamento, investigazione, nozze, punizione.</p>` },
      { k: "Chi l'ha studiato", t: "La narratologia",
        h: `<p class="ls-big">Disciplina teorica che analizza le <b>forme</b> e le <b>strutture</b> della narrazione.</p>
            <p>Dà gli strumenti per <b>smontare un testo</b> e capire i suoi <b>meccanismi di funzionamento</b>.</p>` },
      { k: "I 5 momenti", t: "In ordine",
        h: `<ol class="ls-steps"><li><b>Situazione iniziale</b>: equilibrio statico</li><li><b>Esordio</b>: rottura dell'equilibrio</li><li><b>Peripezie</b>: le prove</li><li><b>Spannung</b>: massima tensione</li><li><b>Scioglimento</b>: nuovo equilibrio</li></ol>
            <p class="ls-note">Esempio del libro: S. Benni, «La chitarra magica».</p>` },
      { k: "1 · Situazione iniziale", t: "L'equilibrio statico",
        h: `<p>Descrive il <b>contesto</b> e l'<b>equilibrio statico</b> che viene prima della storia.</p>
            <p>Serve a <b>orientare chi legge nel tempo e nello spazio</b>.</p>
            ${R([["Antefatto", "a volte prima della situazione iniziale"], ["Incipit", "le prime righe del racconto"], ["Incipit classico o descrittivo", "contiene la situazione iniziale"]])}` },
      { k: "2 · Esordio", t: "La rottura dell'equilibrio",
        h: `<p class="ls-big">Qui comincia davvero la storia: se l'equilibrio non si rompesse, non ci sarebbe nulla da raccontare.</p>
            <div class="ls-why">Nella «Chitarra magica»: «Un giorno» arriva un vecchio, che si trasforma nel mago Lucifumandro (<b>aiutante</b>). Il mago regala a Peter una chitarra fatata (<b>oggetto magico</b>).</div>` },
      { k: "3 · Peripezie", t: "Il corpo della storia",
        h: `<p>Sono le <b>prove</b> che i personaggi devono affrontare.</p>
            ${BOX(["Il numero è <b>variabile</b>", "Possono <b>migliorare o peggiorare</b> la situazione", "Nessuna è un <b>punto di non ritorno</b>"])}
            <p class="ls-note">Nella storia di Benni l'antagonista è Black Martin.</p>` },
      { k: "4 · Spannung", t: "La tensione",
        h: `<div class="ls-res">Spannung = «tensione» (in tedesco)</div>
            <p>È il <b>momento cruciale</b>: il protagonista è alle prese con l'<b>ostacolo definitivo</b>.</p>
            <p>Di solito si trova <b>verso la fine</b> della storia.</p>` },
      { k: "5 · Scioglimento", t: "Il nuovo equilibrio",
        h: `<p>Si crea un <b>nuovo equilibrio</b>, diverso ma <b>non per forza migliore</b>.</p>
            ${R([["lieto / tragico", "come va a finire"], ["chiuso", "tutte le questioni sono risolte"], ["aperto", "non tutto è chiuso; può iniziare un'altra storia"], ["a sorpresa", "una situazione del tutto inaspettata"]])}
            <p class="ls-note">Dopo il finale ci possono essere una spiegazione, una morale (per esempio nella favola) o che cosa accadrà al protagonista.</p>` },
      { k: "Fabula e intreccio", t: "Due ordini diversi",
        h: `${BOX(["<b>Fabula</b>: gli eventi nel loro <b>ordine naturale</b> (cronologico). Non si può modificare.", "<b>Intreccio</b>: i fatti nell'<b>ordine in cui chi narra decide di raccontarli</b>."])}` },
      { k: "Fabula e intreccio", t: "Coincidono o no?",
        h: `${R([["Coincidono", "fiabe: devono essere semplici e chiare"], ["Non coincidono", "gialli: prima il delitto, poi i fatti precedenti"]])}
            <div class="ls-why">Quando non coincidono, l'autore cambia l'ordine per ottenere effetti particolari, per esempio tenere vivo l'interesse di chi legge.</div>` },
      END("Il modello narrativo", "pp. 4-9")
    ]
  };

  // ── 2. Sequenze e durata ────────────────────────────────────────
  window.LESSONS["ant-sequenze"] = {
    title: "Le sequenze e la durata",
    slides: [
      { k: "Antologia", t: "Le sequenze",
        h: `<p class="ls-big">Una <b>sequenza</b> è un segmento di testo compiuto, con un <b>contenuto coerente</b> e <b>distinguibile</b> da quelli prima e dopo.</p>
            <p class="ls-hint">Scorri verso l'alto ↑</p>` },
      { k: "Sequenze", t: "Micro e macro",
        h: `${R([["Microsequenze", "si divide il testo più nel dettaglio"], ["Macrosequenze", "nuclei fondamentali, detti anche blocchi narrativi"]])}
            <div class="ls-why">La divisione più naturale è quella in macrosequenze che corrispondono ai <b>momenti del modello narrativo</b>. Conviene dare a ogni sequenza un <b>breve titolo</b>.</div>` },
      { k: "Sequenze", t: "I marcatori",
        h: `<p>Segnalano il passaggio da una sequenza all'altra:</p>
            <ol class="ls-steps"><li>cambio di <b>tempo</b> («Due giorni dopo»)</li><li>cambio di <b>luogo</b></li><li>entrano <b>nuovi personaggi</b></li><li>cambio di <b>argomento</b></li><li>cambio di <b>tipologia</b> (da descrizione ad azione)</li><li>cambio di <b>tempo verbale</b></li></ol>` },
      { k: "Sequenze", t: "Il tempo verbale",
        h: `${R([["imperfetto", "valore descrittivo"], ["passato remoto o presente", "valore narrativo"]])}
            <p class="ls-note">Esempio del libro: A. Fogazzaro, «L'orologio di Lisa».</p>` },
      { k: "Tipologie", t: "Cinque tipi di sequenza",
        h: `${R([["narrativa", "fa procedere la storia"], ["descrittiva", "descrive ambienti, personaggi, oggetti"], ["espressiva", "esprime stati d'animo e sentimenti"], ["riflessiva", "riflessioni e pensieri"], ["dialogica", "dialoghi tra i personaggi"]])}` },
      { k: "Tipologie", t: "Come si riconoscono",
        h: `${BOX(["<b>Narrativa</b>: personaggi che agiscono; è facile da riassumere", "<b>Descrittiva</b>: la storia è «in pausa»; il verbo tipico è l'imperfetto", "<b>Espressiva e riflessiva</b>: fanno capire il carattere e il punto di vista dei personaggi", "<b>Dialogica</b>: di solito c'è il discorso diretto"])}
            <div class="ls-warn">Le sequenze «pure» sono rare: si indica la <b>tipologia prevalente</b> oppure si parla di <b>sequenza mista</b>.</div>` },
      { k: "Ritmo", t: "Veloce o lento",
        h: `${R([["narrative e dialogiche", "tengono alto il ritmo"], ["descrittive, riflessive, espressive", "rallentano il ritmo"]])}
            <p>Rallentando si crea <i>suspense</i> oppure un momento di distensione.</p>` },
      { k: "Durata · p. 37", t: "Tempo della storia e del racconto",
        h: `${R([["Tempo della storia (TS)", "quanto durano davvero i fatti"], ["Tempo del racconto (TR)", "il tempo in cui i fatti vengono narrati"]])}
            <div class="ls-why">Cambiando il rapporto tra TS e TR si cambia il <b>ritmo</b> e si sposta l'attenzione di chi legge su un fatto piuttosto che su un altro.</div>` },
      { k: "Durata", t: "Le cinque tecniche",
        h: `${R([["Scena · TS = TR", "come su un palcoscenico"], ["Analisi · TS < TR", "si sofferma su particolari: rallenta"], ["Sommario · TS > TR", "fatti riassunti: accelera"], ["Pausa · TS = 0", "la vicenda si ferma: rallenta"], ["Ellissi · TR = 0", "un «buco» nella storia"]])}` },
      { k: "Durata", t: "Dove si trovano",
        h: `${R([["Scena", "sequenze dialogiche e narrative"], ["Analisi", "sequenze narrativo-riflessive"], ["Sommario", "sequenze narrative"], ["Pausa", "sequenze riflessive ed espressive"], ["Ellissi", "nessuna sequenza: di solito un punto e a capo"]])}` },
      END("Le sequenze e la durata", "pp. 22-27 e 37")
    ]
  };

  // ── 3. Spazio e personaggi ──────────────────────────────────────
  window.LESSONS["ant-spazio-personaggi"] = {
    title: "Lo spazio e i personaggi",
    slides: [
      { k: "Spazio · pp. 50-51", t: "Le funzioni della descrizione",
        h: `${BOX(["<b>Sfondo</b> (funzione <b>mimetica</b>): aiuta a orientarsi e a immaginare il contesto geografico o sociale", "<b>Ruolo significativo</b>: nei romanzi realistici moderni l'ambiente diventa <b>protagonista</b> (Dickens, «Tempi difficili»)", "Funzione di <b>atmosfera</b>: trasmette sensazioni ed emozioni dei personaggi"])}
            <p class="ls-hint">Scorri verso l'alto ↑</p>` },
      { k: "Spazio", t: "Il valore simbolico",
        h: `<p>Lo spazio aggiunge al significato di base (<b>denotativo</b>) altri livelli di senso (<b>connotativi</b>): rappresenta in modo implicito qualcos'altro.</p>
            <div class="ls-why"><b>Spazio come specchio del personaggio</b>: lo spazio completa la descrizione del personaggio (caratteristiche sociali, psicologiche, caratteriali).</div>
            <p class="ls-note">Esempio del libro: Pirandello, «Il viaggio» (Adriana).</p>` },
      { k: "Spazio", t: "Coppie oppositive",
        h: `${R([["aperto", "libertà (ma anche paura dell'ignoto, pericolo)"], ["chiuso", "famiglia, protezione (ma anche prigionia, solitudine)"], ["basso", "materialità, malvagità, buio"], ["alto", "spiritualità, divino, purezza, luce"]])}` },
      { k: "Personaggi · pp. 58-60", t: "Come si presenta un personaggio",
        h: `${BOX(["<b>Ritratto diretto</b>: con una descrizione", "<b>Ritratto indiretto o per indizi</b>: attraverso l'azione"])}
            <p class="ls-note">Esempi del libro: P. Mastrocola, «Una barca nel bosco».</p>` },
      { k: "Personaggi", t: "Ritratto diretto",
        h: `<p>È una <b>sequenza descrittiva</b> con i tratti fondamentali del personaggio. Il ritmo rallenta: è una <b>pausa</b>.</p>
            ${R([["voce narrante esterna", "visione oggettiva, «dall'alto»"], ["un personaggio", "punto di vista soggettivo e coinvolto"]])}
            <p class="ls-note">Un personaggio può anche descrivere sé stesso. Nel libro: la zia Elsa.</p>` },
      { k: "Personaggi", t: "Ritratto indiretto",
        h: `<p>Il personaggio entra nell'<b>azione</b>: lo si conosce a poco a poco dai suoi <b>comportamenti</b>. Chi legge deve ricomporre gli <b>indizi</b>.</p>
            ${R([["Pro", "non rallenta il ritmo, stimola la fantasia"], ["Contro", "qualcosa può non essere colto"]])}
            <p class="ls-note">Nel libro: Caritone.</p>` },
      { k: "Personaggi", t: "Due ritratti indiretti particolari",
        h: `${BOX(["<b>Per tratti distintivi</b>: mette a <b>confronto due personaggi</b>. Si trova spesso nelle sequenze dialogiche (Gaspare e Giumatti).", "<b>Attraverso lo spazio</b>: dagli ambienti si capiscono la personalità, l'ideologia e l'estrazione sociale (la casa di Cartonzi)."])}` },
      END("Lo spazio e i personaggi", "pp. 50-51 e 58-60")
    ]
  };

  // ── 4. Patto narrativo, voce narrante, focalizzazione ──────────
  window.LESSONS["ant-voce"] = {
    title: "Voce narrante e focalizzazione",
    slides: [
      { k: "Patto narrativo · p. 74", t: "Un accordo tacito",
        h: `<p class="ls-big">Chi scrive chiede a chi legge di <b>abbandonarsi alla storia</b> e di accettare che sia vera.</p>
            ${R([["sospensione dell'incredulità", "si leggono avventure, creature e mondi inventati senza metterne in dubbio l'esistenza"], ["atto di fiducia", "di chi legge verso l'autore"]])}
            <p class="ls-hint">Scorri verso l'alto ↑</p>` },
      { k: "Patto narrativo", t: "Le aspettative",
        h: `<p>Fin dalle prime pagine l'autore dà delle <b>coordinate</b>, che creano le <b>aspettative</b> di chi legge (l'incipit di Pinocchio: «C'era una volta…»).</p>
            <div class="ls-why">Se chi scrive <b>disattende le aspettative</b>, si ottengono <b>straniamento</b> e <b>sorpresa</b>. Succede spesso nel genere fantastico.</div>` },
      { k: "Voce narrante · p. 75", t: "Chi racconta",
        h: `<p>La <b>voce narrante</b> narra le vicende, descrive i personaggi e commenta le azioni.</p>
            <div class="ls-res">mediatore tra la storia e chi legge</div>` },
      { k: "Voce narrante", t: "Esterna",
        h: `<p>Non fa parte della storia e narra in <b>terza persona</b>.</p>
            ${R([["nascosta", "registra i fatti senza commentarli"], ["palese", "commenta e giudica"]])}
            <p class="ls-note">Esempio di voce palese, da Pinocchio: «Ve lo dirò io, miei cari e piccoli lettori…»</p>` },
      { k: "Voce narrante", t: "Interna: l'io narrante",
        h: `<p>Fa parte della storia.</p>
            ${R([["io narrante protagonista", "racconta la sua storia"], ["io narrante testimone", "un altro personaggio che assiste"]])}
            <div class="ls-why">Nei romanzi autobiografici l'io che racconta (adulto) può non coincidere con l'<b>io narrato</b> (com'era allora).</div>` },
      { k: "Voce narrante", t: "I gradi",
        h: `<p>Un personaggio della storia può diventare a sua volta voce narrante: è un <b>narratore di secondo grado</b>. Per esempio Geppetto, che nel pescecane racconta a Pinocchio le sue avventure.</p>
            ${R([["Decameron, 1° grado", "la Cornice"], ["2° grado", "i dieci giovani"], ["3° grado", "alcuni personaggi delle novelle"]])}
            <p class="ls-note"><b>Digressione</b>: una narrazione che non c'entra nulla con le vicende presentate fino a quel momento.</p>` },
      { k: "Focalizzazione · p. 80", t: "Il punto di vista",
        h: `<p>La <b>focalizzazione</b> è la prospettiva da cui la voce narrante guarda la storia, come un fotografo che sceglie da dove inquadrare.</p>
            ${R([["zero", "sa tutto"], ["interna", "sa quanto un personaggio"], ["esterna", "sa meno dei personaggi"]])}` },
      { k: "Focalizzazione", t: "Zero: voce onnisciente",
        h: `<p>Sa tutto «dall'alto»: azioni, sentimenti e pensieri passati, presenti e futuri di <b>tutti</b> i personaggi.</p>
            <div class="ls-why">Spesso è anche <b>palese</b>. È tipica del romanzo dell'<b>Ottocento</b>. Nel libro: Mangiafuoco, che starnutisce quando si commuove.</div>` },
      { k: "Focalizzazione", t: "Interna",
        h: `<p>Chi narra prende il punto di vista di <b>un personaggio</b> e sa quanto lui: le sue emozioni, il suo presente e il suo passato. Non sa il futuro né i pensieri degli altri.</p>
            ${R([["fissa", "sempre lo stesso punto di vista"], ["variabile", "cambia nel tempo"], ["multipla", "più punti di vista insieme"]])}
            <div class="ls-warn">Bisogna dire <b>di chi</b> è il punto di vista (per esempio di Pinocchio).</div>` },
      { k: "Focalizzazione", t: "Esterna",
        h: `<p>Chi narra <b>sa meno dei personaggi</b>, come chi guarda la scena da fuori: registra solo ciò che si percepisce con i <b>sensi</b>, senza conoscere sentimenti ed emozioni.</p>
            <p class="ls-note">Nel libro: Pinocchio incontra l'ombra del Grillo-parlante.</p>` },
      END("Voce narrante e focalizzazione", "pp. 74-77 e 80-82")
    ]
  };

  // ── 5. Pensieri e parole dei personaggi ─────────────────────────
  window.LESSONS["ant-parole"] = {
    title: "Pensieri e parole dei personaggi",
    slides: [
      { k: "pp. 90-93", t: "Perché conta la tecnica",
        h: `<ol class="ls-steps"><li>è legata alla <b>focalizzazione</b></li><li>influenza la <b>costruzione del personaggio</b></li><li>cambia il <b>ritmo</b> del racconto</li></ol>
            <p class="ls-hint">Scorri verso l'alto ↑</p>` },
      { k: "Diretto", t: "Discorso e pensiero diretto",
        h: `<p>Chi narra riporta <b>letteralmente</b> le parole, tra <b>virgolette</b> o con i <b>trattini</b>.</p>
            ${R([["legato", "introdotto da verbi dichiarativi"], ["libero", "senza verbi dichiarativi"]])}
            <p class="ls-note">Verbi dichiarativi: dire, pensare, esclamare, negare, chiedere.</p>
            <div class="ls-why"><b>Soliloquio</b>: un discorso tra virgolette che il personaggio rivolge a sé stesso o a una persona che non è presente.</div>` },
      { k: "Indiretto", t: "Discorso e pensiero indiretto",
        h: `<p>Le parole sono riportate senza virgolette né trattini, con una <b>proposizione subordinata</b>.</p>
            ${R([["legato", "con verbi dichiarativi e «che»"], ["libero", "senza verbi dichiarativi, in terza persona"]])}
            <div class="ls-why">Nel <b>legato</b> l'intervento della voce narrante si nota di più. Nel <b>libero</b> le parole del personaggio si confondono con quelle della voce narrante (Verga, «Rosso Malpelo»).</div>` },
      { k: "Raccontato", t: "Discorso e pensiero raccontato",
        h: `<p>Chi narra non riporta le parole, ma le <b>riassume</b> e ne dà il concetto di base.</p>
            <p class="ls-note">Il verbo tipico è «raccontare».</p>` },
      { k: "Novecento", t: "Monologo interiore",
        h: `<p>Si «entra» nella testa del personaggio. I pensieri sono in forma diretta, <b>senza verbi dichiarativi né virgolette</b>.</p>
            <div class="ls-why">I pensieri restano però regolati dalla <b>logica</b> e dalle <b>regole della comunicazione</b>: ci sono nessi causali e punteggiatura. Maestro di questa tecnica: Italo <b>Svevo</b> («Vino generoso»).</div>` },
      { k: "Novecento", t: "Flusso di coscienza",
        h: `<p>Tutto ciò che passa per la testa del personaggio è riportato <b>senza alcuna modifica</b>.</p>
            ${BOX(["niente <b>punteggiatura</b>", "niente <b>lettere maiuscole</b>", "niente <b>nessi causali</b>: si va per <b>libera associazione di idee</b>"])}
            <p class="ls-note">Maestro di questa tecnica: James <b>Joyce</b>, «Ulisse».</p>` },
      { k: "Mappa", t: "Le cinque tecniche",
        h: `${R([["diretto", "parole letterali, tra virgolette o trattini"], ["indiretto", "proposizione subordinata"], ["raccontato", "riassunto da chi narra"], ["monologo interiore", "con logica e regole della comunicazione"], ["flusso di coscienza", "senza punteggiatura e nessi causali"]])}` },
      END("Pensieri e parole dei personaggi", "pp. 90-93")
    ]
  };

  // ── 6. Gli stili narrativi ──────────────────────────────────────
  window.LESSONS["ant-stili"] = {
    title: "Gli stili narrativi",
    slides: [
      { k: "pp. 100-104", t: "Forma e contenuto",
        h: `<p>La <b>forma</b> (il «come» si scrive) non è un accessorio del <b>contenuto</b> (il «che cosa»): i due aspetti devono essere integrati.</p>
            ${R([["lessico", "la scelta delle parole"], ["sintassi", "la costruzione dei periodi"], ["artifici retorici", "linguaggio denotativo o connotativo"]])}
            <p class="ls-hint">Scorri verso l'alto ↑</p>` },
      { k: "Registro", t: "Il tono generale",
        h: `${R([["basso", "quotidiano, colloquiale"], ["medio", "comunicazione precisa dei contenuti"], ["elevato", "lontano dall'uso quotidiano"]])}
            <div class="ls-why">In passato il registro dipendeva dal contenuto. Oggi l'autore lo sceglie in base al <b>messaggio</b> e alle <b>sensazioni</b> che vuole suscitare.</div>` },
      { k: "Lessico", t: "A che cosa serve",
        h: `<ol class="ls-steps"><li>rende la storia più o meno facile da <b>capire</b></li><li>aiuta l'<b>immedesimazione</b> nei personaggi</li><li><b>caratterizza l'ambiente</b></li><li>rende il racconto <b>realistico</b> o <b>fantastico</b></li></ol>` },
      { k: "Lessico", t: "I tipi di lessico",
        h: `${R([["popolare o dialettale", "anche parole di un dialetto"], ["colloquiale", "modi di dire, proverbi, parole volgari"], ["gergale", "giovani, malavita, commercio…"], ["medio o standard", "lingua scritta d'uso comune"], ["tecnico", "linguaggio delle professioni"], ["colto", "parole poco comuni"]])}
            <div class="ls-why">Il lessico dialettale, colloquiale e gergale è di solito <b>indice di realismo</b> (Ardone, «Il treno dei bambini»).</div>` },
      { k: "Sintassi", t: "Paratassi e ipotassi",
        h: `${BOX(["<b>Paratassi</b>: frasi indipendenti e coordinate, periodi <b>brevi</b>. Danno rapidità, immediatezza e spontaneità, come nel parlato.", "<b>Ipotassi</b>: frasi subordinate, periodi <b>lunghi</b>. Danno riflessività e profondità di pensiero e <b>rallentano</b> il ritmo."])}` },
      { k: "Figure retoriche", t: "Similitudine e metafora",
        h: `${R([["similitudine", "accosta due immagini con «come»"], ["metafora", "similitudine abbreviata, senza «come»"]])}
            <p class="ls-note">Esempi del libro: «ho dormito come un bambino» (similitudine), «il collo della bottiglia» (metafora).</p>` },
      { k: "Figure retoriche", t: "Antitesi, parallelismo, chiasmo",
        h: `${R([["antitesi", "accosta concetti opposti"], ["parallelismo", "struttura parallela"], ["chiasmo", "disposizione a incrocio"]])}
            <p class="ls-note">Esempi del libro:</p>
            <ul>
              <li>antitesi: «Buoni si nasce, cattivi si diventa»;</li>
              <li>parallelismo: «Chi vive sperando muore ridendo»;</li>
              <li>chiasmo: «Chi vive sperando, ridendo muore».</li>
            </ul>` },
      END("Gli stili narrativi", "pp. 100-104")
    ]
  };
})();
