// var nombreArreglo = [valor1, valor2, "valor3", [subValor1, subValor2]... valorN];

// se pueden anidar los arreglos
var miArray = ["jorge", 28, 37.2, ["frontend", true, ["html", 100], ["css", 100], ["javascript", 60]]];

//Acceder a los elementos de un arreglo

/*
Arreglo: [10, 20, 30];
Índices:  0    1   2
*/


console.log(miArray[3]);
console.log(miArray[0]);
console.log(miArray[2]);

//Modificar elementos de un Arreglo

miArray[0] = "Jerog";
console.log(miArray[0]);

//Arreglos multidimensionales

miArray[3][4][1] = 40;
console.log(miArray[3]);

//Método .push() - agregar elemento al final del arreglo
//arreglo.push(nuevo valor)

miArray.push(["color favorito", "azul"]);
console.log(miArray);

//Método .pop() - eliminar el ultimo elemento del arreglo / retorna el elemento para asignarlo a una variable
//arreglo.pop();

colorFav = miArray.pop();

console.log(miArray);
console.log(colorFav);

//Método .shift() - Remueve el primer elemento del arreglo
//arreglo.shift();

miArray.shift();
console.log(miArray);

//Método .unshift() - Agregar elemento al principio del arreglo
//arreglo.unshift(elemnto);

miArray.unshift(["Nombre", "Jerog"]);
console.log(miArray);