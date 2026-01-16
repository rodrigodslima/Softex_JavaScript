const readline = require("readline-sync");

function calculadora() {
  // Entrada dos números
  let num1 = parseFloat(readline.question("Digite o primeiro numero: "));
  let num2 = parseFloat(readline.question("Digite o segundo numero: "));

  // Escolha da operação
  console.log("Escolha a operação:");
  console.log("+ para soma");
  console.log("- para subtracao");
  console.log("* para multiplicacao");
  console.log("/ para divisao");

  let operacao = readline.question("Digite a operacao: ");
  let resultado;

  // Switch para escolher operação
  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultado = "Erro: divisão por zero!";
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      resultado = "Operação inválida!";
  }

  console.log("Resultado:", resultado);
}

// Executa a calculadora
calculadora();
