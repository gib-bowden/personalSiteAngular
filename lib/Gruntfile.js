module.exports = function (grunt) {
    
      grunt.loadNpmTasks('grunt-contrib-jshint');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-copy');
      grunt.loadNpmTasks('grunt-sass');
      grunt.loadNpmTasks('grunt-contrib-clean');
    
    
      grunt.initConfig({
        jshint: {
          options: {
            predef: ["document", "console", "firebase", "angular", "app"],
            esnext: true,
            globalstrict: true,
            globals: {}
          },
          files: ['../javascripts/**/*.js']
        },
        sass: {
          dist: {
            files: {
              '../styles/main.css': '../sass/main.scss'
            }
          }
        },
        watch: {
          options: {
            livereload: true,
          },
          sass: {
            files: ['../sass/**/*.scss'],
            tasks: ['sass']
          },
          javascripts: {
            files: ['../javascripts/**/*.js'],
            tasks: ['jshint']
          }
        },
        clean: {
          options: { force: true },
          public: ['../public']
        },
        copy: {
          dev: {
            files: [{
              expand: true,
              cwd: "../",
              src: [
                "index.html",
                "dist/app.js",
                "styles/**/*.css",
                "partials/*.html",
                "partials/**/*.html",
                "images/*",
                "assets/**/*",
                "javascripts/*.js",
                "javascripts/**/**/*.js",
                "javascripts/**/*.js",
                "lib/node_modules/angular/*.js",
                "lib/node_modules/angular-animate/*.js",
                "lib/node_modules/angular-route/*.js",
                "lib/node_modules/angular-sanitize/*.js",
                "lib/node_modules/angular-ui-bootstrap/dist/*.js",                
                "lib/node_modules/bootstrap/dist/css/bootstrap.min.css",
                "lib/node_modules/jquery/dist/jquery.min.js",
                "lib/node_modules/bootstrap/dist/js/bootstrap.min.js",
                "lib/node_modules/moment/*.js",
                "lib/node_modules/angular-moment/*.js",
                "lib/node_modules/bootstrap/dist/css/bootstrap.min.css",
                "lib/node_modules/jquery/dist/jquery.min.js",
                "lib/node_modules/bootstrap/dist/js/bootstrap.min.js",
                "lib/node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
                "lib/node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
                "lib/node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2"
    
              ],
              dest: "../public/"
            }]
          }
        }
      });
    
      grunt.registerTask('default', ['jshint', 'sass', 'watch']);
      grunt.registerTask('deploy', ['sass', 'copy']);
      grunt.registerTask('cleanit', ['clean']);
    };