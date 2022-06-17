'use strict';
(function ($) {
  $(function(){
    $(".accordion__header .accordion__header-checkbox").on("click", function(e) {
      e.stopPropagation();
    });

    $(".accordion__header").on("click", function() {
      if (!$(this).hasClass("accordion-active")) {
        $(".accordion__content").slideUp(400);
        $(".accordion__header").removeClass("accordion-active");
      }

      $(this).toggleClass("accordion-active");
      $(this).next().slideToggle();
    });

    $(window).on('load', function() {
      $(".accordion__header").each((index, element) => {
        if ($(element).hasClass("accordion-active")) {
          $(element).parent().find('.accordion__content').slideDown(0);
        }
      });
    });
  });
}(jQuery));
