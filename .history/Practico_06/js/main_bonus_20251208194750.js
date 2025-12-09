// Captura de datos del html - h1 con id="titulo"
let titulo = document.getElementById("titulo")
console.log(titulo);

// Modificación del contenido del html
titulo.innerText = "EJERCICIO 6 - BONUS ";

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

