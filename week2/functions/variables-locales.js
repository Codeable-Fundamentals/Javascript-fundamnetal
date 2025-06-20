function mostrarMensaje() {
  let mensaje = "Soy una variable local"; 
  console.log(mensaje);
}
 
mostrarMensaje(); // Soy una variable local
console.log(mensaje); // Error: mensaje no está definido