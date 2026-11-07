// ============================================================
//  data/matematica/lezione-mcd-mcm.js  (v1)
//  Spiegazione a slide verticali: numeri primi, scomposizione, MCD e mcm (base delle medie,
//  serve nel cap. 2 per semplificare e per il denominatore comune).
//  Ogni argomento: prima la regola, poi l'esempio. Esempi inventati, risultati ricontrollati.
//  Slide: { k: etichetta, t: titolo, h: html }
// ============================================================

window.LESSONS = window.LESSONS || {};

window.LESSONS["mcd-mcm"] = {
  title: "MCD e mcm",
  slides: [

    { k:"Spiegazione", t:"MCD e mcm",
      h:`<p class="ls-big"><b>MCD</b> = massimo comune divisore.<br><b>mcm</b> = minimo comune multiplo.</p>
         <p>Servono per <b>semplificare</b> le frazioni e per il <b>denominatore comune</b>. Prima la regola, poi gli esempi.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },

    { k:"Regola", t:"Divisori e multipli",
      h:`<ol class="ls-steps">
           <li>I <b>divisori</b> di 12 sono i numeri che dividono 12 senza resto: 1, 2, 3, 4, 6, 12.</li>
           <li>I <b>multipli</b> di 4 si trovano con la tabellina: 4, 8, 12, 16, 20, …</li>
         </ol>
         <div class="ls-why">👉 I divisori sono pochi e più piccoli; i multipli sono infiniti e più grandi.</div>` },

    { k:"Regola", t:"I numeri primi",
      h:`<p>Un numero <b>primo</b> si divide solo per <b>1</b> e per <b>se stesso</b>.</p>
         <div class="ls-rule"><div>2</div><div>3</div><div>5</div><div>7</div><div>11</div><div>13</div><div>17</div><div>19</div></div>
         <div class="ls-warn">⚠️ <b>1 non è primo.</b> E 2 è l'unico primo pari.</div>` },

    { k:"Regola", t:"I criteri di divisibilità",
      h:`<div class="ls-calc">
           <div><span>finisce con 0, 2, 4, 6, 8</span><b>: 2</b></div>
           <div><span>la somma delle cifre si divide per 3</span><b>: 3</b></div>
           <div><span>finisce con 0 o 5</span><b>: 5</b></div>
         </div>
         <p class="ls-note">Esempio: 51 → 5 + 1 = 6, che si divide per 3: quindi 51 = 3 · 17, e <b>non</b> è primo.</p>` },

    { k:"Regola 1", t:"Scomporre in fattori primi",
      h:`<ol class="ls-steps">
           <li>Dividi il numero per il <b>primo più piccolo</b> che lo divide (2, poi 3, poi 5, …).</li>
           <li>Ripeti con il risultato, finché arrivi a <b>1</b>.</li>
           <li>I divisori usati sono i <b>fattori primi</b>: quelli uguali si scrivono come potenza.</li>
         </ol>` },

    { k:"Esempio facile", t:"60",
      h:`<table class="ls-col">
           <tr><td>60</td><td>2</td></tr><tr><td>30</td><td>2</td></tr><tr><td>15</td><td>3</td></tr><tr><td>5</td><td>5</td></tr><tr class="sum"><td>1</td><td></td></tr>
         </table>
         <div class="ls-res">60 = 2² · 3 · 5</div>
         <p class="ls-note">Controllo: 4 · 3 · 5 = 60 ✅</p>` },

    { k:"Esempio difficile", t:"360",
      h:`<table class="ls-col">
           <tr><td>360</td><td>2</td></tr><tr><td>180</td><td>2</td></tr><tr><td>90</td><td>2</td></tr><tr><td>45</td><td>3</td></tr><tr><td>15</td><td>3</td></tr><tr><td>5</td><td>5</td></tr><tr class="sum"><td>1</td><td></td></tr>
         </table>
         <div class="ls-res">360 = 2³ · 3² · 5</div>
         <p class="ls-note">Controllo: 8 · 9 · 5 = 360 ✅</p>` },

    { k:"Regola 2", t:"Il MCD",
      h:`<ol class="ls-steps">
           <li>Scomponi i numeri in fattori primi.</li>
           <li>Prendi solo i fattori <b>comuni</b> (presenti in tutti).</li>
           <li>Ognuno con l'esponente più <b>piccolo</b>.</li>
         </ol>
         <div class="ls-why">👉 Il MCD è il numero più grande che divide tutti: è <b>minore o uguale</b> ai numeri.</div>` },

    { k:"Esempi", t:"MCD(12; 18) e MCD(24; 36)",
      h:`<div class="ls-calc">
           <div><span>12 = 2² · 3 &nbsp; 18 = 2 · 3²</span><b></b></div>
           <div><span>comuni 2 e 3, esponente piccolo</span><b>2 · 3 = 6</b></div>
         </div>
         <div class="ls-calc">
           <div><span>24 = 2³ · 3 &nbsp; 36 = 2² · 3²</span><b></b></div>
           <div><span>comuni 2 e 3, esponente piccolo</span><b>2² · 3 = 12</b></div>
         </div>
         <p class="ls-note">Se non ci sono fattori comuni, MCD = 1: per esempio MCD(8; 15) = 1. I numeri si dicono <b>primi tra loro</b>.</p>` },

    { k:"Regola 3", t:"Il mcm",
      h:`<ol class="ls-steps">
           <li>Scomponi i numeri in fattori primi.</li>
           <li>Prendi <b>tutti</b> i fattori, comuni e non comuni.</li>
           <li>Ognuno con l'esponente più <b>grande</b>.</li>
         </ol>
         <div class="ls-why">👉 Il mcm è il numero più piccolo che è multiplo di tutti: è <b>maggiore o uguale</b> ai numeri.</div>` },

    { k:"Esempi", t:"mcm(4; 6) e mcm(12; 18)",
      h:`<div class="ls-calc">
           <div><span>4 = 2² &nbsp; 6 = 2 · 3</span><b></b></div>
           <div><span>tutti, esponente grande</span><b>2² · 3 = 12</b></div>
         </div>
         <div class="ls-calc">
           <div><span>12 = 2² · 3 &nbsp; 18 = 2 · 3²</span><b></b></div>
           <div><span>tutti, esponente grande</span><b>2² · 3² = 36</b></div>
         </div>
         <p class="ls-note">Controllo: 36 : 12 = 3 e 36 : 18 = 2 ✅</p>` },

    { k:"Esempio difficile", t:"Con tre numeri: 8, 12, 30",
      h:`<div class="ls-calc">
           <div><span>8 = 2³ · 12 = 2² · 3 · 30 = 2 · 3 · 5</span><b></b></div>
           <div><span>MCD: comune solo il 2, esp. piccolo</span><b>2</b></div>
           <div><span>mcm: 2³ · 3 · 5</span><b>120</b></div>
         </div>
         <p class="ls-note">Controllo: 120 : 8 = 15, 120 : 12 = 10, 120 : 30 = 4 ✅</p>` },

    { k:"A che cosa serve", t:"MCD → semplificare",
      h:`<p>Per ridurre una frazione ai minimi termini dividi sopra e sotto per il <b>MCD</b>.</p>
         <div class="ls-calc">
           <div><span>18/24 · MCD(18; 24) = 6</span><b>3/4</b></div>
           <div><span>90/12 · MCD(90; 12) = 6</span><b>15/2</b></div>
         </div>` },

    { k:"A che cosa serve", t:"mcm → denominatore comune",
      h:`<p>Per sommare o sottrarre frazioni usa come denominatore il <b>mcm</b> dei denominatori.</p>
         <div class="ls-calc">
           <div><span>1/4 + 1/6 · mcm(4; 6) = 12</span><b></b></div>
           <div><span>3/12 + 2/12</span><b>5/12</b></div>
         </div>
         <div class="ls-calc">
           <div><span>3/4 − 1/6 = 9/12 − 2/12</span><b>7/12</b></div>
         </div>` },

    { k:"Da ricordare", t:"In tre righe",
      h:`<div class="ls-rule ls-rule-col">
           <div>🔢 Scomponi: dividi per il primo più piccolo fino a 1</div>
           <div>⬇️ <b>MCD</b>: fattori <b>comuni</b>, esponente più <b>piccolo</b> → semplificare</div>
           <div>⬆️ <b>mcm</b>: <b>tutti</b> i fattori, esponente più <b>grande</b> → denominatore comune</div>
         </div>` }
  ]
};
