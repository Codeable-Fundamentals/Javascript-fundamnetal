// Ejercicio: Validar datos de una persona
// Quiero que creen una funcion llamada `validarDatos` que recibaa y valide lo siguiente:
// - 1. Si tiene nombre
// - 2. si tiene edad 

// si tiene ambos (Nombre y edad) , entonces devuelve true
// Si le falta alguna de ellas, entonces deveulve false




const persona1 = { nombre: "Ana", edad: 25 };
const persona2 = { nombre: "Luis" };
const persona3 = { edad: 30 };
const persona4 = { nombre: null, edad: 25 };
const persona5 = { };
const persona6 = { nombre: "Ana", edad: NaN };

console.log(validarDatos(persona1)); // true
console.log(validarDatos(persona2)); // false
console.log(validarDatos(persona3)); // false
console.log(validarDatos(persona4)); // false
console.log(validarDatos(persona5)); // false
console.log(validarDatos(persona6)); // false