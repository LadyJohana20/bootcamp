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
});

console.log('-----\nIntegrante 1: "Lady Johana Caicedo Cardozo"\nIntegrante 2: "Misty Sofia Soto"\n-----');


// 2 — Imprimir en consola el nombre de cada integrante con la primera letra en mayúscula y el resto en minúscula
let nombre1 = document.getElementById('nombre1')
console.log('-----\nIntegrante 1: "' + capitalizarTexto(nombre1.textContent.trim()) + '"\n-----');

