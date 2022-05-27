const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Faça um Programa que leia três números e mostre o maior deles.

rl.question('Informe o valor do primeiro número: ', (num1) => {
  rl.question('Informe o valor do segundo número: ', (num2) => {
    rl.question('Informe o valor do terceiro número: ', (num3) => {

      if (num1 > num2 || num1 > num3) {
        console.log(`O ${num1} é o maior!`)
      }
      if (num2 > num3) {
        console.log(`O ${num2} é o maior!`)
      }
      else {
        console.log(`O ${num3} é o maior!`)
      }
      rl.close();
    });
  });
});