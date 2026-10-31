# ⚡ QuizMaster — Pietro
**Schema v1.3 — liceo** · i test delle medie sono stati rimossi (restano nella cronologia git)

---

## 📁 Struttura repository

```
pietro-quiz/
├── index.html                   ← motore  (modificare solo per nuove funzioni)
├── papa.html                    ← pagina di papà: tentativi di Pietro (dal foglio Google)
├── GUIDA-PAPA.md                ← come collegare il foglio Google (una volta sola)
├── google-apps-script/Codice.gs ← programma da incollare nel foglio Google
├── README.md
└── data/
    ├── registry.js              ← unica fonte di verità (materie + test)
    ├── config.js                ← nome studente, indirizzo del foglio Google, token
    └── scienze/
        ├── misure-cap1.js            ✅ Cap. 1 Grandezze e misure (teoria)
        ├── misure-cap1-problemi.js   ✅ Cap. 1 problemi (risposta da scrivere)
        ├── materia-cap2.js           ✅ Cap. 2 Trasformazioni fisiche (teoria)
        └── materia-cap2-problemi.js  ✅ Cap. 2 concentrazioni (risposta da scrivere)
    └── fisica/
        ├── matematica-per-cominciare.js ✅ Unità 0 (risposta da scrivere)
        ├── grandezze-cap1-problemi.js   ✅ Cap. 1 (risposta da scrivere)
        ├── grandezze-teoria.js          ✅ Regole (risposta a parole)
        ├── fisica-definizioni.js        ✅ definizioni da ripetere a memoria
        └── fisica-giochi.js             ✅ ordina e classifica

Materie già presenti nel menu, ancora senza test: storia, tecnologia,
musica, italiano, inglese, spagnolo.
```

---

## 🚀 Setup GitHub Pages (una tantum)

Vedi sezione **GitHub Desktop** più in basso.

URL finale: `https://FabioDeLuca1977.github.io/pietro-quiz`

---

## 📏 STANDARD 1 — Naming dei file

| Regola | Corretto | Sbagliato |
|---|---|---|
| Sempre kebab-case | `prima-guerra.js` | `PrimaGuerra.js` |
| Solo minuscole | `analisi-logica.js` | `Analisi_Logica.js` |
| Parole separate da `-` | `promessi-sposi.js` | `promessisposi.js` |
| Niente spazi o underscore | `apparato-digerente.js` | `apparato_digerente.js` |

L'`id` dentro il file deve essere identico al nome del file senza `.js`:
```js
// file: prima-guerra.js
window.QUIZ_BANK["prima-guerra"] = { id: "prima-guerra", ... }
//                 ^^^^^^^^^^^^             ^^^^^^^^^^^^
//                 uguali — sempre
```

---

## 📏 STANDARD 2 — Schema fisso delle domande

### Schema completo del file test

```js
// ── INTESTAZIONE OBBLIGATORIA ─────────────────────
window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["nome-test"] = {

  // METADATI (tutti obbligatori)
  id:              "nome-test",       // = nome file senza .js
  subject:         "storia",          // = subject in registry.js
  title:           "Titolo esteso",   // mostrato nell'interfaccia
  description:     "Breve didascalia",
  icon:            "🏛️",
  version:         1,                 // incrementa solo se riscrivi >50% domande
  timePerQuestion: 20,                // secondi per domanda (default 20)

  // DOMANDE
  questions: [ ... ]
};
```

### Schema singola domanda

```js
{
  q:           "Testo della domanda?",
  options:     ["Opzione A", "Opzione B", "Opzione C", "Opzione D"],
  answer:      1,        // indice risposta corretta: 0=A  1=B  2=C  3=D
  explanation: "Spiegazione mostrata subito dopo la risposta."
}
```

### Domanda con risposta da scrivere (`type: "numeric"`) — novità v1.3

```js
{
  type:        "numeric",
  q:           "Qual è la massa di 2,50 cm³ di piombo (d = 11,35 g/cm³)?",
  answer:      28.4,          // numero (punto decimale, anche 2.5e-4)
  unit:        "g",           // mostrata accanto alla casella (facoltativa)
  answerText:  "28,4 g",      // come mostrare la soluzione (facoltativo)
  tolerance:   0.02,          // tolleranza relativa: 0.02 = ±2% (default); 0 = valore esatto
  explanation: "m = d × V = 11,35 × 2,50 = 28,375 → 28,4 g"
}
```

