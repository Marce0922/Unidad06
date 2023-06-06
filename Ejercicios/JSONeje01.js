/*
crear un objeto JavaScript que tenga Nombre, Fecha de Nacimiento y Genero
convertir este objeto a una cadena JSON
*/
const persona = {
    nombre: "Camilo",
    fechaNacimiento: "1990-05-15",
    genero: "masculino"
    };
    
    const jsonString = JSON.stringify(persona);
    console.log(jsonString);

/*
Incrementar el precio del producto en un 10%.
Reducir el stock del producto en 1 unidad.
Mostrar el nombre del producto en mayúsculas.
*/
const producto = {
    "nombre": "Camiseta",
    "precio": 25,
    "stock": 10
};
producto.nombre = producto.nombre.toUpperCase()
producto.precio =  producto.precio * 1.1
producto.stock = producto.stock -1

const jsonProd = JSON.stringify(producto);
console.log(jsonProd);

/*
convertir el objeto JSON a Objeto JavaScript y leer todos los valores
y convertir el nuevo Objeto JavaScript de nuevo en JSON 

const estudiante = {
  "nombre": "María",
  "edad": 22,
  "cursos": [
    { "nombre": "Matemáticas", "nota": 90 },
    { "nombre": "Historia", "nota": 85 },
    { "nombre": "Inglés", "nota": 95 }
  ],
  "direccion" : {
    "calle" : "carrera 8a",
    "numero" : "41-56",
    "barrio" : "El Sucre",
    "ciudad" : "Bogotá D.C.",
  }
};
*/

const estudiante = '{"nombre": "María","edad": 22,"cursos": [{ "nombre": "Matemáticas", "nota": 90 },{ "nombre": "Historia", "nota": 85 },{ "nombre": "Inglés", "nota": 95 }],"direccion" : {"calle" : "carrera 8a","numero" : "41-56","barrio" : "El Sucre","ciudad" : "Bogotá D.C."}}';

const estudiante01 = JSON.parse(estudiante)
console.log("Nombre:",estudiante01.nombre)
console.log("Edad:",estudiante01.edad)
for (var x in estudiante01.cursos){
    console.log("Curso:", estudiante01.cursos[x].nombre, "Nota:",
    estudiante01.cursos[x].nota)
}
console.log("Dirección:", estudiante01.direccion.calle,
estudiante01.direccion.numero)
console.log("Barrio:",estudiante01.direccion.barrio)
console.log("Ciudad:",estudiante01.direccion.ciudad)

const estudiante02 = JSON.stringify(estudiante01)
console.log(estudiante02)