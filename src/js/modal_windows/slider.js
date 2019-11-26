var slider1 = tns({
    container: ".slider-big",
    nav: false,
    controls: false,
    autoplay: false,
    mouseDrag: true,
    loop: false,
    preventScrollOnTouch: "auto"

});
var sliderSmall = tns({
    container: ".slider-small",
    items: 4,
    nav: false,
    loop: false,
    autoplay: false,
    gutter: 15,
    mouseDrag: true,
    responsive: {
        992: {
            gutter: 25,
        }
    },
    preventScrollOnTouch: "auto",
    controlsPosition: 'bottom',
    controlsText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>'],

});


$('.slider-item-nav').on('click', function() {
    slider1.goTo( $(this).index() );
});