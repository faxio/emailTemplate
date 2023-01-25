    /*
    onEnd: (evt) => {
        const item = evt.item;
        item.className = "divContent"
        while (item.firstChild) {
            item.removeChild(item.firstChild);
        }
        item.innerHTML = `<p class="parrafo"> Soy un texto </p>`
        console.log(evt.item)
    },*/

export const creaImagen = (item) => {

    item.innerHTML = `
        <img width="200px" src="../images/aguila.jpg"/>
    `
}

export const creaDivider = (item) => {
    
    item.innerHTML = `
        <hr>
    `
}

export const creaText = (item) => {
    
    item.innerHTML = `
        <p class="parrafo"> New text </p>
    `
}

export const creaColumn = (item) => {
    
    item.innerHTML = `
        <div> Soy una columna </div>
    `
}