
//A través de un callback asociado al evento DOMContentLoaded de document, escribir en la consola el texto "Contenido del DOM cargado".
document.addEventListener('DOMContentLoaded', () => {
	console.log('Contenido del DOM cargado');
});

//Cargar desde JS el value del textarea con el siguiente contenido:
//<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>
//[Ok] Cuando se dispare el evento input del textarea, obtener un HTMLCollection con todos los <input> de la página y cambiar a false su propiedad disabled para que los mismos dejen de estar deshabilitados. Hacer lo mismo con el botón que falta.
const textarea = document.querySelector('textarea');
textarea.value = `<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>`;
textarea.addEventListener('input', () => {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }
    const button = document.querySelector('button');
    button.disabled = false;
});