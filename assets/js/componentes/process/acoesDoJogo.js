import { 
    palavras,
    letrasCorreta,
    letrasErradas 
} from "../utils/palavra.js";
import { 
    valoresInicias,
    letras 
} from "../utils/valoresIniciais.js";
import {
    retiraCaracter,
    ocultaPalavra
} from "./manipulaPalavra.js";


function sortearPalavra(array) {
    return Math.floor(Math.random() * array.length)
}

export const iniciaJogo = () => {
    valoresInicias.indice = sortearPalavra(palavras);
    valoresInicias.palavraSecreta = retiraCaracter(palavras[valoresInicias.indice]);
    ocultaPalavra(valoresInicias.palavraSecreta);
}

export const resetaJogo = () => {

    valoresInicias.tentativas = 1;
    letrasCorreta.length = 0;
    letrasErradas.length = 0;

    //zerar Canvas

    valoresInicias.indice = sortearPalavra(palavras);
    valoresInicias.palavraSecreta = retiraCaracter(palavras[valoresInicias.indice]);

    letras.forEach( botao => {
        botao.style.background = "none"
        botao.style.color = "#343a40"
    });

    ocultaPalavra(valoresInicias.palavraSecreta);
}


