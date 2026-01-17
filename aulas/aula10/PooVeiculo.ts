class Veiculo {
  // Atributos
  marca: string;
  modelo: string;
  ligado: boolean;
  velocidade: number;

  // Construtor
  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.ligado = false;
    this.velocidade = 0;
  }

  // Métodos
  ligar(): void {
    this.ligado = true;
    console.log("O veículo está ligado");
  }

  desligar(): void {
    this.ligado = false;
    this.velocidade = 0;
    console.log("O veículo está desligado");
  }

  acelerar(): void {
    if (this.ligado) {
      this.velocidade += 10;
      console.log("Acelerando... Velocidade atual: " + this.velocidade + " km/h");
    } else {
      console.log("Não é possível acelerar com o veículo desligado");
    }
  }

  frear(): void {
    if (this.velocidade > 0) {
      this.velocidade -= 10;
      console.log("Freando... Velocidade atual: " + this.velocidade + " km/h");
    } else {
      console.log("O veículo já está parado");
    }
  }

  status(): void {
    console.log("Marca: " + this.marca);
    console.log("Modelo: " + this.modelo);
    console.log("Ligado: " + this.ligado);
    console.log("Velocidade: " + this.velocidade + " km/h");
  }
}

// Exemplo de uso da classe
const meuVeiculo = new Veiculo("Toyota", "Corolla");

meuVeiculo.ligar();
meuVeiculo.status();

meuVeiculo.acelerar();
meuVeiculo.acelerar();
meuVeiculo.frear();

meuVeiculo.status();
meuVeiculo.desligar();