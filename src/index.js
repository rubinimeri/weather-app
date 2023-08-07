import './style.css';

async function fetchWeatherData(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b4feac5141fe4cff881180840230608&q=${location}`);

  return console.log(response);
}
fetchWeatherData('skopje');
