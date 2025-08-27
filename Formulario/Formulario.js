const readline = require('readline-sync');

// Função para validar nome (não pode estar vazio)
function askName() {
  let nome;
  do {
    nome = readline.question("Digite seu nome: ");
    if (!nome.trim()) {
      console.log(" O nome não pode ser vazio!");
    }
  } while (!nome.trim());
  return nome;
}

// Função para validar data de nascimento (formato dd/mm/aaaa)
function askDate() {
  let data;
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  do {
    data = readline.question("Digite sua data de nascimento (dd/mm/aaaa): ");
    if (!regex.test(data)) {
      console.log(" Data inválida! Use o formato dd/mm/aaaa.");
    }
  } while (!regex.test(data));
  return data;
}

// Função genérica para validar campos de texto
function askField(campo) {
  let valor;
  do {
    valor = readline.question(`Digite sua/sua ${campo}: `);
    if (!valor.trim()) {
      console.log(`O campo ${campo} não pode ser vazio!`);
    }
  } while (!valor.trim());
  return valor;
}

// === Formulário ===
console.log("\n === Formulário de Cadastro === \n");

const nome = askName();
const dataNascimento = askDate();
const regiao = askField("regiao");
const cidade = askField("cidade");
const bairro = askField("bairro");
const curso = askField("curso");

// === Resultado ===
console.log("\n Dados Cadastrados com Sucesso:");
console.log(`Nome: ${nome}`);
console.log(`Data de Nascimento: ${dataNascimento}`);
console.log(`Região: ${regiao}`);
console.log(`Cidade: ${cidade}`);
console.log(`Bairro: ${bairro}`);
console.log(`Curso: ${curso}`);
