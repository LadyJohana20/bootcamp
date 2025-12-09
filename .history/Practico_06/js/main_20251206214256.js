// 1 — Leer el contenido del <title> e imprimirlo
console.log(document.title);

// Función para capitalizar solo la primera letra y el resto en minúsculas
function capitalizarIntegrante(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Aplicar capitalización a todos los elementos con clase .integrante
document.addEventListener('DOMContentLoaded', function() {
  const integrantes = document.querySelectorAll('.integrante');
  integrantes.forEach(integrante => {
    const contenido = integrante.textContent;
    if (contenido) {
      integrante.textContent = capitalizarIntegrante(contenido.trim());
    }
  });
});
