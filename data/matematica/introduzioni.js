// ============================================================
//  data/matematica/introduzioni.js  (v1)
//  Introduzioni a slide, una per argomento: perché ti serve nella vita,
//  le regole in breve, da dove partire. Vanno guardate prima di video ed esercizi.
//  Gli esempi della vita sono veri e i conti sono stati ricontrollati.
//  Slide: { k: etichetta, t: titolo, h: html }
// ============================================================

window.LESSONS = window.LESSONS || {};

// ── Perché studio matematica? ────────────────────────────────────
window.LESSONS["intro-matematica"] = {
  title: "Perché studio matematica?",
  slides: [
    { k:"Introduzione", t:"Perché studio matematica?",
      h:`<p class="ls-big">È la domanda giusta. Ogni argomento di quest'anno ha una risposta concreta.</p>
         <p>Qui trovi il <b>perché in generale</b>. Prima di ogni argomento trovi anche il <b>perché di quell'argomento</b>.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Perché 1", t:"Allena a ragionare",
      h:`<p>In matematica parti da <b>regole chiare</b> e arrivi a <b>conclusioni sicure</b>, un passo alla volta.</p>
         <div class="ls-why">👉 È lo stesso modo di ragionare che serve per risolvere un problema al lavoro, scrivere un programma, preparare un viaggio o convincere qualcuno con buone ragioni.</div>` },
    { k:"Perché 2", t:"Non farsi fregare",
      h:`<p>Un negozio scrive: «sconto del 50%, e poi un altro 20%». Sembra il 70%. Non lo è.</p>
         <div class="ls-calc">
           <div><span>100 € − 50%</span><b>50 €</b></div>
           <div><span>50 € − 20%</span><b>40 €</b></div>
         </div>
         <div class="ls-res">Lo sconto vero è del 60%</div>
         <p class="ls-note">Con le percentuali del cap. 2 lo capisci in un minuto.</p>` },
    { k:"Perché 3", t:"Serve in tanti lavori",
      h:`<div class="ls-rule ls-rule-col">
           <div>🩺 <b>Medici e infermieri</b>: dosi dei farmaci, proporzioni</div>
           <div>🏗️ <b>Ingegneri e geometri</b>: misure, angoli, calcoli delle strutture</div>
           <div>💻 <b>Programmatori</b>: logica, potenze di 2, algoritmi</div>
           <div>📈 <b>Economia e negozi</b>: percentuali, sconti, IVA</div>
         </div>` },
    { k:"Il metodo", t:"Come si impara",
      h:`<ol class="ls-steps">
           <li>Capisci <b>perché</b> ti serve.</li>
           <li>Impari la <b>regola</b> e guardi un <b>esempio</b>.</li>
           <li>Fai gli <b>esercizi</b>, dal facile al difficile.</li>
           <li>Se sbagli, trovi <b>quale regola</b> mancava e la ripassi.</li>
         </ol>
         <div class="ls-why">👉 Ogni argomento si appoggia su quelli prima: per questo si riparte dalle basi.</div>` }
  ]
};

// ── Regole dei segni ─────────────────────────────────────────────
window.LESSONS["intro-segni"] = {
  title: "Perché le regole dei segni",
  slides: [
    { k:"Introduzione", t:"Perché i numeri negativi?",
      h:`<p class="ls-big">Perché nella vita le cose <b>scendono sotto lo zero</b>: temperature, soldi, piani, altitudini.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Nella vita", t:"Temperature e ascensori",
      h:`<div class="ls-calc">
           <div><span>Di notte −3 °C, di giorno +5 °C: quanto è salita?</span><b>8 °C</b></div>
           <div><span>Dal piano −2 (garage) al piano 3</span><b>5 piani</b></div>
         </div>
         <p class="ls-note">Sono sottrazioni con i segni: 5 − (−3) = 8 e 3 − (−2) = 5.</p>` },
    { k:"Nella vita", t:"Soldi",
      h:`<div class="ls-calc">
           <div><span>Hai 20 € sul conto e paghi 35 € con la carta</span><b>−15 €</b></div>
           <div><span>Perdi 4 € al giorno per 3 giorni</span><b>−12 €</b></div>
         </div>
         <p class="ls-note">20 − 35 = −15 e 3 · (−4) = −12. In banca un saldo negativo vuol dire che sei in debito.</p>` },
    { k:"Le regole in breve", t:"Ripasso veloce",
      h:`<div class="ls-rule ls-rule-col">
           <div>➕ Segni uguali: sommi e tieni il segno. Diversi: differenza, segno del più grande</div>
           <div>➖ Un − davanti alla parentesi cambia tutti i segni</div>
           <div>✖️ Per e diviso: uguali → +, diversi → −</div>
           <div>⚠️ (−3)² = 9 ma −3² = −9</div>
         </div>` },
    { k:"Da dove partire", t:"Adesso",
      h:`<p>Guarda le slide <b>«Le regole dei segni»</b> (e il video), poi fai gli esercizi dal Livello 1.</p>
         <div class="ls-why">👉 I segni servono in tutto il cap. 2: frazioni negative, potenze, espressioni.</div>` }
  ]
};

