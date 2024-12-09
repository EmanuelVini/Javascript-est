function numRandon(min, max) {
  let numero = (Math.random() * (max - min) + min).toFixed(0);
  return numero;
}

console.log(numRandon(1, 50));
