//Forma nomrmal de crear una funcion flecha para la creacion de un objeto

const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    };
};

console.log(crearPersona("Jorge", 28, "Español"))

//Forma concisa

const crearPersona2 = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona2("Coco Flow", 29, "Japones"))