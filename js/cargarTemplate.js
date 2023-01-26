import {  creaDivider, creaImagen, creaText } from "./objets.js";

const querystring = window.location.search
const contentNewTemplate = document.querySelector(".body-element-grid");
const contentTitle = document.querySelector("#body-element");
const btnVolver = document.querySelector(".volver-template")
const elementInsert = document.querySelector(".group-button-sidebar")
const sidebar = document.querySelector(".sidebar-drag-drop")

// Cargar btnsTables.
const tables = document.querySelector("#select-table");

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
    sort: false,

    onEnd: (evt) => {
        createElement(evt.item, evt.to)
    }

});

document.addEventListener('DOMContentLoaded', function(){

    const element = querystring.substring(3);
    
    const texto = document.createElement('h3')
    let filter = jsonData.content.filter( elem => elem.className === element)
    texto.innerText = filter[0].name

    contentTitle.appendChild(texto)

    // buttons components, edit, future.

    for (const child of tables.children){

        child.addEventListener('click', function() {
            console.log(child.id)
        })
    }
})

btnVolver.addEventListener('click', function(){
        window.location.href = "./index.html"

} )

const createElement = (item, to) => {

    //console.log(to.className)
    if (to.className === 'body-element-grid'){

    const type = item.getAttribute("data-id")
    item.className = "divContent"
    while (item.firstChild) {
        item.removeChild(item.firstChild);
    }

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
}

const creaColumn = (item) => {
    
    let idNew = (Math.random()*10).toString(36).substring(2,40)

    item.innerHTML = `
        <div class="cajaNegra"> 
            
        </div>
    `

    new Sortable(item, {
        filter: '.filtered',
        group: {
            name: 'shared',
            put: false,
    
        },
        animation: 150
    });
}