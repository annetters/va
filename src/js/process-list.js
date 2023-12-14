/* Process List */

vauxProcessList = {

  init: function(processListObject) {
    this.bindUIFunctions(processListObject);
    this.adjustLabels(processListObject);
  },

  bindUIFunctions: function(processListObject){
    $(window).on("resize", function () {
      vauxProcessList.adjustLabels(processListObject);
    });
  },

  adjustLabels: function(processListObject){
    // capture 2 key widths in variables
    var widthContainer = $(processListObject).width(),
        widthLabels = 0;

    // capture the bottom label container
    var bottomLabel = $(processListObject).find('.process-bottom-label');

    // capture the Current step's text
    var currentStepText = $(processListObject).find('.current-step span').text();

    // recalculate width of all the labels together
    $(processListObject).find('span').each(function() {
      widthLabels += parseInt($(this).width(), 10);
    });

    // reset the bottom label
    $(processListObject).find(bottomLabel).empty();

    // remove the class
    $(processListObject).removeClass('has-bottom-label-activated');

    // If the container is too small to hold all Labels,
    // then show only the Bottom Label
    if (widthContainer <= widthLabels) {
      $(processListObject).addClass('has-bottom-label-activated');

      // and add the Current step's text into it
      $(processListObject).find(bottomLabel).append(currentStepText);
    }
  }
};

$( ".vaux-process-list.has-bottom-label" ).each(function() {
  vauxProcessList.init(this);
});