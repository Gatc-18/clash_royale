import { showCards } from "./modules/showCards.js";

let contianerWelcome = document.getElementById('welcome');
let container = document.getElementById('containerCards');

document.addEventListener('DOMContentLoaded', () => {
    contianerWelcome.innerHTML = "<h1>Hola, estas son tus cartas</h1>"
    let cartasSelecionadas = JSON.parse(localStorage.getItem('Cseleccionadas'));

    showCards(cartasSelecionadas, container)
})