import { ShowCard } from "../modules/showCard.js";

let nombreU = localStorage.getItem('nombreUsuario');
let contenedorWelcome = document.getElementById('welcome');
let containerCards = document.getElementById('containerCards');
let cantidadFavoritos = document.querySelector('button');
let datosLocalStorage = JSON.parse(localStorage.getItem('cardFavoritos'));
let favoritos = datosLocalStorage == null ? [] : datosLocalStorage;
let cards = [];

document.addEventListener('DOMContentLoaded', async () => {


    let res = await fetch('http://localhost:4000/personajes');
    cards = await res.json();
 
    ShowCard(cards, containerCards);

});


cantidadFavoritos.textContent = favoritos.length;
contenedorWelcome.innerHTML = `
    <h1>Hola ${nombreU}, te damos la bienvenida a Clash Royale </h1>    
`







document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('card')) {
        let id = target.id;
    
        
        localStorage.setItem('idCard', id);
        window.location.href = '../pages/detail.html'
    }
})



