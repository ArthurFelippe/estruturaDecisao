
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

/*
Um posto está vendendo combustíveis com a seguinte tabela de descontos,
Álcool:
- Até 20 litros, desconto de 3% por litro
- Acima de 20 litros, desconto de 5% por litro
Gasolina:
- Até 20 litros, desconto de 4% por litro
- Acima de 20 litros, desconto de 6% por litro Escreva um algoritmo que leia o número de litros vendidos,
- O tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina),
Calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 e
o preço do litro do álcool é R$ 1,90.
*/

rl.question('Digite quantos litros será abastecido: ', (litros) => {
    rl.question('Digite A para álcool ou G para gasolina: ', (combustivel) => {

        preco = 0

        if (combustivel == 'A' || combustivel == 'a') {
            preco = litros * 1.9
        }
        else if (litros <= 20) {
            preco -= (1.9 * litros * 3) / 100
        }
        else {
            preco -= (1.9 * litros * 5) / 100
        }
        if (combustivel == 'G' || combustivel == 'g') {
            preco = litros * 2.5
        }
        else if (litros <= 20) {
            preco -= (2.5 * litros * 4) / 100
        }
        else {
            preco -= (2.5 * litros * 6) / 100
        }

        console.log(`O preço a pagar é R$: ${preco}`)

        rl.close();
    });
});

