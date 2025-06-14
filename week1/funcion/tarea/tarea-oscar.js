function crearEstudiante(nombre, edad, carrera, promedio) {
        let Estudiante ={
        nombre : nombre,
        edad : edad,
        carrera : carrera,
        promedio : promedio,
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

let estudiante1 = crearEstudiante("Carlos", 20, "Ingeniería", 0);
console.log("\n",
    "nombre " + estudiante1.nombre + "\n",
    "edad " + estudiante1.edad + "\n",
    "carrera " + estudiante1.carrera + "\n",
    "promedio " + estudiante1.promedio + "\n",
);

console.log("------------SEGUNDA PRUEBA------------")

console.log(actualizarPromedio(estudiante1, 85));
console.log("\n",
    "nombre " + estudiante1.nombre + "\n",
    "edad " + estudiante1.edad + "\n",
    "carrera " + estudiante1.carrera + "\n",
    "promedio " + estudiante1.promedio + "\n",
);







// console.log("------------PRIMERA PRUEBA------------")
// console.log("\n")

// let estudiante1 = crearEstudiante("Carlos", 20, "Ingeniería", 0);
// console.log("nombre " + estudiante1.nombre);
// console.log("edad " + estudiante1.edad);
// console.log("carrera " + estudiante1.carrera);
// console.log("promedio " + estudiante1.promedio);

// console.log("------------SEGUNDA PRUEBA------------")

// console.log(actualizarPromedio(estudiante1, 85));

// console.log("nombre " + estudiante1.nombre);
// console.log("edad " + estudiante1.edad);
// console.log("carrera " + estudiante1.carrera);
// console.log("promedio " + estudiante1.promedio);