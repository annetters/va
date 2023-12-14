## UX Guidelines

[Veteran's Affairs UX Guide - Tabs](#)

### Code Guidance

* The default responsive functionality of the tabs is to condense any tabs labels that don't fit within the viewport into a dropdown menu to the right of the tab container. This occurs all the way down through the mobile viewport. If you would like to utilize the secondary behavior, where at the mobile breakpoint the tab menu turns into a Button Menu component, a ```data-tabs-mobile="idOfButtonMenu"``` needs to be placed on ```<div class="vaux-tabs-wrapper">``` element.

* The ```<a>``` links in tab navigation have an ```href``` and ```id``` that correlate to the various tab panels of this component. Please be sure to adjust these to unique identifiers in your application.

* The ```data-tab-selected="true"``` attribute can be added to the tab panel that you would like to be displayed by default when the page loads.