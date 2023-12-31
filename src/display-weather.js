import processWeatherData from './index';

const form = document.querySelector('form');
const search = document.getElementById('search');
const celsiusBig = document.querySelector('.big');

// Display temperature
const displayDegrees = async (data) => {
  const tempValue = await data;
  const temp = document.querySelector('.temp');

  temp.textContent = tempValue.current.temp_c;
  temp.append(celsiusBig);
};

// Display city and country name
const displayLocationName = async (data) => {
  const response = await data;
  const location = document.querySelector('.city');

  location.textContent = `${response.location.name}, ${response.location.country}`;
};

// Display humidity, wind and 'feels like'
const displayDetails = async (data) => {
  const response = await data;
  const humidity = document.querySelector('.humidity');
  const wind = document.querySelector('.wind');
  const feelsLike = document.querySelector('.feels-like');

  humidity.textContent = `Humidity - ${response.current.humidity}%`;
  wind.textContent = `Wind Speed - ${response.current.wind_kph}kmh`;
  feelsLike.textContent = `Feels Like - ${response.current.feelslike_c}`;
};

// Display weather condition
const displayCondition = async (data) => {
  const response = await data;
  const condition = document.querySelector('.condition');
  const conditionValue = response.current.condition.text;

  condition.textContent = conditionValue;
};

(function addDefaultLocation() {
  const cityData = processWeatherData('Skopje');
  displayDegrees(cityData);
  displayLocationName(cityData);
  displayDetails(cityData);
  displayCondition(cityData);
}());

// Add event listener to form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = search.value;
  const cityData = processWeatherData(location);
  displayDegrees(cityData);
  displayLocationName(cityData);
  displayDetails(cityData);
  displayCondition(cityData);
});
