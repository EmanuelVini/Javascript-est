const alunos = ['Paulo', 'Marcio', 'Luna', 'Bia'];
const media = [8, 7.4, 10, 9.5];

const listaClasse = [alunos, media];

console.log(listaClasse);

function exibirNomeNota(aluno) {
  if (listaClasse[0].includes(aluno)) {
    const indice = listaClasse[0].indexOf(aluno);
    const mediaAluno = listaClasse[1][indice];
    console.log(`A média do aluno ${aluno} foi ${mediaAluno}`);
  } else {
    console.log('Estudante não cadastrado na lista.');
  }
}

exibirNomeNota('Paulo');
exibirNomeNota('João');
