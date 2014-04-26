// This is the assets controller. Goal is to serve css, js, partials, images, or bower packages.
module.exports = {
    partials: {
        handler: {
            directory: { path: './views/partials' }
        },
        app: {
            name: 'partials'
        }
    },
    images: {
        handler: {
            directory: { path: './images' }
        },
        app: {
            name: 'images'
        }
    },
    css: {
        handler: {
            directory: { path: './css' }
        },
        app: {
            name: 'css'
        }
    },
    js: {
        handler: {
            directory: { path: './js' }
        },
        app: {
            name: 'js'
        }
    },
    bower: {
        handler: {
            directory: { path: './bower_components' }
        },
        app: {
            name: 'bower'
        }
    }
};