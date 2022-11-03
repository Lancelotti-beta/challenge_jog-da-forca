import {
    letrasErradas,
    letrasCorreta
} from "./palavra.js"
import { 
    mostraPalavra,
    organizaPalavraSecreta
} from "./manipulaPalavra.js"
import { tentativas } from "./baseJogo.js"

let palavraDescoberta = ''

function verificaBotao(botao, palavra, elemento){
    palavra = palavra.toLowerCase()

    //palavra === palavraDescoberta ? vitoria(elemento) :
    
    if(letrasErradas.includes(botao) || letrasCorreta.includes(botao)) return

    tentativas < 7 ? validaJogada(palavra, botao) : derrota(elemento)

    palavraDescoberta = organizaPalavraSecreta(palavra, letrasCorreta)
    console.log(`teste:\n${palavraDescoberta}`)
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

export {
    verificaBotao,
    validaJogada
}
