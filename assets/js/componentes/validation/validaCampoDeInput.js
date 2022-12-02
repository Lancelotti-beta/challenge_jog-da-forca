
export function validaCampoDeImput(input) {
    const tipoDoInput = input.dataset.valor

    if (input.validity.valid) {
        input.parentElement.classList.remove('config-container--invalido');
        input.parentElement.querySelector('.config-mensagem-erro').innerHTML = "";
    } else {
        input.parentElement.classList.add('config-container--invalido');
        input.parentElement.querySelector('.config-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDoInput, input);
    }
}

const vadidaErro = [
    'valueMissing',
    'patternMismatch'
];

const mensagemDeErro = {
    palavra: {
        valueMissing: `O campo de estado não pode estar vazio.`,
        patternMismatch: `A palavra não pode conter caracteres especias como @,#& ou semelhante`
    },
    dica: {
        valueMissing: `O campo de Preço não pode estar Vazio!`,
        patternMismatch: `A dica não pode conter caracteres especias como @,#& ou semelhante`
    }
};

function mostraMensagemDeErro(tipoInput, input) {
    let mensagem = '';
    
    vadidaErro.forEach(error => {
        if (input.validity[error]) {
            mensagem = mensagemDeErro[tipoInput][error];
        }
    });

    return mensagem;
}
