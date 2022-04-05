// Operador de igualdad  ==
console.log(6 == 6); //true
console.log(6 == 5); //false
console.log("Hola" == "hola"); //false
console.log([1,2,3] == [1,2,3]); //false
console.log(9 == "9"); //true

//Operador de igualdad estricta
console.log(9 === "9"); //false
console.log(9 === 9); //true

//Operador de desigualdad
console.log(9 != 6); //true
console.log(9 != '9'); //false

//Operador de desigualdad estricta
console.log(1 !== "1"); //true

//Operador mayor que
console.log(5 > 2); //true
console.log(3 > 8); //false
console.log(1 > 1); //false
console.log("mundo" > "hola"); //true
console.log("ABC" > "ACB"); //false

//Operador mayor o igual que
console.log(5 >= 2); //true
console.log(3 >= 8); //false
console.log(1 >= 1); //true
console.log("mundo" >= "hola"); //true
console.log("ABC" >= "ACB"); //false

//Operador menor que
console.log(5 < 2); //false
console.log(3 < 8); //true
console.log(1 < 1); //false
console.log("mundo" < "hola"); //false
console.log("ABC" < "ACB"); //true

//Operador menor o igual que
console.log(5 <= 2); //false
console.log(3 <= 8); //true
console.log(1 <= 1); //true
console.log("mundo" <= "hola"); //false
console.log("ABC" <= "ACB"); //false

//Operador logico 'and' && - solo si ambos elementos son verdaderos el resultado será verdadero

console.log(true && true); //true
console.log(true && false); //false

 //Operador lógico 'or' || - basta con que uno de los elementos sean verdaderos para que el resultado sea verdadero
 
 console.log(true || true); //true
 console.log(true || false); //true
 console.log(false || false); //false
 
 //Operador lógico 'not' ! - convierte el resultado booleano en el contrario si es true lo convierte a false y viceversa
 
 console.log(!true); //false
 console.log(!false); //true
 
  
