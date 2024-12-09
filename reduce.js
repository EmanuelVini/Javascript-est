const salaPython = [7, 8, 7, 10, 2, 5];
const salaJava = [9, 6, 7, 8, 3];
const salaC = [4, 6, 5, 8, 8];

function calcularMediaNotas(listaNotas) {
  const somarNotas = listaNotas.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);

  const media = somarNotas / listaNotas.length;
  return media;
}

console.log(calcularMediaNotas(salaPython));
console.log(calcularMediaNotas(salaJava));
console.log(calcularMediaNotas(salaC));
