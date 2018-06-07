$(document).on('click','*[data-popup]', function () {
    var id = $(this).data('popup');
    if( $(id).size() == 0 ) return true;

    $(id).bPopup({
        follow: [true, true], //x, y
        closeClass: 'popup-close',
        onOpen: function () {
        },
        onClose: function () {
        }
    });
    return false;
});

$(document).on('click','.faq-block .faq-item', function () {
    if($(this).find('.ans').is(':visible')) {
        $(this).find('.ans').slideUp();
        return;
    }
    $('.faq-block .faq-item .ans').slideUp();
    $(this).find('.ans').slideDown();
})


$(function () {
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.arrow-r',
        prevButton: '.arrow-l',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop:true,
        coverflow: {
            rotate: 0,
            stretch: 450,
            depth: 500,
            modifier: 1,
            slideShadows : true
        }
    });
});