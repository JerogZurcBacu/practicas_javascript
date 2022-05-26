//La sentencia switch se utiliza como una alternativa al uso de demasiados else if, cuando la función evalúa varios "casos".

/*

function ejemploSwitch (valor) {
  var resultado;
  switch (valor) {
    case 1: 
      resultado = 'uno';
      break;
    case 2:
      resultado = 'dos';
      break;
    case n:
      resultado = 'ene';
      break;
  }
  return resultado
}

*/

function ejemploSwitch(valor) {
  var resultado;
  switch (valor) {
    case 1:
      resultado = 'uno';
      break;
    case 2:
      resultado = 'dos';
      break;
    case 3:
      resultado = 'tres';
      break;
    // Multiples casos
    case 4:
    case 5:
      resultado = 'cuatro o cinco';
      break;
    // Opción predeterminada
    default:
      resultado = 'cero';
      break;
  }
  return resultado
}

