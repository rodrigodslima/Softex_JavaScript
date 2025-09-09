import { PessoaFisica } from './pessoaFisica';
import { PessoaJuridica } from './PessoaJuridica';

// Instanciando diretamente
const pessoa1 = new PessoaFisica("Carlos Silva", "Rua das Flores, 123", "123.456.789-00");
const pessoa2 = new PessoaJuridica("Comercial ABC", "Av. Central, 456", "12.345.678/0001-00", "Comercial ABC Ltda");

// Exibindo informações
console.log(pessoa1.apresentar());
console.log(pessoa2.apresentar());
