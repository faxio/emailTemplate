import {  creaDivider, creaImagen, creaText } from "./objets.js";

const querystring = window.location.search
const contentNewTemplate = document.querySelector(".body-element-grid");
const contentTitle = document.querySelector("#body-element");
const btnVolver = document.querySelector(".volver-template");
const elementInsert = document.querySelector(".group-button-sidebar");
const contentTs = document.querySelector(".content-TS");

//Cargar tables
const table1 = document.querySelector('.table-primary')
const table2 = document.querySelector('.table-secundary')
const table3 = document.querySelector('.table-tercery')

const tablesAll = [table1, table2, table3]

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
    chosenClass: "seleccionado",
    dragClass: "drag",

    onEnd: (evt) => {
        createElement(evt.item, evt.to, contentTs, table2)
    }

});

document.addEventListener('DOMContentLoaded', function(){

    const element = querystring.substring(3);
    
    const texto = document.createElement('h3')
    let filter = jsonData.content.filter( elem => elem.className === element)[0]

    if (!filter) texto.innerText = "New Template"
    else{ texto.innerText = filter.name }
    

    contentTitle.insertBefore(texto, contentTitle.firstChild)

    // Limpiar contenido
    while (contentTs.firstChild){
        contentTs.removeChild(contentTs.firstChild)
    }
    contentTs.appendChild(table2)

    // buttons components, edit, future.

    for (const child of tables.children){

        child.addEventListener('click', function() {
            
            //limpiar content
            while (contentTs.firstChild){
                contentTs.removeChild(contentTs.firstChild)
            }

            //colocar el contenido que queremos
            const element = child.getAttribute('tableselect')
            contentTs.appendChild( tablesAll.filter( table =>  table.className === element)[0] )
        })
    }
})

btnVolver.addEventListener('click', function(){
        window.location.href = "./index.html"

} )

const createElement = (item, to, contentTs, table2) => {

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
            creaText(item, contentTs, table2)
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