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
    var $dropdown_footer = $('.dropdown--footer');

    $button.on('click', function() {
        $(this).toggleClass('active');
        $('html, body').toggleClass('overflow-hidden');
        $nav.toggleClass('nav-main--active');
    });
    $dropdown_footer.on('click', function() {
        $(this).toggleClass('dropdown--footer--active');       
    });
    $dropdown.on('click', function() {
        $(this).toggleClass('dropdown--active');       
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