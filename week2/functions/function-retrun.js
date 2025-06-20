function golpear(jugador1, jugador2) {
  console.log("El jugador 1 , golpea al jugador2!, y le quita 1 de vida");

  jugador2.vida = jugador2.vida - 1; // lo uncio que esta haciendo es disminuir la vida
  jugador1.exp = jugador1.exp + 1;

  return {
    jugador1,
    jugador2,
  };
}

let jugador1 = {
  exp: 0,
  vida: 1,
};

let jugador2 = {
  exp: 2,
  vida: 5,
};

const juego = golpear(jugador1, jugador2);

console.log("Respuesta: ", juego); // undefined

function obtenerFechaDeCaducidad() {} // camelCase
function obtener_fecha_de_caducidad() {} // snake_case
