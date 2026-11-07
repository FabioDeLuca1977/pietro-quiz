// ============================================================
//  data/matematica/lezione-segni.js  (v1)
//  Spiegazione a slide verticali: numeri interi e regole dei segni (base delle medie).
//  Ogni argomento: prima la regola, poi l'esempio. Esempi inventati, risultati ricontrollati.
//  Slide: { k: etichetta, t: titolo, h: html }
// ============================================================

window.LESSONS = window.LESSONS || {};

window.LESSONS["segni"] = {
  title: "Le regole dei segni",
  slides: [

    { k:"Spiegazione", t:"Le regole dei segni",
      h:`<p class="ls-big">Più e meno con i <b>numeri interi</b>: …, −3, −2, −1, 0, +1, +2, +3, …</p>
         <p>Servono dappertutto: frazioni, potenze, espressioni. Per ogni argomento trovi <b>prima la regola</b>, poi gli <b>esempi</b>.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },

    { k:"Regola", t:"Il valore assoluto",
      h:`<p>Il <b>valore assoluto</b> di un numero è il numero <b>senza il segno</b>. Si scrive tra due sbarrette.</p>
         <div class="ls-rule"><div>|−7| = 7</div><div>|+7| = 7</div><div>|0| = 0</div></div>
         <div class="ls-why">👉 Serve per capire quale numero è «più grande» quando i segni sono diversi.</div>` },

    { k:"Regola 1", t:"L'addizione",
      h:`<ol class="ls-steps">
           <li>Segni <b>uguali</b>: <b>sommi</b> i valori assoluti e tieni il segno.</li>
           <li>Segni <b>diversi</b>: fai la <b>differenza</b> dei valori assoluti e tieni il segno del numero con il valore assoluto più grande.</li>
         </ol>
         <div class="ls-why">👉 Pensa ai soldi: + sono guadagni, − sono debiti. Due debiti si sommano; un debito e un guadagno si compensano.</div>` },

    { k:"Esempi", t:"Addizione",
      h:`<div class="ls-calc">
           <div><span>−2 − 7 · uguali: 2 + 7</span><b>−9</b></div>
           <div><span>+3 + 6 · uguali: 3 + 6</span><b>+9</b></div>
           <div><span>−5 + 8 · diversi: 8 − 5, vince 8</span><b>+3</b></div>
           <div><span>+4 − 10 · diversi: 10 − 4, vince −10</span><b>−6</b></div>
         </div>
         <p class="ls-note">Debito di 5 e guadagno di 8: ti restano 3. Guadagno di 4 e debito di 10: sei sotto di 6.</p>` },

    { k:"Regola 2", t:"Togliere le parentesi",
      h:`<ol class="ls-steps">
           <li>Un <b>+</b> davanti alla parentesi: i segni dentro <b>restano uguali</b>.</li>
           <li>Un <b>−</b> davanti alla parentesi: i segni dentro <b>si cambiano</b>.</li>
         </ol>
         <div class="ls-rule"><div>+(−3) = −3</div><div>−(−3) = +3</div><div>−(+3) = −3</div></div>
         <div class="ls-why">👉 Togliere un debito è come guadagnare: − (−3) = +3.</div>` },

    { k:"Esempi", t:"Con le parentesi",
      h:`<div class="ls-calc">
           <div><span>7 − (−3) = 7 + 3</span><b>10</b></div>
           <div><span>−4 + (−6) = −4 − 6</span><b>−10</b></div>
           <div><span>5 − (+8) = 5 − 8</span><b>−3</b></div>
           <div><span>−(2 − 9) = −2 + 9</span><b>7</b></div>
         </div>
         <p class="ls-note">Nell'ultimo il − cambia <b>tutti</b> i segni dentro la parentesi. Controllo: 2 − 9 = −7, e −(−7) = 7 ✅</p>` },

    { k:"Regola 3", t:"Moltiplicazione e divisione",
      h:`<p>Si moltiplicano (o dividono) i valori assoluti. Il segno si trova così:</p>
         <div class="ls-rule"><div>+ · + = +</div><div>− · − = +</div><div>+ · − = −</div><div>− · + = −</div></div>
         <ol class="ls-steps">
           <li>Segni <b>uguali</b> → risultato <b>positivo</b>.</li>
           <li>Segni <b>diversi</b> → risultato <b>negativo</b>.</li>
         </ol>
         <p class="ls-note">Vale uguale per la divisione.</p>` },

    { k:"Esempi", t:"Per e diviso",
      h:`<div class="ls-calc">
           <div><span>(−3) · (−4) · uguali</span><b>+12</b></div>
           <div><span>(+5) · (−2) · diversi</span><b>−10</b></div>
           <div><span>(−12) : (+3) · diversi</span><b>−4</b></div>
           <div><span>(−20) : (−5) · uguali</span><b>+4</b></div>
         </div>` },

    { k:"Regola 3 bis", t:"Tanti fattori: conta i meno",
      h:`<ol class="ls-steps">
           <li>Conta quanti fattori hanno il <b>−</b>.</li>
           <li>Numero <b>pari</b> di meno → risultato <b>positivo</b>.</li>
           <li>Numero <b>dispari</b> di meno → risultato <b>negativo</b>.</li>
         </ol>
         <div class="ls-calc">
           <div><span>(−1)·(−2)·(−3) · 3 meno, dispari</span><b>−6</b></div>
           <div><span>(−2)·(+3)·(−5) · 2 meno, pari</span><b>+30</b></div>
         </div>` },

    { k:"Regola 4", t:"Potenze di un numero negativo",
      h:`<ol class="ls-steps">
           <li>Esponente <b>pari</b> → risultato <b>positivo</b>.</li>
           <li>Esponente <b>dispari</b> → risultato <b>negativo</b>.</li>
         </ol>
         <div class="ls-calc">
           <div><span>(−3)² = (−3)·(−3)</span><b>+9</b></div>
           <div><span>(−2)³ = (−2)·(−2)·(−2)</span><b>−8</b></div>
           <div><span>(−1)¹⁰⁰ · esponente pari</span><b>+1</b></div>
         </div>
         <div class="ls-why">👉 È la regola 3 bis: l'esponente dice quanti meno moltiplichi.</div>` },

    { k:"Attenzione", t:"Con o senza parentesi?",
      h:`<div class="ls-calc">
           <div><span>(−3)² · la base è −3</span><b>+9</b></div>
           <div><span>−3² · la base è solo 3</span><b>−9</b></div>
         </div>
         <div class="ls-warn">⚠️ Senza parentesi la potenza riguarda <b>solo il numero</b>, non il segno: −3² = −(3 · 3) = −9.</div>` },

    { k:"Regola 5", t:"L'ordine nelle espressioni",
      h:`<ol class="ls-steps">
           <li>Prima le <b>parentesi</b>, dalle più interne.</li>
           <li>Poi le <b>potenze</b>.</li>
           <li>Poi <b>per e diviso</b>, da sinistra a destra.</li>
           <li>Infine <b>più e meno</b>, da sinistra a destra.</li>
         </ol>` },

    { k:"Esempio", t:"−2 + 3 · (−4)",
      h:`<div class="ls-calc">
           <div><span>prima il per: 3 · (−4)</span><b>−12</b></div>
           <div><span>poi −2 + (−12) = −2 − 12</span><b>−14</b></div>
         </div>
         <div class="ls-res">−2 + 3 · (−4) = −14</div>
         <p class="ls-note">Se fai prima −2 + 3 = 1 e poi 1 · (−4) = −4, è sbagliato: il per va prima del più.</p>` },

    { k:"Esempio difficile", t:"(−2)³ − 3 · (5 − 7)",
      h:`<div class="ls-calc">
           <div><span>parentesi: 5 − 7</span><b>−2</b></div>
           <div><span>potenza: (−2)³</span><b>−8</b></div>
           <div><span>per: 3 · (−2)</span><b>−6</b></div>
           <div><span>−8 − (−6) = −8 + 6</span><b>−2</b></div>
         </div>
         <div class="ls-res">(−2)³ − 3 · (5 − 7) = −2</div>` },

    { k:"Da ricordare", t:"In quattro righe",
      h:`<div class="ls-rule ls-rule-col">
           <div>➕ Addizione: uguali → <b>sommi</b>; diversi → <b>differenza</b>, segno del più grande</div>
           <div>➖ Un − davanti alla parentesi <b>cambia tutti i segni</b></div>
           <div>✖️ Per e diviso: uguali → <b>+</b>; diversi → <b>−</b></div>
           <div>⚠️ (−3)² = 9 ma −3² = −9</div>
         </div>` }
  ]
};