Lo studente scrive il numero con la virgola; accetta anche `2,5x10^-4`, `2,5e-4`
e `2,5 × 10⁻⁴`. Si possono mescolare domande a crocette e da scrivere nello
stesso test. Per gli arrotondamenti con le cifre significative meglio la
scelta multipla: con la tolleranza un risultato non arrotondato verrebbe accettato.

### Domanda con risposta a frazione (`type: "fraction"`) — novità v1.4

```js
{
  type:        "fraction",
  q:           "Calcola 5/6 + 1/4.",
  answer:      "13/12",       // stringa "num/den" oppure intero ("-32")
  answerText:  "13/12",       // come mostrare la soluzione (facoltativo)
  form:        "reduced",     // "reduced" (default): valore giusto E ridotta ai minimi termini
                              // "exact": stessa forma (es. «riduci al denominatore 30» → "55/30")
                              // "any": basta il valore
  explanation: "mcm(6; 4) = 12: 10/12 + 3/12 = 13/12"
}
```

Lo studente scrive `13/12`, `-5/12`, `−(5/12)`, `5/-12` o un intero. Se il valore
è giusto ma la frazione non è ridotta, la risposta è segnata sbagliata con l'avviso
«va ridotta ai minimi termini».

Tutti i testi (domande, opzioni, spiegazioni) sono testo semplice: il motore li
mostra così come sono, quindi `<` e `>` si possono usare liberamente.

### Risposte a parole e forma del numero — novità v1.7

```js
{ type:"text", q:"Come si chiama l'unità della massa nel SI?", accept:["kilogrammo","chilogrammo","kg"], answerText:"kilogrammo", explanation:"… (p. 25)" }
{ type:"numeric", q:"Scrivi 7450 in notazione scientifica.", answer:7450, sci:true, tolerance:0.0001, answerText:"7,45·10³", explanation:"…" }
{ type:"numeric", q:"Scrivi 0,2·10⁻³ in forma decimale.", answer:0.0002, plain:true, tolerance:0.0001, explanation:"…" }
```
`accept` elenca le risposte valide: maiuscole, accenti e punteggiatura non contano. `sci` vuole il coefficiente tra 1 e 10 per una
potenza di 10; `plain` vuole il numero per esteso. Se il valore è giusto ma la forma no, la risposta è sbagliata con l'avviso.

### Definizioni a memoria (`type:"define"`) — novità v1.8

```js
{ type:"define", q:"Che cos'è la densità?", keys:[["rapporto"],["massa"],["volume"]], answerText:"Il rapporto tra massa e volume.", explanation:"p. 34." }
```
`keys` contiene gruppi di parole o radici: serve almeno una voce per gruppo; una lettera sbagliata è tollerata nelle parole lunghe.
Il punteggio vale al primo tentativo. Se manca un concetto si legge la definizione e la si riscrive a memoria finché è completa.
Il controllo guarda i concetti, non l'ordine delle parole.

### Giochi: «metti in ordine» (`type: "order"`) e «classifica» (`type: "classify"`) — novità v1.5

```js
{ type:"order", q:"Metti in ordine…", items:["primo","secondo","terzo","quarto"],   // nell'ordine GIUSTO: l'app li mescola
  explanation:"… (p. 55)" }

{ type:"classify", q:"Assiri o Persiani?", categories:["Assiri","Persiani"],
  items:[ {t:"Deportazioni di massa", c:0}, {t:"Satrapie", c:1} ],                  // c = indice della categoria giusta
  explanation:"… (pp. 51-56)" }
```

Sul telefono: per «ordina» si toccano gli elementi dal primo all'ultimo (un tocco su uno già scelto lo rimette giù);
per «classifica» si sceglie la categoria di ogni elemento. In modalità Sfida i giochi hanno almeno 60 secondi.

### Cifre significative (`sig`) e problemi a passi (`type: "steps"`) — novità v1.6

