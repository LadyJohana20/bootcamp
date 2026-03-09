
//A través de un callback asociado al evento DOMContentLoaded de document, escribir en la consola el texto "Contenido del DOM cargado".
document.addEventListener('DOMContentLoaded', () => {
	console.log('Contenido del DOM cargado');
});

//Cargar desde JS el value del textarea con el siguiente contenido:
//<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>
//[Ok] Cuando se dispare el evento input del textarea, obtener un HTMLCollection con todos los <input> de la página y cambiar a false su propiedad disabled para que los mismos dejen de estar deshabilitados. Hacer lo mismo con el botón que falta.
const textarea = document.getElementById('origen');
const destino = document.getElementById('destino');



textarea.value = `<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>`;

const controlesHabilitar = () => {
    const inputs = document.getElementsByTagName('input');
    for (const input of inputs) {
        input.disabled = false;             
    }
    const botones = document.getElementsByTagName('button');
    for (const boton of botones) {
        boton.disabled = false;
    }
};

textarea.addEventListener('input', controlesHabilitar);

document.getElementById('btn-reemplazar').addEventListener('click', () => {
    destino.innerHTML = textarea.value;
});

 const botonesAgregar = document.getElementsByClassName("btn-agregar");

  botonesAgregar[0].addEventListener("click", () => {
    destino.innerHTML += textarea.value;
  });

  botonesAgregar[1].addEventListener("click", () => {
    destino.innerHTML += textarea.value.repeat(5);
  });

  botonesAgregar[2].addEventListener("click", () => {
    destino.innerHTML += textarea.value.repeat(10);
  });

  botonesAgregar[3].addEventListener("click", () => {
    const n = Number(prompt("¿Cuántas veces deseas repetir el contenido?"));
    if (!isNaN(n) && n > 0) {
      destino.innerHTML += textarea.value.repeat(n);
    }
  });
