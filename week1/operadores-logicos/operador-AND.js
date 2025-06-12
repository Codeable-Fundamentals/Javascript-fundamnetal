let verdadero = true;
let falso = false;

// El operador logico AND en JS , es representado por "&&"

console.log(verdadero && verdadero); // true
console.log(verdadero && falso); // false
console.log(falso && verdadero); // false
console.log(falso && falso); // false

// en resumen: Basta con eu haya UN SOLO FALSE, para que todo sea FALSO.
