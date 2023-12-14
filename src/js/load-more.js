/* Load More */

var vauxLoadMore = {

  init: function(loadMoreObject) {
    this.bindUIfunctions(loadMoreObject);
  },

  bindUIfunctions: function(loadMoreObject) {
    var loadMore = $(loadMoreObject).find("[data-loading-trigger]");
    
    // when you click the Load More button, show/hide the content divs
    loadMore.on('click touchstart', function (e) {
      var contentSections = $(loadMoreObject).find('tr:hidden');

      e.preventDefault();

      // show one section at a time
      contentSections.delay(1000).slice(0, 1).slideDown();

      $('html,body').animate({
        scrollTop: $(this).offset().top
      }, 1500);

      // if no sections remain to reveal - hide the loading trigger
      if (contentSections.length === 1) {
        $(e.target).delay(1000).fadeOut('slow');
      }
    });
  }
};

$('[data-load-more-trigger]').each(function(){
    vauxLoadMore.init(this);
});