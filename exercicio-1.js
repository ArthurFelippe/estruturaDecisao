const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Faça um Programa que peça dois números e imprima o maior deles.

rl.question('Informe o valor do primeiro número: ', (num1) => {
  rl.question('Informe o valor do segundo número: ', (num2) => {

    if (num1 > num2) {
      console.log(`O primeiro número ${num1}, é maior do que o segundo número ${num2}`);
    } else if (num1 < num2) {
      console.log(`O segundo número ${num2}, é maior do que o primeiro número ${num1}`);

      rl.close();
    }
  });
})