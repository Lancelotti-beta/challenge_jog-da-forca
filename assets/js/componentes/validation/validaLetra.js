import modulo  from "../utils/valoresIniciais.js"
import {
    letrasErradas,
    letrasCorreta
} from "../utils/palavra.js"
import {
    mostraPalavra,
    organizaPalavraSecreta
} from "../process/manipulaPalavra.js"

export function verificaBotao(botao, palavra, elemento){
    palavra = palavra.toLowerCase();

    let palavraDescoberta = '';
    let palavraSecretaSemEspaco = palavra.replace(/\s/g, '');
    
    if(modulo.valoresInicias.fimDeJogo) return

    if(letrasErradas.includes(botao) || letrasCorreta.includes(botao)) return

    modulo.valoresInicias.tentativas < 7 ? validaJogada(palavra, botao) : derrota(elemento);

    palavraDescoberta = organizaPalavraSecreta(palavra, letrasCorreta);

    if(palavraSecretaSemEspaco === palavraDescoberta) vitoria(elemento)

    console.log(`teste: ${palavraDescoberta}\nstatus: ${palavraSecretaSemEspaco === palavraDescoberta}`);
}

function validaJogada(palavra, botao){
    if(palavra.includes(botao)){
        document.querySelector(`button[value="${botao}"]`).style.background = "#0a3871";
        document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff";
        letrasCorreta.push(botao);
        mostraPalavra(palavra, botao);
        return
    }
    
    modulo.valoresInicias.tentativas++;
    letrasErradas.push(botao);
    document.querySelector(`button[value="${botao}"]`).style.background = "#343a40";
    document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff";
}

function vitoria(elemento){
    modulo.valoresInicias.fimDeJogo = true
    elemento.querySelector(".caixa--titulo").textContent = "Você venceu!";
    elemento.querySelector(".caixa--menssagem").textContent = "Parabéns! Você descobriu a palavra secreta ^^";
    elemento.querySelector(".pop-up").textContent = "Jogar Novamente";
    elemento.showModal();
}

function derrota(elemento){
    modulo.valoresInicias.fimDeJogo = true
    elemento.querySelector(".caixa--titulo").textContent = "Fim de Jogo";
    elemento.querySelector(".caixa--menssagem").textContent = "Não foi dessa vez . . .";
    elemento.querySelector(".pop-up").textContent = "Reiniciar";
    elemento.showModal();
}
