// 1 — Leer el contenido del <title> e imprimirlo
console.log(document.title);

// // Función para capitalizar: primera letra mayúscula, resto minúsculas
// function capitalizarTexto(texto) {
//   return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
// }

// // Función para limpiar espacios duplicados y vacíos
// function limpiarEspacios(texto) {
//   return texto.trim().replace(/\s+/g, ' ');
// }

// // Aplicar capitalización a los dd dentro de .integrante y realizar comparaciones
// document.addEventListener('DOMContentLoaded', function() {
//   const integrantes = document.querySelectorAll('.integrante dd');
//   integrantes.forEach(dd => {
//     dd.textContent = capitalizarTexto(dd.textContent.trim());
//   });

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
    console.log('⚠️ COINCIDENCIAS ENCONTRADAS EN NOMBRES: ' + coincidenciasNombres.join(', ') );
    
    // Solicitar color al usuario
    let color = prompt('Se encontraron coincidencias en nombres.\n\nIngrese un color para destacarlos (ej: "red", "#c4203f", "rgb(196, 32, 63)"):', 'red');
    
    if (color) {
      console.log('Color seleccionado para nombres: ' + color);
      // Destacar nombres coincidentes en el HTML
      [nombre, nombre1, nombre2, nombre3].forEach(elemento => {
        if (elemento && coincidenciasNombres.includes(elemento.textContent.trim())) {
          elemento.style.color = color;
          elemento.style.fontWeight = 'bold';
        }
      });

      // Imprimir en consola con formato detallado
      let salida = '\n';
      salida += 'Integrante 1:\n';
      salida += 'Primer nombre\n' + nombre.textContent.trim() + '\n';
      salida += 'Segundo nombre\n' + nombre1.textContent.trim() + (coincidenciasNombres.includes(nombre1.textContent.trim()) ? ' <-- ' + color : '') + '\n';
      salida += 'Primer apellido\n' + apellido.textContent.trim() + '\n';
      salida += 'Segundo apellido\n' + apellido1.textContent.trim() + '\n\n';
      
      salida += 'Integrante 2:\n';
      salida += 'Primer nombre\n' + nombre2.textContent.trim() + (coincidenciasNombres.includes(nombre2.textContent.trim()) ? ' <-- ' + color : '') + '\n';
      salida += 'Segundo nombre\n' + nombre3.textContent.trim() + '\n';
      salida += 'Primer apellido\n' + apellido2.textContent.trim() + '\n';
      salida += 'Segundo apellido\n' + apellido3.textContent.trim();
      
      console.log(salida);

      // Mostrar en el HTML
      let htmlSalida = '<h3>Coincidencias encontradas:</h3>';
      htmlSalida += '<div style="display: flex; gap: 40px;">';
      
      // Integrante 1
      htmlSalida += '<div><h4>Integrante 1:</h4>';
      htmlSalida += '<p><strong>Primer nombre</strong><br>' + nombre.textContent.trim() + '</p>';
      htmlSalida += '<p><strong>Segundo nombre</strong><br>';
      if (coincidenciasNombres.includes(nombre1.textContent.trim())) {
        htmlSalida += '<span style="color: ' + color + '; font-weight: bold;">' + nombre1.textContent.trim() + '</span>';
      } else {
        htmlSalida += nombre1.textContent.trim();
      }
      htmlSalida += '</p>';
      htmlSalida += '<p><strong>Primer apellido</strong><br>' + apellido.textContent.trim() + '</p>';
      htmlSalida += '<p><strong>Segundo apellido</strong><br>' + apellido1.textContent.trim() + '</p>';
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
      htmlSalida += '<p><strong>Segundo nombre</strong><br>' + nombre3.textContent.trim() + '</p>';
      htmlSalida += '<p><strong>Primer apellido</strong><br>' + apellido2.textContent.trim() + '</p>';
      htmlSalida += '<p><strong>Segundo apellido</strong><br>' + apellido3.textContent.trim() + '</p>';
      htmlSalida += '</div></div>';
      
      if (resultadoDiv) resultadoDiv.innerHTML = htmlSalida;
    }
  } else {
    console.log('✓ No hay coincidencias en nombres.');
  }

  // ==================== COMPARACIÓN DE APELLIDOS ====================
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
    let colorApellidos = prompt('Se encontraron coincidencias en apellidos.\n\nIngrese un color para destacarlos (ej: "blue", "#0066cc"):', 'blue');
    if (colorApellidos) {
      console.log('Color seleccionado para apellidos: ' + colorApellidos);
      // Destacar apellidos coincidentes en el HTML
      [apellido, apellido1, apellido2, apellido3].forEach(elemento => {
        if (elemento && coincidenciasApellidos.includes(elemento.textContent.trim())) {
          elemento.style.color = colorApellidos;
          elemento.style.fontWeight = 'bold';
        }
      });
      // Si ya existe resultadoDiv, actualizar para marcar apellidos también
      if (resultadoDiv) {
        // simple approach: append apellidos highlights to existing htmlSalida
        let extra = '<h3>Coincidencias de apellidos:</h3>';
        extra += '<div style="display:flex; gap:40px;">';
        extra += '<div><h4>Integrante 1:</h4>';
        extra += '<p><strong>Primer apellido</strong><br>' + (coincidenciasApellidos.includes(apellido.textContent.trim()) ? '<span style="color:' + colorApellidos + '; font-weight:bold;">' + apellido.textContent.trim() + '</span>' : apellido.textContent.trim()) + '</p>';
        extra += '<p><strong>Segundo apellido</strong><br>' + (coincidenciasApellidos.includes(apellido1.textContent.trim()) ? '<span style="color:' + colorApellidos + '; font-weight:bold;">' + apellido1.textContent.trim() + '</span>' : apellido1.textContent.trim()) + '</p>';
        extra += '</div>';
        extra += '<div><h4>Integrante 2:</h4>';
        extra += '<p><strong>Primer apellido</strong><br>' + (coincidenciasApellidos.includes(apellido2.textContent.trim()) ? '<span style="color:' + colorApellidos + '; font-weight:bold;">' + apellido2.textContent.trim() + '</span>' : apellido2.textContent.trim()) + '</p>';
        extra += '<p><strong>Segundo apellido</strong><br>' + (coincidenciasApellidos.includes(apellido3.textContent.trim()) ? '<span style="color:' + colorApellidos + '; font-weight:bold;">' + apellido3.textContent.trim() + '</span>' : apellido3.textContent.trim()) + '</p>';
        extra += '</div></div>';
        resultadoDiv.innerHTML += extra;
      }
    }
  } else {
    console.log('✓ No hay coincidencias en apellidos.');
  }
});





