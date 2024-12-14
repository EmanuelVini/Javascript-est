const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '123456789',
  turma: 'JavaScript',
};

estudante.nome;

function exibirInfoEstudante(objEstudante, infoEstudante) {
  return objEstudante[infoEstudante];
}

console.log(exibirInfoEstudante(estudante, 'nome'));
console.log(exibirInfoEstudante(estudante, 'idade'));
