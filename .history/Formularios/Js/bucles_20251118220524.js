

//condicionales If  Si...

let edad = -25;
//sintaxis del if
//palabra reservada if
//parentesis ()
//llaves {}
// if(condicion a evaluar){
//     //codigo a ejecutar si la condicion es verdadera
// } else {
//     //codigo a ejecutar si la condicion es falsa
// }   
if(edad == 18){ //operador de comparacion doble igual ==
    console.log("Puedes comprar bebidas ==18 -" + edad);
}

if(edad > 18){ //operador de orden mayor que >
    console.log("Puedes comprar bebidas >18 -"  + edad);
}
if(edad >= 18){ //operador de orden mayor o igual que >=
    console.log("Puedes comprar bebidas >=18 -" + edad);
}
if(edad < 0){ //operador de orden menor que <  
    console.log("Edad no valida <0 -" + edad);
}
if(edad <= 0){ //operador de orden menor o igual que <=
    console.log("edad no valida <=0 -" + edad);
}  


let Password = "admi11111000000000"; //string o cadena de texto
console.log("el password es: " + Password.length + " caracteres");
if(Password.length >= 12){ //validar longitud de password
    console.log("bienvenido, password seguro");
}
else{
    console.log("password inseguro, debe tener al menos 12 caracteres");
}

console.log("-----------------");
console.log("-----------------");


//el if que responde a nuestro formulario
if(Password.length >= 6 && Password.length <=15 ){ //validar longitud de password
    console.log("bienvenido, password seguro");
}
else{
    console.log("password debe tener entre 6 y 15 caracteres");
}
// if(Password.length < 12){ //validar longitud de password
//     console.log("password inseguro, debe tener al menos 12 caracteres");

//ejemplo con viaje
let pasaporteVigente = true;
let pasajeComprado = true;
