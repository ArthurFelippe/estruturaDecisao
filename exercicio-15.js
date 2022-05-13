const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*Faça um Programa que peça os 3 lados de um triângulo. 
O programa deverá informar se os valores podem ser um triângulo. 
Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
Dicas:
- Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
- Triângulo Equilátero: três lados iguais;
- Triângulo Isósceles: quaisquer dois lados iguais;
- Triângulo Escaleno: três lados diferentes;
*/

rl.question('Informe o valor do primeiro lado: ', (l1) => {
  rl.question('Informe o valor do segundo lado: ', (l2) => {
    rl.question('Informe o valor do terceiro lado: ', (l3) => {

      if (l1 == l2 && l2 == l3 && l1 == l3) {
        console.log(`Triângulo Equilátero`)
      }
      else if (l1 == l2 || l1 == l3 || l2 == l3) {
        console.log(`Triângulo Isósceles`)
      }
      else if (l1 != l2 && l3 || l2 != l1 && l3) {
        console.log(`Triângulo Escaleno`)
      }
      rl.close();
    });
  });
});