// igualdada debil ==
const igualdad_debil = 0 == false; // solo compara valor
console.log("Igualdad debil", igualdad_debil); // TRUE

// iguladad fuerte
const igualdada_fuerte = 0 === false; //Valor y Tipo de dato
console.log("Igualdad fuerte", igualdada_fuerte); // FALSE

// Same-value equality determines whether two values are functionally identical in all contexts
const object_is = Object.is(0, false); // False
console.log("Igualdada usando Object.is: ", object_is);

let obj_1 = {};
let obj_2 = {};
console.log("Comparacion == con obj: ", obj_1 == obj_2);
console.log("Comparacion === con obj: ", obj_1 === obj_2);
console.log("Comparacion Object.is con obj: ", Object.is(obj_1, obj_2));

console.log("---------------------- ");

console.log("Comparacion == con obj: ", {} == {});
console.log("Comparacion === con obj: ", {} === {});
console.log("Comparacion Object.is con obj: ", Object.is({}, {}));


console.log("---------------------- ");
console.log("Comparacion == con number: ", 3 == 2+1); // true
console.log("Comparacion === con number: ", 3 === 2+1); // true
console.log("Comparacion Object.is con number: ", Object.is(3, 2+1)); // true

console.log("---------------------- ");
console.log("Comparacion == con string: ", "hola" == "hola"); // true
console.log("Comparacion === con string: ", "hola" === "hola"); // true
console.log("Comparacion Object.is con string: ", Object.is("hola", "hola")); // true

console.log("---------------------- ");
console.log("Comparacion == con array: ", [] == []); 
console.log("Comparacion === con array: ", [] === []); 
console.log("Comparacion Object.is con array: ", Object.is([], [])); 
console.log("-------Array 2--------------- ");
console.log("Comparacion == con array: ", [1, 2] == [1, 2]); // false
console.log("Comparacion === con array: ", [1, 2] === [1, 2]); // false
console.log("Comparacion Object.is con array: ", Object.is([1, 2], [1, 2])); // false


console.log("---------------------- ");
console.log("Comparacion == con +0 y -0: ", +0 == -0); // true
console.log("Comparacion === con +0 y -0: ", +0 === -0); // true
console.log("Comparacion Object.is con +0 y -0: ", Object.is(+0, -0)); // false


console.log("---------------------- ");
console.log("Comparacion == con NaN :", NaN == NaN); // false
console.log("Comparacion === con NaN: ", NaN === NaN); // false
console.log("Comparacion Object.is con NaN: ", Object.is(NaN, NaN)); // true