/*
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

// creo un array di numeri interi 
let eleWhole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let eleOdd = 0;

// creo un ciclo che scorra tutto eleWhole ogni due valori 
for (i = 0; i < eleWhole.length; i++) {
    if (i % 2 !== 0) {
        eleOdd += eleWhole[i];
        console.log(eleOdd);
    }
}

console.log("La somma dei numeri in posizione dispari è:", eleOdd);

