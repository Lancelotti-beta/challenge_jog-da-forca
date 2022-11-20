const $canvas = document.querySelector('canvas')
const tela = $canvas.getContext('2d')

function desenharCanvas(){
    console.log(tela.lineWidth)
    console.log(tela)

    tela.fillStyle = "#F3F5FC";
    tela.strokeStyle = "#0A3871";

    tela.fillRect(0, 0, 1200, 800);
    tela.beginPath();
    tela.moveTo(900, 500);
    tela.lineTo(650, 500);
    tela.stroke();
    tela.closePath();
}

export default desenharCanvas
