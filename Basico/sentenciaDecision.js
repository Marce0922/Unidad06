function funcionif01(a){
    if (a < 18) {
        console.log("es menor de edad")
    }
}
function funcionif02(a){
    if (a < 18) {
        console.log("es menor de edad")
    } else {
        console.log("es mayor de edad")
    }
}
function funcionif03(a){
    if (a <= 5) {
        console.log("Primera Infancia")
    } else if (a <= 11){
        console.log("Infancia")
    } else if (a <= 18){
        console.log("Adolescencia")
    } else if (a <= 26){
        console.log("Juventud")
    } else if (a <= 59){
        console.log("Adultez")
    } else {
        console.log("Vejez")
    }
}

function funcionswitch01(a){
    switch(a){
        case 'rosa':
            console.log("se venden por docena y unidad")
            break
        case 'girasol':
            console.log("se venden por unidad")
            break
        case 'hortensia':
            console.log("se venden por ramos")
            break
        default:
            console.log("se venden por parejas")
    }
}

function funcionswitch02(a){
    switch(a){
        case 1:
            console.log("Opción uno")
            break
        case 2:
            console.log("Opción dos")
            break
        case 3:
            console.log("Opción tres")
            break
        default:
            console.log("Opción desconocida")
    }
}

//funcionswitch01("rosa")
//funcionswitch01("girasol")
//funcionswitch01("hortensia")
//funcionswitch01("clavel")
//funcionswitch01("ROSA")
//funcionswitch01("Rosa")
funcionswitch02(2)

//funcionif01(15)
//funcionif01(19)
//funcionif02(15)
//funcionif02(19)
//funcionif03(4)
//funcionif03(14)
//funcionif03(11)
//funcionif03(21)
//funcionif03(61)
funcionif03(41)