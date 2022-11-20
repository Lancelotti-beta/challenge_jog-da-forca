const $letras = document.querySelectorAll('[data-letra]');
const $popUp = document.querySelector('dialog');

const canvas = {
    largura: 1024,
    altura: 520,
    eixoX: 0,
    eixoY: 0
}


let valoresInicias = {
    tentativas: 1,
    indiceDaPalavra: Number,
    palavraSecreta: String,
    fimDeJogo: Boolean
};

export default {
    valoresInicias,
    canvas,
    letras: $letras,
    popUp: $popUp
}
