function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

let tempCelsius = 60;
let tempFahrenheit = celsiusToFahrenheit(tempCelsius);
console.log(`${tempCelsius}°C is ${tempFahrenheit}°F`);

tempFahrenheit = 45;
tempCelsius = fahrenheitToCelsius(tempFahrenheit);
console.log(`${tempFahrenheit}°F is ${tempCelsius}°C`);
