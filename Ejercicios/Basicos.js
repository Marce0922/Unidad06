/* Sacar el área y perímetro de un cuadrado, ingresando el lado del mismo */
function Cuadrado(L){
    var area = L * L
    var peri = L + L + L + L
    retorno = {lado: L, area: area, perimetro: peri}
    return retorno
}
console.log(Cuadrado(2))

/* Sacar el área y perímetro de un circulo, ingresando el radio del mismo */
function Circulo(R){
    const PI = 3.1416
    var area = PI * R * R
    var peri = 2 * R * PI
    retorno = {radio: R, area: area, perimetro: peri}
    return retorno
}
console.log(Circulo(2))

/* La tienda CavaVe2 requiere entregar vueltas con el menor número de monedas a 
partir del valor a regresar, los valores de las monedas existentes son $1000, $500, $200, $100 y $50. */
function vueltas(V){
    var Resi = V % 1000
    var Mmil = (V - Resi) / 1000
    var Resi1 = Resi % 500
    var Mqui = (Resi - Resi1) / 500
    Resi = Resi1 % 200
    var Mdos = (Resi1 - Resi) / 200
    Resi1 = Resi % 100
    var Mcie = (Resi - Resi1) / 100
    var Mcin = Resi1 / 50
    retorno = {Vueltas: V, MonedaMil: Mmil, MonedaQui: Mqui, MonedaDos: Mdos, MonedaCie: Mcie, MonedaCin: Mcin}
    return retorno
}
console.log(vueltas(4850))

/* Realizar el algoritmo en un diagrama de flujo, que permita determinar si un número es positivo o negativo */
function PositivoNegativo(N){
    if (N >= 0) {
        return true
    } else
        return false
}
console.log(PositivoNegativo(10) ? "positivo" : "Negativo")
console.log(PositivoNegativo(-7) ? "positivo" : "Negativo")

/* Muestre el precio final de un artículo, si este tiene un iva del 19% y un descuento del 30% */
function PrecioFin(N){
    const IVA = 0.19
    const DESC = 0.3
    let a_iva = N * IVA
    let a_desc = N * DESC
    let precio = N - a_desc + a_iva
    return {PrecioIni: N, iva: a_iva, descuento: a_desc, Valorfin: precio}
}
console.log(PrecioFin(100000))

/* El pago del salario semanal de un trabajador es de $400000, debiendo trabajar 40 horas a la semana, 
después de estas horas, las horas adicionales se pagan al doble, realizar el diagrama de flujo que muestre 
el pago semanal de un trabajador */
function PagoSemanal(H){
    var HE = H - 40
    var PAGO = 400000 + (2 * HE * (400000/40))
    return PAGO
}
console.log(PagoSemanal(50))

/* Realice la sucesión de Fibonacci hasta el N termino */
function Fibonacci(N){
    var A = 0, B = 1
    var sucesion = [A, B]
    for (var M = 1; M <= (N-2); M++){
        var C = A + B
        sucesion.push(C)
        var A = B
        var B = C
    }
    return sucesion
}
console.log(Fibonacci(10))

/* Ingresado un numero ‘n’ entero positivo determinar 
si este es primo o no.*/
function EsPrimo(N){
    if(N <= 2) return false
    var retorno = true
    for(var i = 2; i < N; i++){
        if(N % i == 0) {
            retorno = false
            break
        }
        //console.log(N, i, retorno)
    }
    return retorno
}

/* Ingresado un numero ‘n’ entero positivo determinar la suma 
de los primos hasta ese numero */
function sumaPrimos(N){
    var suma = 0
    for (var i = 1; i< N; i++){
        if (EsPrimo(i)) suma += i
    }
}



var num = 5
console.log(EsPrimo(num) ? num + " es Primo" : num + " no es Primo")

/* realizar un script que escriba una piramide del 1 al 30
1
22
333
4444
55555
666666
7777777
88888888
999999999
1010101010
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10
*/
function piramide01(N){
    var cadena = []
    for(var i = 1; i <= N; i++){
        cadena.push(i)
        //console.log(cadena)
        var texto = ""
        for(var x in cadena){
            texto += cadena[x] + " "
        }
        console.log(texto)
    }
}
function piramide02(N){
    var texto = ""
    for(var i = 1; i <= N; i++){
        texto += i + " "
        console.log(texto)
    }
}
function piramide03(N){
    for(var i = 1; i <= N; i++){
        var texto = "" 
        for(var j = 1; j<= i; j++){
            texto += i
        }
        console.log(typeof(texto))
        console.log(texto.substr(0,i))
    }
}
piramide03(15)