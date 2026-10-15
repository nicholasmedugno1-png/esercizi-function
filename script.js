/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — area
   Funzione area(l1, l2) che ritorna l1 * l2.
   Stampa area(3, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function  area(l1, l2) {
   return l1 * l2
   };
console.log(area(3, 4));

/* ESERCIZIO 2 — sommaPazza
   Funzione sommaPazza(a, b): ritorna a + b.
   Se a === b: ritorna (a + b) * 3.
   Prova con (2, 3) e (4, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function sommaPazza(a, b){
if( a === b) {
   return (a + b)* 3
} else {
   return a + b;
}
};
console.log(`il risultato e: ${sommaPazza(4, 4)}`);
console.log(`il risultato e: ${sommaPazza(2, 3)}`);

/* ESERCIZIO 3 — distanzaDa19
   Funzione distanzaDa19(n): ritorna Math.abs(n - 19).
   Se n > 19: ritorna distanza * 3.
   Prova con 5 e 25.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function distanzaDa19(n) {
   if(n > 19 ) {
      return Math.abs(n - 19)*3
   } else {
      return Math.abs(n -19)
   }
};
console.log(`la distanza moltiplicata per 3 dal numero 19 e: ${distanzaDa19(25)}`);
console.log(`la distanza dal numero 19 e: ${distanzaDa19(5)}`);
/* ESERCIZIO 4 — dentroIntervallo
   Funzione dentroIntervallo(n):
   true se n è tra 20 e 100 (compresi) oppure è esattamente 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5 — epify
   Funzione epify(testo): aggiunge "EPICODE " davanti.
   Se il testo comincia già con "EPICODE", lo lascia invariato.
   Usa startsWith.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(testo) {
   if(testo.startsWith('EPICODE')){
     return testo
   } else {
      return testo = 'EPICODE' + ' ' + testo
   }
};

console.log(epify('ci insegna a programmare'));
/* ESERCIZIO 6 — divisibilePer3o7
   Funzione divisibilePer3o7(n): true se n positivo E divisibile per 3 O per 7.
*/

function divisibilePer3o7(n) {
   if( n > 0 && (n % 3 === 0 || n % 7 === 0)){
      return true;
      } else {
      return false;
      
   }

};
console.log(divisibilePer3o7(42));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7 — invertiStringa
   Funzione invertiStringa(testo): ritorna la stringa invertita.
   Vincolo: niente .reverse() di array.
   Suggerimento: split("") + for al contrario + join("").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function invertiStringa(testo){
   const myString = testo.split('')
   const testoInvertito = []
   console.log(myString)
   for( let i = myString.length - 1; i >= 0; i--){
    testoInvertito.push(myString[i])
   }
   testoInvertito.join('')
   return testoInvertito
}
console.log(invertiStringa('ciao'))
/* ESERCIZIO 8 — inizialiMaiuscole
   Funzione inizialiMaiuscole(frase): metti in maiuscolo la prima lettera di ogni parola.
   "ciao mondo" → "Ciao Mondo".
   Suggerimento: split(" ") + for + slice(0,1).toUpperCase() + slice(1) + join(" ").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function inizialiMaiuscole(frase) {
   const arrayFrase = frase.split(' ')
   console.log(arrayFrase)
   for( let i = 0; i < arrayFrase.length; i++) {
     arrayFrase[i] = arrayFrase[i].slice(0, 1).toUpperCase() + arrayFrase[i].slice(1)
      }
   return arrayFrase.join(' ')
}
console.log(inizialiMaiuscole('ciao mondo'))
/* ESERCIZIO 9 — togliPrimoEUltimo
   Funzione togliPrimoEUltimo(testo): rimuovi primo e ultimo carattere.
   Usa slice. Prova con "EPICODE".
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function togliPrimoEUltimo(testo) {
      return testo.slice(1 , testo.length -1 )
      }
console.log(togliPrimoEUltimo('EPICODE'))

/* ESERCIZIO 10 — dammiCasuali
   Funzione dammiCasuali(n): ritorna un array di n numeri interi casuali tra 0 e 10 (inclusi).
   Usa Math.random e Math.floor.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function dammiCasuali(n) {
   const myNumber = [];
   for(let i = 0 ; i < 10; i++){
       const numeroCasuale = Math.floor(Math.random()* 11) ;
      myNumber.push(numeroCasuale)
   }
   return myNumber
}
console.log(dammiCasuali())
/* --EXTRA-- ESERCIZIO 11 — etaInGiorni
   Funzione etaInGiorni(annoNascita, meseNascita, giornoNascita).
   Ritorna l'età in giorni rispetto a oggi.
   - new Date() per oggi
   - new Date(anno, mese - 1, giorno) per la nascita (mese 0-based!)
   - oggi - nascita = millisecondi
   - dividi per 1000 * 60 * 60 * 24 e Math.floor per i giorni interi
   Stampa: "Hai X giorni!"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
