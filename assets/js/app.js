import { alfabeto } from "./componentes/caracter.js"
import { 
    palavraSecreta,
    letras,
    verificaBotao 
} from "./componentes/baseJogo.js"
import { 
    ativaBotao, 
    popUp 
} from "./controleDeAcao.js"

const botoes = document.querySelectorAll('button')

botoes.forEach(botao => {
    botao.addEventListener('click', event => {
        ativaBotao(event.target)
    })
})

letras.forEach(letra => {
    letra.addEventListener ('click', (e) => {
        verificaBotao(e.target.value, palavraSecreta, popUp)
    })
})

window.addEventListener('keydown', function(event) {
    let tecla = event.key

    const chave = alfabeto.includes(tecla)
    if(!chave){
        return
    }

    verificaBotao(tecla, palavraSecreta, popUp)
})