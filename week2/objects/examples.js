let persona = {
  nombre: "Estuardo",
  nombre: "GRECIA",
  nombre: "Victoria",
  nombre: ()=>{},
  edad: 20,
  edad: 25,
}

console.log(persona)

let persona2 = {
  nombre: "Pepe",
  age: 23,
  isFromMexico: true, 
  salario: 12500.99, 
}

console.log(persona2)
console.log("-------------Como accedemos a las propiedadesde un objeto en js--------")
console.log("Usando punto: ",persona2.nombre) // te devuelve el valor 
console.log("Usando []: ", persona2["age"]) // te devuelve el valor

console.log("-------------Como verificar que una llave existe en un objeto en JS--------")
console.log("Siendo explicitos: ", "isFromMexico" in persona2) // solo verifica que existe la llave en el objeto
