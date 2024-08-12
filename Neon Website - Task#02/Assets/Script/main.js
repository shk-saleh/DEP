/*=============== ADD SHADOW HEADER ===============*/

// Add blur navbar..

const blurNav = ()=>{

    const navBAr = document.querySelector('.navbar');

    this.scrollY >= 70 ? navBAr.classList.add("fixed-navbar") : navBAr.classList.remove("fixed-navbar");


};

window.addEventListener('scroll',blurNav);


// Auto hide navbar when clicked on any nav-item

const navLinks = document.querySelectorAll(".nav-link");
const navMenu = document.querySelector(".navbar-collapse");

navLinks.forEach(function(a){
    a.addEventListener("click", () => {
        navMenu.classList.remove("show");
        console.log("hello");
    });
});

// Hire window script

let HireBtn = document.getElementById("hire-btn");
let closeBtn = document.getElementById("close-btn");
let hireMeForm = document.querySelector('.hire-me-form');


HireBtn.addEventListener("click",()=>{

    hireMeForm.classList.add("hire-me-form-show");
    console.log("hello")

});

closeBtn.addEventListener("click",()=>{

    hireMeForm.classList.remove("hire-me-form-show");

});


// slider

$(document).ready(function (){

    $(".owl-carousel.testimonials-slider").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        dots: true,
        active: true,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    });

});
