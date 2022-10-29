import { alfabeto } from "./componentes/caracter.js";
import { palavras } from "./componentes/palavra.js";
import {
    indice,
    palavraSecreta,
    sortearPalavra,
    retiraCaracter,
    ocultaPalavra,
    verificaBotao,
    resetaJogo
} from "./componentes/baseJogo.js";



const letras = document.querySelectorAll('[data-letra]')
const popUp = document.querySelector('dialog')

export function ativaBotao(botao) {
    let botaoSelecionado = botao.dataset.button

    if(buttons[botaoSelecionado]){
        buttons[botaoSelecionado](botao)
    }
}

const buttons =  {
    jogar: e => jogar(e),
    configura: e => configuracao(e),
    salvar: e => salvarConfiguracao(e),
    voltar: e => voltarAoInicio(e),
    jogarNovamente: jogarNovamente,
    desistir: sair,
    reiniciar: fecharDialog
}


//sessão inicio
function jogar(e) {
    e.parentElement.style.display = 'none'
    document.querySelector('.tela__jogo').style.display = 'flex'

    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])

    ocultaPalavra(palavraSecreta)
}

function configuracao(e) {
    e.parentElement.style.display = 'none'
    document.querySelector('.tela__configuracao').style.display = 'flex'
}

//sessão da configuração
function salvarConfiguracao(e) {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none'
    document.querySelector('.tela__jogo').style.display = 'flex'

    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])

    ocultaPalavra(palavraSecreta)
}

function voltarAoInicio(e) {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none'
    document.querySelector('.tela__inicio').style.display = 'flex'
}

// sessão do Jogo
function jogarNovamente() {
    resetaJogo()
}

function sair() {
    document.querySelector('.tela__jogo-container').parentElement.style.display = 'none'
    document.querySelector('.tela__inicio').style.display = 'flex'
    resetaJogo()
}

//daiog - popUp caso percam 
function fecharDialog() {
    resetaJogo()
    popUp.close()
}

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




