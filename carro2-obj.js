const carro = {
  marca: 'VW',
  modelo: 'Gol',
  ano: 2015,
  cor: 'preto',
  ligado: true,

  ligar: function () {
    if (!this.ligado) {
      this.ligado = true;
      console.log('O carro está ligado.');
    } else {
      console.log('O carro já está ligado.');
    }
  },

  desligar: function () {
    if (this.ligado) {
      this.ligado = false;
      console.log('O carro está desligado.');
    } else {
      console.log('O carro ja está desligado.');
    }
  },

  obterDetalhes: function () {
    const status = this.ligado ? 'Ligado' : 'Desligado';
    return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}`;
  },
};

carro.ligar();
carro.desligar();
carro.desligar();
carro.ligar();
console.log(carro.obterDetalhes());
