const letras = document.querySelectorAll('[data-letra]');
const popUp = document.querySelector('dialog');

let valoresInicias = {
    tentativas: 1,
    indiceDaPalavra: Number,
    palavraSecreta: String,
    fimDeJogo: Boolean
};

export {
    valoresInicias,
    letras,
    popUp
}
