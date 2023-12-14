/* Button Menus */

var vauxButtonMenu = {

  init: function(buttonMenuObject) {
    this.bindUIfunctions(buttonMenuObject);
  },

  bindUIfunctions: function(buttonMenuObject) {
    $(buttonMenuObject).on('click', '[data-trigger-buttonmenu]', function(event){

      var e = event,
          toggledButton = event.target,
          targetMenu = $(toggledButton).closest('.vaux-button-menu-wrapper').find('.vaux-button-menu'),
          buttonMenuArray = $('[data-trigger-buttonmenu]').not(toggledButton);

      // Close any other menus that are open
      $(buttonMenuArray).each(function(key, value){
        var button = $(buttonMenuArray)[key],
            menu =  $(button).closest('.vaux-button-menu-wrapper').find('.vaux-button-menu');

        if($(button).attr('aria-expanded') === 'true'){
          vauxButtonMenu.close(button, menu);
        }
      });

      if ( $(targetMenu).hasClass('show') ) {
        vauxButtonMenu.close(toggledButton, targetMenu);
      } else {
        vauxButtonMenu.open(toggledButton, targetMenu);
      }

      $(targetMenu).keydown(function(event){
        vauxTrapKeyboard(event, this, {arg1:toggledButton, arg2:targetMenu}, vauxButtonMenu.close);
      });
    });

    // Listen for clicks outside of the button menus
    var touchmoved;

    $(document).on("click touchend", function(event) {
      if(!$(event.target).is('[data-trigger-buttonmenu]')) {
        buttonMenuArray = $('[data-trigger-buttonmenu]');

        // Close any other menus that are open
        if(touchmoved !== true){
            $(buttonMenuArray).each(function(key, value){
            var button = $(buttonMenuArray)[key],
                menu =  $(button).closest('.vaux-button-menu-wrapper').find('.vaux-button-menu');

            if($(button).attr('aria-expanded') === 'true'){
              vauxButtonMenu.close(button, menu);
            }
          });
        }
        
      }
    }).on('touchmove', function(e){
        touchmoved = true;
    }).on('touchstart', function(){
        touchmoved = false;
    });
  },

  open: function(toggledButton, targetMenu){
    $(targetMenu).addClass('show').attr({
      'aria-hidden': 'false',
      'tab-index': '0'
    });

    $(toggledButton).attr('aria-expanded', 'true');
  },

  close: function(toggledButton, targetMenu) {
    $(targetMenu).removeClass('show').attr({
      'aria-hidden': 'true',
      'tab-index': '-1'
    });

    $(toggledButton).attr('aria-expanded', 'false');
  }
};

$('.vaux-button-menu-wrapper').each(function(){
  vauxButtonMenu.init(this);
});