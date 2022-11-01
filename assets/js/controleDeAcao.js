import {
    iniciaJogo,
    resetaJogo
} from "./componentes/baseJogo.js";

const popUp = document.querySelector('dialog')

const buttons =  {
    jogar: e => jogar(e),
    configura: e => configuracao(e),
    salvar: e => salvarConfiguracao(e),
    voltar: e => voltarAoInicio(e),
    jogarNovamente: jogarNovamente,
    desistir: sair,
    reiniciar: fecharDialog
}

function ativaBotao(botao) {
    let botaoSelecionado = botao.dataset.button

    if(buttons[botaoSelecionado]){
        buttons[botaoSelecionado](botao)
    }
}

//sessão inicio
function jogar(e) {
    e.parentElement.style.display = 'none'
    document.querySelector('.tela__jogo').style.display = 'flex'
    iniciaJogo()
}

function configuracao(e) {
    e.parentElement.style.display = 'none'
    document.querySelector('.tela__configuracao').style.display = 'flex'
}

//sessão da configuração
function salvarConfiguracao(e) {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none'
    document.querySelector('.tela__jogo').style.display = 'flex'
    iniciaJogo()
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

export {
    ativaBotao,
    popUp
}