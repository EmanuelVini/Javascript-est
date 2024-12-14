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
function exibirTelefones(telefone1, telefone2) {
  console.log(`Ligar para ${telefone1}`);
  console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(...estudante.telefones);

const dadosEnvio = {
  destinatario: estudante.nome,
  ...estudante.enderecos[0],
};
