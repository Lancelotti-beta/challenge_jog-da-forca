import { alfabeto } from "./componentes/utils/caracter.js"
import {
    valoresInicias,
    popUp,
    letras
} from "./componentes/utils/valoresIniciais.js"
import { verificaBotao } from "./componentes/validation/validaLetra.js"
import ativaBotaos from "./componentes/controllers/controleDeAcao.js"

const botoes = document.querySelectorAll('button');

botoes.forEach((botao) => {
    botao.addEventListener('click', (event) => {
        ativaBotaos(event.target);
    });
});

letras.forEach((letra) => {
    letra.addEventListener ('click', (e) => {
        verificaBotao(e.target.value, valoresInicias.palavraSecreta, popUp);
    });
});

window.addEventListener('keydown', (event) => {
    let tecla = event.key;
    const chave = alfabeto.includes(tecla);
    if(!chave){
        return
    }

    verificaBotao(tecla, valoresInicias.palavraSecreta, popUp);
});
