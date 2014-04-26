/**
* Dependencies.
*/
var config = require('./config/settings')(),
    assets = require('./assets'),
    routes = require('./config/routes')(),
    server = require('hapi').createServer('0.0.0.0', config.port, config.hapi.options),
    plugins = require('./config/plugins')(server);

server.route(routes);
server.start();
console.log('Server started at: ' + server.info.uri);