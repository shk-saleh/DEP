/*=============== SEARCH ===============*/
const searchBtn = document.getElementById("search-btn");
const searchCloseBtn = document.getElementById("search-close-btn");
const searchWindow = document.getElementById("search-console");

// If search button exist then it show window on click

if(searchBtn){

    searchBtn.addEventListener('click',()=>{

        searchWindow.classList.add("show-window");
    })

}

// If close button exist then it hide window on click


if(searchCloseBtn){

    searchCloseBtn.addEventListener('click',()=>{

        searchWindow.classList.remove("show-window");
    })

}


/*=============== LOGIN ===============*/

const logInBtn = document.getElementById("log-in-btn");
const loginCloseBtn = document.getElementById("login-close-btn");
const loginWindow = document.getElementById("sign-up-window");

// If search button exist then it show window on click

if(logInBtn){

    logInBtn.addEventListener('click',()=>{

        loginWindow.classList.add("show-window");
    })

}

// If close button exist then it hide window on click


if(loginCloseBtn){

    loginCloseBtn.addEventListener('click',()=>{

        loginWindow.classList.remove("show-window");
    })

}


/*=============== ADD SHADOW HEADER ===============*/

const header = document.getElementById("header");

const scrollHeader = ()=>{

    this.scrollY >= 50 ? header.classList.add("fixed-navbar") : header.classList.remove("fixed-navbar");
    
}

window.addEventListener('scroll',scrollHeader);

/*=============== HOME SWIPER ===============*/

let homeSwiper = new Swiper('.home-swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: -24,
    grabCursor: true,   
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    
    autoplay: {

        delay :3000,
        disableOnInteraction: false,
        
    },

    breakpoints:{
        1220:{
            spaceBetween: -71,
        }
    }
 
  });


/*=============== FEATURED SWIPER ===============*/

let featuredSwiper = new Swiper('.Featured-swiper', {
    // Optional parameters
    loop: true,
    spaceBetween:16,
    grabCursor: true,   
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    
    autoplay: {

        delay :3000,
        disableOnInteraction: false,
        
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    breakpoints:{
        1150:{
            slidesPerView:4,
            centeredSlides: false,
        }
    }
 
});


/*=============== NEW SWIPER ===============*/

let NewSwiper = new Swiper('.New-Book-swiper', {
    // Optional parameters
    loop: true,
    spaceBetween:16,
    slidesPerView: 'auto',
    
    breakpoints:{
        1150:{
            slidesPerView:3,
        }
    }
 
});

/*=============== TESTIMONIAL SWIPER ===============*/


let TestimonialSlider = new Swiper('.Testimonial-slider', {
    // Optional parameters
    loop: true,
    spaceBetween:40,
    slidesPerView: 'auto',
    
    autoplay: {

        delay :3000,
        disableOnInteraction: false,
        
    },


    breakpoints:{
        1150:{
            slidesPerView:3,
        }
    }
 
});


/*=============== DARK LIGHT THEME ===============*/ 

const themeToggle = document.getElementById('theme-btn');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.classList.toggle("ri-sun-line"); // Sun icon
  }
});


