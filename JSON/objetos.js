//declarar variables de tipo objeto
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
console.log(Object.values(object1));

//declarar variables de tipo objeto
let miobjeto02 = {
    minumero : 12,
    mistring : "Hola Mundo JavaScript",
    mibooleano : true,
    mostrar : function mostrar(){
        console.log(this.minumero)
    }
}
console.log(miobjeto02)
console.log(miobjeto02.minumero)
miobjeto02.mostrar()