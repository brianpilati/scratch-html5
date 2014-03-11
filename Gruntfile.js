module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    karma: {
      unit: {
        configFile: 'config/karma_grunt.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      },
      built: {
        configFile: 'config/karma_grunt.conf.js'
      },
      watch: {
        configFile: 'config/karma_grunt.conf.js',
        singleRun: false,
        autoWatch: true,
        browsers: ['PhantomJS']
      }
    },
    pkg: grunt.file.readJSON('package.json'),
  });

  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('test', ['karma:unit']);
};
