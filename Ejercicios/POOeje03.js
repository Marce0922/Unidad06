/*
Se quiere implementar un sistema para una biblioteca, donde tenemos 
diferentes tipos de recursos, como son libros, revistas y CDs. Adicional a 
esto, cada recurso puede tener uno o más autores.

Para implementar esto se utilizara el paradigma POO, podemos crear una 
clase base llamada Recurso, que tenga una propiedad para el título y un 
método para obtener el tipo de recurso. Luego, creamos subclases 
específicas para cada tipo de recurso, como Libro, Revista y CD, que 
hereden de la clase Recurso y añadan propiedades específicas de cada tipo.
Libro = Editorial, Fecha, Numero de paginas
Revista = Numero de Articulos, Edicion
CD = Duración

Para la herencia por agregación, creamos una clase Autor que represente a 
un autor, y cada recurso tendrá uno o más autores asociados. Para esto, 
podemos utilizar una propiedad autores que sea un arreglo de instancias 
de la clase Autor.
Autor = Nombre, nacionalidad
*/

class Autor{
    #Nombre
    #Nacionalidad
    constructor(Nombre, Nacionalidad){
        this.#Nombre = Nombre
        this.#Nacionalidad = Nacionalidad
    }
    getNombre() {return this.#Nombre}
    getNacionalidad() {return this.#Nacionalidad}
}

class Recurso{
    #Titulo
    #Autores  //aqui se almacena un arreglo
    _TipoRecurso
    get Titulo() {return this.#Titulo}
    getTipoRecurso() {return this._TipoRecurso}
    getAutores() {return this.#Autores}
    constructor(Titulo, Autores){
        if (new.target === Recurso) {
            throw new TypeError('No puedes instanciar una clase abstracta.');
        }
        this.#Titulo = Titulo
        this.#Autores = Autores
    }
}

class Libro extends Recurso{
    #Editorial
    #Fecha
    #NumPaginas
    getEditorial() {return this.#Editorial}
    getFecha() {return this.#Fecha}
    getNumPaginas() {return this.#NumPaginas}
    constructor (Titulo, Autores, Editorial, Fecha, NumPaginas){
        super(Titulo, Autores)
        this.#Editorial = Editorial
        this.#Fecha = Fecha
        this.#NumPaginas = NumPaginas
        this._TipoRecurso = "Libro"
    }
}

class Revista extends Recurso{
    #NumArtículos
    #Edición
    getNumArtículos() {return this.#NumArtículos}
    getEdición() {return this.#Edición}
    
    constructor (Titulo, Autores, NumArtículos,Edición){
        super(Titulo, Autores)
        this.#NumArtículos= NumArtículos
        this.#Edición = Edición
        this._TipoRecurso = "Revista"
    }
}

class CD extends Recurso{
    #Duracion
    getDuracion() {return this.#Duracion}
    constructor (Titulo, Autores, Duracion){
        super(Titulo, Autores)
        this.#Duracion = Duracion
        this._TipoRecurso = "CD"
    }
}

// creación de autores
const autor1 = new Autor("Gabriel Garcia Márquez", "Colombiano")
console.log(autor1.getNombre(), autor1.getNacionalidad())

const autor2 = new Autor("Grady Booch", "Estadounidense")
const autor3 = new Autor("James Rumbaugh", "Estadounidense")
const autor4 = new Autor("Ivar Jacobson", "Sueco")
// creacion de recursos
/*const recurso1 = new Recurso("No puede ser", [autor1])
console.log(typeof(recurso1), recurso1.Titulo)*/
console.log("")
const libro1 = new Libro("Cien Años de Soledad", [autor1], 
    "Oveja Negra", 1967, 458)
console.log("Titulo del",libro1.getTipoRecurso(),":",libro1.Titulo)
for(var x in libro1.getAutores()){
    console.log("Autor:", libro1.getAutores()[x].getNombre(), "(",
    libro1.getAutores()[x].getNacionalidad(),")")    
}
console.log("Editorial",libro1.getEditorial())
console.log("Fecha de Publicación",libro1.getFecha())
console.log("Numero de Paginas",libro1.getNumPaginas())

console.log("")
const libro2 = new Libro("El Lenguaje Unificado de Modelado", 
    [autor2,autor3, autor4],"Pearson", 1999, 432)
console.log("Titulo del",libro2.getTipoRecurso(),":",libro2.Titulo)
for(var x in libro2.getAutores()){
    console.log("Autor:", libro2.getAutores()[x].getNombre(), "(",
    libro2.getAutores()[x].getNacionalidad(),")")    
}
console.log("Editorial",libro2.getEditorial())
console.log("Fecha de Publicación",libro2.getFecha())
console.log("Numero de Paginas",libro2.getNumPaginas())