// 1 — Leer el contenido del <title> e imprimirlo
console.log(document.title);

// Función para capitalizar: primera letra mayúscula, resto minúsculas
function capitalizarTexto(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}


// 2 — Imprimir en consola el nombre de cada integrante con la primera letra en mayúscula y el resto en minúscula
let nombre1 = document.getElementById('nombre1').textContent;


