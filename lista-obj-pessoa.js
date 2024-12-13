pessoas = [
  { nome: 'João', idade: 21, cidade: 'Campina' },
  { nome: 'Ana', idade: 27, cidade: 'Recife' },
  { nome: 'Paulo', idade: 34, cidade: '' },
];

function mostrarListaPessoas(pessoas) {
  console.log(pessoas);
}

pessoas.push({ nome: 'Julia', idade: 50, cidade: 'Patos' });

function filtrarPorCidade(pessoas, cidade) {
  return pessoas.filter((pessoa) => pessoa.cidade === cidade);
}

const pessoaCidade = filtrarPorCidade(pessoas, 'Recife');
console.log(pessoaCidade);
