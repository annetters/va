/* Modals */

var vauxModal = {

  init: function(modalTrigger){
    this.modal = {
      modalId: '#' + $(modalTrigger).data('attr'),
      modalType: $(modalTrigger).data('modalType'),
      lastFocusedElement: ''
    };

    this.bindUIFunctions(modalTrigger, this.modal);
  },

  bindUIFunctions: function(modalTrigger, modal) {
    $(modalTrigger).on("click touchstart", function(event) {
      event.preventDefault();
      vauxModal.open(modal);
    });

    $(modal.modalId).on("click", ".vaux-modal-footer button, .vaux-modal-close", function(){
      vauxModal.close(modal);
    });

    // Close modal if not the event target
    $(document).on("click", function(event) {
      if ($('.vaux-modal.modal--open').length !== 0 && !$(event.target).is('[data-modal-trigger]') && !$(event.target).is('.vaux-modal.modal--open') && $('.vaux-modal').has(event.target).length === 0) {
        vauxModal.close(modal);
      }
    });
  },

  open: function(modal) {

    modal.lastFocusedElement = document.activeElement;

    // Open the modal with the corresponding ID, place overlay on the body of page, change tabindex and aria-hidden attributes
    $('body').addClass('overlay animate-fadeIn');
    $(modal.modalId).addClass('modal--open animate-fadeIn').attr({
      'tabindex': '0',
      'aria-hidden': 'false'
    }).focus();

    // Add styles for complex modals if modalType matches
    if (modal.modalType == 'complex') {
      $(modal.modalId).addClass('vaux-modal--complex');
      
      // For mobile screens - Getting the height of the header and footer and setting margin/padding of content to match. Wrapped in setTimeout function so that the modal renders and browser can get the right height calculations.
      if ($(window).width() < 768) {
        setTimeout(function(){
          var heights = vauxModal.setHeights(modal.modalId);

          $(modal.modalId + ' .vaux-modal-content').css({
            'margin-bottom': heights[0],
            'margin-top': heights[1]
          });
        }, 100);
      }
    }

    // Listen for and trap the keyboard
    $(modal.modalId).on('keydown', function(event){
      vauxTrapKeyboard(event, this, {arg1:modal}, vauxModal.close);
    });

    event.preventDefault();
  },

  close: function(modal) {
    $('body').removeClass('overlay animate-fadeIn');
    $(modal.modalId).removeClass('modal--open animate-fadeIn').attr({
      'tabindex': '-1',
      'aria-hidden': 'true'
    });

    modal.lastFocusedElement.focus();
  },

  setHeights: function(modalId) {
    var heights = [],
    footerHeight = $(modalId + ' .vaux-modal-footer').outerHeight(),
    headerHeight = $(modalId + ' .vaux-modal-header').outerHeight();
    
    heights.push(footerHeight, headerHeight);
    return heights;
  }
};

$('[data-modal-trigger]').each(function(){
  vauxModal.init(this);
});
