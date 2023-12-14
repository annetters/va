/* Date Input - Date Picker */

// Turning off Bootstrap datepicker API to initialize with our own options here
$(document).off('.datepicker.data-api');

function openDatepicker(toggledInput) {
  console.log('opening');
}

function closeDatePicker(toggledInput) {
  console.log('closing');
}

function initDatePicker() {
  $('[data-datepicker-trigger]').each(function () {
    // datepicker should be on an input or button directly, not a parent
    // in order to work properly (and close when you click off of it)
    $(this).datepicker({
      format: 'mm/dd/yyyy',
      todayHighlight: true,
      templates: {
          leftArrow: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
          rightArrow: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
      },
      daysOfWeekDisabled: '0',
      assumeNearbyYear: true,
      maxViewMode: 'year',
      autoclose: true,
      immediateUpdates: true
    }).on('changeDate', function (e) {
      $(this).find('.vaux-datepicker').hide();
    });
    $(this).find('.vaux-datepicker').hide();
});
}

// For mobile browsers, change the date picker inputs to type date
// in order to force the native UI on the phone/tablet
if (/Mobi/.test(navigator.userAgent)) {
  $('input[data-datepicker-trigger]').attr('type', 'date');
  $('button[data-datepicker-trigger]').on('click', function (e) {
      $(e.target).siblings('input').get(0).focus();
  });
} else {
  initDatePicker();
}