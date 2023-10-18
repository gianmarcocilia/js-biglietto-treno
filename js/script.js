// DATI
const chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));
console.log(chilometri, eta);

// LOGICA
const prezzoBiglietto = chilometri * 0.21;

let sconto = "";

if (eta > 65) {
    sconto = 0.40;
} else if (eta < 18) {
    sconto = 0.20;
} else {
    sconto = 1;
}
console.log(sconto);

const prezzoBigliettoFinale = (prezzoBiglietto * sconto).toFixed(2);
console.log(prezzoBigliettoFinale);

const message = `
<h2>Ciao!</h2>
<p>Ecco il prezzo del tuo biglietto: ${prezzoBigliettoFinale}</p>
`;


// OUTPUT
document.getElementById("result").innerHTML = message;