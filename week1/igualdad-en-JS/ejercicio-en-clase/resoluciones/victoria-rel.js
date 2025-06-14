// Ejercicio: Validar datos de una persona
// Quiero que creen una funcion llamada `validarDatos` que recibaa y valide lo siguiente:
// - 1. Si tiene nombre
// - 2. si tiene edad

// si tiene ambos (Nombre y edad) , entonces devuelve true
// Si le falta alguna de ellas, entonces deveulve false

/*
| Criteria / Test Case         | TC1           | TC2              | TC3               | TC4              | TC5           | TC6              |
|-----------------------------|----------------|-------------------|--------------------|-------------------|----------------|-------------------|
| nombre                      | "Ana"          | "Luis"            | null               | (no definido)     | "Ana"          | "Ana"             |
| edad                        | 25             | (no definido)     | 25                 | 30                | NaN            | "25" (string)     |
| ¿Valida? (validarDatos)     | ✅ true         | ❌ false           | ❌ false           | ❌ false           | ❌ false        | ❌ false           |
| Regla de negocio (BR)       | BR1: válido     | BR2: falta edad   | BR3: nombre inválido | BR4: falta nombre | BR5: edad inválida | BR6: edad debe ser número |
*/


function validarDatos(persona) {
  if (
    persona.nombre &&
    persona.edad &&
    persona.edad > 0 &&
    typeof persona.edad == "number"
  ) {
    return true;
  }
  return false;
}

const persona1 = { nombre: "Ana", edad: 25 };
const persona2 = { nombre: "Luis" };
const persona3 = { edad: 30 };
const persona4 = { nombre: null, edad: 25 };
const persona5 = {};
const persona6 = { nombre: "Ana", edad: NaN };

// otros casos
const persona7 = { nombre: "Ana", edad: "25" };

console.log(validarDatos(persona1)); // true
console.log(validarDatos(persona2)); // false
console.log(validarDatos(persona3)); // false
console.log(validarDatos(persona4)); // false
console.log(validarDatos(persona5)); // false
console.log(validarDatos(persona6)); // false

// otros casos
console.log(validarDatos(persona7)); // false
