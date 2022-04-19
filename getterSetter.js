// los getter y setter son intermediarios que ayudan con el manejo de propiedades privadas (_propiedad) que se buscan cuidar de sobreescrtura o modificacion etc.

class Libro {
    constructor(autor) {
        this._autor = autor;
    }

    get autor() {
        return this._autor;
    }

    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }
}

const libro = new Libro("anónimo");
console.log(libro.autor);

libro.autor = "CocoFlow"
console.log(libro.autor);