export class Pessoa {
  nome: string;
  endereco: string;

  constructor(nome: string, endereco: string) {
    this.nome = nome;
    this.endereco = endereco;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e moro em ${this.endereco}.`;
  }
}
