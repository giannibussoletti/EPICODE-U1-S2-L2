// RIASSUNTO DELLE PUNTATE PRECEDENTI

// JS È UN LINGUAGGIO WEAKLY-TYPED ("debolmente tipizzato"): la creazione delle variabili
// non dipende dal TIPO di DATO che dovete metterci dentro!
// tutte le variabili si creano con le parole "let" e "const"

// let --> variabili con valore riassegnabile
// const --> crea variabili il cui VALORE invece rimane lo stesso da inizio a fine vita dello script

// TIPI DI VARIABILI
let var1 = 100 // tipo numerico, "number"
let var2 = "Caratter alfanumerici 10" // caratteri alfanumerici "string"
let var3 = true // logica booleana TRUE o FALSE, "boolean"
// Tipi particolari
let var4 // senza dichiarazione il valore di default è "undefined", quindi non ha un valore specificico
let var5 = null // null invece esplicita l'assenza esplicita di valore, vuoto assoluto.

//VEDERE LA VARIABILE NELLA CONSOLE
console.log("valore di variable1:", var1) // vedrei nella console del browser il valore 100
console.log("quanto vale variable5:", var5) // vedrei nella console del browser il valore null
// potete anche verificare il TIPO di una variabile
console.log("andiamo a vedere il tipo di variable4:", typeof variable4)

// le let sono riassegnabili
variable1 = 101 // ammesso!

// le const non sono riassegnabili
const myName = "Stefano"
// myName = 'Roberto' // non si può fare !
console.log("ARRIVO QUI ??")

// OPERATORI MATEMATICI
// + - * / %
let number1 = variable1 + 1 // 102
number1 = number1 * 2 // 204
console.log("number1 è 204?", number1)
let divisione = number1 / 50
console.log("divisione vale", divisione) // 4,08
let resto = number1 % 20
console.log("divisione vale", resto) // da 4 perché 20 nel 204 ci sta 10 volte e il resto è di 4.

// OPERATORI COMPARAZIONE
// delle operazioni logiche che restituiscono un valore booleano
// > < >= <= === !==

// AND (&&) e OR (||)
// con AND si comparano 2 o più variabili e tutte devono essere vere
// con OR anche si comparano 2 o più variabili ma va bene che anche solo 1 sia vera
