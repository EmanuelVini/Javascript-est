function fahrenheitToCelsius(tempF) {
  const resultCelsius = (tempF - 32) * (5 / 9);
  return resultCelsius;
}
console.log(fahrenheitToCelsius(32)); //Resultado esperado 0

function celsiusToFahrenheit(tempC) {
  const resultFahrenheit = tempC * (9 / 5) + 32;
  return resultFahrenheit;
}

console.log(celsiusToFahrenheit(100)); // Resultado esperadoo 212
