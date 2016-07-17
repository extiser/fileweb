$(document).ready(function () {
    $('.top-menu__mobile').click(function () {
        $('.top-menu__list, .mask').addClass('active');
    });

    $('.mask').click(function () {
        $('.top-menu__list, .mask').removeClass('active');
    });
});