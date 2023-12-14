/* Utility Functions */

// Trap Keyboard within an element that has focusable elements
function vauxTrapKeyboard(event, element, args, escapeFunction) {
  var focusableElements = $(element).find(':focusable'),
      firstTabStop = focusableElements[0],
      lastTabStop = focusableElements[focusableElements.length - 1],
      ev = event;

  // Assign data-first and data-last attributes to the corresponding elements
  $(firstTabStop).attr('data-first', 'true');
  $(lastTabStop).attr('data-last', 'true');

  /// Check for TAB key press
  if (ev.keyCode === 9) {

    // SHIFT + TAB
    if (ev.shiftKey) {
      if (document.activeElement === firstTabStop) {
        ev.preventDefault();
        lastTabStop.focus();
      }

    // TAB
    } else {
      if (document.activeElement === lastTabStop) {
        ev.preventDefault();
        firstTabStop.focus();
      }
    }
  }

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

  // ESCAPE
  if (ev.keyCode === 27) {
    escapeFunction(args.arg1, args.arg2);
  }
}