// Captura de datos del html - h1 con id="titulo"
let titulo = document.getElementById("titulo")
console.log(titulo);

// Modificación del contenido del html
titulo.innerText = "EJERCICIO 6 - BONUS ";

// Le damos un estilo al titulo
titulo.style.textAlign = "center";

// Función para capitalizar: primera letra mayúscula, resto minúsculas
function capitalizarYLimpiar(texto) {
  if (!texto || texto.trim() === "") return "";
  texto = texto.trim(); // Elimina espacios al inicio y final
  texto = texto.replace(/\s+/g, ' '); // Elimina espacios múltiples
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

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

// Variables para almacenar los colores seleccionados
let colorNombres = null;
let colorApellidos = null;


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
  
  // Comparar nombres del integrante 1 con integrante 2
  let nombresInt1 = [nombre.toLowerCase(), nombre1.toLowerCase()];
  let nombresInt2 = [nombre2.toLowerCase(), nombre3.toLowerCase()];
  
  let hay_coincidencia_nombres = false;
  for (let i = 0; i < nombresInt1.length; i++) {
    if (nombresInt2.includes(nombresInt1[i])) {
      hay_coincidencia_nombres = true;
      break;
    }
  }
  
  // Si hay coincidencia en nombres, pedir color
  if (hay_coincidencia_nombres) {
    console.log("¡Hay coincidencia en los nombres!");
    colorNombres = prompt("Se encontraron nombres coincidentes.\n\n¿Qué color deseas usar para destacarlos?\n(ej: red, green, blue, yellow, orange, purple):", "red");
    
    if (colorNombres) {
      console.log("Color seleccionado para nombres: " + colorNombres);
      
      // Preguntar si quiere validar los apellidos
      let validarApellidos = confirm("¿Deseas que valide también los apellidos?");
      
      if (validarApellidos) {
        // Comparar apellidos
        let apellidosInt1 = [apellido.toLowerCase(), apellido1.toLowerCase()];
        let apellidosInt2 = [apellido2.toLowerCase(), apellido3.toLowerCase()];
        
        let hay_coincidencia_apellidos = false;
        for (let i = 0; i < apellidosInt1.length; i++) {
          if (apellidosInt2.includes(apellidosInt1[i])) {
            hay_coincidencia_apellidos = true;
            break;
          }
        }
        
        if (hay_coincidencia_apellidos) {
          console.log("¡Hay coincidencia en los apellidos!");
          colorApellidos = prompt("Se encontraron apellidos coincidentes.\n\n¿Qué color deseas usar para destacarlos?\n(ej: red, green, blue, yellow, orange, purple):", "blue");
          
          if (colorApellidos) {
            console.log("Color seleccionado para apellidos: " + colorApellidos);
          }
        } else {
          console.log("No hay coincidencia en apellidos");
          colorApellidos = null;
        }
      } else {
        colorApellidos = null;
      }
      
      // Mostrar los datos en el HTML
      mostrarIntegrantesConColores();
    }
  } else {
    console.log("No hay coincidencia en nombres");
    colorNombres = null;
    colorApellidos = null;
    // Mostrar los datos en el HTML sin colores
    mostrarIntegrantes();
  }
}

// Función para mostrar nombres y apellidos en el HTML
function mostrarIntegrantes() {
  // Capturar datos del formulario y capitalizarlos
  let datosPrimerIntegrante = {
    nombre: capitalizarYLimpiar(document.getElementById("nombre").value),
    nombre1: capitalizarYLimpiar(document.getElementById("nombre1").value),
    apellido: capitalizarYLimpiar(document.getElementById("apellido").value),
    apellido1: capitalizarYLimpiar(document.getElementById("apellido1").value)
  };

  let datosSegundoIntegrante = {
    nombre: capitalizarYLimpiar(document.getElementById("nombre2").value),
    nombre1: capitalizarYLimpiar(document.getElementById("nombre3").value),
    apellido: capitalizarYLimpiar(document.getElementById("apellido2").value),
    apellido1: capitalizarYLimpiar(document.getElementById("apellido3").value)
  };

  // Crear contenedor para mostrar los datos
  let contenedorResultado = document.getElementById("contenedorResultado");
  
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
    console.log("No se encontró el contenedor 'contenedorResultado'");
  }

  console.log("Datos mostrados en pantalla");
}

