const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '123456789',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['55900000000', '55900000001'],
};

estudante.endereco = {
  rua: 'Rua xz ',
  numero: '555',
  bairro: 'Bairro y ',
};

console.log(estudante.endereco.rua);
