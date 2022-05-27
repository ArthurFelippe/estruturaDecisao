const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um Programa para leitura de três notas parciais de um aluno.
O programa deve calcular a média alcançada por aluno e presentar:

- A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
- A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
- A mensagem "Aprovado com Distinção", se a média for igual a 10.
*/

rl.question('Informe o valor da primeira nota parcial: ', (p1) => {
  rl.question('Informe o valor da segunda nota parcial: ', (p2) => {
    rl.question('Informe o valor da terceira nota parcial: ', (p3) => {

      media = (Number(p1) + Number(p2) + Number(p3)) / 3

      if (media >= 7 && media < 10) {
        console.log(`Média: ${media}, você está aprovado!`)
      }
      else if (media < 7) {
        console.log(`Média: ${media}, você está reprovado!`)
      }
      else if (media == 10) {
        console.log(`Média: ${media}, Aprovado com distinção!`)
      }
      rl.close();
    });
  });
});