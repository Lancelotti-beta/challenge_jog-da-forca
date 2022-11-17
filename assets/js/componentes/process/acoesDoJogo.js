import { palavras } from "../utils/palavra.js";
import tentativas, { 
    letras,
    indice,
    palavraSecreta 
} from "../utils/valoresIniciais.js";
import retiraCaracter from "./manipulaPalavra.js";
import ocultaPalavra from "./manipulaPalavra.js";


function sortearPalavra(array) {
    return Math.floor(Math.random() * array.length)
}

const iniciaJogo = () => {
    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])
    ocultaPalavra(palavraSecreta)
}

const resetaJogo = () => {
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


export default {
    iniciaJogo,
    resetaJogo
}