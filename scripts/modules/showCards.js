export const showCards = (data, container) => {
    data.forEach(element => {
        let img = document.createElement('img');
        img.setAttribute('src', element.img );
        img.setAttribute('id', element.id );
        img.classList.add('cardImg')
        container.appendChild(img)
    });
}