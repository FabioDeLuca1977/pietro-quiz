// ============================================================
//  data/storia/geostoria-unico.js  (v1)
//  Verifica di geostoria del 10 novembre — TEST UNICO.
//  Ogni volta pesca una combinazione nuova dalle domande già verificate degli
//  altri test di geostoria (che restano caricati ma non sono più in elenco):
//  14 crocette, 4 date, 4 cartine, 3 «trascina», 2 giochi e, alla fine,
//  4 domande aperte (una per argomento) come nel compito scritto.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

(function () {
  const pick = (arr, n) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, n); };
  const qs = id => (window.QUIZ_BANK[id] && window.QUIZ_BANK[id].questions) || [];
  const plain = q => !q.type;                                   // crocetta
  const openOf = re => qs('geostoria-aperte').filter(q => re.test(q.q));

  const bank = {
    id:              "geostoria-unico",
    subject:         "storia",
    title:           "Verifica di geostoria — test unico",
    description:     "Egizi, Ebrei, Fenici, popolazione: crocette, date, cartine, giochi e 4 domande aperte",
    icon:            "📜",
    version:         1,
    timePerQuestion: 30,
    ordered:         true                                        // aperte in fondo, come nel compito
  };
  // le domande si pescano ogni volta che il test parte
  Object.defineProperty(bank, 'questions', { enumerable: true, get() {
    const mc = [...qs('geostoria-verifica-10nov'), ...qs('geostoria-allenamento')].filter(plain);
    const blocks = [
      pick(mc, 14),
      pick(qs('geostoria-verifica-10nov').filter(q => q.type === 'numeric'), 4),
      pick(qs('geostoria-cartine'), 4),
      pick(qs('geostoria-trascina'), 3),
      pick(qs('geostoria-giochi'), 2),
    ].map(b => pick(b, b.length));
    const open = [
      pick(openOf(/^Egizi ·/), 1),
      pick(openOf(/^(Palestina|Ebrei) ·/), 1),
      pick(openOf(/^(Fenici|Ebrei e Fenici) ·/), 1),
      pick(openOf(/^Popolazione ·/), 1),
    ].flat();
    return [...pick(blocks.flat().slice(0, 18), 18), ...blocks.flat().slice(18), ...open];
  } });
  window.QUIZ_BANK["geostoria-unico"] = bank;
})();
