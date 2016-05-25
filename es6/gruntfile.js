module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
        options: {
            sourceMap: false,
            presets: ['es2015']
        },
        dist: {
            files: {
                'js/script.js': 'js/script.es6.js'
            }
        }
    },

    watch: {
      babel: {
        files: ['js/*.js'],
        tasks: ['babel']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel']);

};