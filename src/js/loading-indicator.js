/* Loading Indicator */

var vauxLoadingIndicator = {

  init: function(indicatorObject){
    this.bindUIFunctions(indicatorObject);
  },

  bindUIFunctions: function(indicatorObject){
    $(indicatorObject).on('click', function(e){
      if ($(e.target).is('[data-loader="inline"]') && !$(e.target).is['disabled']) {
        vauxLoadingIndicator.create(e.target);
        vauxLoadingIndicator.loadingData(e);

        /* 
        ** setTimeout is used for working example.
        ** This function should be called when server response is done or page is done loading data
        */

        setTimeout(function() { vauxLoadingIndicator.loadDataComplete(e); }, 1000);

      } else {
        vauxLoadingIndicator.create('body');
        vauxLoadingIndicator.loadingPage(e);

        /* 
        ** setTimeout is used for working example.
        ** This function should be called when server response is done or page is done loading data
        */

        setTimeout(function() { vauxLoadingIndicator.loadPageComplete(e); }, 3000);
      }
    });

    // Check for TAB or SHIFT+TAB key press and prevent user from navigating while page is loading
    $(document).on('keydown', function(event){
      var ev = event;
      if ($('#activeIndicator.loading').length !== 0 && !$('.vaux-loading-indicator').hasClass('indicator-inline')) {
        if (ev.keyCode === 9 || ev.keyCode == 13  ) {
          ev.preventDefault();
        }
      }
    });
  },

  create: function(location){
    var loadingIndTemplate = $('<div/>', {
          'id': 'activeIndicator',
          'role': 'status',
          'aria-live': 'assertive'
        }),
        iconClass = 'vaux-loading-indicator-icon star',
        icons = [],
        iconCount = 8,
        i = 1; // counter for icons

    // Creating eight icon divs to be placed inside wrapper
    while (i <= iconCount) {
      var icon = $('<div/>', {
        'class': 'vaux-loading-indicator-icon star'+i,
      });
      icons.push(icon);
      i++;
    }

    loadingIndTemplate.append(icons);

    if (location == 'body') {

      loadingIndTemplate.addClass('vaux-loading-indicator');
      $('<span class="usa-sr-only">Loading. Please wait.</span>').appendTo(loadingIndTemplate);
      $(location).append(loadingIndTemplate);
    
    } else {

      loadingIndTemplate.addClass('vaux-loading-indicator--inline');
      $('<span class="usa-sr-only">Processing.</span>').appendTo(loadingIndTemplate);
      $(location).append(loadingIndTemplate);
    
    }
  },

  loadingPage: function(e){
    var el = e.target;

    $('body').addClass('overlay').attr('aria-busy','true');
    $('#activeIndicator').addClass('loading');

    $('body').on('touchmove', function(e){e.preventDefault();});

    if ($(el).is('[data-color="inverted"]')) {
      $('#activeIndicator').addClass('indicator-inverted');
    }
  },

  loadPageComplete: function(e) {
    var loadingCompleteTemplate = $('<div/>', {
          'class': 'usa-sr-only vaux-loading-complete-status',
          'role': 'status',
          'aria-live': 'polite',
          'aria-label': 'Loading complete.'
        }).html('Loading complete.');

    $('body').prepend(loadingCompleteTemplate).focus();
    $('body').removeClass('overlay').attr('aria-busy', 'false');
    $('#activeIndicator').remove();
    $('body').unbind('touchmove');
    setTimeout(function() { $('.vaux-loading-complete-status').remove(); }, 1000);
  },

  loadingData: function(e) {
    $(e.target).addClass('vaux-element-loading').attr({
      'disabled':'disabled',
      'tab-index': '-1',
      'aria-busy':'true',
      'aria-label': 'Processing.',
    });
    $(e.target).children('.vaux-loading-indicator--inline').addClass('loading');

    if ($(e.target).is('[data-color="inverted"]')) {
      $(e.target).children('.vaux-loading-indicator--inline').addClass('indicator-inverted');
    }
  },

  loadDataComplete: function(e) {
    $(e.target).removeClass('vaux-element-loading').removeAttr('disabled').attr({
      'tab-index': '0',
      'aria-busy':'false',
      'aria-label': 'Processing complete.',
      'aria-live': 'status'
    });
    $(e.target).children('.vaux-loading-indicator--inline').remove();

    setTimeout(function() { $(e.target).removeClass('vaux-element-loading').removeAttr('aria-label'); }, 500);
  }
};

$('[data-loading-trigger]').each(function(){
  vauxLoadingIndicator.init(this);
});