module.exports = function (grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            jpg: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'source/jpg/',
                    src: ['*.{jpg,jpeg}'],
                    dest: 'build/jpg/'
                }]
            },
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'source/png/',
                    src: ['*.png'],
                    dest: 'build/png/'
                }]
            },
            gif: {
                options: {
                    interlaced: true
                },
                files: [{
                    expand: true,
                    cwd: 'source/gif/',
                    src: ['*.gif'],
                    dest: 'build/gif/'
                }]
            },
            svg: {
                options: {
                    svgoPlugins: [
                        {
                            /* merge multiple Paths into one */
                            mergePaths: false
                        }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'source/svg/',
                    src: ['*.svg'],
                    dest: 'build/svg/'
                }]
            }
        },
        grunticon: {
            production: {
                files: [{
                    expand: true,
                    cwd: 'source/grunticon',
                    src: ['*.svg'],
                    dest: "build/grunticon"
                }],
                options: {
                }
            }
        },
		base64: {
			production: {
				files: [{
                    expand: true,
                    cwd: 'source/base64',
                    src: ['*.*'],
                    dest: "build/base64"
                }]
			}
		},
		tinypng: {
			options: {
				apiKey: "R743RU9niVw81CRXfyu5F7nDfxOOwB_M",
				checkSigs: true,
				sigFile: 'build/tinypng/file_sigs.json',
				summarize: true,
				showProgress: true,
				stopOnImageError: true
			},
			production: {
                files: [{
                    expand: true,
                    cwd: 'source/tinypng',
                    src: ['*.png'],
                    dest: "build/tinypng"
                }],
			}
  		},
    });
    // Load the plugins
	grunt.loadNpmTasks('grunt-base64');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-tinypng');
    // Task(s)
    grunt.registerTask('default', ['base64', 'grunticon', 'imagemin', 'tinypng']);
};