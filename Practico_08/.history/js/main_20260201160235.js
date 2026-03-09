

document.addEventListener('DOMContentLoaded', () => {
	console.log('Contenido del DOM cargado');



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

  document.querySelector(".btn-vaciar").addEventListener("click", () => {
      destino.innerHTML = "";
    });

  document.querySelector(".btn-convertir-a-mayusculas").addEventListener("click", () => {
      destino.innerHTML = destino.innerHTML.toUpperCase();
    });

  document.querySelector("button").addEventListener("click", () => {
      destino.innerHTML = destino.innerHTML.toLowerCase();
    });

  // Agregar "[Ok] " al inicio de cada <li>
  const items = document.getElementsByTagName("li");
  for (let li of items) {
    li.innerHTML = "[Ok] " + li.innerHTML;
  }
});
