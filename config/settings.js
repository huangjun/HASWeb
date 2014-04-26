/**
* Dependencies.
*/
var path = require('path'),
rootPath = path.normalize(__dirname + '/..');

var swig = require('swig');
swig.setDefaults({ varControls: ['{$', '$}'] });

// Defaults that you can access when you require this config.
module.exports = function() {
	return {
	    root: rootPath,
	    port: parseInt(process.env.PORT, 10) || 3000,
	    hapi: {
	        options: {
	            views: {
	                path: './views',
	                engines: {
	                    html: 'swig'
	                }
	            }
	        }
	    }
	};
};