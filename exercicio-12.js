const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

/*
Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda,
que depende do salário bruto (conforme tabela abaixo) 
e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto,
mas não é descontado (é a empresa que deposita).
O Salário Líquido corresponde ao Salário Bruto menos os descontos.
O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
Desconto do IR:

Salário Bruto até 900 (inclusive) - isento
Salário Bruto até 1500 (inclusive) - desconto de 5%
Salário Bruto até 2500 (inclusive) - desconto de 10%
Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações,
dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
 */

rl.question('Digite o valor de hora de trabalho: ', (valorHora) => {
   rl.question('Digite a quantidade de hora trabalhada: ', (quantidadeHoraTrabalhada) => {

      salarioBruto = valorHora * quantidadeHoraTrabalhada
      descontoSindicato = (salarioBruto / 100) * 3
      descontoFgts = (salarioBruto / 100) * 11
      ir = 0

      if (salarioBruto <= 900) {
         salarioLiquido = salarioBruto - descontoSindicato
      }
      else if (salarioBruto <= 1500) {
         ir = (salarioBruto / 100) * 5
         salarioLiquido = salarioBruto - descontoSindicato - ir
      }
      else if (salarioBruto <= 2500) {
         ir = (salarioBruto / 100) * 10
         salarioLiquido = salarioBruto - descontoSindicato - ir
      }
      else {
         ir = (salarioBruto / 100) * 20
         salarioLiquido = salarioBruto - descontoSindicato - ir
      }
      console.log(`Salário bruto: ${salarioBruto}\nDesconto Sindicato: ${descontoSindicato}\nDesconto IR: ${ir}\nFGTS:${descontoFgts}\nSalário liquido: ${salarioLiquido}`);

      rl.close();
   });
});

