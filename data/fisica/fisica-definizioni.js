// ============================================================
//  data/fisica/fisica-definizioni.js  (v1)
//  Unità 0 e Cap. 1 — Definizioni da ripetere a memoria (pagg. 1-34)
//
//  type:"define": Pietro scrive la definizione; il motore controlla le parole chiave.
//  keys = gruppi di parole o radici: serve almeno una voce per ogni gruppo.
//  answerText = definizione in forma breve con i termini del libro.
//  Fonte: foto del libro di fisica, ottobre 2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["fisica-definizioni"] = {

  id:              "fisica-definizioni",
  subject:         "fisica",
  title:           "Unità 0 e Cap. 1 — Definizioni: ripetile a memoria",
  description:     "40 definizioni da scrivere: se manca un concetto, la leggi e la riscrivi a memoria",
  icon:            "🧠",
  version:         1,
  timePerQuestion: 0,

  questions: [

    // ── La matematica per cominciare ──────────────
    { type:"define", q:"Che cos'è una proporzione? Quale proprietà ha?", keys:[["uguaglianza"],["rapport"],["prodott"],["medi"],["estrem"]], answerText:"Uguaglianza tra rapporti. Il prodotto dei medi è uguale al prodotto degli estremi.", explanation:"p. 1." },
    { type:"define", q:"Che cos'è la percentuale?", keys:[["rapport"],["denominatore"],["100","cento"]], answerText:"Rapporto con denominatore 100, si indica con %.", explanation:"p. 2." },
    { type:"define", q:"Come si calcola la variazione percentuale?", keys:[["final","gf"],["inizial","gi"],["100","cento"]], answerText:"ΔG è il valore finale meno il valore iniziale; ΔG% = ΔG·100 diviso il valore iniziale.", explanation:"p. 2." },
    { type:"define", q:"Che cos'è la potenza di 10 di grado n?", keys:[["base"],["grado","ordine","esponente"]], answerText:"L'espressione 10ⁿ, di base 10 e grado (o ordine) n.", explanation:"p. 4." },
    { type:"define", q:"Che cos'è una formula?", keys:[["uguaglianza"],["variabil"],["espression"]], answerText:"Uguaglianza tra una variabile e un'espressione con una o più variabili.", explanation:"p. 6." },
    { type:"define", q:"Che cos'è un'equazione? Come si chiamano le due parti?", keys:[["uguaglianza"],["espression"],["particolar"],["incognita"],["primo membro"],["secondo membro"]], answerText:"Uguaglianza tra due espressioni, valida solo per particolari valori dell'incognita. A sinistra il primo membro, a destra il secondo membro.", explanation:"p. 8." },
    { type:"define", q:"Che cos'è la soluzione di un'equazione?", keys:[["valore"],["incognita"],["vera","vero","verific","soddisf"]], answerText:"Il valore dell'incognita che rende vera l'uguaglianza.", explanation:"p. 8." },
    { type:"define", q:"Quando due equazioni sono equivalenti?", keys:[["stessa soluzione","stesse soluzioni","uguale soluzione"]], answerText:"Quando hanno la stessa soluzione.", explanation:"p. 8." },
    { type:"define", q:"Che cosa dice il primo principio di equivalenza?", keys:[["somm"],["sottra"],["stesso","stessa"],["entrambi","ambo","due membri"],["equivalent"]], answerText:"Sommando o sottraendo uno stesso numero o una stessa espressione a entrambi i membri si ottiene un'equazione equivalente.", explanation:"p. 8." },
    { type:"define", q:"Che cosa dice il secondo principio di equivalenza?", keys:[["moltiplic"],["divid"],["stesso","stessa"],["entrambi","ambo","due membri"],["divers"],["zero"],["equivalent"]], answerText:"Moltiplicando o dividendo entrambi i membri per uno stesso numero o una stessa espressione diversi da zero si ottiene un'equazione equivalente.", explanation:"p. 8." },
    { type:"define", q:"Che cosa rappresenta un grafico cartesiano? Che cosa si ottiene da una tabella e da una formula?", keys:[["corrispondenza"],["variabil"],["tabella"],["punti"],["formula"],["linea"]], answerText:"Rappresenta la corrispondenza tra due variabili. Da una tabella: un insieme di punti. Da una formula: di solito una linea continua.", explanation:"p. 14." },
    { type:"define", q:"Che cosa sono l'asse delle ascisse e l'asse delle ordinate?", keys:[["ascisse"],["orizzontal"],["indipendent"],["ordinate"],["vertical"],["dipendent"]], answerText:"Ascisse: asse orizzontale, variabile indipendente. Ordinate: asse verticale, variabile dipendente.", explanation:"p. 14." },
    { type:"define", q:"Quando due grandezze sono direttamente proporzionali? Com'è il grafico?", keys:[["rapport"],["costant"],["retta"],["origine"]], answerText:"Quando il loro rapporto è costante: y/x = k, cioè y = kx. Il grafico è una retta che passa per l'origine.", explanation:"p. 16." },
    { type:"define", q:"Che cos'è il coefficiente angolare di una retta?", keys:[["rapport"],["differenz"],["ordinate"],["ascisse"],["pendenza","ripid"]], answerText:"Il rapporto tra la differenza delle ordinate e la differenza delle ascisse di due punti della retta. Ne indica la pendenza.", explanation:"pp. 16 e 18." },
    { type:"define", q:"Quando due grandezze sono linearmente dipendenti? Com'è il grafico?", keys:[["varia"],["kx"],["costant"],["retta"],["non passa"],["origine"]], answerText:"Quando, al variare di una, l'altra varia secondo y = kx + q, con k e q costanti. Il grafico è una retta che non passa per l'origine.", explanation:"p. 18." },
    { type:"define", q:"Che cos'è l'ordinata all'origine?", keys:[["ordinata"],["punto"],["intersez","interseca"],["asse y"]], answerText:"Il termine q: l'ordinata del punto di intersezione della retta con l'asse y.", explanation:"p. 18." },
    { type:"define", q:"Quando due grandezze sono inversamente proporzionali? Com'è il grafico?", keys:[["prodott"],["costant"],["iperbole"]], answerText:"Quando il loro prodotto è costante: xy = k, cioè y = k/x. Il grafico è un arco di iperbole equilatera.", explanation:"p. 20." },

    // ── Le grandezze fisiche ──────────────────────
    { type:"define", q:"Che cosa descrivono le leggi fisiche? Perché una legge è una generalizzazione?", keys:[["fenomen"],["linguaggio matematic","matematic"],["tutti"],["stesso tipo"]], answerText:"Descrivono i fenomeni naturali tramite il linguaggio matematico. Una legge è una generalizzazione perché vale per tutti i fenomeni dello stesso tipo.", explanation:"p. 23." },
    { type:"define", q:"Che cos'è una grandezza fisica?", keys:[["proprieta"],["corpo"],["fenomeno"],["misurat"],["strumento"]], answerText:"Una proprietà di un corpo o di un fenomeno che può essere misurata con uno strumento.", explanation:"p. 24." },
    { type:"define", q:"Che cos'è l'unità di misura?", keys:[["grandezza"],["riferimento"],["valore"],["1","uno"]], answerText:"La grandezza di riferimento a cui si assegna il valore numerico 1.", explanation:"p. 25." },
    { type:"define", q:"Che cosa significa eseguire una misura?", keys:[["quante volte"],["unita"],["contenuta","contiene"],["grandezza"]], answerText:"Stabilire quante volte l'unità fissata è contenuta nella grandezza.", explanation:"p. 25." },
    { type:"define", q:"Che cos'è la definizione operativa? Quali sono i tre passi?", keys:[["procedura"],["oggettiv"],["dipend","indipendent"],["campione"],["confront"],["esprim"]], answerText:"Stabilisce una procedura per misurare in modo oggettivo, che non dipende da chi misura: si sceglie un campione, si confronta, si esprime la misura con il numero n e l'unità.", explanation:"p. 25." },
    { type:"define", q:"Che cos'è una misura indiretta?", keys:[["calcolo"],["misure"],["grandezz"],["collegat"]], answerText:"Una misura che usa un calcolo basato sulle misure di grandezze fisiche collegate.", explanation:"p. 25." },
    { type:"define", q:"Che cosa stabilisce il Sistema Internazionale (SI)?", keys:[["sette","7"],["grandezz"],["fondamental"],["unita"]], answerText:"Stabilisce sette grandezze fisiche fondamentali e ne fissa le unità di misura.", explanation:"p. 25." },
    { type:"define", q:"Che cosa sono le unità fondamentali?", keys:[["unita"],["grandezze fondamentali"],["altre"],["formul"]], answerText:"Le unità delle grandezze fondamentali: da queste si ottengono le unità di tutte le altre grandezze con formule matematiche.", explanation:"p. 25." },
    { type:"define", q:"Che cosa sono i multipli e i sottomultipli?", keys:[["unita"],["prefisso"],["potenz"]], answerText:"Unità indicate da un prefisso secondo le potenze di 10.", explanation:"p. 26." },
    { type:"define", q:"Com'è scritto un numero in notazione scientifica?", keys:[["prodotto"],["coefficiente"],["maggiore"],["uguale"],["1","uno"],["minore"],["10","dieci"],["potenza"]], answerText:"È il prodotto di un coefficiente, maggiore o uguale a 1 e minore di 10, e di una potenza di 10.", explanation:"p. 27." },
    { type:"define", q:"Come si approssima il valore di una misura?", keys:[["cifra"],["trascurare"],["maggiore"],["5","cinque"],["aument"],["eccesso"],["minore"],["stessa","uguale"],["difetto"]], answerText:"Se la prima cifra da trascurare è maggiore o uguale a 5, la precedente aumenta di 1 (per eccesso). Se è minore di 5, la precedente resta la stessa (per difetto).", explanation:"p. 27." },
    { type:"define", q:"Che cos'è l'ordine di grandezza? Da che cosa dipende?", keys:[["potenza"],["10","dieci"],["approssima"],["valore"],["unita"]], answerText:"La potenza di 10 che meglio approssima il valore della misura. Dipende dall'unità scelta.", explanation:"p. 28." },
    { type:"define", q:"Che cos'è un fenomeno periodico?", keys:[["ripet"],["uguale","uguali"]], answerText:"Un fenomeno che si ripete sempre uguale a se stesso.", explanation:"p. 29." },
    { type:"define", q:"In che cosa consiste la misura di un intervallo di tempo?", keys:[["conta"],["quante volte"],["durata"],["periodic"],["ripet"]], answerText:"Nel contare quante volte la durata di un fenomeno periodico si ripete durante quell'intervallo.", explanation:"p. 29." },
    { type:"define", q:"Com'è definito il secondo?", keys:[["intervallo"],["radiazione"],["cesio"],["9 192 631 770","9192631770"],["oscillazion"]], answerText:"L'intervallo di tempo impiegato da una particolare radiazione del cesio-133 per compiere 9 192 631 770 oscillazioni.", explanation:"p. 29." },
    { type:"define", q:"Com'è definito il metro?", keys:[["distanza"],["luce"],["vuoto"],["299 792 458","299792458"],["secondi"]], answerText:"La distanza percorsa dalla luce nel vuoto in 1/299 792 458 secondi.", explanation:"p. 30." },
    { type:"define", q:"Come si definisce la massa di un corpo?", keys:[["operativ"],["bilancia"],["bracci"],["stessa massa"],["equilibrio"]], answerText:"In modo operativo, con la bilancia a bracci uguali: due oggetti hanno la stessa massa se i piatti restano in equilibrio.", explanation:"p. 31." },
    { type:"define", q:"Com'è definito il kilogrammo?", keys:[["costanti"],["cesio"],["luce"],["planck"]], answerText:"Dalla combinazione di costanti fisiche: la radiazione Δν del cesio-133, la velocità c della luce nel vuoto, la costante di Planck h.", explanation:"p. 32." },
    { type:"define", q:"Che cosa sono le grandezze derivate?", keys:[["grandezze fondamentali"],["legg"],["fisica"]], answerText:"Grandezze definite a partire dalle grandezze fondamentali applicando le leggi della fisica.", explanation:"p. 32." },
    { type:"define", q:"Che cos'è il metro quadrato? Da che cosa è dato l'area di una superficie?", keys:[["area"],["quadrato"],["lato"],["1 m","1m","un metro"],["prodotto"],["due lunghezze"]], answerText:"L'area di un quadrato di lato 1 m. L'area di una superficie è il prodotto di due lunghezze.", explanation:"pp. 32-33." },
    { type:"define", q:"Che cos'è il metro cubo? Da che cosa è dato il volume?", keys:[["volume"],["cubo"],["lato"],["1 m","1m","un metro"],["prodotto"],["tre lunghezze"]], answerText:"Il volume di un cubo di lato 1 m. Il volume è il prodotto di tre lunghezze.", explanation:"p. 33." },
    { type:"define", q:"Che cos'è il litro? Appartiene al SI?", keys:[["decimetro cubo","dm3"],["non"]], answerText:"È uguale a un decimetro cubo: 1 L = 1 dm³ = 10⁻³ m³. Non appartiene al SI.", explanation:"p. 34." },
    { type:"define", q:"Che cos'è la densità? In che unità si misura nel SI?", keys:[["rapporto"],["massa"],["volume"],["kg m3","kilogrammi al metro cubo","chilogrammi al metro cubo"]], answerText:"Il rapporto tra massa e volume: d = m/V. Nel SI si misura in kg/m³.", explanation:"p. 34." }

  ]
};
