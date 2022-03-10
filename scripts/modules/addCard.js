export const addCard = (data, id, seleccionado) => {
    let card = data.filter(item => item.id == id);
    let maso = JSON.parse(localStorage.getItem('cartas seleccionadas'));
    

    let encontrar = maso?.find(item => item.id == id);

    console.log(maso ? encontrar : "El maso no tenía nada")

    seleccionado.push(card);
    localStorage.setItem('cartas seleccionadas', JSON.stringify(seleccionado.flat()))
}