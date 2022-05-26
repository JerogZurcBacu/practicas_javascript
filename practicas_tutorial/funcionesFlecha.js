// Las funciones flecha son una forma mas concisa de escrubir las funciones

const fecha = () => new Date();

//Funciones flecha con parametros

const sumarTres = (x) => x + 3;
console.log(sumarTres(4));

//Concatenar arreglos

const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenarArreglos([1,20], [3,4,5]));

//Función flecha con varias lineas 

const sumar = (a, b) => {
    let num = 6;
    return a + b + num;
};
console.log(sumar(2,1));

//Valores por defecto para parametro

const incrementar = (num, valor = 1) => num + valor;
console.log(incrementar(5,3));
console.log(incrementar(3));