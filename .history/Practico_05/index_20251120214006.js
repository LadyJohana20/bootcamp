// Ejercicio 1
let cantidadDeGatos = 10;

const emojis = ["😺", "😸", "😹"];

console.log("\nEjercicio 1\n");
for (let i = 1; i <= cantidadDeGatos; i++) {
    let emoji = emojis[(i - 1) % 3]; 
    console.log("Gato #" + i + ": " + emoji);
}

// Ejercicio 2

let cantidadDeGatos2 = 8;
let cantidadDePasos = 5;

const emojiGato = "🐈";
const emojiPaso = "🐾";

let pasos = emojiPaso.repeat(cantidadDePasos);

console.log("\nEjercicio 2\n");
for (let i = 1; i <= cantidadDeGatos2; i++) {
    console.log("Gato #" + i + ":  " + emojiGato + " " + pasos);
}

//Ejercicio 3

let cantidadDeGatos3 = 8;
let cantidadDePasos2 = 3;

const gatos = ["🐈‍", "./Img/gatob.png"];

const pasos2 = "🐾".repeat(cantidadDePasos2);

console.log("\nEjercicio 3\n");

const outputEl = (typeof document !== 'undefined' && document.getElementById) ? document.getElementById('output') : null;

for (let i = 1; i <= cantidadDeGatos3; i++) {
    let gato = gatos[(i - 1) % 2];
    const label = "Gato #" + i + ": ";
    if (outputEl) {
        const p = document.createElement('p');
        p.style.margin = '4px 0';
        const labelNode = document.createTextNode(label);
        p.appendChild(labelNode);
        if (typeof gato === 'string' && (/\.(png|jpe?g|gif|webp|avif|svg)$/i).test(gato)) {
            const img = document.createElement('img');
            img.src = gato;
            img.alt = 'gato ' + i;
            img.style.height = '24px';
            img.style.verticalAlign = 'middle';
            p.appendChild(img);
            p.appendChild(document.createTextNode(' ' + pasos2));
        } else {
            p.appendChild(document.createTextNode(gato + ' ' + pasos2));
        }
        outputEl.appendChild(p);
    } else {
        console.log(label + gato + " " + pasos2);
    }
}

