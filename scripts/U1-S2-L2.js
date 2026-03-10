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
