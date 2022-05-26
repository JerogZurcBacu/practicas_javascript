//Operador Rest
//Permite pasar cualquier numero de argumentos a una funcion y que estas se agrupen como un arreglo

const sumar = (...args) => {
    return args.reduce((a,b) => a + b, 0);
};

console.log(sumar(1,5,2,3));

//Operador spread
//Toma un arreglo y lo descompone en sus elementos individuales para que la funcion pueda recibirlos y assignarlos a sus parametros correspondientes

const numeros = [1, 2, 3];

function restar(x, y, z) {
    return x + y + z;
};

console.log(restar(...numeros));