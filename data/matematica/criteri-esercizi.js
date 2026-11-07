// ============================================================
//  data/matematica/criteri-esercizi.js  (v1)
//  Primo e secondo criterio di congruenza: 3 livelli dal facile al difficile.
//  Stesse parole e stessi esempi delle slide «Primo e secondo criterio di congruenza»
//  (spiegazione nostra: non abbiamo gli appunti del prof).
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

// ── Bisettrice, mediana, altezza (dal quaderno di Pietro) ────────
window.QUIZ_BANK["bma-1"] = {
  id:"bma-1", subject:"matematica", icon:"📐", version:1, timePerQuestion:0, ordered:true,
  title:"Bisettrice, mediana, altezza",
  description:"Definizioni precise, parole e il caso dell'altezza che cade fuori",
  questions: [
    { q:"Che cos'è la bisettrice di un angolo?", options:["La semiretta, con origine nel vertice, che divide l'angolo in due angoli congruenti","Il segmento che va al punto medio del lato opposto","Il segmento perpendicolare al lato opposto","Una retta parallela a un lato"], answer:0,
      explanation:"Bisettrice: dal latino bis «due» e secare «tagliare». Divide in due l'angolo." },
    { q:"Che cos'è la mediana di un triangolo?", options:["Il segmento che unisce un vertice con il punto medio del lato opposto","La semiretta che divide un angolo a metà","Il segmento perpendicolare al lato opposto","Il lato più lungo"], answer:0,
      explanation:"Divide in due il lato opposto: AM ≅ MB. Sul quaderno c'è la conseguenza: «crea 2 segmenti congruenti»." },
    { q:"Che cos'è l'altezza di un triangolo?", options:["Il segmento che parte da un vertice ed è perpendicolare al lato opposto (o al suo prolungamento)","Il segmento che va al punto medio del lato opposto","La semiretta che divide un angolo a metà","Il lato verticale del disegno"], answer:0,
      explanation:"Perpendicolare vuol dire che forma un angolo retto (90°)." },
    { q:"Che cosa vuol dire «perpendicolare»?", options:["Che forma un angolo retto (90°)","Che è parallelo","Che è lungo la metà","Che passa per il punto medio"], answer:0, explanation:"Il simbolo è ⊥." },
    { q:"Che cos'è il punto medio di un segmento?", options:["Il punto che lo divide in due parti congruenti","Uno degli estremi","Il punto più in alto","Il vertice dell'angolo retto"], answer:0, explanation:"Per esempio M punto medio di AB: AM ≅ MB." },
    { type:"classify", q:"Che cosa divide in due, o che cosa forma?", categories:["Bisettrice","Mediana","Altezza"],
      items:[ {t:"Divide in due l'angolo", c:0}, {t:"Divide in due il lato opposto", c:1}, {t:"Forma angoli retti con il lato opposto", c:2} ],
      explanation:"Bisettrice → angolo; mediana → lato; altezza → angolo retto." },
    { q:"L'altezza divide sempre il triangolo in due triangoli rettangoli?", options:["No: se il triangolo ha un angolo ottuso, alcune altezze cadono fuori, sul prolungamento del lato","Sì, sempre","Sì, ma solo la mediana no","No, mai"], answer:0,
      explanation:"Per questo la definizione dice «perpendicolare al lato opposto o al suo prolungamento»." },
    { q:"Quante mediane ha un triangolo?", options:["3, una per vertice","1","2","6"], answer:0, explanation:"Lo stesso vale per le bisettrici e per le altezze." },
    { q:"Nell'esempio 1 dei criteri, perché BÂC ≅ CÂD?", options:["Perché AC è la bisettrice dell'angolo in A","Perché AC è un'altezza","Perché AB ≅ AD","Perché AC è in comune"], answer:0,
      explanation:"La bisettrice divide l'angolo in due angoli congruenti: è una coppia di elementi da usare nel criterio." }
  ]
};

