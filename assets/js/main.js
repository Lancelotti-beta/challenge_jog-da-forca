const iniciar = document.querySelector('.botao__jogo')
const adicionaPalavra = document.querySelector('.botao__configuracao')

iniciar.addEventListener('click', function(e){
    e.target.parentElement.style.display = 'none'
    document.querySelector('.tela_jogo').style.display = 'flex'
})

adicionaPalavra.addEventListener('click', function(e){
    e.target.parentElement.style.display = 'none'
    document.querySelector('.tela__configuracao').style.display = 'flex'
})

