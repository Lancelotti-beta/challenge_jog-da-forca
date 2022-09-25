
//sessão inicio
document.querySelector('.botao__jogo').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    console.log(e.target.parentElement)
    document.querySelector('.tela_jogo').style.display = 'flex'
    document.querySelector('.tela_jogo-container').style.display = 'flex'
})

document.querySelector('.botao__configuracao').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    console.log(e.target.parentElement)
    document.querySelector('.tela__configuracao').style.display = 'flex'
    document.querySelector('.tela__configuracao-container').style.display = 'flex'
})

//sessão da configuração
document.querySelector('.botao__configuracao--jogar').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    console.log(e.target.parentElement)
    document.querySelector('.tela_jogo').style.display = 'flex'
    document.querySelector('.tela_jogo-container').style.display = 'flex'
})

document.querySelector('.botao__configuracao--voltar').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    console.log(e.target.parentElement)
    document.querySelector('.tela__inicio').style.display = 'flex'
})

// sessão do Jogo
/*
document.querySelector('.bota__jogo--jogar').addEventListener('click', e => {
    console.log(e)
})
*/
document.querySelector('.bota__jogo--voltar').addEventListener('click', e => {
    e.target.parentElement.style.display = 'none'
    console.log(e.target.parentElement)
    document.querySelector('.tela__inicio').style.display = 'flex'

})

