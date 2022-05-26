/*

Plantillas literales o plantillas de Cadenas.

Características:

- Se usa el acento invertido (backtick) `en lugar de las comillas.
- Pueden contener comillas simpleso dobles.
- Las líneas se preservan como se escriben en el código.
- Para reemplazar una variable se escribe ${variable}.
- Dentro de ${} también puedes escribir expresiones.

*/

var color = "Azul";
var persona = {
    nombre: "Coco Flow",
    edad: 28
};

const SALUDO = `¡Hola! Mi nombre es ${persona.nombre} y tengo ${persona.edad} años y mi color favorito es ${color}.`;

console.log(SALUDO);