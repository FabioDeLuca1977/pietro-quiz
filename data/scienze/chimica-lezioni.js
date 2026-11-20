// ============================================================
//  data/scienze/chimica-lezioni.js  (v1)
//  Chimica, interrogazione del modulo (prof Flaccavento): ripasso a slide.
//  Cap. 2 pp. 40-61 e cap. 3 pp. 77-88, dalle foto del libro (20/11/2026).
//  Mancano ancora le pp. 50-52, 62-63 e 76.
// ============================================================

window.LESSONS = window.LESSONS || {};

(function () {
  const R = rows => `<div class="ls-calc">${rows.map(([a, b]) =>
    `<div><span style="color:#fff;font-size:.95rem;font-weight:700">${a}</span><b style="white-space:normal;text-align:right;font-size:.9rem;color:#ffd23f">${b}</b></div>`).join('')}</div>`;
  const BOX = items => `<div class="ls-rule ls-rule-col">${items.map(i => `<div>${i}</div>`).join('')}</div>`;
  const END = (test, pag) => ({ k: "Fine", t: "Ora prova tu",
    h: `<p class="ls-big">Fai il test «${test}».</p><p class="ls-note">Libro di scienze, ${pag}.</p>` });

  // ── 1. Stati fisici, sostanze pure, miscele ─────────────────
  window.LESSONS["chim-materia"] = {
    title: "Stati fisici, sostanze pure e miscele",
    slides: [
      { k: "Chimica · cap. 2", t: "Com'è fatta la materia",
        h: `<p class="ls-big">La materia si presenta in tre <b>stati fisici</b>: solido, liquido e gassoso.</p>
            <p>Per la <b>teoria cinetico-particellare</b> è fatta di particelle piccolissime in continuo movimento.</p>
            <p class="ls-hint">Scorri verso l'alto ↑</p>` },
      { k: "Stati fisici (pp. 40-41)", t: "Solido, liquido, gas",
        h: `${R([["Solido", "forma e volume definiti; particelle che vibrano"], ["Liquido", "volume definito, forma del recipiente; particelle che scorrono"], ["Gas", "occupa tutto il volume; particelle libere, comprimibile"]])}
            <p class="ls-note">Plasma: quarto stato, particelle cariche e ricchissime di energia (fulmini, Sole).</p>` },
      { k: "Prove (pp. 41-42)", t: "Le particelle esistono",
        h: `${BOX(["<b>Diffusione</b>: ammoniaca e acido cloridrico formano un anello bianco non a metà del tubo: l'ammoniaca diffonde più veloce.", "100 mL di alcol + 50 mL di acqua danno <b>meno di 150 mL</b>: le particelle occupano gli spazi vuoti."])}` },
      { k: "Sostanze pure (pp. 42-43)", t: "Un solo componente",
        h: `<p class="ls-big">Una <b>sostanza pura</b> è fatta da un solo componente, cioè da una sola specie chimica.</p>
            ${R([["Proprietà fisiche", "si misurano senza cambiare la sostanza"], ["Proprietà chimiche", "si vedono quando reagisce"], ["Intensive", "densità, T di fusione e di ebollizione"]])}
            <p class="ls-note">L'acqua potabile non è pura (sali disciolti); l'acqua distillata sì.</p>` },
      { k: "Miscele (pp. 44-45)", t: "Eterogenee e omogenee",
        h: `${R([["Eterogenea", "più fasi: latte, succo d'arancia, granito"], ["Omogenea = soluzione", "una fase: acqua di mare, aria, leghe"]])}
            <div class="ls-why">Soluzione = <b>solvente</b> (quello in maggiore quantità, che scioglie) + <b>soluto</b> (quello disciolto).</div>` },
      { k: "Sostanza pura o soluzione? (p. 46)", t: "Come si comportano col calore",
        h: `${R([["Acqua distillata", "bolle a 100 °C costanti, congela a 0 °C"], ["Acqua salata", "bolle più in alto e la T sale; congela più in basso e la T scende"]])}` },
      { k: "Solubilità e concentrazione (pp. 47-54)", t: "Quanto soluto",
        h: `<p><b>Solubilità</b>: la quantità massima di soluto che si scioglie, a una certa temperatura, in una data quantità di solvente. Il resto va sul fondo (corpo di fondo).</p>
            ${R([["% m/m", "g soluto ÷ g soluzione × 100"], ["% V/V", "mL soluto ÷ mL soluzione × 100"], ["% m/V", "g soluto ÷ mL soluzione × 100"], ["Diluizione", "C₁ × V₁ = C₂ × V₂"], ["ppm", "g soluto ÷ g soluzione × 1 000 000"]])}` },
      END("Chimica: stati, miscele, passaggi di stato", "pp. 40-58")
    ]
  };

  // ── 2. Passaggi di stato e metodi di separazione ─────────────
  window.LESSONS["chim-separazione"] = {
    title: "Passaggi di stato e metodi di separazione",
    slides: [
      { k: "Trasformazioni fisiche (p. 55)", t: "La sostanza resta la stessa",
        h: `<p class="ls-big">Nelle <b>trasformazioni fisiche</b> l'identità delle sostanze non varia: cambia solo l'organizzazione delle particelle.</p>
            <p>Esempio: il ghiaccio che fonde è sempre acqua.</p>` },
      { k: "Passaggi di stato (pp. 55-56)", t: "I sei passaggi",
        h: `${R([["Fusione", "solido → liquido"], ["Solidificazione", "liquido → solido"], ["Evaporazione", "liquido → gas"], ["Condensazione", "gas → liquido"], ["Sublimazione", "solido → gas"], ["Brinamento", "gas → solido"]])}` },
      { k: "Ebollizione (p. 56)", t: "Dipende dalla pressione",
        h: `${BOX(["<b>Evaporazione</b>: solo lo strato in superficie.", "<b>Ebollizione</b>: tutto il liquido, con bollicine. Acqua 100 °C, alcol 78 °C (a 1 atm)."])}
            <p class="ls-note">Pentola a pressione: più pressione, l'acqua bolle a circa 120 °C. In alta montagna bolle sotto i 100 °C.</p>` },
      { k: "Curve di riscaldamento (pp. 57-58)", t: "La sosta termica",
        h: `<p>Mentre una sostanza pura cambia stato, la sua <b>temperatura resta costante</b>: è la <b>sosta termica</b> (il tratto orizzontale del grafico).</p>
            <div class="ls-why">Il calore serve a vincere le forze tra le particelle: si chiama <b>calore latente</b>.</div>
            <p class="ls-note">Il naftalene (puro) fonde a 80 °C precisi; la cera (miscela) in un intervallo di temperature.</p>` },
      { k: "Separazione (p. 58)", t: "Come si separano le miscele",
        h: `<p>Si usano processi <b>fisici</b>, basati sulle diverse proprietà fisiche delle sostanze.</p>
            <ol class="ls-steps"><li>filtrazione</li><li>centrifugazione</li><li>distillazione</li><li>cristallizzazione</li><li>estrazione con solvente</li></ol>` },
      { k: "Separazione (pp. 59-61)", t: "Che cosa sfrutta ogni metodo",
        h: `${R([["Filtrazione", "dimensioni delle particelle"], ["Centrifugazione", "densità"], ["Distillazione", "punto di ebollizione"], ["Cristallizzazione", "solubilità al variare della T"], ["Estrazione", "un solvente adatto"]])}` },
      { k: "Separazione (pp. 59-61)", t: "Quale miscela",
        h: `${BOX(["<b>Eterogenee</b>: filtrazione (imbuto e filtro di carta), centrifugazione (il solido va sul fondo della provetta).", "<b>Omogenee</b>: distillazione semplice (sale e acqua) o frazionata (alcol e acqua, con ebollizioni vicine)."])}
            <p class="ls-note">Cristallizzazione: zucchero greggio → zucchero bianco. Estrazione: tè, caffè, essenze degli agrumi.</p>` },
      END("Chimica: stati, miscele, passaggi di stato", "pp. 55-61")
    ]
  };

  // ── 3. Elementi, composti, atomi ─────────────────────────────
  window.LESSONS["chim-atomi"] = {
    title: "Elementi, composti e teoria atomica",
    slides: [
      { k: "Chimica · cap. 3", t: "Le trasformazioni chimiche",
        h: `<p class="ls-big">Nelle trasformazioni chimiche si formano <b>nuove sostanze</b>.</p>
            <p>Come capire che c'è una reazione (p. 77):</p>
            <ol class="ls-steps"><li>si sviluppa un <b>gas</b></li><li>si producono <b>luce e calore</b></li><li>cambiano le <b>proprietà</b> (ferro → ruggine)</li></ol>` },
      { k: "Elementi e composti (pp. 77-78)", t: "Si può decomporre?",
        h: `${R([["Composto", "si decompone in sostanze più semplici (acqua, saccarosio)"], ["Elemento", "non si decompone (idrogeno, ossigeno, carbonio)"]])}
            <div class="ls-why"><b>Elettrolisi</b>: con la corrente l'acqua si scompone in idrogeno e ossigeno; l'idrogeno ha volume doppio.</div>` },
      { k: "Classificare la materia (p. 78)", t: "Tre domande",
        h: `<ol class="ls-steps"><li>Proprietà uniformi? No → <b>miscela eterogenea</b></li><li>Si separa con processi fisici? Sì → <b>soluzione</b></li><li>Si decompone con processi chimici? Sì → <b>composto</b>; no → <b>elemento</b></li></ol>` },
      { k: "Simboli (p. 79)", t: "118 elementi",
        h: `<p>Si conoscono <b>118 elementi</b>; i composti sono milioni.</p>
            ${R([["N", "azoto"], ["P", "fosforo"], ["Au", "oro"], ["Na", "sodio"], ["Cu", "rame"]])}` },
      { k: "Teoria atomica (p. 79)", t: "Dalton, 1803",
        h: `<ol class="ls-steps"><li>La materia è fatta di <b>atomi</b> piccolissimi e indivisibili</li><li>Gli atomi di uno stesso elemento sono identici</li><li>Un atomo non si trasforma in quello di un altro elemento</li><li>Un composto ha atomi di più elementi, in numero fisso</li><li>Nelle reazioni gli atomi non si creano né si distruggono: cambiano solo i legami</li></ol>` },
      { k: "Atomi e molecole (p. 80)", t: "Le particelle più piccole",
        h: `${BOX(["<b>Atomo</b>: la più piccola particella di un elemento che ha le sue proprietà chimiche.", "<b>Molecola</b>: la più piccola particella che ha le proprietà chimiche e la composizione di un composto."])}
            <p class="ls-note">Molecole biatomiche: N₂, O₂, H₂, F₂, Cl₂, Br₂, I₂. L'elio è fatto di atomi singoli.</p>` },
      { k: "Formule (pp. 81-82)", t: "Che cosa dice una formula",
        h: `<p>La <b>formula</b> indica il tipo e il numero di atomi. Gli <b>indici</b> in basso dicono quanti atomi.</p>
            ${R([["H₂O", "2 idrogeno, 1 ossigeno"], ["NH₃", "1 azoto, 3 idrogeno"], ["HNO₃", "1 idrogeno, 1 azoto, 3 ossigeno"]])}` },
      { k: "Ioni (p. 83)", t: "Atomi con carica",
        h: `${R([["Catione", "carica positiva: Na⁺, Ca²⁺"], ["Anione", "carica negativa: Cl⁻, O²⁻"]])}
            <p>Composti <b>molecolari</b> (acqua, H₂O) e composti <b>ionici</b> (cloruro di sodio, NaCl: ioni in rapporto 1 : 1).</p>` },
      { k: "Miscele e composti (p. 84)", t: "Ferro e zolfo",
        h: `${BOX(["<b>Miscela</b> di ferro e zolfo: ognuno conserva le sue proprietà; la calamita separa il ferro.", "Scaldati diventano un <b>composto</b>, il solfuro di ferro: proprietà nuove, la calamita non separa più il ferro."])}` },
      END("Chimica: elementi, composti e leggi", "pp. 77-84")
    ]
  };

  // ── 4. Le leggi della chimica ────────────────────────────────
  window.LESSONS["chim-leggi"] = {
    title: "Le leggi di Lavoisier, Proust e Dalton",
    slides: [
      { k: "Le leggi (p. 85)", t: "Perché servono gli atomi",
        h: `<p class="ls-big">La teoria atomica spiega le leggi che regolano le reazioni chimiche.</p>
            <p>Reagenti = le sostanze che reagiscono. Prodotti = le sostanze che si ottengono.</p>` },
      { k: "Lavoisier (p. 85)", t: "Conservazione della massa",
        h: `<div class="ls-res">massa dei reagenti = massa dei prodotti</div>
            <p>Lavoisier (1743-1794) usò per primo la <b>bilancia</b>. La massa si conserva perché il numero degli atomi non cambia.</p>
            <p class="ls-note">Esempio del libro: 5,00 g di sodio + 7,70 g di cloro → 12,7 g di cloruro di sodio.</p>` },
      { k: "Proust (p. 86)", t: "Composizione costante",
        h: `<p class="ls-big">Un composto è sempre fatto degli stessi elementi nello <b>stesso rapporto in massa</b>.</p>
            ${R([["Acqua", "1 g di idrogeno : 8 g di ossigeno"], ["Solfuro di ferro", "1 g di ferro : 0,57 g di zolfo"]])}
            <p class="ls-note">Se un elemento è in eccesso, la parte in più resta non combinata.</p>` },
      { k: "Dalton (p. 88)", t: "Proporzioni multiple",
        h: `<p>Se due elementi formano <b>più di un composto</b>, le masse di uno che si combinano con la stessa massa dell'altro stanno in un rapporto di <b>numeri interi e piccoli</b>.</p>
            ${R([["CO", "1,00 g C con 1,33 g O"], ["CO₂", "1,00 g C con 2,66 g O"], ["Rapporto", "2,66 : 1,33 = 2 : 1"]])}` },
      { k: "Percentuale in massa (p. 87)", t: "Quanto pesa ogni elemento",
        h: `<div class="ls-res">% = massa elemento ÷ massa composto × 100</div>
            <p class="ls-note">Esempio del libro: 16,48 g di NaCl con 6,48 g di sodio → sodio 39,32%, cloro 60,68%.</p>` },
      { k: "Esercizi p. 99", t: "N. 24 e 25 (Lavoisier)",
        h: `${BOX(["<b>24.</b> 100 kg di calcare → 56 kg di calce viva + diossido di carbonio. 100 − 56 = <b>44 kg</b>.", "<b>25.</b> Ossido di mercurio → 21,8 g di mercurio + 3,50 g di ossigeno. 21,8 + 3,50 = <b>25,3 g</b>."])}
            <p class="ls-note">Copia anche il testo dei problemi sul quaderno.</p>` },
      END("Chimica: elementi, composti e leggi", "pp. 85-88 e 99")
    ]
  };
})();
