const visu = document.querySelector('.visu');
const palpites_passados = document.querySelector('.palpites_passados');
const btn_palpite = document.querySelector('#btn_palpite');

async function requisicao() {
    try {
        let response = await fetch('https://api.dicionario-aberto.net/random');
        let data = await response.json();
        console.log(data.word)
        return data.word;
    } catch (error) {
        console.error('Erro ao obter palavra aleatória:', error);
        return null;
    }
}

requisicao().then(palavra_vez => {
    if (!palavra_vez) {
        console.error('Não foi possível obter a palavra aleatória');
        return;
    }

    let palavra_vez_array = palavra_vez.split('');
    let secret = palavra_vez_array.map(() => '* ');

    visu.innerHTML = secret.join('');

    btn_palpite.addEventListener('click', () => {
        const palpite = document.querySelector('input#palpite');
        const palpite_value = palpite.value;
        if (palpite_value.length == 0) {
            alert('Valor inválido! Insira um valor válido!');
        } else if (!palavra_vez_array.includes(palpite_value)) {
            alert('Letra não contida na palavra!');
            palpites_passados.innerHTML += ' ' + palpite_value
        } else if (palavra_vez_array.includes(palpite_value)) {
            let letra_index = valoresIndex(palavra_vez_array, palpite_value);
            for (var i = 0; i < letra_index.length; i++) {
                secret[letra_index[i]] = palpite_value;
                visu.innerHTML = secret.join(' ');
            }
        }
    });
});

function valoresIndex(array, palpite) {
    let ocorrencias = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === palpite) {
            ocorrencias.push(i);
        }
    }
    console.log(ocorrencias);
    return ocorrencias;
}

function redefinir() {
    location.reload();
}
