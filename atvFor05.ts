/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.*/


console.clear();
const teclado = require('prompt-sync')();

const numeros = new Array(10); 

console.log("Por favor, insira 10 números:");

for (let i = 0; i < 10; i++) {
  numeros[i] = parseFloat(teclado(`Digite o ${i + 1}º número: `));
}

for (let i = 0; i < numeros.length - 1; i++) {
  for (let i = 0; i < numeros.length - i - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      let temp = numeros[i];
      numeros[i] = numeros[i + 1];
      numeros[i + 1] = temp;
    }
  }
}

console.log("Os números quando ordenados da maneira certa ficam nessa ordem: ");
console.log(numeros);
