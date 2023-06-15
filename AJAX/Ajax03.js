var boton = document.getElementById("miboton")
boton.addEventListener('click',ejecutarAJAX)
var salida = document.getElementById("infoajax")

function ejecutarAJAX(){
    var peticionHTTP
    if (window.XMLHttpRequest){
        peticionHTTP = new XMLHttpRequest()
    } else {
        peticionHTTP = new ActiveXObject("Microsoft.XMLHTTP")
    }

    peticionHTTP.onreadystatechange = function() {
    // 1 -> peticion se ha establecido
    // 2 -> peticion se ha enviado
    // 3 -> peticion esta siendo procesada
    // 4 -> peticion ha sido finalizada
        console.log(peticionHTTP.readyState)
        if (peticionHTTP.readyState == 4)
            if(peticionHTTP.status == 200){
                var datos = JSON.parse(peticionHTTP.responseText)
                console.log(datos)
                //salida.innerHTML = ""
                for(var i in datos){
                    salida.innerHTML += "Pais: " + datos[i].Pais + 
                    " Capital: " + datos[i].Capital + "<br>"
                }
            }
    }
    
    peticionHTTP.open("GET","Ajax03.json",true)
    peticionHTTP.send()
    
}