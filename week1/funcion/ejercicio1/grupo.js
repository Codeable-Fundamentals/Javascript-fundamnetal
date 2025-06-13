function puedeConducir(edad, tieneLicencia) {

    if (edad > 19 && tieneLicencia) {
        return "Puede conducir";
    } else {
        return "No puede conducir";
    }
    
}

console.log(puedeConducir(20, true));
console.log(puedeConducir(17, true));
console.log(puedeConducir(25, false)); 