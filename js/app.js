$(function () {
    $('.count-num').rCounter({
        duration: 30
    });
});


$('.btn-inactive').click(function () {
    $('.btn-inactive').removeClass('active');
    $(this).addClass('active');
})