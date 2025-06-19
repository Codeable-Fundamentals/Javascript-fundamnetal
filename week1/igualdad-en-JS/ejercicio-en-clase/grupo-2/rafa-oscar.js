function validarDatos({ nombre, edad }) {
  if (typeof nombre === "string" && nombre.trim() !== "" && typeof edad === "number") {
    return true;
  } else {
    return false;
  }
}

const persona1 = { nombre: "Ana", edad: 25 };
const persona2 = { nombre: "Luis" };
const persona3 = { edad: 30 };
const persona4 = { nombre: null, edad: 25 };
const persona5 = {};
const persona6 = { nombre: "", edad: 23 };
const persona7 = { nombre: "         ", edad: 23 };

console.log(validarDatos(persona1)); // true
console.log(validarDatos(persona2)); // false
console.log(validarDatos(persona3)); // false
console.log(validarDatos(persona4)); // false
console.log(validarDatos(persona5)); // false
console.log(validarDatos(persona6)) // false
console.log(validarDatos(persona7)) // false


// las tres cosas que siempre debemos validar
// sobre todo si estamos trabajando solo con JS puro
// Validar el tipo de dato
// validar el valor (no null y no undefined y no vavcio o no NaN , dependiendo del caso)