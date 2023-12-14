## UX Guidelines

[Veteran's Affairs UX Guide - Modal](#)

### Code Guidance

* Modals are triggered by elements assigned with the ```data-modal-trigger``` attribute. Typically, these are ```button```, ```a```, or icons but could be any element in the DOM. <i>Note: should an icon be used, ```aria-label``` should be used on the icon element in order to provide screen readers with descriptive text as to the intention of the icon.</i>
* Modal triggers need to have a ```data-modal-type``` assigned with a value of basic or complex. This determines the styling and behavior of the modal.
* Modal triggers should have a ```data-attr``` with a value set to match the ID of the modal to be opened by the trigger.