/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    cssmin: {
      minify: {
        expand: true,
        cwd: 'wordpress/wp-content/themes/original_twentythirteen/',
        src: ['**/*.css'],
        dest: 'wordpress/wp-content/themes/twentythirteen/',
      }
    },
    csslint: {
      lint: {
        src: ['wordpress/wp-content/themes/original_twentythirteen/**/*.css'],
      }
    },
    uglify: {
      minify: {
        expand: true,
        cwd: 'wordpress/wp-content/themes/original_twentythirteen/js/',
        src: ['functions.js'],
        dest: 'wordpress/wp-content/themes/twentythirteen/js/',
      }
    },
    jshint: {
      lint: {
        src: ['wordpress/wp-content/themes/original_twentythirteen/js/functions.js'],
      }
    },
    watch: {
      css: {
        files: ['wordpress/wp-content/themes/original_twentythirteen/**/*.css'],
        tasks: ['cssmin', 'csslint'],
      },
      js: {
        files: ['wordpress/wp-content/themes/original_twentythirteen/js/functions.js'],
        tasks: ['uglify', 'jshint'],
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // HTML関連のタスク
  grunt.loadNpmTasks('grunt-contrib-cssmin');   // cssのミニファイ
  grunt.loadNpmTasks('grunt-contrib-csslint');  // cssの構文チェック
  grunt.loadNpmTasks('grunt-contrib-uglify');   // JSのミニファイ
  grunt.loadNpmTasks('grunt-contrib-jshint');   // JSの構文チェック

  // Default task.
  grunt.registerTask('default', 'watch');
  grunt.registerTask('manual', ['cssmin', 'uglify']);

};