```js
{ type:"numeric", q:"…densità…", answer:0.862, unit:"g/cm³", answerText:"0,862 g/cm³", sig:3, explanation:"…" }
```
Con `sig` la risposta è giusta solo se, arrotondata a `sig` cifre, coincide con `answer` **e** lo studente ha scritto
proprio `sig` cifre significative (gli zeri finali di un intero, es. 2750, sono ambigui e non penalizzati).
Se il valore è giusto ma le cifre no: «Il valore è giusto, ma va scritto con 3 cifre significative».

```js
{ type:"steps", q:"0,250 L di acqua a 23,0 °C ricevono 50 450 J…",
  steps:[ {q:"Massa dell'acqua?", answer:250, unit:"g", answerText:"250 g", tolerance:0.001, explanation:"…"},
          {q:"ΔT?", answer:48.3, unit:"°C", answerText:"48,3 °C", tolerance:0.005, explanation:"…"},
          {q:"Temperatura finale?", answer:71.3, unit:"°C", answerText:"71,3 °C", sig:3, explanation:"…"} ],
  explanation:"… (p. 27)" }
```
I passi compaiono uno alla volta; dopo ogni passo si vede se è giusto e, se no, il valore corretto con cui proseguire.
Punti in proporzione ai passi giusti. Per i passi con risultato esatto usare una tolleranza stretta (0.001).

> **Regola d'oro per i distrattori:** ogni risposta sbagliata deve essere
> plausibile per chi ha studiato poco, ma chiaramente errata per chi ha capito.

### Proporzione domande (12–15 per test)

| Livello | % | Descrizione |
|---|---|---|
| **Base** | 40% | Date, sigle, personaggi, definizioni |
| **Medio** | 40% | Causa-effetto, vero/falso mascherato, completamento logico |
| **Avanzato** | 20% | Sequenze cronologiche, inferenze, "quale affermazione è corretta?" |

---

## ➕ Aggiungere un test — checklist

```
□ 1. Crea  data/<materia>/<id>.js          (copia da scienze/misure-cap1.js)
□ 2. Modifica id, subject, title, description, icon, version, questions
□ 3. In registry.js  →  aggiungi oggetto test con enabled: true
□ 4. In index.html    →  aggiungi <script src="data/<materia>/<id>.js">
□ 5. git add . && git commit -m "Storia: aggiunto <titolo>" && git push
```

---

## ➕ Aggiungere una materia — checklist

```
□ 1. Crea cartella  data/<materia>/
□ 2. Crea il primo test  data/<materia>/<id>.js
□ 3. In registry.js  →  aggiungi oggetto materia con subject, subjectIcon, subjectColor, tests[]
□ 4. In index.html    →  aggiungi <script src="data/<materia>/<id>.js">
```

---

## 🎬 Ripasso video

`data/ripasso.js` elenca i video per materia; i file stanno in `video/<materia>/`. Formato verticale 1080×1920, mp4.
Ogni voce ha `id`, `title`, `file`, `dur` (secondi), `pages` e, se esiste, `test` (il test proposto a fine video).
Il video risulta visto oltre il 90% della durata: lo stato resta sul telefono (`pietroquiz:seen`).

---

## 💾 Chiavi localStorage

Tutte le chiavi iniziano con `pietroquiz:` — nessun conflitto con altri siti.

| Chiave | Contenuto |
|---|---|
| `pietroquiz:<mat>:<id>:v<n>:best` | Record personale per versione del test |
| `pietroquiz:global:history` | Array ultimi 80 quiz completati |

**Esempio concreto:**
```
pietroquiz:scienze:misure-cap1:v1:best   → "87"
pietroquiz:scienze:misure-cap1:v2:best   → "94"   (dopo aver aggiornato le domande)
pietroquiz:global:history            → [{...}, {...}, ...]
```

Se aggiorni sostanzialmente le domande di un test → incrementa `version` →
il best score riparte da zero per quella versione, quello vecchio resta intatto.

---

## 💻 Guida GitHub Desktop — setup iniziale

### 1. Scarica e installa
→ https://desktop.github.com

### 2. Accedi con il tuo account GitHub
File → Options → Accounts → Sign in to GitHub.com

### 3. Aggiungi il progetto locale
File → Add local repository → scegli la cartella `pietro-quiz` sul tuo computer.
Se dice "cartella non è un repository": clicca **"create a repository"** — usa queste impostazioni:
- Name: `pietro-quiz`
- Local path: la cartella dove hai salvato i file
- ✅ Keep this code private: **NO** (deve essere pubblico per GitHub Pages)

