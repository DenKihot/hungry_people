const buttonsTabs = document.querySelectorAll('.delicious-menu__name-list button')
const soupMenu = document.querySelector('.soup')
const pizzaMenu = document.querySelector('.pizza')
const pastaMenu = document.querySelector('.pasta')
const desertMenu = document.querySelector('.desert')
const wineMenu = document.querySelector('.wine')
const beerMenu = document.querySelector('.beer')
const drinksMenu = document.querySelector('.drinks')

console.log(soupMenu)

buttonsTabs.forEach((item) => {
    item.addEventListener('click',(event) =>{
        pizzaMenu.style.display = 'none'
        soupMenu.style.display = 'none'
        pastaMenu.style.display = 'none'
        desertMenu.style.display = 'none'
        wineMenu.style.display = 'none'
        beerMenu.style.display = 'none'
        drinksMenu.style.display = 'none'

        document.querySelector(`.${event.target.innerHTML.toLowerCase()}`).style.display = 'flex'
        // switch (event.target.innerHTML){
        //     case 'SOUP':
        //         soupMenu.style.display = 'flex'
        //         pizzaMenu.style.display = 'none'
        //         break;
        //     case 'PIZZA':
        //         soupMenu.style.display = 'none'
        //         pizzaMenu.style.display = 'flex'
        //         break;
            // case 'PASTA':
            // case 'DESERT':
            // case 'WINE':
            // case 'BEER':
            // case 'DRINKS':
        // }
    })
})
