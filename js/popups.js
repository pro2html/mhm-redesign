'use strict';
(function ($) {
  $(function(){
    function setPopupPosition() {
      let windowWidth = $(window).width();

      $('.popup-content').each((index, popup) => {
        let rightOffset = windowWidth - ($(popup).offset().left + $(popup).outerWidth());
        let leftOffset = $(popup).offset().left;
        let offsetClasses = 'popup-content--pos-semi-left popup-content--pos-semi-right popup-content--pos-left popup-content--pos-right';


        if ((leftOffset > ($(popup).outerWidth() / 2)) && (rightOffset > ($(popup).outerWidth() / 2))) {
          $(popup).removeClass(offsetClasses);
        } else if (rightOffset < 0 && leftOffset < ($(popup).outerWidth() / 2)) {
          $(popup).removeClass(offsetClasses).addClass('popup-content--pos-semi-right');
          return;
        } else if (leftOffset < 0 && rightOffset < ($(popup).outerWidth() / 2)) {
            $(popup).removeClass(offsetClasses).addClass('popup-content--pos-semi-left');
          return;
        } else if (rightOffset < 0) {
            $(popup).removeClass(offsetClasses).addClass('popup-content--pos-right');
          return;
        } else if (leftOffset < 0) {
          $(popup).removeClass(offsetClasses).addClass('popup-content--pos-left');
          return;
        }
      });
    }

    $(window).on('page:load resize', setPopupPosition);
  });
}(jQuery));
