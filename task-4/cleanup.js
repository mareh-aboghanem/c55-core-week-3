// Temperature conversion and weather report for City 1 and 2 and 3.
let cityName1 = "Amsterdam";
let tempCelsius1 = 22;
let windSpeed1 = 15;
let cityName2 = "Berlin";
let tempCelsius2 = 15;
let windSpeed2 = 20;
let cityName3 = "Copenhagen";
let tempCelsius3 = -5;
let windSpeed3 = 25;
function tempFahrenheit(tempCelsius){
  return (tempCelsius * 9 / 5) + 32;
}
function tempKelvin(tempCelsius){
  return tempCelsius + 273.15;
}
function weatherCondition(tempCelsius){
if (tempCelsius < 0) {
  return "Freezing";
} else if (tempCelsius >= 0 && tempCelsius < 10) {
  return "Cold";
} else if (tempCelsius >= 10 && tempCelsius < 20) {
  return "Mild";
} else if (tempCelsius >= 20 && tempCelsius < 30) {
  return "Warm";
} else {
  return "Hot";
}}
function windChill(tempCelsius, windSpeed){
  return 13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * tempCelsius * Math.pow(windSpeed, 0.16);
}
function weatherReport(cityName, tempCelsius, windSpeed) {
  console.log("Weather Report for " + cityName);
  console.log("Temperature: " + tempCelsius + "°C");
  console.log("Temperature: " + tempFahrenheit(tempCelsius) + "°F");
  console.log("Temperature: " + tempKelvin(tempCelsius) + "K");
  console.log("Status: " + weatherCondition(tempCelsius));
  console.log("Wind chill in " + cityName + ": " + windChill(tempCelsius, windSpeed).toFixed(2) + "°C");
  console.log("---");
}
weatherReport(cityName1, tempCelsius1, windSpeed1);
console.log("---");
weatherReport(cityName2, tempCelsius2, windSpeed2);
console.log("---");
weatherReport(cityName3, tempCelsius3, windSpeed3);
