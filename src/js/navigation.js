/* Main Navigation Menu */

function openMenu() {
  $(menuEl).addClass('menu--open').attr('aria-hidden', 'false');
  $('body').addClass('overlay');
  $('#navOpenBtn').attr({
    'aria-expanded': 'true',
    'aria-hidden': 'true'
  });
  closeMenuCtrl.focus();
}

function closeMenu() {
  $(menuEl).removeClass('menu--open').attr('aria-hidden', 'true');
  $('body').removeClass('overlay');
  $('#navOpenBtn').attr({
    'aria-expanded': 'false',
    'aria-hidden': 'false'
  });
  openMenuCtrl.focus();
}

// Creating new instance of Menu on page
var menuEl = document.getElementById('mpNavMenu');

if (menuEl) {
  var mlmenu = new MLMenu(menuEl, {
    breadcrumbsCtrl : false, // show breadcrumbs
    backCtrl : true, // back control functionality
  });

   // Toggle Menu Open/Close
  var openMenuCtrl = $('#navOpenBtn'),
      closeMenuCtrl = $('#navCloseBtn');

  openMenuCtrl.click(openMenu);
  closeMenuCtrl.click(closeMenu);

  // Close navigation if not the event target
  $(document).on("click touchstart", function(event) {
    if ($('.vaux-nav-menu-wrapper.menu--open').length !== 0 && !$(event.target).is('#navOpenBtn') && $('.vaux-nav-menu-wrapper.menu--open').has(event.target).length === 0) {
      closeMenu();
    }
  });
}

