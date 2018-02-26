module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dist: {
                options: {
                    paths: 'dist/css',
                    sourceMap: true
                },
                files: {
                    'dist/css/workflow-theme-mobile.css': 'less/workflow-theme-mobile.less'
                }
            }
        },
        cssmin: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css',
                }],

            }

        },
        concat: {
            dist: {
                src: [
                    'js/modal.js',
                    'js/dropdown.js',
                    'js/tooltip.js',
                    'js/popver.js',
                    'js/bootstrap-datepicker.js',
                    'js/bootstrap-datepicker.zh-CN.min.js',
                    'js/bootstrap-select.js',
                    'js/bootstrap-select-zh_CN.min.js'
                ],
                dest: 'dist/js/workflow-theme-mobile.js',
            },
        },
        uglify: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/js/workflow-theme-mobile.min.js': [
                        'dist/js/workflow-theme-mobile.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['cssmin:dist', 'concat:dist', 'uglify:dist']);
    grunt.registerTask('less', ['less:dist']);
}