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
// ============== FUNCIÓN: MOSTRAR SIN COLORES ==============
function mostrarIntegrantes() {
  // Limpiamos y capitalizamos los datos
  let n1 = limpiarYCapitalizar(nombre1_int);
  let n2 = limpiarYCapitalizar(nombre2_int);
  let a1 = limpiarYCapitalizar(apellido1_int);
  let a2 = limpiarYCapitalizar(apellido2_int);
  
  let n1_2 = limpiarYCapitalizar(nombre1_int2);
  let n2_2 = limpiarYCapitalizar(nombre2_int2);
  let a1_2 = limpiarYCapitalizar(apellido1_int2);
  let a2_2 = limpiarYCapitalizar(apellido2_int2);
  
  // Construimos el HTML (el contenido que va a mostrarse)
  let html = '';
  
  // === INTEGRANTE 1 ===
  html = html + '<div style="border: 2px solid #007bff; padding: 15px; margin-bottom: 20px; border-radius: 5px;">';
  html = html + '<h3 style="color: #007bff;">INTEGRANTE 1</h3>';
  html = html + '<p><strong>Primer nombre:</strong> ' + n1 + '</p>';
  html = html + '<p><strong>Segundo nombre:</strong> ' + n2 + '</p>';
  html = html + '<p><strong>Primer apellido:</strong> ' + a1 + '</p>';
  html = html + '<p><strong>Segundo apellido:</strong> ' + a2 + '</p>';
  html = html + '</div>';
  
  // === INTEGRANTE 2 ===
  html = html + '<div style="border: 2px solid #28a745; padding: 15px; border-radius: 5px;">';
  html = html + '<h3 style="color: #28a745;">INTEGRANTE 2</h3>';
  html = html + '<p><strong>Primer nombre:</strong> ' + n1_2 + '</p>';
  html = html + '<p><strong>Segundo nombre:</strong> ' + n2_2 + '</p>';
  html = html + '<p><strong>Primer apellido:</strong> ' + a1_2 + '</p>';
  html = html + '<p><strong>Segundo apellido:</strong> ' + a2_2 + '</p>';
  html = html + '</div>';
  
  // Buscamos el contenedor donde mostramos los resultados
  let contenedor = document.getElementById('contenedorResultado');
  
  // Si existe, metemos el HTML dentro
  if (contenedor) {
    contenedor.innerHTML = html;
  }
}

