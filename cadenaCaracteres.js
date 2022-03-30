//"Esto es una cadena de caracteres"

var cadenaCaracteres = "Esto es una cadena de caracteres, puede tener toda clase de letras, num3802, $!mbo/0s, icluso 'otro tipos de comillas'   ";

/*
Secuencias de escape

Código | Resultado
------------------

\' | Comilla simpe
\" | Comilla doble
\\ | Barra invertida
\n | Línea nueva
\r | Retorno de carro
\t | Tabulación
\b | Retroceso
\f | Salto de página
...
*/

//ejemplo

console.log("Esto es un \r retorno de carro")

// Concatenación de cadenas

var sumaCadena = "Esto esta" + " " + "concatenado";
console.log(sumaCadena)

var concatenado = "concatenado";
var sumaCadenaVariable = "Esto también esta" + " " + concatenado;
console.log(sumaCadenaVariable)

var mensajeInicio = "Y también esto esta"
var sumaVariableVariable = mensajeInicio + " " + concatenado;
console.log(sumaVariableVariable)

//logitud de la cadena

var unaCadena = "Aquí hay 18 letras"
console.log(unaCadena.length)

//Acceder a un caracter de una cadena

console.log(unaCadena[0])

//Inmutabilidad de las cadenas
//Una ves asignada una cadena a una variable, no se puede cambiar un valor (caracter) de una cadena, solo se podria reasignar completamente el valor de la variable.

//Último caracter de una cadena -1
console.log(unaCadena[unaCadena.length - 1])

//Notación de corchetes: de derecha a izquierda
//Cualquier numero negativo dentro de los corchetes se mueve de derecha a izquierda
