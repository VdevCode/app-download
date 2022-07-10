let menu = document.querySelector('.menu--icon--header')
let navbar = document.querySelector('.menu--header')

menu.onclick = () =>{
        navbar.classList.toggle('active')
        menu.classList.toggle('move')
}
let bell = document.querySelector('.notifycation')

document.querySelector('.bell--icon--header').onclick = () =>{
        bell.classList.toggle('active')
}


