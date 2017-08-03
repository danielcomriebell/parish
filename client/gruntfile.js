module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // sass: {
        //   dist{
        //     files{
        //       'css/style.css': 'sass/style.scss'
        //
        //     }
        //   }
        // }

        concat: {

            js: {
                src: [
                    // 'bower_components/angular/angular.min.js',
                    //  'bower_components/modernizer/modernizr.js',
                     'bower_components/jquery/dist/jquery.min.js',
                    //  'bower_components/angular-touch/angular-touch.min.js',
                    //  'bower_components/angular-sanitize/angular-sanitize.min.js',
                    //  'bower_components/angular-route/angular-route.min.js',
                    //  'bower_components/angular-resource/angular-resource.min.js',
                    //  'bower_components/angular-animate/angular-animate.min.js',
                    //  'bower_components/angular-touch/angular-touch.js',
                     'bower_components/angular-mailchimp/angular-mailchimp.js',
                     'bower_components/angular-loading-bar/build/loading-bar.js',
                     'app.js',
                     'routes.js',
                     'services.js',
                     'components/**/*.js',
                     'home/*.js',
                     'lookbooks/*.js',
                     'press/*.js',
                     'contact/*.js',
                     'about/*.js',
                     'archive/*.js',
                     'newsletter/*.js',
                     'terms/*.js'


                ],
                dest: 'concat.js'
            }
        },
        // uglify: {
        //   options: {
        //     report: 'min',
        //     mangle: false,
        //     compress: true
        //   },
        //   js: {
        //         files: {
        //             'app.min.js': ['concat.js']
        //         }
        //     }
        // },
        watch: {
                js: {
                  files: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'app.js',
                    'services.js',
                    'routes.js',
                    'home/*.js',
                    'lookbooks/*.js',
                    'press/*.js',
                    'contact/*.js',
                    'about/*.js',
                    'archive/*.js',
                    'components/**/*.js',
                    'newsletter/*.js',
                    'terms/*.js'
                  ],
                  // tasks: ['concat', 'uglify']
                tasks: ['concat']
                }
        }
        // compress: {
        //     dist: {
        //       options: {
        //         archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
        //       },
        //       files: [{
        //         src: [ 'index.html' ],
        //         dest: '/'
        //       }, {
        //         src: [ 'js/**' ],
        //         dest: 'js/'
        //       }, {
        //         src: [ 'data/**' ],
        //         dest: 'data/'
        //       }, {
        //         src: [ 'app.min.js' ],
        //         dest: '/'
        //       }]
        //     }
        //   }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat:js']);

        // grunt.registerTask('default', ['concat:js', 'uglify:js']);
};
// , 'compress:js'
