var requireDirectory = require('require-directory')
var libs = requireDirectory(module, './lib')
global.Mugi = libs.Mugi;
global.Express = libs.Express;
module.exports = function (grunt) {
	grunt.initConfig({
		bundler: {
			options: {
			  // Task-specific options go here. 
			},
			your_target: {
			  // Target-specific file lists and/or options go here. 
			},
		}
	})
	grunt.registerTask('default', 'default task description', function(){
		Mugi.logger.info('hello world');
	});
	

}