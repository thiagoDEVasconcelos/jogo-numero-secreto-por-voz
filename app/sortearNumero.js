const menorValor = 1;
const maiorValor = 1000;

const numeroAleatorio = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

console.log(`Número secreto: ${numeroAleatorio}`);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;