// ============================================================
//  data/fisica/fisica-giochi.js  (v1)
//  Unità 0 e Cap. 1 — Gioca: ordina e classifica (pagg. 1-37)
//  Fonte: foto del libro di fisica, ottobre 2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["fisica-giochi"] = {

  id:              "fisica-giochi",
  subject:         "fisica",
  title:           "Unità 0 e Cap. 1 — Gioca: ordina e classifica",
  description:     "Prefissi, grandezze fondamentali e derivate, unità del SI, proporzionalità",
  icon:            "🧩",
  version:         1,
  timePerQuestion: 0,

  questions: [

    { type:"order", q:"Metti i prefissi dal più grande al più piccolo.", items:["tera","giga","mega","kilo","milli","micro","nano","pico"], explanation:"Tabella 2 (p. 26)." },
    { type:"order", q:"Metti le lunghezze dalla più piccola alla più grande.", items:["5 nm","2 µm","3 mm","4 m","1 km"], explanation:"Si confrontano portandole alla stessa unità (p. 26)." },
    { type:"order", q:"Metti i numeri dal più piccolo al più grande.", items:["2·10⁻⁵","7·10⁻³","3·10²","8·10³","1·10⁶"], explanation:"Conta prima l'esponente (p. 27)." },
    { type:"order", q:"Metti in ordine i passi per convertire un'unità di misura.", items:["Scrivi la misura identificando l'unità di partenza","Esprimi l'unità di partenza nella nuova unità","Esegui i calcoli"], explanation:"p. 26." },
    { type:"order", q:"Metti in ordine i passi per disegnare un grafico da una formula.", items:["Compila la tabella scegliendo valori della variabile indipendente","Traccia gli assi e scegli una scala","Inserisci i punti","Collega i punti con una linea"], explanation:"p. 14." },
    { type:"classify", q:"Grandezza fondamentale o derivata?", categories:["Fondamentale","Derivata"],
      items:[ {t:"Massa", c:0}, {t:"Intervallo di tempo", c:0}, {t:"Temperatura", c:0}, {t:"Quantità di sostanza", c:0}, {t:"Area", c:1}, {t:"Volume", c:1}, {t:"Densità", c:1} ],
      explanation:"Tabella 1 (p. 25) e grandezze derivate (p. 32)." },
    { type:"classify", q:"Appartiene al SI?", categories:["Nel SI","Non nel SI"],
      items:[ {t:"metro", c:0}, {t:"kilogrammo", c:0}, {t:"secondo", c:0}, {t:"litro", c:1}, {t:"miglio", c:1}, {t:"libbra", c:1}, {t:"carato", c:1} ],
      explanation:"Tabella 1 (p. 25), litro (p. 34), miglio, libbra e carato (p. 40)." },
    { type:"classify", q:"È in notazione scientifica?", categories:["Sì","No"],
      items:[ {t:"3,2·10⁵", c:0}, {t:"1·10⁻³", c:0}, {t:"9,99·10²", c:0}, {t:"32·10⁴", c:1}, {t:"0,32·10⁶", c:1}, {t:"10,5·10³", c:1} ],
      explanation:"Coefficiente maggiore o uguale a 1 e minore di 10 (p. 27; p. 41, n. 21)." },
    { type:"classify", q:"Che relazione è?", categories:["Diretta","Lineare","Inversa"],
      items:[ {t:"y = 3x", c:0}, {t:"C = 2πr", c:0}, {t:"y = x + 2", c:1}, {t:"y = 2x − 5", c:1}, {t:"xy = 3", c:2}, {t:"y = 4/x", c:2} ],
      explanation:"y = kx (p. 16), y = kx + q (p. 18), xy = k (p. 20)." },
    { type:"classify", q:"Com'è il grafico?", categories:["Retta per l'origine","Retta non per l'origine","Arco di iperbole"],
      items:[ {t:"Proporzionalità diretta", c:0}, {t:"Dipendenza lineare con q diverso da 0", c:1}, {t:"Proporzionalità inversa", c:2} ],
      explanation:"pp. 16, 18 e 20." }

  ]
};
