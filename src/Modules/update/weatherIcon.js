import './weather-icon-animated-master/css/weather-icon-animated.css';

function weatherIcon(weather, parent) {
  const icon = document.createElement('div');
  const cloud = document.createElement('div');
  const cloud2 = document.createElement('div');
  const sun = document.createElement('div');
  const rays = document.createElement('div');
  const rain = document.createElement('div');
  const snow = document.createElement('div');
  const flake = document.createElement('div');
  const flake2 = document.createElement('div');
  const lightning = document.createElement('div');
  const bolt = document.createElement('div');
  const bolt2 = document.createElement('div');
  cloud.className = 'cloud';
  cloud2.className = 'cloud';
  sun.className = 'sun';
  rays.className = 'rays';
  rain.className = 'rain';
  snow.className = 'snow';
  flake.className = 'flake';
  flake2.className = 'flake';
  lightning.className = 'lightning';
  bolt.classname = 'bolt';
  bolt2.classname = 'bolt';
  switch (weather) {
    case 'Clouds':
      icon.className = 'icon cloudy';
      icon.appendChild(cloud);
      icon.appendChild(cloud2);
      break;
    case 'Rain':
      icon.className = 'icon rainy';
      icon.appendChild(cloud);
      icon.appendChild(rain);
      break;
    case 'Snow':
      icon.className = 'icon flurries';
      icon.appendChild(cloud);
      icon.appendChild(snow);
      snow.appendChild(flake);
      snow.appendChild(flake2);
      break;
    case 'Thunderstorm':
      icon.className = 'icon thunder-storm';
      icon.appendChild(cloud);
      icon.appendChild(lightning);
      lightning.appendChild(bolt);
      lightning.appendChild(bolt2);
      break;
    default:
      icon.className = 'icon sunny';
      icon.appendChild(sun);
      sun.appendChild(rays);
      break;
  }
  parent.appendChild(icon);
}
export { weatherIcon };
