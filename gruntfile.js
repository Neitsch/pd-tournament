module.exports = function(grunt) {

  grunt.initConfig({

    surge: {
      'Your Project Name': {
        options: {
          // The path or directory to your compiled project
          project: 'build/',
          // The domain or subdomain to deploy to
          domain: 'curious-class.surge.sh'
        }
      }
    }
  });

  // Load in the grunt-surge plugin
  grunt.loadNpmTasks('grunt-surge'); 

  // Add a `grunt deploy` task that runs Surge
  grunt.registerTask('deploy', ['surge']);
};
