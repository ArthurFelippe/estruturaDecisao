const { match } = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

rl.question('Informe o número: ', (n) => {

  if (n < 0) {
    console.log(`O valor digitado: ${n}, é negativo!`)
  } else {
    console.log(`O valor digitado: ${n}, é positivo!`)

    rl.close();
  }
});


