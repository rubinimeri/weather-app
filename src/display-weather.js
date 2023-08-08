import processWeatherData from './index';

const form = document.querySelector('form');
const search = document.getElementById('search');

// Display temperature
const displayDegrees = async (data) => {
  const tempValue = await data;
  const temp = document.querySelector('.temp');

  temp.textContent = tempValue.current.temp_c;
};

// Add event listener to form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = search.value;
  const cityData = processWeatherData(location);
  displayDegrees(cityData);
  /* console.log(cityData); */
});
