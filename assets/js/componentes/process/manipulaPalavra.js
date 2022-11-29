import modulo from "../utils/valoresIniciais.js"
import {
    regExp,
    caracterEspecial
} from "../utils/caracter.js"

function retiraCaracter({ palavra }){
    let palavraSemCaracteres = '';
    palavra.split('').forEach(letra => {
        palavraSemCaracteres = palavra.replaceAll(regExp, (letra) => {
            return caracterEspecial[letra]
        });
    });

    return palavraSemCaracteres
}

function ocultaPalavra(palavra, { dica }){
    console.log(palavra)
    const palavraOculta = palavra.split('').map((letras, i) => {
        return `
            <span class="letra--secreta">${letras.replace(palavra.charAt(i), letra => {
                if(letra.indexOf(' ') >= 0){
                    return ' &nbsp '
                }
                return ' _ '
            })}</span>
        `;
    }).join('');

    modulo.localDaPalavra.innerHTML = `
        <h3>
            ${palavraOculta}
        </h3>
        <p class="letra--dica">${dica}</p>
    `;
}

function mostraPalavra( palavras, str){
    const $letra = document.querySelectorAll('.letra--secreta');
    palavras.split('').forEach((palavra, i, arrayPalavra) => { 

        if(arrayPalavra[i] === str){
            $letra[i].innerHTML = str;
        }
    });

}

function organizaPalavraSecreta( palavra, palavraCorretaDesordenada) {
    let palavraOrganizada = '';
    let trasfromaPlavraEmArray = palavra.split('');

    palavraOrganizada = trasfromaPlavraEmArray.map((palavras) => {
        return palavraCorretaDesordenada.find((letra) => {
            return letra === palavras
        });
    }).join('');

    return palavraOrganizada
}

export {
    retiraCaracter,
    ocultaPalavra,
    mostraPalavra,
    organizaPalavraSecreta
}