// ============================================================
//  data/inglese/reading.js  (v1)
//  Reading comprehension per il test del 13 novembre (prof Grossi).
//  Tre testi brevi scritti da noi, livello A1-A2, con le strutture fatte
//  in classe (to be, have got, present simple, avverbi di frequenza,
//  possessivi). Il primo riprende il tema della lezione del 30 ottobre
//  («superstitions in the UK»): solo superstizioni britanniche molto note.
//  Ogni domanda ha «ev»: la frase del testo da cui si ricava la risposta.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

(function () {
  const { T } = window.EN_HELP;
  const TF = ["True", "False", "The text doesn't say"];
  const R = (id, title, description, icon, reading, questions) => {
    window.QUIZ_BANK[id] = { id, subject: "inglese", type: "reading", title, description, icon, version: 1, timePerQuestion: 0, ordered: true, reading, questions };
  };

  R("en-read-1", "Reading 1 · Superstitions in the UK", "Un testo sulle superstizioni britanniche, poi 10 domande", "🍀", {
    photo: "Leggi il testo con calma, poi rispondi. Durante le domande puoi riaprirlo con il tasto 📄.",
    paras: [
      "<b>Superstitions in the UK</b>",
      "A superstition is a belief that some things bring good luck or bad luck. British people are often very practical, but a lot of them have got some superstitions.",
      "Many people in the UK never walk under a ladder. They think it brings bad luck. Breaking a mirror is a big problem too: people say it brings seven years of bad luck!",
      "Friday the 13th is an unlucky day for many British people. Some of them don't travel or start new things on that day.",
      "When people talk about something good in the future, they often say «touch wood» and they touch a table or a door made of wood. They don't want to lose their good luck.",
      "Some houses have got a horseshoe on the door. It is a symbol of good luck.",
      "And black cats? In many countries a black cat brings bad luck, but in Britain a lot of people think it is a lucky animal."
    ]
  }, [
    { q: "What is a superstition?", options: ["A belief that some things bring good or bad luck", "A British holiday", "A kind of animal", "A day of the week"], answer: 0,
      ev: "A superstition is a belief that some things bring good luck or bad luck.", explanation: "Prima frase del secondo paragrafo." },
    { q: "Walking under a ladder brings good luck.", options: TF, answer: 1,
      ev: "Many people in the UK never walk under a ladder. They think it brings bad luck.", explanation: "Porta sfortuna: bad luck." },
    T("How many years of bad luck does a broken mirror bring? (scrivi il numero in lettere)", ["seven", "seven years"],
      "«it brings seven years of bad luck».", { ev: "people say it brings seven years of bad luck!" }),
    { q: "Why do some people stay at home on Friday the 13th?", options: ["Because it is an unlucky day", "Because it is a holiday", "Because it is cold", "Because the shops are closed"], answer: 0,
      ev: "Friday the 13th is an unlucky day for many British people.", explanation: "unlucky = sfortunato." },
    { q: "What do people touch when they say «touch wood»?", options: ["Something made of wood, like a table or a door", "A black cat", "A mirror", "A horseshoe"], answer: 0,
      ev: "they touch a table or a door made of wood", explanation: "wood = legno." },
    { q: "People say «touch wood» because…", options: ["they don't want to lose their good luck", "they want to buy a table", "they are angry", "they are cold"], answer: 0,
      ev: "They don't want to lose their good luck.", explanation: "lose = perdere." },
    T("Where do some people put a horseshoe? On the …", ["door", "the door"], "«a horseshoe on the door».", { ev: "Some houses have got a horseshoe on the door." }),
    { q: "In Britain a lot of people think black cats are lucky.", options: TF, answer: 0,
      ev: "in Britain a lot of people think it is a lucky animal.", explanation: "lucky animal = un animale che porta fortuna." },
    { q: "British people never travel.", options: TF, answer: 1,
      ev: "Some of them don't travel or start new things on that day.", explanation: "Alcuni non viaggiano solo il venerdì 13." },
    { q: "Quale parola del testo vuol dire «specchio»?", options: ["mirror", "ladder", "horseshoe", "wood"], answer: 0,
      ev: "Breaking a mirror is a big problem too", explanation: "ladder = scala, horseshoe = ferro di cavallo, wood = legno." }
  ]);

  R("en-read-2", "Reading 2 · Emma's family", "Emma presenta la sua famiglia, poi 10 domande", "👨‍👩‍👧", {
    photo: "Leggi il testo con calma, poi rispondi. Durante le domande puoi riaprirlo con il tasto 📄.",
    paras: [
      "<b>Emma's family</b>",
      "Hi! My name's Emma and I'm thirteen. I live in Bristol with my family. There are five people in my family: my parents, my two brothers and me.",
      "My dad's name is Paul. He's tall and he's got short black hair and glasses. He's a doctor and he works in a big hospital.",
      "My mum, Sarah, is a teacher. She's got long red hair and green eyes, like me. Her favourite hobby is cooking.",
      "My brothers are twins. Their names are Jack and Leo and they're eight. They've got blue eyes and curly hair. They aren't quiet!",
      "We've also got a dog. His name is Max and he's very friendly. Max's bed is in the kitchen, but he usually sleeps in my brothers' room."
    ]
  }, [
    T("How old is Emma? (scrivi il numero in lettere)", ["thirteen", "thirteen years old"], "«I'm thirteen».", { ev: "My name's Emma and I'm thirteen." }),
    { q: "How many people are there in Emma's family?", options: ["five", "four", "six", "three"], answer: 0,
      ev: "There are five people in my family", explanation: "Genitori, due fratelli ed Emma." },
    { q: "What does Emma's dad look like?", options: ["He's tall with short black hair and glasses", "He's short with long red hair", "He's got blue eyes and curly hair", "He's got a beard"], answer: 0,
      ev: "He's tall and he's got short black hair and glasses.", explanation: "look like = che aspetto ha." },
    T("What is Emma's dad's job? He's a …", ["doctor", "a doctor"], "«He's a doctor».", { ev: "He's a doctor and he works in a big hospital." }),
    { q: "Emma has got green eyes.", options: TF, answer: 0,
      ev: "She's got long red hair and green eyes, like me.", explanation: "«like me» = come me: anche Emma ha gli occhi verdi." },
    { q: "What is Sarah's favourite hobby?", options: ["cooking", "reading", "football", "music"], answer: 0,
      ev: "Her favourite hobby is cooking.", explanation: "Her = di lei, della mamma." },
    { q: "Jack and Leo are…", options: ["Emma's twin brothers", "Emma's cousins", "Emma's friends", "Emma's dogs"], answer: 0,
      ev: "My brothers are twins. Their names are Jack and Leo", explanation: "twins = gemelli." },
    { q: "The twins are quiet.", options: TF, answer: 1,
      ev: "They aren't quiet!", explanation: "aren't = non sono." },
    T("What is the dog's name?", "Max", "«His name is Max».", { ev: "His name is Max and he's very friendly." }),
    { q: "Where does Max usually sleep?", options: ["in the twins' room", "in the kitchen", "in Emma's room", "in the garden"], answer: 0,
      ev: "he usually sleeps in my brothers' room.", explanation: "brothers' room = la camera dei fratelli (genitivo plurale). Il suo letto è in cucina, ma di solito dorme lì." }
  ]);

  R("en-read-3", "Reading 3 · Tom's week", "La settimana di Tom tra scuola e sport, poi 10 domande", "📆", {
    photo: "Leggi il testo con calma, poi rispondi. Durante le domande puoi riaprirlo con il tasto 📄.",
    paras: [
      "<b>Tom's week</b>",
      "Tom is fourteen and he lives in a small town near London. On school days he always gets up at seven o'clock. He has breakfast with his sister and then he goes to school by bus.",
      "School starts at a quarter to nine and finishes at half past three. Tom's favourite subject is science, but he doesn't like history.",
      "After school Tom plays basketball twice a week, on Tuesdays and Thursdays. On the other days he usually does his homework in the afternoon.",
      "In the evening the family has dinner at seven. Tom sometimes watches TV, but he never plays video games on school days. His parents don't want it.",
      "At the weekend Tom often visits his grandparents. They live in the country and they've got two horses."
    ]
  }, [
    { q: "What time does Tom get up on school days?", options: ["at seven o'clock", "at half past three", "at a quarter to nine", "at eight o'clock"], answer: 0,
      ev: "On school days he always gets up at seven o'clock.", explanation: "always = sempre." },
    { q: "How does Tom go to school?", options: ["by bus", "by car", "on foot", "by bike"], answer: 0,
      ev: "then he goes to school by bus.", explanation: "by bus = in autobus." },
    { q: "Tom likes history.", options: TF, answer: 1,
      ev: "Tom's favourite subject is science, but he doesn't like history.", explanation: "doesn't like = non gli piace." },
    T("What is Tom's favourite subject?", "science", "«Tom's favourite subject is science».", { ev: "Tom's favourite subject is science" }),
    T("How often does Tom play basketball?", ["twice a week", "two times a week"], "«twice a week».", { ev: "After school Tom plays basketball twice a week, on Tuesdays and Thursdays." }),
    { q: "On which days does Tom play basketball?", options: ["on Tuesdays and Thursdays", "on Mondays and Fridays", "at the weekend", "every day"], answer: 0,
      ev: "on Tuesdays and Thursdays", explanation: "on + giorni." },
    { q: "Tom plays video games on school days.", options: TF, answer: 1,
      ev: "he never plays video games on school days.", explanation: "never = mai." },
    { q: "Why doesn't Tom play video games on school days?", options: ["Because his parents don't want it", "Because he hasn't got a computer", "Because he plays basketball", "Because he is tired"], answer: 0,
      ev: "His parents don't want it.", explanation: "Ultima frase del paragrafo." },
    T("What time does the family have dinner? At …", ["seven", "seven o'clock", "7", "7 o'clock"], "«at seven».", { ev: "In the evening the family has dinner at seven." }),
    { q: "What animals have Tom's grandparents got?", options: ["two horses", "two dogs", "a cat", "two cows"], answer: 0,
      ev: "they've got two horses.", explanation: "horses = cavalli." }
  ]);

  window.EN_READ_IDS = ["en-read-1", "en-read-2", "en-read-3"];
})();
