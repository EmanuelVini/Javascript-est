const pessoa = {
  nome: 'José',
  notas: [5, 8, 9],

  calcularMediaNotas: function () {
    const soma = this.notas.reduce((soma, nota) => soma + nota, 0);
    const media = soma / this.notas.length;
    return media.toFixed(1);
  },

  classificarDesempenho: function () {
    const media = this.calcularMediaNotas();

    if (media >= 9) {
      return 'Desempenho excelente';
    } else if (7.5 <= media <= 8.9) {
      return 'Bom desempenho';
    } else if (7.5 > media >= 6) {
      return 'Desempenho regular';
    } else {
      return 'Desempenho insuficiente';
    }
  },
};

const mediaAluno = pessoa.calcularMediaNotas();
console.log(`O aluno ${pessoa.nome} obteve a média: ${mediaAluno}`);

const desempenhoAluno = pessoa.classificarDesempenho();
console.log(`O aluno ${pessoa.nome} obteve o desempenho: ${desempenhoAluno}`);
