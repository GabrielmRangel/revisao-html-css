var listaNumPopulacoes = document.querySelectorAll('.numpopulacao');
var totPopulacao = document.querySelector('.totpopulacao');
var somaPopTot = 0;

for (let i = 0; i < listaNumPopulacoes.length; i++) {
    let numPopulacao = parseInt(listaNumPopulacoes[i].textContent.replace(/\./g, ""));

    somaPopTot = somaPopTot + numPopulacao;
};

totPopulacao.textContent = somaPopTot;