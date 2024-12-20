const estudantes = require('./estudantes.json');

function filtrarPropriedade(lista, propriedade) {
  return lista.filter((estudante) => {
    return !estudante.endereco.hasOwnProperty(propriedade);
  });
}

const listaEndereçoIncompleto = filtrarPropriedade(estudantes, 'cep');

console.log(listaEndereçoIncompleto);
