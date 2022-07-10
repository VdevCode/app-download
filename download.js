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


//read more page

const readMore = document.querySelector('.read-text')
const text = document.querySelector('.text-page')

readMore.addEventListener('click',(e) =>{
      text.classList.toggle('show-more')
      if(readMore.innerText === "Đọc thêm"){
            readMore.innerText = 'Cuộn Lại'
      }else{
            readMore.innerText = "Đọc thêm"
      }
})
