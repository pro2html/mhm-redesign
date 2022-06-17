$('.js-check-row').on('change', function(e) {
  if (e.target.checked) {
    $(this).closest('.js-row').addClass('checked');
  } else {
    $(this).closest('.js-row').removeClass('checked');
  }
});
