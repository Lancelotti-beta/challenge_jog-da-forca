
//sessão inicio
document.querySelector('.botao__jogo').addEventListener('click', e => {
    telaDeJogo(e, '.tela_jogo')
})
document.querySelector('.botao__configuracao').addEventListener('click', e => {
    telaAdicionaPalavra(e, '.tela__configuracao')
})

//sessão da configuração
document.querySelector('.botao__configuracao--jogar').addEventListener('click', e => {
    telaDeJogo(e, '.tela_jogo')
})
document.querySelector('.botao__configuracao--voltar').addEventListener('click', e => {
    telaAdicionaPalavra(e, '.tela__inicio')
})

// sessão do Jogo
/*
document.querySelector('.bota__jogo--jogar').addEventListener('click', e => {
    telaDeJogo(e, '.tela_jogo')
})
*/
document.querySelector('.bota__jogo--voltar').addEventListener('click', e => {
    telaAdicionaPalavra(e, '.tela__inicio')
})

function telaDeJogo(evento, classe){
    evento.target.parentElement.style.display = 'none'
    document.querySelector(classe).style.display = 'flex'
}

function telaAdicionaPalavra(evento, classe){
    evento.target.parentElement.style.display = 'none'
    document.querySelector(classe).style.display = 'flex'
}

