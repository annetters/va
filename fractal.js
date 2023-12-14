'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title, version, and author of the project */
fractal.set('project.title', 'VA Pattern Library');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Mad*Pow')

/* Tell Fractal what the default layout is for previewing components */
fractal.components.set('default.preview', '@preview');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal what we would like our custom statuses to be */
fractal.components.set('statuses', {
    queue : {
      label: "In Queue",
      description: "Component is slotted for development.",
      color: "#B6B9B9"
    },
    wip: {
        label: "In Development",
        description: "Currently being developed. Not ready for testing.",
        color: "#FF3333"
    },
    prototype: {
        label: "Prototype",
        description: "Development complete. Ready for testing.",
        color: "#FF9233"
    },
    ready: {
        label: "Ready",
        description: "Development and testing complete. Ready to implement.",
        color: "#29CC29"
    }
});

/* Setting default status of components */
fractal.components.set('default.status', 'queue');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Tell Fractal what file extension docs will be in */
fractal.docs.set('ext', '.md');

/* Setting default status of documentation pages */
fractal.docs.set('default.status', 'draft');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/src/assets');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/dist');

const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance of Mandelbrot theme with custom config options
const myCustomisedTheme = mandelbrot({
    "favicon": '/img/favicon.ico',
    "skin": "navy",
    "nav": ["docs", "components"], // show docs above components in the sidebar
    "panels": ["html", "notes", "resources", "info"], // The component info panels that should be displayed in the component browser (and in which order the tabs should be displayed)
    // any other theme configuration values here
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default