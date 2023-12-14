# VA / Ironbow - Component Library

This component library for Veterans Affairs is intended to encourage consistent, usable, and accessible design principles as well as implement well known UI standards into the current VA Mobile Application ecosystem using the [US Web Design Standards](https://standards.usa.gov/components/) framework. The component library is built using [Fractal](http://fractal.build/) as the UI wrapper and build tool to present the components in a navigable and digestible way.

The VA Pattern Library is currently at the following URL:

[Production URL](#)


## Resources
------

#### Fractal

Fractal is the user interface of the component library.

[Documentation](http://fractal.build/guide)

The following technologies are used in conjunction with Fractal to aid in development efforts:

* [Handlebars](http://handlebarsjs.com)
* [Gulp](http://gulpjs.com)
* [Sass](http://sass-lang.com)
* [JQuery](https://jquery.com/) - version 2.2.0

#### US Web Design Standards

The US Web Design Standards is being used as the front-end framework of the library’s components.

[Documentation](https://standards.usa.gov/components/)

#### VA Pattern Library Documentation

Please visit the documentation contained within the Pattern Library to learn more in depth information about the project's file structure and component workflow.

[Visit Documentation](#)

## Starting Development
------

* Install the Fractal CLI tools onto your machine so you can run fractal terminal commands - ```npm i -g @frctl/fractal```
* Download or Clone this repository to your local environment
* Open terminal and navigate to the root directory of the project
* Run ```npm install```
* Run ```npm run start``` to spin up the development server that watches the file system for changes (uses browsersync)
* Navigate to ```http://localhost:3000``` (or other local url that is specified in the terminal window)

### Creating A Build
------
* From the root directory of the project, in terminal, run```npm run build```

## Developing - Branches, Merging, and Deployment
------
Two branches exist in this repo that will always be present. The ```develop``` branch and the ```master``` branch. 

**Master** - The master branch is for production ready code only and should not be merged into unless a component or other project code is completed, tested, and approved for production release. *Note: Any components included for production should have a status of 'Ready' before being pushed to the production URL. Learn more about component statuses in the Documentation section of the component library.*

**Develop** - The `develop` branch contains code that is ready to be deployed to the staging area. This includes new component code, configuration files, work on the fractal.js, gulpfile.js, package.json, and any other build tool adjustments. Once code has been reviewed and team members have completed testing through the staging URL a pull request can be made to merge into the `master` branch. Pull requests for the `master` branch should be approved by at least one other developer on the project before being merged.

*Component Name* Branches - Components being developed should be in their own branch. These branches will contain all code (js, scss, and html) that pertains to that specific component and only that component. When creating a new component a working copy of the `master` branch should be used. The naming convention used for a component branch is: *comp-TheComponentName* (Ex. Comp-Carousel). Once development on the component is complete the branch can be merged into the `develop` branch for staging, testing, and potential release.

### Deployment
------

* From the root directory of the project, in terminal, run `npm run build`. This creates a `/dist` folder within the root of the project. You can find the compiled code in this folder in order to upload it onto a live server using FTP.

The current staging URL is: [Staging URL]()

The current production URL is: [Production URL]()

## Starter Kit (web)
------
To make use of the developed components within a VA application, the following directories should be peeled from the build's ```/dist``` folder and replaced within the Starter Kit. ```/css```, ```/fonts```, ```/img```, and ```/js```. These can be placed in the ```/app``` directory of the Starter Kit. This replacement/push to the Starter Kit should occur when new components are released through the development cycle.

The ```index.html``` file is pointing to the correct CSS and JS files within the Starter Kit directory and should pull in all the relevant code. At this point any currently released components can be utilized.

## Updating Plugins  
------
Within the ```package.json``` file in the root of the project, you will find two sections. ```devDependencies``` and ```dependencies```. Both of these sections list a series of plugins/modules being used on the project. Any items under the ```devDependencies``` are only being used during development for various gulp tasks. The plugins that are listed under the ```dependencies``` section are those that are being used within the project’s code.
Currently, any plugin in the ```dependencies``` section has the version being applied listed next to it. These plugin versions need to be updated manually if a new version should be applied to the project.

*How Do I Know When To Update?*

Updating a plugin should be done if the developer _of that plugin_ has made beneficial updates to the code/functionality that the VA team feels should be incorporated into the library/their components.

*How To Update*

In order to update to the desired version, just change the version number in the ```package.json``` file listed next to the plugin’s name.  Delete your current ```node_modules``` folder from the project. Then: 

* Open terminal and navigate to the root directory of the project
* Run npm install

This will re-install the plugins to your project in the desired version.

*Before You Update*

Make sure that you create a feature branch of the repository that you will work out of. This should be copied from the ```master``` branch. It is within this new branch that you should make the appropriate adjustments to the ```package.json``` file. The reason for doing this is so that you can confirm that the update to the plugin did not cause any new bugs or broken components within the current codebase. It is important that if you are updating a plugin that touches all or many components that you thoroughly check and ensure all are still working properly.

You may also review the code changes of the plugin on the developer’s website/repository and determine what areas of the Pattern Library will be affected by updating. Be sure to check specifically check these areas before pushing this update branch back into the ```master``` branch.

