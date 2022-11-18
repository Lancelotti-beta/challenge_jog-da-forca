const letras = document.querySelectorAll('[data-letra]');
const popUp = document.querySelector('dialog');

let valoresInicias = {
    tentativas: 1,
    indice: Number,
    palavraSecreta: String
};

export {
    valoresInicias,
    letras,
    popUp
}
