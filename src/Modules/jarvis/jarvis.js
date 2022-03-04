import { searchBar } from '../search/api';
import './style.css';

function jarvis() {
  const bg = document.createElement('div');
  const header = document.createElement('h1');
  const subHeader = document.createElement('h3');
  const content = document.createElement('div');
  content.className = 'content';
  bg.className = 'bg';
  header.textContent = 'J.A.R.V.I.S';
  subHeader.textContent = 'Weather App';
  bg.appendChild(header);
  bg.appendChild(subHeader);
  document.body.appendChild(bg);
  searchBar(bg, content);
  document.body.appendChild(content);
}

export { jarvis };
