import { limpiarElemento, createElementWithClass } from "./utils/utils.js"


export const groupBtnAlignItems = (item , parrafo) => {

    limpiarElemento(item)

    const iconAlignTextLeft = createElementWithClass('button', 'icon-align-text-left')

    const boxIconAlignLeft  = document.createElement('div')
    boxIconAlignLeft.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 19h16v2H4zm0-4h11v2H4zm0-4h16v2H4zm0-8h16v2H4zm0 4h11v2H4z"></path></svg>
    `
    iconAlignTextLeft.appendChild(boxIconAlignLeft)
    

    const iconAlignTextCenter =  createElementWithClass('button', 'icon-align-text-center')

    const boxIconAlignCenter  = document.createElement('div')
    boxIconAlignCenter.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 19h16v2H4zm3-4h10v2H7zm-3-4h16v2H4zm0-8h16v2H4zm3 4h10v2H7z"></path></svg>
    `

    iconAlignTextCenter.appendChild(boxIconAlignCenter)

    const iconAlignTextRight =  createElementWithClass('button', 'icon-align-text-right')

    const boxIconAlignRight  = document.createElement('div')
    boxIconAlignRight.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 19h16v2H4zm5-4h11v2H9zm-5-4h16v2H4zm0-8h16v2H4zm5 4h11v2H9z"></path></svg>
    `
    
    iconAlignTextRight.appendChild(boxIconAlignRight)

    item.append(iconAlignTextLeft, iconAlignTextCenter, iconAlignTextRight)

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