### 4. Pubblica su GitHub
Repository → Push origin  (o tasto "Publish repository" la prima volta)
- Name: `pietro-quiz`
- ☐ Keep this code private: **lascialo deselezionato** ← importante

### 5. Attiva GitHub Pages
Sul browser: github.com → repo `pietro-quiz` → Settings → Pages
- Source: Deploy from a branch
- Branch: **main** / **(root)**
- Save

Dopo ~60 secondi appare il link verde:
`https://FabioDeLuca1977.github.io/pietro-quiz` ✅

---

## 🔄 Workflow aggiornamento contenuti

Ogni volta che aggiungi o modifichi un test:

**Via GitHub Desktop:**
1. Modifica i file nella cartella locale
2. GitHub Desktop mostra le modifiche automaticamente
3. Scrivi un messaggio nel campo in basso a sinistra (es. `Storia: Prima Guerra Mondiale`)
4. Clicca **Commit to main**
5. Clicca **Push origin**
6. Sito aggiornato in ~30 secondi

**Via browser (per modifiche piccole, es. aggiungere domande):**
1. Vai su github.com → repo → file da modificare
2. Clicca l'icona matita ✏️
3. Modifica → **Commit changes**

---

## 🎮 Funzionalità motore (non modificare)

| Feature | Dettaglio |
|---|---|
| Timer | Configurabile per test (`timePerQuestion`) |
| Punteggio | 150 pt (≤5s) · 100 pt (≤12s) · 50 pt (resto) |
| Best score | Per versione test, persistente in localStorage |
| Test disabilitati | `enabled: false` → card grigia "prossimamente" |
| Rimescolamento | Domande e opzioni random ogni sessione |
| Feedback | Risposta immediata + spiegazione |
| Risposta da scrivere | `type:"numeric"`, con tolleranza e unità |
| Risposta a frazione | `type:"fraction"`, controlla valore e riduzione |
| Cifre significative | campo `sig` nelle risposte numeriche (18 problemi di scienze) |
| Problemi a passi | `type:"steps"` (19 problemi: calore, soluzioni, proporzioni, IVA, errori) |
| Frazioni impilate | In matematica `13/12` nei testi diventa una frazione vera; anteprima mentre si scrive |
| Home (stile social) | Storie delle materie in alto, «Per te» con i quiz mai fatti o più deboli, serie di giorni 🔥, «Riprendi» |
| Quiz come storie | Gradiente sobrio della materia, segmenti in alto che si riempiono col tempo, spiegazione in un foglio dal basso, scorri a sinistra per andare avanti, «🔥 di fila», coriandoli da 80% |
| Condividi | A fine quiz «Condividi la storia» crea un'immagine 1080×1920 del risultato (WhatsApp/Instagram) |
| Allenamento / Sfida | Predefinito «Allenamento»: niente timer, 100 punti a risposta. «Sfida»: timer del test e bonus velocità |
| Ripassa gli errori | Ogni risposta sbagliata torna nel ripasso finché non è giusta in due giorni diversi |
| Quiz lampo | 10 domande da un test (⚡ 10 sulla card) o miste da tutti i test di una materia (interleaving) |
| Invio affidabile | Un tentativo esce dalla coda solo quando lo script risponde ok; un quiz chiuso a metà diventa «interrotto» |
| App sul telefono | `manifest.webmanifest` + `icons/`: da Safari → Condividi → «Aggiungi alla schermata Home» |
| Risposta a parole | `type:"text"`, con le risposte valide in `accept` |
| Forma del numero | campi `sci` (notazione scientifica) e `plain` (numero per esteso) |
| Miglioramenti | `papa.html` confronta le ultime due partite: recuperate, nuovi errori, ancora sbagliate |
| Definizioni a memoria | `type:"define"`: risposta scritta con controllo dei concetti e riscrittura obbligatoria |
| Sezioni | In alto **Esercizi** e **Ripasso**; nella materia il pulsante «Ripasso video» |
| Riepilogo | Revisione tutte le risposte a fine quiz |
| Colore UI | Si adatta automaticamente alla materia |

<!-- redeploy 2026-04-18 -->
