const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* 
Faça um programa que calcule as raízes de uma equação do segundo grau, na
forma ax2 + bx + c. O programa deverá pedir os valores de a, b e c e faz
er as consistências, informando ao usuário nas seguintes situações:
Se o usuário informar o valor de A igual a zero, a equação não é do segun
do grau e o programa não deve fazer pedir os demais valores, sendo encerrado;

Se o delta calculado for negativo, a equação não possui raizes reais. Inf
orme ao usuário e encerre o programa;
Se o delta calculado for igual a zero a equação possui apenas uma raiz real;
informe-a ao usuário;
Se o delta for positivo, a equação possui duas raiz reais; informe-se ao usuário;
*/

rl.question('Informe o valor de a: ', (a) => {

  if (a == 0) {
    console.log(`Não é uma equação de segundo grau`)
    return rl.close();
  }
  rl.question('Informe o valor de b: ', (b) => {
    rl.question('Informe o valor de c: ', (c) => {

      const delta = b * b - (4 * a * c)

      if (delta < 0) {
        console.log(`Delta menor que: 0`)
      }
      else if (delta == 0) {
        const raiz = -b / (2 * a)
        console.log(`Delta = 0, raiz = ${raiz}`)
      }
      else {
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
        const raiz2 = (-b + Math.sqrt(delta)) / (2 * a)
        console.log(`Raizes: ${raiz1} e ${raiz2}`)
      }
      rl.close();
    });
  });
});