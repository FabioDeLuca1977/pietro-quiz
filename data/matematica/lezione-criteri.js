// ============================================================
//  data/matematica/lezione-criteri.js  (v1)
//  Primo e secondo criterio di congruenza dei triangoli: introduzione «perché»
//  e spiegazione a slide con i disegni.
//  Non ci sono appunti del prof: la spiegazione è nostra, nella forma usuale dei
//  libri di liceo, e usa gli assiomi già dettati dal prof (2B, 7A, 7B).
//  Disegni in SVG: tacchette = lati congruenti, archetti = angoli congruenti.
// ============================================================

window.LESSONS = window.LESSONS || {};

// ── Disegni ──────────────────────────────────────────────────────
const CG = (() => {
  const Y = '#ffd23f', C = '#5fd4ff', G = '#22e39a', R = '#ff4d6d', W = '#ffffff';
  const sub = (p, q) => [p[0] - q[0], p[1] - q[1]], add = (p, q) => [p[0] + q[0], p[1] + q[1]], mul = (p, k) => [p[0] * k, p[1] * k];
  const unit = v => { const l = Math.hypot(v[0], v[1]) || 1; return [v[0] / l, v[1] / l]; };
  const f = n => Math.round(n * 10) / 10;
  const seg = (p, q, col = W, w = 4, dash = '') => `<line x1="${f(p[0])}" y1="${f(p[1])}" x2="${f(q[0])}" y2="${f(q[1])}" stroke="${col}" stroke-width="${w}" stroke-linecap="round" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
  // k tacchette sul lato pq
  const ticks = (p, q, k, col) => { const m = mul(add(p, q), 0.5), d = unit(sub(q, p)), n = [-d[1], d[0]]; let s = '';
    for (let i = 0; i < k; i++) { const c = add(m, mul(d, (i - (k - 1) / 2) * 9)); s += seg(add(c, mul(n, -11)), add(c, mul(n, 11)), col, 4); } return s; };
  // k archetti nell'angolo in v tra le direzioni verso p e q
  const arcs = (v, p, q, k, col, r0 = 30) => { const a = unit(sub(p, v)), b = unit(sub(q, v)), sw = a[0] * b[1] - a[1] * b[0] > 0 ? 1 : 0; let s = '';
    for (let i = 0; i < k; i++) { const r = r0 + i * 9, s0 = add(v, mul(a, r)), e = add(v, mul(b, r));
      s += `<path d="M${f(s0[0])} ${f(s0[1])} A${r} ${r} 0 0 ${sw} ${f(e[0])} ${f(e[1])}" fill="none" stroke="${col}" stroke-width="4"/>`; } return s; };
  const lab = (p, txt, from, col = W, fs = 30) => { const o = add(p, mul(unit(sub(p, from)), 26)); return `<text x="${f(o[0])}" y="${f(o[1] + fs * 0.35)}" text-anchor="middle" font-size="${fs}" font-weight="800" fill="${col}" font-family="system-ui,sans-serif">${txt}</text>`; };
  // triangolo: P = {A:[x,y],...}, n = nomi, s = {AB:[k,col]}, a = {A:[k,col]}
  const tri = (P, n, s = {}, a = {}, col = W) => {
    const [x, y, z] = Object.keys(P), g = mul(add(add(P[x], P[y]), P[z]), 1 / 3);
    let out = seg(P[x], P[y], col) + seg(P[y], P[z], col) + seg(P[z], P[x], col);
    for (const k in s) out += ticks(P[k[0]], P[k[1]], s[k][0], s[k][1]);
    const other = v => Object.keys(P).filter(u => u !== v);
    for (const v in a) { const [p, q] = other(v); out += arcs(P[v], P[p], P[q], a[v][0], a[v][1]); }
    return out + Object.keys(P).map((v, i) => lab(P[v], n[i], g)).join('');
  };
  const svg = (inner, w, h, mw) => `<svg class="ls-fig" viewBox="0 0 ${w} ${h}" style="${mw ? `max-width:${mw}px` : ''}" role="img">${inner}</svg>`;
  const T1 = { A: [30, 230], B: [260, 230], C: [95, 45] }, T2 = { A: [380, 230], B: [610, 230], C: [445, 45] };
  const pair = (s1, a1, s2 = s1, a2 = a1) => svg(tri(T1, ['A', 'B', 'C'], s1, a1) + tri(T2, ['A′', 'B′', 'C′'], s2, a2), 650, 270);
  return { Y, C, G, R, W, seg, ticks, arcs, lab, tri, svg, pair, T1, T2 };
})();

const F_TRI = CG.svg(CG.tri(CG.T1, ['A', 'B', 'C']), 300, 270, 190);
const F_COMPRESO = CG.svg(CG.tri(CG.T1, ['A', 'B', 'C'], { AB: [1, CG.Y], AC: [1, CG.Y] }, { A: [1, CG.C] }) + CG.seg(CG.T1.B, CG.T1.C, CG.R, 6), 300, 270, 190);
const F_CONGR = CG.pair({ AB: [1, CG.Y], BC: [2, CG.Y], AC: [3, CG.Y] }, { A: [1, CG.C], B: [2, CG.C], C: [3, CG.C] });
// 1° criterio come sul quaderno del prof: l'angolo nel vertice in alto (A), una tacchetta su AB e due su AC
const LT1 = { A: [95, 45], B: [30, 230], C: [260, 230] }, LT2 = { A: [445, 45], B: [380, 230], C: [610, 230] };
const F_LAL = CG.svg(CG.tri(LT1, ['A', 'B', 'C'], { AB: [1, CG.Y], AC: [2, CG.Y] }, { A: [1, CG.C] })
  + CG.tri(LT2, ['A′', 'B′', 'C′'], { AB: [1, CG.Y], AC: [2, CG.Y] }, { A: [1, CG.C] }), 650, 270);
const F_ALA = CG.pair({ AB: [1, CG.Y] }, { A: [1, CG.C], B: [2, CG.C] });
// LLA: AB in comune, BC ≅ BD, angolo in A in comune, ma ABC ≠ ABD
const F_LLA = (() => { const A = [45, 220], B = [165, 60], Cp = [82.5, 220], D = [247.5, 220];
  return CG.svg(CG.seg(A, [365, 220], CG.W, 3) + CG.seg(A, B) + CG.seg(B, Cp, CG.Y) + CG.seg(B, D, CG.Y)
    + CG.ticks(B, Cp, 2, CG.Y) + CG.ticks(B, D, 2, CG.Y) + CG.arcs(A, B, D, 1, CG.C, 38)
    + CG.lab(A, 'A', [145, 170]) + CG.lab(B, 'B', [145, 220]) + CG.lab(Cp, 'C', [95, 120]) + CG.lab(D, 'D', [175, 140]), 380, 265, 280); })();
// dimostrazione del secondo criterio: D su A′C′ con A′D ≅ AC
const F_DIM2 = (() => { const A = [380, 230], B = [610, 230], Cq = [445, 45], D = [423, 108];
  return CG.svg(CG.tri(CG.T1, ['A', 'B', 'C'], { AB: [1, CG.Y], AC: [2, CG.G] }, { A: [1, CG.C], B: [2, CG.C] })
    + CG.tri({ A, B, C: Cq }, ['A′', 'B′', 'C′'], { AB: [1, CG.Y] }, { A: [1, CG.C], B: [2, CG.C] })
    + CG.seg(B, D, CG.G, 4, '10 8') + CG.ticks(A, D, 2, CG.G)
    + `<circle cx="${D[0]}" cy="${D[1]}" r="7" fill="${CG.G}"/>` + CG.lab(D, 'D', [510, 150], CG.G), 650, 270); })();
// esempi: aquilone ABCD con AC in comune
const KITE = { A: [160, 30], B: [40, 140], C: [160, 250], D: [280, 140] };
const F_KITE1 = CG.svg(CG.seg(KITE.A, KITE.B) + CG.seg(KITE.B, KITE.C) + CG.seg(KITE.C, KITE.D) + CG.seg(KITE.D, KITE.A) + CG.seg(KITE.A, KITE.C, CG.G, 4, '10 8')
  + CG.ticks(KITE.A, KITE.B, 1, CG.Y) + CG.ticks(KITE.A, KITE.D, 1, CG.Y) + CG.arcs(KITE.A, KITE.B, KITE.C, 1, CG.C, 34) + CG.arcs(KITE.A, KITE.C, KITE.D, 1, CG.C, 34)
  + ['A', 'B', 'C', 'D'].map(k => CG.lab(KITE[k], k, [160, 140])).join(''), 320, 285, 200);
const F_KITE2 = CG.svg(CG.seg(KITE.A, KITE.B) + CG.seg(KITE.B, KITE.C) + CG.seg(KITE.C, KITE.D) + CG.seg(KITE.D, KITE.A) + CG.seg(KITE.A, KITE.C, CG.G, 4, '10 8')
  + CG.arcs(KITE.A, KITE.B, KITE.C, 1, CG.C, 34) + CG.arcs(KITE.A, KITE.C, KITE.D, 1, CG.C, 34) + CG.arcs(KITE.C, KITE.A, KITE.B, 2, CG.C, 30) + CG.arcs(KITE.C, KITE.D, KITE.A, 2, CG.C, 30)
  + ['A', 'B', 'C', 'D'].map(k => CG.lab(KITE[k], k, [160, 140])).join(''), 320, 285, 200);
// il fiume: T sull'altra riva, A di fronte, C a metà tra A e D, E allineato con C e T
const F_FIUME = (() => { const T = [60, 34], A = [60, 136], Cc = [180, 136], D = [300, 136], E = [300, 238];
  const sq = (p, dx, dy) => `<path d="M${p[0] + dx} ${p[1]} L${p[0] + dx} ${p[1] + dy} L${p[0]} ${p[1] + dy}" fill="none" stroke="${CG.C}" stroke-width="3"/>`;
  return CG.svg(`<rect x="0" y="52" width="360" height="66" fill="#5fd4ff22"/><text x="300" y="92" font-size="22" fill="${CG.C}" text-anchor="middle" font-family="system-ui">fiume</text>`
    + `<text x="60" y="30" font-size="30" text-anchor="middle">🌳</text>`
    + CG.seg(T, A, CG.Y, 4, '8 7') + CG.seg(A, D) + CG.seg(D, E, CG.Y, 4) + CG.seg(T, E, CG.W, 3, '4 8')
    + CG.ticks(A, Cc, 1, CG.G) + CG.ticks(Cc, D, 1, CG.G) + sq(A, 16, -16) + sq(D, -16, 16)
    + CG.lab(A, 'A', [60, 60]) + CG.lab(Cc, 'C', [180, 60]) + CG.lab(D, 'D', [300, 60]) + CG.lab(E, 'E', [300, 136]) + CG.lab([60, 40], 'T', [140, 40]), 360, 285, 270); })();

// bisettrice, mediana, altezza nel triangolo ABC (stesso triangolo delle altre slide)
const SQ = (h, dx, dy, col) => `<path d="M${h[0] + dx} ${h[1]} L${h[0] + dx} ${h[1] + dy} L${h[0]} ${h[1] + dy}" fill="none" stroke="${col}" stroke-width="3"/>`;
const F_BIS = (() => { const T = CG.T1, D = [170.9, 130.1];
  // un archetto per ciascuna metà, con una tacchetta in mezzo: le due metà sono congruenti
  const mid = (p, q, r) => { const u = v => { const l = Math.hypot(v[0] - T.A[0], v[1] - T.A[1]); return [(v[0] - T.A[0]) / l, (v[1] - T.A[1]) / l]; };
    const a = u(p), b = u(q), m = [a[0] + b[0], a[1] + b[1]], l = Math.hypot(...m), d = [m[0] / l, m[1] / l];
    return CG.seg([T.A[0] + d[0] * (r - 9), T.A[1] + d[1] * (r - 9)], [T.A[0] + d[0] * (r + 9), T.A[1] + d[1] * (r + 9)], CG.C, 4); };
  return CG.svg(CG.tri(T, ['A', 'B', 'C']) + CG.seg(T.A, D, CG.Y, 5) + CG.arcs(T.A, T.B, D, 1, CG.C, 48) + CG.arcs(T.A, D, T.C, 1, CG.C, 48)
    + mid(T.B, D, 48) + mid(D, T.C, 48), 300, 270, 190); })();
const F_MED = (() => { const T = CG.T1, M = [145, 230];
  return CG.svg(CG.tri(T, ['A', 'B', 'C']) + CG.seg(T.C, M, CG.Y, 5) + CG.ticks(T.A, M, 1, CG.G) + CG.ticks(M, T.B, 1, CG.G)
    + `<circle cx="145" cy="230" r="6" fill="${CG.G}"/>` + CG.lab(M, 'M', [145, 150], CG.G), 300, 270, 190); })();
const F_ALT = (() => { const T = CG.T1, H = [95, 230];
  return CG.svg(CG.tri(T, ['A', 'B', 'C']) + CG.seg(T.C, H, CG.Y, 5) + SQ(H, 16, -16, CG.C) + CG.lab(H, 'H', [95, 150], CG.C), 300, 270, 190); })();
// triangolo ottusangolo: l'altezza da C cade fuori, sul prolungamento di AB
const F_ALT_FUORI = (() => { const A = [30, 230], B = [170, 230], C = [260, 60], H = [260, 230];
  return CG.svg(CG.tri({ A, B, C }, ['A', 'B', 'C']) + CG.seg(B, H, CG.W, 3, '8 8') + CG.seg(C, H, CG.Y, 5) + SQ(H, -16, -16, CG.C) + CG.lab(H, 'H', [230, 150], CG.C), 300, 270, 200); })();
const F_TRE = CG.svg(CG.tri(CG.T1, ['A', 'B', 'C']) + CG.seg(CG.T1.A, [170.9, 130.1], CG.Y, 4) + CG.seg(CG.T1.C, [145, 230], CG.G, 4) + CG.seg(CG.T1.C, [95, 230], CG.C, 4)
  + SQ([95, 230], 14, -14, CG.C), 300, 270, 190);

// ── Bisettrice, mediana, altezza (dal quaderno di Pietro) ────────
window.LESSONS["bisettrice-mediana-altezza"] = {
  title: "Bisettrice, mediana, altezza",
  slides: [
    { k:"Spiegazione", t:"Bisettrice, mediana, altezza",
      h:`${F_TRE}
         <p class="ls-big">Tre segmenti speciali che partono da un <b>vertice</b> del triangolo.</p>
         <p>Per ognuno: che cosa vuol dire la parola, la definizione precisa e un disegno.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Le parole", t:"Prima, le parole",
      h:`<div class="ls-calc">
           <div><span><b>Bisettrice</b>: dal latino <i>bis</i> «due» e <i>secare</i> «tagliare»: che taglia in due</span><b>✂️</b></div>
           <div><span><b>Mediana</b>: da «medio», «che sta in mezzo»: arriva al punto di mezzo</span><b>½</b></div>
           <div><span><b>Perpendicolare</b>: che forma un angolo retto (90°)</span><b>⊥</b></div>
           <div><span><b>Punto medio</b>: il punto che divide un segmento in due parti congruenti</span><b>M</b></div>
           <div><span><b>Triangolo rettangolo</b>: ha un angolo retto</span><b>90°</b></div>
         </div>` },
    { k:"Bisettrice", t:"La bisettrice",
      h:`${F_BIS}
         <div class="ls-res" style="font-size:1rem;text-align:left;font-family:inherit">La <b>bisettrice</b> di un angolo è la semiretta, con origine nel vertice, che divide l'angolo in <b>due angoli congruenti</b>.</div>
         <p class="ls-note">📓 Sul quaderno: «semiretta che divide un angolo in 2 angoli uguali». È giusta: in geometria al posto di «uguali» si dice «congruenti». Nel triangolo si prende il pezzo che va dal vertice al lato opposto.</p>` },
    { k:"Mediana", t:"La mediana",
      h:`${F_MED}
         <div class="ls-res" style="font-size:1rem;text-align:left;font-family:inherit">La <b>mediana</b> è il segmento che unisce un vertice con il <b>punto medio del lato opposto</b>.</div>
         <p class="ls-note">📓 Sul quaderno: «crea 2 segmenti congruenti». È vero, ma è la <b>conseguenza</b>: divide il lato opposto in due parti congruenti (AM ≅ MB). La definizione dice da dove parte e dove arriva.</p>` },
    { k:"Altezza", t:"L'altezza",
      h:`${F_ALT}
         <div class="ls-res" style="font-size:1rem;text-align:left;font-family:inherit">L'<b>altezza</b> è il segmento che parte da un vertice ed è <b>perpendicolare</b> al lato opposto (o al suo prolungamento).</div>
         <p class="ls-note">📓 Sul quaderno: «crea 2 triangoli rettangoli». È vero quando l'altezza cade <b>dentro</b> il lato, come qui (AHC e BHC hanno l'angolo retto in H).</p>` },
    { k:"Attenzione", t:"L'altezza può cadere fuori",
      h:`${F_ALT_FUORI}
         <p>Se il triangolo ha un angolo <b>ottuso</b> (più di 90°), alcune altezze cadono <b>fuori</b>: sul prolungamento del lato.</p>
         <div class="ls-warn">⚠️ Qui l'altezza CH non divide il triangolo in due triangoli rettangoli. Per questo la definizione dice «perpendicolare al lato opposto <b>o al suo prolungamento</b>».</div>` },
    { k:"Per non confonderle", t:"Che cosa divide in due ciascuna",
      h:`<div class="ls-rule ls-rule-col">
           <div>✂️ <b>Bisettrice</b>: divide in due l'<b>angolo</b></div>
           <div>½ <b>Mediana</b>: divide in due il <b>lato opposto</b></div>
           <div>⊥ <b>Altezza</b>: forma <b>angoli retti</b> con il lato opposto</div>
         </div>
         <p class="ls-note">Ogni triangolo ha 3 bisettrici, 3 mediane e 3 altezze, una per vertice. In generale sono tre segmenti diversi.</p>` },
    { k:"Con i criteri", t:"Dove le ritrovi",
      h:`${F_KITE1}
         <p>Nell'esempio 1 dei criteri, AC è la <b>bisettrice</b> dell'angolo in A: per questo BÂC ≅ CÂD.</p>
         <div class="ls-why">👉 Bisettrici, mediane e altezze danno le coppie di elementi congruenti che servono per usare i criteri.</div>` }
  ]
};

