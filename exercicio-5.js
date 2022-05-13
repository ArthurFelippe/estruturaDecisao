const { match } = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um programa para a leitura de duas notas parciais de um aluno.
O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.
*/

rl.question('Digite o valor da primeira nota: ', (n1) => {
  rl.question('Digite o valor da segunda nota: ', (n2) => {

    media = (parseInt(n1) + parseInt(n2)) / 2

    console.log(`Sua media foi de: ${media}`)
    if (media >= 7 && media < 10) {
      console.log(`Aprovado!`)
    }
    else if (media < 7) {
      console.log(`Reprovado!`)
    }
    else {
      media == 10
      console.log(`Aprovado com distinção!`)
    }

    rl.close();
  });
});