// permite compactar un condicional en una sola linea

/*

function nombreFuncion (arg1, arg2) {
    return condicional ? true : false;
}

*/

//Ejemplo

function retornarMinimo(x, y) {
    return x < y ? x : y;
}

console.log(retornarMinimo(58, 48));


//Multiples operadores condicionales

function compararNumeros(a, b) {
    return a == b ? "a y b son iguales"
        : a > b ? "a es mayor que b"
        : "b es mayor que a";
}

console.log(compararNumeros(11, 27));
console.log(compararNumeros(11, 11));
console.log(compararNumeros(27, 11));
