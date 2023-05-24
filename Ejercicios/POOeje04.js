class Number{
    #BaseNume = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    #valor
    #base
    constructor(){
        if (arguments.length==0 || arguments.length >2) {
            throw new TypeError('No puedes instanciar la clase sin los parametros adecuados (valor, base = opcional).');
        }
        this.#valor = arguments[0].toString()
        if (typeof(arguments[1])=='number'){
            this.#base = arguments[1]
        } else {
            this.#base = 10
        }
        //console.log(typeof(arguments[1]))
        console.log(this.#valor, this.#base)
    }

    getBase(newBase){
        var numb10 = this.getBase10()
        var numsal = ""
        while (numb10 > 1) {
            var a = numb10 % newBase  //residuo
            numb10 = Math.trunc(numb10 / newBase)  //parte entera
            //console.log(a, numb10, numsal)
            numsal = this.#BaseNume[a] + numsal  //concatene
        }
        //console.log(numb10, numsal)
        if (numb10 !=0) {
            numsal = numb10.toString() + numsal
        }
        return numsal
    }

    getBase10(){
        if(this.#base == 10) return this.#valor

        var long = this.#valor.length -1
        var suma = 0
        for (var x in this.#valor){
            //console.log(this.#valor[x], this.#BaseNume.indexOf(this.#valor[x]))
            suma +=  this.#BaseNume.indexOf(this.#valor[x]) * (this.#base**long)
            long = long -1
        }
        return suma
    }

    suma(num2){
        var retorno = new Number(
            parseInt(this.getBase10())+ parseInt(num2.getBase10()))
        return retorno
    }


    prueba(index){
        console.log(index,this.#BaseNume[index])
    }
}

var miNum01 = new Number(2738)
console.log("mi numero en base 16:",miNum01.getBase(16))
console.log("mi numero en base 10:",miNum01.getBase10())

//miNum01.prueba(11)
//var miNum02 = new Number(101101,2)
var miNum03 = new Number("AB2",16)
console.log("mi numero en base 10:",miNum03.getBase10())
console.log("mi numero en base 8:",miNum03.getBase(8))

var miNum04 = miNum01.suma(miNum03)
console.log("mi numero en base 10:",miNum04.getBase10())
console.log("mi numero en base 16:",miNum04.getBase(16))
console.log("mi numero en base 8:",miNum04.getBase(8))

