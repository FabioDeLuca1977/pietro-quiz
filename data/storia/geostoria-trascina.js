// ============================================================
//  data/storia/geostoria-trascina.js  (v1)
//  Trascina al posto giusto: popoli e città sulle cartine, la piramide della
//  società egizia, le linee del tempo, i saldi, il viaggio dell'alfabeto.
//
//  Gioco type:"place" (vedi index.html). Cartine da Natural Earth con le città
//  alle coordinate reali (img/storia); zone sulle stesse posizioni dei numeri.
//  Contenuti solo dal libro, pagina nella spiegazione.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["geostoria-trascina"] = {

  id:              "geostoria-trascina",
  subject:         "storia",
  title:           "Trascina al posto giusto — cartine, piramide, linee del tempo",
  description:     "Sposta con il dito popoli, città, classi sociali ed eventi",
  icon:            "✋",
  version:         1,
  timePerQuestion: 0,

  questions: [

    {
      "type": "place",
      "q": "Trascina ogni popolo nella sua zona.",
      "img": "img/storia/vicino-oriente.svg",
      "zones": [
        { "x": 45.7, "y": 37.8, "side": "r", "name": "1 (costa del Libano)" },
        { "x": 34.5, "y": 58.9, "side": "l", "name": "2 (Gaza)" },
        { "x": 45.9, "y": 57.5, "side": "r", "name": "3 (Gerusalemme)" },
        { "x": 23.9, "y": 66.3, "side": "b", "name": "4 (Menfi, sul Nilo)" },
        { "x": 83.7, "y": 45.6, "side": "b", "name": "5 (Babilonia)" },
        { "x": 16.4, "y": 14.3, "side": "r", "name": "6 (Anatolia meridionale)" }
      ],
      "items": [
        { "t": "Fenici", "z": 0 },
        { "t": "Filistei", "z": 1 },
        { "t": "Ebrei", "z": 2 },
        { "t": "Egizi", "z": 3 },
        { "t": "Babilonesi", "z": 4 },
        { "t": "Lici", "z": 5 }
      ],
      "explanation": "Fenici sulla costa settentrionale (p. 94); Filistei nella Palestina meridionale, intorno a Gaza (pp. 85, 89); Ebrei con Gerusalemme (pp. 85, 90); Egizi sul Nilo, Menfi (p. 71); Babilonia in Mesopotamia (p. 92); Lici nell'Anatolia meridionale (p. 85)."
    },

    {
      "type": "place",
      "q": "Egitto: trascina ogni nome al suo posto lungo il Nilo.",
      "img": "img/storia/egitto.svg",
      "zones": [
        { "x": 37.7, "y": 8.8, "side": "r", "name": "1 (il delta)" },
        { "x": 40.8, "y": 21.5, "side": "r", "name": "2" },
        { "x": 36.4, "y": 44.6, "side": "r", "name": "3" },
        { "x": 70.4, "y": 65.6, "side": "l", "name": "4" },
        { "x": 73.6, "y": 82.9, "side": "l", "name": "5" }
      ],
      "items": [
        { "t": "Basso Egitto (delta)", "z": 0 },
        { "t": "Menfi", "z": 1 },
        { "t": "Akhetaton", "z": 2 },
        { "t": "Tebe", "z": 3 },
        { "t": "Assuan (cateratta)", "z": 4 }
      ],
      "explanation": "Il delta è il Basso Egitto (p. 65); Menfi vicino all'attuale Il Cairo (p. 71); Akhetaton, presso Tell el-Amarna, più a nord di Tebe (p. 74); Tebe, l'attuale Luxor (pp. 72–73); una cateratta presso Assuan (p. 64)."
    },

    {
      "type": "place",
      "q": "I Fenici nel Mediterraneo: trascina la città madre e le colonie al loro posto.",
      "img": "img/storia/mediterraneo-fenici.svg",
      "zones": [
        { "x": 96.1, "y": 71.8, "side": "l", "name": "1" },
        { "x": 42.7, "y": 61.9, "side": "b", "name": "2" },
        { "x": 5.9, "y": 52, "side": "r", "name": "3" },
        { "x": 46, "y": 43.4, "side": "r", "name": "4" },
        { "x": 36.5, "y": 38.7, "side": "l", "name": "5" },
        { "x": 91.3, "y": 60.8, "side": "t", "name": "6" }
      ],
      "items": [
        { "t": "Tiro", "z": 0 },
        { "t": "Cartagine", "z": 1 },
        { "t": "Cadice", "z": 2 },
        { "t": "Mozia", "z": 3 },
        { "t": "Cagliari", "z": 4 },
        { "t": "Cipro", "z": 5 }
      ],
      "explanation": "Tiro, la città più potente della Fenicia (p. 94); Cartagine nell'attuale Tunisia, Cadice in Spagna, Mozia in Sicilia, Cagliari in Sardegna; i Fenici raggiunsero anche Cipro (p. 95)."
    },

    {
      "type": "place",
      "q": "La società egizia era una piramide. Trascina ogni gruppo al suo livello, dal vertice alla base.",
      "img": "img/storia/piramide-egizia.svg",
      "zones": [
        { "x": 50, "y": 15.5, "w": 26, "h": 13, "name": "vertice" },
        { "x": 50, "y": 39, "w": 40, "h": 13, "name": "2° livello" },
        { "x": 50, "y": 62.5, "w": 50, "h": 13, "name": "3° livello" },
        { "x": 50, "y": 86, "w": 62, "h": 13, "name": "base" }
      ],
      "items": [
        { "t": "Faraone", "z": 0 },
        { "t": "Sacerdoti, visir e scribi", "z": 1 },
        { "t": "Soldati e artigiani", "z": 2 },
        { "t": "Contadini e schiavi", "z": 3 }
      ],
      "explanation": "Qui la piramide è semplificata in quattro livelli. Al vertice il faraone, un dio (p. 66); poi i sacerdoti privilegiati e la burocrazia del visir e degli scribi (pp. 66–67); le classi minori: soldati e artigiani; ancora più in basso i contadini, e gli schiavi in condizioni non molto peggiori (pp. 67–68)."
    },

    {
      "type": "place",
      "q": "Egizi: trascina ogni evento sulla sua data (a.C.).",
      "img": "img/storia/tempo-egizi.svg",
      "zones": [
        { "x": 66.7, "y": 10, "w": 60, "h": 12, "name": "3100" },
        { "x": 66.7, "y": 26, "w": 60, "h": 12, "name": "2650" },
        { "x": 66.7, "y": 42, "w": 60, "h": 12, "name": "1750" },
        { "x": 66.7, "y": 58, "w": 60, "h": 12, "name": "1350" },
        { "x": 66.7, "y": 74, "w": 60, "h": 12, "name": "1275" },
        { "x": 66.7, "y": 90, "w": 60, "h": 12, "name": "525" }
      ],
      "items": [
        { "t": "Narmer unifica l'Egitto", "z": 0 },
        { "t": "Zoser: prima piramide", "z": 1 },
        { "t": "Arrivano gli Hyksos", "z": 2 },
        { "t": "Amenofi IV e il dio Aton", "z": 3 },
        { "t": "Battaglia di Qadesh", "z": 4 },
        { "t": "Battaglia di Pelusio", "z": 5 }
      ],
      "explanation": "Circa 3100 (p. 70); circa 2650 (p. 71); circa 1750 (p. 72); circa 1350 (p. 74); 1275 (p. 75); 525 (p. 77)."
    },

    {
      "type": "place",
      "q": "Ebrei: trascina ogni evento sulla sua data (a.C.).",
      "img": "img/storia/tempo-ebrei.svg",
      "zones": [
        { "x": 66.7, "y": 10, "w": 60, "h": 12, "name": "circa 1900" },
        { "x": 66.7, "y": 26, "w": 60, "h": 12, "name": "circa 1200" },
        { "x": 66.7, "y": 42, "w": 60, "h": 12, "name": "XI sec." },
        { "x": 66.7, "y": 58, "w": 60, "h": 12, "name": "1000–960" },
        { "x": 66.7, "y": 74, "w": 60, "h": 12, "name": "586" },
        { "x": 66.7, "y": 90, "w": 60, "h": 12, "name": "539" }
      ],
      "items": [
        { "t": "Abramo verso Canaan", "z": 0 },
        { "t": "Mosè e l'Esodo", "z": 1 },
        { "t": "Età dei Giudici", "z": 2 },
        { "t": "Regno di David", "z": 3 },
        { "t": "Esilio babilonese", "z": 4 },
        { "t": "Ciro: il ritorno", "z": 5 }
      ],
      "explanation": "Secondo la tradizione biblica circa 1900 (p. 87); l'Esodo intorno al 1200 secondo la dispensa del prof (il libro: XIII secolo, p. 88); XI secolo (p. 89); 1000–960 circa (p. 90); 586 e 539 (p. 92)."
    },

    {
      "type": "place",
      "q": "Completa le formule: trascina ogni dato nella casella giusta.",
      "ratio": 0.62,
      "texts": [
        { "x": 21, "y": 21, "t": "Saldo", "size": 0.95 },
        { "x": 21, "y": 35, "t": "naturale =", "size": 0.95 },
        { "x": 66, "y": 28, "t": "−", "size": 1.6 },
        { "x": 21, "y": 65, "t": "Saldo", "size": 0.95 },
        { "x": 21, "y": 79, "t": "migratorio =", "size": 0.95 },
        { "x": 66, "y": 72, "t": "−", "size": 1.6 }
      ],
      "zones": [
        { "x": 52, "y": 28, "w": 22, "h": 26, "name": "naturale, primo termine" },
        { "x": 84, "y": 28, "w": 22, "h": 26, "name": "naturale, secondo termine" },
        { "x": 52, "y": 72, "w": 22, "h": 26, "name": "migratorio, primo termine" },
        { "x": 84, "y": 72, "w": 22, "h": 26, "name": "migratorio, secondo termine" }
      ],
      "items": [
        { "t": "Nati vivi", "z": 0 },
        { "t": "Morti", "z": 1 },
        { "t": "Immigrati", "z": 2 },
        { "t": "Emigrati", "z": 3 }
      ],
      "explanation": "Saldo naturale = nati vivi − morti; saldo migratorio = immigrati − emigrati, in un anno; la somma dei due è il saldo demografico (p. 111)."
    },

    {
      "type": "place",
      "q": "L'alfabeto fenicio (22 consonanti) dopo i Fenici: trascina ogni nome accanto alla frase giusta.",
      "ratio": 0.75,
      "texts": [
        { "x": 27, "y": 18, "t": "Aggiungono le vocali:", "size": 0.9 },
        { "x": 27, "y": 44, "t": "Lo adattano", "size": 0.9 },
        { "x": 27, "y": 56, "t": "alla loro lingua:", "size": 0.9 },
        { "x": 27, "y": 82, "t": "Ci arriva fino a noi:", "size": 0.9 }
      ],
      "zones": [
        { "x": 77, "y": 18, "w": 40, "h": 22, "name": "aggiungono le vocali" },
        { "x": 77, "y": 50, "w": 40, "h": 22, "name": "lo adattano alla loro lingua" },
        { "x": 77, "y": 82, "w": 40, "h": 22, "name": "arriva fino a noi" }
      ],
      "items": [
        { "t": "Greci", "z": 0 },
        { "t": "Etruschi", "z": 1 },
        { "t": "Alfabeto latino", "z": 2 }
      ],
      "explanation": "I Greci derivarono dal fenicio il loro alfabeto e aggiunsero le vocali; l'alfabeto fenicio fu adattato anche dagli Etruschi alla propria lingua e da lì passò nell'alfabeto latino, fino al nostro (p. 96)."
    },

    {
      "type": "place",
      "q": "Gli Stati di oggi: trascina il nome di ogni Stato sul suo numero. Dove vivevano Egizi, Fenici, Mesopotamici, Ittiti?",
      "img": "img/storia/stati-vicino-oriente.svg",
      "zones": [
        { "x": 26.4, "y": 53.4, "side": "r", "name": "1" },
        { "x": 49.6, "y": 28.2, "side": "l", "name": "2" },
        { "x": 60, "y": 23.6, "side": "b", "name": "3" },
        { "x": 76.1, "y": 30.8, "side": "b", "name": "4" },
        { "x": 44.6, "y": 10.5, "side": "r", "name": "5" },
        { "x": 28.6, "y": 85.9, "side": "r", "name": "6" }
      ],
      "items": [
        { "t": "Egitto", "z": 0 },
        { "t": "Libano", "z": 1 },
        { "t": "Siria", "z": 2 },
        { "t": "Iraq", "z": 3 },
        { "t": "Turchia", "z": 4 },
        { "t": "Sudan", "z": 5 }
      ],
      "explanation": "1 Egitto: gli Egizi lungo il Nilo. 2 Libano: i Fenici, sulla costa dell'odierno Libano (p. 94 e dispensa del prof). 3 Siria: gli Egizi del Nuovo regno vi estendono il loro potere (p. 74). 4 Iraq: la Mesopotamia di Sumeri, Babilonesi e Assiri, «oggi in gran parte Iraq» (cap. 2, p. 36). 5 Turchia: l'Anatolia di Ittiti e Lici (l'Anatolia è la parte asiatica della Turchia). 6 Sudan: la Nubia, «l'attuale Sudan» (p. 64). Confini da Natural Earth."
    },

    {
      "type": "place",
      "q": "Le colonie dei Fenici negli Stati di oggi: trascina il nome di ogni Stato sul suo numero.",
      "img": "img/storia/stati-mediterraneo.svg",
      "zones": [
        { "x": 15.3, "y": 35.5, "side": "r", "name": "1" },
        { "x": 9, "y": 78.3, "side": "r", "name": "2" },
        { "x": 41.6, "y": 67.2, "side": "r", "name": "3" },
        { "x": 48.2, "y": 21.7, "side": "r", "name": "4" },
        { "x": 90, "y": 63.8, "side": "t", "name": "5" },
        { "x": 95.7, "y": 70, "side": "l", "name": "6" }
      ],
      "items": [
        { "t": "Spagna", "z": 0 },
        { "t": "Marocco", "z": 1 },
        { "t": "Tunisia", "z": 2 },
        { "t": "Italia", "z": 3 },
        { "t": "Cipro", "z": 4 },
        { "t": "Libano", "z": 5 }
      ],
      "explanation": "1 Spagna: Cadice. 2 Marocco: Tangeri. 3 Tunisia: Utica e Cartagine, «nell'attuale Tunisia». 4 Italia: Palermo e Mozia in Sicilia, Cagliari e Nora in Sardegna. 5 Cipro, raggiunta dai Fenici. 6 Libano: Tiro e le altre città fenicie (p. 95 e p. 94). Confini da Natural Earth."
    }

  ]
};
