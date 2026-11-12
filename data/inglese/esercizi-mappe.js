// ============================================================
//  data/inglese/esercizi-mappe.js  (v1)
//  Esercizi sugli altri argomenti delle «Mappe per ripassare» (pp. 108-118):
//  pronomi e quantità, passato, futuro, comparativi, modali, present perfect,
//  passivo / periodo ipotetico / discorso indiretto. Frasi scritte da noi.
//  Usa T e bank di data/inglese/esercizi.js.
// ============================================================

(function () {
  const { T, bank } = window.EN_HELP;

  bank("en-quantita", "Pronomi, quantità e luoghi", "me / him / them, mine / yours, some / any, there is / are, much / many, in / on / under…", "🧺", [
    { q: "Where's Marco? I can't see ___.", options: ["him", "he", "his", "her"], answer: 0, explanation: "Complemento di he: him." },
    { q: "These are my friends. I like ___ a lot.", options: ["them", "they", "their", "theirs"], answer: 0, explanation: "Complemento di they: them." },
    { q: "Can you help ___, please? (noi)", options: ["us", "we", "our", "ours"], answer: 0, explanation: "Complemento di we: us." },
    { q: "Is this your pen? — Yes, it's ___.", options: ["mine", "my", "me", "I"], answer: 0, explanation: "Pronome possessivo: mine (sostituisce my pen)." },
    { q: "That isn't Anna's bag. ___ is red.", options: ["Hers", "Her", "She", "His"], answer: 0, explanation: "Pronome possessivo di lei: hers." },
    { q: "I've got ___ apples for you.", options: ["some", "any", "much", "a"], answer: 0, explanation: "Frase affermativa: some." },
    { q: "There isn't ___ milk in the fridge.", options: ["any", "some", "many", "a"], answer: 0, explanation: "Frase negativa: any." },
    { q: "___ there any shops near here?", options: ["Are", "Is", "Have", "Do"], answer: 0, explanation: "shops è plurale: Are there…?" },
    { q: "There ___ a cat on the sofa.", options: ["is", "are", "be", "has"], answer: 0, explanation: "Singolare: there is." },
    { q: "We haven't got ___ time.", options: ["much", "many", "a", "some of"], answer: 0, explanation: "time non si conta, frase negativa: much." },
    { q: "Have you got ___ friends in Rome?", options: ["many", "much", "a", "a lot"], answer: 0, explanation: "friends si contano, domanda: many." },
    { q: "My sister reads ___ books.", options: ["a lot of", "much", "many of", "any"], answer: 0, explanation: "Frase affermativa: a lot of." },
    { q: "How ___ sugar do you want?", options: ["much", "many", "lot", "some"], answer: 0, explanation: "sugar non si conta: How much." },
    { q: "How ___ students are there in your class?", options: ["many", "much", "lot of", "any"], answer: 0, explanation: "students si contano: How many." },
    { q: "I phoned, but ___ answered.", options: ["nobody", "anybody", "somebody", "any"], answer: 0, explanation: "nobody in frase affermativa = nessuno." },
    { q: "I don't want ___, thanks.", options: ["anything", "nothing", "something", "any"], answer: 0, explanation: "Frase negativa: i composti di any. «don't want nothing» avrebbe due negazioni." },
    { q: "Quale non si può contare?", options: ["bread", "chair", "egg", "book"], answer: 0, explanation: "bread: niente a / an, niente numeri." },
    { q: "The book is ___ the table (sopra, appoggiato).", options: ["on", "above", "in", "under"], answer: 0, explanation: "on = su, con contatto." },
    { q: "The lamp is ___ the table (sopra, senza toccarlo).", options: ["above", "on", "in", "behind"], answer: 0, explanation: "above = sopra, senza contatto." },
    { q: "The cat is ___ the bed (sotto).", options: ["under", "above", "on", "next"], answer: 0, explanation: "under = sotto." },
    { q: "The bank is ___ the school and the park (tra).", options: ["between", "behind", "opposite", "near of"], answer: 0, explanation: "between = tra." },
    T("Traduci: C'è un problema.", "There's a problem.", "there is = c'è."),
    T("Traduci: Ci sono due bagni.", "There are two bathrooms.", "there are = ci sono."),
    T("Traduci: Questo zaino è mio.", "This backpack is mine.", "Pronome possessivo: mine."),
    T("Sostituisci con un pronome: I see Maria every day.", "I see her every day.", "Maria → her."),
    T("Traduci: Non c'è nessuno.", ["There's nobody.", "There isn't anybody.", "There's no one.", "There isn't anyone."], "nobody (affermativa) oppure isn't + anybody."),
    T("Traduci: davanti alla scuola", "in front of the school", "in front of = davanti a."),
    T("Traduci: dietro la porta", "behind the door", "behind = dietro.")
  ]);

  bank("en-passato", "Il passato", "was / were, -ed, irregolari, didn't / did, past continuous", "⏪", [
    { q: "I ___ at home yesterday.", options: ["was", "were", "am", "be"], answer: 0, explanation: "I was." },
    { q: "My parents ___ in Paris last week.", options: ["were", "was", "are", "been"], answer: 0, explanation: "they → were." },
    { q: "___ you tired last night? — Yes, I was.", options: ["Were", "Was", "Did", "Are"], answer: 0, explanation: "you → Were." },
    { q: "We ___ football after school.", options: ["played", "plaied", "playd", "plays"], answer: 0, explanation: "Vocale + y: solo -ed." },
    { q: "She ___ the bus to school yesterday.", options: ["took", "taked", "takes", "take"], answer: 0, explanation: "take → took (irregolare, nella mappa)." },
    { q: "They ___ go to the party.", options: ["didn't", "don't went", "didn't went", "wasn't"], answer: 0, explanation: "didn't + forma base." },
    { q: "Did you see the film? — No, I ___", options: ["didn't.", "don't.", "wasn't.", "didn't see."], answer: 0, explanation: "Risposta breve: solo l'ausiliare." },
    { q: "Quale domanda è giusta?", options: ["Did he go to school?", "Did he went to school?", "Does he went to school?", "He did go to school?"], answer: 0, explanation: "Con did il verbo torna alla forma base." },
    { q: "At 8 o'clock I ___ dinner.", options: ["was having", "were having", "am having", "had having"], answer: 0, explanation: "Azione in corso nel passato: was + -ing." },
    { q: "___ they sleeping when you arrived?", options: ["Were", "Was", "Did", "Are"], answer: 0, explanation: "they → Were + -ing." },
    T("Past simple di: work", "worked", "Regolare: -ed."),
    T("Past simple di: live", "lived", "-e: solo -d."),
    T("Past simple di: study", "studied", "Consonante + y: -ied."),
    T("Past simple di: go", "went", "Irregolare."),
    T("Past simple di: have", "had", "Irregolare."),
    T("Riscrivi alla forma negativa: He watched TV.", "He didn't watch TV.", "didn't + forma base."),
    T("Scrivi la domanda: you / visit / your grandparents (past simple)", "Did you visit your grandparents?", "Did + soggetto + forma base."),
    T("Traduci: Ero stanco.", "I was tired.", "I was."),
    T("Traduci: Stavamo guardando un film.", "We were watching a film.", "we → were + -ing."),
    T("Traduci: Ieri non sono andato a scuola.", ["Yesterday I didn't go to school.", "I didn't go to school yesterday."], "didn't + go; yesterday all'inizio o in fondo.")
  ]);

  bank("en-futuro", "Il futuro", "present continuous, be going to, will / won't", "🔮", [
    { q: "Programma già fissato: I ___ my grandma on Sunday.", options: ["'m visiting", "visit", "visited", "'m visit"], answer: 0, explanation: "Programma con data: present continuous." },
    { q: "Look at those black clouds! It ___ rain.", options: ["'s going to", "will to", "goes to", "is go to"], answer: 0, explanation: "Si capisce che sta per succedere: going to." },
    { q: "Intenzione: I ___ study medicine.", options: ["'m going to", "will to", "going", "go to"], answer: 0, explanation: "Intenzione futura: be going to." },
    { q: "Previsione: I think Italy ___ the match.", options: ["will win", "will wins", "wins going", "is win"], answer: 0, explanation: "Opinione sul futuro: will + forma base." },
    { q: "Decisione presa ora: The phone is ringing. I ___ answer it!", options: ["'ll", "'m going", "answer", "'m"], answer: 0, explanation: "Decisione immediata: will ('ll)." },
    { q: "They ___ come to the party. (no)", options: ["won't", "willn't", "don't will", "not will"], answer: 0, explanation: "will not = won't." },
    { q: "Will it be sunny tomorrow? — Yes, it ___", options: ["will.", "is.", "does.", "will be."], answer: 0, explanation: "Risposta breve: Yes, it will." },
    { q: "___ you going to play tennis today?", options: ["Are", "Do", "Will", "Is"], answer: 0, explanation: "be going to: Are you going to…?" },
    T("Riscrivi alla forma negativa: She will help us.", "She won't help us.", "won't + forma base."),
    T("Scrivi la domanda: they / go to the cinema / tonight (be going to)", "Are they going to go to the cinema tonight?", "Are + soggetto + going to + forma base."),
    T("Traduci: Ti aiuto io! (offerta, con will)", "I'll help you!", "Offerta: will."),
    T("Traduci: Domani parto per Londra. (programma, present continuous)", ["I'm leaving for London tomorrow.", "Tomorrow I'm leaving for London."], "Programma: am + leaving.")
  ]);

  bank("en-confronti", "Comparativi e superlativi", "-er / more, less, as … as, the -est / the most, irregolari", "📏", [
    { q: "My brother is ___ than me.", options: ["taller", "more tall", "tallest", "the taller"], answer: 0, explanation: "Aggettivo corto: -er + than." },
    { q: "This book is ___ than that one.", options: ["more interesting", "interestinger", "most interesting", "the more interesting"], answer: 0, explanation: "Aggettivo lungo: more + than." },
    { q: "Elephants are ___ than cats.", options: ["bigger", "biger", "more big", "biggest"], answer: 0, explanation: "big → bigger (si raddoppia la g)." },
    { q: "Today is ___ than yesterday.", options: ["easier", "easyer", "more easy", "easiest"], answer: 0, explanation: "-y diventa -i: easier." },
    { q: "Your bike is as fast ___ mine.", options: ["as", "than", "like", "that"], answer: 0, explanation: "Uguaglianza: as … as." },
    { q: "This is ___ day of my life!", options: ["the best", "the better", "the goodest", "best"], answer: 0, explanation: "good → better → the best." },
    { q: "It's ___ film of the year.", options: ["the worst", "the baddest", "the worse", "worst"], answer: 0, explanation: "bad → worse → the worst." },
    { q: "She's the tallest girl ___ the class.", options: ["in", "of", "than", "at"], answer: 0, explanation: "Luogo o ambito: in." },
    { q: "It was the happiest day ___ the year.", options: ["of", "in", "than", "on"], answer: 0, explanation: "Gruppo o tempo: of." },
    T("Comparativo di: old", "older", "-er."),
    T("Comparativo di: nice", "nicer", "-e: solo -r."),
    T("Superlativo di: big", "the biggest", "Si raddoppia la g."),
    T("Superlativo di: beautiful", "the most beautiful", "Aggettivo lungo: the most."),
    T("Comparativo di: good", "better", "Irregolare."),
    T("Traduci: Milano è meno calda di Roma.", "Milan is less hot than Rome.", "less + aggettivo + than."),
    T("Traduci: La mia casa non è grande come la tua.", ["My house isn't as big as yours.", "My house is not as big as yours."], "not as … as.")
  ]);

  bank("en-modali", "Verbi modali", "can, could, must, have to, should, may / might, shall", "🚦", [
    { q: "She ___ speak three languages.", options: ["can", "cans", "can to", "is can"], answer: 0, explanation: "Una sola forma: can, poi forma base." },
    { q: "When I was five, I ___ swim.", options: ["couldn't", "can't", "don't can", "mustn't"], answer: 0, explanation: "Abilità nel passato: could / couldn't." },
    { q: "___ you open the door, please?", options: ["Can", "Do", "Must", "Shall"], answer: 0, explanation: "Richiesta: Can you…?" },
    { q: "You ___ take photos in the museum. It's forbidden.", options: ["can't", "don't have to", "should", "may"], answer: 0, explanation: "Divieto: can't." },
    { q: "Tomorrow is Sunday: I ___ get up early.", options: ["don't have to", "mustn't", "can't to", "haven't"], answer: 0, explanation: "Non è necessario: don't have to." },
    { q: "My dad ___ work on Saturdays. His boss wants it.", options: ["has to", "have to", "must to", "has"], answer: 0, explanation: "Obbligo imposto da altri; con he: has to." },
    { q: "You look tired. You ___ go to bed.", options: ["should", "shall", "can't", "had to"], answer: 0, explanation: "Consiglio: should." },
    { q: "___ we go for a pizza tonight?", options: ["Shall", "Should", "Must", "Have"], answer: 0, explanation: "Proposta: Shall we…?" },
    { q: "Take an umbrella. It ___ rain.", options: ["might", "must", "should to", "can't"], answer: 0, explanation: "Possibilità: may / might." },
    { q: "Yesterday I ___ go to the dentist.", options: ["had to", "must", "have to", "musted"], answer: 0, explanation: "Obbligo nel passato: had to." },
    T("Traduci: So suonare la chitarra.", "I can play the guitar.", "can + forma base."),
    T("Traduci: Non dovresti mangiare così tanto.", ["You shouldn't eat so much.", "You should not eat so much."], "shouldn't + forma base."),
    T("Traduci: Devo finire i compiti. (obbligo, must)", "I must finish my homework.", "must + forma base."),
    T("Scrivi la domanda: she / have to / wear a uniform", "Does she have to wear a uniform?", "have to vuole do / does nelle domande.")
  ]);

  bank("en-perfect", "Present perfect", "have / has + participio, just, already, yet, ever, never", "✅", [
    { q: "I ___ my homework. Now I can play.", options: ["have finished", "has finished", "finished have", "have finish"], answer: 0, explanation: "have + participio passato." },
    { q: "She ___ to London three times.", options: ["has been", "have been", "has be", "is been"], answer: 0, explanation: "she → has + been." },
    { q: "___ you ever eaten sushi?", options: ["Have", "Has", "Did", "Do"], answer: 0, explanation: "you → Have." },
    { q: "Has he called you? — No, he ___", options: ["hasn't.", "haven't.", "didn't.", "hasn't called."], answer: 0, explanation: "Risposta breve: No, he hasn't." },
    { q: "They haven't arrived ___. (ancora)", options: ["yet", "already", "just", "ever"], answer: 0, explanation: "yet nelle negative = ancora." },
    { q: "Have you finished ___? (già, in una domanda)", options: ["yet", "never", "just", "ago"], answer: 0, explanation: "yet nelle domande = già." },
    { q: "I've ___ seen him: he left a minute ago. (appena)", options: ["just", "yet", "ever", "never"], answer: 0, explanation: "just = appena." },
    { q: "We've ___ bought the tickets. (già, affermativa)", options: ["already", "yet", "ever", "never"], answer: 0, explanation: "already = già nelle affermative." },
    { q: "I have ___ been to Japan. (non … mai)", options: ["never", "ever", "yet", "not"], answer: 0, explanation: "never = non … mai, con verbo affermativo." },
    T("Riscrivi alla forma negativa: He has done his homework.", "He hasn't done his homework.", "has not = hasn't."),
    T("Scrivi la domanda: you / ever / visit / Rome", "Have you ever visited Rome?", "Have + soggetto + ever + participio."),
    T("Traduci: Ho appena mangiato.", "I've just eaten.", "just tra have e il participio.")
  ]);

  bank("en-passivo", "Passivo, ipotetico, indiretto", "is made / was built, if … (zero e first conditional), say / tell", "🔁", [
    { q: "English ___ in many countries.", options: ["is spoken", "speaks", "is speak", "spoken"], answer: 0, explanation: "Passivo presente: is + participio." },
    { q: "This bridge ___ in 1890.", options: ["was built", "is built", "built was", "was build"], answer: 0, explanation: "Passivo passato: was + participio." },
    { q: "The Mona Lisa was painted ___ Leonardo.", options: ["by", "from", "of", "with"], answer: 0, explanation: "Chi compie l'azione: by." },
    { q: "If you heat water to 100 °C, it ___.", options: ["boils", "will boil", "boiled", "is boil"], answer: 0, explanation: "Verità generale: zero conditional, present + present." },
    { q: "If it rains tomorrow, we ___ at home.", options: ["will stay", "stay", "stayed", "would stayed"], answer: 0, explanation: "Condizione futura probabile: first conditional, present + will." },
    { q: "If you ___ hard, you'll pass the test.", options: ["study", "will study", "studied", "studying"], answer: 0, explanation: "Dopo if: present simple." },
    { q: "Lisa said, «I'm hungry.» → Lisa said that she ___ hungry.", options: ["was", "is", "were", "has"], answer: 0, explanation: "Verbo introduttivo al passato: is → was." },
    { q: "Tom says, «I'm reading.» → Tom says that he ___ reading.", options: ["is", "was", "were", "has"], answer: 0, explanation: "Verbo introduttivo al presente: il tempo non cambia." },
    { q: "She ___ me that she needed help.", options: ["told", "said", "says to", "tell"], answer: 0, explanation: "tell + persona." },
    { q: "He ___ that he was tired.", options: ["said", "told", "told to", "said me"], answer: 0, explanation: "say senza la persona." },
    T("Volgi al passivo: People make cheese here.", "Cheese is made here.", "is + participio; chi lo fa non conta."),
    T("Discorso indiretto: Marco said, «I live in Rome.»", ["Marco said that he lived in Rome.", "Marco said he lived in Rome."], "Passato: live → lived, I → he.")
  ]);

  window.EN_IDS.push("en-quantita", "en-passato", "en-futuro", "en-confronti", "en-modali", "en-perfect", "en-passivo");
})();
