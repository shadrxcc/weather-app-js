import './styles/style.scss';
import { getWeather } from './weather';

const input = document.getElementById('search-bar');
const button = document.getElementById('btn');


button.addEventListener('click', () => getWeather(input.value))

;