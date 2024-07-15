function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + "°C is " + fahrenheit + "°F");
}
function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    console.log(fahrenheit + "°F is " + celsius + "°C");
}
celsiusToFahrenheit(25);
fahrenheitToCelsius(77);