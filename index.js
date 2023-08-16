let weather = {
  "Pietermarizburg": {
    temp: 19.7,
    humidity: 80
  },
  "Bloemfontein": {
    temp: 7,
    humidity: 35
  },
  "Durban": {
    temp: 13,
    humidity: 81
  },
  "Pretoria": {
    temp: 11,
    humidity: 36
  },
  "Capetown": {
    temp: 15,
    humidity: 64
  }
};

let city = prompt("Enter a city?");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
