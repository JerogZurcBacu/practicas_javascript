/* Concatenar las cadenapar a crear una cadena que muestre un mensaje. Se debe cmabiar los valores de las variables para crear la segunda oración.

Por ejemplo:
 Primera oración: El perro negro corrió rápidamente a la tienda.
 Segunda oración: LA bicicleta pequeña voló a la tienda lentamente
*/

var miSustantivo;
var miAdjetivo;
var miVerbo;
var miAdvervio;

miSustantivo = "perro";
miAdjetivo = "negro";
miVerbo = "corrió";
miAdvervio = "rápidamente";

var palabrasEnBlanco = "El" + " " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdvervio + " " + "a la tienda.";

console.log(palabrasEnBlanco);

// Segunda oración

miSustantivo = "bicicleta";
miAdjetivo = "pequeña";
miVerbo = "voló";
miAdvervio = "léntamente";

var palabrasEnBlanco = "La" + " " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + "a la tienda" + " " + miAdvervio + ".";

console.log(palabrasEnBlanco);