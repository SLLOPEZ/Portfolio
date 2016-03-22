var contentView = {};

contentView.handleMainNav = function() {
  $('#nav-menu').on('click', 'li', function () {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('#nav-menu .tab:first').click();
};
$(document).ready(function () {
  $(contentView.handleMainNav());
});
