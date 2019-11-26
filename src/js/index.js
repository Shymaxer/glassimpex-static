$(document).ready(function () {
    PopUpHide("#mw1");
    PopUpHide("#mw2");
    PopUpHide("#mw3");
    PopUpHide("#mw4");
    PopUpHide("#mw5");
    $('html, body').toggleClass('overflow-hidden');
    var $button = $('.burger-button');
    var $nav = $('.nav.nav--main');
    var $dropdown = $('.dropdown');

    $button.on('click', function() {
        $(this).toggleClass('active');
        $('html, body').toggleClass('overflow-hidden');
        $nav.toggleClass('open');
    });

    $dropdown.on('click', function() {
        $(this).toggleClass('open');
    });
    document.querySelector('.burger-button').onclick = function(){
        this.classList.toggle('burger-button-active');
    }
});

function PopUpShow(popup) {
    $(popup).show();
    $('html, body').toggleClass('overflow-hidden');
}

function PopUpHide(popup) {
    $(popup).hide();
    $('html, body').toggleClass('overflow-hidden');
}