// TAREA: Creador de Estudiantes
function crearEstudiante(nombre, edad, carrera) {
    // Retorna un objeto estudiante con:
    // - Las propiedades recibidas
    // - Una propiedad 'activo' que siempre sea true
    // - Una propiedad 'promedio' que inicie en 0
    return {
        name: nombre,   // Propiedad nombre             
        age: edad,      // Propiedad edad
        carrera: carrera, // Propiedad carrera
        activo: true,     // Propiedad activo
        promedio: 0       // Propiedad promedio
    };
}

function actualizarPromedio(estudiante, nuevaCalificacion) {
    // Actualiza el promedio del estudiante
    // (Para simplificar, solo reemplaza el promedio anterior)
    if (typeof nuevaCalificacion !== 'number' || nuevaCalificacion < 0 || nuevaCalificacion > 100) {
        return "Calificación inválida. Debe ser un número entre 0 y 100.";
    }
    
    estudiante.promedio = nuevaCalificacion;
    return "Promedio actualizado";
}

// Prueba:
let estudiante1 = crearEstudiante("Victoria", 23, "Ingeniería");
console.log(estudiante1); // aqui empezara con la propiedad promedio en 0
// {
//   name: "Victoria", 
//   age: 20, 
//   carrera: "Ingeniería", 
//   promedio: 0
// }

console.log(actualizarPromedio(estudiante1, 25));
console.log(estudiante1); // aqui la propiedad promedio sera 25
// {
//   name: "Victoria", 
//   age: 25, 
//   carrera: "Ingeniería", 
//   promedio: 25
// }
