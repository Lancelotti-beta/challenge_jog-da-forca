const $inputs = document.querySelectorAll('.tela__configuracao-campo-texto');
const $letras = document.querySelectorAll('[data-letra]');
const $localDaPalavraSecreta = document.querySelector('.tela__jogo-letras');
const $popUp = document.querySelector('dialog');

let valoresInicias = {
    tentativas: 0,
    indiceDaPalavra: Number,
    palavraSecreta: String,
    fimDeJogo: Boolean
};

export default {
    valoresInicias,
    letras: $letras,
    localDaPalavra: $localDaPalavraSecreta,
    inputs: $inputs,
    popUp: $popUp
}
