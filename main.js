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

let timeDate = document.querySelector('.time-date')

let timeNow = new Date().getHours()
let Day = timeNow >= 5 && timeNow < 12
          ? "<i class='bx bxs-sun date-sun' ></i> good morning" : timeNow >= 12 && timeNow < 18
          ? "<i class='bx bxs-ghost date-afternoon' ></i> good afternoon" : "<i class='bx bxs-moon date-night'></i> good evening"
timeDate.innerHTML = `<h1>${Day}</h1>`

var loader = document.getElementById('loader-website')
window.addEventListener('load',function(){
    loader.style.display = 'none'
})
//fullscreen


let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Tắt Fullscreen";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "Bật Fullscreen";
    }
});

//progress-bar ( scroll)

document.addEventListener('DOMContentLoaded',() =>{
 
    const scrollBar = document.getElementById('value-progress')
    document.addEventListener('scroll', () =>{
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    
    const percentPage = Math.floor((scrollTop / (scrollHeight - clientHeight) *100))
    scrollBar.style.width = percentPage + "%"
    
  })
})



