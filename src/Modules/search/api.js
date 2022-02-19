import { update } from '../update/update';
import './style.css';

function searchBar(location) {
  const locationInput = document.createElement('input');
  const searchButton = document.createElement('button');
  const units = 'imperial';
  locationInput.type = 'text';
  locationInput.className = 'location-input';
  locationInput.placeholder = 'Search Location...';
  searchButton.textContent = 'search';
  searchButton.className = 'search-button';

  function search() {
    async function fetchData() {
      try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationInput.value}&limit=1&appid=5c2b9f9ff5cf29851e0c0f6698975a00`, { mode: 'cors' });
        const info = await response.json();
        const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${info[0].lat}&lon=${info[0].lon}&units=${units}&appid=5c2b9f9ff5cf29851e0c0f6698975a00`, { mode: 'cors' });
        const weatherInfo = await weatherResponse.json();
        update(weatherInfo, location);
      } catch (error) {
        console.log('error fetching information');
      }
    }
    fetchData();
    // const weatherData = fetchData();
    // console.log(fetchData().then(data => data);
    // update(weatherData, location);
  }

  searchButton.addEventListener('click', search);
  location.appendChild(locationInput);
  location.appendChild(searchButton);
}

export { searchBar };
