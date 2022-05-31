const colores = ["Green", "Red", "Blue", "Pink", "Yellow", "Violet", "Aqua", "Brown", "Gray", "Gold"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandonNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colores[randomNumber];
    color.textContent = colores[randomNumber];
});

function getRandonNumber() {
    return Math.floor(Math.random() * colores.length)
    ;
}