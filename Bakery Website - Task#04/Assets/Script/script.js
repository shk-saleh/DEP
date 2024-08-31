// For blur navbar

const navBar = document.querySelector(".navbar");

const BlurBg = ()=>{

    this.scrollY >= 20 ? navBar.classList.add("fixed-navbar") : navBar.classList.remove("fixed-navbar");

}

window.addEventListener('scroll',BlurBg);


// Scroll top button

const scrollTop = ()=>{

    const scrollTop = document.querySelector(".scroll-top");
    this.scrollY <= 350 ? scrollTop.classList.add("scroll-top-hide") : scrollTop.classList.remove("scroll-top-hide") 

}

window.addEventListener('scroll',scrollTop);


// Reveal Animation

const sr = ScrollReveal({

    origin : 'top',
    distance : '40px',
    opacity : 1,
    scale : 1.1,
    duration : 2500,
    delay : 300,
    reset : true,

});


sr.reveal(`.home-content,.about-wrapper,.visit-banner-content`);
sr.reveal(`.home-img,.Floating-image,.footer-float-img`,{rotate : {z : -15}});
sr.reveal(`.home-footer `, {scale : 1 , origin : 'bottom'});

sr.reveal(`.card:nth-child(odd) img`, {rotate : {z:-30} , distance : 0});
sr.reveal(`.card:nth-child(even) img`, {rotate : {z:15} , distance : 0 , delay : 600});

sr.reveal(`.footer-wrapper`, {scale : 1 });


