console.log("IL FOGLIO FUNZIONA")

//PARLIAMO ORA DI STRUTTURE DATI COMPLESSE

//OGGETTI
//nella programmazione un "oggetto" è la controparte digitale di un oggetto IRL ("in real life")
//cosi come nella vita reale, un oggetto digitale è una singola entità composta di diverse caratteristiche ("proprietà")

// un oggetto si dicara con un paio di parentesi GRAFFE
// gli oggetti si dichiarano con const perché sulla memoria è più leggera in quanto è una variabile non modificabile
const chair = {
  // all'interno delle parentesi graffe si dichiarano TUTTE le PROPRIETA' dell'oggetto
  colore: "nero",
  numeroRoute: 4,
  reclinabile: true,
  // si mettono dentro un oggetto racchiudendole nella stessa variabile
  // le proprietà possono essere da 0 a infinite
  // tutte le proprieta sono delle COPPIE "chiave:valore" --> "key:value"
  // in una coppia di valore l'operatore non è = ma : due punti
  // le varie coppie vengono separate tramite virgola ","
  // i valori delle chiavi possono essere di qualsiasi tipo: numeri, stringhe, boolean, undefined, nulle, ALTRI OGGETTI
}

const lampada = {
  temperaturaLuce: "3500k",
  interruttore: true,
  materiale: "ottone",
  aNorma: true,
  prezzo: {
    // le singole chiavi possono avere multipli valori
    qty: 35,
    curr: "euro",
  },
}
console.log("Oggetto lampada prima delle modifiche")
console.log(lampada)
// l'ordine delle proprietà non influenza il funzionamento dell'oggetto, i vari broswer possono riordinare le varie key in base a differenti fattori, per esempio CHROME le mette in ordine alfabetico.

//come faccio ad ottenere uno specifico valore?
// CI SONO DUE MODI PER ACCEDERE ALLA PROPRIETA DEGLI OGGETTI
// 1) "DOT NOTATION"
lampada.materiale // Si usa il punto e si chiama il valore interessato in questo caso un console.log darebbe ottone
lampada.prezzo.qty //per scendere più in basso basta usare sempre il punto e richiamare il sottovalore interessato, in questo caso è 35

// 2) "SQUARE BRACKETS NOTATION"

lampada["materiale"]

let value = "aNorma"
lampada.value // undefined
lampada[value] // true
// la square brackets notation si utilizza quando si vuole accedere alla proprietà di un oggetto
// ma non si ha magari il nome della chiave! si ha però una variabile il cui VALORE è il nome della chiave!
//lampada.value non esiste perché value non è definito in lampada
// le parentesi quadre invece vanno a vedere il valore di value e lo va a cercare nell'oggetto lampada

//LE I VALORI DELLE CHIAVI SONO MODIFICABILI
lampada.interruttore = false
lampada.materiale = "legno"
lampada.temperaturaLuce = "7000k"
lampada.prezzo.curr = "drakma"

console.log("Oggetto lampada dopo le modifiche")
console.log(lampada)
