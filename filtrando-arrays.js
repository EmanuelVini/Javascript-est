const alunos = ['Ana', 'Marcos', 'Júlia', 'Gustavo'];
const notas = [10, 6, 7, 9];

const reprovados = alunos.filter((aluno, indice) => {
  return notas[indice] < 7;
});

const aprovados = alunos.filter((aluno, indice) => {
  return notas[indice] >= 7;
});

console.log(`Estão reprovados os seguintes alunos: ${reprovados}`);
console.log(`Estão aprovados os seguintes alunos: ${aprovados}`);
