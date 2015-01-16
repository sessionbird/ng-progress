'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    ngprogress: {
      // configurable paths
      lib: 'lib',
      dist: 'dist'
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= ngprogress.lib %>/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= ngprogress.dist %>/*'
          ]
        }]
      },
      server: '.tmp'
    },

    // SASS/ SCSS
    sass: {
      dist: {
        files: [{
          '<%= ngprogress.dist %>/css/barber-shop.css': 'scss/progress/barber-shop.scss',
          '<%= ngprogress.dist %>/css/big-counter.css': 'scss/progress/big-counter.scss',
          '<%= ngprogress.dist %>/css/bounce.css': 'scss/progress/bounce.scss',
          '<%= ngprogress.dist %>/css/center-atom.css': 'scss/progress/center-atom.scss',
          '<%= ngprogress.dist %>/css/center-circle.css': 'scss/progress/center-circle.scss',
          '<%= ngprogress.dist %>/css/center-simple.css': 'scss/progress/center-simple.scss',
          '<%= ngprogress.dist %>/css/corner-indicator.css': 'scss/progress/corner-indicator.scss',
          '<%= ngprogress.dist %>/css/fill-left.css': 'scss/progress/fill-left.scss',
          '<%= ngprogress.dist %>/css/flash.css': 'scss/progress/flash.scss',
          '<%= ngprogress.dist %>/css/flat-top.css': 'scss/progress/flat-top.scss',
          '<%= ngprogress.dist %>/css/loading-bar.css': 'scss/progress/loading-bar.scss',
          '<%= ngprogress.dist %>/css/mac-osx.css': 'scss/progress/mac-osx.scss',
          '<%= ngprogress.dist %>/css/minimal.css': 'scss/progress/minimal.scss'
        },{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: '<%= ngprogress.dist %>/css',
          ext: '.css'
        }],
        options: {}
      }
    },

    jsvalidate: {
      options:{
        globals: {},
        esprimaOptions: {},
        verbose: false
      },
      targetName:{
        files:{
          src:['<%=jshint.all%>']
        }
      }
    }
  });

  grunt.registerTask('lint', [
    'jsvalidate', 'jshint'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'sass'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
