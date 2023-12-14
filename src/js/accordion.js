/* Accordion */

// Adding Up/Down/Left/Right Keyboard functionality to the Accordion component
$('.usa-accordion').keyup(function(event){
  var focusableElements = $(this).find(':focusable'),
      ev = event;

  // Move to previous focusable element
  if (ev.keyCode === 37 || ev.keyCode === 38) {
    var prev = focusableElements[($.inArray(document.activeElement, focusableElements) - 1 + focusableElements.length) % focusableElements.length];
    prev.focus();
  }

  // Move to next focusable element
  if (ev.keyCode === 39 || ev.keyCode === 40) {
    var next = focusableElements[($.inArray(document.activeElement, focusableElements) + 1) % focusableElements.length];
    next.focus();
  }

});