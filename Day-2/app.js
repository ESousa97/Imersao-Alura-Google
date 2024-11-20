alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// Se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai, você descobriu o número secreto ${numeroSecreto}`);
    } else {
    alert('Você errou :c');
}
