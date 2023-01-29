export const limpiarElemento = (elemento) => {

    while (elemento.firstChild){
        elemento.removeChild(elemento.firstChild)
    }

}

export const createElementWithClass = (elemento, className) => {

    const newElement =  document.createElement(elemento)
    newElement.className = className

    return newElement;
}