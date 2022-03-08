import { searchBar } from '../search/api';
import './style.css';

function jarvis() {
  const bg = document.createElement('div');
  const widget = document.createElement('div');
  const header = document.createElement('h1');
  const subHeader = document.createElement('h3');
  const content = document.createElement('div');
  // const ringContainer = document.createElement('div');
  // const ringNumber = 3;
  // for (let i = 1; i <= ringNumber; i += 1) {
  //   const ring = document.createElement('div');
  //   ring.className = 'ring';
  //   ringContainer.appendChild(ring);
  // }
  // ringContainer.className = 'ringContainer';
  widget.className = 'widget';
  content.className = 'content';
  bg.className = 'bg';
  header.textContent = 'J.A.R.V.I.S';
  subHeader.textContent = 'Weather App';
  widget.appendChild(header);
  widget.appendChild(subHeader);
  document.body.appendChild(bg);
  searchBar(widget, content);
  bg.appendChild(widget);
  // bg.appendChild(ringContainer);
  document.body.appendChild(content);
}

export { jarvis };
