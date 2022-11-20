
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


//INICIANDO CANVAS
const $canvas = document.querySelector('canvas')
const tela = $canvas.getContext('2d')

//CONSTRUINDO PARTES DA FORCA
const forca = {
    spriteX: 0,
    spriteY: 0,
    altura: forcaSVG.naturalHeight,
    largura: forcaSVG.naturalWidth,
    x: $canvas.width/2 - 150,
    y: $canvas.height/2 - 150,
    desenha(){
        tela.drawImage(
            forcaSVG,  
            forca.spriteX, forca.spriteY, 
            forca.largura, forca.altura,
            forca.x, forca.y,
            forca.largura, forca.altura
        );
    }

}

const cabeca = {
    spriteX: 0,
    spriteY: 0,
    altura: cabecaSVG.naturalHeight,
    largura: cabecaSVG.naturalWidth,
    x: $canvas.width/2 + 70,
    y: $canvas.height/3 - 15,
    desenha(){
        tela.drawImage(
            cabecaSVG,  
            cabeca.spriteX, cabeca.spriteY, 
            cabeca.largura, cabeca.altura,
            cabeca.x, cabeca.y,
            cabeca.largura, cabeca.altura
        );
    }
}

/*

const tronco = {
    spriteX: 0,
    spriteY: 0,
    altura: troncoSVG.naturalHeight,
    largura: troncoSVG.naturalWidth,
    x: $canvas.width/2 - 200,
    y: $canvas.height/2 - 200,
    desenha(){
        tela.drawImage(
            troncoSVG,  
            tronco.spriteX, tronco.spriteY, 
            tronco.largura, tronco.altura,
            tronco.x, tronco.y,
            tronco.largura, tronco.altura
        );
    }
}

const bracoDireito = {
    spriteX: 0,
    spriteY: 0,
    altura: bracoDireitoSVG.naturalHeight,
    largura: bracoDireitoSVG.naturalWidth,
    x: $canvas.width/2 - 200,
    y: $canvas.height/2 - 200,
    desenha(){
        tela.drawImage(
            bracoDireitoSVG,  
            bracoDireito.spriteX, bracoDireito.spriteY, 
            bracoDireito.largura, bracoDireito.altura,
            bracoDireito.x, bracoDireito.y,
            bracoDireito.largura, bracoDireito.altura
        );
    }
}

const bracoEsquerdo = {
    spriteX: 0,
    spriteY: 0,
    altura: bracoEsquerdoSVG.naturalHeight,
    largura: bracoEsquerdoSVG.naturalWidth,
    x: $canvas.width/2 - 200,
    y: $canvas.height/2 - 200,
    desenha(){
        tela.drawImage(
            bracoEsquerdoSVG,  
            bracoEsquerdo.spriteX, bracoEsquerdo.spriteY, 
            bracoEsquerdo.largura, bracoEsquerdo.altura,
            bracoEsquerdo.x, bracoEsquerdo.y,
            bracoEsquerdo.largura, bracoEsquerdo.altura
        );
    }
}

const pernaDireita = {
    spriteX: 0,
    spriteY: 0,
    altura: pernaDireitaSVG.naturalHeight,
    largura: pernaDireitaSVG.naturalWidth,
    x: $canvas.width/2 - 200,
    y: $canvas.height/2 - 200,
    desenha(){
        tela.drawImage(
            pernaDireitaSVG,  
            pernaDireita.spriteX, pernaDireita.spriteY, 
            pernaDireita.largura, pernaDireita.altura,
            pernaDireita.x, pernaDireita.y,
            pernaDireita.largura, pernaDireita.altura
        );
    }
}

const pernaEsquerda = {
    spriteX: 0,
    spriteY: 0,
    altura: pernaEsquerdaSVG.naturalHeight,
    largura: pernaEsquerdaSVG.naturalWidth,
    x: $canvas.width/2 - 200,
    y: $canvas.height/2 - 200,
    desenha(){
        tela.drawImage(
            pernaEsquerdaSVG,  
            pernaEsquerda.spriteX, pernaEsquerda.spriteY, 
            pernaEsquerda.largura, pernaEsquerda.altura,
            pernaEsquerda.x, pernaEsquerda.y,
            pernaEsquerda.largura, pernaEsquerda.altura
        );
    }
}
*/

function desenharCanvas(){
    forcaSVG.onload = forca.desenha();

    cabecaSVG.onload = cabeca.desenha();

    //troncoSVG.onload = tronco.desenha();

    //bracoDireitoSVG.onload = bracoDireito.desenha();
    //bracoEsquerdoSVG.onload = bracoEsquerdo.desenha();

    //pernaDireitaSVG.onload = pernaDireita.desenha();
    //pernaEsquerdaSVG.onload = pernaEsquerda.desenha();
}


export default desenharCanvas
