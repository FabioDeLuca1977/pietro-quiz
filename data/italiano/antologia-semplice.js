// ============================================================
//  data/italiano/antologia-semplice.js  (v1)
//  Antologia: ripasso a slide «spiegato semplice», tutti i 10 argomenti.
//  Stesse idee del libro (pagine indicate), con parole più semplici.
//  Le frasi d'esempio in corsivo senza «esempio del libro» sono nostre.
// ============================================================

window.LESSONS = window.LESSONS || {};

(function () {
  const R = rows => `<div class="ls-calc">${rows.map(([a, b]) =>
    `<div><span style="color:#fff;font-size:.95rem;font-weight:700">${a}</span><b style="white-space:normal;text-align:right;font-size:.9rem;color:#ffd23f">${b}</b></div>`).join('')}</div>`;
  const BOX = items => `<div class="ls-rule ls-rule-col">${items.map(i => `<div>${i}</div>`).join('')}</div>`;
  const ES = t => `<p class="ls-note"><i>${t}</i> (esempio nostro)</p>`;

  window.LESSONS["ant-semplice"] = {
    title: "Antologia spiegata semplice",
    slides: [
      { k: "Antologia", t: "Il racconto, spiegato semplice",
        h: `<p class="ls-big">Tutti i 10 argomenti dell'interrogazione, con parole semplici.</p>
            <p>Le idee sono quelle del libro; la pagina è in alto.</p>
            <p class="ls-hint">Scorri verso l'alto ↑</p>` },

      // 1 modello
      { k: "1 · Modello narrativo (pp. 4-8)", t: "Tutte le storie si somigliano",
        h: `<p class="ls-big">Tutte le storie sono costruite allo stesso modo: hanno una <b>struttura comune</b> che si ripete sempre uguale.</p>
            <p>Si chiama <b>modello narrativo</b>.</p>
            ${R([["Aristotele", "l'ha notato nella tragedia"], ["Propp", "nelle fiabe: 31 funzioni"], ["Narratologia", "la materia che studia come sono fatti i racconti"]])}
            <p class="ls-note">Funzioni di Propp: azioni che tornano nelle fiabe, per esempio l'allontanamento o le nozze.</p>` },
      { k: "1 · Modello narrativo (pp. 4-8)", t: "Le 5 tappe",
        h: `<ol class="ls-steps">
              <li><b>Situazione iniziale</b>: tutto è in equilibrio; ci dice dove e quando siamo</li>
              <li><b>Esordio</b>: succede qualcosa che rompe l'equilibrio</li>
              <li><b>Peripezie</b>: le prove; le cose migliorano o peggiorano</li>
              <li><b>Spannung</b> («tensione»): il momento più teso, l'ostacolo definitivo</li>
              <li><b>Scioglimento</b>: un nuovo equilibrio, non per forza migliore</li></ol>` },
      { k: "1 · Modello narrativo (pp. 4-8)", t: "Come può finire",
        h: `${R([["lieto", "finisce bene"], ["tragico", "finisce male"], ["chiuso", "tutto è risolto"], ["aperto", "qualcosa resta in sospeso"], ["a sorpresa", "succede una cosa che nessuno si aspettava"]])}
            <p class="ls-note">Esempio del libro: Benni, «La chitarra magica». Peter è il protagonista, il mago Lucifumandro l'aiutante, la chitarra fatata l'oggetto magico, Black Martin l'antagonista.</p>` },

      // 2 fabula
      { k: "2 · Fabula e intreccio (p. 9)", t: "Due ordini",
        h: `${BOX(["<b>Fabula</b>: i fatti in ordine di tempo, come sono successi.", "<b>Intreccio</b>: i fatti nell'ordine che sceglie chi racconta."])}
            ${R([["Fiabe", "di solito coincidono (sono uguali)"], ["Gialli", "di solito no: prima il delitto, poi si scopre cosa era successo"]])}` },

      // 3 durata
      { k: "3 · La durata (p. 37)", t: "Tempo della storia e tempo del racconto",
        h: `${R([["TS", "quanto durano davvero i fatti"], ["TR", "quanto tempo serve per raccontarli"]])}
            ${R([["Scena  TS = TR", "come a teatro"], ["Analisi  TS < TR", "rallenta"], ["Sommario  TS > TR", "riassume, accelera"], ["Pausa  TS = 0", "la storia si ferma"], ["Ellissi  TR = 0", "un salto: un pezzo non raccontato"]])}
            ${ES("«Passarono tre anni.» → sommario")}` },

      // 4 sequenze
      { k: "4 · Le sequenze (pp. 22-27)", t: "I pezzi del testo",
        h: `<p class="ls-big">Una <b>sequenza</b> è un pezzo di testo completo, che parla di una cosa sola.</p>
            <p>Piccole = <b>micro</b>; grandi blocchi = <b>macro</b>.</p>
            <div class="ls-why"><b>Marcatori</b>: capisci che inizia una nuova sequenza quando cambia il tempo, il luogo, l'argomento, il tipo di sequenza o il tempo dei verbi (da imperfetto a passato remoto), o arrivano nuovi personaggi.</div>` },
      { k: "4 · Le sequenze (pp. 22-27)", t: "I 5 tipi",
        h: `${R([["Narrativa", "succedono fatti → veloce"], ["Dialogica", "i personaggi parlano → veloce"], ["Descrittiva", "luoghi, persone, oggetti → lenta"], ["Espressiva", "emozioni → lenta"], ["Riflessiva", "pensieri, ragionamenti → lenta"]])}
            <p class="ls-note">Le sequenze «pure» sono rare: si dice il tipo che prevale, oppure «sequenza mista».</p>
            ${ES("«Aprì la porta e corse fuori.» → narrativa")}` },

      // 5 spazio
      { k: "5 · Lo spazio (pp. 50-51)", t: "A che cosa serve il luogo",
        h: `${R([["Sfondo", "aiuta a orientarsi e immaginare (funzione mimetica)"], ["Ambiente protagonista", "nei romanzi realistici moderni"], ["Atmosfera", "fa provare emozioni"], ["Valore simbolico", "vuol dire anche altro (connotativo)"], ["Specchio del personaggio", "ci fa capire com'è il personaggio"]])}` },
      { k: "5 · Lo spazio (pp. 50-51)", t: "Le coppie di opposti",
        h: `${R([["Aperto", "libertà (ma anche paura dell'ignoto)"], ["Chiuso", "protezione (ma anche prigione, solitudine)"], ["Alto", "spirito, purezza, luce"], ["Basso", "materia, cattiveria, buio"]])}` },

      // 6 personaggi
      { k: "6 · I personaggi (pp. 58-60)", t: "Come li conosciamo",
        h: `${R([["Ritratto diretto", "qualcuno ce lo descrive (la storia si ferma)"], ["Ritratto indiretto", "lo capiamo da come si comporta"], ["Per tratti distintivi", "confrontandolo con un altro"], ["Attraverso lo spazio", "dai luoghi dove vive"]])}
            <div class="ls-why">Il ritratto diretto lo fa la voce esterna (in modo oggettivo) o un personaggio (in modo soggettivo, con la sua opinione).</div>
            <p class="ls-note">Esempi del libro, «Una barca nel bosco»: zia Elsa (diretto), Caritone (indiretto), Giumatti (tratti distintivi), Cartonzi (spazio).</p>` },

      // 7 patto e voce
      { k: "7 · Patto narrativo (pp. 74-77)", t: "Ci fidiamo della storia",
        h: `<p class="ls-big">Il <b>patto narrativo</b> è un accordo non detto tra chi scrive e chi legge.</p>
            <p>Chi legge accetta di credere alla storia anche se è inventata: è la <b>sospensione dell'incredulità</b>.</p>
            <div class="ls-why">Se la storia non va come ci si aspetta, chi legge resta spiazzato e sorpreso: è lo <b>straniamento</b>.</div>` },
      { k: "7 · Voce narrante (pp. 74-77)", t: "Chi racconta",
        h: `${R([["Esterna nascosta", "fuori dalla storia, 3ª persona, non commenta"], ["Esterna palese", "fuori dalla storia, commenta e giudica"], ["Interna protagonista", "dice «io», racconta la sua storia"], ["Interna testimone", "dice «io», ha visto i fatti"], ["Di secondo grado", "un personaggio che racconta a sua volta (Geppetto)"]])}` },

      // 8 focalizzazione
      { k: "8 · Focalizzazione (pp. 80-82)", t: "Quanto sa chi racconta",
        h: `${R([["Zero", "sa tutto di tutti (onnisciente); tipica dell'Ottocento"], ["Interna", "sa quanto un personaggio, vede con i suoi occhi"], ["Esterna", "sa meno: solo quello che si vede e si sente"]])}
            <p class="ls-note">Interna fissa (sempre lo stesso personaggio), variabile (cambia), multipla (più punti di vista insieme). Bisogna dire di quale personaggio.</p>` },

      // 9 parole e pensieri
      { k: "9 · Parole e pensieri (pp. 90-93)", t: "Come parlano i personaggi",
        h: `${R([["Diretto", "le parole esatte, tra virgolette"], ["Indiretto", "riferite con «che»"], ["Raccontato", "chi narra riassume"]])}
            ${ES("Disse: «Arrivo!» → diretto · Disse che arrivava → indiretto · Parlarono a lungo → raccontato")}
            <div class="ls-why"><b>Legato</b> = c'è un verbo come «disse», «pensò». <b>Libero</b> = non c'è.</div>` },
      { k: "9 · Parole e pensieri (pp. 90-93)", t: "Dentro la testa",
        h: `${BOX(["<b>Monologo interiore</b>: pensieri senza virgolette e senza «pensò», ma ordinati, con collegamenti logici e punteggiatura (Svevo).", "<b>Flusso di coscienza</b>: pensieri in libertà, senza punteggiatura, maiuscole e collegamenti logici (Joyce, «Ulisse»)."])}
            <p class="ls-note"><b>Soliloquio</b>: discorso tra virgolette rivolto a sé stesso o a qualcuno che non c'è.</p>` },

      // 10 stile
      { k: "10 · Lo stile (pp. 100-104)", t: "Come è scritta la storia",
        h: `<p>Forma (come si scrive) e contenuto (che cosa si dice) vanno insieme.</p>
            ${R([["Registro", "basso, medio, elevato"], ["Lessico realistico", "dialettale, colloquiale, gergale"], ["Paratassi", "frasi brevi → veloce, spontaneo"], ["Ipotassi", "frasi lunghe con subordinate → lento, riflessivo"]])}` },
      { k: "10 · Lo stile (pp. 100-104)", t: "Le figure retoriche",
        h: `${R([["Similitudine", "paragone con «come»"], ["Metafora", "paragone senza «come»"], ["Antitesi", "due idee opposte vicine"], ["Parallelismo", "Chi vive sperando muore ridendo"], ["Chiasmo", "Chi vive sperando, ridendo muore"]])}
            ${ES("«Forte come un leone» → similitudine · «È un leone» → metafora")}` },

      { k: "Fine", t: "Ora prova tu",
        h: `<p class="ls-big">Fai la «Prova mista»: ogni volta domande nuove su tutti gli argomenti.</p>
            <p class="ls-note">Se sbagli, ripassa la lezione di quell'argomento.</p>` }
    ]
  };
})();
