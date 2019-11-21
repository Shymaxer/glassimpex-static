$(document).ready(function () {
    PopUpHide("#mw1");
    PopUpHide("#mw2");
});

function PopUpShow(popup) {
    $(popup).show();
    document.body.style.overflow = "hidden";
}

function PopUpHide(popup) {
    $(popup).hide();
    document.body.style.overflow = "auto";
}