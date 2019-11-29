$(document).ready(function () {
    var $button = $('.burger-button');
    var $nav = $('.nav.nav--main');
    var $dropdown = $('.dropdown');
    var $dropdown_footer = $('.dropdown--footer');
    var header_size = 70;
    $('#mw1').hide();
    $('#mw2').hide();
    $('#mw3').hide();
    $('#mw4').hide();
    $('#mw5').hide();
    $('.nav-item').on('click', function (e) {
        if (this.children.length == 1) {
            var link = this.children[0];
            e.preventDefault();
            if ($(link).attr('href')) {
                var active = document.getElementsByClassName('nav-main--active');
                if (active.length != 0) {
                    $button.toggleClass('active');
                    $('html, body').toggleClass('overflow-hidden');
                    $nav.toggleClass('nav-main--active');
                    $button.toggleClass('burger-button-active');
                    header_size = 60;
                }
                showSection($(link).attr('href'), header_size);
            }

        }

    });


    $button.on('click', function () {
        $(this).toggleClass('active');
        $('html, body').toggleClass('overflow-hidden');
        $nav.toggleClass('nav-main--active');
    });
    $dropdown_footer.on('click', function () {
        $(this).toggleClass('dropdown--footer--active');
    });
    $dropdown.on('click', function () {
        $(this).toggleClass('dropdown--active');
    });
    document.querySelector('.burger-button').onclick = function () {
        this.classList.toggle('burger-button-active');
    }
});

function PopUpShow(popup, header) {
    $(popup).show();
    $('header, footer').hide();
    $('html, body').toggleClass('overflow-hidden');
}

function PopUpHide(popup, header) {
    $(popup).hide();
    $('header, footer').show();
    $('html, body').toggleClass('overflow-hidden');
}