function puedeConducir(edad, tieneLicencia) {
  // Debe ser mayor de 18 años Y tener licencia
  // Retorna: "Puede conducir" o "No puede conducir"
  // Usa operadores lógicos (&&, ||)
  if (
    typeof edad !== "number" ||
    typeof tieneLicencia !== "boolean" ||
    edad < 0
  ) {
    return "Datos inválidos";
  } else if (edad >= 18 && tieneLicencia) {
    return "Puede conducir";
  } else {
    return "No puede conducir";
  }
}

// Pruebas:
console.log(puedeConducir("gggg", true)); // "Puede conducir"
console.log(puedeConducir(17, true)); // "No puede conducir"
console.log(puedeConducir(25, false)); // "No puede conducir"
