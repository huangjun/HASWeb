// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
        js: ['js/ng-controllers.js'],
        css: [],
        bower_js: ['bower_components/angular/angular.js',
    	           'bower_components/angular-route/angular-route.js',
    	           'bower_components/angular-resource/angular-resource.js'],
        bower_css: ['bower_components/bootstrap/dist/css/bootstrap.css']
    },
    production: {
    	js: ['js/scrpts.js'],
        css: [],
    	bower_js: ['bower_components/angular/angular.min.js',
    	           'bower_components/angular-route/angular-route.min.js',
    	           'bower_components/angular-resource/angular-resource.min.js'],
    	bower_css: ['bower_components/bootstrap/dist/css/bootstrap.min.css']
    }
};