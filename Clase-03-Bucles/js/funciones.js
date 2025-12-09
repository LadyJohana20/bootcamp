
// ES5 
// función tradicional: bloque de código reutilizable
function saludar() {
  console.log("Hola Pepe");
}

// se ejecuta cuando invocamos o llamamos a la función
saludar();

let funcion = saludar();

//console.log("El valor de nombre es: ", nombre);

// función con parámetros: es una variable local a la función
function saludarPersona(nombre, edad, ciudad, pais, profesion) {
  console.log("Hola " + nombre);
  console.log("Edad: " + edad);

}

console.log("========================================================");

let nombre = "Pepe";
let edad = 30;

// invocamos la función con un argumento
saludarPersona("María");
saludarPersona("Juan");
saludarPersona("Ana");
saludarPersona(nombre, edad);
saludarPersona(edad, nombre);// el orden de los argumentos importa


console.log("========================================================");

// ES6
// función flecha (arrow function)
const despedirPersona = () => {
  console.log("Adiós Pepe");
};

despedirPersona();

const despedirPersonas = (nombre) => {
  console.log("Adiós Pepe y " + nombre);
};

despedirPersonas("María");

console.log("==================================/*  */======================");

// función con valor de retorno utilizando return
function sumar(a, b) {// no es buena práctica usar variables con una sola letra
  let resultado = a + b;
  return resultado;
}

function calculaIva(precio, montoIva) {
  let iva = (precio * montoIva) / 100;
  return iva;
  
  console.log("Nunca me van a ver en la consola");// código que no se ejecuta nunca
  
}

console.log("==================================/*  */======================");


let zapatillasPrecio = 1000;



let zapatillasPrecioconIva = zapatillasPrecio + calculaIva(zapatillasPrecio, 21);

console.log("El precio de las zapatillas con IVA es: ", zapatillasPrecioconIva);