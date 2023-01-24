const querystring = window.location.search
const contentNewTemplate = document.querySelector("#body-element");
const btnVolver = document.querySelector(".volver-template")

import jsonData from "./persistence/info.json" assert { type: "json" };

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