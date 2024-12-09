function contadorStr(str) {
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    contador++;
  }
  return contador;
}

console.log(contadorStr('JavaScript')); //Resultado esperado 10
