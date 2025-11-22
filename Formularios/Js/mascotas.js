console.log('Archivo js: Vendo mascotas para cuidado');

// Operadores aritmeticos
/*
+ : suma / concatenacion
- : resta
* : multiplicacion
/ : division
*/

// varibles para almacenar datos de venta de mascotas
let ventasMascotas = 0; // cantidad de mascotas vendidas
let cancelMascotas = 0; // cantidad de mascotas canceladas

// Ejercicio: utilizamos las ventanas nativas de JavaScript para operadores
// alert, prompt y confirm

let nombreUsuario = 'Pepe';

// 1. Alert: mensaje al user
alert( nombreUsuario + ' Bienvenido a la tienda de mascotas');
/* alert('Tenemos las mejores mascotas para ti');
alert("Tenemos las mejores mascotas para ti " + nombreUsuario);
alert(`Tenemos las mejores mascotas para ti`); */

// 2. Prompt: pedir un dato al user

let mascotaDeseada = prompt('Ingrese la mascota que desea comprar: ', 'Este dato es obligatorio');

console.log('El usuario desea comprar una mascota de tipo: ', mascotaDeseada);

// 3. Confirm: pedir confirmacion al user
// true / false

let confirmarCompra = confirm('¿Confirma la compra de la mascota ' + mascotaDeseada + ' ?');

console.log('El usuario confirmo la compra: ', confirmarCompra);

if (confirmarCompra) {
    // incrementar la variable de ventas
    ventasMascotas = ventasMascotas + 1; // forma larga - contador
    // ventasMascotas += 1; // forma corta
    // ventasMascotas++; // forma mas corta aun
    alert('Gracias por su compra, lo esperamos pronto ' + nombreUsuario);
} else {
    // incrementar la variable de cancelaciones
    cancelMascotas++;
    alert('Gracias por su visita, lo esperamos pronto ' + nombreUsuario);
}

// Fin del ejercicio
console.log('================================================');

console.log('Total de mascotas vendidas: ', ventasMascotas);
console.log('El tipo de mascota vendida es: ' + mascotaDeseada);
console.log('La cantidad de cancelaciones son: ' + cancelMascotas);



console.log('================================================');