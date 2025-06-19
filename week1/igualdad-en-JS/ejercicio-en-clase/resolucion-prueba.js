// Ejercicio: Validar datos de una persona
// Quiero que creen una funcion llamada `validarDatos` que recibaa y valide lo siguiente:
// - 1. Si tiene nombre
// - 2. si tiene edad

// si tiene ambos (Nombre y edad) , entonces devuelve true
// Si le falta alguna de ellas, entonces deveulve false

function validarDatos(person) {
  const tieneNombreValido =
    typeof person.nombre === "string" && person.nombre.trim() !== "";
  const tieneEdadValida =
    typeof person.edad === "number" && !isNaN(person.edad);

  return tieneNombreValido && tieneEdadValida;
}

// Validaciones que teniamos que aplicar en el ejercicio:
// 1. Existiera esa propiedad en el Objeto (nombre y edad)
// 2. Comprobar su tipo (string para nombre y number para edad)
// 3. Verificar que fuera un String Valido (es decir que no sea null , ni esta vacio)
// 4. Verificar que fuera un Number Valido (es decir que no fuer ni NaN , ni fuera null)

const persona1 = { nombre: "Ana", edad: 25 };
const persona2 = { nombre: "Luis" };
const persona3 = { edad: 30 };
const persona4 = { nombre: null, edad: 25 };
const persona5 = {};
const persona6 = { nombre: "Ana", edad: NaN };
const persona7 = { nombre: 23, edad: 23 };

console.log("Solucion de la profesora : ");
console.log(validarDatos(persona1)); // true
console.log(validarDatos(persona2)); // false
console.log(validarDatos(persona3)); // false
console.log(validarDatos(persona4)); // false
console.log(validarDatos(persona5)); // false
console.log(validarDatos(persona6)); // false
console.log("Caso nuevo: ",validarDatos(persona7))
