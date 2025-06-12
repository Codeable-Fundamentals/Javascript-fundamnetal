let verdadero = true;
let falso = false;

// El operador logico AND en JS , es representado por "||"


console.log(verdadero || verdadero); // true
console.log(verdadero || falso); // true
console.log(falso || verdadero); // true
console.log(falso || falso); // false

// basta con que UNO sea VERDADERO , para que TODO sea VERDADERO