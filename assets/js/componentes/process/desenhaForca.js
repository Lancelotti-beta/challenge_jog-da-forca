import { canvas } from "../utils/valoresIniciais.js"

const $canvas = document.querySelector('canvas')
const tela = $canvas.getContext('2d')

function desenharCanvas(){

    tela.fillStyle = "#F3F5FC";
    tela.strokeStyle = "#0A3871";

    tela.fillRect(canvas.eixoX, canvas.eixoY, canvas.largura, canvas.altura);
    tela.beginPath();
    tela.moveTo(canvas.largura/2, 500);
    tela.lineTo(canvas.altura/2, 500);
    tela.stroke();
    tela.closePath();
}

export default desenharCanvas
