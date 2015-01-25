var restify = require('restify');
 
var server = restify.createServer();
server.get(/\/html\/.*/, restify.serveStatic({
	'directory': '.',
	'default': 'index.html'
}));

server.listen(8081, function() {
  console.log('%s listening at %s', server.name, server.url);
});