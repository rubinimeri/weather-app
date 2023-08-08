import processWeatherData from './index';

const form = document.querySelector('form');
const search = document.getElementById('search');

// Display temperature
const displayDegrees = async (data) => {
  const tempValue = await data;
  const temp = document.querySelector('.temp');

  temp.textContent = tempValue.current.temp_c;
};

// Display city and country name
const displayLocationName = async (data) => {
  const response = await data;
  const location = document.querySelector('.city');

  location.textContent = `${response.location.name}, ${response.location.country}`;
};

// Add event listener to form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = search.value;
  const cityData = processWeatherData(location);
  displayDegrees(cityData);
  displayLocationName(cityData);
  /* console.log(cityData); */
});
