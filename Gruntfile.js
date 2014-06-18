module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['js/libs/jquery.js', 'js/common.js'],
        dest: 'js/build/global.min.js'
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 30 version', 'ie 8', 'ie 9']
      },
       single_file: {
            src: 'css/style.css',
            dest: 'css/style.css'
          },
      },

      watch: {
        scripts: {
          files: ['js/**/*.js'],
          tasks: ['newer:uglify'],
          options: {
            spawn: false,
          },
        },
        src: {
            files: ['css/style.css'],
            tasks: ['autoprefixer'],
          },
      },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  // Default task(s).
  grunt.registerTask('default', ['autoprefixer', 'uglify', 'watch']);
  
};