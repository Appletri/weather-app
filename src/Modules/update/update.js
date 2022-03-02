import './style.css';
import { format } from 'date-fns';
import { weatherIcon } from './weatherIcon';

function update(data, parent) {
  if (document.querySelector('.main')) {
    parent.removeChild(document.querySelector('.main'));
  }
  const main = document.createElement('div');
  const current = document.createElement('div');
  const hourly = document.createElement('div');
  const daily = document.createElement('div');
  const forecast = document.createElement('div');
  const dataCurrent = ['temp', 'pressure', 'humidity', 'wind_speed'];
  main.className = 'main';
  current.className = 'current';
  forecast.className = 'forecast';
  daily.className = 'daily';

  function displayForecastData(arr, parent) {
    const forecastData = ['temp', 'night', 'weather'];
    const header = document.createElement('h1');
    header.textContent = '8 Day Forecast';
    forecast.appendChild(header);
    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let y = 0; y < arr.length; y += 1) {
      const div = document.createElement('div');
      const info = [arr[y].temp.day, arr[y].temp.night, arr[y].weather[0].main];
      const day = document.createElement('h3');
      day.textContent = format(new Date((new Date()).valueOf() + (y * 1000 * 3600 * 24)), 'EEEE');
      div.appendChild(day);
      for (let i = 0; i < info.length; i += 1) {
        if (i === 2) {
          weatherIcon(info[i], div);
        } else {
          const p = document.createElement('p');
          p.textContent = `${Math.round(info[i])}${String.fromCharCode(176)}F`;
          div.appendChild(p);
        }
      }
      div.className = 'weather-details';
      parent.appendChild(div);
    }
  }

  function displayData(arr, parent) {
    arr.forEach((x) => {
      const div = document.createElement('div');
      div.className = 'weather-details';
      div.textContent = `${x}:${data.current[x]}`;
      parent.appendChild(div);
    });
  }
  displayData(dataCurrent, main);
  // displayForecastData(data.hourly, hourly);
  displayForecastData(data.daily, daily);

  forecast.appendChild(daily);
  main.appendChild(current);
  main.appendChild(forecast);
  parent.appendChild(main);
}

export { update };
