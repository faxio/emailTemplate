/*
<button class="icon-align-text-left">
                                <box-icon name='align-left' ></box-icon>
                            </button>
                            <button class="icon-align-text-center">
                                <box-icon name='align-middle' ></box-icon>
                            </button>
                            <button class="icon-align-text-right">
                                <box-icon name='align-right' ></box-icon>
                            </button>
*/

export const groupBtnAlignItems = (item , parrafo) => {

    while (item.firstChild){
        item.removeChild(item.firstChild)
    }

    const iconAlignTextLeft =  document.createElement('button')
    iconAlignTextLeft.className = 'icon-align-text-left'
    const boxIconAlignLeft  = document.createElement('div')
    boxIconAlignLeft.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 19h16v2H4zm0-4h11v2H4zm0-4h16v2H4zm0-8h16v2H4zm0 4h11v2H4z"></path></svg>
    `
    iconAlignTextLeft.appendChild(boxIconAlignLeft)
    

    const iconAlignTextCenter =  document.createElement('button')
    const boxIconAlignCenter  = document.createElement('div')
    iconAlignTextCenter.className = 'icon-align-text-center'
    boxIconAlignCenter.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 19h16v2H4zm3-4h10v2H7zm-3-4h16v2H4zm0-8h16v2H4zm3 4h10v2H7z"></path></svg>
    `
    iconAlignTextCenter.appendChild(boxIconAlignCenter)

    const iconAlignTextRight =  document.createElement('button')
    const boxIconAlignRight  = document.createElement('div')
    iconAlignTextRight.className = 'icon-align-text-right'
    boxIconAlignRight.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 19h16v2H4zm5-4h11v2H9zm-5-4h16v2H4zm0-8h16v2H4zm5 4h11v2H9z"></path></svg>
    `
    
    iconAlignTextRight.appendChild(boxIconAlignRight)

    item.appendChild(iconAlignTextLeft)
    item.appendChild(iconAlignTextCenter)
    item.appendChild(iconAlignTextRight)

    iconAlignTextLeft.addEventListener('click', function() {

        parrafo.style.textAlign = 'left' 
    })

    iconAlignTextCenter.addEventListener('click', function() {

        parrafo.style.textAlign = 'center' 
    })

    iconAlignTextRight.addEventListener('click', function() {

        parrafo.style.textAlign = 'right' 
    })
}