const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um Programa que leia um número e exiba o dia correspondente da semana.
(1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
 */

rl.question('Digite um número: ', (numero) => {

  if (numero == 1) {
    console.log(`Domingo!`)
  }
  else if (numero == 2) {
    console.log(`Segunda-feira!`)
  }
  else if (numero == 3) {
    console.log(`Terça-feira!`)
  }
  else if (numero == 4) {
    console.log(`Quarta-feira!`)
  }
  else if (numero == 5) {
    console.log(`Quinta-feira!`)
  }
  else if (numero == 6) {
    console.log(`Sexta-feira!`)
  }
  else if (numero == 7) {
    console.log(`Sábado!`)
  }
  else {
    console.log(`Valor inválido!`)
  }

  rl.close();
});

