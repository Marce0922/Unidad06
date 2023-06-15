/*
1. Determinar el numero de enlaces (a)
2. Determinar el numero de imagenes (img)
3. Determinar el numero de parrafos (p)
4. Determinar el numero de titulos (h1,h2,h3...)
5. cambiar la ruta de un enlace
*/

function contara01(){
    var enlaces = document.getElementsByTagName("a");
    console.log(enlaces.length)
}

function contara02(tipoelemento){
    var enlaces = document.querySelectorAll(tipoelemento);
    console.log(enlaces.length)
}

function contara03(tipoelemento){
    var enlaces = document.querySelectorAll(tipoelemento);
    return enlaces.length
}

function cambiarEnlace(){
    const enlace = document.querySelector(".Header-link");
    enlace.setAttribute("href","https://www.google.com/");
    enlace.setAttribute("target","_black")
}