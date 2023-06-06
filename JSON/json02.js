/* Objeto JavaScript */
let miobjeto01 = {
    minumero : 12,
    mistring : "Hola Mundo JavaScript",
    mibooleano : true,
}

/*Convertir en JSON el objeto de JavaScript */
const JsonObj = JSON.stringify(miobjeto01)

console.log(miobjeto01)
console.log(miobjeto01.minumero)
console.log(JsonObj)