import { cards } from "../data/data.js";
import { ShowCard } from "../modules/showCard.js";

let nombreU = localStorage.getItem('nombreUsuario');
let contenedorWelcome = document.getElementById('welcome');
let containerCards = document.getElementById('containerCards');
let cantidadFavoritos = document.querySelector('button');
let datosLocalStorage = JSON.parse(localStorage.getItem('cardFavoritos'));
let favoritos =  datosLocalStorage == null ? [] : datosLocalStorage ;




cantidadFavoritos.textContent = favoritos.length;
contenedorWelcome.innerHTML = `
    <h1>Hola ${nombreU}, te damos la bienvenida a Clash Royale </h1>    
`


ShowCard(cards, containerCards);




document.addEventListener('click', ({target}) => {
    if(target.classList.contains('card')){
        let id = target.id;


        let elemento = cards.find(item => item.id == id);
        let indiceCard = cards.indexOf(elemento);
        let seleccionado = cards.splice(indiceCard, 1);

    
        favoritos.push(elemento);
        cantidadFavoritos.textContent = favoritos.length;
        localStorage.setItem('cardFavoritos', JSON.stringify(favoritos)  );
        ShowCard(cards, containerCards);

    }
})



