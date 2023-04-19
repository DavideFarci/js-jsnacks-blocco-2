/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero
Se è dispari inseriscilo nell’array
*/

// creo un array vuoto
let eleOdd = [];

//Per chiedere 6 numeri all'utente imposto un ciclo che faccia apparire un prompt per 6 volte 

for (i = 0; i < 6; i++) {
    const eleNum = parseInt(prompt("Dammi un numero"));
    /*
    SE il resto della divisione tra il numero dato e 2 è diverso da 0
        ALLORA lo aggiungo all'array e stampo l'array modificato in console
    */
    if (eleNum % 2 !== 0) {
        eleOdd.push(eleNum);
    }
}

console.log(eleOdd);