// ── MCD e mcm ────────────────────────────────────────────────────
window.LESSONS["intro-mcd"] = {
  title: "Perché MCD e mcm",
  slides: [
    { k:"Introduzione", t:"Perché MCD e mcm?",
      h:`<p class="ls-big">Il <b>MCD</b> serve quando devi <b>dividere</b> in parti uguali il più grandi possibile. Il <b>mcm</b> serve quando cose che si <b>ripetono</b> devono tornare a coincidere.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Nella vita · MCD", t:"Piastrelle e squadre",
      h:`<div class="ls-calc">
           <div><span>Pavimento 120 × 90 cm, piastrelle quadrate più grandi possibili, senza tagli</span><b>lato 30 cm</b></div>
           <div><span>24 ragazze e 36 ragazzi, squadre tutte uguali: quante al massimo?</span><b>12 squadre</b></div>
         </div>
         <p class="ls-note">MCD(120; 90) = 30, quindi servono 4 · 3 = 12 piastrelle. MCD(24; 36) = 12: ogni squadra ha 2 ragazze e 3 ragazzi.</p>` },
    { k:"Nella vita · mcm", t:"Panini e autobus",
      h:`<div class="ls-calc">
           <div><span>Würstel a pacchi da 10, panini a pacchi da 8: quanti per pareggiare?</span><b>40</b></div>
           <div><span>Autobus ogni 12 e ogni 18 minuti, partiti insieme alle 8:00</span><b>8:36</b></div>
         </div>
         <p class="ls-note">mcm(10; 8) = 40: 4 pacchi di würstel e 5 di panini. mcm(12; 18) = 36 minuti.</p>` },
    { k:"Nella vita · frazioni", t:"E soprattutto nel cap. 2",
      h:`<div class="ls-calc">
           <div><span>Semplificare 18/24 con il MCD = 6</span><b>3/4</b></div>
           <div><span>1/4 + 1/6 con il mcm = 12</span><b>5/12</b></div>
         </div>
         <div class="ls-why">👉 Senza MCD e mcm le frazioni diventano lunghissime e piene di errori.</div>` },
    { k:"Le regole in breve", t:"Ripasso veloce",
      h:`<div class="ls-rule ls-rule-col">
           <div>🔢 Scomponi: dividi per il primo più piccolo fino a 1</div>
           <div>⬇️ <b>MCD</b>: fattori comuni, esponente più piccolo</div>
           <div>⬆️ <b>mcm</b>: tutti i fattori, esponente più grande</div>
         </div>
         <p class="ls-note">Poi guarda le slide «MCD e mcm» (e il video) e fai gli esercizi dal Livello 1.</p>` }
  ]
};

// ── Frazioni (cap. 2) ────────────────────────────────────────────
window.LESSONS["intro-frazioni"] = {
  title: "Perché le frazioni",
  slides: [
    { k:"Introduzione", t:"Perché le frazioni?",
      h:`<p class="ls-big">Perché nella vita le cose si <b>dividono in parti</b>: tempo, cibo, soldi, sconti.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Nella vita", t:"Tempo, ricette, sconti",
      h:`<div class="ls-calc">
           <div><span>Un quarto d'ora: 1/4 di 60 minuti</span><b>15 min</b></div>
           <div><span>Ricetta per 4 con 300 g di farina: per 3 persone ne servono i 3/4</span><b>225 g</b></div>
           <div><span>Sconto di 1/3 su 90 €</span><b>−30 €</b></div>
         </div>
         <p class="ls-note">Anche la musica: la nota che in italiano si chiama semiminima, in inglese si chiama «quarter note», un quarto.</p>` },
    { k:"Le regole in breve", t:"Ripasso veloce",
      h:`<div class="ls-rule ls-rule-col">
           <div>🍕 m/n: dividi in n parti uguali e ne prendi m (n ≠ 0)</div>
           <div>🟰 Proprietà invariantiva: moltiplichi o dividi sopra e sotto per lo stesso numero ≠ 0</div>
           <div>✂️ Semplifichi dividendo per il MCD; per sommare usi il mcm dei denominatori</div>
           <div>✖️ Per: sopra per sopra, sotto per sotto. Diviso: per il reciproco</div>
         </div>` },
    { k:"Da dove partire", t:"Adesso",
      h:`<p>Guarda i video del cap. 2 nell'ordine: «Che cos'è una frazione», «Frazioni equivalenti», poi gli altri.</p>
         <div class="ls-why">👉 Se ti blocchi su semplificare o denominatore comune, torna a «MCD e mcm» nelle basi.</div>` }
  ]
};

