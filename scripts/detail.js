


document.addEventListener('DOMContentLoaded', async () => {
    let idCard = localStorage.getItem('idCard');

    let res = await fetch(`http://localhost:4000/personajes/${idCard}`);
    let data = await res.json();

   
    alert(data.name)



});