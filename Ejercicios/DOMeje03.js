/*
Crear un cronómetro utilizando JavaScript y manipulación del DOM con botones 
de inicio (pausa) y reinicio, adicionalmente realizar seguimiento de pausas. 
Además, mostrar el número de veces que se ha pausado y el momento en que 
se inició el conteo.
*/

let timerInterval
let startTime = new Date().getTime() //no la estoy usando realmente
let tiemporecor = 0
const textoT = document.getElementById("tiempo")
const starBtn = document.getElementById("StartBtn")
const resetBtn = document.getElementById("ResetBtn")

function iniciarcrono(){
    if(starBtn.textContent == "Iniciar"){
        timerInterval = setInterval(actualizarTiempo,1000)
        starBtn.textContent = "Pausar"
    } 
    else if(starBtn.textContent == "Reiniciar"){
        timerInterval = setInterval(actualizarTiempo,1000)
        starBtn.textContent = "Pausar"
    } 
    else if(starBtn.textContent == "Pausar"){
        clearInterval(timerInterval)
        starBtn.textContent = "Reiniciar"
    }
}
function actualizarTiempo(){
    tiemporecor++
    console.log(tiemporecor, 
        Math.floor((new Date().getTime() - startTime)/1000),
        new Date().getTime().toLocaleString()) //no se esta usando
    const segundos = tiemporecor % 60
    const minutos = Math.floor(tiemporecor/60) % 60
    const horas = Math.floor(tiemporecor/60/60) % 60
    if (horas > 0) textoT.textContent = horas+ "h "+ minutos+"m "+segundos+"s"
    else if (minutos > 0) textoT.textContent = minutos+"m "+segundos+"s"
    else textoT.textContent = segundos+"s"
}
function resetear(){
    clearInterval(timerInterval)
    tiemporecor = 0
    starBtn.textContent = "Iniciar"
    textoT.textContent = "0s"
}

//otra forma de adicionar eventos a elementos
starBtn.addEventListener('click',iniciarcrono)
resetBtn.addEventListener('click',resetear)