// ── Potenze (cap. 2) ─────────────────────────────────────────────
window.LESSONS["intro-potenze"] = {
  title: "Perché le potenze",
  slides: [
    { k:"Introduzione", t:"Perché le potenze?",
      h:`<p class="ls-big">Perché servono per scrivere in fretta numeri <b>enormi</b> o <b>minuscoli</b>, e per le cose che <b>crescono raddoppiando</b>.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Nella vita", t:"Raddoppi e computer",
      h:`<div class="ls-calc">
           <div><span>Batteri che raddoppiano ogni ora: dopo 10 ore sono 2¹⁰ volte tanti</span><b>1024</b></div>
           <div><span>I computer contano per potenze di 2: 2¹⁰</span><b>1024</b></div>
         </div>
         <p class="ls-note">Per questo le memorie hanno spesso numeri come 64, 128, 256 GB: sono potenze di 2.</p>` },
    { k:"Nella vita", t:"Aree, volumi, distanze",
      h:`<div class="ls-calc">
           <div><span>Stanza quadrata di lato 4 m: area 4²</span><b>16 m²</b></div>
           <div><span>Cubo di lato 3 cm: volume 3³</span><b>27 cm³</b></div>
           <div><span>Distanza Terra–Sole, circa</span><b>1,5 · 10⁸ km</b></div>
         </div>
         <p class="ls-note">La notazione scientifica del cap. 2 usa proprio le potenze di 10.</p>` },
    { k:"Le regole in breve", t:"Ripasso veloce",
      h:`<div class="ls-rule ls-rule-col">
           <div>➕ Stessa base, per: sommi gli esponenti. 2³ · 2² = 2⁵</div>
           <div>0️⃣ Esponente 0: fa 1 (base ≠ 0)</div>
           <div>➖ Base negativa: esponente pari → +, dispari → −</div>
           <div>🔄 Esponente negativo: capovolgi la base. (1/2)⁻² = 2² = 4</div>
         </div>
         <p class="ls-note">Poi guarda il video «Le potenze» del cap. 2.</p>` }
  ]
};

// ── Decimali, proporzioni, percentuali (cap. 2) ──────────────────
window.LESSONS["intro-decimali"] = {
  title: "Perché decimali, proporzioni e percentuali",
  slides: [
    { k:"Introduzione", t:"Perché decimali, proporzioni e percentuali?",
      h:`<p class="ls-big">Perché sono la matematica dei <b>prezzi</b>, degli <b>sconti</b>, delle <b>etichette</b> e delle <b>mappe</b>.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Nella vita", t:"Negozi",
      h:`<div class="ls-calc">
           <div><span>Felpa da 150 € con il 20% di sconto</span><b>120 €</b></div>
           <div><span>Bici da 500 € + IVA al 22%</span><b>610 €</b></div>
           <div><span>10 € divisi in 3: 3,333… a testa</span><b>3,33 €</b></div>
         </div>
         <p class="ls-note">Nell'ultimo 1/3 è un numero periodico: con i soldi si arrotonda ai centesimi.</p>` },
    { k:"Nella vita", t:"Etichette e mappe",
      h:`<div class="ls-calc">
           <div><span>Pasta: 350 kcal ogni 100 g. In 80 g?</span><b>280 kcal</b></div>
           <div><span>Mappa in scala 1 : 25 000: 4 cm sulla carta</span><b>1 km</b></div>
         </div>
         <p class="ls-note">Sono proporzioni: 100 : 350 = 80 : x, e 4 cm · 25 000 = 100 000 cm = 1 km.</p>` },
    { k:"Le regole in breve", t:"Ripasso veloce",
      h:`<div class="ls-rule ls-rule-col">
           <div>💯 p% di un numero: numero · p : 100</div>
           <div>⚖️ Proporzione: prodotto dei medi = prodotto degli estremi</div>
           <div>🔁 Una frazione ridotta dà un decimale finito solo se il denominatore ha soltanto fattori 2 e 5; altrimenti è periodico</div>
         </div>
         <p class="ls-note">Poi fai il quiz «Cap. 2 — Esercizi: decimali, proporzioni, percentuali».</p>` }
  ]
};

