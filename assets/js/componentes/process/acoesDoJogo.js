import { palavras } from "../utils/palavra.js";
import {
    tentativas,
    letras,
    indice,
    palavraSecreta
} from "../utils/valoresIniciais.js";
import {
    retiraCaracter,
    ocultaPalavra
} from "./manipulaPalavra.js";


function sortearPalavra(array) {
    return Math.floor(Math.random() * array.length)
}

export const iniciaJogo = () => {
    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])
    ocultaPalavra(palavraSecreta)
}

export const resetaJogo = () => {
    tentativas = 1

    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])

    //zerar Canvas

    letras.forEach( botao => {
        botao.style.background = "none"
        botao.style.color = "#343a40"
    })

    ocultaPalavra(palavraSecreta)
}


