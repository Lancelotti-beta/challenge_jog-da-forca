import { palavras } from "../utils/palavra.js"

export function adicionaPlavraNaLista(objeto){
    palavras.push(objeto)
    return localStorage.setItem('novaPalavraSecreta', JSON.stringify(palavras))
}

