// ============================================================
//  data/storia/geostoria-cartine.js  (v1)
//  Dove stanno? Popoli e città sulla cartina — Egizi, Ebrei, Fenici
//
//  Cartine in img/storia/: coste, fiumi e laghi da Natural Earth (1:10m),
//  città alle coordinate reali (generate con uno script, non disegnate a mano).
//  Luoghi e popoli come nel libro: carte di pp. 65, 72, 85, 90, 97 e testo.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["geostoria-cartine"] = {

  id:              "geostoria-cartine",
  subject:         "storia",
  title:           "Cartine — dove stanno popoli e città",
  description:     "Egizi, Ebrei, Fenici: trova il numero giusto sulla cartina",
  icon:            "🗺️",
  version:         1,
  timePerQuestion: 30,

  questions: [

    // ── VICINO ORIENTE ─────────────────────────────
    {
      "q": "Quale numero indica la striscia di costa dove si stanziarono i Fenici (l'odierno Libano)?",
      "img": "img/storia/vicino-oriente.svg",
      "options": ["1", "2", "3", "6"],
      "answer": 0,
      "explanation": "Il numero 1 è sulla costa settentrionale della Palestina, dove sorgevano Tiro e Sidone (p. 94)."
    },
    {
      "q": "Quale numero indica la Palestina meridionale, intorno a Gaza, dove si stabilirono i Filistei?",
      "img": "img/storia/vicino-oriente.svg",
      "options": ["2", "1", "3", "4"],
      "answer": 0,
      "explanation": "Il numero 2 è Gaza: i Filistei vi crearono una federazione di cinque città-Stato (pp. 85, 89)."
    },
    {
      "q": "Quale numero indica Gerusalemme, conquistata da David?",
      "img": "img/storia/vicino-oriente.svg",
      "options": ["3", "1", "2", "5"],
      "answer": 0,
      "explanation": "Il numero 3 è Gerusalemme, nell'interno, vicino al fiume Giordano e al mar Morto (pp. 85, 90)."
    },
    {
      "q": "Quale numero indica Menfi, capitale dell'Egitto nell'Antico regno?",
      "img": "img/storia/vicino-oriente.svg",
      "options": ["4", "2", "5", "6"],
      "answer": 0,
      "explanation": "Il numero 4 è Menfi, all'inizio del delta del Nilo (p. 71)."
    },
    {
      "q": "Quale numero indica Babilonia, dove nel 586 a.C. fu deportata parte degli Ebrei?",
      "img": "img/storia/vicino-oriente.svg",
      "options": ["5", "4", "6", "1"],
      "answer": 0,
      "explanation": "Il numero 5 è Babilonia, tra il Tigri e l'Eufrate: l'«esilio babilonese» (p. 92)."
    },
    {
      "q": "Quale numero indica l'Anatolia meridionale, dove si stabilirono i Lici, uno dei popoli del mare?",
      "img": "img/storia/vicino-oriente.svg",
      "options": ["6", "1", "5", "2"],
      "answer": 0,
      "explanation": "Il numero 6 è sulla costa sud dell'Anatolia (p. 85)."
    },
    {
      "q": "Lungo quale fiume si trova il numero 4?",
      "img": "img/storia/vicino-oriente.svg",
      "options": ["Nilo", "Eufrate", "Giordano", "Tigri"],
      "answer": 0,
      "explanation": "Il numero 4 è Menfi, sul Nilo (p. 71). Tigri ed Eufrate sono i fiumi della Mesopotamia, vicino al numero 5."
    },
    {
      "q": "Quale fiume scorre vicino al numero 3?",
      "img": "img/storia/vicino-oriente.svg",
      "options": ["Giordano", "Nilo", "Eufrate", "Tigri"],
      "answer": 0,
      "explanation": "Il Giordano, che scende al mar Morto. Gli Ebrei si stabilirono tra la valle del Giordano, la Galilea e la costa (p. 88)."
    },
    {
      "q": "La Palestina era una «zona di transito». Tra quali numeri passavano le carovane?",
      "img": "img/storia/vicino-oriente.svg",
      "options": ["Tra l'Egitto (4) e la Mesopotamia (5)", "Tra Cipro e Creta", "Solo tra 1 e 2, lungo la costa", "Tra 5 e il Mar Rosso"],
      "answer": 0,
      "explanation": "Le carovane portavano le merci da sud (Egitto, Arabia, golfo Persico) verso nord (Anatolia e Mesopotamia) (p. 85)."
    },

    // ── EGITTO ─────────────────────────────
    {
      "q": "Quale numero indica il delta del Nilo, cioè il Basso Egitto?",
      "img": "img/storia/egitto.svg",
      "options": ["1", "3", "4", "5"],
      "answer": 0,
      "explanation": "Il Basso Egitto è il delta, a nord, vicino al Mediterraneo (p. 65)."
    },
    {
      "q": "Quale numero indica Tebe, città d'origine dei faraoni del Medio regno e capitale nel Nuovo regno?",
      "img": "img/storia/egitto.svg",
      "options": ["4", "2", "3", "5"],
      "answer": 0,
      "explanation": "Tebe (l'attuale Luxor), nel medio corso del Nilo, meno esposta di Menfi alle invasioni (pp. 72–73)."
    },
    {
      "q": "Quale numero indica Akhetaton, la nuova capitale fondata da Akhenaton?",
      "img": "img/storia/egitto.svg",
      "options": ["3", "1", "4", "5"],
      "answer": 0,
      "explanation": "Akhetaton sorgeva più a nord di Tebe, vicino all'odierno villaggio di Tell el-Amarna (p. 74)."
    },
    {
      "q": "Quale numero indica Menfi?",
      "img": "img/storia/egitto.svg",
      "options": ["2", "1", "3", "4"],
      "answer": 0,
      "explanation": "Menfi, dove dal 2700 a.C. fu spostata la capitale, non lontano dall'attuale Il Cairo (p. 71). Vicino ci sono anche le piramidi di Giza."
    },
    {
      "q": "Il numero 5 è Assuan. Che cosa c'è lì sul Nilo?",
      "img": "img/storia/egitto.svg",
      "options": ["Una cateratta, dove il fondale è bassissimo e ci sono forti correnti", "La foce a delta", "Le piramidi di Giza", "La Valle dei re"],
      "answer": 0,
      "explanation": "Il libro mostra una cateratta nei pressi di Assuan (p. 64)."
    },
    {
      "q": "L'Alto Egitto è…",
      "img": "img/storia/egitto.svg",
      "options": ["la valle a sud, verso la Nubia (numeri 4 e 5)", "il delta a nord (numero 1)", "la costa del Mar Rosso", "la zona intorno a Menfi (numero 2)"],
      "answer": 0,
      "explanation": "«Alto» e «Basso» seguono il corso del fiume: l'Alto Egitto è a sud, vicino alla Nubia (p. 65)."
    },

    // ── MEDITERRANEO DEI FENICI ─────────────────────────────
    {
      "q": "Quale numero indica Tiro, la città più ricca e potente della Fenicia?",
      "img": "img/storia/mediterraneo-fenici.svg",
      "options": ["1", "2", "6", "4"],
      "answer": 0,
      "explanation": "Tiro, sulla costa orientale del Mediterraneo, dal 1000 a.C. circa vera capitale della Fenicia (p. 94)."
    },
    {
      "q": "Quale numero indica Cartagine, la colonia fondata da Tiro?",
      "img": "img/storia/mediterraneo-fenici.svg",
      "options": ["2", "3", "4", "5"],
      "answer": 0,
      "explanation": "Cartagine, nell'attuale Tunisia, fondata secondo la tradizione nell'814 a.C. (pp. 95, 97)."
    },
    {
      "q": "Quale numero indica Cadice, in Spagna?",
      "img": "img/storia/mediterraneo-fenici.svg",
      "options": ["3", "2", "5", "1"],
      "answer": 0,
      "explanation": "Cadice, in Spagna: una delle fondazioni fenicie, come Tangeri in Marocco (p. 95)."
    },
    {
      "q": "Quale numero indica Mozia, in Sicilia?",
      "img": "img/storia/mediterraneo-fenici.svg",
      "options": ["4", "5", "2", "6"],
      "answer": 0,
      "explanation": "Mozia, come Palermo, è una fondazione fenicia in Sicilia (p. 95)."
    },
    {
      "q": "Quale numero indica Cagliari, in Sardegna?",
      "img": "img/storia/mediterraneo-fenici.svg",
      "options": ["5", "4", "3", "2"],
      "answer": 0,
      "explanation": "Cagliari e Nora sono fondazioni fenicie in Sardegna (p. 95)."
    },
    {
      "q": "I Fenici arrivarono anche nell'isola indicata dal numero 6. Qual è?",
      "img": "img/storia/mediterraneo-fenici.svg",
      "options": ["Cipro", "Malta", "Creta", "Le Baleari"],
      "answer": 0,
      "explanation": "Il libro cita Cipro, Malta e le Baleari tra i luoghi raggiunti dai Fenici (p. 95); il numero 6 è Cipro."
    },
    {
      "q": "Le colonie fenicie stavano lungo la «rotta est-ovest». Da quale numero a quale?",
      "img": "img/storia/mediterraneo-fenici.svg",
      "options": ["Dall'1 (Fenicia) al 3 (Spagna)", "Dal 3 al 6", "Dal 2 al 5", "Dal 6 al 4"],
      "answer": 0,
      "explanation": "La rotta univa le coste della Fenicia a quelle dell'Africa e della Spagna (p. 95)."
    }

  ]
};
