// ============================================================
//  data/matematica/razionali-cap2-calcoli.js  (v1)
//  Cap. 2 NUMERI RAZIONALI E NUMERI REALI (pagg. 77-97)
//
//  54 domande. Esercizi con risposta da scrivere (frazioni) e qualche scelta multipla, senza timer. Dagli esempi svolti e dai PROVA SUBITO del libro;
//  dove il libro non stampa il risultato è indicato «calcolato». Risultati verificati con frazioni esatte.
//  Fonte: foto del libro di matematica, ottobre 2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["razionali-cap2-calcoli"] = {

  id:              "razionali-cap2-calcoli",
  subject:         "matematica",
  title:           "Cap. 2 — Esercizi: frazioni e operazioni",
  description:     "Semplificare, confrontare, + − × :, potenze · risposta da scrivere",
  icon:            "🧮",
  version:         1,
  timePerQuestion: 0,

  questions: [

    {
      "type": "numeric",
      "q": "Paolo usa i 4/5 dello zucchero previsto dalla ricetta, che è 300 g. Quanti grammi usa?",
      "answer": 240,
      "unit": "g",
      "answerText": "240 g",
      "explanation": "(300 : 5) · 4 = 60 · 4 = 240 g (esempio di p. 78).",
      "tolerance": 0
    },

    {
      "q": "Come si classifica la frazione 15/3?",
      "options": [
        "Propria",
        "Apparente",
        "Impropria",
        "Non è una frazione"
      ],
      "answer": 1,
      "explanation": "15 è multiplo di 3, quindi 15/3 è apparente (PROVA SUBITO, p. 78)."
    },

    {
      "q": "Come si classifica la frazione 7/6?",
      "options": [
        "Propria",
        "Apparente",
        "Impropria",
        "Irriducibile e propria"
      ],
      "answer": 2,
      "explanation": "7 > 6 e 7 non è multiplo di 6: impropria (PROVA SUBITO, p. 78)."
    },

    {
      "q": "Come si classifica la frazione 64/32?",
      "options": [
        "Propria",
        "Apparente",
        "Impropria",
        "Decimale"
      ],
      "answer": 1,
      "explanation": "64 = 2 · 32, cioè 64 è multiplo di 32: apparente (PROVA SUBITO, p. 78)."
    },

    {
      "type": "numeric",
      "q": "Completa: 5/6 = □/42. Quale numero va nel quadratino?",
      "answer": 35,
      "unit": "",
      "answerText": "35",
      "explanation": "42 = 6 · 7, quindi anche il numeratore si moltiplica per 7: 5 · 7 = 35 (PROVA SUBITO, p. 79).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Completa: 3/2 = 9/□. Quale numero va nel quadratino?",
      "answer": 6,
      "unit": "",
      "answerText": "6",
      "explanation": "9 = 3 · 3, quindi anche il denominatore si moltiplica per 3: 2 · 3 = 6 (PROVA SUBITO, p. 79).",
      "tolerance": 0
    },

    {
      "q": "Si può completare 14/5 = 21/□ con un numero naturale?",
      "options": [
        "Sì, con 7",
        "Sì, con 15",
        "No: servirebbe 7,5, che non è un numero naturale",
        "Sì, con 10"
      ],
      "answer": 2,
      "explanation": "Prodotti in croce: 14 · □ = 5 · 21 = 105, quindi □ = 7,5: non è naturale, la scrittura non si può completare (PROVA SUBITO «se è possibile», p. 79)."
    },

    {
      "type": "fraction",
      "q": "Riduci ai minimi termini 90/12.",
      "answer": "15/2",
      "answerText": "15/2",
      "explanation": "MCD(90; 12) = 6: (90 : 6)/(12 : 6) = 15/2 (esempio di p. 80)."
    },

    {
      "type": "fraction",
      "q": "Riduci ai minimi termini 56/32.",
      "answer": "7/4",
      "answerText": "7/4",
      "explanation": "Dividiamo per 8: (56 : 8)/(32 : 8) = 7/4 (esempio di p. 79)."
    },

    {
      "type": "fraction",
      "q": "Semplifica 56/588 (aiutati con la scomposizione in fattori primi).",
      "answer": "2/21",
      "answerText": "2/21",
      "explanation": "56 = 2³ · 7 e 588 = 2² · 3 · 7²: semplificando restano 2/(3 · 7) = 2/21 (box di p. 80)."
    },

    {
      "type": "fraction",
      "q": "Semplifica 15/20.",
      "answer": "3/4",
      "answerText": "3/4",
      "explanation": "MCD = 5: 15/20 = 3/4 (PROVA SUBITO, p. 80)."
    },

    {
      "type": "fraction",
      "q": "Semplifica 40/115.",
      "answer": "8/23",
      "answerText": "8/23",
      "explanation": "MCD = 5: 40/115 = 8/23 (PROVA SUBITO, p. 80)."
    },

    {
      "type": "fraction",
      "q": "Semplifica 126/147.",
      "answer": "6/7",
      "answerText": "6/7",
      "explanation": "MCD = 21: 126/147 = 6/7 (PROVA SUBITO, p. 80)."
    },

    {
      "type": "fraction",
      "q": "Semplifica 54/48.",
      "answer": "9/8",
      "answerText": "9/8",
      "explanation": "MCD = 6: 54/48 = 9/8 (PROVA SUBITO, p. 80)."
    },

    {
      "type": "fraction",
      "q": "Semplifica 56/98.",
      "answer": "4/7",
      "answerText": "4/7",
      "explanation": "MCD = 14: 56/98 = 4/7 (PROVA SUBITO, p. 80)."
    },

    {
      "q": "Quale di queste frazioni del PROVA SUBITO di p. 80 NON si può semplificare?",
      "options": [
        "24/8",
        "60/90",
        "8/9",
        "180/360"
      ],
      "answer": 2,
      "explanation": "8 e 9 sono primi fra loro, quindi 8/9 è già irriducibile. 24/8 = 3, 60/90 = 2/3, 180/360 = 1/2 (p. 80)."
    },

    {
      "type": "fraction",
      "q": "Riduci 11/6 al denominatore 30. Scrivi la frazione con denominatore 30.",
      "answer": "55/30",
      "answerText": "55/30",
      "explanation": "30 : 6 = 5, quindi moltiplichiamo per 5: 11/6 = 55/30 (esempio di p. 80).",
      "form": "exact"
    },

    {
      "type": "fraction",
      "q": "Riduci 4/15 al denominatore 30. Scrivi la frazione con denominatore 30.",
      "answer": "8/30",
      "answerText": "8/30",
      "explanation": "30 : 15 = 2, quindi moltiplichiamo per 2: 4/15 = 8/30 (esempio di p. 80).",
      "form": "exact"
    },

    {
      "type": "numeric",
      "q": "Qual è il minimo comune denominatore di 3/2, 2/6, 2/3 e 5/8?",
      "answer": 24,
      "unit": "",
      "answerText": "24",
      "explanation": "mcm(2; 6; 3; 8) = 24 (PROVA SUBITO, p. 80).",
      "tolerance": 0
    },

    {
      "q": "Confronta −1/4 e −13/6.",
      "options": [
        "−1/4 < −13/6",
        "−13/6 < −1/4",
        "Sono uguali",
        "Non si possono confrontare"
      ],
      "answer": 1,
      "explanation": "Con denominatore 12: −1/4 = −3/12 e −13/6 = −26/12; −26 < −3, quindi −13/6 < −1/4 (esempio di p. 83)."
    },

    {
      "q": "Disponi in ordine crescente: 3/5; −4/3; 3/4; 1/2; 7/15; −4/5.",
      "options": [
        "−4/3 < −4/5 < 7/15 < 1/2 < 3/5 < 3/4",
        "−4/5 < −4/3 < 1/2 < 7/15 < 3/5 < 3/4",
        "−4/3 < −4/5 < 1/2 < 7/15 < 3/4 < 3/5",
        "7/15 < 1/2 < 3/5 < 3/4 < −4/5 < −4/3"
      ],
      "answer": 0,
      "explanation": "Prima i negativi (−4/3 = −20/15 è minore di −4/5 = −12/15), poi 7/15 < 1/2 < 3/5 < 3/4 (PROVA SUBITO, p. 83)."
    },

    {
      "type": "fraction",
      "q": "Calcola 2/7 − 6/7.",
      "answer": "-4/7",
      "answerText": "−4/7",
      "explanation": "(2 − 6)/7 = −4/7 (esempio di p. 83)."
    },

    {
      "type": "fraction",
      "q": "Calcola −2/9 + 7/9.",
      "answer": "5/9",
      "answerText": "5/9",
      "explanation": "(−2 + 7)/9 = +5/9 (esempio di p. 83)."
    },

    {
      "type": "fraction",
      "q": "Calcola 5/6 + 1/4.",
      "answer": "13/12",
      "answerText": "13/12",
      "explanation": "mcm(6; 4) = 12: 10/12 + 3/12 = 13/12 (esempio di p. 83)."
    },

    {
      "type": "fraction",
      "q": "Calcola 3 + (−15/2).",
      "answer": "-9/2",
      "answerText": "−9/2",
      "explanation": "6/2 − 15/2 = −9/2 (PROVA SUBITO a, p. 83)."
    },

    {
      "type": "fraction",
      "q": "Calcola −1/3 − (−7/6) + 2.",
      "answer": "17/6",
      "answerText": "17/6",
      "explanation": "−2/6 + 7/6 + 12/6 = 17/6 (PROVA SUBITO b, p. 83)."
    },

    {
      "type": "fraction",
      "q": "Calcola (3/7) · (2/5).",
      "answer": "6/35",
      "answerText": "6/35",
      "explanation": "(3 · 2)/(7 · 5) = 6/35 (esempio di p. 84)."
    },

    {
      "type": "fraction",
      "q": "Calcola (−5/4) · (1/3).",
      "answer": "-5/12",
      "answerText": "−5/12",
      "explanation": "((−5) · 1)/(4 · 3) = −5/12 (esempio di p. 84)."
    },

    {
      "type": "fraction",
      "q": "Calcola (21/25) · (5/6), semplificando prima.",
      "answer": "7/10",
      "answerText": "7/10",
      "explanation": "Semplifichiamo 21 e 6 per 3, 25 e 5 per 5: 7/10 (esempio di p. 84)."
    },

    {
      "type": "fraction",
      "q": "Scrivi il reciproco di −1/7.",
      "answer": "-7",
      "answerText": "−7",
      "explanation": "Il reciproco di −1/7 è −7/1 = −7 (PROVA SUBITO, p. 84)."
    },

    {
      "type": "fraction",
      "q": "Scrivi il reciproco di 6/5.",
      "answer": "5/6",
      "answerText": "5/6",
      "explanation": "Il reciproco di 6/5 è 5/6 (PROVA SUBITO, p. 84)."
    },

    {
      "q": "Qual è il reciproco di 0?",
      "options": [
        "0",
        "1",
        "−0",
        "Non esiste"
      ],
      "answer": 3,
      "explanation": "0 non ha reciproco perché non esistono frazioni con denominatore 0 (p. 84)."
    },

    {
      "type": "fraction",
      "q": "Calcola (2/3) : (4/5).",
      "answer": "5/6",
      "answerText": "5/6",
      "explanation": "(2/3) · (5/4) = 10/12 = 5/6. Il libro (p. 84) si ferma a (2/3) · (5/4); il valore 5/6 è calcolato."
    },

    {
      "type": "fraction",
      "q": "Calcola (−5/11) : (7/6).",
      "answer": "-30/77",
      "answerText": "−30/77",
      "explanation": "−(5/11) · (6/7) = −30/77 (esempio di p. 85)."
    },

    {
      "type": "fraction",
      "q": "Calcola (7/16) : (−14/8).",
      "answer": "-1/4",
      "answerText": "−1/4",
      "explanation": "(7/16) · (−8/14) = −1/4 (PROVA SUBITO, p. 85)."
    },

    {
      "type": "fraction",
      "q": "Calcola (13/2) : (26/15).",
      "answer": "15/4",
      "answerText": "15/4",
      "explanation": "(13/2) · (15/26) = 15/4 (PROVA SUBITO, p. 85)."
    },

    {
      "type": "fraction",
      "q": "Calcola (7/2) : (2/14).",
      "answer": "49/2",
      "answerText": "49/2",
      "explanation": "(7/2) · (14/2) = 49/2 (PROVA SUBITO, p. 85)."
    },

    {
      "type": "fraction",
      "q": "Calcola (−3) : 2 in Q.",
      "answer": "-3/2",
      "answerText": "−3/2",
      "explanation": "(−3/1) · (1/2) = −3/2: in Z non si può, in Q sì (p. 85)."
    },

    {
      "type": "fraction",
      "q": "Calcola (12/5)².",
      "answer": "144/25",
      "answerText": "144/25",
      "explanation": "12²/5² = 144/25 (esempio di p. 85)."
    },

    {
      "type": "fraction",
      "q": "Calcola (−2/3)³.",
      "answer": "-8/27",
      "answerText": "−8/27",
      "explanation": "Esponente dispari e base negativa: −8/27 (esempio di p. 85)."
    },

    {
      "type": "fraction",
      "q": "Calcola (−2/5)³.",
      "answer": "-8/125",
      "answerText": "−8/125",
      "explanation": "(−2)³/5³ = −8/125 (PROVA SUBITO, p. 85)."
    },

    {
      "type": "fraction",
      "q": "Calcola (3/(−4))².",
      "answer": "9/16",
      "answerText": "9/16",
      "explanation": "Esponente pari: 9/16 (PROVA SUBITO, p. 85)."
    },

    {
      "type": "fraction",
      "q": "Calcola (2³/9)².",
      "answer": "64/81",
      "answerText": "64/81",
      "explanation": "2³ = 8: (8/9)² = 64/81 (PROVA SUBITO, p. 85)."
    },

    {
      "type": "fraction",
      "q": "Calcola (3/2)⁸ · (3/2)² : [(3/2)²]³.",
      "answer": "81/16",
      "answerText": "81/16",
      "explanation": "(3/2)¹⁰ : (3/2)⁶ = (3/2)⁴ = 81/16 (esempio di p. 86)."
    },

    {
      "q": "Semplifica (4/7)⁸ · (4/7)² : (4/7)³.",
      "options": [
        "(4/7)⁷",
        "(4/7)¹³",
        "(4/7)³",
        "(4/7)⁵"
      ],
      "answer": 0,
      "explanation": "8 + 2 − 3 = 7: il risultato è (4/7)⁷ (PROVA SUBITO, p. 86)."
    },

    {
      "type": "fraction",
      "q": "Somma le frazioni dell'occhio di Horus: 1/2 + 1/4 + 1/8 + 1/16 + 1/32 + 1/64.",
      "answer": "63/64",
      "answerText": "63/64",
      "explanation": "Con denominatore 64: (32 + 16 + 8 + 4 + 2 + 1)/64 = 63/64. Manca 1/64 per arrivare all'occhio intero: è la frazione che Thot dovette «fabbricare» (p. 86; somma calcolata)."
    },

    {
      "type": "fraction",
      "q": "Calcola 4³ : 4⁵ in Q.",
      "answer": "1/16",
      "answerText": "1/16",
      "explanation": "4³ : 4⁵ = 1/4² = 1/16 (p. 86)."
    },

    {
      "type": "fraction",
      "q": "Calcola 2⁻³.",
      "answer": "1/8",
      "answerText": "1/8",
      "explanation": "2⁻³ = (1/2)³ = 1/8 (esempio di p. 87)."
    },

    {
      "type": "fraction",
      "q": "Calcola (5/3)⁻³.",
      "answer": "27/125",
      "answerText": "27/125",
      "explanation": "(5/3)⁻³ = (3/5)³ = 27/125 (esempio di p. 87)."
    },

    {
      "type": "fraction",
      "q": "Calcola (−2)² : [(−2)³]⁻¹.",
      "answer": "-32",
      "answerText": "−32",
      "explanation": "(−2)² : (−2)⁻³ = (−2)⁵ = −32 (esempio di p. 87)."
    },

    {
      "type": "fraction",
      "q": "Calcola (3/2)⁻⁴.",
      "answer": "16/81",
      "answerText": "16/81",
      "explanation": "(3/2)⁻⁴ = (2/3)⁴ = 16/81 (Teoria in sintesi, p. 97)."
    },

    {
      "type": "fraction",
      "q": "Trova il numero a metà fra 4/3 e 5/3, cioè (1/2) · (4/3 + 5/3).",
      "answer": "3/2",
      "answerText": "3/2",
      "explanation": "(1/2) · (9/3) = 3/2, che è compreso fra 4/3 e 5/3 (p. 87)."
    },

    {
      "type": "fraction",
      "q": "Calcola 2/9 − 5/6.",
      "answer": "-11/18",
      "answerText": "−11/18",
      "explanation": "mcm(9; 6) = 18: 4/18 − 15/18 = −11/18 (Teoria in sintesi, p. 97)."
    },

    {
      "type": "fraction",
      "q": "Calcola (4/15) : (16/25).",
      "answer": "5/12",
      "answerText": "5/12",
      "explanation": "(4/15) · (25/16) = 5/12 (Teoria in sintesi, p. 97)."
    }

  ]
};
