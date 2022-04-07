/*

function nombre (argumentos) {
    cuerpo: codigo a ejecutar
}

*/

/*
* Argumentos
*/

// Ámbito global (Variables) - (globales(programa) y locales(funcion))

var x = 123
var y = 543 // "x" y "y" son variables globales

function sumar(a, b) {
    var suma = a + b; //"suma" es una variable local
    console.log("El resultado de " + a + " + " + b + " es: " + suma);
}

sumar(5, 10);
sumar(12, 28);
sumar(155, 168);
sumar(15682, 1558892);
sumar(x, y);
sumar("come", "popo");

//las variables locales tienen preferencia sobre las globales cuando tienen el mismo nombre

/*
* Retorno de valor
*/

function resta(a, b) {
    return a - b; //retorna la resta de los valores, que puede imprimirse con consolo.log(resta(n, n)) o se puede asignar a una variable
}

/*
* Undefined
*/

// Si no se retorna ningun valor este sera Undefined

/*
* Asignar valro retornado por una funcion en una variable
*/

//Se puede asignar un valor retornado de una función a una variable

/*
* Patrón de retorno anticipado
*/

//La función se detienen al momento de retornar un valor. Esta propiedad puede ser util utilizando un patron de retorno anticipado, junto con una condicional que determine en que momento (si se cumple una condicion) se debera detener la función,



