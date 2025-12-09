// Captura de datos del html - h1 con id="titulo"
let titulo = document.getElementById('titulo');
titulo.innerText = 'EJERCICIO 6 - BONUS';
titulo.style.textAlign = 'center';

// Función limpiar espacios y capitalizar
function capitalizarYLimpiar(texto) {
  if (!texto) return '';
  // quitar espacios 
  texto = texto.trim();
  // reemplazar varios espacios por uno solo
  texto = texto.replace(/\s+/g, ' ');
  // primera letra mayúscula, resto minúsculas
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

let nombre = '';
let nombre1 = '';
let apellido = '';
let apellido1 = '';

let nombre2 = '';
let nombre3 = '';
let apellido2 = '';
let apellido3 = '';

let colorNombres = null;
let colorApellidos = null;

// Función que guarda el integrante 1 
function capturaDatos() {
  nombre = document.getElementById('nombre').value;
  nombre1 = document.getElementById('nombre1').value;
  apellido = document.getElementById('apellido').value;

  apellido1 = document.getElementById('apellido1').value;

  // validamos que los datos no esten vacios
if(nombre == "" && apellido == "" && apellido1 == "" ){// si ambos estan vacios
    alert("El nombre y apellido no puede estar vacio");
    return; // corta la ejecución de la función
  } 

if(nombre == "" || apellido == "" || apellido1 >= 10){// si el precio es menor o igual a 0
    alert("El nombre o apellido no puede estar vacio");
    return; // corta la ejecución de la función
  }  
    


  // mostrar en pantalla
  mostrarIntegrantes();

  // agregar el segundo integrante
  alert('¡Integrante 1 agregado correctamente! Ahora agrega el Integrante 2.');
}

// Función que guarda el integrante 2 
function capturaDatos1() {
  nombre2 = document.getElementById('nombre2').value;
  nombre3 = document.getElementById('nombre3').value;
  apellido2 = document.getElementById('apellido2').value;
  apellido3 = document.getElementById('apellido3').value;

  // validamos que los datos no esten vacios
if(nombre2 == "" && apellido2 == "" && apellido3 == "" ){// si ambos estan vacios
    alert("El nombre y apellido no puede estar vacio");
    return; // corta la ejecución de la función
  } 

if(nombre2 == "" || apellido2 == "" || apellido3 >= 10){// si el precio es menor o igual a 0
    alert("El nombre o apellido no puede estar vacio");
    return; 
  }  

  // comparar nombres (minúsculas)
  let n1 = (nombre || '').toLowerCase();
  let n1b = (nombre1 || '').toLowerCase();
  let n2 = (nombre2 || '').toLowerCase();
  let n2b = (nombre3 || '').toLowerCase();

  let hayNombre = false;
  if (n1 !== '' && (n1 === n2 || n1 === n2b)) hayNombre = true;
  if (n1b !== '' && (n1b === n2 || n1b === n2b)) hayNombre = true;

  if (hayNombre) {
    colorNombres = prompt('Se encontraron nombres coincidentes. ¿Qué color quieres usar para destacarlos? (ej: red, blue, green)', 'red');
    if (colorNombres) {
      let quiereApellidos = confirm('¿Deseas que valide también los apellidos?');
      if (quiereApellidos) {
        let a1 = (apellido || '').toLowerCase();
        let a1b = (apellido1 || '').toLowerCase();
        let a2 = (apellido2 || '').toLowerCase();
        let a2b = (apellido3 || '').toLowerCase();

        let hayApellido = false;
        if (a1 !== '' && (a1 === a2 || a1 === a2b)) hayApellido = true;
        if (a1b !== '' && (a1b === a2 || a1b === a2b)) hayApellido = true;

        if (hayApellido) {
          colorApellidos = prompt('Se encontraron apellidos coincidentes. ¿Qué color quieres usar para destacarlos?', 'blue');
        } else {
          colorApellidos = null;
        }
      } else {
        colorApellidos = null;
      }

      // mostrar con colores
      mostrarIntegrantesConColores();
    }
  } else {
    // no hay coincidencia de nombres
    colorNombres = null;
    colorApellidos = null;
    mostrarIntegrantes();
  }
}
function mostrarIntegrantes() {
  let p1 = capitalizarYLimpiar(document.getElementById('nombre').value);
  let p1b = capitalizarYLimpiar(document.getElementById('nombre1').value);
  let ap1 = capitalizarYLimpiar(document.getElementById('apellido').value);
  let ap1b = capitalizarYLimpiar(document.getElementById('apellido1').value);

  let p2 = capitalizarYLimpiar(document.getElementById('nombre2').value);
  let p2b = capitalizarYLimpiar(document.getElementById('nombre3').value);
  let ap2 = capitalizarYLimpiar(document.getElementById('apellido2').value);
  let ap2b = capitalizarYLimpiar(document.getElementById('apellido3').value);

  let html = '';
  html += '<div style="border: 1px solid #007bff; padding:10px; margin-bottom:10px">';
  html += '<h3>Integrante 1</h3>';
  html += '<p><strong>Primer nombre:</strong> ' + p1 + '</p>';
  html += '<p><strong>Segundo nombre:</strong> ' + p1b + '</p>';
  html += '<p><strong>Primer apellido:</strong> ' + ap1 + '</p>';
  html += '<p><strong>Segundo apellido:</strong> ' + ap1b + '</p>';
  html += '</div>';

  html += '<div style="border: 1px solid #28a745; padding:10px">';
  html += '<h3>Integrante 2</h3>';
  html += '<p><strong>Primer nombre:</strong> ' + p2 + '</p>';
  html += '<p><strong>Segundo nombre:</strong> ' + p2b + '</p>';
  html += '<p><strong>Primer apellido:</strong> ' + ap2 + '</p>';
  html += '<p><strong>Segundo apellido:</strong> ' + ap2b + '</p>';
  html += '</div>';

  let cont = document.getElementById('contenedorResultado');
  if (cont) cont.innerHTML = html;
}

// Mostrar los datos y aplicar color a los campos que coinciden
function mostrarIntegrantesConColores() {
  // tomar y capitalizar los valores
  let p1 = capitalizarYLimpiar(document.getElementById('nombre').value);
  let p1b = capitalizarYLimpiar(document.getElementById('nombre1').value);
  let ap1 = capitalizarYLimpiar(document.getElementById('apellido').value);
  let ap1b = capitalizarYLimpiar(document.getElementById('apellido1').value);

  let p2 = capitalizarYLimpiar(document.getElementById('nombre2').value);
  let p2b = capitalizarYLimpiar(document.getElementById('nombre3').value);
  let ap2 = capitalizarYLimpiar(document.getElementById('apellido2').value);
  let ap2b = capitalizarYLimpiar(document.getElementById('apellido3').value);

  // comparar en minúsculas
  let n1 = p1.toLowerCase();
  let n1b = p1b.toLowerCase();
  let n2 = p2.toLowerCase();
  let n2b = p2b.toLowerCase();

  let a1 = ap1.toLowerCase();
  let a1b = ap1b.toLowerCase();
  let a2 = ap2.toLowerCase();
  let a2b = ap2b.toLowerCase();

  // construir html aplicando color solo si coinciden
  let html = '';
  html += '<div style="border: 1px solid #007bff; padding:10px; margin-bottom:10px">';
  html += '<h3>Integrante 1</h3>';

  if (colorNombres && (n1 === n2 || n1 === n2b)) {
    html += '<p><strong>Primer nombre:</strong> <span style="color:' + colorNombres + '; font-weight:bold">' + p1 + '</span></p>';
  } else {
    html += '<p><strong>Primer nombre:</strong> ' + p1 + '</p>';
  }

  if (colorNombres && (n1b === n2 || n1b === n2b)) {
    html += '<p><strong>Segundo nombre:</strong> <span style="color:' + colorNombres + '; font-weight:bold">' + p1b + '</span></p>';
  } else {
    html += '<p><strong>Segundo nombre:</strong> ' + p1b + '</p>';
  }

  if (colorApellidos && (a1 === a2 || a1 === a2b)) {
    html += '<p><strong>Primer apellido:</strong> <span style="color:' + colorApellidos + '; font-weight:bold">' + ap1 + '</span></p>';
  } else {
    html += '<p><strong>Primer apellido:</strong> ' + ap1 + '</p>';
  }

  if (colorApellidos && (a1b === a2 || a1b === a2b)) {
    html += '<p><strong>Segundo apellido:</strong> <span style="color:' + colorApellidos + '; font-weight:bold">' + ap1b + '</span></p>';
  } else {
    html += '<p><strong>Segundo apellido:</strong> ' + ap1b + '</p>';
  }

  html += '</div>';

  // Integrante 2
  html += '<div style="border: 1px solid #28a745; padding:10px">';
  html += '<h3>Integrante 2</h3>';

  if (colorNombres && (n2 === n1 || n2 === n1b)) {
    html += '<p><strong>Primer nombre:</strong> <span style="color:' + colorNombres + '; font-weight:bold">' + p2 + '</span></p>';
  } else {
    html += '<p><strong>Primer nombre:</strong> ' + p2 + '</p>';
  }

  if (colorNombres && (n2b === n1 || n2b === n1b)) {
    html += '<p><strong>Segundo nombre:</strong> <span style="color:' + colorNombres + '; font-weight:bold">' + p2b + '</span></p>';
  } else {
    html += '<p><strong>Segundo nombre:</strong> ' + p2b + '</p>';
  }

  if (colorApellidos && (a2 === a1 || a2 === a1b)) {
    html += '<p><strong>Primer apellido:</strong> <span style="color:' + colorApellidos + '; font-weight:bold">' + ap2 + '</span></p>';
  } else {
    html += '<p><strong>Primer apellido:</strong> ' + ap2 + '</p>';
  }

  if (colorApellidos && (a2b === a1 || a2b === a1b)) {
    html += '<p><strong>Segundo apellido:</strong> <span style="color:' + colorApellidos + '; font-weight:bold">' + ap2b + '</span></p>';
  } else {
    html += '<p><strong>Segundo apellido:</strong> ' + ap2b + '</p>';
  }

  html += '</div>';

  let cont = document.getElementById('contenedorResultado');
  if (cont) cont.innerHTML = html;
}
 





