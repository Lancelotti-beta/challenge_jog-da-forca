
const palavras = ['O pequeno principe', 'A Guerra dos Tronos', 
'As Brumas de Avalon', 'As Cronicas de Artur', 'O Espadachin de Carvão', 
'A Batalha do Apocalipse', 'Santo Guerreiro', 'Filhos do Éden', 'O setimo'
]

const caracterEspecial = {
    á: 'a', à: 'a', ã: 'a', â: 'a',
    Á: 'A', À: 'A', Ã: 'A', Â: 'A',
    é: 'e', è: 'e', ê: 'e',
    É: 'E', È: 'E', Ê: 'E',
    í: 'i', ì: 'i', î: 'i',
    Í: 'I', Ì: 'I', Î: 'I',
    ó: 'o', ò: 'o', õ: 'o', ô: 'o',
    Ó: 'O', Ò: 'O', Õ: 'O', Ô: 'O',
    ñ: 'n', Ñ: 'N'
}

const letras = document.querySelectorAll('[data-letra]')
const popUp = document.querySelector('dialog')

const alfabeto = 'abcdefghijklmnopqrstuvwxyz'

let indice
let tentativas = 0
let palavraSecreta = ''


//sessão inicio
document.querySelector('.botao__jogo').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    document.querySelector('.tela__jogo').style.display = 'flex'

    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])

    ocultaPalavra(palavraSecreta)
})

document.querySelector('.botao__configuracao').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    document.querySelector('.tela__configuracao').style.display = 'flex'
})

//sessão da configuração
document.querySelector('.botao__configuracao--jogar').addEventListener('click', e => {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none'
    document.querySelector('.tela__jogo').style.display = 'flex'

    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])

    ocultaPalavra(palavraSecreta)
})

document.querySelector('.botao__configuracao--voltar').addEventListener('click', e => {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none'
    document.querySelector('.tela__inicio').style.display = 'flex'
})

// sessão do Jogo

document.querySelector('.bota__jogo--jogar').addEventListener('click', e => {
    resetaJogo()
})

document.querySelector('.bota__jogo--voltar').addEventListener('click', e => {
    document.querySelector('.tela__jogo-container').parentElement.style.display = 'none'
    document.querySelector('.tela__inicio').style.display = 'flex'
    resetaJogo()
})

//daiog - popUp caso percam 

document.querySelector('.pop-up').addEventListener('click', function() {
    resetaJogo()
    popUp.close()
})

letras.forEach(letra => {
    letra.addEventListener ('click', (e) => {
        verificaBotao(e.target.value, palavraSecreta)
    })
})

window.addEventListener('keydown', function(event) {
   
    let tecla = event.key

    const chave = alfabeto.includes(tecla)
    if(!chave){
        return
    }

    verificaBotao(tecla, palavraSecreta)
})


function sortearPalavra(array){
    return Math.floor(Math.random() * array.length)
}

function retiraCaracter(palavra) {
    

    let palavraSemCaracteres = ''
    palavra.split('').forEach(letra => {
        palavraSemCaracteres = palavra.replaceAll(/[áàãâÁÀÃÂéèêÉÈÊíìîÍÌÎóòõôÓÒÕÔñÑ]/g, (letra) => {
            return caracterEspecial[letra]
        })
    })

    return palavraSemCaracteres
}

function ocultaPalavra(palavra){
    const localDaPalavra = document.querySelector('.tela__jogo-letras')
    const palavraOculta = palavra.split('').map((letras, i) => {
        return `
            <span class="letra--secreta">${letras.replace(palavra.charAt(i), letra => {
                if(letra.indexOf(' ') >= 0){
                    return ' &nbsp '
                }
                return ' _ '
            })}</span>
        `
    }).join('')

    localDaPalavra.innerHTML = `
        ${palavraOculta}
    `
}

function mostraPalavra(palavras, str) {  
    const letra = document.querySelectorAll('span')

    palavras.split('').forEach((palavra, i, arrayPalavra) => { 
        console.log(palavra, i, arrayPalavra)

        if(arrayPalavra[i] === str){
            letra[i].innerHTML = arrayPalavra[i] = str
        } 

    })
}

function verificaBotao(botao, palavra) {
    palavra = palavra.toLowerCase()

    tentativas < 7 ? validaJogada(palavra, botao) : partidaPerdida()

    
    console.log(tentativas)
}

function validaJogada(palavra, botao) {
    if(palavra.includes(botao)){
        document.querySelector(`button[value="${botao}"]`).style.background = "#0a3871"
        document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff"
        mostraPalavra(palavra, botao)
        return
    }

    tentativas++
    document.querySelector(`button[value="${botao}"]`).style.background = "#343a40"
    document.querySelector(`button[value="${botao}"]`).style.color = "#ffffff"
}

function resetaJogo() {
    tentativas = 0

    indice = sortearPalavra(palavras)
    palavraSecreta = retiraCaracter(palavras[indice])

    //zerar Canvas

    letras.forEach( botao => {
        botao.style.background = "none"
        botao.style.color = "#343a40"
    })

    ocultaPalavra(palavraSecreta)
    //validaCliqueDoBotao()
}

function partidaPerdida() {
    popUp.querySelector(".caixa--titulo").textContent = "Fim de Jogo"
    popUp.querySelector(".caixa--menssagem").textContent = "Não foi dessa vez . . ."
    popUp.querySelector(".pop-up").textContent = "Reiniciar"
    popUp.showModal()
}

