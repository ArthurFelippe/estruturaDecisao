const { match } = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um Programa que peça um número correspondente a um determinado ano e
em seguida informe se este ano é ou não bissexto.
 */

rl.question('Digite um ano: ', (ano) => {

  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    console.log(`O ano informado é bissexto!`)
  }
  else {
    console.log(`O ano informado não é bissexto!`)
  }

  rl.close();
});