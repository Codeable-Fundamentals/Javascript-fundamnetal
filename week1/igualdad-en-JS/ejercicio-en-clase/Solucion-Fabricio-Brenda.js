// Ejercicio: Validar datos de una persona
// Quiero que creen una funcion llamada `validarDatos` que reciba y valide lo siguiente:
// - 1. Si tiene nombre
// - 2. si tiene edad

// si tiene ambos (Nombre y edad) , entonces devuelve true
// Si le falta alguna de ellas, entonces deveulve false

function validarDatos(objeto) {
  //Solucion Larga
  // if (("nombre" in objeto && objeto.nombre !== null && objeto.nombre !== "") &&
  //  ("edad" in objeto && objeto.edad !== null && !(isNaN(objeto.edad)))) {
  //         return true
  // } else {
  //     return false
  // }

  // console.log("Tipo de la propiedad nombre: ",typeof objeto.nombre )
  //Solucion Optima
  return "nombre" in objeto &&
    objeto.nombre !== "" &&
    objeto.nombre !== null &&
    typeof objeto.nombre === "string" &&
    "edad" in objeto &&
    !isNaN(objeto.edad) &&
    objeto.edad !== null &&
    typeof objeto.edad === "number"
    ? true
    : false;
}

const persona1 = { nombre: "Ana", edad: 25 };
const persona2 = { nombre: "Luis" };
const persona3 = { edad: 30 };
const persona4 = { nombre: null, edad: 25 };
const persona5 = {};
const persona6 = { nombre: 25, edad: 25 };
const persona7 = { nombre: "GRECIA", edad: "34" };

// console.log(validarDatos(persona1)); // true
// console.log(validarDatos(persona2)); // false
// console.log(validarDatos(persona3)); // false
// console.log(validarDatos(persona4)); // false //true? (porque tendria el campo nombre, solo que tendria valor null)
// console.log(validarDatos(persona5)); // false+
// console.log("Ultimo caso de prueba: ",validarDatos(persona6)); // false
console.log("Ultimo caso de prueba: ", validarDatos(persona7)); // false
