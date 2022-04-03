/* Próximo en la fila.

En informática una cola (queue) es una estructura de datos abstracta en el cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola.

Define una función proximoEnLaFila que tome un arreglo y un número (elemento) como argumentos. Agrega el núemero al final del arreglo y luego elimina el primer elemento del arreglo. La funcion debe retornar el elemento que fue removido

*/

function proximoEnLaFila (arreglo, elemento) {
    arreglo.push(elemento);
    return arreglo.shift();
};

miArreglo = [1,2,3,4,5,6];

console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, "nuevo elemento"));

console.log("Despues: " + JSON.stringify(miArreglo));