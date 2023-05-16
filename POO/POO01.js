/* esto es un tipo de dato 'objeto' de Javascript que 
tiene funciones incluidas
*/
var persona = {
    nombre: "Felipe",
    edad: 47,
    genero: false,
    mostrar: function() {
        console.log(this.nombre, this.edad, this.genero)
    },
    saludar: function() {
        console.log("Hola, me llamo "+ this.nombre)
    },
}

console.log(persona)
persona.mostrar()
persona.saludar()