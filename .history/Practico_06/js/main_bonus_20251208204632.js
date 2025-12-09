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

let nombre2;
let nombre3;
let apellido2;
let apellido3;


// nuestra primer función personalizada

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

function capturaDatos1(){
  // 2. Capturamos los datos del input
  nombre2 = document.getElementById("nombre2").value;
  nombre3 = document.getElementById("nombre3").value;
    apellido2 = document.getElementById("apellido2").value;
    apellido3 = document.getElementById("apellido3").value;

  // validamos que los datos no esten vacios
if(nombre2 == "" && apellido2 == "" && apellido3 == "" ){// si ambos estan vacios
    alert("El nombre y apellido no puede estar vacio");
    return; // corta la ejecución de la función
  } 

if(nombre2 == "" || apellido2 == "" || apellido3 >= 10){// si el precio es menor o igual a 0
    alert("El nombre o apellido no puede estar vacio");
    return; // corta la ejecución de la función
  }  
    

  console.log(nombre2);
  console.log(nombre3);
  console.log(apellido2);
  console.log(apellido3);
}

function mostrarDatos(){
  // mostramos los datos capturados en el html
  let mostrar = document.getElementById("mostrarDatos");
  mostrar.innerHTML = "<h3>Datos Capturados:</h3>" +
                      "<p><strong>Primer Integrante:</strong> " + nombre + " " + nombre1 + " " + apellido + " " + apellido1 + "</p>" +
                      "<p><strong>Segundo Integrante:</strong> " + nombre2 + " " + nombre3 + " " + apellido2 + " " + apellido3 + "</p>";
}




