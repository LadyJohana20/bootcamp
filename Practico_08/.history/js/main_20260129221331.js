
document.addEventListener("DOMContentLoaded", () => {
  console.log("Contenido del DOM cargado");

  const textarea = document.getElementById("origen");
  const destino = document.getElementById("destino");

  textarea.value = `<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>`;

  const habilitarControles = () => {
    const inputs = document.getElementsByTagName("input");
    for (const input of inputs) {
      input.disabled = false;
    }
    const botones = document.getElementsByTagName("button");
    for (const btn of botones) {
      btn.disabled = false;
    }
  };

  textarea.addEventListener("input", habilitarControles);

  document
    .getElementById("btn-reemplazar")
    .addEventListener("click", () => {
      destino.innerHTML = textarea.value;
    });
