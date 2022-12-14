import ativaBotaos from "./componentes/controllers/controleDeAcao.js"
import { validaCampoDeImput } from "./componentes/validation/validaCampoDeInput.js"
import modulo from "./componentes/utils/valoresIniciais.js"
import { alfabeto } from "./componentes/utils/caracter.js"
import { verificaBotao } from "./componentes/validation/validaLetra.js"

const $botoes = document.querySelectorAll('button');
$botoes.forEach((botao) => {
    botao.addEventListener('click', (event) => {
        ativaBotaos(event.target);
    });
});

modulo.inputs.forEach((input) => {
    input.addEventListener('blur', (event) => {
        validaCampoDeImput(event.target)
    });
});

modulo.letras.forEach((letra) => {
    letra.addEventListener ('click', (e) => {
        verificaBotao(e.target.value, modulo.valoresInicias.palavraSecreta, modulo.popUp);
    });
});

window.addEventListener('keydown', (event) => {
    let tecla = event.key;
    const chave = alfabeto.includes(tecla);
    if(!chave){
        return
    }

    verificaBotao(tecla, modulo.valoresInicias.palavraSecreta, modulo.popUp);
});
