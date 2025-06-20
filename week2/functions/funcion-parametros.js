function createCar(model, year, motor, owner, isNew, color) {
  return {
    model,
    year,
    motor,
    owner,
    isNew,
    color,
  };
}

let newCar = createCar(
  "kia cerato",
  2003,
  "4 fuerzas de caballo",
  "UTEC sac",
  true,
  "amarillo",
  "hdghsd",
  2,
  true,
  null
);

// Funcion

function crearPersona(
  age,
  papa,
  mama,
  sabeHablar = true,
  direcion = "Av. Tecnologia 123"
) {
  return {
    age,
    papa,
    mama,
    sabeHablar,
    direcion,
  };
}

const persona1 = crearPersona(28, "alex", "carmen");
const persona2 = crearPersona(50, "godfredo", "gloria", false, "Av. Larco 123" )

// console.log(persona1)
console.log(persona2)

