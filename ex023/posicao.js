var listaPosicoes = document.querySelectorAll('.posicao');

for (let i = 0; i < listaPosicoes.length; i++) {
    let posicao = listaPosicoes[i];
    
    posicao.textContent = i + 1;
}