const querystring = window.location.search
const contentNewTemplate = document.querySelector("#body-element");
const btnVolver = document.querySelector(".volver-template")
const elementInsert = document.querySelector(".group-button-sidebar")

import jsonData from "./persistence/info.json" assert { type: "json" };


new Sortable(contentNewTemplate, {
    group: {
        name: 'shared',

    },
    animation: 150
});

new Sortable(elementInsert, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false,
    },
    animation: 150,
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
    onEnd: (evt) => {
        createElement(evt.item)
    }

});

document.addEventListener('DOMContentLoaded', function(){
    console.log(jsonData)
    const element = querystring.substring(3);
    
    const texto = document.createElement('h3')
    let filter = jsonData.content.filter( elem => elem.className === element)
    console.log(filter[0])
    texto.innerText = filter[0].name

    contentNewTemplate.appendChild(texto)

})

btnVolver.addEventListener('click', function(){
        window.location.href = "./index.html"

} )

const createElement = (item) => {

    const type = item.getAttribute("data-id")

    switch(type){
        case 'image':
            creaImagen(item)
            break;
        case 'divider':
            creaDivider(item)
            break;
        case 'text':
            creaText(item)
            break;
        case 'column':
            creaColumn(item)
            break;
    }
}