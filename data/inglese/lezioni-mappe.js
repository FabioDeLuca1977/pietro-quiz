// ============================================================
//  data/inglese/lezioni-mappe.js  (v1)
//  Gli altri argomenti delle «Mappe per ripassare» della prof Grossi
//  (Mappe di sintesi Pearson, pp. 108-118). Regole dalle mappe, esempi nostri.
//  Usa ENR di data/inglese/lezioni.js.
// ============================================================

window.LESSONS = window.LESSONS || {};

window.LESSONS["en-quantita"] = {
  title: "Pronomi, quantità e luoghi",
  slides: [
    { k:"Ripasso", t:"Pronomi, quantità e luoghi",
      h:`<p class="ls-big">Pronomi complemento, <b>mine / yours</b>, <b>some / any</b>, <b>there is / there are</b>, <b>much / many</b> e le preposizioni di luogo.</p>
         <p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Pronomi", t:"Soggetto e complemento",
      h:`${window.ENR([["I → me", "me, mi"], ["you → you", "te, ti"], ["he → him", "lui, lo, gli"], ["she → her", "lei, la, le"], ["it → it", "esso"], ["we → us", "noi, ci"], ["they → them", "loro, li, le"]])}
         <div class="ls-res">Call me! · I like them.</div>` },
    { k:"Possessivi", t:"Aggettivo o pronome?",
      h:`${window.ENR([["my → mine", "il mio"], ["your → yours", "il tuo"], ["his → his", "il suo (di lui)"], ["her → hers", "il suo (di lei)"], ["our → ours", "il nostro"], ["their → theirs", "il loro"]])}
         <div class="ls-why">L'aggettivo sta <b>davanti</b> al nome: <b>my</b> bag. Il pronome lo <b>sostituisce</b>: This bag is <b>mine</b>.</div>` },
    { k:"Nomi", t:"Numerabili e non numerabili",
      h:`${window.ENR([["numerabili: si contano", "a chair, two chairs"], ["non numerabili: solo singolare", "water, bread, milk, love"]])}
         <div class="ls-warn">Davanti ai non numerabili niente a / an e niente numeri: <b>some bread</b>, non «a bread».</div>` },
    { k:"Quantità", t:"Some e any",
      h:`${window.ENR([["some: affermative", "I've got some apples."], ["any: negative", "There isn't any milk."], ["any: domande", "Are there any eggs?"]])}
         <p class="ls-note">Significano «qualche, un po' di, dei, delle».</p>` },
    { k:"Quantità", t:"There is, there are",
      h:`${window.ENR([["there is", "c'è"], ["there are", "ci sono"], ["there isn't / aren't", "non c'è / non ci sono"], ["is there…? / are there…?", "c'è…? / ci sono…?"]])}
         <div class="ls-res">There are two cats in the garden.</div>` },
    { k:"Quantità", t:"Composti di some, any, no",
      h:`${window.ENR([["somebody, something", "affermative"], ["anybody, anything", "negative e domande"], ["nobody, nothing", "affermative (senso negativo)"]])}
         <div class="ls-res">Nobody called me. · Is anybody there?</div>` },
    { k:"Quantità", t:"Much, many, a lot of",
      h:`${window.ENR([["a lot of", "affermative, tutti i nomi"], ["much", "negative e domande, non numerabili"], ["many", "negative e domande, numerabili plurali"]])}
         ${window.ENR([["How much water?", "quanta? (non numerabili)"], ["How many books?", "quanti? (numerabili)"]])}` },
    { k:"Luogo", t:"Le preposizioni di luogo",
      h:`${window.ENR([["in", "dentro"], ["on", "su (con contatto)"], ["under", "sotto"], ["above", "sopra (senza contatto)"], ["in front of", "davanti"], ["behind", "dietro"], ["between", "tra"], ["next to", "accanto a"], ["near", "vicino a"], ["opposite", "di fronte"]])}` },
    { k:"Fine", t:"Ora prova tu",
      h:`<p class="ls-big">Fai il test «Pronomi, quantità e luoghi».</p><p class="ls-note">Mappe pp. 108, 110-111. Esempi nostri.</p>` }
  ]
};

window.LESSONS["en-passato"] = {
  title: "Il passato: past simple e past continuous",
  slides: [
    { k:"Ripasso", t:"Il passato",
      h:`<p class="ls-big"><b>Past simple</b>: azioni concluse. <b>Past continuous</b>: azioni in corso nel passato.</p><p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"To be", t:"Was e were",
      h:`${window.ENR([["I / he / she / it was", "ero, era"], ["we / you / they were", "eravamo, eravate, erano"], ["wasn't / weren't", "negativa"], ["Was he…? Were they…?", "Yes, he was. / No, they weren't."]])}` },
    { k:"Regolari", t:"Verbi regolari: -ed",
      h:`${window.ENR([["work → worked", "lavorai, ho lavorato"], ["play → played", ""], ["live → lived", "-e: solo -d"], ["study → studied", "cons. + y: -ied"], ["stop → stopped", "si raddoppia"]])}
         <div class="ls-why">Uguale per tutte le persone: I worked, he worked, they worked (mappa p. 112).</div>
         <p class="ls-note">Le regole di scrittura (lived, studied, stopped) non sono nella mappa: le abbiamo aggiunte noi.</p>` },
    { k:"Irregolari", t:"Verbi irregolari",
      h:`${window.ENR([["take → took", ""], ["go → went", ""], ["have → had", ""], ["see → saw", ""], ["eat → ate", ""], ["buy → bought", ""], ["write → wrote", ""], ["come → came", ""]])}
         <p class="ls-note">Nella mappa c'è take → took; gli altri sono irregolari molto usati, da studiare sulla tabella del libro.</p>` },
    { k:"Negativa e domanda", t:"Didn't e Did",
      h:`${window.ENR([["I didn't go.", "didn't + forma base"], ["Did you see it?", "Yes, I did. / No, I didn't."]])}
         <div class="ls-warn">Con didn't e did il verbo torna alla forma base: Did you <b>go</b>? (mai «did you went»).</div>` },
    { k:"Continuous", t:"Past continuous",
      h:`${window.ENR([["I was reading.", "Stavo leggendo."], ["They weren't sleeping.", "Non stavano dormendo."], ["Were you watching TV?", "Yes, I was. / No, I wasn't."]])}
         <div class="ls-why">was / were + verbo in <b>-ing</b>.</div>` },
    { k:"Tempo", t:"Le parole del passato",
      h:`${window.ENR([["yesterday", "ieri"], ["last week / year", "la settimana / l'anno scorso"], ["two days ago", "due giorni fa (aggiunto da noi)"]])}
         <p class="ls-note">Vanno di solito in fondo alla frase: I saw Carla last week.</p>` },
    { k:"Fine", t:"Ora prova tu", h:`<p class="ls-big">Fai il test «Il passato».</p><p class="ls-note">Mappa p. 112 e scheda Loescher 21. Esempi nostri.</p>` }
  ]
};

window.LESSONS["en-futuro"] = {
  title: "Il futuro",
  slides: [
    { k:"Ripasso", t:"Tre modi di parlare del futuro",
      h:`${window.ENR([["present continuous", "programmi già fissati"], ["be going to", "intenzioni, cose che stanno per succedere"], ["will", "previsioni, opinioni, decisioni prese ora, offerte"]])}<p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Programmi", t:"Present continuous",
      h:`<div class="ls-res">I'm meeting Luca tomorrow at five.</div>
         <p>Un appuntamento già deciso, con giorno e ora.</p>
         ${window.ENR([["They aren't leaving today.", "negativa"], ["Are you coming to the party?", "domanda"]])}` },
    { k:"Intenzioni", t:"Be going to",
      h:`${window.ENR([["I'm going to study tonight.", "intenzione"], ["Look at the clouds! It's going to rain.", "si capisce che sta per succedere"], ["He isn't going to come.", "negativa"], ["Are you going to play?", "domanda"]])}` },
    { k:"Will", t:"Will e won't",
      h:`${window.ENR([["You'll pass the test.", "previsione / opinione"], ["I'll help you!", "offerta, decisione presa ora"], ["They won't win.", "won't = will not"], ["Will it be cold?", "Yes, it will. / No, it won't."]])}
         <div class="ls-why">will + forma base, uguale per tutte le persone.</div>` },
    { k:"Fine", t:"Ora prova tu", h:`<p class="ls-big">Fai il test «Il futuro».</p><p class="ls-note">Mappa p. 113. Esempi nostri.</p>` }
  ]
};

window.LESSONS["en-confronti"] = {
  title: "Comparativi e superlativi",
  slides: [
    { k:"Ripasso", t:"Più, meno, tanto quanto, il più",
      h:`<p class="ls-big">Come si confrontano due cose e come si dice «il più…».</p><p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Comparativo", t:"Più … di",
      h:`${window.ENR([["aggettivi corti: -er + than", "older than, bigger than, easier than"], ["aggettivi lunghi: more + than", "more interesting than"]])}
         <div class="ls-res">Rome is bigger than Florence.</div>` },
    { k:"Comparativo", t:"Meno e tanto quanto",
      h:`${window.ENR([["less + agg. + than", "meno … di"], ["as + agg. + as", "tanto … quanto"], ["not as + agg. + as", "non tanto … quanto"]])}
         <div class="ls-res">My room is as big as yours.</div>` },
    { k:"Superlativo", t:"Il più …",
      h:`${window.ENR([["the + -est", "the oldest, the biggest, the easiest"], ["the most + aggettivo", "the most beautiful"]])}
         ${window.ENR([["+ in (luogo, ambito)", "the tallest boy in the class"], ["+ of (gruppo, tempo)", "the best day of the year"]])}` },
    { k:"Irregolari", t:"Gli irregolari",
      h:`${window.ENR([["good / well → better", "→ the best"], ["bad / badly → worse", "→ the worst"], ["far → farther / further", "→ the farthest / furthest"]])}
         <p class="ls-note">Nella mappa ci sono gli avverbi well e badly; per gli aggettivi good e bad le forme sono le stesse.</p>` },
    { k:"Ortografia", t:"Come si aggiunge -er / -est",
      h:`${window.ENR([["nice → nicer → the nicest", "-e: solo -r / -st"], ["big → bigger → the biggest", "si raddoppia"], ["easy → easier → the easiest", "-y diventa -i"]])}` },
    { k:"Fine", t:"Ora prova tu", h:`<p class="ls-big">Fai il test «Comparativi e superlativi».</p><p class="ls-note">Mappa p. 114. Esempi nostri.</p>` }
  ]
};

window.LESSONS["en-modali"] = {
  title: "I verbi modali",
  slides: [
    { k:"Ripasso", t:"I verbi modali",
      h:`<div class="ls-why">Una sola forma per tutte le persone, poi il verbo alla <b>forma base</b>, niente do / does nelle domande e nelle negative. Fa eccezione <b>have to</b>.</div>
         <div class="ls-res">She can swim. · Can she swim?</div><p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Can / could", t:"Saper fare e chiedere",
      h:`${window.ENR([["can / can't", "so / posso (presente)"], ["Can you open the window?", "richiesta"], ["You can't take photos here.", "divieto"], ["could / couldn't", "sapevo / potevo (passato)"]])}` },
    { k:"Obbligo", t:"Must e have to",
      h:`${window.ENR([["must", "devo (obbligo, comando)"], ["have to / has to", "devo (lo impongono le circostanze)"], ["don't / doesn't have to", "non è necessario"], ["had to", "dovevo, ho dovuto"]])}
         <div class="ls-warn"><b>mustn't</b> = non devi (divieto; nella mappa c'è solo il nome, la spiegazione è nostra). <b>don't have to</b> = non sei obbligato.</div>` },
    { k:"Consigli", t:"Should, shall, may / might",
      h:`${window.ENR([["should / shouldn't", "dovresti (consiglio)"], ["Shall we go?", "proposta, offerta"], ["may / might", "può darsi che (possibilità)"]])}
         <div class="ls-res">You should sleep more.</div>` },
    { k:"Fine", t:"Ora prova tu", h:`<p class="ls-big">Fai il test «Verbi modali».</p><p class="ls-note">Mappa p. 115. Esempi nostri.</p>` }
  ]
};

window.LESSONS["en-perfect"] = {
  title: "Present perfect",
  slides: [
    { k:"Ripasso", t:"Present perfect",
      h:`<div class="ls-res">I have finished my homework.</div>
         <p>have / has + <b>participio passato</b> (regolari: -ed; irregolari: terza colonna).</p><p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Uso", t:"Quando si usa",
      h:`${window.ENR([["effetto nel presente", "I've lost my keys (e non le ho)."], ["esperienze, senza dire quando", "She has visited London."], ["azione iniziata nel passato che continua ancora", "We have lived here since 2020."]])}` },
    { k:"Forme", t:"Negativa e domanda",
      h:`${window.ENR([["He hasn't called.", "has not"], ["Have you done it?", "Yes, I have. / No, I haven't."]])}
         ${window.ENR([["work → worked", "regolare (mappa)"], ["do → done", "irregolare (mappa)"], ["be → been", ""], ["see → seen", ""]])}
         <p class="ls-note">Nella mappa ci sono worked e done; been e seen li abbiamo aggiunti noi.</p>` },
    { k:"Avverbi", t:"Just, already, yet, ever, never",
      h:`${window.ENR([["just", "appena"], ["already", "già"], ["yet (domande)", "già"], ["yet (negative)", "ancora"], ["ever (domande)", "mai"], ["never", "non … mai"]])}
         <div class="ls-res">Have you ever been to Paris?</div>
         <p class="ls-note">Nella mappa gli esempi di yet sono scambiati: «They haven't arrived yet» = non sono ancora arrivati (negativa), «Have you finished yet?» = hai già finito? (domanda).</p>` },
    { k:"Fine", t:"Ora prova tu", h:`<p class="ls-big">Fai il test «Present perfect».</p><p class="ls-note">Mappa p. 116. Esempi nostri.</p>` }
  ]
};

window.LESSONS["en-passivo"] = {
  title: "Passivo, periodo ipotetico, discorso indiretto",
  slides: [
    { k:"Ripasso", t:"Tre argomenti più avanzati",
      h:`<p class="ls-big">La forma <b>passiva</b>, il periodo <b>ipotetico</b> di tipo 0 e 1, il discorso <b>indiretto</b>.</p><p class="ls-hint">Scorri verso l'alto ↑</p>` },
    { k:"Passivo", t:"La forma passiva",
      h:`${window.ENR([["attiva: Leonardo painted the Mona Lisa.", "conta chi agisce"], ["passiva: The Mona Lisa was painted by Leonardo.", "conta l'azione"]])}
         ${window.ENR([["presente: is / are + participio", "Pizza is made here."], ["passato: was / were + participio", "It was built in 1900."]])}` },
    { k:"Ipotetico", t:"Zero e first conditional",
      h:`${window.ENR([["Zero: If + present, present", "If you heat ice, it melts."], ["First: If + present, will", "If it's sunny, we'll go to the beach."]])}
         <div class="ls-why">Zero: verità generali e regole. First: condizione futura probabile. Se la frase con <b>if</b> va in fondo, niente virgola.</div>` },
    { k:"Indiretto", t:"Discorso diretto e indiretto",
      h:`${window.ENR([["She says, «I'm tired.»", "diretto"], ["She says (that) she's tired.", "verbo al presente: il tempo non cambia"], ["She said (that) she was tired.", "verbo al passato: il tempo va indietro"]])}
         ${window.ENR([["present simple", "→ past simple"], ["present continuous", "→ past continuous"]])}` },
    { k:"Indiretto", t:"Say o tell?",
      h:`${window.ENR([["say", "senza dire a chi: He said (that)…"], ["say to + persona", "He said to me…"], ["tell + persona", "He told me (that)…"]])}
         <p class="ls-note">Cambiano anche pronomi, possessivi, here → there, today → that day.</p>` },
    { k:"Fine", t:"Ora prova tu", h:`<p class="ls-big">Fai il test «Passivo, ipotetico, indiretto».</p><p class="ls-note">Mappe pp. 117-118. Esempi nostri.</p>` }
  ]
};
