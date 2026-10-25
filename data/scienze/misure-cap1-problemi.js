// ============================================================
//  data/scienze/misure-cap1-problemi.js  (v1)
//  Unità A — Cap. 1 PROBLEMI (pagg. 5-33)
//
//  39 domande. Problemi con risposta da scrivere (type:"numeric") e qualche scelta multipla, senza timer. Quelli con «p. N» sono del libro (risultato stampato);
//  gli altri sono creati sul loro modello. Tutti i calcoli verificati.
//  Fonte: foto del libro di scienze, ottobre 2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["misure-cap1-problemi"] = {

  id:              "misure-cap1-problemi",
  subject:         "scienze",
  title:           "Cap. 1 — Problemi",
  description:     "Conversioni, densità, temperature, calore, errore % · risposta da scrivere",
  icon:            "🧮",
  version:         1,
  timePerQuestion: 0,

  questions: [

    {
      "q": "Scrivi in notazione scientifica 0,0000457 m.",
      "options": [
        "4,57 × 10⁻⁵ m",
        "4,57 × 10⁵ m",
        "45,7 × 10⁻⁶ m",
        "4,57 × 10⁻⁴ m"
      ],
      "answer": 0,
      "explanation": "La virgola si sposta di 5 posti verso destra → esponente negativo: 4,57 × 10⁻⁵ m. 45,7 × 10⁻⁶ ha il coefficiente maggiore di 10."
    },

    {
      "q": "Scrivi in notazione scientifica 6 280 000 g.",
      "options": [
        "6,28 × 10⁻⁶ g",
        "6,28 × 10⁶ g",
        "628 × 10⁴ g",
        "6,28 × 10⁵ g"
      ],
      "answer": 1,
      "explanation": "La virgola si sposta di 6 posti verso sinistra → esponente positivo: 6,28 × 10⁶ g."
    },

    {
      "q": "L'unità astronomica è circa 149 600 000 km. Scritta in notazione scientifica con tre cifre significative è:",
      "options": [
        "1,50 × 10⁸ km",
        "1,496 × 10⁸ km",
        "1,50 × 10⁹ km",
        "1,50 × 10⁻⁸ km"
      ],
      "answer": 0,
      "explanation": "149 600 000 = 1,496 × 10⁸; con tre cifre significative si arrotonda a 1,50 × 10⁸ km (es. 30, p. 32)."
    },

    {
      "q": "Qual è il risultato corretto di 3,2 × 1,456?",
      "options": [
        "4,6592",
        "4,66",
        "4,7",
        "5"
      ],
      "answer": 2,
      "explanation": "3,2 ha 2 cifre significative e limita il risultato: 4,6592 si arrotonda a 4,7."
    },

    {
      "q": "Qual è il risultato corretto di 2,345 + 10,1 + 0,72?",
      "options": [
        "13,165",
        "13,17",
        "13,2",
        "13"
      ],
      "answer": 2,
      "explanation": "Nell'addizione conta il numero di cifre decimali: 10,1 ne ha una, quindi 13,165 diventa 13,2."
    },

    {
      "q": "Qual è il risultato corretto di 27 + 12,6 + 124,86?",
      "options": [
        "164,46",
        "164,5",
        "164",
        "160"
      ],
      "answer": 2,
      "explanation": "27 non ha cifre decimali e limita il risultato: 164,46 diventa 164 (Mettiti alla prova 5c, p. 17)."
    },

    {
      "q": "Qual è il risultato corretto di 89,5 : 2,41?",
      "options": [
        "37,137",
        "37,14",
        "37,1",
        "37"
      ],
      "answer": 2,
      "explanation": "Entrambi i termini hanno 3 cifre significative: 37,137… diventa 37,1 (Mettiti alla prova 5d, p. 17)."
    },

    {
      "q": "Un oggetto metallico ha massa 31,59 g e volume 3,00 mL. Di quale metallo si tratta (tabella 5)?",
      "options": [
        "Rame (8,93 g/cm³)",
        "Argento (10,53 g/cm³)",
        "Piombo (11,35 g/cm³)",
        "Ferro (7,87 g/cm³)"
      ],
      "answer": 1,
      "explanation": "d = 31,59 g / 3,00 mL = 10,53 → con 3 cifre significative 10,5 g/mL: corrisponde all'argento (come il problema A, p. 20)."
    },

    {
      "type": "numeric",
      "q": "Quanti centimetri sono 7,2 km?",
      "answer": 720000.0,
      "unit": "cm",
      "answerText": "7,2 × 10⁵ cm",
      "explanation": "1 km = 10³ m e 1 m = 10² cm, quindi 1 km = 10⁵ cm: 7,2 km × (10⁵ cm / 1 km) = 7,2 × 10⁵ cm."
    },

    {
      "type": "numeric",
      "q": "Quanti metri sono 450 nm?",
      "answer": 4.5e-07,
      "unit": "m",
      "answerText": "4,5 × 10⁻⁷ m",
      "explanation": "1 nm = 10⁻⁹ m: 450 nm = 450 × 10⁻⁹ m = 4,5 × 10⁻⁷ m."
    },

    {
      "type": "numeric",
      "q": "Un monopattino è lungo 1,08 m. A quanti nanometri corrisponde?",
      "answer": 1080000000.0,
      "unit": "nm",
      "answerText": "1,08 × 10⁹ nm",
      "explanation": "1 m = 10⁹ nm: 1,08 m × (1 nm / 10⁻⁹ m) = 1,08 × 10⁹ nm (Mettiti alla prova 2, p. 8)."
    },

    {
      "type": "numeric",
      "q": "Un oggetto ha massa 2,75 g. Quanto vale in kilogrammi?",
      "answer": 0.00275,
      "unit": "kg",
      "answerText": "2,75 × 10⁻³ kg",
      "explanation": "2,75 g × (1 kg / 1000 g) = 2,75 × 10⁻³ kg: al numeratore va l'unità richiesta (come l'esempio di p. 9)."
    },

    {
      "type": "numeric",
      "q": "Un oggetto ha massa 2,75 g. Quanto vale in milligrammi?",
      "answer": 2750,
      "unit": "mg",
      "answerText": "2,75 × 10³ mg (2750 mg)",
      "explanation": "1 g = 1000 mg: 2,75 g × (1000 mg / 1 g) = 2750 mg."
    },

    {
      "type": "numeric",
      "q": "Un bicchiere contiene 450 cm³ di acqua. A quanti m³ corrispondono?",
      "answer": 0.00045,
      "unit": "m³",
      "answerText": "4,5 × 10⁻⁴ m³",
      "explanation": "1 m³ = (100 cm)³ = 10⁶ cm³: 450 cm³ × (1 m³ / 10⁶ cm³) = 4,5 × 10⁻⁴ m³ (come la tazza di latte, p. 11)."
    },

    {
      "type": "numeric",
      "q": "Il volume di un liquido in un cilindro è 12,7 mL. Quanti litri sono?",
      "answer": 0.0127,
      "unit": "L",
      "answerText": "0,0127 L = 1,27 × 10⁻² L",
      "explanation": "1 mL = 1/1000 di L: 12,7 mL = 0,0127 L (Mettiti alla prova 3, p. 11)."
    },

    {
      "type": "numeric",
      "q": "Una lattina contiene 33 cL. Quanti mL sono?",
      "answer": 330,
      "unit": "mL",
      "answerText": "330 mL",
      "explanation": "1 cL = 10 mL: 33 cL = 330 mL = 0,33 L (es. 20, p. 32)."
    },

    {
      "type": "numeric",
      "q": "Quante cifre significative ha 2,050 × 10³ m?",
      "answer": 4,
      "unit": "",
      "answerText": "4 cifre significative",
      "explanation": "In notazione scientifica contano tutte le cifre del coefficiente: 2, 0, 5, 0.",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Quante cifre significative ha 0,0300 kg?",
      "answer": 3,
      "unit": "",
      "answerText": "3 cifre significative",
      "explanation": "Gli zeri a sinistra non contano; i due zeri finali a destra della virgola sì: 3, 0, 0.",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Quante cifre significative ha 0,00406 g?",
      "answer": 3,
      "unit": "",
      "answerText": "3 cifre significative",
      "explanation": "Gli zeri a sinistra non contano; lo zero tra 4 e 6 sì: 4, 0, 6 (regole b e c, p. 15).",
      "tolerance": 0
    },

    {
      "type": "numeric",
      "q": "Un pezzo di legno ha m = 74,5 g e V = 86,4 cm³. Qual è la sua densità?",
      "answer": 0.862,
      "unit": "g/cm³",
      "answerText": "0,862 g/cm³",
      "explanation": "d = m / V = 74,5 / 86,4 = 0,862 g/cm³, con 3 cifre significative (Mettiti alla prova 6, p. 20)."
    },

    {
      "type": "numeric",
      "q": "Qual è il volume di 175 g di etanolo (d = 0,789 g/cm³)?",
      "answer": 222,
      "unit": "cm³",
      "answerText": "222 cm³",
      "explanation": "V = m / d = 175 / 0,789 = 221,8… → 222 cm³ (come il problema B, p. 20)."
    },

    {
      "type": "numeric",
      "q": "Qual è il volume di 35,69 g di nichel (d = 8,91 g/cm³)?",
      "answer": 4.01,
      "unit": "cm³",
      "answerText": "4,01 cm³",
      "explanation": "V = m / d = 35,69 / 8,91 = 4,005… → 4,01 cm³ (Mettiti alla prova 7, p. 20)."
    },

    {
      "type": "numeric",
      "q": "Qual è la massa di un chiodo di ferro (d = 7,87 g/cm³) di volume 0,750 cm³?",
      "answer": 5.9,
      "unit": "g",
      "answerText": "5,90 g",
      "explanation": "m = d × V = 7,87 × 0,750 = 5,9025 → 5,90 g (Mettiti alla prova 8, p. 20)."
    },

    {
      "type": "numeric",
      "q": "Qual è la massa di 2,50 cm³ di piombo (d = 11,35 g/cm³)?",
      "answer": 28.4,
      "unit": "g",
      "answerText": "28,4 g",
      "explanation": "m = d × V = 11,35 × 2,50 = 28,375 → 28,4 g (3 cifre significative, come 2,50)."
    },

    {
      "type": "numeric",
      "q": "Un cristallo di saccarosio di 4,364 mg occupa 2,64 mm³. Qual è la densità?",
      "answer": 1.65,
      "unit": "g/cm³",
      "answerText": "1,65 g/cm³",
      "explanation": "4,364 mg = 4,364 × 10⁻³ g; 2,64 mm³ = 2,64 × 10⁻³ cm³; d = 4,364 / 2,64 = 1,65 g/cm³ (es. 37, p. 33)."
    },

    {
      "type": "numeric",
      "q": "Una temperatura di 60 °C, in kelvin, è:",
      "answer": 333,
      "unit": "K",
      "answerText": "333 K",
      "explanation": "T(K) = t(°C) + 273 = 60 + 273 = 333 K (Mettiti alla prova 9, p. 24).",
      "tolerance": 0.005
    },

    {
      "type": "numeric",
      "q": "Un campione di ghiaccio è a 269 K. Quanto vale in °C?",
      "answer": -4,
      "unit": "°C",
      "answerText": "−4 °C",
      "explanation": "t(°C) = T(K) − 273 = 269 − 273 = −4 °C (Mettiti alla prova 10, p. 24). Attenzione al segno meno.",
      "tolerance": 0.05
    },

    {
      "type": "numeric",
      "q": "L'azoto liquido bolle a 77 K. Quanto vale in °C?",
      "answer": -196,
      "unit": "°C",
      "answerText": "−196 °C",
      "explanation": "t(°C) = 77 − 273 = −196 °C (Mettiti alla prova 11, p. 24).",
      "tolerance": 0.005
    },

    {
      "type": "numeric",
      "q": "Un termometro segna 36,6 °C. Quanti gradi Fahrenheit sono?",
      "answer": 97.9,
      "unit": "°F",
      "answerText": "97,9 °F",
      "explanation": "Da t(°C) = [t(°F) − 32] / 1,8 si ricava t(°F) = t(°C) × 1,8 + 32 = 36,6 × 1,8 + 32 = 97,9 °F (es. 42, p. 33).",
      "tolerance": 0.005
    },

    {
      "type": "numeric",
      "q": "Quanta energia serve per scaldare 200 g di acqua da 15 °C a 65 °C? (C = 4,18 J/g × K)",
      "answer": 41.8,
      "unit": "kJ",
      "answerText": "41,8 kJ",
      "explanation": "ΔT = 65 − 15 = 50 K; q = C × m × ΔT = 4,18 × 200 × 50 = 41 800 J = 41,8 kJ."
    },

    {
      "type": "numeric",
      "q": "Quanto calore serve per portare 500 g di acqua da 20 °C a 100 °C? (C = 4,18 J/g × °C)",
      "answer": 167,
      "unit": "kJ",
      "answerText": "167 kJ",
      "explanation": "ΔT = 80 °C; q = 4,18 × 500 × 80 = 167 200 J = 167 kJ (es. 46, p. 33)."
    },

    {
      "type": "numeric",
      "q": "Quanta energia serve per portare 50,0 g di acqua da 20,0 °C a 60,0 °C? (C = 4,18 J/g × °C)",
      "answer": 8.36,
      "unit": "kJ",
      "answerText": "8,36 kJ",
      "explanation": "ΔT = 40,0 °C; q = 4,18 × 50,0 × 40,0 = 8360 J = 8,36 kJ (Mettiti alla prova 15, p. 27)."
    },

    {
      "type": "numeric",
      "q": "Si forniscono 356 J a 5,00 g di acqua (C = 4,184 J/g × K). Di quanto aumenta la temperatura?",
      "answer": 17.0,
      "unit": "K",
      "answerText": "17,0 K",
      "explanation": "ΔT = q / (C × m) = 356 / (4,184 × 5,00) = 17,0 K (Mettiti alla prova 13, p. 27)."
    },

    {
      "type": "numeric",
      "q": "Si forniscono 5,00 kJ a 100,0 g di alluminio (C = 0,902 J/g × K). Di quanto aumenta la temperatura?",
      "answer": 55.4,
      "unit": "K",
      "answerText": "55,4 K",
      "explanation": "ΔT = q / (C × m) = 5000 J / (0,902 × 100,0) = 55,4 K. Attenzione: 5,00 kJ = 5000 J."
    },

    {
      "type": "numeric",
      "q": "0,250 L di acqua a 23,0 °C ricevono 50 450 J (C = 4,18 J/g × °C, densità 1 g/mL). Qual è la temperatura finale?",
      "answer": 71.3,
      "unit": "°C",
      "answerText": "71,3 °C",
      "explanation": "m = 250 g; ΔT = 50 450 / (4,18 × 250) = 48,3 °C; T finale = 23,0 + 48,3 = 71,3 °C (Mettiti alla prova 12, p. 27).",
      "tolerance": 0.005
    },

    {
      "type": "numeric",
      "q": "Si forniscono 871 kJ a 5,4 L di acqua a 293 K (C = 4,18 kJ/kg × K, densità 1,00 g/mL). Qual è la temperatura finale?",
      "answer": 332,
      "unit": "K",
      "answerText": "332 K",
      "explanation": "m = 5,4 kg; ΔT = 871 / (4,18 × 5,4) = 38,6 K; T finale = 293 + 38,6 ≈ 332 K (es. 47, p. 33).",
      "tolerance": 0.005
    },

    {
      "type": "numeric",
      "q": "Uno studente misura 25,6 g; il valore vero è 26,4 g. Qual è l'errore percentuale?",
      "answer": -3.03,
      "unit": "%",
      "answerText": "−3,03%",
      "explanation": "e% = (25,6 − 26,4) / 26,4 × 100 = −3,03%: si divide per il valore vero (Mettiti alla prova 16, p. 28).",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "Uno studente misura 14,3 g; il valore vero è 14,0 g. Qual è l'errore percentuale?",
      "answer": 2.14,
      "unit": "%",
      "answerText": "+2,14%",
      "explanation": "e% = (14,3 − 14,0) / 14,0 × 100 = +2,14% (es. 50, p. 33).",
      "tolerance": 0.01
    },

    {
      "type": "numeric",
      "q": "La densità misurata dell'alluminio è 2,65 g/cm³, quella vera 2,71 g/cm³. Qual è l'errore percentuale?",
      "answer": -2.21,
      "unit": "%",
      "answerText": "−2,21%",
      "explanation": "e% = (2,65 − 2,71) / 2,71 × 100 = −2,21%: il segno meno indica una misura più bassa del valore vero.",
      "tolerance": 0.01
    }

  ]
};
