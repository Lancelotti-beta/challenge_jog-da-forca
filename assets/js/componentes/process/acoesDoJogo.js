import { palavras } from "../utils/palavra.js";
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
    valoresInicias.indice = sortearPalavra(palavras)
    valoresInicias.palavraSecreta = retiraCaracter(palavras[valoresInicias.indice])
    ocultaPalavra(valoresInicias.palavraSecreta)
}

export const resetaJogo = () => {
    valoresInicias.tentativas = 1

    valoresInicias.indice = sortearPalavra(palavras)
    valoresInicias.palavraSecreta = retiraCaracter(palavras[valoresInicias.indice])

    //zerar Canvas

    letras.forEach( botao => {
        botao.style.background = "none"
        botao.style.color = "#343a40"
    })

    ocultaPalavra(valoresInicias.palavraSecreta)
}


