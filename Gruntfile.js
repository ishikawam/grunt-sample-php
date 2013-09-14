/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
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
      wordpress: {
        dir: 'wordpress/*.php'
      },
      options: {
        bin: 'phpcs',
        standard: 'PEAR',
        severity: 6
      }
    },
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
        cwd: 'wordpress/wp-content/themes/original_twentythirteen/',
        src: ['functions.js'],
        dest: 'wordpress/wp-content/themes/twentythirteen/',
      }
    },
    jshint: {
      lint: {
        src: ['wordpress/wp-content/themes/original_twentythirteen/js/functions.js'],
      }
    },
    watch: {
      php: {
        files: ['**/*.php'],
        tasks: ['phpunit', 'phplint', 'phpcs'],
      },
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

  // PHP関連のタスク
  grunt.loadNpmTasks('grunt-phpunit');
  grunt.loadNpmTasks('grunt-phplint');
  grunt.loadNpmTasks('grunt-phpcs');

  // HTML関連のタスク
  grunt.loadNpmTasks('grunt-contrib-cssmin');   // cssのミニファイ
  grunt.loadNpmTasks('grunt-contrib-csslint');  // cssの構文チェック
  grunt.loadNpmTasks('grunt-contrib-uglify');   // JSのミニファイ
  grunt.loadNpmTasks('grunt-contrib-jshint');   // JSの構文チェック

  // Default task.
  grunt.registerTask('default', 'watch');
  grunt.registerTask('manual', ['phpunit', 'phplint', 'phpcs', 'cssmin', 'uglify']);

};
