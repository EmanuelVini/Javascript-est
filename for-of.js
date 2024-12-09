const lista = [1, 4, 5, 6, 3, 2, 7, 8, 10, 22];

let somaTotal = 0;
for (let soma of lista) {
  somaTotal += soma;
}

const media = somaTotal / lista.length;

console.log(`A média dos itens da lista é de ${media}`);
