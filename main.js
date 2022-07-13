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
    e.preventDefault()
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Tắt Fullscreen"
    }
    else {
        fullscreen = false
        document.exitFullscreen()
        fsEnter.innerHTML = "Bật Fullscreen"
    }
})

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


//load more
const loadmore = document.querySelector('.button-loader');
    let currentItems = 2;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.load-more-game .trending-container')];
        for (let i = currentItems; i < currentItems + 2; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 2;

        // Load more button will be hidden after list fully loaded
          if (currentItems >= elementList.length) {
              loadmore.style.display = 'none';
            
          }
        })


//change image

const imageMain = document.querySelector('.change-image')
const imageChange = ['/image/imgContent3.jpg','/image/imgChange1.jpg','/image/imgChange2.jpg','/image/imgPubg.jpg']

setInterval(function(){
    var randomImage = Math.floor(Math.random() *4)
    imageMain.src = imageChange[randomImage]
},4000)

//popup

const openPopup = document.querySelector('.notifycation--box')
const popUp = document.querySelector('.show-popup')
const closePopup = document.querySelector('.close-show-content')
openPopup.addEventListener('click',function(){
    popUp.classList.toggle('active')
})

closePopup.addEventListener('click',function(){
    popUp.classList.remove('active')
})

//hide notify-ring-bell

const bellRing = document.querySelector('.bell--icon--header')
const notifyRing = document.querySelector('.notify-bell-ring')

bellRing.addEventListener('click',function(){
    setTimeout(function(){
      notifyRing.style.display = "none"
    },2000)
})


//comment || rating


function changeCommentRating(type,element){
    let tabs = document.getElementsByClassName('tab-item')

    for(i = 0 ; i < tabs.length;i++){
        tabs[i].style.background = 'white'
        tabs[i].style.color = 'black'
    }

    element.style.background = "black"
    element.style.color = "white"
   
    document.getElementById(type).style.display = 'block'

    switch(type){
        case 'comment':
          document.getElementById('rating').style.display = 'none'
          break
        case 'rating':
          document.getElementById('comment').style.display = 'none'
          break        
    }
}

// const iconLike = document.querySelector('.bxs-like')

// iconLike.addEventListener('click',function(){
//     iconLike.style.color = 'red'
// })