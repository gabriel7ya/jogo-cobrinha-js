let canvas = document.getElementById("snake");
console.log(canvas);
let context = canvas.getContext("2d");
let box = 32;

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();