// ── Assiomi (dal prof) ───────────────────────────────────────────
window.LESSONS["intro-assiomi"] = {
  title: "Perché gli assiomi",
  slides: [
    { k:"Introduzione", t:"Perché gli assiomi?",
      h:`<p class="ls-big">Perché sono le <b>regole del gioco</b> della geometria. Senza regole condivise non si può giocare, e non si può dimostrare niente.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Nella vita", t:"Regole e conclusioni",
      h:`<div class="ls-rule ls-rule-col">
           <div>♟️ <b>Scacchi e calcio</b>: poche regole accettate da tutti, e da lì infinite partite</div>
           <div>⚖️ <b>Leggi e tribunali</b>: dalle regole scritte si arriva a una decisione motivata</div>
           <div>💻 <b>Programmi e videogiochi</b>: il computer segue solo le regole che gli dai; la grafica usa punti, rette, angoli</div>
         </div>` },
    { k:"Un po' di storia", t:"Euclide",
      h:`<p>Il metodo degli assiomi lo ha reso famoso <b>Euclide</b>, un matematico greco vissuto circa 2300 anni fa: nei suoi <b>Elementi</b> parte da poche regole e dimostra tutto il resto.</p>
         <div class="ls-why">👉 Imparare gli assiomi vuol dire imparare a dire «è vero <b>perché</b>…», e non solo «è vero».</div>` },
    { k:"Le regole in breve", t:"Le tre frasi chiave",
      h:`<div class="ls-rule ls-rule-col">
           <div>📏 Per due punti distinti passa <b>una e una sola</b> retta (2B)</div>
           <div>↔️ Tra A e B c'è sempre un punto C (3A)</div>
           <div>🌊 Il segmento tra due semipiani diversi <b>interseca la retta</b> (4)</div>
         </div>
         <p class="ls-note">Poi guarda il video «Gli assiomi di geometria» e fai il quiz con la scheda.</p>` }
  ]
};

// ── Gradi, primi e secondi (dal prof) ────────────────────────────
window.LESSONS["intro-gradi"] = {
  title: "Perché gradi, primi e secondi",
  slides: [
    { k:"Introduzione", t:"Perché gradi, primi e secondi?",
      h:`<p class="ls-big">Perché servono per misurare gli angoli con precisione: per orientarsi sulla Terra, navigare, guardare il cielo.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Nella vita", t:"GPS e mappe",
      h:`<p>Le coordinate di un luogo sono angoli. Milano, per esempio, si trova a circa <b>45° 28′ di latitudine nord</b>.</p>
         <div class="ls-why">👉 Sul mare e in aereo si usa il miglio nautico: un primo di latitudine corrisponde a circa 1 miglio nautico, cioè circa 1852 m.</div>` },
    { k:"Nella vita", t:"Cielo e orologio",
      h:`<div class="ls-rule ls-rule-col">
           <div>🌕 La Luna, vista dalla Terra, è larga circa <b>mezzo grado</b>, cioè circa 30′</div>
           <div>⏰ Contare a gruppi di 60 viene dagli antichi <b>Babilonesi</b>: per questo un'ora ha 60 minuti e un grado ha 60 primi</div>
         </div>` },
    { k:"Le regole in breve", t:"Ripasso veloce",
      h:`<div class="ls-rule ls-rule-col">
           <div>1° = 60′ &nbsp;·&nbsp; 1′ = 60″ &nbsp;·&nbsp; 1° = 3600″</div>
           <div>⬇️ Scendi (° → ′ → ″): × 60</div>
           <div>⬆️ Sali (″ → ′ → °): : 60</div>
           <div>➕ Nelle operazioni ogni 60 diventa 1 della colonna a sinistra</div>
         </div>
         <p class="ls-note">Poi guarda il video e le slide «Gradi, primi e secondi».</p>` }
  ]
};
