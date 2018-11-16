// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente. Scrivi a che
// posizione della lista il nuovo utente si trova

//creo una lista di cognomi

var listaCognomi = ['a','b','c'];

//chiedo il cognome all'utente
var cognomeUtente = prompt('Digita il tuo cognome');

//inserisco il cognome nella lista
listaCognomi.push(cognomeUtente);

//metto in ordine alfabetico l'array

var ordineAlfabetico = listaCognomi.sort();

// creo una variabile che mi restituisca la posizione dell'ultimo elemento inserito
var posizioneNuovoCognome = listaCognomi.indexOf(cognomeUtente);

//stampo a video dove si trova l'ultimo cognome inserito
document.getElementById('pos').innerHTML = posizioneNuovoCognome;
