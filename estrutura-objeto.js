const objEstudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '123456789',
  turma: 'JavaScript',
};

console.log(objEstudante.nome);
console.log(`O nome do estudante é ${objEstudante.nome}`);
console.log(
  `Os 3 primeiros dígitos do CPF são: ${objEstudante.cpf.substring(0, 3)}`
);
