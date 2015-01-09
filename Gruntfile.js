module.exports = function (grunt){

	//Projet configuration
	grunt.initConfig({
		//Plugin qu'on veut configurer
		watch : {
			less : {
				files : ['app/styles/*.less'],
				tasks : ['css']
			},

			livereload: {
				files: ['app/index.html','app/styles/*.css'],
				options : {
					livereload: true
				}
			}
		},


		less : {
			//Cible
			dev : {
				files : {
					"app/styles/main.css": "app/styles/main.less"
				}
			}
		},

		autoprefixer : {
			dev : {
				files : {
					"app/styles/main.css": "app/styles/main.css"
				}
			}
		},

		connect : {
			server : {
				options : {
					base : ['app','.tmp'],
					livereload : 35729
				}
			}
		},

		clean : [".tmp"]

	});

	//Load the plugin(s)
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');

	//Default task(s)
	grunt.registerTask('default',['server']);
	grunt.registerTask('css',['less','autoprefixer']);
	grunt.registerTask('server',['clean', 'css', 'connect', 'watch']);

}