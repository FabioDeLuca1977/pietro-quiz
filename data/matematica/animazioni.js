// ============================================================
//  data/matematica/animazioni.js  (v1)
//  Gli assiomi animati, passo per passo: ogni assioma è una piccola animazione
//  che si fa avanzare con «Avanti». draw(passo, p, valori) restituisce l'SVG;
//  p va da 0 a 1 mentre il passo si anima. L'enunciato è quello delle slide
//  (quaderno + completamenti in corsivo); spiegazioni e figure sono nostre.
// ============================================================
window.ANIMS = window.ANIMS || {};
(() => {
  const K = '#ffffff', Y = '#ffd23f', B = '#5fd4ff', G = '#22e39a', R = '#ff4d6d', D = 'rgba(255,255,255,.28)';
  const Lr = (a, b, t) => a + (b - a) * t, LP = (p, q, t) => [Lr(p[0], q[0], t), Lr(p[1], q[1], t)];
  const cl = t => Math.max(0, Math.min(1, t));
  const seg = (p, q, c = K, w = 4, o = 1, d = '') => `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" opacity="${o}"${d ? ` stroke-dasharray="${d}"` : ''}/>`;
  const dot = (p, c = K, r = 6, o = 1) => `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="${c}" opacity="${o}"/>`;
  const tx = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}" font-size="${o.fs || 22}" font-weight="${o.w || 800}" fill="${o.c || K}" opacity="${o.o ?? 1}" font-family="system-ui,sans-serif"${o.i ? ' font-style="italic"' : ''}>${s}</text>`;
  const head = (p, q, c = K, o = 1, s = 13) => { const a = Math.atan2(q[1] - p[1], q[0] - p[0]), l = [q[0] - s * Math.cos(a - 0.45), q[1] - s * Math.sin(a - 0.45)], r = [q[0] - s * Math.cos(a + 0.45), q[1] - s * Math.sin(a + 0.45)];
    return `<path d="M${l[0]} ${l[1]} L${q[0]} ${q[1]} L${r[0]} ${r[1]}" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="${o}"/>`; };
  const ray = (p, q, c = K, w = 4, o = 1) => seg(p, q, c, w, o) + head(p, q, c, o);
  const pol = (v, r, a) => [v[0] + r * Math.cos(a * Math.PI / 180), v[1] - r * Math.sin(a * Math.PI / 180)];
  // arco da a1 ad a2 gradi (in senso antiorario se a2 > a1), con tacchetta se k
  const arc = (v, r, a1, a2, c = B, k = 0, o = 1) => { const s = pol(v, r, a1), e = pol(v, r, a2);
    let out = `<path d="M${s[0]} ${s[1]} A${r} ${r} 0 0 ${a2 > a1 ? 0 : 1} ${e[0]} ${e[1]}" fill="none" stroke="${c}" stroke-width="4" opacity="${o}"/>`;
    if (k) { const m = (a1 + a2) / 2; out += seg(pol(v, r - 8, m), pol(v, r + 8, m), c, 4, o); } return out; };
  const tick = (p, q, c = Y, o = 1) => { const m = LP(p, q, .5), L = Math.hypot(q[0] - p[0], q[1] - p[1]), n = [-(q[1] - p[1]) / L, (q[0] - p[0]) / L];
    return seg([m[0] - n[0] * 10, m[1] - n[1] * 10], [m[0] + n[0] * 10, m[1] + n[1] * 10], c, 4, o); };
  const poly = (pts, c, o = 1, dash = '') => `<polygon points="${pts.map(q => q.join(',')).join(' ')}" fill="${c}33" stroke="${c}" stroke-width="4" stroke-linejoin="round" opacity="${o}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

  const A = [];
  // ── 1 ─────────────────────────────────────────────────────────
  A.push({ key: '1', title: 'Assioma 1', h: 250,
    enunc: 'Ogni <b>piano</b> è un insieme di punti; ogni <b>retta</b> è un sottoinsieme del piano.',
    steps: ['Il piano è un insieme di punti: immagina un foglio senza bordi, tutto fatto di punti. Qui ne disegniamo solo alcuni: in realtà sono infiniti.',
            'Una retta è un sottoinsieme del piano: è fatta di alcuni di quei punti, tutti allineati.'],
    draw: (s, p) => { let o = '';
      if (s >= 1) o += seg([10, 125], LP([10, 125], [470, 125], s === 1 ? p : 1), Y, 4);
      for (let i = 0; i < 9; i++) for (let j = 0; j < 5; j++) { const on = s >= 1 && j === 2; o += dot([40 + i * 50, 35 + j * 45], on ? Y : K, on ? 7 : 5, s === 0 ? cl(p * 3 - (i + j) / 6) : 1); }
      return o + tx(240, 240, s >= 1 ? 'la retta: punti del piano tutti allineati' : 'il piano: un insieme di punti', { fs: 17, w: 700, c: s >= 1 ? Y : K }); } });
  // ── 2A ────────────────────────────────────────────────────────
  A.push({ key: '2A', title: 'Assioma 2A', h: 160,
    enunc: 'A ogni retta appartengono <b>almeno 2 punti distinti</b>.',
    steps: ['Ecco una retta r.', 'Su ogni retta ci sono almeno due punti diversi: A e B. Una retta non è mai vuota e non è un punto solo.'],
    draw: (s, p) => { const t = s === 0 ? p : 1;
      let o = seg(LP([240, 90], [15, 90], t), LP([240, 90], [465, 90], t)) + tx(455, 125, 'r', { i: 1, o: t });
      if (s >= 1) o += dot([150, 90], Y, 7, s === 1 ? cl(p * 2) : 1) + tx(150, 65, 'A', { c: Y, o: s === 1 ? cl(p * 2) : 1 }) + dot([330, 90], Y, 7, s === 1 ? cl(p * 2 - 1) : 1) + tx(330, 65, 'B', { c: Y, o: s === 1 ? cl(p * 2 - 1) : 1 });
      return o; } });
  // ── 2B ────────────────────────────────────────────────────────
  A.push({ key: '2B', title: 'Assioma 2B', h: 240,
    enunc: 'Dati due punti distinti, esiste <i><b>una e una sola</b> retta che li contiene</i>.',
    steps: ['Prendi due punti diversi, A e B.', 'Per il solo punto A passano infinite rette: eccone alcune.', 'Ma una sola di loro passa anche per B: è la retta AB. Per due punti passa una retta, e una sola.'],
    draw: (s, p) => { const PA = [140, 170], PB = [340, 90]; let o = '';
      if (s >= 1) [0, 50, 80, 115, 150].forEach((a, i) => { const q1 = pol(PA, 330, a), q2 = pol(PA, -330, a);
        o += seg(q1, q2, D, 3, s === 1 ? cl(p * 5 - i) : Lr(1, 0.12, p)); });
      if (s >= 2) { const ang = Math.atan2(PA[1] - PB[1], PB[0] - PA[0]) * 180 / Math.PI;
        o += seg(pol(PA, -140, ang), LP(pol(PA, -140, ang), pol(PA, 360, ang), p), B, 5) + tx(380, 150, 'una e una sola', { c: B, fs: 18, o: p }); }
      return o + dot(PA, Y, 8) + tx(PA[0] - 6, PA[1] + 32, 'A', { c: Y }) + dot(PB, Y, 8) + tx(PB[0] + 4, PB[1] - 18, 'B', { c: Y }); } });
  // ── 2C ────────────────────────────────────────────────────────
  A.push({ key: '2C', title: 'Assioma 2C', h: 190,
    enunc: 'Data una retta nel piano, esiste <b>almeno 1 punto</b> del piano che non appartiene a essa.',
    steps: ['Una retta r nel piano.', 'Fuori dalla retta c\'è sempre almeno un punto P che non le appartiene: il piano non è fatto di una retta sola.'],
    draw: (s, p) => { const t = s === 0 ? p : 1;
      let o = seg(LP([240, 140], [15, 140], t), LP([240, 140], [465, 140], t)) + tx(455, 175, 'r', { i: 1, o: t });
      if (s >= 1) o += dot([240, 55], R, 8, p) + tx(262, 50, 'P', { c: R, o: p }) + tx(240, 100, 'P non sta su r', { c: R, fs: 16, w: 700, o: p });
      return o; } });
  // ── 3A ────────────────────────────────────────────────────────
  A.push({ key: '3A', title: 'Assioma 3A', h: 190,
    enunc: 'Dati due punti distinti A e B tali che A precede B, ci sarà sempre un punto C tale che <b>A precede C e C precede B</b>.',
    steps: ['Due punti diversi su una retta: A precede B, cioè A viene prima di B.', 'C\'è sempre un punto C in mezzo: A precede C e C precede B. Questo è l\'assioma.', 'Conseguenza (non fa parte dell\'assioma): ripeti la regola tra A e C, poi ancora, e così via. I punti in mezzo non finiscono mai.'],
    draw: (s, p) => { let o = seg([15, 110], [465, 110]) + dot([60, 110], K, 7) + tx(60, 85, 'A') + dot([420, 110], K, 7) + tx(420, 85, 'B');
      if (s >= 1) { const t = s === 1 ? p : 1; o += dot([240, 110], B, 8, t) + tx(240, 85, 'C', { c: B, o: t })
        + head([90, 145], [220, 145], B, t) + seg([90, 145], [220, 145], B, 3, t) + head([260, 145], [390, 145], B, t) + seg([260, 145], [390, 145], B, 3, t)
        + tx(155, 170, 'A precede C', { c: B, fs: 15, w: 700, o: t }) + tx(325, 170, 'C precede B', { c: B, fs: 15, w: 700, o: t }); }
      if (s >= 2) { let x = 240; for (let i = 0; i < 5; i++) { x = (60 + x) / 2; o += dot([x, 110], G, 6 - i * .7, cl(p * 5 - i)); }
        o += tx(240, 40, 'conseguenza: infiniti punti in mezzo', { c: G, fs: 15, w: 700, o: p }); }
      return o; } });
  // ── 3B ────────────────────────────────────────────────────────
  A.push({ key: '3B', title: 'Assioma 3B', h: 170,
    enunc: 'Data una retta e preso un punto P sulla retta, ci saranno sempre A e B tali che <b>A precede P e P precede B</b>.',
    steps: ['Prendi un punto P su una retta.', 'Prima di P c\'è sempre un punto A: A precede P.', 'Dopo P c\'è sempre un punto B: P precede B. Questo è l\'assioma.', 'Conseguenza: puoi ripeterlo all\'infinito, prima di A e dopo B. Quindi la retta non ha né inizio né fine.'],
    draw: (s, p) => { const t3 = s >= 3 ? (s === 3 ? p : 1) : 0;
      let o = t3 ? ray([240, 95], LP([120, 95], [465, 95], t3)) + ray([240, 95], LP([360, 95], [15, 95], t3)) : seg([120, 95], [360, 95]);
      o += dot([240, 95], B, 8) + tx(240, 70, 'P', { c: B });
      if (s >= 1) { const t = s === 1 ? p : 1; o += dot([150, 95], Y, 7, t) + tx(150, 70, 'A', { c: Y, o: t }); }
      if (s >= 2) { const t = s === 2 ? p : 1; o += dot([330, 95], Y, 7, t) + tx(330, 70, 'B', { c: Y, o: t }); }
      if (t3) { [70, 410].forEach(x => o += dot([x, 95], G, 5, t3)); o += tx(240, 145, 'conseguenza: né inizio né fine', { c: G, fs: 15, w: 700, o: t3 }); }
      return o; } });
  // ── 4 ─────────────────────────────────────────────────────────
  A.push({ key: '4', title: 'Assioma 4', h: 300,
    enunc: 'Una retta r divide i punti del piano che non le appartengono in due sottoinsiemi <b>disgiunti e convessi</b> α e β, <i>detti semipiani di origine r</i>. Se A appartiene ad α e B a β, il segmento <i>AB interseca la retta r</i>.',
    steps: ['La retta r divide il piano in due parti: il semipiano α sopra e il semipiano β sotto.', 'Disgiunti: nessun punto sta in α e in β insieme. Ogni punto fuori da r sta da una parte sola.', 'Convessi: se unisci due punti della stessa parte (C e D), il segmento resta tutto in quella parte.', 'Se A sta in α e B sta in β, il segmento AB taglia sempre la retta r. Come attraversare un fiume per passare da una riva all\'altra.'],
    draw: (s, p) => { const t0 = s === 0 ? p : 1;
      let o = `<rect x="10" y="10" width="460" height="140" fill="${B}" opacity="${.18 * t0}"/><rect x="10" y="150" width="460" height="140" fill="${G}" opacity="${.18 * t0}"/>`
        + seg([10, 150], [470, 150]) + tx(455, 140, 'r', { i: 1 }) + tx(40, 50, 'α', { c: B, fs: 32, o: t0 }) + tx(40, 275, 'β', { c: G, fs: 32, o: t0 });
      if (s >= 1) { const t = s === 1 ? p : 1; o += tx(240, 80, 'solo in α', { c: B, fs: 16, w: 700, o: s === 1 ? t : .45 }) + tx(240, 225, 'solo in β', { c: G, fs: 16, w: 700, o: s === 1 ? t : .45 }); }
      if (s >= 2) { const t = s === 2 ? p : 1, C = [300, 40], Dd = [430, 115]; o += dot(C, B, 6) + dot(Dd, B, 6) + seg(C, LP(C, Dd, t), B, 3, 1, '7 6') + tx(300, 30, 'C', { c: B, fs: 17 }) + tx(447, 112, 'D', { c: B, fs: 17 }); }
      if (s >= 3) { const t = s === 3 ? p : 1, PA = [110, 55], PB = [270, 250], X = [185.8, 150];
        o += seg(PA, LP(PA, PB, t), R, 4) + dot(PA, K, 7) + dot(PB, K, 7) + tx(92, 50, 'A') + tx(292, 262, 'B') + (t > 0.47 ? dot(X, R, 8) + tx(215, 175, 'taglia r', { c: R, fs: 16, w: 700 }) : ''); }
      return o; } });
  // ── 5 ─────────────────────────────────────────────────────────
  const TRI = (dx, flip) => [[0, 110], [120, 110], [35, 0]].map(([x, y]) => [dx + (flip ? 120 - x : x), y + 50]);
  const tween = (P1, P2, t) => P1.map((q, i) => LP(q, P2[i], t));
  A.push({ key: '5', title: 'Assioma 5', h: 230,
    enunc: '<b>A.</b> Ogni figura è congruente a se stessa.<br><b>B.</b> Se F₁ è congruente a F₂, <i>allora</i> F₂ è congruente a F₁.<br><b>C.</b> Se F₁ è congruente a F₂ <i>e F₂ è congruente</i> a F₃, <i>allora</i> F₁ è congruente a F₃.',
    steps: ['A. Riflessiva: ogni figura è congruente a se stessa. Una copia di F₁ combacia con F₁.', 'B. Simmetrica: se F₁ combacia con F₂, anche F₂ combacia con F₁. Si può andare in un verso e nell\'altro.', 'C. Transitiva: se F₁ combacia con F₂ e F₂ combacia con F₃, allora F₁ combacia con F₃.'],
    draw: (s, p) => { const F1 = TRI(20, 0), F2 = TRI(180, 1), F3 = TRI(340, 0);
      let o = poly(F1, B) + tx(68, 145, 'F₁');
      if (s >= 1) o += poly(F2, G) + tx(245, 145, 'F₂');
      if (s >= 2) o += poly(F3, Y) + tx(388, 145, 'F₃');
      if (s === 0) o += poly(tween(F1.map(q => [q[0], q[1] - 45]), F1, p), K, 1, '7 6') + tx(240, 210, 'F₁ ≅ F₁', { fs: 18 });
      if (s === 1) o += poly(p < .5 ? tween(F1, F2, p * 2) : tween(F2, F1, p * 2 - 1), K, 1, '7 6') + tx(240, 210, p < .5 ? 'F₁ ≅ F₂' : '… quindi anche F₂ ≅ F₁', { fs: 18 });
      if (s === 2) o += poly(tween(F1, F3, p), K, 1, '7 6') + tx(240, 210, 'F₁ ≅ F₂ e F₂ ≅ F₃ ⇒ F₁ ≅ F₃', { fs: 18 });
      return o; } });
  // ── 6 ─────────────────────────────────────────────────────────
  A.push({ key: '6', title: 'Assioma 6', h: 240,
    enunc: 'Tutti i punti sono congruenti tra loro, così come <i>i piani,</i> le rette, <i>i semipiani e le semirette</i>.',
    steps: ['Tutti i punti sono congruenti: un punto si sovrappone sempre a un altro punto.', 'Anche le rette: una retta, spostata, si sovrappone sempre a un\'altra. Lo stesso vale per i piani, i semipiani e le semirette.', 'I segmenti invece no (e nemmeno gli angoli): un segmento corto non copre uno lungo.'],
    draw: (s, p) => { let o = '';
      if (s === 0) o += dot([100, 90], Y, 9) + dot([380, 90], G, 9) + dot(LP([100, 90], [380, 90], p), K, 9, .8) + tx(240, 150, 'punto ≅ punto', { fs: 18 });
      if (s === 1) { const a1 = [[10, 60], [470, 60]], a2 = [[10, 190], [470, 120]];
        o += seg(a1[0], a1[1], Y) + seg(a2[0], a2[1], G) + seg(LP(a1[0], a2[0], p), LP(a1[1], a2[1], p), K, 3, .85, '8 6') + tx(240, 225, 'retta ≅ retta', { fs: 18 }); }
      if (s === 2) { const dx = Lr(0, 220, p); o += seg([260, 120], [460, 120], G, 6) + seg([40 + dx, 120], [140 + dx, 120], Y, 6)
          + (p > .95 ? seg([360, 120], [460, 120], R, 8) + tx(410, 100, 'avanza', { c: R, fs: 16, w: 700 }) : '') + tx(240, 190, 'segmenti: possono essere diversi', { c: R, fs: 18 }); }
      return o; } });
  // ── 7A ────────────────────────────────────────────────────────
  A.push({ key: '7A', title: 'Assioma 7A', h: 230,
    enunc: 'Dato un segmento AB e una semiretta di origine O, <i>esiste <b>uno e un solo</b> punto P sulla semiretta tale che OP sia congruente ad AB</i>.',
    steps: ['Hai un segmento AB e una semiretta che parte da O e va verso destra.', 'Apri il compasso quanto AB: la sua apertura è la lunghezza di AB.', 'Punta il compasso in O e fai l\'arco: taglia la semiretta in un solo punto, P.', 'OP ≅ AB. Il punto è uno solo, perché la semiretta va in una sola direzione e la lunghezza è fissata.'],
    draw: (s, p) => { const O = [50, 165], Lg = 180;
      let o = seg([60, 50], [240, 50]) + dot([60, 50]) + dot([240, 50]) + tx(60, 30, 'A') + tx(240, 30, 'B') + ray(O, [465, 165]) + dot(O) + tx(50, 205, 'O');
      if (s >= 1) { const t = s === 1 ? p : 1; o += seg(LP([60, 50], O, t), LP([240, 50], [O[0] + Lg, 165], t), Y, 3, .9, '7 6'); }
      if (s >= 2) { const t = s === 2 ? p : 1, a0 = 40, a1 = Lr(40, -25, t), st = pol(O, Lg, a0), en = pol(O, Lg, a1);
        o += `<path d="M${st[0]} ${st[1]} A${Lg} ${Lg} 0 0 1 ${en[0]} ${en[1]}" fill="none" stroke="${R}" stroke-width="3" stroke-dasharray="6 6"/>`;
        if (a1 <= 0) o += dot([O[0] + Lg, 165], R, 8) + tx(O[0] + Lg - 24, 205, 'P', { c: R }); }
      if (s >= 3) o += tick([60, 50], [240, 50]) + tick(O, [O[0] + Lg, 165]) + tx(360, 120, 'OP ≅ AB: un solo P', { c: R, fs: 18, o: p });
      return o; } });
  // ── 7B ────────────────────────────────────────────────────────
  A.push({ key: '7B', title: 'Assioma 7B', h: 330,
    enunc: 'Dato un angolo AÔB e una semiretta <i>di origine</i> O₁, <i>in ciascuno dei due semipiani individuati dalla retta che contiene la semiretta esiste una e una sola semiretta di origine O₁</i> tale che i due angoli siano congruenti.',
    sliders: [{ id: 'a', label: 'Apertura', min: 20, max: 70, step: 1, value: 40, fmt: v => v + '°' }],
    steps: ['Questa è la semiretta s: parte dal punto O₁ e va avanti per sempre verso destra.', 'A sinistra c\'è l\'angolo da copiare, AÔB, con il vertice in O. È in un altro posto del piano: non tocca s.', 'Sposto l\'angolo, senza deformarlo, finché O va su O₁ e il lato OA si appoggia su s.', 'La retta di s divide il piano in due semipiani. Nel semipiano sopra c\'è una sola semiretta, O₁B₁, che forma con s un angolo uguale.', 'Anche nel semipiano sotto ce n\'è una sola: O₁B₂. Una e una sola copia da ciascuna parte.'],
    draw: (s, p, v) => { const a = v.a, O = [40, 200], O1 = [250, 200], Lg = 120;
      let o = '';
      if (s >= 3) o += `<rect x="225" y="20" width="250" height="180" fill="${G}" opacity=".14"/>` + tx(465, 40, 'semipiano sopra', { a: 'end', c: G, fs: 14, w: 700 });
      if (s >= 4) o += `<rect x="225" y="200" width="250" height="125" fill="#b48cff" opacity=".16"/>` + tx(465, 318, 'semipiano sotto', { a: 'end', c: '#b48cff', fs: 14, w: 700 });
      o += seg([215, 30], [215, 320], D, 2, 1, '5 6') + tx(110, 40, 'angolo da copiare', { fs: 14, w: 700, c: 'rgba(255,255,255,.7)', o: s >= 1 ? 1 : .3 });
      const og = s >= 1 ? 1 : .2; o += seg(O, pol(O, Lg, 0), K, 4, og) + seg(O, pol(O, Lg, a), K, 4, og) + arc(O, 34, 0, a, B, 0, og) + dot(O, K, 5, og)
        + tx(34, 228, 'O', { o: og }) + tx(O[0] + Lg, 228, 'A', { o: og }) + tx(pol(O, Lg + 16, a)[0], pol(O, Lg + 16, a)[1], 'B', { o: og });
      o += ray(O1, [468, 200], '#ff8a5c', 5) + dot(O1, '#ff8a5c', 7) + tx(242, 230, 'O₁', { c: '#ff8a5c' }) + tx(440, 188, 's', { c: '#ff8a5c', i: 1 });
      if (s === 2) { const G2 = [Lr(O[0], O1[0], p), 200]; o += seg(G2, pol(G2, Lg, a), G, 3, 1, '7 6') + arc(G2, 34, 0, a, B, 0, .8); }
      if (s >= 3) { const t = s === 3 ? p : 1; o += seg(O1, LP(O1, pol(O1, Lg, a), t), G, 4) + arc(O1, 34, 0, a, B, 1, t) + tx(pol(O1, Lg + 18, a)[0], pol(O1, Lg + 18, a)[1], 'B₁', { c: G, o: t }); }
      if (s >= 4) { const t = p; o += seg(O1, LP(O1, pol(O1, Lg * .85, -a), t), '#b48cff', 4) + arc(O1, 50, -a, 0, B, 1, t) + tx(pol(O1, Lg * .85 + 20, -a)[0], pol(O1, Lg * .85 + 20, -a)[1] + 8, 'B₂', { c: '#b48cff', o: t }); }
      return o; } });
  // ── 8 ─────────────────────────────────────────────────────────
  A.push({ key: '8', title: 'Assioma 8', h: 220,
    enunc: 'Somma, differenza, multiplo e sottomultiplo di <b>segmenti</b> congruenti sono a loro volta congruenti.',
    steps: ['AB ≅ CD: i due segmenti sono lunghi uguali (stessa tacchetta).', 'Raddoppio tutti e due: AB + AB e CD + CD.', 'Anche i doppi sono congruenti: si sovrappongono perfettamente. Vale anche per somma, differenza e sottomultiplo (per esempio la metà).'],
    draw: (s, p) => { let o = seg([40, 60], [160, 60]) + tick([40, 60], [160, 60]) + tx(40, 38, 'A', { fs: 18 }) + tx(160, 38, 'B', { fs: 18 })
        + seg([40, 140], [160, 140]) + tick([40, 140], [160, 140]) + tx(40, 118, 'C', { fs: 18 }) + tx(160, 118, 'D', { fs: 18 });
      if (s >= 1) { const t = s === 1 ? p : 1, x = Lr(40, 160, t); o += seg([x, 60], [x + 120, 60], B) + tick([x, 60], [x + 120, 60]) + seg([x, 140], [x + 120, 140], B) + tick([x, 140], [x + 120, 140])
        + tx(160, 95, 'AB + AB', { c: B, fs: 15, w: 700, o: t }) + tx(160, 175, 'CD + CD', { c: B, fs: 15, w: 700, o: t }); }
      if (s >= 2) { const y = Lr(140, 60, p); o += seg([40, y], [280, y], Y, 3, .9, '8 6') + (p > .95 ? tx(380, 66, 'combaciano', { c: Y, fs: 17 }) : ''); }
      return o; } });
  // ── 9 ─────────────────────────────────────────────────────────
  A.push({ key: '9', title: 'Assioma 9', h: 300,
    enunc: 'Comunque fissati un segmento non nullo <b>u</b> come unità di misura e un numero reale positivo <b>k</b>, esiste un segmento la cui misura rispetto a u è il numero k.',
    sliders: [{ id: 'u', label: 'Unità u', min: 40, max: 110, step: 1, value: 80, fmt: v => v + ' px' },
              { id: 'k', label: 'Numero k', min: 0.1, max: 5, step: 0.05, value: 3, fmt: v => String(Math.round(v * 100) / 100).replace('.', ',') }],
    steps: ['«Fissato un segmento non nullo u come unità di misura»: scegli un segmento qualsiasi, lungo quanto vuoi ma non zero. È il «centimetro» del righello. Prova a cambiarlo con il cursore.',
            'Ripetendo u partendo da 0 trovi le tacche 1, 2, 3…: sono a distanza u, 2u, 3u.',
            '«Un numero reale positivo k»: un numero qualsiasi maggiore di 0, intero, decimale, frazione o anche irrazionale. Scegli k con il cursore.',
            '«Esiste un segmento la cui misura rispetto a u è k»: il segmento rosso, da 0, contiene u esattamente k volte. Esiste sempre, qualunque k scegli.',
            'Un caso difficile: √2 = 1,41421… Le cifre dopo la virgola non finiscono mai e non si ripetono: √2 non è una frazione. Esiste un segmento lungo √2? Disegno un quadrato di lato u e la sua diagonale (rossa).',
            'Il quadrato verde, costruito sulla diagonale, è fatto di 4 triangoli uguali, ognuno metà del quadrato piccolo. Quindi la sua area è 4 × ½ = 2, e la diagonale è il numero che moltiplicato per se stesso fa 2: √2.',
            'Con il compasso «giro» la diagonale sulla retta, partendo da 0: la lunghezza non cambia e trovo il punto √2, poco dopo l\'1. Le cifre non finiscono mai, ma il segmento c\'è: è un esempio di quello che garantisce l\'assioma.'],
    draw: (s, p, v) => { const X0 = 30, Yl = 215, u = v.u; let o = ray([15, Yl], [468, Yl], K, 3);
      const n = Math.floor((455 - X0) / u);
      for (let i = 0; i <= (s >= 1 ? n : 0); i++) { const x = X0 + i * u; o += seg([x, Yl - 9], [x, Yl + 9], K, 3, s === 1 ? cl(p * (n + 1) - i + 1) : 1) + tx(x, Yl + 34, i, { fs: 17, w: 700, o: s === 1 ? cl(p * (n + 1) - i + 1) : 1 }); }
      o += seg([X0, 270], [X0 + u, 270], '#b48cff', 6) + tx(X0 + u / 2, 293, 'u', { c: '#b48cff', fs: 18 });
      // passi 4 e 5: perché la diagonale del quadrato di lato u misura √2 (figura a parte, sopra la retta)
      if (s === 4 || s === 5) { const q = 55, x0 = 300, y0 = 105, t = s === 4 ? p : 1;
        o += `<rect x="${x0}" y="${y0 - q}" width="${q}" height="${q}" fill="${B}" fill-opacity=".25" stroke="${K}" stroke-width="2.5" opacity="${t}"/>`
          + tx(x0 + q / 2, y0 - q - 8, 'lato u', { fs: 13, w: 700, o: t }) + seg([x0, y0], LP([x0, y0], [x0 + q, y0 - q], t), R, 4) + tx(x0 + 12, y0 - q / 2 - 4, s === 4 ? '?' : '√2', { c: R, fs: 18, o: t });
        if (s === 5) { const P1 = [x0, y0], P2 = [x0 + q, y0 - q], P3 = [x0 + 2 * q, y0], P4 = [x0 + q, y0 + q], C = [x0 + q, y0];
          [[P1, P2], [P2, P3], [P3, P4], [P4, P1]].forEach(([a, b], i) => o += `<polygon points="${a.join(',')} ${b.join(',')} ${C.join(',')}" fill="${G}" fill-opacity=".3" stroke="${G}" stroke-width="2" opacity="${cl(p * 4 - i)}"/>`);
          o += tx(x0 + q, y0 + q + 22, 'area = 4 × ½ = 2', { c: G, fs: 15, w: 700, o: cl(p * 2 - 1) }); } }
      const k = s === 6 ? Math.SQRT2 : Math.min(v.k, (455 - X0) / u);
      if (s === 3 || s === 6) { const t = s === 3 ? p : 1, xe = X0 + k * u * (s === 6 ? cl(p * 1.6 - .6) || 0.001 : t);
        o += seg([X0, Yl], [xe, Yl], R, 7) + dot([xe, Yl], R, 7) + tx(s === 6 ? xe + 92 : Math.max(X0 + 60, (X0 + xe) / 2), Yl - 22, 'misura = ' + (s === 6 ? '√2 ≈ 1,41' : String(Math.round(k * 100) / 100).replace('.', ',')), { c: R, fs: 16 }); }
      if (s === 2) o += tx(240, 60, 'k = ' + String(Math.round(v.k * 100) / 100).replace('.', ','), { c: R, fs: 26 });
      if (s === 6) { const r = u * Math.SQRT2, ang = 45 * (1 - cl(p * 1.6 - .6));
        o += `<rect x="${X0}" y="${Yl - u}" width="${u}" height="${u}" fill="none" stroke="${K}" stroke-width="2.5" opacity="${cl(p * 3)}"/>` + seg([X0, Yl], [X0 + u, Yl - u], R, 3, cl(p * 3))
          + `<path d="M${X0 + u} ${Yl - u} A${r} ${r} 0 0 1 ${X0 + r * Math.cos(ang * Math.PI / 180)} ${Yl - r * Math.sin(ang * Math.PI / 180)}" fill="none" stroke="${R}" stroke-width="3" stroke-dasharray="6 6"/>`
          + tx(X0 + u * .28, Yl - u * .52, '√2', { c: R, fs: 18 }); }
      return o; } });
  // ── 10 ────────────────────────────────────────────────────────
  A.push({ key: '10', title: 'Assioma 10', h: 250,
    enunc: 'Somma, differenza, multipli e sottomultipli di <i>angoli</i> congruenti sono congruenti.',
    steps: ['α ≅ β: due angoli con la stessa apertura (stesso archetto).', 'Raddoppio tutti e due: α + α e β + β.', 'Anche i doppi sono congruenti: si sovrappongono. Vale anche per somma, differenza e sottomultipli. È l\'assioma 8, ma con gli angoli.'],
    draw: (s, p) => { const a = 28, O1 = [30, 210], O2 = [265, 210], Lg = 160; let o = '';
      [[O1, 'α'], [O2, 'β']].forEach(([O, n]) => { o += seg(O, pol(O, Lg, 0)) + seg(O, pol(O, Lg, a)) + arc(O, 55, 0, a, B, 1) + tx(pol(O, 80, a / 2)[0] + 6, pol(O, 80, a / 2)[1] + 6, n, { c: B, fs: 18 });
        if (s >= 1) { const t = s === 1 ? p : 1, b = Lr(a, 2 * a, t); o += seg(O, pol(O, Lg, b), G) + arc(O, 55, a, b, B, t > .9 ? 1 : 0); } });
      if (s >= 1) o += tx(110, 240, 'α + α', { c: G, fs: 17, o: s === 1 ? p : 1 }) + tx(345, 240, 'β + β', { c: G, fs: 17, o: s === 1 ? p : 1 });
      if (s >= 2) { const Gx = [Lr(O1[0], O2[0], p), 210]; o += seg(Gx, pol(Gx, Lg, 0), Y, 3, .9, '7 6') + seg(Gx, pol(Gx, Lg, 2 * a), Y, 3, .9, '7 6') + (p > .95 ? tx(345, 30, 'combaciano', { c: Y, fs: 17 }) : ''); }
      return o; } });

  window.ANIMS['assiomi'] = { title: 'Gli assiomi animati', items: A };
})();
