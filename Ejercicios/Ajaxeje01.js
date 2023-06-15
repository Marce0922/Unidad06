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
        //console.log(peticionHTTP.readyState)
        if (peticionHTTP.status == 404){
            salida.innerHTML = "<h1>PAGINA NO ENCONTRADA ERROR 404</h1>"
        }
        if (peticionHTTP.readyState == 4){
             
            //console.log(peticionHTTP.status)
            if(peticionHTTP.status == 200){
                // Parseo el JSON de llegada a un Objeto Javascript
                var datos = JSON.parse(peticionHTTP.responseText)
                console.log(datos)
                console.log(datos.results)
                console.log(datos.results[0].name + "," + datos.results[0].url)
                for(var i in datos.results){
                    infopoke = TraerPokemonAJAX(datos.results[i].url)
                    console.log(datos.results[i].url, infopoke)
                }
            }
        }
    }
    
    peticionHTTP.open("GET","https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",true)
    peticionHTTP.send()
}
function TraerPokemonAJAX(url){
    var peticionHTTP
    peticionHTTP = new XMLHttpRequest()
    peticionHTTP.onreadystatechange = function() {
        if (peticionHTTP.readyState == 4){
            if(peticionHTTP.status == 200){
                var datos = JSON.parse(peticionHTTP.responseText)
                /*
                salida.innerHTML += "<h3>"+datos.name+"</h3><br>"+datos.height/10
                +" metro(s) "+ datos.weight/10+" Kilo(s)"+
                "<img src='"+datos.sprites.front_default+"' alt=''></img><br>"
*/
salida.innerHTML +=
"<div class='card' style='width: 18rem;'>"+
"  <img src='"+datos.sprites.front_default+"' class='card-img-top' alt='"+
datos.name+"'>"+
"  <div class='card-body'>"+
"   <h5 class='card-title'>"+datos.name+"</h5>"+
"    <p class='card-text'>"+datos.height/10+" metro(s)<br>"+
    datos.weight/10+" Kilo(s) </p>"+
"  </div>"+
"</div>"
                
            }
        }
    }
    peticionHTTP.open("GET",url,false)
    peticionHTTP.send()
}