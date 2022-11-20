import modulo  from "../utils/valoresIniciais.js"
import boneco, {
    cabeca,
    tronco,
    bracoDireito,
    bracoEsquerdo,
    pernaDireita,
    pernaEsquerda
} from "../process/desenhaForca.js"
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
    
    if(modulo.valoresInicias.fimDeJogo || letrasErradas.includes(botao) || letrasCorreta.includes(botao)) return

    //if(letrasErradas.includes(botao) || letrasCorreta.includes(botao)) return

    if(modulo.valoresInicias.tentativas != 6){
        validaJogada(palavra, botao);

        palavraDescoberta = organizaPalavraSecreta(palavra, letrasCorreta);
    
        if(palavraSecretaSemEspaco === palavraDescoberta) vitoria(elemento)
    
        console.log(`teste: ${palavraDescoberta}\nstatus: ${palavraSecretaSemEspaco === palavraDescoberta}`);
    }
    
    if(modulo.valoresInicias.tentativas === 6){
        setTimeout(() => {
            derrota(elemento) 
        }, 700)
    } 

}

function validaJogada(palavra, botao){
    if(palavra.includes(botao)){
        document.querySelector(`button[value="${botao}"]`).style.background = "#0a3871";
        document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff";
        letrasCorreta.push(botao);
        mostraPalavra(palavra, botao);
        return
    }
    
    document.querySelector(`button[value="${botao}"]`).style.background = "#343a40";
    document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff";
    letrasErradas.push(botao);
    modulo.valoresInicias.tentativas++;
    verificaErro(modulo.valoresInicias.tentativas);
}

function verificaErro(erro){
    switch (erro) {
        case 1:{
            boneco.bonecoParteI.onload = cabeca.desenha();
            break;
        }
        case 2:{
            boneco.bonecoParteII.onload = tronco.desenha();
            break;
        }
        case 3:{
            boneco.bonecoParteIII.onload = bracoDireito.desenha();
            break;
        }
        case 4:{
            boneco.bonecoParteIV.onload = bracoEsquerdo.desenha();
            break;
        }
        case 5:{
            boneco.bonecoParteV.onload = pernaDireita.desenha();
            break;
        }
        case 6:{
            boneco.bonecoParteVI.onload = pernaEsquerda.desenha();
            break;
        }
        default:{
            break;
        }
    }
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
