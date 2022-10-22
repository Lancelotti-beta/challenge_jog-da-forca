
const palavras = ['O pequeno principe', 'A Guerra dos Tronos', 
'As Brumas de Avalon', 'As Cronicas de Artur', 'O Espachin de Carvão', 
'A Batalha do Apocalipse', 'Santo Guerreiro', 'Filhos do Éden'
]

const letras = document.querySelectorAll('[data-letra]')
const tentativas = 0

let palavra = ''
let palavraSecreta = ''



//sessão inicio
document.querySelector('.botao__jogo').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    document.querySelector('.tela__jogo').style.display = 'flex'

    palavra = sortearPalavra(palavras)
    palavraSecreta = palavras[palavra]

    ocultaPalavra(palavraSecreta)
    validaCliqueDoBotao()
})

document.querySelector('.botao__configuracao').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    document.querySelector('.tela__configuracao').style.display = 'flex'
})

//sessão da configuração
document.querySelector('.botao__configuracao--jogar').addEventListener('click', e => {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none'
    document.querySelector('.tela__jogo').style.display = 'flex'

    palavra = sortearPalavra(palavras)
    palavraSecreta = palavras[palavra]

    ocultaPalavra(palavraSecreta)

    validaCliqueDoBotao()
})

document.querySelector('.botao__configuracao--voltar').addEventListener('click', e => {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none'
    document.querySelector('.tela__inicio').style.display = 'flex'
})

// sessão do Jogo

document.querySelector('.bota__jogo--jogar').addEventListener('click', e => {
    palavra = sortearPalavra(palavras)
    palavraSecreta = palavras[palavra]

    ocultaPalavra(palavraSecreta)
    validaCliqueDoBotao()
})

document.querySelector('.bota__jogo--voltar').addEventListener('click', e => {
    document.querySelector('.tela__jogo-container').parentElement.style.display = 'none'
    document.querySelector('.tela__inicio').style.display = 'flex'
})


function sortearPalavra(array){
    return Math.floor(Math.random() * array.length)
}

function ocultaPalavra(palavra){
    const localDaPalavra = document.querySelector('.tela__jogo-letras')
    const palavraOculta = palavra.split('').map((letras, i) => {
        return `
            <span>${letras.replace(palavra.charAt(i), letra => {
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
    console.log(letra)

    palavras.split('').forEach((palavra, i, arrayPalavra) => { 
        console.log(palavra, i, arrayPalavra)

        if(arrayPalavra[i] === str){
            letra[i].innerHTML = arrayPalavra[i] = str
        } 

    })

}

function verificaBotao(botao, palavra) {
    palavra = palavra.toLowerCase() 
    if(tentativas < 7){   
        if(palavra.includes(botao)){
            document.querySelector(`button[value="${botao}"]`).style.background = "#5E8272"
            document.querySelector(`button[value="${botao}"]`).style.color = "white"
            
            mostraPalavra(palavra, botao)
        } else {
            document.querySelector(`button[value="${botao}"]`).style.background = "#7E3D57"
            document.querySelector(`button[value="${botao}"]`).style.color = "white"
            
            tentativas++
        }
    } else {
      document.querySelector('armazenamento').innerHTML = `<h2> Fim de Jogo </h2>`
    }    
}

function validaCliqueDoBotao(){
    letras.forEach(letra =>{
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
}
