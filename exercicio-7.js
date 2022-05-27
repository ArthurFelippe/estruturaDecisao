const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Faça um Programa que leia três números e mostre o maior e o menor deles.

rl.question('Informe o valor do primeiro número: ', (num1) => {
  rl.question('Informe o valor do segundo número: ', (num2) => {
    rl.question('Informe o valor do terceiro número: ', (num3) => {

      var maior = num1;

      if (num2 > maior)
        maior = num2;
      if (num3 > maior)
        maior = num3;

      console.log(`O número maior é: ${maior}`);

      var menor = num1;

      if (num2 < menor)
        menor = num2;
      if (num3 < menor)
        menor = num3;

      console.log(`O número menor é: ${menor}`);

      rl.close();
    });
  });
});