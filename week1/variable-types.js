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

// no_se_puede_reasignar = "skdfjkhd";

// console.log("valor const 2: ", no_se_puede_reasignar);

console.log("---------------------------");
console.log("//        SYMBOL        //");
console.log("---------------------------");

const sym1 = Symbol();
const sym2 = Symbol("foo"); // direcion : abc1123
const sym3 = Symbol("foo"); // direcion : vcyta123

console.log("tipo sym2: ", typeof sym2);
console.log("tipo sym3: ", typeof sym3);

console.log("sym1: ", sym1);
console.log("sym2: ", sym2);
console.log("sym3: ", sym3);

console.log(sym2 === sym3); // compraracion de direcion de memoria
console.log(sym2 == sym3); // comparacion de valores

console.log("---------------------------");
console.log("//        number        //");
console.log("---------------------------");

let num1 = 123;
let num2 = 123;

console.log("Type de num1: ", typeof num1);
console.log("Type de num2: ", typeof num2);

console.log(num1 === num2); // compara valor y tipo
console.log(num1 == num2); // compara solo valor

console.log("---------------------------");
console.log("//        ejemplos        //");
console.log("---------------------------");

console.log("---------------------------");
console.log("ejemplo : number + string");
console.log("---------------------------");

let myAge = 27;
let myAge2 = "27";

console.log("Type de myAge: ", typeof myAge);
console.log("Type de myAge2: ", typeof myAge2);

console.log(myAge == myAge2);
console.log(myAge === myAge2);

console.log("---------------------------");
console.log("ejemplo : obj");
console.log("---------------------------");

let object = {};
let object2 = {};

console.log("Type de object: ", typeof object);
console.log("Type de object2: ", typeof object2);

console.log(object == object2);
console.log(object === object2); // si da false por que a pesar de que son del mismo tipo tienene un direcion de memoria distinta

console.log("---------------------------");
console.log("//      regla del =       //");
console.log("---------------------------");

// 155 = 144

let number = 100;
let suma = number + 500;

console.log("number valor : ", number);
console.log("number suma : ", suma);

let xyz = "abc"
let huy = xyz

console.log("number valor : ", xyz);
console.log("number suma : ", huy);

// las variables apuntan a valores