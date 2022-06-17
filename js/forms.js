'use strict';
(function ($) {
  $(function(){
    // text input field with clear button
    $('.js-clearable-input').on('keyup', function() {
      if ($(this).val()) {
        $(this).parent().addClass('active');
      } else {
        $(this).parent().removeClass('active');
      }
    });

    // text input active state
    $('.text-field, textarea').on('focus', function(){
      $(this).addClass('focused');
    });

    $('.text-field, textarea').on('blur', function(){
      $(this).removeClass('focused');
    });

    $('.clear-input').on('click', function() {
      $(this).parent().find('input[type="text"]').val('');
      $(this).parent().removeClass('active');
    });

    //datepicker
    $(".js-datepicker").datepicker({
      dateFormat: "mm.dd.yy"
    });

    //dropzone
    $(".js-dropzone-custom").dropzone({
      url: "/file/post",
      createImageThumbnails: false,
      clickable: '.js-dropzone-custom__default',
      addRemoveLinks: true,
      previewsContainer: $(this).find(".js-dropzone-previews")[0],
      maxFilesize: 100,
      acceptedFiles: ".pdf, .xlsx, .png, .jpg",
      previewTemplate: `
        <div class="dz-preview dz-file-preview">
          <div class="dz-details">
            <div class="dz-filename"><span data-dz-name></span></div>
            <div class="dz-size" data-dz-size></div>
            <img data-dz-thumbnail />
            <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
            <div class="dz-error-message"><span data-dz-errormessage></span></div>
          </div>
          <div class="dz-success-mark"><span>✔</span></div>
          <div class="dz-error-mark"><span>✘</span></div>
        </div>
      `
    });

    $(".js-dropzone-custom-2").dropzone({
      url: "/file/post",
      createImageThumbnails: false,
      clickable: '.js-dropzone-custom__default-2',
      addRemoveLinks: true,
      previewsContainer: $(this).find(".js-dropzone-previews-2")[0],
      maxFilesize: 100,
      acceptedFiles: ".pdf, .xlsx, .png, .jpg",
      previewTemplate: `
        <div class="dz-preview dz-file-preview">
          <div class="dz-details">
            <div class="dz-filename"><span data-dz-name></span></div>
            <div class="dz-size" data-dz-size></div>
            <img data-dz-thumbnail />
            <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
            <div class="dz-error-message"><span data-dz-errormessage></span></div>
          </div>
          <div class="dz-success-mark"><span>✔</span></div>
          <div class="dz-error-mark"><span>✘</span></div>
        </div>
      `
    });

    $('.dropzone-custom__default').html(`
      <span class="dropzone-custom__default-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="cloud" d="M20.7731 26.2667C17.9598 26.4667 17.9598 30.5467 20.7731 30.7467H27.4531C28.2664 30.7467 29.0398 30.4534 29.6398 29.9067C31.6131 28.1867 30.5598 24.72 27.9598 24.4C27.0264 18.7734 18.8798 20.9067 20.8131 26.2667" />
            <path class="folder" d="M29.3337 14.7598V20.4532C29.3337 20.8798 28.6537 21.0665 28.3603 20.7598C27.7337 20.1065 26.947 19.6132 26.0403 19.3332C23.947 18.6798 21.5337 19.3198 20.0137 20.8932C19.0537 21.9198 18.5337 23.1998 18.507 24.5865C18.507 24.8265 18.387 25.0398 18.2003 25.1865C17.2403 25.9465 16.6537 27.1332 16.6537 28.4932V28.5065C16.6537 28.9332 16.347 29.3198 15.9203 29.3198H9.78699C5.86699 29.3332 2.66699 26.1332 2.66699 22.1998V8.55984C2.66699 5.3065 5.30699 2.6665 8.56033 2.6665H11.6537C13.827 2.6665 14.507 3.37317 15.3737 4.53317L17.2403 7.01317C17.6537 7.55984 17.707 7.6265 18.4803 7.6265H22.2003C25.3737 7.6265 28.067 9.7065 28.987 12.5865C29.187 13.1865 29.2937 13.7998 29.3203 14.4532C29.3337 14.5465 29.3337 14.6665 29.3337 14.7598Z" />
        </svg>
      </span>
      <span class="dropzone-custom__default-message">
        <span>Download</span> or drop file here
      </span>
      <span class="dropzone-custom__default-note">pdf, xlsx, png, jpg</span>
      <span class="dropzone-custom__default-note">Max size — 100 Mb</span>
</span>
    `);
  });
}(jQuery));
