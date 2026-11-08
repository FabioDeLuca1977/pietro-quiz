// ============================================================
//  data/matematica/semplici.js  (v1)
//  «In parole semplici»: una spiegazione facile accanto a ogni assioma e a ogni
//  criterio. NON è la definizione da studiare: quella resta l'enunciato.
//  Spiegazioni nostre (non del prof). Stesso testo nel PDF, nel doc e nei video.
// ============================================================
window.SEMPLICI = {
  "1":  "Il piano è come un foglio senza bordi, fatto di punti. Una retta è una parte di quei punti.",
  "2A": "Una retta non è mai vuota e non è un punto solo: su ogni retta ci sono almeno due punti diversi.",
  "2B": "Due punti bastano per decidere una retta: per due punti ne passa una, e una sola.",
  "2C": "Il piano non è fatto di una retta sola: fuori da ogni retta c'è sempre almeno un punto.",
  "3A": "Due punti diversi non sono mai «attaccati»: in mezzo ce n'è sempre un altro.",
  "3B": "Su una retta, prima di ogni punto ce n'è sempre un altro, e dopo pure.",
  "4":  "Una retta taglia il piano in due metà. Per passare da una metà all'altra devi attraversare la retta, come un fiume.",
  "5":  "A: ogni figura combacia con se stessa. B: se la prima combacia con la seconda, anche la seconda combacia con la prima. C: se due figure combaciano con una terza, combaciano anche tra loro.",
  "6":  "Un punto vale l'altro, una retta vale l'altra: non hanno una misura. I segmenti e gli angoli invece no: uno può essere più lungo o più largo dell'altro.",
  "7A": "Con il compasso copi un segmento su una semiretta, partendo dall'inizio: la punta cade in un punto solo.",
  "7B": "Un angolo si può copiare su una semiretta: viene una copia sola da una parte e una sola dall'altra.",
  "8":  "Se due segmenti sono uguali e fai su tutti e due la stessa cosa (li sommi, li raddoppi, li dimezzi), ottieni ancora segmenti uguali.",
  "9":  "Scegli un'unità, per esempio 1 cm. Per ogni numero positivo (3, 0,5, ¾, perfino √2) esiste un segmento lungo esattamente quel numero di unità. √2 è la diagonale del quadrato di lato 1: sulla retta non ci sono buchi.",
  "10": "È l'assioma 8 con gli angoli: se due angoli sono uguali e fai su tutti e due la stessa cosa, ottieni ancora angoli uguali.",
  "LAL": "Due bastoncini uniti da una cerniera: se sai quanto sono lunghi e quanto è aperta la cerniera, il terzo lato è obbligato. Il triangolo viene in un modo solo. L'angolo deve stare in mezzo ai due lati.",
  "ALA": "Hai un lato. Dalle sue due punte fai partire due righe con quegli angoli: si incontrano in un punto solo, il terzo vertice. Il triangolo viene in un modo solo. Gli angoli devono stare alle due punte del lato.",
  "SIGLE": "LAL: l'angolo sta in mezzo, tra due lati. ALA: il lato sta in mezzo, tra due angoli. La lettera centrale è il pezzo che sta in mezzo.",
};
// riquadro per le slide, subito sotto l'enunciato
window.semplice = k => window.SEMPLICI[k] ? `<div class="ls-note" style="background:#ffd23f1f;border-left:3px solid #ffd23f;padding:8px 10px;border-radius:8px;color:#fff">💡 <b>In parole semplici</b> (per capire): ${window.SEMPLICI[k]}</div>` : '';
// l'enunciato nella slide: etichetta «da studiare a memoria» + riquadro semplice sotto
window.conSemplice = (h, k) => h.replace(/(<div class="ls-res"[^>]*>)([\s\S]*?<\/div>)/,
  `$1<span style="display:block;font-size:.72rem;font-weight:800;letter-spacing:.04em;opacity:.7;margin-bottom:4px">📌 DA STUDIARE A MEMORIA</span>$2${window.semplice(k)}`);
