/*
Tenemos un objeto que representa parte de una collecion de álbumes musicales.

Cada álbum tiene un número de identificación único (id), asociado a otras propiedades.

No todos los álbunes tienen la información completa.
*/

var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold"
    }
};

/*

Define una función actualizarDiscos que tome los siguientes parámetros:
- discos (el objeto que representa la colecciión de discos).
- id.
- propiedad ("artista" o "canciones").
- valor.

Tu meta es completar la función implementando las siguientes reglas para modificar el objeto pasado a la función:

- Si "valor" es una cadena vacía, elimina la propiedad del álbum correspondiente.

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero el álbum no tiene una propiedad llamada "canciones", crea un arreglo vacío y agrega "valor" a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres "cancions" y "valor" no es una cadena vacía, agrega "valor" al final del arreglo de canciones del álbum correspondiente.

- Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asigna el valor del parámetro "valor" a la propiedad. Si la propiedad no existe, debes crearla y asignar este valor.

*/

//55:54:32