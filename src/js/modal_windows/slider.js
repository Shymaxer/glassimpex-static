var slider1 = tns({
    container: ".slider-big",
    items: 1,
    slideBy: "page",
    loop: true,
    arrowKeys: true,
    swipeAngle: false,
    speed: 400,
    mouseDrag: true,
    
    nav: false,
    controls: false,

});
var sliderSmall = tns({
    container: ".slider-small",
    items: 3.5,
    gutter: "20px",
    slideBy: "page",
    loop: true,
    swipeAngle: false,
    gutter: "20px",
    speed: 400,
    
    mouseDrag: true,
    arrowKeys: false,
    nav: false,
    controlsContainer: "#customize-controls",

});