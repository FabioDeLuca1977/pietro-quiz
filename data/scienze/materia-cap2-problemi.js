// ============================================================
//  data/scienze/materia-cap2-problemi.js  (v1)
//  Unità A — Cap. 2 PROBLEMI SULLE CONCENTRAZIONI (pagg. 48-49, 67)
//
//  24 domande. Problemi con risposta da scrivere (type:"numeric") e qualche scelta multipla, senza timer. Quelli con «p. N» o «es. N» vengono dal libro (risultato stampato, salvo dove indicato);
//  quelli con «come …» o senza riferimento sono creati sul modello del libro. Tutti i calcoli verificati.
//  Fonte: foto del libro di scienze, ottobre 2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["materia-cap2-problemi"] = {

  id:              "materia-cap2-problemi",
  subject:         "scienze",
  title:           "Cap. 2 — Problemi sulle concentrazioni",
  description:     "Percentuale in massa, in volume, massa su volume, diluizione · risposta da scrivere",
  icon:            "⚗️",
  version:         1,
  timePerQuestion: 0,

  questions: [

    {
      "type": "numeric",
      "q": "10 g di cloruro di sodio sciolti in 90 g di acqua: qual è la percentuale in massa?",
      "answer": 10,
      "unit": "% m/m",
      "answerText": "10% m/m",
      "explanation": "Massa della soluzione = 10 + 90 = 100 g; % = 10 / 100 × 100 = 10%. Si divide per la soluzione, non per la sola acqua (p. 48).",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "30 g di soluto sciolti in 120 g di acqua: qual è la percentuale in massa?",
      "answer": 20,
      "unit": "% m/m",
      "answerText": "20% m/m",
      "explanation": "Massa della soluzione = 30 + 120 = 150 g; % = 30 / 150 × 100 = 20% (es. 20, p. 67).",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "36,0 g di cloruro di sodio sciolti in 75,4 g di acqua: qual è la percentuale in massa?",
      "answer": 32.3,
      "unit": "% m/m",
      "answerText": "32,3% m/m",
      "explanation": "Massa soluzione = 36,0 + 75,4 = 111,4 g; % = 36,0 / 111,4 × 100 = 32,3% (Costruisci le abilità, p. 48).",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "5,12 g di cloruro di sodio in 60,35 mL di acqua (densità 1 g/mL): qual è la percentuale in massa?",
      "answer": 7.82,
      "unit": "% m/m",
      "answerText": "7,82% m/m",
      "explanation": "60,35 mL di acqua = 60,35 g; soluzione = 65,47 g; % = 5,12 / 65,47 × 100 = 7,82% (Mettiti alla prova 1, p. 48).",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "12,0 g di zucchero in 88,0 g di acqua: qual è la percentuale in massa?",
      "answer": 12.0,
      "unit": "% m/m",
      "answerText": "12,0% m/m",
      "explanation": "Soluzione = 12,0 + 88,0 = 100,0 g; % = 12,0 / 100,0 × 100 = 12,0%.",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "70,0 g di ioduro di sodio in 800 g di soluzione: qual è la percentuale in massa?",
      "answer": 8.75,
      "unit": "% m/m",
      "answerText": "8,75% m/m",
      "explanation": "800 g è già la massa della soluzione: 70,0 / 800 × 100 = 8,75% (es. 21a, p. 67).",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "0,450 kg di cromato di potassio in 2550 g di acqua: qual è la percentuale in massa?",
      "answer": 15.0,
      "unit": "% m/m",
      "answerText": "15,0% m/m",
      "explanation": "0,450 kg = 450 g; soluzione = 450 + 2550 = 3000 g; % = 450 / 3000 × 100 = 15,0% (es. 21b, p. 67).",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "Quanti grammi di cloruro di sodio servono per 250 g di soluzione al 9,00% m/m?",
      "answer": 22.5,
      "unit": "g",
      "answerText": "22,5 g",
      "explanation": "massa soluto = 9,00 × 250 / 100 = 22,5 g (Mettiti alla prova 2, p. 48)."
    },

    {
      "type": "numeric",
      "q": "Quanti grammi di sale servono per 750 g di soluzione al 40% m/m?",
      "answer": 300,
      "unit": "g",
      "answerText": "300 g",
      "explanation": "massa soluto = 40 × 750 / 100 = 300 g (es. 24, p. 67)."
    },

    {
      "type": "numeric",
      "q": "Una bottiglia contiene 500 g di sciroppo al 65% m/m di zucchero. Quanto zucchero c'è?",
      "answer": 325,
      "unit": "g",
      "answerText": "325 g",
      "explanation": "massa soluto = 65 × 500 / 100 = 325 g (es. 22, p. 67)."
    },

    {
      "type": "numeric",
      "q": "Quanto iodio c'è in 25,0 g di tintura di iodio al 2% m/m?",
      "answer": 0.5,
      "unit": "g",
      "answerText": "0,5 g",
      "explanation": "massa iodio = 2 × 25,0 / 100 = 0,5 g (es. 23, p. 67)."
    },

    {
      "type": "numeric",
      "q": "Per preparare 400 g di soluzione al 5,00% m/m, quanti grammi di acqua servono?",
      "answer": 380,
      "unit": "g",
      "answerText": "380 g",
      "explanation": "Soluto = 5,00 × 400 / 100 = 20,0 g; acqua = 400 − 20,0 = 380 g. Attenzione: il 5% si calcola sulla soluzione (400 g), non sulla sola acqua.",
      "tolerance": 0.002
    },

    {
      "type": "numeric",
      "q": "80,0 mL di alcol in acqua fino a 250 mL di soluzione: qual è la percentuale in volume?",
      "answer": 32,
      "unit": "% V/V",
      "answerText": "32% V/V",
      "explanation": "% V/V = 80,0 / 250 × 100 = 32%: 250 mL è già il volume della soluzione (p. 49).",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "40,0 mL di alcol in acqua fino a 150 mL di soluzione: qual è la percentuale in volume?",
      "answer": 26.7,
      "unit": "% V/V",
      "answerText": "26,7% V/V",
      "explanation": "% V/V = 40,0 / 150 × 100 = 26,7% (Mettiti alla prova 3, p. 49).",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "Un vino è all'11% in volume. Quanti mL di alcol ci sono in 400 mL?",
      "answer": 44,
      "unit": "mL",
      "answerText": "44 mL",
      "explanation": "volume alcol = 11 × 400 / 100 = 44 mL (es. 28, p. 67)."
    },

    {
      "type": "numeric",
      "q": "Quanti mL di alcol ci sono in 750 mL di vino al 13% vol?",
      "answer": 97.5,
      "unit": "mL",
      "answerText": "97,5 mL (con 2 cifre significative: 98 mL)",
      "explanation": "volume alcol = 13 × 750 / 100 = 97,5 mL; con le cifre significative del dato (13%) si scrive 98 mL."
    },

    {
      "type": "numeric",
      "q": "Quanti grammi di glucosio servono per 500 mL di soluzione al 5% m/V?",
      "answer": 25,
      "unit": "g",
      "answerText": "25 g",
      "explanation": "massa = % m/V × V / 100 = 5 × 500 / 100 = 25 g (Costruisci le abilità, p. 49)."
    },

    {
      "type": "numeric",
      "q": "Quanti grammi di cloruro di sodio servono per 500 mL di soluzione allo 0,9% m/V?",
      "answer": 4.5,
      "unit": "g",
      "answerText": "4,5 g",
      "explanation": "massa = 0,9 × 500 / 100 = 4,5 g (es. 29, p. 67)."
    },

    {
      "type": "numeric",
      "q": "In 500 mL di soluzione ci sono 3,8 g di cloruro di sodio. Qual è la concentrazione in g/L?",
      "answer": 7.6,
      "unit": "g/L",
      "answerText": "7,6 g/L",
      "explanation": "500 mL = 0,500 L; 3,8 g / 0,500 L = 7,6 g/L (Mettiti alla prova 4, p. 49)."
    },

    {
      "type": "numeric",
      "q": "A 250 g di soluzione al 10% m/m di cloruro di calcio si aggiungono 80 g di acqua. Qual è la nuova concentrazione?",
      "answer": 7.6,
      "unit": "% m/m",
      "answerText": "7,6% m/m",
      "explanation": "Soluto = 25 g (non cambia); nuova soluzione = 330 g; 25 / 330 × 100 = 7,6%: è meno concentrata (es. 33, p. 67).",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "A 200 g di soluzione al 15% m/m si aggiungono 50 g di acqua. Qual è la nuova concentrazione?",
      "answer": 12,
      "unit": "% m/m",
      "answerText": "12% m/m",
      "explanation": "Soluto = 30 g; nuova soluzione = 250 g; 30 / 250 × 100 = 12%.",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "Soluzione al 10% m/m di zucchero, densità 1,038 g/cm³. Quanti grammi di zucchero ci sono in 250,0 mL?",
      "answer": 25.95,
      "unit": "g",
      "answerText": "25,95 g",
      "explanation": "massa soluzione = d × V = 1,038 × 250,0 = 259,5 g; zucchero = 10% → 25,95 g (es. 26, p. 67). Senza la densità si sbaglia.",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "Soluzione al 20% m/m, densità 1,08 g/mL. Quanti grammi di soluto ci sono in 150 mL?",
      "answer": 32.4,
      "unit": "g",
      "answerText": "32,4 g",
      "explanation": "massa soluzione = 1,08 × 150 = 162 g; soluto = 20 × 162 / 100 = 32,4 g.",
      "tolerance": 0.01
    },

    {
      "q": "Quale soluzione di ioduro di potassio ha la concentrazione in massa maggiore?",
      "options": [
        "5,00 g in 0,400 kg di solvente",
        "5,00 g in 350 g di solvente",
        "8,00 g in 550 g di solvente",
        "Hanno tutte la stessa concentrazione"
      ],
      "answer": 2,
      "explanation": "% m/m: a) 5,00/405 = 1,23%; b) 5,00/355 = 1,41%; c) 8,00/558 = 1,43% → la c (es. 25, p. 67; il libro non stampa il risultato, calcolo verificato)."
    }

  ]
};
