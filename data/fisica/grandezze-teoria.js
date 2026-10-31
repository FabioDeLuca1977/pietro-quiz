// ============================================================
//  data/fisica/grandezze-teoria.js  (v1)
//  Unità 0 e Cap. 1 — REGOLE (pagg. 1-37)
//
//  Risposta a parole (type:"text"), qualche numero e poche crocette.
//  Termini e definizioni sono quelli del libro, con la pagina nella spiegazione.
//  Fonte: foto del libro di fisica, ottobre 2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["grandezze-teoria"] = {

  id:              "grandezze-teoria",
  subject:         "fisica",
  title:           "Unità 0 e Cap. 1 — Regole: scrivi la parola giusta",
  description:     "Definizioni, unità del SI, prefissi, proporzionalità · risposta a parole",
  icon:            "✏️",
  version:         1,
  timePerQuestion: 0,

  questions: [

    // ── Grandezze e misura ────────────────────────
    { type:"text", q:"Le leggi fisiche descrivono i fenomeni naturali tramite il linguaggio…", accept:["matematico","linguaggio matematico","matematica"], answerText:"matematico", explanation:"p. 23." },
    { type:"text", q:"Una legge fisica non descrive un fenomeno singolo ma tutti quelli dello stesso tipo: è una…", accept:["generalizzazione","una generalizzazione"], answerText:"generalizzazione", explanation:"p. 23." },
    { type:"text", q:"Come si chiama la proprietà di un corpo o di un fenomeno che può essere misurata con uno strumento?", accept:["grandezza fisica","la grandezza fisica","grandezza"], answerText:"grandezza fisica", explanation:"p. 24." },
    { type:"text", q:"Come si chiama la grandezza di riferimento a cui si assegna il valore numerico 1?", accept:["unità di misura","l'unità di misura","unita di misura"], answerText:"unità di misura", explanation:"p. 25." },
    { type:"text", q:"Come si chiama la definizione che stabilisce una procedura per misurare in modo oggettivo?", accept:["definizione operativa","operativa"], answerText:"definizione operativa", explanation:"p. 25." },
    { type:"text", q:"La misura che usa un calcolo basato sulle misure di grandezze collegate è una misura…", accept:["indiretta","misura indiretta"], answerText:"indiretta", explanation:"Esempio: l'area della parete (p. 25)." },
    { type:"numeric", q:"Quante sono le grandezze fondamentali del SI?", answer:7, tolerance:0, explanation:"Tabella 1 (p. 25)." },
    { type:"text", q:"Area, volume e densità sono grandezze…", accept:["derivate","grandezze derivate"], answerText:"derivate", explanation:"Sono definite a partire dalle fondamentali, applicando le leggi della fisica (p. 32)." },

    // ── Unità del SI, tabella 1 ───────────────────
    { type:"text", q:"Unità del SI dell'intervallo di tempo:", accept:["secondo","il secondo","s"], answerText:"secondo (s)", explanation:"Tabella 1 (p. 25)." },
    { type:"text", q:"Unità del SI della lunghezza:", accept:["metro","il metro","m"], answerText:"metro (m)", explanation:"Tabella 1 (p. 25)." },
    { type:"text", q:"Unità del SI della massa:", accept:["kilogrammo","chilogrammo","il kilogrammo","il chilogrammo","kg"], answerText:"kilogrammo (kg)", explanation:"Tabella 1 (p. 25)." },
    { type:"text", q:"Unità del SI dell'intensità di corrente elettrica:", accept:["ampere","l'ampere","a"], answerText:"ampere (A)", explanation:"Tabella 1 (p. 25)." },
    { type:"text", q:"Unità del SI della temperatura:", accept:["kelvin","il kelvin","k"], answerText:"kelvin (K)", explanation:"Tabella 1 (p. 25)." },
    { type:"text", q:"Unità del SI dell'intensità luminosa:", accept:["candela","la candela","cd"], answerText:"candela (cd)", explanation:"Tabella 1 (p. 25)." },
    { type:"text", q:"Unità del SI della quantità di sostanza:", accept:["mole","la mole","mol"], answerText:"mole (mol)", explanation:"Tabella 1 (p. 25)." },

    // ── Prefissi, tabella 2 ───────────────────────
    { type:"text", q:"Quale prefisso vale 10¹²?", accept:["tera"], answerText:"tera", explanation:"Tabella 2 (p. 26)." },
    { type:"text", q:"Quale prefisso vale 10⁹?", accept:["giga"], answerText:"giga", explanation:"Tabella 2 (p. 26)." },
    { type:"text", q:"Quale prefisso vale 10⁶?", accept:["mega"], answerText:"mega", explanation:"Tabella 2 (p. 26)." },
    { type:"text", q:"Quale prefisso vale 10⁻³?", accept:["milli"], answerText:"milli", explanation:"Tabella 2 (p. 26)." },
    { type:"text", q:"Quale prefisso vale 10⁻⁶?", accept:["micro","µ","μ"], answerText:"micro (µ)", explanation:"Tabella 2 (p. 26)." },
    { type:"text", q:"Quale prefisso vale 10⁻⁹?", accept:["nano"], answerText:"nano", explanation:"Tabella 2 (p. 26)." },
    { type:"text", q:"Quale prefisso vale 10⁻¹²?", accept:["pico"], answerText:"pico", explanation:"Tabella 2 (p. 26)." },
    { type:"text", q:"Il prefisso d (10⁻¹) si chiama…", accept:["deci"], answerText:"deci", explanation:"Tabella 2 (p. 26)." },

    // ── Definizioni del SI ────────────────────────
    { type:"text", q:"Il secondo è definito dalle oscillazioni di una radiazione emessa da atomi di…", accept:["cesio","cesio-133","cesio 133"], answerText:"cesio-133", explanation:"9 192 631 770 oscillazioni (p. 29)." },
    { type:"numeric", q:"Il metro è la distanza percorsa dalla luce nel vuoto in 1/N secondi. Quanto vale N?", answer:299792458, tolerance:0, answerText:"299 792 458", explanation:"p. 30." },
    { type:"text", q:"Quale bilancia definisce operativamente la massa?", accept:["bilancia a bracci uguali","a bracci uguali","bracci uguali"], answerText:"bilancia a bracci uguali", explanation:"Due oggetti hanno la stessa massa se i piatti restano in equilibrio (p. 31)." },
    { type:"text", q:"Per misurare un tempo si conta quante volte si ripete un fenomeno…", accept:["periodico"], answerText:"periodico", explanation:"p. 29." },

    // ── Area, volume, densità ─────────────────────
    { type:"text", q:"Come si chiama il rapporto tra massa e volume?", accept:["densita","la densita","densità"], answerText:"densità", explanation:"d = m/V (p. 34)." },
    { type:"text", q:"Il litro è uguale a un…", accept:["decimetro cubo","dm3","dm cubo","un decimetro cubo"], answerText:"decimetro cubo", explanation:"Non appartiene al SI: 1 L = 1 dm³ (p. 34)." },
    { type:"numeric", q:"1 m² quanti dm² sono?", answer:100, unit:"dm²", tolerance:0, explanation:"p. 33." },
    { type:"numeric", q:"1 m³ quanti dm³ sono?", answer:1000, unit:"dm³", tolerance:0, explanation:"p. 34." },
    { type:"text", q:"A parità di massa, la densità è … proporzionale al volume.", accept:["inversamente"], answerText:"inversamente", explanation:"p. 34." },
    { type:"text", q:"A parità di volume, la densità è … proporzionale alla massa.", accept:["direttamente"], answerText:"direttamente", explanation:"p. 34." },

    // ── Matematica ────────────────────────────────
    { type:"text", q:"Una proporzione è un'uguaglianza tra…", accept:["rapporti","due rapporti"], answerText:"rapporti", explanation:"p. 1." },
    { type:"text", q:"In una proporzione il prodotto dei medi è uguale al prodotto degli…", accept:["estremi"], answerText:"estremi", explanation:"p. 1." },
    { type:"text", q:"La variazione percentuale si calcola sempre rispetto al valore…", accept:["iniziale"], answerText:"iniziale", explanation:"p. 2." },
    { type:"text", q:"Le proprietà delle potenze non valgono per la somma: lì serve il raccoglimento a…", accept:["fattor comune","fattore comune"], answerText:"fattor comune", explanation:"p. 4." },
    { type:"text", q:"L'asse delle ascisse rappresenta la variabile…", accept:["indipendente"], answerText:"indipendente", explanation:"Sulle ordinate c'è la dipendente (p. 14)." },
    { type:"text", q:"Il rapporto tra due grandezze è costante e il grafico è una retta per l'origine: è la proporzionalità…", accept:["diretta"], answerText:"diretta", explanation:"y = kx (p. 16)." },
    { type:"text", q:"Come si chiama k, che indica quanto è ripida la retta?", accept:["coefficiente angolare","il coefficiente angolare"], answerText:"coefficiente angolare", explanation:"pp. 16 e 18." },
    { type:"text", q:"In y = kx + q, come si chiama il termine q?", accept:["ordinata all'origine","ordinata allorigine","ordinata all origine"], answerText:"ordinata all'origine", explanation:"p. 18." },
    { type:"text", q:"Il prodotto tra due grandezze è costante: è la proporzionalità…", accept:["inversa"], answerText:"inversa", explanation:"xy = k (p. 20)." },
    { type:"text", q:"Come si chiama il grafico della proporzionalità inversa?", accept:["arco di iperbole equilatera","iperbole equilatera","iperbole","arco di iperbole"], answerText:"arco di iperbole equilatera", explanation:"p. 20." },

    // ── Poche crocette ────────────────────────────
    { q:"Quale numero è in notazione scientifica?", options:["64·10⁵","0,64·10⁷","6,4·10⁶","640·10⁴"], answer:2, explanation:"Coefficiente maggiore o uguale a 1 e minore di 10 (p. 27)." },
    { q:"Quale costante NON compare tra quelle che definiscono il kilogrammo?", options:["La velocità della luce c","La costante di Planck h","La frequenza Δν del cesio-133","Il raggio della Terra"], answer:3, explanation:"p. 32." },
    { q:"L'ordine di grandezza di una misura:", options:["dipende dall'unità scelta","è sempre lo stesso","dipende dallo strumento","vale solo per i metri"], answer:0, explanation:"p. 28." },
    { q:"Nel secondo principio di equivalenza, il numero per cui si moltiplica deve essere:", options:["positivo","diverso da zero","intero","maggiore di 1"], answer:1, explanation:"p. 8." }

  ]
};
