import { caracterEspecial } from "module";

let tentativas = 0

const sortearPalavra = (array) => {
    return Math.floor(Math.random() * array.length)
}

const retiraCaracter = (palavra) => {
    let palavraSemCaracteres = ''
    palavra.split('').forEach(letra => {
        palavraSemCaracteres = palavra.replaceAll(/[áàãâÁÀÃÂéèêÉÈÊíìîÍÌÎóòõôÓÒÕÔñÑ]/g, (letra) => {
            return caracterEspecial[letra]
        })
    })

    return palavraSemCaracteres
}

const ocultaPalavra = (palavra) => {
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

const mostraPalavra = (palavras, str) => {  
    const letra = document.querySelectorAll('span')

    palavras.split('').forEach((palavra, i, arrayPalavra) => { 
        console.log(palavra, i, arrayPalavra)

        if(arrayPalavra[i] === str){
            letra[i].innerHTML = arrayPalavra[i] = str
        } 

    })
}

const verificaBotao = (botao, palavra, elemento) => {
    palavra = palavra.toLowerCase()

    tentativas < 7 ? validaJogada(palavra, botao) : derrota(elemento)
    
}

const validaJogada = (palavra, botao) => {
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

const resetaJogo = () => {
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

const derrota = (elemento) => {
    elemento.querySelector(".caixa--titulo").textContent = "Fim de Jogo"
    elemento.querySelector(".caixa--menssagem").textContent = "Não foi dessa vez . . ."
    elemento.querySelector(".pop-up").textContent = "Reiniciar"
    elemento.showModal()
}

export {
    sortearPalavra,
    retiraCaracter,
    ocultaPalavra,
    verificaBotao,
    resetaJogo
}