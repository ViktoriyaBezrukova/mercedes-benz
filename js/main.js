$(function () {
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="/images/arrowleft.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="/images/arrowright.svg" alt="">',
        responsive: [
            {
                breakpoint: 361,
                settigns:{
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});