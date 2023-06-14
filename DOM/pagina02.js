function addEleList() {
    var elemento = document.createElement("li")
    var textoEle = document.createTextNode("Elemento 4 Dinamico")
    elemento.appendChild(textoEle)

    var lista = document.getElementById("listaord")
    lista.appendChild(elemento)

    var nuevoEle = "<li>Elemento 5</li>"
    lista.innerHTML += nuevoEle
}
function addTitulo(titulo) {
    var elemento = document.createElement("h1")
    var textoEle = document.createTextNode(titulo)
    elemento.appendChild(textoEle) 
    elemento.setAttribute("class","miTitulo")
    
    var cuerpo = document.body
    //cuerpo.appendChild(elemento) //agrega al Final

    var lista = document.getElementById("listaord")
    cuerpo.insertBefore(elemento,lista)
}
function addBoton(){
    var boton = document.createElement('button')
    boton.type = 'button'
    boton.innerHTML = "Aceptar"
    boton.className = "miboton"

    boton.onclick = function() {
        alert("Mensaje en mi nuevo boton")
    }
    /*onmouseup
    boton.onmousedown = function() {
        alert("pico el boton")
    }
    boton.onmouseover = function(){addEleList()}*/

    var cuerpo = document.body
    cuerpo.appendChild(boton)
}
function cambiarPesosaEuros(){
    var boton = document.getElementById("boton")
    boton.onclick = function(){
        document.getElementById("Euros").value = 
        document.getElementById("Pesos").value /4900
    }
}

window.onload = function() {
    addEleList()
    addTitulo("Mi Titulo NUevo")
    addBoton()
    cambiarPesosaEuros()
}