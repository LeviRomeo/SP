$(document).ready(function() {
  $('.header__toggle').click(function(event){
    $('.header__toggle, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});