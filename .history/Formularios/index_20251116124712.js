//esto es un comentario de una sola linea

var nombre; //declaracion variable

nombre="Juan"; //asignacion de valor
nombre=123; //reasignacion de valor con diferente tipo de dato
nombre="Pedro"; //reasignacion de valor

var edad = 30; //declaracion y asignacion en una sola linea

//imprimir en la consola el dato almacenado en las variables

console.log(nombre);
console.log(edad);

//tipos de datos
// string (cadena de texto, letra, palabra, frases entre comillas)
//js es flexible con las comillas: simples . dobles o backticks
var ciudad = "Buenos Aires";
var pais = `argentina`;
var continente = 'America del sur';
var dni = '123456789';
console.log(ciudad, pais, continente);
console.log(dni);
console.log(dni *3 /2);

//tipo de dato numerico (numeros, enteros, decimales, sin comillas)

var numeroEntero = 100;
var numeroDecimal= 99.99;

console.log(numeroEntero, numeroDecimal);

//tipo de dato boolean (booleano, true , false)
var soltero = true;
var tieneMascota = false;
console.log(soltero, tieneMascota);

//declara y asigna variable en una sola linea
var marcaAuto = "Toyota", modeloAuto = "corolla", anioAuto= 2020;

//declaracion varias variables sin asignar valor

var fruta, color, sabor;
console.log(fruta);//undefined because dont have valor asignado

//crear variable con la siguiente sintaxis
var localidad; //minuscula
var CUENTA_BANCARIA; //snake case mayus y guion bajo 
var PaisDeOrigen; //camel case
var $Estado; //con signo de dolar
var _CodigoPostal; //con guion bajo

var 1ernombre; //incorrecto, no puede comenzar con numero
var nombre completo; // incorrecto no puede tener espacios
var var; //incorrecto, no puede tener palabra reservada
var if;//incorrecto, no puede tener palabra reservada


