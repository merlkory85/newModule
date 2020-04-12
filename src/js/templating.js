import itemsTemplate from '../gallery-item.hbs';
import listDishes from '../json/menu.json';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(listDishes);
galleryRef.insertAdjacentHTML('beforeend', markup);
