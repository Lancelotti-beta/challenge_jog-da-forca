import desenharCanvas from "../process/desenhaForca.js"
import modulo  from "../utils/valoresIniciais.js"
import {
    letrasErradas,
    letrasCorreta
} from "../utils/palavra.js"
import {
    mostraPalavra,
    organizaPalavraSecreta
} from "../process/manipulaPalavra.js"

export function verificaBotao(botao,  palavra, elemento) {
    palavra = palavra.toLowerCase();

    let palavraDescoberta = '';
    let palavraSecretaSemEspaco = palavra.replace(/\s/g, '');
    
    if((modulo.valoresInicias.fimDeJogo)|| 
        (letrasErradas.includes(botao)) || 
        (letrasCorreta.includes(botao))
    ) return

    //if(letrasErradas.includes(botao) || letrasCorreta.includes(botao)) return

    if(modulo.valoresInicias.tentativas != 6){
        
        validaJogada(palavra, botao);
        palavraDescoberta = organizaPalavraSecreta(palavra, letrasCorreta);
        
        if(palavraSecretaSemEspaco === palavraDescoberta) setTimeout(() => vitoria(elemento), 1000)
    
        console.log(`teste: ${palavraDescoberta}\nstatus: ${palavraSecretaSemEspaco === palavraDescoberta}`);
    }
    
    if(modulo.valoresInicias.tentativas === 6){
        setTimeout(() => {
            derrota(elemento) 
        }, 1000)
    } 

}

function validaJogada( palavra, botao){
    if(palavra.includes(botao)){
        document.querySelector(`button[value="${botao}"]`).style.background = "#0a3871";
        document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff";
        letrasCorreta.push(botao);
        mostraPalavra(palavra, botao);
        return
    }

    document.querySelector(".tela--erros").innerHTML += `
        <span class="tela--erros-letra">${botao.toUpperCase()}</span>
    `
    document.querySelector(`button[value="${botao}"]`).style.background = "#343a40";
    document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff";
    letrasErradas.push(botao);
    modulo.valoresInicias.tentativas++;
    desenharCanvas(modulo.valoresInicias.tentativas);
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

