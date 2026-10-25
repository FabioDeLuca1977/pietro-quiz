# Guida per papà — vedere i tentativi di Pietro

Il sito può mandare ogni quiz di Pietro (completato o interrotto) a un **tuo foglio Google**.
Tu li guardi dalla **pagina di papà**: <https://fabiodeluca1977.github.io/pietro-quiz/papa.html>

Da fare **una volta sola**, circa 10 minuti, dal computer.

---

## 1. Crea il foglio e incolla il programma

1. Apri <https://sheets.new> con il tuo account Google: si crea un foglio nuovo.
   Dagli un nome, per esempio **QuizMaster — tentativi di Pietro**.
2. Menu **Estensioni → Apps Script**. Si apre l'editor in una nuova scheda.
3. Cancella tutto il testo che c'è e incolla il contenuto del file
   [`google-apps-script/Codice.gs`](google-apps-script/Codice.gs) di questo repository.
4. Clicca l'icona del dischetto **Salva**.

## 2. Imposta le due parole di controllo

Nell'editor: **Impostazioni progetto** (ingranaggio a sinistra) → in fondo **Proprietà script** →
**Aggiungi proprietà script**. Crea queste due:

| Proprietà | Valore |
|---|---|
| `TOKEN_SITO` | il valore di `token` scritto nel file [`data/config.js`](data/config.js) |
| `CHIAVE_PAPA` | una parola segreta scelta da te (lunga, che non usi altrove) |

Clicca **Salva proprietà script**.

- `TOKEN_SITO` permette al sito di scrivere nel foglio.
- `CHIAVE_PAPA` serve solo a te, per leggere i risultati dalla pagina di papà. **Non metterla nel sito.**

## 3. Prova che funzioni

1. Torna su **Editor** (icona `< >`), scegli la funzione **prova** nel menu in alto e premi **▶ Esegui**.
2. Google chiede di autorizzare lo script: scegli il tuo account → *Avanzate* → *Vai a … (non sicuro)* → **Consenti**.
   È normale: lo script l'hai creato tu e scrive solo in questo foglio.
3. Nel foglio compaiono due schede, **Tentativi** e **Risposte**, con una riga di prova.
   La riga di prova si può cancellare; la pagina di papà la ignora comunque.

## 4. Pubblica lo script come app web

1. In alto a destra **Esegui il deployment → Nuovo deployment**.
2. Icona ingranaggio accanto a «Seleziona tipo» → **App web**.
3. Imposta:
   - *Esegui come*: **Me**
   - *Chi ha accesso*: **Chiunque**
4. **Esegui il deployment** e copia l'**URL dell'app web** (finisce con `/exec`).

«Chiunque» serve perché il telefono di Pietro possa inviare i risultati senza fare login.
Senza `TOKEN_SITO` lo script non scrive nulla; senza `CHIAVE_PAPA` non mostra nulla.

## 5. Collega il sito

Manda l'URL `/exec` a Claude (oppure scrivilo tu in `data/config.js`, alla voce `reportUrl`)
e pubblica. Da quel momento ogni quiz di Pietro arriva nel foglio.

## 6. Apri la pagina di papà

1. Apri <https://fabiodeluca1977.github.io/pietro-quiz/papa.html> sul tuo telefono.
2. Inserisci l'URL `/exec` e la tua `CHIAVE_PAPA`, poi **Collega**.
   Restano salvati solo su quel telefono; **Esci** cancella la chiave.

Nella pagina trovi: numero di tentativi, tempo di studio, andamento per ogni test,
le domande sbagliate più spesso e il dettaglio di ogni tentativo.

---

## Da sapere

- **Se manca la rete** il risultato resta in coda sul telefono di Pietro e parte la volta successiva che apre il sito.
- **Pulsante «📤 Manda a papà»**: a fine quiz Pietro può anche mandarti il riepilogo su WhatsApp.
  Funziona subito, anche senza il foglio Google.
- **Se modifichi `Codice.gs`** devi rifare *Esegui il deployment → Gestisci deployment → Modifica → Nuova versione*,
  altrimenti l'URL continua a usare la versione vecchia.
- **Il token è visibile** a chi guarda il codice del sito: al massimo qualcuno potrebbe aggiungere righe finte al foglio,
  non leggerlo. Se succede, cambia `TOKEN_SITO` nello script e `token` in `data/config.js`.
