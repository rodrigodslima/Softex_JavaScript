class Celular {
  // Atributos
  marca: string;
  modelo: string;
  ligado: boolean;
  bateria: number;

  // Construtor
  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.ligado = false;
    this.bateria = 100;
  }

  // Métodos
  ligar(): void {
    this.ligado = true;
    console.log("O celular está ligado");
  }

  desligar(): void {
    this.ligado = false;
    console.log("O celular está desligado");
  }

  fazerChamada(numero: string): void {
    if (this.ligado && this.bateria > 0) {
      this.bateria -= 10;
      console.log("Ligando para o número: " + numero);
    } else {
      console.log("Não é possível fazer a chamada");
    }
  }

  enviarMensagem(numero: string, mensagem: string): void {
    if (this.ligado && this.bateria > 0) {
      this.bateria -= 5;
      console.log(
        "Mensagem enviada para " + numero + ": " + mensagem
      );
    } else {
      console.log("Não é possível enviar a mensagem");
    }
  }

  status(): void {
    console.log("Marca: " + this.marca);
    console.log("Modelo: " + this.modelo);
    console.log("Ligado: " + this.ligado);
    console.log("Bateria: " + this.bateria + "%");
  }
}

// Exemplo de uso da classe
const meuCelular = new Celular("Samsung", "Galaxy S23");

meuCelular.ligar();
meuCelular.status();

meuCelular.fazerChamada("8199999-9999");
meuCelular.enviarMensagem("8198888-8888", "Olá, tudo bem?");

meuCelular.status();
meuCelular.desligar();