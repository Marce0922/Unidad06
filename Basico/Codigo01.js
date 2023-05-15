console.log('Hola Mundo')

//manejo de variables
var varhola = 'texto1'
let var01 = 'texto2'
var varhola = 'texto3'

//mutabilidad
var varhola = 'Hola Mundo'
var01 = 'JavaScript'

console.log(varhola + var01) //Aqui uso el operador + como concatenar

//Declaración de constantes
const PI = 3.1416
console.log(PI)

//Declarar variables de tipo númerico
let minumero1 = 10
let minumero2 = -12
let minumero3 = 1.234
console.log(minumero1, minumero2, minumero3)

//Declarar variables de tipo Booleano
let mibooleano01 = true
let mibooleano02 = false
console.log(mibooleano01, mibooleano02)

//Declarar variables nulas y undefined
let mivarnula = null
let mivarundefined
console.log(mivarnula, mivarundefined)
mivarundefined = 7
console.log(mivarnula, mivarundefined)

//Declarar variables de tipo objeto
let miobjeto01 = {
    minumero : 12,
    mistring : "Hola Mundo JavaScript",
    mibooleano : true,
}
console.log(miobjeto01)
console.log(miobjeto01.minumero)
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.values(object1)); // esto requiere que la declaración sea constante

// Declarar arreglos
const arrayvacio = [] //esto es especial
const array01 = [13, 'Hola Mundo', true, 12.3]
console.log(arrayvacio, array01)
arrayvacio.push(10)
arrayvacio.push('Hola Chicos')
arrayvacio.push(false)
console.log(arrayvacio, array01)
let milista01 = [10, 7, 21, 35, 2]  //lista, porque todos los elementos son del mismo tipo

/* cuando por ejemplo tengo una variable A = 3 y B = A, 
lo que hago es guardar la referencia de A en B o almaceno el valor de 3? */

var A = 3
var B = A
console.log(A, B)
A = 10
console.log(A, B) 