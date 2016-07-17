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