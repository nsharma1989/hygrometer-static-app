module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  grunt.loadNpmTasks('grunt-targethtml');

  // Configurable paths for the application
  var appConfig = {
    app: 'public',
    dist: 'dist',
    tmp: '.tmp',
  };


  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // The actual grunt server settings

    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        base: 'public',
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
            open: true,
            keepalive: true,
            livereload: true,
            middleware: function (connect) {
                return [
                    connect.static('<%= yeoman.tmp %>'),
                    connect().use(
                        '/bower_components',
                        connect.static('./bower_components')
                    ),
                    connect().use(
                        '/public/scss',
                        connect.static('./public/scss')
                    ),
                    connect.static(appConfig.app)
                ];
            }
        }
      },
    },

    // sass: {
    //   dist: {
    //     files: {
    //       'public/css/style.css' : 'public/scss/style.scss'
    //     }
    //   }
    // },

    // concat: {
    //    dist: {
    //      src: [
    //        'scss/*.scss',
    //      ],
    //      dest: 'sass/build.scss',
    //    }
    //  },

// sass: {                                 // Task
//    dist: {     
//      files: {
//        'css/test.css':'sass/build.scss'
//      }

//    }
// },

    sass: {
      development: {
         
          files: {
            '<%= yeoman.app %>/css/style.css': '<%= yeoman.app %>/scss/style.scss',
          }
      },
      production: {
          
          files: {
            '<%= yeoman.app %>/css/style.css': '<%= yeoman.app %>/scss/style.scss',
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
          cwd: "<%= yeoman.app %>/jade",
          src: "**/*.jade",
          dest: "<%= yeoman.app %>",
          expand: true,
          ext: ".html"
        } ]
      }
    },

    watch: {
      project: {
        files: ['public/js/*.js', 'public/*.html', 'public/css/*.css', 'public/img/*.*'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      css: {
        files: ['<%= yeoman.app %>/scss/**/*.scss'],
        tasks: ['sass']
      },
      jade: {
        files: 'public/jade/**/*.jade',
        tasks: ['jade']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/**/*.js'],
        tasks: ['newer:jshint:all', 'newer:jscs:all'],
        options: {
            livereload: '<%= connect.options.livereload %>'
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,**/}*.html',
          '<%= yeoman.tmp %>/scss/{,*/}*.scss',
          '<%= yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
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
            '<%= yeoman.app %>/js/{,*/}*.js'
          ]
        }
      }
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
      }
    },

    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
        'public/{,**/}*.html',
        'public/css/{,*/}*.css',
        'public/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    },

    targethtml: {
      dist: {
        files: {
          'dist/index.html': '<%= yeoman.app %>/index.html'
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.tmp %>',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      serve: '<%= yeoman.tmp %>',
      distComplete: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.tmp %>',
          ]
        }]
      }
    },
    // Copies remaining files to places other tasks can use
    copy: {
        preDist: {
            files: [{
                expand: true,
                dest: '<%= yeoman.tmp %>',
                cwd: '<%= yeoman.app %>',
                src:
                'index.html'
            }]
        },
        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>',
                dest: '<%= yeoman.dist %>',
                src: [
                    '*.{ico,png,txt}',
                    '*.html',
                    'images/{,*/}*.{webp}',
                    'styles/fonts/{,*/}*.*'
                ]
            }, {
                expand: true,
                cwd: '<%= yeoman.tmp %>/images',
                dest: '<%= yeoman.dist %>/images',
                src: ['generated/*']
            }, {
                expand: true,
                cwd: 'bower_components/bootstrap/dist',
                src: 'fonts/*',
                dest: '<%= yeoman.dist %>'
            }]
        },
        styles: {
            expand: true,
            cwd: '<%= yeoman.app %>/scss',
            dest: '<%= yeoman.tmp %>/styles/',
            src: '{,*/}*.css'
        }
    },

    htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: ['*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

  });

  grunt.registerTask('default', [
   // 'jade',
   // 'sass',
   // 'connect',
   // 'watch',
    'jshint',
    //'uglify',
   // 'cssmin',
   // 'karma'
  ]);

   grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
          'clean:serve',
          'sass:development',
          'connect:livereload',
          'watch'
        ]);
    });
  grunt.registerTask('build', 'Builds the server based distribution, Available: uat, dist', function(target, targetTestMode, skipTest) {
        var build = 'dist',
            testMode = '';

        if (!target) {
            grunt.log.warn('No target mode, default to \''+ build + '\'');
        } else {
            target = target.toLowerCase();

            if (!isSupportedEnv(target)) {
                return grunt.util.error('Unsupported distribution: \'' + target + '\'');
            }

            build = target;
        }

        if (targetTestMode) {
            if (!isTestModeSupported(targetTestMode)) {
                return grunt.util.error('Unsupported OS: \'' + targetTestMode + '\'');
            }

            testMode = targetTestMode.toLowerCase();
        }

        grunt.task.run([
          'clean:dist',
          'copy:preDist',
          'jade:compile',
          'sass:production',
          'cssmin',
          'uglify',
          'targethtml:' + build,
          'htmlmin',
          'clean:distComplete',
        ]);
    });

};