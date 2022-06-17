$('.js-tabs li a').on('click', function(e) {
  e.preventDefault();

  let tabName = $(this).attr('href');

  if(!$(this).hasClass('active')){ //this is the start of our condition
    $(this).closest('.js-tabs').find('.active').removeClass('active');
    $(this).addClass('active');
  }

  $(tabName).siblings().removeClass('active');
  $(tabName).addClass('active')
});
