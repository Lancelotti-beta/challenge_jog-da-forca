import { caracterEspecial } from "./caracter.js";
import {
    palavras,
    letrasClicadas
} from "./palavra.js";

const letras = document.querySelectorAll('[data-letra]')

let indice
let tentativas = 1
let palavraSecreta = ''

function sortearPalavra(array) {
    return Math.floor(Math.random() * array.length)
}

function retiraCaracter(palavra){
    let palavraSemCaracteres = ''
    palavra.split('').forEach(letra => {
        palavraSemCaracteres = palavra.replaceAll(/[áàãâÁÀÃÂéèêÉÈÊíìîÍÌÎóòõôÓÒÕÔñÑ]/g, (letra) => {
            return caracterEspecial[letra]
        })
    })

    return palavraSemCaracteres
}

function ocultaPalavra(palavra){
    const localDaPalavra = document.querySelector('.tela__jogo-letras')
    const palavraOculta = palavra.split('').map((letras, i) => {
        return `
            <span class="letra--secreta">${letras.replace(palavra.charAt(i), letra => {
                if(letra.indexOf(' ') >= 0){
                    return ' &nbsp '
                }
                return ' _ '
            })}</span>
        `
    }).join('')

    localDaPalavra.innerHTML = `
        ${palavraOculta}
    `
}

function mostraPalavra(palavras, str){
    const letra = document.querySelectorAll('.letra--secreta')
    palavras.split('').forEach((palavra, i, arrayPalavra) => { 

        if(arrayPalavra[i] === str){
            letra[i].innerHTML = str
        }
    })

}

function verificaBotao(botao, palavra, elemento){
    palavra = palavra.toLowerCase()
    
    //palavra === letra.innerText ? vitoria(elemento) :

    tentativas <= 6 ? validaJogada(palavra, botao) : derrota(elemento)
}

function validaJogada(palavra, botao){
    if(palavra.includes(botao)){
        document.querySelector(`button[value="${botao}"]`).style.background = "#0a3871"
        document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff"
        mostraPalavra(palavra, botao)
        return
    }

    tentativas++
    document.querySelector(`button[value="${botao}"]`).style.background = "#343a40"
    document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff"
}

function iniciaJogo() {
    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])
    console.log(`Palavra:\n${palavraSecreta}`)
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
    //validaCliqueDoBotao()
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