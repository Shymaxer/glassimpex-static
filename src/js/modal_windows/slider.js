var slider_1 = tns({
    container: "#slider_big_1",
    nav: false,
    controls: false,
    autoplay: false,
    mouseDrag: true,
    loop: false,
    preventScrollOnTouch: "auto"

});
var slider_small_1 = tns({
    container: "#slider_small_1",
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

var slider_2 = tns({
    container: "#slider_big_2",
    nav: false,
    controls: false,
    autoplay: false,
    mouseDrag: true,
    loop: false,
    preventScrollOnTouch: "auto"

});
var slider_small_2 = tns({
    container: "#slider_small_2",
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
var slider_3 = tns({
    container: "#slider_big_3",
    nav: false,
    controls: false,
    autoplay: false,
    mouseDrag: true,
    loop: false,
    preventScrollOnTouch: "auto"

});
var slider_small_3 = tns({
    container: "#slider_small_3",
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

$('.slider-item-nav').on('click', function () {
    if ($(this).parent().attr("id") == 'slider_small_1') {
        slider_1.goTo($(this).index());
    } else if ($(this).parent().attr("id") == 'slider_small_2') {
        slider_2.goTo($(this).index());
    } else if ($(this).parent().attr("id") == 'slider_small_3') {
        slider_3.goTo($(this).index());
    }

});