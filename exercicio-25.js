
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
"Telefonou para a vítima?"
"Esteve no local do crime?"
"Mora perto da vítima?"
"Devia para a vítima?"
"Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita",
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
*/

let pontos = 0

console.log(`Responda as perguntas a seguir com sim ou não!`)
rl.question('Telefonou para a vítima? ', (p1) => {

  if (p1 == "sim") {
    pontos = pontos + 1
  }
  else {
    pontos = pontos + 0
  }
  rl.question('Esteve no local do crime? ', (p2) => {

    if (p2 == "sim") {
      pontos = pontos + 1
    }
    else {
      pontos = pontos + 0
    }
    rl.question('Mora perto da vítima? ', (p3) => {

      if (p3 == "sim") {
        pontos = pontos + 1
      }
      else {
        pontos = pontos + 0
      }
      rl.question('Devia para a vítima? ', (p4) => {

        if (p4 == "sim") {
          pontos = pontos + 1
        }
        else {
          pontos = pontos + 0
        }
        rl.question('Já trabalhou com a vítima? ', (p5) => {

          if (p5 == "sim") {
            pontos = pontos + 1
          }
          else {
            pontos = pontos + 0
          }
          console.log(`De acordo com as respostas você somou no total: ${pontos} pontos!`)
          if (pontos == 2) {
            console.log(`Classificado como: Suspeito(a)!`)
          }
          else if (pontos == 3 || pontos == 4) {
            console.log(`Classifcado como: Cúmplice!`)
          }
          else if (pontos == 5) {
            console.log(`Classificado como: Assassino(a)!`)
          }
          else if (pontos == 0) {
            console.log(`Classificado como: Inocente!`)
          }
          rl.close();
        });
      });
    });
  });
});

