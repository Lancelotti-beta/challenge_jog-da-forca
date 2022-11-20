import modulo from "../utils/valoresIniciais.js";
import {
    iniciaJogo,
    resetaJogo
} from "../process/acoesDoJogo.js";

export default function ativaBotaos(botao) {
    let botaoSelecionado = botao.dataset.button;

    if(buttons[botaoSelecionado]){
        buttons[botaoSelecionado](botao);
    }
}

const buttons =  {
    jogar: e => jogar(e),
    configura: e => configuracao(e),
    salvar: e => salvarConfiguracao(e),
    voltar: e => voltarAoInicio(e),
    jogarNovamente: e => jogarNovamente(),
    desistir: e => sair(),
    reiniciar: e => fecharDialog()
}


//sessão inicio
const jogar = (e) => {
    e.parentElement.style.display = 'none';
    document.querySelector('.tela__jogo').style.display = 'flex';
    iniciaJogo();
}

const configuracao = (e) => {
    e.parentElement.style.display = 'none';
    document.querySelector('.tela__configuracao').style.display = 'flex';
}

//sessão da configuração
const salvarConfiguracao = (e) => {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none';
    document.querySelector('.tela__jogo').style.display = 'flex';
    iniciaJogo();
}

const voltarAoInicio = (e) => {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none';
    document.querySelector('.tela__inicio').style.display = 'flex';
}

// sessão do Jogo
const jogarNovamente = () => {
    resetaJogo();
}

const sair = () => {
    document.querySelector('.tela__jogo-container').parentElement.style.display = 'none';
    document.querySelector('.tela__inicio').style.display = 'flex';
    resetaJogo();
}

//daiog - popUp caso percam 
const fecharDialog = () => {
    resetaJogo();
    modulo.popUp.close();
}


