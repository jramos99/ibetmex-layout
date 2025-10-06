const swiper = new Swiper(".mySwiper", {
    loop: false, 
    spaceBetween: 5,
    loopFillGroupWithBlank: false, 
    pagination: { 
        el: ".swiper-pagination", 
        clickable: true, 
    }, 
    navigation: { 
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev", 
    }, 
    breakpoints: {
        // En pantallas pequeñas: muestra 3 y avanza de 3 en 3
        0: { 
            slidesPerView: 3.1,
            slidesPerGroup: 3, 
        },
        567: {
            slidesPerView: 4.1,
            slidesPerGroup: 4,
        },
        725: {
            slidesPerView: 5,
            slidesPerGroup: 5, 
            spaceBetween: 30,
        },
        // A partir de 825px: muestra 5 y avanza de 5 en 5
        825: {
            slidesPerView: 6,
            slidesPerGroup: 6, 
            spaceBetween: 30,
        },
        // A partir de 1024px: muestra 8 y avanza de 8 en 8
        1024: {
            slidesPerView: 8,
            slidesPerGroup: 8,
            spaceBetween: 15,
        },
    },
});