---
title: Component - Workflow - Adding/Customizing Components
status: ready
---

**On this page:**
* [Identify](#identify)
* [Queue](#queue)
* [Develop](#develop)
* [Test](#test)
* [Release](#release)

***

The workflow for components is the same regardless of whether you are adding a completely new component or customizing/making changes to an already existing one. The following workflow chart highlights the main steps in the process:


![Workflow - Complete](../img/docs-images/workflow.png)

Each step has its own tasks that must be completed before moving on. In addition, the Develop and Test steps work in a loop until certain criteria is met to move onto the release step. Let's break down each step in this workflow for further clarification:

## Identify
***

![Workflow - Identify](../img/docs-images/workflow-identify.png)

Identifying components that need to be created or those that need to be adjusted should be done continuously. The keys to identifying a component are:

* Understanding if you're creating a variant or a completely new and unique component.
* Recognizing if the component going to be used and needed throughout the entire VA Mobile App ecosystem.
* Avoiding the creation of new components that are 'one-off' or only used in very few use cases.
* Documenting any design or functionality notes of the component that will need to be implemented during development so that any developer can work through the notes to complete the integration of the component.

Components that are identified as being a useful to house in the library (or one that needs to be adjusted to better serve a majority of use cases with VA applications) should be discussed throughout the development team and escalated to any UX personnel that should/will have input on what is introduced into the Pattern Library.

After discussion and input by all appropriate parties and approval is given to move forward, the component can be placed into the 'Queue' and the next step in the process takes place.

## Queue
***

![Workflow - Queue](../img/docs-images/workflow-queue.png)

Components that are placed in 'Queue' are in a pre-development status. Therefore, no development is currently being done on this component but it is being flagged into queue because it is approved for development in a future cycle.

The following steps occur within the Queue state:

* Ensure that you have created and are working within a new branch of the repo (using a working copy of the ```master``` branch). Naming convention for the branch is ```comp-ComponentName```. This allows for each component to be developed and released in its own vacuum without conflicting with the development of other components.
* **For Existing Components**:
  * Set the status of the component to ```queue``` in that component's ```config.yml``` file.
  * Relay any documentation on how the component's functionality or design is going to change through either the use of the notes section in the config file (see the Component Configuration section for more information on how to do this) or commenting within the ```.hbs``` file.
* **For New Components**:
  * Create a copy of the ```_component-template``` folder within the ```src/components``` directory.
  * Rename this folder and the files inside to the name of the component you are creating and remove the underscore from the front of the directory name (this keeps a directory hidden from the navigation pane).
    * Ex:
    ![Workflow - Queue - rename files](../img/docs-images/workflow-queue-rename.jpg)
  * Create any correlating SASS and JS files in their respective areas. Ensure that you also create these using the component's name.
    * Ex:

    ![Workflow - Queue - create files](../img/docs-images/workflow-queue-create01.jpg)
    ![Workflow - Queue - create files](../img/docs-images/workflow-queue-create02.jpg)
  
  * Once these files are created, the comments at the top of the component's HTML file can be filled in to point to the correct filenames. (For more info on these comments see Component Directory - HTML). Remove any of the comments that do not apply (for example: you aren't using a third-party vendor library to supplement functionality).
  * Within the component's ```config.yml``` file, relay any important information on the component's functionality or design through either the use of the notes section in the config file (see the Component Configuration section for more information on how to do this) or commenting within the ```.hbs``` file. In addition, adjust or remove keys as necessary in order to display the component and its information as you would like (for more information on what keys are available to you and what you can use them from see Component Configuration)

When these steps are complete, you should see the following within the component in the Library's navigation pane. The status will be gray in color indicating that it is 'in queue' for development.

![Workflow - Queue - status](../img/docs-images/workflow-queue-status.jpg)

The component is now ready for development and can sit in this state for as long as it takes in order to begin its development cycle.

## Develop
***

![Workflow - Develop](../img/docs-images/workflow-develop.png)

At the point in which a component is ready to be developed, the status of that component can be changed to ```wip``` in the config file. This will set the status bubble to red indicating it is being worked on.

![Workflow - Develop - status](../img/docs-images/workflow-develop-status.jpg)

The remaining process during this stage is very straightforward: develop the component’s markup, styles, and any JavaScript functionality that it requires. Be sure to read through the Component Directory section for information regarding naming conventions for styles and JavaScript.

Once the component’s code is completed the status can be changed to ```prototype```. It is at this point that the component’s code is merged into the ```develop``` branch of the repository. Once this occurs, a build is created and placed on the staging environment to prepare for testing.

![Workflow - Prototype - status](../img/docs-images/workflow-prototype-status.jpg)

## Test
***

![Workflow - Test](../img/docs-images/workflow-test.png)

The testing phase of a component’s lifecycle is one of the most important. It will ensure that the user has a consistent experience across browsers and devices. It will also ensure that screen readers and those using other forms of assistive technology are able to utilize the component when it is placed in one of the VA’s mobile applications. Please review the [Section 508 Compliance Article from the VA](https://mobile.va.gov/content/my-app-section-508-compliant) for more information on the requirements of these components.

There are four categories of testing that should be successfully completed before a component is released. A component should be:

* **Responsive**
* **Styled and function the same on multiple browsers**
* **Keyboard navigable**
* **Available and working on screen readers**

The success of each of these categories will determine whether a component moves onto its release step or moves back into development for further code adjustments and enhancements. Let’s take a look at each of these categories in depth.

### Responsive

Any component should be developed outside of containing layout. What that means is that the component should be developed with a global mindset. The component should be able to be placed within a container (utilizing the US Web Design Standards grid) and be laid out properly for an application. Outside of the layout container, it should not be constrained (unless this is specified in the design). For example: the card component image below shows that the card expands to 100% width of its container. 

![Workflow - Test](../img/docs-images/workflow-test-responsive01.jpg)

However, you can easily adjust the width using the grid system. You can see this in action in this second image.

![Workflow - Test](../img/docs-images/workflow-test-responsive02.jpg)

In addition, the component should be responsive throughout different browser sizes. The current breakpoints (in pixels) included in the library are: 481, 600, 768, 992, and 1201. Additional breakpoints can be added to the ```variables.scss``` file within the project.

The Pattern Library includes two ways of viewing a component. By using the built in preview pane that comes up on a component’s page, or by using the preview button <svg fill="#000000" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></svg>
    located to the right of the component title. You can use either one of these to test the responsiveness of a component through different breakpoints. The preview pane has a small handle to the right of the pane that you can use to make it smaller or wider for quick breakpoint testing.

### Browsers

Components should be tested on multiple browsers and devices. For browser testing, it is recommended to use [Browserstack](https://www.browserstack.com/). This web service emulates multiple OS for both desktop PC and Mac as well as all available browsers. In addition, you can emulate many different popular mobile devices (phone and tablet).

Testing on these different browsers and devices should focus on style consistency and ensuring functionality of the component is intact.

 The following is the minimum list of browsers/devices that should be tested for any component.

* IE - 10+
* Firefox
* Chrome
* Safari
* iOS Safari - Phone
* iOS Safari - Tablet
* Android Chrome - Phone
* Android Chrome - Tablet

### Keyboard Navigation and Control

The current components in the Pattern Library have been testing for keyboard functionality based of numerous accessibility articles as well as the WCAG. Overall, it is extremely important that the component is accessible to the keyboard and all functionality that a user can perform using a mouse is also available to the keyboard through various controls. Thorough testing should be performed on the component to confirm this is the case.


### Screen Reader Accessibility

The use of ChromeVox (available as an extension on the Chrome browser) and VoiceOver (available natively on Mac) has been used to test screen reader accessibility on the current components of the Pattern Library. In addition, the use of the JAWS screen reader, which is available to download for Internet Explorer on PC Windows, and NVDA, available on FireFox on PC Windows is recommended if it is available.

Testing on these components should reveal that their content is read properly, state changes are brought to the screen reader’s attention, and any content that is related is clearly defined.
In addition, content should be added (and hidden visually) to components in cases where clarity of the content is necessary.

If a third-party testing vendor is allowed/available it would be recommended to have components tested as they are developed for the most accurate results and recommendations for improvements. For example: [The Carroll Center](http://carroll.org/)

Once a component’s testing is completed its status in the config file can be changed to ```ready```. Afterwards, a pull request to merge the component into the ```master``` branch of the repository can be made and the final step in the process is entered, Release.


## Release
***

![Workflow - Release](../img/docs-images/workflow-release.png)

The last step in the process is releasing a component. After testing is complete a pull request is made to merge the component in to the ```master``` branch of the repository. At this time, it is recommended that another developer does a code review of the component. The code review is the time to address any code formatting issues or other minor adjustments that may need to take place so that code being developed "appears to be written by a single person, no matter the number of contributors" _- Mark Otto_.

Once a review is complete, the pull request can be approved and the component merged into the ```master``` branch for final release. A build should be created for the live production URL to include the new (or adjusted) component of the Pattern Library. This is the point at which a component can be used in application development for the VA.
