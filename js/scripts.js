$(document).ready(() => {
    /**
     * SLICK
     */
    $('.firstScreen__slider').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        speed: 1000
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', function (e) {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });
});
