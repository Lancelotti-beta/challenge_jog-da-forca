import { canvas } from "../utils/valoresIniciais.js"

const $canvas = document.querySelector('canvas')
const tela = $canvas.getContext('2d')

function desenharCanvas(){

    tela.fillStyle = "#F3F5FC";
    tela.strokeStyle = "#0A3871";

    tela.fillRect(canvas.eixoX, canvas.eixoY, canvas.largura, canvas.altura);
    tela.beginPath();
    tela.moveTo(900, 500);
    tela.lineTo(650, 500);
    tela.stroke();
    tela.closePath();
}

export default desenharCanvas
