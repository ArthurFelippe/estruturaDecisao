const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar,
sabendo que a decisão é sempre pelo mais barato.
 */

rl.question('Informe o preço do primeiro produto: ', (p1) => {
  rl.question('Informe o preço do segundo produto: ', (p2) => {
    rl.question('Informe o preço do terceiro produto: ', (p3) => {

      var menor = p1;

      if (p2 < menor)
        menor = p2;
      if (p3 < menor)
        menor = p3;
      console.log(`Esse é o produto com o menor preço: ${menor}`);

      rl.close();
    });
  });
});