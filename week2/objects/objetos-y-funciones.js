const persona = {
  name: (nombre) => {
    return `hola ! ${nombre}`;
  },
  calcSalario: (horasTrabajadas, costoPorHora) => {
    return horasTrabajadas * costoPorHora;
  },
};

console.log("Persona: ", persona.name("Melquiades"));

console.log("Calculando salario", persona.calcSalario(8, 25));

