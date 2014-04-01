/* global JS:false */

var run = function() {
    JS.Test.autorun();
};

var ROOT = JS.ENV.ROOT || '..';
// JS.cache = false;

JS.load(ROOT + '/vendor/backbone.marionette/jquery.js',
        ROOT + '/vendor/backbone.marionette/underscore.js',
        ROOT + '/vendor/backbone.marionette/backbone.js',
        ROOT + '/vendor/backbone.marionette/backbone.babysitter.js',
        ROOT + '/vendor/backbone.marionette/backbone.wreqr.js',
        ROOT + '/vendor/backbone.marionette/json2.js',
        ROOT + '/vendor/backbone.marionette/backbone.marionette.js',
        ROOT + '/lib/sorted.js',
        ROOT + '/tests/sorted_spec.js',
        // add files here as the project grows
        run);
