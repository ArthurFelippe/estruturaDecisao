const { match } = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

rl.question('Digite uma letra: ', (letra) => {

  if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'
    || letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    console.log(`A letra escolhida é uma vogal!`)
  } else {
    console.log(`A letra escolhida é uma consoante!`)

    rl.close();
  }
});