// ============================================================
//  QuizMaster — registro dei tentativi (Google Apps Script)
//
//  Funziona sia incollato nel foglio (Estensioni → Apps Script) sia come
//  script separato: in quel caso FOGLIO_ID indica il foglio da usare.
//
//  PRIMO AVVIO: esegui la funzione  configura  (▶ Esegui). Imposta da sola
//    TOKEN_SITO   = il "token" di data/config.js (serve al sito per scrivere)
//    CHIAVE_PAPA  = una chiave segreta generata a caso (serve a papa.html per
//                   leggere): la trovi nel Registro di esecuzione.
//  ACCESSO: la scheda «Utenti» (creata da  preparaUtenti ) contiene chi può
//    entrare nel sito con il proprio codice. attivo = SI/NO; invia risultati =
//    SI solo per chi deve comparire nel foglio (Pietro). Si gestisce dal foglio.
//  Istruzioni complete: GUIDA-PAPA.md
// ============================================================

const FOGLIO_ID   = '';                 // vuoto = il foglio a cui è collegato lo script
const TOKEN_SITO_PREDEFINITO = 'e158991b257f360923fd6fa9';   // = token in data/config.js (non è un segreto)

const FOGLIO_TENTATIVI = 'Tentativi';
const FOGLIO_RISPOSTE  = 'Risposte';
const FOGLIO_UTENTI    = 'Utenti';
const COL_UTENTI = ['nome', 'codice', 'attivo', 'invia risultati', 'ultimo accesso', 'note'];
const COL_TENTATIVI = ['id', 'data', 'studente', 'materia', 'test', 'titolo', 'versione',
                       'completato', 'risposte date', 'domande', 'giuste', 'percentuale',
                       'punti', 'secondi'];
const COL_RISPOSTE  = ['id tentativo', 'data', 'test', 'n', 'domanda', 'risposta data',
                       'risposta giusta', 'esatta'];

// Il sito invia qui ogni tentativo (POST, testo JSON).
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    const props = PropertiesService.getScriptProperties();
    const token = props.getProperty('TOKEN_SITO');
    if (!token || d.token !== token) return json({ ok: false, error: 'token' });

    const ss = apri();
    const u = utenti(ss).find(x => x.nome.toLowerCase() === String(d.student || '').trim().toLowerCase());
    if (utenti(ss).length && !(u && u.attivo && u.invia)) return json({ ok: true, skipped: true });
    const tent = foglio(ss, FOGLIO_TENTATIVI, COL_TENTATIVI);
    // niente doppioni se il sito rimanda lo stesso tentativo
    if (tent.getLastRow() > 1 &&
        tent.getRange(2, 1, tent.getLastRow() - 1, 1).createTextFinder(String(d.id)).matchEntireCell(true).findNext()) {
      return json({ ok: true, duplicate: true });
    }
    const data = new Date(d.ts);
    tent.appendRow([d.id, data, d.student, d.subject, d.testId, d.testTitle, d.version,
                    d.completed ? 'SI' : 'NO', d.answered, d.total, d.ok, d.pct, d.score, d.seconds]);

    const risp = foglio(ss, FOGLIO_RISPOSTE, COL_RISPOSTE);
    const righe = (d.answers || []).map((a, i) =>
      [d.id, data, d.testId, i + 1, a.q, a.chosen, a.correct, a.ok ? 'SI' : 'NO']);
    if (righe.length) risp.getRange(risp.getLastRow() + 1, 1, righe.length, COL_RISPOSTE.length).setValues(righe);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// papa.html legge da qui (GET con ?key=CHIAVE_PAPA).
function doGet(e) {
  if (e.parameter && e.parameter.action === 'login') return login(String(e.parameter.code || ''));
  const chiave = PropertiesService.getScriptProperties().getProperty('CHIAVE_PAPA');
  if (!chiave || !e.parameter || e.parameter.key !== chiave) return json({ ok: false, error: 'chiave' });
  const ss = apri();
  return json({ ok: true,
                tentativi: righe(ss.getSheetByName(FOGLIO_TENTATIVI)),
                risposte:  righe(ss.getSheetByName(FOGLIO_RISPOSTE)) });
}

