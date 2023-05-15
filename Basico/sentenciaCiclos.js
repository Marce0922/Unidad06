// for in
function funcionForIn(a){
    for (let x in a){
        //console.log(a[x])
        console.log(x, a[x])
    }
}

function funcionFor(a){
    let valor = 0
    for(var i = 1; i <= a; i++){
        valor += i
    }
    return valor
}
function funcionWhile(a){
    let valor = 0
    var i = 1
    while(i <= a){
        valor += i
        i++
    }
    return valor
}
function funcionDo(a){
    let valor = 0
    var i = 1
    do{
        valor += i
        i++
    }while(i <= a)
    return valor
}


let miarreglo = [34, 21, 2, 65, 4]
const miobjeto = {nombre: "Ana", edad: 21, genero: true}
//funcionForIn(miarreglo)
//funcionForIn(miobjeto)
//console.log(miarreglo[0])

a = 0 //10  100
console.log("(for) la sumatoria de numeros hasta ",a, "da: ", funcionFor(a))
console.log("(while) la sumatoria de numeros hasta ",a, "da: ", funcionWhile(a))
console.log("(do) la sumatoria de numeros hasta ",a, "da: ", funcionDo(a))

let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
for (let value in iterable) {
    console.log(iterable[value]);
}