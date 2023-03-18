// Define o número que se deseja verificar se pertence à sequência de Fibonacci
const num = 13;

// Define as duas primeiras posições da sequência
let a = 0;
let b = 1;

// Variável para armazenar o valor atual da sequência
let c;

// Variável para armazenar se o número foi encontrado na sequência
let verificador = false;

// Loop para gerar a sequência de Fibonacci até encontrar o número ou ultrapassá-lo
while (a <= num) {
  if (a === num) {
    verificador = true;
    break;
  }
  
  c = a + b;
  a = b;
  b = c;
}

// Verifica se o número foi encontrado na sequência e exibe uma mensagem adequada
if (found) {
  console.log(num + " pertence à sequência de Fibonacci.");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}