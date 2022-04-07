/*

var miObjeto = {
    "propiedad1": valor1,
    "propiedad2": valor2,
    "propiedadN": valorN
};

*/

/*
* Notación de punto
*/

//Para acceder a una propiedad de un objeto se utiliza la notación de punto que consiste en:

// miObjeto.propiedad2;

//---------------------------------------------------------------------------------------------------------------

/*
* Notación de corchetes
*/

//Para acceder a una propiedad de un objeto, tambien se utiliza la notación de corchetes que consiste en:

// miObjeto["propiedad1"];

//La notación de corchetes se utiliza cuando el nombre de la propiedad tiene más de una palabra ya que si se utiliza la notación de punto, esto genera un error, y cuando se quiere usar esa propiedad paar / como una variable

//---------------------------------------------------------------------------------------------------------------

/*
* Acceder a propiedades: Variables
*/

var resultados = {
    1: "nora256",
    2: "gino577", 
    3: "estef543",
    4: "kiara566"
};

var posicion = 2;

console.log(resultados[posicion]);

/*
* Actualizar propiedades de objetos
*/

var mochila = {
    "color": "Azul",
    "tamaño": "mediana",
    "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color); //Azul

mochila.color = "Verde"; //Actualización

console.log(mochila.color); //Verde



console.log(mochila.contenido); //["botella de agua", "cuaderno"]

mochila.contenido.push("lápiz"); //Actualización

console.log(mochila.contenido); //["botella de agua", "cuaderno", "lápiz"]

//-----------------------------------------------------------------------------------------------

/*
* Agregar propiedades
*/

var curso = {
    "titulo": "Aprende JavaScript desde cero",
    "idioma": "español",
    "duracion": 30
};

curso.resolucion = 1080;
curso["vistas"] = 34502;

console.log(curso.vistas);
console.log(curso["resolucion"]);

//-----------------------------------------------------------------------------------------------

/*
* Eliminar propiedades
*/

delete curso.duracion;
console.log(curso);

//-----------------------------------------------------------------------------------------------

/*
* Objetos para busquedas
*/

//Cuando se tiene una estructura del tipo, identificador: valor, como en un objeto, se pueden transformar sentencias switch con un objeto conde el argumento se la propiedad del objeto y el resultado retornado sea el valor asignado a esa propiedad.

function buscarElementoQuimico(simbolo) {
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio",
    }

    return simbolosQuimicos[simbolo];
};

console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("Li"));

//-----------------------------------------------------------------------------------------------

/*
* Verificar Propiedades
*/

console.log(curso.hasOwnProperty("maestro")); //false

//Como función

function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tiene esta propiedad";
    }
}

console.log(verificarPropiedad(curso, "maestro"));

/*
* Objetos complejos
*/

//5:33:01