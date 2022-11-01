import { 
    retiraCaracter,
    mostraPalavra, 
    ocultaPalavra 
} from "./manipulaPalavra.js";
import {
    palavras,
    letrasErradas,
    letrasCorreta
} from "./palavra.js";

let indice
let tentativas = 1
let palavraSecreta = ''

const letras = document.querySelectorAll('[data-letra]')


function sortearPalavra(array) {
    return Math.floor(Math.random() * array.length)
}

function verificaBotao(botao, palavra, elemento){
    palavra = palavra.toLowerCase()

    //palavra ===  ? vitoria(elemento) :
    
    if(letrasErradas.includes(botao) || letrasCorreta.includes(botao)) return

    tentativas < 7 ? validaJogada(palavra, botao) : derrota(elemento)
}

function validaJogada(palavra, botao){
    if(palavra.includes(botao)){
        document.querySelector(`button[value="${botao}"]`).style.background = "#0a3871"
        document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff"
        letrasCorreta.push(botao)
        mostraPalavra(palavra, botao)
        return
    }
    
    tentativas++
    letrasErradas.push(botao)
    document.querySelector(`button[value="${botao}"]`).style.background = "#343a40"
    document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff"
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

export {
    letras,
    palavraSecreta,
    iniciaJogo,
    verificaBotao,
    resetaJogo
}