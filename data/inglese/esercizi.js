// ============================================================
//  data/inglese/esercizi.js  (v1)
//  Esercizi di inglese sugli argomenti delle schede della prof Grossi:
//  to be, have got, plurali, articoli, possessivi, genitivo sassone,
//  present simple, avverbi di frequenza, preposizioni di tempo,
//  present continuous, -ing, imperativo.
//  Le consegne seguono i tipi delle schede (completa, riscrivi, traduci,
//  riordina); le frasi sono scritte da noi.
//  Risposte da scrivere: si accettano sia la forma contratta sia l'estesa.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

(function () {
  // Varianti accettate: forma contratta ⇄ forma estesa
  const PAIRS = [["don't", "do not"], ["doesn't", "does not"], ["isn't", "is not"], ["aren't", "are not"],
    ["haven't", "have not"], ["hasn't", "has not"], ["i'm", "i am"], ["you're", "you are"], ["we're", "we are"],
    ["they're", "they are"], ["i've", "i have"], ["you've", "you have"], ["we've", "we have"], ["they've", "they have"],
    ["he isn't", "he's not"], ["she isn't", "she's not"], ["it isn't", "it's not"], ["you aren't", "you're not"],
    ["we aren't", "we're not"], ["they aren't", "they're not"], ["what's", "what is"]];
  function variants(s) {
    let set = new Set([s.toLowerCase()]);
    for (let round = 0; round < 3; round++) {
      for (const v of [...set]) {
        for (const [a, b] of PAIRS) {
          if (v.includes(a)) set.add(v.split(a).join(b));
          if (v.includes(b)) set.add(v.split(b).join(a));
        }
        // he's / she's / it's: «has» se segue got, altrimenti «is»
        set.add(v.replace(/\b(he|she|it)'s got\b/g, '$1 has got').replace(/\b(he|she|it)'s\b/g, '$1 is'));
        set.add(v.replace(/\b(he|she|it) has got\b/g, "$1's got").replace(/\b(he|she|it) is\b/g, "$1's"));
      }
    }
    return [...set];
  }
  const W = "Scrivi in inglese. Maiuscole e punto finale non contano; va bene sia la forma contratta (don't) sia l'estesa (do not).";
  // domanda da scrivere: answers = una o più risposte giuste
  const T = (q, answers, explanation, extra) => ({ type: "text", q, accept: [].concat(answers).flatMap(variants),
    answerText: [].concat(answers)[0], hint: W, explanation, ...(extra || {}) });

  const bank = (id, title, description, icon, questions) => {
    window.QUIZ_BANK[id] = { id, subject: "inglese", title, description, icon, version: 1, timePerQuestion: 30, questions };
  };

  // ── 1. To be e have got ──────────────────────────────────────────
  bank("en-be-have", "To be e have got", "Forme, domande, risposte brevi e i tre significati di 's", "🔤", [
    { q: "Hello! I ___ Luca and I'm from Rome.", options: ["am", "is", "are", "be"], answer: 0, explanation: "I am (I'm)." },
    { q: "My sisters ___ at school today.", options: ["are", "is", "am", "be"], answer: 0, explanation: "Soggetto plurale: are." },
    { q: "Il gatto non è nero → The cat ___ black.", options: ["isn't", "aren't", "not is", "don't"], answer: 0, explanation: "is not = isn't; not va dopo il verbo." },
    { q: "___ your parents at home now?", options: ["Are", "Is", "Do", "Have"], answer: 0, explanation: "Nella domanda il verbo to be va prima del soggetto: Are your parents…?" },
    { q: "Is Sara your cousin? — Yes, ___", options: ["she is.", "she's.", "it is.", "she does."], answer: 0, explanation: "Risposta breve affermativa: forma estesa, mai contratta." },
    { q: "Are you hungry? — No, ___", options: ["I'm not.", "I amn't.", "I not am.", "I don't."], answer: 0, explanation: "Risposta breve negativa: No, I'm not." },
    { q: "Come si dice «Ho 13 anni»?", options: ["I'm 13.", "I have 13 years.", "I've got 13 years.", "I has 13."], answer: 0, explanation: "Per l'età l'inglese usa to be." },
    { q: "Come si dice «Abbiamo freddo»?", options: ["We're cold.", "We have cold.", "We've got cold.", "We do cold."], answer: 0, explanation: "be cold = avere freddo." },
    { q: "My brother ___ a new bike.", options: ["has got", "have got", "is got", "haves got"], answer: 0, explanation: "Con he / she / it si usa has got." },
    { q: "___ you got a pencil, please?", options: ["Have", "Has", "Do", "Are"], answer: 0, explanation: "Domanda: Have + soggetto + got." },
    { q: "Has Tom got a dog? — No, ___", options: ["he hasn't.", "he hasn't got.", "he doesn't.", "he isn't."], answer: 0, explanation: "Nelle risposte brevi got non si mette mai." },
    { q: "«She's got long hair.» Qui 's vuol dire…", options: ["has", "is", "genitivo sassone", "us"], answer: 0, explanation: "Dopo c'è got: 's = has." },
    { q: "«Kate's my best friend.» Qui 's vuol dire…", options: ["is", "has", "genitivo sassone", "was"], answer: 0, explanation: "Kate is my best friend." },
    { q: "«Kate's dog is very small.» Qui 's vuol dire…", options: ["genitivo sassone", "is", "has", "us"], answer: 0, explanation: "Il cane di Kate: genitivo sassone." },
    T("Scrivi la forma contratta di: they are", "they're", "they are → they're."),
    T("Scrivi la forma negativa contratta di: he is", "he isn't", "he is not → he isn't (anche he's not)."),
    T("Traduci: Hai sonno?", "Are you sleepy?", "be sleepy = avere sonno; nella domanda Are va prima di you."),
    T("Traduci: Hanno torto.", "They're wrong.", "be wrong = avere torto."),
    T("Riscrivi alla forma negativa: We have got a garden.", "We haven't got a garden.", "have not got = haven't got."),
    T("Scrivi la domanda: your dad / a beard", "Has your dad got a beard?", "your dad = he: Has … got …?"),
    T("Scrivi la domanda con to be: you / in a hurry", "Are you in a hurry?", "be in a hurry = avere fretta."),
    T("Risposta breve negativa: Is it late?", "No, it isn't.", "No + pronome + forma negativa contratta."),
    T("Traduci: Lei ha gli occhi verdi.", "She's got green eyes.", "have got per l'aspetto fisico; con she: has got."),
    T("Completa con have got o has got (forma estesa): My grandparents ___ a house by the sea.", "have got", "My grandparents = they: have got.")
  ]);

  // ── 2. Plurali e articoli ────────────────────────────────────────
  bank("en-plurali", "Plurali, this / these, a / an", "Plurali regolari e irregolari, frasi da volgere al plurale, articoli", "📚", [
    { type: "classify", q: "Come si forma il plurale? Metti ogni parola nella colonna giusta.", categories: ["-s", "-es", "-ies"],
      items: [{ t: "car", c: 0 }, { t: "toy", c: 0 }, { t: "girl", c: 0 }, { t: "bus", c: 1 }, { t: "watch", c: 1 }, { t: "box", c: 1 },
              { t: "dish", c: 1 }, { t: "baby", c: 2 }, { t: "city", c: 2 }, { t: "party", c: 2 }],
      explanation: "-es dopo -s, -sh, -ch, -x; -ies dopo consonante + y; toy ha vocale + y: toys." },
    T("Plurale di: child", "children", "Plurale irregolare."),
    T("Plurale di: woman", "women", "Plurale irregolare."),
    T("Plurale di: person", "people", "Plurale irregolare."),
    T("Plurale di: tooth", "teeth", "Plurale irregolare."),
    T("Plurale di: leaf", "leaves", "-f diventa -ves."),
    T("Plurale di: wife", "wives", "-fe diventa -ves."),
    T("Plurale di: tomato", "tomatoes", "-o: si aggiunge -es."),
    T("Plurale di: family", "families", "Consonante + y: -ies."),
    T("Plurale di: key", "keys", "Vocale + y: solo -s."),
    { q: "Qual è il plurale giusto di «piano»?", options: ["pianos", "pianoes", "pianies", "piani"], answer: 0, explanation: "Parola straniera in -o: solo -s." },
    { q: "Qual è il singolare di «men»?", options: ["man", "mans", "menn", "mens"], answer: 0, explanation: "man → men." },
    T("Riscrivi al plurale: This apple is red.", "These apples are red.", "this → these, is → are, apple → apples."),
    T("Riscrivi al plurale: That woman is my teacher.", "Those women are my teachers.", "that → those, woman → women, teacher → teachers."),
    T("Riscrivi al plurale: Where is the child?", "Where are the children?", "is → are, child → children."),
    T("Riscrivi al plurale: This box is heavy.", "These boxes are heavy.", "box → boxes."),
    T("Riscrivi al singolare: Those men are Italian.", "That man is Italian.", "those → that, men → man, are → is."),
    T("Riscrivi al singolare: These babies are hungry.", "This baby is hungry.", "babies → baby."),
    T("Traduci: Questi sono i miei libri.", "These are my books.", "Niente articolo davanti a my."),
    { q: "___ orange", options: ["an", "a", "the an", "—"], answer: 0, explanation: "Suono di vocale: an." },
    { q: "___ hour", options: ["an", "a", "—", "the an"], answer: 0, explanation: "La h di hour non si pronuncia: an hour." },
    { q: "___ hospital", options: ["a", "an", "—", "the a"], answer: 0, explanation: "La h di hospital si sente: a hospital." },
    { q: "___ egg and ___ banana", options: ["an … a", "a … an", "a … a", "an … an"], answer: 0, explanation: "an egg (vocale), a banana (consonante)." }
  ]);

  // ── 3. Possessivi e genitivo sassone ─────────────────────────────
  bank("en-possessivi", "Possessivi e genitivo sassone", "my / his / her…, 's oppure ', whose", "🔑", [
    { q: "Marco loves ___ dog.", options: ["his", "her", "its", "their"], answer: 0, explanation: "Possessore maschio: his." },
    { q: "Anna is with ___ brother.", options: ["her", "his", "its", "she"], answer: 0, explanation: "Possessore femmina: her, anche se il fratello è maschio." },
    { q: "We love ___ school.", options: ["our", "us", "we", "their"], answer: 0, explanation: "we → our." },
    { q: "The cat is eating ___ food.", options: ["its", "it's", "his", "their"], answer: 0, explanation: "Animale o cosa: its (senza apostrofo). it's = it is." },
    { q: "My friends are at home with ___ parents.", options: ["their", "there", "they", "her"], answer: 0, explanation: "they → their." },
    { q: "Is this ___ phone, Tom?", options: ["your", "you", "yours", "you're"], answer: 0, explanation: "you → your." },
    { q: "La camera delle ragazze (tante ragazze) → the ___ room", options: ["girls'", "girl's", "girls's", "girl'"], answer: 0, explanation: "Plurale in -s: solo l'apostrofo." },
    { q: "I giocattoli dei bambini → the ___ toys", options: ["children's", "childrens'", "children'", "childs'"], answer: 0, explanation: "Plurale irregolare: 's." },
    { q: "La camera di mio fratello → my ___ room", options: ["brother's", "brothers'", "brother'", "brothers"], answer: 0, explanation: "Singolare: 's." },
    { q: "La casa di Tom e Lucy → ___ house", options: ["Tom and Lucy's", "Tom's and Lucy's", "Tom's and Lucy", "the Tom and Lucy's"], answer: 0, explanation: "Due possessori della stessa cosa: 's solo sull'ultimo." },
    { q: "___ jacket is this? — It's Paul's.", options: ["Whose", "Who's", "Who", "Which"], answer: 0, explanation: "Whose = di chi." },
    T("Riscrivi con 's o ': the bike of my cousin", "my cousin's bike", "Prima il possessore con 's, poi la cosa."),
    T("Riscrivi con 's o ': the room of the boys", "the boys' room", "Plurale in -s: solo l'apostrofo."),
    T("Riscrivi con 's o ': the toys of the children", "the children's toys", "Plurale irregolare: 's."),
    T("Riscrivi con 's o ': the friend of Sara", "Sara's friend", "Niente the davanti al nome proprio."),
    T("Traduci: il libro di Marco", "Marco's book", "Genitivo sassone, senza articolo."),
    T("Traduci: la madre di Sara e Luca", "Sara and Luca's mother", "Due possessori: 's sull'ultimo."),
    T("Traduci: la camera delle ragazze", "the girls' room", "Plurale in -s: solo l'apostrofo."),
    T("Traduci: suo padre (di Giulia)", "her father", "Giulia è femmina: her."),
    T("Traduci: il loro insegnante", "their teacher", "they → their."),
    T("Riscrivi in forma estesa: Tom's got a sister.", "Tom has got a sister.", "Dopo c'è got: 's = has."),
    T("Riscrivi in forma estesa: Emma's my cousin.", "Emma is my cousin.", "Qui 's = is.")
  ]);

  // ── 4. Present simple ────────────────────────────────────────────
  bank("en-present-simple", "Present simple", "La -s della 3ª persona, don't / doesn't, domande e question words", "⏰", [
    { q: "My dad ___ TV every evening.", options: ["watches", "watch", "watchs", "is watch"], answer: 0, explanation: "-ch: si aggiunge -es." },
    { q: "She ___ her homework after lunch.", options: ["does", "do", "dos", "doing"], answer: 0, explanation: "do → does." },
    { q: "Lisa ___ English and French.", options: ["studies", "studys", "study", "studyes"], answer: 0, explanation: "Consonante + y: -ies." },
    { q: "We ___ to school by bus.", options: ["go", "goes", "going", "gos"], answer: 0, explanation: "Con we la forma base, senza -s." },
    { q: "He ___ like fish.", options: ["doesn't", "don't", "isn't", "not"], answer: 0, explanation: "he → doesn't." },
    { q: "My cousins ___ in London.", options: ["don't live", "doesn't live", "don't lives", "not live"], answer: 0, explanation: "they → don't + forma base." },
    { q: "___ your sister play the piano?", options: ["Does", "Do", "Is", "Has"], answer: 0, explanation: "your sister = she: Does." },
    { q: "Does he speak Spanish? — Yes, he ___", options: ["does.", "speaks.", "is.", "do."], answer: 0, explanation: "Nella risposta breve solo l'ausiliare." },
    { q: "Where ___ your grandparents live?", options: ["do", "does", "are", "is"], answer: 0, explanation: "your grandparents = they: do." },
    { q: "Tom ___ breakfast at 7 o'clock.", options: ["has", "has got", "have", "haves"], answer: 0, explanation: "have breakfast è un'azione: niente got; con he: has." },
    { q: "Quale frase è giusta?", options: ["She doesn't play tennis.", "She doesn't plays tennis.", "She don't play tennis.", "She not plays tennis."], answer: 0, explanation: "Con doesn't il verbo torna alla forma base." },
    { q: "___ do you live? — In Bracciano.", options: ["Where", "When", "Who", "How often"], answer: 0, explanation: "Where = dove." },
    { q: "___ do you go swimming? — Twice a week.", options: ["How often", "How", "What", "Where"], answer: 0, explanation: "How often = quanto spesso." },
    { q: "___ time does the film start? — At 9.", options: ["What", "When", "Which", "How"], answer: 0, explanation: "What time = a che ora." },
    T("Terza persona singolare di: watch (he …)", "watches", "-ch: -es."),
    T("Terza persona singolare di: fly (it …)", "flies", "Consonante + y: -ies."),
    T("Terza persona singolare di: play (she …)", "plays", "Vocale + y: solo -s."),
    T("Terza persona singolare di: go (he …)", "goes", "-o: -es."),
    T("Terza persona singolare di: have (she …)", "has", "have → has."),
    T("Riscrivi alla forma negativa: I like coffee.", "I don't like coffee.", "I → don't + forma base."),
    T("Riscrivi alla forma negativa: My mum works on Saturdays.", "My mum doesn't work on Saturdays.", "doesn't + forma base: works → work."),
    T("Scrivi la domanda: you / speak / French", "Do you speak French?", "Do + soggetto + forma base."),
    T("Scrivi la domanda: Sam / play / basketball", "Does Sam play basketball?", "Sam = he: Does … play."),
    T("Risposta breve affermativa: Do your friends like rap?", "Yes, they do.", "your friends = they."),
    T("Traduci: Mia sorella non mangia carne.", "My sister doesn't eat meat.", "doesn't + forma base."),
    T("Traduci: Pranziamo a scuola.", "We have lunch at school.", "have lunch = pranzare.")
  ]);

  // ── 5. Avverbi di frequenza e preposizioni di tempo ─────────────
  bank("en-avverbi", "Avverbi di frequenza e on / in / at", "always, never…, dove vanno nella frase, once / twice, on / in / at", "📅", [
    { type: "order", q: "Metti gli avverbi dal più frequente al meno frequente.", items: ["always", "usually", "often", "sometimes", "rarely", "never"],
      explanation: "always 100% … never 0%." },
    { type: "order", q: "Riordina le parole per formare la frase.", items: ["I", "always", "get up", "at 7 o'clock"], explanation: "L'avverbio va prima del verbo: I always get up at 7 o'clock." },
    { type: "order", q: "Riordina le parole per formare la frase.", items: ["She", "is", "never", "late"], explanation: "Con to be l'avverbio va dopo: She is never late." },
    { type: "order", q: "Riordina le parole per formare la frase.", items: ["How often", "do", "you", "play", "tennis?"], explanation: "Question word + do + soggetto + verbo." },
    { q: "Quale frase è giusta?", options: ["I usually walk to school.", "I walk usually to school.", "Usually I walk to school usually.", "I walk to school usually always."], answer: 0, explanation: "L'avverbio va prima del verbo principale." },
    { q: "Quale frase è giusta?", options: ["He is often tired.", "He often is tired.", "Often he tired is.", "He is tired often always."], answer: 0, explanation: "Con to be l'avverbio va dopo il verbo." },
    { q: "Come si dice «Non mangio mai pesce»?", options: ["I never eat fish.", "I don't never eat fish.", "I never don't eat fish.", "I not eat never fish."], answer: 0, explanation: "never è già negativo: verbo affermativo." },
    T("Inserisci l'avverbio (usually): We have pizza on Fridays.", "We usually have pizza on Fridays.", "Prima del verbo principale."),
    T("Inserisci l'avverbio (never): He is at home on Sundays.", "He is never at home on Sundays.", "Dopo to be."),
    T("Inserisci l'avverbio (sometimes): They watch films together.", ["They sometimes watch films together.", "Sometimes they watch films together."], "Prima del verbo; sometimes può anche andare all'inizio, come nella mappa della prof."),
    T("Inserisci l'avverbio (often): My dad cooks dinner.", "My dad often cooks dinner.", "Prima del verbo principale."),
    T("Traduci: una volta al mese", "once a month", "once = una volta; a month = al mese."),
    T("Traduci: due volte alla settimana", "twice a week", "twice = due volte."),
    T("Traduci: tre volte al giorno", "three times a day", "Da tre in su: times."),
    { q: "I play football ___ Saturday.", options: ["on", "in", "at", "—"], answer: 0, explanation: "on + giorni." },
    { q: "My birthday is ___ July.", options: ["in", "on", "at", "—"], answer: 0, explanation: "in + mesi." },
    { q: "School starts ___ 8 o'clock.", options: ["at", "on", "in", "—"], answer: 0, explanation: "at + orari." },
    { q: "I read ___ the evening.", options: ["in", "at", "on", "—"], answer: 0, explanation: "in the morning / afternoon / evening." },
    { q: "I sleep eight hours ___ night.", options: ["at", "in", "on", "—"], answer: 0, explanation: "at night (da ricordare: non «in the night»)." },
    { q: "We visit our grandparents ___ Christmas.", options: ["at", "on", "in", "—"], answer: 0, explanation: "at + feste (at Christmas, at Easter)." },
    { q: "It snows a lot ___ winter.", options: ["in", "at", "on", "—"], answer: 0, explanation: "in + stagioni." },
    { q: "The concert is ___ 5th June.", options: ["on", "in", "at", "—"], answer: 0, explanation: "on + date." },
    { q: "___ is your English test? — On Monday.", options: ["When", "What time", "Where", "How often"], answer: 0, explanation: "When = quando (giorno)." },
    { q: "___ does the bus leave? — At 7.30.", options: ["What time", "When day", "Where", "How"], answer: 0, explanation: "What time = a che ora." }
  ]);

  // ── 6. Present continuous, -ing, imperativo ──────────────────────
  bank("en-continuous", "Present continuous e imperativo", "to be + -ing, simple o continuous, love + -ing, gli ordini", "🎬", [
    { q: "Look! The baby ___.", options: ["is sleeping", "sleeps", "sleeping", "are sleeping"], answer: 0, explanation: "Azione in corso: is + -ing." },
    { q: "We ___ TV at the moment.", options: ["aren't watching", "don't watching", "isn't watching", "not watching"], answer: 0, explanation: "Negativa: aren't + -ing." },
    { q: "___ you listening to me?", options: ["Are", "Do", "Is", "Have"], answer: 0, explanation: "Domanda: to be prima del soggetto." },
    { q: "My mum ___ in a hospital. She's a nurse.", options: ["works", "is working", "work", "working"], answer: 0, explanation: "Lavoro abituale: present simple." },
    { q: "Be quiet! Dad ___ on the phone now.", options: ["is talking", "talks", "talk", "does talk"], answer: 0, explanation: "now: present continuous." },
    { q: "I love ___ comics.", options: ["reading", "read", "to reading", "reads"], answer: 0, explanation: "love + -ing." },
    { q: "My brother hates ___ the dishes.", options: ["washing", "wash", "washes", "to washing"], answer: 0, explanation: "hate + -ing." },
    T("Forma in -ing di: swim", "swimming", "Consonante-vocale-consonante: si raddoppia."),
    T("Forma in -ing di: write", "writing", "La -e cade."),
    T("Forma in -ing di: sit", "sitting", "Si raddoppia la t."),
    T("Forma in -ing di: die", "dying", "-ie diventa -y."),
    T("Forma in -ing di: play", "playing", "-y: si aggiunge -ing."),
    T("Riscrivi al present continuous: They play in the garden.", "They're playing in the garden.", "are + playing."),
    T("Traduci: Sto leggendo un libro.", "I'm reading a book.", "am + reading."),
    T("Traduci: Il cane sta mangiando.", "The dog is eating.", "is + eating."),
    T("Traduci: Ci piace cucinare.", "We like cooking.", "like + -ing."),
    T("Imperativo negativo: Non toccare! (touch)", "Don't touch!", "Don't + forma base."),
    T("Imperativo: Apri la porta! (open the door)", "Open the door!", "Forma base, senza soggetto."),
    { q: "Qual è l'imperativo giusto per «Non correre!»?", options: ["Don't run!", "You don't run!", "Not run!", "Doesn't run!"], answer: 0, explanation: "Don't + forma base, senza soggetto." }
  ]);

  // ── 7. Verifica mista: ogni volta domande nuove da tutti i test ─
  const IDS = ["en-be-have", "en-plurali", "en-possessivi", "en-present-simple", "en-avverbi", "en-continuous"];
  const pick = (arr, n) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, n); };
  const mix = { id: "en-verifica", subject: "inglese", title: "Verifica mista di inglese", description: "Ogni volta 24 domande nuove da tutti gli argomenti: crocette e frasi da scrivere", icon: "🏁", version: 1, timePerQuestion: 30 };
  Object.defineProperty(mix, "questions", { enumerable: true, get() {
    return IDS.flatMap(id => { const qs = window.QUIZ_BANK[id].questions;
      return [...pick(qs.filter(q => !q.type), 2), ...pick(qs.filter(q => q.type === "text"), 2)]; });
  } });
  window.QUIZ_BANK["en-verifica"] = mix;
})();
