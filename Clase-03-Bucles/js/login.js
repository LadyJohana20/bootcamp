
/* Ejemplo de comentario de cabecera de un archivo JS:
** Archivo login.js
** Parametros: No tiene
** Descripcion: Archivo para la logica del login
** Autor: Bernardo Martinez
** Fecha de creacion: 2024-06-10
** Ultima modificacion: 2024-06-10
*/  


//1. capaturamos el  formulario
let formulario = document.getElementById("formulario");

//2. agregamos el evento al formulario

formulario.addEventListener("submit", function(event) {

  console.log(event);
  

  alert("Formulario enviado");


})



//2. Login con la función onclick

function login() {
  alert("Login con onclick"); 
  formulario.reset();
}