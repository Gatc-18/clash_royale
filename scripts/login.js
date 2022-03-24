let formulario = document.querySelector('form');



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombreU = document.querySelector('input').value;

    localStorage.setItem('nombreUsuario', nombreU);

    window.location.href = './pages/home.html';
    formulario.reset();
})










