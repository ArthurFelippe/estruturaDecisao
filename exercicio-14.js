const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre,
e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
Média de Aproveitamento  Conceito
Entre 9.0 e 10.0        A
Entre 7.5 e 9.0         B
Entre 6.0 e 7.5         C
Entre 4.0 e 6.0         D
Entre 4.0 e zero        E
*/

rl.question('Digite o valor da primeira nota parcial do semestre: ', (n1) => {
  rl.question('Digite o valor da segunda nota parcial do semestre: ', (n2) => {

    media = (Number(n1) + Number(n2)) / 2

    if (media >= 0 && media <= 4) {
      console.log(`Primeira nota: ${n1}\nSegunda nota: ${n2}\nSua media final é: ${media}\nVocê está reprovado! Conceito E!`)
    }
    else if (media >= 4 && media <= 6) {
      console.log(`Primeira nota: ${n1}\nSegunda nota: ${n2}\nSua media final é: ${media}\nVocê está reprovado! Conceito D!`)
    }
    else if (media >= 6 && media <= 7.5) {
      console.log(`Primeira nota: ${n1}\nSegunda nota: ${n2}\nSua media final é: ${media}\nVocê está aprovado! Conceito C`)
    }
    else if (media >= 7.5 && media <= 9) {
      console.log(`Primeira nota: ${n1}\nSegunda nota: ${n2}\nSua media final é: ${media}\nVocê está aprovado! Conceito B`)
    }
    else if (media > 9 && media <= 10) {
      console.log(`Primeira nota: ${n1}\nSegunda nota: ${n2}\nSua media final é: ${media}\nVocê está aprovado! A!`)
    }
    rl.close();
  });
});
