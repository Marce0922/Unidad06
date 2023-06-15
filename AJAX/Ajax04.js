var boton = document.getElementById("miboton")
boton.addEventListener('click',ejecutarAJAX)
var salida = document.getElementById("infoajax")

function ejecutarAJAX(){
    var peticionHTTP
    peticionHTTP = new XMLHttpRequest()

    var nick = document.getElementById("nick").value
    var pass = document.getElementById("pass").value
    var envio = "nick="+nick+"&pass="+pass

    peticionHTTP.onreadystatechange = function() {
        if (peticionHTTP.readyState == 4)
            if(peticionHTTP.status == 200){
                var datos = peticionHTTP.responseText
                salida.innerHTML = datos
            }
    }
    peticionHTTP.open("POST","Ajax04.php",true)
    peticionHTTP.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    peticionHTTP.send(envio)

}