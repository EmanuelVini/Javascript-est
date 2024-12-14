const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '123456789',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['55900000000', '55900000001'],
  enderecos: [
    {
      rua: 'Rua xz ',
      numero: '555',
      bairro: 'Bairro y ',
      complemento: 'apt 112',
    },
    {
      rua: 'Rua ABC ',
      numero: '243',
      bairro: 'Bairro h ',
      complemento: 'apt 3',
    },
  ],
};

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
  console.error('é necessário ter um endereço.');
}
