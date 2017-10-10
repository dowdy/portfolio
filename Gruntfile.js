
module.exports = function(grunt){
	//var packageJSON = grunt.file.readJSON('package.json');
	//Package.json uses enforces semver for its version string, we just want to use major minor for our labelling
	//packageJSON.version = packageJSON.version.substring(0, packageJSON.version.lastIndexOf('.'));
	grunt.initConfig({

		clean : {
			init : ['dest/'],
			tidy : [
			'dest/img/*', '!dest/img/*.jpg','!dest/img/*.png','!dest/img/*.gif',
			'dest/css/*', '!dest/css/style.min.css',
			'dest/*.html', '!dest/index.html',
			'dest/*.php', '!dest/index.php','!dest/quickmail.php',
			'dest/js/*','!dest/js/scripts.min.uglify.js','!dest/js/scripts.min.js',
			'tmp'
			]     
		},
		copy: {
			build : {
				expand: true,
                cwd: 'src',
                src: ['js/*.js','css/*.css','fonts/**','less/*.less','less/fa/*.less','less/bootstrap/*.less','less/bootstrap/mixins/*.less','img/**','index.html','index.php','quickmail.php',
                ],
                dest: 'tmp/'
			},
			prod : {
				expand: true,
                cwd: 'tmp',
                src: ['js/*.js','css/*.css','img/**','fonts/**','index.html','index.php','quickmail.php',
                ],
                 dest: 'dest/'
			}
		},
		less: {
			bootstrap:{
				options: {
					paths: ['tmp/less/'],
					sourceMap: false
				},
				files: {
					'tmp/css/bootstrap.css': 'tmp/less/bootstrap/bootstrap.less',
					'tmp/css/font-awesome.css': 'tmp/less/fa/font-awesome.less'

				}
			},
			development: {
				options: {
					paths: ['tmp/less/'],
					sourceMap: false,
					compress:false
				},
				files: {
					'tmp/css/main.css': 'tmp/less/main.less'
				}
			}
		},
		concat: {
			scripts:{
         	src: [
         	'tmp/js/zepto.min.js',
         	'tmp/js/imagesloaded.pkgd.min.js',
         	'tmp/js/demo.js',
          	'tmp/js/modernizr-custom.js',
          	'tmp/js/jquery.min.js',
          	'tmp/js/stick.js',
          	'tmp/js/main.js',
          	],
          	dest: 'tmp/js/scripts.min.js'
      		},
      		css:{
      		src: [
      		'tmp/css/bootstrap.css',
      		'tmp/css/font-awesome.css',
      		'tmp/css/main.css'
			],
      		dest: 'tmp/css/style.css'
      	}
  		},
  		uglify: {
  			options: {
  				mangle: true
  			},
  			prod: {
  				files: {
  				'tmp/js/scripts.min.uglify.js': ['tmp/js/scripts.min.js'],  
    			}
			}
		},
		cssmin: {
			prod: {
				files: [{
					expand: true,
					cwd: 'tmp/css/',
					src: ['style.css'],
					dest: 'tmp/css/',
					ext: '.min.css'
				}]
			}
		}
	});
	//Do not use hashres task. It will interfer with static caching
	grunt.registerTask('default', ['clean:init','copy:build','less:bootstrap',/*'less:development',*/'concat','uglify','cssmin','copy:prod','clean:tidy']);
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-less');
}; 