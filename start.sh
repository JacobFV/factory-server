#!/bin/sh
cd /home/pi/factory-server
handlebars web/templates -f web/templatesCompiled.js
node server.js
