class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
}

var zeus = new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);
