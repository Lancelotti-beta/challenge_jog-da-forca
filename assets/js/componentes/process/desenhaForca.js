import modulo  from "../utils/valoresIniciais.js"

const $canvas = document.querySelector('canvas')
const tela = $canvas.getContext('2d')

function desenharCanvas(){
    const imagem = new Image();
    imagem.src = "../../assets/img/forca_forca.svg";
    imagem.onload = desenhaForca;
}

function desenhaForca(){
    modulo.canvas.largura = this.naturalWidth;
    modulo.canvas.altura = this.naturalHeight;

    tela.drawImage(this,  modulo.canvas.largura/2, modulo.canvas.altura/2, this.largura, this.altura);
}

export default desenharCanvas
