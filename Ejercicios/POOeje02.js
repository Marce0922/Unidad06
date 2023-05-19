/*
Se plantea desarrollar un programa JavaScript que permita la gestión de una 
empresa agroalimentaria que trabaja con tres tipos de productos: productos 
frescos, productos refrigerados y productos congelados.

Todos los productos llevan esta información común: fecha de caducidad y 
número de lote. A su vez, cada tipo de producto lleva alguna información específica. 
Los productos frescos deben llevar la fecha de envasado y el país de origen. 
Los productos refrigerados deben llevar el código del organismo de 
supervisión alimentaria, la fecha de envasado, la temperatura de 
mantenimiento recomendada y el país de origen. 
Los productos congelados deben llevar la fecha de envasado, el país de 
origen y la temperatura de mantenimiento recomendada.

Hay tres tipos de productos congelados: congelados por aire, congelados por 
agua y congelados por nitrógeno. 
Los productos congelados por aire deben llevar la información de la 
composición del aire con que fue congelado (% de nitrógeno, % de oxígeno, 
% de dióxido de carbono y % de vapor de agua). 
Los productos congelados por agua deben llevar la información de la 
salinidad del agua con que se realizó la congelación en gramos de sal por 
litro de agua. 
Los productos congelados por nitrógeno deben llevar la información del 
método de congelación empleado y del tiempo de exposición al nitrógeno 
expresada en segundos. 
*/

class Producto {
    #FechaCaducidad
    #NumLote
    #PaisOrigen
    #FechaEnvasado
    getFechaCaducidad() {return this.#FechaCaducidad}
    getNumlote() {return this.#NumLote}
    getPaisOrigen() {return this.#PaisOrigen}
    getFechaEnvasado() {return this.#FechaEnvasado}
    constructor (FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado){
        this.#FechaCaducidad = FechaCaducidad
        this.#NumLote = NumLote
        this.#PaisOrigen = PaisOrigen
        this.#FechaEnvasado = FechaEnvasado
    }
}
class ProdFresco extends Producto{
    constructor (FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado){
        super(FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado)
    }
}
class ProdRefrigerado extends Producto {
    #CodOrgSupAli
    #TempMantRec
    getCodOrgSupAli() {return this.#CodOrgSupAli}
    getTempMantRec() {return this.#TempMantRec}
    constructor(FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado, CodOrgSupAli,TempMantRec) {
        super(FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado)
        this.#CodOrgSupAli = CodOrgSupAli
        this.#TempMantRec = TempMantRec
    }
}
class ProdCongelado extends Producto {
    #TempMantRec
    getTempMantRec() {return this.#TempMantRec}
    constructor(FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado,TempMantRec) {
        super(FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado)
        this.#TempMantRec = TempMantRec
    }
}
class ProdCongeAire extends ProdCongelado {
    #PorNitrogeno
    #PorOxigeno
    #PorDioxidoCarbono
    #PorVaporAgua
    getPorNitrogeno() {return this.#PorNitrogeno}
    getPorOxigeno() {return this.#PorOxigeno}
    getPorDioxidoCarbono() {return this.#PorDioxidoCarbono}
    getPorVaporAgua() {return this.#PorVaporAgua}
    constructor(FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado,TempMantRec,PorNitrogeno,PorOxigeno,PorDioxidoCarbono,PorVaporAgua) {
        super(FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado,TempMantRec)
        this.#PorNitrogeno = PorNitrogeno
        this.#PorOxigeno = PorOxigeno
        this.#PorDioxidoCarbono = PorDioxidoCarbono
        this.#PorVaporAgua = PorVaporAgua
    }
}
class ProdCongeAgua extends ProdCongelado {
    #Salinidad
    getSalinidad() {return this.#Salinidad}
    constructor(FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado,TempMantRec,Salinidad) {
        super(FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado,TempMantRec)
        this.#Salinidad = Salinidad
    }
}
class ProdCongeNitrogeno extends ProdCongelado {
    #MetodoCongelacion
    #TiempoExpo
    getMetodoCongelacion() {return this.#MetodoCongelacion}
    getTiempoExpo() {return this.#TiempoExpo}
    constructor(FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado,TempMantRec,MetodoCongelacion,TiempoExpo) {
        super(FechaCaducidad,NumLote,PaisOrigen,FechaEnvasado,TempMantRec)
        this.#MetodoCongelacion = MetodoCongelacion
        this.#TiempoExpo = TiempoExpo
    }
}

var Miprod01 = new ProdCongeNitrogeno(new Date("December 17, 2023"), 13, "Colombia", 
    new Date("February 12, 2023"), -20, "Nitrogeno Inyectado", 72)
//metodos de la clase hijo ProdCongeNitrogeno
console.log("método de congelación:", Miprod01.getMetodoCongelacion())
console.log("tiempo de exposición:", Miprod01.getTiempoExpo(), "segundos")
//metodos de la clase padre ProdCongelado
console.log("temperatura de mantenimiento recomendada:", Miprod01.getTempMantRec(), "ºC")
//metodos de la clase padre Producto
console.log("fecha de caducidad:", Miprod01.getFechaCaducidad())
console.log("número de lote:", Miprod01.getNumlote())
console.log("fecha de envasado:", Miprod01.getFechaEnvasado())
console.log("país de origen:", Miprod01.getPaisOrigen())