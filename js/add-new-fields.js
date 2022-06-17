'use strict';
(function ($) {
  $(function(){
    $('.js-add-new-fields-opener, .js-back-to-filters').on('click', function() {
      $(this).closest('.js-filter-parent').toggleClass('add-fields-active');
    });
  });
}(jQuery));
