// loading refs of inputs
const textModify = document.querySelector('.text-modify');
const fontSizeModify = document.querySelector('.font-size-modify')

export const creaImagen = (item) => {

    item.innerHTML = `
        <img width="200px" src="../images/aguila.jpg"/>
    `
}

export const creaDivider = (item) => {
    
    item.innerHTML = `
        <div class="divider-size">
            <hr >
        </div>
    `
}

export const creaText = (item, contentTs, table2) => {
    
    item.innerHTML = `

            <p class="parrafo"> New text </p>
        
    `
    
    item.style.fontSize = '16px'
    item.addEventListener('click', function (){
        
        while (contentTs.firstChild){
            contentTs.removeChild(contentTs.firstChild)
        }
        contentTs.appendChild(table2)
        
        
        textModify.value = item.innerText

        textModify.oninput = function() {
            item.innerText = textModify.value
        };

        console.log(item.style)
        

        fontSizeModify.value = item.style.fontSize.slice(0,item.style.fontSize.indexOf('p'))
        fontSizeModify.oninput = function() {
            item.style.fontSize = fontSizeModify.value + "px"
        };
    })
}

export const creaColumn = (item) => {
    
    let idNew = (Math.random()*10).toString(36).substring(2,40)

    item.innerHTML = `
        <div class="cajaNegra"> 
            
        </div>
    `

    new Sortable(item, {
        group: {
            name: 'dishared',
    
        },
        animation: 150
    });
}


