// DATI
const chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));
console.log(chilometri, eta);

// LOGICA
const prezzoBiglietto = chilometri * 0.21;

let sconto = 0;

if (eta > 65) {
    sconto = prezzoBiglietto * 0.40;
} else if (eta < 18) {
    sconto = prezzoBiglietto * 0.20;
} 

console.log(sconto);

const prezzoBigliettoFinale = prezzoBiglietto - sconto;
console.log(prezzoBigliettoFinale);

const message = `
<h2>Ciao!</h2>
<p>Ecco il prezzo del tuo biglietto: ${prezzoBigliettoFinale.toFixed(2)} €</p>
`;


// OUTPUT
document.getElementById("result").innerHTML = message;