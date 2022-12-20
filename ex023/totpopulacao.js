var listaNumPopulacoes = document.querySelectorAll('.numpopulacao');
var totPopulacao = document.querySelector('.totpopulacao');
var somaPopTot = 0;

for (let i = 0; i < listaNumPopulacoes.length; i++) {
    let numPopulacao = parseInt(listaNumPopulacoes[i].textContent.replace(/\.|\s/g, ""));

    if(isNaN(numPopulacao)){
        listaNumPopulacoes[i].textContent = 0;
        numPopulacao = 0;
    };

    somaPopTot = somaPopTot + numPopulacao;
};

// totPopulacao.textContent = somaPopTot;
// totPopulacao.textContent = totPopulacao.textContent.replace(/([0-9]{3})([0-9]{3})([0-9]{3})/g, '$1.$2.$3')

totPopulacao.textContent = somaPopTot.toLocaleString('pt-br');