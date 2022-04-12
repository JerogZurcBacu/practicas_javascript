var miAgenda = [
    {
        "nombre": "Jorge",
        "aplellido": "Cruz",
        "numero": "5584986915",
        "gustos": ["futbol", "high"]
    },
    {
        "nombre": "Brenda",
        "aplellido": "Alvarez",
        "numero": "5527407943",
        "gustos": ["comida", "dormir"]
    },
    {
        "nombre": "Abigail",
        "aplellido": "Cruz",
        "numero": "5557407943",
        "gustos": ["jugar", "baño"]
    },
];

function buscarAgenda (nombre, propiedad) {
    for (i = 0; i < miAgenda.length; i++) {
        if (miAgenda[i].nombre === nombre) {
            return miAgenda[i][propiedad] || "Esta propiedad no existe";
        }
    }
    console.log("Este contacto no existe");
};

console.log(buscarAgenda("Jorge", "numero"));
console.log(buscarAgenda("Brenda", "aplellido"));
console.log(buscarAgenda("Abigail", "gustos"));

