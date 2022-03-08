import { cards } from "../data/data.js";
import { addCard } from "./modules/addCard.js";
import { showCards } from "./modules/showCards.js";
let divWelcome = document.getElementById("welcome");
let contenedorCards = document.getElementById('containerCards');
let personajesSeleccionado = [];



document.addEventListener('DOMContentLoaded', () => {
    let name = localStorage.getItem('nombreUsuario');
    divWelcome.innerHTML = `<h1>Hola ${name}  te damos la bienvenida a Clash Royale</h1>`;

    showCards(cards, contenedorCards)
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('cardImg')){
        let idCard = e.target.id;
        addCard(cards, idCard, personajesSeleccionado  )
    }
})







