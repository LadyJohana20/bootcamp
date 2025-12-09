// Captura de datos del html - h1 con id="titulo"
let titulo = document.getElementById("titulo")
console.log(titulo);

// Modificación del contenido del html
titulo.innerText = "EJERCICIO 6 - BONUS ";

// Le damos un estilo al titulo
titulo.style.textAlign = "center";


// Capturamos datos del form con el input
// 1. Creamos una variable para cada input
let nombre;
let nombre1;
let apellido;
let apellido1;


// nuestra primer función personalizada
// if(){}
function capturaDatos(){
  // 2. Capturamos los datos del input
  nombre = document.getElementById("nombre").value;
  nombre1 = document.getElementById("nombre1").value;
    apellido = document.getElementById("apellido").value;
    apellido1 = document.getElementById("apellido1").value;

  // validamos que los datos no esten vacios
if(nombre == "" && apellido == "" && apellido1 == "" ){// si ambos estan vacios
    alert("El nombre y apellido no puede estar vacio");
    return; // corta la ejecución de la función
  } 

if(nombre == "" || apellido == "" || apellido1 >= 10){// si el precio es menor o igual a 0
    alert("El nombre o apellido no puede estar vacio");
    return; // corta la ejecución de la función
  }  
    

  console.log(nombre);
  console.log(nombre1);
  console.log(apellido);
  console.log(apellido1);
}

