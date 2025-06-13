let carro = {}; // objeto vacio , MANERA LITERAL
let persona = new Object();// MANERA CONSTRUCTORA

persona.name = "Grecia"
persona.lastname = "Delgado"
persona.family = ["papa", "mama", "hermana"]
persona.comida = "aji de gallina"

console.log("Persona: ", persona)

let automovil = {
  marca: "Audi",
  año: 1996,
  dueños: ["carlos", "maria", "jose"],
  motor: {
    potencia: "12 caballos",
    numeroDeBujias: 4,
    bateria: {
      marca: "duracel",
      año: 1994,
    },
  },
};
console.log("Año del auto : ", automovil["año"])
console.log("AQUI PRUEBA : ", automovil.motor.bateria.marca)


console.log("Tipo de datos de carro: ", typeof automovil)
let listaDeDeños = automovil.dueños


console.log("Lista de dueños 1: ", automovil.dueños)
automovil.dueños = ["karla"],
console.log("Lista de dueños 2: ", automovil.dueños)


let cumpleaños = new Date();

console.log("Tipo de datos de cumpelaños: ", typeof cumpleaños);

let a = cumpleaños.getDay()
console.log("que contiene a ??", a)
