const { match } = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.

rl.question('Informe uma data no formato dd/mm/aaaa:', (dataEscrita) => {
  const data = dataEscrita.split('/')
  let dia = data[0]
  let mes = data[1]
  let ano = data[2]

  if (dia > 0 && dia <= 31) {
    if (mes > 0 && mes <= 12) {
      if (ano > 0 && ano < 9999) {
        
          console.log(`Data válida!`)
          return rl.close();
        }
      }
    }
    console.log(`Data inválida!`)
    rl.close();
  });