// Se pueden agregar funciones dentro de objetos, por ejemplo

//Metodo tracicional

const persona = {
    nombre: "Isabel",
    presentarse: function() {
        return `¡Hola! Mi nombre es ${this.nombre}.` 
    }
};

console.log(persona.presentarse());

//Metodo conciso

const persona2 = {
    nombre: "Coco Flow",
    presentar() { //se escribe directamente el nombre dela funcion
        return `¡Hola! Mi nombre es ${this.nombre}.` 
    }
};

console.log(persona2.presentar());