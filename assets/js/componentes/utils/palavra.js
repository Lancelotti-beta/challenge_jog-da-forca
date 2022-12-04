export const palavras = JSON.parse(localStorage.getItem('novaPalavraSecreta')) || [
    {palavra: 'O pequeno principe', dica: 'O seu reino é um pequeno planeta'}, 
    {palavra: 'A Guerra dos Tronos', dica: 'Dragões são raros nessa Época'},
    {palavra: 'As Brumas de Avalon', dica: 'A espada lhe deu o trono'},
    {palavra: 'As Cronicas de Artur', dica: 'O ultimo rei da Inglaterra'},
    {palavra: 'O Espadachin de Carvão', dica: 'Ikibu'},
    {palavra: 'A Batalha do Apocalipse', dica: 'Um anjo caido'},
    {palavra: 'Santo Guerreiro', dica: 'O legionario que derrotou um dragão'},
    {palavra: 'Filhos do Éden', dica: 'A parede da realidade está caindo'},
    {palavra: 'O setimo', dica: 'Vampiros no Brasil'}
];

export let letrasErradas = [];
export let letrasCorreta = [];

