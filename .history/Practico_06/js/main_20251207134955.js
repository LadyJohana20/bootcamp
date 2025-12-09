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
    capitalizarTexto(nom.textContent.trim()) + ' ' + 
    capitalizarTexto(nom2.textContent.trim()) + ' ' + 
    capitalizarTexto(ape.textContent.trim()) + ' ' + 
    capitalizarTexto(ape2.textContent.trim())
  );
}

// Función para extraer array de nombres/apellidos únicos
function extraerAtributos(elem1, elem2) {
  return [
    capitalizarTexto(elem1.textContent.trim()),
    capitalizarTexto(elem2.textContent.trim())
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

// Función para destacar elementos en el DOM
function destacarElementos(elementos, coincidencias, color) {
  elementos.forEach(elemento => {
    if (elemento && coincidencias.includes(elemento.textContent.trim())) {
      elemento.style.color = color;
      elemento.style.fontWeight = 'bold';
    }
  });
}

// Función para generar HTML de un integrante
function generarHTMLIntegrante(titulo, nom, nom2, ape, ape2, colorNombres, colorApellidos, coincidenciasNombres, coincidenciasApellidos) {
  let html = '<div><h4>' + titulo + ':</h4>';
  
  // Primer nombre
  html += '<p><strong>Primer nombre</strong><br>';
  if (coincidenciasNombres.includes(nom.textContent.trim())) {
    html += '<span style="color: ' + colorNombres + '; font-weight: bold;">' + nom.textContent.trim() + '</span>';
  } else {
    html += nom.textContent.trim();
  }
  html += '</p>';
  
  // Segundo nombre
  html += '<p><strong>Segundo nombre</strong><br>';
  if (coincidenciasNombres.includes(nom2.textContent.trim())) {
    html += '<span style="color: ' + colorNombres + '; font-weight: bold;">' + nom2.textContent.trim() + '</span>';
  } else {
    html += nom2.textContent.trim();
  }
  html += '</p>';
  
  // Primer apellido
  html += '<p><strong>Primer apellido</strong><br>';
  if (colorApellidos && coincidenciasApellidos.includes(ape.textContent.trim())) {
    html += '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + ape.textContent.trim() + '</span>';
  } else {
    html += ape.textContent.trim();
  }
  html += '</p>';
  
  // Segundo apellido
  html += '<p><strong>Segundo apellido</strong><br>';
  if (colorApellidos && coincidenciasApellidos.includes(ape2.textContent.trim())) {
    html += '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + ape2.textContent.trim() + '</span>';
  } else {
    html += ape2.textContent.trim();
  }
  html += '</p></div>';
  
  return html;
}

// Aplicar capitalización a los dd dentro de .integrante y realizar comparaciones
document.addEventListener('DOMContentLoaded', function() {
  const integrantes = document.querySelectorAll('.integrante dd');
  integrantes.forEach(dd => {
    dd.textContent = capitalizarTexto(dd.textContent.trim());
  });

  // Elementos
  let nombre = document.getElementById('nombre');
  let nombre1 = document.getElementById('nombre1');
  let apellido = document.getElementById('apellido');
  let apellido1 = document.getElementById('apellido1');

  let nombre2 = document.getElementById('nombre2');
  let nombre3 = document.getElementById('nombre3');
  let apellido2 = document.getElementById('apellido2');
  let apellido3 = document.getElementById('apellido3');

  // Construir nombres completos
  let integrante1 = construirNombreCompleto(nombre, nombre1, apellido, apellido1);
  let integrante2 = construirNombreCompleto(nombre2, nombre3, apellido2, apellido3);

  console.log('-----\nIntegrante 1: "' + integrante1 + '"\nIntegrante 2: "' + integrante2 + '"\n-----');

  // COMPARACIÓN DE NOMBRES
  let nombresIntegrante1 = extraerAtributos(nombre, nombre1);
  let nombresIntegrante2 = extraerAtributos(nombre2, nombre3);

  let coincidenciasNombres = buscarCoincidencias(nombresIntegrante1, nombresIntegrante2);

  // Contenedor de resultados en HTML
  const resultadoDiv = document.getElementById('resultado-coincidencias');

  if (coincidenciasNombres.length > 0) {
    console.log('Hay coincidencias en los nombres ' + coincidenciasNombres.join(', '));
    
    // Solicitar color al usuario
    let color = prompt('Se encontraron coincidencias en nombres.\n\n Por favor ingrese un color para destacarlos (ej: "red", "green", "yellow", "blue", "etc"):', 'red');
    
    if (color) {
      console.log('Color seleccionado para nombres: ' + color);
      destacarElementos([nombre, nombre1, nombre2, nombre3], coincidenciasNombres, color);

      // COMPARACIÓN DE APELLIDOS
      let apellidosIntegrante1 = extraerAtributos(apellido, apellido1);
      let apellidosIntegrante2 = extraerAtributos(apellido2, apellido3);

      let coincidenciasApellidos = buscarCoincidencias(apellidosIntegrante1, apellidosIntegrante2);

      let colorApellidos = null;
      if (coincidenciasApellidos.length > 0) {
        console.log('Hay coincidencias en apellidos ' + coincidenciasApellidos.join(', '));
        let compararApellidos = confirm('Se encontraron coincidencias en apellidos.\n\n¿Desea destacarlos en color?');
        if (compararApellidos) {
          colorApellidos = prompt('Ingrese un color para destacarlos (ej: "red", "green", "yellow", "blue", "etc"', 'blue');
          if (colorApellidos) {
            console.log('Color seleccionado para apellidos: ' + colorApellidos);
            destacarElementos([apellido, apellido1, apellido2, apellido3], coincidenciasApellidos, colorApellidos);
          }
        }
      }

      // Mostrar en el HTML
      let htmlSalida = '<h3>Coincidencias encontradas:</h3>';
      htmlSalida += '<div style="display: flex; flex-direction: column; gap: 20px;">';
      
      htmlSalida += generarHTMLIntegrante('Integrante 1', nombre, nombre1, apellido, apellido1, color, colorApellidos, coincidenciasNombres, coincidenciasApellidos);
      htmlSalida += generarHTMLIntegrante('Integrante 2', nombre2, nombre3, apellido2, apellido3, color, colorApellidos, coincidenciasNombres, coincidenciasApellidos);
      
      htmlSalida += '</div>';
      
      if (resultadoDiv) resultadoDiv.innerHTML = htmlSalida;
    }
  } else {
    console.log('No hay coincidencias en nombres.');
  }
});





