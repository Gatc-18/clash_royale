let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    // Prevenir que la pagina se recargue al ejecutarse el evento submit
    let name = document.querySelector('input').value;
    e.preventDefault();

    
    localStorage.setItem("nombreUsuario", name)
    form.reset();
    window.location.href = './pages/home.html';
})

