import { searchBar } from './Modules/search/api';
import './style.css';

function init() {
  const content = document.createElement('div');
  content.className = 'content';
  document.body.appendChild(content);

  searchBar(content);
}

init();
