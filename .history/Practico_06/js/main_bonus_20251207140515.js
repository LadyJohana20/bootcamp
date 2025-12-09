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

// Función para construir nombre completo capitalizado
function construirNombreCompleto(nom, nom2, ape, ape2) {
  return limpiarEspacios(
    capitalizarTexto(nom) + ' ' + 
    capitalizarTexto(nom2) + ' ' + 
    capitalizarTexto(ape) + ' ' + 
    capitalizarTexto(ape2)
  );
}

// Función para extraer array de nombres/apellidos únicos
function extraerAtributos(elem1, elem2) {
  return [
    capitalizarTexto(elem1),
    capitalizarTexto(elem2)
  ].filter(n => n.length > 0);
}

// Función para buscar coincidencias entre dos arrays
function buscarCoincidencias(array1, array2) {
  let coincidencias = [];
  array1.forEach(item => {
    if (array2.includes(item)) {
      coincidencias.push(item);
    }
  });
  return coincidencias;
}

// Función para generar HTML de un integrante
function generarHTMLIntegrante(titulo, nom, nom2, ape, ape2, colorNombres, colorApellidos, coincidenciasNombres, coincidenciasApellidos) {
  let html = '<div><h4>' + titulo + ':</h4>';
  
  // Primer nombre
  html += '<p><strong>Primer nombre</strong><br>';
  if (coincidenciasNombres.includes(nom)) {
    html += '<span style="color: ' + colorNombres + '; font-weight: bold;">' + nom + '</span>';
  } else {
    html += nom;
  }
  html += '</p>';
  
  // Segundo nombre
  html += '<p><strong>Segundo nombre</strong><br>';
  if (coincidenciasNombres.includes(nom2)) {
    html += '<span style="color: ' + colorNombres + '; font-weight: bold;">' + nom2 + '</span>';
  } else {
    html += nom2;
  }
  html += '</p>';
  
  // Primer apellido
  html += '<p><strong>Primer apellido</strong><br>';
  if (colorApellidos && coincidenciasApellidos.includes(ape)) {
    html += '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + ape + '</span>';
  } else {
    html += ape;
  }
  html += '</p>';
  
  // Segundo apellido
  html += '<p><strong>Segundo apellido</strong><br>';
  if (colorApellidos && coincidenciasApellidos.includes(ape2)) {
    html += '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + ape2 + '</span>';
  } else {
    html += ape2;
  }
  html += '</p></div>';
  
  return html;
}

// Variables globales para almacenar los datos de los integrantes
let datosIntegrante1 = null;
let datosIntegrante2 = null;

// Función para procesar los datos del formulario y realizar comparaciones
function procesarIntegrantes() {
  // Si no hay ambos integrantes completados, no hacer nada
  if (!datosIntegrante1 || !datosIntegrante2) {
    return;
  }

  const resultadoDiv = document.getElementById('resultado-coincidencias');

  // Construir nombres completos
  let integrante1 = construirNombreCompleto(
    datosIntegrante1.nombre1,
    datosIntegrante1.nombre2,
    datosIntegrante1.apellido1,
    datosIntegrante1.apellido2
  );
  let integrante2 = construirNombreCompleto(
    datosIntegrante2.nombre1,
    datosIntegrante2.nombre2,
    datosIntegrante2.apellido1,
    datosIntegrante2.apellido2
  );

  console.log('-----\nIntegrante 1: "' + integrante1 + '"\nIntegrante 2: "' + integrante2 + '"\n-----');

  // COMPARACIÓN DE NOMBRES
  let nombresIntegrante1 = extraerAtributos(datosIntegrante1.nombre1, datosIntegrante1.nombre2);
  let nombresIntegrante2 = extraerAtributos(datosIntegrante2.nombre1, datosIntegrante2.nombre2);

  let coincidenciasNombres = buscarCoincidencias(nombresIntegrante1, nombresIntegrante2);

  if (coincidenciasNombres.length > 0) {
    console.log('Hay coincidencias en los nombres ' + coincidenciasNombres.join(', '));
    
    // Solicitar color al usuario
    let color = prompt('Se encontraron coincidencias en nombres.\n\n Por favor ingrese un color para destacarlos (ej: "red", "green", "yellow", "blue", "etc"):', 'red');
    
    if (color) {
      console.log('Color seleccionado para nombres: ' + color);

      // COMPARACIÓN DE APELLIDOS
      let apellidosIntegrante1 = extraerAtributos(datosIntegrante1.apellido1, datosIntegrante1.apellido2);
      let apellidosIntegrante2 = extraerAtributos(datosIntegrante2.apellido1, datosIntegrante2.apellido2);

      let coincidenciasApellidos = buscarCoincidencias(apellidosIntegrante1, apellidosIntegrante2);

      let colorApellidos = null;
      if (coincidenciasApellidos.length > 0) {
        console.log('Hay coincidencias en apellidos ' + coincidenciasApellidos.join(', '));
        let compararApellidos = confirm('Se encontraron coincidencias en apellidos.\n\n¿Desea destacarlos en color?');
        if (compararApellidos) {
          colorApellidos = prompt('Ingrese un color para destacarlos (ej: "red", "green", "yellow", "blue", "etc"', 'blue');
          if (colorApellidos) {
            console.log('Color seleccionado para apellidos: ' + colorApellidos);
          }
        }
      }

      // Mostrar en el HTML
      let htmlSalida = '<h3>Coincidencias encontradas:</h3>';
      htmlSalida += '<div style="display: flex; flex-direction: column; gap: 20px;">';
      
      htmlSalida += generarHTMLIntegrante(
        'Integrante 1',
        datosIntegrante1.nombre1,
        datosIntegrante1.nombre2,
        datosIntegrante1.apellido1,
        datosIntegrante1.apellido2,
        color,
        colorApellidos,
        coincidenciasNombres,
        coincidenciasApellidos
      );
      
      htmlSalida += generarHTMLIntegrante(
        'Integrante 2',
        datosIntegrante2.nombre1,
        datosIntegrante2.nombre2,
        datosIntegrante2.apellido1,
        datosIntegrante2.apellido2,
        color,
        colorApellidos,
        coincidenciasNombres,
        coincidenciasApellidos
      );
      
      htmlSalida += '</div>';
      
      if (resultadoDiv) resultadoDiv.innerHTML = htmlSalida;
    }
  } else {
    console.log('No hay coincidencias en nombres.');
    resultadoDiv.innerHTML = '<p>No hay coincidencias en los nombres entre los integrantes.</p>';
  }
}

// Evento para el botón "Completar" del Integrante 1
document.getElementById('btn-completar-int1').addEventListener('click', function() {
  datosIntegrante1 = {
    nombre1: document.getElementById('int1-nombre1').value || '',
    nombre2: document.getElementById('int1-nombre2').value || '',
    apellido1: document.getElementById('int1-apellido1').value || '',
    apellido2: document.getElementById('int1-apellido2').value || ''
  };

  console.log('Integrante 1 completado:', datosIntegrante1);
  procesarIntegrantes();
});

// Evento para el botón "Completar" del Integrante 2
document.getElementById('btn-completar-int2').addEventListener('click', function() {
  datosIntegrante2 = {
    nombre1: document.getElementById('int2-nombre1').value || '',
    nombre2: document.getElementById('int2-nombre2').value || '',
    apellido1: document.getElementById('int2-apellido1').value || '',
    apellido2: document.getElementById('int2-apellido2').value || ''
  };

  console.log('Integrante 2 completado:', datosIntegrante2);
  procesarIntegrantes();
});
