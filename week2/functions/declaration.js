// // "function declaration"
// function miSegundaFuncion() {
//   return "Hola 2 !";
// }
// console.log("Segunda forma: ", miSegundaFuncion());

// // function expression
// let miPrimerFuncion = function () {
//   return "Hola desde aqui!";
// };

// console.log("Primera forma SIN EJECUTAR: ", miPrimerFuncion);
// console.log("Primera forma EJECUTANDOLA: ", miPrimerFuncion());

// let test = "hola soy test!";
// console.log("test : ", test); // "hola soy test!"
// // console.log("test 2: ", test()) // TypeError: test is not a function

// // function expression y es anonima
// let miTercerafucion = () => "Hola SOY ANONIMA!!!!!";

// console.log("Tercera forma: ", miTercerafucion);
// console.log("Tercera forma: ", miTercerafucion());

// Function que no retornan nada
// const funcionQueNoRetornaNada = function () {
//   console.log("holaaaaaaaaaa desde adentro!!!!");
// };

// function funcionQueNoRetornaNada() {
//   console.log("holaaaaaaaaaa desde adentro!!!!");
// }
// console.log("Holaaaa desde afuera");

// asi se llama a una funcion
//funcionQueNoRetornaNada();

//let apellido= "MUÑOZ";

function Grecia() {
  var apellido = "Delagdo";
  let age = 28;
  const dni = "11111111";

  return {
    lastname: apellido,
    age: age,
    dni: dni,
    isPeruvian: true,
  };
}

let result = Grecia();

console.log(result);

console.log(apellido)
