function crearEstudiante(nombre, edad, carrera) {
        let Estudiante ={
        nombre : nombre,
        edad : edad,
        carrera : carrera,
    }
    return Estudiante
}
function actualizarPromedio(estudiante, nuevaCalificacion) {
    
    let calificion = {
        promedio : nuevaCalificacion,
    }
    estudiante.promedio = nuevaCalificacion;
    return calificion , "Promedio actualizado";
}
console.log("------------PRIMERA PRUEBA------------")
let estudiante1 = crearEstudiante("Carlos", 20, "Ingeniería");
console.log(estudiante1);

console.log("------------SEGUNDA PRUEBA------------")

console.log(actualizarPromedio(estudiante1, 85));
console.log(estudiante1);