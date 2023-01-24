const templateGroup  = document.querySelector(".templates-group")
const btnNewtemplate = document.querySelector("#new-template");
import jsonData from "./persistence/info.json" assert { type: "json" };

document.addEventListener('DOMContentLoaded', function(){
    console.log(jsonData)
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