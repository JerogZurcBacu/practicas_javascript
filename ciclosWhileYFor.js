/*

Los ciclos, bucles o loop nos permiten repetir una secuencia de instrucciones un numero especifico de veces. Existen dos tipos de ciclos, while y for.

Los cilcos While se usan cuando no se tiene un número especifico de iteraciones (codigo a repetir).

*/

/*
Ciclo While

var condicion = 0

while (condicion = true) {
    console.log("codigo a repetir");
    condicion++;
}

*/

//Ejemplo Ciclo While

var miArreglo = [];
var i = 0;

console.log(miArreglo);

while (i < 10) {
    miArreglo.push(i);
    i++;
}

console.log(miArreglo);

//Ejemplo Ciclo For

var miArregloDos = [];

for (var x = 0; x < 10; x = x + 2) {
    miArregloDos.push(x);
};

console.log(miArregloDos);

//Ejercicios Ciclo for para numeros impares

var misNumeros = [];

for (var i = 1; i < 50; i = i + 2) {
    misNumeros.push(i);
}

console.log(misNumeros);

//Iterar sobre un Arreglo con un ciclo "For"

/*

Iterar sobre un arreglo significa que se va a obtener cada uno de los elementos de ese arregki, y estos se podran usar en el cuerpo del ciclo.

*/

//Ejemplo interación de arreglos con ciclo for
var miArreglo3 = [4, 6, 8, 2];
var total = 0;

for (var z = 0; z < miArreglo3.length; z++) {
    total += miArreglo3[z];
}

console.log(total);

//Ejemplo interación de arreglos con ciclo for en funcion
function contarNumerosPares(arreglo) {
    var total = 0;

    for (var c = 0; c < arreglo.length; c++) {
        if (arreglo[c] % 2 ==0) {
            total++;
        }
    }

    return total;
}

console.log(contarNumerosPares([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));

//Ciclos for anidados

var otroArreglo = [[1,2,3], [4,5,6], [7,8,9]];

for (var j = 0; j < otroArreglo.length; j++) {
    var arregloAnidado = otroArreglo[j];
    for (var k = 0; k < arregloAnidado.length; k++) {
        console.log(arregloAnidado[k]);
    }
}

//Ciclo do ... while

// El ciclo do...while tiene como diferencia el que el codigo dentro de las llaves se ejecutara al menos una vez primera, antes de usar la condicional

do {
    console.log(x);
    x++;
} while (x < 10);