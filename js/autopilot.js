$(document).ready(function () {
  let url = $('.typeform-widget').attr('data-url');
  $('.typeform-widget').attr('data-url', url + "?"+ window.location.search);
});
