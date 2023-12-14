/* Validation */

/* Demo use only */
function validationDemo() {

  var alertBox = $('.validation-demo .usa-alert');
  var inputWithError = $('.demo-has-error');

  // show 1 error
  $('button.show-1-error').click(function(event) {
    event.preventDefault();

    // Hide results from previous click
    $('.demo-has-error').removeClass('usa-input-error');
    $('.demo-has-error .usa-input-error-message').hide();
    $(alertBox).hide();

    // Put error wrapper around erroneous input
    $('.demo-has-error.show-if-1-error').addClass('usa-input-error');
    $('.demo-has-error.show-if-1-error .usa-input-error-message').show();
    $('.demo-has-error.show-if-1-error label').addClass('usa-input-error-label');

    // Change values to demo erroneous values
    $('input#input-error-systolic').val('120');
    $('input#input-error-diastolic').val('90');

    // scroll to top
    $('.demo-has-error.show-if-1-error input').focus();

  });

  // show multiple errors
  $('button.show-multiple-errors').click(function(event) {
    event.preventDefault();

    // Display box with error summary
    $(alertBox).show();
    $('.validation-demo .usa-alert-heading').text('3 errors found:');
    $('.validation-demo .usa-alert ul.usa-checklist').empty().append(
        '<li>The <a tabindex="0" href="javascript:document.getElementById(\'input-error-systolic\').focus()">Systolic</a> value is outside the expected range.</li>\n' +
        '<li><a tabindex="0" href="javascript:document.getElementById(\'input-error-diastolic\').focus()">Diastolic</a> should be less than Systolic. Please check the values.</a></li>\n' +
        '<li><a tabindex="0" href="javascript:document.getElementById(\'input-error-pulse\').focus()">Pulse</a> field is required.</li>'
    );

    // Put error wrapper around erroneous input
    $('.demo-has-error.show-if-many-errors').addClass('usa-input-error');
    $('.demo-has-error.show-if-many-errors .usa-input-error-message').show();
    $('.demo-has-error.show-if-many-errors label').addClass('usa-input-error-label');

    // Change values to demo erroneous values
    $('input#input-error-systolic').val('20');
    $('input#input-error-diastolic').val('20');

    // scroll to top
    $('.validation-demo .usa-alert').focus();

    // when A is clicked, scroll to anchor link
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
        console.log('works');
        return false;
    });
  });
}

validationDemo();