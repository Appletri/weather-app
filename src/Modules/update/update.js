import './style.css';
import { format } from 'date-fns';

function update(data, parent) {
  if (document.querySelector('.main')) {
    parent.removeChild(document.querySelector('.main'));
  }
  const main = document.createElement('div');
  const current = document.createElement('div');
  const hourly = document.createElement('div');
  const daily = document.createElement('div');
  const forecast = document.createElement('div');
  const currentDay = format(new Date(), 'EEEE');
  console.log(currentDay);
  const dataCurrent = ['temp', 'pressure', 'humidity', 'wind_speed'];
  main.className = 'main';
  current.className = 'current';
  forecast.className = 'forecast';

  function displayForecastData(arr, parent) {
    const forecastData = ['temp', 'clouds', 'weather'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const header = document.createElement('h1');
    header.textContent = '7 Day Forecast';
    parent.appendChild(header);
    arr.forEach((x) => {
      const div = document.createElement('div');
      const info = [x.temp.day, x.clouds, x.weather[0].main];
      const day = document.createElement('h3');
      day.textContent = 'Friday';
      div.appendChild(day);
      for (let i = 0; i < info.length; i += 1) {
        const p = document.createElement('p');
        p.textContent = `${forecastData[i]}:${info[i]}`;
        div.appendChild(p);
      }
      div.className = 'weather-details';
      parent.appendChild(div);
    });
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
