'use strict';
(function ($) {
  $(function(){
    $('.js-search-opener').on('click', function() {
      if (!$('.js-search-drop').hasClass('opened')){
        $('.js-search-drop').find('.search-drop__text-field').focus();
      }

      $('.js-search-drop').toggleClass('opened');
    });

    $(document).on('keyup', function(e) {
      if (e.key === "Escape" && $('.js-search-drop').hasClass('opened')) {
        $('.js-search-drop').removeClass('opened');
        $('.js-search-drop').find('.search-drop__text-field').blur();
      };
    });

    $(document).on('click', function(e) {
      if ($(e.target).is('.js-search-drop') === false || $(e.target).is('.js-search-opener') === false) {
        $('.js-search-drop').removeClass('opened');
      }
    });

    $('.js-search-opener, .js-search-drop').on('click', function(e){
      e.stopPropagation();
    });
  });
}(jQuery));
