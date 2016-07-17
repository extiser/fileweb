$(document).ready(function () {
  $('a[data-click="modal"]').click(function () {
    var item = $(this).data('modal');
    $(item).slideToggle(300);
    $('.mask').slideToggle(200);
  });

  $('.mask').click(function () {
    $('.mask, .modal').hide();
  });
})
$(document).ready(function () {
    $('.search__mobile').click(function () {
        $('.search__wrapper, .mask').addClass('active');
    });

    $('.mask').click(function () {
        $('.search__wrapper, .mask').removeClass('active');
    });
});
$(document).ready(function () {
    $('.top-menu__mobile').click(function () {
        $('.top-menu__list, .mask').addClass('active');
    });

    $('.mask').click(function () {
        $('.top-menu__list, .mask').removeClass('active');
    });
});