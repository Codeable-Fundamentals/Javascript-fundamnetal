function validarDatos( {nombre, edad} ) {
    if (typeof nombre === "string" && typeof edad === "number") {
        return true;
    }else{
        return false;
    }
    
}

const persona1 = { nombre: "Ana", edad: 25 };
const persona2 = { nombre: "Luis" };
const persona3 = { edad: 30 };
const persona4 = { nombre: null, edad: 25 };
const persona5 = { };

console.log(validarDatos(persona1)); // true
console.log(validarDatos(persona2)); // false
console.log(validarDatos(persona3)); // false
console.log(validarDatos(persona4)); // false
console.log(validarDatos(persona5)); 