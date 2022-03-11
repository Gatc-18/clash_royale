import { cards } from "../data/data.js";

let title = document.querySelector('title');
let imagen = document.querySelector('img');
let h1Title = document.querySelector('h1');
let parrafo = document.querySelector('p');
let button = document.querySelector('button');

document.addEventListener('DOMContentLoaded', () => {
    let OBJECT_CARD = JSON.parse(localStorage.getItem('ObjectCard'));
 
    
    let { id, img, name, description } =  OBJECT_CARD;
    
    title.textContent = name;
    imagen.setAttribute('src', img);
    imagen.setAttribute('alt', name);
    h1Title.textContent = name;
    parrafo.textContent = description
})
