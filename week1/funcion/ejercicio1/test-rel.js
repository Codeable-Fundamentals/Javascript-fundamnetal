function puedeConducir(edad, tieneLicencia) {
  if (edad >= 18 && tieneLicencia) {
    return "Puede conducir";
  } else {
    return "No puede conducir";
  }
}

// Pruebas:
console.log(puedeConducir(20, true)); // "Puede conducir"
console.log(puedeConducir(17, true)); // "No puede conducir"
console.log(puedeConducir(25, false)); // "No puede conducir"
