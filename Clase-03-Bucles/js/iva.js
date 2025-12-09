
// capturamos los elementos del DOM donde mostraremos los resultados
let precioSinIva = document.getElementById("precioSinIva");
let precioConIva = document.getElementById("precioConIva");


// función para calcular el IVA y mostrar los resultados en el DOM
function calculaIva() {
  
  alert("¡Bienvenidos a la tienda online!");

  // recibimos el precio del producto y el monto del IVA mediante prompt
  let precioProducto = prompt("Ingrese el precio del producto para calcular el IVA:");
  
  let montoIva = prompt("Ingrese el porcentaje de IVA (por ejemplo, 21 para 21%):"); 
  
  precioProducto = parseFloat(precioProducto); // Convertir a número decimal
  montoIva = parseFloat(montoIva); // Convertir a número decimal

  let iva = (precioProducto * montoIva) / 100;
  
  precioSinIva.innerText = "Precio sin IVA: $" + precioProducto;
  precioConIva.innerText = "Precio con IVA: $" + (precioProducto + iva);
  
}


// llamamos a la función para calcular y mostrar el IVA
//calculaIva(precioProducto, montoIva);