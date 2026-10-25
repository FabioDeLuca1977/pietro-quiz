// ============================================================
//  data/matematica/razionali-cap2.js  (v1)
//  Cap. 2 NUMERI RAZIONALI E NUMERI REALI (pagg. 77-97)
//
//  60 domande. Domande sulla teoria, dal testo e dai box del libro.
//  Fonte: foto del libro di matematica, ottobre 2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["razionali-cap2"] = {

  id:              "razionali-cap2",
  subject:         "matematica",
  title:           "Cap. 2 — Numeri razionali e reali: teoria",
  description:     "Frazioni, Q, operazioni, potenze, decimali, proporzioni, reali, approssimazioni",
  icon:            "➗",
  version:         1,
  timePerQuestion: 30,

  questions: [

    {
      "q": "Secondo la definizione del libro, che cos'è una frazione?",
      "options": [
        "Una coppia ordinata di numeri naturali, con il secondo diverso da zero",
        "Una coppia ordinata di numeri naturali, con il primo diverso da zero",
        "Una coppia qualsiasi di numeri interi",
        "Un numero decimale con la virgola"
      ],
      "answer": 0,
      "explanation": "Una frazione è una coppia ordinata di numeri naturali, con il secondo diverso da zero: il primo è il numeratore, il secondo il denominatore (p. 77)."
    },

    {
      "q": "Vista come operatore, perché il denominatore di una frazione non può essere 0?",
      "options": [
        "Perché indica quante parti consideriamo",
        "Perché indica in quante parti uguali dividiamo ogni intero",
        "Perché il numeratore deve essere più grande",
        "Perché 0 non è un numero naturale"
      ],
      "answer": 1,
      "explanation": "Il denominatore indica in quante parti uguali dividiamo ogni intero: per questo non può essere 0. Il numeratore indica quante parti consideriamo (p. 77)."
    },

    {
      "q": "Una frazione m/n è apparente quando:",
      "options": [
        "m < n",
        "m > n e m non è multiplo di n",
        "m è multiplo di n",
        "n è multiplo di m"
      ],
      "answer": 2,
      "explanation": "Propria se m < n; apparente se m è multiplo di n (es. 12/6, 21/7); impropria se m > n e m non è multiplo di n (p. 78)."
    },

    {
      "q": "Quale di queste frazioni è impropria?",
      "options": [
        "4/5",
        "21/7",
        "2/6",
        "8/3"
      ],
      "answer": 3,
      "explanation": "8/3: il numeratore è maggiore del denominatore e non ne è multiplo. 4/5 e 2/6 sono proprie, 21/7 è apparente (p. 78)."
    },

    {
      "q": "Due frazioni m/n e p/q sono equivalenti se e solo se:",
      "options": [
        "m · q = n · p",
        "m · p = n · q",
        "m + q = n + p",
        "m = p e n = q"
      ],
      "answer": 0,
      "explanation": "Definizione: m/n e p/q sono equivalenti se e solo se m · q = n · p. I due prodotti si chiamano prodotti in croce (p. 79)."
    },

    {
      "q": "Le frazioni 1/2 e 4/10 sono equivalenti?",
      "options": [
        "Sì, perché 1 · 4 = 2 · 2",
        "Sì, perché sono entrambe proprie",
        "No, perché 1 · 10 ≠ 2 · 4",
        "No, perché hanno denominatori diversi"
      ],
      "answer": 2,
      "explanation": "Prodotti in croce: 1 · 10 = 10 e 2 · 4 = 8, diversi: non sono equivalenti (esempio di p. 79)."
    },

    {
      "q": "Che cosa dice la proprietà invariantiva delle frazioni?",
      "options": [
        "Sommando lo stesso numero a numeratore e denominatore si ottiene una frazione equivalente",
        "Moltiplicando o dividendo numeratore e denominatore per uno stesso numero naturale diverso da zero si ottiene una frazione equivalente",
        "Scambiando numeratore e denominatore si ottiene una frazione equivalente",
        "Moltiplicando solo il numeratore si ottiene una frazione equivalente"
      ],
      "answer": 1,
      "explanation": "Proprietà invariantiva: m/n = (m · a)/(n · a) e m/n = (m : b)/(n : b), con n, a, b ≠ 0 (p. 79)."
    },

    {
      "q": "Perché nella proprietà invariantiva non si può moltiplicare per 0?",
      "options": [
        "Perché si otterrebbe 0/0, che non ha significato",
        "Perché si otterrebbe sempre 1",
        "Perché la frazione diventerebbe negativa",
        "Perché si otterrebbe la frazione reciproca"
      ],
      "answer": 0,
      "explanation": "Moltiplicando per 0 numeratore e denominatore si ottiene 0/0, che non ha significato; e dividere per 0 è un'operazione impossibile (p. 79)."
    },

    {
      "q": "Data una frazione, quante sono le frazioni a essa equivalenti?",
      "options": [
        "Una sola",
        "Dieci",
        "Tante quanti sono i divisori del numeratore",
        "Infinite"
      ],
      "answer": 3,
      "explanation": "Esistono infinite frazioni equivalenti, per esempio 3/2 = 6/4 = 9/6 = … (p. 79)."
    },

    {
      "q": "Quando una frazione si dice irriducibile (ridotta ai minimi termini)?",
      "options": [
        "Quando il numeratore è 1",
        "Quando numeratore e denominatore sono primi fra loro",
        "Quando il denominatore è una potenza di 10",
        "Quando è una frazione propria"
      ],
      "answer": 1,
      "explanation": "Una frazione è irriducibile se numeratore e denominatore sono primi fra loro: 11/8 lo è, 8/6 no (2 è divisore comune) (p. 80)."
    },

    {
      "q": "Per ridurre due frazioni allo stesso denominatore, di solito quale denominatore comune si usa?",
      "options": [
        "Il prodotto dei denominatori",
        "Il MCD dei denominatori",
        "Il minimo comune multiplo dei denominatori",
        "Il denominatore più grande"
      ],
      "answer": 2,
      "explanation": "Si usa il minimo comune multiplo dei denominatori, chiamato minimo comune denominatore (p. 80)."
    },

    {
      "q": "Che cos'è un numero razionale assoluto?",
      "options": [
        "Una frazione ridotta ai minimi termini",
        "Ognuno dei sottoinsiemi formati da tutte le frazioni fra loro equivalenti",
        "Una frazione con il segno",
        "Un numero decimale finito"
      ],
      "answer": 1,
      "explanation": "Numero razionale assoluto: ognuno dei sottoinsiemi formati da tutte le frazioni fra loro equivalenti. Non è una frazione, ma l'insieme delle frazioni equivalenti (p. 81)."
    },

    {
      "q": "Quale frazione si sceglie, per comodità, come rappresentante di un numero razionale?",
      "options": [
        "Quella con denominatore 10",
        "Quella con numeratore 1",
        "Quella ridotta ai minimi termini",
        "Quella con il denominatore più grande"
      ],
      "answer": 2,
      "explanation": "Come rappresentante di ognuno dei sottoinsiemi si sceglie la frazione ridotta ai minimi termini (box «La frazione rappresentante», p. 81)."
    },

    {
      "q": "Nell'espressione «numero razionale assoluto», che cosa significa «assoluto»?",
      "options": [
        "Senza segno",
        "Intero",
        "Esatto, senza approssimazioni",
        "Positivo e maggiore di 1"
      ],
      "answer": 0,
      "explanation": "Assoluto significa «senza segno»: finora le frazioni erano di numeri naturali, che non hanno segno (p. 81)."
    },

    {
      "q": "Quali numeri razionali si chiamano opposti?",
      "options": [
        "Due numeri con lo stesso segno",
        "I numeri con segno diverso ottenuti dallo stesso numero razionale assoluto",
        "Un numero e il suo reciproco",
        "Due numeri il cui prodotto è 1"
      ],
      "answer": 1,
      "explanation": "Opposti: numeri con segno diverso ottenuti dallo stesso numero razionale assoluto, per esempio +4/7 e −4/7 (p. 81)."
    },

    {
      "q": "Le frazioni del tipo 0/n, con n ≠ 0, sono uguali a:",
      "options": [
        "1",
        "n",
        "0",
        "Non hanno significato"
      ],
      "answer": 2,
      "explanation": "Tutte le frazioni 0/n, con n ≠ 0, sono equivalenti fra loro e 0/n = 0 (box «Lo zero in Q», p. 81)."
    },

    {
      "q": "I numeri −3/4 e −2/9 sono:",
      "options": [
        "Discordi",
        "Opposti",
        "Concordi",
        "Reciproci"
      ],
      "answer": 2,
      "explanation": "Due numeri razionali sono concordi se hanno lo stesso segno: −3/4 e −2/9 sono entrambi negativi (p. 82)."
    },

    {
      "q": "Quanto vale |−6/9|?",
      "options": [
        "−6/9",
        "6/9",
        "9/6",
        "0"
      ],
      "answer": 1,
      "explanation": "Il valore assoluto di un numero negativo è il suo opposto: |−6/9| = 6/9 (p. 82)."
    },

    {
      "q": "Rappresentando sulla retta orientata frazioni equivalenti, come −5/2 e −10/4, si ottiene:",
      "options": [
        "Lo stesso punto",
        "Due punti simmetrici rispetto allo 0",
        "Due punti diversi, a distanza 5/2",
        "Nessun punto, perché sono negative"
      ],
      "answer": 0,
      "explanation": "Frazioni equivalenti danno lo stesso punto: ogni numero razionale è rappresentato da un solo punto (p. 82)."
    },

    {
      "q": "Fra due numeri razionali discordi, qual è il maggiore?",
      "options": [
        "Quello con il numeratore maggiore",
        "Quello negativo",
        "Quello con il denominatore minore",
        "Quello positivo"
      ],
      "answer": 3,
      "explanation": "Se i numeri sono discordi, il maggiore è quello positivo, per esempio −4/6 < +3/2 (p. 82)."
    },

    {
      "q": "Con il prodotto in croce, perché 2/5 < 3/7?",
      "options": [
        "Perché 2 · 7 < 5 · 3",
        "Perché 2 < 3",
        "Perché 5 < 7",
        "Perché 2 · 3 < 5 · 7"
      ],
      "answer": 0,
      "explanation": "Per frazioni positive: a/b < c/d se e solo se ad < cb. Qui 2 · 7 = 14 < 5 · 3 = 15 (p. 83)."
    },

    {
      "q": "Quale elemento è neutro per l'addizione in Q?",
      "options": [
        "1",
        "0",
        "−1",
        "Non esiste"
      ],
      "answer": 1,
      "explanation": "In Q valgono le proprietà commutativa, associativa ed esistenza dell'opposto; lo 0 è l'elemento neutro dell'addizione (p. 83)."
    },

    {
      "q": "Che cos'è la reciproca (o inversa) di una frazione c/d, con c ≠ 0?",
      "options": [
        "La frazione −c/d",
        "La frazione d/c",
        "La frazione c/(c + d)",
        "La frazione (c · d)/1"
      ],
      "answer": 1,
      "explanation": "La reciproca di c/d, con c ≠ 0, è d/c. Il prodotto di una frazione per la sua reciproca è sempre 1 (p. 84)."
    },

    {
      "q": "Perché 0 non ha reciproco?",
      "options": [
        "Perché 0 è pari",
        "Perché 0 · 0 = 0",
        "Perché non esistono frazioni con denominatore 0",
        "Perché 0 è l'elemento neutro"
      ],
      "answer": 2,
      "explanation": "0 non ha reciproco perché non esistono frazioni con denominatore 0 (p. 84)."
    },

    {
      "q": "Che cosa c'è in Q che in Z non c'è, per la moltiplicazione?",
      "options": [
        "La proprietà commutativa",
        "L'elemento neutro 1",
        "Per ogni numero non nullo, un numero che moltiplicato per esso dà 1",
        "La legge di annullamento del prodotto"
      ],
      "answer": 2,
      "explanation": "A differenza di Z, in Q per ogni numero razionale c/d non nullo esiste il reciproco, che moltiplicato per c/d dà 1 (p. 84)."
    },

    {
      "q": "Come si definisce il quoziente di due numeri razionali (il secondo diverso da 0)?",
      "options": [
        "È il prodotto del primo per il reciproco del secondo",
        "È il prodotto del primo per l'opposto del secondo",
        "È il prodotto dei reciproci",
        "È la differenza fra il primo e il secondo"
      ],
      "answer": 0,
      "explanation": "Il quoziente è il prodotto del primo per il reciproco del secondo: (a/b) : (c/d) = (a/b) · (d/c), con b, c, d ≠ 0 (p. 85)."
    },

    {
      "q": "In quale insieme la divisione è un'operazione interna?",
      "options": [
        "In N",
        "In Z",
        "In Q privato di 0",
        "In Q, compreso lo 0 come divisore"
      ],
      "answer": 2,
      "explanation": "(−3) : 2 non è possibile in Z, ma lo è in Q. La divisione è un'operazione interna in Q privato di 0 (p. 85)."
    },

    {
      "q": "Per il segno di una potenza in Q, quale regola è corretta?",
      "options": [
        "Con esponente pari la potenza è sempre negativa",
        "Con esponente dispari la potenza è sempre positiva",
        "Con esponente pari la potenza ha sempre segno positivo",
        "Il segno dipende solo dal denominatore"
      ],
      "answer": 2,
      "explanation": "Esponente pari: potenza sempre positiva. Esponente dispari: negativa solo se la base è negativa, per esempio (−2/3)³ = −8/27 (p. 85)."
    },

    {
      "q": "Quanto vale (a/b)⁰, con a ≠ 0?",
      "options": [
        "0",
        "a/b",
        "1",
        "b/a"
      ],
      "answer": 2,
      "explanation": "(a/b)⁰ = a⁰/b⁰ = 1/1 = 1, con a ≠ 0 (p. 85)."
    },

    {
      "q": "Le frazioni racchiuse nell'occhio di Horus sono:",
      "options": [
        "Potenze della frazione unitaria 1/2",
        "Multipli di 1/3",
        "Frazioni decimali",
        "Frazioni improprie"
      ],
      "answer": 0,
      "explanation": "L'occhio di Horus racchiude 1/2, 1/4, 1/8, 1/16, 1/32 e 1/64, cioè potenze di 1/2. Erano i sottomultipli dell'hekat (p. 86)."
    },

    {
      "q": "Come si definisce una potenza di un numero razionale diverso da 0 con esponente intero negativo?",
      "options": [
        "Ha la stessa base e l'esponente positivo",
        "Ha per base il reciproco del numero e per esponente l'opposto dell'esponente",
        "Ha per base l'opposto del numero e lo stesso esponente",
        "Vale sempre 0"
      ],
      "answer": 1,
      "explanation": "Per esempio 2⁻³ = (1/2)³ = 1/8 (definizione, p. 87)."
    },

    {
      "q": "Che cosa significa che Q è un insieme denso?",
      "options": [
        "Che ha infiniti elementi",
        "Che fra due numeri razionali diversi c'è sempre un numero razionale compreso fra i due",
        "Che ogni numero ha un successivo",
        "Che contiene tutti i numeri reali"
      ],
      "answer": 1,
      "explanation": "Dati due razionali diversi si trova sempre un razionale compreso fra i due: per questo precedente e successivo hanno significato in Z ma non in Q (p. 87)."
    },

    {
      "q": "Le frazioni decimali sono quelle che hanno:",
      "options": [
        "Il numeratore uguale a 10",
        "Il denominatore uguale a una potenza di 10",
        "Il denominatore dispari",
        "Infinite cifre dopo la virgola"
      ],
      "answer": 1,
      "explanation": "Si chiamano frazioni decimali tutte le frazioni con denominatore potenza di 10, come 7/10, 11/100, 3/1000 (p. 88)."
    },

    {
      "q": "Un numero decimale periodico è misto quando:",
      "options": [
        "Le cifre si ripetono subito dopo la virgola",
        "Le cifre si ripetono, ma non subito dopo la virgola",
        "Ha una sola cifra dopo la virgola",
        "Non ha parte intera"
      ],
      "answer": 1,
      "explanation": "Semplice se le cifre si ripetono subito dopo la virgola; misto se si ripetono ma non subito: 58/45 = 1,2888… è misto (p. 88)."
    },

    {
      "q": "Nel numero 1,2888… (cioè 58/45), quali sono antiperiodo e periodo?",
      "options": [
        "Antiperiodo 1, periodo 2",
        "Antiperiodo 2, periodo 8",
        "Antiperiodo 28, periodo 8",
        "Antiperiodo 8, periodo 2"
      ],
      "answer": 1,
      "explanation": "Il periodo è il gruppo di cifre che si ripete (8); l'antiperiodo è il gruppo di cifre decimali che lo precede (2) (p. 88)."
    },

    {
      "q": "Una frazione ridotta ai minimi termini ha il denominatore che contiene SOLO potenze di 2 o di 5. Che numero decimale genera?",
      "options": [
        "Finito",
        "Periodico semplice",
        "Periodico misto",
        "Irrazionale"
      ],
      "answer": 0,
      "explanation": "Tabella di p. 88: solo potenze di 2 o di 5 → finito; solo altri fattori → periodico semplice; entrambi → periodico misto."
    },

    {
      "q": "Che tipo di numero decimale genera 11/12?",
      "options": [
        "Finito",
        "Periodico semplice",
        "Periodico misto",
        "Intero"
      ],
      "answer": 2,
      "explanation": "11/12 = 11/(3 · 2²): una potenza di 2 e un fattore diverso da 2 e 5 → periodico misto, 0,91(6) (p. 89)."
    },

    {
      "q": "Se il divisore è 7, dopo al massimo quante divisioni il periodo si ripete?",
      "options": [
        "7",
        "6",
        "10",
        "Mai"
      ],
      "answer": 1,
      "explanation": "I resti possibili vanno da 1 a b − 1: con divisore 7 il periodo si ripete dopo al massimo 6 divisioni (box «Quanto è lungo il periodo?», p. 88)."
    },

    {
      "q": "Nella frazione generatrice di un numero periodico, il denominatore è formato da:",
      "options": [
        "Tanti 9 quante sono le cifre del periodo, seguiti da tanti 0 quante sono le cifre dell'antiperiodo",
        "Tanti 0 quante sono le cifre del periodo",
        "Tanti 9 quante sono le cifre dell'antiperiodo",
        "Sempre 99"
      ],
      "answer": 0,
      "explanation": "Regola di p. 89. Esempio del libro: 0,25(8) = (258 − 25)/900 = 233/900: periodo 8 (una cifra → un 9), antiperiodo 25 (due cifre → due 0). Altro esempio della stessa pagina: 4,(52) = (452 − 4)/99 = 448/99, due cifre di periodo → due 9."
    },

    {
      "q": "A quale numero è uguale 7,(9) (cioè 7,999…)?",
      "options": [
        "7",
        "7,9",
        "8",
        "79/9"
      ],
      "answer": 2,
      "explanation": "7,(9) = (79 − 7)/9 = 72/9 = 8. In generale a,(9) = a + 1 (p. 89)."
    },

    {
      "q": "Che cos'è una proporzione?",
      "options": [
        "Un'uguaglianza fra due rapporti",
        "Il quoziente fra due numeri",
        "La somma di due frazioni",
        "Una frazione con denominatore 100"
      ],
      "answer": 0,
      "explanation": "Il quoziente fra due numeri si chiama rapporto; una proporzione è un'uguaglianza fra due rapporti (p. 90)."
    },

    {
      "q": "Nella proporzione 2 : 3 = 10 : 15, quali sono gli estremi?",
      "options": [
        "3 e 10",
        "2 e 10",
        "2 e 15",
        "3 e 15"
      ],
      "answer": 2,
      "explanation": "Estremi: 2 e 15; medi: 3 e 10; antecedenti: 2 e 10; conseguenti: 3 e 15 (figura di p. 90)."
    },

    {
      "q": "Che cosa dice la proprietà fondamentale delle proporzioni?",
      "options": [
        "Il prodotto degli estremi è uguale al prodotto dei medi",
        "La somma degli estremi è uguale alla somma dei medi",
        "Gli antecedenti sono uguali",
        "Il prodotto degli antecedenti è uguale al prodotto dei conseguenti"
      ],
      "answer": 0,
      "explanation": "a : b = c : d ↔ a · d = b · c (p. 90)."
    },

    {
      "q": "Da 12 : 8 = 6 : 4, quale proporzione si ottiene con la proprietà dell'invertire?",
      "options": [
        "12 : 6 = 8 : 4",
        "4 : 8 = 6 : 12",
        "8 : 12 = 4 : 6",
        "20 : 12 = 10 : 6"
      ],
      "answer": 2,
      "explanation": "Invertire: b : a = d : c, cioè 8 : 12 = 4 : 6. 12 : 6 = 8 : 4 è il permutare dei medi, 4 : 8 = 6 : 12 il permutare degli estremi (tabella, p. 91)."
    },

    {
      "q": "Che cosa significa 2‰?",
      "options": [
        "2/10",
        "2/100",
        "2/1000",
        "1/2"
      ],
      "answer": 2,
      "explanation": "2‰ si legge «due per mille» e significa 2/1000 (p. 91)."
    },

    {
      "q": "Con l'IVA al 22%, se ti scontano l'IVA, di quanto è lo sconto in percentuale rispetto al prezzo con l'IVA?",
      "options": [
        "Del 22%",
        "Di circa il 18%",
        "Del 50%",
        "Del 12%"
      ],
      "answer": 1,
      "explanation": "Esempio di p. 92: 110 € di sconto su 610 € sono circa il 18%. È sbagliato credere che sia il 22%."
    },

    {
      "q": "Come si dimostra, nel libro, che √2 non è un numero razionale?",
      "options": [
        "Calcolando tutte le sue cifre",
        "Per assurdo: si suppone che sia a/b ridotta ai minimi termini e si arriva a una contraddizione",
        "Disegnando un triangolo equilatero",
        "Mostrando che 2 è pari"
      ],
      "answer": 1,
      "explanation": "Supponendo √2 = a/b ridotta ai minimi termini, risultano pari sia a sia b: contraddizione. Quindi √2 non è razionale (p. 93)."
    },

    {
      "q": "A quali numeri decimali corrispondono i numeri irrazionali?",
      "options": [
        "Ai decimali finiti",
        "Ai decimali periodici semplici",
        "Ai decimali con infinite cifre decimali e non periodici",
        "Ai numeri interi"
      ],
      "answer": 2,
      "explanation": "I numeri irrazionali sono infiniti e corrispondono ai numeri decimali con infinite cifre decimali e non periodici (p. 93)."
    },

    {
      "q": "Quale di questi numeri è irrazionale?",
      "options": [
        "7/15",
        "√5",
        "1,(27)",
        "4,26"
      ],
      "answer": 1,
      "explanation": "Le radici quadrate di numeri naturali che non sono quadrati perfetti sono irrazionali: √5 = 2,236… (p. 93). Gli altri sono razionali: periodici o finiti."
    },

    {
      "q": "Che cos'è π secondo il libro?",
      "options": [
        "Il rapporto fra le misure di una circonferenza e del suo diametro",
        "Il rapporto fra diametro e raggio",
        "Un numero razionale uguale a 3,14",
        "Il rapporto fra l'area e il raggio"
      ],
      "answer": 0,
      "explanation": "π = 3,141… è il rapporto fra le misure di una circonferenza e del suo diametro; è irrazionale (p. 93)."
    },

    {
      "q": "Quale affermazione sulla retta orientata è corretta?",
      "options": [
        "A ogni punto della retta corrisponde un numero razionale",
        "A ogni punto della retta corrisponde un numero reale e viceversa",
        "I numeri irrazionali non si possono rappresentare sulla retta",
        "A ogni numero reale corrispondono due punti"
      ],
      "answer": 1,
      "explanation": "A ogni punto corrisponde un numero reale e viceversa; a ogni razionale corrisponde un punto, ma non vale il viceversa (p. 94). √2 si riporta con il compasso (p. 93)."
    },

    {
      "q": "Rispetto a un numero v, quando un numero a è un'approssimazione per eccesso?",
      "options": [
        "Quando a < v",
        "Quando a > v",
        "Quando a = v",
        "Quando a è intero"
      ],
      "answer": 1,
      "explanation": "Per difetto se a < v, per eccesso se a > v. Esempio: √5 = 2,2360… è approssimato per eccesso da 2,24 (p. 94)."
    },

    {
      "q": "Nell'arrotondamento, se la prima cifra che trascuriamo è maggiore o uguale a 5:",
      "options": [
        "Confermiamo l'ultima cifra",
        "Approssimiamo per eccesso, aumentando di 1 l'ultima cifra considerata",
        "Togliamo 1 all'ultima cifra",
        "Aggiungiamo uno 0"
      ],
      "answer": 1,
      "explanation": "Se la prima cifra trascurata è ≥ 5 si approssima per eccesso; se è < 5 per difetto, confermando l'ultima cifra (p. 94)."
    },

    {
      "q": "Come approssimazioni, perché 3,70 dice più di 3,7?",
      "options": [
        "Perché è un numero più grande",
        "Perché lo 0 dei centesimi comunica che la cifra 7 dei decimi è certa",
        "Perché ha l'errore assoluto maggiore",
        "Non c'è nessuna differenza"
      ],
      "answer": 1,
      "explanation": "Aritmeticamente sono uguali, ma come approssimazione lo 0 in 3,70 comunica che la cifra 7 dei decimi è certa (box di p. 94)."
    },

    {
      "q": "Come si calcola l'errore relativo e di un'approssimazione a di v?",
      "options": [
        "e = |v − a|",
        "e = E / |a|",
        "e = |a| / E",
        "e = E · 100"
      ],
      "answer": 1,
      "explanation": "Errore relativo: rapporto fra errore assoluto E e valore assoluto di a, e = E/|a|. L'errore relativo percentuale è e · 100% (p. 95)."
    },

    {
      "q": "Quale di questi numeri NON è scritto in notazione scientifica?",
      "options": [
        "2,6 · 10⁻³",
        "5,4 · 10¹²",
        "41 · 10⁻³",
        "1,67 · 10⁻²⁷"
      ],
      "answer": 2,
      "explanation": "Il coefficiente d deve essere 1 ≤ d < 10: 41 > 10. Lo stesso vale per 0,6 · 10² (0,6 < 1) (p. 95)."
    },

    {
      "q": "Per scrivere un numero in notazione scientifica sposti la virgola di n posti verso destra. Che potenza di 10 usi?",
      "options": [
        "10ⁿ",
        "10⁻ⁿ",
        "10ⁿ⁺¹",
        "10⁰"
      ],
      "answer": 1,
      "explanation": "Virgola a sinistra di n posti → 10ⁿ; a destra → 10⁻ⁿ. Esempio: 0,000038 = 3,8 · 10⁻⁵ (p. 95)."
    },

    {
      "q": "Qual è l'ordine di grandezza di 5,9 · 10⁷?",
      "options": [
        "10⁶",
        "10⁷",
        "10⁸",
        "10⁵"
      ],
      "answer": 2,
      "explanation": "Se 5 ≤ d < 10 l'ordine di grandezza è 10ⁿ⁺¹ (regola di p. 95): 5,9 · 10⁷ → 10⁸ (tabella di p. 96)."
    },

    {
      "q": "Di quanti ordini di grandezza differiscono 2,4 · 10⁵ e 1,7 · 10²?",
      "options": [
        "Due",
        "Tre",
        "Cinque",
        "Sette"
      ],
      "answer": 1,
      "explanation": "Si confrontano gli ordini di grandezza: 10⁵/10² = 10³, cioè tre ordini di grandezza (p. 96)."
    },

    {
      "q": "Nel programma Python del libro, che cosa restituisce perc(2,8)?",
      "options": [
        "4",
        "16",
        "25",
        "0,25"
      ],
      "answer": 2,
      "explanation": "perc(a,b) restituisce la percentuale di a rispetto a b: (2/8)·100 = 25 (commenti al codice, p. 96)."
    }

  ]
};
