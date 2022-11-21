
//INICIANDO CANVAS
const $canvas = document.querySelector('canvas');
const tela = $canvas.getContext('2d');

//CARREGANDO IMAGENS
const forcaSVG = new Image();
forcaSVG.src = "../../assets/img/forca_forca.svg";

const cabecaSVG = new Image();
cabecaSVG.src = "../../assets/img/cabeca_boneco.svg";

const troncoSVG = new Image();
troncoSVG.src = "../../assets/img/tronco_boneco.svg";

const bracoDireitoSVG = new Image();
bracoDireitoSVG.src = "../../assets/img/bracoDireito_boneco.svg";

const bracoEsquerdoSVG = new Image();
bracoEsquerdoSVG.src = "../../assets/img/bracoEsquerdo_boneco.svg";

const pernaDireitaSVG = new Image();
pernaDireitaSVG.src = "../../assets/img/pernaDireita_boneco.svg";

const pernaEsquerdaSVG = new Image();
pernaEsquerdaSVG.src = "../../assets/img/pernaEsquerda_boneco.svg";


export {
    $canvas,
    tela
}

export default {
    forca: forcaSVG,
    bonecoParteI: cabecaSVG,
    bonecoParteII: troncoSVG,
    bonecoParteIII: bracoDireitoSVG,
    bonecoParteIV: bracoEsquerdoSVG,
    bonecoParteV: pernaDireitaSVG,
    bonecoParteVI: pernaEsquerdaSVG
}