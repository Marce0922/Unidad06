/*
En una empresa, se desea tener un sistema para gestionar a los empleados. 
Cada empleado tiene un nombre y un salario. Existen dos tipos de empleados: 
desarrolladores y gerentes.
Los desarrolladores tienen un lenguaje de programación asociado, mientras 
que los gerentes tienen un departamento asociado.

Se solicita implementar un sistema utilizando clases en JavaScript que 
permita:
Definir una clase base llamada Empleado, con las siguientes características:
Atributos:
    nombre: una cadena que representa el nombre del empleado.
    salario: un número que representa el salario del empleado.
Métodos:
    obtenerDetalles(): muestra por consola el nombre y salario del empleado.

Definir una clase llamada Desarrollador, que herede de la clase Empleado, 
con las siguientes características adicionales:
Atributos:
    lenguaje: una cadena que representa el lenguaje de programación del 
    desarrollador.
Métodos:
    obtenerDetalles(): muestra por consola el nombre, salario y lenguaje del
    desarrollador.
    calcularPago(): muestra por consola un mensaje específico para el 
    cálculo del pago del desarrollador.

Definir una clase llamada Gerente, que herede de la clase Empleado, con 
las siguientes características adicionales:
Atributos:
    departamento: una cadena que representa el departamento del gerente.
Métodos:
    obtenerDetalles(): muestra por consola el nombre, salario y departamento 
    del gerente.
    calcularPago(): muestra por consola un mensaje específico para el 
    cálculo del pago del gerente.

Crear instancias de un desarrollador y un gerente, proporcionando los datos 
necesarios.
Llamar al método obtenerDetalles() en cada instancia y verificar que los 
detalles se muestren correctamente.
Llamar al método calcularPago() en cada instancia y verificar que se 
muestre el mensaje correspondiente a cada tipo de empleado.
*/

class Empleado {
    _Nombre
    _Salario
    constructor(nombre, salario){
        if (new.target === Empleado) {
            throw new TypeError('No puedes instanciar una clase abstracta.');
        }
        this._Nombre = nombre
        this._Salario = salario
    }
    obtenerDetalles(){
        console.log("Nombre:", this._Nombre, "Salario: $", this._Salario)
    }

}
class Desarrollador extends Empleado{
    constructor(nombre, salario, lenguaje){
        super(nombre,salario)
        this._Lenguaje = lenguaje
    }
    obtenerDetalles(){
        console.log("Nombre:", this._Nombre, "Salario: $", this._Salario,
        "Lenguaje:", this._Lenguaje)
    }
    calcularPago(){
        console.log("Calculando el pago del Desarrollador", this._Nombre)
        console.log("Pago al Desarrollador", this._Salario)
    }
}
class Gerente extends Empleado{
    constructor(nombre, salario, departamento){
        super(nombre,salario)
        this._Departamento = departamento
    }
    obtenerDetalles(){
        console.log("Nombre:", this._Nombre, "Salario: $", this._Salario,
        "Departamento:", this._Departamento)
    }
    calcularPago(){
        console.log("Calculando el pago del Gerente", this._Nombre)
        console.log("Pago al Gerente", this._Salario)
    }
}
var miDesa01 = new Desarrollador("Andrea", 3000000, "JavaScript")
miDesa01.obtenerDetalles()
miDesa01.calcularPago()
var miGere01 = new Gerente("Karen", 4000000, "BackEnd")
miGere01.obtenerDetalles()
miGere01.calcularPago()