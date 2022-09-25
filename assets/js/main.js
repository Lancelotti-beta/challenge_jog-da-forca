const iniciar = document.querySelector('.botao__jogo')
const adicionaPalavra = document.querySelector('.botao__configuracao')

iniciar.addEventListener('click', function(e){
    console.log(e.target.parentElement)
})

adicionaPalavra.addEventListener('click', function(e){
    console.log(e.target.parentElement)
})

