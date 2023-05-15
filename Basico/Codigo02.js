// OPERADORES ARITMETICOS
var num1 = 8
var num2 = 2
var num3 = 1

console.log("Operadores Aritméticos")
var num4 = num1 + num2 //suma
console.log(num1, num2, num4)

var num4 = num1 - num2 //resta
console.log(num1, num2, num4)

var num4 = num1 * num2 //multiplicación
console.log(num1, num2, num4)

var num4 = num1 / num2 //división
console.log(num1, num2, num4)

var num4 = num1 % num2 //modulo
console.log(num1, num2, num4)

num3++ // num3 = num3 + 1
console.log(num3)  //incremento

num3-- // num3 = num3 - 1
console.log(num3)  //decremento

//OPERADORES DE COMPARACION
var num1 = 8
var num2 = 2
var num3 = 1
console.log("Operadores de Comparación")
console.log(num1 > num2) //mayor que
console.log(num1 >= num1) //mayor o igual que
console.log(num1 < num2) //menor que
console.log(num1 <= num1) //menor o igual que
console.log(num1 == num2) //igual
console.log(num1 != num2) //diferente
console.log(0 == false)
console.log(0 === false) //estrictamente igual
console.log(0 !== false) //estrictamente no igual

//OPERADORES DE ASIGNACION
var num1 = 8 //asignar valor a
var num2 = 2
console.log("Operadores de Asignación")
num1 += num2 // sumar y asignar  -  num1 = num1 + num2
console.log(num1)

num1 -= num2 // restar y asignar  -  num1 = num1 - num2
console.log(num1)

num1 *= num2 // multiplicar y asignar   -  num1 = num1 * num2
console.log(num1)

num1 /= num2 // dividir y asignar  -  num1 = num1 / num2
console.log(num1)

num1 %= num2 // modulo y asignar  -  num1 = num1 % num2
console.log(num1)

//OPERADORES LOGICOS
console.log("Operadores Lógicos")
console.log(true & false)
console.log(true & true)
console.log(false & false) //and y
console.log(true || false)
console.log(true || true)
console.log(false || false) //or o
console.log(!true)
console.log(!false) //not no negación

//OPERADOR CONDICIONAL
console.log("Operadores Condicional")
var num1 = 8
var num2 = 2
var mayor
num1 > num2 ? mayor = num1 : mayor = num2
console.log("el numero mayor es ", mayor) 

true & false ? mayor="Verdadero" : mayor = "Falso"
console.log(mayor) 
