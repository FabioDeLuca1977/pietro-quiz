// ============================================================
//  data/ripasso.js  —  video della sezione Ripasso
//  topic = argomento sotto cui il video compare in elenco
//  test = il quiz proposto a fine video (facoltativo)
// ============================================================
window.REVIEW = [
  {
    "subject": "scienze",
    "icon": "🧪",
    "color": "#0891b2",
    "items": [
      { "id": "chim-v1", "topic": "Chimica · interrogazione", "title": "Ripasso lampo (video, 45 secondi)", "file": "video/scienze/chimica-ripasso-lampo.mp4", "dur": 44, "pages": "Tutto in 45 secondi", "test": "chim-verifica" },
      { "id": "chim-interr", "topic": "Chimica · interrogazione", "title": "🎤 Il tutor: studiamo insieme o interrogazione (ChatGPT con la voce)", "html": "ripasso/chimica-interrogazione.html", "pages": "Solo il tuo libro: un pezzo alla volta, oppure domande come all'orale" },
      { "id": "chim-html", "topic": "Chimica · interrogazione", "title": "Slide da scorrere (telefono e PC)", "html": "ripasso/chimica-slide.html", "pages": "14 slide grandi, una idea alla volta" },
      { "id": "chim-pdf-1", "topic": "Chimica · interrogazione", "title": "Chimica a piccoli passi + scheda esercizi (11 pagine)", "pdf": "stampa/chimica-sintesi-esercizi.pdf", "pdfPages": 11, "pages": "Blocchi brevi con domanda, poi la scheda da compilare e le soluzioni" },
      { "id": "chim-pdf-2", "topic": "Chimica · interrogazione", "title": "Da studiare: tutto il programma (12 pagine)", "pdf": "stampa/chimica-studio-completo.pdf", "pdfPages": 12, "pages": "Tutto il libro (pp. 40-63, 76-88, 99) a blocchi brevi" },
      { "id": "chim-l1", "topic": "Chimica · interrogazione", "title": "Stati fisici, sostanze pure e miscele", "lesson": "chim-materia", "pages": "pp. 40-54", "test": "chim-fisiche" },
      { "id": "chim-l2", "topic": "Chimica · interrogazione", "title": "Passaggi di stato e metodi di separazione", "lesson": "chim-separazione", "pages": "pp. 55-63", "test": "chim-fisiche" },
      { "id": "chim-l3", "topic": "Chimica · interrogazione", "title": "Elementi, composti e teoria atomica", "lesson": "chim-atomi", "pages": "pp. 76-84", "test": "chim-chimiche" },
      { "id": "chim-l4", "topic": "Chimica · interrogazione", "title": "Le leggi di Lavoisier, Proust e Dalton", "lesson": "chim-leggi", "pages": "pp. 85-88, 99", "test": "chim-problemi" }
    ]
  },
  {
    "subject": "italiano",
    "icon": "✍️",
    "color": "#d97706",
    "items": [
      { "id": "gram-html-1", "topic": "Grammatica · verbi e analisi logica", "title": "Verbi: tutti i modi e i tempi (essere, avere, mangiare)", "html": "ripasso/verbi-modi-tempi.html", "pages": "Pagina da telefono" },
      { "id": "gram-pdf-1", "topic": "Grammatica · verbi e analisi logica", "title": "Verbi da stampare (6 pagine)", "pdf": "stampa/verbi-essere-avere-mangiare.pdf", "pdfPages": 6, "pages": "Un modo per pagina" },
      { "id": "gram-pdf-3", "topic": "Grammatica · verbi e analisi logica", "title": "Verbi da stampare in orizzontale: una pagina per verbo (3 pagine)", "pdf": "stampa/verbi-una-pagina-per-verbo.pdf", "pdfPages": 3, "pages": "Essere, avere, mangiare: tutti i modi e i tempi su un foglio" },
      { "id": "gram-html-0", "topic": "Grammatica · verbi e analisi logica", "title": "⭐ Lo schema per la verifica (tutto in 2 pagine)", "html": "ripasso/verbi-schema.html", "pages": "Che cosa fare, modi e tempi, tutti gli altri argomenti, l'analisi del verbo" },
      { "id": "gram-pdf-0", "topic": "Grammatica · verbi e analisi logica", "title": "⭐ Lo schema per la verifica: da stampare (2 pagine)", "pdf": "stampa/verbi-schema-2-pagine.pdf", "pdfPages": 2, "pages": "Fronte e retro di un foglio A4" },
      { "id": "gram-pdf-5", "topic": "Grammatica · verbi e analisi logica", "title": "Verbi: tabelle e teoria insieme, da stampare (12 pagine)", "pdf": "stampa/verbi-tabelle-e-teoria.pdf", "pdfPages": 12, "pages": "Come è fatto un verbo, i modi con le tabelle, poi tutta la teoria" },
      { "id": "gram-html-3", "topic": "Grammatica · verbi e analisi logica", "title": "Verbi: le altre cose da sapere (dal libro)", "html": "ripasso/verbi-teoria.html", "pages": "Transitivi, forma, impersonali, copulativi, servili; analisi del verbo" },
      { "id": "gram-pdf-4", "topic": "Grammatica · verbi e analisi logica", "title": "Verbi, le altre cose da sapere: da stampare (6 pagine)", "pdf": "stampa/verbi-teoria-libro.pdf", "pdfPages": 6, "pages": "Una pagina per argomento, con le pagine del libro" },
      { "id": "gram-gpt-2", "topic": "Grammatica · verbi e analisi logica", "title": "🎤 Il tutor sui verbi: studiamo insieme o interrogazione (ChatGPT con la voce)", "html": "ripasso/verbi-tutor.html", "pages": "Tutto lo schema: modi e tempi, tipi di verbo, forma, verbi di servizio, analisi" },
      { "id": "gram-gpt-1", "topic": "Grammatica · verbi e analisi logica", "title": "🗣️ Verbi a voce con ChatGPT", "html": "ripasso/verbi-a-voce.html", "pages": "Ridire i tempi, riconoscerli, prova finale con il voto" },
      { "id": "gram-html-2", "topic": "Grammatica · verbi e analisi logica", "title": "I complementi e le loro domande", "html": "ripasso/complementi.html", "pages": "Pagina da telefono" },
      { "id": "gram-pdf-2", "topic": "Grammatica · verbi e analisi logica", "title": "Complementi da stampare (3 pagine)", "pdf": "stampa/complementi-analisi-logica.pdf", "pdfPages": 3, "pages": "Domanda ed esempio per ogni complemento" },
      {
        "id": "ant-pdf-3",
        "topic": "Antologia · il testo narrativo",
        "title": "Sintesi spiegata semplice (2 pagine)",
        "pdf": "stampa/antologia-semplice.pdf",
        "pdfPages": 2,
        "pages": "La sintesi con parole più semplici ed esempi"
      },
      {
        "id": "ant-pdf-4",
        "topic": "Antologia · il testo narrativo",
        "title": "Riassunto spiegato semplice (8 pagine)",
        "pdf": "stampa/antologia-riassunto-semplice.pdf",
        "pdfPages": 8,
        "pages": "Tutto il riassunto con parole più semplici"
      },
      {
        "id": "ant-pdf-2",
        "topic": "Antologia · il testo narrativo",
        "title": "Sintesi in 2 pagine",
        "pdf": "stampa/antologia-sintesi.pdf",
        "pdfPages": 2,
        "pages": "Tutto l'essenziale, schematizzato"
      },
      {
        "id": "ant-pdf-1",
        "topic": "Antologia · il testo narrativo",
        "title": "Riassunto completo (da stampare)",
        "pdf": "stampa/antologia-riassunto.pdf",
        "pdfPages": 7,
        "pages": "Tutte le pagine assegnate, con schemi e tabelle"
      },
      {
        "id": "ant-l0",
        "topic": "Antologia · il testo narrativo",
        "title": "Ripasso spiegato semplice (tutti gli argomenti)",
        "lesson": "ant-semplice",
        "pages": "pp. 4-104",
        "test": "ant-verifica"
      },
      {
        "id": "ant-l1",
        "topic": "Antologia · il testo narrativo",
        "title": "Il modello narrativo",
        "lesson": "ant-modello",
        "pages": "pp. 4-9 · 5 momenti, fabula e intreccio",
        "test": "ant-modello"
      },
      {
        "id": "ant-l2",
        "topic": "Antologia · il testo narrativo",
        "title": "Le sequenze e la durata",
        "lesson": "ant-sequenze",
        "pages": "pp. 22-27 e 37",
        "test": "ant-sequenze"
      },
      {
        "id": "ant-l3",
        "topic": "Antologia · il testo narrativo",
        "title": "Lo spazio e i personaggi",
        "lesson": "ant-spazio-personaggi",
        "pages": "pp. 50-51 e 58-60",
        "test": "ant-spazio-personaggi"
      },
      {
        "id": "ant-l4",
        "topic": "Antologia · il testo narrativo",
        "title": "Voce narrante e focalizzazione",
        "lesson": "ant-voce",
        "pages": "pp. 74-77 e 80-82",
        "test": "ant-voce"
      },
      {
        "id": "ant-l5",
        "topic": "Antologia · il testo narrativo",
        "title": "Pensieri e parole dei personaggi",
        "lesson": "ant-parole",
        "pages": "pp. 90-93",
        "test": "ant-parole"
      },
      {
        "id": "ant-l6",
        "topic": "Antologia · il testo narrativo",
        "title": "Gli stili narrativi",
        "lesson": "ant-stili",
        "pages": "pp. 100-104",
        "test": "ant-stili"
      }
    ]
  },
  {
    "subject": "storia",
    "icon": "🏛️",
    "color": "#dc2626",
    "items": [
      {
        "id": "sto-pdf-1",
        "topic": "Verifica di geostoria · Egizi, Ebrei, Fenici, demografia",
        "title": "Presentazione di ripasso (da sfogliare)",
        "pdf": "stampa/geostoria-ripasso-presentazione.pdf",
        "pdfPages": 32,
        "pages": "Libro pp. 64–77, 84–97, 110–123"
      },
      {
        "id": "sto-pdf-2",
        "topic": "Verifica di geostoria · Egizi, Ebrei, Fenici, demografia",
        "title": "Indice e mappe da stampare",
        "pdf": "stampa/geostoria-mappe-da-stampare.pdf",
        "pdfPages": 5,
        "pages": "Una mappa per argomento"
      },
      {
        "id": "sto-pdf-3",
        "topic": "Verifica di geostoria · Egizi, Ebrei, Fenici, demografia",
        "title": "Box di ripasso da ritagliare",
        "pdf": "stampa/geostoria-box-da-ritagliare.pdf",
        "pdfPages": 4,
        "pages": "32 box: concetti, date, parole"
      },
      {
        "id": "sto-pdf-4",
        "topic": "Verifica di geostoria · Egizi, Ebrei, Fenici, demografia",
        "title": "Domande aperte con la traccia (verifica scritta)",
        "pdf": "stampa/geostoria-domande-aperte-traccia.pdf",
        "pdfPages": 3,
        "pages": "17 domande, metodo e tracce"
      }
    ]
  },
  {
    "subject": "fisica",
    "icon": "🧲",
    "color": "#ea580c",
    "items": [
      { "id": "fis-interr-m1", "topic": "Cap. 2 · La misura di una grandezza", "title": "🎤 Il tutor: studiamo insieme o interrogazione (ChatGPT con la voce)", "html": "ripasso/fisica-interrogazione.html", "pages": "Solo il tuo libro: un pezzo alla volta, oppure domande come all'orale" },
      { "id": "fis-slide-m1", "topic": "Cap. 2 · La misura di una grandezza", "title": "Slide da scorrere (telefono e PC)", "html": "ripasso/fisica-slide.html", "pages": "21 slide grandi, una idea alla volta, pp. 51-57" },
      { "id": "fis-html-m1", "topic": "Cap. 2 · La misura di una grandezza", "title": "Strumenti, errori, incertezza, cifre significative (§1-4)", "html": "ripasso/fisica-misura.html", "pages": "pp. 51-57, con le domande ✋ e il ripasso a voce" },
      { "id": "fis-pdf-m1", "topic": "Cap. 2 · La misura di una grandezza", "title": "La misura di una grandezza: da stampare (8 pagine)", "pdf": "stampa/fisica-misura-sintesi.pdf", "pdfPages": 8, "pages": "§1-4, pp. 51-57, con gli esercizi assegnati" },
      {
        "id": "fis-1",
        "topic": "Unità 0 · La matematica per cominciare",
        "title": "Proporzioni e percentuali",
        "file": "video/fisica/01-proporzioni-percentuali.mp4",
        "dur": 73,
        "pages": "p. 1–2",
        "test": "matematica-per-cominciare"
      },
      {
        "id": "fis-2",
        "topic": "Unità 0 · La matematica per cominciare",
        "title": "Le potenze di 10",
        "file": "video/fisica/02-potenze-di-10.mp4",
        "dur": 71,
        "pages": "p. 4",
        "test": "matematica-per-cominciare"
      },
      {
        "id": "fis-5",
        "topic": "Unità 0 · La matematica per cominciare",
        "title": "Equazioni e formule inverse",
        "file": "video/fisica/05-equazioni-formule.mp4",
        "dur": 77,
        "pages": "p. 8–10",
        "test": "matematica-per-cominciare"
      },
      {
        "id": "fis-6",
        "topic": "Unità 0 · La matematica per cominciare",
        "title": "Grafici e proporzionalità",
        "file": "video/fisica/06-grafici-proporzionalita.mp4",
        "dur": 73,
        "pages": "p. 14–20",
        "test": "matematica-per-cominciare"
      },
      {
        "id": "fis-7",
        "topic": "Unità 1 · Le grandezze fisiche",
        "title": "Grandezze, misura e SI",
        "file": "video/fisica/07-grandezze-misura.mp4",
        "dur": 72,
        "pages": "p. 23–26",
        "test": "grandezze-teoria"
      },
      {
        "id": "fis-3",
        "topic": "Unità 1 · Le grandezze fisiche",
        "title": "La notazione scientifica",
        "file": "video/fisica/03-notazione-scientifica.mp4",
        "dur": 65,
        "pages": "p. 27 e 41",
        "test": "grandezze-cap1-problemi"
      },
      {
        "id": "fis-4",
        "topic": "Unità 1 · Le grandezze fisiche",
        "title": "Approssimare e ordine di grandezza",
        "file": "video/fisica/04-approssimare-ordine-grandezza.mp4",
        "dur": 79,
        "pages": "p. 27–28",
        "test": "grandezze-cap1-problemi"
      },
      {
        "id": "fis-8",
        "topic": "Unità 1 · Le grandezze fisiche",
        "title": "Secondo, metro e massa",
        "file": "video/fisica/08-secondo-metro-massa.mp4",
        "dur": 67,
        "pages": "p. 29–32",
        "test": "fisica-definizioni"
      },
      {
        "id": "fis-9",
        "topic": "Unità 1 · Le grandezze fisiche",
        "title": "Area, volume e densità",
        "file": "video/fisica/09-area-volume-densita.mp4",
        "dur": 72,
        "pages": "p. 32–35",
        "test": "grandezze-cap1-problemi"
      }
    ]
  },
  {
    "subject": "matematica",
    "icon": "📐",
    "color": "#7c3aed",
    "items": [
      {
        "id": "vid-p01",
        "topic": "Inizia da qui",
        "title": "Perché studio matematica? (video)",
        "file": "video/matematica/perche-matematica.mp4",
        "dur": 80,
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "int-0",
        "topic": "Inizia da qui",
        "title": "Perché studio matematica?",
        "lesson": "intro-matematica",
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "vid-p02",
        "topic": "Basi delle medie",
        "title": "Perché le regole dei segni (video)",
        "file": "video/matematica/perche-segni.mp4",
        "dur": 57,
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "int-1",
        "topic": "Basi delle medie",
        "title": "Perché le regole dei segni",
        "lesson": "intro-segni",
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "bas-2",
        "topic": "Basi delle medie",
        "title": "Le regole dei segni (video)",
        "file": "video/matematica/00a-regole-dei-segni.mp4",
        "dur": 155,
        "pages": "Basi delle medie",
        "test": "segni-1"
      },
      {
        "id": "bas-1",
        "topic": "Basi delle medie",
        "title": "Le regole dei segni",
        "lesson": "segni",
        "pages": "Spiegazione a slide",
        "test": "segni-1"
      },
      {
        "id": "vid-p03",
        "topic": "Basi delle medie",
        "title": "Perché MCD e mcm (video)",
        "file": "video/matematica/perche-mcd-mcm.mp4",
        "dur": 70,
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "int-2",
        "topic": "Basi delle medie",
        "title": "Perché MCD e mcm",
        "lesson": "intro-mcd",
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "bas-4",
        "topic": "Basi delle medie",
        "title": "MCD e mcm (video)",
        "file": "video/matematica/00b-mcd-mcm.mp4",
        "dur": 155,
        "pages": "Basi delle medie",
        "test": "mcm-1"
      },
      {
        "id": "bas-3",
        "topic": "Basi delle medie",
        "title": "MCD e mcm",
        "lesson": "mcd-mcm",
        "pages": "Spiegazione a slide",
        "test": "mcm-1"
      },
      {
        "id": "vid-p04",
        "topic": "Numeri razionali · cap. 2",
        "title": "Perché le frazioni (video)",
        "file": "video/matematica/perche-frazioni.mp4",
        "dur": 49,
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "int-3",
        "topic": "Numeri razionali · cap. 2",
        "title": "Perché le frazioni",
        "lesson": "intro-frazioni",
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "vid-p05",
        "topic": "Numeri razionali · cap. 2",
        "title": "Perché le potenze (video)",
        "file": "video/matematica/perche-potenze.mp4",
        "dur": 53,
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "int-4",
        "topic": "Numeri razionali · cap. 2",
        "title": "Perché le potenze",
        "lesson": "intro-potenze",
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "vid-p06",
        "topic": "Numeri razionali · cap. 2",
        "title": "Perché decimali, proporzioni e percentuali (video)",
        "file": "video/matematica/perche-percentuali.mp4",
        "dur": 53,
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "int-5",
        "topic": "Numeri razionali · cap. 2",
        "title": "Perché decimali, proporzioni e percentuali",
        "lesson": "intro-decimali",
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "mat-1",
        "topic": "Numeri razionali · cap. 2",
        "title": "Che cos'è una frazione",
        "file": "video/matematica/01-che-cos-e-una-frazione.mp4",
        "dur": 60,
        "pages": "Cap. 2",
        "test": "razionali-cap2"
      },
      {
        "id": "mat-2",
        "topic": "Numeri razionali · cap. 2",
        "title": "Frazioni equivalenti",
        "file": "video/matematica/02-frazioni-equivalenti.mp4",
        "dur": 72,
        "pages": "Cap. 2",
        "test": "razionali-cap2"
      },
      {
        "id": "mat-3",
        "topic": "Numeri razionali · cap. 2",
        "title": "Proprietà invariantiva",
        "file": "video/matematica/03-proprieta-invariantiva.mp4",
        "dur": 48,
        "pages": "Cap. 2",
        "test": "razionali-cap2"
      },
      {
        "id": "mat-4",
        "topic": "Numeri razionali · cap. 2",
        "title": "Dimostrazione 1",
        "file": "video/matematica/04-dimostrazione-1.mp4",
        "dur": 37,
        "pages": "Cap. 2",
        "test": "razionali-cap2"
      },
      {
        "id": "mat-5",
        "topic": "Numeri razionali · cap. 2",
        "title": "Dimostrazione 2",
        "file": "video/matematica/05-dimostrazione-2.mp4",
        "dur": 43,
        "pages": "Cap. 2",
        "test": "razionali-cap2"
      },
      {
        "id": "mat-6",
        "topic": "Numeri razionali · cap. 2",
        "title": "Semplificare e denominatore comune",
        "file": "video/matematica/06-semplificare-e-denominatore-comune.mp4",
        "dur": 57,
        "pages": "Cap. 2",
        "test": "razionali-cap2"
      },
      {
        "id": "mat-7",
        "topic": "Numeri razionali · cap. 2",
        "title": "Numeri razionali",
        "file": "video/matematica/07-numeri-razionali.mp4",
        "dur": 52,
        "pages": "Cap. 2",
        "test": "razionali-cap2"
      },
      {
        "id": "mat-8",
        "topic": "Numeri razionali · cap. 2",
        "title": "Retta e confronto",
        "file": "video/matematica/08-retta-e-confronto.mp4",
        "dur": 58,
        "pages": "Cap. 2",
        "test": "razionali-cap2"
      },
      {
        "id": "mat-9",
        "topic": "Numeri razionali · cap. 2",
        "title": "Le quattro operazioni",
        "file": "video/matematica/09-le-quattro-operazioni.mp4",
        "dur": 67,
        "pages": "Cap. 2",
        "test": "razionali-cap2"
      },
      {
        "id": "mat-10",
        "topic": "Numeri razionali · cap. 2",
        "title": "Le potenze",
        "file": "video/matematica/10-le-potenze.mp4",
        "dur": 55,
        "pages": "Cap. 2",
        "test": "razionali-cap2"
      },
      {
        "id": "pdf-1",
        "topic": "Geometria e gradi · da stampare",
        "title": "PDF da stampare: assiomi, criteri, gradi",
        "pdf": "stampa/geometria-assiomi-criteri-gradi.pdf",
        "pdfPages": 9,
        "pages": "Riassunto con i disegni"
      },
      {
        "id": "html-1",
        "topic": "Geometria e gradi · da stampare",
        "title": "Assiomi e criteri: studia, ripeti, ChatGPT",
        "html": "ripasso/assiomi-criteri.html",
        "pages": "Enunciati, carte da girare, prompt per l'interrogazione"
      },
      {
        "id": "pdf-2",
        "topic": "Geometria e gradi · da stampare",
        "title": "Interrogazione: i due criteri di congruenza",
        "pdf": "stampa/criteri-interrogazione.pdf",
        "pdfPages": 2,
        "pages": "Enunciati, dimostrazioni, domande del prof"
      },
      {
        "id": "vid-p07",
        "topic": "Geometria euclidea · cap. G1",
        "title": "Perché gli assiomi (video)",
        "file": "video/matematica/perche-assiomi.mp4",
        "dur": 46,
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "int-6",
        "topic": "Geometria euclidea · cap. G1",
        "title": "Perché gli assiomi",
        "lesson": "intro-assiomi",
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "ass-2",
        "topic": "Geometria euclidea · cap. G1",
        "title": "Gli assiomi con i disegni (video)",
        "file": "video/matematica/14-assiomi-con-disegni.mp4",
        "dur": 205,
        "pages": "Un disegno per assioma",
        "test": "assiomi-g1"
      },
      {
        "id": "ass-1",
        "topic": "Geometria euclidea · cap. G1",
        "title": "Gli assiomi con i disegni",
        "lesson": "assiomi-disegni",
        "pages": "Spiegazione a slide · un disegno per assioma",
        "test": "assiomi-g1"
      },
      {
        "id": "ass-4",
        "topic": "Geometria euclidea · cap. G1",
        "title": "Gli assiomi animati, passo per passo",
        "anim": "assiomi",
        "pages": "Tocca «Avanti» e guarda",
        "test": "assiomi-g1"
      },
      {
        "id": "ass-3",
        "topic": "Geometria euclidea · cap. G1",
        "title": "Gli assiomi in parole semplici (video)",
        "file": "video/matematica/15-assiomi-parole-semplici.mp4",
        "dur": 217,
        "pages": "Enunciato da studiare + spiegazione per capire",
        "test": "assiomi-g1"
      },
      {
        "id": "vid-p09",
        "topic": "Geometria euclidea · criteri di congruenza",
        "title": "Perché i criteri di congruenza (video)",
        "file": "video/matematica/perche-criteri.mp4",
        "dur": 81,
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "int-8",
        "topic": "Geometria euclidea · criteri di congruenza",
        "title": "Perché i criteri di congruenza",
        "lesson": "intro-criteri",
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "bma-1",
        "topic": "Geometria euclidea · criteri di congruenza",
        "title": "Bisettrice, mediana, altezza",
        "lesson": "bisettrice-mediana-altezza",
        "pages": "Spiegazione a slide · dal quaderno",
        "test": "bma-1"
      },
      {
        "id": "cri-2",
        "topic": "Geometria euclidea · criteri di congruenza",
        "title": "Primo e secondo criterio (video)",
        "file": "video/matematica/13-criteri-di-congruenza.mp4",
        "dur": 237,
        "pages": "Geometria euclidea",
        "test": "criteri-1"
      },
      {
        "id": "cri-1",
        "topic": "Geometria euclidea · criteri di congruenza",
        "title": "Primo e secondo criterio di congruenza",
        "lesson": "criteri-congruenza",
        "pages": "Spiegazione a slide",
        "test": "criteri-1"
      },
      {
        "id": "cri-4",
        "topic": "Geometria euclidea · criteri di congruenza",
        "title": "I criteri animati, passo per passo",
        "anim": "criteri",
        "pages": "Tocca «Avanti» e guarda",
        "test": "criteri-1"
      },
      {
        "id": "cri-3",
        "topic": "Geometria euclidea · criteri di congruenza",
        "title": "I criteri in parole semplici (video)",
        "file": "video/matematica/16-criteri-parole-semplici.mp4",
        "dur": 80,
        "pages": "Enunciato da studiare + spiegazione per capire",
        "test": "criteri-1"
      },
      {
        "id": "vid-p08",
        "topic": "Misura degli angoli",
        "title": "Perché gradi, primi e secondi (video)",
        "file": "video/matematica/perche-gradi.mp4",
        "dur": 48,
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "int-7",
        "topic": "Misura degli angoli",
        "title": "Perché gradi, primi e secondi",
        "lesson": "intro-gradi",
        "pages": "Introduzione · perché ti serve"
      },
      {
        "id": "mat-13",
        "topic": "Misura degli angoli",
        "title": "Gradi, primi e secondi (video)",
        "file": "video/matematica/12-gradi-primi-secondi.mp4",
        "dur": 229,
        "pages": "Misura degli angoli",
        "test": "gradi-1"
      },
      {
        "id": "mat-12",
        "topic": "Misura degli angoli",
        "title": "Gradi, primi e secondi",
        "lesson": "gradi-primi-secondi",
        "pages": "Spiegazione a slide",
        "test": "gradi-1"
      }
    ]
  },
  {
    "subject": "informatica",
    "icon": "💻",
    "color": "#0ea5e9",
    "items": [
      {
        "id": "inf-1",
        "topic": "Modulo A1 · Informatica e computer",
        "title": "Informatica e computer",
        "file": "video/informatica/01-informatica-e-computer.mp4",
        "dur": 54,
        "pages": "Modulo A1"
      },
      {
        "id": "inf-2",
        "topic": "Modulo A1 · Informatica e computer",
        "title": "Il computer",
        "file": "video/informatica/02-il-computer.mp4",
        "dur": 60,
        "pages": "Modulo A1"
      },
      {
        "id": "inf-3",
        "topic": "Modulo A1 · Informatica e computer",
        "title": "Le aree dell'informatica",
        "file": "video/informatica/03-le-aree-dell-informatica.mp4",
        "dur": 63,
        "pages": "Modulo A1"
      },
      {
        "id": "inf-4",
        "topic": "Modulo A1 · Informatica e computer",
        "title": "Dato e informazione",
        "file": "video/informatica/04-dato-e-informazione.mp4",
        "dur": 61,
        "pages": "Modulo A1"
      }
    ]
  },
  {
    "subject": "inglese",
    "icon": "🇬🇧",
    "color": "#7c3aed",
    "items": [
      {
        "id": "en-pdf-1",
        "topic": "Da stampare",
        "title": "Schede di esercizi (13 argomenti)",
        "pdf": "stampa/inglese-schede-esercizi.pdf",
        "pdfPages": 22,
        "pages": "Crocette, frasi da scrivere, tabelle, riordina"
      },
      {
        "id": "en-pdf-2",
        "topic": "Da stampare",
        "title": "Soluzioni delle schede",
        "pdf": "stampa/inglese-schede-soluzioni.pdf",
        "pdfPages": 6,
        "pages": "Per correggere"
      },
      {
        "id": "en-l1",
        "topic": "Ripasso generale di grammatica",
        "title": "To be e have got",
        "lesson": "en-be-have",
        "pages": "Forme, domande, risposte brevi, 's",
        "test": "en-be-have"
      },
      {
        "id": "en-l2",
        "topic": "Ripasso generale di grammatica",
        "title": "Plurali, articoli e possessivi",
        "lesson": "en-nomi",
        "pages": "Plurali, a / an, my / his / her, genitivo sassone",
        "test": "en-plurali"
      },
      {
        "id": "en-l3",
        "topic": "Ripasso generale di grammatica",
        "title": "Present simple e avverbi di frequenza",
        "lesson": "en-present-simple",
        "pages": "-s, don't / doesn't, domande, always / never, on / in / at",
        "test": "en-present-simple"
      },
      {
        "id": "en-l4",
        "topic": "Ripasso generale di grammatica",
        "title": "Present continuous e imperativo",
        "lesson": "en-continuous",
        "pages": "to be + -ing, love + -ing, Don't…!",
        "test": "en-continuous"
      },
      {
        "id": "en-l5",
        "topic": "Dalle mappe per ripassare (pp. 108-118)",
        "title": "Pronomi, quantità e luoghi",
        "lesson": "en-quantita",
        "pages": "me / him, mine, some / any, there is, much / many, in / on / under",
        "test": "en-quantita"
      },
      {
        "id": "en-l6",
        "topic": "Dalle mappe per ripassare (pp. 108-118)",
        "title": "Il passato",
        "lesson": "en-passato",
        "pages": "was / were, -ed, irregolari, didn't / did, past continuous",
        "test": "en-passato"
      },
      {
        "id": "en-l7",
        "topic": "Dalle mappe per ripassare (pp. 108-118)",
        "title": "Il futuro",
        "lesson": "en-futuro",
        "pages": "present continuous, going to, will",
        "test": "en-futuro"
      },
      {
        "id": "en-l8",
        "topic": "Dalle mappe per ripassare (pp. 108-118)",
        "title": "Comparativi e superlativi",
        "lesson": "en-confronti",
        "pages": "-er, more, as … as, the -est, the most",
        "test": "en-confronti"
      },
      {
        "id": "en-l9",
        "topic": "Dalle mappe per ripassare (pp. 108-118)",
        "title": "I verbi modali",
        "lesson": "en-modali",
        "pages": "can, could, must, have to, should, may, shall",
        "test": "en-modali"
      },
      {
        "id": "en-l10",
        "topic": "Dalle mappe per ripassare (pp. 108-118)",
        "title": "Present perfect",
        "lesson": "en-perfect",
        "pages": "have + participio, just, already, yet, ever",
        "test": "en-perfect"
      },
      {
        "id": "en-l11",
        "topic": "Dalle mappe per ripassare (pp. 108-118)",
        "title": "Passivo, ipotetico, indiretto",
        "lesson": "en-passivo",
        "pages": "is made, if…, say / tell",
        "test": "en-passivo"
      }
    ]
  }
];
