// Crea un objeto "calculadora" con métodos para sumar, restar, multiplicar y dividir
// Cada método debe recibir dos números y retornar el resultado

// const calculadora = {}

let calculadora = {
    sumar: (a, b)=>{
        return a + b;
    },
    restar: (a, b)=>{
        return a - b;
    },
    multiplicar: (a, b)=>{
        return a * b;
    },
    dividir: (a, b)=>{
        return a / b;
    },
}

console.log("SUMA: ", calculadora.sumar(3, 5)); // 8
console.log("SUMA: ", calculadora.restar(13, 23)); // -10
console.log("SUMA: ", calculadora.multiplicar(3, 5)); // 15
console.log("SUMA: ", calculadora.dividir(25, 5)); // 5
