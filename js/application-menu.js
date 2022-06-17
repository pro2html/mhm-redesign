'use strict';

(function ($) {
  $(function() {
    $('.nav-mobile-overlay, .nav-mobile-opener, .nav-mobile-close').on('click', function() {
      $('#application-menu').toggleClass('opened');
    });

    $('#application-menu .nav .dropdown').on('click', function() {
      $(this).toggleClass('expanded');
    });
  });
}(jQuery));