import './style.css';

// Fetch weather data from API by providing location
async function fetchWeatherData(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b4feac5141fe4cff881180840230608&q=${location}`);

  return response;
}

// Process the data acquired using .json()
export default async function processWeatherData(location) {
  const response = await fetchWeatherData(location);
  const data = await response.json();

  return data;
}
