/*7-Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
Letícia Calixto Diniz */
const teclado = require('prompt-sync')();
const n = parseInt(teclado("Digite um número inteiro para calcular o fatorial: "));

let fatorial = 1;

for (let i = 1; i <= n; i++) {
  fatorial *= i;
}
console.log(`O fatorial de ${n} é: ${fatorial}`);