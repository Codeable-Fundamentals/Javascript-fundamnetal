// Crea un objeto "calculadora" con métodos para sumar, restar, multiplicar y dividir
// Cada método debe recibir dos números y retornar el resultado

const calculadora = {
  sumar: function (a, b) {
    return a + b;
  },
  restar: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    if (b === 0) {
      return "Error: No se puede dividir entre cero";
    }
    return a / b;
  },
};

console.log("SUMA: ", calculadora.sumar(3, 5)); // 8
console.log("SUMA: ", calculadora.restar(13, 23)); // -10
console.log("SUMA: ", calculadora.multiplicar(3, 5)); // 15
console.log("SUMA: ", calculadora.dividir(25, 5)); // 5
