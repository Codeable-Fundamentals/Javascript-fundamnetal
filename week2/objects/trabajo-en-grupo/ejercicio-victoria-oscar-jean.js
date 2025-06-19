// Crea un objeto "calculadora" con métodos para sumar, restar, multiplicar y dividir
// Cada método debe recibir dos números y retornar el resultado

// const calculadora = {}

const calculadora = {
    sumar (a, b) {
        return a + b;
    },
    restar (a, b) {
        return a - b;
    },
    multiplicar(a, b) {
        return a * b;
    },
    dividir(a, b) {
        return a / b;
    }
};

/*
const calculadora = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => b === 0 ? "No se puede dividir entre 0" : a / b
};
*/


console.log("SUMA: ", calculadora.sumar(3, 5)); // 8
console.log("RESTA: ", calculadora.restar(13, 23)); // -10
console.log("MULTIPLICACION: ", calculadora.multiplicar(3, 5)); // 15
console.log("DIVISION: ", calculadora.dividir(25, 5)); // 5

/*



*/