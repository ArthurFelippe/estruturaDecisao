const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar.
 O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
par ou ímpar;
positivo ou negativo;
inteiro ou decimal.*/

rl.question('Informe o primeiro número: ', (n1) => {
  rl.question('Informe o segundo número: ', (n2) => {
    rl.question('Informe a operação que deseja realizar: (1-Adição, 2-Subtração, 3-Divisão, 4-Multiplicação): ', (operacao) => {

      if (operacao == 1) {
        resultado = n1 + n2
      }
      else if (operacao == 2) {
        resultado = n1 - n2
      }
      else if (operacao == 3) {
        resultado = n1 / n2
      }
      else if (operacao == 4) {
        resultado = n1 * n2
      }
      else {
        console.log(`Opção inválida!`)
      }
      if (resultado % 2 == 0) {
        console.log(`O número digitado é par!`)
      }
      else {
        console.log(`O número digitado é impar!`)
      }
      if (resultado < 0) {
        console.log(`O numero é negativo`);
      } else {
        console.log(`O numero é positivo`);
      }
      console.log(`O valor é: ${resultado} `)

      rl.close();
    });
  });
});


