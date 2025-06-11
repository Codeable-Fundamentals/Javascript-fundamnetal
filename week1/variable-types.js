let texto = "Hola mundo"; // String -> cadena de caracteres
let numero = 123; // Number
let numeroGrande = 12345678901234567890n; // BigInt (se condiera un big int si es mayor a 9007199254740991)
let booleano = true; // Boolean (verdaderos o falsos)
let indefinido; // Undefined
let simbolo = Symbol("mi símbolo"); // Symbol
let nulo = null; // Null

let age = null;
console.log(typeof age);
console.log("Age: ", age);

let name;
console.log(typeof name);
console.log("Name : ", name);

let variable_inexistente;
console.log("variable que no existe: ", variable_inexistente);

console.log("---------------------------");
console.log("// DIFF ENTRE CONST Y LET //");
console.log("---------------------------");

let si_se_deja_reasignar_valor = "grecia";

console.log("valor 1 : ", si_se_deja_reasignar_valor);

si_se_deja_reasignar_valor = "pedro";

console.log("valor 2 : ", si_se_deja_reasignar_valor);

si_se_deja_reasignar_valor = 1234;

console.log("valor 3 : ", si_se_deja_reasignar_valor);

const no_se_puede_reasignar = "HOLA!";

console.log("valor const 1: ", no_se_puede_reasignar);

no_se_puede_reasignar = "skdfjkhd";

console.log("valor const 2: ", no_se_puede_reasignar);
