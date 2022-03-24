import { cards } from "../data/data.js";
import { ShowCard } from "../modules/showCard.js";

let nombreU = localStorage.getItem('nombreUsuario');
let contenedorWelcome = document.getElementById('welcome');
let containerCards = document.getElementById('containerCards');

contenedorWelcome.innerHTML = `
    <h1>Hola ${nombreU}, te damos la bienvenida a Clash Royale </h1>    
`


ShowCard(cards, containerCards )


