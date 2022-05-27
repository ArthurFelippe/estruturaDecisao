const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Faça um Programa que leia três números e mostre-os em ordem decrescente.

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Digite o terceiro número: ', (num3) => {

      var tmp = num1;

      if (num1 < num3) {
        tmp = num3;
        num3 = num1;
        num1 = tmp;
      }
      if (num1 < num2) {
        tmp = num2;
        num2 = num1;
        num1 = tmp;
      }
      else if (num2 < num3) {
        tmp = num3;
        num3 = num2;
        num2 = tmp;
      }
      console.log(`A ordem decrescente é: ${num1} - ${num2} - ${num3}`);

      rl.close();
    });
  });
});