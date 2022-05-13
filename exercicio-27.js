/*
Uma fruteira está vendendo frutas com a seguinte tabela de preços:
                      Até 5 Kg           Acima de 5 Kg
Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
Maçã            R$ 1,80 por Kg          R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00,
 receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg)
  de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
  */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`1-Morango\n2-Maçã\n3-Morango e maçã`)
rl.question(`Digite um número: `, (fruta) => {

    if (fruta != 1 && fruta != 2 && fruta != 3) {
        console.log(`Comando inválido!`)
    }
    if (fruta == 1) {
        rl.question(`Quantos kgs de morango?: `, (kiloMorango) => {
            if (kiloMorango <= 5) {
                p = kiloMorango * 2.50
            }
            else if (kiloMorango <= 8) {
                p = kiloMorango * 2.20
            }
            else {
                kiloMorango > 8
                p = (kiloMorango * 2.20) - (kiloMorango * 2.20) * 0.10
            }
            console.log(`Valor a pagar: ${p}`)

                else if (fruta == 2) {
                rl.question(`Quantos kgs de maçã?: `, (kiloMaca) => {
                    if (kiloMaca <= 5) {
                        p = kiloMaca * 1.80
                    }
                    else if (kiloMaca <= 8) {
                        p = kiloMaca * 1.50
                    }
                    else if (kiloMaca > 8) {
                        p = (kiloMaca * 1.50) - (kiloMorango * 1.50) * 0.10
                    }
                    console.log(`Valor a pagar: ${p}`)
                

                else if (fruta == 3) {
                        rl.question(`Quantos kgs de morango?: `, (kiloMorango) => {
                            rl.question(`Quantos kgs de maçã?: `, (kiloMaca) => {
                                if (kiloMorango <= 5) {
                                    p = kiloMorango * 2.50
                                }
                                else {
                                    p = kiloMorango * 2.20
                                }
                                if (kiloMaca <= 5) {
                                    p1 = kiloMaca * 1.80
                                }
                                else {
                                    p1 = kiloMaca * 1.50
                                    k = kiloMorango + kiloMaca
                                    tp = p + p1
                                }
                                if (k < 8 || tp > 25) {
                                    tp = (tp) - tp * 0.10
                                }
                                else {
                                    tp = tp * 1
                                }
                                console.log(`Total a pagar: R$${p}`)
                            },
                                rl.close());
                        });
                    }
                });
            }
        });
    }
});