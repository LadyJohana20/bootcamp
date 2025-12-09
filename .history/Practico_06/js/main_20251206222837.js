// 1 — Leer el contenido del <title> e imprimirlo
console.log(document.title);

// Función para capitalizar: primera letra mayúscula, resto minúsculas
function capitalizarTexto(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Aplicar capitalización a los dd dentro de .integrante
document.addEventListener('DOMContentLoaded', function() {
  const integrantes = document.querySelectorAll('.integrante dd');
  integrantes.forEach(dd => {
    dd.textContent = capitalizarTexto(dd.textContent.trim());
  });

  // Obtener información de los integrantes
  const todosLosIntegrantes = document.querySelectorAll('.integrante');
  
  let integrante1 = '';
  let integrante2 = '';
  
  if (todosLosIntegrantes.length >= 1) {
    const dds1 = todosLosIntegrantes[0].querySelectorAll('dd');
    if (dds1.length >= 2) {
      integrante1 = dds1[0].textContent + ' ' + dds1[1].textContent;
    }
  }
  
  if (todosLosIntegrantes.length >= 2) {
    const dds2 = todosLosIntegrantes[1].querySelectorAll('dd');
    if (dds2.length >= 2) {
      integrante2 = dds2[0].textContent + ' ' + dds2[1].textContent;
    }
  }
  
  console.log(`-----\nIntegrante 1: "${integrante1}"\nIntegrante 2: "${integrante2}"\n-----`);
});

console.log('-----\nIntegrante 1: "Lady Johana Caicedo Cardozo"\nIntegrante 2: "Misty Sofia Soto"\n-----');



