const { match } = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um Programa que verifique se uma letra digitada é "F" ou "M".
Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
 */

rl.question('Digite uma letra: ', (sexo) => {

  if (sexo == 'M' || sexo == 'm') {
    console.log(`Sexo masculino!`)
  } else if (sexo == 'F' || sexo == 'f') {
    console.log(`Sexo Feminino!`)
  } else {
    console.log(`Sexo inválido!`)

    rl.close();
  }
});