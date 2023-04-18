/*
Generatore di “nomi cognomi” casuali: 
il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

let eleNome = ["Mario", "Paolo", "Giulio", "Vincenzo", "Venanzio", "Ernesto", "Marcello", "Gennaro"];
let eleCognome = ["Pattagarraiu", "Urra", "Patagherro", "Manago", "Filipittorre", "Assattinarroesto"];
let eleNomiCognomi = []


/*
Creo un ciclo nel quale si scorrano tutti gli i degli array "eleNome" "eleCognome"
creo una variabile che unisca un valore random dei due array
*/

for (i = 0; i < eleNome.length; i++) {

    let eleAdd = eleNome[i] + " " + eleCognome[i];
    eleNomiCognomi.push(eleAdd);

    // let eleNomeCasuale = eleNome[Math.floor(Math.random() * eleNome.length)];
    // let eleCognomeCasuale = eleCognome[Math.floor(Math.random() * eleCognome.length)];
    // let eleMix = eleNomeCasuale + " " + eleCognomeCasuale;
    // eleNomiCognomi.push(eleMix);
}

console.log(eleNomiCognomi);