// ── LIVELLO 1: le parole ─────────────────────────────────────────
window.QUIZ_BANK["criteri-1"] = {
  id:"criteri-1", subject:"matematica", icon:"🟢", version:1, timePerQuestion:0, ordered:true,
  title:"Criteri di congruenza — Livello 1",
  description:"Le parole: congruente, criterio, compreso, adiacente, opposto, ipotesi, tesi",
  questions: [
    { q:"Che cosa vuol dire che due figure sono congruenti?", options:["Che, sovrapposte, combaciano perfettamente","Che hanno lo stesso colore","Che sono una vicina all'altra","Che hanno la stessa area, anche se hanno forme diverse"], answer:0,
      explanation:"Congruente viene dal latino congruere, «combaciare»: le due figure si sovrappongono esattamente." },
    { q:"Come si legge il simbolo ≅?", options:["«è congruente a»","«è uguale a circa»","«è parallelo a»","«è maggiore di»"], answer:0, explanation:"AB ≅ A′B′ si legge «AB è congruente ad A primo B primo»." },
    { q:"Che cos'è un criterio?", options:["Una regola per decidere senza controllare tutto","Un tipo di triangolo","Un angolo retto","Una misura in centimetri"], answer:0,
      explanation:"Dal greco kritérion, «strumento per giudicare». Il criterio di congruenza dice quali 3 elementi bastano." },
    { q:"Quanti elementi ha un triangolo, contando lati e angoli?", options:["6: 3 lati e 3 angoli","3: solo i lati","9","4"], answer:0, explanation:"3 lati (AB, BC, CA) e 3 angoli (Â, B̂, Ĉ)." },
    { q:"Nel triangolo ABC, qual è l'angolo compreso tra i lati AB e AC?", options:["Â","B̂","Ĉ","Nessuno"], answer:0, explanation:"È l'angolo che sta in mezzo ai due lati: hanno in comune il vertice A." },
    { q:"Nel triangolo ABC, qual è il lato opposto all'angolo Â?", options:["BC","AB","AC","Nessuno"], answer:0, explanation:"Opposto vuol dire «che sta di fronte»: davanti al vertice A c'è il lato BC." },
    { q:"Quali angoli sono adiacenti al lato AB?", options:["Â e B̂","Â e Ĉ","B̂ e Ĉ","Solo Ĉ"], answer:0, explanation:"Adiacente vuol dire «che sta accanto»: sono gli angoli ai due estremi del lato, A e B." },
    { q:"Che cosa vuol dire «ordinatamente congruenti»?", options:["Congruenti nello stesso ordine: A con A′, B con B′, C con C′","Messi in ordine di grandezza","Congruenti a caso","Scritti in ordine alfabetico"], answer:0, explanation:"Gli elementi si confrontano a coppie corrispondenti." },
    { q:"In una dimostrazione, che cos'è l'ipotesi?", options:["Quello che sai già, il punto di partenza","Quello che devi dimostrare","Un errore","Il disegno"], answer:0, explanation:"La tesi invece è quello che vuoi dimostrare." },
    { q:"Nei disegni, due lati con lo stesso numero di tacchette sono…", options:["Congruenti","Paralleli","Perpendicolari","Diversi"], answer:0, explanation:"Tacchette uguali = lati congruenti; archetti uguali = angoli congruenti." },
    { type:"classify", q:"Collega ogni parola al suo significato.", categories:["Compreso","Adiacente","Opposto"],
      items:[ {t:"Che sta in mezzo a due lati", c:0}, {t:"Che sta accanto", c:1}, {t:"Che sta di fronte", c:2} ],
      explanation:"Compreso = racchiuso in mezzo; adiacente = accanto; opposto = di fronte." }
  ]
};

