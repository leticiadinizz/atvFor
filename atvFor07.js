/*7-Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
Letícia Calixto Diniz */
var teclado = require('prompt-sync')();
var n = parseInt(teclado("Digite um número inteiro para calcular o fatorial: "));
var fatorial = 1;
for (var i = 1; i <= n; i++) {
    fatorial *= i;
}
console.log("O fatorial de " + n + " \u00E9: " + fatorial);
