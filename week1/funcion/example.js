let hola = function () {
  console.log("soy un console!")
  
  return {};
};// esta funcion , NO tiene un nombre 
//función anónima
//console.log("1. ",hola)
console.log("2. ", hola())

// (function() {
//   console.log("hola");
// })();


function saludar(){
  console.log("Hola, soy una función con nombre");
  return "Hola, soy una función con nombre";
} //esta funcion SI tiene un nombre

console.log("3. ", saludar())


// Una función es un "valor" que almacena un bloque de código entre sus llaves.