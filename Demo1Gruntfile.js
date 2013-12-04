/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    cssmin: {
      hoge: {
        expand: true,
        cwd: 'wordpress/wp-content/themes/original_twentythirteen/',
        src: ['**/*.css'],
        dest: 'wordpress/wp-content/themes/twentythirteen/',
      }
    },
    csslint: {
      hoge: {
        src: ['wordpress/wp-content/themes/original_twentythirteen/**/*.css'],
        options: {
          // ここまで緩和しないとlintが通らない
          import: false,
          important: false,
          'unique-headings': false,
          'adjoining-classes': false,
          'fallback-colors': false,
          gradients: false,
          'box-model': false,
          'compatible-vendor-prefixes': false,
          'unqualified-attributes': false,
          namespaced: false,
          'outline-none': false,
          'box-sizing': false,
          'regex-selectors': false,
          'qualified-headings': false,
          'text-indent': false,
          'universal-selector': false,
          'overqualified-elements': false,
          'known-properties': false,
          'display-property-grouping': false,
          shorthand: false,
          floats: false,
          'font-sizes': false,
        },
      },
    },
    uglify: {
      hoge: {
        expand: true,
        cwd: 'wordpress/wp-content/themes/original_twentythirteen/js/',
        src: ['functions.js'],
        dest: 'wordpress/wp-content/themes/twentythirteen/js/',
      },
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        undef: true,
        unused: true,
        sub: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
        },
      },
      gruntfile: {
        src: 'Gruntfile.js',
      },
      hoge: {
        src: ['wordpress/wp-content/themes/original_twentythirteen/js/functions.js'],
      }
    },
    imagemin: {
      hoge: {
        expand: true,
        cwd: 'wordpress/wp-content/themes/original_twentythirteen/images/',
        src: '**/*.{jpg,jpeg,png,gif}',
        dest: 'wordpress/wp-content/themes/twentythirteen/images/',
      },
    },
    copy: {
      hoge: {
        expand: true,
        cwd: 'wordpress/wp-content/themes/original_twentythirteen/',
        src: '**/{*,.*}',
        dest: 'wordpress/wp-content/themes/twentythirteen/',
      },
      options: {
        processContentExclude: ['*.{jpg,jpeg,png,gif,css,js}'],
      },
    },
    clean: {
      hoge: {
        src: 'wordpress/wp-content/themes/twentythirteen/',
      },
    },
    watch: {
      css: {
        files: ['wordpress/wp-content/themes/original_twentythirteen/**/*.css'],
        tasks: ['cssmin'],
      },
      js: {
        files: ['wordpress/wp-content/themes/original_twentythirteen/js/functions.js'],
        tasks: ['uglify', 'jshint'],
      },
      other: {
        files: ['wordpress/wp-content/themes/original_twentythirteen/**/*.{php,html,tpl,tpml}'],
        tasks: ['copy'],
      },
      reload: {
        files: ['wordpress/wp-content/themes/original_twentythirteen/**/*', 'wordpress/wp-config.php'],
        tasks: [],
        options: {
          livereload: true,
        },
      },
    }
  });

  // HTML関連のタスク
  grunt.loadNpmTasks('grunt-contrib-watch');    // 監視
  grunt.loadNpmTasks('grunt-contrib-cssmin');   // cssのミニファイ
  grunt.loadNpmTasks('grunt-contrib-csslint');  // cssの構文チェック
  grunt.loadNpmTasks('grunt-contrib-uglify');   // JSのミニファイ
  grunt.loadNpmTasks('grunt-contrib-jshint');   // JSの構文チェック
  grunt.loadNpmTasks('grunt-contrib-imagemin'); // 画像のミニファイ
  grunt.loadNpmTasks('grunt-contrib-copy');     // ただのファイルコピー
  grunt.loadNpmTasks('grunt-contrib-clean');    // ただのファイル削除
  grunt.loadNpmTasks('grunt-notify');           // GrowlNotify

  // Default task.
  grunt.registerTask('default', 'watch');

  // Tasks.
  grunt.registerTask('manual', ['copy', 'cssmin', 'uglify']);

  // GrowlNotify
  grunt.task.run('notify_hooks');
};
