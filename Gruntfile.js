module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        project: {
            public   : ['public'],
            sass     : ['scss/main.scss'],
        },

        sass: {
            dev: {
                options: {
                    outputStyle: 'compressed',
                    compass: false
                },
                files: {
                    '<%= project.public %>/css/main.min.css':'<%= project.sass %>'
                }
            }
        },

        watch: {
            sass: {
                files: 'scss/**/*.{scss,sass}',
                tasks: ['sass:dev']
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    // Register task(s).
    grunt.registerTask('build', ['sass:dev']);
    grunt.registerTask('default', ['build', 'watch']);

};
