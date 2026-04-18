// ============================================================
//  data/scienze/energia-cap2.js  (v2 — copertura completa)
//  Unità F — Cap. 2 COMBUSTIBILI FOSSILI (pagg. 254-269)
//
//  32 domande che coprono TUTTI i concetti del capitolo.
//  Verificato sulle foto del libro il 18/04/2026.
// ============================================================

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["energia-cap2"] = {

  id:              "energia-cap2",
  subject:         "scienze",
  title:           "Cap. 2 — Combustibili fossili",
  description:     "Combustione, carbone, petrolio, gas naturale, centrali, raffinazione",
  icon:            "🔥",
  version:         2,
  timePerQuestion: 20,

  questions: [

    // ── BASE (13 domande) ────────────────────────────

    {
      q: "Quali sono i tre combustibili fossili?",
      options: [
        "Carbone, petrolio, gas naturale",
        "Legna, carbone, benzina",
        "Idrogeno, metano, elio",
        "Uranio, carbone, petrolio"
      ],
      answer: 0,
      explanation: "I combustibili fossili sono carbone, petrolio e gas naturale. Si chiamano così perché si sono formati in milioni di anni, nelle passate ere geologiche."
    },

    {
      q: "Quali sono i due «ingredienti» necessari per una combustione?",
      options: [
        "Acqua e fuoco",
        "Combustibile e comburente",
        "Carbonio e idrogeno",
        "Calore e luce"
      ],
      answer: 1,
      explanation: "Servono il combustibile (sostanza che brucia, fatta di carbonio e/o idrogeno) e il comburente (generalmente l'ossigeno dell'aria)."
    },

    {
      q: "Cosa sono gli idrocarburi?",
      options: [
        "Composti di carbonio e ossigeno",
        "Composti che contengono solo carbonio e idrogeno",
        "Un tipo di carbone",
        "Un residuo della combustione"
      ],
      answer: 1,
      explanation: "Gli idrocarburi sono composti che contengono solo carbonio e idrogeno. I combustibili fossili sono formati da idrocarburi più altri elementi (zolfo, metalli pesanti)."
    },

    {
      q: "Quanti litri ci sono in 1 barile di petrolio?",
      options: ["159 litri", "100 litri", "200 litri", "500 litri"],
      answer: 0,
      explanation: "Il petrolio greggio si misura in barili: 1 barile = 159 litri."
    },

    {
      q: "Di che colore è il petrolio?",
      options: [
        "Sempre nero",
        "Verdastro",
        "Sempre giallo",
        "Dal nero al giallo-bruno"
      ],
      answer: 3,
      explanation: "Il petrolio è un liquido denso e oleoso di colore dal nero al giallo-bruno, con peso specifico inferiore a quello dell'acqua (per questo galleggia)."
    },

    {
      q: "Da quale percentuale di carbonio è formato il petrolio?",
      options: ["20-30%", "50-60%", "80-90%", "95-99%"],
      answer: 2,
      explanation: "Il petrolio è costituito soprattutto da carbonio (80-90%) e da idrogeno (9-15%), con piccole percentuali di zolfo, azoto e ossigeno."
    },

    {
      q: "Da quale percentuale di carbonio è formato il carbone?",
      options: ["70-95%", "30-50%", "50-70%", "95-99%"],
      answer: 0,
      explanation: "Il carbone contiene carbonio in percentuale altissima: 70-95%."
    },

    {
      q: "Di quale gas è formato principalmente il gas naturale?",
      options: [
        "Anidride carbonica (CO₂)",
        "Idrogeno (H₂)",
        "Metano (CH₄)",
        "Ossigeno (O₂)"
      ],
      answer: 2,
      explanation: "Il gas naturale è formato da metano per il 99% nei gas più puri e per il 90% in quelli meno puri. È incolore, inodore, con densità circa metà di quella dell'aria."
    },

    {
      q: "A che temperatura viene raffreddato il gas naturale per diventare GNL?",
      options: ["-161 °C", "-40 °C", "-100 °C", "-273 °C"],
      answer: 0,
      explanation: "Prima del trasporto via nave il gas viene raffreddato a -161 °C e diventa GNL (Gas Naturale Liquefatto). Il volume si riduce di circa 600 volte."
    },

    {
      q: "Cosa produce la combustione di un idrocarburo?",
      options: [
        "Solo acqua",
        "Anidride carbonica (CO₂), vapore acqueo (H₂O) e residuo solido (cenere)",
        "Solo calore, niente materia",
        "Ossigeno puro"
      ],
      answer: 1,
      explanation: "La combustione degli idrocarburi produce anidride carbonica (CO₂, da C+O), vapore acqueo (H₂O, da H+O) e residuo solido, cioè cenere composta soprattutto da carbonio."
    },

    {
      q: "Qual è il principale gas serra causato dalle attività umane?",
      options: [
        "L'ossigeno",
        "L'azoto",
        "L'anidride carbonica (CO₂)",
        "Il vapore acqueo"
      ],
      answer: 2,
      explanation: "La CO₂ è il principale gas responsabile dell'effetto serra causato dalle attività umane. Viene prodotta in ogni combustione di combustibile fossile."
    },

    {
      q: "A cosa serve l'albero di Natale in un pozzo petrolifero?",
      options: [
        "A regolare la fuoriuscita controllata del greggio che risale dal pozzo",
        "A decorare la piattaforma",
        "A far scendere la trivella",
        "A raccogliere il gas disperso"
      ],
      answer: 0,
      explanation: "L'albero di Natale è un sistema di tubi e valvole che chiude la bocca del pozzo e permette la fuoriuscita controllata del greggio che risale per la pressione naturale. Si usa anche nei pozzi di gas."
    },

    {
      q: "Com'è fatta una trappola petrolifera?",
      options: [
        "Uno strato di roccia porosa sopra uno strato di sabbia",
        "Uno strato di carbone tra due strati di petrolio",
        "Una cavità sotterranea completamente vuota",
        "Uno strato di roccia impermeabile sopra uno strato di roccia porosa"
      ],
      answer: 3,
      explanation: "La trappola è formata sopra da uno strato di roccia impermeabile (es. argilla, il «cappello») e sotto da uno strato di roccia porosa dove il petrolio si accumula come in una spugna."
    },

    // ── MEDIO (13 domande) ───────────────────────────

    {
      q: "Cos'è il potere calorifico?",
      options: [
        "La temperatura che raggiunge la fiamma",
        "La velocità di combustione",
        "La quantità di CO₂ prodotta",
        "Il calore sviluppato bruciando 1 kg di combustibile solido/liquido o 1 m³ di gas"
      ],
      answer: 3,
      explanation: "Il potere calorifico è la quantità di calore prodotta dalla combustione di 1 kg di combustibile solido o liquido, oppure di 1 m³ di gas. Si misura in kilocalorie. Carbone, petrolio e gas hanno un potere calorifico 2-4 volte maggiore della legna."
    },

    {
      q: "Qual è la differenza tra l'origine del carbone e quella del petrolio?",
      options: [
        "Nessuna, hanno la stessa origine",
        "Il carbone deriva da alberi e vegetali, il petrolio da piccolissimi organismi vegetali e animali (alghe e plancton)",
        "Il carbone viene dal mare, il petrolio dalla terraferma",
        "Il petrolio si forma in milioni di anni, il carbone in migliaia"
      ],
      answer: 1,
      explanation: "Il carbone deriva da grandi cumuli di alberi e altri vegetali. Il petrolio invece deriva da piccolissimi organismi vegetali e animali (alghe e plancton) accumulatisi sui fondali marini."
    },

    {
      q: "Quali sono i due grandi gruppi in cui si classificano i carboni?",
      options: [
        "Carbone pregiato e carbone scadente",
        "Carbone naturale e carbone artificiale",
        "Hard coal (duro) e brown coal (marrone)",
        "Carbone italiano e carbone estero"
      ],
      answer: 2,
      explanation: "I carboni fossili veri e propri sono hard coal (litantraci e antraciti, formati circa 300 milioni di anni fa). I carboni giovani e poco pregiati sono brown coal (ligniti). In genere i carboni più antichi sono più ricchi di carbonio."
    },

    {
      q: "Cos'è il coke?",
      options: [
        "Un tipo di lignite",
        "Un carbone naturale molto antico",
        "Un residuo della combustione",
        "Un carbone artificiale ottenuto dal litantrace nelle cokerie, usato negli altiforni per l'acciaio"
      ],
      answer: 3,
      explanation: "Il coke è un carbone «artificiale» poroso, quasi carbonio puro, ricavato dal litantrace in impianti detti cokerie. È usato negli altiforni per la produzione di acciaio."
    },

    {
      q: "Nelle miniere di carbone in sotterraneo, perché si usa aria compressa per i macchinari invece di motori a scoppio?",
      options: [
        "Perché costa meno",
        "Perché nella roccia può essere intrappolato il gas metano, altamente esplosivo",
        "Perché i motori a scoppio fanno troppo rumore",
        "Per non inquinare l'aria della galleria"
      ],
      answer: 1,
      explanation: "Nella roccia può essere intrappolato il gas metano, altamente esplosivo. Per questo motivo si usano motori ad aria compressa invece che a scoppio, per evitare accensioni accidentali."
    },

    {
      q: "Come viene estratto il carbone quando il giacimento è vicino alla superficie?",
      options: [
        "Con pozzi profondi oltre 500 metri",
        "Con pompe idrauliche dal mare",
        "In miniere a cielo aperto, usando escavatori con ruota a tazze",
        "Con esplosivi a grande profondità"
      ],
      answer: 2,
      explanation: "Quando il giacimento è vicino alla superficie (fino a 100 m) si usano miniere a cielo aperto. La crosta rocciosa viene rimossa con le ruspe, poi grandi escavatori con ruota a tazze (torri alte 70 m, su cingoli) scavano il filone. Un nastro trasportatore porta il carbone alla centrale termoelettrica."
    },

    {
      q: "In una centrale termoelettrica a carbone, a che temperatura arriva il vapore nei tubi bollitori?",
      options: ["100 °C", "200 °C", "300 °C", "600 °C"],
      answer: 2,
      explanation: "I tubi bollitori sono scaldati dalle fiamme nella caldaia e trasformano l'acqua in vapore a una temperatura di 300 °C. Poi i tubi surriscaldatori aumentano la temperatura fino a 450 °C e la pressione fino a 90 kg/cm²."
    },

    {
      q: "Nel percorso dei fumi di una centrale a carbone, quale filtro abbatte l'80% dell'anidride solforosa?",
      options: [
        "Il denitrificatore",
        "Il captatore di polveri",
        "Il desolforatore",
        "Il condensatore"
      ],
      answer: 2,
      explanation: "Il desolforatore abbatte l'80% dell'anidride solforosa (SO₂, responsabile delle piogge acide). Il denitrificatore abbatte il 60% degli ossidi di azoto, il captatore di polveri il 75% delle particelle solide."
    },

    {
      q: "Cos'è la sismica a riflessione?",
      options: [
        "Una tecnica per individuare le trappole petrolifere usando onde riflesse dagli strati rocciosi",
        "Una tecnica per estrarre il petrolio",
        "Un tipo di terremoto",
        "Un sistema di trasporto del gas"
      ],
      answer: 0,
      explanation: "La sismica a riflessione invia onde nel sottosuolo e analizza quelle riflesse dagli strati rocciosi. Il computer disegna il profilo degli strati: se ci sono trappole (es. a cupola) si scavano i pozzi esplorativi."
    },

    {
      q: "Quale percentuale di greggio riesce a recuperare la pompa di estrazione a bilanciere?",
      options: ["10%", "70%", "100%", "40%"],
      answer: 3,
      explanation: "La pompa di estrazione a bilanciere si usa quando la pressione naturale non è più sufficiente. Permette di recuperare il 40% del greggio che rimane nel giacimento."
    },

    {
      q: "Fino a che profondità lavorano le navi di perforazione offshore?",
      options: ["fino a 100 m", "fino a 600 m", "fino a 3000 m", "fino a 10000 m"],
      answer: 2,
      explanation: "Le piattaforme jack-up fino a 100 m, le piattaforme galleggianti fino a circa 600 m, le navi di perforazione fino a 3000 m. Le navi usano un sistema di 6 eliche per compensare vento e correnti."
    },

    {
      q: "Come si chiama il processo che in raffineria separa i componenti del petrolio?",
      options: [
        "Combustione frazionata",
        "Distillazione frazionata",
        "Cokizzazione",
        "Rigassificazione"
      ],
      answer: 1,
      explanation: "La raffinazione del greggio avviene per distillazione frazionata in una torre alta 80 m. Ogni sostanza condensa a una temperatura specifica: gasolio a 300°C, kerosene a 250°C, benzina a 120°C, propano/butano a 60°C. In alto metano ed etano, in fondo il bitume."
    },

    {
      q: "Come sono fatti i metanodotti internazionali per il trasporto del gas?",
      options: [
        "Tubi di plastica di 30 cm",
        "Tubi di acciaio saldati da 120 cm di diametro, con saldature controllate ai raggi X",
        "Cavi di rame interrati",
        "Tubi di cemento armato"
      ],
      answer: 1,
      explanation: "I metanodotti internazionali hanno tubi di 120 cm di diametro. Le saldature sono radiografate ai raggi X per controllare che non vi siano perdite. L'Italia importa gas dall'Algeria (Transmed, 2000 km), dalla Libia (Greenstream, 590 km) e dalla Russia (oltre 5000 km)."
    },

    {
      q: "Perché le centrali di stoccaggio del metanodotto non sono normali serbatoi?",
      options: [
        "Perché costerebbero troppo",
        "Perché esplodono facilmente",
        "Perché sono giacimenti esauriti riutilizzati, localizzati nel sottosuolo",
        "Perché il gas verrebbe disperso"
      ],
      answer: 2,
      explanation: "Le centrali di stoccaggio non sono serbatoi ma giacimenti esauriti, localizzate nel sottosuolo. Servono per le scorte in caso di emergenza."
    },

    // ── AVANZATO (6 domande) ─────────────────────────

    {
      q: "Perché le emissioni di CO₂ di una centrale a carbone non possono essere abbattute dai filtri?",
      options: [
        "Perché i filtri costano troppo",
        "Perché la CO₂ è invisibile",
        "Perché la CO₂ non è inquinante",
        "Perché sono legate al fenomeno stesso della combustione"
      ],
      answer: 3,
      explanation: "La CO₂ viene prodotta sempre bruciando carbonio: è una conseguenza inevitabile della combustione. Restano circa 330 g di CO₂ per kWh prodotto, non riducibili dai filtri."
    },

    {
      q: "Perché il carbone è considerato il combustibile fossile più inquinante?",
      options: [
        "Perché è di colore nero",
        "Perché produce più CO₂ di tutti gli altri",
        "Perché è radioattivo",
        "Perché immette nell'aria molta SO₂, ossidi di azoto, polveri sottili e molta CO₂"
      ],
      answer: 3,
      explanation: "Il carbone è il combustibile più inquinante perché immette nell'aria molta anidride solforosa (SO₂), ossidi di azoto (NOx), polveri sottili e molta CO₂. In molti paesi ne è vietato l'uso domestico."
    },

    {
      q: "Confrontando benzina e gasolio, quali inquinanti emette in più il gasolio?",
      options: [
        "Solo CO₂",
        "Ossidi di zolfo e particolato visibile come polvere nera dai tubi di scarico",
        "Solo acqua",
        "Solo vapore"
      ],
      answer: 1,
      explanation: "Il gasolio emette gli stessi inquinanti della benzina ma in quantità maggiori. In più emette ossidi di zolfo e particolato talvolta osservabile come polvere nera in uscita dai tubi di scarico. Entrambi i combustibili liberano 290 g di CO₂ per kWh."
    },

    {
      q: "Perché il gas venting è più dannoso del gas flaring?",
      options: [
        "Perché brucia a temperatura più alta",
        "Perché consuma più energia",
        "Perché libera in atmosfera metano, un gas serra 21 volte più potente della CO₂",
        "Perché è visibile dai satelliti"
      ],
      answer: 2,
      explanation: "Il gas venting rilascia direttamente metano, che ha un potenziale di riscaldamento 21 volte superiore a quello della CO₂. Il gas flaring invece brucia il gas in torcia trasformandolo in CO₂, meno dannosa."
    },

    {
      q: "Qual è la differenza tra centrale turbogas e centrale a ciclo combinato?",
      options: [
        "Non c'è nessuna differenza",
        "Il turbogas usa petrolio, il ciclo combinato carbone",
        "Il turbogas ha rendimento 30% con combustione interna; il ciclo combinato aggiunge una turbina a vapore alimentata dai gas di scarico e arriva al 60%",
        "Il turbogas produce calore, il ciclo combinato elettricità"
      ],
      answer: 2,
      explanation: "Il turbogas ha una turbina a gas a combustione INTERNA (come un motore d'auto) e un rendimento del 30% (70% disperso in calore). Il ciclo combinato associa al turbogas una turbina a vapore: i gas di scarico caldissimi alimentano uno scambiatore che genera vapore per una seconda turbina. In questo modo si recupera energia e si arriva fino al 60% di rendimento."
    },

    {
      q: "Metti in ordine cronologico le tre fasi di formazione del carbone:",
      options: [
        "Compressione → carbonizzazione → crescita",
        "Sprofondamento → crescita foreste → formazione giacimento",
        "Formazione giacimento → sprofondamento → crescita foreste",
        "Crescita delle foreste preistoriche → sprofondamento e compressione → formazione del giacimento"
      ],
      answer: 3,
      explanation: "Prima crescono grandi foreste nel clima caldo-umido, poi il terreno sprofonda e gli alberi vengono coperti dal fango che si trasforma in roccia comprimendo la massa vegetale, infine in milioni di anni si formano gli strati di carbone (il giacimento)."
    }

  ]
};