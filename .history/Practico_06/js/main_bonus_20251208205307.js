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
  
  // Mostrar los datos en el HTML
  mostrarIntegrantes();
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
  
  // Mostrar los datos en el HTML
  mostrarIntegrantes();
}

// Función para mostrar nombres y apellidos en el HTML
function mostrarIntegrantes() {
  // Capturar datos del formulario
  let datosPrimerIntegrante = {
    nombre: document.getElementById("nombre").value,
    nombre1: document.getElementById("nombre1").value,
    apellido: document.getElementById("apellido").value,
    apellido1: document.getElementById("apellido1").value
  };

  let datosSegundoIntegrante = {
    nombre: document.getElementById("nombre2").value,
    nombre1: document.getElementById("nombre3").value,
    apellido: document.getElementById("apellido2").value,
    apellido1: document.getElementById("apellido3").value
  };

  // Crear contenedor para mostrar los datos
  let contenedorResultado = document.getElementById("resultado-coincidencias");
  
  // Generar HTML para mostrar los integrantes
  let html = '<div style="display: flex; flex-direction: column; gap: 20px; margin-top: 20px;">';
  
  html += '<div style="border: 2px solid #007bff; padding: 15px; border-radius: 8px;">';
  html += '<h3 style="color: #007bff; margin-top: 0;">Integrante 1</h3>';
  html += '<p><strong>Primer nombre:</strong> ' + datosPrimerIntegrante.nombre + '</p>';
  html += '<p><strong>Segundo nombre:</strong> ' + datosPrimerIntegrante.nombre1 + '</p>';
  html += '<p><strong>Primer apellido:</strong> ' + datosPrimerIntegrante.apellido + '</p>';
  html += '<p><strong>Segundo apellido:</strong> ' + datosPrimerIntegrante.apellido1 + '</p>';
  html += '</div>';

  html += '<div style="border: 2px solid #28a745; padding: 15px; border-radius: 8px;">';
  html += '<h3 style="color: #28a745; margin-top: 0;">Integrante 2</h3>';
  html += '<p><strong>Primer nombre:</strong> ' + datosSegundoIntegrante.nombre + '</p>';
  html += '<p><strong>Segundo nombre:</strong> ' + datosSegundoIntegrante.nombre1 + '</p>';
  html += '<p><strong>Primer apellido:</strong> ' + datosSegundoIntegrante.apellido + '</p>';
  html += '<p><strong>Segundo apellido:</strong> ' + datosSegundoIntegrante.apellido1 + '</p>';
  html += '</div>';

  html += '</div>';

  // Mostrar en el HTML
  if(contenedorResultado) {
    contenedorResultado.innerHTML = html;
  } else {
    console.log("No se encontró el contenedor 'resultado-coincidencias'");
  }

  console.log("Datos mostrados en pantalla");
}





