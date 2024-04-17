let navbar = document.querySelector('.navbar');
let fabars = document.querySelector('.fa-bars');

fabars.onclick = () => {
    navbar.classList.toggle('active')
};

var swiper = new Swiper(".home-slid", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".team-slid", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoinys:{
        "0": {
            slidesPerView: 1,
            autoplay:{
                delay:700,
                disableOnIntertaction:false,
            },
        },
        "768":{
            slidesPerView:2,
        },
        "1020":{
            slidesPerView:3,
        },
    },
});


let swiper1 = new Swiper(".swiper1", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1560: {
            slidesPerView: 3
        }
    }
})