/* Tabs */

var vauxTabs = {

	init: function(tabObject) {
    this.pageLoadCorrectTab(tabObject);
		this.bindUIfunctions(tabObject);
    this.loadFlexMenus(tabObject);
  },

	bindUIfunctions: function(tabObject) {
		$(tabObject).on("click touchstart", "[data-tabs-navigation] a[href^='#']", function(event) {
      event.preventDefault();
      if (this.hash !== '') {
        vauxTabs.changeTab(this.hash, tabObject);
        vauxTabs.changeButtonText(tabObject);
      }
      
		});

		//This adds keyboard function that pressing an arrow left or arrow right from the tabs toggle the tabs when SHIFT + TAB out of a tab section (content) focus is place back on active tab in navigation. 
		$(tabObject).keydown(function(event) {

      var menuItems = $(tabObject).find('li[role="tab"]'),
          currentTab = menuItems.filter('.vaux-current-tab'),
          currentTabIndex = menuItems.index(currentTab),
          nextTab = menuItems[(currentTabIndex + 1)],
          nextTabHash = $(nextTab).children().attr('href'),
          prevTab = menuItems[(currentTabIndex - 1)],
          prevTabHash = $(prevTab).children().attr('href');
			
			// LEFT
			if ((event.keyCode === 37 || event.keyCode === 38) && prevTabHash !== undefined) {
				vauxTabs.changeTab(prevTabHash, tabObject);

			// RIGHT
			} else if((event.keyCode === 39 || event.keyCode === 40) && nextTabHash !== undefined) {
				vauxTabs.changeTab(nextTabHash, tabObject);
			}

			// SHIFT + TAB
			if ((event.keyCode === 9 && event.shiftKey) && $(event.target).is('.vaux-tabs-section')) {
        currentTab = $(tabObject).find('li.vaux-current-tab a').attr('id');
				$('#' + currentTab).focus();
      }
			
		});

	},

	// If a tab has data-tab-selected="true" then load this tab on page load
	pageLoadCorrectTab: function(tabObject) {
		var tabSelected = $(tabObject).find('[data-tab-selected="true"]');

		if (tabSelected.length !== 0) {
			var tabID = '#' + tabSelected.attr('id');
			this.changeTab(tabID, tabObject);
		}
	},

  // Replace the button menu text with the title of the link that was clicked
  changeButtonText: function (tabObject) {
    var button = $(tabObject).find(".vaux-button-menu-wrapper button");
    var targetText = $(tabObject).find('.vaux-button-menu .vaux-current-tab a').text();

    $(button).text(targetText);
  },

  // Watch functionality to adjust FlexMenu (button menu version) as window is resized
  watchWindowResize: function(tabObject){
    var $wind = $(window),
        mobile;

    var mobileFunctions = function() {
      vauxTabs.collapseToButtonMenu(tabObject);
      vauxTabs.changeButtonText(tabObject);
    };

    var desktopFunctions = function() {
      vauxTabs.expandToFlexMenu(tabObject);
      $(tabObject).find('[data-tabs-navigation]').flexMenu({
        cutoff: 2,
        threshold: 2,
        showOnHover: false,
        linkTextAll: 'More'
      });
    };

    var mobileCheck = function() {

      var window_w = $wind.width();

      if ( window_w < 600 ) {
        if ( mobile ) {
          return;
        } else {
          mobileFunctions();
          mobile = true;
        }
      } else {
        if ( !mobile ) {
          desktopFunctions();
          return;
        } else {
          desktopFunctions();
          mobile = false;
        }
      }
      
    };

    mobileCheck();

    $wind.resize(function() {
      mobileCheck();
    });
  },

  loadFlexMenus: function(tabObject) {
    if ($(tabObject).attr('data-tabs-mobile')) {
      vauxTabs.watchWindowResize(tabObject);
    } else {
      $(tabObject).find('[data-tabs-navigation]').flexMenu({
        cutoff: 0,
        threshold: 0,
        showOnHover: false,
      });
    }
  },

	// When user clicks on a tab, change the tab and the related content below it
	changeTab: function(hash, tabObject) {

		var anchor = $("[href=\\" + hash + "]"),
				div = $(hash),
        selectedTab = anchor.parent();

    var menuItems = $(tabObject).find('li[role="tab"]'),
        currentTab = menuItems.filter('.vaux-current-tab'),
        currentTabIndex = menuItems.index(currentTab),
        nextTab = menuItems[(currentTabIndex + 1)],
        nextTabHash = $(nextTab).children().attr('href'),
        prevTab = menuItems[(currentTabIndex - 1)],
        prevTabHash = $(prevTab).children().attr('href');

		
    // activate correct anchor tab (visually)
		selectedTab.addClass("vaux-current-tab").attr({
			'aria-selected': 'true'
		});

    menuItems.not(selectedTab).removeClass("vaux-current-tab").attr({
     'aria-selected': 'false'
    });

		// activate correct section div (visually)
		div.addClass("vaux-current-tab").attr({
			'aria-hidden': 'false'
		}).focus().siblings().removeClass("vaux-current-tab").attr({
			'aria-hidden': 'true'
		});
	},

	// For tabs that turn into Button Menus on mobile
	collapseToButtonMenu: function(tabObject) {
		var buttonMenuID = $(tabObject).attr('data-tabs-mobile'),
				tabWrapper = $(tabObject),
				tabsNavList = $(tabObject).find('.vaux-tabs-nav').html(),
				menuTemplate = '<div class="vaux-button-menu-wrapper">' +
                        '<button aria-expanded="false" aria-controls="'+buttonMenuID+'" data-trigger-buttonmenu>Button Menu</button>' +
                        '<div id="'+ buttonMenuID+'" class="vaux-button-menu" tabindex="-1" aria-hidden="true">' +
                        '<ul data-tabs-navigation role="tablist">' +
                        tabsNavList +
                        '</ul>' +
                        '</div>' +
                        '</div>';

    $(menuTemplate).prependTo($(tabObject));

    // Initalize Button Menu
    $('.vaux-button-menu-wrapper').each(function(){
      vauxButtonMenu.init(this);
    });

    // Hide the FlexMenu Tabs
		var origTabs = $(tabObject).find('[data-tabs-navigation]').get(1);
    $(origTabs).hide();

    $(tabObject).unbind('keydown');
	},

  expandToFlexMenu: function(tabObject) {
    $('.vaux-button-menu-wrapper').remove();
    var origTabs = $(tabObject).find('[data-tabs-navigation]').get(0);
    $(origTabs).show();
  }
};

$('[data-tabs-trigger]').each(function(){
	vauxTabs.init(this);
});