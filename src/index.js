import './style.css';

const form = document.querySelector('form');
const search = document.getElementById('search');

// Fetch weather data from API by providing location
async function fetchWeatherData(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b4feac5141fe4cff881180840230608&q=${location}`);

  return response;
}

// Process the data acquired using .json()
async function processWeatherData(location) {
  const response = await fetchWeatherData(location);
  const data = await response.json();

  return console.log(data);
}

processWeatherData('skopje');

// Add event listener to form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = search.value;
  processWeatherData(location);
});
