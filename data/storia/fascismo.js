// ============================================================
//  data/storia/fascismo.js
//  Versione 2 — copertura completa del testo
//  40 domande: una per ogni concetto chiave
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["fascismo"] = {

  id:              "fascismo",
  subject:         "storia",
  title:           "Il Fascismo in Italia",
  description:     "Origini, ascesa, regime e leggi razziali",
  icon:            "🏛️",
  version:         2,
  timePerQuestion: 20,

  questions: [

    // ══════════════════════════════════════════
    //  NASCITA DEL FASCISMO (1919–1921)
    // ══════════════════════════════════════════

    {
      q: "In quale anno e città Mussolini fonda i Fasci italiani di combattimento?",
      options: ["1917, Roma", "1919, Milano", "1921, Torino", "1922, Roma"],
      answer: 1,
      explanation: "Il 23 marzo 1919, a Milano, Mussolini fonda i Fasci italiani di combattimento."
    },
    {
      q: "Chi componeva principalmente i Fasci italiani di combattimento?",
      options: [
        "Operai e sindacalisti",
        "Reduci di guerra e ceti medi",
        "Aristocratici e grandi industriali",
        "Studenti universitari e professori"
      ],
      answer: 1,
      explanation: "I Fasci erano composti soprattutto da reduci di guerra delusi e da ceti medi colpiti dalla crisi economica del dopoguerra."
    },
    {
      q: "Cosa sono le 'squadracce' fasciste?",
      options: [
        "Squadre sportive organizzate dal PNF",
        "Gruppi paramilitari che compivano spedizioni punitive contro scioperanti e sindacalisti",
        "Corpi speciali dell'esercito fedeli a Mussolini",
        "Organizzazioni giovanili del partito"
      ],
      answer: 1,
      explanation: "Dopo il fallimento alle elezioni del 1919, i fascisti organizzano le squadracce, che compiono spedizioni punitive violente contro sindacalisti e oppositori."
    },
    {
      q: "In quale anno nasce il Partito Nazionale Fascista (PNF)?",
      options: ["1919", "1920", "1921", "1922"],
      answer: 2,
      explanation: "Nel 1921 nasce il Partito Nazionale Fascista (PNF) e i fascisti entrano in Parlamento per la prima volta."
    },

    // ══════════════════════════════════════════
    //  ASCESA AL POTERE (1922–1924)
    // ══════════════════════════════════════════

    {
      q: "Cosa avviene il 28 ottobre 1922?",
      options: [
        "Vengono approvate le leggi fascistissime",
        "Mussolini viene eletto in Parlamento con il 51% dei voti",
        "La Marcia su Roma dei fascisti",
        "L'invasione dell'Etiopia"
      ],
      answer: 2,
      explanation: "Il 28 ottobre 1922 avviene la Marcia su Roma. Il re Vittorio Emanuele III rifiuta di firmare lo stato d'assedio e affida il governo a Mussolini."
    },
    {
      q: "Il re Vittorio Emanuele III fermò la Marcia su Roma con l'esercito. Vero o falso?",
      options: [
        "Vero, dichiarò subito lo stato d'assedio",
        "Falso: rifiutò di firmarlo e affidò il governo a Mussolini",
        "Vero, ma solo dopo 48 ore di trattative",
        "Falso, era assente dall'Italia in quel momento"
      ],
      answer: 1,
      explanation: "Il re rifiutò di firmare il decreto di stato d'assedio. Questo atto legittimò di fatto la presa del potere di Mussolini."
    },
    {
      q: "Come si presenta il primo governo di Mussolini nel 1922?",
      options: [
        "Composto solo da membri del PNF",
        "Include anche liberali e popolari, non solo fascisti",
        "È un governo militare senza partiti",
        "È approvato direttamente dal re senza voto parlamentare"
      ],
      answer: 1,
      explanation: "All'inizio il governo Mussolini include anche liberali e popolari. Solo progressivamente Mussolini rafforza il suo controllo ed esclude gli altri."
    },
    {
      q: "Come si svolgono le elezioni del 1924?",
      options: [
        "In modo regolare e democratico",
        "In un clima di violenza e intimidazione: i fascisti ottengono la maggioranza",
        "Vengono boicottate dall'opposizione prima del voto",
        "Vengono annullate da Mussolini con un decreto"
      ],
      answer: 1,
      explanation: "Le elezioni del 1924 si svolgono in un clima di violenza e intimidazione fascista. I fascisti ottengono la maggioranza parlamentare."
    },
    {
      q: "Chi era Giacomo Matteotti e cosa fece nel 1924?",
      options: [
        "Un generale dell'esercito che organizzò un golpe contro Mussolini",
        "Un deputato socialista che denunciò in Parlamento i brogli elettorali del 1924",
        "Il fondatore della polizia segreta OVRA",
        "Un giornalista che pubblicò articoli contro il fascismo"
      ],
      answer: 1,
      explanation: "Matteotti era un deputato socialista che denunciò coraggiosamente i brogli delle elezioni del 1924. Poco dopo fu rapito e ucciso dai fascisti."
    },
    {
      q: "Cosa si intende per 'ritiro sull'Aventino'?",
      options: [
        "La fuga di Mussolini durante la Marcia su Roma",
        "L'abbandono del Parlamento da parte dell'opposizione dopo l'omicidio Matteotti",
        "La resistenza armata degli operai torinesi nel 1924",
        "Il trasferimento del governo da Roma a Milano"
      ],
      answer: 1,
      explanation: "Dopo l'assassinio di Matteotti, le opposizioni abbandonano il Parlamento in segno di protesta. Il re non interviene e Mussolini rimane al potere."
    },
    {
      q: "Quando Mussolini proclama formalmente la dittatura?",
      options: ["28 ottobre 1922", "Dopo le elezioni del 1924", "3 gennaio 1925", "Con le leggi fascistissime del 1926"],
      answer: 2,
      explanation: "Il 3 gennaio 1925 Mussolini pronuncia un discorso in Parlamento assumendosi la responsabilità politica dell'assassinio Matteotti, avviando formalmente la dittatura."
    },

    // ══════════════════════════════════════════
    //  LEGGI FASCISTISSIME E REPRESSIONE
    // ══════════════════════════════════════════

    {
      q: "Cosa sono le 'leggi fascistissime' e quando vengono approvate?",
      options: [
        "Leggi a favore dei lavoratori, approvate nel 1922",
        "Leggi che eliminano le libertà fondamentali, approvate tra il 1925 e il 1926",
        "Le leggi razziali contro gli ebrei del 1938",
        "La riforma scolastica di Gentile del 1923"
      ],
      answer: 1,
      explanation: "Tra il 1925 e il 1926 le leggi fascistissime sciolgono i partiti, censurano la stampa, vietano lo sciopero e svuotano il Parlamento dei suoi poteri."
    },
    {
      q: "Cos'era il Tribunale speciale, creato con le leggi fascistissime?",
      options: [
        "Un tribunale per i crimini economici",
        "Un organo giudiziario straordinario per giudicare gli oppositori politici del regime",
        "Il tribunale militare che gestiva i processi ai disertori",
        "Una corte d'appello per le sentenze dei tribunali ordinari"
      ],
      answer: 1,
      explanation: "Il Tribunale speciale era un organo giudiziario creato appositamente per perseguitare e condannare gli oppositori politici del regime fascista."
    },
    {
      q: "Cos'era l'OVRA?",
      options: [
        "Un'organizzazione giovanile fascista",
        "La polizia segreta del regime fascista",
        "Un ente economico per il controllo dell'industria",
        "Il ministero della propaganda"
      ],
      answer: 1,
      explanation: "L'OVRA era la polizia segreta fascista, creata per sorvegliare, infiltrare e perseguitare gli oppositori del regime."
    },
    {
      q: "In quale anno viene introdotto il sistema elettorale che elimina di fatto le elezioni libere?",
      options: ["1925", "1926", "1928", "1931"],
      answer: 2,
      explanation: "Nel 1928 viene introdotto un nuovo sistema elettorale che svuota le elezioni di qualsiasi significato democratico."
    },
    {
      q: "Quale codice viene usato per inasprire ulteriormente la repressione nel 1931?",
      options: ["Il codice napoleonico", "Il codice penale del 1931", "Le leggi fascistissime", "Il regolamento dell'OVRA"],
      answer: 1,
      explanation: "Il codice penale del 1931 inasprisce ulteriormente le limitazioni alle libertà, aggiungendo nuovi strumenti legali di repressione degli oppositori."
    },
    {
      q: "Quale oppositore del fascismo guida il Partito Comunista Italiano dall'estero?",
      options: ["Antonio Gramsci", "Filippo Turati", "Palmiro Togliatti", "Pietro Nenni"],
      answer: 2,
      explanation: "Palmiro Togliatti guida il PCI dall'esilio all'estero, mentre Gramsci viene arrestato nel 1926 e muore in carcere nel 1937."
    },
    {
      q: "Chi tra questi oppositori del fascismo è costretto all'esilio all'estero?",
      options: [
        "Antonio Gramsci e Benedetto Croce",
        "Filippo Turati, Pietro Nenni e Don Luigi Sturzo",
        "Gaetano Salvemini e Palmiro Togliatti sono incarcerati in Italia",
        "Solo Don Luigi Sturzo, gli altri restano in Italia"
      ],
      answer: 1,
      explanation: "Filippo Turati, Pietro Nenni e Don Luigi Sturzo sono tra gli oppositori costretti all'esilio. Benedetto Croce rimane in Italia come oppositore intellettuale."
    },
    {
      q: "Cosa fa lo storico Gaetano Salvemini in opposizione al regime fascista?",
      options: [
        "Fonda un partito clandestino",
        "Denuncia la perdita della libertà e lascia l'insegnamento",
        "Scrive articoli su giornali stranieri usando uno pseudonimo",
        "Organizza la resistenza armata nel Sud Italia"
      ],
      answer: 1,
      explanation: "Gaetano Salvemini denuncia pubblicamente la perdita della libertà e lascia l'insegnamento universitario in segno di protesta contro il regime."
    },
    {
      q: "Antonio Gramsci viene arrestato nel 1926. Quando muore?",
      options: ["1929", "1933", "1937", "1945"],
      answer: 2,
      explanation: "Antonio Gramsci viene arrestato nel 1926 e muore in carcere nel 1937, dopo anni di detenzione che ne minano definitivamente la salute."
    },

    // ══════════════════════════════════════════
    //  PROPAGANDA E CONTROLLO
    // ══════════════════════════════════════════

    {
      q: "Quale ministero controlla l'informazione inviando direttive ai giornali?",
      options: [
        "Il Ministero dell'Interno",
        "Il Ministero della Cultura Popolare (MinCulPop)",
        "L'Istituto Luce",
        "Il Ministero dell'Educazione Nazionale"
      ],
      answer: 1,
      explanation: "Il Ministero della Cultura Popolare (MinCulPop) invia direttive quotidiane ai giornali, controllando completamente l'informazione in Italia."
    },
    {
      q: "Quale istituto viene usato per la propaganda cinematografica?",
      options: ["MinCulPop", "Istituto Luce", "EIAR", "GUF"],
      answer: 1,
      explanation: "L'Istituto Luce (1925) produce e distribuisce cinegiornali e documentari di propaganda fascista, proiettati obbligatoriamente nei cinema prima dei film."
    },
    {
      q: "Come si chiamava la radio di Stato fascista?",
      options: ["RAI", "URI, poi rinominata EIAR", "MinCulPop Radio", "Radio Impero"],
      answer: 1,
      explanation: "La radio di Stato si chiama prima URI (Unione Radiofonica Italiana) e poi diventa EIAR (Ente Italiano per le Audizioni Radiofoniche), strumento chiave di propaganda."
    },
    {
      q: "Con quale titolo viene chiamato Mussolini nel culto della personalità fascista?",
      options: ["Il Führer", "Il Duce", "Il Condottiero", "Il Capo"],
      answer: 1,
      explanation: "Mussolini viene chiamato 'Duce' (dal latino dux, capo). Attorno a questo titolo si costruisce un vero e proprio culto della personalità."
    },

    // ══════════════════════════════════════════
    //  SCUOLA E GIOVANI
    // ══════════════════════════════════════════

    {
      q: "Come si chiama la riforma scolastica fascista del 1923?",
      options: ["Riforma Mussolini", "Riforma Gentile", "Riforma Bottai", "Riforma del libro unico"],
      answer: 1,
      explanation: "La riforma Gentile del 1923, dal nome del ministro Giovanni Gentile, riorganizza la scuola italiana secondo i principi del regime fascista."
    },
    {
      q: "Cosa devono fare gli insegnanti italiani sotto il fascismo?",
      options: [
        "Seguire solo i programmi ministeriali",
        "Giurare fedeltà al fascismo",
        "Iscriversi obbligatoriamente al PNF entro il 1924",
        "Insegnare solo in italiano, vietando i dialetti"
      ],
      answer: 1,
      explanation: "Gli insegnanti sono obbligati a prestare giuramento di fedeltà al fascismo. Chi rifiuta viene espulso dall'insegnamento."
    },
    {
      q: "Cosa sono i GUF?",
      options: [
        "Gruppi Universitari Fascisti, l'organizzazione per gli studenti universitari",
        "Gruppi Urbani Fascisti, le squadracce nelle città",
        "Guardie Ufficiali Fasciste, la scorta di Mussolini",
        "Gruppi Unificati Femminili, l'organizzazione delle donne fasciste"
      ],
      answer: 0,
      explanation: "Il testo cita i GUF tra le organizzazioni giovanili fasciste, associati all'università. GUF sta per Gruppi Universitari Fascisti."
    },
    {
      q: "Cosa viene introdotto nel 1935 con il 'sabato fascista'?",
      options: [
        "Un giorno libero dalla scuola dedicato allo studio della storia romana",
        "Attività militari e sportive obbligatorie ogni sabato pomeriggio",
        "Una parata settimanale in onore del Duce",
        "Lezioni di educazione politica nelle scuole medie"
      ],
      answer: 1,
      explanation: "Dal 1935 il 'sabato fascista' prevede attività militari e sportive obbligatorie per i giovani, rafforzando l'inquadramento ideologico del regime."
    },
    {
      q: "Perché il fascismo crea l'Opera Nazionale Balilla?",
      options: [
        "Per ridurre la disoccupazione giovanile",
        "Per formare i giovani all'ideologia fascista fin dall'infanzia",
        "Per sostituire il servizio militare obbligatorio",
        "Per gestire le attività sportive nazionali"
      ],
      answer: 1,
      explanation: "L'ONB inquadra i giovani con attività sportive e paramilitari, formandoli all'obbedienza e all'ideologia del regime fin da piccoli."
    },

    // ══════════════════════════════════════════
    //  MITO DI ROMA
    // ══════════════════════════════════════════

    {
      q: "A quale figura storica viene paragonato Mussolini nella propaganda fascista?",
      options: ["Alessandro Magno", "Napoleone Bonaparte", "Giulio Cesare (un nuovo Cesare)", "Marco Aurelio"],
      answer: 2,
      explanation: "Il fascismo si ispira all'Impero romano e la propaganda presenta Mussolini come un nuovo Cesare, destinato a ricreare la grandezza di Roma."
    },
    {
      q: "Qual è il simbolo principale del fascismo italiano?",
      options: ["La croce uncinata", "Il fascio littorio", "L'aquila imperiale", "La fiamma tricolore"],
      answer: 1,
      explanation: "Il fascio littorio — un fascio di verghe con una scure, simbolo del potere nell'antica Roma — è il simbolo principale del fascismo italiano."
    },
    {
      q: "Quale opera simbolica viene costruita dal regime fascista a Roma?",
      options: [
        "Il Colosseo viene restaurato e ampliato",
        "Foro Mussolini, Via dell'Impero e il quartiere EUR",
        "Viene costruita Cinecittà come simbolo del cinema fascista",
        "Il palazzo del Parlamento viene demolito e ricostruito"
      ],
      answer: 1,
      explanation: "Il regime costruisce opere simboliche come il Foro Mussolini, la Via dell'Impero e il quartiere EUR, per richiamare la grandezza dell'antica Roma."
    },

    // ══════════════════════════════════════════
    //  ECONOMIA
    // ══════════════════════════════════════════

    {
      q: "Come funzionano le corporazioni fasciste?",
      options: [
        "Sono sindacati indipendenti che tutelano i lavoratori",
        "Uniscono lavoratori e imprenditori, ma favoriscono soprattutto questi ultimi",
        "Sono enti statali che gestiscono le imprese nazionalizzate",
        "Sono organizzazioni create per sostituire il Parlamento"
      ],
      answer: 1,
      explanation: "Le corporazioni uniscono lavoratori e imprenditori in un sistema controllato dallo Stato, ma nella pratica favoriscono soprattutto gli imprenditori. I salari dei lavoratori diminuiscono."
    },
    {
      q: "Cosa si intende per 'battaglia del grano' lanciata nel 1925?",
      options: [
        "Una guerra commerciale contro i paesi esportatori di cereali",
        "Una campagna per rendere l'Italia autosufficiente nella produzione di grano",
        "Il controllo statale dei prezzi del pane nelle città",
        "La distribuzione gratuita di farina alle famiglie povere"
      ],
      answer: 1,
      explanation: "La 'battaglia del grano' (1925) è una campagna per aumentare la produzione interna di cereali e ridurre le importazioni, in linea con l'obiettivo autarchico."
    },
    {
      q: "Quale ente energetico viene fondato dal fascismo nel 1926?",
      options: ["IRI", "SNAM", "AGIP", "ENI"],
      answer: 2,
      explanation: "L'AGIP (Azienda Generale Italiana Petroli) viene fondata nel 1926 per la ricerca e lo sfruttamento delle risorse petrolifere nazionali."
    },
    {
      q: "Perché l'IRI viene creato nel 1933?",
      options: [
        "Per finanziare la guerra in Etiopia",
        "Per gestire le colonie africane italiane",
        "Per salvare banche e industrie in crisi dopo il crollo del 1929",
        "Per sostituire le corporazioni fasciste"
      ],
      answer: 2,
      explanation: "L'IRI (Istituto per la Ricostruzione Industriale, 1933) nasce per intervento diretto dello Stato nell'economia, a seguito della crisi mondiale del 1929."
    },
    {
      q: "Perché l'Italia introduce l'autarchia economica dopo il 1935?",
      options: [
        "Per effetto diretto della crisi del 1929",
        "Come risposta alle sanzioni della Società delle Nazioni dopo l'invasione dell'Etiopia",
        "Per ordine della Germania nazista",
        "Per finanziare la costruzione del quartiere EUR"
      ],
      answer: 1,
      explanation: "Dopo l'invasione dell'Etiopia, la Società delle Nazioni impone sanzioni economiche all'Italia. Il regime risponde con l'autarchia, puntando all'autosufficienza produttiva."
    },

    // ══════════════════════════════════════════
    //  POLITICA ESTERA
    // ══════════════════════════════════════════

    {
      q: "Come riconquista l'Italia la Libia sotto il fascismo?",
      options: [
        "Con accordi diplomatici e trattati internazionali",
        "Con metodi violenti di repressione della popolazione locale",
        "Con l'aiuto militare della Germania nazista",
        "Attraverso una campagna di colonizzazione pacifica"
      ],
      answer: 1,
      explanation: "Il testo riporta che l'Italia riconquista la Libia con metodi violenti di repressione della popolazione locale."
    },
    {
      q: "In quale anno viene proclamato l'Impero italiano dopo la conquista dell'Etiopia?",
      options: ["1935", "1936", "1937", "1938"],
      answer: 1,
      explanation: "L'Italia invade l'Etiopia tra il 1935 e il 1936. Nel 1936 Mussolini proclama la nascita dell'Impero italiano."
    },
    {
      q: "Cosa è l'Asse Roma-Berlino del 1936?",
      options: [
        "Un trattato di pace tra Italia e Germania dopo la Prima guerra mondiale",
        "Un accordo politico di avvicinamento tra Italia fascista e Germania nazista",
        "L'alleanza militare formale che porterà l'Italia nella Seconda guerra mondiale",
        "Un accordo commerciale per lo scambio di materie prime"
      ],
      answer: 1,
      explanation: "L'Asse Roma-Berlino (1936) è un accordo politico di avvicinamento tra i due regimi. L'alleanza militare vera e propria arriverà con il Patto d'Acciaio nel 1939."
    },
    {
      q: "Quale accordo del 1939 lega militarmente Italia e Germania?",
      options: ["Asse Roma-Berlino", "Patto Anti-Comintern", "Patto d'Acciaio", "Patto di Monaco"],
      answer: 2,
      explanation: "Il Patto d'Acciaio (maggio 1939) è l'alleanza militare formale tra Italia fascista e Germania nazista, che porterà l'Italia nella Seconda guerra mondiale."
    },

    // ══════════════════════════════════════════
    //  LEGGI RAZZIALI
    // ══════════════════════════════════════════

    {
      q: "In quale anno vengono introdotte le leggi razziali contro gli ebrei in Italia?",
      options: ["1935", "1936", "1938", "1940"],
      answer: 2,
      explanation: "Nel 1938 il regime fascista introduce le leggi razziali, escludendo gli ebrei dalla scuola, dal lavoro, dall'esercito e dalla vita pubblica."
    },
    {
      q: "Cosa vietano specificamente le leggi razziali del 1938?",
      options: [
        "Solo l'accesso degli ebrei alle cariche pubbliche",
        "L'accesso a scuole e lavoro, l'arruolamento nell'esercito e i matrimoni misti",
        "Solo la partecipazione degli ebrei alla vita politica",
        "L'uso della lingua yiddish in pubblico"
      ],
      answer: 1,
      explanation: "Le leggi razziali escludono gli ebrei da scuole, lavoro ed esercito, li espellono dalla vita pubblica e vietano i matrimoni tra ebrei e non ebrei."
    },
    {
      q: "Cosa succede agli ebrei italiani dopo le leggi razziali del 1938?",
      options: [
        "Vengono espulsi dall'Italia entro sei mesi",
        "Le leggi restano sulla carta senza conseguenze pratiche",
        "Successivamente iniziano arresti e deportazioni",
        "Vengono concentrati in ghetti nelle grandi città"
      ],
      answer: 2,
      explanation: "Dopo le leggi razziali del 1938, con l'avanzare della guerra e l'occupazione tedesca, iniziano gli arresti e le deportazioni degli ebrei italiani verso i campi di sterminio."
    },

    // ══════════════════════════════════════════
    //  LIVELLO AVANZATO — sintesi e inferenza
    // ══════════════════════════════════════════

    {
      q: "Qual è la sequenza cronologica corretta degli eventi principali?",
      options: [
        "Marcia su Roma → Omicidio Matteotti → Leggi fascistissime → Leggi razziali",
        "Leggi fascistissime → Marcia su Roma → Omicidio Matteotti → Leggi razziali",
        "Omicidio Matteotti → Marcia su Roma → Leggi razziali → Leggi fascistissime",
        "Marcia su Roma → Leggi fascistissime → Leggi razziali → Omicidio Matteotti"
      ],
      answer: 0,
      explanation: "Marcia su Roma (1922) → Omicidio Matteotti (1924) → Leggi fascistissime (1925–26) → Leggi razziali (1938). Ogni evento prepara il successivo inasprimento del regime."
    },
    {
      q: "Quale collegamento spiega meglio la nascita del fascismo nel 1919?",
      options: [
        "La vittoria italiana nella guerra crea benessere e il fascismo ne approfitta",
        "La crisi economica e sociale del dopoguerra genera malcontento che Mussolini sfrutta con nazionalismo e violenza",
        "Il Partito Socialista perde le elezioni e i suoi militanti fondano il fascismo",
        "La Germania impone all'Italia un regime autoritario come condizione di pace"
      ],
      answer: 1,
      explanation: "Il fascismo nasce in un'Italia sconvolta da disoccupazione, tensioni sociali e delusione postbellica. Mussolini sfrutta questo malcontento con nazionalismo e violenza sistematica."
    },
    {
      q: "Il fascismo si definisce 'totalitario': cosa significa in concreto?",
      options: [
        "Che il partito vince tutte le elezioni con il 100% dei voti",
        "Che lo Stato controlla ogni aspetto della vita: scuola, lavoro, tempo libero, informazione",
        "Che solo i membri del PNF possono lavorare nella pubblica amministrazione",
        "Che l'Italia occupa militarmente tutti i paesi confinanti"
      ],
      answer: 1,
      explanation: "Uno Stato totalitario non si limita a governare: vuole controllare pensieri, valori e comportamenti di tutti i cittadini in ogni ambito della vita quotidiana."
    },


    // ══════════════════════════════════════════
    //  AGGIUNTE — 4 concetti mancanti
    // ══════════════════════════════════════════

    {
      q: "Chi è Benedetto Croce e quale posizione assume nei confronti del fascismo?",
      options: [
        "Un generale dell'esercito che appoggia Mussolini fino al 1938",
        "Un importante intellettuale e filosofo che diventa oppositore del regime",
        "Il fondatore del Partito Popolare, costretto all'esilio",
        "Un deputato socialista che denuncia i brogli elettorali del 1924"
      ],
      answer: 1,
      explanation: "Benedetto Croce è uno dei più importanti filosofi italiani del Novecento. A differenza di altri oppositori non viene esiliato, ma diventa un simbolo dell'opposizione intellettuale al regime fascista."
    },
    {
      q: "Cos'è il 'libro unico' introdotto dal fascismo nelle scuole?",
      options: [
        "Un registro dove gli insegnanti annotano i voti degli alunni",
        "Un testo scolastico unico e obbligatorio per tutti, controllato dal regime",
        "Il libro dei discorsi di Mussolini usato come lettura obbligatoria",
        "Un elenco di libri vietati nelle biblioteche scolastiche"
      ],
      answer: 1,
      explanation: "Il libro unico è un testo scolastico obbligatorio per tutti gli studenti italiani, controllato dal regime per garantire una formazione uniforme all'ideologia fascista."
    },
    {
      q: "Cos'è la 'battaglia della lira' lanciata dal fascismo?",
      options: [
        "Una campagna militare per conquistare nuovi territori",
        "Una campagna economica per rivalutare e rafforzare la lira italiana",
        "Una raccolta di fondi per finanziare l'esercito fascista",
        "Una misura per tassare le banche straniere operanti in Italia"
      ],
      answer: 1,
      explanation: "La 'battaglia della lira' è una campagna economica fascista per rivalutare la lira italiana, rafforzandone il valore rispetto alle valute straniere."
    },
    {
      q: "Quale ente viene fondato dal fascismo nel 1941 nel settore energetico?",
      options: ["AGIP", "IRI", "SNAM", "ENI"],
      answer: 2,
      explanation: "La SNAM (Società Nazionale Metanodotti) viene fondata nel 1941 per la distribuzione del gas metano in Italia, completando il sistema di enti statali insieme ad AGIP (1926) e IRI (1933)."
    }

  ] // fine questions — 51 domande totali
};
