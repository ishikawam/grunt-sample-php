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
        dir: 'Tests'
      },
      options: {
        configuration: 'phpunit.xml',
        colors: true
      },
    },
    watch: {
      phpunit: {
        files: ['**/*.php'],
        tasks: ['phpunit'],
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-phpunit');

  // Default task.
  grunt.registerTask('default', 'watch');
  grunt.registerTask('manual', ['phpunit', 'qunit', 'concat', 'uglify']);

};
