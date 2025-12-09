// Versión simple y fácil de entender para principiantes
// Captura de datos del html - h1 con id="titulo"
var titulo = document.getElementById('titulo');
titulo.innerText = 'EJERCICIO 6 - BONUS';
titulo.style.textAlign = 'center';

// Función simple: limpiar espacios y capitalizar
function capitalizarYLimpiar(texto) {
  if (!texto) return '';
  // quitar espacios al inicio y final
  texto = texto.trim();
  // reemplazar varios espacios por uno solo
  texto = texto.replace(/\s+/g, ' ');
  // primera letra mayúscula, resto minúsculas
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Variables globales (fáciles de leer)
var nombre = '';
var nombre1 = '';
var apellido = '';
var apellido1 = '';

var nombre2 = '';
var nombre3 = '';
var apellido2 = '';
var apellido3 = '';

var colorNombres = null;
var colorApellidos = null;

// Función que guarda el integrante 1 y muestra mensaje
function capturaDatos() {
  nombre = document.getElementById('nombre').value;
  nombre1 = document.getElementById('nombre1').value;
  apellido = document.getElementById('apellido').value;


// Mostrar los datos sin colores (versión sencilla)
function mostrarIntegrantes() {
  var p1 = capitalizarYLimpiar(document.getElementById('nombre').value);
  var p1b = capitalizarYLimpiar(document.getElementById('nombre1').value);
  var ap1 = capitalizarYLimpiar(document.getElementById('apellido').value);
  var ap1b = capitalizarYLimpiar(document.getElementById('apellido1').value);

  var p2 = capitalizarYLimpiar(document.getElementById('nombre2').value);
  var p2b = capitalizarYLimpiar(document.getElementById('nombre3').value);
  var ap2 = capitalizarYLimpiar(document.getElementById('apellido2').value);
  var ap2b = capitalizarYLimpiar(document.getElementById('apellido3').value);

  var html = '';
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

  var cont = document.getElementById('contenedorResultado');
  if (cont) cont.innerHTML = html;
}

// Mostrar los datos y aplicar color SOLO a los campos que coinciden
function mostrarIntegrantesConColores() {
  // tomar y capitalizar los valores
  var p1 = capitalizarYLimpiar(document.getElementById('nombre').value);
  var p1b = capitalizarYLimpiar(document.getElementById('nombre1').value);
  var ap1 = capitalizarYLimpiar(document.getElementById('apellido').value);
  var ap1b = capitalizarYLimpiar(document.getElementById('apellido1').value);

  var p2 = capitalizarYLimpiar(document.getElementById('nombre2').value);
  var p2b = capitalizarYLimpiar(document.getElementById('nombre3').value);
  var ap2 = capitalizarYLimpiar(document.getElementById('apellido2').value);
  var ap2b = capitalizarYLimpiar(document.getElementById('apellido3').value);

  // comparar en minúsculas
  var n1 = p1.toLowerCase();
  var n1b = p1b.toLowerCase();
  var n2 = p2.toLowerCase();
  var n2b = p2b.toLowerCase();

  var a1 = ap1.toLowerCase();
  var a1b = ap1b.toLowerCase();
  var a2 = ap2.toLowerCase();
  var a2b = ap2b.toLowerCase();

  // construir html aplicando color solo si coinciden
  var html = '';
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

  var cont = document.getElementById('contenedorResultado');
  if (cont) cont.innerHTML = html;
}
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





