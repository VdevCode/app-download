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

//slide
var swiper = new Swiper(".trending-content", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true, 
        },
        autoplay:{
                delay:5000,
                disableOnteraction:false,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1068: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
});