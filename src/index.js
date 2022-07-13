import './styles/style.scss';
import { getWeather } from './weather';

const input = document.getElementById('search-bar');
const button = document.getElementById('btn');

//event listeners for search bar and button
button.addEventListener('click', () => getWeather(input.value))
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getWeather(input.value);
  }
});
