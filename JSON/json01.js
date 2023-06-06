/*cadena de texto en JSON */
const JsonObj = '{"Nombre":"Felipe","Genero":false,"Edad":47}'
/*Se crea objeto en JavaScript */
const ObjJs = JSON.parse(JsonObj)

console.log(JsonObj)
console.log(ObjJs.Nombre)
console.log(ObjJs.Genero)
console.log(ObjJs.Edad)

/* OJO si la estructura de JSON tiene errores, el parseo no se realiza
const JsonObj01 = '{"Nombre":"Felipe","Genero":false,"Edad":47,"mal"}'
const ObjJs01 = JSON.parse(JsonObj01)
*/