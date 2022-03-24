export const ShowCard = (data, container) => {
    container.innerHTML = '';
    data.forEach(element => {
        const { id, img: imagen } = element;
        container.innerHTML += `
             <img class='card' src=${imagen} id=${id} />
          `
    });
}