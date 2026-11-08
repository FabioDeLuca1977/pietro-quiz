// ============================================================
//  data/matematica/lezione-assiomi.js  (v1)
//  Gli assiomi della geometria euclidea a slide, con un disegno per ognuno.
//  Testo degli assiomi: quello dettato dal prof (quaderno di Pietro); in corsivo
//  le parti completate da noi con l'enunciato usuale, come nel PDF da stampare.
//  Disegni: gli stessi del PDF, ricolorati per lo sfondo scuro dell'app.
// ============================================================

window.LESSONS = window.LESSONS || {};

(() => {
  const K = '#ffffff', Y = '#ffd23f', B = '#5fd4ff', G = '#22e39a', R = '#ff4d6d';
  const F = 'font-family="system-ui,sans-serif"';
  const seg = (p, q, c = K, w = 4, d = '') => `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"${d ? ` stroke-dasharray="${d}"` : ''}/>`;
  const dot = (p, c = K, r = 6) => `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="${c}"/>`;
  const tx = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${o.fs || 26}" font-weight="${o.w || 800}" fill="${o.c || K}" ${o.i ? 'font-style="italic"' : ''} ${F}>${s}</text>`;
  // punta di freccia in q, nella direzione p→q
  const head = (p, q, c = K, s = 14) => { const a = Math.atan2(q[1] - p[1], q[0] - p[0]), l = [q[0] - s * Math.cos(a - 0.45), q[1] - s * Math.sin(a - 0.45)], r = [q[0] - s * Math.cos(a + 0.45), q[1] - s * Math.sin(a + 0.45)];
    return `<path d="M${l[0]} ${l[1]} L${q[0]} ${q[1]} L${r[0]} ${r[1]}" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`; };
  const arrow = (p, q, c = K) => seg(p, q, c) + head(p, q, c);
  // trattini di congruenza a metà del segmento
  const ticks = (p, q, k, c) => { const m = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], L = Math.hypot(q[0] - p[0], q[1] - p[1]), d = [(q[0] - p[0]) / L, (q[1] - p[1]) / L], n = [-d[1], d[0]]; let s = '';
    for (let i = 0; i < k; i++) { const o = (i - (k - 1) / 2) * 9, c0 = [m[0] + d[0] * o, m[1] + d[1] * o]; s += seg([c0[0] - n[0] * 10, c0[1] - n[1] * 10], [c0[0] + n[0] * 10, c0[1] + n[1] * 10], c, 4); } return s; };
  // arco di un angolo con vertice v, da a1 ad a2 gradi (antiorario), con una tacchetta in mezzo se k
  const pol = (v, r, a) => [v[0] + r * Math.cos(a * Math.PI / 180), v[1] - r * Math.sin(a * Math.PI / 180)];
  const arc = (v, r, a1, a2, c, k = 0) => { const s = pol(v, r, a1), e = pol(v, r, a2); let o = `<path d="M${s[0]} ${s[1]} A${r} ${r} 0 0 0 ${e[0]} ${e[1]}" fill="none" stroke="${c}" stroke-width="4"/>`;
    if (k) { const m = (a1 + a2) / 2; o += seg(pol(v, r - 9, m), pol(v, r + 9, m), c, 4); } return o; };
  const svg = (inner, w, h, mw = 340) => `<svg class="ls-fig" viewBox="0 0 ${w} ${h}" style="max-width:${mw}px" role="img">${inner}</svg>`;

  const A_2A = svg(seg([15, 60], [405, 60]) + dot([130, 60]) + dot([290, 60]) + tx(130, 38, 'A') + tx(290, 38, 'B') + tx(395, 95, 'r', { i: 1 }), 420, 110);
  const A_2B = svg(seg([20, 150], [400, 20], B) + dot([110, 119]) + dot([300, 54]) + tx(100, 155, 'A') + tx(300, 95, 'B') + tx(250, 160, 'una e una sola retta', { fs: 20, w: 600, c: B }), 420, 170);
  const A_2C = svg(seg([15, 110], [405, 110]) + dot([210, 40], R) + tx(232, 35, 'P', { c: R }) + tx(395, 145, 'r', { i: 1 }) + tx(210, 80, 'P non sta su r', { fs: 18, w: 600, c: R }), 420, 150);
  const A_3A = svg(seg([15, 70], [465, 70]) + dot([40, 70]) + dot([440, 70]) + dot([240, 70], B) + dot([140, 70], G) + dot([90, 70], Y, 5) + dot([65, 70], Y, 4)
    + tx(40, 45, 'A') + tx(440, 45, 'B') + tx(240, 45, 'C', { c: B }) + tx(140, 45, 'D', { c: G }) + tx(240, 110, 'C tra A e B, D tra A e C, … : infiniti punti', { fs: 18, w: 600 }), 480, 120);
  const A_3B = svg(arrow([240, 60], [470, 60]) + arrow([240, 60], [10, 60]) + dot([100, 60]) + dot([240, 60], B) + dot([380, 60])
    + tx(100, 38, 'A') + tx(240, 38, 'P', { c: B }) + tx(380, 38, 'B') + tx(240, 105, 'la retta non ha né inizio né fine', { fs: 18, w: 600 }), 480, 120);
  const A_4 = svg(`<rect x="10" y="10" width="420" height="135" fill="${B}26"/><rect x="10" y="145" width="420" height="135" fill="${G}26"/>`
    + seg([10, 145], [430, 145]) + tx(415, 135, 'r', { i: 1 }) + tx(40, 50, 'α', { c: B, fs: 34 }) + tx(40, 260, 'β', { c: G, fs: 34 })
    + seg([120, 60], [280, 240], R) + dot([120, 60]) + dot([280, 240]) + dot([195.6, 145], R, 7) + tx(100, 60, 'A') + tx(302, 250, 'B')
    + seg([270, 45], [390, 100], B, 3, '7 6') + dot([270, 45], B, 5) + dot([390, 100], B, 5) + tx(330, 40, 'resta in α', { fs: 16, w: 600, c: B }), 440, 290);
  const A_5 = (() => { const t = (dx, flip, c) => { const p = [[0, 110], [120, 110], [35, 0]].map(([x, y]) => [dx + (flip ? 120 - x : x), y + 20]);
      return `<polygon points="${p.map(q => q.join(',')).join(' ')}" fill="${c}26" stroke="${c}" stroke-width="4" stroke-linejoin="round"/>`; };
    return svg(t(20, 0, B) + t(200, 1, G) + t(380, 0, Y) + tx(70, 115, 'F₁') + tx(265, 115, 'F₂') + tx(430, 115, 'F₃')
      + tx(260, 172, 'F₁ ≅ F₂ e F₂ ≅ F₃ ⇒ F₁ ≅ F₃', { fs: 20, w: 700 }), 520, 200); })();
  const A_7A = svg(seg([60, 45], [240, 45]) + dot([60, 45]) + dot([240, 45]) + ticks([60, 45], [240, 45], 1, Y) + tx(60, 25, 'A') + tx(240, 25, 'B')
    + arrow([50, 140], [445, 140]) + dot([50, 140]) + dot([230, 140], R) + ticks([50, 140], [230, 140], 1, Y) + tx(50, 178, 'O') + tx(230, 178, 'P', { c: R })
    + tx(345, 95, 'un solo P con OP ≅ AB', { fs: 18, w: 600, c: R }), 460, 190);
  const A_7B = (() => { const O = [40, 150], O1 = [270, 150];
    return svg(seg(O, pol(O, 150, 0)) + seg(O, pol(O, 150, 40)) + arc(O, 45, 0, 40, B, 1) + tx(30, 185, 'O') + tx(200, 180, 'A') + tx(165, 45, 'B')
      + seg([240, 150], [460, 150]) + dot(O1) + tx(262, 185, 'O₁') + tx(450, 135, 's', { i: 1 })
      + seg(O1, pol(O1, 150, 40), G) + arc(O1, 45, 0, 40, B, 1) + seg(O1, pol(O1, 150, -40), G, 4, '9 7') + arc(O1, 45, -40, 0, B, 1)
      + tx(380, 40, 'una sola sopra', { fs: 17, w: 600, c: G }) + tx(380, 275, 'una sola sotto', { fs: 17, w: 600, c: G }), 470, 300); })();
  const A_8 = svg(seg([30, 40], [130, 40]) + ticks([30, 40], [130, 40], 1, Y) + tx(30, 22, 'A', { fs: 20 }) + tx(130, 22, 'B', { fs: 20 })
    + seg([30, 105], [130, 105]) + ticks([30, 105], [130, 105], 1, Y) + tx(30, 87, 'C', { fs: 20 }) + tx(130, 87, 'D', { fs: 20 })
    + arrow([155, 72], [205, 72], B)
    + seg([230, 40], [430, 40]) + dot([330, 40], K, 5) + ticks([230, 40], [330, 40], 1, Y) + ticks([330, 40], [430, 40], 1, Y) + tx(330, 22, 'AB + AB', { fs: 18, w: 600 })
    + seg([230, 105], [430, 105]) + dot([330, 105], K, 5) + ticks([230, 105], [330, 105], 1, Y) + ticks([330, 105], [430, 105], 1, Y) + tx(330, 87, 'CD + CD', { fs: 18, w: 600 })
    + tx(330, 140, 'anche i doppi sono congruenti', { fs: 17, w: 600, c: B }), 460, 150);
  const A_9 = svg(`<rect x="40" y="40" width="120" height="120" fill="none" stroke="${K}" stroke-width="4"/>` + seg([40, 160], [160, 40], R) + tx(100, 185, 'u') + tx(128, 128, '√2', { c: R })
    + seg([220, 110], [390, 110], R) + tx(305, 92, '√2 · u ≈ 1,414 u', { fs: 18, w: 700, c: R }) + seg([220, 165], [340, 165]) + tx(280, 195, 'u', { fs: 22 })
    + seg([220, 95], [220, 180], K, 2, '4 5'), 420, 230);
  const A_10 = (() => { const two = v => seg(v, pol(v, 160, 0)) + seg(v, pol(v, 160, 28)) + seg(v, pol(v, 160, 56)) + arc(v, 55, 0, 28, B, 1) + arc(v, 55, 28, 56, B, 1);
    return svg(two([30, 200]) + two([270, 200]) + tx(110, 228, 'α + α', { fs: 20, w: 700 }) + tx(350, 228, 'β + β', { fs: 20, w: 700 })
      + tx(240, 30, 'se α ≅ β, allora α + α ≅ β + β', { fs: 18, w: 700, c: B }), 480, 240); })();

  const ax = (t) => `<div class="ls-res" style="font-size:1rem;text-align:left;font-family:inherit">${t}</div>`;
  window.LESSONS["assiomi-disegni"] = {
    title: "Gli assiomi con i disegni",
    slides: [
      { k:"Spiegazione", t:"Gli assiomi con i disegni",
        h:`${A_4}
           <p class="ls-big">Un <b>assioma</b> è una proprietà che accettiamo come vera <b>senza dimostrarla</b>.</p>
           <p>Per ogni assioma: l'enunciato dettato dal prof e un disegno che lo fa vedere.</p>
           <p class="ls-note">In <i>corsivo</i> le parti che il prof ha detto in classe ma che sul quaderno mancano: le abbiamo completate con l'enunciato usuale.</p>
           <p class="ls-hint">Scorri verso l'alto ↑</p>` },
      { k:"Assioma 1", t:"Piano, punti e rette",
        h:`${ax('Ogni <b>piano</b> è un insieme di punti; ogni <b>retta</b> è un sottoinsieme del piano.')}
           <p class="ls-note">Sottoinsieme: una parte. La retta è fatta di punti del piano.</p>` },
      { k:"Assioma 2A", t:"Ogni retta ha almeno due punti",
        h:`${A_2A}${ax('A ogni retta appartengono <b>almeno 2 punti distinti</b>.')}` },
      { k:"Assioma 2B", t:"Per due punti, una sola retta",
        h:`${A_2B}${ax('Dati due punti distinti, esiste <i><b>una e una sola</b> retta che li contiene</i>.')}
           <p class="ls-note">🪵 Al falegname bastano due segni e un righello per un taglio dritto.</p>` },
      { k:"Assioma 2C", t:"Fuori dalla retta c'è un punto",
        h:`${A_2C}${ax('Data una retta nel piano, esiste <b>almeno 1 punto</b> del piano che non appartiene a essa.')}` },
      { k:"Assioma 3A", t:"Tra due punti ce n'è sempre un altro",
        h:`${A_3A}${ax('Dati due punti distinti A e B tali che A precede B, ci sarà sempre un punto C tale che <b>A precede C e C precede B</b>.')}
           <p class="ls-note">Ripetendo la regola (D tra A e C, e così via), tra due punti ce ne sono <b>infiniti</b>. 📓 Sul quaderno c'è «C precede A»: è sbagliato, C sta tra A e B.</p>` },
      { k:"Assioma 3B", t:"La retta non ha inizio né fine",
        h:`${A_3B}${ax('Data una retta e preso un punto P sulla retta, ci saranno sempre A e B tali che <b>A precede P e P precede B</b>.')}` },
      { k:"Assioma 4", t:"Una retta divide il piano in due",
        h:`${A_4}${ax('Una retta r divide i punti del piano che non le appartengono in due sottoinsiemi <b>disgiunti e convessi</b> α e β, <i>detti semipiani di origine r</i>. Se A appartiene ad α e B a β, il segmento <i>AB interseca la retta r</i>.')}
           <p class="ls-note"><b>Disgiunti</b>: senza punti in comune. <b>Convesso</b>: il segmento tra due suoi punti resta tutto dentro (il tratteggio). 🌊 Come le due rive di un fiume.</p>` },
      { k:"Assioma 5", t:"Le tre proprietà della congruenza",
        h:`${A_5}${ax('<b>A.</b> Ogni figura è congruente a se stessa.<br><b>B.</b> Se F₁ è congruente a F₂, <i>allora</i> F₂ è congruente a F₁.<br><b>C.</b> Se F₁ è congruente a F₂ <i>e F₂ è congruente</i> a F₃, <i>allora</i> F₁ è congruente a F₃.')}
           <p class="ls-note">Si chiamano proprietà <b>riflessiva</b>, <b>simmetrica</b> e <b>transitiva</b>. F₂ nel disegno è ribaltato: si può sovrapporre lo stesso.</p>` },
      { k:"Assioma 6", t:"Punti e rette sono tutti congruenti",
        h:`${ax('Tutti i punti sono congruenti tra loro, così come <i>i piani,</i> le rette, <i>i semipiani e le semirette</i>.')}
           <p class="ls-note">I <b>segmenti</b> e gli <b>angoli</b> invece no: possono essere diversi. 📓 Piani, semipiani e semirette vengono dagli appunti di un compagno.</p>` },
      { k:"Assioma 7A", t:"Copiare un segmento",
        h:`${A_7A}${ax('Dato un segmento AB e una semiretta di origine O, <i>esiste <b>uno e un solo</b> punto P sulla semiretta tale che OP sia congruente ad AB</i>.')}
           <p class="ls-note">È quello che fa il compasso: prende la misura e la riporta.</p>` },
      { k:"Assioma 7B", t:"Copiare un angolo",
        h:`${A_7B}${ax('Dato un angolo AÔB e una semiretta <i>di origine</i> O₁, <i>in ciascuno dei due semipiani individuati dalla retta che contiene la semiretta esiste una e una sola semiretta di origine O₁</i> tale che i due angoli siano congruenti.')}` },
      { k:"Assioma 8", t:"Operazioni con i segmenti",
        h:`${A_8}${ax('Somma, differenza, multiplo e sottomultiplo di <b>segmenti</b> congruenti sono a loro volta congruenti.')}
           <p class="ls-note">🧱 Due file di 10 mattonelle uguali sono lunghe uguali.</p>` },
      { k:"Assioma 9", t:"Ogni numero è una lunghezza",
        h:`${A_9}${ax('Comunque fissati un segmento non nullo <b>u</b> come unità di misura e un numero reale positivo <b>k</b>, esiste un segmento la cui misura rispetto a u è il numero k.')}
           <p class="ls-note">Vale anche per i numeri irrazionali: la diagonale del quadrato di lato u misura √2 ≈ 1,414.</p>` },
      { k:"Assioma 10", t:"Operazioni con gli angoli",
        h:`${A_10}${ax('Somma, differenza, multipli e sottomultipli di <i>angoli</i> congruenti sono congruenti.')}
           <p class="ls-note">📓 Sul quaderno c'è «segmenti», ma così sarebbe uguale all'8: gli assiomi vanno a coppie, come il 7A (segmenti) e il 7B (angoli).</p>` },
      { k:"Alla fine", t:"Adesso mettiti alla prova",
        h:`<p class="ls-big">Prova a ridisegnare ogni assioma a memoria e a dire l'enunciato ad alta voce.</p>
           <p>Poi fai il quiz sugli assiomi.</p>` },
    ],
  };
})();
