const objLivro = {
  titulo: '',
  autor: '',
  anoPublicado: '',
  genero: '',
};

objLivro.titulo = 'Harry Potter';
objLivro.autor = 'JK Roling';
objLivro.anoPublicado = 1998;
objLivro.genero = 'Ficção';

objLivro.avaliacao = null;
console.log(objLivro);

const novaAvaliacao = { nota: 4.5, comentario: 'Ótima leitura!' };

if (objLivro.avaliacao == null) {
  objLivro.avaliacao = novaAvaliacao;
} else {
  console.log('Esse livro já possui uma avaliação');
}

console.log(objLivro);

objLivro.genero = 'Aventura';

console.log(objLivro);

console.log(`Detalhes do livro:
    Titulo: ${objLivro.titulo}
    Autor: ${objLivro.autor}
    Ano de Publicação: ${objLivro.anoPublicado}
    Gênero: ${objLivro.genero}
    Avaliação: `);

console.table(objLivro);
