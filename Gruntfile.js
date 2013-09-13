/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    phpunit: {
      classes: {
        dir: 'demoTests'
      },
      options: {
        colors: true
      },
    },
    phplint: {
      options: {
        swapPath: '/tmp'
      },
      all: ['*/*.php']
    },
    phpcs: {
      application: {
        dir: 'wordpress/*.php'
      },
      options: {
        bin: 'phpcs',
        standard: 'PEAR',
        severity: 6
      }
    },
    watch: {
      phpunit: {
        files: ['**/*.php'],
        tasks: ['phpunit', 'phplint', 'phpcs'],
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-phpunit');
  grunt.loadNpmTasks('grunt-phplint');
  grunt.loadNpmTasks('grunt-phpcs');

  // Default task.
  grunt.registerTask('default', 'watch');
  grunt.registerTask('manual', ['phpunit', 'phplint', 'phpcs']);

};
