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
        
        
        if(personajesSeleccionado.length <= 5){
            let idCard = e.target.id;

            let elemento = cards.find(item => item.id == idCard);
            let indice = cards.indexOf(elemento);  
            
            cards.splice(indice, 1);
    
            personajesSeleccionado.push(elemento);
    
            localStorage.setItem('Cseleccionadas', JSON.stringify(personajesSeleccionado))
           
            alert("Carta guardada correctamente")
            contador.innerHTML = ` <a href="./maso.html"><button>${personajesSeleccionado.length}</button></a>`
            showCards(cards, contenedorCards)



        } else {
            alert("Ya no puedes agregar cartas")
        }  
    }
})









