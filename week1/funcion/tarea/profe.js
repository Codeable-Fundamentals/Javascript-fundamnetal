// TAREA: Creador de Estudiantes
function crearEstudiante(nombre, edad, carrera) {
    // Retorna un objeto estudiante con:
    // - Las propiedades recibidas
    // - Una propiedad 'activo' que siempre sea true
    // - Una propiedad 'promedio' que inicie en 0
}

function actualizarPromedio(estudiante, nuevaCalificacion) {
    // Actualiza el promedio del estudiante
    // (Para simplificar, solo reemplaza el promedio anterior)
    estudiante.promedio = nuevaCalificacion;
    return "Promedio actualizado";
}

// Prueba:
let estudiante1 = crearEstudiante("Carlos", 20, "Ingeniería");
console.log(estudiante1); // aqui empezara con la propiedad promedio en 0
// {
//   name: "Carlos", 
//   age: 20, 
//   carrera: "Ingeniería", 
//   promedio: 0
// }

console.log(actualizarPromedio(estudiante1, 85));
console.log(estudiante1); // aqui la propiedad pormedio sera 85
// {
//   name: "Carlos", 
//   age: 20, 
//   carrera: "Ingeniería", 
//   promedio: 85
// }
