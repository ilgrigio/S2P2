// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare 
sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve 
determinare il costo totale del carrello.

ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato 
del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire 
scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. 
Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la 
frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti 
nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [34, 5, 55];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = []; //cambia il valore qui per provare se il tuo
//algoritmo funziona!

utenteCheEffettuaLAcquisto.push(marco, paul, amy);
console.log(utenteCheEffettuaLAcquisto);

for (let u = 0; u < utenteCheEffettuaLAcquisto.length; u++) {
  if (utenteCheEffettuaLAcquisto[u].isAmbassador === true) {
    console.log(
      utenteCheEffettuaLAcquisto[u].name +
        " " +
        utenteCheEffettuaLAcquisto[u].lastName,
      "è un ambassador"
    );
  } else
    console.log(
      utenteCheEffettuaLAcquisto[u].name +
        " " +
        utenteCheEffettuaLAcquisto[u].lastName,
      "non è un ambassador"
    );
}

console.log("-----Utenti Ambassator-----");
const utenteAmbassador = [];

for (let u = 0; u < utenteCheEffettuaLAcquisto.length; u++) {
  if (utenteCheEffettuaLAcquisto[u].isAmbassador === true) {
    utenteAmbassador.push(utenteCheEffettuaLAcquisto[u]);
    // console.log(utenteAmbassador[u]);
  } // else console.log("non è Amb");
}
console.log(utenteAmbassador);

console.log("-----APPLICAZIONE SCONTO-----");
// const sommaPrices = Math.sum(prices); // Somma i valori dentro prices
let tot = 0;
let prezzoScontato = 0;

for (p = 0; p < prices.length; p++) {
  tot += prices[p];
  prezzoScontato = tot - (tot * 30) / 100;
  if (utenteCheEffettuaLAcquisto.isAmbassador === true && tot > 100) {
      console.log("1 Hai diritto al 30% di sconto! "),
      console.log(
        "La tua spedizione è gratis. Totale da pagare: ", prezzoScontato
      );
  } else if (utenteCheEffettuaLAcquisto.isAmbassador === true && tot < 100) {
      console.log("2 Hai diritto al 30% di sconto! "),
      console.log(
        "Totale carrello:",
        prezzoScontato + " il costo di spedizione è",
        shippingCost, "Totale da pagare: ", prezzoScontato + shippingCost
      );
  } else if (
    utenteCheEffettuaLAcquisto[p].isAmbassador === false &&
    tot <= 100
  ) {
    console.log(
      "Totale carrello:",
      tot + " costo di spedizione",
      shippingCost, "Totale: ", tot + shippingCost
    );
  }
}
console.log(tot);
