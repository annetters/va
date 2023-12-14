/* Tables */

/* Table Stacked Accordion */
$('.vaux-table--accordion .row').on('keypress click', function(event){
  var e = event;
  var nearestRadio = $(e.target).prev('input');

  // If Enter or Click is performed, then check the nearest radio
  if (e.which === 13 || e.type === 'click') {
    nearestRadio.prop("checked", !nearestRadio.prop("checked"));
  }
});

/* Table Frame to Fixed Scrolling Tables */
function addFramedTableBorder() {

  $("[data-table-framed-trigger]").each(function(){
    var tableContainer = $(this);
    var tableContainerWidth = $(tableContainer).width();

    var tableInner = $(this).find('table');
    var tableInnerWidth = $(tableInner).width();

    // if the Table Container is too small for the Table (has a scrollbar)
    if ( tableContainerWidth < tableInnerWidth) {
      // then add a style with padding/border
      $(tableContainer).css({
          'border':'1px #d6d7d9 solid'
      });
      $(tableInner).css({
          'margin': '1.3rem'
      });
    }
  });
}

addFramedTableBorder();