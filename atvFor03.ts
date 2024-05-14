/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Letícia Calixto Diniz */

console.clear();
const teclado = require(`prompt-sync`)();
let numeros = new Array ();
let maior = 0;

for (let x = 0; x < 10; x++) {
    numeros[x] = parseInt(teclado(`Digite o número do índice do array: `))
}

for (let i = 0; i < 10; i++){
    if (numeros [i] > maior){
        maior = numeros[i];
    }
}
console.log(`O número maior é ${maior}`)