import modulo  from "../utils/valoresIniciais.js"

const $canvas = document.querySelector('canvas')
const tela = $canvas.getContext('2d')

function desenharCanvas(){
    const imagem = new Image();
    imagem.src = "../../assets/img/forca_forca.svg";
    imagem.onload = desenhaForca;
}

function desenhaForca(){
    console.log(`Isso é o THIS :\n${this.naturalWidth}\nEsse é o Objeto Canvas:\n${modulo.canvas.largura}`)
    console.log(`Isso é o THIS :\n${this.naturalHeight}\nEsse é o Objeto Canvas:\n${modulo.canvas.altura}`)

    //modulo.canvas.largura = this.naturalWidth;
    //modulo.canvas.altura = this.naturalHeight;

    tela.drawImage(this,  modulo.canvas.largura/3, modulo.canvas.altura/4, this.naturalWidth, this.naturalHeight);
}

export default desenharCanvas
