const lista = [1, 2, 3, 4, 5];
let soma = 0;
function somaArray(lista) {
  for (let i = 0; i < lista.length; i++) {
    soma = soma + lista[i];
    //soma += lista[i]
  }
  return soma;
}

console.log(somaArray(lista));
console.log(soma);
