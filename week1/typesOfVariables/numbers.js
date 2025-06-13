console.log(0.1 + 0.2) // 0.3


console.log("--------------------")
console.log("// VALUE OF MAX SAFE INTEGER //")
console.log("--------------------")
console.log(Number.MAX_SAFE_INTEGER);

console.log("ejemplos:")

console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992 (funciona)
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (error)
console.log(Number.MAX_SAFE_INTEGER + 3); // 9007199254740994 (funciona)
console.log(Number.MAX_SAFE_INTEGER + 4); // 9007199254740996 (funciona)
console.log(Number.MAX_SAFE_INTEGER + 5); // 9007199254740996 (error)

let a = 1 / 0; // Infinity
let b = 0 / 0; // NaN (Not A Number) // VALOR NUMERO NO VALIDO
let c = -a; // -Infinity
let d = 1 / c; // -0



console.log(a, " | ", b , " | ", c , " | ", d);


let example= Math.sqrt(-49)
console.log(example) // NaN



console.log("precision con muchos decimales: ", 0.1555000000000000 + 0.00000000001)