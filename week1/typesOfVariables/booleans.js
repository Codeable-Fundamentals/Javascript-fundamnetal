let solEsCaliente = true;
let tierraEsPlana = false;
 
console.log(typeof solEsCaliente); // "boolean"
console.log(typeof tierraEsPlana); // "boolean"

// operadores boleanos

console.log("Viendo valores verderos o falsos, en JS")

Boolean(1000); // true
Boolean("Hola"); // true


Boolean(null); // false
Boolean(false); // false
Boolean(undefined); // false
Boolean(null); // false
Boolean(""); // false
Boolean(0); // false
Boolean(NaN); // false

console.log(null || "Hola");
//          false || true => true;


console.log(!null && "Hola brenda!");
//          true && true  => true;


