const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')
const maiorValor = 1000
const menorValor = 1
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio (){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor