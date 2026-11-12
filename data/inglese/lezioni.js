// ============================================================
//  data/inglese/lezioni.js  (v1)
//  Ripasso generale di inglese a slide, da leggere sul telefono.
//  Le regole vengono dalle schede della prof Grossi (Grammar maps pp. 108-109,
//  170-171, 176-177; schede «Present simple» pp. 19-39; Loescher scheda 21);
//  gli esempi sono scritti da noi.
// ============================================================

window.LESSONS = window.LESSONS || {};

// riga di tabella: a sinistra la forma, a destra la traduzione o la forma contratta
const ENR = rows => `<div class="ls-calc">${rows.map(([a, b]) =>
  `<div><span style="color:#fff;font-size:.95rem;font-weight:700">${a}</span><b style="white-space:normal;text-align:right;font-size:.92rem;color:#ffd23f">${b}</b></div>`).join('')}</div>`;

// ── 1. To be e have got ──────────────────────────────────────────
window.LESSONS["en-be-have"] = {
  title: "To be e have got",
  slides: [
    { k:"Ripasso", t:"To be e have got",
      h:`<p class="ls-big">I due verbi più importanti: <b>to be</b> (essere) e <b>have got</b> (avere).</p>
         <p>Per ognuno: forma affermativa, negativa, domanda e risposte brevi.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"To be", t:"To be: affermativa",
      h:`${ENR([["I am", "I'm"], ["you are", "you're"], ["he / she / it is", "he's / she's / it's"], ["we are", "we're"], ["you are", "you're"], ["they are", "they're"]])}
         <p class="ls-note">A sinistra la forma estesa, a destra la contratta (si usa quando si parla).</p>
         <div class="ls-warn">Al plurale la forma contratta si usa solo con i pronomi: <b>We're</b> friends, ma <b>Tom and Ann are</b> friends.</div>` },
    { k:"To be", t:"To be: negativa",
      h:`${ENR([["I am not", "I'm not"], ["you are not", "you aren't"], ["he / she / it is not", "isn't"], ["we / you / they are not", "aren't"]])}
         <div class="ls-why"><b>not</b> va <b>dopo</b> il verbo: I am <b>not</b>, mai «I not am».</div>` },
    { k:"To be", t:"To be: domanda e risposte brevi",
      h:`<div class="ls-res">Is he your brother?</div>
         <p>Nella domanda il verbo va <b>prima</b> del soggetto.</p>
         ${ENR([["Yes, he is.", "sì: forma estesa"], ["No, he isn't.", "no: forma contratta"], ["Are you tired?", "Yes, I am. / No, I'm not."]])}
         <div class="ls-warn">Mai «Yes, he's.»: nella risposta breve affermativa non si contrae.</div>` },
    { k:"Attenzione", t:"Dove l'italiano usa «avere»",
      h:`<p>Per l'età e per come ti senti l'inglese usa <b>to be</b>:</p>
         ${ENR([["I'm 14.", "Ho 14 anni."], ["be hungry", "avere fame"], ["be thirsty", "avere sete"], ["be cold / hot", "avere freddo / caldo"], ["be sleepy", "avere sonno"], ["be right / wrong", "avere ragione / torto"], ["be afraid of", "avere paura di"], ["be in a hurry", "avere fretta"]])}` },
    { k:"Have got", t:"Have got: affermativa",
      h:`${ENR([["I have got", "I've got"], ["you have got", "you've got"], ["he / she / it has got", "he's got…"], ["we / you / they have got", "we've got…"]])}
         <div class="ls-warn">Con <b>he, she, it</b> si usa <b>has</b>, non have.</div>
         <p>Serve per: <b>possesso</b> (I've got a bike), <b>relazioni</b> (She's got two brothers), <b>aspetto fisico</b> (He's got blue eyes).</p>` },
    { k:"Have got", t:"Have got: negativa e domanda",
      h:`${ENR([["I haven't got a dog.", "have not got"], ["She hasn't got a phone.", "has not got"]])}
         <div class="ls-res">Have you got a pen?</div>
         ${ENR([["Yes, I have.", "No, I haven't."], ["Has he got a car?", "Yes, he has. / No, he hasn't."]])}
         <div class="ls-why">Nella domanda <b>have / has</b> va prima del soggetto. Nelle risposte brevi <b>got</b> non si mette mai.</div>` },
    { k:"Attenzione", t:"Tre significati di 's",
      h:`${ENR([["Tom's my friend.", "'s = is"], ["Tom's got a cat.", "'s = has"], ["Tom's cat is black.", "'s = genitivo sassone"]])}
         <div class="ls-why">Trucco: se dopo c'è <b>got</b>, è <b>has</b>. Se dopo c'è una cosa che appartiene a Tom, è il <b>genitivo</b>. Altrimenti è <b>is</b>.</div>` },
    { k:"Fine", t:"Ora prova tu",
      h:`<p class="ls-big">Fai il test «To be e have got»: crocette e frasi da scrivere.</p>
         <p class="ls-note">Regole: schede della prof, pp. 19-26 e mappa p. 170. Esempi nostri.</p>` }
  ]
};

// ── 2. Nomi: plurali, articoli, dimostrativi, possessivi ───────────
window.LESSONS["en-nomi"] = {
  title: "Plurali, articoli e possessivi",
  slides: [
    { k:"Ripasso", t:"Plurali, articoli e possessivi",
      h:`<p class="ls-big">Come si forma il plurale, quando si usa <b>a</b> o <b>an</b>, e come si dice «di chi è».</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Plurale", t:"Il plurale regolare: -s",
      h:`${ENR([["car", "cars"], ["book", "books"], ["boy", "boys"], ["day", "days"]])}
         <p>Quasi sempre basta aggiungere <b>-s</b>. Anche dopo vocale + y: boy → boys.</p>` },
    { k:"Plurale", t:"Quando si aggiunge -es",
      h:`<p>Se la parola finisce in <b>-s, -ss, -sh, -ch, -x, -z, -o</b>:</p>
         ${ENR([["bus", "buses"], ["class", "classes"], ["dish", "dishes"], ["watch", "watches"], ["box", "boxes"], ["tomato", "tomatoes"]])}
         <div class="ls-warn">Parole in -o di origine straniera: solo -s. <b>piano → pianos</b>, photo → photos.</div>` },
    { k:"Plurale", t:"-ies e -ves",
      h:`<p><b>Consonante + y</b>: la y diventa <b>-ies</b>.</p>
         ${ENR([["baby", "babies"], ["city", "cities"], ["country", "countries"]])}
         <p><b>-f / -fe</b>: diventa <b>-ves</b>.</p>
         ${ENR([["leaf", "leaves"], ["wife", "wives"]])}` },
    { k:"Plurale", t:"I plurali irregolari",
      h:`${ENR([["man", "men"], ["woman", "women"], ["child", "children"], ["person", "people"], ["tooth", "teeth"]])}
         <p class="ls-note">Questi si imparano a memoria.</p>` },
    { k:"Dimostrativi", t:"This, that, these, those",
      h:`${ENR([["this → these", "vicino a chi parla"], ["that → those", "lontano da chi parla"]])}
         <div class="ls-res">This box is big. → These boxes are big.</div>
         <div class="ls-why">Quando metti una frase al plurale cambiano <b>tutte</b> le parole: this → these, is → are, il nome → plurale.</div>` },
    { k:"Articoli", t:"The, a, an",
      h:`${ENR([["the", "il, lo, la, i, gli, le"], ["a + consonante", "a dog, a bottle"], ["a + h che si sente", "a hospital"], ["an + vocale", "an idea, an apple"], ["an + h muta", "an hour"]])}
         <div class="ls-why">Conta il <b>suono</b>, non la lettera: «hour» si legge «auar», quindi <b>an</b> hour.</div>` },
    { k:"Possessivi", t:"Gli aggettivi possessivi",
      h:`${ENR([["I → my", "mio"], ["you → your", "tuo"], ["he → his", "suo (di lui)"], ["she → her", "suo (di lei)"], ["it → its", "suo (cosa, animale)"], ["we → our", "nostro"], ["you → your", "vostro"], ["they → their", "loro"]])}
         <div class="ls-warn">Non si mette l'articolo: <b>my</b> book = il mio libro.</div>` },
    { k:"Possessivi", t:"His o her?",
      h:`<p>In inglese conta <b>chi possiede</b>, non la cosa posseduta.</p>
         ${ENR([["Paul and his sister", "sua sorella (di Paul)"], ["Anna and her brother", "suo fratello (di Anna)"]])}
         <div class="ls-why">In italiano «suo» va bene per tutti e due. In inglese: uomo → <b>his</b>, donna → <b>her</b>.</div>` },
    { k:"Genitivo", t:"Il genitivo sassone: 's",
      h:`<p>Per dire «di chi è» si mette prima il <b>possessore</b> con <b>'s</b>, poi la cosa:</p>
         ${ENR([["Lucy's bike", "la bici di Lucy"], ["my dad's car", "la macchina di mio papà"]])}
         <div class="ls-warn">Niente articolo davanti: <b>Lucy's bike</b>, non «the Lucy's bike».</div>` },
    { k:"Genitivo", t:"'s oppure solo '",
      h:`${ENR([["singolare: 's", "the boy's ball"], ["plurale in -s: solo '", "the boys' ball"], ["plurale irregolare: 's", "the children's room"], ["due possessori: 's sull'ultimo", "Tom and Ann's house"]])}
         <div class="ls-why">Il plurale in -s ha già la s: si aggiunge solo l'apostrofo.</div>` },
    { k:"Whose", t:"Whose? Di chi è?",
      h:`<div class="ls-res">Whose bag is this?</div>
         <p>= Di chi è questa borsa?</p>
         ${ENR([["It's Mark's.", "È di Mark."], ["It's my sister's.", "È di mia sorella."]])}` },
    { k:"Fine", t:"Ora prova tu",
      h:`<p class="ls-big">Fai i test «Plurali e articoli» e «Possessivi e genitivo sassone».</p>
         <p class="ls-note">Regole: mappe della prof pp. 108, 170-171 e schede «Plurals» e «Possessive 's». Esempi nostri.</p>` }
  ]
};

// ── 3. Present simple, avverbi, preposizioni di tempo ──────────────
window.LESSONS["en-present-simple"] = {
  title: "Present simple e avverbi di frequenza",
  slides: [
    { k:"Ripasso", t:"Present simple",
      h:`<p class="ls-big">Si usa per le <b>abitudini</b>, le <b>attività di tutti i giorni</b> e le <b>preferenze</b>.</p>
         <div class="ls-res">I play football every Saturday.</div>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Affermativa", t:"La -s della 3ª persona",
      h:`${ENR([["I / you / we / they", "play"], ["he / she / it", "plays"]])}
         <div class="ls-warn">È uguale alla forma base. Solo con <b>he, she, it</b> si aggiunge <b>-s</b>.</div>` },
    { k:"Affermativa", t:"-es e -ies",
      h:`<p>Verbi in <b>-o, -s, -ss, -sh, -ch, -x, -z</b>: <b>-es</b></p>
         ${ENR([["go", "goes"], ["kiss", "kisses"], ["finish", "finishes"], ["watch", "watches"], ["relax", "relaxes"]])}
         <p><b>Consonante + y</b>: <b>-ies</b>. Vocale + y: solo -s.</p>
         ${ENR([["study", "studies"], ["fly", "flies"], ["play", "plays"]])}
         <div class="ls-warn">have → <b>has</b></div>` },
    { k:"Negativa", t:"Negativa: don't / doesn't",
      h:`${ENR([["I / you / we / they", "don't play"], ["he / she / it", "doesn't play"]])}
         <div class="ls-warn">Con doesn't il verbo torna alla forma base: She doesn't <b>play</b>, mai «doesn't plays».</div>` },
    { k:"Domanda", t:"Domanda: Do / Does",
      h:`<div class="ls-res">Does she like pizza?</div>
         ${ENR([["Do you play tennis?", "Yes, I do. / No, I don't."], ["Does he walk to school?", "Yes, he does. / No, he doesn't."]])}
         <div class="ls-why">La -s va su <b>does</b>: il verbo resta alla forma base. Nelle risposte brevi c'è solo l'ausiliare.</div>` },
    { k:"Domanda", t:"Le question words",
      h:`${ENR([["What", "che cosa / quale"], ["Who", "chi"], ["Which", "quale (tra pochi)"], ["Where", "dove"], ["When", "quando"], ["What time", "a che ora"], ["How", "come"], ["How often", "quanto spesso"]])}
         <div class="ls-res">Where does Molly live?</div>
         <p class="ls-note">La question word va prima di do / does.</p>` },
    { k:"Attenzione", t:"Have breakfast, have lunch…",
      h:`<p>Quando <b>have</b> vuol dire «fare» un'azione si usa <b>senza got</b> e con do / does:</p>
         ${ENR([["have breakfast", "fare colazione"], ["have lunch / dinner", "pranzare / cenare"], ["have a shower", "fare la doccia"]])}
         <div class="ls-res">Do you have lunch at school?</div>` },
    { k:"Avverbi", t:"Gli avverbi di frequenza",
      h:`${ENR([["always", "sempre · 100%"], ["usually", "di solito"], ["often", "spesso"], ["sometimes", "a volte"], ["rarely / seldom / hardly ever", "raramente"], ["never", "mai · 0%"]])}` },
    { k:"Avverbi", t:"Dove si mettono",
      h:`${ENR([["prima del verbo", "I always walk to school."], ["dopo to be", "She is never late."], ["tra have e got", "I haven't always got my keys."]])}
         <div class="ls-warn">Con <b>never</b> il verbo è affermativo: I never eat fish (non «I don't never»).</div>` },
    { k:"Frequenza", t:"Once, twice, every",
      h:`${ENR([["once a week", "una volta alla settimana"], ["twice a month", "due volte al mese"], ["three times a day", "tre volte al giorno"], ["every day / week", "ogni giorno / settimana"]])}
         <p class="ls-note">Queste espressioni vanno di solito in fondo alla frase: I swim twice a week.</p>` },
    { k:"Preposizioni", t:"On, in, at",
      h:`${ENR([["ON + giorni e date", "on Monday, on 3rd May"], ["IN + mesi, anni, stagioni, parti del giorno", "in May, in 2026, in winter, in the morning"], ["AT + orari, pasti, feste", "at 8 o'clock, at lunch, at Easter"], ["AT + night, the weekend", "at night, at the weekend"]])}` },
    { k:"Fine", t:"Ora prova tu",
      h:`<p class="ls-big">Fai i test «Present simple» e «Avverbi e preposizioni».</p>
         <p class="ls-note">Regole: mappe della prof pp. 109, 176-177, schede pp. 27-31 e scheda Loescher 21. Esempi nostri.</p>` }
  ]
};

// ── 4. Present continuous, -ing, imperativo ────────────────────────
window.LESSONS["en-continuous"] = {
  title: "Present continuous e imperativo",
  slides: [
    { k:"Ripasso", t:"Present continuous e imperativo",
      h:`<p class="ls-big">Che cosa stai facendo <b>adesso</b>, i verbi in <b>-ing</b> e come si danno gli <b>ordini</b>.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Continuous", t:"Azioni in corso: to be + -ing",
      h:`${ENR([["I'm reading.", "Sto leggendo."], ["She isn't sleeping.", "Non sta dormendo."], ["Are they playing?", "Yes, they are. / No, they aren't."]])}
         <div class="ls-why">Si forma con <b>am / is / are</b> + verbo in <b>-ing</b>.</div>` },
    { k:"Ortografia", t:"Come si aggiunge -ing",
      h:`${ENR([["read", "reading"], ["-e cade: write", "writing"], ["cons.-voc.-cons. raddoppia: run", "running"], ["-ie diventa y: die", "dying"], ["-y resta: play", "playing"]])}` },
    { k:"Confronto", t:"Simple o continuous?",
      h:`${ENR([["Abitudine: She works in a shop.", "simple"], ["Adesso: She is reading a book.", "continuous"]])}
         ${ENR([["always, often, every day, twice a week", "simple"], ["now, today, at the moment", "continuous"]])}` },
    { k:"Gusti", t:"Love, like, hate + -ing",
      h:`<p>Dopo <b>love, like, enjoy, prefer, don't mind, hate</b> il verbo va in <b>-ing</b>:</p>
         ${ENR([["I love swimming.", "Adoro nuotare."], ["He doesn't mind cooking.", "Non gli dispiace cucinare."], ["They hate getting up early.", "Detestano alzarsi presto."]])}` },
    { k:"Imperativo", t:"L'imperativo",
      h:`${ENR([["Open the window!", "Apri la finestra!"], ["Don't open the window!", "Non aprire la finestra!"], ["Be careful!", "Stai attento!"]])}
         <div class="ls-warn">Niente soggetto davanti. È uguale per «tu» e per «voi». La negativa si fa con <b>Don't</b>.</div>` },
    { k:"Fine", t:"Ora prova tu",
      h:`<p class="ls-big">Fai il test «Present continuous e imperativo».</p>
         <p class="ls-note">Regole: schede della prof pp. 32-39 e mappa p. 109. Esempi nostri.</p>` }
  ]
};
