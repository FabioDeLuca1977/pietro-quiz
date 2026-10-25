// ============================================================
//  data/matematica/razionali-cap2-decimali.js  (v1)
//  Cap. 2 NUMERI RAZIONALI E NUMERI REALI (pagg. 77-97)
//
//  47 domande. Esercizi con risposta da scrivere e qualche scelta multipla, senza timer. Dagli esempi svolti e dai PROVA SUBITO del libro;
//  dove il libro non stampa il risultato è indicato «calcolato». Risultati verificati.
//  Fonte: foto del libro di matematica, ottobre 2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["razionali-cap2-decimali"] = {

  id:              "razionali-cap2-decimali",
  subject:         "matematica",
  title:           "Cap. 2 — Esercizi: decimali, proporzioni, percentuali",
  description:     "Periodici, frazione generatrice, proporzioni, %, IVA, errori, notazione scientifica",
  icon:            "📐",
  version:         1,
  timePerQuestion: 0,

  questions: [

    {
      "type": "numeric",
      "q": "Scrivi 725/100 come numero decimale.",
      "answer": 7.25,
      "unit": "",
      "answerText": "7,25",
      "explanation": "725/100 = 7 + 2/10 + 5/100 = 7,25 (p. 87).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Scrivi 29/4 come numero decimale.",
      "answer": 7.25,
      "unit": "",
      "answerText": "7,25",
      "explanation": "29/4 è equivalente a 725/100, quindi è ancora 7,25 (p. 88).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Scrivi 213/50 come numero decimale.",
      "answer": 4.26,
      "unit": "",
      "answerText": "4,26",
      "explanation": "213/50 = 426/100 = 4,26: decimale finito perché 50 = 2 · 5² (esempio di p. 89).",
      "tolerance": 0
    },

    {
      "q": "Che numero decimale genera 16/9?",
      "options": [
        "1,7",
        "1,(7)",
        "1,7(6)",
        "1,77"
      ],
      "answer": 1,
      "explanation": "16/9 = 16/3²: solo fattori diversi da 2 e 5 → periodico semplice, 16 : 9 = 1,777… = 1,(7) (esempio di p. 89)."
    },

    {
      "q": "Che numero decimale genera 22/24?",
      "options": [
        "0,91(6)",
        "0,(916)",
        "0,916",
        "0,9(16)"
      ],
      "answer": 0,
      "explanation": "22/24 = 11/12 = 11/(3 · 2²) → periodico misto: 11 : 12 = 0,91666… = 0,91(6) (esempio di p. 89)."
    },

    {
      "q": "Che numero decimale genera 41/11?",
      "options": [
        "3,7(2)",
        "3,72",
        "3,(72)",
        "3,(7)"
      ],
      "answer": 2,
      "explanation": "41 : 11 = 3,7272… = 3,(72), periodico semplice con periodo 72 (p. 88)."
    },

    {
      "q": "Che tipo di numero decimale genera 11/80?",
      "options": [
        "Finito",
        "Periodico semplice",
        "Periodico misto",
        "Irrazionale"
      ],
      "answer": 0,
      "explanation": "80 = 2⁴ · 5: solo potenze di 2 e di 5 → decimale finito (PROVA SUBITO, p. 89; 11/80 = 0,1375)."
    },

    {
      "q": "Che tipo di numero decimale genera 4/42?",
      "options": [
        "Finito",
        "Periodico semplice",
        "Periodico misto",
        "Intero"
      ],
      "answer": 1,
      "explanation": "4/42 = 2/21 ridotta ai minimi termini; 21 = 3 · 7, solo fattori diversi da 2 e 5 → periodico semplice (PROVA SUBITO, p. 89)."
    },

    {
      "q": "Che tipo di numero decimale genera 25/12?",
      "options": [
        "Finito",
        "Periodico semplice",
        "Periodico misto",
        "Intero"
      ],
      "answer": 2,
      "explanation": "12 = 2² · 3: una potenza di 2 e un altro fattore → periodico misto (PROVA SUBITO, p. 89; 25/12 = 2,08(3))."
    },

    {
      "q": "Che tipo di numero decimale genera 23/40?",
      "options": [
        "Finito",
        "Periodico semplice",
        "Periodico misto",
        "Irrazionale"
      ],
      "answer": 0,
      "explanation": "40 = 2³ · 5 → decimale finito (PROVA SUBITO, p. 89; 23/40 = 0,575)."
    },

    {
      "type": "fraction",
      "q": "Scrivi 3,25 come frazione ridotta ai minimi termini.",
      "answer": "13/4",
      "answerText": "13/4",
      "explanation": "3,25 = 325/100; riducendo per 25 si ottiene 13/4 (esempio di p. 89, ridotto)."
    },

    {
      "type": "fraction",
      "q": "Scrivi 8,34 come frazione ridotta ai minimi termini.",
      "answer": "417/50",
      "answerText": "417/50",
      "explanation": "8,34 = 834/100 = 417/50 (PROVA SUBITO, p. 89)."
    },

    {
      "type": "fraction",
      "q": "Scrivi 9,155 come frazione ridotta ai minimi termini.",
      "answer": "1831/200",
      "answerText": "1831/200",
      "explanation": "9,155 = 9155/1000 = 1831/200 (PROVA SUBITO, p. 89)."
    },

    {
      "type": "fraction",
      "q": "Trova la frazione generatrice di 4,(52).",
      "answer": "448/99",
      "answerText": "448/99",
      "explanation": "(452 − 4)/99 = 448/99 (esempio di p. 89)."
    },

    {
      "type": "fraction",
      "q": "Trova la frazione generatrice di 0,25(8), cioè 0,2588…",
      "answer": "233/900",
      "answerText": "233/900",
      "explanation": "Periodo 8 (una cifra → un 9), antiperiodo 25 (due cifre → due 0): (258 − 25)/900 = 233/900 (esempio di p. 89)."
    },

    {
      "type": "fraction",
      "q": "Trasforma 5,(9) in frazione: a quale numero è uguale?",
      "answer": "6",
      "answerText": "6",
      "explanation": "(59 − 5)/9 = 54/9 = 6 (PROVA SUBITO, p. 89)."
    },

    {
      "type": "numeric",
      "q": "Trova x nella proporzione 150 : x = 10 : 2.",
      "answer": 30,
      "unit": "",
      "answerText": "30",
      "explanation": "Proprietà fondamentale: 150 · 2 = x · 10, quindi x = 300/10 = 30 (p. 90).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Una pasta ha 350 kcal ogni 100 g. Quante kcal ci sono in 80 g?",
      "answer": 280,
      "unit": "kcal",
      "answerText": "280 kcal",
      "explanation": "350 : 100 = x : 80 → x = (350 · 80)/100 = 280 (box SALUTE, p. 90).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "La stessa pasta ha 15 g di proteine ogni 100 g. Quanti grammi di proteine ci sono in 80 g?",
      "answer": 12,
      "unit": "g",
      "answerText": "12 g",
      "explanation": "15 : 100 = y : 80 → y = (15 · 80)/100 = 12 (box SALUTE, p. 90).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Qual è il medio proporzionale fra 3 e 27?",
      "answer": 9,
      "unit": "",
      "answerText": "9",
      "explanation": "3 : x = x : 27 → x² = 81 → x = 9 (p. 91).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Trova x nella proporzione 22 : 8 = (x + 35) : x.",
      "answer": 20,
      "unit": "",
      "answerText": "20",
      "explanation": "Proprietà dello scomporre: 14 : 8 = 35 : x → x = (8 · 35)/14 = 20 (p. 91).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Calcola il 20% di 3600.",
      "answer": 720,
      "unit": "",
      "answerText": "720",
      "explanation": "(20/100) · 3600 = 720 (esempio di p. 91).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Il 15% di A è 180. Quanto vale A?",
      "answer": 1200,
      "unit": "",
      "answerText": "1200",
      "explanation": "(15/100) · A = 180 → A = (180/15) · 100 = 1200 (esempio di pp. 91-92).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Quale percentuale di 2300 è 621?",
      "answer": 27,
      "unit": "%",
      "answerText": "27%",
      "explanation": "621/2300 = 27/100 = 27% (p. 92).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Trasforma 3/50 in percentuale.",
      "answer": 6,
      "unit": "%",
      "answerText": "6%",
      "explanation": "3/50 = 6/100 = 6% (p. 92).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Trasforma 2/3 in percentuale (approssimata a un decimale).",
      "answer": 66.7,
      "unit": "%",
      "answerText": "≃ 66,7%",
      "explanation": "2 : 3 = x : 100 → x = 200/3 ≃ 66,7 (p. 92).",
      "tolerance": 0.0008
    },

    {
      "type": "numeric",
      "q": "Trasforma 0,235 in percentuale.",
      "answer": 23.5,
      "unit": "%",
      "answerText": "23,5%",
      "explanation": "Si moltiplica per 100: 0,235 → 23,5% (p. 92).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Una mountain bike costa 500 € senza IVA. Quanto costa con l'IVA al 22%?",
      "answer": 610,
      "unit": "€",
      "answerText": "610 €",
      "explanation": "500 · 22/100 = 110 € di IVA; 500 + 110 = 610 € (box EDUCAZIONE FINANZIARIA, p. 92).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Scorpora l'IVA al 22% da un prezzo di 900 €: qual è il prezzo senza IVA (arrotondato all'euro)?",
      "answer": 738,
      "unit": "€",
      "answerText": "≃ 738 €",
      "explanation": "(100 + 22) : 100 = 900 : p → p = 900 · 100/122 ≃ 738 € (p. 92).",
      "tolerance": 0.001
    },

    {
      "type": "numeric",
      "q": "Arrotonda 3718 alle centinaia.",
      "answer": 3700,
      "unit": "",
      "answerText": "3700",
      "explanation": "La prima cifra trascurata è 1 < 5: confermiamo il 7 → 3700 (p. 94).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "√8 = 2,8284… Arrotondalo a meno di un centesimo.",
      "answer": 2.83,
      "unit": "",
      "answerText": "2,83",
      "explanation": "La prima cifra trascurata è 8 > 5: il 2 dei centesimi diventa 3 → 2,83 (p. 94).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Approssimi 3800 con 4000. Qual è l'errore assoluto?",
      "answer": 200,
      "unit": "",
      "answerText": "200",
      "explanation": "E = |3800 − 4000| = 200 (p. 94).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Approssimi 3800 con 4000. Qual è l'errore relativo percentuale?",
      "answer": 5,
      "unit": "%",
      "answerText": "5%",
      "explanation": "e = 200/4000 = 0,05 → 5% (p. 95).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Approssimi 12 300 con 12 000. Qual è l'errore relativo percentuale?",
      "answer": 2.5,
      "unit": "%",
      "answerText": "2,5%",
      "explanation": "e = 300/12 000 = 0,025 → 2,5% (p. 95).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Arrotonda 2,68 ai decimi: qual è l'errore assoluto?",
      "answer": 0.02,
      "unit": "",
      "answerText": "0,02",
      "explanation": "2,68 ≃ 2,7; E = |2,68 − 2,7| = 0,02 (PROVA SUBITO, p. 95; calcolato).",
      "tolerance": 0.001
    },

    {
      "type": "numeric",
      "q": "Arrotonda 4587 alle migliaia: qual è l'errore assoluto?",
      "answer": 413,
      "unit": "",
      "answerText": "413",
      "explanation": "4587 ≃ 5000 (la prima cifra trascurata è 5); E = |4587 − 5000| = 413 (PROVA SUBITO, p. 95; calcolato).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Arrotonda 4587 alle migliaia: qual è l'errore relativo percentuale (con due decimali)?",
      "answer": 8.26,
      "unit": "%",
      "answerText": "≃ 8,26%",
      "explanation": "e = 413/5000 = 0,0826 → 8,26% (PROVA SUBITO, p. 95; calcolato).",
      "tolerance": 0.002
    },

    {
      "q": "Qual è la frazione che indica √2?",
      "options": [
        "1,414/1000",
        "707/500",
        "Nessuna: √2 non è un numero razionale",
        "2/1"
      ],
      "answer": 2,
      "explanation": "Il libro dimostra per assurdo che √2 non si può scrivere come frazione: è irrazionale (p. 93)."
    },

    {
      "q": "Come si scrive 3 240 000 in notazione scientifica?",
      "options": [
        "3,24 · 10⁶",
        "32,4 · 10⁵",
        "3,24 · 10⁻⁶",
        "0,324 · 10⁷"
      ],
      "answer": 0,
      "explanation": "La virgola si sposta a sinistra di 6 posti: 3,24 · 10⁶. In 32,4 · 10⁵ e 0,324 · 10⁷ il coefficiente non è fra 1 e 10 (p. 95)."
    },

    {
      "q": "Come si scrive 0,000038 in notazione scientifica?",
      "options": [
        "3,8 · 10⁵",
        "3,8 · 10⁻⁵",
        "38 · 10⁻⁶",
        "0,38 · 10⁻⁴"
      ],
      "answer": 1,
      "explanation": "La virgola si sposta a destra di 5 posti: 3,8 · 10⁻⁵. In 38 · 10⁻⁶ e 0,38 · 10⁻⁴ il coefficiente non è fra 1 e 10 (p. 95)."
    },

    {
      "q": "La massa della Terra è circa 5 970 000 000 000 000 000 000 000 kg. Come si scrive in notazione scientifica?",
      "options": [
        "5,97 · 10²⁴ kg",
        "597 · 10²² kg",
        "5,97 · 10²⁷ kg",
        "5,97 · 10⁻²⁴ kg"
      ],
      "answer": 0,
      "explanation": "La virgola si sposta a sinistra di 24 posti: 5,97 · 10²⁴ kg (p. 95)."
    },

    {
      "q": "Qual è l'ordine di grandezza di 6 · 10⁴?",
      "options": [
        "10⁴",
        "10⁵",
        "10⁶",
        "10³"
      ],
      "answer": 1,
      "explanation": "d = 6 ≥ 5, quindi l'ordine di grandezza è 10⁴⁺¹ = 10⁵ (PROVA SUBITO, p. 96)."
    },

    {
      "q": "Qual è l'ordine di grandezza di 0,3 · 10²?",
      "options": [
        "10²",
        "10¹",
        "10⁰",
        "10³"
      ],
      "answer": 1,
      "explanation": "0,3 · 10² = 3 · 10¹ e d = 3 < 5, quindi 10¹ (PROVA SUBITO, p. 96)."
    },

    {
      "q": "Qual è l'ordine di grandezza di 0,04 · 10⁻⁵?",
      "options": [
        "10⁻⁵",
        "10⁻⁷",
        "10⁻⁶",
        "10⁻³"
      ],
      "answer": 1,
      "explanation": "0,04 · 10⁻⁵ = 4 · 10⁻⁷ e d = 4 < 5, quindi 10⁻⁷ (PROVA SUBITO, p. 96)."
    },

    {
      "q": "Qual è l'ordine di grandezza di 65 536?",
      "options": [
        "10⁴",
        "10⁵",
        "10³",
        "10⁶"
      ],
      "answer": 1,
      "explanation": "65 536 = 6,5536 · 10⁴ e d ≥ 5, quindi 10⁵ (Teoria in sintesi, p. 97)."
    },

    {
      "q": "Qual è l'ordine di grandezza di 0,00278?",
      "options": [
        "10⁻²",
        "10⁻³",
        "10⁻⁴",
        "10³"
      ],
      "answer": 1,
      "explanation": "0,00278 = 2,78 · 10⁻³ e d < 5, quindi 10⁻³ (Teoria in sintesi, p. 97)."
    },

    {
      "type": "numeric",
      "q": "Con il programma Python di p. 96 inserisci 1, 3, 6, 15. Che percentuale stampa per il numero 6?",
      "answer": 24,
      "unit": "%",
      "answerText": "24",
      "explanation": "La somma è 25; perc(6,25) = (6/25) · 100 = 24 (PROVA di p. 96; calcolato).",
      "tolerance": 0
    }

  ]
};
