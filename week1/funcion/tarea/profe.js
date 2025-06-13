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
console.log(estudiante1);
console.log(actualizarPromedio(estudiante1, 85));