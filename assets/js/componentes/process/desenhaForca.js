import image, {
    $canvas,
    tela
} from "../../canvas.js"

//CONSTRUINDO PARTES DA FORCA
const forca = {
    spriteX: 0,
    spriteY: 0,
    altura: image.forca.naturalHeight,
    largura: image.forca.naturalWidth,
    x: $canvas.width/2 - 150,
    y: $canvas.height/2 - 150,
    desenha(){
        tela.drawImage(
            image.forca,
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
    altura: image.bonecoParteI.naturalHeight,
    largura: image.bonecoParteI.naturalWidth,
    x: $canvas.width/2 + 70,
    y: $canvas.height/3 - 15,
    desenha(){
        tela.drawImage(
            image.bonecoParteI,  
            cabeca.spriteX, cabeca.spriteY, 
            cabeca.largura, cabeca.altura,
            cabeca.x, cabeca.y,
            cabeca.largura, cabeca.altura
        );
    }
}

const tronco = {
    spriteX: 0,
    spriteY: 0,
    altura: image.bonecoParteII.naturalHeight,
    largura: image.bonecoParteII.naturalWidth,
    x: $canvas.width/2 + 105,
    y: $canvas.height/2 - 40,
    desenha(){
        tela.drawImage(
            image.bonecoParteII,  
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
    altura: image.bonecoParteIII.naturalHeight,
    largura: image.bonecoParteIII.naturalWidth,
    x: $canvas.width/3 + 276,
    y: $canvas.height/2 - 30,
    desenha(){
        tela.drawImage(
            image.bonecoParteIII,  
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
    altura: image.bonecoParteIV.naturalHeight,
    largura: image.bonecoParteIV.naturalWidth,
    x: $canvas.width/3 + 242,
    y: $canvas.height/2 - 30,
    desenha(){
        tela.drawImage(
            image.bonecoParteIV,  
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
    altura: image.bonecoParteV.naturalHeight,
    largura: image.bonecoParteV.naturalWidth,
    x: $canvas.width/3 + 276,
    y: $canvas.height - 170,
    desenha(){
        tela.drawImage(
            image.bonecoParteV,  
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
    altura: image.bonecoParteVI.naturalHeight,
    largura: image.bonecoParteVI.naturalWidth,
    x: $canvas.width/3 + 242,
    y: $canvas.height - 170,
    desenha(){
        tela.drawImage(
            image.bonecoParteVI,  
            pernaEsquerda.spriteX, pernaEsquerda.spriteY, 
            pernaEsquerda.largura, pernaEsquerda.altura,
            pernaEsquerda.x, pernaEsquerda.y,
            pernaEsquerda.largura, pernaEsquerda.altura
        );
    }
}

function desenharCanvas(erros){
    forca.desenha();

    switch (erros) {
        case 1:{
            cabeca.desenha();
            break;
        }
        case 2:{
            tronco.desenha();
            break;
        }
        case 3:{
            bracoDireito.desenha();
            break;
        }
        case 4:{
            bracoEsquerdo.desenha();
            break;
        }
        case 5:{
            pernaDireita.desenha();
            break;
        }
        case 6:{
            pernaEsquerda.desenha();
            break;
        }
        default:{
            break;
        }
    }

    requestAnimationFrame(desenharCanvas);
}

export {
    cabeca,
    tronco,
    bracoDireito,
    bracoEsquerdo,
    pernaDireita,
    pernaEsquerda
}

export default desenharCanvas

