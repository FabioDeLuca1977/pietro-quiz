// ============================================================
//  data/storia/geostoria-unico.js  (v2)
//  Verifica di geostoria del 10 novembre — TEST UNICO.
//  Ogni volta pesca una combinazione nuova dalle domande già verificate degli
//  altri test di geostoria (che restano caricati ma non sono più in elenco):
//  14 crocette divise per argomento (4 Egizi, 3 Ebrei, 3 Fenici, 4 popolazione),
//  4 date, 4 cartine, 3 «trascina», 2 giochi e, alla fine, 4 domande aperte
//  (una per argomento) come nel compito scritto.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

(function () {
  const pick = (arr, n) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, n); };
  const qs = id => (window.QUIZ_BANK[id] && window.QUIZ_BANK[id].questions) || [];
  const openOf = re => qs('geostoria-aperte').filter(q => re.test(q.q));

  // argomento di una domanda: dalla prima pagina del libro citata, altrimenti dalle parole
  function topic(q) {
    const e = q.explanation || '', m = e.match(/p+\.\s*(\d+)/);
    if (m) { const p = +m[1]; if (p >= 64 && p <= 77) return 'eg'; if (p >= 84 && p <= 93) return 'eb'; if (p >= 94 && p <= 97) return 'fe'; if (p >= 110) return 'po'; }
    const t = q.q + ' ' + e;
    if (/Fenic|Tiro|Cartagine|alfabeto/i.test(t)) return 'fe';
    if (/Ebre|Filistei|Palestin|Bibbia/i.test(t)) return 'eb';
    if (/Egitt|Egizi|farao|Tebe|Menfi/i.test(t)) return 'eg';
    return 'po';
  }

  const bank = {
    id:              "geostoria-unico",
    subject:         "storia",
    title:           "Verifica di geostoria — test unico",
    description:     "Egizi, Ebrei, Fenici, popolazione: crocette, date, cartine, giochi e 4 domande aperte",
    icon:            "📜",
    version:         2,
    timePerQuestion: 30,
    ordered:         true                                        // aperte in fondo, come nel compito
  };
  // le domande si pescano ogni volta che il test parte
  Object.defineProperty(bank, 'questions', { enumerable: true, get() {
    const all = ['geostoria-verifica-10nov', 'geostoria-allenamento', 'geostoria-popolazione'].flatMap(qs);
    const mcAll = all.filter(q => !q.type);
    const byT = t => mcAll.filter(q => topic(q) === t);
    let mc = [...pick(byT('eg'), 4), ...pick(byT('eb'), 3), ...pick(byT('fe'), 3), ...pick(byT('po'), 4)];
    if (mc.length < 14) mc = mc.concat(pick(mcAll.filter(q => !mc.includes(q)), 14 - mc.length));
    const dates = pick(all.filter(q => q.type === 'numeric'), 4);
    const rest = [
      ...pick(qs('geostoria-cartine'), 4),
      ...pick(qs('geostoria-trascina'), 3),
      ...pick([...qs('geostoria-giochi'), ...all.filter(q => q.type === 'classify' || q.type === 'order')], 2),
    ];
    const open = [
      pick(openOf(/^Egizi ·/), 1),
      pick(openOf(/^(Palestina|Ebrei) ·/), 1),
      pick(openOf(/^(Fenici|Ebrei e Fenici) ·/), 1),
      pick(openOf(/^Popolazione ·/), 1),
    ].flat();
    return [...pick([...mc, ...dates], 18), ...rest, ...open];
  } });
  window.QUIZ_BANK["geostoria-unico"] = bank;
})();
