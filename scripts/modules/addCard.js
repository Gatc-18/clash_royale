export const addCard = (data, id, seleccionado) => {
    let card = data.filter(item => item.id == id);

    seleccionado.push(card);
    localStorage.setItem('cartas seleccionadas', JSON.stringify(seleccionado.flat())

    )
}