// Función para mostrar nombres y apellidos en el HTML con colores
function mostrarIntegrantesConColores() {
  // Capturar datos del formulario y capitalizarlos
  let datosPrimerIntegrante = {
    nombre: capitalizarYLimpiar(document.getElementById("nombre").value),
    nombre1: capitalizarYLimpiar(document.getElementById("nombre1").value),
    apellido: capitalizarYLimpiar(document.getElementById("apellido").value),
    apellido1: capitalizarYLimpiar(document.getElementById("apellido1").value)
  };

  let datosSegundoIntegrante = {
    nombre: capitalizarYLimpiar(document.getElementById("nombre2").value),
    nombre1: capitalizarYLimpiar(document.getElementById("nombre3").value),
    apellido: capitalizarYLimpiar(document.getElementById("apellido2").value),
    apellido1: capitalizarYLimpiar(document.getElementById("apellido3").value)
  };

  // Convertir a minúsculas para comparar
  let nombresInt1 = [datosPrimerIntegrante.nombre.toLowerCase(), datosPrimerIntegrante.nombre1.toLowerCase()];
  let nombresInt2 = [datosSegundoIntegrante.nombre.toLowerCase(), datosSegundoIntegrante.nombre1.toLowerCase()];
  
  let apellidosInt1 = [datosPrimerIntegrante.apellido.toLowerCase(), datosPrimerIntegrante.apellido1.toLowerCase()];
  let apellidosInt2 = [datosSegundoIntegrante.apellido.toLowerCase(), datosSegundoIntegrante.apellido1.toLowerCase()];

  // Crear contenedor para mostrar los datos
  let contenedorResultado = document.getElementById("contenedorResultado");
  
  // Generar HTML para mostrar los integrantes con colores
  let html = '<div style="display: flex; flex-direction: column; gap: 20px; margin-top: 20px;">';
  
  html += '<div style="border: 2px solid #007bff; padding: 15px; border-radius: 8px;">';
  html += '<h3 style="color: #007bff; margin-top: 0;">Integrante 1</h3>';
  
  // Aplicar color solo si el nombre coincide y está en la lista del integrante 2
  let nombre1_color = (colorNombres && nombresInt2.includes(nombresInt1[0])) 
    ? '<span style="color: ' + colorNombres + '; font-weight: bold;">' + datosPrimerIntegrante.nombre + '</span>' 
    : datosPrimerIntegrante.nombre;
  
  let nombre1_segundo_color = (colorNombres && nombresInt2.includes(nombresInt1[1])) 
    ? '<span style="color: ' + colorNombres + '; font-weight: bold;">' + datosPrimerIntegrante.nombre1 + '</span>' 
    : datosPrimerIntegrante.nombre1;
  
  // Aplicar color solo si el apellido coincide y está en la lista del integrante 2
  let apellido1_color = (colorApellidos && apellidosInt2.includes(apellidosInt1[0])) 
    ? '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + datosPrimerIntegrante.apellido + '</span>' 
    : datosPrimerIntegrante.apellido;
  
  let apellido1_segundo_color = (colorApellidos && apellidosInt2.includes(apellidosInt1[1])) 
    ? '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + datosPrimerIntegrante.apellido1 + '</span>' 
    : datosPrimerIntegrante.apellido1;
  
  html += '<p><strong>Primer nombre:</strong> ' + nombre1_color + '</p>';
  html += '<p><strong>Segundo nombre:</strong> ' + nombre1_segundo_color + '</p>';
  html += '<p><strong>Primer apellido:</strong> ' + apellido1_color + '</p>';
  html += '<p><strong>Segundo apellido:</strong> ' + apellido1_segundo_color + '</p>';
  html += '</div>';

  html += '<div style="border: 2px solid #28a745; padding: 15px; border-radius: 8px;">';
  html += '<h3 style="color: #28a745; margin-top: 0;">Integrante 2</h3>';
  
  // Aplicar color solo si el nombre coincide y está en la lista del integrante 1
  let nombre2_color = (colorNombres && nombresInt1.includes(nombresInt2[0])) 
    ? '<span style="color: ' + colorNombres + '; font-weight: bold;">' + datosSegundoIntegrante.nombre + '</span>' 
    : datosSegundoIntegrante.nombre;
  
  let nombre2_segundo_color = (colorNombres && nombresInt1.includes(nombresInt2[1])) 
    ? '<span style="color: ' + colorNombres + '; font-weight: bold;">' + datosSegundoIntegrante.nombre1 + '</span>' 
    : datosSegundoIntegrante.nombre1;
  
  // Aplicar color solo si el apellido coincide y está en la lista del integrante 1
  let apellido2_color = (colorApellidos && apellidosInt1.includes(apellidosInt2[0])) 
    ? '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + datosSegundoIntegrante.apellido + '</span>' 
    : datosSegundoIntegrante.apellido;
  
  let apellido2_segundo_color = (colorApellidos && apellidosInt1.includes(apellidosInt2[1])) 
    ? '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + datosSegundoIntegrante.apellido1 + '</span>' 
    : datosSegundoIntegrante.apellido1;
  
  html += '<p><strong>Primer nombre:</strong> ' + nombre2_color + '</p>';
  html += '<p><strong>Segundo nombre:</strong> ' + nombre2_segundo_color + '</p>';
  html += '<p><strong>Primer apellido:</strong> ' + apellido2_color + '</p>';
  html += '<p><strong>Segundo apellido:</strong> ' + apellido2_segundo_color + '</p>';
  html += '</div>';

  html += '</div>';

  // Mostrar en el HTML
  if(contenedorResultado) {
    contenedorResultado.innerHTML = html;
  } else {
    console.log("No se encontró el contenedor 'contenedorResultado'");
  }

  console.log("Datos mostrados en pantalla con colores");
}





