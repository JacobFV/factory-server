#!/bin/sh

handlebars web/templates -f web/templatesCompiled.js
node server.js