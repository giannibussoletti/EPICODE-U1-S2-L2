// GLI ARRAY
// Un array è una struttura dati complessa di JS.
// Permette di racchiudere sotto un unico nome, una unica variabile una serie potenz. infinita di VALORI
// occhio! gli oggetti erano una serie di COPPIE (chiave:valore), gli array sono SOLO I VALORI!

const nomi = ["Stefano", "Noemi", "Roberto", "Camilla"]
const numeriPreferiti = [3, 7, 10, 50, 100]
const valoriBooleani = [true, true, false]
const oggetti = [{ age: 20 }, { age: 18 }, { age: 45 }]

//si possono creare anche un array misto
const misto = ["giangiorgio", 35, false, "sio", { sio: true }]

// in un array gli elementi NON sono dotati di CHIAVI (come per gli oggetti)
// quindi l'unica cosa che differenzia gli elementi (e ci permette di prelevarne uno oppure un altro)
// è la loro POSIZIONE all'interno dell'array!
// es.
// 'Stefano' è il PRIMO elemento di nomi -> INDICE 0
// 'Noemi' è il SECONDO elemento di nomi -> INDICE 1
// 'Roberto' è il TERZO elemento di nomi -> INDICE 3
// 'Camilla' è il QUARTO elemento di nomi -> INDICE 4

// Gli array in JS sono zero-indexed based, cioè le posizioni dei vari elementi si cominciano a contare da 0
// l'indice di un array parte da zero
// Per sapere quanto è "lungo" un array si usa la proprietà "length". Questa proprietà comincia a contare da 1 perché conta gli elementi all'iterno dell'array
console.log(nomi.length) // 4
console.log(numeriPreferiti.length) // 5
console.log(valoriBooleani.length) // 3
console.log(oggetti.length) // 3

// Per sapere la posizione  dell'INDICE dell'ultimo elemento di un array si va lenght - 1
console.log(nomi.length - 1) // 4

// per estrapolare un elemento di un array si scrive nomeArray[indice]
nomi[2]
console.log("nomi[0], nomi[1], nomi[2], nomi[3]", nomi[0], nomi[1], nomi[2], nomi[3]) // il risultato è "Roberto"

nomi[0] // "Stefano"
nomi[1] // "Noemi"
nomi[2] // "Roberto"
nomi[3] // "Camilla"
