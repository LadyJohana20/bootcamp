

document.addEventListener("DOMContentLoaded", () => {
  console.log("Contenido del DOM cargado");

  const textarea = document.getElementById("origen");
  const divDestino = document.getElementById("destino");

  textarea.value = `<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>`;

  let okAgregado = false; 

  textarea.addEventListener("input", () => {
    const inputs = document.getElementsByTagName("input");
    const botones = document.getElementsByTagName("button");

    for (let input of inputs) {
      input.disabled = false;
    }

    for (let boton of botones) {
      boton.disabled = false;
    }


    if (!okAgregado) {
      const items = document.getElementsByTagName("li");
      for (let li of items) {
        li.innerHTML = "[Ok] " + li.innerHTML;
      }
      okAgregado = true;
    }
  });

  const btnReemplazar = document.getElementById("btn-reemplazar");
  const botonesAgregar = document.getElementsByClassName("btn-agregar");

  btnReemplazar.addEventListener("click", () => {
    divDestino.innerHTML = textarea.value + "<br>";
  });

  botonesAgregar[0].addEventListener("click", () => {
    divDestino.innerHTML += textarea.value + "<br>";
  });

  botonesAgregar[1].addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      divDestino.innerHTML += textarea.value + "<br>";
    }
  });

  botonesAgregar[2].addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      divDestino.innerHTML += textarea.value + "<br>";
    }
  });

  botonesAgregar[3].addEventListener("click", () => {
    const n = parseInt(prompt("¿Cuántas veces deseas agregar el contenido?"));
    if (!isNaN(n) && n > 0) {
      for (let i = 0; i < n; i++) {
        divDestino.innerHTML += textarea.value;
      }
    }
  });

  const btnVaciar = document.getElementsByClassName("btn-vaciar")[0];
  const btnMayusculas = document.getElementsByClassName("btn-convertir-a-mayusculas")[0];
  const btnMinusculas = document.querySelector("button");

  btnVaciar.addEventListener("click", () => {
    divDestino.innerHTML = "";
  });

  btnMayusculas.addEventListener("click", () => {
    divDestino.innerHTML = divDestino.innerHTML.toUpperCase();
  });

  btnMinusculas.addEventListener("click", () => {
    divDestino.innerHTML = divDestino.innerHTML.toLowerCase();
  });
});