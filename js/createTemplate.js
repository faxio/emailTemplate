const templateGroup  = document.querySelector(".templates-group")
const btnNewtemplate = document.querySelector("#new-template");
import jsonData from "./persistence/info.json" assert { type: "json" };

Sortable.create(templateGroup,{
    animation: 150,
    chosenClass: "seleccionado",
    dragClass: "drag"
})

document.addEventListener('DOMContentLoaded', function(){
    console.log(jsonData.content)
    jsonData.content.map(( elem) => {
        const contenedor = document.createElement(elem.type);
        const texto      = document.createElement("h3");
        const btnEdit    = document.createElement("a");

        texto.innerText  = elem.name
        btnEdit.innerText = "Edit"
        contenedor.className = "template-archivo "+elem.className
        btnEdit.className  = "btn"

        btnEdit.addEventListener('click', function(){
            window.location.href = "./edit.html?q="+elem.className
        })
        contenedor.appendChild(texto)
        contenedor.appendChild(btnEdit)
    
        templateGroup.appendChild(contenedor)

    })
})

btnNewtemplate.addEventListener('click', function() {
    // Crear un template con un nombre
    const contenedor = document.createElement("div");
    const texto      = document.createElement("h3");
    const btnEdit    = document.createElement("a");

    // Agregar Texto
    texto.innerText  = "New template"
    btnEdit.innerText = "Edit"

    // Agregar clases
    contenedor.className = "template-archivo"
    contenedor.id        = (Math.random()*10).toString(36).substring(2,40)
    btnEdit.className  = "btn"

    // Añadir evento
    btnEdit.addEventListener('click', function(){
        window.location.href = "./edit.html"
    })
    contenedor.appendChild(texto)
    contenedor.appendChild(btnEdit)

    templateGroup.appendChild(contenedor)
})