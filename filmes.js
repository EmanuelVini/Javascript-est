const catalogoFilmes = [
  { id: 1, titulo: 'Matrix', diretor: 'Lana Wachowski', anoLancamento: 1999 },
  {
    id: 2,
    titulo: 'Jurassic Park',
    diretor: 'Steven Spielberg',
    anoLancamento: 1993,
  },
  {
    id: 3,
    titulo: 'Inception',
    diretor: 'Christopher Nolan',
    anoLancamento: 2010,
  },
];

function filtrarFilmesPorAno(ano) {
  return catalogoFilmes.filter((filme) => filme.anoLancamento === ano);
}

const filmeAno99 = filtrarFilmesPorAno(1999);
console.log('Filmes lançados em 1999');
console.log(filmeAno99);

const filmeAno2010 = filtrarFilmesPorAno(2010);
console.log('Filmes lançados em 2010');
console.log(filmeAno2010);
