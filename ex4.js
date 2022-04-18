// 4. Escreva um script que apresenta as seguintes operações para o usuário:
// 1- Soma
// 2- Subtração
// 3-Multiplicação
// 4- Divisão
// 5- Sair
// O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
// inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
// o objeto JSON do exercício 4 para realizar as operações aritméticas.

const prompt = require("prompt-sync")();

function numeroA() {
  return prompt("Digite o valor A: ");
}
function numeroB() {
  return prompt("Digite o valor B: ");
}
function exercicio(a, b){
  let obj = {
      soma: (a, b) => a + b,
      divisao: (a, b) => a / b,
      multiplicacao: (a, b) => a * b,
      subtracao: (a, b) => a - b
  }
  let n;
do {
    console.log("1 - soma");
    console.log("2 - divisao");
    console.log("3 - multiplicacao");
    console.log("4 - subtracao");
    console.log("5 - sair");
    n = prompt("Selecione:");
    switch (n) {
        case "1":
            console.log(obj.soma(Number(numeroA()),Number(numeroB())));
          break;
        case "2":
            console.log(obj.divisao(Number(numeroA()),Number(numeroB())));
          break;
        case "3":
            console.log(obj.multiplicacao(Number(numeroA()),Number(numeroB())));
          break;
        case "4":
            console.log(obj.subtracao(Number(numeroA()),Number(numeroB())));
          break;
        case "5":
          console.log('Saindo');
          break;
        default:
          console.log(`O numero ${n} nao e valido.`);
    }
   }while (n != 5);
}
exercicio();