// ============== FUNCIÓN: MOSTRAR CON COLORES ==============
function mostrarIntegrantesConColores() {
  // Limpiamos y capitalizamos los datos
  let n1 = limpiarYCapitalizar(nombre1_int);
  let n2 = limpiarYCapitalizar(nombre2_int);
  let a1 = limpiarYCapitalizar(apellido1_int);
  let a2 = limpiarYCapitalizar(apellido2_int);
  
  let n1_2 = limpiarYCapitalizar(nombre1_int2);
  let n2_2 = limpiarYCapitalizar(nombre2_int2);
  let a1_2 = limpiarYCapitalizar(apellido1_int2);
  let a2_2 = limpiarYCapitalizar(apellido2_int2);
  
  // Convertimos a minúsculas para comparar
  let n1_min = n1.toLowerCase();
  let n2_min = n2.toLowerCase();
  let a1_min = a1.toLowerCase();
  let a2_min = a2.toLowerCase();
  
  let n1_2_min = n1_2.toLowerCase();
  let n2_2_min = n2_2.toLowerCase();
  let a1_2_min = a1_2.toLowerCase();
  let a2_2_min = a2_2.toLowerCase();
  
  // Construimos el HTML
  let html = '';
  
  // === INTEGRANTE 1 ===
  html = html + '<div style="border: 2px solid #007bff; padding: 15px; margin-bottom: 20px; border-radius: 5px;">';
  html = html + '<h3 style="color: #007bff;">INTEGRANTE 1</h3>';
  
  // Primer nombre del integrante 1
  if (colorNombres && n1_min !== '' && (n1_min === n1_2_min || n1_min === n2_2_min)) {
    html = html + '<p><strong>Primer nombre:</strong> <span style="color: ' + colorNombres + '; font-weight: bold; font-size: 18px;">★ ' + n1 + ' ★</span></p>';
  } else {
    html = html + '<p><strong>Primer nombre:</strong> ' + n1 + '</p>';
  }
  
  // Segundo nombre del integrante 1
  if (colorNombres && n2_min !== '' && (n2_min === n1_2_min || n2_min === n2_2_min)) {
    html = html + '<p><strong>Segundo nombre:</strong> <span style="color: ' + colorNombres + '; font-weight: bold; font-size: 18px;">★ ' + n2 + ' ★</span></p>';
  } else {
    html = html + '<p><strong>Segundo nombre:</strong> ' + n2 + '</p>';
  }
  
  // Primer apellido del integrante 1
  if (colorApellidos && a1_min !== '' && (a1_min === a1_2_min || a1_min === a2_2_min)) {
    html = html + '<p><strong>Primer apellido:</strong> <span style="color: ' + colorApellidos + '; font-weight: bold; font-size: 18px;">★ ' + a1 + ' ★</span></p>';
  } else {
    html = html + '<p><strong>Primer apellido:</strong> ' + a1 + '</p>';
  }
  
  // Segundo apellido del integrante 1
  if (colorApellidos && a2_min !== '' && (a2_min === a1_2_min || a2_min === a2_2_min)) {
    html = html + '<p><strong>Segundo apellido:</strong> <span style="color: ' + colorApellidos + '; font-weight: bold; font-size: 18px;">★ ' + a2 + ' ★</span></p>';
  } else {
    html = html + '<p><strong>Segundo apellido:</strong> ' + a2 + '</p>';
  }
  
  html = html + '</div>';
  
  // === INTEGRANTE 2 ===
  html = html + '<div style="border: 2px solid #28a745; padding: 15px; border-radius: 5px;">';
  html = html + '<h3 style="color: #28a745;">INTEGRANTE 2</h3>';
  
  // Primer nombre del integrante 2
  if (colorNombres && n1_2_min !== '' && (n1_2_min === n1_min || n1_2_min === n2_min)) {
    html = html + '<p><strong>Primer nombre:</strong> <span style="color: ' + colorNombres + '; font-weight: bold; font-size: 18px;">★ ' + n1_2 + ' ★</span></p>';
  } else {
    html = html + '<p><strong>Primer nombre:</strong> ' + n1_2 + '</p>';
  }
  
  // Segundo nombre del integrante 2
  if (colorNombres && n2_2_min !== '' && (n2_2_min === n1_min || n2_2_min === n2_min)) {
    html = html + '<p><strong>Segundo nombre:</strong> <span style="color: ' + colorNombres + '; font-weight: bold; font-size: 18px;">★ ' + n2_2 + ' ★</span></p>';
  } else {
    html = html + '<p><strong>Segundo nombre:</strong> ' + n2_2 + '</p>';
  }
  
  // Primer apellido del integrante 2
  if (colorApellidos && a1_2_min !== '' && (a1_2_min === a1_min || a1_2_min === a2_min)) {
    html = html + '<p><strong>Primer apellido:</strong> <span style="color: ' + colorApellidos + '; font-weight: bold; font-size: 18px;">★ ' + a1_2 + ' ★</span></p>';
  } else {
    html = html + '<p><strong>Primer apellido:</strong> ' + a1_2 + '</p>';
  }
  
  // Segundo apellido del integrante 2
  if (colorApellidos && a2_2_min !== '' && (a2_2_min === a1_min || a2_2_min === a2_min)) {
    html = html + '<p><strong>Segundo apellido:</strong> <span style="color: ' + colorApellidos + '; font-weight: bold; font-size: 18px;">★ ' + a2_2 + ' ★</span></p>';
  } else {
    html = html + '<p><strong>Segundo apellido:</strong> ' + a2_2 + '</p>';
  }
  
  html = html + '</div>';
  
  // Buscamos el contenedor donde mostramos los resultados
  let contenedor = document.getElementById('contenedorResultado');
  
  // Si existe, metemos el HTML dentro
  if (contenedor) {
    contenedor.innerHTML = html;
  }
}
 

