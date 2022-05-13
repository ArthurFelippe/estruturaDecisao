const { match } = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Faça um Programa que pergunte em que turno você estuda.
Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
  */

rl.question('Digite o turno que você estuda: ', (turno) => {

  if (turno == 'M' || turno == 'm') {
    console.log(`Bom dia!`)
  }
  else if (turno == 'V' || turno == 'v') {
    console.log(`Boa tarde!`)
  }
  else if (turno == 'N' || turno == 'n') {
    console.log(`Boa noite!`)
  }
  else {
    console.log(`Valor inválido!`)
  }

  rl.close();
});