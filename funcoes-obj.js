const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '123456789',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['55900000000', '55900000001'],
  media: 7.5,
  estaAprovado: function (mediaBase) {
    return this.media >= mediaBase ? true : false;
  },
};

console.log(estudante.estaAprovado(7));
