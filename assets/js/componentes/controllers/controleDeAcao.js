import modulo from "../utils/valoresIniciais.js";
import { palavras } from "../utils/palavra.js";
import { iniciarJogo } from "../process/acoesDoJogo.js";
import { adicionaPalavraNaLista } from "../process/adicionaPalavraNaLista.js";

export default function ativaBotaos(botao) {
    let botaoSelecionado = botao.dataset.button;

    if (buttons[botaoSelecionado]) {
        buttons[botaoSelecionado](botao);
    }
}

const buttons = {
    jogar: e => jogar(e),
    configura: e => configuracao(e),
    salvar: (e) => salvarConfiguracao(e),
    voltar: e => voltarAoInicio(e),
    jogarNovamente: e => jogarNovamente(),
    desistir: e => sair(),
    reiniciar: e => fecharDialog()
}


//sessão inicio
const jogar = (e) => {
    e.parentElement.style.display = 'none';
    document.querySelector('.tela__jogo').style.display = 'flex';
    iniciarJogo();
}

const configuracao = (e) => {
    e.parentElement.style.display = 'none';
    document.querySelector('.tela__configuracao').style.display = 'flex';
}

//sessão da configuração
const salvarConfiguracao = (e) => {
    let inputPalavra = modulo.inputs[0];
    let inputDica = modulo.inputs[1];

    if (inputPalavra.validity.valid && inputDica.validity.valid) {
        let novaPalavraSecreta = {
            "palavra": inputPalavra.value,
            "dica": inputDica.value
        };

        adicionaPlavraNaLista(novaPalavraSecreta);
        
        inputPalavra.value = "";
        inputDica.value = "";

        document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none';
        document.querySelector('.tela__jogo').style.display = 'flex';
        iniciarJogo();
    }

    console.log(palavras)
}

const voltarAoInicio = (e) => {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none';
    document.querySelector('.tela__inicio').style.display = 'flex';
}

// sessão do Jogo
const jogarNovamente = () => {
    iniciarJogo();
}

const sair = () => {
    document.querySelector('.tela__jogo-container').parentElement.style.display = 'none';
    document.querySelector('.tela__inicio').style.display = 'flex';
    iniciarJogo();
}

//daiog - popUp caso percam 
const fecharDialog = () => {
    iniciarJogo();
    modulo.popUp.close();
}