// Da eseguire una volta (▶ Esegui): imposta token e chiave, crea le schede
// e scrive una riga di prova. La chiave di papà compare nel Registro.
function configura() {
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty('TOKEN_SITO')) props.setProperty('TOKEN_SITO', TOKEN_SITO_PREDEFINITO);
  let chiave = props.getProperty('CHIAVE_PAPA');
  if (!chiave) { chiave = Utilities.getUuid().replace(/-/g, '').slice(0, 16); props.setProperty('CHIAVE_PAPA', chiave); }
  const ss = apri();
  foglio(ss, FOGLIO_TENTATIVI, COL_TENTATIVI);
  foglio(ss, FOGLIO_RISPOSTE, COL_RISPOSTE);
  const vuoto = ss.getSheetByName('Foglio1') || ss.getSheetByName('Sheet1');
  if (vuoto && ss.getSheets().length > 2 && vuoto.getLastRow() === 0) ss.deleteSheet(vuoto);
  prova();
  Logger.log('FATTO. Foglio: ' + ss.getUrl());
  Logger.log('CHIAVE_PAPA (da inserire nella pagina di papà): ' + chiave);
}

// Il sito chiede: questo codice può entrare? Risponde con il nome.
function login(code) {
  const cache = CacheService.getScriptCache();
  const fails = Number(cache.get('fails') || 0);
  if (fails > 30) return json({ ok: false, error: 'troppi' });       // troppi tentativi: pausa di 10 minuti
  const c = code.trim().toUpperCase();
  const ss = apri();
  const u = c.length >= 4 ? utenti(ss).find(x => x.codice === c) : null;
  if (!u || !u.nome || !u.attivo) {
    cache.put('fails', String(fails + 1), 600);
    return json({ ok: false, error: u ? 'disattivo' : 'codice' });
  }
  ss.getSheetByName(FOGLIO_UTENTI).getRange(u.riga, 5).setValue(new Date());
  return json({ ok: true, nome: u.nome, invia: u.invia });
}

function utenti(ss) {
  const sh = ss.getSheetByName(FOGLIO_UTENTI);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, 4).getValues().map((r, i) => ({
    riga: i + 2, nome: String(r[0]).trim(), codice: String(r[1]).trim().toUpperCase(),
    attivo: /^s[iì]$/i.test(String(r[2]).trim()), invia: /^s[iì]$/i.test(String(r[3]).trim()) }));
}

// Da eseguire una volta: crea la scheda Utenti con Pietro e 10 codici liberi.
function preparaUtenti() {
  const ss = apri();
  if (ss.getSheetByName(FOGLIO_UTENTI)) { Logger.log('La scheda Utenti esiste già: non la tocco.'); return; }
  const sh = foglio(ss, FOGLIO_UTENTI, COL_UTENTI);
  const nome = 'Pietro';
  const righe = [[nome, nuovoCodice(), 'SI', 'SI', '', 'i suoi risultati arrivano nel foglio']];
  for (let i = 0; i < 10; i++) righe.push(['', nuovoCodice(), 'NO', 'NO', '', 'libero: scrivi il nome e metti attivo = SI']);
  sh.getRange(2, 1, righe.length, COL_UTENTI.length).setValues(righe);
  sh.getRange(2, 2, righe.length, 1).setFontFamily('Roboto Mono');
  sh.setColumnWidths(1, 6, 150);
  Logger.log('Scheda Utenti creata.');
}

function nuovoCodice() {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // senza 0/O e 1/I
  let c = ''; for (let i = 0; i < 6; i++) c += A[Math.floor(Math.random() * A.length)];
  return c;
}

function apri() {
  return FOGLIO_ID ? SpreadsheetApp.openById(FOGLIO_ID) : SpreadsheetApp.getActiveSpreadsheet();
}

// Prova a mano dall'editor (▶ Esegui) per controllare che tutto funzioni.
function prova() {
  const token = PropertiesService.getScriptProperties().getProperty('TOKEN_SITO');
  const r = doPost({ postData: { contents: JSON.stringify({
    id: 'prova-' + Date.now(), token: token, student: 'Prova', ts: new Date().toISOString(),
    completed: true, subject: 'prova', testId: 'prova', testTitle: 'Riga di prova (si può cancellare)',
    version: 1, answered: 1, total: 1, ok: 1, pct: 100, score: 100, seconds: 5,
    answers: [{ q: 'Domanda di prova', chosen: 'A', correct: 'A', ok: true }] }) } });
  Logger.log(r.getContent());
}

function foglio(ss, nome, intestazioni) {
  let sh = ss.getSheetByName(nome);
  if (!sh) {
    sh = ss.insertSheet(nome);
    sh.appendRow(intestazioni);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, intestazioni.length).setFontWeight('bold');
  }
  return sh;
}

function righe(sh) {
  if (!sh || sh.getLastRow() < 2) return [];
  const v = sh.getDataRange().getValues();
  const head = v.shift();
  return v.map(r => Object.fromEntries(head.map((h, i) => [h, r[i] instanceof Date ? r[i].toISOString() : r[i]])));
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
