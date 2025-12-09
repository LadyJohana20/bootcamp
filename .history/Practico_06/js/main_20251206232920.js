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




// 2 — Imprimir en consola el nombre de cada integrante con la primera letra en mayúscula y el resto en minúscula
let nombre = document.getElementById('nombre')
let nombre1 = document.getElementById('nombre1')
let apellido = document.getElementById('apellido')
let apellido1 = document.getElementById('apellido1')

let nombre2 = document.getElementById('nombre2')
let nombre3 = document.getElementById('nombre3')
let apellido2 = document.getElementById('apellido2')
let apellido3 = document.getElementById('apellido3')
console.log('-----\nIntegrante 1: "' + capitalizarTexto(nombre.textContent.trim()) + ' ' + capitalizarTexto(nombre.textContent.trim()) + ' ' + capitalizarTexto(apellido.textContent.trim()) + ' ' + capitalizarTexto(apellido1.textContent.trim()) + '"\nIntegrante 2: "' + capitalizarTexto(nombre2.textContent.trim()) + ' ' + capitalizarTexto(nombre3.textContent.trim()) + ' ' + capitalizarTexto(apellido2.textContent.trim()) + ' ' + capitalizarTexto(apellido3.textContent.trim()) + '"\n-----'   );


console.log('-----\nIntegrante 2: "' + capitalizarTexto(nombre1.textContent.trim()) + ' ' + capitalizarTexto(nombre2.textContent.trim()) + ' ' + capitalizarTexto(apellido1.textContent.trim()) + ' ' + capitalizarTexto(apellido2.textContent.trim()) + '"\n-----');

