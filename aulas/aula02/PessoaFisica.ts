import { Pessoa } from "./pessoa";

export class PessoaFisica extends Pessoa {
  cpf: string;

  constructor(nome: string, endereco: string, cpf: string) {
    super(nome, endereco);
    this.cpf = cpf;
  }

  apresentar(): string {
    return `${super.apresentar()} Meu CPF é ${this.cpf}.`;
  }
}
