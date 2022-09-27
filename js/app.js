$(function () {
    $('.count-num').rCounter({
        duration: 30
    });
});


$('.btn-inactive').click(function () {
    $('.btn-inactive').removeClass('active');
    $(this).addClass('active');
})

$('.sliderr').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
});