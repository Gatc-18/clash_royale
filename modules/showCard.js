export const ShowCard = (data, container) => {
   
      data.forEach( element => {
        const {id, img:imagen } = element;
          container.innerHTML += `
             <img src=${imagen} id=${id} />
          `
      });
}