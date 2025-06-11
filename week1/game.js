let a = "Gonzalo";
let b = "Maria";
let c = "Juan";
a = b;
b = c;
b = "Gonzalo";
a = "Juan";
c = b;

// console.log("Valor de a :", a) // Juan
// console.log("Valor de b :", b) // Gonzalo
// console.log("Valor de c :", c) // Gonzalo



let x = 100;
x = x + 50;
let y = x + 200;
y = y + x;
x = x - y;

console.log(x) // -350
console.log(y) // 500