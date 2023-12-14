/* Alert Messages */

var vauxAlert = {

  init: function(alertObject){
    this.bindUIFunctions(alertObject);
  },

  bindUIFunctions: function(alertObject) {
    $(alertObject).on('click', 'button', function(){
      var alert = $(this).closest('.vaux-alert-site');

      alert.addClass('slide-closed');
    
      setTimeout(function() {
        $(alert).remove();
      }, 250);

    });
  }
};

$('[data-trigger-site-alert]').each(function(){
  vauxAlert.init(this);
});