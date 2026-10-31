// ============================================================
//  data/fisica/matematica-per-cominciare.js  (v1)
//  Unità 0 — La matematica per cominciare (pagg. 1-21)
//
//  Risposta da scrivere (numeri e problemi a passi), senza timer.
//  Quelli con «p. N, n. M» vengono dal libro; «come p. N» sono creati sul modello
//  del libro. Dove il libro non stampa il risultato, il calcolo è nostro.
//  Esclusi dalla verifica: §0.5 (p. 12) e §0.10 (p. 22).
//  Fonte: foto del libro di fisica, ottobre 2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["matematica-per-cominciare"] = {

  id:              "matematica-per-cominciare",
  subject:         "fisica",
  title:           "Unità 0 — La matematica per cominciare: scrivi i risultati",
  description:     "Proporzioni, percentuali, potenze di 10, formule, proporzionalità · risposta da scrivere",
  icon:            "🧮",
  version:         1,
  timePerQuestion: 0,

  questions: [

    // ── Proporzioni, p. 1 e 3 ─────────────────────
    { type:"numeric", q:"Risolvi la proporzione 3 : 20 = 4,5 : x", answer:30, tolerance:0.001, explanation:"x è un estremo: prodotto dei medi diviso l'estremo noto. x = 20 · 4,5 / 3 = 30 (p. 3, n. 1a)." },
    { type:"numeric", q:"Risolvi la proporzione 36 : x = 5 : 15", answer:108, tolerance:0.001, explanation:"x è un medio: prodotto degli estremi diviso il medio noto. x = 36 · 15 / 5 = 108 (p. 3, n. 1b)." },
    { type:"numeric", q:"Risolvi la proporzione 360 : 18 = x : 4", answer:80, tolerance:0.001, explanation:"x è un medio: x = 360 · 4 / 18 = 80 (p. 3, n. 1c)." },
    { type:"numeric", q:"Risolvi la proporzione x : 30 = 10 : 50", answer:6, tolerance:0.001, explanation:"x è un estremo: x = 30 · 10 / 50 = 6 (p. 3, n. 1d)." },
    { type:"numeric", q:"Una mappa ha scala 1:200. La larghezza di una stanza sulla mappa è 2,5 cm. Quanto è larga la stanza?", answer:5, unit:"m", tolerance:0.001, explanation:"1 cm : 200 cm = 2,5 cm : x, quindi x = 500 cm = 5 m (p. 1, Esempio 1)." },
    { type:"numeric", q:"Per un dolce per 4 persone servono 150 g di zucchero. Quanto zucchero serve per 6 persone?", answer:225, unit:"g", tolerance:0.001, explanation:"150 : 4 = x : 6, quindi x = 150 · 6 / 4 = 225 g (p. 3, n. 2)." },
    { type:"numeric", q:"Tra il 2000 e il 2020 il livello medio dei mari si è alzato di 6,8 cm. Di quanto si alzerà tra il 2020 e il 2050, allo stesso ritmo?", answer:10.2, unit:"cm", tolerance:0.001, explanation:"6,8 : 20 = x : 30, quindi x = 10,2 cm (p. 3, n. 3)." },
    { type:"numeric", q:"Inviti 12 persone e ordini 8 pizze. Quante pizze in più servono se si aggiungono 3 persone?", answer:2, unit:"pizze", tolerance:0.001, explanation:"8 : 12 = x : 3, quindi x = 2 (p. 3, n. 4)." },
    { type:"numeric", q:"Un romanzo ha 250 pagine. Hai letto le prime 150 in 9 giorni. Tra quanti giorni lo finisci, allo stesso ritmo?", answer:6, unit:"giorni", tolerance:0.001, explanation:"Restano 100 pagine: 150 : 9 = 100 : x, quindi x = 6 (p. 3, n. 5)." },
    { type:"numeric", q:"In una mappa 1 cm corrisponde a 2 km. Il municipio dista 1,5 km dalla piscina. A quale distanza si trovano sulla cartina?", answer:0.75, unit:"cm", tolerance:0.001, explanation:"1 : 2 = x : 1,5, quindi x = 0,75 cm (p. 3, n. 6)." },

    // ── Percentuali, p. 2 e 3 ─────────────────────
    { type:"numeric", q:"Quanto è il 3% di 500?", answer:15, tolerance:0.001, explanation:"3 / 100 · 500 = 15 (p. 3, n. 9)." },
    { type:"numeric", q:"Quanto è il 30% di 170?", answer:51, tolerance:0.001, explanation:"30 / 100 · 170 = 51 (p. 3, n. 10)." },
    { type:"numeric", q:"A quale percentuale equivale la frazione 48/60?", answer:80, unit:"%", tolerance:0.001, explanation:"48 / 60 = 0,8 = 80 / 100, cioè 80% (p. 3, n. 14)." },
    { type:"numeric", q:"Se l'8% di un numero è 1846, qual è il numero?", answer:23075, tolerance:0.0001, answerText:"23 075", explanation:"1846 · 100 / 8 = 23 075 (p. 3, n. 15)." },
    { type:"numeric", q:"50 g di albicocche contengono circa 4,6 g di zuccheri. Qual è la quantità di zucchero in percentuale?", answer:9.2, unit:"%", tolerance:0.001, explanation:"4,6 / 50 · 100 = 9,2% (p. 3, n. 16)." },
    { type:"numeric", q:"Calcola il 50% di 16 e il 16% di 50. Quanto valgono?", answer:8, tolerance:0.001, explanation:"Sono uguali: 50 · 16 / 100 = 8 e 16 · 50 / 100 = 8 (p. 3, n. 17)." },
    { type:"numeric", q:"Il prezzo di un giaccone che costava 275 € è diminuito del 20%. Quanto costa il giaccone?", answer:220, unit:"€", tolerance:0.001, explanation:"275 · 80 / 100 = 220 € (p. 3, n. 19)." },
    { type:"numeric", q:"Un appartamento costa 300 mila €. Il prezzo scende del 15% e poi di un ulteriore 10%. A quale prezzo viene venduto?", answer:229500, unit:"€", tolerance:0.0001, answerText:"229 500 €", explanation:"300 000 · 0,85 = 255 000; 255 000 · 0,90 = 229 500 € (p. 3, n. 20)." },
    { type:"numeric", q:"Una grandezza passa da 40 a 50. Qual è la variazione percentuale?", answer:25, unit:"%", tolerance:0.001, explanation:"ΔG = 50 − 40 = 10; ΔG% = 10 · 100 / 40 = 25%, sempre rispetto al valore iniziale (come p. 2)." },

    // ── Potenze di 10, p. 4 e 5 ───────────────────
    { type:"numeric", sci:true, q:"Scrivi il risultato in potenza di 10: 10² · 10³ · 10⁻²", answer:1e3, tolerance:1e-9, answerText:"10³", explanation:"Si sommano gli esponenti: 2 + 3 − 2 = 3 (p. 5, n. 8a). Si scrive 10^3." },
    { type:"numeric", sci:true, q:"Scrivi il risultato in potenza di 10: 10⁻² · 10⁻³ · 10⁵", answer:1, tolerance:1e-9, answerText:"10⁰", explanation:"−2 − 3 + 5 = 0, e 10⁰ = 1 (p. 5, n. 8b). Si scrive 10^0." },
    { type:"numeric", sci:true, q:"Scrivi il risultato in potenza di 10: (10⁻³ · 10⁵) / 10⁶", answer:1e-4, tolerance:1e-9, answerText:"10⁻⁴", explanation:"−3 + 5 − 6 = −4 (p. 5, n. 8c)." },
    { type:"numeric", sci:true, q:"Scrivi il risultato in potenza di 10: (10³ · 10²) / 10⁻²", answer:1e7, tolerance:1e-9, answerText:"10⁷", explanation:"3 + 2 − (−2) = 7 (p. 5, n. 8d)." },
    { type:"numeric", sci:true, q:"Scrivi il risultato in potenza di 10: (10⁻³ · 10⁻⁵) / 10⁻¹²", answer:1e4, tolerance:1e-9, answerText:"10⁴", explanation:"−3 − 5 − (−12) = 4 (p. 5, n. 8e)." },
    { type:"numeric", sci:true, q:"Scrivi il risultato in potenza di 10: (10³ · 10⁻²) / (10² · 10³)", answer:1e-4, tolerance:1e-9, answerText:"10⁻⁴", explanation:"Numeratore 10¹, denominatore 10⁵: 1 − 5 = −4 (p. 5, n. 9a)." },
    { type:"numeric", sci:true, q:"Scrivi il risultato in potenza di 10: (10⁻³ · 10⁻²) / (10⁵ · 10⁻³)", answer:1e-7, tolerance:1e-9, answerText:"10⁻⁷", explanation:"Numeratore 10⁻⁵, denominatore 10²: −5 − 2 = −7 (p. 5, n. 9b)." },
    { type:"numeric", sci:true, q:"Scrivi il risultato in potenza di 10: 1 / (10² · 10³)", answer:1e-5, tolerance:1e-9, answerText:"10⁻⁵", explanation:"Denominatore 10⁵, quindi 10⁻⁵ (p. 5, n. 9c)." },
    { type:"numeric", sci:true, q:"Scrivi il risultato in potenza di 10: (10⁻⁴ · 10⁻²) / (10⁻² · 10⁻³)", answer:1e-1, tolerance:1e-9, answerText:"10⁻¹", explanation:"Numeratore 10⁻⁶, denominatore 10⁻⁵: −6 − (−5) = −1 (p. 5, n. 9d)." },
    { type:"numeric", sci:true, q:"Scrivi il risultato in potenza di 10: 10³ / (10¹² · 10⁻⁹)", answer:1, tolerance:1e-9, answerText:"10⁰", explanation:"Denominatore 10³: 3 − 3 = 0 (p. 5, n. 9e). Si scrive 10^0." },
    { type:"numeric", sci:true, q:"Calcola 15·10⁵ + 3·10⁴ e scrivi il risultato in notazione scientifica.", answer:1.53e6, tolerance:0.001, answerText:"1,53·10⁶", explanation:"Le proprietà delle potenze non valgono per la somma: si raccoglie a fattor comune. 150·10⁴ + 3·10⁴ = 153·10⁴ = 1,53·10⁶ (p. 4)." },

    // ── Equazioni e formule, p. 6-11 ──────────────
    { type:"numeric", q:"Risolvi l'equazione 3x = 10 + x", answer:5, tolerance:0.001, explanation:"Primo principio: 2x = 10. Secondo principio: x = 5 (p. 8)." },
    { type:"numeric", q:"Calcola la circonferenza C = 2πr con r = 5,3 cm (π = 3,14).", answer:33.3, unit:"cm", tolerance:0.005, explanation:"2 · 3,14 · 5,3 cm = 33,3 cm (p. 7, n. 1)." },
    { type:"numeric", q:"Calcola il volume del cono V = ⅓πr²h con r = 5 cm e h = 10 cm (π = 3,14).", answer:262, unit:"cm³", tolerance:0.005, explanation:"⅓ · 3,14 · 25 · 10 = 262 cm³ (p. 7, n. 2)." },
    { type:"numeric", q:"Due corpi A e B hanno lo stesso volume, con massa A doppia di massa B. Se A ha densità 6 g/cm³, qual è la densità di B?", answer:3, unit:"g/cm³", tolerance:0.001, explanation:"A parità di volume la densità è direttamente proporzionale alla massa: metà massa, metà densità (p. 7, n. 5)." },
    { type:"numeric", q:"Due corpi A e B hanno la stessa massa, con volume di A doppio di quello di B. Se A ha densità 4 g/cm³, qual è la densità di B?", answer:8, unit:"g/cm³", tolerance:0.001, explanation:"A parità di massa la densità è inversamente proporzionale al volume: metà volume, doppia densità (p. 7, n. 6)." },
    { type:"numeric", q:"Dalla formula A = b·h/2 ricava h con A = 20 cm² e b = 8 cm.", answer:5, unit:"cm", tolerance:0.001, explanation:"h = 2A/b = 40 / 8 = 5 cm (come p. 9)." },
    { type:"steps", q:"Un cilindro ha volume V = 1500 cm³ e altezza h = 20 cm. Ricava il raggio da V = πr²h (π = 3,14).",
      steps:[ {q:"Quanto vale r²? Dividi V per πh.", answer:23.9, unit:"cm²", answerText:"23,9 cm²", tolerance:0.005, explanation:"r² = 1500 / (3,14 · 20) = 23,9 cm²."},
              {q:"Quanto vale r?", answer:4.9, unit:"cm", answerText:"4,9 cm", tolerance:0.01, explanation:"r = √23,9 = 4,9 cm."} ],
      explanation:"Si divide per πh e poi si estrae la radice quadrata (p. 10, Esempio 6)." },

    // ── Proporzionalità, p. 16-21 ─────────────────
    { type:"numeric", q:"Quanto vale la costante di proporzionalità tra circonferenza e raggio? Scrivi il valore con π = 3,14.", answer:6.28, tolerance:0.005, explanation:"C = 2πr, quindi C/r = 2π = 6,28 (p. 17, n. 1)." },
    { type:"numeric", q:"Triangoli isosceli con base b = 2 m: quanto vale la costante di proporzionalità tra area e altezza?", answer:1, unit:"m", tolerance:0.001, explanation:"A = bh/2 = (1 m) · h (p. 17, n. 2)." },
    { type:"numeric", q:"Quanto vale la costante di proporzionalità tra perimetro e lato del quadrato?", answer:4, tolerance:0.001, explanation:"P = 4l (p. 17, n. 3)." },
    { type:"numeric", q:"Una retta passa per i punti (1; 3) e (3; 7). Quanto vale il coefficiente angolare?", answer:2, tolerance:0.001, explanation:"k = (7 − 3) / (3 − 1) = 2 (come p. 18)." },
    { type:"numeric", q:"Nel serbatoio V = (0,5 L/s)t + 10 L. Quanti litri ci sono dopo 20 s?", answer:20, unit:"L", tolerance:0.001, explanation:"0,5 · 20 + 10 = 20 L (come p. 18)." },
    { type:"numeric", q:"Nella retta y = x + 2, qual è l'ordinata del punto in cui la retta interseca l'asse y?", answer:2, tolerance:0.001, explanation:"È il termine q: la retta interseca l'asse y in (0, 2) (p. 18)." },
    { type:"numeric", q:"Nella relazione xy = 3, quanto vale la costante di proporzionalità?", answer:3, tolerance:0.001, explanation:"La relazione ha la forma xy = k, quindi k = 3 (p. 20, n. 2)." },
    { type:"numeric", q:"Si versano 200 mL di alcol in un cilindro con area di base 25 cm². Quale altezza raggiunge? (1 mL = 1 cm³)", answer:8, unit:"cm", tolerance:0.001, explanation:"h = V/A = 200 / 25 = 8 cm (p. 20, Esempio 11)." },
    { type:"steps", q:"Rettangoli di base b e altezza h con area A = 20 cm².",
      steps:[ {q:"Quanto vale la costante di proporzionalità?", answer:20, unit:"cm²", answerText:"20 cm²", tolerance:0.001, explanation:"bh = 20 cm²: il prodotto è costante."},
              {q:"Quanto vale h se b = 4 cm?", answer:5, unit:"cm", answerText:"5 cm", tolerance:0.001, explanation:"h = 20 / 4 = 5 cm."} ],
      explanation:"Base e altezza sono inversamente proporzionali (p. 20, n. 4)." },
    { type:"steps", q:"Serie n e flessioni f per serie: 5 → 24, 10 → 12, 20 → 6, 30 → 4, 40 → 3.",
      steps:[ {q:"Quanto vale il prodotto nf?", answer:120, tolerance:0.001, explanation:"5 · 24 = 120, sempre uguale."},
              {q:"Con f = 8, quante serie servono?", answer:15, unit:"serie", answerText:"15 serie", tolerance:0.001, explanation:"n = 120 / 8 = 15."} ],
      explanation:"Il libro nel testo dice 200 flessioni, ma tabella e risultato danno 120 (p. 21, n. 9)." },
    { q:"Dolci preparati: 10 min → 15, 20 min → 13, 30 min → 11, 40 min → 9, 50 min → 8. È proporzionalità inversa?", options:["No: il prodotto non è costante","Sì: il prodotto è costante","Sì: il rapporto è costante","No: il rapporto è costante"], answer:0, explanation:"10 · 15 = 150 e 20 · 13 = 260: il prodotto cambia (p. 21, n. 7)." }

  ]
};
