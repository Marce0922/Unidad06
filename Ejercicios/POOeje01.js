/*
Crear una clase "Titular" que tenga las siguientes propiedades: Nombre, 
documento de identidad, fecha de nacimiento.
Crear una clase "CuentaBancaria" que tenga las siguientes propiedades: 
número de cuenta, Titular y saldo. La clase debe tener un método "depositar" 
que permita añadir una cantidad de dinero al saldo de la cuenta y un método 
"retirar" que permita retirar una cantidad de dinero del saldo de la cuenta.
*/
class Titular {
    #Nombre
    #Docidentidad
    #FechaNac
    getNombre() {return this.#Nombre}
    getDocidentidad() {return this.#Docidentidad}
    getFechaNac() {return this.#FechaNac}
    getEdad(){
        var hoy = new Date()
        return hoy.getFullYear() - this.#FechaNac.getFullYear()
    }
    constructor (Nombre,Docidentidad,FechaNac){
        this.#Nombre = Nombre
        this.#Docidentidad = Docidentidad
        this.#FechaNac = FechaNac
    }
}

class CuentaBancaria{
    #Numcuenta
    #Titular
    #Saldo
    getNumcuenta() {return this.#Numcuenta}
    getSaldo() {return this.#Saldo}
    getTitular() {return this.#Titular}
    Depositar(valor) {
        this.#Saldo += valor
        console.log(valor, "depositados al saldo")
    }
    Retirar(valor) {
        if (this.#Saldo >= valor){
            this.#Saldo -= valor
            console.log(valor, "retirados al saldo")
            return true
        } else {
            console.error("Operación no realizada, saldo inferior al retiro")
            return false
        }
    }
    constructor(Titular, SaldoInicial){
        this.#Titular = Titular
        this.#Saldo = SaldoInicial
        this.#Numcuenta = Math.floor(Math.random()*100)
    }
}

var Titular01 = new Titular("Diana", 1234, new Date(2003,11,25))
//console.log(Titular01.getNombre(), Titular01.getDocidentidad(),
//    Titular01.getEdad(), Titular01.getFechaNac())
var miCuenta01 = new CuentaBancaria(Titular01, 50000)
console.log("-- Cuenta Bancaria --")
console.log("Numero de Cuenta:", miCuenta01.getNumcuenta())
console.log("Documento del Titular:", miCuenta01.getTitular().getDocidentidad())
console.log("Nombre del Titular:", miCuenta01.getTitular().getNombre())
console.log("Fecha de Nacimiento del Titular:", miCuenta01.getTitular().getFechaNac())
console.log("Edad del Titular:", miCuenta01.getTitular().getEdad())
console.log("Saldo de la Cuenta:", miCuenta01.getSaldo())
console.log("")
miCuenta01.Depositar(50000)
console.log("Nuevo Saldo de la Cuenta:", miCuenta01.getSaldo())
miCuenta01.Retirar(80000)
console.log("Nuevo Saldo de la Cuenta:", miCuenta01.getSaldo())
miCuenta01.Retirar(80000)
console.log("Nuevo Saldo de la Cuenta:", miCuenta01.getSaldo())