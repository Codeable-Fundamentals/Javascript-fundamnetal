function saludar() {
  console.log("¡Hola, mundo!");
}

saludar = "Otro valor";
console.log(saludar); // "Otro valor"

function despedirse() {
  console.log("chau!");
}
console.log(typeof despedirse);

despedirse = "chau chicos!"; //string
console.log(typeof despedirse);

despedirse = true;
console.log(typeof despedirse)
