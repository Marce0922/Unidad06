//clase persona donde todos sus atributos son privados
class Persona{
    #Nombre  
    #Edad 
    #Genero 
    getNombre() {return this.#Nombre}
    getEdad() {return this.#Edad}
    getGenero() {return this.#Genero}
    setNombre(Nombre) {this.#Nombre = Nombre}
    //constructor=clase
    constructor(Nombre, Edad, Genero){
        this.#Nombre = Nombre
        this.#Edad = Edad
        this.#Genero = Genero
    }
}
class Profesional extends Persona{
    #Titulo
    getTitulo() {return this.#Titulo}
    constructor(Nombre, Edad, Genero, Titulo){
        //super envia al padre los parametros que necesita
        super(Nombre, Edad, Genero)
        this.#Titulo = Titulo
    }
}
class Empresa{
    #Nombre
    #Gerente
    #Empleados
    constructor(Nombre, Gerente){
        this.#Nombre = Nombre
        this.#Gerente = Gerente
        this.#Empleados = []
    }
    getNombre() {return this.#Nombre}
    setEmpleado(Empleado) { this.#Empleados.push(Empleado)}
    getNumEmpleado() {return this.#Empleados.length}
    getEmpleado(index) {return this.#Empleados[index]}
    getGerente() {return this.#Gerente}
}

console.log("----Persona----")
// creación de una instancia de la clase Persona
var Per01 = new Persona("Felipe", 47, false)  
// leer los atributos de la instancia por medio de los metodos
console.log("Datos de la Persona:",Per01.getNombre(), Per01.getEdad(), Per01.getGenero())
// escribir sobre los atributos de la instancia por medio de los metodos
//Per01.setNombre("Andy")
//console.log(Per01.getNombre(), Per01.getEdad(), Per01.getGenero())
var Per02 = new Persona("Maria", 27, true)  
var Per03 = new Persona("Juan", 34, false)  

console.log("----Profesional----")
var Pro01 = new Profesional("Ana", 27, true, "Desarrollador de Software")
console.log("Datos del Profesional:",Pro01.getNombre(), Pro01.getEdad(), 
    Pro01.getGenero(), Pro01.getTitulo())
console.log("----Empresa----")
var Emp01 = new Empresa("DesSoft S.A.", Pro01)
console.log("Nombre:",Emp01.getNombre())
console.log("Gerente:",Emp01.getGerente().getNombre(),Emp01.getGerente().getEdad(),
    Emp01.getGerente().getTitulo())
console.log("Num. Empleados:",Emp01.getNumEmpleado())

Emp01.setEmpleado(Per01)
Emp01.setEmpleado(Per02)
Emp01.setEmpleado(Per03)
console.log("Num. Empleados:",Emp01.getNumEmpleado())

for(var i = 0; i < Emp01.getNumEmpleado(); i++){
    console.log("Nombre del empleado ",i + 1,":", Emp01.getEmpleado(i).getNombre())
}