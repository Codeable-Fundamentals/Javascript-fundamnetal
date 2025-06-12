function ejemploVar() {
  if (true) {
    var mensaje = "Hola desde var";
  }
  console.log(mensaje); // ✅ Funciona, imprime: Hola desde var
}
ejemploVar();

console.log('------------------')
console.log('//-----EJEMPLO LET--//')
console.log('------------------')

function ejemploLet() {
  if (true) {
    let mensaje = "Hola desde let";
  }
  //console.log(mensaje); // ❌ Error: mensaje is not defined
}
ejemploLet();

console.log('------------------')
console.log('//-----EJEMPLO de redeclaracion--//')
console.log('------------------')

var nombre = "Ana";
var nombre = "Carlos";
console.log(nombre); // Carlos


let nombre2 = "Ana";
// let nombre2 = "Carlos"; // ❌ Error: Identifier 'nombre' has already been declared


console.log('------------------')
console.log('//-----EJEMPLO HOISTING--//')
console.log('------------------')


console.log(numero);
var numero = 5; // Se eleva y se inicializa el valor , por eso no tiera ERROR

//console.log(numero2); // ❌ Error: Cannot access 'numero' before initialization
//let numero2 = 5;


// VAR , tiene un contexto(ambito) global o de funcion.
// Cada ves que decalaros una variable con VAR , pesta siempre se iniciliza con "UNDEFINED"

// LET , solo tiene un conetxto(ambito) de bloque.
// Cada vez que declaramos una variable con LET , esta NO se inicializa, por lo que si la usas antes de ser definidida, tirara un error.