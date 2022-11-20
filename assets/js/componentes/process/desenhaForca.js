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
    
    tela.drawImage(this,  modulo.canvas.largura/3, modulo.canvas.altura/4, this.naturalWidth, this.naturalHeight);
}

function desenhaCabeca(){
    const parte = new Image();
    parte.src = "../../assets/img/cabeca_boneco.svg";
    parte.onload = null;

    //tela.drawImage(this,  modulo.canvas.largura/3, modulo.canvas.altura/4, this.naturalWidth, this.naturalHeight);
}
function desenhaTronco(){
    const parte = new Image();
    parte.src = "../../assets/img/tronco_boneco.svg";
    parte.onload = null;

    //tela.drawImage(this,  modulo.canvas.largura/3, modulo.canvas.altura/4, this.naturalWidth, this.naturalHeight);
}
function desenhaBracoDireito(){
    const parte = new Image();
    parte.src = "../../assets/img/bracoDireito_boneco.svg";
    parte.onload = null;

    //tela.drawImage(this,  modulo.canvas.largura/3, modulo.canvas.altura/4, this.naturalWidth, this.naturalHeight);
}
function desenhaBracoEsquerdo(){
    const parte = new Image();
    parte.src = "../../assets/img/bracoEsquerdo_boneco.svg";
    parte.onload = null;

    //tela.drawImage(this,  modulo.canvas.largura/3, modulo.canvas.altura/4, this.naturalWidth, this.naturalHeight);
}
function desenhaPernaDireita(){
    const parte = new Image();
    parte.src = "../../assets/img/pernaDireita_boneco.svg";
    parte.onload = null;

    //tela.drawImage(this,  modulo.canvas.largura/3, modulo.canvas.altura/4, this.naturalWidth, this.naturalHeight);
}
function desenhaPernaEsquerda(){
    const parte = new Image();
    parte.src = "../../assets/img/pernaEsquerda_boneco.svg";
    parte.onload = null;

    //tela.drawImage(this,  modulo.canvas.largura/3, modulo.canvas.altura/4, this.naturalWidth, this.naturalHeight);
}

export default desenharCanvas
