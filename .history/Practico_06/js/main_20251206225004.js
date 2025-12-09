// 1 — Leer el contenido del <title> e imprimirlo
console.log(document.title);

// Función para capitalizar: primera letra mayúscula, resto minúsculas
function capitalizarTexto(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Leer datos del HTML e imprimir en consola los nombres completos de los integrantes
document.addEventListener('DOMContentLoaded', function() {
  const integrantes = document.querySelectorAll('.integrante');
  let integrante1Completo = '';
  let integrante2Completo = '';
  
  // Procesar cada integrante
  integrantes.forEach((integrante, index) => {
    const dds = integrante.querySelectorAll('dd');
    const partes = [];
    
    // Recopilar todos los valores de dd, capitalizarlos y filtrar vacíos
    dds.forEach(dd => {
      const valor = dd.textContent.trim();
      if (valor) {
        partes.push(capitalizarTexto(valor));
      }
    });
    
    // Asignar al integrante correspondiente
    const nombreCompleto = partes.join(' ');
    if (index === 0) {
      integrante1Completo = nombreCompleto;
    } else if (index === 1) {
      integrante2Completo = nombreCompleto;
    }
  });
  
  // Imprimir en consola con un único console.log
  console.log(`-----\nIntegrante 1: "${integrante1Completo}"\nIntegrante 2: "${integrante2Completo}"\n-----`);
});

// 2 — Imprimir en consola el nombre de cada integrante con la primera letra en mayúscula y el resto en minúscula
let nombre1 = document.getElementById('nombre1').textContent;


