const letras = document.querySelectorAll('[data-letra]');
const popUp = document.querySelector('dialog');

const canvas = {
    largura: 1200,
    altura: 800,
    eixoX: 0,
    eixoY: 0
}


let valoresInicias = {
    tentativas: 1,
    indiceDaPalavra: Number,
    palavraSecreta: String,
    fimDeJogo: Boolean
};

export {
    valoresInicias,
    canvas,
    letras,
    popUp
}
