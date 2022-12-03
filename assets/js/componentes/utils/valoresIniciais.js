const $letras = document.querySelectorAll('[data-letra]');
const $localDaPalavraSecreta = document.querySelector('.tela__jogo-letras');
const $popUp = document.querySelector('dialog');

let valoresInicias = {
    tentativas: 0,
    palavraSalva: false,
    indiceDaPalavra: Number,
    palavraSecreta: String,
    fimDeJogo: Boolean
};

export default {
    valoresInicias,
    letras: $letras,
    localDaPalavra: $localDaPalavraSecreta,
    popUp: $popUp
}
