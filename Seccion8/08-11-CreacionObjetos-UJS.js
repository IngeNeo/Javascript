//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
	this.nombreCompleto = function () {
		return this.nombre + ' ' + this.apellido;
	}
}

let padre = new Persona('Roger', 'Valencia', 'inge@corp.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Isabel', 'Miranda', 'miisa@bella.com');
console.log(madre.nombreCompleto());

padre.nombre = 'Alexis';

console.log(padre);
console.log(madre);

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean1 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};



