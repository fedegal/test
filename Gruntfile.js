var path = require("path");

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      options: {
        paths: ['less'],
        yuicompress: true
      },
      src: {
        expand: true,
        cwd:    'less/',
        src:    '*.less',
        dest:   'public/stylesheets',
        ext:    '.css'
      }
    }
  });


  process.on('uncaughtException',function(e) {
    grunt.log.error('Caught unhandled exception: ' + e.toString());
    grunt.log.error(e.stack);
  });

  grunt.loadNpmTasks('grunt-contrib-less');
};