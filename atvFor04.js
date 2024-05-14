/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
Letícia Calixto Diniz */
console.clear();
var teclado = require('prompt-sync')();
var vetorOriginal = [];
var vetorInvertido = [];
console.log("Por favor, insira 10 números:");
for (var i = 0; i < 10; i++) {
    var numero = parseFloat(teclado("Digite o " + (i + 1) + "\u00BA n\u00FAmero: "));
    vetorOriginal.push();
}
for (var i = vetorOriginal.length - 1; i >= 0; i--) {
    vetorInvertido.push(vetorOriginal[i]);
}
console.log("Vetor Original:", vetorOriginal);
console.log("Vetor Invertido:", vetorInvertido);
