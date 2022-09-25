const palavras = ['O pequeno principe', 'A Guerra dos Tronos', 
'As Brumas de Avalon', 'As Cronicas de Artur', 'O Espachin de Carvão', 
'A Batalha do Apocalipse', 'Santo Guerreiro', 'Filhos do Éden'
]

let palavraSecreta = ''
const tentativas = 0



//sessão inicio
document.querySelector('.botao__jogo').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    document.querySelector('.tela_jogo').style.display = 'flex'

    const palavraInicial = sortearPalavra(palavras)
    palavraSecreta = palavras[palavraInicial]
    ocultaPalavra(palavraSecreta)
})
document.querySelector('.botao__configuracao').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    document.querySelector('.tela__configuracao').style.display = 'flex'
})

//sessão da configuração
document.querySelector('.botao__configuracao--jogar').addEventListener('click', e => {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none'
    document.querySelector('.tela_jogo').style.display = 'flex'
})
document.querySelector('.botao__configuracao--voltar').addEventListener('click', e => {
    document.querySelector('.tela__configuracao-container').parentElement.style.display = 'none'
    document.querySelector('.tela__inicio').style.display = 'flex'
})

// sessão do Jogo

document.querySelector('.bota__jogo--jogar').addEventListener('click', e => {
    const palavra = sortearPalavra(palavras)
    palavraSecreta = palavras[palavra]

    ocultaPalavra(palavraSecreta)
})

document.querySelector('.bota__jogo--voltar').addEventListener('click', e => {
    document.querySelector('.tela_jogo-container').parentElement.style.display = 'none'
    document.querySelector('.tela__inicio').style.display = 'flex'
})


function sortearPalavra(array){
    return Math.round(Math.random() * array.length - 1)
}


function ocultaPalavra(palavra){
    const telaDaForca = document.querySelector('.tela_jogo')
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

    telaDaForca.innerHTML = `
        <div>
            ${palavraOculta}
        </div>
    `
}