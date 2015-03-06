/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/font-awesome/css/font-awesome.css');
app.import('app/styles/bootstrap.css');

module.exports = app.toTree();
