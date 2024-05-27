$(function () {
    const swiper = new Swiper('.swiper', {

        loop: true,
        spaceBetween: 30,
        effect: "fade",
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }

    });

});