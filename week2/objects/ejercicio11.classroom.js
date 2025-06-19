// const carla = {
//   madre: { edad: 20 },
//   hija: madre,
// };

// Esta es la buena
let persona = { edad: 20 };

let carla = { madre: persona, hija: persona };

// const madre = { edad: 20 };

// const carla = { hija: { edad: madre.edad } };

console.log(carla.madre.edad); // 20
console.log(carla.hija.edad); // 20

carla.madre.edad = 21;

console.log(carla.madre.edad); // 21
console.log(carla.hija.edad); // 21
