# Guida per papà — vedere i tentativi di Pietro

Il sito può mandare ogni quiz di Pietro (completato o interrotto) a un **tuo foglio Google**.
Tu li guardi dalla **pagina di papà**: <https://fabiodeluca1977.github.io/pietro-quiz/papa.html>

Da fare **una volta sola**, circa 5 minuti, dal computer.

---

## 1. Apri il foglio e incolla il programma

1. Apri il foglio **QuizMaster — tentativi di Pietro** nella cartella *Scuola Pietro* del tuo Drive
   (se non c'è, creane uno nuovo da <https://sheets.new>).
2. Menu **Estensioni → Apps Script**. Si apre l'editor in una nuova scheda.
3. Apri <https://raw.githubusercontent.com/FabioDeLuca1977/pietro-quiz/main/google-apps-script/Codice.gs>,
   seleziona tutto (Ctrl+A) e copia (Ctrl+C).
4. Nell'editor cancella tutto il testo che c'è, incolla (Ctrl+V) e clicca il dischetto **Salva**.

## 2. Esegui «configura» (una volta)

1. Nel menu in alto accanto a «Debug» scegli la funzione **configura** e premi **▶ Esegui**.
2. Google chiede di autorizzare lo script: scegli il tuo account → *Avanzate* → *Vai a … (non sicuro)* → **Consenti**.
   È normale: lo script l'hai creato tu e lavora solo su questo foglio.
3. In basso, nel **Registro di esecuzione**, compare la riga
   `CHIAVE_PAPA (da inserire nella pagina di papà): …` — **copiala e tienila per te**.
   Serve solo a te per leggere i risultati: non metterla nel sito.

`configura` imposta da sola il token del sito, crea le schede **Tentativi** e **Risposte** e scrive
una riga di prova (si può cancellare; la pagina di papà la ignora comunque).
Se la riesegui, la chiave resta la stessa.

## 3. Pubblica lo script come app web

1. In alto a destra **Esegui il deployment → Nuovo deployment**.
2. Icona ingranaggio accanto a «Seleziona tipo» → **App web**.
3. Imposta:
   - *Esegui come*: **Me**
   - *Chi ha accesso*: **Chiunque**
4. **Esegui il deployment** e copia l'**URL dell'app web** (finisce con `/exec`).

«Chiunque» serve perché il telefono di Pietro possa inviare i risultati senza fare login.
Senza `TOKEN_SITO` lo script non scrive nulla; senza `CHIAVE_PAPA` non mostra nulla.

## 4. Collega il sito

Manda l'URL `/exec` a Claude (oppure scrivilo tu in `data/config.js`, alla voce `reportUrl`)
e pubblica. Da quel momento ogni quiz di Pietro arriva nel foglio.

## 5. Apri la pagina di papà

1. Apri <https://fabiodeluca1977.github.io/pietro-quiz/papa.html> sul tuo telefono.
2. Inserisci l'URL `/exec` e la tua `CHIAVE_PAPA`, poi **Collega**.
   Restano salvati solo su quel telefono; **Esci** cancella la chiave.

Nella pagina trovi: numero di tentativi, tempo di studio, andamento per ogni test,
le domande sbagliate più spesso e il dettaglio di ogni tentativo.

## 6. Chi può entrare nel sito (codici d'accesso)

Il sito chiede un **codice personale** la prima volta che lo si apre su un telefono; poi se lo ricorda.
I codici stanno nella scheda **Utenti** del foglio:

| nome | codice | attivo | invia risultati | ultimo accesso | note |
|---|---|---|---|---|---|

- **Pietro** ha già il suo codice, con *invia risultati = SI*: i suoi quiz arrivano nel foglio.
- **Far entrare un compagno:** in una delle righe libere scrivi il nome e metti *attivo = SI*.
  Dagli il codice di quella riga. Lascia *invia risultati = NO*: i suoi risultati restano solo sul suo telefono
  (lo script li rifiuta comunque).
- **Bloccare qualcuno:** metti *attivo = NO*. Alla successiva apertura del sito, quel telefono esce da solo.
- **Altri codici:** aggiungi una riga con nome e un codice di almeno 4 lettere/cifre a tua scelta.
- *ultimo accesso* si aggiorna da solo: vedi chi usa l'app.

Il codice protegge l'ingresso nell'app; le domande dei quiz restano comunque nel repository pubblico su GitHub.

---

## Da sapere

- **Se manca la rete** il risultato resta in coda sul telefono di Pietro e parte la volta successiva che apre il sito.
- **Pulsante «📤 Manda a papà»**: a fine quiz Pietro può anche mandarti il riepilogo su WhatsApp.
  Funziona subito, anche senza il foglio Google.
- **Se modifichi `Codice.gs`** devi rifare *Esegui il deployment → Gestisci deployment → Modifica → Nuova versione*,
  altrimenti l'URL continua a usare la versione vecchia.
- **Il token è visibile** a chi guarda il codice del sito: al massimo qualcuno potrebbe aggiungere righe finte al foglio,
  non leggerlo. Se succede, cambia la proprietà `TOKEN_SITO` (Impostazioni progetto → Proprietà script) e `token` in `data/config.js`.
