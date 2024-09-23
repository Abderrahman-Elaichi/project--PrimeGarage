var swiper = new Swiper(".services", {
    spaceBetween:10,
     loop:true,
     centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
       
    breakpoints: {
        0: {
            slidesPerView: 1,
            
          },
          
          768: {
            slidesPerView: 2,
            
          },
          1024: {
            
         
          },
    },
  });




  var menuBtn = document.querySelector("#menuBtn")
  var menu = document.querySelector("header .container ul");

menuBtn.addEventListener("click",sidebar)

function sidebar(){
  menu.classList.toggle('show')
}