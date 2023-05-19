//clase persona donde todos sus atributos son privados
class Persona{
    _Nombre = "Adonay"
    _Edad = 32
    _Genero = false
}
console.log("----Persona----")
// creación de una instancia de la clase Persona
var Per01 = new Persona()  
// leer los atributos de la instancia
console.log(Per01._Nombre, Per01._Edad, Per01._Genero)
// escribir sobre los atributos de la instancia
Per01._Nombre = "Andy"
Per01._Edad = 33
console.log(Per01._Nombre, Per01._Edad, Per01._Genero)