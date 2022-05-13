const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um Programa que peça um número e informe se o número é inteiro ou decimal.
 Dica: utilize uma função de arredondamento.
 */

rl.question('Digite o valor: ', (valor) => {

  if (valor % 1 == 0) {
    console.log(`O número é inteiro!`)
  }
  else {
    console.log(`O número é decimal!`)
  }
  rl.close();
});