// ── LIVELLO 2: quale criterio? ───────────────────────────────────
const CRIT = ["1° criterio (LAL)","2° criterio (ALA)","Non basta: nessuno dei due"];
window.QUIZ_BANK["criteri-2"] = {
  id:"criteri-2", subject:"matematica", icon:"🟡", version:1, timePerQuestion:0, ordered:true,
  title:"Criteri di congruenza — Livello 2",
  description:"Riconosci il criterio e trova l'elemento che manca",
  questions: [
    { q:"Che cosa dice il primo criterio di congruenza?", options:["Due triangoli sono congruenti se hanno ordinatamente congruenti due lati e l'angolo tra essi compreso","Due triangoli sono congruenti se hanno due lati congruenti","Due triangoli sono congruenti se hanno tre angoli congruenti","Due triangoli sono congruenti se hanno la stessa area"], answer:0,
      explanation:"LAL: lato, angolo compreso, lato." },
    { q:"Che cosa dice il secondo criterio di congruenza?", options:["Due triangoli sono congruenti se hanno ordinatamente congruenti un lato e i due angoli adiacenti a esso","Due triangoli sono congruenti se hanno un lato e un angolo congruenti","Due triangoli sono congruenti se hanno due angoli congruenti","Due triangoli sono congruenti se hanno tre lati paralleli"], answer:0,
      explanation:"ALA: angolo, lato, angolo; i due angoli sono agli estremi del lato." },
    { q:"AB ≅ A′B′, AC ≅ A′C′, Â ≅ Â′. Quale criterio?", options:CRIT, answer:0, explanation:"Â è compreso tra AB e AC: lato, angolo, lato." },
    { q:"AB ≅ A′B′, Â ≅ Â′, B̂ ≅ B̂′. Quale criterio?", options:CRIT, answer:1, explanation:"Â e B̂ sono gli angoli adiacenti al lato AB." },
    { q:"BC ≅ B′C′, B̂ ≅ B̂′, Ĉ ≅ Ĉ′. Quale criterio?", options:CRIT, answer:1, explanation:"B̂ e Ĉ sono adiacenti al lato BC." },
    { q:"AB ≅ A′B′, BC ≅ B′C′, B̂ ≅ B̂′. Quale criterio?", options:CRIT, answer:0, explanation:"B̂ è compreso tra AB e BC." },
    { q:"AB ≅ A′B′, BC ≅ B′C′, Â ≅ Â′. Quale criterio?", options:CRIT, answer:2, explanation:"Â non è compreso tra AB e BC (lo è B̂). Nella slide «L'angolo deve essere compreso» ci sono due triangoli così, diversi." },
    { q:"Â ≅ Â′, B̂ ≅ B̂′, Ĉ ≅ Ĉ′. Quale criterio?", options:CRIT, answer:2, explanation:"Con soli angoli i triangoli hanno la stessa forma ma possono avere grandezze diverse: un triangolo e il suo ingrandimento." },
    { q:"Sai che AB ≅ A′B′ e Â ≅ Â′. Che cosa ti serve ancora per il 1° criterio?", options:["AC ≅ A′C′","BC ≅ B′C′","B̂ ≅ B̂′","Ĉ ≅ Ĉ′"], answer:0, explanation:"Serve l'altro lato che forma l'angolo Â: AC." },
    { q:"Sai che AB ≅ A′B′ e Â ≅ Â′. Che cosa ti serve ancora per il 2° criterio?", options:["B̂ ≅ B̂′","Ĉ ≅ Ĉ′","AC ≅ A′C′","BC ≅ B′C′"], answer:0, explanation:"Serve l'altro angolo adiacente al lato AB: quello in B." },
    { type:"classify", q:"Quale criterio si può usare?", categories:["1° criterio","2° criterio","Non basta"],
      items:[ {t:"AC ≅ A′C′, Â ≅ Â′, AB ≅ A′B′", c:0}, {t:"AC ≅ A′C′, Â ≅ Â′, Ĉ ≅ Ĉ′", c:1}, {t:"Â ≅ Â′, B̂ ≅ B̂′, Ĉ ≅ Ĉ′", c:2}, {t:"CA ≅ C′A′, CB ≅ C′B′, Ĉ ≅ Ĉ′", c:0} ],
      explanation:"1°: due lati e l'angolo compreso. 2°: un lato e i suoi due angoli. Tre angoli non bastano." }
  ]
};

