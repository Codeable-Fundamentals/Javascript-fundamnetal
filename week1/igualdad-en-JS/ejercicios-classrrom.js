let enanos = 7;
let continentes = '7';
let maravillas = 3 + 4;

console.log(Object.is(enanos, continentes)); // false
console.log(Object.is(continentes, maravillas)); // false
console.log(Object.is(maravillas, enanos)); // true

console.log('------------------------')
console.log('------------CASO FRUTOS------------')

let manzana = {};
let pera = manzana;
let naranja = pera;
pera = {};

console.log(Object.is(manzana, pera)); // false
console.log(Object.is(pera, naranja)); // false
console.log(Object.is(naranja, manzana)); // true

console.log('------------CASO FRUTOS con triple === ------------')
console.log(manzana === pera)
console.log(pera === naranja)
console.log(naranja === manzana)


console.log(' ---------NaN como excepción a la regla de igualdad ---------')

console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

console.log(' ---------Mejor practica para saber si un numero es NaN ---------')
let suma = NaN;
Number.isNaN(suma); // true