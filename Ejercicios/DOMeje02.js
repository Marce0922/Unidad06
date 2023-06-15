/*
Validación de formulario

Crear un formulario HTML con campos de entrada para nombre, correo electrónico
y contraseña.
Asignar identificadores únicos a los campos de entrada y un botón de envío.
Utilizando JavaScript para agregar un evento al botón de envío que, al hacer 
clic, verifique si los campos de entrada están completos.
Si todos los campos están completos, mostrar un mensaje de éxito. 
De lo contrario, mostrar un mensaje de error.
*/

var boton = document.getElementById("boton")
boton.onclick = function() {
    //alert("Mensaje en mi nuevo boton")
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    console.log(nombre, nombre.length)
    //alert(nombre + " " + nombre.length)
    if (nombre.length > 0 && email.length > 0 && pass.length > 0 ) {
        alert("LLeno los campos correctamente");
    } else {
        alert("Error, llene los campos");
    }
    console.log(nombre, nombre.length)
}