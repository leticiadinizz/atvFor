/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.*/
console.clear();
var teclado = require('prompt-sync')();
var numeros = new Array(10);
console.log("Por favor, insira 10 números:");
for (var i = 0; i < 10; i++) {
    numeros[i] = parseFloat(teclado("Digite o " + (i + 1) + "\u00BA n\u00FAmero: "));
}
for (var i = 0; i < numeros.length - 1; i++) {
    for (var i_1 = 0; i_1 < numeros.length - i_1 - 1; i_1++) {
        if (numeros[i_1] > numeros[i_1 + 1]) {
            var temp = numeros[i_1];
            numeros[i_1] = numeros[i_1 + 1];
            numeros[i_1 + 1] = temp;
        }
    }
}
console.log("Esses números quando ordenados da maneira correta ficam nessa ordem: ");
console.log(numeros);
