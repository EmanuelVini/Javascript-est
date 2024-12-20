const estudantes = require('./estudantes.json');

function buscarInfo(lista, chave, valor) {
  return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscarInfo(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEstudante = buscarInfo(estudantes, 'telefone', '11998123183');
console.log(estudanteEncontrado);
