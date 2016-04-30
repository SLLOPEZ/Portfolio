var contentView = {};

contentView.handleMainNav = function() {
  $('#nav-menu').on('click', 'li', function () {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('#nav-menu .tab:first').click();
};
contentView.scrollEffect = function () {
  $('#nav-menu').on('click', 'li', function (e) {
    e.preventDefault();
    $('body').animate({
      'scrollTop': $('#' + $(this).data('content')).offset().top
    });
    // $('#' + $(this).data('content')).slideUp( 'slow', function(){
    // });
  });
};

$(document).ready(function () {
  $(contentView.handleMainNav());
  $(contentView.scrollEffect());
});
