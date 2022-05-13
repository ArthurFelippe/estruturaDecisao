const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um Programa que peça um número inteiro e determine se ele é par ou impar.
Dica: utilize o operador módulo (resto da divisão).
 */

rl.question('Digite um número inteiro: ', (num) => {

  if (num % 2 == 0) {
    console.log(`O número digitado é par!`)
  }
  else {
    console.log(`O número digitado é impar!`)
  }
  rl.close();
});
