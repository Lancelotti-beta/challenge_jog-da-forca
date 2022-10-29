import { ativaBotao } from "./controleDeAcao.js"

const botoes = document.querySelectorAll('button')

botoes.forEach(botao => {
    botao.addEventListener('click', event => {
        ativaBotao(event.target)
    })
})

