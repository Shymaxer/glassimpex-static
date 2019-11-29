function showSection(section, header_size){
    var direction = section.replace(/./,'');
    var reqSection = document.getElementsByClassName(direction);
    var reqSectionPos = $(reqSection).offset().top - header_size;
    $('body, html').animate({scrollTop: reqSectionPos}, 1000);
}