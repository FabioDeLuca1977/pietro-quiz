// ============================================================
//  data/scienze/scienze-giochi.js  (v1)
//  Cap. 1-2 — Gioca: ordina e classifica
//
//  12 esercizi di tipo «order» e «classify», solo dal libro (fonte e pagina
//  nella spiegazione); verificati da un revisore indipendente.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["scienze-giochi"] = {

  id:              "scienze-giochi",
  subject:         "scienze",
  title:           "Cap. 1-2 — Gioca: ordina e classifica",
  description:     "Prefissi, unità, densità, miscele, grandezze, energia",
  icon:            "🧩",
  version:         1,
  timePerQuestion: 60,

  questions: [

    {
      "type": "order",
      "q": "Metti in ordine i prefissi SI dal più piccolo al più grande.",
      "items": [
        "nano- (n)",
        "micro- (µ)",
        "milli- (m)",
        "kilo- (k)",
        "mega- (M)",
        "giga- (G)"
      ],
      "explanation": "nano = 10⁻⁹, micro = 10⁻⁶, milli = 10⁻³, kilo = 10³, mega = 10⁶, giga = 10⁹ (tabella 3, p. 6)."
    },

    {
      "type": "order",
      "q": "Metti in ordine le unità di volume dalla più piccola alla più grande.",
      "items": [
        "1 mL (= 1 cm³)",
        "1 cL",
        "1 dL",
        "1 L (= 1 dm³)",
        "1 m³"
      ],
      "explanation": "1 cL = 10 mL, 1 dL = 100 mL, 1 L = 1000 mL = 1 dm³ (p. 10); 1 m³ = 1 × 10⁶ cm³, cioè 1000 L (p. 11)."
    },

    {
      "type": "order",
      "q": "Inserisci 2,35 × 10⁻⁵ nella calcolatrice: metti in ordine i passaggi.",
      "items": [
        "Inserisci il coefficiente 2,35",
        "Premi il tasto EXP (o EE)",
        "Inserisci l'esponente 5",
        "Cambia segno all'esponente con ±"
      ],
      "explanation": "Il tasto EXP o EE equivale al «× 10» della notazione scientifica; l'esponente negativo si ottiene alla fine con il tasto ± (Focus, p. 6)."
    },

    {
      "type": "order",
      "q": "Metti in ordine queste sostanze dalla meno densa alla più densa (a 20 °C).",
      "items": [
        "Litio",
        "Sodio",
        "Alluminio",
        "Ferro",
        "Piombo",
        "Oro"
      ],
      "explanation": "Densità in g/cm³: litio 0,53; sodio 0,97; alluminio 2,71; ferro 7,87; piombo 11,35; oro 19,30 (tabella 5, p. 19)."
    },

    {
      "type": "order",
      "q": "Metti in ordine dal calore specifico più alto al più basso.",
      "items": [
        "Acqua",
        "Alcol etilico",
        "Aria",
        "Alluminio",
        "Ferro",
        "Piombo"
      ],
      "explanation": "In J/(g × K): acqua 4,184; alcol etilico 2,46; aria 1,00; alluminio 0,902; ferro 0,451; piombo 0,129. L'acqua ha il calore specifico più alto: per questo mari e laghi fanno da «serbatoio di calore» (tabella 6, p. 26)."
    },

    {
      "type": "order",
      "q": "Metti in ordine queste temperature dalla più bassa alla più alta.",
      "items": [
        "Zero assoluto (0 K)",
        "Azoto che bolle (77 K)",
        "Miscela ghiaccio e sale (−21,1 °C)",
        "Ghiaccio fondente (0 °C)",
        "Acqua bollente (100 °C)",
        "Nucleo del Sole"
      ],
      "explanation": "Con T = t + 273: 77 K = −196 °C, −21,1 °C = 251,9 K, 0 °C = 273 K, 100 °C = 373 K; il nucleo del Sole arriva a 15 milioni di kelvin (pp. 23–24)."
    },

    {
      "type": "classify",
      "q": "Grandezza fondamentale o derivata nel SI?",
      "categories": [
        "Fondamentale",
        "Derivata"
      ],
      "items": [
        {
          "t": "Massa",
          "c": 0
        },
        {
          "t": "Lunghezza",
          "c": 0
        },
        {
          "t": "Intervallo di tempo",
          "c": 0
        },
        {
          "t": "Temperatura",
          "c": 0
        },
        {
          "t": "Forza",
          "c": 1
        },
        {
          "t": "Energia",
          "c": 1
        },
        {
          "t": "Volume",
          "c": 1
        },
        {
          "t": "Densità",
          "c": 1
        }
      ],
      "explanation": "Le sette grandezze fondamentali sono massa, lunghezza, intervallo di tempo, temperatura, quantità di materia, intensità di corrente e intensità luminosa (tabella 1, p. 4). Forza, pressione, energia, volume e densità hanno unità derivate, ottenute moltiplicando e/o dividendo le unità di base (tabella 2, p. 4)."
    },

    {
      "type": "classify",
      "q": "Sostanza pura, miscela omogenea o miscela eterogenea?",
      "categories": [
        "Sostanza pura",
        "Miscela omogenea",
        "Miscela eterogenea"
      ],
      "items": [
        {
          "t": "Acqua distillata",
          "c": 0
        },
        {
          "t": "Rame",
          "c": 0
        },
        {
          "t": "Oro",
          "c": 0
        },
        {
          "t": "Acqua di mare",
          "c": 1
        },
        {
          "t": "Aria",
          "c": 1
        },
        {
          "t": "Bronzo",
          "c": 1
        },
        {
          "t": "Latte",
          "c": 2
        },
        {
          "t": "Granito",
          "c": 2
        }
      ],
      "explanation": "L'acqua distillata è una sostanza pura (p. 42); il rame (p. 43) e l'oro (figura 7, p. 43) sono sostanze pure. Acqua di mare, aria e bronzo sono soluzioni, cioè miscele omogenee (pp. 44–45). Latte e granito sono miscele eterogenee (p. 44)."
    },

    {
      "type": "classify",
      "q": "Classifica le soluzioni in base al loro stato fisico.",
      "categories": [
        "Liquide",
        "Gassose",
        "Solide"
      ],
      "items": [
        {
          "t": "Acqua di mare",
          "c": 0
        },
        {
          "t": "Soluzione disinfettante idroalcolica",
          "c": 0
        },
        {
          "t": "Bevande gasate",
          "c": 0
        },
        {
          "t": "Aria",
          "c": 1
        },
        {
          "t": "Aria umida",
          "c": 1
        },
        {
          "t": "Acciaio (ferro e carbonio)",
          "c": 2
        },
        {
          "t": "Bronzo (rame e stagno)",
          "c": 2
        }
      ],
      "explanation": "Soluzioni liquide: acqua di mare (solido-liquido), idroalcolica (liquido-liquido), bevande gasate (gas-liquido). Gassose: aria (gas-gas) e aria umida (liquido-gas). Solide: le leghe come acciaio e bronzo (tabella 1, p. 45)."
    },

    {
      "type": "classify",
      "q": "Proprietà intensiva o estensiva?",
      "categories": [
        "Intensiva",
        "Estensiva"
      ],
      "items": [
        {
          "t": "Densità",
          "c": 0
        },
        {
          "t": "Temperatura",
          "c": 0
        },
        {
          "t": "Temperatura di ebollizione",
          "c": 0
        },
        {
          "t": "Profumo delle spezie",
          "c": 0
        },
        {
          "t": "Massa",
          "c": 1
        },
        {
          "t": "Volume",
          "c": 1
        },
        {
          "t": "Peso",
          "c": 1
        },
        {
          "t": "Calore",
          "c": 1
        }
      ],
      "explanation": "Le proprietà intensive non dipendono dalle dimensioni del campione: densità, temperatura, profumo delle spezie (p. 19), temperatura di ebollizione (p. 43). Le estensive sì: volume, massa, peso, energia (p. 19) e calore (p. 25)."
    },

    {
      "type": "classify",
      "q": "Energia potenziale o energia cinetica? Classifica gli esempi del libro.",
      "categories": [
        "Potenziale",
        "Cinetica"
      ],
      "items": [
        {
          "t": "Sciatrice ferma al cancelletto",
          "c": 0
        },
        {
          "t": "Acqua trattenuta dalla diga",
          "c": 0
        },
        {
          "t": "Gasolio prima di bruciare",
          "c": 0
        },
        {
          "t": "Sciatrice in discesa",
          "c": 1
        },
        {
          "t": "Acqua che esce dalla diga aperta",
          "c": 1
        },
        {
          "t": "Automobile in movimento",
          "c": 1
        }
      ],
      "explanation": "L'energia potenziale dipende dalla posizione (sciatrice alla partenza, acqua nel bacino) o è immagazzinata nelle molecole (gasolio, energia chimica potenziale). L'energia cinetica è quella di un corpo in movimento (pp. 21–22)."
    },

    {
      "type": "classify",
      "q": "Solido, liquido o gas? Assegna ogni caratteristica allo stato fisico giusto.",
      "categories": [
        "Solido",
        "Liquido",
        "Gas"
      ],
      "items": [
        {
          "t": "Forma rigida e volume definito",
          "c": 0
        },
        {
          "t": "Particelle che possono solo vibrare",
          "c": 0
        },
        {
          "t": "Volume definito, forma del recipiente",
          "c": 1
        },
        {
          "t": "Particelle che scorrono le une sulle altre",
          "c": 1
        },
        {
          "t": "Occupa tutto il volume a disposizione",
          "c": 2
        },
        {
          "t": "Facilmente comprimibile",
          "c": 2
        }
      ],
      "explanation": "Solido: forma rigida e volume definito, particelle in stretto contatto che possono solo vibrare. Liquido: volume definito ma forma del recipiente, particelle che scorrono. Gas: si espande in tutto il volume disponibile ed è facilmente comprimibile per lo spazio vuoto tra le particelle (pp. 40–41)."
    }

  ]
};
