import { alfabeto } from "module";
import {
    sortearPalavra,
    retiraCaracter,
    ocultaPalavra,
    verificaBotao,
    resetaJogo
} from "module";



const letras = document.querySelectorAll('[data-letra]')
const popUp = document.querySelector('dialog')

let indice
let palavraSecreta = ''


//sessão inicio
document.querySelector('.botao__jogo').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    document.querySelector('.tela__jogo').style.display = 'flex'

    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])

    ocultaPalavra(palavraSecreta)
})

document.querySelector('.botao__configuracao').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    document.querySelector('.tela__configuracao').style.display = 'flex'
})

//sessão da configuração
document.querySelector('.botao__configuracao--jogar').addEventListener('click', e => {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none'
    document.querySelector('.tela__jogo').style.display = 'flex'

    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])

    ocultaPalavra(palavraSecreta)
})

document.querySelector('.botao__configuracao--voltar').addEventListener('click', e => {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none'
    document.querySelector('.tela__inicio').style.display = 'flex'
})

// sessão do Jogo

document.querySelector('.bota__jogo--jogar').addEventListener('click', e => {
    resetaJogo()
})

document.querySelector('.bota__jogo--voltar').addEventListener('click', e => {
    document.querySelector('.tela__jogo-container').parentElement.style.display = 'none'
    document.querySelector('.tela__inicio').style.display = 'flex'
    resetaJogo()
})

//daiog - popUp caso percam 

document.querySelector('.pop-up').addEventListener('click', function() {
    resetaJogo()
    popUp.close()
})

letras.forEach(letra => {
    letra.addEventListener ('click', (e) => {
        verificaBotao(e.target.value, palavraSecreta)
    })
})

window.addEventListener('keydown', function(event) {
   
    let tecla = event.key

    const chave = alfabeto.includes(tecla)
    if(!chave){
        return
    }

    verificaBotao(tecla, palavraSecreta)
})




