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

for (let chave in estudante) {
  const tipo = typeof estudante[chave];
  if (tipo != 'object' && tipo != 'function') {
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`;
    console.log(texto);
  }
}
