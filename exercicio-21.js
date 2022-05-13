const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* 
Faça um Programa para um caixa eletrônico.
O programa deverá perguntar ao usuário a valor do saque
e depois informar quantas notas de cada valor serão fornecidas.
As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais.
- O valor mínimo é de 10 reais e o máximo de 600 reais.
- O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais,
o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais,
- O programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e
quatro notas de 1.
 */

rl.question('Digite o valor para saque: ', (numero) => {

  if (numero < 10 || numero > 600) {
    console.log(`Valor inválido! Digite um valor maior que R$10 e menor que R$600.`)
  }

  let cem = (numero / 100)
  numero = numero - (cem * 100)

  let cinquenta = (numero / 50)
  numero = numero - (cinquenta * 50)

  let dez = (numero / 10)
  numero = numero - (dez * 10)

  let cinco = (numero / 5)
  numero = numero - (cinco * 5)

  let um = numero

  console.log(`Notas R$100,00 = ${cem}`)
  console.log(`Notas R$ 50,00 = ${cinquenta}`)
  console.log(`Notas R$ 10,00 = ${dez}`)
  console.log(`Notas R$  5,00 = ${cinco}`)
  console.log(`Notas R$  1,00 = ${um}`)


  rl.close();
});