// ── LIVELLO 3: le dimostrazioni ──────────────────────────────────
window.QUIZ_BANK["criteri-3"] = {
  id:"criteri-3", subject:"matematica", icon:"🔴", version:1, timePerQuestion:0, ordered:true,
  title:"Criteri di congruenza — Livello 3",
  description:"Le dimostrazioni passo per passo e i due esempi delle slide",
  questions: [
    { q:"Esempio 1 delle slide: AB ≅ AD e BÂC ≅ CÂD. Perché i triangoli ABC e ADC sono congruenti?", options:["1° criterio: AB ≅ AD, BÂC ≅ CÂD, AC in comune","2° criterio: AC in comune e due angoli","Perché hanno un lato in comune","Non si può dire"], answer:0,
      explanation:"Due lati (AB e AD, AC in comune) e l'angolo compreso in A." },
    { q:"Nell'esempio 1, perché AC ≅ AC?", options:["È un lato in comune ai due triangoli","Per ipotesi","Per il 2° criterio","Perché è il lato più lungo"], answer:0, explanation:"Un segmento è sempre congruente a se stesso: proprietà riflessiva (assioma 5A)." },
    { q:"Esempio 2: BÂC ≅ CÂD e AĈB ≅ AĈD. Quale criterio per ABC e ADC?", options:["2° criterio: AC in comune e i suoi due angoli adiacenti","1° criterio","Non basta","3° criterio"], answer:0, explanation:"Il lato AC e gli angoli ai suoi estremi A e C." },
    { q:"Nella dimostrazione del 2° criterio, quale metodo si usa?", options:["Per assurdo","Si misura con il righello","Si ripete il 1° criterio due volte","Non serve dimostrarlo"], answer:0, explanation:"Si suppone AC non congruente ad A′C′ e si arriva a una contraddizione." },
    { q:"Nella dimostrazione del 2° criterio, perché sulla semiretta A′C′ c'è un punto D con A′D ≅ AC?", options:["Per l'assioma 7A (trasporto del segmento)","Per il 1° criterio","Per l'assioma 2B","Per ipotesi"], answer:0, explanation:"Dato un segmento e una semiretta, c'è uno e un solo punto che dà un segmento congruente." },
    { q:"Perché i triangoli ABC e A′B′D sono congruenti?", options:["1° criterio: AB ≅ A′B′, Â ≅ Â′, AC ≅ A′D","2° criterio","Per ipotesi","Per l'assioma 6"], answer:0, explanation:"Due lati e l'angolo compreso." },
    { q:"Perché alla fine D coincide con C′?", options:["Per l'assioma 7B la semiretta B′D è la stessa di B′C′, e D sta anche su A′C′","Perché D è vicino a C′","Per l'assioma 3A","Perché lo dice il disegno"], answer:0, explanation:"Angoli congruenti dalla stessa parte: una sola semiretta. Due rette diverse si incontrano in un solo punto, quindi D = C′." },
    { type:"order", q:"Metti in ordine la dimostrazione del 2° criterio.",
      items:["Suppongo AC non congruente ad A′C′","Prendo D su A′C′ con A′D ≅ AC","ABC ≅ A′B′D per il 1° criterio","Quindi A′B̂′D ≅ AB̂C ≅ A′B̂′C′","Per l'assioma 7B, D = C′: assurdo","Quindi AC ≅ A′C′ e ABC ≅ A′B′C′"],
      explanation:"Ipotesi contraria → punto D → 1° criterio → angoli → contraddizione → tesi." },
    { type:"order", q:"Metti in ordine i passi per scrivere una dimostrazione.",
      items:["Scrivo ipotesi e tesi","Trovo due triangoli che contengono gli elementi della tesi","Elenco 3 coppie di elementi congruenti con il loro perché","Scrivo quale criterio uso e la conclusione"],
      explanation:"È il metodo dell'ultima slide." }
  ]
};
