/*
En una empresa de alquiler de vehículos, se desea tener un sistema para 
gestionar diferentes tipos de vehículos. Cada vehículo tiene un número de 
serie, una marca y un modelo. Existen cuatro tipos de vehículos: coches, 
motos, bicicletas y camiones.

Se solicita implementar un sistema utilizando clases en JavaScript que 
permita:

Definir una clase base llamada Vehiculo, con las siguientes características:

Atributos:
numeroSerie: un número entero que representa el número de serie del vehículo.
marca: una cadena que representa la marca del vehículo.
modelo: una cadena que representa el modelo del vehículo.
Métodos:
obtenerDetalles(): muestra por consola los detalles del vehículo, incluyendo 
el número de serie, marca y modelo.

Definir una clase llamada Coche, que herede de la clase Vehiculo, con las 
siguientes características adicionales:
Atributos:
numeroPuertas: un número entero que representa la cantidad de puertas del coche.
Métodos:
obtenerDetalles(): muestra por consola los detalles del coche, incluyendo el número de serie, marca, modelo y número de puertas.
arrancar(): muestra por consola un mensaje específico para indicar que el 
coche ha sido arrancado.

Definir una clase llamada Moto, que herede de la clase Vehiculo, con las 
siguientes características adicionales:
Atributos:
cilindrada: un número entero que representa la cilindrada de la moto.
Métodos:
obtenerDetalles(): muestra por consola los detalles de la moto, incluyendo 
el número de serie, marca, modelo y cilindrada.
acelerar(): muestra por consola un mensaje específico para indicar que la 
moto está acelerando.

Definir una clase llamada Bicicleta, que herede de la clase Vehiculo, con 
las siguientes características adicionales:
Atributos:
tipo: una cadena que representa el tipo de bicicleta (ejemplo: montaña, 
    paseo, carrera).
Métodos:
obtenerDetalles(): muestra por consola los detalles de la bicicleta, 
incluyendo el número de serie, marca, modelo y tipo.
pedalear(): muestra por consola un mensaje específico para indicar que la 
bicicleta está siendo utilizada.

Crear instancias de un coche, una moto y una bicicleta, proporcionando los 
datos necesarios.
Llamar al método obtenerDetalles() en cada instancia y verificar que los 
detalles se muestren correctamente.
Llamar a los métodos específicos (arrancar(), acelerar(), pedalear()) en 
cada instancia y verificar que se muestre el mensaje correspondiente a cada 
tipo de vehículo.
*/

class Vehiculo{
    _NumeroSerie
    _Marca
    _Modelo
    constructor(numeroserie, marca, modelo){
        this._NumeroSerie = numeroserie
        this._Marca = marca
        this._Modelo = modelo
    }
    obtenerDetalles(){
        console.log("Numero de serie:", this._NumeroSerie, "Marca:",
        this._Marca, "Modelo:", this._Modelo)
    }
}
class Coche extends Vehiculo{
    _NumeroPuertas
    constructor(numeroserie, marca, modelo, numeropuertas){
        super(numeroserie,marca,modelo)
        this._NumeroPuertas = numeropuertas
    }
    obtenerDetalles(){
        console.log("Numero de serie:", this._NumeroSerie, "Marca:",
        this._Marca, "Modelo:", this._Modelo, "Numero de Puertas:", 
        this._NumeroPuertas)
    }
    arrancar(){
        console.log("El coche ha arrancado..")
    }
}
class Moto extends Vehiculo{
    _Cilindraje
    constructor(numeroserie, marca, modelo, cilindraje){
        super(numeroserie,marca,modelo)
        this._Cilindraje = cilindraje
    }
    obtenerDetalles(){
        console.log("Numero de serie:", this._NumeroSerie, "Marca:",
        this._Marca, "Modelo:", this._Modelo, "Cilindraje:", 
        this._Cilindraje)
    }
    acelerar(){
        console.log("run run la moto acelera..")
    }
}
class Bicicleta extends Vehiculo{
    _Tipo
    constructor(numeroserie, marca, modelo, tipo){
        super(numeroserie,marca,modelo)
        this._Tipo = tipo
    }
    obtenerDetalles(){
        console.log("Numero de serie:", this._NumeroSerie, "Marca:",
        this._Marca, "Modelo:", this._Modelo, "Tipo de Bicicleta:", 
        this._Tipo)
    }
    pedalear(){
        console.log("la bicicleta de ", this._Tipo, "esta en uso actualmente")
    }
}
class Camion extends Vehiculo{
    _Capacidad
    _NumEjes
    constructor(numeroserie, marca, modelo, capacidad, numejes){
        super(numeroserie,marca,modelo)
        this._Capacidad = capacidad
        this._NumEjes = numejes
    }
    obtenerDetalles(){
        console.log("Numero de serie:", this._NumeroSerie, "Marca:",
        this._Marca, "Modelo:", this._Modelo, "Capacidad:", 
        this._Capacidad, "Numero de Ejes:", this._NumEjes)
    }
    cargando(){
        console.log("El camion esta cargado a tope")
    }
}

let miCoche = new Coche(1234,"Renault", 2013, 4)
miCoche.obtenerDetalles()
miCoche.arrancar()
let miMoto = new Moto("m7894", "Yamaha", 2018, 250)
miMoto.obtenerDetalles()
miMoto.acelerar()
let miBici = new Bicicleta(456, "Poseidon", 2020,"carrera")
miBici.obtenerDetalles()
miBici.pedalear()
let miCamion = new Camion("c1234","Foton",2014,2,6)
miCamion.obtenerDetalles()
miCamion.cargando()