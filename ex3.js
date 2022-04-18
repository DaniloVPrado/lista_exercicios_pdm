// 3. Crie um objeto JSON que abriga todas as operações do exercício 2.

let obj = {
    soma: (a, b) => a + b,
    divisao: (a, b) => a / b,
    multiplicacao: (a, b) => a * b,
    subtracao: (a, b) => a - b
}
console.log(obj.soma(1,4))
console.log(obj.divisao(1,4))
console.log(obj.multiplicacao(1,4))
console.log(obj.subtracao(1,4))