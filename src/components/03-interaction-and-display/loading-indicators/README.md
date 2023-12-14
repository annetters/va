## UX Guidelines

[Veteran's Affairs UX Guide - Loading Indicators](#)

## Code Guidance

* Loading indicators can be triggered by elements assigned with the ```data-loading-trigger``` attribute or through Javascript during a page load.
* If triggered by an element with ```data-loading-trigger``` then the following data attributes are also available to control the behavior and style of the indicator:
  * ```data-loader``` - With a value of inline if the element is going to house a inline loading indicator.
  * ```data-color``` - With a value of inverted if that style is required for the element or page.
* An overlay is applied to the page when using the Page Loading indicators. This overlay prevents any action from taking place on the screen during loading, this includes scrolling on mobile devices.
* Inline loading indicators take the place of an element's text when they are present and are removed from the DOM upon an event's completion.
