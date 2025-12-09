// ==============================================================
// EJERCICIO 6 - BONUS: Comparar nombres entre dos integrantes
// ==============================================================

// Cambiar el título de la página
let titulo = document.getElementById('titulo');
titulo.innerText = 'EJERCICIO 6 - BONUS';
titulo.style.textAlign = 'center';

// ============== VARIABLES GLOBALES ==============
// Guardamos los datos del integrante 1
let nombre1_int = '';
let nombre2_int = '';
let apellido1_int = '';
let apellido2_int = '';

// Guardamos los datos del integrante 2
let nombre1_int2 = '';
let nombre2_int2 = '';
let apellido1_int2 = '';
let apellido2_int2 = '';

// Guardamos los colores que el usuario elige
let colorNombres = null;
let colorApellidos = null;

// ============== FUNCIÓN: LIMPIAR Y CAPITALIZAR ==============
// Toma un texto y lo deja bonito:
// - Sin espacios al inicio y final
// - Reemplaza espacios dobles por uno solo
// - Primera letra MAYÚSCULA, el resto minúsculas
function limpiarYCapitalizar(texto) {
  // Si el texto está vacío, devolvemos vacío
  if (!texto) {
    return '';
  }
  
  // Quitamos espacios al inicio y final
  texto = texto.trim();
  
  // Reemplazamos espacios dobles o más por un solo espacio
  texto = texto.replace(/\s+/g, ' ');
  
  // Convertimos: primera letra mayúscula + resto minúsculas
  let primeraLetra = texto.charAt(0).toUpperCase();
  let restoPalabra = texto.slice(1).toLowerCase();
  
  return primeraLetra + restoPalabra;
}

// ============== FUNCIÓN: CAPTURAR INTEGRANTE 1 ==============
function capturaDatos() {
  // Traemos los valores de los inputs del HTML
  nombre1_int = document.getElementById('nombre').value;
  nombre2_int = document.getElementById('nombre1').value;
  apellido1_int = document.getElementById('apellido').value;
  apellido2_int = document.getElementById('apellido1').value;
  
  // Validación: al menos uno de los campos debe estar lleno
  if (nombre1_int === '' && nombre2_int === '' && apellido1_int === '' && apellido2_int === '') {
    alert('Por favor, ingresa al menos un nombre o un apellido para el Integrante 1');
    return;
  }
  
  // Mostramos los datos del integrante 1
  mostrarIntegrantes();
  
  // Avisamos al usuario que debe agregar al integrante 2
  alert('¡Integrante 1 guardado correctamente!\n\nAhora agrega el Integrante 2.');
}

// ============== FUNCIÓN: CAPTURAR INTEGRANTE 2 Y COMPARAR ==============
function capturaDatos1() {
  // Traemos los valores de los inputs del HTML
  nombre1_int2 = document.getElementById('nombre2').value;
  nombre2_int2 = document.getElementById('nombre3').value;
  apellido1_int2 = document.getElementById('apellido2').value;
  apellido2_int2 = document.getElementById('apellido3').value;
  
  // Validación: al menos uno de los campos debe estar lleno
  if (nombre1_int2 === '' && nombre2_int2 === '' && apellido1_int2 === '' && apellido2_int2 === '') {
    alert('Por favor, ingresa al menos un nombre o un apellido para el Integrante 2');
    return;
  }
  
  // ========== COMPARAR NOMBRES ==========
  // Convertimos todo a minúsculas para comparar (sin importar mayúsculas/minúsculas)
  let n1_min = nombre1_int.toLowerCase();
  let n2_min = nombre2_int.toLowerCase();
  let n1_2_min = nombre1_int2.toLowerCase();
  let n2_2_min = nombre2_int2.toLowerCase();
  
  // ¿Hay algún nombre coincidente?
  let hayCoincidenciaNombres = false;
  
  // Comparamos integrante 1 con integrante 2
  if (n1_min !== '' && (n1_min === n1_2_min || n1_min === n2_2_min)) {
    hayCoincidenciaNombres = true;
  }
  
  if (n2_min !== '' && (n2_min === n1_2_min || n2_min === n2_2_min)) {
    hayCoincidenciaNombres = true;
  }
  
  // Si hay coincidencia de nombres, pedimos color
  if (hayCoincidenciaNombres) {
    colorNombres = prompt('¡Se encontraron NOMBRES coincidentes!\n\n¿Qué color deseas usar? (ej: red, blue, green, yellow)', 'red');
    
    // Si el usuario canceló el prompt, colorNombres será null
    if (colorNombres === null) {
      colorNombres = null;
      mostrarIntegrantes();
      return;
    }
  } else {
    // Si NO hay coincidencia de nombres, dejamos el color en null
    colorNombres = null;
  }
  
  // ========== COMPARAR APELLIDOS ==========
  // Preguntamos si desea validar apellidos
  let quiereValidarApellidos = confirm('¿Deseas que también valide los APELLIDOS?');
  
  if (quiereValidarApellidos) {
    // Convertimos apellidos a minúsculas
    let a1_min = apellido1_int.toLowerCase();
    let a2_min = apellido2_int.toLowerCase();
    let a1_2_min = apellido1_int2.toLowerCase();
    let a2_2_min = apellido2_int2.toLowerCase();
    
    // ¿Hay algún apellido coincidente?
    let hayCoincidenciaApellidos = false;
    
    if (a1_min !== '' && (a1_min === a1_2_min || a1_min === a2_2_min)) {
      hayCoincidenciaApellidos = true;
    }
    
    if (a2_min !== '' && (a2_min === a1_2_min || a2_min === a2_2_min)) {
      hayCoincidenciaApellidos = true;
    }
    
    // Si hay coincidencia de apellidos, pedimos color
    if (hayCoincidenciaApellidos) {
      colorApellidos = prompt('¡Se encontraron APELLIDOS coincidentes!\n\n¿Qué color deseas usar?', 'blue');
      
      // Si el usuario canceló, dejamos null
      if (colorApellidos === null) {
        colorApellidos = null;
      }
    } else {
      colorApellidos = null;
    }
  } else {
    // Si no quiere validar apellidos, no coloreamos nada
    colorApellidos = null;
  }
  
  // ========== MOSTRAR RESULTADO ==========
  // Si hay al menos un color, mostramos con colores
  if (colorNombres || colorApellidos) {
    mostrarIntegrantesConColores();
  } else {
    // Si no hay colores, mostramos sin colorear
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
 





