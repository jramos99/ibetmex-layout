const swiperProvider = new Swiper(".providerSwiper", {
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
            slidesPerView: 2,
            slidesPerGroup: 2, 
        },
        567: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        725: {
            slidesPerView: 4,
            slidesPerGroup: 4, 
            spaceBetween: 10,
        },
        // A partir de 825px: muestra 5 y avanza de 5 en 5
        825: {
            slidesPerView: 5,
            slidesPerGroup: 5, 
            spaceBetween: 10,
        },
        // A partir de 1024px: muestra 8 y avanza de 8 en 8
        1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            spaceBetween: 15,
        },
    },
});