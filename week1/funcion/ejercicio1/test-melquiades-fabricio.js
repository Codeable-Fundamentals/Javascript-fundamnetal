function puedeConducir(edad, tieneLicencia) {
  // Debe ser mayor de 18 años Y tener licencia
  // Retorna: "Puede conducir" o "No puede conducir"
  // Usa operadores lógicos (&&, ||)

return edad>=18 && tieneLicencia ? "Puede conducir" : "No puede conducir";
}

// Pruebas:
console.log(puedeConducir(18, true)); // "Datos inválidos"
console.log(puedeConducir(170, true)); // "Datos inválidos"
console.log(puedeConducir(25, false)); // "No puede conducir"
