module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'public',
          hostname: 'localhost',
          open: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/css/style.css' : 'public/scss/style.scss'
        }
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files:
        [ {
          cwd: "public/jade",
          src: "**/*.jade",
          dest: "public/",
          expand: true,
          ext: ".html"
        } ]
      }
    },
    watch: {
      project: {
        files: ['public/js/*.js', 'public/*.html', 'public/css/*.css', 'public/img/*.*'],
        options: {
          livereload: true
        }
      },
      css: {
        files: 'public/scss/**/*.scss',
        tasks: ['sass']
      },
      jade: {
        files: 'public/jade/**/*.jade',
        tasks: ['jade']
      }
    },
    jshint: {
        src: [
          'Gruntfile.js',
          '/public/**/{,*/}*.js'
        ]
    },
    cssmin: {
      dist: {
        files: {
          'dist/styles/main.css': [
            '.tmp/styles/{,*/}*.css'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/scripts/scripts.js': [
            'dist/scripts/scripts.js'
          ]
        }
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
      }
    },
  });

  grunt.registerTask('default', [
    'jade',
    'sass',
    'connect',
    'watch',
    'jshint',
    'uglify',
    'cssmin',
    'karma'
  ]);
};