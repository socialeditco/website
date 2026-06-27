import './styles.css';
import { brand } from './content.js';

const app = document.querySelector('#app');
app.textContent = brand.tagline;
