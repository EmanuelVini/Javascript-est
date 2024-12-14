const carro = {
  marca: 'VW',
  modelo: 'Gol',
  ano: 2015,
  cor: 'preto',
};

console.log('\nPropriedades do carro:');

for (propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}

carro.motor = 1.6;
carro.tipo = 'flex';

console.log('\nPropriedades do carro:');

for (propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}
