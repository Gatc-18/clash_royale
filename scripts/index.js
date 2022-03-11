import { cards } from "../data/data.js";
import { showCards } from "./modules/showCards.js";
let divWelcome = document.getElementById("welcome");
let contenedorCards = document.getElementById('containerCards');
let personajesSeleccionado = [];
let contador = document.getElementById('contador');




document.addEventListener('DOMContentLoaded', () => {
    let name = localStorage.getItem('nombreUsuario');
    divWelcome.innerHTML = `<h1>Hola ${name}  te damos la bienvenida a Clash Royale</h1>`;

    showCards(cards, contenedorCards)
})



document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cardImg')) {
        let idCard = e.target.id;
        let elemento = cards.find(item => item.id == idCard);
        localStorage.setItem('ObjectCard', JSON.stringify(elemento));
        window.location.href = './detail.html';
    }
})









