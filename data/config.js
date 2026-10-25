// ============================================================
//  data/config.js  —  impostazioni del sito
//
//  student    nome mostrato nei riepiloghi
//  reportUrl  indirizzo dell'app Google Apps Script che riceve i risultati
//             (vuoto = nessun invio: i risultati restano solo sul telefono)
//  token      codice che l'app Google controlla prima di salvare
//             (deve essere uguale a TOKEN_SITO nelle proprietà dello script)
//  Istruzioni complete: GUIDA-PAPA.md
// ============================================================
window.QUIZ_CONFIG = {
  student:   "Pietro",
  reportUrl: "https://script.google.com/macros/s/AKfycbyj9VY1rTAW8GbtILgVZvsXqCnWk0Px44kKnyqMPVasSwjsh0na9_D6RhYwJT3757AEIQ/exec",
  token:     "e158991b257f360923fd6fa9"
};
