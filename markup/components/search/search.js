$(document).ready(function () {
    $('.search__mobile').click(function () {
        $('.search__wrapper, .mask').addClass('active');
    });

    $('.mask').click(function () {
        $('.search__wrapper, .mask').removeClass('active');
    });
});