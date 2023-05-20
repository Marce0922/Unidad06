//metodos Getter y Setter
//clase persona donde todos sus atributos son publicos

class Persona{
    #Nombre = "Adonay"
    //#Edad = 32
    #FNac
    #Genero = false
    getNombre() {return this.#Nombre}
    getEdad() {
        var hoy = new Date()
        return hoy.getFullYear() - this.#FNac.getFullYear()}
    getGenero() {return this.#Genero}
    constructor(Nombre, Fnacimineto, Genero){
        this.#Nombre = Nombre
        this.#FNac = new Date(Fnacimineto)
        this.#Genero = Genero
    }
    //Inicio de los metodos getter
    get Nombre() {return this.#Nombre}
    get Edad() {
        var hoy = new Date()
        return hoy.getFullYear() - this.#FNac.getFullYear()}
    get Genero() {return this.getGenero()}
    //Inicio de los metodos setter
    set Nombre(valor) {this.#Nombre = valor}
}

console.log("----Persona----")
// creación de una instancia de la clase Persona
var Per01 = new Persona("Luisa", "january 12, 2003", true)  
// leer los atributos de la instancia
console.log(Per01.getNombre(), Per01.getEdad(), Per01.getGenero())

// de aqui en adelante existen 200000 lineas de codigo que no quiero cambiar
// soy muy perezoso
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
// escribir sobre los atributos de la instancia
console.log("Cambiando el nombre")
Per01.Nombre = "Camila"
//Per01.Edad = 33
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)