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
                files: {
                    'dist/css/workflow-theme-mobile.min.css': [
                        'dist/css/workflow-theme-mobile.css'
                    ]
                }
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