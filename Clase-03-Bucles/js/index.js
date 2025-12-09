

// indice; orden; posición
//                  0       1         2
let productos = ['coca', 'pepsi', 'sprite'] /* arreglo o array de datos */

//              0    1    2
let precios = [150, 140, 130] /* arreglo o array de datos */

//               0       1      2
let empleado = ['juan', 25, 'Córdoba'] /* arreglo o array de datos */


/* 
let pan = 'pan'
let leche = 'leche'
let queso = 'queso'
let huevos = 'huevos'
*/

console.log(productos);
console.log(productos.length);



//acceso a los elementos del array por el indice
console.log(productos[0]) // 'coca'
console.log(productos[1]) // 'pepsi'
console.log(productos[2]) // 'sprite'


// acceso mediante los bucles
// for
for (let i = 0; i < productos.length; i++) {
  console.log('Productos: ' + productos[i]);
} 


// Captura de datos del html - h1 con id="titulo"
let titulo = document.getElementById("titulo")
console.log(titulo);

// Modificación del contenido del html
titulo.innerText = "Listado de productos";

// Le damos un estilo al titulo
titulo.style.textAlign = "center";


// Capturamos datos del form con el input
// 1. Creamos una variable para cada input
let nombreProducto;
let precioProducto;


// nuestra primer función personalizada
// if(){}
function capturaDatos(){
  // 2. Capturamos los datos del input
  nombreProducto = document.getElementById("nombreProducto").value;
  precioProducto = document.getElementById("precioProducto").value;

  // validamos que los datos no esten vacios
if(nombreProducto == "" && precioProducto == ""){// si ambos estan vacios
    alert("El nombre del producto no puede estar vacio");
    return; // corta la ejecución de la función
  } 

if(nombreProducto == "" || precioProducto == "" || precioProducto >= 10){// si el precio es menor o igual a 0
    alert("El precio del producto no puede estar vacio");
    return; // corta la ejecución de la función
  }  
    

  console.log(nombreProducto);
  console.log(precioProducto);
}




















// while
/* let cargaDatos = confirm('Desea cargar un producto? (si/no)') 
let indice = 0

while (indice < 3) {
  let nombreProducto = prompt('Ingrese el nombre del producto')

  productos.push(nombreProducto)

  console.log(productos);

  indice++
} */