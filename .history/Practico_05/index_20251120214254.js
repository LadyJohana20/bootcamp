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

 const gatos = ["🐈‍" , " 😹"]; 

 const pasos2 = "🐾".repeat(cantidadDePasos2);

 console.log("\nEjercicio 3\n");
 for (let i = 1; i <= cantidadDeGatos3; i++) {
     let gato = gatos[(i - 1 )% 2];
     console.log("Gato #" + i + ": " + gato + " " + pasos2);
}

