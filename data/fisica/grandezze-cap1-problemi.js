// ============================================================
//  data/fisica/grandezze-cap1-problemi.js  (v1)
//  Cap. 1 — Le grandezze fisiche, ESERCIZI (pagg. 28-44)
//
//  Risposta da scrivere (numeri e problemi a passi), senza timer.
//  Quelli con «p. N, n. M» vengono dal libro; dove il libro non stampa il risultato
//  il calcolo è nostro. Esclusi: p. 41 n. 24 righe 1-2 e p. 42 n. 31-33 (esponenti
//  non leggibili nelle foto).
//  Fonte: foto del libro di fisica, ottobre 2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["grandezze-cap1-problemi"] = {

  id:              "grandezze-cap1-problemi",
  subject:         "fisica",
  title:           "Cap. 1 — Le grandezze fisiche: scrivi i risultati",
  description:     "Conversioni, notazione scientifica, ordini di grandezza, area, volume, densità · risposta da scrivere",
  icon:            "📏",
  version:         1,
  timePerQuestion: 0,

  questions: [

    // ── Conversioni, p. 39-40 ─────────────────────
    { type:"steps", q:"Una matita misura 12,6 cm.",
      steps:[ {q:"Quanto misura in metri?", answer:0.126, unit:"m", answerText:"0,126 m", tolerance:0.001, explanation:"1 cm = 10⁻² m."},
              {q:"Quanto misura in millimetri?", answer:126, unit:"mm", answerText:"126 mm", tolerance:0.001, explanation:"1 cm = 10 mm."} ],
      explanation:"p. 39, n. 1." },
    { type:"numeric", q:"Converti 1115 g nell'unità fondamentale corrispondente.", answer:1.115, unit:"kg", tolerance:0.001, explanation:"1 kg = 1000 g (p. 40, n. 8)." },
    { type:"numeric", q:"Converti 1,609 km nell'unità fondamentale corrispondente.", answer:1609, unit:"m", tolerance:0.001, explanation:"1 km = 1000 m (p. 40, n. 8)." },
    { type:"numeric", q:"Converti 1,65 min nell'unità fondamentale corrispondente.", answer:99, unit:"s", tolerance:0.001, explanation:"1,65 · 60 s = 99 s (p. 40, n. 8)." },
    { type:"numeric", q:"Converti 23,5 t nell'unità fondamentale corrispondente.", answer:23500, unit:"kg", tolerance:0.001, answerText:"23 500 kg", explanation:"1 t = 1000 kg (p. 40, n. 8)." },
    { type:"numeric", q:"Converti 10 m in µm.", answer:1e7, unit:"µm", tolerance:0.001, answerText:"10⁷ µm", explanation:"1 m = 10⁶ µm (p. 40, n. 10)." },
    { type:"numeric", q:"Converti 200 km in Mm.", answer:0.2, unit:"Mm", tolerance:0.001, answerText:"0,2 Mm", explanation:"1 Mm = 10³ km (p. 40, n. 10)." },
    { type:"numeric", q:"Converti 34 s in ns.", answer:3.4e10, unit:"ns", tolerance:0.001, answerText:"3,4·10¹⁰ ns", explanation:"1 s = 10⁹ ns (p. 40, n. 10)." },
    { type:"numeric", q:"Converti 5 ng in µg.", answer:0.005, unit:"µg", tolerance:0.001, answerText:"0,005 µg", explanation:"1 µg = 10³ ng (p. 40, n. 10)." },
    { type:"numeric", q:"Converti 0,0065 µm in pm.", answer:6500, unit:"pm", tolerance:0.001, answerText:"6500 pm", explanation:"1 µm = 10⁶ pm (p. 40, n. 10)." },
    { type:"numeric", q:"Il Monte Bianco è alto circa 4,8 km e 1 mi = 1609 m. Quanto è alto in miglia, con due cifre decimali?", answer:2.98, unit:"mi", tolerance:0.002, answerText:"2,98 mi", explanation:"4800 m / 1609 = 2,98 mi (p. 40, n. 11)." },
    { type:"numeric", q:"Un miglio è uguale a 1609 m oppure a 1760 iarde. A quante iarde equivale un kilometro?", answer:1094, unit:"iarde", tolerance:0.002, explanation:"1760 · 1000 / 1609 = 1094 iarde (p. 40, n. 12)." },
    { type:"numeric", q:"La porta di un campo da calcio a 11 è larga 7,32 m. Quante spanne sono, se 1 spanna = 22,86 cm?", answer:32, unit:"spanne", tolerance:0.005, explanation:"732 / 22,86 = 32 spanne (p. 40, n. 13)." },
    { type:"numeric", q:"1 carato = 0,2 g. Quanti carati misura un diamante con massa 6,4·10⁻² kg?", answer:320, unit:"carati", tolerance:0.001, explanation:"6,4·10⁻² kg = 64 g; 64 / 0,2 = 320 carati (p. 40, n. 14)." },
    { type:"numeric", q:"Un portiere è alto 6 piedi e 5,16 pollici. Un piede vale 12 pollici e un pollice 2,54 cm. Quanto è alto in metri?", answer:1.96, unit:"m", tolerance:0.003, answerText:"1,96 m", explanation:"6 · 12 + 5,16 = 77,16 pollici; 77,16 · 2,54 cm = 196 cm (p. 40, n. 15)." },
    { type:"numeric", q:"1 libbra = 453,59 g e l'oncia è 1/16 di libbra. Qual è la massa in kilogrammi di 5 once d'oro?", answer:0.14175, unit:"kg", tolerance:0.001, answerText:"0,14175 kg", explanation:"5 / 16 · 453,59 g = 141,75 g (p. 40, n. 16)." },
    { type:"numeric", q:"Il micoplasma è lungo circa 0,0000002 m. Esprimi la lunghezza in µm.", answer:0.2, unit:"µm", tolerance:0.001, answerText:"0,2 µm", explanation:"L'unità più conveniente è il µm, oppure il nm: 0,2 µm = 200 nm (p. 40, n. 17)." },
    { type:"numeric", q:"Lo spessore massimo di un capello umano è 0,000 10 m. Esprimilo in µm.", answer:100, unit:"µm", tolerance:0.001, explanation:"0,10 mm oppure 100 µm (p. 41, n. 18)." },
    { type:"numeric", q:"Giove dista dal Sole circa 780 miliardi di metri. Esprimi la distanza in Gm.", answer:780, unit:"Gm", tolerance:0.001, explanation:"1 Gm = 10⁹ m (p. 41, n. 19)." },
    { type:"numeric", q:"Un capello è spesso 70 µm. Esprimi lo spessore in cm.", answer:7e-3, unit:"cm", tolerance:0.001, answerText:"7,0·10⁻³ cm", explanation:"70 µm = 7,0·10⁻⁵ m = 7,0·10⁻³ cm (p. 31, Prova tu)." },
    { type:"numeric", q:"Un panino ha una massa di 1,20 hg. Qual è la massa in µg?", answer:1.2e8, unit:"µg", tolerance:0.001, answerText:"1,20·10⁸ µg", explanation:"1,20 hg = 120 g e 1 g = 10⁶ µg (p. 32, Prova tu)." },

    // ── Notazione scientifica, p. 41 ──────────────
    { type:"numeric", sci:true, q:"Scrivi 123 in notazione scientifica.", answer:123, tolerance:0.0001, answerText:"1,23·10²", explanation:"p. 41, n. 22." },
    { type:"numeric", sci:true, q:"Scrivi 30 000 in notazione scientifica.", answer:3e4, tolerance:0.0001, answerText:"3·10⁴", explanation:"p. 41, n. 22." },
    { type:"numeric", sci:true, q:"Scrivi 0,008 in notazione scientifica.", answer:8e-3, tolerance:0.0001, answerText:"8·10⁻³", explanation:"p. 41, n. 22." },
    { type:"numeric", sci:true, q:"Scrivi 9 000 000 in notazione scientifica.", answer:9e6, tolerance:0.0001, answerText:"9·10⁶", explanation:"p. 41, n. 22." },
    { type:"numeric", sci:true, q:"Scrivi 7450 in notazione scientifica.", answer:7450, tolerance:0.0001, answerText:"7,45·10³", explanation:"p. 41, n. 22." },
    { type:"numeric", sci:true, q:"Scrivi 0,00000065 in notazione scientifica.", answer:6.5e-7, tolerance:0.0001, answerText:"6,5·10⁻⁷", explanation:"p. 41, n. 22." },
    { type:"numeric", plain:true, q:"Scrivi 10⁻⁷ in forma decimale.", answer:1e-7, tolerance:0.0001, answerText:"0,0000001", explanation:"Sei zeri dopo la virgola, poi 1 (p. 41, n. 23)." },
    { type:"numeric", plain:true, q:"Scrivi 16·10⁹ in forma decimale.", answer:1.6e10, tolerance:0.0001, answerText:"16 000 000 000", explanation:"16 seguito da nove zeri (p. 41, n. 23)." },
    { type:"numeric", plain:true, q:"Scrivi 0,2·10⁻³ in forma decimale.", answer:2e-4, tolerance:0.0001, answerText:"0,0002", explanation:"p. 41, n. 23." },
    { type:"numeric", plain:true, q:"Scrivi 22·10⁻⁸ in forma decimale.", answer:2.2e-7, tolerance:0.0001, answerText:"0,00000022", explanation:"p. 41, n. 23." },
    { type:"numeric", plain:true, q:"Scrivi 4,8·10⁻⁶ in forma decimale.", answer:4.8e-6, tolerance:0.0001, answerText:"0,0000048", explanation:"p. 41, n. 23." },
    { type:"numeric", sci:true, q:"Calcola (5,02·10¹⁰) : (1,0·10⁻¹⁰) in notazione scientifica.", answer:5.02e20, tolerance:0.002, answerText:"5,02·10²⁰", explanation:"Si dividono i coefficienti e si sottraggono gli esponenti: 10 − (−10) = 20 (p. 41, n. 24)." },
    { type:"numeric", sci:true, q:"Calcola (9,7·10⁸) · (9·10¹²) in notazione scientifica.", answer:8.73e21, tolerance:0.002, answerText:"8,73·10²¹", explanation:"87,3·10²⁰ = 8,73·10²¹ (p. 41, n. 24)." },
    { type:"numeric", sci:true, q:"Calcola (8·10⁻³) · (5,6·10⁻¹⁷) in notazione scientifica.", answer:4.48e-19, tolerance:0.002, answerText:"4,48·10⁻¹⁹", explanation:"44,8·10⁻²⁰ = 4,48·10⁻¹⁹ (p. 41, n. 25)." },
    { type:"numeric", sci:true, q:"Calcola (2,01·10¹²) : (6,8·10²) in notazione scientifica, con due cifre decimali.", answer:2.96e9, tolerance:0.002, answerText:"2,96·10⁹", explanation:"0,2956·10¹⁰ = 2,96·10⁹ (p. 41, n. 25)." },
    { type:"numeric", sci:true, q:"Calcola (1·10⁻⁶) · (8·10⁷) in notazione scientifica.", answer:80, tolerance:0.002, answerText:"8·10¹", explanation:"p. 41, n. 25." },
    { type:"numeric", sci:true, q:"Calcola (6,74·10⁻¹¹) · (1,2·10⁻⁵) in notazione scientifica.", answer:8.09e-16, tolerance:0.002, answerText:"8,09·10⁻¹⁶", explanation:"8,088·10⁻¹⁶ (p. 41, n. 25)." },
    { type:"numeric", sci:true, sig:4, q:"La velocità della luce nel vuoto è 299 792 458 m/s. Scrivila in notazione scientifica con tre cifre dopo la virgola.", answer:2.998e8, unit:"m/s", answerText:"2,998·10⁸ m/s", explanation:"La prima cifra trascurata è 9: si approssima per eccesso (p. 41, n. 26)." },
    { type:"numeric", sci:true, sig:1, q:"Uno stadio ha 90 150 posti. Approssima il numero a una cifra e scrivilo in notazione scientifica.", answer:9e4, answerText:"9·10⁴", explanation:"9,015·10⁴: la prima cifra trascurata è 0 (p. 41, n. 27)." },

    // ── Ordini di grandezza, p. 28 e 42 ───────────
    { type:"numeric", sci:true, q:"Qual è l'ordine di grandezza di 27 000?", answer:1e4, tolerance:1e-9, answerText:"10⁴", explanation:"2,7·10⁴: il coefficiente è minore di 5 (p. 41, n. 28). Si scrive 10^4." },
    { type:"numeric", sci:true, q:"Qual è l'ordine di grandezza di 24,5?", answer:10, tolerance:1e-9, answerText:"10¹", explanation:"2,45·10¹: il coefficiente è minore di 5 (p. 41, n. 28). Si scrive 10^1." },
    { type:"numeric", sci:true, q:"Qual è l'ordine di grandezza di 0,6·10⁻⁶?", answer:1e-6, tolerance:1e-9, answerText:"10⁻⁶", explanation:"6·10⁻⁷: il coefficiente è maggiore di 5, quindi la potenza che approssima meglio è 10⁻⁶ (p. 41, n. 28)." },
    { type:"numeric", sci:true, q:"Qual è l'ordine di grandezza di 7,0·10⁸ m? Scrivi la potenza di 10.", answer:1e9, unit:"m", tolerance:1e-9, answerText:"10⁹ m", explanation:"Il coefficiente è maggiore o uguale a 5: si arrotonda a 10 (p. 28)." },
    { type:"steps", q:"In un anno un raggio di luce percorre circa 9 460 500 000 000 km.",
      steps:[ {q:"Scrivi la distanza in metri, approssimandola a due cifre.", sci:true, sig:2, answer:9.5e15, unit:"m", answerText:"9,5·10¹⁵ m", explanation:"9,4605·10¹² km = 9,4605·10¹⁵ m ≈ 9,5·10¹⁵ m."},
              {q:"Qual è l'ordine di grandezza?", sci:true, answer:1e16, unit:"m", tolerance:1e-9, answerText:"10¹⁶ m", explanation:"Il coefficiente è maggiore di 5."} ],
      explanation:"p. 42, n. 34." },
    { type:"steps", q:"La Terra è nata circa 4,543 miliardi di anni fa.",
      steps:[ {q:"Quanti secondi ci sono in un anno di 365 giorni?", sci:true, answer:3.15e7, unit:"s", tolerance:0.005, answerText:"3,15·10⁷ s", explanation:"365 · 24 · 3600 s."},
              {q:"Calcola l'età della Terra in secondi.", sci:true, answer:1.43e17, unit:"s", tolerance:0.03, answerText:"1,4·10¹⁷ s", explanation:"4,543·10⁹ · 3,15·10⁷ s."},
              {q:"Qual è l'ordine di grandezza?", sci:true, answer:1e17, unit:"s", tolerance:1e-9, answerText:"10¹⁷ s", explanation:"Il coefficiente è minore di 5."} ],
      explanation:"p. 42, n. 35. Il risultato non si vede nella foto: il calcolo è nostro." },
    { type:"numeric", sci:true, q:"Una moneta è spessa 2,33 mm e se ne impilano 8 miliardi. Qual è l'ordine di grandezza dell'altezza in km?", answer:1e4, unit:"km", tolerance:1e-9, answerText:"10⁴ km", explanation:"2,33 mm ≈ 10⁻⁶ km e 8·10⁹ ≈ 10¹⁰: 10⁻⁶ · 10¹⁰ = 10⁴ km (p. 28, Prova tu)." },
    { type:"numeric", sci:true, q:"Anno scolastico: 200 giorni, circa 5 ore al giorno. Quanti minuti in 5 anni di superiori?", answer:3e5, unit:"min", tolerance:0.001, answerText:"3·10⁵ min", explanation:"200 · 5 · 60 = 6·10⁴ min all'anno; per 5 anni 3·10⁵ min (p. 30, Prova tu)." },

    // ── Tempo e lunghezza, p. 43 ──────────────────
    { type:"steps", q:"In un'ora la clessidra viene capovolta 11 volte.",
      steps:[ {q:"Quanti minuti dura la clessidra? Scrivi il numero decimale.", answer:5.45, unit:"min", answerText:"5,45 min", tolerance:0.002, explanation:"60 min / 11 = 5,45 min."},
              {q:"Quanti secondi corrispondono a 0,45 min?", answer:27, unit:"s", answerText:"27 s", tolerance:0.002, explanation:"0,45 · 60 s = 27 s, cioè 5 min 27 s."} ],
      explanation:"p. 43, n. 37." },
    { type:"numeric", q:"Un aereo accumula un ritardo di un'ora e un quarto. Quanti secondi sono?", answer:4500, unit:"s", tolerance:0.001, explanation:"75 min · 60 s/min = 4500 s (p. 43, n. 38)." },
    { type:"numeric", q:"Il marcatempo lascia un puntino ogni 0,02 s. Quanti puntini lascia in 15,75 s?", answer:787, unit:"puntini", tolerance:0.002, explanation:"15,75 / 0,02 = 787 (p. 43, n. 39)." },
    { type:"numeric", q:"Un bastone è lungo 25 cm e servono 5 bastoni per misurare il pennone. Quanto è lungo il pennone in metri?", answer:1.25, unit:"m", tolerance:0.001, answerText:"1,25 m", explanation:"5 · 25 cm = 125 cm (p. 43, n. 40)." },
    { type:"numeric", q:"Servono 32 tovaglioli quadrati di lato 10 cm per misurare il lato del pavimento. Quanto è lungo in metri?", answer:3.2, unit:"m", tolerance:0.001, answerText:"3,2 m", explanation:"32 · 10 cm = 320 cm (p. 43, n. 41)." },
    { type:"steps", q:"Marco e Luca misurano una motocicletta: 7 braccia di Marco, 5,5 braccia di Luca. Il braccio di Luca è 40 cm.",
      steps:[ {q:"Quanto è lunga la motocicletta in metri?", answer:2.2, unit:"m", answerText:"2,2 m", tolerance:0.001, explanation:"5,5 · 40 cm = 220 cm."},
              {q:"Quanto è lungo il braccio di Marco in metri, con una cifra decimale?", answer:0.3, unit:"m", answerText:"0,3 m", tolerance:0.05, explanation:"2,2 m / 7 = 0,3 m."} ],
      explanation:"p. 43, n. 42." },
    { type:"numeric", q:"Un ascensore ha portata massima 1,5 Mg. Se una persona pesa in media 75 kg, quante persone può portare al massimo?", answer:20, unit:"persone", tolerance:0.001, explanation:"1500 kg / 75 kg = 20 (p. 43, n. 44)." },
    { type:"steps", q:"Saturno impiega 29,45 anni terrestri per un giro intorno al Sole.",
      steps:[ {q:"Quanti anni terrestri ha chi compie 18 anni saturniani?", answer:530, unit:"anni terrestri", tolerance:0.002, explanation:"18 · 29,45 = 530."},
              {q:"Quanti anni saturniani sono 18 anni terrestri, con due decimali?", answer:0.61, unit:"anni saturniani", answerText:"0,61", tolerance:0.005, explanation:"18 / 29,45 = 0,61."} ],
      explanation:"p. 43, n. 45." },

    // ── Massa, p. 44 ──────────────────────────────
    { type:"numeric", q:"In una miniera, lo 0,01% della roccia è ferro. Quanti kg di ferro si estraggono da 10 Mg di roccia?", answer:1, unit:"kg", tolerance:0.001, explanation:"10 Mg = 10 000 kg; lo 0,01% è 1 kg (p. 44, n. 48)." },
    { type:"numeric", q:"Una libbra equivale a 453,6 g. Se una mela ha massa 400 g, quante mele servono per arrivare a 15 libbre?", answer:17, unit:"mele", tolerance:0.001, explanation:"15 · 453,6 g = 6804 g; 6804 / 400 = 17 (p. 44, n. 49)." },
    { type:"steps", q:"Una stone vale 14 libbre e una libbra 453,6 g. Una persona ha massa 80 kg.",
      steps:[ {q:"Quante libbre sono 80 kg? Scrivi il numero intero.", answer:176, unit:"libbre", tolerance:0.005, explanation:"80 000 / 453,6 = 176,4."},
              {q:"Quante stones intere ci stanno?", answer:12, unit:"stones", tolerance:0.001, explanation:"12 · 14 = 168."},
              {q:"Quante libbre restano?", answer:8, unit:"libbre", tolerance:0.06, explanation:"176,4 − 168 = 8."} ],
      explanation:"12 stones 8 libbre (p. 44, n. 50)." },
    { type:"steps", q:"Un corridore ha una falcata di 750 mm e corre una maratona, 42,195 km, a 310 passi al minuto.",
      steps:[ {q:"Quanti passi percorre?", answer:56260, unit:"passi", answerText:"56 260 passi", tolerance:0.001, explanation:"42 195 m / 0,750 m = 56 260."},
              {q:"Quante ore impiega?", answer:3.02, unit:"h", answerText:"3,02 h", tolerance:0.003, explanation:"56 260 / 310 = 181,5 min = 3,02 h."} ],
      explanation:"p. 44, n. 51." },

    // ── Area, volume, densità, p. 33-35 e 44 ──────
    { type:"steps", q:"Un foglio A1 ha dimensioni 594 mm × 841 mm.",
      steps:[ {q:"Calcola l'area senza approssimarla.", answer:499554, unit:"mm²", answerText:"499 554 mm²", tolerance:0.0001, explanation:"594 · 841 = 499 554."},
              {q:"Esprimi l'area in m², approssimata a una cifra.", answer:0.5, unit:"m²", answerText:"0,5 m²", tolerance:0.001, explanation:"1 mm² = 10⁻⁶ m²: 0,499554 m² ≈ 0,5 m²."} ],
      explanation:"p. 44, n. 52." },
    { type:"steps", q:"Una tenda rettangolare misura 3,2 m × 2,9 m.",
      steps:[ {q:"Calcola l'area in m².", answer:9.28, unit:"m²", answerText:"9,28 m²", tolerance:0.001, explanation:"3,2 · 2,9 = 9,28."},
              {q:"Esprimi l'area in cm².", answer:92800, unit:"cm²", answerText:"92 800 cm²", tolerance:0.001, explanation:"1 m² = 10⁴ cm²."} ],
      explanation:"p. 44, n. 53." },
    { type:"numeric", q:"Un terreno quadrato ha area 1600 m². Quanti metri di recinzione servono?", answer:160, unit:"m", tolerance:0.001, explanation:"Lato √1600 = 40 m; perimetro 4 · 40 = 160 m (p. 44, n. 54)." },
    { type:"numeric", q:"Converti 100 cm² in m².", answer:0.01, unit:"m²", tolerance:0.001, answerText:"10⁻² m²", explanation:"1 cm² = 10⁻⁴ m² (p. 44, n. 55)." },
    { type:"numeric", q:"Converti 2 cm² in m².", answer:2e-4, unit:"m²", tolerance:0.001, answerText:"2·10⁻⁴ m²", explanation:"1 cm² = 10⁻⁴ m² (p. 44, n. 55)." },
    { type:"numeric", q:"Converti 440 dm² in m².", answer:4.4, unit:"m²", tolerance:0.001, answerText:"4,4 m²", explanation:"1 dm² = 10⁻² m² (p. 44, n. 55)." },
    { type:"numeric", q:"Converti 3 km² in m².", answer:3e6, unit:"m²", tolerance:0.001, answerText:"3·10⁶ m²", explanation:"1 km² = 10⁶ m² (p. 44, n. 55)." },
    { type:"numeric", q:"Converti 7500 mm² in m².", answer:7.5e-3, unit:"m²", tolerance:0.001, answerText:"7,5·10⁻³ m²", explanation:"1 mm² = 10⁻⁶ m² (p. 44, n. 55)." },
    { type:"numeric", q:"Converti 6,2·10⁻⁴ km² in m².", answer:620, unit:"m²", tolerance:0.001, explanation:"1 km² = 10⁶ m² (p. 44, n. 55)." },
    { type:"numeric", q:"Converti 15 m² in cm².", answer:1.5e5, unit:"cm²", tolerance:0.001, answerText:"1,5·10⁵ cm²", explanation:"1 m² = 10⁴ cm² (p. 44, n. 56)." },
    { type:"numeric", q:"Converti 0,45 m² in dm².", answer:45, unit:"dm²", tolerance:0.001, explanation:"1 m² = 100 dm² (p. 44, n. 56)." },
    { type:"numeric", q:"Converti 6900 m² in km².", answer:6.9e-3, unit:"km²", tolerance:0.001, answerText:"6,9·10⁻³ km²", explanation:"1 m² = 10⁻⁶ km² (p. 44, n. 56)." },
    { type:"numeric", q:"Converti 1,2·10⁻⁴ m² in mm².", answer:120, unit:"mm²", tolerance:0.001, explanation:"1 m² = 10⁶ mm² (p. 44, n. 56)." },
    { type:"numeric", q:"Converti 810 m² in km².", answer:8.1e-4, unit:"km²", tolerance:0.001, answerText:"8,1·10⁻⁴ km²", explanation:"1 m² = 10⁻⁶ km² (p. 44, n. 56)." },
    { type:"numeric", q:"Converti 10 000 cm³ in m³.", answer:0.01, unit:"m³", tolerance:0.001, answerText:"10⁻² m³", explanation:"1 cm³ = 10⁻⁶ m³ (p. 44, n. 57)." },
    { type:"numeric", q:"Converti 5700 dm³ in m³.", answer:5.7, unit:"m³", tolerance:0.001, answerText:"5,7 m³", explanation:"1 dm³ = 10⁻³ m³ (p. 44, n. 57)." },
    { type:"numeric", q:"Converti 0,001 km³ in m³.", answer:1e6, unit:"m³", tolerance:0.001, answerText:"10⁶ m³", explanation:"1 km³ = 10⁹ m³ (p. 44, n. 57)." },
    { type:"numeric", q:"Un areometro misura la densità dell'alcol: 0,79 g/cm³. Converti nelle unità del SI.", answer:790, unit:"kg/m³", tolerance:0.001, explanation:"1 g/cm³ = 1000 kg/m³ (p. 44, n. 59)." },
    { type:"numeric", q:"37 milioni di auto, ognuna 4,0 m × 1,8 m. Quale superficie occupano in km²?", answer:270, unit:"km²", tolerance:0.01, explanation:"7,2 m² · 37·10⁶ = 2,7·10⁸ m² = 270 km² (p. 33, Prova tu)." },
    { type:"steps", q:"Un corpo ha densità 1060 kg/m³ e volume 5,2 L.",
      steps:[ {q:"Scrivi il volume in m³.", answer:5.2e-3, unit:"m³", answerText:"5,2·10⁻³ m³", tolerance:0.001, explanation:"1 L = 10⁻³ m³."},
              {q:"Calcola la massa.", answer:5.5, unit:"kg", answerText:"5,5 kg", tolerance:0.01, explanation:"m = dV = 1060 · 5,2·10⁻³ kg."} ],
      explanation:"p. 35, Esempio 7." }

  ]
};
