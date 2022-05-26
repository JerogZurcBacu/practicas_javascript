/* Descripción

En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del número relativo de cartas altas y bajas que quedan en la baraja.

Esto se llama "conteo de cartas".

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.

- Cuando el conteo es positivo, el jugador debera apostar alto.
- Cuando el conteo es 0 o negativo, el jugador debara apostar bajo.

Cambio del conteo                   Cartas
----------------------------------------------
    +1                          2, 3, 4, 5, 6
    0                              7, 8, 9
    -1                      10, 'J', 'Q', 'K'. 'A'

Nuestra meta es definir una funcion para contar cartas.

La funcion debe tomar un parámetro carta que puede ser un número o una cadena de caracteres y luego aumentar o reducir el valor de la variable global conteo de acuerdo al valor de la carta (tabla).

La función debe retornar una cadena de caracteres con el conteo actual y la cadena:

 - "Apostar" si el conteo es positivo.
  - "Esperar" si el conteno es 0 o negativo.

  El conteo actual y la decisión del jugador ("Apostar" o "Esperar") deben estar separados por un espacio.

*/

var conteo = 0;

function conteoCartas (carta) {
    var decision;

    switch (carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
            break;
    }
    if (conteo > 0) {
        decision = "Apostar"
    } else {
        decision = "Esperar"
    }

    return conteo + " " + decision;
}

console.log(conteoCartas(2));
console.log(conteoCartas("K"));
console.log(conteoCartas(7));
console.log(conteoCartas(4));
console.log(conteoCartas(6));