// ── Perché i criteri di congruenza ───────────────────────────────
window.LESSONS["intro-criteri"] = {
  title: "Perché i criteri di congruenza",
  slides: [
    { k:"Introduzione", t:"Perché i criteri di congruenza?",
      h:`<p class="ls-big">Perché permettono di dire che due triangoli sono <b>uguali</b> guardando solo <b>3 elementi</b> su 6.</p>
         <p>Così si possono copiare forme, misurare distanze che non si raggiungono e, in geometria, <b>dimostrare</b> quasi tutto.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Nella vita", t:"Copiare un pezzo",
      h:`<p>Un falegname deve rifare un pezzo triangolare. Non serve ricalcarlo: misura <b>due lati</b> e <b>l'angolo tra loro</b>, e il pezzo nuovo viene identico.</p>
         ${F_LAL}
         <div class="ls-why">👉 È il <b>primo criterio</b>: con due lati e l'angolo compreso, il triangolo è uno solo.</div>` },
    { k:"Nella vita", t:"Quanto è largo il fiume?",
      h:`${F_FIUME}
         <ol class="ls-steps">
           <li>Sei in A, davanti all'albero T.</li>
           <li>Lungo la riva conti i passi fino a C, e altrettanti fino a D.</li>
           <li>Da D vai ad angolo retto finché vedi C e T allineati: sei in E.</li>
         </ol>
         <p class="ls-note">Misuri DE con i passi: è la larghezza del fiume AT.</p>` },
    { k:"Perché funziona", t:"Il fiume e il secondo criterio",
      h:`<div class="ls-res">DE ≅ AT: la larghezza del fiume</div>
         <p>I triangoli <b>TAC</b> ed <b>EDC</b> hanno:</p>
         <div class="ls-calc">
           <div><span>AC ≅ CD (stessi passi)</span><b>lato</b></div>
           <div><span>angoli in A e in D retti</span><b>angolo</b></div>
           <div><span>angoli in C opposti al vertice</span><b>angolo</b></div>
         </div>
         <p class="ls-note"><b>Opposti al vertice</b>: due angoli con lo stesso vertice, in cui i lati dell'uno sono il prolungamento dei lati dell'altro, come una X. Sono sempre congruenti.</p>
         <div class="ls-why">👉 Un lato e i due angoli adiacenti: è il <b>secondo criterio</b>. Quindi i triangoli sono congruenti e DE ≅ AT.</div>` },
    { k:"In geometria", t:"Lo strumento delle dimostrazioni",
      h:`<p>Per dimostrare che due segmenti o due angoli sono congruenti, quasi sempre si cercano <b>due triangoli congruenti</b> che li contengono.</p>
         <div class="ls-why">👉 Per questo i criteri si usano in quasi tutte le dimostrazioni di geometria del primo anno.</div>
         <p class="ls-note">Poi guarda le slide «Primo e secondo criterio di congruenza».</p>` }
  ]
};

// ── Primo e secondo criterio ─────────────────────────────────────
window.LESSONS["criteri-congruenza"] = {
  title: "Primo e secondo criterio di congruenza",
  slides: [
    { k:"Spiegazione", t:"Primo e secondo criterio di congruenza",
      h:`<p class="ls-big">Quando due <b>triangoli</b> sono congruenti? Bastano <b>3 elementi</b>, scelti bene.</p>
         <div class="ls-warn">📓 Sul quaderno ci sono i nomi: 1° criterio «lato, angolo, lato», 2° criterio «angolo, lato, angolo». Gli enunciati completi e le dimostrazioni sono nostri, come nei libri di liceo: se a scuola sono diversi, valgono quelli del prof.</div>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Le parole 1/5", t:"Congruente",
      h:`<p><b>Congruente</b> vuol dire <b>che combacia perfettamente</b>: due figure congruenti, messe una sopra l'altra, coincidono in ogni punto.</p>
         <p class="ls-note">Viene dal latino <i>congruere</i>, «combaciare, andare d'accordo».</p>
         <div class="ls-calc"><div><span>Si scrive con il simbolo ≅ e si legge</span><b>«è congruente a»</b></div></div>
         <div class="ls-why">👉 Due monete da 1 € sono congruenti: una copre l'altra esattamente. La <b>congruenza</b> è questa proprietà.</div>` },
    { k:"Le parole 2/5", t:"Criterio",
      h:`<p>Un <b>criterio</b> è una <b>regola per decidere</b> se una cosa è vera senza controllare tutto.</p>
         <p class="ls-note">Viene dal greco <i>kritérion</i>, «strumento per giudicare».</p>
         <div class="ls-why">👉 Un <b>criterio di congruenza</b> ti dice: «se questi 3 elementi sono congruenti, allora tutto il triangolo lo è». Non devi controllare tutti e 6 gli elementi.</div>` },
    { k:"Le parole 3/5", t:"Vertice, lato, angolo",
      h:`<div class="ls-calc">
           <div><span><b>Vertice</b>: un «angolo» del disegno, dove si incontrano due lati. Dal latino <i>vertex</i>, «cima»</span><b>A</b></div>
           <div><span><b>Lato</b>: il segmento che unisce due vertici</span><b>AB</b></div>
           <div><span><b>Angolo</b>: l'apertura tra due lati con lo stesso vertice</span><b>Â</b></div>
         </div>
         <p class="ls-note">Â si legge «angolo A». A′ si legge «A primo»: è il punto che nel secondo triangolo corrisponde ad A.</p>` },
    { k:"Le parole 4/5", t:"Compreso, adiacente, opposto",
      h:`<div class="ls-calc">
           <div><span><b>Compreso</b>: racchiuso in mezzo. L'angolo compreso tra AB e AC è quello che sta tra i due lati</span><b>Â</b></div>
           <div><span><b>Adiacente</b>: che sta accanto (dal latino <i>adiacere</i>, «giacere vicino»)</span><b>AB e Â</b></div>
           <div><span><b>Opposto</b>: che sta di fronte</span><b>BC e Â</b></div>
         </div>
         <p class="ls-note"><b>Ordinatamente</b> vuol dire «nello stesso ordine»: A con A′, B con B′, C con C′.</p>` },
    { k:"Le parole 5/5", t:"Ipotesi, tesi, dimostrazione",
      h:`<div class="ls-calc">
           <div><span><b>Ipotesi</b>: quello che sai già, il punto di partenza (dal greco, «ciò che si mette sotto»)</span><b>dati</b></div>
           <div><span><b>Tesi</b>: quello che vuoi dimostrare (dal greco, «ciò che si afferma»)</span><b>obiettivo</b></div>
           <div><span><b>Dimostrazione</b>: i passaggi che portano dall'ipotesi alla tesi, ognuno con il suo perché</span><b>ragionamento</b></div>
           <div><span><b>Per assurdo</b>: supponi il contrario della tesi e arrivi a una cosa impossibile</span><b>contraddizione</b></div>
         </div>` },
    { k:"Ripasso", t:"Gli elementi di un triangolo",
      h:`${F_TRI}
         <p>Un triangolo ha <b>3 vertici</b> (A, B, C), <b>3 lati</b> (AB, BC, CA) e <b>3 angoli</b> (Â, B̂, Ĉ): in tutto <b>6 elementi</b>.</p>` },
    { k:"Ripasso", t:"Compreso, adiacente, opposto",
      h:`${F_COMPRESO}
         <div class="ls-calc">
           <div><span>Â è l'angolo <b>compreso</b> tra i lati</span><b>AB e AC</b></div>
           <div><span>i lati <b>adiacenti</b> ad Â sono</span><b>AB e AC</b></div>
           <div><span>il lato <b>opposto</b> ad Â è</span><b style="color:#ff4d6d">BC</b></div>
           <div><span>gli angoli adiacenti al lato AB sono</span><b>Â e B̂</b></div>
         </div>` },
    { k:"Definizione", t:"Triangoli congruenti",
      h:`${F_CONGR}
         <p>Due triangoli sono <b>congruenti</b> se si possono <b>sovrapporre</b> (mettere uno sopra l'altro) con un <b>movimento rigido</b>, cioè spostandoli, girandoli o ribaltandoli <b>senza deformarli</b>. Allora hanno <b>tutti e 6</b> gli elementi congruenti, a coppie.</p>
         <div class="ls-why">👉 Nei disegni: stesse <b>tacchette</b> = lati congruenti; stessi <b>archetti</b> = angoli congruenti.</div>` },
    { k:"L'idea", t:"Perché servono i criteri",
      h:`<p>Controllare 6 elementi è lungo. I <b>criteri di congruenza</b> dicono quali <b>3</b> bastano.</p>
         <div class="ls-rule ls-rule-col">
           <div>1️⃣ <b>Primo criterio</b>: lato, angolo, lato (<b>LAL</b>)</div>
           <div>2️⃣ <b>Secondo criterio</b>: angolo, lato, angolo (<b>ALA</b>)</div>
         </div>
         <p class="ls-note">Le sigle ricordano l'ordine: in LAL l'angolo sta <b>in mezzo</b> ai due lati; in ALA il lato sta <b>in mezzo</b> ai due angoli.</p>` },
    { k:"Primo criterio", t:"Due lati e l'angolo compreso",
      h:`${F_LAL}
         <div class="ls-res" style="font-size:1rem;text-align:left;font-family:inherit">Due triangoli sono congruenti se hanno ordinatamente congruenti <b>due lati</b> e <b>l'angolo tra essi compreso</b>.</div>
         <div class="ls-calc"><div><span>AB ≅ A′B′ · AC ≅ A′C′ · Â ≅ Â′</span><b>ABC ≅ A′B′C′</b></div></div>` },
    { k:"Attenzione", t:"L'angolo deve essere compreso",
      h:`${F_LLA}
         <p>ABC e ABD hanno AB in comune, <b>BC ≅ BD</b> e lo stesso angolo in A, ma <b>non sono congruenti</b>.</p>
         <div class="ls-warn">⚠️ Qui l'angolo Â <b>non</b> è compreso tra AB e BC. Con un angolo non compreso il primo criterio non vale.</div>` },
    { k:"Perché è vero", t:"Il primo criterio, sovrapponendo",
      h:`<ol class="ls-steps">
           <li>Porto A′ su A e A′B′ sulla semiretta AB, con C′ dalla parte di C. Poiché A′B′ ≅ AB, <b>B′ cade su B</b> (assioma 7A).</li>
           <li>Poiché Â′ ≅ Â, la semiretta A′C′ cade su AC (assioma 7B).</li>
           <li>Poiché A′C′ ≅ AC, <b>C′ cade su C</b> (assioma 7A).</li>
           <li>Per B e C passa una sola retta (2B): <b>B′C′ coincide con BC</b>.</li>
         </ol>
         <p class="ls-note">Usiamo gli assiomi del prof. <b>Semiretta</b>: parte da un punto e va avanti senza fine da una parte sola. Molti libri accettano il primo criterio senza dimostrazione: chiedi al prof come lo ha presentato.</p>` },
    { k:"Secondo criterio", t:"Un lato e i due angoli adiacenti",
      h:`${F_ALA}
         <div class="ls-res" style="font-size:1rem;text-align:left;font-family:inherit">Due triangoli sono congruenti se hanno ordinatamente congruenti <b>un lato</b> e <b>i due angoli adiacenti</b> a esso.</div>
         <div class="ls-calc"><div><span>AB ≅ A′B′ · Â ≅ Â′ · B̂ ≅ B̂′</span><b>ABC ≅ A′B′C′</b></div></div>
         <p class="ls-note">«Adiacenti al lato AB» vuol dire: gli angoli ai suoi due estremi, A e B.</p>` },
    { k:"Dimostrazione 1/4", t:"Secondo criterio: ipotesi e tesi",
      h:`<div class="ls-calc">
           <div><span><b>Ipotesi</b></span><b>AB ≅ A′B′</b></div>
           <div><span></span><b>Â ≅ Â′</b></div>
           <div><span></span><b>B̂ ≅ B̂′</b></div>
           <div><span><b>Tesi</b></span><b>ABC ≅ A′B′C′</b></div>
         </div>
         <p>Si dimostra <b>per assurdo</b>: si suppone il contrario e si arriva a una cosa impossibile.</p>
         <div class="ls-why">👉 Basta dimostrare che <b>AC ≅ A′C′</b>: poi si usa il primo criterio (AB, Â, AC).</div>` },
    { k:"Dimostrazione 2/4", t:"Supponiamo AC non congruente ad A′C′",
      h:`${F_DIM2}
         <p>Allora sulla semiretta A′C′ c'è <b>un punto D</b>, diverso da C′, con <b>A′D ≅ AC</b> (assioma 7A).</p>` },
    { k:"Dimostrazione 3/4", t:"Uso il primo criterio",
      h:`${F_DIM2}
         <p>ABC e A′B′D hanno <b>AB ≅ A′B′</b>, <b>Â ≅ Â′</b>, <b>AC ≅ A′D</b>: sono congruenti per il <b>primo criterio</b>.</p>
         <p>Quindi l'angolo <b>A′B̂′D ≅ AB̂C</b>.</p>` },
    { k:"Dimostrazione 4/4", t:"La contraddizione",
      h:`<ol class="ls-steps">
           <li>Per ipotesi AB̂C ≅ A′B̂′C′. Quindi <b>A′B̂′D ≅ A′B̂′C′</b>.</li>
           <li>D e C′ stanno dalla stessa parte di A′B′: per l'assioma 7B la semiretta è <b>una sola</b>, quindi B′D = B′C′.</li>
           <li>D sta sia su A′C′ sia su B′C′: allora <b>D = C′</b>. Ma avevamo detto D ≠ C′: <b>assurdo</b>.</li>
         </ol>
         <div class="ls-res">Quindi AC ≅ A′C′ e, per il 1° criterio, ABC ≅ A′B′C′</div>` },
    { k:"Esempio 1", t:"Con il primo criterio",
      h:`${F_KITE1}
         <p><b>Ipotesi:</b> AB ≅ AD, BÂC ≅ CÂD. <b>Tesi:</b> ABC ≅ ADC.</p>
         <div class="ls-calc">
           <div><span>AB ≅ AD</span><b>ipotesi</b></div>
           <div><span>BÂC ≅ CÂD</span><b>ipotesi</b></div>
           <div><span>AC ≅ AC</span><b>in comune</b></div>
         </div>
         <p class="ls-note">Due lati e l'angolo compreso: congruenti per il <b>1° criterio</b>.</p>` },
    { k:"Esempio 2", t:"Con il secondo criterio",
      h:`${F_KITE2}
         <p><b>Ipotesi:</b> BÂC ≅ CÂD, AĈB ≅ AĈD. <b>Tesi:</b> ABC ≅ ADC.</p>
         <div class="ls-calc">
           <div><span>AC ≅ AC</span><b>in comune</b></div>
           <div><span>i due angoli adiacenti ad AC</span><b>ipotesi</b></div>
         </div>
         <p class="ls-note">Un lato e i due angoli adiacenti: congruenti per il <b>2° criterio</b>. Quindi anche AB ≅ AD.</p>` },
    { k:"Il metodo", t:"Come si scrive una dimostrazione",
      h:`<ol class="ls-steps">
           <li>Scrivi <b>ipotesi</b> (quello che sai) e <b>tesi</b> (quello che devi dimostrare).</li>
           <li>Trova <b>due triangoli</b> che contengono gli elementi della tesi.</li>
           <li>Elenca <b>3 coppie</b> di elementi congruenti, ognuna con il suo <b>perché</b> (ipotesi, in comune, assioma).</li>
           <li>Scrivi <b>quale criterio</b> usi e la conclusione.</li>
         </ol>` },
    { k:"Da ricordare", t:"In tre righe",
      h:`<div class="ls-rule ls-rule-col">
           <div>1️⃣ <b>LAL</b>: due lati e l'angolo <b>compreso</b></div>
           <div>2️⃣ <b>ALA</b>: un lato e i due angoli <b>adiacenti</b></div>
           <div>⚠️ Con l'angolo <b>non compreso</b> non vale</div>
         </div>` + (window.semplice ? window.semplice('SIGLE') : '') }
  ]
};
// sotto ogni enunciato, la spiegazione «in parole semplici» (data/matematica/semplici.js)
for (const s of window.LESSONS["criteri-congruenza"].slides) {
  const key = { "Primo criterio":"LAL", "Secondo criterio":"ALA" }[s.k];
  if (key && window.conSemplice) s.h = window.conSemplice(s.h, key);
}
