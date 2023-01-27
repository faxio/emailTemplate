// loading refs of inputs
const textModify = document.querySelector('.text-modify');
const fontSizeModify = document.querySelector('.font-size-modify')
const colorLetterModify = document.querySelector('.color-letter-modify')
const backgroundColorLeterModify = document.querySelector('.backgroundColor-leter-modify')
const leftMod = document.querySelector('.left-mod')
const topMod = document.querySelector('.top-mod')

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
    
    const parrafo = document.createElement('p');
    parrafo.textContent = 'New Text'
    parrafo.className   = 'parrafo'

    item.appendChild(parrafo)
    
    item.style.fontSize = '16px'
    item.addEventListener('click', function (){
        
        while (contentTs.firstChild){
            contentTs.removeChild(contentTs.firstChild)
        }
        contentTs.appendChild(table2)
        textModify.value = item.innerText

        /* cambiar el valor del texto */
        textModify.oninput = function() {
            item.lastChild.textContent = textModify.value
        };
        
        /* Cambiar el tamño de la fuente */
        fontSizeModify.value = item.style.fontSize.slice(0,item.style.fontSize.indexOf('p'))
        fontSizeModify.oninput = function() {
            item.style.fontSize = fontSizeModify.value + "px"
        };

        /* Cambiar el color de letra*/
        colorLetterModify.value = "#8a2be2"
        colorLetterModify.oninput = function() {
            item.lastChild.style.color = colorLetterModify.value
        };


        /* Cambiar el color del fondo */
        backgroundColorLeterModify.value = "#ffffff"
        backgroundColorLeterModify.oninput = function() {
            item.style.backgroundColor = backgroundColorLeterModify.value
        };

        /* Padding: top - bottom */
        let padtb = item.style.paddingTop.slice(0,item.style.paddingTop.indexOf('p'))
        if (padtb.length === 0) padtb = '0'

        topMod.value = padtb
        topMod.oninput = function() {
            item.style.paddingTop= topMod.value + "px"
            item.style.paddingBottom = topMod.value + "px"
        };

        /* Padding: left - right */
        let padlr = item.style.paddingLeft.slice(0,item.style.paddingLeft.indexOf('p'))
        if (padlr.length === 0) padlr = '0'

        leftMod.value = padlr
        leftMod.oninput = function() {
            item.style.paddingLeft = leftMod.value + "px"
            item.style.paddingRight = leftMod.value + "px"
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


