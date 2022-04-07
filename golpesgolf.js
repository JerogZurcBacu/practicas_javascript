/*
En el juego de golf cada hoyo tiene un par qué representa el número promedio de golpes que se espera que haga un golfista para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de que están por encima o por debajo del par estén tus tiros.

Tu función tomara los argumentos par y golpes.

Retorna la cadena correcta según está tabla que muestra los golpes en orden de mayor a menor prioridad.

Golpes               Retornar
-------------------------------
1                  "Hole-in-one!"
<= par - 2         "Eagle"
par - 1            "Birdie"
par                "Par"
par + 1            "Bogey"
par + 2            "Double Bogey"
>= par + 3         "Go Home!"

Par y golpes siempre serán numéricos y positivos
*/

function golpesGolf (par, golpes) {
  if (golpes == 1) {
    console.log("Hole-in-one!")
  } else if (golpes <= (par - 1)) {
    console.log("Eagle")
  } else if (golpes = (par - 1)) {
    console.log("Birdie")
  } else if (golpes = par) {
    console.log("Par")
  } else if (golpes = (par + 1)) {
    console.log("Bogey")
  } else if (golpes = (par + 2)) {
    console.log("Double Bogey")
  } else if (golpes >= (par + 3)) {
    console.log("Go Home!")
  } else {
    console.log("Fuera de rango")
  }
};

golpesGolf(10, 11);
