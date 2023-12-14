/* Range Input */

var vauxRangeInput = {

  init: function(rangeInputObject) {
    // Set up max and min values for each range input on the screen
    this.rangeInput = {
      rangeInput: $(rangeInputObject).find('input[type="range"]'),
      maxValue: $(rangeInput).attr('max'),
      sliderValue: $(rangeInput).val(),
      minValue: $(rangeInput).attr('min'),
      minMaxWrapper: $(rangeInputObject).find('.vaux-edge-minmax-wrapper'),
      output: $(rangeInputObject).find('output')
    };

    this.setValues(this.rangeInput);
    this.bindUIFunctions();
  },

  setValues: function(rangeInput){
    // Display the current value in the output field if it is present
    if (rangeInput.output) {
      $(rangeInput.output).val(rangeInput.sliderValue);
    }
    
    // Display the min and max numbers for the range slider if they wrapper is present
    if (rangeInput.minMaxWrapper) {
      $(rangeInput.minMaxWrapper).find('span:first-of-type').html(rangeInput.minValue);
      $(rangeInput.minMaxWrapper).find('span:last-of-type').html(rangeInput.maxValue);
    }
  },

  bindUIFunctions: function(){
    $('.vaux-range-input input[type="range"]').on('input change', function(){
      var el = $(this),
          rangeSlider = $(this).parent(),
          sliderValue = $(el).val(),
          output = $(rangeSlider).find('.output-value');
          sliderThumb = $(rangeSlider).find('.vaux-value-wrapper');

      // Change value/aria-valuenow to the current value
      el.attr({
        'aria-valuenow': sliderValue,
        'value': sliderValue
      });

      output.html(sliderValue);

      // Measure width of range input
      var width = el.width();

      // Measure the width of the output area

      var outputWidth = output.width();

      // if the slider is 460 wide and the value of the slider is at the halfway point (should be 230px), then the thumb should be at 50% of the slider

      var newPoint = ((sliderValue / el.attr("max")));

      if (newPoint <= 0.02) {
        newPoint = 0;
      } else if (newPoint == 1) {
        newPoint = width;
      }

      // find the location of the value in relation to the width of the range input

      var newPlace = ((width - outputWidth) * newPoint);

      $(output).css({
        left: newPlace + 'px'
      }).val(sliderValue);

    });
  }
};

$(".vaux-range-input").each(function(){
  vauxRangeInput.init(this);
});
