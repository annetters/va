var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    minCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    iife = require("gulp-iife"),
    sourcemaps = require('gulp-sourcemaps'),
    environments = require('gulp-environments'),
    
    paths = {
        sourcesass: __dirname + '/src/stylesheets/',
        destsass: __dirname + '/src/assets/css',

        sourcejs: __dirname + '/src/js/',
        destjs: __dirname + '/src/assets/js',

        sourcevendor: __dirname + '/src/js/_vendor/',
        destvendor: __dirname + '/src/assets/js/_vendor/',

        // Environments
        DEV: environments.development,
        PROD: environments.production
    };

function catchErr(e) {
  console.log(e.message);
  this.emit('end');
}

gulp.task('build', ['sass', 'bundle', 'scripts']);
gulp.task('default', ['build', 'watch']);

// Watch for changes to static assets: JS and Sass
gulp.task('watch', function(event) {
    watch([paths.sourcesass + '**'], function(event) {gulp.start('sass');});
    watch([paths.sourcejs + '*.js'], function(event) {gulp.start('scripts');});
    watch([paths.sourcevendor + '*.js'], function(event) {gulp.start('bundle');});
});


// Sass - Compile, Rename, Autoprefixer, CleanCSS (Minify), Sourcemaps
gulp.task('sass', function(){
  return gulp.src(paths.sourcesass +'/all.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true}))
    .on('error', catchErr)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(paths.PROD(minCSS()))
    .pipe(rename("main.min.css"))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.destsass));
});

// Javascript - Concat, Uglify, Rename, Sourcemaps
gulp.task('scripts', function() {
  return gulp.src(paths.sourcejs + '*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(iife({
        useStrict: false,
        prependSemicolon: false,
    }))
    .pipe(paths.PROD(uglify()))
    .pipe(rename("main.min.js"))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.destjs));
});

// Bundle Third Party Vendor Files
gulp.task('bundle', function(){
  return gulp.src([
    __dirname + '/node_modules/jquery/dist/jquery.min.js',
    __dirname + '/node_modules/uswds/dist/js/uswds.min.js',
    __dirname + '/node_modules/highcharts/highcharts.js',
    __dirname + '/node_modules/highcharts/modules/accessibility.js',
    paths.sourcevendor + 'modernizr.js',
    paths.sourcevendor + 'flexmenu.js',
    paths.sourcevendor + 'focusable.js',
    paths.sourcevendor + 'twitter-typeahead.js',
    paths.sourcevendor + 'bootstrap-timepicker.js',
    paths.sourcevendor + 'bootstrap-datepicker.js',
    paths.sourcevendor + 'slick-carousel.js',
    paths.sourcevendor + 'tooltip.js',
    paths.sourcevendor + 'sortable.js',
    paths.sourcevendor + 'ml-menu.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.destvendor));
});