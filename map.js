let notas = [4, 5, 6, 7, 8, 10, 22, 9];

const notasAtualizadas = notas.map(function (nota) {
  return nota + 1;
});

const notasReAtualizadas = notas.map((nota) =>
  nota + 1 >= 10 ? 10 : nota + 1
);

console.log(notasAtualizadas);
console.log(notasReAtualizadas);
