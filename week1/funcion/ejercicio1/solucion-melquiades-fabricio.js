function puedeConducir(edad, tieneLicencia) {
  // Debe ser mayor de 18 años Y tener licencia
  // Retorna: "Puede conducir" o "No puede conducir"
  // Usa operadores lógicos (&&, ||)

  // SOLUCIÓN 1
  // edad >= 18 && tieneLicencia
  //   ? console.log("Puede conducir")
  //   : console.log(" No puede conducir");

  // SOLUCIÓN 2 - ÓPTIMA
  return edad >= 18 && tieneLicencia ? "Puede conducir" : "No puede conducir";

  // SOLUCIÓN 3
  // let respuesta;
  // if (edad >= 18 && tieneLicencia) {
  //   respuesta = "Puede Conducir";
  // } else {
  //   respuesta = "No puede conducir";
  // }
  // return respuesta;
}

// Pruebas:
console.log(puedeConducir(18, false)); // "Puede conducir"
console.log(puedeConducir("Dieciocho", "false")); // "Puede conducir"
console.log(puedeConducir(20, true)); // "Puede conducir"
console.log(puedeConducir(17, true)); // "No puede conducir"
console.log(puedeConducir(25, false)); // "No puede conducir"
