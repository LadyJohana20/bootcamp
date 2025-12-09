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

  //  COMPARACIÓN DE NOMBRES
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

  // Contenedor de resultados en HTML
  const resultadoDiv = document.getElementById('resultado-coincidencias');

  if (coincidenciasNombres.length > 0) {
    console.log('Hay coincidencias en los nombres ' + coincidenciasNombres.join(', ') );
    
    // Solicitar color al usuario
    let color = prompt('Se encontraron coincidencias en nombres.\n\n Por favor ingrese un color para destacarlos (ej: "red", "green", "yellow", "blue", "etc"):', 'red');
    
    if (color) {
      console.log('Color seleccionado para nombres: ' + color);
      // Destacar nombres coincidentes en el HTML
      [nombre, nombre1, nombre2, nombre3].forEach(elemento => {
        if (elemento && coincidenciasNombres.includes(elemento.textContent.trim())) {
          elemento.style.color = color;
          elemento.style.fontWeight = 'bold';
        }
      });

      // COMPARACIÓN DE APELLIDOS (ahora dentro de nombres)
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

      let colorApellidos = null;
      if (coincidenciasApellidos.length > 0) {
        console.log('Hay coincidencias en apellidos ' + coincidenciasApellidos.join(', '));
        let compararApellidos = confirm('Se encontraron coincidencias en apellidos.\n\n¿Desea destacarlos en color?');
        if (compararApellidos) {
          colorApellidos = prompt('Ingrese un color para destacarlos (ej: "red", "green", "yellow", "blue", "etc"', 'blue');
          if (colorApellidos) {
            console.log('Color seleccionado para apellidos: ' + colorApellidos);
            [apellido, apellido1, apellido2, apellido3].forEach(elemento => {
              if (elemento && coincidenciasApellidos.includes(elemento.textContent.trim())) {
                elemento.style.color = colorApellidos;
                elemento.style.fontWeight = 'bold';
              }
            });
          }
        }
      }

      // Mostrar en el HTML (todo en una sección)
      let htmlSalida = '<h3>Coincidencias encontradas:</h3>';
      htmlSalida += '<div style="display: flex; flex-direction: column; gap: 20px;">';
      
      // Integrante 1
      htmlSalida += '<div><h4>Integrante 1:</h4>';
      htmlSalida += '<p><strong>Primer nombre</strong><br>';
      if (coincidenciasNombres.includes(nombre.textContent.trim())) {
        htmlSalida += '<span style="color: ' + color + '; font-weight: bold;">' + nombre.textContent.trim() + '</span>';
      } else {
        htmlSalida += nombre.textContent.trim();
      }
      htmlSalida += '</p>';
      htmlSalida += '<p><strong>Segundo nombre</strong><br>';
      if (coincidenciasNombres.includes(nombre1.textContent.trim())) {
        htmlSalida += '<span style="color: ' + color + '; font-weight: bold;">' + nombre1.textContent.trim() + '</span>';
      } else {
        htmlSalida += nombre1.textContent.trim();
      }
      htmlSalida += '</p>';
      htmlSalida += '<p><strong>Primer apellido</strong><br>';
      if (colorApellidos && coincidenciasApellidos.includes(apellido.textContent.trim())) {
        htmlSalida += '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + apellido.textContent.trim() + '</span>';
      } else {
        htmlSalida += apellido.textContent.trim();
      }
      htmlSalida += '</p>';
      htmlSalida += '<p><strong>Segundo apellido</strong><br>';
      if (colorApellidos && coincidenciasApellidos.includes(apellido1.textContent.trim())) {
        htmlSalida += '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + apellido1.textContent.trim() + '</span>';
      } else {
        htmlSalida += apellido1.textContent.trim();
      }
      htmlSalida += '</p>';
      htmlSalida += '</div>';
      
      // Integrante 2
      htmlSalida += '<div><h4>Integrante 2:</h4>';
      htmlSalida += '<p><strong>Primer nombre</strong><br>';
      if (coincidenciasNombres.includes(nombre2.textContent.trim())) {
        htmlSalida += '<span style="color: ' + color + '; font-weight: bold;">' + nombre2.textContent.trim() + '</span>';
      } else {
        htmlSalida += nombre2.textContent.trim();
      }
      htmlSalida += '</p>';
      htmlSalida += '<p><strong>Segundo nombre</strong><br>';
      if (coincidenciasNombres.includes(nombre3.textContent.trim())) {
        htmlSalida += '<span style="color: ' + color + '; font-weight: bold;">' + nombre3.textContent.trim() + '</span>';
      } else {
        htmlSalida += nombre3.textContent.trim();
      }
      htmlSalida += '</p>';
      htmlSalida += '<p><strong>Primer apellido</strong><br>';
      if (colorApellidos && coincidenciasApellidos.includes(apellido2.textContent.trim())) {
        htmlSalida += '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + apellido2.textContent.trim() + '</span>';
      } else {
        htmlSalida += apellido2.textContent.trim();
      }
      htmlSalida += '</p>';
      htmlSalida += '<p><strong>Segundo apellido</strong><br>';
      if (colorApellidos && coincidenciasApellidos.includes(apellido3.textContent.trim())) {
        htmlSalida += '<span style="color: ' + colorApellidos + '; font-weight: bold;">' + apellido3.textContent.trim() + '</span>';
      } else {
        htmlSalida += apellido3.textContent.trim();
      }
      htmlSalida += '</p>';
      htmlSalida += '</div></div>';
      
      if (resultadoDiv) resultadoDiv.innerHTML = htmlSalida;
    }
  } else {
    console.log('No hay coincidencias en nombres.');
  }
});





