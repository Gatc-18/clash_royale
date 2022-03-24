import { ShowCard } from "../modules/showCard.js";

let cartasFavoritas = JSON.parse(localStorage.getItem('cardFavoritos'));
let contenedor = document.getElementById('containerCards');

ShowCard(cartasFavoritas, contenedor);

