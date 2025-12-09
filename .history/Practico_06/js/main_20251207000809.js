// 1 — Leer el contenido del <title> e imprimirlo
console.log(document.title);

// Función para capitalizar: primera letra mayúscula, resto minúsculas
function capitalizarTexto(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Función para limpiar espacios duplicados y vacíos
function limpiarEspacios(texto) {
  return texto.trim().replace(/\s+/g, ' ');
}

// Aplicar capitalización a los dd dentro de .integrante
document.addEventListener('DOMContentLoaded', function() {
  const integrantes = document.querySelectorAll('.integrante dd');
  integrantes.forEach(dd => {
    dd.textContent = capitalizarTexto(dd.textContent.trim());
  });
});

// 2 — Imprimir en consola el nombre de cada integrante con la primera letra en mayúscula y el resto en minúscula
let nombre = document.getElementById('nombre');
let nombre1 = document.getElementById('nombre1');
let apellido = document.getElementById('apellido');
let apellido1 = document.getElementById('apellido1');

let nombre2 = document.getElementById('nombre2');
let nombre3 = document.getElementById('nombre3');
let apellido2 = document.getElementById('apellido2');
let apellido3 = document.getElementById('apellido3');

// Construir nombres completos capitalizando y limpiando espacios
let integrante1 = limpiarEspacios(
  capitalizarTexto(nombre.textContent.trim()) + ' ' + 
  capitalizarTexto(nombre1.textContent.trim()) + ' ' + 
  capitalizarTexto(apellido.textContent.trim()) + ' ' + 
  capitalizarTexto(apellido1.textContent.trim())
);

let integrante2 = limpiarEspacios(
  capitalizarTexto(nombre2.textContent.trim()) + ' ' + 
  capitalizarTexto(nombre3.textContent.trim()) + ' ' + 
  capitalizarTexto(apellido2.textContent.trim()) + ' ' + 
  capitalizarTexto(apellido3.textContent.trim())
);

console.log('-----\nIntegrante 1: "' + integrante1 + '"\nIntegrante 2: "' + integrante2 + '"\n-----');

// ==================== COMPARACIÓN DE NOMBRES ====================
// Extraer nombres individuales (sin apellidos)
let nombresIntegrante1 = [
  capitalizarTexto(nombre.textContent.trim()),
  capitalizarTexto(nombre1.textContent.trim())
].filter(n => n.length > 0);

let nombresIntegrante2 = [
  capitalizarTexto(nombre2.textContent.trim()),
  capitalizarTexto(nombre3.textContent.trim())
].filter(n => n.length > 0);

// Buscar coincidencias en nombres
let coincidenciasNombres = [];
nombresIntegrante1.forEach(n1 => {
  if (nombresIntegrante2.includes(n1)) {
    coincidenciasNombres.push(n1);
  }
});

if (coincidenciasNombres.length > 0) {
  console.log('⚠️ COINCIDENCIAS ENCONTRADAS EN NOMBRES: ' + coincidenciasNombres.join(', '));
  
  // Solicitar color al usuario
  let color = prompt('Se encontraron coincidencias en nombres.\n\nIngrese un color para destacarlos (ej: "red", "#c4203f", "rgb(196, 32, 63)"):', 'red');
  
  if (color) {
    // Destacar nombres coincidentes en el HTML
    [nombre, nombre1, nombre2, nombre3].forEach(elemento => {
      if (elemento && coincidenciasNombres.includes(elemento.textContent.trim())) {
        elemento.style.color = color;
        elemento.style.fontWeight = 'bold';
      }
    });
  }
} else {
  console.log('✓ No hay coincidencias en nombres.');
}

// ==================== COMPARACIÓN DE APELLIDOS ====================
let compararApellidos = confirm('¿Desea comparar también los apellidos?');

if (compararApellidos) {
  let apellidosIntegrante1 = [
    capitalizarTexto(apellido.textContent.trim()),
    capitalizarTexto(apellido1.textContent.trim())
  ].filter(a => a.length > 0);

  let apellidosIntegrante2 = [
    capitalizarTexto(apellido2.textContent.trim()),
    capitalizarTexto(apellido3.textContent.trim())
  ].filter(a => a.length > 0);

  // Buscar coincidencias en apellidos
  let coincidenciasApellidos = [];
  apellidosIntegrante1.forEach(a1 => {
    if (apellidosIntegrante2.includes(a1)) {
      coincidenciasApellidos.push(a1);
    }
  });

  if (coincidenciasApellidos.length > 0) {
    console.log('⚠️ COINCIDENCIAS ENCONTRADAS EN APELLIDOS: ' + coincidenciasApellidos.join(', '));
    
    // Solicitar color al usuario
    let colorApellidos = prompt('Se encontraron coincidencias en apellidos.\n\nIngrese un color para destacarlos (ej: "blue", "#0066cc", "rgb(0, 102, 204)"):', 'blue');
    
    if (colorApellidos) {
      // Destacar apellidos coincidentes en el HTML
      [apellido, apellido1, apellido2, apellido3].forEach(elemento => {
        if (elemento && coincidenciasApellidos.includes(elemento.textContent.trim())) {
          elemento.style.color = colorApellidos;
          elemento.style.fontWeight = 'bold';
        }
      });
    }
  } else {
    console.log('✓ No hay coincidencias en apellidos.');
  }
}



