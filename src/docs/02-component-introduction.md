---
title: Component - Introduction
status: ready
---

**On this page:**
* [Component Directory](#component-directory)
* [SASS files](#sass)
* [JavaScript files](#javascript)

***

Components and their associated files are separated into three areas. The component directory, the component's styles, and the component's JavaScript. All files associated with a specific component are named the same. Consider the following example:

**Directory Name: Carousel**

* HBS file: ```carousel.hbs```
* Config file: ```carousel.config.yml```
* SASS file name: ```carousel.scss```
* JS file name: ```carousel.js```
 

This helps to keep all of a components files easily distinguished for future development.

In some instances, there are multiple variations of a component. These components have multiple Handlebars files containing the markup for each of these variants. Naming conventions for these are dictated by Fractal and therefore will be written in the following manner:

**Directory Name: Accordion**

* HBS files:
  * ```01-accordion.hbs```
  * ```02-accordion--bordered.hbs```
  * ```03-accordion--multiselect.hbs```
* Config file: ```accordion.config.yml```
* SASS file: ```accordion.scss```
* JS file: ```accordion.js```


By default, Fractal orders components in alphabetical order. In this scenario, the number in front of the components name is the order in which we have dictated that they should appear in the navigation pane. The text after the double dashes is the name of the variant and will show up in both the navigation and preview pane.

## Component Directory
**_Location: src/components/_**

_Includes the Handlebars/HTML file and the config.yml file associated with the component._
***

### HTML

The Handlebars file is using basic HTML syntax and should continue to be written as such. Within this file, you will notice that source files associated with the component are commented out at the top. This is to ensure that a strong relationship between the component and its related files is apparent to all developers. In addition to the files already mentioned, any third-party vendor files that are being used to assist in the component's functionality are also commented here.

```<!-- SASS: src/stylesheets/_components/carousel.scss -->```

```<!-- JS: src/js/carousel.js -->```

```<!-- Vendor JS: src/js/_vendor/slick-carousel.js -->```

### Component Configuration

Component files can be configured using the ```componentName.config.yml``` file contained in the component's directory. This file allows you control over many things (which are described in the Fractal Documentation) but the main use in this project is to relay status, labels, preview type, and notes.

#### Status

Each component can have one of four statuses that reflect their state of completion: In Queue, In Development, Prototype, and Ready.

These statuses can be set by changing the ```status```: key to one of the following: ```queue```, ```wip```, ```prototype```, or ```ready```

The meaning of each of these statuses can be referenced below:

<table>
  <tbody>
    <tr>
      <th>Label</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <div class="Status Status--tag">
          <label class="Status-label" style="background-color: #B6B9B9; border-color: #B6B9B9;">In Queue</label>
        </div>
      </td>
      <td>Component is slotted for development.</td>
    </tr>
    <tr>
      <td>
        <div class="Status Status--tag">
          <label class="Status-label" style="background-color: #FF3333; border-color: #FF3333;">In Development</label>
        </div>
      </td>
      <td>Currently being developed. Not ready for testing.</td>
    </tr>
    <tr>
      <td>
        <div class="Status Status--tag">
          <label class="Status-label" style="background-color: #FF9233; border-color: #FF9233;">Prototype</label>
        </div>
      </td>
      <td>Development complete. Ready for testing.</td>
    </tr>
    <tr>
      <td>
        <div class="Status Status--tag">
          <label class="Status-label" style="background-color: #29CC29; border-color: #29CC29;">Ready</label>   
        </div>
      </td>
      <td>Development and testing complete. Ready to implement.</td>
    </tr>
  </tbody>
</table>

#### Labels

Fractal determines and assigns its page titles by the name of the Handlebars file you create for the component. This can be adjusted (and has been for some components) using the ```label``` key.

#### Preview

Within Fractal's UI, under the Info pane in each component is the ability to 'Preview' it with or without a layout. Layouts are defined in the root of the component directory. These layouts are as follows: ```_preview.hbs``` and ```_preview-full-width.hbs```. These preview layouts are used to offer different layouts for components that may need to, for example, sit inside of the USWDS grid or extend the full width of the browser. The component's layout can be specified in its config file using the ```preview``` key.

#### Notes

In each of the component pages there is an 'Notes' pane that contains any pertinent information for the components. The Veteran's Affairs UX Guide will be where most component information is housed. Therefore, we are merely linking to the VA's UX Guide to guide any users to that information. The ```notes``` key in the configuration file is where these are written.
In addition, the use of a ```README.md``` file can be employed in the component directory if lengthier notes are required regarding information specifically about a component's code and guidance relating to a component's setup.

## SASS
**_Location: src/stylesheets/components/_**

_Includes the stylesheet associated with the component._
***

The sass files contained in this library are separated using the ITCSS methodology. More can be learned about this method [through this article](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

This allows our component stylesheets to all sit in the same directory as well as give organization to the rest of the styles.

### Vendor styles

The styles contained in this project are built on top of the US Web Design Standards framework. Therefore, this vendor file, and others that pertain to third-party component plugins are imported at the top of our ```all.scss``` file. You will then find a table of contents for the library's custom styles.

All vendor files that are included in the library should not be modified in any way. Anything needing to be overwritten or changed from these files should be done in one of the library's custom stylesheets. This is to prevent deletion/overwriting of development work in the event that a plugin or the US Web Design Standards are updated and the development team deems it necessary to update/upgrade the version.

For reference on the variables used in the US Web Design Standards you can look at this file: ```node_modules/uswds/src/stylesheets/core/_variables.scss```

### Custom Variables File

In our project's stylesheets under the ```_settings/``` directory you will find the variables file for this library. It houses overwritten variables from the US Web Design Standards as well as other variables that are more global in the scope of the project.

Component specific SASS files

Each component that requires custom styling has a stylesheet with the same name. These stylesheets are kept separately from each other and then compiled during a build. Within the stylesheet you will find variables known as 'tokens' for reusable property values that can be adjusted on a global component level. It is important when developing a new or already existing component that potential tokens are identified and promoted to the top of the stylesheet. These tokens provide an easy way to ensure consistency throughout a component as well as one area to change out values that is easy to reach.

Component class names that point to custom styles are prefixed with the ```vaux-``` prefix. This keeps styles separated and protected from conflicting with styles from third-party vendors as well as helps with scoping element styles within a component.

## JavaScript
**_Location: src/js/_**

_Includes any JavaScript associated with the component (if applicable)._
***

US Web Design Standards utilizes JQuery in their framework to build functionality into their components. The custom JavaScript created for components in this library follows the same suit.

### Vendor files

Any third party vendor JavaScript that is used in conjunction with a component is called in and bundled with other third party scripts and added to the preview page previous to calling in the main JavaScript file with our custom JS. These files are housed in one of two places:

* ```src/js/_vendor``` - These files are third party vendor files that needed to be modified from their original functionality to add in accessibility features or add further functionality. They are placed here so that they aren’t overwritten.
* ```node-modules/vendorname``` - These files were installed using Node and a ```‘npm install modulename’``` command. These modules are third party vendors whose functionality will not be adjusted by the development team (JQuery, USWDS, Fractal, and any others where this is the case). These files are listed in the project’s ```package.json``` file under the ‘dependencies’ heading.

Files that are added to either the ```_vendor``` folder or the ```node-modules``` folder need to be added to the ‘bundle’ task in the gulp file to get bundled into the project during a build.


### Data Attributes

Functionality for components is called using data attributes. This approach has been used in order to separate JavaScript functionality from component styles as class names may be modified over time. In addition, they are used to avoid the use of ID's as only one is allowed per page.

All data attribute names follow the naming convention: ```[data-componentname-trigger]```. This is so that triggers for initializing a component's functionality are easily recognized. In addition, other data attributes may be in use from third-party vendors and we would like to avoid conflicts where possible.