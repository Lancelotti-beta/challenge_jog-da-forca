import {
    $canvas,
    tela 
} from "../../canvas.js";
import desenharCanvas from "./desenhaForca.js"
import {
    retiraCaracter,
    ocultaPalavra
} from "./manipulaPalavra.js";
import {
    palavras,
    letrasCorreta,
    letrasErradas 
} from "../utils/palavra.js";
import modulo from "../utils/valoresIniciais.js";

console.log(palavras)

function sortearPalavra(array) {
    return Math.floor(Math.random() * array.length)
}

export const iniciarJogo = () => {
    modulo.valoresInicias.fimDeJogo = false;
    modulo.valoresInicias.tentativas = 0;

    letrasCorreta.length = 0;
    letrasErradas.length = 0;

    //zerar Canvas
    tela.fillStyle = "#F3F5FC";
    tela.strokeStyle = "#0A3871";
    tela.fillRect(0, 0, $canvas.width, $canvas.height);
    desenharCanvas();

    modulo.valoresInicias.indiceDaPalavra = sortearPalavra(palavras);
    modulo.valoresInicias.palavraSecreta = retiraCaracter(palavras[modulo.valoresInicias.indiceDaPalavra]);
    
    ocultaPalavra(modulo.valoresInicias.palavraSecreta, palavras[modulo.valoresInicias.indiceDaPalavra]);

    document.querySelector(".tela--erros").innerHTML = '';
    modulo.letras.forEach( botao => {
        botao.style.background = "none"
        botao.style.color = "#343a40"
    });
}


