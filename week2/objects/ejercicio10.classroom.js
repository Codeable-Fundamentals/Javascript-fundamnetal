let dipper = {
  direccion: {
    ciudad: { nombre: 'Gravity Falls' }
  }
};
 
let mabel = {
  direccion: dipper.direccion
};
 
dipper.direccion.ciudad = {
  nombre: 'Land of Ooo'
};
 
console.log(mabel.direccion.ciudad.nombre); // ???