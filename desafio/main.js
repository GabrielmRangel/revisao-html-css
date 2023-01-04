var notas1 = document.querySelectorAll('.nota1');
var notas2 = document.querySelectorAll('.nota2');
var medias = document.querySelectorAll('.media');
var mediaExatas = document.querySelector('.media-das-exatas');
var mediaHumanas = document.querySelector('.media-das-humanas');

for(let i = 0; i < medias.length; i++){
    const nota1 = parseFloat(notas1[i].textContent);
    const nota2 = parseFloat(notas2[i].textContent);
    const media = medias[i];
    let soma = 0;

    soma = (nota1 + nota2) / 2;
    
    media.textContent = soma.toFixed(1);
};

let soma = 0;
let total = 0;

for(let i = 0; i < 4; i++){
    const media = medias[i];
    let valor = parseFloat(media.textContent);
    
    soma = soma + valor;
};

total = soma / 4;

mediaExatas.textContent = total.toFixed(1);

soma = 0;
total = 0;

for(let i = 4; i < 6; i++){
    const media = medias[i];
    let valor = parseFloat(media.textContent);
    
    soma = soma + valor;
};

total = soma / 2;

mediaHumanas.textContent = total.toFixed(1);

