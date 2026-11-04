// ============================================================
//  data/matematica/lezione-gradi-primi-secondi.js  (v1)
//  Spiegazione a slide verticali: gradi, primi e secondi
//  (sistema sessagesimale). Ogni argomento: prima la regola, poi l'esempio.
//  Gli esempi sono inventati; ogni conto è stato rifatto anche al contrario.
//  Slide: { k: etichetta, t: titolo, h: html }
// ============================================================

window.LESSONS = window.LESSONS || {};

window.LESSONS["gradi-primi-secondi"] = {
  title: "Gradi, primi e secondi",
  slides: [

    { k:"Spiegazione", t:"Gradi, primi e secondi",
      h:`<p class="ls-big">Come si misurano gli angoli nel <b>sistema sessagesimale</b>.</p>
         <p>Per ogni argomento trovi <b>prima la regola</b>, poi gli <b>esempi</b>, dal più facile al più difficile.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },

    { k:"Regola", t:"La regola di base",
      h:`<p>Un angolo si misura in <b>gradi (°)</b>. Ogni grado si divide in <b>60 primi (′)</b>, ogni primo in <b>60 secondi (″)</b>.</p>
         <div class="ls-rule"><div>1° = 60′</div><div>1′ = 60″</div><div>1° = 3600″</div></div>
         <p>Funziona come l'orologio: ore, minuti e secondi. Si conta <b>a gruppi di 60</b>, non di 10 o di 100.</p>` },

    { k:"Esempio", t:"Mezzo grado",
      h:`<p>Mezz'ora sono 30 minuti. Allo stesso modo, mezzo grado sono 30 primi:</p>
         <div class="ls-res">0,5° = 30′</div>
         <div class="ls-warn">⚠️ <b>L'errore più comune:</b> 25,42° <b>non</b> è 25° 42′. Dopo la virgola si conta a gruppi di 100, i primi invece vanno a gruppi di 60. È come dire che 1,5 ore sono «1 ora e 50»: sono 1 ora e 30.</div>` },

    { k:"Regola 1", t:"Da gradi con la virgola a ° ′ ″",
      h:`<ol class="ls-steps">
           <li>Il numero <b>prima della virgola</b> sono i <b>gradi</b>.</li>
           <li>Il numero <b>dopo la virgola</b> lo moltiplichi <b>× 60</b>: la parte intera sono i <b>primi</b>.</li>
           <li>Se avanza ancora qualcosa dopo la virgola, lo moltiplichi <b>× 60</b>: sono i <b>secondi</b>.</li>
         </ol>
         <div class="ls-why">👉 <b>Perché × 60?</b> Passi a un'unità più piccola: in 1° ci sono 60 primi, quindi il numero diventa 60 volte più grande.</div>` },

    { k:"Esempio facile", t:"2,25°",
      h:`<div class="ls-calc">
           <div><span>gradi</span><b>2°</b></div>
           <div><span>0,25 × 60 = 15</span><b>15′</b></div>
         </div>
         <div class="ls-res">2,25° = 2° 15′</div>` },

    { k:"Esempio medio", t:"7,125°",
      h:`<div class="ls-calc">
           <div><span>gradi</span><b>7°</b></div>
           <div><span>0,125 × 60 = 7,5</span><b>7′</b></div>
           <div><span>avanza 0,5 → 0,5 × 60 = 30</span><b>30″</b></div>
         </div>
         <div class="ls-res">7,125° = 7° 7′ 30″</div>` },

    { k:"Esempio difficile", t:"123,456°",
      h:`<div class="ls-calc">
           <div><span>gradi</span><b>123°</b></div>
           <div><span>0,456 × 60 = 27,36</span><b>27′</b></div>
           <div><span>avanza 0,36 → 0,36 × 60 = 21,6</span><b>21,6″</b></div>
         </div>
         <div class="ls-res">123,456° = 123° 27′ 21,6″</div>
         <p class="ls-note">I secondi possono avere la virgola, oppure si arrotonda: 22″.</p>` },

    { k:"Regola 2", t:"Da ° ′ ″ a gradi con la virgola",
      h:`<p>È il cammino al contrario, quindi si fa l'operazione opposta: <b>: 60</b>.</p>
         <ol class="ls-steps">
           <li>Parti dai <b>secondi</b>: <b>: 60</b> e diventano primi. Sommali ai primi.</li>
           <li>Prendi i <b>primi</b>: <b>: 60</b> e diventano gradi. Sommali ai gradi.</li>
         </ol>
         <div class="ls-why">👉 <b>Perché : 60?</b> Passi a un'unità più grande: 60 primi fanno 1 grado, quindi il numero diventa 60 volte più piccolo.</div>` },

    { k:"Esempi facili", t:"2° 15′ e 7° 7′ 30″",
      h:`<div class="ls-calc">
           <div><span>15 : 60 = 0,25 → 2 + 0,25</span><b>2,25°</b></div>
         </div>
         <div class="ls-calc">
           <div><span>30″ : 60 = 0,5 → 7 + 0,5</span><b>7,5′</b></div>
           <div><span>7,5 : 60 = 0,125 → 7 + 0,125</span><b>7,125°</b></div>
         </div>
         <p class="ls-note">Sono gli esempi di prima, fatti al contrario.</p>` },

    { k:"Esempio difficile", t:"123° 27′ 21,6″",
      h:`<div class="ls-calc">
           <div><span>21,6 : 60 = 0,36 → 27 + 0,36</span><b>27,36′</b></div>
           <div><span>27,36 : 60 = 0,456 → 123 + 0,456</span><b>123,456°</b></div>
         </div>
         <div class="ls-res">123° 27′ 21,6″ = 123,456°</div>
         <div class="ls-why">✅ Si ritrova il numero di partenza: <b>così si controllano i conti</b>.</div>` },

    { k:"Regola 3", t:"Le operazioni",
      h:`<ol class="ls-steps">
           <li>Metti in colonna <b>gradi sotto gradi, primi sotto primi, secondi sotto secondi</b>.</li>
           <li>Calcola colonna per colonna.</li>
           <li>Se in una colonna hai <b>60 o più</b>, togli 60 e aggiungi <b>1</b> alla colonna di sinistra.</li>
         </ol>
         <div class="ls-rule"><div>60″ → 1′</div><div>60′ → 1°</div></div>` },

    { k:"Addizione", t:"35° 48′ 50″ + 20° 25′ 30″",
      h:`<p><b>Regola:</b> sommi colonna per colonna, poi trasformi i 60.</p>
         <table class="ls-col">
           <tr><td>35°</td><td>48′</td><td>50″</td><td>+</td></tr>
           <tr><td>20°</td><td>25′</td><td>30″</td><td>=</td></tr>
           <tr class="sum"><td>55°</td><td>73′</td><td>80″</td><td></td></tr>
         </table>
         <div class="ls-calc">
           <div><span>80″ = 60″ + 20″ → +1′</span><b>55° 74′ 20″</b></div>
           <div><span>74′ = 60′ + 14′ → +1°</span><b>56° 14′ 20″</b></div>
         </div>
         <div class="ls-res">56° 14′ 20″</div>` },

    { k:"Sottrazione", t:"90° − 37° 25′ 40″",
      h:`<p><b>Regola:</b> se sopra hai meno che sotto, <b>chiedi in prestito</b> 1 alla colonna di sinistra: diventa 60.</p>
         <div class="ls-calc">
           <div><span>90° = 89° 60′ = 89° 59′ 60″</span><b></b></div>
         </div>
         <table class="ls-col">
           <tr><td>89°</td><td>59′</td><td>60″</td><td>–</td></tr>
           <tr><td>37°</td><td>25′</td><td>40″</td><td>=</td></tr>
           <tr class="sum"><td>52°</td><td>34′</td><td>20″</td><td></td></tr>
         </table>
         <p class="ls-note">Controllo: 52° 34′ 20″ + 37° 25′ 40″ = 89° 59′ 60″ = 90° ✅</p>` },

    { k:"Moltiplicazione", t:"25° 40′ 30″ × 3",
      h:`<p><b>Regola:</b> moltiplichi ogni colonna, poi trasformi i 60 partendo dai secondi.</p>
         <div class="ls-calc">
           <div><span>ogni colonna × 3</span><b>75° 120′ 90″</b></div>
           <div><span>90″ = 1′ 30″</span><b>75° 121′ 30″</b></div>
           <div><span>121′ = 2° 1′</span><b>77° 1′ 30″</b></div>
         </div>
         <div class="ls-res">77° 1′ 30″</div>` },

    { k:"Divisione", t:"65° 20′ 40″ : 4",
      h:`<p><b>Regola:</b> parti dai <b>gradi</b>. Il resto lo trasformi (× 60) e lo aggiungi alla colonna dopo.</p>
         <div class="ls-calc">
           <div><span>65 : 4 = 16, resto 1°</span><b>16°</b></div>
           <div><span>1° = 60′ → 60′ + 20′ = 80′ → 80 : 4</span><b>20′</b></div>
           <div><span>40 : 4</span><b>10″</b></div>
         </div>
         <div class="ls-res">16° 20′ 10″</div>
         <p class="ls-note">Controllo: 16° 20′ 10″ × 4 = 64° 80′ 40″ = 65° 20′ 40″ ✅</p>` },

    { k:"Da ricordare", t:"In tre righe",
      h:`<div class="ls-rule ls-rule-col">
           <div>⬇️ Scendi (° → ′ → ″): <b>× 60</b></div>
           <div>⬆️ Sali (″ → ′ → °): <b>: 60</b></div>
           <div>➕ Nelle operazioni: ogni 60 diventa <b>1</b> della colonna a sinistra</div>
         </div>` }

  ]
};
