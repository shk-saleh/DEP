// show and hide navbar

const navMenu = document.querySelector('.nav-menu');
const toggler = document.querySelector('.hamburger-toggler');
const closeBtn = document.querySelector('.nav-close');


toggler.addEventListener("click",()=>{

    navMenu.classList.add("show-menu");


});

closeBtn.addEventListener("click",()=>{

    navMenu.classList.remove("show-menu");


});


// Auto hide navbar when clicked on any nav-item

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(a){

    a.addEventListener("click",()=>{

        navMenu.classList.remove("show-menu");

    })

});


// Add blur navbar..

const blurNav = ()=>{

    const navBAr = document.querySelector('.navbar');

    this.scrollY >= 30 ? navBAr.classList.add("navigation-onscroll") : navBAr.classList.remove("navigation-onscroll")


};

window.addEventListener('scroll',blurNav);


// typo animation

// let typed = new Typed(".element", {

//     strings: ["Web Developer", "Web Designer"],
//     typeSpeed: 150,
//     backSpeed: 150,
//     loop: true,

// });