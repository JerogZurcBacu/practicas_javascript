// Números aleatorios del 0 al 1

var numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//Números aleatorios enteros

var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);
console.log(numeroAleatorioEntre0y19);

function generarEnteroAleatorio(limiteSuperior) {
    return Math.floor(Math.random() * limiteSuperior);
}

for (var i = 0; i < 15; i++) {
    console.log(generarEnteroAleatorio(5));
}

//Números enteros aleatorios en un rango

function rangoAleatorio(limiteInferior, limiteSuperior2) {
    return Math.floor(Math.random() * (limiteSuperior2 - limiteInferior + 1)) + limiteInferior;
}

for (var i = 0; i < 15; i++) {
    console.log(rangoAleatorio(3,8));
}
