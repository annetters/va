/* Popover */

vauxPopover = {

  init: function(popoverObject) {
    $(popoverObject).popover({
      template: '<div class="vaux-popover popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    this.bindUIFunctions(popoverObject);
  },

  bindUIFunctions: function(popoverObject) {

    // Allow Space to open/close the popover
    $(popoverObject).on('keydown', function(event){
      if (event.keyCode === 32) {
        if ($(".popover").length === 0) {
          $(popoverObject).popover('show');
        } else {
          $(popoverObject).popover('hide');
        }
      }
    });

    // Actions to perform when a popover is loaded into the DOM
    $(popoverObject).on('inserted.bs.popover', function () {

      $(popoverObject).attr('aria-expanded', 'true');

      var popoverID = $(this).attr('aria-describedby');
          targetPopover = $('#' + popoverID).get(0);

      // Close popover if not the event target
      $(document).on('click touchstart', function(event){
        if (!$(event.target).is(popoverObject) && !$(event.target).is(targetPopover) && $(targetPopover).has(event.target).length === 0) {
          console.log('clicked outside of popover');
          $(popoverObject).popover('hide');

        }
      });

      // Close popover when close button or footer buttons are clicked
      $(targetPopover).on("click touchstart", ".vaux-popover-footer button, .vaux-popover-close", function(event){
        console.log('clicked');
        $(popoverObject).popover('hide');
      });

      // Close popover if the ESC key is used within popover
      $(targetPopover).on("keydown", function(event){
        if (event.keyCode === 27) {
          $(popoverObject).popover('hide');
        }
      });

    });

    // Actions to perform when the popover is removed away from the DOM
    $(popoverObject).on('hidden.bs.popover', function (e) {
        $(document).unbind('click touchstart');
        $(targetPopover).unbind('click touchstart keydown');
        $(popoverObject).attr('aria-expanded', 'false');
        $(e.target).data("bs.popover").inState.click = false;
    });
  }
};

$('[data-toggle="popover"]').each(function(){
  vauxPopover.init(this);
});