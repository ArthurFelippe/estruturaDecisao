const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e 
lhe contraram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério,
baseado no salário atual:

- Salários até R$ 280,00 (incluindo) : aumento de 20%
- Salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
- Salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
- Salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
- O salário antes do reajuste;
- Opercentual de aumento aplicado;
- O valor do aumento;
- O novo salário, após o aumento.
*/

rl.question('Digite o valor do salário: ', (salario) => {

  if (salario <= 280) {
    console.log(`O percentual do seu aumento é de 20%`)
  }
  else if (salario > 280 && salario <= 700) {
    console.log(`O percentual do seu aumento é de 15%`)
  }
  else if (salario > 700 && salario <= 1500) {
    console.log(`O percentual do seu aumento é de 10%`)
  }
  else if (salario > 1500) {
    console.log(`O percentual do seu aumento é de 5%`)
  }

  let s1 = Number(salario) * 0.20
  let s2 = Number(salario) * 0.15
  let s3 = Number(salario) * 0.10
  let s4 = Number(salario) * 0.05

  if (salario <= 280) {
    console.log(`O aumento do seu salário foi de: ${s1}`)
  }
  else if (salario > 280 && salario <= 700) {
    console.log(`O aumento do seu salário foi de: ${s2}`)
  }
  else if (salario > 700 && salario <= 1500) {
    console.log(`O aumento do seu salário foi de: ${s3}`)
  }
  else if (salario > 1500) {
    console.log(`O aumento do seu salário foi de: ${s4}`)
  }

  let sf1 = Number(salario) + Number(s1)
  let sf2 = Number(salario) + Number(s2)
  let sf3 = Number(salario) + Number(s3)
  let sf4 = Number(salario) + Number(s4)


  if (salario <= 280) {
    console.log(`O seu salário final é de: ${sf1}`)
  }
  else if (salario > 280 && salario <= 700) {
    console.log(`O seu salário final é de: ${sf2}`)
  }
  else if (salario > 700 && salario <= 1500) {
    console.log(`O seu salário final é de: ${sf3}`)
  }
  else if (salario > 1500) {
    console.log(`O seu salário final é de: ${sf4}`)
  }

  rl.close();
});