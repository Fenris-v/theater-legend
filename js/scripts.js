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

    $('.infoBlock_half__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', function () {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });

    /**
     * ANCHOR
     */
    $('.anchorLink').on('click', (e) => {
        e.preventDefault();
        let id = $(e.target).attr('href');
        let top = $(id).offset().top - 20;
        $('body, html').animate({scrollTop: top}, 1500);
    });
});
