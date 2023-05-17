//clase persona donde todos sus atributos son publicos
class Persona{
    Nombre = "Adonay"
    Edad = 32
    Genero
}
console.log("----Persona----")
// creación de una instancia de la clase Persona
var Per01 = new Persona()  
// leer los atributos de la instancia
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
// escribir sobre los atributos de la instancia
Per01.Nombre = "Andy"
Per01.Edad = 33
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)