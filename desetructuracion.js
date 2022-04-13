//Permite asignar los elementos de un objeto como argumentos para una funcion

//Ejemplo simple

const usuario = {
    nombre: "Gino Smith",
    edad: 34
};

const {nombre, edad} = usuario;

//Ejemplo Anidados

const usuario2 = {
    johnDoe: {
        años: 24,
        correo: "johndoe@greecodecamp.com"
    }
};

const {johnDoe: {años: edadDelUsuario, correo: correoDelUsuario}} = usuario2;

console.log(edadDelUsuario);
console.log(correoDelUsuario);

//Ejemplo anidados 2

const PRONOSTICO_LOCAL = {
    ayer: {
        minima: 61,
        maxima: 75
    },
    hoy: {
        minima: 64,
        maxima: 77
    },
    mañana: {
        minima: 68,
        maxima: 80
    }
};

const {mañana: {minima: minimahoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(minimahoy);

//Arreglos

var a;
var b;
var c;

//Iguales
[a, b, c] = [1,2,3];

console.log(a);
console.log(b);
console.log(c);
console.log();

//Menor variables
[a, b] = [5,6,7,8,9];

console.log(a);
console.log(b);
console.log();

//Salto en asignacion de valores
[a, b,,,c] = [5,6,7,8,9];

console.log(a);
console.log(b);
console.log(c);
console.log();

//Intercambio de valores
var a = 8;
var b = 6;

[b, a] = [a, b];
console.log(a);
console.log(b);
console.log();

//Desestructuración + operador rest

var a;
var b;
var arr;

[a, b, ...arr] = [1,2,3,4,5,6,7];

console.log(a);
console.log(b);
console.log(arr);
console.log();

//Ej.2

const arregloInicial = [1,2,3,4,5,6,7,8,9];

function removerTresPrimerosElementos(arreglo) {
    const [, , , ...nuevoArreglo] = arreglo;
    return nuevoArreglo;
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);

//Pasar objeto como argumento

var nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "española",
    ubicacion: "España"
};

const actualizarPerfil = ({nombre, edad, nacionalidad, ubicacion}) => {
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
};

actualizarPerfil(nuevoPerfilCliente);

//Ej. 2 Propiedades especificas

const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};

const mitadMaxMin = ({max, min}) => (max + min) / 2.0;
console.log(mitadMaxMin(estadisticas));

