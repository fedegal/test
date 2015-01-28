var express = require('express');
var path = require('path');
var __root = path.dirname(require.main.filename);
var less = require('less-middleware');
var lessConfig = {
  src:  path.join(__root, 'less/'),
  dest: path.join(__root, 'public/stylesheets'),
  prefix: '/stylesheets',
  yuicompress: true,
  force: true
};

module.exports = function(app) {
  
  app.use(less(lessConfig));
  app.use("/stylesheets", express.static(__dirname + '/stylesheets'));

}