let notas = [1, 4, 5, 6, 3, 2, 7, 8, 10, 22];

let somaDeNotas = 0;

notas.forEach(function (nota) {
  somaDeNotas += nota;
});

const media = somaDeNotas / notas.length;

console.log(`A média dos itens da lista é de ${media}`);
