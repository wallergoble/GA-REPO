// var temps = [];

//  Fahrenheit functions
var fahrenheitToCelsius = function () {
  var c = (f - 32) / 1.8;
  return c;
}
var fahrenheitToKelvin = function () {
  var k = (f + 459.67) / 1.8;
  return k;
}
// Celsius functions
var celsiusToFahrenheit = function() {
  var f = c * 1.8 + 32;
  temps.push(f);
}
var celsiusToKelvin = function () {
  var k = c + 273.15;
  temps.push(k);
}

// Kelvin Functions
var kelvinToFahrenheit = function () {
  var f = k * 1.8 - 459.67;
  temps.push(f);
}
var kelvinToCelsius = function () {
  var c = k - 273.15;
  temps.push(c);
}

var init = prompt("To convert from Fahrenheit, enter 1; from Celsius, enter 2; from Kelvin, enter 3");

if(init==1) {
  var f = prompt("Enter your starting temperature, please");
  console.log("Fahrenheit: " + f + " F°");
  console.log("Celsius: " + fahrenheitToCelsius(f) + " C°");
  console.log("Kelvin: " + fahrenheitToKelvin(f) + " K");
}
else if(init===2) {
  var c = prompt("Enter your starting temperature, please")
  console.log("Celsius: " + c + " C°");
  console.log("Fahrenheit: " + celsiusToFahrenheit(c) + " F°");
  console.log("Kelvin: " + celsiusToKelvin(c) + " K");
}
else if(init===3) {
  var k = prompt("Enter your starting temperature, please")
  console.log("Kelvin: " + k + " K");
  console.log("Fahrenheit: " + kelvinToFahrenheit(k) + " F°");
  console.log("Celsius: " + kelvinToCelsius(k) + " C°")
}
