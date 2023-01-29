const templateGroup  = document.querySelector(".templates-group")
const btnNewtemplate = document.querySelector("#new-template");
import jsonData from "./persistence/info.json" assert { type: "json" };



document.addEventListener('DOMContentLoaded', function(){
    
    
    jsonData.content.map(( elem ) => {
        const contenedor = document.createElement(elem.type);
        const texto      = document.createElement("h3");
        const btnEdit    = document.createElement("a");
        contenedor.setAttribute('data-id', elem['data-id'])

        texto.innerText  = elem.name
        btnEdit.innerText = "Edit"
        contenedor.className = "template-archivo "+elem.className
        btnEdit.className  = "btn"

        btnEdit.addEventListener('click', function(){
            window.location.href = "./edit.html?q="+elem.className
        })
        contenedor.append(texto, btnEdit)

    
        templateGroup.appendChild(contenedor)

    })


    Sortable.create(templateGroup,{
        animation: 150,
        chosenClass: "seleccionado",
        dragClass: "drag",
        group: "lista-template",
        store: {
            set: (sortable) => {
                const orden = sortable.toArray();
                localStorage.setItem(sortable.options.group.name, orden.join('|'));
            },
            get: (sortable) => {
                const orden = localStorage.getItem(sortable.options.group.name)
                console.log(orden)
                return orden? orden.split('|'): [];
            } 
        }
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
    let idunic           =  (Math.random()*10).toString(36).substring(2,40)
    contenedor.id        = idunic
    btnEdit.className  = "btn"



    // Añadir evento
    btnEdit.addEventListener('click', function(){
        window.location.href = "./edit.html?q="+idunic
    })
    
    contenedor.append(texto, btnEdit)
    templateGroup.appendChild(contenedor)
})