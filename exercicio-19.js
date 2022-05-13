const { match } = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um Programa que leia um número inteiro menor que 1000 e imprima:
 a quantidade de centenas, dezenas e unidades do mesmo.
Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
326 = 3 centenas, 2 dezenas e 6 unidades
*/

rl.question('Informe um número inteiro menor que 1000: ', (numero) => {
  if (numero < 1000) {
    const unidades = numero % 10
    numero = (numero - unidades) / 10
    const dezenas = numero % 10
    numero = (numero - dezenas) / 10
    const centenas = numero

    console.log(`${centenas} centena(s), ${dezenas} dezena(s) e ${unidades} unidades`)
  }

  rl.close();
});


