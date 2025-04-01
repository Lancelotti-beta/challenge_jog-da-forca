import { palavras } from "../utils/palavra.js"

export function adicionaPalavraNaLista(objeto){
    palavras.push(objeto)
    return localStorage.setItem('novaPalavraSecreta', JSON.stringify(palavras))
}

