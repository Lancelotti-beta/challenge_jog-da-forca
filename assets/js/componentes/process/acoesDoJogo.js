import desenha, {
    $canvas,
    tela 
} from "./desenhaForca.js";
import {
    palavras,
    letrasCorreta,
    letrasErradas 
} from "../utils/palavra.js";
import modulo from "../utils/valoresIniciais.js";
import {
    retiraCaracter,
    ocultaPalavra
} from "./manipulaPalavra.js";


function sortearPalavra(array) {
    return Math.floor(Math.random() * array.length)
}

export const iniciaJogo = () => {
    modulo.valoresInicias.fimDeJogo = false;
    modulo.valoresInicias.indiceDaPalavra = sortearPalavra(palavras);
    modulo.valoresInicias.palavraSecreta = retiraCaracter(palavras[modulo.valoresInicias.indiceDaPalavra]);

    desenha.desenharCanvas()

    ocultaPalavra(modulo.valoresInicias.palavraSecreta);
}

export const resetaJogo = () => {
    modulo.valoresInicias.fimDeJogo = false;
    modulo.valoresInicias.tentativas = 0;

    letrasCorreta.length = 0;
    letrasErradas.length = 0;

    //zerar Canvas
    tela.fillStyle = "#F3F5FC";
    tela.strokeStyle = "#0A3871";
    tela.fillRect(0, 0, $canvas.width, $canvas.height);
    desenha.desenharCanvas();

    modulo.valoresInicias.indiceDaPalavra = sortearPalavra(palavras);
    modulo.valoresInicias.palavraSecreta = retiraCaracter(palavras[modulo.valoresInicias.indiceDaPalavra]);

    modulo.letras.forEach( botao => {
        botao.style.background = "none"
        botao.style.color = "#343a40"
    });

    ocultaPalavra(modulo.valoresInicias.palavraSecreta);
}


