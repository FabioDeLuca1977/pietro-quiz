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
| Riepilogo | Revisione tutte le risposte a fine quiz |
| Colore UI | Si adatta automaticamente alla materia |

<!-- redeploy 2026-04-18 -->
