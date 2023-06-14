console.log("Busqueda de objetos por Tipo")
var parrafos = document.getElementsByTagName("p")
console.log(parrafos)
var parrafoN1 = parrafos[0]
console.log(parrafoN1, parrafoN1.innerText, parrafoN1.innerHTML)
/*
for(var i = 0; i < parrafos.length; i++){
    console.log(parrafos[i], parrafos[i].innerText
        , parrafos[i].innerHTML)
}*/

for(var i in parrafos){
    console.log(parrafos[i], parrafos[i].innerText
        , parrafos[i].innerHTML)
}

console.log("Busqueda de objetos por nombre")
var parrafoPorNombre = document.getElementsByName("parrafo_post")
console.log(parrafoPorNombre)
console.log(parrafoPorNombre[0], parrafoPorNombre[0].innerText
    , parrafoPorNombre[0].innerHTML)

console.log("Busqueda de objetos por id")
var parrafoPorId = document.getElementById("p_post")
console.log(parrafoPorId, parrafoPorId.innerText
    , parrafoPorId.innerHTML)

console.log("Busqueda de objetos selector")
var elementos = document.querySelectorAll("#parrafos p")
console.log(elementos)
console.log(elementos[0], elementos[0].innerText
    , elementos[0].innerHTML)

var elementos = document.querySelectorAll(".contacto")
console.log(elementos)
console.log(elementos[0], elementos[0].innerText
    , elementos[0].innerHTML)

//Estilos 
const elemHeader = document.querySelector("#post")
elemHeader.style.color = "red"

console.log("Atributos y Textos")
//Atributos y Texto
const enlace = document.querySelector('.enlace')
console.log(enlace)
console.log(enlace.innerText)
const mihref = enlace.getAttribute("href")
console.log(mihref)
const mitarget = enlace.getAttribute("target")
console.log(mitarget)
//cambiando valores de atributos y textos
enlace.setAttribute("href","https://espanol.yahoo.com/")
enlace.innerText = "Yahoo"
//borrado de atributos
enlace.removeAttribute("target")
console.log(enlace)


//Crear Elementos
const titulo1 = document.createElement("h1")
titulo1.textContent = "Mi Titulo por JavaScript y DOM"
document.querySelector("header").appendChild(titulo1)
const titulo3 = document.createElement("h1")
titulo3.textContent = "Mi Titulo por JavaScript y DOM"
document.querySelector("header").appendChild(titulo3)

const titulo2 = document.createElement("h3")
titulo2.textContent = "Mis Redes Sociales"
document.querySelector("footer").appendChild(titulo2)

//borrar elementos
//titulo2.remove()
//titulo2.parentElement.removeChild(titulo2)
document.querySelector("footer").removeChild(titulo2)

//diferencia entre innerHTML e innerText
console.log(titulo1.innerText)
titulo1.innerText = "Mi titulo por <em>Javascript</em> y <em>DOM</em>"
titulo3.innerHTML = "Mi titulo por <em>Javascript</em> y <em>DOM</em>"