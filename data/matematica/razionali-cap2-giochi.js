// ============================================================
//  data/matematica/razionali-cap2-giochi.js  (v1)
//  Cap. 2 — Gioca: ordina e classifica
//
//  12 esercizi di tipo «order» e «classify», solo dal libro (fonte e pagina
//  nella spiegazione); verificati da un revisore indipendente.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["razionali-cap2-giochi"] = {

  id:              "razionali-cap2-giochi",
  subject:         "matematica",
  title:           "Cap. 2 — Gioca: ordina e classifica",
  description:     "Ordine dei razionali, tipi di frazioni e di decimali, insiemi",
  icon:            "🧩",
  version:         1,
  timePerQuestion: 60,

  questions: [

    {
      "type": "order",
      "q": "Disponi in ordine crescente: 3/5; −4/3; 3/4; 1/2; 7/15; −4/5.",
      "items": [
        "−4/3",
        "−4/5",
        "7/15",
        "1/2",
        "3/5",
        "3/4"
      ],
      "explanation": "Prima i negativi: con denominatore 15, −4/3 = −20/15 < −4/5 = −12/15. Poi i positivi con denominatore 60: 7/15 = 28/60, 1/2 = 30/60, 3/5 = 36/60, 3/4 = 45/60. A numeratore maggiore corrisponde numero maggiore (pp. 82–83)."
    },

    {
      "type": "order",
      "q": "Confronta −1/4 e −13/6: metti in ordine i passaggi.",
      "items": [
        "Calcola mcm(4; 6) = 12",
        "Scrivi −1/4 = −3/12 e −13/6 = −26/12",
        "Confronta i numeratori: −26 < −3",
        "Concludi: −13/6 < −1/4"
      ],
      "explanation": "Per confrontare numeri concordi si portano allo stesso denominatore positivo (il mcm), con il segno al numeratore, e si confrontano i numeratori (p. 83)."
    },

    {
      "type": "order",
      "q": "Disponi in ordine crescente questi numeri decimali.",
      "items": [
        "1,1(6)",
        "1,2(8)",
        "1,(7)",
        "3,(72)",
        "4,26",
        "4,(52)"
      ],
      "explanation": "1,1666… < 1,2888… < 1,777… < 3,7272… < 4,26 < 4,5252…: si confronta la parte intera e poi le cifre decimali una a una. Sono 7/6, 58/45, 16/9, 41/11, 213/50 e 448/99 (pp. 88–89)."
    },

    {
      "type": "order",
      "q": "Disponi in ordine crescente questi numeri in notazione scientifica.",
      "items": [
        "1,67 · 10⁻²⁷",
        "1,4 · 10⁻⁹",
        "6,3 · 10⁻⁴",
        "2,1 · 10⁵",
        "5,9 · 10⁷",
        "5,97 · 10²⁴"
      ],
      "explanation": "Per numeri positivi in notazione scientifica conta prima l'esponente della potenza di 10: −27 < −9 < −4 < 5 < 7 < 24. Il primo è la massa di un protone in kg, l'ultimo la massa della Terra in kg (pp. 95–96)."
    },

    {
      "type": "order",
      "q": "Metti in ordine gli insiemi numerici, dal meno ampio al più ampio (ognuno amplia il precedente).",
      "items": [
        "N (naturali)",
        "Z (interi)",
        "Q (razionali)",
        "R (reali)"
      ],
      "explanation": "Dai naturali si passa agli interi; Q è un ampliamento di Z; R comprende tutti i razionali e gli irrazionali (pp. 81, 87, 93)."
    },

    {
      "type": "classify",
      "q": "Classifica le frazioni: propria, apparente o impropria?",
      "categories": [
        "Propria",
        "Apparente",
        "Impropria"
      ],
      "items": [
        {
          "t": "5/8",
          "c": 0
        },
        {
          "t": "7/8",
          "c": 0
        },
        {
          "t": "4/5",
          "c": 0
        },
        {
          "t": "15/3",
          "c": 1
        },
        {
          "t": "64/32",
          "c": 1
        },
        {
          "t": "12/6",
          "c": 1
        },
        {
          "t": "7/6",
          "c": 2
        },
        {
          "t": "5/2",
          "c": 2
        }
      ],
      "explanation": "m/n è propria se m < n; apparente se m è multiplo di n (15 = 3·5, 64 = 32·2, 12 = 6·2); impropria se m > n e m non è multiplo di n (p. 78)."
    },

    {
      "type": "classify",
      "q": "Che tipo di numero decimale genera ciascuna frazione?",
      "categories": [
        "Finito",
        "Periodico semplice",
        "Periodico misto"
      ],
      "items": [
        {
          "t": "213/50",
          "c": 0
        },
        {
          "t": "23/40",
          "c": 0
        },
        {
          "t": "11/80",
          "c": 0
        },
        {
          "t": "16/9",
          "c": 1
        },
        {
          "t": "41/11",
          "c": 1
        },
        {
          "t": "4/42",
          "c": 1
        },
        {
          "t": "22/24",
          "c": 2
        },
        {
          "t": "25/12",
          "c": 2
        }
      ],
      "explanation": "Si guarda il denominatore della frazione ridotta ai minimi termini: solo 2 e 5 (50, 40, 80) → finito; solo fattori diversi da 2 e 5 (9, 11, e 4/42 = 2/21 con 21 = 3·7) → periodico semplice; entrambi (22/24 = 11/12, 12 = 2²·3) → periodico misto (pp. 88–89)."
    },

    {
      "type": "classify",
      "q": "Numero razionale o irrazionale?",
      "categories": [
        "Razionale",
        "Irrazionale"
      ],
      "items": [
        {
          "t": "√81",
          "c": 0
        },
        {
          "t": "4,(52)",
          "c": 0
        },
        {
          "t": "−13/6",
          "c": 0
        },
        {
          "t": "7,25",
          "c": 0
        },
        {
          "t": "√2",
          "c": 1
        },
        {
          "t": "√5",
          "c": 1
        },
        {
          "t": "√8",
          "c": 1
        },
        {
          "t": "π",
          "c": 1
        }
      ],
      "explanation": "√81 = 9; 4,(52) = 448/99; 7,25 = 725/100: i decimali finiti o periodici sono razionali (p. 89). Sono irrazionali le radici quadrate di naturali che non sono quadrati perfetti (√2, √5, √8) e π: decimali infiniti non periodici (p. 93)."
    },

    {
      "type": "classify",
      "q": "È scritto in notazione scientifica?",
      "categories": [
        "Sì",
        "No"
      ],
      "items": [
        {
          "t": "2,6 · 10⁻³",
          "c": 0
        },
        {
          "t": "5,4 · 10¹²",
          "c": 0
        },
        {
          "t": "3,24 · 10⁶",
          "c": 0
        },
        {
          "t": "3,8 · 10⁻⁵",
          "c": 0
        },
        {
          "t": "0,6 · 10²",
          "c": 1
        },
        {
          "t": "41 · 10⁻³",
          "c": 1
        },
        {
          "t": "0,3 · 10²",
          "c": 1
        },
        {
          "t": "0,04 · 10⁻⁵",
          "c": 1
        }
      ],
      "explanation": "Il coefficiente deve essere maggiore o uguale a 1 e minore di 10. 0,6, 0,3 e 0,04 sono minori di 1; 41 è maggiore di 10 (p. 95)."
    },

    {
      "type": "classify",
      "q": "Ordine di grandezza di d · 10ⁿ: è 10ⁿ oppure 10ⁿ⁺¹?",
      "categories": [
        "10ⁿ (d < 5)",
        "10ⁿ⁺¹ (d ≥ 5)"
      ],
      "items": [
        {
          "t": "1,4 · 10⁻⁹",
          "c": 0
        },
        {
          "t": "2,1 · 10⁵",
          "c": 0
        },
        {
          "t": "2,78 · 10⁻³",
          "c": 0
        },
        {
          "t": "4,9",
          "c": 0
        },
        {
          "t": "5,9 · 10⁷",
          "c": 1
        },
        {
          "t": "6,3 · 10⁻⁴",
          "c": 1
        },
        {
          "t": "6,5536 · 10⁴",
          "c": 1
        },
        {
          "t": "6 · 10⁴",
          "c": 1
        }
      ],
      "explanation": "Se 1 ≤ d < 5 l'ordine di grandezza è 10ⁿ (1,4 · 10⁻⁹ → 10⁻⁹; 4,9 = 4,9 · 10⁰ → 10⁰); se 5 ≤ d < 10 è 10ⁿ⁺¹ (5,9 · 10⁷ → 10⁸; 6,3 · 10⁻⁴ → 10⁻³; 6 · 10⁴ → 10⁵) (pp. 95–97)."
    },

    {
      "type": "classify",
      "q": "Approssimazione per difetto o per eccesso?",
      "categories": [
        "Per difetto",
        "Per eccesso"
      ],
      "items": [
        {
          "t": "π ≃ 3,14",
          "c": 0
        },
        {
          "t": "3718 ≃ 3700",
          "c": 0
        },
        {
          "t": "12 300 ≃ 12 000",
          "c": 0
        },
        {
          "t": "54 721 ≃ 50 000",
          "c": 0
        },
        {
          "t": "√5 ≃ 2,24",
          "c": 1
        },
        {
          "t": "√8 ≃ 2,83",
          "c": 1
        },
        {
          "t": "3800 ≃ 4000",
          "c": 1
        },
        {
          "t": "2,68 ≃ 2,7",
          "c": 1
        }
      ],
      "explanation": "a è per difetto se a < v, per eccesso se a > v. π = 3,1415… > 3,14; √5 = 2,2360… < 2,24; √8 = 2,8284… < 2,83 (p. 94); 54 721 arrotondato alle decine di migliaia dà 50 000 (prima cifra trascurata 4 < 5); 2,68 ai decimi dà 2,7 (8 ≥ 5) (p. 95)."
    },

    {
      "type": "classify",
      "q": "La potenza ha segno positivo o negativo?",
      "categories": [
        "Positivo",
        "Negativo"
      ],
      "items": [
        {
          "t": "(−7/5)²",
          "c": 0
        },
        {
          "t": "(−1/7)²",
          "c": 0
        },
        {
          "t": "(−4)⁻²",
          "c": 0
        },
        {
          "t": "(−1)⁰",
          "c": 0
        },
        {
          "t": "(−2/3)³",
          "c": 1
        },
        {
          "t": "(−2/5)³",
          "c": 1
        },
        {
          "t": "(−2)⁵",
          "c": 1
        }
      ],
      "explanation": "Con esponente pari la potenza è sempre positiva; con esponente dispari è negativa solo se la base è negativa (p. 85). (−4)⁻² = (−1/4)² = +1/16 (p. 87); (−1)⁰ = 1 (p. 85); (−2)⁵ = −32 (p. 87)."
    }

  ]
};
