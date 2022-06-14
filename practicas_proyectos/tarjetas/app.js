// local data
const review = [
  {
    id: 1,
    name: "Jorge Cruz",
    job: "Diseñador Web",
    img: "./foto_jorge",
    text: "Hola soy Jorge, soy técnico en Big Data de profesión y diseñador web de hobby. Me fascina el mundo de la maquetación y codificación, la idea de escribir unas cuantas lineas de código y etiquetas y que éstas se conviertan en un sitio web, con animaciones y funcionalidades. Esa magia digital es la que me maravilla y me motiva a conocer cada vez más hasta donde llega el alcance."
  },
  {
    id: 2,
    name: "Brenda Alvarez",
    job: "Asistente Directivo",
    img: "./foto_brenda",
    text: "Hola a todos, mi nombre es Brenda, tengo mucha experiencia en la administración, ventas, atención al cliente y muchas otras areas. Me gusta conocer personas de todo el mundo, incluso aunque la comunicación sea a través de una red social, una llamada. Mi siguiente objetivo es tener una licenciatura en Pedagogía, buscando tener el tiempo de vivir mi nueva etapa como madre."
  },
  {
    id: 3,
    name: "Abigail Cruz",
    job: "Futura licenciada en...",
    img: "./foto_abigail",
    text: "abla bla bla bla aba bala bas kaka bla bal bla papapa mamama bla bab ba ba bla ba. abla bla bla bla aba bala bas kaka bla bal bla papapa mamama bla bab ba ba bla ba. abla bla bla bla aba bala bas kaka bla bal bla papapa mamama bla bab ba ba bla baabla bla bla bla aba bala bas kaka bla bal bla papapa mamama bla bab ba ba bla baabla bla bla bla aba bala bas kaka bla bal bla papapa mamama bla bab ba ba bla ba."
  },
  {
    id: 4,
    name: "Coco Falconi",
    job: "Perro hogareño",
    img: "./foto_coco",
    text: "wof wof eof grrer wof grrrer wof wof wof wof grrrrrrre wof wof eof grrer wof grrrer wof wof wof wof grrrrrrre wof wof eof grrer wof grrrer wof wof wof wof grrrrrrrewof wof eof grrer wof grrrer wof wof wof wof grrrrrrrewof wof eof grrer wof grrrer wof wof wof wof grrrrrrrewof wof eof grrer wof grrrer wof wof wof wof grrrrrrrewof wof eof grrer wof grrrer wof wof wof wof grrrrrrre."
  }
];

//select items
const img = document.getElementById('foto');
const autor = document.getElementById('autor');
const profesión = document.getElementById('profesión');
const info = document.getElementById('info');

const prev = document.querySelector('.prev_btn');
const next = document.querySelector('.next_btn');

//set initial 