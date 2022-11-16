import { palavras } from "../utils/palavra.js";
import tentativas, { 
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

function iniciaJogo() {
    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])
    ocultaPalavra(palavraSecreta)
}

function resetaJogo(){
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


function vitoria(elemento){
    elemento.querySelector(".caixa--titulo").textContent = "Você venceu!"
    elemento.querySelector(".caixa--menssagem").textContent = "Parabéns! Você descobriu a palavra secreta ^^"
    elemento.querySelector(".pop-up").textContent = "Reiniciar"
    elemento.showModal()
}

function derrota(elemento){
    elemento.querySelector(".caixa--titulo").textContent = "Fim de Jogo"
    elemento.querySelector(".caixa--menssagem").textContent = "Não foi dessa vez . . ."
    elemento.querySelector(".pop-up").textContent = "Reiniciar"
    elemento.showModal()
}
