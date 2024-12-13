const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '123456789',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['55900000000', '55900000001'],
  endereco: [
    {
      rua: 'Rua xz ',
      numero: '555',
      bairro: 'Bairro y ',
      complemento: 'apt 112',
    },
  ],
};

estudante.endereco.push({
  rua: 'Rua ABC ',
  numero: '222',
  bairro: 'Bairro k ',
  complemento: '',
});

//console.log(estudante.endereco);
//console.log(estudante.endereco[0]);
//console.log(estudante.endereco[1]);

const endComComplemento = estudante.endereco.filter(
  (endereco) => endereco.complemento
);

console.log(endComComplemento);
