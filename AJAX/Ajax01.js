var boton = document.getElementById("miboton")
boton.addEventListener('click',ejecutarAJAX)

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
                document.getElementById("infoajax").innerHTML =
                peticionHTTP.responseText
            }
    }
    
    peticionHTTP.open("GET","Ajax01.txt",true)
    peticionHTTP.send()
    
}